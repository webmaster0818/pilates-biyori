// スタジオ名→ブランドページslugの対応（scripts/aggregate-brands-202607.py と同一判定ロジック）
// StudioCardの「ブランド解説を見る」逆リンク用。マッチしなければnull＝リンク非表示。

const RULES: Array<{ slug: string; test: (n: string) => boolean }> = [
  { slug: 'kasane', test: (n) => /kasane/i.test(n) }, // pilates Kより先に判定（誤爆防止）
  { slug: 'element', test: (n) => /^ELEMENT\b/.test(n) },
  { slug: 'urban-classic', test: (n) => /URBAN CLASSIC/i.test(n) },
  { slug: 'brest', test: (n) => /BREST/.test(n) },
  { slug: 'lucina', test: (n) => /ルキナ|Lucina/i.test(n) },
  { slug: 'celestia', test: (n) => /セレスティア|Celestia/i.test(n) },
  { slug: 'the-silk', test: (n) => /the SILK/i.test(n) },
  { slug: '24-7pilates', test: (n) => /24\/7/.test(n) },
  { slug: 'pilates-mee', test: (n) => /Pilates Mee|ピラティスミー|ピラティスMee/i.test(n) },
  { slug: 'zen-place', test: (n) => /zen ?place/i.test(n) },
  { slug: 'pilates-k', test: (n) => /(pilates K |ピラティスK )|pilates K$|ピラティスK$/.test(n) },
  { slug: 'bdc', test: (n) => /BDC/.test(n) },
  { slug: 'rintosull', test: (n) => /Rintosull|リントスル/i.test(n) },
  { slug: 'club-pilates', test: (n) => /CLUB PILATES/i.test(n) },
  { slug: 'dr-pilates', test: (n) => /Dr\.?ピラティス|ドクターピラティス/.test(n) },
]

export function brandSlugOf(studioName: string): string | null {
  for (const r of RULES) {
    if (r.test(studioName)) return r.slug
  }
  return null
}
