# 2026-10-13 MediaXAI: CLUB PILATES（もしも p_id=4728）を全掲載に設置。冪等。
# 店舗別のテキストリンク（data/clubpilates-moshimo-links.tsv）を店名の完全一致で当て、
# 一致しない掲載（ブランド名だけ・「近隣」・エリア表記・別名の店）は「全店舗共通用」(62359) にする。
import pathlib, re, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id='
COMMON = '62359'

def key(name):
    k = re.sub(r'（[^）]*）', '', name)
    k = re.sub(r'CLUB PILATES|クラブピラティス', '', k)
    k = re.sub(r'の?(体験)?予約(申し?込み)?$', '', k)
    return re.sub(r'\s', '', k).removesuffix('店')

store = {}
for line in (ROOT / 'data/clubpilates-moshimo-links.tsv').read_text().splitlines():
    pl, label, _ = line.split('\t')
    if label.startswith('【使用不可】'):  # 広告主が使用不可にしたリンクは使わない（その店は共通リンク）
        continue
    if pl != COMMON:
        store[key(label)] = pl

files = list((ROOT / 'app/area').rglob('page.tsx')) + [ROOT / 'data/area-studios.ts']
stat = {'store': 0, 'common': 0}; unmatched = []
for p in files:
    s = p.read_text(); edits = []
    for m in re.finditer(r"(?m)^(\s*)name: '([^']+)',\n", s):
        if not re.search(r'CLUB PILATES|クラブピラティス', m.group(2)):
            continue
        k = key(m.group(2)); k = {'成城学園前': '成城学園'}.get(k, k); pl = store.get(k)
        if pl: stat['store'] += 1
        else: stat['common'] += 1; unmatched.append(m.group(2)); pl = COMMON
        url = BASE + pl
        nxt = re.search(r"(?m)^\s*name: '", s[m.end():])
        end = m.end() + (nxt.start() if nxt else len(s) - m.end())
        blk = s[m.end():end]
        if re.search(r"officialUrl: '[^']*'", blk):
            blk2 = re.sub(r"officialUrl: '[^']*'", f"officialUrl: '{url}'", blk, count=1)
        else:
            blk2 = f"{m.group(1)}officialUrl: '{url}',\n" + blk
        edits.append((m.end(), end, blk2))
    for a, b, rep in reversed(edits):
        s = s[:a] + rep + s[b:]
    p.write_text(s)
ALIAS = None
print(stat); print('共通リンク:', sorted(set(unmatched)))
