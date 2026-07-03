'use client'

import { useEffect, useRef, useState } from 'react'
import {
  regions,
  prefecturesIn,
  areasInPrefecture,
  prefectures,
  recommend,
  nearestArea,
  sortAreasByDistance,
  areaInfo,
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

// 自作の女性コンシェルジュ・アバター（絵文字ではなくSVGで一から作成）。
function AiAvatar({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      role="img"
      aria-label="案内担当"
      className="mr-1.5 inline-block shrink-0 align-[-0.35em]"
    >
      <circle cx="20" cy="20" r="20" fill="#f3eee6" />
      {/* サイドポニーテール（右） */}
      <path d="M30 13 Q34 16 33 24 Q32 30 30 31 L29 18 Z" fill="#8a6a45" />
      {/* 首 */}
      <rect x="17.5" y="24" width="5" height="6" rx="2" fill="#f2c6a3" />
      {/* 顔 */}
      <circle cx="20" cy="19" r="9" fill="#f6cda9" />
      {/* 前髪 */}
      <path d="M11 19 Q11 8.5 20 8.5 Q29 8.5 29 19 Q27 13 20 13 Q14 13 12 17 Q11.5 18 11 19 Z" fill="#8a6a45" />
      {/* 目 */}
      <circle cx="16.4" cy="19.2" r="1.25" fill="#3b2a20" />
      <circle cx="23.6" cy="19.2" r="1.25" fill="#3b2a20" />
      {/* 笑顔 */}
      <path d="M16.6 22.8 Q20 25.4 23.4 22.8" stroke="#c07a60" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* チーク */}
      <circle cx="14.2" cy="21.6" r="1.4" fill="#f2a98a" opacity="0.5" />
      <circle cx="25.8" cy="21.6" r="1.4" fill="#f2a98a" opacity="0.5" />
    </svg>
  )
}

// AIの回答を1文字ずつ表示（タイピング風）。マウント時に一度だけアニメーション。
// 文字が増えるたびに onTick で親のログを最下部へスクロール（最後の行が隠れないように）。
function Typed({ text, onTick }: { text: string; onTick?: () => void }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    setN(0)
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setN(i)
      onTick?.()
      if (i >= text.length) window.clearInterval(id)
    }, 20)
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])
  return <>{text.slice(0, n)}</>
}

