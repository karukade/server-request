<?php

namespace putcsv;

function write($params) {
  $filename = dirname(__FILE__) . "/" . date('Y') . "_directories" . ".csv";
  if (!file_exists($filename)) {
    $fp = fopen($filename, "a");
    fputcsv($fp, ["案件名", "依頼者", "部署名", "mail", "URL", "FTP", "basic", "使用期限"]);
    fputcsv($fp, $params);
    fclose($fp);
    return;
  }
  $fp = fopen($filename, "a");
  fputcsv($fp, $params);
  fclose($fp);
}