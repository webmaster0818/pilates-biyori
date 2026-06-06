import { SURVEY } from '@/data/site-survey'

/*
 * 記事内で使う図解・データ可視化コンポーネント群。
 * すべてサーバーコンポーネント（静的SVG）。MDX本文から <RatingDistChart /> のように呼び出す。
 * 配色は warm パレット（tailwind.config.ts）に合わせる。
 */

const INK = '#292524' // warm-800
const SUB = '#78716c' // warm-500
const FAINT = '#a8a29e' // warm-400
const LINE = '#e7e5e4' // warm-200
const BG = '#fafaf9' // warm-50
const ACCENT = '#8B7355'
const ACCENT_SOFT = '#cdbfa9'

// 出典キャプション ---------------------------------------------------------
export function SurveyNote({ extra }: { extra?: string }) {
  return (
    <p className="not-prose text-xs text-warm-400 mt-2 leading-relaxed">
      出典：{SURVEY.meta.source}（{SURVEY.meta.period}時点）。{extra ?? '料金は改定される場合があるため最新は各スタジオ公式でご確認ください。'}
    </p>
  )
}

// 図解の共通ラッパー -------------------------------------------------------
function Figure({
  title,
  badge,
  children,
  note,
}: {
  title?: string
  badge?: string
  children: React.ReactNode
  note?: React.ReactNode
}) {
  return (
    <figure className="not-prose my-8 border border-warm-200 rounded-xl bg-white overflow-hidden">
      {(title || badge) && (
        <figcaption className="flex items-center justify-between gap-3 px-5 py-3 border-b border-warm-100 bg-warm-50">
          {title && <span className="text-sm font-medium text-warm-800">{title}</span>}
          {badge && (
            <span className="shrink-0 text-[10px] tracking-[0.15em] uppercase font-medium text-white bg-[#8B7355] rounded-full px-3 py-1">
              {badge}
            </span>
          )}
        </figcaption>
      )}
      <div className="p-5">{children}</div>
      {note && <div className="px-5 pb-4">{note}</div>}
    </figure>
  )
}

