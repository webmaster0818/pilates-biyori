import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { areaStudios } from '@/data/area-studios'
import ConsultantSection from '@/components/ConsultantSection'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/hankyu-itami/' },
  title: 'ピラティス阪急伊丹おすすめスタジオ｜料金プランの比較',
  description: '阪急伊丹（兵庫県）のおすすめピラティススタジオを比較しています。阪急伊丹駅周辺の料金相場、マシン・パーソナル・女性専用の特徴、体験レッスン情報をまとめて掲載しています。',
  keywords: 'ピラティス,阪急伊丹,兵庫県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const faqs = [
  {
    question: '阪急伊丹でピラティス、いくらから始められる？',
    answer: '阪急伊丹エリアの一般的な料金相場は、グループレッスンが月4回8,000円〜15,000円程度、パーソナルが1回8,000円〜12,000円程度です。多くのスタジオで体験レッスンが無料〜3,300円程度で受けられるので、まずは体験から始めるのがおすすめです。正確な料金は各スタジオ公式サイトで必ずご確認ください。',
  },
  {
    question: '阪急伊丹の駅近でおすすめのスタジオは？',
    answer: '阪急伊丹エリアでは阪急伊丹駅周辺にスタジオが集まっています。本ページに掲載のスタジオはいずれも駅から徒歩圏内のものを中心に紹介しています。詳しいアクセス情報は各スタジオの公式サイトでご確認ください。',
  },
  {
    question: '阪急伊丹でマシンピラティスができるスタジオは？',
    answer: 'はい、阪急伊丹にもマシンピラティス（リフォーマー）対応のスタジオがあります。本ページの料金比較表で「マシン」マーク付きのスタジオが該当します。マシンピラティスは初心者でも正しいフォームで効率よくトレーニングできるのが魅力です。',
  },
  {
    question: '阪急伊丹に体験レッスン無料スタジオはある？',
    answer: 'スタジオによって体験料金は異なります。無料体験を実施しているスタジオもあれば、1,000〜3,300円程度の有料体験のスタジオもあります。最新のキャンペーン情報は各スタジオ公式サイトで必ずご確認ください。',
  },
  {
    question: '阪急伊丹近隣のエリアは？',
    answer: '阪急伊丹周辺の都道府県内には他にもピラティススタジオがあります。本ページ下部の「関連エリア」セクションから近隣エリアの情報もご覧いただけます。複数エリアを比較して、ご自身に合うスタジオをお探しください。',
  },
]

