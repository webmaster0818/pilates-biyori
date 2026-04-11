import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  title: '運営者情報',
  description: 'Pilates-Biyoriの運営者情報。株式会社MediaXが運営するピラティス情報メディアです。',
  alternates: {
    canonical: 'https://biyori-pilates.com/about/',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900">
              運営者情報
            </h1>
            <p className="text-warm-600 text-sm mt-3">
              Pilates-Biyori（ピラティスビヨリ）について
            </p>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">運営者情報</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-warm-900 mb-6">サイトについて</h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              「Pilates-Biyori（ピラティスビヨリ）」は、ピラティスを始めたい方・通っている方のための情報メディアです。全国110エリアのピラティススタジオ情報を網羅し、基礎知識・効果・スタジオ選びまで、ピラティスを楽しむために必要な情報を一元提供しています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-4">
              ピラティスは、体幹強化・姿勢改善・柔軟性向上・リラクゼーションなど、身体と心の両方に働きかけるエクササイズです。しかし、「マットピラティスとマシンピラティスの違いがわからない」「どのスタジオを選べばいいかわからない」と悩む方も多いのが実情です。
            </p>
            <p className="text-warm-600 leading-relaxed mb-10">
              Pilates-Biyoriは、そんな読者の皆様が「自分に最適なピラティス」に出会えるよう、中立性・正確性・わかりやすさを重視したコンテンツ作りを行っています。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mb-6">ミッション</h2>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-10">
              <p className="text-warm-700 leading-relaxed">
                「ピラティスを通じて、一人でも多くの方が心身ともに健やかな毎日を送れるよう、信頼できる情報を届ける。」
              </p>
            </div>

            <h2 className="text-2xl font-bold text-warm-900 mb-6">編集方針</h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="text-warm-400 mr-3 mt-1">●</span>
                <div>
                  <strong className="text-warm-900">ユーザーファースト</strong>
                  <p className="text-warm-600 text-sm mt-1 leading-relaxed">
                    読者の悩みや疑問を解決することを最優先。広告や提携先の都合ではなく、読者の利益を第一に考えた情報を発信します。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-warm-400 mr-3 mt-1">●</span>
                <div>
                  <strong className="text-warm-900">正確で最新の情報</strong>
                  <p className="text-warm-600 text-sm mt-1 leading-relaxed">
                    スタジオの料金・営業時間・アクセス情報は、各スタジオの公式サイトや信頼できるソースを元に定期的に更新しています。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-warm-400 mr-3 mt-1">●</span>
                <div>
                  <strong className="text-warm-900">中立的な評価</strong>
                  <p className="text-warm-600 text-sm mt-1 leading-relaxed">
                    特定のスタジオに偏らず、読者それぞれのニーズに合ったスタジオを推薦します。良い点・改善点の両方を掲載しています。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-warm-400 mr-3 mt-1">●</span>
                <div>
                  <strong className="text-warm-900">わかりやすさの追求</strong>
                  <p className="text-warm-600 text-sm mt-1 leading-relaxed">
                    専門用語は必要最小限に留め、ピラティス初心者の方にもわかりやすい表現を心がけています。
                  </p>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-warm-900 mb-6">運営会社</h2>
            <div className="border border-warm-200 rounded-lg p-6 mb-10">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-warm-100">
                    <th className="text-left py-3 pr-4 font-medium text-warm-900 w-1/3">会社名</th>
                    <td className="py-3 text-warm-600">株式会社MediaX</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <th className="text-left py-3 pr-4 font-medium text-warm-900">所在地</th>
                    <td className="py-3 text-warm-600">〒150-0011 東京都渋谷区東一丁目27番10号</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <th className="text-left py-3 pr-4 font-medium text-warm-900">事業内容</th>
                    <td className="py-3 text-warm-600">Webメディア運営・コンテンツ制作</td>
                  </tr>
                  <tr>
                    <th className="text-left py-3 pr-4 font-medium text-warm-900">サイト運営</th>
                    <td className="py-3 text-warm-600">Pilates-Biyori編集部</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-warm-900 mb-6">関連ページ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <Link
                href="/content-policy/"
                className="block bg-warm-50 border border-warm-200 rounded-lg p-5 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-warm-900 mb-2">記事制作ポリシー</h3>
                <p className="text-warm-600 text-xs">
                  記事制作における編集方針とフローをご紹介しています。
                </p>
              </Link>
              <Link
                href="/privacy-policy/"
                className="block bg-warm-50 border border-warm-200 rounded-lg p-5 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-warm-900 mb-2">プライバシーポリシー</h3>
                <p className="text-warm-600 text-xs">
                  個人情報の取り扱いについて記載しています。
                </p>
              </Link>
              <Link
                href="/terms-of-service/"
                className="block bg-warm-50 border border-warm-200 rounded-lg p-5 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-warm-900 mb-2">利用規約</h3>
                <p className="text-warm-600 text-xs">
                  サイトご利用にあたっての規約を記載しています。
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