export default function StudioConsultant({ initialAreaKey }: { initialAreaKey?: string }) {
  // エリアページ埋め込み時はそのエリアを自動セットし、「目的」の質問から開始する
  const init = initialAreaKey ? areaInfo(initialAreaKey) : null
  const [step, setStep] = useState<Step>(init ? 'goals' : 'region')
  const [log, setLog] = useState<Bubble[]>([
    init
      ? {
          who: 'ai',
          text: `こんにちは！${init.name}エリアのスタジオ選びをお手伝いします。ピラティスで特に叶えたいことはありますか？（複数選べます。なければ「特にこだわらない」へ）`,
        }
      : {
          who: 'ai',
          text: 'こんにちは！ピラティススタジオ選びをお手伝いします。いくつか質問するだけで、あなたに合いそうなスタジオをご提案します。まず、お探しのエリアはどの地方ですか？',
        },
  ])
  const [region, setRegion] = useState<string | null>(init?.region ?? null)
  const [prefecture, setPrefecture] = useState<string | null>(init?.prefecture ?? null)
  const [areaName, setAreaName] = useState<string>(init?.name ?? '')
  const [ans, setAns] = useState<Partial<Answers>>(
    init && initialAreaKey ? { goals: [], areaKey: initialAreaKey } : { goals: [] }
  )
  const [results, setResults] = useState<Scored[] | null>(null)
  const [geo, setGeo] = useState<{ region: string; prefecture: string } | null>(null)
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null)
  const [locating, setLocating] = useState(false)

  type Snapshot = {
    step: Step; log: Bubble[]; region: string | null; prefecture: string | null;
    areaName: string; ans: Partial<Answers>; results: Scored[] | null;
  }
  const [history, setHistory] = useState<Snapshot[]>([])
  function pushHistory() {
    setHistory((h) => [...h, { step, log, region, prefecture, areaName, ans, results }])
  }
  function goBack() {
    setHistory((h) => {
      if (!h.length) return h
      const p = h[h.length - 1]
      setStep(p.step); setLog(p.log); setRegion(p.region); setPrefecture(p.prefecture)
      setAreaName(p.areaName); setAns(p.ans); setResults(p.results)
      return h.slice(0, -1)
    })
  }

  const logRef = useRef<HTMLDivElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)

  // Cloudflareの無料ジオ情報から現在地の都道府県を取得（IPベース＝都道府県の目安）。
  // 緯度経度は粗いため、最寄りエリアの特定にはブラウザの位置情報(GPS/WiFi)を使う。
  useEffect(() => {
    fetch('/api/geo')
      .then((r) => (r.ok ? r.json() : null))
      .then((g) => {
        if (!g || g.country !== 'JP') return
        const code = String(g.regionCode || '').replace(/^JP-?/, '').padStart(2, '0')
        const pref = JP_CODE_PREF[code]
        if (pref) {
          const p = prefectures.find((x) => x.prefecture === pref)
          if (p) setGeo({ region: p.region, prefecture: pref })
        }
        const lat = Number(g.latitude)
        const lon = Number(g.longitude)
        if (Number.isFinite(lat) && Number.isFinite(lon)) setCoords({ lat, lon })
      })
      .catch(() => {})
  }, [])

  // ブラウザの正確な位置情報（許可制）で最寄りエリアを特定して直行する
  function useGps() {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      if (geo) jumpToPrefecture(geo.region, geo.prefecture)
      return
    }
    setLocating(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false)
        const { latitude, longitude } = pos.coords
        setCoords({ lat: latitude, lon: longitude })
        const n = nearestArea(latitude, longitude)
        if (n) jumpToArea(n.region, n.prefecture, n.key, n.name)
        else if (geo) jumpToPrefecture(geo.region, geo.prefecture)
      },
      () => {
        // 拒否・取得失敗 → IPの都道府県にフォールバック
        setLocating(false)
        if (geo) jumpToPrefecture(geo.region, geo.prefecture)
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    )
  }

  function jumpToPrefecture(r: string, p: string) {
    pushHistory()
    setRegion(r)
    setPrefecture(p)
    say({ who: 'user', text: `現在地から：${p}` })
    say({ who: 'ai', text: `${p}ですね。お探しのエリアはどこですか？` })
    setStep('area')
  }
  function jumpToArea(r: string, p: string, key: string, name: string) {
    pushHistory()
    setRegion(r)
    setPrefecture(p)
    setAns((a) => ({ ...a, areaKey: key }))
    setAreaName(name)
    say({ who: 'user', text: `現在地に近い：${name}（${p}）` })
    say({
      who: 'ai',
      text: `${name}ですね！ピラティスで特に叶えたいことはありますか？（複数選べます。なければ「特にこだわらない」へ）`,
    })
    setStep('goals')
  }

  // チャットログは内部スクロールで最新へ。ページ全体が下に流れて操作部が見えなくなるのを防ぐ。
  const scrollLogBottom = () => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [log])
  useEffect(() => {
    optionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [step])

  const say = (b: Bubble) => setLog((l) => [...l, b])

  function pickRegion(r: string) {
    pushHistory()
    setRegion(r)
    say({ who: 'user', text: r })
    say({ who: 'ai', text: `${r}ですね。都道府県をえらんでください。` })
    setStep('prefecture')
  }
  function pickPrefecture(p: string) {
    pushHistory()
    setPrefecture(p)
    say({ who: 'user', text: p })
    say({ who: 'ai', text: `${p}の中で、お探しのエリアはどこですか？` })
    setStep('area')
  }
  function pickArea(key: string, name: string) {
    pushHistory()
    setAns((a) => ({ ...a, areaKey: key }))
    setAreaName(name)
    say({ who: 'user', text: name })
    say({
      who: 'ai',
      text: 'ありがとうございます。ピラティスで特に叶えたいことはありますか？（複数選べます。なければ「特にこだわらない」へ）',
    })
    setStep('goals')
  }
  // エリア自動セットで開始した場合に、別のエリアへ切り替えたいとき用
  function changeArea() {
    pushHistory()
    say({ who: 'user', text: '別のエリアで探したい' })
    say({ who: 'ai', text: 'かしこまりました。お探しのエリアはどの地方ですか？' })
    setAns((a) => ({ ...a, areaKey: undefined }))
    setStep('region')
  }
  function toggleGoal(id: string) {
    setAns((a) => {
      const g = a.goals || []
      return { ...a, goals: g.includes(id) ? g.filter((x) => x !== id) : [...g, id] }
    })
  }
  function confirmGoals() {
    pushHistory()
    const labels = (ans.goals || []).map((id) => GOALS.find((g) => g.id === id)?.label).filter(Boolean)
    say({ who: 'user', text: labels.length ? labels.join('・') : '特にこだわらない' })
    say({ who: 'ai', text: 'レッスンのタイプの希望はありますか？' })
    setStep('type')
  }
  function pickType(t: 'machine' | 'mat' | 'either', label: string) {
    pushHistory()
    setAns((a) => ({ ...a, type: t }))
    say({ who: 'user', text: label })
    say({ who: 'ai', text: '「無料体験があるか」は重視しますか？' })
    setStep('trial')
  }
  function pickTrial(v: boolean, label: string) {
    pushHistory()
    setAns((a) => ({ ...a, trial: v }))
    say({ who: 'user', text: label })
    say({ who: 'ai', text: '最後に、料金の希望をおしえてください。' })
    setStep('budget')
  }
  function pickBudget(b: 'low' | 'normal' | 'any', label: string) {
    pushHistory()
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
    setHistory([])
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
                {b.who === 'ai' && <AiAvatar />}
                {b.who === 'ai' ? <Typed text={b.text} onTick={scrollLogBottom} /> : b.text}
              </div>
            </div>
          ))}
        </div>

        {/* options（常に見える位置に固定的に表示） */}
        <div ref={optionsRef} className="mt-4 border-t border-warm-200 pt-4">
          {history.length > 0 && (
            <button
              onClick={goBack}
              className="mb-3 inline-flex items-center text-sm font-medium text-warm-500 hover:text-warm-800"
            >
              ← 一つ前の質問にもどる
            </button>
          )}
          <div className="flex flex-wrap gap-2">
            {step === 'region' && (
              <button
                className="mb-1 w-full rounded-xl border border-warm-800 bg-warm-800 px-4 py-2.5 text-left text-sm font-medium text-white hover:bg-warm-900 disabled:opacity-60"
                onClick={useGps}
                disabled={locating}
              >
                {locating ? '📍 現在地を取得中…' : '📍 現在地から最寄りエリアを探す（位置情報を許可）'}
              </button>
            )}
            {step === 'region' && geo && (
              <button
                className="mb-1 w-full rounded-xl border border-warm-300 bg-white px-4 py-2.5 text-left text-sm font-medium text-warm-800 hover:border-warm-800"
                onClick={() => jumpToPrefecture(geo.region, geo.prefecture)}
              >
                現在地の都道府県から探す：{geo.prefecture}（{geo.region}）
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
              (coords
                ? sortAreasByDistance(areasInPrefecture(prefecture), coords.lat, coords.lon)
                : areasInPrefecture(prefecture).map((a) => ({ ...a, km: null as number | null }))
              ).map((a) => (
                <button key={a.key} className={chip} onClick={() => pickArea(a.key, a.name)}>
                  {a.name}
                </button>
              ))}

            {step === 'goals' && init && history.length === 0 && (
              <button
                className="mb-2 w-full text-left text-xs text-warm-500 underline hover:text-warm-800"
                onClick={changeArea}
              >
                {areaName}以外のエリアで探す
              </button>
            )}
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
