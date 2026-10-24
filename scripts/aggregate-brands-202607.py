#!/usr/bin/env python3
"""P1: 掲載全スタジオをブランド別に集計→data/brands-aggregate.json
系統A(app/area/*/page.tsx インラインstudios)＋系統B(data/area-studios.ts)の両方を走査。
実データのみ(price/trial/rating/officialUrl/address/access)。rating無しはnullのまま。
"""
import json, re, unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_AREA = ROOT / "app" / "area"

BRANDS = [
    ("days-pilates",  r"DAYS ?PILATES|デイズピラティス"),
    ("element",       r"^ELEMENT\b"),
    ("urban-classic", r"URBAN CLASSIC"),
    ("brest",         r"BREST"),
    ("lucina",        r"ルキナ|Lucina"),
    ("celestia",      r"セレスティア|Celestia"),
    ("the-silk",      r"the SILK"),
    ("24-7pilates",   r"24/7"),
    ("pilates-mee",   r"Pilates Mee|ピラティスミー|ピラティスMee"),
    ("zen-place",     r"zen ?place"),
    ("pilates-k",     r"(?<!kasane )(pilates K |ピラティスK )|pilates K$|ピラティスK$"),
    ("kasane",        r"kasane|KASANE"),
    ("bdc",           r"BDC"),
    ("rintosull",     r"Rintosull|リントスル"),
    ("club-pilates",  r"CLUB PILATES|Club Pilates|club pilates"),
    ("dr-pilates",    r"Dr\.?ピラティス|ドクターピラティス"),
    ("luluto",        r"ルルト|luluto"),  # 2026-10-09 追加（felmat L12015F）
    # 2026-10-14 追加（A8 DEP 5IM0／1to1 5G1I／Repilates 5FZU）。lib/brandLink.ts と同じ判定
    ("dep",           r"ピラティススタジオ ?DEP"),
    ("1to1",          r"1to1"),
    ("repilates",     r"Repilates|(?<!ジュ)リピラティス"),  # 「ジュリピラティス」を拾わない
    # 2026-10-24 追加（afi-b 816076W／A8 1O96）。大文字小文字を区別（Stella Pilates 除外）。LAVA は rintosull より後＝LAVA店内の Rintosull を拾わない
    ("la-pilates",    r"(?<!Stel)La ?[Pp]ilates|ラ ?ピラティス"),
    ("lava",          r"LAVA"),
]
CASE_SENSITIVE = ("pilates-k", "la-pilates", "lava")

def brand_of(name):
    # kasaneを先に判定（pilates Kとの誤爆防止）
    if re.search(r"kasane", name, re.I):
        return "kasane"
    for slug, pat in BRANDS:
        if slug in ("kasane",):
            continue
        if re.search(pat, name, re.I if slug not in CASE_SENSITIVE else 0):
            return slug
    return None

FIELD_PATS = {
    "price": r"price: '([^']*)'",
    "trial": r"trial: '([^']*)'",
    "rating": r"rating: ([\d.]+)",
    "officialUrl": r"officialUrl: '([^']*)'",
    "address": r"address: '([^']*)'",
    "access": r"access: '([^']*)'",
}

def parse_studios(text):
    """name: '...' 区切りでスタジオブロック化し、次のname:までのフィールドを取る"""
    out = []
    parts = re.split(r"(?=\bname: ')", text)
    for p in parts:
        mn = re.match(r"name: '([^']+)'", p)
        if not mn:
            continue
        rec = {"name": mn.group(1)}
        for k, pat in FIELD_PATS.items():
            m = re.search(pat, p)
            if m:
                rec[k] = float(m.group(1)) if k == "rating" else m.group(1)
        out.append(rec)
    return out

# slug→エリア名マップ
area_names = {}
for f in APP_AREA.glob("*/page.tsx"):
    src = f.read_text(encoding="utf-8")
    m = re.search(r'areaName="([^"]+)"', src)
    if m:
        area_names[f.parent.name] = m.group(1)

agg = {slug: [] for slug, _ in BRANDS}
seen = set()  # (brand, name) 重複防止(A/B両方に載る場合)

