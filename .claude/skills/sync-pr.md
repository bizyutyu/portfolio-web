# sync-pr

PR body・関連 Issue body を最新の差分に基づいて更新し、Issue に changelog コメントを投稿する。
PR 作成直後または `git push` 後に実行する。

## 手順

以下をすべて Bash ツールで実行すること。

### 1. コンテキスト取得

```bash
# 現在のブランチ名から issue 番号を取得
git branch --show-current
# 例: feature/21 → issue番号は 21

# main との差分コミット一覧を取得
git log origin/main...HEAD --oneline

# 変更ファイル一覧を取得
git diff origin/main...HEAD --stat
```

### 2. PR 情報の取得

```bash
gh pr view --json number,title,body,url
```

PR が存在しない場合は「PR がまだ作成されていません」と伝えてスキルを終了する。

### 3. PR body の更新

以下のフォーマットで PR body を生成し、`gh pr edit` で更新する。

```
Closes #{issue番号}

## 概要

{git log の内容をもとに、この PR で何をしたか・なぜするかを 2〜4 文で記述}

## テスト手順

1.
2.

## チェックリスト

- [ ] `pnpm build` がエラーなく通る
- [ ] 表示崩れがないことをブラウザで確認した
```

```bash
gh pr edit --body "..."
```

### 4. 関連 Issue body の更新

PR body の `Closes #N` から issue 番号を特定し、Issue の元の body に「対応PR」セクションを追記する。

```bash
gh issue view {番号} --json body
gh issue edit {番号} --body "..."
```

追記フォーマット（元 body の末尾に追加）:

```
---
**対応 PR:** #{PR番号} {PR URL}
```

### 5. Issue へ changelog コメントを投稿

```bash
gh issue comment {番号} --body "..."
```

コメントフォーマット:

```
## 📋 Changelog

{git log --oneline の各コミットを箇条書きで記載}

**差分:** {変更ファイル数}ファイル変更
```

## 注意事項

- Issue や PR が存在しない場合は該当ステップをスキップして理由を伝える
- body の上書き時は既存の「対応PR」セクションを二重追記しないよう確認する
- `gh` コマンドは `--repo bizyutyu/portfolio-web` を省略してよい（カレントリポジトリを使用）
