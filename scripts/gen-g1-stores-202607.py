#!/usr/bin/env python3
"""G1店舗別ページ量産(冪等): brands-aggregate.jsonの検証済み実データから
data/g1-stores.ts + app/brands/{slug}/page.tsx を生成。
- GSCで表示実績のあった店舗のみ対象(捏造ゼロ・実データ転記のみ)
- nearby は prefectureAreas.ts の同都道府県エリアから自動選定(実在slugのみ)
"""
import json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
AGG = json.loads((ROOT / "data" / "brands-aggregate.json").read_text())
PREF_SRC = (ROOT / "data" / "prefectureAreas.ts").read_text()

# prefectureAreas.ts をパース: slug -> (prefecture, [siblings])
pref_map = {}
for block in re.finditer(r"prefecture: '([^']+)',\s*areas: \[([\s\S]*?)\]", PREF_SRC):
    pref = block.group(1)
    areas = re.findall(r"\{ slug: '([^']+)', name: '([^']+)' \}", block.group(2))
    for slug, name in areas:
        pref_map[slug] = (pref, areas)

# 対象店舗: (brand, aggregate内のname一致キーワード, urlSlug, areaQuery)
TARGETS = [
    ("rintosull", "天王寺店", "rintosull-tennoji", "天王寺"),
    ("rintosull", "本厚木店", "rintosull-honatsugi", "本厚木"),
    ("rintosull", "豊橋店", "rintosull-toyohashi", "豊橋"),
    ("rintosull", "明石店", "rintosull-akashi", "明石"),
    ("rintosull", "高松店", "rintosull-takamatsu", "高松"),
    ("rintosull", "天神店", "rintosull-tenjin", "天神"),
    ("rintosull", "西新店", "rintosull-nishijin", "西新"),
    ("rintosull", "大井町店", "rintosull-oimachi", "大井町"),
    ("rintosull", "王子店", "rintosull-oji", "王子"),
    ("rintosull", "茨木店", "rintosull-ibaraki", "茨木"),
    ("rintosull", "阿佐ヶ谷店", "rintosull-asagaya", "阿佐ヶ谷"),
    ("club-pilates", "辻堂店", "club-pilates-tsujido", "辻堂"),
    ("club-pilates", "福岡西新店", "club-pilates-fukuoka-nishijin", "西新"),
    ("club-pilates", "江坂店", "club-pilates-esaka", "江坂"),
    ("the-silk", "大門浜松町店", "the-silk-daimon-hamamatsucho", "大門浜松町"),
    ("kasane", "つくば店", "kasane-tsukuba", "つくば"),
    ("pilates-mee", "大井町店", "pilates-mee-oimachi", "大井町"),
    ("pilates-k", "八王子オクトーレ店", "pilates-k-hachioji", "八王子"),
]

PREF_RE = re.compile(r"^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)")

def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')

