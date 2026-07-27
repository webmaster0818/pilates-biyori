#!/usr/bin/env python3
"""AreaModifierSections注入(冪等): import追加＋</main>直前に挿入。areaNameは既存表記から抽出"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SLUGS = ["tokyo-station", "shin-osaka", "shin-okubo", "esaka", "shonan",
         "ebina", "futakotamagawa", "chofu", "takadanobaba"]

for slug in SLUGS:
    p = ROOT / "app" / "area" / slug / "page.tsx"
    src = p.read_text()
    if "AreaModifierSections" in src:
        print(f"skip (already): {slug}")
        continue
    m = re.search(r'areaName="([^"]+)"', src)
    if not m:
        print(f"NG no areaName: {slug}")
        continue
    area = m.group(1)
    # import: 既存componentsのimport群の後に追加
    anchor = "import { Navigation } from '@/components/Navigation'"
    if anchor not in src:
        print(f"NG no import anchor: {slug}")
        continue
    src = src.replace(anchor, anchor + "\nimport { AreaModifierSections } from '@/components/AreaModifierSections'", 1)
    if "</main>" not in src:
        print(f"NG no </main>: {slug}")
        continue
    src = src.replace("</main>", f'        <AreaModifierSections studios={{studios}} areaName="{area}" />\n      </main>', 1)
    p.write_text(src)
    print(f"OK: {slug} ({area})")
