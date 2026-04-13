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

export function PriceComparisonTable({ studios, areaName }: Props) {
  return (
    <section className="py-10 bg-white" id="price-comparison">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-2 text-center">
          {areaName}ピラティススタジオ 料金比較表
        </h2>
        <p className="text-warm-500 text-sm text-center mb-6">
          {studios.length}スタジオの月額料金・体験情報を一覧で比較
        </p>
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-warm-800 text-white">
                <th className="px-4 py-3 text-left font-bold whitespace-nowrap">スタジオ名</th>
                <th className="px-4 py-3 text-left font-bold whitespace-nowrap">月額料金</th>
                <th className="px-4 py-3 text-center font-bold whitespace-nowrap">評価</th>
                <th className="px-4 py-3 text-center font-bold whitespace-nowrap">体験</th>
                <th className="px-4 py-3 text-center font-bold whitespace-nowrap">女性専用</th>
                <th className="px-4 py-3 text-center font-bold whitespace-nowrap">マシン</th>
                <th className="px-4 py-3 text-center font-bold whitespace-nowrap">パーソナル</th>
              </tr>
            </thead>
            <tbody>
              {studios.map((studio, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-warm-50'}>
                  <td className="px-4 py-3 font-medium text-warm-900 whitespace-nowrap">
                    <a href={`#studio-${i + 1}`} className="hover:text-warm-600 transition underline decoration-dotted underline-offset-2">
                      {i + 1}. {studio.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-warm-700 font-medium whitespace-nowrap">{studio.price}</td>
                  <td className="px-4 py-3 text-center">
                    {studio.rating ? (
                      <>
                        <span className="text-yellow-500">★</span>
                        <span className="text-warm-700 font-medium">{studio.rating}</span>
                        {studio.reviewCount ? <span className="text-warm-400 text-xs">({studio.reviewCount})</span> : null}
                      </>
                    ) : <span className="text-warm-300">-</span>}
                  </td>
                  <td className="px-4 py-3 text-center text-warm-700 text-xs">{studio.trial}</td>
                  <td className="px-4 py-3 text-center">{extractWomenOnly(studio.features) ? <span className="text-pink-500 font-bold">○</span> : <span className="text-warm-300">-</span>}</td>
                  <td className="px-4 py-3 text-center">{extractMachine(studio.features) ? <span className="text-blue-500 font-bold">○</span> : <span className="text-warm-300">-</span>}</td>
                  <td className="px-4 py-3 text-center">{extractPersonal(studio.features) ? <span className="text-green-500 font-bold">○</span> : <span className="text-warm-300">-</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-warm-400 text-xs mt-3 text-right">※ 料金は税込表示。最新の料金は各スタジオ公式サイトでご確認ください。</p>
      </div>
    </section>
  )
}
