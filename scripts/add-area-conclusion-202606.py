#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""結論ファースト要約＋検索意図別CTA(AreaConclusion)を機会エリアページに冪等挿入。"""
import re, sys
from pathlib import Path

TARGETS = ["otemachi","yoyogi-uehara","gion-shijo","hamamatsucho","akihabara","izumi","oji","yagoto","ochanomizu","akasaka",
"aoyama-itchome","seijo-gakuenmae","esaka","kitahama","shonan","shin-osaka","kitaoji",
"toranomon","chatan","nishijin","kyoto-shiyakusho-mae","shin-okubo","toyosu","koenji",
"ebina","nakano-sakaue"]

IMPORT_LINE = "import { AreaConclusion } from '@/components/AreaConclusion'\n"
base = Path("app/area")
patched, skipped, missing = [], [], []

for slug in TARGETS:
    f = base / slug / "page.tsx"
    if not f.exists():
        missing.append(slug); continue
    txt = f.read_text(encoding="utf-8")
    if "AreaConclusion" in txt:
        skipped.append(slug); continue
    if "const studios = [" not in txt:
        skipped.append(f"{slug}(no-studios-array)"); continue
    m = re.search(r'areaName="([^"]+)"', txt)
    if not m:
        skipped.append(f"{slug}(no-areaName)"); continue
    area = m.group(1)

    # 1) import: AreaMarketComparison importの直後（無ければ最初の@/components importの後）
    if "from '@/components/AreaMarketComparison'" in txt:
        txt = txt.replace(
            "import { AreaMarketComparison } from '@/components/AreaMarketComparison'\n",
            "import { AreaMarketComparison } from '@/components/AreaMarketComparison'\n" + IMPORT_LINE, 1)
    else:
        im = re.search(r"^import \{[^}]+\} from '@/components/[^']+'\n", txt, re.M)
        if not im:
            skipped.append(f"{slug}(no-import-anchor)"); continue
        txt = txt[:im.end()] + IMPORT_LINE + txt[im.end():]

    # 2) body: <TableOfContents の直前に挿入（無ければ <PriceComparisonTable の直前）
    jsx = f'        <AreaConclusion studios={{studios}} areaName="{area}" />\n\n'
    anchor = None
    am = re.search(r'^\s*<TableOfContents', txt, re.M)
    if am: anchor = am.start()
    else:
        pm = re.search(r'^\s*<PriceComparisonTable', txt, re.M)
        if pm: anchor = pm.start()
    if anchor is None:
        skipped.append(f"{slug}(no-body-anchor)"); continue
    txt = txt[:anchor] + jsx + txt[anchor:]

    f.write_text(txt, encoding="utf-8")
    patched.append(slug)

print(f"PATCHED ({len(patched)}): {', '.join(patched)}")
print(f"SKIPPED ({len(skipped)}): {', '.join(skipped)}")
print(f"MISSING ({len(missing)}): {', '.join(missing)}")
