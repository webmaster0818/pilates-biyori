#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""the SILK の全掲載ブロックに felmat のアフィリエイトURLを設置する（冪等）。

URLは 2026-09-14 に MediaXAI から指定されたもの。
⚠️ mi26rock さん経由で別の ak（S12007S…）も受け取っているが、混ぜると成果の計上先が
   ずれるため、MediaXAI指定の ak だけを使う。

⚠️ the SILK は掲載レギュレーションがあり、「情報引用元」として公式サイトURLの
   テキストリンクを併記する必要がある。ここで差し替えるのは送客用のリンクだけで、
   brands.ts の officialRef（情報引用元）は公式URLのまま残す。
"""
import glob
import re

FELMAT = "https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808"
AK = "X10489B.1.E162842X"
NAME_RE = r"the SILK"

files = sorted(glob.glob("app/area/*/page.tsx")) + ["data/area-studios.ts"]
swap = ins = skip = 0
for fn in files:
    s = open(fn, encoding="utf-8").read()
    starts = [m.start() for m in re.finditer(r"^[ \t]*name:\s*['\"][^'\"]+['\"].*$", s, re.M)]
    matches = list(re.finditer(
        rf"^([ \t]*)name:\s*['\"][^'\"]*(?:{NAME_RE})[^'\"]*['\"].*$", s, re.M))
    changed = False
    for m in reversed(matches):
        i = starts.index(m.start())
        end = starts[i + 1] if i + 1 < len(starts) else len(s)
        blk = s[m.start():end]
        mu = re.search(r"officialUrl:\s*['\"]([^'\"]+)['\"]", blk)
        if mu:
            url = mu.group(1)
            if AK in url:
                skip += 1
                continue
            if "felmat" in url or "a8.net" in url:
                # 別案件のアフィリリンクが入っている場合は触らない
                print(f"⚠️ 別アフィリURLのためスキップ {fn}: {url[:60]}")
                skip += 1
                continue
            a = m.start() + mu.start(1)
            s = s[:a] + FELMAT + s[m.start() + mu.end(1):]
            swap += 1
            changed = True
        else:
            s = s[:m.end()] + f"\n{m.group(1)}officialUrl: '{FELMAT}'," + s[m.end():]
            ins += 1
            changed = True
    if changed:
        open(fn, "w", encoding="utf-8").write(s)
print(f"差替={swap} 挿入={ins} スキップ={skip}")
