#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""zen placeスタジオ全ブロックにA8アフィリエイトURLを設置(冪等)。
- officialUrlが既存(zenplace.co.jp系)→A8 URLに差替
- officialUrlなし→name行直後に挿入
対象: app/area/*/page.tsx + data/area-studios.ts
"""
import glob, re

A8 = "https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM"
files = sorted(glob.glob("app/area/*/page.tsx")) + ["data/area-studios.ts"]
tot_swap = tot_ins = tot_skip = 0
for fn in files:
    s = open(fn).read()
    names = [(m.start(), m.end(), m.group(1)) for m in re.finditer(r"([ \t]*)name:\s*['\"]([^'\"]+)['\"]", s)]
    # 後ろから処理(挿入でオフセットが崩れないように)
    edits = []
    matches = list(re.finditer(r"^([ \t]*)name:\s*['\"]([^'\"]*(?:zen place|ゼンプレイス)[^'\"]*)['\"].*$", s, re.M))
    all_names = list(re.finditer(r"^[ \t]*name:\s*['\"][^'\"]+['\"].*$", s, re.M))
    starts = [m.start() for m in all_names]
    changed = False
    for m in reversed(matches):
        idx = starts.index(m.start())
        end = starts[idx+1] if idx+1 < len(starts) else len(s)
        blk = s[m.start():end]
        mu = re.search(r"officialUrl:\s*['\"]([^'\"]+)['\"]", blk)
        if mu:
            url = mu.group(1)
            if "px.a8.net" in url and "4LQ4+5YJRM" in url:
                tot_skip += 1
                continue
            if "zenplace.co.jp" not in url:
                print(f"⚠️想定外URLをスキップ {fn}: {url[:60]}")
                tot_skip += 1
                continue
            abs_start = m.start() + mu.start(1)
            s = s[:abs_start] + A8 + s[m.start() + mu.end(1):]
            tot_swap += 1
            changed = True
        else:
            indent = m.group(1)
            insert = f"\n{indent}officialUrl: '{A8}',"
            s = s[:m.end()] + insert + s[m.end():]
            tot_ins += 1
            changed = True
    if changed:
        open(fn, "w").write(s)
print(f"差替={tot_swap} 挿入={tot_ins} スキップ={tot_skip}")
