import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { areaStudios } from '@/data/area-studios'
import ConsultantSection from '@/components/ConsultantSection'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/honkawagoe/' },
  title: '【2026年8月最新】ピラティス本川越おすすめスタジオ｜料金プランを徹底比較！',
  description: '本川越（埼玉県）のおすすめピラティススタジオを比較。西武新宿線本川越駅周辺の料金相場、マシン・パーソナル・女性専用の特徴、体験レッスン情報をまとめて掲載。',
  keywords: 'ピラティス,本川越,埼玉県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const faqs = [
  {
    question: '本川越でピラティス、いくらから始められる？',
    answer: '本川越エリアの一般的な料金相場は、グループレッスンが月4回8,000円〜15,000円程度、パーソナルが1回8,000円〜12,000円程度です。多くのスタジオで体験レッスンが無料〜3,300円程度で受けられるので、まずは体験から始めるのがおすすめ。正確な料金は各スタジオ公式サイトで必ずご確認ください。',
  },
  {
    question: '本川越の駅近でおすすめのスタジオは？',
    answer: '本川越エリアでは西武新宿線本川越駅周辺にスタジオが集まっています。本記事に掲載のスタジオはいずれも駅から徒歩圏内のものを中心に紹介しています。詳しいアクセス情報は各スタジオの公式サイトでご確認ください。',
  },
  {
    question: '本川越でマシンピラティスができるスタジオは？',
    answer: 'はい、本川越にもマシンピラティス（リフォーマー）対応のスタジオがあります。本記事の料金比較表で「マシン」マーク付きのスタジオが該当します。マシンピラティスは初心者でも正しいフォームで効率よくトレーニングできるのが魅力です。',
  },
  {
    question: '本川越に体験レッスン無料スタジオはある？',
    answer: 'スタジオによって体験料金は異なります。無料体験を実施しているスタジオもあれば、1,000〜3,300円程度の有料体験のスタジオもあります。最新のキャンペーン情報は各スタジオ公式サイトで必ずご確認ください。',
  },
  {
    question: '本川越近隣のエリアは？',
    answer: '本川越周辺の都道府県内には他にもピラティススタジオがあります。本ページ下部の「関連エリア」セクションから近隣エリアの情報もご覧いただけます。複数エリアを比較して、自分に合うスタジオを見つけてみてください。',
  },
]

