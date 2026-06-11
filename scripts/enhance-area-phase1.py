#!/usr/bin/env python3
"""Phase 1 (2026-06-11): 内部リンク・指名検索・独自データ枠の横展開。冪等。

A. prefectureAreas.ts 未登録エリアを登録（相互リンク圏に入れる）
   - エリア名はページtitleの「ピラティス{名前}おすすめ」から、都道府県は掲載スタジオ住所から抽出
B. 全エリアページの <TableOfContents areaName="X" /> に studioNames を渡す（スタジオ名ジャンプリンク＝指名検索対策）
C. AreaMarketComparison＋title改修を「全提携エリア(officialUrl入り)」へ横展開（Phase0の15は冪等スキップ）

実行後は必ずビルドし、数値・リンクの実体を検証すること。
"""
import re
import glob
import os
from pathlib import Path

ROOT = Path(__file__).parent.parent
os.chdir(ROOT)

PREF_RE = re.compile(r'(東京都|北海道|京都府|大阪府|[一-龠々]{2,3}県)')


def page_files():
    return sorted(glob.glob('app/area/*/page.tsx'))


def slug_of(f):
    return os.path.basename(os.path.dirname(f))


# ---------- A. prefectureAreas 登録 ----------
def register_missing_prefecture_areas():
    pa_path = Path('data/prefectureAreas.ts')
    ts = pa_path.read_text(encoding='utf-8')
    registered = set(re.findall(r"slug: '([a-z0-9-]+)'", ts))

    additions = {}  # pref -> [(slug, name)]
    skipped = []
    for f in page_files():
        slug = slug_of(f)
        if slug in registered:
            continue
        src = open(f, encoding='utf-8').read()
        mname = re.search(r"title: '[^']*?ピラティス(.+?)(?:おすすめ|の)", src)
        addrs = re.findall(r"address: '([^']+)'", src)
        prefs = [PREF_RE.search(a).group(1) for a in addrs if PREF_RE.search(a)]
        if not mname or not prefs:
            skipped.append(slug)
            continue
        # 最頻の都道府県を採用（移転・誤記の混入対策）
        pref = max(set(prefs), key=prefs.count)
        additions.setdefault(pref, []).append((slug, mname.group(1)))

    for pref, items in additions.items():
        block = re.search(r"(\{\n    prefecture: '" + re.escape(pref) + r"',\n    areas: \[\n)(.*?)(\n    \],\n  \},)", ts, re.DOTALL)
        lines = ''.join(f"      {{ slug: '{s}', name: '{n}' }},\n" for s, n in items)
        if block:
            ts = ts[:block.end(2)] + '\n' + lines.rstrip('\n') + ts[block.end(2):]
        else:
            new_block = (
                "  {\n    prefecture: '" + pref + "',\n    areas: [\n" + lines + "    ],\n  },\n"
            )
            ts = re.sub(r"\n\]\n$", "\n" + new_block + "]\n", ts)
    pa_path.write_text(ts, encoding='utf-8')
    n = sum(len(v) for v in additions.values())
    print(f"A: registered {n} areas into prefectureAreas ({len(additions)} prefs), skipped={skipped}")
    for pref, items in sorted(additions.items()):
        print('   ', pref, [f'{s}={n}' for s, n in items])


# ---------- B. ToC に studioNames ----------
def patch_toc():
    n = 0
    for f in page_files():
        src = open(f, encoding='utf-8').read()
        if 'studioNames=' in src or 'const studios' not in src:
            continue
        src2 = re.sub(
            r'<TableOfContents areaName="([^"]+)" />',
            r'<TableOfContents areaName="\1" studioNames={studios.map((s) => s.name)} />',
            src,
        )
        if src2 != src:
            open(f, 'w', encoding='utf-8').write(src2)
            n += 1
    print(f"B: ToC studioNames added on {n} pages")


# ---------- C. 提携エリアへ AreaMarketComparison 横展開 ----------
IMPORT_LINE = "import { AreaMarketComparison } from '@/components/AreaMarketComparison'"


def affiliate_slugs():
    slugs = set()
    for f in page_files():
        if 'officialUrl' in open(f, encoding='utf-8').read():
            slugs.add(slug_of(f))
    ts = open('data/area-studios.ts', encoding='utf-8').read()
    for m in re.finditer(r"'([a-z0-9-]+)':\s*\{", ts):
        chunk = ts[m.end():m.end() + 20000]
        nxt = re.search(r"\n  '[a-z0-9-]+':\s*\{", chunk)
        seg = chunk[:nxt.start()] if nxt else chunk
        if 'officialUrl' in seg:
            slugs.add(m.group(1))
    return sorted(slugs)


def expand_market_comparison():
    n = skip = 0
    for slug in affiliate_slugs():
        f = Path(f'app/area/{slug}/page.tsx')
        if not f.exists():
            print(f'   ⚠️ {slug}: page not found (area-studios系のみ？)')
            continue
        src = f.read_text(encoding='utf-8')
        orig = src
        if IMPORT_LINE not in src and 'PriceComparisonTable' in src:
            src = src.replace(
                "import { PriceComparisonTable } from '@/components/PriceComparisonTable'",
                "import { PriceComparisonTable } from '@/components/PriceComparisonTable'\n" + IMPORT_LINE,
                1,
            )
        if '<AreaMarketComparison' not in src:
            m = re.search(r'([ \t]*)<PriceComparisonTable studios=\{studios\} areaName="([^"]+)" />', src)
            if m:
                src = src.replace(
                    m.group(0),
                    m.group(0) + f'\n{m.group(1)}<AreaMarketComparison studios={{studios}} areaName="{m.group(2)}" />',
                    1,
                )
            else:
                skip += 1
        src = src.replace('【2026最新】', '【2026年6月最新】', 1)
        src = src.replace('人気スタジオの料金プランを簡単比較！', '料金・体験レッスン・マシン対応を比較！', 1)
        if src != orig:
            f.write_text(src, encoding='utf-8')
            n += 1
    print(f"C: market comparison/title expanded on {n} pages (anchor-missing={skip}, total affiliate={len(affiliate_slugs())})")


register_missing_prefecture_areas()
patch_toc()
expand_market_comparison()