export default function Page() {
  const area = areaStudios['hankyu-itami']
  if (!area) return null
  const studios = area.studios

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '阪急伊丹', url: 'https://biyori-pilates.com/area/hankyu-itami/' },
      ]} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス阪急伊丹おすすめスタジオ<br className="hidden md:block" />
              人気スタジオの料金プランの比較
            </h1>
            <p className="text-warm-700 text-sm md:text-base leading-relaxed mt-4">
              阪急伊丹線の阪急伊丹は兵庫県伊丹市の中心駅です。駅直結・徒歩1〜3分にリフォーマー専門の低価格スタジオから整体融合、全国チェーン、完全個室まで揃う充実エリアです。主要駅は阪急伊丹駅です。本ページでは阪急伊丹エリアで公式情報をもとに比較できるピラティススタジオをまとめました。
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">阪急伊丹</span>
            </nav>
          </div>
        </section>

        <section className="bg-white pt-6"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="border border-warm-300 bg-warm-50 px-4 py-3 text-sm text-warm-800 leading-relaxed">🔀 このページは<strong>阪急伊丹駅から歩けるスタジオ</strong>に絞った料金一覧です。JR伊丹駅直結のRintosull イオンモール伊丹店の料金・駐車場、伊丹市全体の比較は<Link href="/area/itami/" className="underline decoration-warm-400 hover:text-warm-900 font-medium">伊丹のピラティス比較</Link>（主ページ）をご覧ください。</p></div></section>
        <TableOfContents areaName="阪急伊丹" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、阪急伊丹エリアのピラティススタジオをまとめてご紹介します。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>阪急伊丹でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが受けられるスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>阪急伊丹駅付近で通いやすいスタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="阪急伊丹" />
        <AreaMarketComparison studios={studios} areaName="阪急伊丹" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              阪急伊丹のおすすめピラティススタジオ
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Price Market */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              阪急伊丹のピラティス料金相場【業界一般の目安】
            </h2>
            <div className="bg-warm-50 rounded-lg p-6 md:p-8 border border-warm-200 mb-6">
              <p className="text-warm-600 leading-relaxed mb-6">
                阪急伊丹エリアのピラティス料金は、レッスン形態や設備によって幅があります。以下は業界一般の目安として参考にしてください。<strong>正確な料金は各スタジオの公式サイトで必ずご確認ください。</strong>
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-warm-800 text-white">
                      <th className="px-4 py-3 text-left">種別</th>
                      <th className="px-4 py-3 text-left">料金相場の目安</th>
                      <th className="px-4 py-3 text-left">特徴</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-warm-200">
                      <td className="px-4 py-3 font-medium">グループレッスン（月4回）</td>
                      <td className="px-4 py-3">8,000円〜15,000円</td>
                      <td className="px-4 py-3 text-warm-600">マット中心です。ほかの参加者と一緒に続けたい方に適しています。</td>
                    </tr>
                    <tr className="border-b border-warm-200 bg-warm-50">
                      <td className="px-4 py-3 font-medium">マシンピラティス（月4回）</td>
                      <td className="px-4 py-3">12,000円〜18,000円</td>
                      <td className="px-4 py-3 text-warm-600">リフォーマー等を使用しています。正しいフォームの習得に適しています。</td>
                    </tr>
                    <tr className="border-b border-warm-200">
                      <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                      <td className="px-4 py-3">1回 8,000円〜12,000円</td>
                      <td className="px-4 py-3 text-warm-600">マンツーマンで集中的に指導を受けられます。短期間で成果を目指したい方に適しています。</td>
                    </tr>
                    <tr className="border-b border-warm-200">
                      <td className="px-4 py-3 font-medium">体験レッスン</td>
                      <td className="px-4 py-3">無料〜3,300円</td>
                      <td className="px-4 py-3 text-warm-600">スタジオごとに料金は異なります。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-warm-500 text-xs mt-4">※ 上記は業界一般の目安です。実際の料金・キャンペーンは各スタジオ公式サイトで必ずご確認ください。</p>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              阪急伊丹でピラティススタジオを選ぶポイント
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-lg font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">ダイエット・姿勢改善・体幹強化・肩こり腰痛改善など、目的に応じて最適なスタジオは変わります。阪急伊丹エリアにもマシン専門・女性専用・パーソナル特化など特徴の異なるスタジオがあるので、目的を整理してから選ぶのがおすすめです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-lg font-bold text-warm-900">通いやすさを最優先に</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">阪急伊丹では阪急伊丹駅周辺にスタジオが集中しています。「駅から徒歩何分か」「自宅・職場からのアクセス」「営業時間が自分のライフスタイルに合うか」を必ずご確認ください。継続のしやすさが効果を大きく左右します。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-lg font-bold text-warm-900">体験レッスンで実際に確認</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">公式サイトの情報だけでなく、必ず体験レッスンに行ってスタジオの雰囲気・インストラクターとの相性・設備の清潔感をご確認ください。複数スタジオで体験して比較することをおすすめします。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-lg font-bold text-warm-900">料金プランの内訳を確認</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">月会費だけでなく、入会金・施設利用料・ウェアレンタル代などの追加費用も含めて比較することをおすすめします。阪急伊丹でも入会金無料キャンペーンを実施するスタジオがあるので、タイミングを見計らうのも有効です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                  <h3 className="text-lg font-bold text-warm-900">マシンorマットを選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">初心者はマシンピラティス（リフォーマー）の方が正しいフォームを習得しやすいと言われています。マットは自重トレーニング中心で道具不要なため、自宅でも続けられます。目的に応じてお選びください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Access Guide */}
        <section className="py-16 bg-white" id="access">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              阪急伊丹のアクセス・通勤導線
            </h2>
            <div className="bg-warm-50 rounded-lg p-6 md:p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">主要駅</h3>
                  <p className="text-warm-700">阪急伊丹駅</p>
                  <p className="text-warm-500 text-xs mt-2">本ページのスタジオはこの駅周辺を中心に掲載しています。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">エリアの特徴</h3>
                  <p className="text-warm-700 text-sm leading-relaxed">東京大学を擁する文京区の学術・医療エリアです。阪急伊丹駅（都営大江戸線・東京メトロ丸ノ内線）が最寄りです。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">徒歩・電車でのアクセス</h3>
                  <p className="text-warm-700 text-sm leading-relaxed">阪急伊丹駅周辺は徒歩圏内にスタジオが集まっています。仕事帰りや買い物のついでに通いやすいのが魅力です。詳しいアクセス情報は各スタジオの公式サイトでご確認ください。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">車でのアクセス</h3>
                  <p className="text-warm-700 text-sm leading-relaxed">スタジオによっては駐車場が併設されていない場合もあります。車での来店を予定している方は、事前に駐車場の有無をスタジオに確認しておくと安心です。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              阪急伊丹のピラティスに関するよくある質問
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden bg-white">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は阪急伊丹（兵庫県）のおすすめピラティススタジオをご紹介しました。阪急伊丹エリアにはマシンピラティス専門・パーソナル・女性専用など、特徴の異なる選択肢があります。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              料金や設備はスタジオによって異なります。気になるスタジオがあれば、まずは公式サイトで最新情報を確認し、体験レッスンへの参加をご検討ください。
            </p>
            <p className="text-warm-700 font-medium text-center">本ページが、スタジオ選びの参考になれば幸いです。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              阪急伊丹のスタジオで体験レッスンを実施中です。<br />
              体験レッスンへの参加をおすすめします。
            </p>
            <Link
              href="#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="hankyu-itami" areaName="阪急伊丹" />

      <RelatedAreas currentSlug="hankyu-itami" />
      <SiteFooter />
    </>
  )
}
