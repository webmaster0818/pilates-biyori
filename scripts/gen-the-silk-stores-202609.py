#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""the SILK の店舗別ページを、掲載済みの実データから生成する（冪等）。

2026-09-15 MediaXAI依頼「アフィリエイト設置対象のスタジオの単独ページを作る」のPhase 1。
the SILK は提携ブランドで最大の未回収（指名クエリ 852imp・0クリック）で、
受け皿がブランドハブ1枚しか無かった。

■ 作るもの
  data/the-silk-stores.ts        … BdcStore型のデータ
  app/brands/the-silk-{slug}/    … 各店舗ページ（BrandAreaReceiverを使う）

■ 作らないもの
  住所も口コミ要約も無い店舗（15店）。店名とブランド共通の説明文しか書けず、
  中身の無いページになるため。**数を増やすより、書けるものだけ書く。**

■ 注意
  ⚠️ 同じ店が別表記で複数ページに載っている（「藤沢店」と「湘南・藤沢店」、
     「八重洲店」と「東京八重洲店」など10組）。統合しないと同じ店のページが2枚できる。
  ⚠️ title は必ずエリア名を先頭に置く。ブランド名を先頭にすると、
     素の「the SILK」クエリをブランドハブから奪う（2026-08-27に実際に起きた）。
  ⚠️ 既に存在する the-silk-daimon-hamamatsucho（g1-stores）は触らない。
