#!/usr/bin/env python3
"""① 準勝ち筋5エリア(20〜30位)の1ページ目押し上げ集中改修（冪等・事実ベース）。
レバー: ①鮮度更新(更新日/料金相場見出し) ②近隣エリア→ターゲットの内部リンク流入強化
③料金白書ハブからの内部リンク。捏造なし（全て実在ページ間のリンクと日付更新のみ）。
"""
import os, re

BASE = os.path.expanduser("~/projects/pilates-biyori")
AREA = f"{BASE}/app/area"

NAME = {
    "nagoya":"名古屋","sakae":"栄","kanayama":"金山","kyoto":"京都","kyoto-shiyakusho-mae":"京都市役所前","karasuma-oike":"烏丸御池",
    "toyosu":"豊洲","monzen-nakacho":"門前仲町","shintomicho":"新富町","ginza":"銀座",
    "koenji":"高円寺","nakano":"中野","asagaya":"阿佐ヶ谷","ogikubo":"荻窪","nishi-ogikubo":"西荻窪","nakano-sakaue":"中野坂上",
    "chofu":"調布","sengawa":"仙川","kichijoji":"吉祥寺","mitaka":"三鷹","musashisakai":"武蔵境",
    "yoyogi-uehara":"代々木上原","yoyogi":"代々木","shimokitazawa":"下北沢","shibuya":"渋谷","sasazuka":"笹塚",
    "ebina":"海老名","honatsugi":"本厚木","sagami-ono":"相模大野",
}
# ターゲット → 近隣（実在確認済み）
TARGETS = {
    "toyosu": ["monzen-nakacho","shintomicho","ginza"],
    "koenji": ["nakano","asagaya","ogikubo","nishi-ogikubo","nakano-sakaue"],
    "chofu": ["sengawa","kichijoji","mitaka","musashisakai"],
    "yoyogi-uehara": ["yoyogi","shimokitazawa","shibuya","sasazuka"],
    "ebina": ["honatsugi","sagami-ono"],
    "yagoto": ["nagoya","sakae","kanayama"],
    "gion-shijo": ["kyoto","kyoto-shiyakusho-mae","karasuma-oike"],
}
HAKUSHO = "/articles/pilates-ryokin-hakusho/"
TODAY = "2026年06月14日"

CHIP = 'inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition'

def callout(links):
    """links: list of (href, label)"""
    chips = "\n".join(
        f'                <Link href="{h}" className="{CHIP}">{l}</Link>' for h,l in links)
    return (
        '        {/* boost-nav-202606 */}\n'
        '        <section className="py-12 bg-white">\n'
        '          <div className="max-w-4xl mx-auto px-6 lg:px-8">\n'
        '            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">\n'
        '              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>\n'
        '              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>\n'
        '              <div className="flex flex-wrap gap-3">\n'
        f'{chips}\n'
        '              </div>\n'
        '            </div>\n'
        '          </div>\n'
        '        </section>\n\n'
    )

def insert_callout(slug, links):
    p = f"{AREA}/{slug}/page.tsx"
    if not os.path.exists(p):
        return f"  ! {slug}: page missing"
    s = open(p, encoding="utf-8").read()
    if "boost-nav-202606" in s:
        return f"  = {slug}: already has callout"
    anchor = re.search(r'\n\s*<RelatedAreas currentSlug=', s)
    if not anchor:
        return f"  ! {slug}: no RelatedAreas anchor"
    pos = anchor.start()+1  # keep the leading newline before insertion
    s = s[:pos] + callout(links) + s[pos:]
    open(p,"w",encoding="utf-8").write(s)
    return f"  + {slug}: callout ({len(links)} links)"

def refresh_dates(slug):
    p = f"{AREA}/{slug}/page.tsx"
    s = open(p, encoding="utf-8").read()
    s2 = re.sub(r'更新日 @2026年0[0-9]月[0-9]{1,2}日', f'更新日 @{TODAY}', s, count=1)
    s2 = re.sub(r'料金相場【2026年[0-9]{1,2}月最新】', '料金相場【2026年6月最新】', s2)
    if s2 != s:
        open(p,"w",encoding="utf-8").write(s2)
        return True
    return False

# 1) ターゲット5: 鮮度更新 + 近隣&白書へのcallout
print("== TARGETS ==")
for t, nbrs in TARGETS.items():
    d = refresh_dates(t)
    links = [(f"/area/{n}/", NAME[n]) for n in nbrs] + [(HAKUSHO, "全国ピラティス料金白書2026")]
    print(insert_callout(t, links), "| date_refreshed" if d else "")

# 2) 近隣ページ: ターゲットへのcallout（インバウンドリンク強化）
print("== NEIGHBORS (inbound links to targets) ==")
rev = {}
for t, nbrs in TARGETS.items():
    for n in nbrs:
        rev.setdefault(n, []).append(t)
for n, tlist in rev.items():
    links = [(f"/area/{t}/", NAME[t]) for t in tlist] + [(HAKUSHO, "全国ピラティス料金白書2026")]
    print(insert_callout(n, links))

# 3) 料金白書: エリア別への内部リンク（ハブ→ターゲット）
print("== HAKUSHO hub links ==")
hk = f"{BASE}/content/articles/pilates-ryokin-hakusho.md"
md = open(hk, encoding="utf-8").read()
if "エリア別の料金を詳しく見る" in md:
    print("  = hakusho: already linked")
else:
    block = ("\n\n## エリア別の料金を詳しく見る\n\n"
             "主要エリアのスタジオ別の料金・体験レッスン・マシン対応の比較はこちらから確認できます。\n\n"
             + "".join(f"- [{NAME[t]}のピラティス料金比較](/area/{t}/)\n" for t in TARGETS) + "\n")
    open(hk,"w",encoding="utf-8").write(md.rstrip()+block)
    print(f"  + hakusho: added {len(TARGETS)} area links")
