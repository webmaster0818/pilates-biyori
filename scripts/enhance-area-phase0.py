#!/usr/bin/env python3
"""Phase 0 (2026-06-11): GSC準勝ち筋の提携エリア15ページに独自データ比較枠＋タイトル鮮度を注入。

冪等。対象はGSC 28日で順位12〜42位・表示15以上の提携(officialUrl入り)エリア。
- AreaMarketComparison（エリア実データ×全国211スタジオ調査）を PriceComparisonTable 直後に挿入
- title の【2026最新】→【2026年6月最新】、訴求文言を体験・マシン込みに
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
SLUGS = [
    'gion-shijo',
    'toyosu', 'shimokitazawa', 'asakusa', 'nakano-sakaue', 'ebina',
    'koenji', 'tamachi', 'takadanobaba', 'chofu', 'yoga-komazawa',
    'nippori', 'otsuka', 'nishi-nippori', 'kinshicho', 'yoyogi-uehara',
]
IMPORT_LINE = "import { AreaMarketComparison } from '@/components/AreaMarketComparison'"

for slug in SLUGS:
    f = ROOT / 'app' / 'area' / slug / 'page.tsx'
    src = f.read_text(encoding='utf-8')
    orig = src

    if IMPORT_LINE not in src:
        src = src.replace(
            "import { PriceComparisonTable } from '@/components/PriceComparisonTable'",
            "import { PriceComparisonTable } from '@/components/PriceComparisonTable'\n" + IMPORT_LINE,
            1,
        )

    if '<AreaMarketComparison' not in src:
        m = re.search(r'([ \t]*)<PriceComparisonTable studios=\{studios\} areaName="([^"]+)" />', src)
        if not m:
            print(f'⚠️ {slug}: PriceComparisonTable anchor not found, skipped insert')
        else:
            indent, area = m.group(1), m.group(2)
            src = src.replace(
                m.group(0),
                m.group(0) + f'\n{indent}<AreaMarketComparison studios={{studios}} areaName="{area}" />',
                1,
            )

    src = src.replace('【2026最新】', '【2026年6月最新】', 1)
    src = src.replace('人気スタジオの料金プランを簡単比較！', '料金・体験レッスン・マシン対応を比較！', 1)

    if src != orig:
        f.write_text(src, encoding='utf-8')
        print(f'✓ {slug}')
    else:
        print(f'= {slug} (no change)')
