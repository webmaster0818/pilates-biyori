import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/privacy-policy/' },
  title: 'プライバシーポリシー',
  description: 'Pilates-Biyoriのプライバシーポリシーページです。',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900">
              プライバシーポリシー
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">プライバシーポリシー</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-warm">
            <p className="text-warm-600 leading-relaxed mb-6">
              株式会社MediaX（以下、「当社」といいます。）は、当社が運営する「Pilates-Biyori」（以下、「本サイト」といいます。）におけるユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">1. 個人情報の定義</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ポリシーにおいて、「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレス、その他の記述等により特定の個人を識別できる情報を指します。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">2. 個人情報の取得方法</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、ユーザーが利用登録をする際、または本サイトを利用する際に、氏名、住所、電話番号、メールアドレス、入力フォーム、その他当社が定める方法を通じて、ユーザーが入力または送信する情報を取得することがあります。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">3. 個人情報の利用目的</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、ユーザーの個人情報について、以下の利用目的の範囲内で利用するものとし、本人の同意がある場合または法令で認められている場合を除き、他の目的で利用することはありません。
            </p>
            <ul className="list-disc list-inside text-warm-600 leading-relaxed mb-6 space-y-2">
              <li>掲載事業者への個人情報の提供</li>
              <li>本サービスに関するお問い合わせへの対応・情報提供</li>
              <li>メール配信サービスの確認・配信</li>
              <li>請求・支払いの確認</li>
              <li>謝礼・景品の送付</li>
              <li>本サービスの利用状況の調査・分析</li>
              <li>本サービスの改良・改善および新サービスの開発</li>
              <li>禁止行為の調査</li>
              <li>不正行為の防止</li>
              <li>統計・分析データの作成</li>
              <li>広告の配信および表示</li>
              <li>商品情報の配信および表示</li>
              <li>トラブルの解決</li>
              <li>その他、本サービスの提供</li>
            </ul>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、法令に基づく場合を除き、本人の同意なく第三者（業務委託先を除きます。）に個人情報を提供することはありません。外国にある第三者へ個人情報を提供する場合は、法令上認められている場合を除き、事前に当該第三者に関する情報を提供した上で、ユーザーの同意を取得します。なお、ユーザーが掲載事業者に対して予約申込やお問い合わせをした場合、ユーザーの個人情報が当該掲載事業者に提供されることがあります。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">5. 個人情報の管理</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、個人情報の漏えい、滅失、毀損の防止その他の安全管理のために、適切な措置を講じます。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">6. 個人情報の開示・訂正・利用停止</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              ユーザー本人から、個人情報の開示、訂正、利用停止の請求があった場合は、本人確認の上、速やかに対応いたします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">7. Cookie等の利用について</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、Cookieやアクセス解析ツール等を使用し、本サイトの利用状況の分析やサービス改善を行うことがあります。本サイトでは、Microsoft Clarityを利用し、サイト内でのユーザーの挙動を匿名で記録しております。収集されるデータは匿名であり、個人を特定する情報は含まれません。ユーザーは、ブラウザの設定またはMicrosoft公式サイトからオプトアウトすることが可能です。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">8. 免責事項について</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、本サイトからリンクが設定された他のサイトに記載された情報やサービスについて、一切の責任を負いません。本サイト内の情報の正確性・安全性等を保証するものではなく、掲載内容によって生じた損害について、当社は責任を負いかねます。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">9. プライバシーポリシーの変更</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、必要に応じて本ポリシーを変更することがあります。変更後の本ポリシーは、本サイト上に掲載した時点で効力を生じるものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">10. お問い合わせ窓口</h2>
            <div className="text-warm-600 leading-relaxed mb-6">
              <p>【会社名】株式会社MediaX</p>
              <p>【住所】〒150-0011 東京都渋谷区東一丁目27番10号</p>
              <p>【お問い合わせ】お問い合わせフォームよりご連絡ください</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
