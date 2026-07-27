import Link from 'next/link'

/**
 * AreaModifierSections — 検索意図の修飾子軸（「マシンピラティス」「初心者」）を
 * エリアページ内のセクションで受けるための共通コンポーネント。
 *
 * GSCで「{エリア} ピラティス 初心者」「マシンピラティス {エリア}」等の
 * 修飾子クエリに需要があるため、掲載studiosの実データからマシン対応/初心者向けを
 * 判定して表示する。判定は features / description / basicInfo.facilities の
 * テキストのみを根拠にし、該当が無い場合は正直にその旨を書く（捏造しない）。
 */

type Studio = {
  name: string
  price?: string
  trial?: string
  features?: string[]
  description?: string
  access?: string
  basicInfo?: { hours?: string; closed?: string; facilities?: string[] }
}

const MACHINE_RE = /マシン|リフォーマー|reformer|キャデラック|チェア|バレル|タワー/i
const BEGINNER_RE = /初心者|未経験|はじめて|初めて|少人数|マンツーマン|パーソナル|丁寧/i

function haystack(s: Studio): string {
  return [
    ...(s.features ?? []),
    s.description ?? '',
    ...(s.basicInfo?.facilities ?? []),
  ].join(' ')
}

// 「3,300円」が文字列として「0円」を含む問題があるため、無料判定は『無料』表記＋金額パース0円のみ
function parseYen(text: string): number | null {
  const m = text.replace(/,/g, '').match(/(\d{1,6})円/)
  return m ? parseInt(m[1], 10) : null
}

function hasFreeTrial(s: Studio): boolean {
  const t = s.trial ?? ''
  if (t.includes('無料')) return true
  return parseYen(t) === 0
}

