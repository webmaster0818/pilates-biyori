'use client'

// AIスタジオ相談の埋め込みセクション（TOP・エリア・記事ページ用）。
// 本体(StudioConsultant=掲載データ込みで大きい)は「診断を始める」タップ時に
// 初めて読み込む遅延ロード方式のため、設置ページの表示速度に影響しない。
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const StudioConsultant = dynamic(() => import('./StudioConsultant'), {
  loading: () => (
    <div className="py-10 text-center text-sm text-warm-500">診断ツールを読み込んでいます…</div>
  ),
})

type Props = {
  /** エリアページで渡すとそのエリアを自動セットし「目的」の質問から開始する */
  areaKey?: string
  areaName?: string
  /** 記事本文などコンテナ内に置く場合true（外側のsection/余白を付けない） */
  bare?: boolean
}

export default function ConsultantSection({ areaKey, areaName, bare }: Props) {
  const [open, setOpen] = useState(false)

  const panel = (
        <div className="rounded-2xl border border-warm-200 bg-warm-50/60 p-6 md:p-8">
          <p className="text-warm-500 text-xs font-medium uppercase tracking-[0.2em]">
            AI Studio Consultant
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-warm-900 mt-2">
            {areaName
              ? `${areaName}のスタジオ選び、AIに相談してみませんか？`
              : 'あなたに合うスタジオ、AIに相談してみませんか？'}
          </h2>
          <p className="text-warm-600 text-sm mt-3 leading-relaxed">
            {areaName
              ? `いくつかの質問に答えるだけで、${areaName}エリアの掲載情報から、あなたに合いそうなピラティススタジオを無料でご提案します。`
              : 'エリア・目的・レッスンタイプ・料金・無料体験の希望から、あなたに合いそうなピラティススタジオを無料でご提案します。'}
          </p>

          {open ? (
            <div className="mt-6">
              <StudioConsultant initialAreaKey={areaKey} />
            </div>
          ) : (
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-warm-800 px-7 py-3 text-sm font-medium text-white transition hover:bg-warm-900"
              >
                {areaName ? `${areaName}で無料診断を始める →` : '無料診断を始める →'}
              </button>
              <Link
                href="/ai-soudan/"
                className="text-sm text-warm-500 underline hover:text-warm-800"
              >
                AIスタジオ相談について
              </Link>
            </div>
          )}

          <p className="mt-4 text-[11px] leading-relaxed text-warm-400">
            当サイト掲載の公開情報をもとにした無料の診断ツールです。提案結果の「公式サイトで詳細」ボタンは広告（アフィリエイトリンク）を含みます。
          </p>
        </div>
  )

  if (bare) {
    return (
      <div className="my-12" id="ai-soudan">
        {panel}
      </div>
    )
  }

  return (
    <section className="py-12 bg-white" id="ai-soudan">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">{panel}</div>
    </section>
  )
}
