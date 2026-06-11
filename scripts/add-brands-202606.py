#!/usr/bin/env python3
"""2026-06-11 MediaXAI依頼: 5ブランドの店舗を既存エリアページに追加する（冪等）。

データ: data/new-brands-202606.json ＋ data/new-brands-mee-stores.json（全て公式サイト実データ）
- 既存エリア（prefectureAreas登録済み）に駅名一致＋都道府県一致で突合
- system A（page.tsx内 const studios）/ system B（area-studios.ts）両対応
- 評価★・口コミは実測不明のため付けない（捏造回避）。rating/reviewsなしはStudioCardが安全に省略
- 追加後、page.tsx内の「おすすめN選」「スタジオN選」の数を新店舗数に更新
"""
import json
import re
import os
from pathlib import Path

ROOT = Path(__file__).parent.parent
os.chdir(ROOT)

BRANDS = json.load(open('data/new-brands-202606.json'))['brands']
MEE = json.load(open('data/new-brands-mee-stores.json'))['stores']

DESC = {
    'dr-pilates': '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。',
    'the-silk': '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴。',
    '247-pilates': '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供。',
    'days-pilates': '女性専用のマシンピラティス（リフォーマー）グループレッスンスタジオ。リーズナブルな月額で通いやすいのが特徴。',
    'pilates-mee': '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。',
}

# prefectureAreas: slug -> (name, pref)
pa = open('data/prefectureAreas.ts').read()
slug_info = {}
for pm in re.finditer(r"prefecture: '([^']+)',\s*areas: \[(.*?)\n    \]", pa, re.DOTALL):
    pref = pm.group(1)
    for am in re.finditer(r"\{ slug: '([a-z0-9-]+)', name: '([^']+)' \}", pm.group(2)):
        slug_info[am.group(1)] = (am.group(2), pref)


def find_slug(station, pref):
    s = station.replace('・', '')
    best = None
    for slug, (name, apref) in slug_info.items():
        if apref != pref:
            continue
        if name == station or name == s:
            return slug
        if len(name) >= 2 and (name in station or station in name):
            if best is None or len(name) > len(slug_info[best][0]):
                best = slug
    return best


def make_stores():
    out = []  # (brandKey, storeDict)
    for bkey, b in BRANDS.items():
        for st in b.get('stores', []):
            out.append((bkey, st))
    bm = BRANDS['pilates-mee']
    for store, pref, station, walk, address in MEE:
        st = {'store': f'Pilates Mee{store}' if store.startswith('Life') is False else f'Pilates Mee {store}',
              'pref': pref, 'station': station, 'walk': walk, 'address': address,
              '_meelife': store.startswith('Life')}
        out.append(('pilates-mee', st))
    return out


def entry_ts(bkey, st, indent):
    b = BRANDS[bkey]
    name = st['store'] if bkey == 'pilates-mee' else f"{b['name']} {st['store']}"
    walk = st.get('walk', '')
    station = st['station']
    if walk and walk != '不明':
        access = f"{station}駅から{walk}" if '駅' not in station and 'バス停' not in station else f"{station}から{walk}"
    else:
        access = f"{station}エリア（詳細は公式サイト参照）"
    address = st.get('address') or f"{st['pref']}（詳細は公式サイト参照）"
    price = b['price']
    trial = b['trial']
    if st.get('_meelife'):
        price = '5人制少人数 月4回 14,800円〜（税込）'
    desc = DESC[bkey] + access + '。'
    feats = ', '.join(f"'{f}'" for f in b['features'])
    i = ' ' * indent
    return (
        f"{i}{{\n"
        f"{i}  name: '{name}',\n"
        f"{i}  officialUrl: '{b['officialUrl']}',\n"
        f"{i}  image: '/images/studios/{bkey}.webp',\n"
        f"{i}  price: '{price}',\n"
        f"{i}  trial: '{trial}',\n"
        f"{i}  features: [{feats}],\n"
        f"{i}  description: '{desc}',\n"
        f"{i}  access: '{access}',\n"
        f"{i}  address: '{address}',\n"
        f"{i}}},\n"
    )


def find_array_close(src, open_idx):
    """src[open_idx] == '[' の対応する ']' の位置を返す"""
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


stats = {'A': 0, 'B': 0, 'skip_dup': 0, 'no_page': []}
area_ts = open('data/area-studios.ts').read()

for bkey, st in make_stores():
    slug = find_slug(st['station'], st['pref'])
    if not slug:
        continue  # 新規エリア組（第2弾で対応）
    name = st['store'] if bkey == 'pilates-mee' else f"{BRANDS[bkey]['name']} {st['store']}"
    page = Path(f'app/area/{slug}/page.tsx')
    m = None
    src = page.read_text(encoding='utf-8') if page.exists() else ''
    if src:
        m = re.search(r'const studios[^=\n]*=\s*\[', src)
    if m:
        if f"name: '{name}'" in src:
            stats['skip_dup'] += 1
            continue
        close = find_array_close(src, m.end() - 1)
        entry = entry_ts(bkey, st, 2)
        src = src[:close] + entry + src[close:]
        n = len(re.findall(r"\n  \{", src[m.end():find_array_close(src, m.end() - 1)]))
        # 店舗数 = studios配列直下のオブジェクト数を数え直す
        seg = src[m.end()-1:find_array_close(src, m.end() - 1)+1]
        n = seg.count('\n  {')
        src = re.sub(r'おすすめ(\d+)選', f'おすすめ{n}選', src)
        src = re.sub(r'スタジオ(\d+)選', f'スタジオ{n}選', src)
        page.write_text(src, encoding='utf-8')
        stats['A'] += 1
    else:
        bm = re.search(r"'" + re.escape(slug) + r"':\s*\{", area_ts)
        if not bm:
            stats['no_page'].append((bkey, st['station'], slug))
            continue
        if f"name: '{name}'" in area_ts[bm.start():bm.start() + 30000]:
            stats['skip_dup'] += 1
            continue
        sm = re.search(r'studios:\s*\[', area_ts[bm.end():])
        open_idx = bm.end() + sm.end() - 1
        close = find_array_close(area_ts, open_idx)
        entry = entry_ts(bkey, st, 6)
        area_ts = area_ts[:close] + entry + area_ts[close:]
        stats['B'] += 1

open('data/area-studios.ts', 'w', encoding='utf-8').write(area_ts)
print('inserted A(page.tsx):', stats['A'], 'B(area-studios):', stats['B'], 'dup-skip:', stats['skip_dup'])
print('no_page:', stats['no_page'][:10])
