<?php

error_reporting(E_ALL);

define('DS', '/');
define('API_ROOT', __DIR__);
define('API_ENTITIES', 'entities');

if (!session_id()) {
    session_start();
}

$status = false;
$errors = [];
$responce = [];

$parse_url = parse_url($_SERVER["REQUEST_URI"]);
$path = preg_split('/\/+/', $parse_url['path'], -1, PREG_SPLIT_NO_EMPTY);

# Params
$controller = isset($path[1]) ? $path[1] : '';
$action = isset($path[2]) ? $path[2] : '';

$filename = sprintf('%s.json', $controller);

if (file_exists(API_ROOT.DS.API_ENTITIES.DS.$filename))
{
    $status = true;
    $responce['data'] = file_get_contents(API_ROOT.DS.API_ENTITIES.DS.$filename);
}
else {
    $errors['nofile'] = true;
}

$responce['status'] = $status;
$responce['errors'] = $errors;

exit(json_encode($responce, 64 | 256));
