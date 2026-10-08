/**
 * StudioCard に渡す店舗データのうち、出典の無い項目を表示前に落とす。
 *
 * 背景（2026-10-07）:
 *   app/area/星/page.tsx の店舗データには「女性85% / 男性15%」「20代〜50代が中心」
 *   「不定休」といった値が入っているが、公式サイトが男女比・年齢層を公表している例は
 *   ほぼ無く、出典フィールドも無い。事実と言えるのは「女性専用」と、具体的な定休日だけ。
 *   データファイル（約1,341件）は書き換えず、ここで表示側を止める。
 *
 *   StudioCard（サーバー側）でこの関数を通してから Client Component に渡すので、
 *   落とした値は HTML / RSC ペイロードにも載らない。
 */

/** 「値ではない」文言。行ごと出さない。 */
const PLACEHOLDER = /^(詳細は公式サイト参照|公式サイトでご確認ください|公式サイトに記載なし|店舗にお問い合わせください|お問い合わせください|店舗により異なる|施設により異なる)$/

/** 女性専用を表す表記。「女性100%（女性専用）」「女性100%」「女性限定」なども同じ事実。 */
const WOMEN_ONLY = /女性専用|女性100%|女性限定|女性専門/

export type DisplayUserProfile = {
  /** '女性専用' か '女性専用（18歳以上）' のような補足付きのみ。パーセント表記は出さない。 */
  genderRatio?: string
  purpose?: string[]
}

export type DisplayBasicInfo = {
  hours?: string
  closed?: string
  facilities?: string[]
}

export function genderLabel(v?: string | null): string | undefined {
  if (!v || !WOMEN_ONLY.test(v)) return undefined
  // 「女性専用（18歳以上）」のようにパーセントを含まない補足付きはそのまま残す
  if (/^女性専用（[^）]*）$/.test(v)) return v
  return '女性専用'
}

export function closedLabel(v?: string | null, verified = false): string | undefined {
  if (!v) return undefined
  const t = v.trim()
  if (!t || PLACEHOLDER.test(t)) return undefined
  // 「不定休」は旧既定値のコピーが968件あり出典が無いので落とす。
  // ただし運営者から「不定休」と指示があった店舗は closedVerified: true で残す（2026-10-08 Pilates Mee 駒沢大学店・MediaXAI経由）。
  if (t === '不定休' && !verified) return undefined
  return t
}

export function hoursLabel(v?: string | null): string | undefined {
  if (!v) return undefined
  const t = v.trim()
  if (!t || PLACEHOLDER.test(t)) return undefined
  return t
}

type UserProfileIn = { ageRange?: string; genderRatio?: string; purpose?: string[] }
type BasicInfoIn = { hours?: string; closed?: string; closedVerified?: boolean; facilities?: string[] }

export function toDisplayUserProfile(p?: UserProfileIn | null): DisplayUserProfile | undefined {
  if (!p) return undefined
  const out: DisplayUserProfile = {}
  const g = genderLabel(p.genderRatio)
  if (g) out.genderRatio = g
  if (p.purpose && p.purpose.length > 0) out.purpose = p.purpose
  // ageRange は出典が無いので常に落とす
  return Object.keys(out).length > 0 ? out : undefined
}

export function toDisplayBasicInfo(b?: BasicInfoIn | null): DisplayBasicInfo | undefined {
  if (!b) return undefined
  const out: DisplayBasicInfo = {}
  const h = hoursLabel(b.hours)
  if (h) out.hours = h
  const c = closedLabel(b.closed, b.closedVerified === true)
  if (c) out.closed = c
  if (b.facilities && b.facilities.length > 0) out.facilities = b.facilities
  return Object.keys(out).length > 0 ? out : undefined
}
