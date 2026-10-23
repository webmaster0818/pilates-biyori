#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""La pilates（afi-b）と LAVA（A8）のテキストリンクを全掲載に設置する（冪等）。

2026-10-23 MediaXAI提供。
- La pilates: afi-b 816076W-u518546p（計測 lead/816076W/E9887623/u518546p）
- LAVA: A8 4BENDQ+6V2YDE+1O96+5YZ76（計測 www12.a8.net/0.gif?a8mat=…5YZ76）

⚠️ La pilates 新潟店は dofollow（相互リンク承認店）なので触らない。アフィリにすると sponsored が必要になり、
   先方と合意した通常リンクではなくなる。
⚠️ 「Stella Pilates」は大小文字無視だと La pilates に当たる。大文字小文字を区別して照合する。
⚠️ LAVA は Rintosull の「LAVA店内」表記と重なるので、Rintosull を含む店名は除外する。
"""
import glob
import re

BRANDS = [
    # (表示名, 店名の正規表現, 除外の正規表現, URL, URLの識別子)
    ("La pilates", r"La ?[Pp]ilates|ラピラティス", r"Stella",
     "https://t.afi-b.com/visit.php?a=816076W-u518546p&p=E9887623", "816076W-u518546p"),
    ("LAVA", r"LAVA", r"Rintosull|リントスル",
     "https://px.a8.net/svt/ejp?a8mat=4BENDQ+6V2YDE+1O96+5YZ76", "4BENDQ+6V2YDE+1O96+5YZ76"),
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
