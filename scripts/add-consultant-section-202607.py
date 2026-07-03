#!/usr/bin/env python3
"""全エリアページに AIスタジオ相談の埋め込みセクション(ConsultantSection)を挿入する。

- 冪等: 既に ConsultantSection があるページはスキップ
- 挿入位置: <RelatedAreas の直前（無ければ <SiteFooter の直前）
- areaKey=ディレクトリ名 / areaName=ページ内の areaName="..."（無ければ prefectureAreas から補完）
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AREA_DIR = ROOT / "app" / "area"

# フォールバック用: prefectureAreas.ts から slug->name を作る
pref_src = (ROOT / "data" / "prefectureAreas.ts").read_text(encoding="utf-8")
FALLBACK = dict(re.findall(r"slug:\s*'([^']+)'\s*,\s*name:\s*'([^']+)'", pref_src))
FALLBACK.update(dict(re.findall(r'slug:\s*"([^"]+)"\s*,\s*name:\s*"([^"]+)"', pref_src)))

IMPORT_LINE = "import ConsultantSection from '@/components/ConsultantSection'\n"

inserted, skipped, missing_name, no_anchor = 0, 0, [], []

for page in sorted(AREA_DIR.glob("*/page.tsx")):
    slug = page.parent.name
    src = page.read_text(encoding="utf-8")

    if "ConsultantSection" in src:
        skipped += 1
        continue

    m = re.search(r'areaName="([^"]+)"', src)
    name = m.group(1) if m else FALLBACK.get(slug)
    if not name:
        missing_name.append(slug)
        continue

    lines = src.splitlines(keepends=True)

    # 挿入位置を探す
    anchor_idx, indent = None, "      "
    for i, ln in enumerate(lines):
        if "<RelatedAreas" in ln:
            anchor_idx = i
            indent = ln[: len(ln) - len(ln.lstrip())]
            break
    if anchor_idx is None:
        for i, ln in enumerate(lines):
            if "<SiteFooter" in ln:
                anchor_idx = i
                indent = ln[: len(ln) - len(ln.lstrip())]
                break
    if anchor_idx is None:
        no_anchor.append(slug)
        continue

    block = (
        f"{indent}{{/* AIスタジオ相談（遅延ロード・エリア自動セット） */}}\n"
        f'{indent}<ConsultantSection areaKey="{slug}" areaName="{name}" />\n\n'
    )
    lines.insert(anchor_idx, block)

    # import 追加（最後のimport行の直後）
    src2 = "".join(lines)
    if "components/ConsultantSection" not in src2:
        import_idxs = [i for i, ln in enumerate(lines) if ln.startswith("import ")]
        lines.insert(import_idxs[-1] + 1, IMPORT_LINE)
        src2 = "".join(lines)

    page.write_text(src2, encoding="utf-8")
    inserted += 1

print(f"inserted={inserted} skipped(already)={skipped}")
if missing_name:
    print("NO NAME (skipped):", missing_name)
if no_anchor:
    print("NO ANCHOR (skipped):", no_anchor)
