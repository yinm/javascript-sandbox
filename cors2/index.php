<?php
// https://developer.mozilla.org/ja/docs/Web/HTTP/Server-Side_Access_Control
$allowedUri = 'http://172.20.10.4:24473';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header("Access-Control-Allow-Origin: {$allowedUri}");
    header('Content-Type: text/plain');
    echo 'GETしたよ';
} elseif ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    if ($_SERVER['HTTP_ORIGIN'] === $allowedUri) {
        header("Access-Control-Allow-Origin: {$allowedUri}");
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        header('Access-Control-Allow-Headers: X-YINM-TEST');
        header('Access-Control-Max-Age: 1728000');
        header('Access-Control-Allow-Credentials: true');
        header("Content-Length: 0");
        header("Content-Type: text/plain");
    } else {
        header('HTTP/1.1 403 Access Forbidden');
        header('Content-Type: text/plain');
        echo 'You cannot repeat this request';
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_SERVER['HTTP_ORIGIN'] === $allowedUri) {
        $postData = file_get_contents('php://input');
        header("Access-Control-Allow-Origin: {$allowedUri}");
        header('Access-Control-Allow-Credentials: true');
        header('Content-Type: text/plain');
        print_r($postData);
        echo 'POSTしたよ';
    } else {
        die("POSTing Only Allowed from {$allowedUri}");
    }
} else {
    die("No Other Methods Allowed");
}
