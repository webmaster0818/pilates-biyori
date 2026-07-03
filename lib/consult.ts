// AIスタジオ相談（プロトA）＝ルールベース・マッチングエンジン
// 既存の実在データ（data/area-studios.ts）だけを根拠に推薦し、リンクは各スタジオの
// officialUrl をそのまま使う（＝捏造ゼロ・将来アフィリリンクに差し替えれば自動で反映）。
import { areaStudios } from '@/data/area-studios'
import { prefectureAreas } from '@/data/prefectureAreas'

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

const REGION_ORDER = ['北海道・東北', '関東', '中部', '近畿', '中国・四国', '九州・沖縄']

// 全47都道府県 → 地方（これにより掲載データの有無に関わらず全エリアを出せる）
const PREF_REGION: Record<string, string> = {
  北海道: '北海道・東北', 青森県: '北海道・東北', 岩手県: '北海道・東北', 宮城県: '北海道・東北',
  秋田県: '北海道・東北', 山形県: '北海道・東北', 福島県: '北海道・東北',
  茨城県: '関東', 栃木県: '関東', 群馬県: '関東', 埼玉県: '関東', 千葉県: '関東', 東京都: '関東', 神奈川県: '関東',
  新潟県: '中部', 富山県: '中部', 石川県: '中部', 福井県: '中部', 山梨県: '中部', 長野県: '中部',
  岐阜県: '中部', 静岡県: '中部', 愛知県: '中部',
  三重県: '近畿', 滋賀県: '近畿', 京都府: '近畿', 大阪府: '近畿', 兵庫県: '近畿', 奈良県: '近畿', 和歌山県: '近畿',
  鳥取県: '中国・四国', 島根県: '中国・四国', 岡山県: '中国・四国', 広島県: '中国・四国', 山口県: '中国・四国',
  徳島県: '中国・四国', 香川県: '中国・四国', 愛媛県: '中国・四国', 高知県: '中国・四国',
  福岡県: '九州・沖縄', 佐賀県: '九州・沖縄', 長崎県: '九州・沖縄', 熊本県: '九州・沖縄', 大分県: '九州・沖縄',
  宮崎県: '九州・沖縄', 鹿児島県: '九州・沖縄', 沖縄県: '九州・沖縄',
}

// CFのregionCode（ISO 3166-2:JP の番号）→ 都道府県（現在地の優先表示用）
export const JP_CODE_PREF: Record<string, string> = {
  '01': '北海道', '02': '青森県', '03': '岩手県', '04': '宮城県', '05': '秋田県', '06': '山形県', '07': '福島県',
  '08': '茨城県', '09': '栃木県', '10': '群馬県', '11': '埼玉県', '12': '千葉県', '13': '東京都', '14': '神奈川県',
  '15': '新潟県', '16': '富山県', '17': '石川県', '18': '福井県', '19': '山梨県', '20': '長野県', '21': '岐阜県',
  '22': '静岡県', '23': '愛知県', '24': '三重県', '25': '滋賀県', '26': '京都府', '27': '大阪府', '28': '兵庫県',
  '29': '奈良県', '30': '和歌山県', '31': '鳥取県', '32': '島根県', '33': '岡山県', '34': '広島県', '35': '山口県',
  '36': '徳島県', '37': '香川県', '38': '愛媛県', '39': '高知県', '40': '福岡県', '41': '佐賀県', '42': '長崎県',
  '43': '熊本県', '44': '大分県', '45': '宮崎県', '46': '鹿児島県', '47': '沖縄県',
}

// 地方 → 都道府県 → エリア の3段階。都道府県はprefectureAreas、地方は各エリアのregionから導出。
const studioCount = new Map<string, number>()
const regionByArea = new Map<string, string>()
flatStudios.forEach((s) => {
  studioCount.set(s.areaKey, (studioCount.get(s.areaKey) || 0) + 1)
  regionByArea.set(s.areaKey, s.region)
})

export type Pref = {
  prefecture: string
  region: string
  areas: { key: string; name: string; count: number }[]
}

// prefectureAreasの全エリアを採用（掲載データの有無で絞らない＝全エリアを出す）。
// countは掲載スタジオ数（0でも表示し、推薦が無いエリアはエリアページへ誘導する）。
export const prefectures: Pref[] = prefectureAreas
  .map((p) => {
    const areas = p.areas
      .map((a) => ({ key: a.slug, name: a.name, count: studioCount.get(a.slug) || 0 }))
      .sort((a, b) => b.count - a.count)
    const region = PREF_REGION[p.prefecture] || 'その他'
    return { prefecture: p.prefecture, region, areas }
  })
  .filter((p) => p.areas.length > 0)

export function regions(): string[] {
  const set = new Set(prefectures.map((p) => p.region))
  const ordered = REGION_ORDER.filter((r) => set.has(r))
  const rest = [...set].filter((r) => !REGION_ORDER.includes(r))
  return [...ordered, ...rest]
}

export function prefecturesIn(region: string): Pref[] {
  return prefectures
    .filter((p) => p.region === region)
    .sort(
      (a, b) =>
        b.areas.reduce((s, x) => s + x.count, 0) - a.areas.reduce((s, x) => s + x.count, 0)
    )
}

export function areasInPrefecture(prefecture: string) {
  const p = prefectures.find((x) => x.prefecture === prefecture)
  return p ? p.areas : []
}

// 各エリアの座標（国土地理院APIで取得）。現在地からの距離計算に使う。
import areaCoordsJson from '@/data/area-coords.json'
const AREA_COORDS = areaCoordsJson as unknown as Record<string, [number, number]>

const AREA_INFO = new Map<string, { name: string; prefecture: string; region: string }>()
prefectures.forEach((p) =>
  p.areas.forEach((a) => AREA_INFO.set(a.key, { name: a.name, prefecture: p.prefecture, region: p.region }))
)

// エリアスラッグ→表示名/都道府県/地方。埋め込みウィジェットの「エリア自動セット」に使う。
export function areaInfo(key: string): { name: string; prefecture: string; region: string } | null {
  return AREA_INFO.get(key) ?? null
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

export type NearestArea = { key: string; name: string; prefecture: string; region: string; km: number }

export function nearestArea(lat: number, lon: number): NearestArea | null {
  let best: NearestArea | null = null
  for (const [key, c] of Object.entries(AREA_COORDS)) {
    const info = AREA_INFO.get(key)
    if (!info) continue
    const km = haversineKm(lat, lon, c[0], c[1])
    if (!best || km < best.km) best = { key, name: info.name, prefecture: info.prefecture, region: info.region, km }
  }
  return best
}

// 県内エリアを現在地から近い順に。座標が無いエリアは末尾。
export function sortAreasByDistance<T extends { key: string }>(areas: T[], lat: number, lon: number): (T & { km: number | null })[] {
  return areas
    .map((a) => {
      const c = AREA_COORDS[a.key]
      return { ...a, km: c ? haversineKm(lat, lon, c[0], c[1]) : null }
    })
    .sort((a, b) => (a.km ?? Infinity) - (b.km ?? Infinity))
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
