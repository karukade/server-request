<?php
require "CreateIssue.php";
require_once "ErrorHandler.php";

function getRequest() {
  $content_type = explode(';', trim(strtolower($_SERVER['CONTENT_TYPE'])));
  $media_type = $content_type[0];
  $request = NUlL;

  if ($_SERVER['REQUEST_METHOD'] == 'POST' && $media_type == 'application/json') {
    $request = json_decode(file_get_contents('php://input'), true);
  }

  return $request;
}


$req = getRequest();

if ($req && isset($req["url"])) {
  header("Content-Type: application/json; charset=UTF-8");
  ErrorHandler();
  $createIssue = new CreateIssue();
  $createIssue->create($req);
  echo '{"status": "success"}';
}

?>