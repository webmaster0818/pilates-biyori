import { SURVEY } from '@/data/site-survey'

// エリアページ掲載スタジオの公式情報と、当サイト全国調査(SURVEY)を対比する独自データ枠。
// 数値はすべて props の studios（実在スタジオの掲載情報）から集計し、解析できない表記は母数から除外する。
type StudioLike = {
  name: string
  price?: string
  trial?: string
  rating?: number
}

function parseYen(text: string): number | null {
  // 「体験レッスン 0円」も拾えるよう1桁から許容する（0円=無料として扱う）
  const m = text.replace(/,/g, '').match(/(\d{1,6})円/)
  return m ? parseInt(m[1], 10) : null
}

function Bar({ label, pct, value, accent }: { label: string; pct: number; value: string; accent?: boolean }) {
  const w = Math.max(4, Math.min(100, pct))
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-28 shrink-0 text-warm-700">{label}</span>
      <div className="flex-1 h-5 bg-warm-100 rounded">
        <div
          className={`h-5 rounded ${accent ? 'bg-[#8B7355]' : 'bg-warm-300'}`}
          style={{ width: `${w}%` }}
        />
      </div>
      <span className="w-20 shrink-0 text-right font-bold text-warm-900">{value}</span>
    </div>
  )
}

export function AreaMarketComparison({ areaName, studios }: { areaName: string; studios: StudioLike[] }) {
  const total = studios.length

  // 体験レッスン: 「無料」を含む=0円 / 金額表記があれば抽出 / どちらでもなければ母数除外
  // 注意: 「3,300円」は文字列として「0円」を含むため、includes('0円')での無料判定は誤集計になる
  const trialKnown: number[] = []
  for (const s of studios) {
    if (!s.trial) continue
    if (s.trial.includes('無料')) trialKnown.push(0)
    else {
      const y = parseYen(s.trial)
      if (y !== null) trialKnown.push(y)
    }
  }
  const freeCount = trialKnown.filter((v) => v === 0).length
  const freePct = trialKnown.length > 0 ? Math.round((freeCount / trialKnown.length) * 100) : null
  const paidTrials = trialKnown.filter((v) => v > 0)
  const paidMin = paidTrials.length > 0 ? Math.min(...paidTrials) : null

  // 評価: rating掲載スタジオのみ
  const ratings = studios.map((s) => s.rating).filter((r): r is number => typeof r === 'number')
  const ratingAvg = ratings.length > 0 ? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 100) / 100 : null

  // 月額: 「月4回 14,190円」「月額 7,800円」のように月単位と明記された価格のみ集計
  // （「2,750円/回」のような回数単価を月額として扱わないため、月を含む表記に限定する）
  const monthly = studios
    .map((s) => {
      if (!s.price || !/月(額|\s*\d+回)/.test(s.price)) return null
      return parseYen(s.price)
    })
    .filter((v): v is number => v !== null)
  const monthlyMin = monthly.length > 0 ? Math.min(...monthly) : null

  if (freePct === null && ratingAvg === null && monthlyMin === null) return null

  return (
    <section className="py-12 bg-warm-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-3 text-center">
          {areaName}のピラティス事情を独自データで見る
        </h2>
        <p className="text-sm text-warm-700 text-center mb-8">
          {areaName}の掲載{total}スタジオの公式情報と、{SURVEY.meta.sourceShort}（{SURVEY.meta.period}集計）の全国調査を比べました。
        </p>

        <div className="bg-white rounded-xl border border-warm-200 p-6 space-y-6">
          {freePct !== null && (
            <div>
              <p className="font-bold text-warm-900 mb-2">体験レッスンが無料のスタジオ割合</p>
              <div className="space-y-2">
                <Bar label={areaName} pct={freePct} value={`${freePct}%`} accent />
                <Bar label="全国平均" pct={SURVEY.trial.freePct} value={`${SURVEY.trial.freePct}%`} />
              </div>
              <p className="text-xs text-warm-600 mt-2">
                {areaName}では体験料金が確認できた{trialKnown.length}店中{freeCount}店が無料
                {paidMin !== null && (
                  <>。有料の場合の最低額は{paidMin.toLocaleString()}円（全国の有料中央値は{SURVEY.trial.paidMedian.toLocaleString()}円）</>
                )}
              </p>
            </div>
          )}

          {ratingAvg !== null && (
            <div>
              <p className="font-bold text-warm-900 mb-2">掲載スタジオの平均評価（5点満点）</p>
              <div className="space-y-2">
                <Bar label={areaName} pct={(ratingAvg / 5) * 100} value={String(ratingAvg)} accent />
                <Bar label="全国平均" pct={(SURVEY.rating.avg / 5) * 100} value={String(SURVEY.rating.avg)} />
              </div>
              <p className="text-xs text-warm-600 mt-2">
                {areaName}は評価掲載のある{ratings.length}店の平均。全国は{SURVEY.rating.sampled}スタジオの平均
              </p>
            </div>
          )}

          {monthlyMin !== null && (
            <div>
              <p className="font-bold text-warm-900 mb-2">月額プランの最安目安</p>
              <p className="text-warm-900">
                <span className="text-2xl font-bold text-[#8B7355]">{monthlyMin.toLocaleString()}円</span>
                <span className="text-sm text-warm-700">
                  　〜（{areaName}の掲載プランで金額確認できた{monthly.length}店の最安。全国の月4回前後コース中央値は
                  {SURVEY.monthly.median.toLocaleString()}円）
                </span>
              </p>
            </div>
          )}

          <p className="text-xs text-warm-600 border-t border-warm-100 pt-3">
            出典: {SURVEY.meta.source}。{areaName}の数値は本ページ掲載スタジオの公式情報を集計したもので、プラン構成・料金は変更されることがあります。最新は各スタジオ公式サイトでご確認ください。
          </p>
        </div>
      </div>
    </section>
  )
}