# 系統B
# ⚠️ 2026-09-04 修正: 配列の終端を `\n  ]`(スペース2) で探していたが、
#    area-studios.ts の実体は `\n    ],`(スペース4＋カンマ)。
#    このため **この正規表現は一度もマッチせず、152エリア・約300店舗が
#    ずっと集計から漏れていた**（ブランドページの店舗数・一覧・口コミ集約が3割少なかった）。
#    終端を実体に合わせ、インデントに依存しないよう括弧の対応で切り出す。
# 教訓: 生成物の件数は「前回と同じ」で安心せず、必ず元データの実数と突き合わせる。
bsrc = (ROOT / "data" / "area-studios.ts").read_text(encoding="utf-8")
for area_m in re.finditer(r"'([a-z0-9-]+)': \{[\s\S]*?studios: \[([\s\S]*?)\n    \],", bsrc):
    aslug, body = area_m.group(1), area_m.group(2)
    # 2026-10-09: ページ（app/area/<slug>/page.tsx）が無いキーは集計しない（リンク切れになる。
    #   同じ店舗がページのあるエリアにも載っていれば系統Aで拾われる）
    if not (APP_AREA / aslug / "page.tsx").exists():
        continue
    for rec in parse_studios(body):
        b = brand_of(rec["name"])
        if b and (b, rec["name"]) not in seen:
            seen.add((b, rec["name"]))
            rec["areaSlug"] = aslug
            rec["areaName"] = area_names.get(aslug, aslug)
            agg[b].append(rec)

# 系統A
for f in sorted(APP_AREA.glob("*/page.tsx")):
    src = f.read_text(encoding="utf-8")
    m = re.search(r"const studios = \[([\s\S]*?)\n\]", src)
    if not m:
        continue
    for rec in parse_studios(m.group(1)):
        b = brand_of(rec["name"])
        if b and (b, rec["name"]) not in seen:
            seen.add((b, rec["name"]))
            rec["areaSlug"] = f.parent.name
            rec["areaName"] = area_names.get(f.parent.name, f.parent.name)
            agg[b].append(rec)

# 2026-10-15: 同じ公式店舗が複数エリアページに載っている場合（例: 「zen place pilates 錦糸町」と
#   「zen place pilates 錦糸町スタジオ」「〜 錦糸町（近隣エリア）」）、ブランドページの店舗一覧では1店舗1行にする。
#   店名を正規化（括弧内・ブランド名より前・「ピラティス」「スタジオ」・空白・末尾の「店」を除去）して
#   同じなら同一店舗とみなし、住所が具体的な1件だけ残す（同点なら先に見つかった方）。
#   正規化後が空になる名前（ブランド名だけの行）は統合しない。
BRAND_PAT = dict(BRANDS)

def store_key(brand, name):
    s = re.sub(r"[（(][^）)]*[）)]", " ", name)
    m = re.search(BRAND_PAT[brand], s, re.I if brand not in CASE_SENSITIVE else 0)
    if m:
        s = s[m.end():]
    s = re.sub(r"(マシン)?ピラティス(スタジオ)?|スタジオ|Studio|PILATES|Pilates|pilates", "", s)
    s = re.sub(r"\s+", "", s)
    s = re.sub(r"店$", "", s)
    return s

def addr_core(a):
    """住所の「市区町村＋最初の番地」まで（表記ゆれを吸収して比較用）"""
    a = unicodedata.normalize("NFKC", a or "")
    a = re.sub(r"〒?\d{3}-\d{4}|\s", "", a)
    a = re.sub(r"(\d)[‐−ー―－](?=\d)", r"\1-", a)
    a = a.replace("丁目", "-").replace("番地", "-").replace("番", "-").replace("号", "")
    a = re.sub(r"^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)", "", a)
    m = re.match(r"^\D*\d+(?:-\d+)*", a)
    return m.group(0) if m else a

def name_score(n):
    # 同点なら「（近隣）」「エリア」付きでない店名を残す
    return 0 if re.search(r"近隣|エリア|沿線", n) else 1

def addr_score(a):
    if not a:
        return 0
    if re.search(r"詳細|エリア|周辺|近隣|付近|参照|確認|徒歩|沿線", a):
        return 1
    if re.search(r"\d+\s*[-‐−－ー丁番]\s*\d", a):
        return 3
    return 2

for b, stores in agg.items():
    winner = {}   # key -> 残す index
    drop = set()
    for idx, rec in enumerate(stores):
        k = store_key(b, rec["name"])
        if not k:
            continue
        if k not in winner:
            winner[k] = idx
            continue
        w = stores[winner[k]]
        a, c = rec.get("address"), w.get("address")
        # 両方とも番地まである住所で番地が食い違う場合は別店舗の可能性があるため統合しない
        if addr_score(a) == 3 and addr_score(c) == 3 and addr_core(a) != addr_core(c):
            continue
        if (addr_score(a), name_score(rec["name"])) > (addr_score(c), name_score(w["name"])):
            drop.add(winner[k])
            winner[k] = idx
        else:
            drop.add(idx)
    agg[b] = [rec for idx, rec in enumerate(stores) if idx not in drop]

out = ROOT / "data" / "brands-aggregate.json"
out.write_text(json.dumps(agg, ensure_ascii=False, indent=2), encoding="utf-8")
for b, stores in agg.items():
    rated = [s for s in stores if s.get("rating")]
    print(f"{b}: {len(stores)}店舗 (rating有り{len(rated)}) 例: {stores[0]['name'] if stores else '-'}")
