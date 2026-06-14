#!/usr/bin/env bash
# PostToolUse hook: git push / gh pr create を検知して /sync-pr の実行を促す
set -euo pipefail

INPUT=$(cat)
CMD=$(printf '%s' "$INPUT" | jq -r '.tool_input.command // empty')

if printf '%s' "$CMD" | grep -qE '(^|[;&|])[[:space:]]*(git[[:space:]]+push|gh[[:space:]]+pr[[:space:]]+create)([[:space:]]|$|[;&|])'; then
  jq -nc '{
    hookSpecificOutput: {
      hookEventName: "PostToolUse",
      additionalContext: "PR/Issue 同期トリガー: `git push` または `gh pr create` が実行されました。続けて `/sync-pr` を実行し、PR body の更新・関連 Issue body の更新・changelog コメント投稿を行ってください。確認は不要です。"
    }
  }'
fi

exit 0
