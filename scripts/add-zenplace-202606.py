#!/usr/bin/env python3
"""zen place pilates を「未掲載エリアのみ」追加（冪等）。2026-06-11 MediaXAI依頼。

- 既にzen place系を掲載しているページはスキップ（同一エリア重複掲載を防ぐ保守的判定）
- データ: data/new-brands-zenplace-stores.json（公式 studios 一覧の実データ）
- 駅名抽出は「」内の駅名から。突合は駅名×都道府県一致
"""
import json
import re
import os
from pathlib import Path

ROOT = Path(__file__).parent.parent
os.chdir(ROOT)

D = json.load(open('data/new-brands-zenplace-stores.json'))
B = D['brand']

pa = open('data/prefectureAreas.ts').read()
slug_info = {}
for pm in re.finditer(r"prefecture: '([^']+)',\s*areas: \[(.*?)\n    \]", pa, re.DOTALL):
    pref = pm.group(1)
    for am in re.finditer(r"\{ slug: '([a-z0-9-]+)', name: '([^']+)' \}", pm.group(2)):
        slug_info[am.group(1)] = (am.group(2), pref)


def find_slug(station, pref):
    best = None
    for slug, (name, apref) in slug_info.items():
        if apref != pref:
            continue
        if name == station:
            return slug
        if len(name) >= 2 and (name in station or station in name):
            if best is None or len(name) > len(slug_info[best][0]):
                best = slug
    return best


def entry_ts(suffix, access, pref, indent):
    name = f"zen place pilates {suffix}"
    desc = (
        '全国100店舗以上を展開するピラティス専門スタジオ。マットグループ・マシン（リフォーマー）'
        'グループ・プライベートを提供し、男性も利用可。全国の系列スタジオを相互利用できる。' + access + '。'
    )
    feats = ', '.join(f"'{f}'" for f in B['features'])
    i = ' ' * indent
    return (
        f"{i}{{\n"
        f"{i}  name: '{name}',\n"
        f"{i}  officialUrl: '{B['officialUrl']}',\n"
        f"{i}  image: '/images/studios/zenplace.webp',\n"
        f"{i}  price: '{B['price']}',\n"
        f"{i}  trial: '{B['trial']}',\n"
        f"{i}  features: [{feats}],\n"
        f"{i}  description: '{desc}',\n"
        f"{i}  access: '{access}',\n"
        f"{i}  address: '{pref}（詳細は公式サイト参照）',\n"
        f"{i}}},\n"
    )


def find_array_close(src, open_idx):
    depth = 0
    in_str = None
    j = open_idx
    while j < len(src):
        c = src[j]
        if in_str:
            if c == '\\':
                j += 2
                continue
            if c == in_str:
                in_str = None
        elif c in ("'", '"', '`'):
            in_str = c
        elif c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                return j
        j += 1
    return -1


stats = {'A': 0, 'B': 0, 'skip_existing': 0, 'no_area': []}
area_ts = open('data/area-studios.ts').read()

for suffix, pref, access in D['stores']:
    m_st = re.search(r'「([^」]+?)駅?」', access)
    station = m_st.group(1).replace('駅', '') if m_st else suffix
    slug = find_slug(station, pref) or find_slug(suffix, pref)
    if not slug:
        stats['no_area'].append((suffix, station))
        continue
    page = Path(f'app/area/{slug}/page.tsx')
    src = page.read_text(encoding='utf-8') if page.exists() else ''
    m = re.search(r'const studios[^=\n]*=\s*\[', src) if src else None
    if m:
        body_close = find_array_close(src, m.end() - 1)
        if 'zen place' in src[m.start():body_close] or 'ゼンプレイス' in src[m.start():body_close]:
            stats['skip_existing'] += 1
            continue
        entry = entry_ts(suffix, access, pref, 2)
        src = src[:body_close] + entry + src[body_close:]
        src = re.sub(r'\}(\n\s*\{\n\s*name:)', r'},\1', src)
        seg = src[m.end()-1:find_array_close(src, m.end() - 1)+1]
        n = seg.count('\n  {')
        src = re.sub(r'おすすめ(\d+)選', f'おすすめ{n}選', src)
        src = re.sub(r'スタジオ(\d+)選', f'スタジオ{n}選', src)
        page.write_text(src, encoding='utf-8')
        stats['A'] += 1
    else:
        bm = re.search(r"'" + re.escape(slug) + r"':\s*\{", area_ts)
        if not bm:
            stats['no_area'].append((suffix, station, 'no-data-entry'))
            continue
        sm = re.search(r'studios:\s*\[', area_ts[bm.end():])
        open_idx = bm.end() + sm.end() - 1
        close = find_array_close(area_ts, open_idx)
        if 'zen place' in area_ts[open_idx:close]:
            stats['skip_existing'] += 1
            continue
        entry = entry_ts(suffix, access, pref, 6)
        area_ts = area_ts[:close] + entry + area_ts[close:]
        area_ts = re.sub(r'\}(\n\s*\{\n\s*name:)', r'},\1', area_ts)
        stats['B'] += 1

open('data/area-studios.ts', 'w', encoding='utf-8').write(area_ts)
print('inserted A:', stats['A'], 'B:', stats['B'], 'skip(zen place掲載済):', stats['skip_existing'])
print('no_area:', stats['no_area'])
