# Next.js に関する注意

このリポジトリの Next.js はトレーニングデータと異なる破壊的変更が含まれている。
コードを書く前に `node_modules/next/dist/docs/` のガイドを読み、deprecation notice に従うこと。

# プロジェクト概要

## 関連リポジトリ

| リポジトリ | 用途 |
|---|---|
| `bizyutyu/portfolio-web` | フロントエンド（このリポジトリ） |
| `bizyutyu/portfolio-api` | バックエンド API |

## ブランチ戦略（GitHub Flow）

```
main  ←  feature/{issue番号}
```

- `main` が常にデプロイ可能な状態
- 作業は必ず `feature/{issue番号}` ブランチで行う
- ブランチは必ずリモートの main から切る: `git fetch origin && git checkout -b feature/{番号} origin/main`
- PR は必ず `main` へ向ける
- PR タイトルは Conventional Commits 形式（`feat:` / `fix:` / `refactor:` / `style:` / `docs:` / `chore:`）
- PR body に `Closes #{issue番号}` を含める

## カスタムスキル

| スキル | 用途 |
|---|---|
| `/sync-pr` | PR body・関連 Issue body の更新と changelog コメント投稿 |
