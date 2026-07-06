#!/bin/bash
# 料金白書 月次AEO自動更新（P5・launchd月次実行）。
# refresh-hakusho-monthly.py で主要ブランド集計＋版日付＋updatedAtを実行月に更新
# → build → 方式Bデプロイ（--exclude .git/functions厳守）→ Indexing → Discord通知。
# 全て実データ・冪等。ログ=/tmp/pilates-monthly-hakusho.log
set -o pipefail
export PATH=/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin
SRC="/Users/takashi.hasegawa/projects/pilates-biyori"
DEPLOY="/Users/takashi.hasegawa/projects/pilates-biyori-deploy"
GSC_PY="/Users/takashi.hasegawa/.openclaw/workspace/gsc-api/venv/bin/python"
WEBHOOK=$(cat /Users/takashi.hasegawa/.openclaw/workspace/secrets/gsc-weekly-webhook.txt 2>/dev/null | tr -d '\n')
STAMP=$(date +"%Y-%m-%d %H:%M")
cd "$SRC" || exit 1

notify() { # $1=message
  [ -n "$WEBHOOK" ] && curl -s -H "Content-Type: application/json" -H "User-Agent: curl/8" \
    -d "{\"content\": $(python3 -c "import json,sys;print(json.dumps(sys.argv[1]))" "$1")}" "$WEBHOOK" >/dev/null 2>&1
}

echo "===== [$STAMP] monthly-hakusho start ====="

# 1) 白書リフレッシュ（主要ブランド集計＋版日付＋updatedAt）
REFRESH=$(python3 scripts/refresh-hakusho-monthly.py 2>&1) || { echo "refresh FAILED: $REFRESH"; notify "🚨[Pilates料金白書] 月次更新の集計に失敗しました（$STAMP）。ログ確認要。"; exit 1; }
echo "$REFRESH"

# 2) build
echo "--- build ---"
NODE_OPTIONS="--max-old-space-size=8192" npm run build > /tmp/pilates-monthly-build.log 2>&1
if ! grep -q "Compiled successfully" /tmp/pilates-monthly-build.log || grep -q "Failed to type check" /tmp/pilates-monthly-build.log; then
  echo "build FAILED"; tail -20 /tmp/pilates-monthly-build.log; notify "🚨[Pilates料金白書] 月次ビルド失敗（$STAMP）。デプロイ中止。"; exit 1
fi

# 3) sitemap 再生成 → out/ へ反映
node scripts/generate-sitemap.mjs > /dev/null 2>&1 && cp public/sitemap.xml out/sitemap.xml 2>/dev/null

# 4) 方式Bデプロイ（functions保全確認必須）
if [ ! -f "$DEPLOY/functions/api/contact.js" ]; then
  echo "functions欠落→中止"; notify "🚨[Pilates料金白書] deploy repoのfunctions欠落を検知。デプロイ中止（$STAMP）。"; exit 1
fi
rsync -a --delete --exclude='.git' --exclude='functions' out/ "$DEPLOY/" || { echo "rsync failed"; exit 1; }
if [ ! -f "$DEPLOY/functions/api/contact.js" ]; then echo "functions消失→中止"; exit 1; fi

# source + deploy 両push
git add -A && git commit -q -m "月次: 料金白書AEO自動更新（$STAMP）" 2>/dev/null && git push -q origin HEAD 2>/dev/null
cd "$DEPLOY" && git add -A && git commit -q -m "月次: 料金白書 deploy（$STAMP）" 2>/dev/null && git push -q origin HEAD:main 2>/dev/null
cd "$SRC"

# 5) Indexing API
"$GSC_PY" - <<'PYEOF' 2>/dev/null
from pathlib import Path
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import AuthorizedSession
creds=Credentials.from_authorized_user_file(str(Path.home()/".openclaw"/"workspace"/"secrets"/"gsc-token.json"))
s=AuthorizedSession(creds)
s.post("https://indexing.googleapis.com/v3/urlNotifications:publish",json={"url":"https://biyori-pilates.com/articles/pilates-ryokin-hakusho/","type":"URL_UPDATED"})
PYEOF

# 6) 通知（主要ブランド集計の要点を抽出）
MEDIAN=$(echo "$REFRESH" | grep -oE "'median': [0-9]+" | grep -oE "[0-9]+")
FREE=$(echo "$REFRESH" | grep -oE "'free_pct': [0-9]+" | grep -oE "[0-9]+")
TOTAL=$(echo "$REFRESH" | grep -oE "'total': [0-9]+" | grep -oE "[0-9]+")
notify "✅[Pilates料金白書] 月次AEO自動更新・本番反映（$STAMP）｜主要ブランド${TOTAL}店の月額中央値 ${MEDIAN}円・体験無料率 ${FREE}%｜/articles/pilates-ryokin-hakusho/"
echo "===== [$STAMP] done median=$MEDIAN free=$FREE total=$TOTAL ====="
