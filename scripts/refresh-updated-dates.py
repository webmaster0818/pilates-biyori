#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""全ページの更新日表記を今日に最新化する（冪等・デプロイ前に実行する運用）。
対象: ①app/**/*.tsx の「更新日 @YYYY年MM月DD日」「更新日 @YYYY年MM月」「更新日/最終更新[:：] YYYY年M月D日」
     ②content/articles/*.md の updatedAt: "YYYY-MM-DD"
※タイトルの【YYYY年M月】は鮮度タグとして別管理のため触らない。
"""
import glob, re
from datetime import date

today = date.today()
ja_full = f"{today.year}年{today.month:02d}月{today.day:02d}日"
ja_display = f"{today.year}年{today.month}月{today.day}日"
iso = today.isoformat()

n1 = n2 = 0
for f in glob.glob("app/**/*.tsx", recursive=True):
    src = open(f).read(); orig = src
    src = re.sub(r"更新日 @\d{4}年\d{1,2}月(\d{1,2}日)?", f"更新日 @{ja_full}", src)
    src = re.sub(r"(更新日|最終更新)([：: ]+)\d{4}年\d{1,2}月\d{1,2}日", rf"\g<1>\g<2>{ja_display}", src)
    if src != orig:
        open(f, "w").write(src); n1 += 1
for f in glob.glob("content/articles/*.md"):
    src = open(f).read(); orig = src
    src = re.sub(r'^updatedAt: "\d{4}-\d{2}-\d{2}"', f'updatedAt: "{iso}"', src, flags=re.M)
    if src != orig:
        open(f, "w").write(src); n2 += 1
print(f"tsx更新: {n1}ファイル / md更新: {n2}ファイル / 日付={ja_full}")
