#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""アフィリエイトB（afi-b）の3ブランドを全掲載に設置する（冪等）。

2026-09-16 MediaXAI提供。当サイト3つ目のASP（他は felmat / A8 / もしも）。

⚠️ afi-b はクリックURLと計測（lead）でパスの形が違う。対応を崩さない。
     クリック https://t.afi-b.com/visit.php?a={広告主}-{クリエイティブ}&p={パートナー}
     計測     https://t.afi-b.com/lead/{広告主}/{パートナー}/{クリエイティブ}
⚠️ 「ピラティスK」と「Pilates KASANE」は別ブランド。**実際に誤爆した**。
   `pilates ?K(?!ASANE)` だけでは足りず、**日本語表記「ピラティスKASANE」4件に
   ピラティスKのリンクが入った**（別の広告主に送客してしまう＝成果の取り違え）。
   日本語側にも否定先読みを付けること。
"""
import glob
import re

PID = "E9887623"
BRANDS = [
    # (表示名, 店名の正規表現, 広告主ID, テキストリンクのクリエイティブID)
    ("ピラティスK", r"ピラティス ?K(?!ASANE|asane)|pilates ?K(?!ASANE|asane)", "O11543l", "G384824n"),
    ("DAYS PILATES", r"DAYS ?PILATES|デイズピラティス", "H16011O", "W518522Z"),
    ("Pilates KASANE", r"KASANE|カサネ", "T15562j", "7505717Y"),
]
FILES = sorted(glob.glob("app/area/*/page.tsx")) + ["data/area-studios.ts"]

for label, name_re, adv, cre in BRANDS:
    url = f"https://t.afi-b.com/visit.php?a={adv}-{cre}&p={PID}"
    swap = ins = skip = 0
    for fn in FILES:
        s = open(fn, encoding="utf-8").read()
        starts = [m.start() for m in re.finditer(r"^[ \t]*name:\s*['\"][^'\"]+['\"].*$", s, re.M)]
        hits = list(re.finditer(rf"^([ \t]*)name:\s*['\"][^'\"]*(?:{name_re})[^'\"]*['\"].*$", s, re.M))
        changed = False
        for m in reversed(hits):
            i = starts.index(m.start())
            end = starts[i + 1] if i + 1 < len(starts) else len(s)
            blk = s[m.start():end]
            mu = re.search(r"officialUrl:\s*['\"]([^'\"]+)['\"]", blk)
            if mu:
                cur = mu.group(1)
                if cre in cur:
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
    print(f"{label:16s} 差替={swap} 挿入={ins} 変更なし={skip}")
