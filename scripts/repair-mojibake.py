#!/usr/bin/env python3
"""19エリアページのU+FFFD文字化けを、クリーンな同型ページの本文照合で復元する。

原理: 化けページはテンプレ共通文が多いので、化け箇所の前後コンテキストで
クリーンページ群（コーパス）を検索し、欠けた中身を実在の正常文から回収する。
サイト自身の文章のみを辞書にするため捏造にならない。

- 第1パス: 前後コンテキスト(可変長)でコーパス照合。全一致候補が単一の文字列に収束した場合のみ置換
- 未解決はレポート出力（→個別修正）
冪等。--report で置換せずレポートのみ。
"""
import re
import glob
import os
import sys
from collections import Counter

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

REPORT_ONLY = '--report' in sys.argv

files = sorted(glob.glob('app/area/*/page.tsx'))
broken_files = [f for f in files if '�' in open(f, encoding='utf-8').read()]
clean_corpus = '\n'.join(
    open(f, encoding='utf-8').read() for f in files if f not in broken_files
)

RUN = re.compile(r'�+')


def try_recover(text, m, corpus):
    """化けrun m の前後コンテキストでコーパスを照合し、復元文字列を返す（不可ならNone）"""
    start, end = m.start(), m.end()
    nfffd = end - start
    # コンテキスト長を変えて試す（長いほど特異的）
    for ctx_len in (14, 10, 7, 5):
        left = text[max(0, start - ctx_len):start]
        right = text[end:end + ctx_len]
        if '�' in left or '�' in right or len(left) < 3 or len(right) < 3:
            continue
        # 欠損は1〜nfffd+2文字と仮定
        pat = re.compile(re.escape(left) + r'(.{1,' + str(nfffd + 2) + r'}?)' + re.escape(right), re.DOTALL)
        cands = Counter(mm.group(1) for mm in pat.finditer(corpus))
        cands = Counter({k: v for k, v in cands.items() if '�' not in k})
        if not cands:
            continue
        top, n = cands.most_common(1)[0]
        # 候補が単一種、または最頻が圧倒的(80%+)なら採用
        total = sum(cands.values())
        if len(cands) == 1 or n / total >= 0.8:
            return top
    return None


total_fixed = total_unresolved = 0
unresolved_detail = []
for f in broken_files:
    src = open(f, encoding='utf-8').read()
    fixed = 0
    # 化けrunを位置が変わらないよう後ろから処理
    runs = list(RUN.finditer(src))
    for m in reversed(runs):
        rec = try_recover(src, m, clean_corpus)
        if rec is not None:
            src = src[:m.start()] + rec + src[m.end():]
            fixed += 1
        else:
            ctx = src[max(0, m.start() - 18):m.end() + 18].replace('\n', '⏎')
            unresolved_detail.append((f, ctx))
    remaining = len(RUN.findall(src))
    total_fixed += fixed
    total_unresolved += remaining
    if not REPORT_ONLY:
        open(f, 'w', encoding='utf-8').write(src)
    print(f'{f}: fixed={fixed} remaining={remaining}')

print(f'\nTOTAL fixed={total_fixed} unresolved={total_unresolved}')
if unresolved_detail:
    print('\n--- unresolved (file, context) ---')
    for f, c in unresolved_detail[:80]:
        print(f'{os.path.basename(os.path.dirname(f))}: {c}')
