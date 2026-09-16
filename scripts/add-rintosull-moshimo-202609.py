#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rintosull（リントスル）の全掲載にもしもアフィリエイトのリンクを設置する（冪等）。

2026-09-16 MediaXAI提供。**このサイトで初めての「もしも」案件**（他はfelmat/A8）。

⚠️ 提供タグは `//af.moshimo.com/...` のプロトコル相対URL。コードでは https: を明示する。
⚠️ クリックURLとインプレッション計測は pl_id が対になっている。ばらさない。
   テキストリンク pl_id=75683 → 計測 //i.moshimo.com/af/i/impression?...pl_id=75683
⚠️ Rintosullは提携が無かったため、これまで店舗ページ12本を含め収益化できていなかった。
   GSCでは指名766imp・口コミ393impと、当サイトで最も需要が確認できているブランド。
"""
import glob
import re

# 自由テキスト用リンク（スタジオカードの「公式サイトを見てみる」に使う）
TEXT = ("https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683")
KEY = "pl_id=75683"
NAME_RE = r"Rintosull|リントスル"

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
print(f"Rintosull: 差替={swap} 挿入={ins} 変更なし={skip}")
