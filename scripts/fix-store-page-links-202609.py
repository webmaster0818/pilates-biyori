#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""店舗別ページへの動線を、抜けているエリアページに追加する（冪等）。

2026-09-15 実測: 店舗ページ33本のうち
  ・29本 … 該当エリアページからの被リンク1本のみ
  ・1本  … /brands/rintosull-katsura/ は**被リンクゼロ**（sitemapにしか載っていない）
           ＝ 店舗ページの中で最も表示が多い（140imp）のに、サイト内から辿れない
ブランドハブとスタジオカードからの導線はコード側で通したので、ここでは
「エリアページに `店舗別ガイド` のcalloutが無いもの」を埋める。
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MARK = "g1-link-202609"


def store_pages() -> list:
    """データファイルから (urlSlug, storeName, areaSlug) を集める。"""
    out = []
    for f in ("bdc-stores.ts", "club-pilates-stores.ts", "g1-stores.ts", "kasane-stores.ts", "the-silk-stores.ts"):
        src = (ROOT / "data" / f).read_text(encoding="utf-8")
        for m in re.finditer(
            r'"?urlSlug"?:\s*["\']([^"\']+)["\'][\s\S]{0,600}?"?storeName"?:\s*["\']([^"\']+)["\']'
            r'[\s\S]{0,900}?"?areaSlug"?:\s*["\']([^"\']+)["\']', src):
            out.append(m.groups())
    return out


def main() -> None:
    added, already, missing = [], [], []
    for url_slug, name, area_slug in store_pages():
        p = ROOT / "app" / "area" / area_slug / "page.tsx"
        if not p.exists():
            missing.append(f"{url_slug}→/area/{area_slug}/(ページ無し)")
            continue
        s = p.read_text(encoding="utf-8")
        if f'/brands/{url_slug}/' in s:
            already.append(url_slug)
            continue
        anchor = re.search(r"\n(\s*)<RelatedAreas ", s)
        if not anchor:
            missing.append(f"{url_slug}→{area_slug}(挿入位置なし)")
            continue
        indent = anchor.group(1)
        block = (
            f"\n{indent}{{/* {MARK} */}}\n"
            f'{indent}<div className="my-8 bg-white border border-warm-200 p-5">\n'
            f'{indent}  <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>\n'
            f'{indent}  <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">'
            f"このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>\n"
            f'{indent}  <div className="flex flex-wrap gap-2">\n'
            f'{indent}    <Link href="/brands/{url_slug}/" '
            f'className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 '
            f'hover:border-warm-500 transition-colors">{name}の料金・体験を見る</Link>\n'
            f"{indent}  </div>\n"
            f"{indent}</div>\n"
        )
        p.write_text(s[:anchor.start()] + block + s[anchor.start():], encoding="utf-8")
        added.append(f"{area_slug}→{url_slug}")

    print(f"追加 {len(added)}件 / 既にあり {len(already)}件 / 追加できず {len(missing)}件")
    for a in added:
        print("   +", a)
    for m in missing:
        print("   ⚠️", m)


main()
