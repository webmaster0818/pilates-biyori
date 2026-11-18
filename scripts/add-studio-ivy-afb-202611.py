#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""STUDIO IVY（afi-b）のテキストリンクを全掲載カードに設置する（冪等）。

2026-11-18。afb 11/17 提携承認（広告主 PID 15511・サイト pilates-biyori 988762）。
- クリエイティブ「自由テキスト」: visit.php?a=u15511L-8504149a&p=E9887623
- 計測: lead/u15511L/E9887623/8504149a（StudioCardClient で officialUrl に応じて出す）
⚠️ リンクコードは改変禁止。クリックURLと lead の組を崩さない。
⚠️ 手順は scripts/add-lapilates-lava-202610.py と同じ（dofollow・他アフィリURLのカードは触らない）。
"""
import glob
import re

BRANDS = [
    # (表示名, 店名の正規表現, 除外の正規表現, URL, URLの識別子)
    ("STUDIO IVY", r"STUDIO IVY|スタジオアイビー", r"(?!)",
     "https://t.afi-b.com/visit.php?a=u15511L-8504149a&p=E9887623", "u15511L-8504149a"),
]
FILES = sorted(glob.glob("app/area/*/page.tsx")) + ["data/area-studios.ts"]

for label, name_re, ex_re, url, key in BRANDS:
    swap = ins = skip = 0
    for fn in FILES:
        s = open(fn, encoding="utf-8").read()
        starts = [m.start() for m in re.finditer(r"^[ \t]*name:\s*['\"][^'\"]+['\"].*$", s, re.M)]
        hits = list(re.finditer(rf"^([ \t]*)name:\s*['\"]([^'\"]*(?:{name_re})[^'\"]*)['\"].*$", s, re.M))
        changed = False
        for m in reversed(hits):
            if re.search(ex_re, m.group(2)):
                continue
            i = starts.index(m.start())
            end = starts[i + 1] if i + 1 < len(starts) else len(s)
            blk = s[m.start():end]
            if "dofollow" in blk:
                print(f"  dofollow のためスキップ {fn}: {m.group(2)}")
                skip += 1
                continue
            mu = re.search(r"officialUrl:\s*['\"]([^'\"]+)['\"]", blk)
            if mu:
                cur = mu.group(1)
                if key in cur:
                    skip += 1
                    continue
                if re.search(r"felmat|a8\.net|moshimo|afi-b", cur):
                    print(f"  ⚠️ 別アフィリURLのためスキップ {fn}: {cur[:58]}")
                    skip += 1
                    continue
                print(f"  差替 {fn}: {m.group(2)} {cur}")
                a = m.start() + mu.start(1)
                s = s[:a] + url + s[m.start() + mu.end(1):]
                swap += 1
                changed = True
            else:
                s = s[:m.end()] + f"\n{m.group(1)}officialUrl: '{url}'," + s[m.end():]
                ins += 1
                changed = True
        if changed:
            open(fn, "w", encoding="utf-8").write(s)
    print(f"{label:12s} 差替={swap} 挿入={ins} 変更なし={skip}")
