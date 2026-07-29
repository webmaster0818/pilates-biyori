#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""24/7ピラティス全スタジオブロックにfelmatアフィリエイトURLを設置(冪等)。zen place版と同ロジック"""
import glob, re
FELMAT = "https://t.felmat.net/fmcl?ak=J11817X.1.B1620582.U1357808"
NAME_RE = r"24[/／]7"
files = sorted(glob.glob("app/area/*/page.tsx")) + ["data/area-studios.ts"]
tot_swap = tot_ins = tot_skip = 0
for fn in files:
    s = open(fn).read()
    all_names = list(re.finditer(r"^[ \t]*name:\s*['\"][^'\"]+['\"].*$", s, re.M))
    starts = [m.start() for m in all_names]
    matches = list(re.finditer(rf"^([ \t]*)name:\s*['\"][^'\"]*(?:{NAME_RE})[^'\"]*['\"].*$", s, re.M))
    changed = False
    for m in reversed(matches):
        idx = starts.index(m.start())
        end = starts[idx+1] if idx+1 < len(starts) else len(s)
        blk = s[m.start():end]
        mu = re.search(r"officialUrl:\s*['\"]([^'\"]+)['\"]", blk)
        if mu:
            url = mu.group(1)
            if "t.felmat.net" in url and "J11817X" in url:
                tot_skip += 1; continue
            if "felmat" in url or "a8.net" in url:
                print(f"⚠️別アフィリURLをスキップ {fn}: {url[:60]}"); tot_skip += 1; continue
            abs_start = m.start() + mu.start(1)
            s = s[:abs_start] + FELMAT + s[m.start() + mu.end(1):]
            tot_swap += 1; changed = True
        else:
            indent = m.group(1)
            s = s[:m.end()] + f"\n{indent}officialUrl: '{FELMAT}'," + s[m.end():]
            tot_ins += 1; changed = True
    if changed:
        open(fn, "w").write(s)
print(f"差替={tot_swap} 挿入={tot_ins} スキップ={tot_skip}")
