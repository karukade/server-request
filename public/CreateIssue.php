<?php

require "vendor/autoload.php";
require_once "PickDate.php";
require_once "putcsv.php";

use Itigoppo\BacklogApi\Backlog\Backlog;
use Itigoppo\BacklogApi\Connector\ApiKeyConnector;

class CreateIssue{
  private $space_id = 'kaaade';
  private $api_key = 'J6v6u0TBQCRxINVhbuZu7UdYOrDSWCbfxFefsDmDbB5Nl1vfbZytH63ceIDSU6Nu';
  private $project_id = 57437;
  private $backlog;
  private $pubdate;
  private $issueType;
  private $priority;
  private $custumFieldId;


  function __construct() {
    $this->backlog = new Backlog(new ApiKeyConnector($this->space_id, $this->api_key, 'com'));
    $pickDate = new PickDate();
    $this->pubdate = $pickDate->getPubDate(new DateTimeImmutable());
    $this->priority = 1;
  }

  private setIssueTypeParams($type) {
    $this->issueType = $type === "webdav" ? 265953 : 265952;
    $custumFieldName = "customField_";
    if ($type === "webdav") {
      $this->custumFieldId = [
        "requester" => $custumFieldName . 20193,
        "requesterMail" => $custumFieldName . 20194,
        "requesterDepartment" => $custumFieldName . 20196,
        "url" => $custumFieldName . 20195,
        "ftp" => $custumFieldName . 20228,
        "basic" => $custumFieldName . 20229,
        "limit" => $custumFieldName . 20230
      ];
    } else {
      $this->custumFieldId = [
        "requester" => $custumFieldName . 20193,
        "requesterMail" => $custumFieldName . 20194,
        "requesterDepartment" => $custumFieldName . 20196,
        "url" => $custumFieldName . 20195,
        "ftp" => $custumFieldName . 20228,
        "basic" => $custumFieldName . 20229,
        "limit" => $custumFieldName . 20230
      ];
    }
  }

  private function createParentIssueIfNeed() {
    $parent = $this->backlog->issues->load([
      "projectId[]" => $this->project_id,
      "dueDateUntil" => $this->pubdate,
      "parentChild" => 4
    ]);
    if (!empty($parent)) {
      return $parent[0]->id;
    }
    $parent = $this->backlog->issues->create(
      $this->project_id,
      $this->pubdate . "発行",
      $this->issueType, //課題のタイプ「タスク」
      $this->priority,
      [
        "dueDate" => $this->pubdate
      ]
    );
    return $parent->id;
  }

  private function issue($summary, $params) {
    $issue = $this->backlog->issues->create(
      $this->project_id,
      $summary,
      $this->issueType, //課題のタイプ「タスク」
      $this->priority,
      $params
    );
  }

  private function createParams($params, $parentId) {
    return [
      $this->custumFieldId["requester"] => $params["requester"],
      $this->custumFieldId["requesterMail"] => $params["requesterMail"],
      $this->custumFieldId["requesterDepartment"] => $params["requesterDepartment"],
      $this->custumFieldId["url"] => $params["url"],
      $this->custumFieldId["ftp"] => $params["ftp"],
      $this->custumFieldId["basic"] => $params["basic"],
      $this->custumFieldId["limit"] => $params["limit"],
      "parentIssueId" => $parentId,
      "dueDate" => $this->pubdate
    ];
  }

  public function create($reqParams) {
   $parentId = $this->createParentIssueIfNeed();
   $params = $this->createParams($reqParams, $parentId);
   $this->issue($reqParams["jobname"], $params);
   putcsv\write($reqParams);
  }
}