export function AreaModifierSections({ areaName, studios }: { areaName: string; studios: Studio[] }) {
  const machine = studios.filter((s) => MACHINE_RE.test(haystack(s)))
  // 初心者向け＝明示的な初心者/少人数/パーソナル系の記載、または体験レッスンで始めやすい店
  const beginner = studios.filter(
    (s) => BEGINNER_RE.test(haystack(s)) || (s.trial ?? '').includes('体験') || hasFreeTrial(s),
  )
  // 無料体験＝trialに『無料』表記または0円の店のみ（キャンペーン条件はtrial原文をそのまま表示）
  const freeTrial = studios.filter(hasFreeTrial)
  // 無料が無いエリアでは、金額が確認できる体験の安い順TOP3を正直に提示
  const paidTrials = studios
    .map((s) => ({ s, yen: parseYen(s.trial ?? '') }))
    .filter((x): x is { s: Studio; yen: number } => x.yen !== null && x.yen > 0)
    .sort((a, b) => a.yen - b.yen)
    .slice(0, 3)

  return (
    <>
      {/* 無料体験修飾子セクション */}
      <section className="py-16 bg-warm-50" id="free-trial">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
            {areaName}で無料体験できるピラティススタジオ
          </h2>
          {freeTrial.length > 0 ? (
            <>
              <p className="text-warm-600 leading-relaxed mb-8">
                {areaName}の掲載スタジオのうち、体験レッスンを無料と案内しているのは{freeTrial.length}
                スタジオです（掲載時点の公式情報。キャンペーンの条件・期間は各公式サイトでご確認ください）。
              </p>
              <div className="space-y-4">
                {freeTrial.map((s, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 border border-warm-200">
                    <h3 className="text-lg font-bold text-warm-900 mb-2">{s.name}</h3>
                    <p className="text-warm-600 text-sm leading-relaxed">{s.description}</p>
                    {s.trial ? <p className="text-warm-500 text-xs mt-2">体験：{s.trial}</p> : null}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-warm-600 leading-relaxed mb-8 bg-white rounded-lg p-6 border border-warm-200">
                現時点の掲載情報では、{areaName}で体験レッスンを無料と明記しているスタジオは確認できていません。
                キャンペーンで無料になる時期もあるため、最新情報は各公式サイトでご確認ください。
                {paidTrials.length > 0 ? 'なお、体験料金が確認できるスタジオは以下のとおりです。' : ''}
              </p>
              {paidTrials.length > 0 ? (
                <div className="space-y-4">
                  {paidTrials.map(({ s }, i) => (
                    <div key={i} className="bg-white rounded-lg p-6 border border-warm-200">
                      <h3 className="text-lg font-bold text-warm-900 mb-2">{s.name}</h3>
                      {s.trial ? <p className="text-warm-500 text-xs">体験：{s.trial}</p> : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </>
          )}
          <div className="text-center mt-8">
            <a
              href="#studios"
              className="inline-block bg-warm-800 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-warm-900 transition"
            >
              {areaName}の全スタジオを料金で比較する
            </a>
          </div>
        </div>
      </section>

      {/* マシンピラティス修飾子セクション */}
      <section className="py-16 bg-white" id="machine">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
            {areaName}でマシンピラティスができるスタジオ
          </h2>
          <p className="text-warm-600 leading-relaxed mb-8">
            リフォーマーなどの専用マシンを使う「マシンピラティス」は、負荷やサポートを調整しやすく、
            正しいフォームを習得しやすいのが特長です。{areaName}でマシンピラティスに対応するスタジオを、
            掲載情報からまとめました（各スタジオの最新の設備・料金は公式サイトでご確認ください）。
          </p>
          {machine.length > 0 ? (
            <div className="space-y-4">
              {machine.map((s, i) => (
                <div key={i} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                  <h3 className="text-lg font-bold text-warm-900 mb-2">{s.name}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed">{s.description}</p>
                  {s.trial ? <p className="text-warm-500 text-xs mt-2">体験：{s.trial}</p> : null}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-warm-600 leading-relaxed bg-warm-50 rounded-lg p-6 border border-warm-200">
              現時点の掲載情報では、{areaName}でマシン専用と明記されたスタジオは確認できていません。
              マット中心のスタジオでもマシンを併設している場合があるため、下記の一覧から各スタジオの設備を
              ご確認ください。
            </p>
          )}
          <div className="text-center mt-8">
            <a
              href="#studios"
              className="inline-block bg-warm-800 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-warm-900 transition"
            >
              {areaName}のスタジオを料金で比較する
            </a>
          </div>
        </div>
      </section>

      {/* 初心者修飾子セクション */}
      <section className="py-16 bg-warm-50" id="beginner">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
            {areaName}で初心者におすすめのピラティススタジオ
          </h2>
          <p className="text-warm-600 leading-relaxed mb-8">
            初めてのピラティスは、体験レッスンがある・少人数やパーソナルで丁寧に見てもらえるスタジオが安心です。
            {areaName}で初心者でも始めやすいスタジオを、体験レッスンの有無や指導形態から選びました。
          </p>
          {beginner.length > 0 ? (
            <div className="space-y-4">
              {beginner.map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-warm-200">
                  <h3 className="text-lg font-bold text-warm-900 mb-2">{s.name}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed">{s.description}</p>
                  <p className="text-warm-500 text-xs mt-2">
                    {hasFreeTrial(s) ? '無料体験あり' : s.trial ? `体験：${s.trial}` : '体験の有無は公式サイトでご確認ください'}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-warm-600 leading-relaxed bg-white rounded-lg p-6 border border-warm-200">
              各スタジオの体験レッスンや初心者向けプランの有無は公式サイトでご確認ください。まずは体験レッスンで
              雰囲気を確かめるのがおすすめです。
            </p>
          )}
          <p className="text-warm-500 text-xs mt-6 text-center">
            ※対応状況は掲載時点の情報です。最新の料金・プランは各公式サイトでご確認ください。
          </p>
        </div>
      </section>
    </>
  )
}
