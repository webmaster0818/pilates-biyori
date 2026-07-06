#!/usr/bin/env python3
"""料金白書の月次AEO更新（冪等）。
- data/brands-aggregate.json の全掲載店舗から「主要ブランド月額プラン相場」を実集計して白書に反映
- 版日付（30秒サマリー見出し・月次スナップ見出し・AEO脚注・frontmatter updatedAt）を実行月に更新
実データのみ・架空ゼロ。月初 cron 想定。211スタジオ調査(site-survey.ts)は別母集団のため本スクリプトは触らない。
"""
import json, re, statistics, datetime, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
AGG = ROOT / "data" / "brands-aggregate.json"
MD = ROOT / "content" / "articles" / "pilates-ryokin-hakusho.md"

def yen(t):
    m = re.search(r'(\d{4,6})円', t.replace(",", ""))
    return int(m.group(1)) if m else None

def aggregate():
    d = json.load(open(AGG, encoding="utf-8"))
    prices, brands, total, trial_total, free = [], 0, 0, 0, 0
    for _brand, stores in d.items():
        brands += 1
        for s in stores:
            total += 1
            p = s.get("price", "")
            if p and "月" in p:            # 月額プランのみ（単発/回数券を除外）
                v = yen(p)
                if v and 3000 <= v <= 60000:
                    prices.append(v)
            tr = s.get("trial", "")
            if tr:
                trial_total += 1
                if "無料" in tr or "0円" in tr:
                    free += 1
    return {
        "brands": brands, "total": total, "parsed": len(prices),
        "median": int(statistics.median(prices)), "avg": int(statistics.mean(prices)),
        "free_pct": round(100 * free / trial_total) if trial_total else 0,
    }

def main():
    today = datetime.date.today()
    ym = f"{today.year}年{today.month}月"
    a = aggregate()
    src = MD.read_text(encoding="utf-8")
    orig = src

    # 1) 30秒サマリー見出しの版
    src = re.sub(r'## 30秒でわかるピラティス料金相場【\d+年\d+月更新】',
                 f'## 30秒でわかるピラティス料金相場【{ym}更新】', src)
    # 2) AEO脚注の「…・XXXX年X月更新）」
    src = re.sub(r'（出典：Pilates-Biyori調べ・全国211スタジオ／2026年6月調査・\d+年\d+月更新）',
                 f'（出典：Pilates-Biyori調べ・全国211スタジオ／2026年6月調査・{ym}更新）', src)
    # 3) 主要ブランド月次スナップ 見出し＋本文数値
    snap = (
        f"## 主要ブランドの月額プラン相場【月次更新: {ym}】\n\n"
        "大手・主要ブランドの月額プランに絞った**月次更新の速報値**です。個人経営スタジオを含む上記211調査より母集団が全国チェーン寄りのため、相場はやや高めに出ます。この数値は毎月、当サイト掲載の店舗データから自動集計して更新します。\n\n"
        f"- 月額プラン中央値: **{a['median']:,}円**（主要{a['brands']}ブランド・{a['total']}店舗、月額表記{a['parsed']}件を集計）\n"
        f"- 平均: {a['avg']:,}円\n"
        f"- 体験が無料の割合: **{a['free_pct']}%**\n\n"
        f"※主要ブランド＝当サイト掲載の全国チェーン系{a['brands']}ブランド。個人経営を含む全体相場は上記「211スタジオ調査」の中央値11,220円をご参照ください。母集団が異なるため2つの数値は使い分けてください。\n\n"
    )
    src = re.sub(r'## 主要ブランドの月額プラン相場【月次更新:[^\n]*\n.*?(?=## 調査結果1)',
                 snap, src, flags=re.S)
    # 4) frontmatter updatedAt
    src = re.sub(r'updatedAt: "\d{4}-\d{2}-\d{2}"', f'updatedAt: "{today.isoformat()}"', src)

    MD.write_text(src, encoding="utf-8")
    print("aggregate:", a)
    print("updated:", MD if src != orig else "(no change)")

if __name__ == "__main__":
    main()
