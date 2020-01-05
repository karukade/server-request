<?php

class GenHolidayCsv{
  private $HOLIDAY_URL = "https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv";
  private $CURRENT_YEAR;

  function __construct() {
    $this->CURRENT_YEAR = intval(date("Y"));
  }

  private function httpGet($url) {
    $option = [
      CURLOPT_RETURNTRANSFER => true, // 文字列として返す
      CURLOPT_TIMEOUT => 10, // タイムアウト時間 (秒)
    ];

    $ch = curl_init($url);
    curl_setopt_array($ch, $option);

    $data = curl_exec($ch);
    $info = curl_getinfo($ch);
    $errorNo = curl_errno($ch);

    if ($errorNo !== CURLE_OK) {
        return [];
    }

    if ($info['http_code'] !== 200) {
        return false;
    }
    return $data;
  }

  private function csvToArray($data) {
      // CSV が SJIS なので文字コードを変換しておく
    $data = mb_convert_encoding($data, 'UTF-8', 'SJIS');
    $lines = explode("\n", $data);
    $holidays = [];
    foreach ($lines as $line) {
        $holidays[] = trim(explode(",", $line)[0]);
    }
    //ヘッダーの削除
    array_splice($holidays, 0, 1);
    return $holidays;
  }

  private function filterByCurrentYear($holiday) {
    $datetime = new DateTime($holiday);
    $y = (int)$datetime->format("Y");
    return $y == $this->CURRENT_YEAR || $y == ($this->CURRENT_YEAR + 1);
  }
  
  private function addYearEndAndStart($holidays) {
    $currentyear = $this->CURRENT_YEAR;
    $date = strtotime("$currentyear/12/29");
    for ($j = 0; $j < 6; $j++) {
      $dateStr = date('Y/m/d', $date);
      $holidays[] = $dateStr;
      $date = strtotime("+1 day", $date);
    }
    var_dump($holidays);
    return $holidays;
  }

  private function loadHolidays() {
    // HTTP GET で取得
    $data = $this->httpGet($this->HOLIDAY_URL);
    if (!$data) {
        throw new Exception("祝日データ取得に失敗しました。");
    }
    $holidays = $this->csvToArray($data);
    $holidays = array_filter($holidays,"GenHolidayCsv::filterByCurrentYear");
    $holidays = $this->addYearEndAndStart($holidays);

    return $holidays;
  }

  private function getW($date_str) {
    $datetime = new DateTime($date_str);
    return (int)$datetime->format('w');
  }
  
  private function parseHolidays($holidays) {
   return array_filter($holidays, function($holiday) {
     $w = $this->getW($holiday);
     return $w == 2 || $w == 5;
   });
  }

  private function formatHolidays($holidays) {
    return array_map(function($holiday) {
      $date = strtotime($holiday);
      return date("Y-m-d", $date);
    }, $holidays);
  }

  public function genHolidayList() {
    $holidays = $this->loadHolidays();
    $parsed = $this->parseHolidays($holidays);
    $formated = $this->formatHolidays($parsed);
    $fp = fopen(dirname(__FILE__) . "/" . date('Y') . ".csv", "w");
    fputcsv($fp, $formated);
    fclose($fp);
  }
}