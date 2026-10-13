# 2026-10-13 MediaXAI: zen place pilates を A8 → felmat（体験予約プロモーション T98993）に切り替え。冪等。
import pathlib, re
ROOT = pathlib.Path(__file__).resolve().parent.parent
A8 = 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM'
FM = 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808'
n = 0
for p in list((ROOT / 'app/area').rglob('page.tsx')) + [ROOT / 'data/brands.ts', ROOT / 'data/area-studios.ts', ROOT / 'data/brands-aggregate.json']:
    s = p.read_text()
    if A8 in s:
        n += s.count(A8); p.write_text(s.replace(A8, FM))
print('links replaced', n)

# スタジオカード／ブランド受け皿の表示計測
p = ROOT / 'components/StudioCardClient.tsx'; s = p.read_text()
old = '''            {/* A8インプレッション計測(zen place) */}
            {studio.officialUrl?.includes('a8mat=4B650J+3SXRGI+4LQ4+5YJRM') && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="https://www14.a8.net/0.gif?a8mat=4B650J+3SXRGI+4LQ4+5YJRM" width={1} height={1} alt="" className="inline-block" />
            )}'''
new = '''            {/* felmatインプレッション計測(zen place pilates) */}
            {studio.officialUrl?.includes('T98993.1.K142573W') && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="https://t.felmat.net/fmimp/T98993.K142573W.U1357808" width={1} height={1} alt="" className="inline-block" style={{ border: 'none' }} />
            )}'''
if old in s: p.write_text(s.replace(old, new)); print('StudioCardClient ok')
p = ROOT / 'components/BrandAreaReceiver.tsx'; s = p.read_text()
anchor = '''              {brand.ctaUrl.includes("X10489B.1.E162842X") && ('''
if 'T98993.1.K142573W' not in s:
    s = s.replace(anchor, '''              {brand.ctaUrl.includes("T98993.1.K142573W") && (
                <img src="https://t.felmat.net/fmimp/T98993.K142573W.U1357808" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
''' + anchor, 1); p.write_text(s); print('BrandAreaReceiver ok')

# ブランドページのバナー（A8 → felmat 300x300 / 728x90）
p = ROOT / 'app/brands/[slug]/page.tsx'; s = p.read_text()
m = re.search(r"(              \{brand\.slug === 'zen-place' && \(\n                <div className=\"mt-6 flex flex-col items-center gap-4\">\n)(.*?)(                </div>\n              \)\})", s, re.S)
if m and 'a8.net' in m.group(2):
    body = '''                  {/* eslint-disable @next/next/no-img-element */}
                  <a href="https://t.felmat.net/fmcl?ak=T98993.1.X1533926.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img src="https://t.felmat.net/fmimg/T98993.X1533926.U1357808" width={300} height={300} alt="zen place pilates" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=T98993.1.X1533893.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img src="https://t.felmat.net/fmimg/T98993.X1533893.U1357808" width={728} height={90} alt="zen place pilates 体験レッスン" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  {/* eslint-enable @next/next/no-img-element */}
'''
    s = s[:m.start(2)] + body + s[m.end(2):]; p.write_text(s); print('brand banners ok')
