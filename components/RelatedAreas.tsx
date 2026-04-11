import Link from 'next/link'
import { prefectureAreas } from '@/data/prefectureAreas'

interface RelatedAreasProps {
  currentSlug: string
}

export function RelatedAreas({ currentSlug }: RelatedAreasProps) {
  // 現在のエリアが属する都道府県を見つける
  const currentPref = prefectureAreas.find((pref) =>
    pref.areas.some((area) => area.slug === currentSlug)
  )

  if (!currentPref) return null

  // 現在のエリア以外の関連エリア
  const relatedAreas = currentPref.areas.filter((area) => area.slug !== currentSlug)

  if (relatedAreas.length === 0) return null

  return (
    <section className="py-16 bg-warm-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
          {currentPref.prefecture}の他のエリア
        </h2>
        <p className="text-center text-warm-600 text-sm mb-8">
          同じ{currentPref.prefecture}内の他のピラティススタジオ情報もチェック
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {relatedAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/area/${area.slug}/`}
              className="block bg-white border border-warm-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-warm-400 transition"
            >
              <span className="text-sm font-medium text-warm-800">{area.name}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/area/"
            className="inline-block text-sm text-warm-700 hover:text-warm-900 underline font-light"
          >
            すべての地域を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
