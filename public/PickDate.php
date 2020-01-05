<?php

require_once "GetHoliday.php";

class PickDate{
  private $holidays;

  function __construct() {
    $this->holidays = $this->readHolidayCsv();
  }
  
  private function format($date) {
    return $date->format('Y-m-d');
  }

  private function readHolidayCsv() {
    $fileName = dirname(__FILE__) . "/" . date("Y") . ".csv";
    if (!file_exists($fileName)) {
      $genHolidayCsv = new GenHolidayCsv();
      $genHolidayCsv->genHolidayList();
    }
    $file = new SplFileObject($fileName);
    $file->setFlags(SplFileObject::READ_CSV);
    foreach ($file as $fields) {
        if (!is_null($fields[0])) {
          $records = $fields;
        }
    }
    return $records;
  }

  private function isFri($w) {
    return $w == 0 || $w == 1 || $w == 5 || $w == 6;
  }

  private function retryIfNeed($pubDate) {
    if (in_array($pubDate, $this->holidays)) {
      $date = new DateTimeImmutable($pubDate);
      return $this->getPubDate($date, true);
    } else {
      return $pubDate;
    }
  }

  private function getNextStr($w, $isRetry = false) {
    $isFri = $isRetry ? !$this->isFri($w) : $this->isFri($w);
    return $isFri ? "next Friday" : "next Tuesday";
  }
  
  public function getPubDate($date, $isRetry = false) {
    $w = $date->format("w");
    $now = $date->format("U");
    $nextStr = $this->getNextStr($w, $isRetry);
    $pubDate = date("Y-m-d",strtotime($nextStr, $now));
    return $this->retryIfNeed($pubDate);
  }
}