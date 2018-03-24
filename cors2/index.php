<?php
// https://developer.mozilla.org/ja/docs/Web/HTTP/Server-Side_Access_Control
$allowedUri = 'http://172.20.10.4:24473';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header("Access-Control-Allow-Origin: {$allowedUri}");
    header('Access-Control-Allow-Credentials: true');
    header('Cache-Control: no-cache');
    header('Pragma: no-cache');
    header('Content-Type: text/plain');

    // First see if There is a Cookie
    if (!isset($_COOKIE['pageAccess'])) {
        setcookie('pageAccess', 1, time()+2592000);
        echo 'I do not know you or anyone like you so I am going to make you with a Cookie :-)';
    } else {
        $accesses = $_COOKIE['pageAccess'];
        setcookie('pageAccess', ++$accesses, time()+2592000);
        echo 'Hello - I know you or something a lot like you!';
        echo "You have been to {$_SERVER['SERVER_NAME']}, ";
        echo 'at least ', $accesses - 1, 'time(s) before!';
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    if ($_SERVER['HTTP_ORIGIN'] === $allowedUri) {
        header("Access-Control-Allow-Origin: {$allowedUri}");
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age; 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
    } else {
        header('HTTP/1.1 403 Access Forbidden');
        header('Content-Type: text/plain');
        echo 'You cannot repeat this request';
    }
} else {
    die('This HTTP Resource can ONLY be accessed with GET or OPTIONS');
}