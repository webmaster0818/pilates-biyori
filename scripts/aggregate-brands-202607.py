#!/usr/bin/env python3
"""P1: 掲載全スタジオをブランド別に集計→data/brands-aggregate.json
系統A(app/area/*/page.tsx インラインstudios)＋系統B(data/area-studios.ts)の両方を走査。
実データのみ(price/trial/rating/officialUrl/address/access)。rating無しはnullのまま。
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_AREA = ROOT / "app" / "area"

BRANDS = [
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
]

def brand_of(name):
    # kasaneを先に判定（pilates Kとの誤爆防止）
    if re.search(r"kasane", name, re.I):
        return "kasane"
    for slug, pat in BRANDS:
        if slug in ("kasane",):
            continue
        if re.search(pat, name, re.I if slug not in ("pilates-k",) else 0):
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
bsrc = (ROOT / "data" / "area-studios.ts").read_text(encoding="utf-8")
for area_m in re.finditer(r"'([a-z0-9-]+)': \{[\s\S]*?studios: \[([\s\S]*?)\n  \]", bsrc):
    aslug, body = area_m.group(1), area_m.group(2)
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

out = ROOT / "data" / "brands-aggregate.json"
out.write_text(json.dumps(agg, ensure_ascii=False, indent=2), encoding="utf-8")
for b, stores in agg.items():
    rated = [s for s in stores if s.get("rating")]
    print(f"{b}: {len(stores)}店舗 (rating有り{len(rated)}) 例: {stores[0]['name'] if stores else '-'}")
