// AIスタジオ相談（プロトA）＝ルールベース・マッチングエンジン
// 既存の実在データ（data/area-studios.ts）だけを根拠に推薦し、リンクは各スタジオの
// officialUrl をそのまま使う（＝捏造ゼロ・将来アフィリリンクに差し替えれば自動で反映）。
import { areaStudios } from '@/data/area-studios'

export type FlatStudio = {
  areaKey: string
  areaName: string
  region: string
  name: string
  officialUrl?: string
  price: string
  trial: string
  features: string[]
  description: string
  rating?: number
  types: ('machine' | 'mat')[]
  hasFreeTrial: boolean
  priceMinYen: number | null
  women: boolean
  beginner: boolean
  text: string
}

function minYen(s: string): number | null {
  const nums = (s.match(/[\d,]+/g) || [])
    .map((n) => parseInt(n.replace(/,/g, ''), 10))
    .filter((n) => n >= 1000)
  return nums.length ? Math.min(...nums) : null
}

export const flatStudios: FlatStudio[] = Object.entries(areaStudios).flatMap(
  ([areaKey, a]) =>
    a.studios.map((s) => {
      const text = [s.name, s.description, ...(s.features || [])].join(' ')
      const types: ('machine' | 'mat')[] = []
      if (/マシン|リフォーマー|reformer/i.test(text)) types.push('machine')
      if (/マット/.test(text)) types.push('mat')
      return {
        areaKey,
        areaName: a.name,
        region: a.region,
        name: s.name,
        officialUrl: s.officialUrl,
        price: s.price,
        trial: s.trial,
        features: s.features || [],
        description: s.description,
        rating: s.rating,
        types,
        hasFreeTrial: /無料|¥0|0円/.test(s.trial),
        priceMinYen: minYen(s.price),
        women: /女性専用/.test(text),
        beginner: /初心者/.test(text),
        text,
      }
    })
)

const REGION_ORDER = [
  '北海道・東北',
  '東北',
  '関東',
  '中部',
  '関西',
  '近畿',
  '中国・四国',
  '九州',
  '九州・沖縄',
]

export function regions(): string[] {
  const set = new Set(flatStudios.map((s) => s.region))
  const ordered = REGION_ORDER.filter((r) => set.has(r))
  const rest = [...set].filter((r) => !REGION_ORDER.includes(r))
  return [...ordered, ...rest]
}

export function areasIn(region: string) {
  const m = new Map<string, { key: string; name: string; count: number }>()
  flatStudios
    .filter((s) => s.region === region)
    .forEach((s) => {
      const e = m.get(s.areaKey) || { key: s.areaKey, name: s.areaName, count: 0 }
      e.count++
      m.set(s.areaKey, e)
    })
  return [...m.values()].sort((a, b) => b.count - a.count)
}

export const GOALS: { id: string; label: string; kw: RegExp }[] = [
  { id: 'posture', label: '姿勢改善・体幹強化', kw: /姿勢|体幹|猫背|骨格|コア|インナーマッスル/ },
  { id: 'diet', label: 'ダイエット・ボディメイク', kw: /ダイエット|ボディメイク|痩|シェイプ|引き締|脂肪|くびれ/ },
  { id: 'prenatal', label: '産前・産後ケア', kw: /産前|産後|マタニティ|骨盤|ママ/ },
  { id: 'pain', label: '肩こり・腰痛の緩和', kw: /肩こり|腰痛|慢性痛|痛み|不調|コリ|ほぐ/ },
  { id: 'beginner', label: '運動が初めて', kw: /初心者|未経験|初めて|丁寧/ },
  { id: 'relax', label: 'リラックス・ストレス解消', kw: /リラックス|ストレス|自律神経|癒|呼吸|整え/ },
]

export type Answers = {
  areaKey: string
  goals: string[]
  type: 'machine' | 'mat' | 'either'
  trial: boolean
  budget: 'low' | 'normal' | 'any'
}

export type Scored = { s: FlatStudio; score: number; reasons: string[] }

export function recommend(ans: Answers): Scored[] {
  const pool = flatStudios.filter((s) => s.areaKey === ans.areaKey)
  const scored: Scored[] = pool.map((s) => {
    let score = 0
    const reasons: string[] = []
    ans.goals.forEach((g) => {
      const goal = GOALS.find((x) => x.id === g)
      if (goal && goal.kw.test(s.text)) {
        score += 2
        reasons.push(goal.label)
      }
    })
    if (ans.type !== 'either') {
      if (s.types.includes(ans.type)) {
        score += 3
        reasons.push(ans.type === 'machine' ? 'マシンピラティス対応' : 'マットピラティス対応')
      } else {
        score -= 2
      }
    }
    if (ans.trial && s.hasFreeTrial) {
      score += 2
      reasons.push('無料体験あり')
    }
    if (s.beginner && !reasons.includes('運動が初めて')) reasons.push('初心者歓迎')
    if (s.women) reasons.push('女性専用')
    score += s.rating ? s.rating - 4 : 0
    return { s, score, reasons: [...new Set(reasons)] }
  })
  if (ans.budget === 'low') {
    const priced = scored.filter((x) => x.s.priceMinYen).map((x) => x.s.priceMinYen as number)
    if (priced.length) {
      const sorted = [...priced].sort((a, b) => a - b)
      const median = sorted[Math.floor(sorted.length / 2)]
      scored.forEach((x) => {
        if (x.s.priceMinYen && x.s.priceMinYen <= median) {
          x.score += 1.5
          if (!x.reasons.includes('比較的通いやすい料金帯')) x.reasons.push('比較的通いやすい料金帯')
        }
      })
    }
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, 3)
}
