'use client'

import { useEffect, useRef, useState } from 'react'
import {
  regions,
  prefecturesIn,
  areasInPrefecture,
  prefectures,
  recommend,
  GOALS,
  JP_CODE_PREF,
  type Answers,
  type Scored,
} from '@/lib/consult'

type Bubble = { who: 'ai' | 'user'; text: string }

const STEPS = ['region', 'prefecture', 'area', 'goals', 'type', 'trial', 'budget', 'result'] as const
type Step = (typeof STEPS)[number]

const chip =
  'inline-flex items-center rounded-full border border-warm-300 bg-white px-4 py-2 text-sm text-warm-800 transition hover:border-warm-800 hover:bg-warm-800 hover:text-white'
const chipActive =
  'inline-flex items-center rounded-full border border-warm-800 bg-warm-800 px-4 py-2 text-sm text-white'

export default function StudioConsultant() {
  const [step, setStep] = useState<Step>('region')
  const [log, setLog] = useState<Bubble[]>([
    {
      who: 'ai',
      text: 'こんにちは！ピラティススタジオ選びをお手伝いします。いくつか質問するだけで、あなたに合いそうなスタジオをご提案します。まず、お探しのエリアはどの地方ですか？',
    },
  ])
  const [region, setRegion] = useState<string | null>(null)
  const [prefecture, setPrefecture] = useState<string | null>(null)
  const [areaName, setAreaName] = useState<string>('')
  const [ans, setAns] = useState<Partial<Answers>>({ goals: [] })
  const [results, setResults] = useState<Scored[] | null>(null)
  const [geo, setGeo] = useState<{ region: string; prefecture: string } | null>(null)

  const logRef = useRef<HTMLDivElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)

  // Cloudflareの無料ジオ情報から現在地の都道府県を推定（外部API・コスト不要）
  useEffect(() => {
    fetch('/api/geo')
      .then((r) => (r.ok ? r.json() : null))
      .then((g) => {
        if (!g || g.country !== 'JP') return
        const code = String(g.regionCode || '').replace(/^JP-?/, '').padStart(2, '0')
        const pref = JP_CODE_PREF[code]
        if (!pref) return
        const p = prefectures.find((x) => x.prefecture === pref)
        if (p) setGeo({ region: p.region, prefecture: pref })
      })
      .catch(() => {})
  }, [])

  function jumpToPrefecture(r: string, p: string) {
    setRegion(r)
    setPrefecture(p)
    say({ who: 'user', text: `現在地から：${p}` })
    say({ who: 'ai', text: `${p}ですね。お探しのエリアはどこですか？` })
    setStep('area')
  }

  // チャットログは内部スクロールで最新へ。ページ全体が下に流れて操作部が見えなくなるのを防ぐ。
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [log])
  useEffect(() => {
    optionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [step])

  const say = (b: Bubble) => setLog((l) => [...l, b])

  function pickRegion(r: string) {
    setRegion(r)
    say({ who: 'user', text: r })
    say({ who: 'ai', text: `${r}ですね。都道府県をえらんでください。` })
    setStep('prefecture')
  }
  function pickPrefecture(p: string) {
    setPrefecture(p)
    say({ who: 'user', text: p })
    say({ who: 'ai', text: `${p}の中で、お探しのエリアはどこですか？` })
    setStep('area')
  }
  function pickArea(key: string, name: string) {
    setAns((a) => ({ ...a, areaKey: key }))
    setAreaName(name)
    say({ who: 'user', text: name })
    say({
      who: 'ai',
      text: 'ありがとうございます。ピラティスで特に叶えたいことはありますか？（複数選べます。なければ「特にこだわらない」へ）',
    })
    setStep('goals')
  }
  function toggleGoal(id: string) {
    setAns((a) => {
      const g = a.goals || []
      return { ...a, goals: g.includes(id) ? g.filter((x) => x !== id) : [...g, id] }
    })
  }
  function confirmGoals() {
    const labels = (ans.goals || []).map((id) => GOALS.find((g) => g.id === id)?.label).filter(Boolean)
    say({ who: 'user', text: labels.length ? labels.join('・') : '特にこだわらない' })
    say({ who: 'ai', text: 'レッスンのタイプの希望はありますか？' })
    setStep('type')
  }
  function pickType(t: 'machine' | 'mat' | 'either', label: string) {
    setAns((a) => ({ ...a, type: t }))
    say({ who: 'user', text: label })
    say({ who: 'ai', text: '「無料体験があるか」は重視しますか？' })
    setStep('trial')
  }
  function pickTrial(v: boolean, label: string) {
    setAns((a) => ({ ...a, trial: v }))
    say({ who: 'user', text: label })
    say({ who: 'ai', text: '最後に、料金の希望をおしえてください。' })
    setStep('budget')
  }
  function pickBudget(b: 'low' | 'normal' | 'any', label: string) {
    const finalAns = { ...ans, budget: b } as Answers
    say({ who: 'user', text: label })
    const recs = recommend(finalAns)
    setResults(recs)
    say({
      who: 'ai',
      text: recs.length
        ? `条件をもとに、あなたに合いそうなスタジオを${recs.length}件えらびました！下のカードをご覧ください。`
        : '申し訳ありません、その条件に合うスタジオが見つかりませんでした。条件をゆるめてもう一度お試しください。',
    })
    setStep('result')
  }
  function reset() {
    setStep('region')
    setRegion(null)
    setPrefecture(null)
    setAns({ goals: [] })
    setResults(null)
    setLog([{ who: 'ai', text: 'もう一度はじめます。お探しのエリアはどの地方ですか？' }])
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-warm-200 bg-warm-50/60 p-4 sm:p-6">
        {/* chat log（内部スクロール・高さ上限） */}
        <div
          ref={logRef}
          className="max-h-[42vh] space-y-3 overflow-y-auto pr-1"
          aria-live="polite"
        >
          {log.map((b, i) => (
            <div key={i} className={b.who === 'ai' ? 'flex justify-start' : 'flex justify-end'}>
              <div
                className={
                  b.who === 'ai'
                    ? 'max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-relaxed text-warm-800 shadow-sm'
                    : 'max-w-[85%] rounded-2xl rounded-tr-sm bg-warm-800 px-4 py-3 text-sm leading-relaxed text-white'
                }
              >
                {b.who === 'ai' && <span className="mr-1" aria-hidden>🤖</span>}
                {b.text}
              </div>
            </div>
          ))}
        </div>

        {/* options（常に見える位置に固定的に表示） */}
        <div ref={optionsRef} className="mt-4 border-t border-warm-200 pt-4">
          <div className="flex flex-wrap gap-2">
            {step === 'region' && geo && (
              <button
                className="mb-1 w-full rounded-xl border border-warm-800 bg-warm-800 px-4 py-2.5 text-left text-sm font-medium text-white hover:bg-warm-900"
                onClick={() => jumpToPrefecture(geo.region, geo.prefecture)}
              >
                📍 現在地から探す：{geo.prefecture}（{geo.region}）→ すぐ選ぶ
              </button>
            )}
            {step === 'region' &&
              regions().map((r) => (
                <button key={r} className={chip} onClick={() => pickRegion(r)}>
                  {r}
                </button>
              ))}

            {step === 'prefecture' &&
              region &&
              prefecturesIn(region).map((p) => (
                <button key={p.prefecture} className={chip} onClick={() => pickPrefecture(p.prefecture)}>
                  {p.prefecture}
                </button>
              ))}

            {step === 'area' &&
              prefecture &&
              areasInPrefecture(prefecture).map((a) => (
                <button key={a.key} className={chip} onClick={() => pickArea(a.key, a.name)}>
                  {a.name}（{a.count}）
                </button>
              ))}

            {step === 'goals' && (
              <div className="w-full">
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => (
                    <button
                      key={g.id}
                      className={(ans.goals || []).includes(g.id) ? chipActive : chip}
                      onClick={() => toggleGoal(g.id)}
                    >
                      {(ans.goals || []).includes(g.id) ? '✓ ' : ''}
                      {g.label}
                    </button>
                  ))}
                </div>
                <button
                  className="mt-4 rounded-full bg-warm-800 px-6 py-2.5 text-sm font-medium text-white hover:bg-warm-900"
                  onClick={confirmGoals}
                >
                  {(ans.goals || []).length ? 'これで進む →' : '特にこだわらない →'}
                </button>
              </div>
            )}

            {step === 'type' && (
              <>
                <button className={chip} onClick={() => pickType('machine', 'マシンピラティス')}>
                  マシンピラティス
                </button>
                <button className={chip} onClick={() => pickType('mat', 'マットピラティス')}>
                  マットピラティス
                </button>
                <button className={chip} onClick={() => pickType('either', 'どちらでもよい')}>
                  どちらでもよい
                </button>
              </>
            )}

            {step === 'trial' && (
              <>
                <button className={chip} onClick={() => pickTrial(true, '無料体験を重視する')}>
                  無料体験を重視する
                </button>
                <button className={chip} onClick={() => pickTrial(false, 'こだわらない')}>
                  こだわらない
                </button>
              </>
            )}

            {step === 'budget' && (
              <>
                <button className={chip} onClick={() => pickBudget('low', 'なるべく抑えたい')}>
                  なるべく抑えたい
                </button>
                <button className={chip} onClick={() => pickBudget('normal', '標準的でよい')}>
                  標準的でよい
                </button>
                <button className={chip} onClick={() => pickBudget('any', 'こだわらない')}>
                  こだわらない
                </button>
              </>
            )}

            {step === 'result' && (
              <button
                className="rounded-full border border-warm-300 px-5 py-2 text-sm font-medium text-warm-700 hover:border-warm-800"
                onClick={reset}
              >
                ↺ もう一度相談する
              </button>
            )}
          </div>
        </div>

        {/* results */}
        {step === 'result' && results && results.length > 0 && (
          <div className="mt-5 space-y-4">
            {results.map(({ s, reasons }, i) => (
              <div key={i} className="rounded-xl border border-warm-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {i === 0 && (
                      <span className="mb-1 inline-block rounded-full bg-warm-800 px-2.5 py-0.5 text-xs font-bold text-white">
                        いちばんのおすすめ
                      </span>
                    )}
                    <h3 className="text-base font-bold text-warm-900">{s.name}</h3>
                    <p className="text-xs text-warm-500">{s.areaName}エリア</p>
                  </div>
                  {s.rating && (
                    <span className="shrink-0 text-sm font-bold text-warm-800">★ {s.rating.toFixed(1)}</span>
                  )}
                </div>
                {reasons.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {reasons.map((r) => (
                      <span key={r} className="rounded-full bg-warm-100 px-2.5 py-0.5 text-xs text-warm-700">
                        {r}
                      </span>
                    ))}
                  </div>
                )}
                <dl className="mt-3 grid grid-cols-1 gap-1 text-sm text-warm-700 sm:grid-cols-2">
                  <div>
                    <span className="text-warm-400">料金目安：</span>
                    {s.price}
                  </div>
                  <div>
                    <span className="text-warm-400">体験：</span>
                    {s.trial}
                  </div>
                </dl>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.officialUrl ? (
                    <a
                      href={s.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="rounded-full bg-warm-800 px-5 py-2 text-sm font-medium text-white hover:bg-warm-900"
                    >
                      公式サイトで詳細・体験予約 →
                    </a>
                  ) : (
                    <a
                      href={`/area/${s.areaKey}/`}
                      className="rounded-full border border-warm-300 px-5 py-2 text-sm font-medium text-warm-800 hover:border-warm-800"
                    >
                      エリアの詳細を見る →
                    </a>
                  )}
                  <a
                    href={`/area/${s.areaKey}/`}
                    className="rounded-full border border-warm-300 px-5 py-2 text-sm font-medium text-warm-800 hover:border-warm-800"
                  >
                    同エリアの他スタジオも見る
                  </a>
                </div>
              </div>
            ))}
            <p className="text-xs leading-relaxed text-warm-400">
              ※ご提案は当サイト掲載の公開情報をもとにした目安です。料金・体験条件・キャンペーンは変更される場合があるため、最新・正確な内容は各公式サイトでご確認ください。「公式サイトで詳細」ボタンは広告（アフィリエイトリンク）を含みます。
            </p>
          </div>
        )}

        {step === 'result' && results && results.length === 0 && (
          <div className="mt-5 rounded-xl border border-warm-200 bg-white p-4">
            <p className="mb-1 font-bold text-warm-900">{areaName}エリアの詳細ページをご覧ください</p>
            <p className="mb-3 text-xs text-warm-500">
              このエリアは個別の比較ページに掲載があります。条件に合うスタジオはそちらでご確認いただけます。
            </p>
            <a
              href={`/area/${ans.areaKey}/`}
              className="inline-block rounded-full bg-warm-800 px-5 py-2 text-sm font-medium text-white hover:bg-warm-900"
            >
              {areaName}のピラティススタジオを見る →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
