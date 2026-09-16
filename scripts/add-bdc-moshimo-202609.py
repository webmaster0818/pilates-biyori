#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""BDC PILATES の全掲載にもしもアフィリエイトのリンクを設置する（冪等）。

2026-09-16 MediaXAI提供。Rintosullに続く2件目の「もしも」案件。

⚠️ 提供タグはプロトコル相対URL（//af.moshimo.com/...）。コードでは https: を明示する。
⚠️ クリックURLと計測は pl_id が対。テキスト 40590／バナー 40593(250x250)・40596(468x60)。
"""
import glob
import re

TEXT = "https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40590"
KEY = "pl_id=40590"
NAME_RE = r"\bBDC\b"

files = sorted(glob.glob("app/area/*/page.tsx")) + ["data/area-studios.ts"]
swap = ins = skip = 0
for fn in files:
    s = open(fn, encoding="utf-8").read()
    starts = [m.start() for m in re.finditer(r"^[ \t]*name:\s*['\"][^'\"]+['\"].*$", s, re.M)]
    hits = list(re.finditer(rf"^([ \t]*)name:\s*['\"][^'\"]*(?:{NAME_RE})[^'\"]*['\"].*$", s, re.M))
    changed = False
    for m in reversed(hits):
        i = starts.index(m.start())
        end = starts[i + 1] if i + 1 < len(starts) else len(s)
        blk = s[m.start():end]
        mu = re.search(r"officialUrl:\s*['\"]([^'\"]+)['\"]", blk)
        if mu:
            cur = mu.group(1)
            if KEY in cur:
                skip += 1
                continue
            if "felmat" in cur or "a8.net" in cur or "moshimo" in cur:
                print(f"  ⚠️ 別アフィリURLのためスキップ {fn}: {cur[:60]}")
                skip += 1
                continue
            a = m.start() + mu.start(1)
            s = s[:a] + TEXT + s[m.start() + mu.end(1):]
            swap += 1
            changed = True
        else:
            s = s[:m.end()] + f"\n{m.group(1)}officialUrl: '{TEXT}'," + s[m.end():]
            ins += 1
            changed = True
    if changed:
        open(fn, "w", encoding="utf-8").write(s)
print(f"BDC: 差替={swap} 挿入={ins} 変更なし={skip}")