export default function Page() {
  const area = areaStudios['honkawagoe']
  if (!area) return null
  const studios = area.studios

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '本川越', url: 'https://pilates-biyori.com/area/honkawagoe/' },
      ]} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月19日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス本川越おすすめスタジオ<br className="hidden md:block" />
              人気スタジオの料金プランを徹底比較！
            </h1>
            <p className="text-warm-700 text-sm md:text-base leading-relaxed mt-4">
              小江戸川越の中心駅、観光と居住が共存する歴史エリア。主要駅は西武新宿線本川越駅。本ページでは本川越エリアで公式情報をもとに比較できるピラティススタジオをまとめました。
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
              <span className="text-warm-600">本川越</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="本川越" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「本川越でピラティスを始めたい」「本川越で人気のスタジオを知りたい」とお考えの方に向けて、本川越エリアでチェックしておきたいピラティススタジオをまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>本川越でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが受けられるスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>西武新宿線本川越駅付近で通いやすいスタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="本川越" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              本川越のおすすめピラティススタジオ
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
              本川越のピラティス料金相場【業界一般の目安】
            </h2>
            <div className="bg-warm-50 rounded-lg p-6 md:p-8 border border-warm-200 mb-6">
              <p className="text-warm-600 leading-relaxed mb-6">
                本川越エリアのピラティス料金は、レッスン形態や設備によって幅があります。以下は業界一般の目安として参考にしてください。<strong>正確な料金は各スタジオの公式サイトで必ずご確認ください。</strong>
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
                      <td className="px-4 py-3 text-warm-600">マット中心。仲間と楽しく続けたい方に。</td>
                    </tr>
                    <tr className="border-b border-warm-200 bg-warm-50">
                      <td className="px-4 py-3 font-medium">マシンピラティス（月4回）</td>
                      <td className="px-4 py-3">12,000円〜18,000円</td>
                      <td className="px-4 py-3 text-warm-600">リフォーマー等を使用。正しいフォーム習得に。</td>
                    </tr>
                    <tr className="border-b border-warm-200">
                      <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                      <td className="px-4 py-3">1回 8,000円〜12,000円</td>
                      <td className="px-4 py-3 text-warm-600">マンツーマンで集中指導。短期で結果を出したい方に。</td>
                    </tr>
                    <tr className="border-b border-warm-200">
                      <td className="px-4 py-3 font-medium">体験レッスン</td>
                      <td className="px-4 py-3">無料〜3,300円</td>
                      <td className="px-4 py-3 text-warm-600">スタジオごとに料金は異なる。</td>
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
              本川越でピラティススタジオを選ぶポイント
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-lg font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">ダイエット・姿勢改善・体幹強化・肩こり腰痛改善など、目的に応じて最適なスタジオは変わります。本川越エリアにもマシン専門・女性専用・パーソナル特化など特徴の異なるスタジオがあるので、目的を整理してから選ぶのがおすすめです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-lg font-bold text-warm-900">通いやすさを最優先に</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">本川越では西武新宿線本川越駅周辺にスタジオが集中しています。「駅から徒歩何分か」「自宅・職場からのアクセス」「営業時間が自分のライフスタイルに合うか」を必ず確認しましょう。継続のしやすさが効果を大きく左右します。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-lg font-bold text-warm-900">体験レッスンで実際に確認</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">公式サイトの情報だけでなく、必ず体験レッスンに行ってスタジオの雰囲気・インストラクターとの相性・設備の清潔感を確認しましょう。複数スタジオで体験して比較するのが失敗しないコツです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-lg font-bold text-warm-900">料金プランの内訳を確認</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">月会費だけでなく、入会金・施設利用料・ウェアレンタル代などの追加費用も含めて比較しましょう。本川越でも入会金無料キャンペーンを実施するスタジオがあるので、タイミングを見計らうのも有効です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                  <h3 className="text-lg font-bold text-warm-900">マシンorマットを選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">初心者はマシンピラティス（リフォーマー）の方が正しいフォームを習得しやすいと言われています。マットは自重トレーニング中心で道具不要なため、自宅でも続けられます。目的に応じて選びましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Access Guide */}
        <section className="py-16 bg-white" id="access">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              本川越のアクセス・通勤導線
            </h2>
            <div className="bg-warm-50 rounded-lg p-6 md:p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">主要駅</h3>
                  <p className="text-warm-700">西武新宿線本川越駅</p>
                  <p className="text-warm-500 text-xs mt-2">本ページのスタジオはこの駅周辺を中心に掲載しています。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">エリアの特徴</h3>
                  <p className="text-warm-700 text-sm leading-relaxed">小江戸川越の中心駅、観光と居住が共存する歴史エリア。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">徒歩・電車でのアクセス</h3>
                  <p className="text-warm-700 text-sm leading-relaxed">西武新宿線本川越駅周辺は徒歩圏内にスタジオが集まっています。仕事帰りや買い物のついでに通いやすいのが魅力です。詳しいアクセス情報は各スタジオの公式サイトでご確認ください。</p>
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
              本川越のピラティスに関するよくある質問
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
              今回は本川越（埼玉県）のおすすめピラティススタジオをご紹介しました。本川越エリアにはマシンピラティス専門・パーソナル・女性専用など、特徴の異なる選択肢があります。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              料金や設備はスタジオによって異なります。気になるスタジオがあれば、まずは公式サイトで最新情報をチェックし、体験レッスンに足を運んでみてください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりの本川越のピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              本川越のスタジオで体験レッスンを実施中。<br />
              気軽に体験してみましょう。
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
      <ConsultantSection areaKey="honkawagoe" areaName="本川越" />

      <RelatedAreas currentSlug="honkawagoe" />
      <SiteFooter />
    </>
  )
}
