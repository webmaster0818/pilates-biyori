'use client'

type Studio = {
  name: string
  price: string
  trial: string
  features: string[]
  rating?: number
  reviewCount?: number
  [key: string]: unknown
}

type Props = {
  studios: Studio[]
  areaName: string
}

function extractWomenOnly(features: string[]): boolean {
  return features.some(f => /女性専用|女性限定/.test(f))
}

function extractMachine(features: string[]): boolean {
  return features.some(f => /マシン|リフォーマー/.test(f))
}

function extractPersonal(features: string[]): boolean {
  return features.some(f => /パーソナル|プライベート|マンツーマン|個室/.test(f))
}

function Badge({ active, label }: { active: boolean; label: string }) {
  if (!active) return null
  return (
    <span className="inline-block bg-warm-100 text-warm-700 text-[10px] px-1.5 py-0.5 rounded font-medium">
      {label}
    </span>
  )
}

export function PriceComparisonTable({ studios, areaName }: Props) {
  return (
    <section className="py-8 bg-white" id="price-comparison">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-warm-900 mb-1 text-center">
          {areaName}ピラティススタジオ 料金比較表
        </h2>
        <p className="text-warm-500 text-xs text-center mb-4">
          {studios.length}スタジオの月額料金・体験情報を一覧で比較
        </p>

        {/* Mobile: compact card list */}
        <div className="md:hidden space-y-1.5">
          {studios.map((studio, i) => {
            const isWomen = extractWomenOnly(studio.features)
            const isMachine = extractMachine(studio.features)
            const isPersonal = extractPersonal(studio.features)
            return (
              <a
                key={i}
                href={`#studio-${i + 1}`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-warm-100 hover:border-warm-300 transition bg-white"
              >
                <span className="text-warm-400 text-xs font-bold w-5 shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-warm-900 text-sm truncate">{studio.name}</span>
                    {studio.rating ? (
                      <span className="text-xs text-warm-500 shrink-0">
                        <span className="text-yellow-500">★</span>{studio.rating}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                    <span className="text-warm-700 text-xs font-medium">{studio.price}</span>
                    <span className="text-warm-400 text-[10px]">|</span>
                    <span className="text-warm-500 text-[10px]">{studio.trial}</span>
                  </div>
                  {(isWomen || isMachine || isPersonal) && (
                    <div className="flex gap-1 mt-1">
                      <Badge active={isWomen} label="女性専用" />
                      <Badge active={isMachine} label="マシン" />
                      <Badge active={isPersonal} label="パーソナル" />
                    </div>
                  )}
                </div>
                <svg className="w-4 h-4 text-warm-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )
          })}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-warm-800 text-white">
                <th className="px-3 py-2.5 text-left font-bold whitespace-nowrap">スタジオ名</th>
                <th className="px-3 py-2.5 text-left font-bold whitespace-nowrap">月額料金</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">評価</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">体験</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">女性専用</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">マシン</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">パーソナル</th>
              </tr>
            </thead>
            <tbody>
              {studios.map((studio, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-warm-50'}>
                  <td className="px-3 py-2 font-medium text-warm-900 whitespace-nowrap">
                    <a href={`#studio-${i + 1}`} className="hover:text-warm-600 transition underline decoration-dotted underline-offset-2">
                      {i + 1}. {studio.name}
                    </a>
                  </td>
                  <td className="px-3 py-2 text-warm-700 font-medium whitespace-nowrap">{studio.price}</td>
                  <td className="px-3 py-2 text-center">
                    {studio.rating ? (
                      <>
                        <span className="text-yellow-500">★</span>
                        <span className="text-warm-700 font-medium">{studio.rating}</span>
                        {studio.reviewCount ? <span className="text-warm-400 text-xs">({studio.reviewCount})</span> : null}
                      </>
                    ) : <span className="text-warm-300">-</span>}
                  </td>
                  <td className="px-3 py-2 text-center text-warm-700 text-xs">{studio.trial}</td>
                  <td className="px-3 py-2 text-center">{extractWomenOnly(studio.features) ? <span className="text-pink-500 font-bold">○</span> : <span className="text-warm-300">-</span>}</td>
                  <td className="px-3 py-2 text-center">{extractMachine(studio.features) ? <span className="text-blue-500 font-bold">○</span> : <span className="text-warm-300">-</span>}</td>
                  <td className="px-3 py-2 text-center">{extractPersonal(studio.features) ? <span className="text-green-500 font-bold">○</span> : <span className="text-warm-300">-</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-warm-400 text-xs mt-2 text-right">※ 料金は税込表示。最新の料金は各スタジオ公式サイトでご確認ください。</p>
      </div>
    </section>
  )
}
