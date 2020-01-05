<?php
function sendMail($to) {
  mb_language("Japanese");
  mb_internal_encoding("UTF-8");
  $result = mb_send_mail($to, "テストメール", "これはテストです。", "From: from@example.com" . "\r\n");
  var_dump($result);
}

sendMail("gaaadaaa16@gmail.com");