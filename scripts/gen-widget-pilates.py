#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ピラティス料金相場ウィジェット生成: data/site-survey.ts → public/widget.js / public/widget.html
月次白書cron(monthly-hakusho.sh)のビルド前に実行すると毎月自動最新化される。
widget.js = 設置先DOMに直接描画（biyori-pilates.comへのfollowedリンクを含む＝被リンク装置）。
"""
import os, re
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(ROOT, "data", "site-survey.ts"), encoding="utf-8").read()

def grab(pattern):
    m = re.search(pattern, src)
    return int(m.group(1)) if m else None

# monthly節に限定して抽出（他セクションのavg/median誤マッチ防止）
monthly_m = re.search(r"monthly:\s*\{(.*?)\}", src, re.S)
mseg = monthly_m.group(1) if monthly_m else ""
median = int(re.search(r"median:\s*(\d+)", mseg).group(1))
avg = int(re.search(r"avg:\s*(\d+)", mseg).group(1))
free_pct = grab(r"freePct:\s*(\d+)")
today = date.today()
ym = f"{today.year}年{today.month}月"

fmt = lambda v: f"{v:,}"

JS = f"""(function() {{
  var s = document.currentScript;
  if (!s) return;
  var box = document.createElement('div');
  box.setAttribute('style', 'box-sizing:border-box;max-width:320px;font-family:-apple-system,\\"Hiragino Sans\\",\\"Noto Sans JP\\",sans-serif;border:1px solid #d9c8b8;border-radius:12px;padding:14px 16px;background:linear-gradient(135deg,#fdfaf6,#f6efe6);color:#3d342b;line-height:1.5;');
  box.innerHTML = '<div style="font-size:11px;color:#8a7a68;margin-bottom:4px;">ピラティス料金相場の目安（{ym}・全国スタジオ独自調査）</div>'
    + '<div style="font-size:21px;font-weight:700;color:#8B7355;">月額中央値 {fmt(median)}円<span style="font-size:12px;font-weight:400;">（月4回目安）</span></div>'
    + '<div style="font-size:13px;margin-top:2px;">平均 {fmt(avg)}円 ・ 体験無料のスタジオ {free_pct}%</div>'
    + '<div style="font-size:11px;margin-top:8px;"><a href="https://biyori-pilates.com/articles/pilates-ryokin-hakusho/" target="_blank" rel="noopener" style="color:#8B7355;text-decoration:underline;">Pilates-Biyori｜全国ピラティス料金白書</a>（毎月更新）</div>'
    + '<div style="font-size:10px;color:#9b8d7e;margin-top:4px;">※当サイト独自調査の掲載情報集計。実際の料金はスタジオ・プランにより異なります。</div>';
  s.parentNode.insertBefore(box, s);
}})();
"""

HTML = f"""<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="robots" content="noindex">
<title>ピラティス料金相場ウィジェット | Pilates-Biyori</title></head>
<body style="margin:0;padding:8px;background:transparent;">
<script src="https://biyori-pilates.com/widget.js"></script>
</body></html>
"""

open(os.path.join(ROOT, "public", "widget.js"), "w", encoding="utf-8").write(JS)
open(os.path.join(ROOT, "public", "widget.html"), "w", encoding="utf-8").write(HTML)
print(f"pilates widget generated: median={median} avg={avg} free={free_pct}% ({ym})")
