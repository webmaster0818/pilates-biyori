// 店舗別ページ（/brands/{urlSlug}/）の索引。
//
// ⚠️ 2026-09-15、店舗ページ33本の被リンクを実測したところ、
//    29本が「該当エリアページからの1本だけ」、1本（rintosull-katsura）は**ゼロ**だった。
//    さらに**ブランドハブから店舗ページへのリンクが全ブランドで0本**で、
//    ブランド→その店舗という一番自然な親子関係が切れていた。
//    インデックスはされていたので、順位が伸びない原因はこの孤立にある。
//
//    ここで店名から店舗ページを引けるようにして、ブランドハブ・スタジオカードの
//    両方から辿れるようにする。
import { bdcStores } from '../data/bdc-stores'
import { clubPilatesStores } from '../data/club-pilates-stores'
import { g1Stores } from '../data/g1-stores'
import { kasaneStores } from '../data/kasane-stores'
import { theSilkStores } from '../data/the-silk-stores'

export type StorePage = { urlSlug: string; storeName: string; areaSlug: string; areaLabel: string }

const ALL: StorePage[] = [...bdcStores, ...clubPilatesStores, ...g1Stores, ...kasaneStores, ...theSilkStores].map((s) => ({
  urlSlug: s.urlSlug,
  storeName: s.storeName,
  areaSlug: s.areaSlug,
  areaLabel: s.areaLabel,
}))

/** 店名の表記ゆれを吸収する。「Pilates Mee大井町店」と「Pilates Mee 大井町店」は同じ。 */
const norm = (v: string): string =>
  v.replace(/[\s　]/g, '').replace(/（[^）]*）/g, '').toLowerCase()

const BY_NAME = new Map<string, StorePage>()
for (const s of ALL) {
  BY_NAME.set(norm(s.storeName), s)
}

/** 掲載名から店舗ページを引く。無ければ undefined（＝従来どおりエリアページへ誘導する） */
export function storePageOf(studioName: string): StorePage | undefined {
  const k = norm(studioName)
  const hit = BY_NAME.get(k)
  if (hit) return hit
  // 掲載側が短い表記のことがある（「Rintosull 王子店」↔「マシンピラティススタジオRintosull王子店」）
  for (const [name, s] of BY_NAME) {
    if (name.includes(k) || k.includes(name)) return s
  }
  return undefined
}

/** 同じブランドの他店舗ページ（店舗ページ同士をつなぐ） */
export function siblingStorePages(urlSlug: string, brandPrefix: string, limit = 6): StorePage[] {
  return ALL.filter((s) => s.urlSlug !== urlSlug && s.urlSlug.startsWith(brandPrefix)).slice(0, limit)
}

export const ALL_STORE_PAGES = ALL
