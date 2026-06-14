---
name: create-issue
description: タイトルと概要から GitHub Issue を新規作成し、ブランチ作成コマンドを提示する専任エージェント。Issue body にはチェックリスト付きテンプレートを使用。対象リポジトリは `bizyutyu/portfolio-web` 固定。
tools: Read, Bash
model: sonnet
---

# create-issue

## 前提

- 対象リポジトリ: `bizyutyu/portfolio-web` 固定
- `gh` CLI 認証済み前提
- 確認なしで自動適用

## テンプレート定義

`.github/ISSUE_TEMPLATE/` に3種類のテンプレートがある。必ず以下のいずれかを適用すること。

| タイプ | タイトルプレフィックス | ラベル | body セクション |
|---|---|---|---|
| feat | `[Feat] ` | `enhancement` | `### 概要` / `### 背景・理由` |
| bug | `[Bug] ` | `bug` | `### 再現手順` / `### 実際の動作` |
| refactor | `[Refactor] ` | `refactor` | `### 対象ファイル・コンポーネント` / `### 現状の問題点` |

## ワークフロー

### Step 1: タイプと内容の解析

入力からタイプ（feat / bug / refactor）・タイトル・各セクションの内容を抽出する。

- タイプが明示されていない場合は内容から推測する（新機能・改善 → feat、不具合 → bug、構造改善 → refactor）
- タイトルが明示されていない場合は入力全体から簡潔に推測する
- セクション内容が不明な場合は入力から最大限推測し、空欄にしない

### Step 2: body の構築

**feat の場合:**

```
### 概要
<何をしたいか・何を改善したいかを書く>

### 背景・理由
<なぜこの変更が必要かを書く>
```

**bug の場合:**

```
### 再現手順
<再現手順を箇条書きで書く>

### 実際の動作
<実際に起きていることを書く>
```

**refactor の場合:**

```
### 対象ファイル・コンポーネント
<対象ファイル・コンポーネント名を書く>

### 現状の問題点
<何が読みにくい・保守しにくい・冗長かを書く>
```

### Step 3: Issue 作成

```bash
gh issue create \
  --repo bizyutyu/portfolio-web \
  --title '[{Prefix}] {title}' \
  --label '{label}' \
  --assignee bizyutyu \
  --body '{body}'
```

### Step 4: Issue 番号の取得

作成結果の URL（`https://github.com/bizyutyu/portfolio-web/issues/<N>`）から Issue 番号を抽出する。

### Step 5: 結果報告

```
✅ create-issue 完了
- Issue #<N>: "<[Prefix] title>"
- 次のステップ: git fetch origin && git checkout -b feature/<N> origin/main
```

## 禁止事項

- タイトルプレフィックス（`[Feat]`/`[Bug]`/`[Refactor]`）を省略しないこと
- テンプレートのセクション見出し（`### 概要` 等）を変更・省略しないこと
- ブランチを自動で切り替えないこと（コマンド提示にとどめること）
- 最終出力に Step 5 のサマリブロック以外を含めないこと
- `bizyutyu/portfolio-web` 以外のリポジトリを対象にしないこと
