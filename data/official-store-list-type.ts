// ブランドページ「公式の全店舗一覧（都道府県別）」の型（2026-10-28。pilates K の 10/27 実装を zen place・CLUB PILATES・LAVA に横展開）
export type OfficialStoreRow = { pref: string; name: string; access: string; address: string; url: string; extra?: string }
export type OfficialStoreList = {
  asOf: string
  sourceLabel: string
  sourceUrl: string
  extraLabel?: string // 店舗ごとの追加列の見出し（グレード・月会費・スタジオ種別など）
  stores: OfficialStoreRow[]
}
