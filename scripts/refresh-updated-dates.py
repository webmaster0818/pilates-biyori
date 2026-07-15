#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""全ページの更新日表記を今日に最新化する（冪等・デプロイ前に実行する運用）。
対象: ①app/**/*.tsx の「更新日 @YYYY年MM月DD日」「更新日 @YYYY年MM月」「更新日/最終更新[:：] YYYY年M月D日」
     ②content/articles/*.md の updatedAt: "YYYY-MM-DD"
※記事タイトルの【YYYY年M月】は別管理。**エリアページのみ**title冒頭【YYYY年M月最新】を更新月に自動追随(2026-07-15 MediaXAI指示)。
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
# ③エリアページtitle: 冒頭に【YYYY年M月最新】を強制(既存の日付タグはどこにあっても除去して先頭へ・更新月に自動追随)
n3 = 0
freshtag = f"【{today.year}年{today.month}月最新】"
DATE_TAG = re.compile(r"【\d{4}(?:年\d{1,2}月)?(?:最新)?】")
def retitle(m):
    q, body = m.group(1), m.group(2)
    core = DATE_TAG.sub("", body).strip("｜| ")
    return f"title: {q}{freshtag}{core}{q}"
for f in glob.glob("app/area/*/page.tsx"):
    src = open(f).read(); orig = src
    src = re.sub(r"title: (['\"])(.+?)\1", lambda m: retitle(m), src, count=1)
    # openGraph内のtitleも同期
    src = re.sub(r"(openGraph:\s*\{[^}]*?title: )(['\"])(.+?)\2",
                 lambda m: m.group(1) + m.group(2) + freshtag + DATE_TAG.sub("", m.group(3)).strip("｜| ") + m.group(2), src, count=1)
    if src != orig:
        open(f, "w").write(src); n3 += 1
print(f"tsx更新: {n1}ファイル / md更新: {n2}ファイル / エリアtitle鮮度化: {n3}ファイル / 日付={ja_full}")
