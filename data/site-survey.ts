// Pilates-Biyori 独自調査データ（一次情報・独自データ）
//
// 出典: 当サイト Pilates-Biyori が全国のピラティススタジオ公式サイトを調査し、
//       data/area-studios.ts に収録した実在スタジオの掲載情報を集計したもの。
// 母数: 全国71エリア・211スタジオ（各スタジオ公式サイトで確認済み）
// 集計時点: 2026年6月
//
// 注意: 料金は「公式サイトに金額が明記されていたもの」のみを集計対象とし、
//       「要問合せ」「体験レッスンあり（金額非公開）」は母数から除外している。
//       料金は改定されることがあるため、最新は各スタジオ公式でご確認ください。

export const SURVEY = {
  meta: {
    studios: 211,
    areas: 71,
    period: '2026年6月',
    source: 'Pilates-Biyori 独自調査（全国71エリア・211スタジオの公式情報を集計）',
    sourceShort: 'Pilates-Biyori 調べ／全国211スタジオ',
  },

  // 体験レッスン料金（金額が明記された141スタジオが母数）
  trial: {
    sampled: 141,
    freeCount: 86, // 無料・0円
    freePct: 61,
    paidCount: 55,
    paidMedian: 2980,
    paidAvg: 3323,
    paidMin: 500,
    paidMax: 9900,
    // 金額が明記された141件の内訳
    buckets: [
      { label: '無料（0円）', count: 86, pct: 61 },
      { label: '〜1,100円', count: 16, pct: 11 },
      { label: '1,101〜2,000円', count: 1, pct: 1 },
      { label: '2,001〜3,000円', count: 17, pct: 12 },
      { label: '3,001〜5,000円', count: 8, pct: 6 },
      { label: '5,001円〜', count: 13, pct: 9 },
    ],
  },

  // 評価（211スタジオ全件、5点満点）
  rating: {
    sampled: 211,
    avg: 4.41,
    min: 3.9,
    max: 4.8,
    // 評価分布（0.1刻み）
    dist: [
      { score: '4.0以下', count: 8 },
      { score: '4.1', count: 19 },
      { score: '4.2', count: 25 },
      { score: '4.3', count: 26 },
      { score: '4.4', count: 28 },
      { score: '4.5', count: 43 },
      { score: '4.6', count: 38 },
      { score: '4.7以上', count: 24 },
    ],
  },

  // 設備・レッスン形態の採用率（211スタジオ全件・掲載特徴タグ集計）
  features: {
    sampled: 211,
    items: [
      { label: 'マシン（リフォーマー等）導入', count: 113, pct: 54 },
      { label: 'パーソナル・完全個室対応', count: 93, pct: 44 },
      { label: '女性専用', count: 83, pct: 39 },
      { label: '理学療法士・医療系監修', count: 23, pct: 11 },
    ],
  },

  // 月額（月4回前後）コースの掲載料金（金額が明記された47スタジオが母数）
  monthly: {
    sampled: 47,
    median: 11220,
    avg: 13679,
    min: 3000,
    max: 39600,
    buckets: [
      { label: '〜10,000円', count: 18, pct: 38 },
      { label: '10,001〜13,000円', count: 7, pct: 15 },
      { label: '13,001〜16,000円', count: 16, pct: 34 },
      { label: '16,001円〜', count: 6, pct: 13 },
    ],
  },
} as const

export type Survey = typeof SURVEY
