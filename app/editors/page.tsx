import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  title: '編集部紹介',
  description: 'Pilates-Biyori編集部の紹介。ピラティス情報を正確にわかりやすくお届けする編集チームです。',
  alternates: {
    canonical: 'https://biyori-pilates.com/editors/',
  },
}

export default function EditorsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900">
              編集部紹介
            </h1>
            <p className="text-warm-600 text-sm mt-3">
              Pilates-Biyori編集部について
            </p>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">編集部紹介</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-warm-900 mb-6">Pilates-Biyori編集部とは</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              Pilates-Biyori編集部は、ピラティスを始めたい方・通っている方のための情報メディアを運営する編集チームです。ピラティスの基礎知識、効果・メリット、スタジオ選びまで、読者の皆様の「知りたい」に応えるコンテンツを日々制作しています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-10">
              私たちは、「中立性・正確性・わかりやすさ」を重視し、読者の皆様に最適なピラティスライフを提案することを使命としています。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mb-6">編集体制</h2>
            <div className="space-y-6 mb-10">
              <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-3">企画・ディレクション</h3>
                <p className="text-warm-600 leading-relaxed text-sm">
                  読者のニーズを徹底的にリサーチし、どのような情報が求められているかを把握。エリア別、目的別、料金別など、検索意図に応える記事構成を設計しています。
                </p>
              </div>
              <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ライティング</h3>
                <p className="text-warm-600 leading-relaxed text-sm">
                  ピラティス未経験の方にもわかりやすい表現を心がけ、専門用語は必要最小限に留めます。スタジオ情報・料金・レッスン内容・アクセスなど、読者が知りたい情報を網羅的にカバーします。
                </p>
              </div>
              <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-3">リサーチ・ファクトチェック</h3>
                <p className="text-warm-600 leading-relaxed text-sm">
                  掲載するスタジオ情報は、各スタジオの公式サイトを元に確認・検証します。料金・営業時間・アクセスなどは、常に最新の情報であることを心がけています。
                </p>
              </div>
              <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-3">編集・校正</h3>
                <p className="text-warm-600 leading-relaxed text-sm">
                  記事の構成・表現・情報の正確性を多段階でチェック。読者に誤解を与えない明瞭な表現を追求しています。
                </p>
              </div>
              <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-3">アップデート・メンテナンス</h3>
                <p className="text-warm-600 leading-relaxed text-sm">
                  ピラティス業界の動向やスタジオ情報の変更に合わせ、定期的なメンテナンスを実施。スタジオ運営者や読者の皆様からの修正依頼にも誠実に対応しています。
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-warm-900 mb-6">記事レビュープロセス</h2>
            <div className="border border-warm-200 rounded-lg p-6 mb-10">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-warm-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">1</span>
                  <div>
                    <strong className="text-warm-900">企画設計</strong>
                    <p className="text-warm-600 text-sm mt-1">読者ニーズのリサーチと記事構成の設計</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-warm-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">2</span>
                  <div>
                    <strong className="text-warm-900">情報収集</strong>
                    <p className="text-warm-600 text-sm mt-1">公式サイト・信頼できるソースからの一次情報取得</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-warm-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">3</span>
                  <div>
                    <strong className="text-warm-900">ライティング</strong>
                    <p className="text-warm-600 text-sm mt-1">読者ファーストの視点で記事執筆</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-warm-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">4</span>
                  <div>
                    <strong className="text-warm-900">ファクトチェック</strong>
                    <p className="text-warm-600 text-sm mt-1">情報の正確性・最新性を別担当が検証</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-warm-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">5</span>
                  <div>
                    <strong className="text-warm-900">編集・校正</strong>
                    <p className="text-warm-600 text-sm mt-1">表現・構成を最終確認</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-warm-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">6</span>
                  <div>
                    <strong className="text-warm-900">公開・更新</strong>
                    <p className="text-warm-600 text-sm mt-1">公開後も定期的に情報を更新</p>
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-warm-900 mb-6">お問い合わせ</h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              記事に関するご意見・ご要望、掲載情報の訂正依頼などは、スタジオ運営者・読者の皆様から随時受け付けております。誠実に対応いたします。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/about/"
                className="block bg-warm-50 border border-warm-200 rounded-lg p-5 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-warm-900 mb-2">運営者情報</h3>
                <p className="text-warm-600 text-xs">
                  運営会社と編集方針について
                </p>
              </Link>
              <Link
                href="/content-policy/"
                className="block bg-warm-50 border border-warm-200 rounded-lg p-5 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-warm-900 mb-2">記事制作ポリシー</h3>
                <p className="text-warm-600 text-xs">
                  記事制作の編集方針とフロー
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
