import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import StudioConsultant from '@/components/StudioConsultant'

export const metadata = {
  title: 'AIスタジオ相談｜あなたに合うピラティススタジオを診断',
  description:
    'いくつかの質問に答えるだけで、エリア・目的・レッスンタイプ・料金・無料体験の希望から、あなたに合いそうなピラティススタジオをご提案します。掲載の公開情報をもとにした無料の診断ツールです。',
  alternates: {
    canonical: 'https://biyori-pilates.com/ai-soudan/',
  },
}

export default function AiSoudanPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-500 text-xs font-medium uppercase tracking-[0.2em]">
              AI Studio Consultant
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mt-2">
              AIスタジオ相談
            </h1>
            <p className="text-warm-600 text-sm md:text-base mt-3 leading-relaxed">
              「どこのスタジオが自分に合うか分からない」——そんなときは、いくつかの質問に答えるだけ。
              エリア・目的・レッスンタイプ・料金・無料体験の希望から、あなたに合いそうな
              ピラティススタジオをその場でご提案します。
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <StudioConsultant />
          </div>
        </section>

        <section className="pb-14">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <div className="rounded-xl border border-warm-100 bg-warm-50/60 p-5 text-xs leading-relaxed text-warm-500">
              <p className="font-medium text-warm-700 mb-1">この診断について</p>
              当サイトに掲載している実在スタジオの公開情報（エリア・料金目安・体験情報・特徴）をもとに、
              ご回答に近いスタジオを機械的にご提案する無料ツールです。掲載内容は変更される場合があるため、
              最新・正確な料金や体験条件は必ず各公式サイトでご確認ください。提案結果に含まれる
              「公式サイトで詳細」ボタンは広告（アフィリエイトリンク）を含みます。
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
