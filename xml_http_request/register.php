<?php
header('Content-type: text/plain');
header('Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT');

echo ":: data received via GET ::\n\n";
print_r($_GET);

echo "\n\n:: Data received via POST ::\n\n";
print_r($_POST);

echo "\n\n:: Data received as \"raw\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) {
    echo $HTTP_RAW_POST_DATA;
} else {
    var_dump(file_get_contents("php://input"));
}

echo "\n\n:: Files received ::\n\n";
print_r($_FILES);