"""
import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXISTING = {"the-silk-daimon-hamamatsucho"}  # g1-stores で作成済み

norm = lambda v: re.sub(r"[\s　]", "", v)


def reviews() -> set:
    src = (ROOT / "data" / "studio-reviews.ts").read_text(encoding="utf-8")
    return {norm(k) for k in re.findall(r'^\s{2}"([^"]+)":\s*\{', src, re.M)}


def area_labels() -> dict:
    src = (ROOT / "data" / "prefectureAreas.ts").read_text(encoding="utf-8")
    out = {}
    for pref in re.finditer(r"prefecture: '([^']+)',\s*areas: \[([\s\S]*?)\n    \],", src):
        for m in re.finditer(r"\{ slug: '([^']+)', name: '([^']+)' \}", pref.group(2)):
            out[m.group(1)] = (m.group(2), pref.group(1))
    return out


def collect() -> list:
    """エリアページと area-studios.ts から the SILK の掲載ブロックを集める。"""
    rows = []
    for p in sorted((ROOT / "app" / "area").rglob("page.tsx")):
        s = p.read_text(encoding="utf-8")
        st = [m.start() for m in re.finditer(r"^[ \t]*name:\s*'[^']+'.*$", s, re.M)]
        for i, a in enumerate(st):
            blk = s[a:st[i + 1] if i + 1 < len(st) else len(s)]
            nm = re.match(r"^[ \t]*name:\s*'([^']+)'", blk).group(1)
            if not re.search(r"the SILK", nm, re.I) or "felmat" not in blk:
                continue
            g = lambda k: (re.search(rf"{k}:\s*'([^']*)'", blk) or [None, ""])[1]
            rows.append({"area": p.parent.name, "name": nm.strip(), "address": g("address"),
                         "access": g("access"), "price": g("price"), "trial": g("trial")})
    src = (ROOT / "data" / "area-studios.ts").read_text(encoding="utf-8")
    for m in re.finditer(r"'([a-z0-9\-]+)':\s*\{[\s\S]*?\n    \],", src):
        slug, body = m.group(1), m.group(0)
        st = [x.start() for x in re.finditer(r"^\s*name:\s*'[^']+'.*$", body, re.M)]
        for i, a in enumerate(st):
            blk = body[a:st[i + 1] if i + 1 < len(st) else len(body)]
            nm = re.match(r"^\s*name:\s*'([^']+)'", blk).group(1)
            if not re.search(r"the SILK", nm, re.I) or "felmat" not in blk:
                continue
            g = lambda k: (re.search(rf"{k}:\s*'([^']*)'", blk) or [None, ""])[1]
            rows.append({"area": slug, "name": nm.strip(), "address": g("address"),
                         "access": g("access"), "price": g("price"), "trial": g("trial")})
    return rows


def core(name: str) -> str:
    """同じ店の別表記をまとめるためのキー。"""
    v = re.sub(r"^the SILK\s*", "", name, flags=re.I)
    v = re.sub(r"（[^）]*）", "", v)
    v = re.sub(r"(店|スタジオ)$", "", v).strip()
    return re.sub(r"^(東京|湘南・|大阪)", "", v)


ROMAJI = {
    "赤羽": "akabane", "赤坂見附": "akasaka-mitsuke", "秋葉原": "akihabara", "浅草": "asakusa",
    "千葉": "chiba", "中目黒": "nakameguro", "恵比寿": "ebisu", "広尾": "hiroo",
    "藤沢": "fujisawa", "船橋": "funabashi", "二子玉川": "futakotamagawa", "銀座": "ginza",
    "銀座一丁目": "ginza-itchome", "五反田": "gotanda", "八王子": "hachioji",
    "池袋西口": "ikebukuro-nishiguchi", "自由が丘": "jiyugaoka", "神楽坂": "kagurazaka",
    "蒲田": "kamata", "亀戸": "kameido", "柏": "kashiwa", "川崎": "kawasaki",
    "吉祥寺": "kichijoji", "北千住": "kita-senju", "八重洲": "yaesu", "松戸": "matsudo",
    "目黒": "meguro", "大宮": "omiya", "渋谷": "shibuya", "新宿": "shinjuku",
    "田町": "tamachi", "池袋東口": "ikebukuro-higashiguchi", "巣鴨": "sugamo",
    "立川": "tachikawa", "高田馬場": "takadanobaba", "天王寺MIO": "tennoji-mio",
    "所沢": "tokorozawa", "上野": "ueno", "梅田": "umeda", "浦和": "urawa",
    "横浜": "yokohama", "横浜パーソナル": "yokohama-personal", "新浦安": "shin-urayasu",
}


def main() -> None:
    RSET, LABELS = reviews(), area_labels()
    rows = collect()
    groups = {}
    for r in rows:
        groups.setdefault(core(r["name"]), []).append(r)

    stores, skipped, noromaji = [], [], []
    for key, items in sorted(groups.items()):
        # 住所が具体的なものを代表にする
        items.sort(key=lambda r: (0 if re.search(r"\d", r["address"]) and "公式" not in r["address"] else 1,
                                  -len(r["address"])))
        rep = items[0]
        addr_ok = bool(re.search(r"\d", rep["address"])) and "公式" not in rep["address"]
        rev_ok = any(norm(x["name"]) in RSET for x in items)
        if not (addr_ok or rev_ok):
            skipped.append(key)
            continue
        rj = ROMAJI.get(key)
        if not rj:
            noromaji.append(key)
            continue
        url_slug = f"the-silk-{rj}"
        if url_slug in EXISTING:
            continue
        label, _pref = LABELS.get(rep["area"], (key, ""))
        nearby = [{"slug": x["area"], "label": LABELS.get(x["area"], (x["area"], ""))[0]}
                  for x in items[1:] if x["area"] != rep["area"]][:3]
        stores.append({
            "urlSlug": url_slug, "areaQuery": key,
            "storeName": rep["name"].replace("（近隣エリア）", "").strip(),
            "address": rep["address"], "addressIsVague": not addr_ok,
            "access": rep["access"], "price": rep["price"], "trial": rep["trial"],
            "areaSlug": rep["area"], "areaLabel": label, "nearby": nearby,
        })

    # データファイル
    body = ",\n".join(
        "  " + json.dumps(s, ensure_ascii=False) for s in stores)
    (ROOT / "data" / "the-silk-stores.ts").write_text(
        "// the SILK の店舗別ページ用データ（scripts/gen-the-silk-stores-202609.py が生成）。\n"
        "// 値はすべてエリアページの掲載データからの転記。新規の調査はしていない。\n"
        "// ⚠️ 住所が公式非開示の店は addressIsVague: true。誇張して書かない。\n"
        'import type { BdcStore } from "@/data/bdc-stores";\n\n'
        f"export const theSilkStores: BdcStore[] = [\n{body}\n];\n\n"
        "export const getTheSilkStore = (slug: string): BdcStore | undefined =>\n"
        "  theSilkStores.find((s) => s.urlSlug === slug);\n",
        encoding="utf-8")

    # ページ
    made = 0
    for s in stores:
        d = ROOT / "app" / "brands" / s["urlSlug"]
        d.mkdir(parents=True, exist_ok=True)
        # ⚠️ titleはエリア名が先頭。ブランド名先頭にするとハブのクエリを奪う。
        (d / "page.tsx").write_text(
            'import type { Metadata } from "next";\n'
            'import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";\n'
            'import { getTheSilkStore } from "@/data/the-silk-stores";\n\n'
            f'const SLUG = "{s["urlSlug"]}";\n'
            "const store = getTheSilkStore(SLUG)!;\n\n"
            "export const metadata: Metadata = {\n"
            f'  title: `{s["areaQuery"]}のthe SILK（ザ シルク）｜料金・体験・口コミとアクセス`,\n'
            f'  description: `{s["areaQuery"]}のthe SILK（{s["storeName"]}）の料金・体験レッスン・アクセスを掲載データで整理。'
            "${store.access}。Googleの口コミをもとにした編集部の要約（出典リンクつき）と、"
            f'{s["areaLabel"]}エリアのピラティス比較へのリンク付き。`,\n'
            "  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },\n"
            "};\n\n"
            "export default function Page() {\n"
            '  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;\n'
            "}\n", encoding="utf-8")
        made += 1

    print(f"生成 {made}ページ / data/the-silk-stores.ts {len(stores)}件")
    print(f"見送り（住所も口コミも無い） {len(skipped)}件: {skipped}")
    if noromaji:
        print(f"🚨 ローマ字未定義 {len(noromaji)}件: {noromaji}")


main()
