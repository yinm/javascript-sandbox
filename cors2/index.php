<?php
// https://developer.mozilla.org/ja/docs/Web/HTTP/Server-Side_Access_Control
$allowedUri = 'http://172.20.10.4:24473';

if ($_SERVER['HTTP_ORIGIN'] === $allowedUri) {
    header("Access-Control-Allow-Origin: {$allowedUri}");
    header('Content-Type: text/plain');
    echo 'access successed!!!';
} else {
    header('Content-Type: text/html');
    echo '<html>';
    echo '<head>';
    echo '  <title>Another Resource</title>';
    echo '</head>';
    echo '<body>';
    echo '  いい感じのアクセスができなかったよ';
    echo '</body>';
    echo '</html>';
}
