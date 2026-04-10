import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  title: '記事制作ポリシー | Pilates-Biyori',
  description: 'Pilates-Biyoriの記事制作ポリシーページです。',
}

export default function ContentPolicyPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900">
              記事制作ポリシー
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">記事制作ポリシー</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              「Pilates-Biyori」は、ピラティスを始めたい方・通っている方のための情報メディアとして、信頼できる正確な情報をお届けすることを使命としています。読者の皆様が安心してピラティススタジオを選び、健やかなライフスタイルを実現できるよう、以下のポリシーに基づいて記事を制作しています。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-12 mb-4">1. ユーザーファーストであり続けます</h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              ピラティスを始めたい方の目的は様々です。「姿勢を改善したい」「ダイエットしたい」「体幹を鍛えたい」「リラックスしたい」「マシンピラティスを試したい」など、それぞれのニーズに合わせて最適なスタジオやプログラムを選ぶ必要があります。また、料金体系、レッスン形式（グループ／パーソナル）、マシンの有無、インストラクターの質、立地条件など、検討すべきポイントも多岐にわたります。Pilates-Biyoriは、こうした多様なニーズに対して、それぞれの読者に最適なピラティススタジオ選びをサポートできるよう、常にユーザーファーストを貫きます。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-12 mb-4">2. 正確且つ最新な情報発信に努めます</h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              ピラティススタジオの料金プラン、レッスン内容、営業時間、所在地などの情報は、常に変動する可能性があります。Pilates-Biyoriでは、編集スタッフによる定期的な情報更新と、スタジオ運営者からの情報提供を受けて、常に最新かつ正確な情報をお届けできるよう努めています。すべてのコンテンツについて、信頼性の維持に最大限の努力を払います。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-12 mb-4">3. 操作のない口コミ情報を発信いたします</h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              実際にピラティススタジオに通った方の声は、これからスタジオを選ぶ方にとって非常に貴重な情報源です。Pilates-Biyoriでは、口コミの出典を明らかにし、特定のスタジオに有利・不利な情報操作を行うことなく、中立性を保った情報発信を心がけています。良い評価も改善が必要な評価も、ありのままを掲載することで、読者の皆様の正しい判断材料となるよう努めています。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-12 mb-4">4. 分かりやすさを追求し続けます</h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              ピラティススタジオへの入会は、月会費が発生する継続的な投資となります。ピラティス初心者の方にとっては、専門用語やレッスン形式の違いなど、わかりにくい点も多くあります。Pilates-Biyoriは、包括的な情報提供を心がけながらも、初めての方でも理解しやすい表現と構成を追求し、健やかな身体づくりへの第一歩を踏み出せるようサポートいたします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-12 mb-6">記事制作のフロー</h2>

            <div className="space-y-6">
              <div className="bg-warm-50 border-l-4 border-warm-400 p-6">
                <h3 className="text-xl font-bold text-warm-900 mb-3">1. 記事の企画設計</h3>
                <p className="text-warm-600 leading-relaxed">
                  まずは、ピラティスを始めたい方・通っている方のニーズを徹底的にリサーチし、どのような情報が求められているかを把握します。エリア別、目的別、料金別など、読者の検索意図に応える記事構成を設計します。
                </p>
              </div>

              <div className="bg-warm-50 border-l-4 border-warm-400 p-6">
                <h3 className="text-xl font-bold text-warm-900 mb-3">2. 記事のライティング</h3>
                <p className="text-warm-600 leading-relaxed">
                  ピラティス未経験の方にもわかりやすい表現を心がけ、専門用語は必要最小限に留めながら、読みやすさを維持したコンテンツを作成します。スタジオ情報、料金、レッスン内容、アクセスなど、読者が知りたい情報を網羅的にカバーします。
                </p>
              </div>

              <div className="bg-warm-50 border-l-4 border-warm-400 p-6">
                <h3 className="text-xl font-bold text-warm-900 mb-3">3. 記事の公開</h3>
                <p className="text-warm-600 leading-relaxed">
                  完成した記事を公開し、読者の皆様からのフィードバックを継続的に収集します。アクセス解析やお問い合わせ内容を踏まえ、より読者のニーズに応えられる記事へと改善していきます。
                </p>
              </div>

              <div className="bg-warm-50 border-l-4 border-warm-400 p-6">
                <h3 className="text-xl font-bold text-warm-900 mb-3">4. 記事の更新</h3>
                <p className="text-warm-600 leading-relaxed">
                  ピラティス業界の動向やスタジオ情報の変更に合わせ、定期的なメンテナンスを行います。スタジオ運営者や読者の皆様からの修正依頼にも誠実に対応し、お問い合わせフォームから随時フィードバックを受け付けています。
                </p>
              </div>
            </div>

            <p className="text-warm-600 leading-relaxed mt-10">
              Pilates-Biyoriは、これからも信頼できるピラティス情報メディアとして、読者の皆様の健やかなライフスタイル実現をサポートしてまいります。
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