// 横棒バー（汎用） ---------------------------------------------------------
function HBars({
  rows,
  unit = '%',
  maxValue,
}: {
  rows: { label: string; value: number; sub?: string }[]
  unit?: string
  maxValue?: number
}) {
  const max = maxValue ?? Math.max(...rows.map((r) => r.value))
  return (
    <div className="not-prose flex flex-col gap-3">
      {rows.map((r, i) => {
        const w = Math.max(2, Math.round((r.value / max) * 100))
        return (
          <div key={i} className="flex items-center gap-3">
            <div className="w-40 shrink-0 text-xs text-warm-600 leading-snug text-right">{r.label}</div>
            <div className="flex-1 h-7 rounded bg-warm-100 overflow-hidden">
              <div
                className="h-full rounded flex items-center justify-end pr-2"
                style={{ width: `${w}%`, background: i === 0 ? ACCENT : ACCENT_SOFT }}
              >
                <span className="text-[11px] font-semibold text-white whitespace-nowrap">
                  {r.value}
                  {unit}
                  {r.sub ? ` ${r.sub}` : ''}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// 1. 評価分布チャート（独自データ） ----------------------------------------
export function RatingDistChart() {
  const d = SURVEY.rating.dist
  const max = Math.max(...d.map((x) => x.count))
  const W = 640
  const H = 240
  const padL = 36
  const padB = 34
  const padT = 16
  const innerW = W - padL - 16
  const innerH = H - padB - padT
  const bw = innerW / d.length
  return (
    <Figure title="ピラティススタジオの評価分布（5点満点）" badge="独自調査" note={<SurveyNote extra={`平均評価は${SURVEY.rating.avg}点（${SURVEY.rating.min}〜${SURVEY.rating.max}）でした。`} />}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="評価分布の棒グラフ">
        {/* y軸グリッド */}
        {[0, 0.5, 1].map((t, i) => {
          const y = padT + innerH - innerH * t
          return (
            <g key={i}>
              <line x1={padL} y1={y} x2={W - 16} y2={y} stroke={LINE} strokeWidth={1} />
              <text x={padL - 6} y={y + 4} textAnchor="end" fontSize={10} fill={FAINT}>
                {Math.round(max * t)}
              </text>
            </g>
          )
        })}
        {d.map((x, i) => {
          const h = (x.count / max) * innerH
          const xx = padL + bw * i + bw * 0.18
          const ww = bw * 0.64
          const yy = padT + innerH - h
          const isPeak = x.count === max
          return (
            <g key={i}>
              <rect x={xx} y={yy} width={ww} height={h} rx={3} fill={isPeak ? ACCENT : ACCENT_SOFT} />
              <text x={xx + ww / 2} y={yy - 5} textAnchor="middle" fontSize={11} fontWeight={600} fill={INK}>
                {x.count}
              </text>
              <text x={xx + ww / 2} y={H - padB + 18} textAnchor="middle" fontSize={10} fill={SUB}>
                {x.score}
              </text>
            </g>
          )
        })}
        <text x={padL} y={12} fontSize={10} fill={FAINT}>
          スタジオ数（n={SURVEY.rating.sampled}）
        </text>
      </svg>
    </Figure>
  )
}

// 2. 体験レッスン料金の内訳（独自データ） ----------------------------------
export function TrialPriceChart() {
  const rows = SURVEY.trial.buckets.map((b) => ({ label: b.label, value: b.pct, sub: `(${b.count}件)` }))
  return (
    <Figure
      title="体験レッスン料金の内訳（金額公開141スタジオ）"
      badge="独自調査"
      note={
        <SurveyNote
          extra={`約${SURVEY.trial.freePct}%が無料体験を実施。有料の場合の中央値は${SURVEY.trial.paidMedian.toLocaleString()}円（${SURVEY.trial.paidMin.toLocaleString()}〜${SURVEY.trial.paidMax.toLocaleString()}円）でした。`}
        />
      }
    >
      <HBars rows={rows} unit="%" maxValue={Math.max(...rows.map((r) => r.value))} />
    </Figure>
  )
}

// 3. 設備・形態の採用率（独自データ） --------------------------------------
export function FeatureAdoptionChart() {
  const rows = SURVEY.features.items.map((it) => ({ label: it.label, value: it.pct, sub: `(${it.count}/${SURVEY.features.sampled})` }))
  return (
    <Figure title="スタジオの設備・レッスン形態の割合" badge="独自調査" note={<SurveyNote extra={`全国${SURVEY.features.sampled}スタジオの掲載情報を集計。`} />}>
      <HBars rows={rows} unit="%" maxValue={100} />
    </Figure>
  )
}

// 4. 月額（月4回前後）料金ゾーン（独自データ） -----------------------------
export function MonthlyFeeChart() {
  const rows = SURVEY.monthly.buckets.map((b) => ({ label: b.label, value: b.pct, sub: `(${b.count}件)` }))
  return (
    <Figure
      title="月額コース（月4回前後）の料金分布（金額公開47スタジオ）"
      badge="独自調査"
      note={<SurveyNote extra={`掲載料金の中央値は約${SURVEY.monthly.median.toLocaleString()}円。最頻ゾーンは「〜10,000円」と「13,001〜16,000円」に二極化していました。`} />}
    >
      <HBars rows={rows} unit="%" maxValue={Math.max(...rows.map((r) => r.value))} />
    </Figure>
  )
}

// 5. ピラティス vs ヨガ 図解 ----------------------------------------------
export function PilatesYogaDiagram() {
  const rows: { axis: string; pilates: string; yoga: string }[] = [
    { axis: '主な目的', pilates: '体幹・姿勢の再構築', yoga: '心身の調和・柔軟性' },
    { axis: '呼吸法', pilates: '胸式呼吸（交感神経）', yoga: '腹式呼吸（副交感神経）' },
    { axis: '動きの質', pilates: '動き続ける（動的）', yoga: 'ポーズで静止（静的）' },
    { axis: '起源', pilates: 'リハビリ（20世紀）', yoga: '修行・哲学（古代インド）' },
    { axis: '器具', pilates: 'マシン（リフォーマー）あり', yoga: '基本はマットのみ' },
  ]
  return (
    <Figure title="ピラティスとヨガの違い（早わかり図）" note={<p className="not-prose text-xs text-warm-400 mt-1">※どちらが優れているかではなく目的の違い。併用する人も多い。</p>}>
      <div className="not-prose overflow-hidden rounded-lg border border-warm-100">
        <div className="grid grid-cols-[1fr_1.3fr_1.3fr]">
          <div className="bg-warm-100 px-3 py-2 text-[11px] font-medium text-warm-500" />
          <div className="px-3 py-2 text-sm font-semibold text-white text-center" style={{ background: ACCENT }}>
            ピラティス
          </div>
          <div className="px-3 py-2 text-sm font-semibold text-warm-700 text-center bg-warm-200">ヨガ</div>
          {rows.map((r, i) => (
            <div className="contents" key={i}>
              <div className="bg-warm-50 px-3 py-2.5 text-[11px] text-warm-500 border-t border-warm-100 flex items-center">{r.axis}</div>
              <div className="px-3 py-2.5 text-xs text-warm-800 border-t border-l border-warm-100 leading-snug flex items-center" style={{ background: '#f7f3ee' }}>
                {r.pilates}
              </div>
              <div className="px-3 py-2.5 text-xs text-warm-600 border-t border-l border-warm-100 leading-snug flex items-center">{r.yoga}</div>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}

// 6. インナーマッスル断面図 ------------------------------------------------
export function InnerMuscleDiagram() {
  return (
    <Figure title="アウターマッスルとインナーマッスル（体幹の断面イメージ）" note={<p className="not-prose text-xs text-warm-400 mt-1">ピラティスは深層のインナーマッスルを優先的に働かせ、内側から胴体を安定させる。</p>}>
      <svg viewBox="0 0 520 260" width="100%" role="img" aria-label="体幹の断面図。外側のアウターマッスルと内側のインナーマッスル">
        {/* 胴体外形 */}
        <ellipse cx={200} cy={130} rx={150} ry={100} fill={BG} stroke={LINE} strokeWidth={2} />
        {/* アウター層 */}
        <ellipse cx={200} cy={130} rx={150} ry={100} fill="none" stroke={ACCENT_SOFT} strokeWidth={14} />
        {/* インナー層 */}
        <ellipse cx={200} cy={130} rx={92} ry={58} fill="#f1ebe2" stroke={ACCENT} strokeWidth={4} strokeDasharray="2 0" />
        {/* 背骨 */}
        <circle cx={200} cy={130} r={14} fill={ACCENT} />
        <text x={200} y={134} textAnchor="middle" fontSize={9} fill="#fff">背骨</text>
        {/* ラベル: アウター */}
        <line x1={350} y1={70} x2={300} y2={95} stroke={FAINT} strokeWidth={1.2} />
        <circle cx={352} cy={70} r={3} fill={ACCENT_SOFT} />
        {/* ラベル: インナー */}
        <line x1={130} y1={210} x2={165} y2={170} stroke={FAINT} strokeWidth={1.2} />
        <circle cx={128} cy={210} r={3} fill={ACCENT} />
        {/* 凡例ボックス（右） */}
        <g transform="translate(380,110)">
          <rect x={0} y={0} width={16} height={16} rx={3} fill={ACCENT_SOFT} />
          <text x={24} y={13} fontSize={13} fill={INK} fontWeight={600}>アウターマッスル</text>
          <text x={24} y={31} fontSize={11} fill={SUB}>表層の大きな筋肉</text>
          <text x={24} y={46} fontSize={11} fill={SUB}>（瞬発力・見た目）</text>
          <rect x={0} y={70} width={16} height={16} rx={3} fill={ACCENT} />
          <text x={24} y={83} fontSize={13} fill={INK} fontWeight={600}>インナーマッスル</text>
          <text x={24} y={101} fontSize={11} fill={SUB}>深層の小さな筋肉</text>
          <text x={24} y={116} fontSize={11} fill={SUB}>（姿勢・安定＝ピラティス）</text>
        </g>
      </svg>
    </Figure>
  )
}

// 7. 姿勢ビフォーアフター図 ------------------------------------------------
function PostureFigure({ label, lean, color }: { label: string; lean: 'before' | 'after'; color: string }) {
  // 簡易シルエット（横向き）
  const before = lean === 'before'
  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 120 220" width="120" height="220" role="img" aria-label={label}>
        {/* 基準鉛直線 */}
        <line x1={60} y1={10} x2={60} y2={205} stroke={LINE} strokeWidth={1} strokeDasharray="4 4" />
        {before ? (
          <>
            {/* 頭が前、背中が丸い猫背 + 反り腰 */}
            <circle cx={78} cy={32} r={14} fill={color} />
            <path d="M78 46 C 70 70, 86 92, 70 120 C 60 140, 74 150, 62 168 L 56 205" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" />
            {/* お腹前突 */}
            <path d="M70 120 q 22 6 8 40" fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" opacity={0.5} />
          </>
        ) : (
          <>
            {/* まっすぐ */}
            <circle cx={60} cy={32} r={14} fill={color} />
            <path d="M60 46 L 60 120 L 58 168 L 56 205" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" />
          </>
        )}
      </svg>
      <span className="text-xs font-medium" style={{ color: before ? SUB : ACCENT }}>{label}</span>
    </div>
  )
}

export function PostureDiagram() {
  return (
    <Figure title="姿勢の変化イメージ（猫背・反り腰 → ニュートラル）" note={<p className="not-prose text-xs text-warm-400 mt-1">体幹が働くと頭・肩・骨盤が鉛直線上に並び、ぽっこりお腹も目立ちにくくなる。</p>}>
      <div className="not-prose flex items-center justify-center gap-8">
        <PostureFigure label="Before（猫背・反り腰）" lean="before" color={FAINT} />
        <div className="text-2xl text-warm-300">→</div>
        <PostureFigure label="After（整った姿勢）" lean="after" color={ACCENT} />
      </div>
    </Figure>
  )
}

// 8. 効果が出るまでのタイムライン ------------------------------------------
export function EffectTimeline() {
  const steps = [
    { when: '初回〜数回', title: '体の使い方の気づき', desc: '呼吸・姿勢の意識が変わり、レッスン後に体が軽い感覚。' },
    { when: '約1ヶ月', title: '姿勢・コリの変化', desc: '猫背や肩こりがラクに。フォームが安定し始める。' },
    { when: '2〜3ヶ月', title: '見た目の引き締まり', desc: '体幹が安定し、ウエスト・姿勢ラインに変化が出やすい時期。' },
    { when: '3ヶ月以降', title: '習慣・体質の定着', desc: '日常の動きが変わり、リバウンドしにくい体の土台に。' },
  ]
  return (
    <Figure title="ピラティスの効果が出るまでの目安タイムライン" note={<p className="not-prose text-xs text-warm-400 mt-1">※週1〜2回・正しいフォームで継続した場合の一般的な目安。効果には個人差があります。</p>}>
      <ol className="not-prose relative border-l-2 border-warm-200 ml-3 flex flex-col gap-5">
        {steps.map((s, i) => (
          <li key={i} className="ml-5 relative">
            <span
              className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full border-2 border-white"
              style={{ background: i === 2 ? ACCENT : ACCENT_SOFT }}
            />
            <div className="text-[11px] font-semibold tracking-wide" style={{ color: ACCENT }}>{s.when}</div>
            <div className="text-sm font-medium text-warm-800">{s.title}</div>
            <div className="text-xs text-warm-500 leading-relaxed">{s.desc}</div>
          </li>
        ))}
      </ol>
    </Figure>
  )
}

// 9. マット vs マシン 図解 -------------------------------------------------
export function MatVsMachineDiagram() {
  const cols = [
    {
      head: 'マットピラティス',
      points: ['自重で行う', '料金が安め', 'グループ向き', '基礎・自宅でも'],
      icon: (
        <svg viewBox="0 0 100 60" width="100%" role="img" aria-label="マットのイラスト">
          <rect x={10} y={34} width={80} height={14} rx={3} fill={ACCENT_SOFT} />
          <rect x={10} y={34} width={80} height={5} rx={2} fill={ACCENT} opacity={0.4} />
          <path d="M50 33 q 6 -18 18 -16" fill="none" stroke={ACCENT} strokeWidth={4} strokeLinecap="round" />
          <circle cx={70} cy={16} r={6} fill={ACCENT} />
        </svg>
      ),
    },
    {
      head: 'マシンピラティス',
      points: ['リフォーマー使用', '負荷を細かく調整', '個別指導向き', '効率・効果が高め'],
      icon: (
        <svg viewBox="0 0 100 60" width="100%" role="img" aria-label="リフォーマーのイラスト">
          <rect x={8} y={36} width={84} height={10} rx={2} fill={ACCENT_SOFT} />
          <rect x={20} y={28} width={34} height={10} rx={2} fill={ACCENT} />
          <line x1={54} y1={33} x2={84} y2={33} stroke={SUB} strokeWidth={2} />
          <circle cx={84} cy={33} r={4} fill={ACCENT} />
          <line x1={14} y1={46} x2={14} y2={52} stroke={SUB} strokeWidth={2} />
          <line x1={88} y1={46} x2={88} y2={52} stroke={SUB} strokeWidth={2} />
        </svg>
      ),
    },
  ]
  return (
    <Figure title="マットピラティス と マシンピラティス" note={<p className="not-prose text-xs text-warm-400 mt-1">初心者はどちらでもOK。フォームを丁寧に見てほしいならマシン（個別）がおすすめ。</p>}>
      <div className="not-prose grid grid-cols-2 gap-4">
        {cols.map((c, i) => (
          <div key={i} className="rounded-lg border border-warm-100 bg-warm-50 p-4 flex flex-col gap-3">
            <div className="h-12">{c.icon}</div>
            <div className="text-sm font-semibold text-center" style={{ color: ACCENT }}>{c.head}</div>
            <ul className="flex flex-col gap-1.5">
              {c.points.map((p, j) => (
                <li key={j} className="text-xs text-warm-600 flex gap-1.5">
                  <span style={{ color: ACCENT }}>•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Figure>
  )
}

// 10. 呼吸法の違い図解（胸式 vs 腹式） ------------------------------------
export function BreathingDiagram() {
  return (
    <Figure title="ピラティスの胸式呼吸と腹式呼吸の違い" note={<p className="not-prose text-xs text-warm-400 mt-1">ピラティスは主に胸式（ラテラル）呼吸。肋骨を横に広げ、お腹は薄く保ったまま行うことで体幹が働く。</p>}>
      <div className="not-prose grid grid-cols-2 gap-4">
        {/* 胸式 */}
        <div className="rounded-lg border border-warm-100 p-4 flex flex-col items-center gap-2" style={{ background: '#f7f3ee' }}>
          <svg viewBox="0 0 140 130" width="100%" height="120" role="img" aria-label="胸式呼吸：肋骨が横に広がる">
            {/* 胴体 */}
            <path d="M45 20 q25 -8 50 0 l-4 95 q-21 7 -42 0 Z" fill="#fff" stroke={ACCENT} strokeWidth={2} />
            {/* 肋骨（拡張） */}
            {[0, 1, 2, 3].map((i) => (
              <path key={i} d={`M48 ${36 + i * 12} q22 ${10 + i} 44 0`} fill="none" stroke={ACCENT} strokeWidth={2} />
            ))}
            {/* 横方向の矢印 */}
            <line x1={30} y1={52} x2={44} y2={52} stroke={ACCENT} strokeWidth={2} />
            <path d="M30 52 l6 -3 v6 Z" fill={ACCENT} />
            <line x1={110} y1={52} x2={96} y2={52} stroke={ACCENT} strokeWidth={2} />
            <path d="M110 52 l-6 -3 v6 Z" fill={ACCENT} />
          </svg>
          <div className="text-sm font-semibold" style={{ color: ACCENT }}>胸式呼吸（ピラティス）</div>
          <div className="text-xs text-warm-600 text-center leading-snug">肋骨を左右に広げる。お腹は引き締めたまま → 体幹が働く・交感神経が優位で活動的に</div>
        </div>
        {/* 腹式 */}
        <div className="rounded-lg border border-warm-100 bg-warm-50 p-4 flex flex-col items-center gap-2">
          <svg viewBox="0 0 140 130" width="100%" height="120" role="img" aria-label="腹式呼吸：お腹がふくらむ">
            <path d="M45 20 q25 -8 50 0 l-2 70 q5 30 -23 30 q-28 0 -23 -30 l-2 -70 Z" fill="#fff" stroke={FAINT} strokeWidth={2} />
            {/* お腹のふくらみ */}
            <ellipse cx={70} cy={98} rx={22} ry={18} fill="none" stroke={FAINT} strokeWidth={2} />
            {/* 下向き矢印 */}
            <line x1={70} y1={70} x2={70} y2={86} stroke={SUB} strokeWidth={2} />
            <path d="M70 88 l-3 -6 h6 Z" fill={SUB} />
          </svg>
          <div className="text-sm font-semibold text-warm-600">腹式呼吸（ヨガ等）</div>
          <div className="text-xs text-warm-600 text-center leading-snug">横隔膜を下げお腹をふくらませる → リラックス・副交感神経が優位に</div>
        </div>
      </div>
    </Figure>
  )
}

// 11. グループ vs パーソナル 図解 -----------------------------------------
export function GroupVsPersonalDiagram() {
  const cols = [
    { head: 'グループレッスン', icon: '◍◍◍', points: ['1回あたり安い（3,000〜5,000円目安）', '定員5〜15名で受講', '仲間ができ継続しやすい', '個別の細かい修正は少なめ'] },
    { head: 'パーソナル / 個室', icon: '◍', points: ['完全マンツーマン指導', '体の悩みに合わせて設計', '効果・フォーム習得が早い', '料金は高め（8,000〜15,000円目安）'] },
  ]
  return (
    <Figure
      title="グループレッスン と パーソナル（個別）"
      note={<SurveyNote extra={`当サイト調査では全国211スタジオの約44%がパーソナル・完全個室に対応していました。`} />}
    >
      <div className="not-prose grid grid-cols-2 gap-4">
        {cols.map((c, i) => (
          <div key={i} className="rounded-lg border border-warm-100 p-4 flex flex-col gap-3" style={{ background: i === 1 ? '#f7f3ee' : BG }}>
            <div className="text-center text-2xl tracking-widest" style={{ color: i === 1 ? ACCENT : ACCENT_SOFT }}>{c.icon}</div>
            <div className="text-sm font-semibold text-center" style={{ color: ACCENT }}>{c.head}</div>
            <ul className="flex flex-col gap-1.5">
              {c.points.map((p, j) => (
                <li key={j} className="text-xs text-warm-600 flex gap-1.5">
                  <span style={{ color: ACCENT }}>•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Figure>
  )
}

// 12. 外部一次情報の引用ボックス（厚労省ガイド2023） ----------------------
export function ActivityGuideNote() {
  return (
    <aside className="not-prose my-6 rounded-lg border border-warm-200 bg-warm-50 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-warm-100" style={{ background: '#f1ebe2' }}>
        <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-white bg-[#8B7355] rounded-full px-2.5 py-0.5">一次情報</span>
        <span className="text-xs font-medium text-warm-700">公的機関の運動推奨</span>
      </div>
      <div className="px-4 py-3 text-sm text-warm-700 leading-relaxed">
        厚生労働省「健康づくりのための身体活動・運動ガイド2023」は、成人に対し
        <strong>歩行などの身体活動を1日60分以上（週23メッツ・時以上）</strong>に加え、
        <strong>筋力トレーニングを週2〜3日</strong>行うことを推奨しています。ピラティスは筋力・体幹に働きかける運動として、この「週2〜3日の筋トレ」に位置づけて取り入れやすい運動です。
        <a href="https://www.e-healthnet.mhlw.go.jp/information/policy/p-005.html" target="_blank" rel="noopener noreferrer" className="block mt-2 text-xs text-warm-500 underline hover:text-warm-700">
          出典：厚生労働省 e-ヘルスネット「健康づくりのための身体活動・運動ガイド2023」
        </a>
      </div>
    </aside>
  )
}

// 13. 脚のアライメント図解（正常／O脚／X脚） -----------------------------
function LegSilhouette({ type }: { type: 'normal' | 'o' | 'x' }) {
  // 正面シルエットの脚2本
  const paths: Record<string, [string, string]> = {
    normal: ['M40 6 L38 96', 'M60 6 L62 96'],
    o: ['M40 6 C26 40, 26 60, 40 96', 'M60 6 C74 40, 74 60, 60 96'],
    x: ['M40 6 C58 38, 36 64, 30 96', 'M60 6 C42 38, 64 64, 70 96'],
  }
  const [l, r] = paths[type]
  return (
    <svg viewBox="0 0 100 110" width="100%" height="120" role="img" aria-label={`${type}脚のイメージ`}>
      {/* 骨盤 */}
      <rect x={34} y={0} width={32} height={10} rx={3} fill={ACCENT_SOFT} />
      <path d={l} fill="none" stroke={ACCENT} strokeWidth={7} strokeLinecap="round" />
      <path d={r} fill="none" stroke={ACCENT} strokeWidth={7} strokeLinecap="round" />
    </svg>
  )
}
export function LegAlignmentDiagram() {
  const cols: { t: 'normal' | 'o' | 'x'; label: string; desc: string }[] = [
    { t: 'normal', label: '正常', desc: '太もも・膝・ふくらはぎ・くるぶしが軽く接する' },
    { t: 'o', label: 'O脚', desc: '膝が外に開き、すねが弓なり。内ももが使えていない' },
    { t: 'x', label: 'X脚', desc: '膝が内に入り、くるぶしが離れる。股関節の内旋' },
  ]
  return (
    <Figure title="脚のアライメント（正常・O脚・X脚）" note={<p className="not-prose text-xs text-warm-400 mt-1">多くは骨の変形ではなく筋肉・姿勢のクセによる「機能的」なもの。ピラティスで内もも・お尻・股関節を整える対象になる。</p>}>
      <div className="not-prose grid grid-cols-3 gap-3">
        {cols.map((c, i) => (
          <div key={i} className="rounded-lg border border-warm-100 bg-warm-50 p-3 flex flex-col items-center gap-1.5">
            <LegSilhouette type={c.t} />
            <div className="text-sm font-semibold" style={{ color: ACCENT }}>{c.label}</div>
            <div className="text-[11px] text-warm-600 text-center leading-snug">{c.desc}</div>
          </div>
        ))}
      </div>
    </Figure>
  )
}

// 14. ピラティスの基本原則 図解 -------------------------------------------
export function PrinciplesDiagram() {
  const items = [
    { jp: '集中', en: 'Concentration', d: '動かす部位に意識を向ける' },
    { jp: 'コントロール', en: 'Control', d: '反動を使わず制御して動く' },
    { jp: '中心（コア）', en: 'Centering', d: '体の中心＝パワーハウスから動く' },
    { jp: '呼吸', en: 'Breathing', d: '動きと胸式呼吸を連動させる' },
    { jp: '正確性', en: 'Precision', d: '一回一回を正しいフォームで' },
    { jp: '流れ', en: 'Flow', d: 'なめらかに連続して動く' },
  ]
  return (
    <Figure title="ピラティスの6つの基本原則" note={<p className="not-prose text-xs text-warm-400 mt-1">創始者ジョセフ・ピラティスの考え方に基づく古典的な6原則（流派により8原則とする場合もある）。</p>}>
      <div className="not-prose grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-lg border border-warm-100 p-3" style={{ background: i % 2 ? BG : '#f7f3ee' }}>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-semibold" style={{ color: ACCENT }}>{it.jp}</span>
              <span className="text-[10px] uppercase tracking-wider text-warm-400">{it.en}</span>
            </div>
            <div className="text-xs text-warm-600 mt-1 leading-snug">{it.d}</div>
          </div>
        ))}
      </div>
    </Figure>
  )
}

// 15. 服装ガイド図解（おすすめ／避けたい） --------------------------------
export function ClothingDiagram() {
  return (
    <Figure title="ピラティスの服装：おすすめ と 避けたい" note={<p className="not-prose text-xs text-warm-400 mt-1">体のラインが見え、動きを妨げないものを。マシン系は紐・ジッパー・装飾が引っかからない服が安心。</p>}>
      <div className="not-prose grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-warm-100 p-4" style={{ background: '#f7f3ee' }}>
          <div className="text-sm font-semibold mb-2" style={{ color: ACCENT }}>◎ おすすめ</div>
          <ul className="flex flex-col gap-1.5">
            {['体にフィットしたトップス', 'レギンス・動けるパンツ', '伸縮性のある素材', '滑り止め付き靴下（5本指）'].map((p, j) => (
              <li key={j} className="text-xs text-warm-700 flex gap-1.5"><span style={{ color: ACCENT }}>•</span><span>{p}</span></li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-warm-100 bg-warm-50 p-4">
          <div className="text-sm font-semibold mb-2 text-warm-500">△ 避けたい</div>
          <ul className="flex flex-col gap-1.5">
            {['ダボっとした服（フォームが見えない）', 'ジッパー・フード・装飾付き', '滑りやすい靴下・裸足NGの所も', '締め付けの強すぎる下着'].map((p, j) => (
              <li key={j} className="text-xs text-warm-600 flex gap-1.5"><span className="text-warm-400">•</span><span>{p}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Figure>
  )
}

// 16. 食事バランス図解 ----------------------------------------------------
export function MealBalanceDiagram() {
  const rows = [
    { label: 'たんぱく質を増やす', value: 90, sub: '筋肉の材料（肉・魚・卵・大豆）' },
    { label: '野菜・食物繊維', value: 80, sub: 'ビタミン・満腹感・腸内環境' },
    { label: '糖質・脂質は適量', value: 45, sub: '抜きすぎず質と量を調整' },
  ]
  return (
    <Figure title="ピラティス効果を高める食事の優先度" note={<p className="not-prose text-xs text-warm-400 mt-1">極端な制限ではなく「たんぱく質を足し、野菜を増やす」が基本。効果には個人差があります。</p>}>
      <div className="not-prose flex flex-col gap-3">
        {rows.map((r, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium text-warm-700">{r.label}</span>
              <span className="text-warm-400">{r.sub}</span>
            </div>
            <div className="h-3 rounded bg-warm-100 overflow-hidden">
              <div className="h-full rounded" style={{ width: `${r.value}%`, background: i === 2 ? ACCENT_SOFT : ACCENT }} />
            </div>
          </div>
        ))}
      </div>
    </Figure>
  )
}

// 17. 注意喚起ボックス（医療・安全） --------------------------------------
export function CautionNote({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <aside className="not-prose my-6 rounded-lg border border-warm-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2" style={{ background: '#f1ebe2' }}>
        <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-white bg-[#8B7355] rounded-full px-2.5 py-0.5">安全のために</span>
        <span className="text-xs font-medium text-warm-700">{title ?? '取り組む前に確認'}</span>
      </div>
      <div className="px-4 py-3 text-sm text-warm-700 leading-relaxed">{children}</div>
    </aside>
  )
}

// 18. 汎用2カラム比較（内部ヘルパー） ------------------------------------
function TwoCol({ left, right, caption, title }: { left: { title: string; items: string[] }; right: { title: string; items: string[] }; caption?: string; title?: string }) {
  const col = (c: { title: string; items: string[] }, hi: boolean) => (
    <div className="rounded-lg border border-warm-100 p-4 flex flex-col gap-2" style={{ background: hi ? '#f7f3ee' : BG }}>
      <div className="text-sm font-semibold text-center" style={{ color: ACCENT }}>{c.title}</div>
      <ul className="flex flex-col gap-1.5">
        {c.items.map((p, j) => (
          <li key={j} className="text-xs text-warm-600 flex gap-1.5"><span style={{ color: ACCENT }}>•</span><span>{p}</span></li>
        ))}
      </ul>
    </div>
  )
  return (
    <Figure title={title} note={caption ? <p className="not-prose text-xs text-warm-400 mt-1">{caption}</p> : undefined}>
      <div className="not-prose grid grid-cols-2 gap-4">
        {col(left, true)}
        {col(right, false)}
      </div>
    </Figure>
  )
}

export function MorningNightDiagram() {
  return (
    <TwoCol
      title="朝ピラティス と 夜ピラティス"
      left={{ title: '朝ピラティス', items: ['体を目覚めさせ活動的に', '日中の姿勢・不調予防', '習慣化しやすい', '活動的なメニュー向き'] }}
      right={{ title: '夜ピラティス', items: ['1日のこわばりをリセット', 'リラックスで睡眠の質UP', '仕事帰りに通いやすい', '呼吸中心のメニュー向き'] }}
      caption="どちらが優れているかではなく目的の違い。就寝直前の激しい動きは逆効果。"
    />
  )
}

export function ClassicalContemporaryDiagram() {
  return (
    <TwoCol
      title="クラシカル（古典）と コンテンポラリー（現代）"
      left={{ title: 'クラシカル', items: ['ジョセフ・ピラティスの順番・種目を忠実に踏襲', '伝統的なフローを重視', '型を学べる', '流派の一貫性が高い'] }}
      right={{ title: 'コンテンポラリー', items: ['解剖学・運動学を取り入れ改良', '個人の状態に合わせ柔軟に調整', 'リハビリ・初心者にも対応', 'スタジオごとに内容が多様'] }}
      caption="優劣ではなく方針の違い。初心者はどちらでも、指導の丁寧さで選んでOK。"
    />
  )
}

export function OnlineStudioDiagram() {
  return (
    <TwoCol
      title="オンライン と 通学（スタジオ）"
      left={{ title: 'オンライン', items: ['料金が安い・自宅で完結', '好きな時間にできる', 'マシンは使えない', 'フォーム修正が届きにくい'] }}
      right={{ title: '通学（スタジオ）', items: ['対面でフォームを直してもらえる', 'マシン（リフォーマー）が使える', '集中できて継続しやすい', '料金・通う手間はかかる'] }}
      caption="初心者はまず通学で基礎を作り、慣れたらオンライン併用が効率的。"
    />
  )
}

// MDXの表を「枠で囲った」スクロール可能なテーブルに ----------------------
function MdxTable(props: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-warm-200 shadow-sm">
      <table className="w-full border-collapse text-sm article-table" {...props} />
    </div>
  )
}

// MDXに渡すコンポーネントマップ -------------------------------------------
export const articleComponents = {
  SurveyNote,
  RatingDistChart,
  TrialPriceChart,
  FeatureAdoptionChart,
  MonthlyFeeChart,
  PilatesYogaDiagram,
  InnerMuscleDiagram,
  PostureDiagram,
  EffectTimeline,
  MatVsMachineDiagram,
  BreathingDiagram,
  GroupVsPersonalDiagram,
  ActivityGuideNote,
  LegAlignmentDiagram,
  PrinciplesDiagram,
  ClothingDiagram,
  MealBalanceDiagram,
  CautionNote,
  MorningNightDiagram,
  ClassicalContemporaryDiagram,
  OnlineStudioDiagram,
  table: MdxTable,
}
