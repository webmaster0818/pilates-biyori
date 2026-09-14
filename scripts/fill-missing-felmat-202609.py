#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""提携済みブランドで、アフィリエイトURLが入っていない掲載に既存の ak を設置する（冪等）。

2026-09-14 MediaXAI「その他の未設置は同ブランドのものを設置して」

⚠️ ブランドごとに、既に稼働している ak をそのまま使う（新しい ak を作らない）。
⚠️ 別案件のリンクが既に入っているブロックには触らない（計上先が割れるため）。
⚠️ officialUrl が公式サイトのままのものは差し替える。無いものには挿入する。
"""
import glob
import re

BRANDS = [
    # (表示名, 店名にかかる正規表現, 設置するURL)
    ('Pilates Mee', r'Pilates Mee', 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808'),
    ('luluto（ルルト）', r'luluto|ルルト', 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808'),
    ('URBAN CLASSIC', r'URBAN CLASSIC|アーバンクラシック',
     'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808'),
    ('Lucina（ルキナ）', r'Lucina|ルキナ', 'https://t.felmat.net/fmcl?ak=Q113418.1.21564097.U1357808'),
]
FILES = sorted(glob.glob('app/area/*/page.tsx')) + ['data/area-studios.ts']


def ak_of(url: str) -> str:
    m = re.search(r'ak=([^.]+)\.', url)
    return m.group(1) if m else url


for label, name_re, url in BRANDS:
    ak = ak_of(url)
    swap = ins = skip = 0
    for fn in FILES:
        s = open(fn, encoding='utf-8').read()
        starts = [m.start() for m in re.finditer(r"^[ \t]*name:\s*['\"][^'\"]+['\"].*$", s, re.M)]
        hits = list(re.finditer(
            rf"^([ \t]*)name:\s*['\"][^'\"]*(?:{name_re})[^'\"]*['\"].*$", s, re.M))
        changed = False
        for m in reversed(hits):
            i = starts.index(m.start())
            end = starts[i + 1] if i + 1 < len(starts) else len(s)
            blk = s[m.start():end]
            mu = re.search(r"officialUrl:\s*['\"]([^'\"]+)['\"]", blk)
            if mu:
                cur = mu.group(1)
                if ak in cur:
                    skip += 1
                    continue
                if 'felmat' in cur or 'a8.net' in cur:
                    print(f'  ⚠️ 別案件のリンクのためスキップ {fn}: {cur[:58]}')
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
            open(fn, 'w', encoding='utf-8').write(s)
    print(f'{label:18s} 差替={swap} 挿入={ins} 変更なし={skip}')
