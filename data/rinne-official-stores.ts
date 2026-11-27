// RINNE 公式「スタジオ一覧」（https://rinne-pilates.com/studio）に載っている全5スタジオ。住所・アクセスは各スタジオページの表記、extra はレッスン時間。
// 2026-11-27 に公式から取得。⚠️ 値を手で書き足さない。更新するときは公式を取り直して丸ごと置き換える。
import type { OfficialStoreList } from './official-store-list-type'

export const RINNE_OFFICIAL: OfficialStoreList = {
  asOf: '2026年11月27日',
  sourceLabel: 'RINNE公式 スタジオ一覧',
  sourceUrl: 'https://rinne-pilates.com/studio',
  extraLabel: 'レッスン時間（公式のスタジオページ）',
  accessLabel: '最寄駅・アクセス（公式のスタジオページ）',
  stores: [
    { pref: '神奈川県', name: 'RINNE 小田原スタジオ', access: '小田原駅から徒歩12分（駐車場3台）', address: '神奈川県小田原市本町1丁目10-26 ベルジェント小田原城址公園 1F', url: 'https://rinne-pilates.com/studio/odawara', extra: '9:00〜21:00（完全予約制）' },
    { pref: '神奈川県', name: 'RINNE 秦野スタジオ', access: '秦野駅北口から徒歩3分（駐車場3台）', address: '神奈川県秦野市本町2丁目1-24 万八十ビル 1階', url: 'https://rinne-pilates.com/studio/hadano', extra: '9:00〜21:30（完全予約制）' },
    { pref: '神奈川県', name: 'RINNE 海老名スタジオ', access: '海老名駅からバスで5分（駐車場3台）', address: '神奈川県海老名市大谷北4丁目3-32 ハイムあすなろ 105号', url: 'https://rinne-pilates.com/studio/ebina', extra: '9:00〜21:30（完全予約制）' },
    { pref: '神奈川県', name: 'RINNE 辻堂スタジオ', access: '辻堂駅から徒歩2分', address: '神奈川県茅ヶ崎市本宿町12-11 辻堂NWビル 3F 11号', url: 'https://rinne-pilates.com/studio/tsujido', extra: '9:00〜21:30（完全予約制）' },
    { pref: '神奈川県', name: 'RINNE 大船スタジオ', access: '大船駅 笠間口から徒歩8分', address: '神奈川県鎌倉市大船2-26-7 湘風館西3階', url: 'https://rinne-pilates.com/studio/ofuna', extra: '9:00〜21:30（完全予約制）' },
  ],
}
