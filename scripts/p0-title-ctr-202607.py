#!/usr/bin/env python3
"""P0-②: 機会29ページのtitle/description CTR改修＋全ページの月鮮度更新(6月→7月)。冪等。
- 機会ページ: title=「{エリア}のピラティススタジオおすすめN選｜無料体験・料金で比較【2026年7月】」
  N=ページ既存の「おすすめN選」見出しから抽出(実数・捏造なし)。descriptionも意図語(無料体験/初心者/マシン)で刷新
- その他: titleの【2026年6月最新】/【2026年6月】→7月に月次バンプのみ
"""
import re
from pathlib import Path

APP = Path(__file__).resolve().parent.parent / "app" / "area"

OPP = ["hamamatsucho","akihabara","kitahama","ochanomizu","oji","izumi","shin-osaka","yagoto",
       "yoyogi-uehara","shin-okubo","ebina","toranomon","gion-shijo","otemachi","karasuma-oike",
       "wakoshi","fujigaoka","takamatsu","korakuen","kyoto-shiyakusho-mae","neyagawa","tsukiji",
       "tokyo-station","denenchofu","mitaka","kitaoji","kakuozan","chatan","shijo-kawaramachi"]

reworked, bumped, warn = [], [], []

for f in sorted(APP.glob("*/page.tsx")):
    slug = f.parent.name
    src = f.read_text(encoding="utf-8")
    orig = src

    if slug in OPP:
        mt = re.search(r"title: '([^']*)'", src)
        ma = re.search(r"areaName=\"([^\"]+)\"", src)
        mn = re.search(r"おすすめ(\d+)選", src)
        if not (mt and ma):
            warn.append(f"{slug}: title/areaName不検出")
            continue
        area = ma.group(1)
        n = mn.group(1) if mn else None
        sel = f"おすすめ{n}選" if n else "おすすめ比較"
        new_title = f"{area}のピラティススタジオ{sel}｜無料体験・料金で比較【2026年7月】"
        src = src.replace(mt.group(0), f"title: '{new_title}'", 1)
        md = re.search(r"description: '([^']*)'", src)
        if md:
            base = f"{area}のピラティススタジオ{n}社" if n else f"{area}のピラティススタジオ"
            new_desc = (f"{base}の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、"
                        f"駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。")
            src = src.replace(md.group(0), f"description: '{new_desc}'", 1)
        reworked.append(slug)
    else:
        if "【2026年6月最新】" in src or "【2026年6月】" in src:
            src = src.replace("【2026年6月最新】", "【2026年7月最新】").replace("【2026年6月】", "【2026年7月】")
            bumped.append(slug)

    if src != orig:
        f.write_text(src, encoding="utf-8")

print(f"reworked={len(reworked)}/{len(OPP)} bumped={len(bumped)} warn={warn}")
missing = [s for s in OPP if s not in reworked]
if missing: print("MISSING:", missing)