entries = []
for brand, kw, url_slug, area_query in TARGETS:
    # 「王子店」が「八王子店」に誤マッチしない様に前方文字を検査
    cands = []
    for s in AGG.get(brand, []):
        name = s.get("name", "")
        i = name.find(kw)
        if i < 0:
            continue
        if kw == "王子店" and i > 0 and name[i-1] == "八":
            continue
        cands.append(s)
    if not cands:
        print(f"NG no data: {brand} {kw}")
        continue
    # 複数候補は住所が具体的な方(曖昧表記でない)を優先、同格なら情報量の多い方
    def concrete(x):
        a = x.get("address", "")
        return not (("詳細" in a) or ("エリア" in a) or ("付近" in a))
    s = max(cands, key=lambda x: (concrete(x), len(x.get("address", "")) + len(x.get("trial", ""))))
    addr = s.get("address", "")
    vague = ("詳細" in addr) or ("エリア" in addr) or ("付近" in addr)
    prefm = PREF_RE.match(addr)
    prefecture = prefm.group(1) if prefm else None
    area_slug = s["areaSlug"]
    area_label = s["areaName"]
    # nearby: 同都道府県の他エリア最大3件
    nearby = []
    if area_slug in pref_map:
        for slug, name in pref_map[area_slug][1]:
            if slug != area_slug and len(nearby) < 3:
                nearby.append((slug, name))
    lines = [
        f'    urlSlug: "{url_slug}",',
        f'    areaQuery: "{esc(area_query)}",',
        f'    storeName: "{esc(s["name"])}",',
        f'    address: "{esc(addr)}",',
    ]
    if vague:
        lines.append("    addressIsVague: true,")
        if prefecture:
            lines.append(f'    prefecture: "{prefecture}",')
    lines += [
        f'    access: "{esc(s.get("access", "詳細は公式サイトでご確認ください"))}",',
        f'    price: "{esc(s.get("price", "詳細は公式サイト参照"))}",',
        f'    trial: "{esc(s.get("trial", "体験の有無は公式サイトでご確認ください"))}",',
        f'    areaSlug: "{area_slug}",',
        f'    areaLabel: "{esc(area_label)}",',
        "    nearby: [" + ", ".join(f'{{ slug: "{sl}", label: "{esc(nm)}" }}' for sl, nm in nearby) + "],",
    ]
    entries.append((brand, url_slug, "  {\n" + "\n".join(lines) + "\n  },"))
    print(f"OK {url_slug} <- {s['name']} (area={area_slug}, vague={vague})")

# data/g1-stores.ts
body = "\n".join(e[2] for e in entries)
brand_map = ",\n".join(f'  "{slug}": "{brand}"' for brand, slug, _ in entries)
(ROOT / "data" / "g1-stores.ts").write_text(f'''// G1店舗別ページ(2026-07 Phase2): GSCで表示実績のあったブランド×店舗の受け皿。
// データは data/brands-aggregate.json の検証済み実データからスクリプト生成(scripts/gen-g1-stores-202607.py)。
// 評価は店舗別一次データが無いため付けない(捏造回避)。住所非開示店はaddressIsVagueで正直に表記。
import type {{ BdcStore }} from "@/data/bdc-stores";

export const g1Stores: BdcStore[] = [
{body}
];

export const g1BrandOf: Record<string, string> = {{
{brand_map}
}};

export function getG1Store(slug: string): BdcStore | undefined {{
  return g1Stores.find((s) => s.urlSlug === slug);
}}
''')

# ページ生成
PAGE = '''import type {{ Metadata }} from "next";
import {{ BrandAreaReceiver }} from "@/components/BrandAreaReceiver";
import {{ getG1Store }} from "@/data/g1-stores";

const SLUG = "{slug}";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {{
  title: `{brand_name} ${{store.areaQuery}}の料金・体験・アクセス【2026年7月】｜マシンピラティス`,
  description: `{brand_name} ${{store.areaQuery}}（${{store.storeName}}）の料金・体験レッスン・アクセスを当サイト掲載データで整理。${{store.access}}。${{store.areaQuery}}周辺のピラティス比較・ブランド全店舗一覧へのリンク付き。`,
  alternates: {{ canonical: `https://biyori-pilates.com/brands/${{SLUG}}/` }},
}};

export default function Page() {{
  return <BrandAreaReceiver store={{store}} brandSlug="{brand}" />;
}}
'''
BRAND_NAMES = {"rintosull": "Rintosull（リントスル）", "club-pilates": "CLUB PILATES",
               "the-silk": "the SILK", "kasane": "Pilates KASANE",
               "pilates-mee": "Pilates Mee（ピラティスミー）", "pilates-k": "pilates K（ピラティスK）"}
made = 0
for brand, slug, _ in entries:
    d = ROOT / "app" / "brands" / slug
    if d.exists():
        print(f"page skip (exists): {slug}")
        continue
    d.mkdir(parents=True)
    (d / "page.tsx").write_text(PAGE.format(slug=slug, brand=brand, brand_name=BRAND_NAMES[brand]))
    made += 1
print(f"pages created: {made} / stores in data: {len(entries)}")
