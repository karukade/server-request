<?php

function ErrorHandler() {
  set_error_handler(function($error_no, $error_msg, $error_file, $error_line, $error_vars) {
    throw new ErrorException($error_msg, 0, $error_no, $error_file, $error_line);
  });
  
  set_exception_handler(function($throwable) {
    echo '{"status": "error"}';
    send_error_log($throwable);
  });

  register_shutdown_function(function() {
    $error = error_get_last();
    if ($error === null) {
        return;
    }
    // fatal error の場合はすでに何らかの出力がされているはずなので、何もしない
    send_error_log(new ErrorException($error['message'], 0, 0, $error['file'], $error['line']));
  });
}

function send_error_log($throwable) {
  file_put_contents( './error_log.txt', $throwable->__toString(), FILE_APPEND | LOCK_EX);
}