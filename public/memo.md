- [ライブラリ](https://github.com/itigoppo/backlog-api)
- [課題の追加](https://developer.nulab.com/ja/docs/backlog/api/2/add-issue/#%E8%AA%B2%E9%A1%8C%E3%81%AE%E8%BF%BD%E5%8A%A0)

```php
$backlog->issues->create(
  int $project_id, //プロジェクトID
  string $summary, //課題の件名
  int $issue_type_id, //課題の種別のID
  int $priority_id //課題の優先度のID
  [, array $form_options = [
    int parentIssueId, //課題の親課題のID
    string startDate, //課題の開始日 (yyyy-MM-dd)
    string dueDate //課題の期限日 (yyyy-MM-dd)
  ]]
);
```

- [課題一覧の取得](https://developer.nulab.com/ja/docs/backlog/api/2/get-issue-list/#%E8%AA%B2%E9%A1%8C%E4%B8%80%E8%A6%A7%E3%81%AE%E5%8F%96%E5%BE%97)

```php
backlog->issues->load([
  int projectId,
  int parentChild, //4: 親課題
  int dueDateUntil //課題期限日
]);
```