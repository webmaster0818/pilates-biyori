import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/yokkaichi/' },
  title: '四日市のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '四日市エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,四日市,三重県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティススタジオDEP 四日市店',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3U4MO2+5IM0+5YJRM',
    image: '/images/studios/pilates-studio-dep.webp',
    rating: 4.8, reviewCount: 28,
    price: 'ライト 月2回 14,800円〜（税込）',
    trial: '初回体験 2,980円（税込・通常9,900円・LINE予約限定）',
    features: ['理学療法士・作業療法士が担当', '50分パーソナル', '駐車場3台', '料金エリアA'],
    description: 'ピラティススタジオDEP（株式会社DEP・公式の店舗一覧に全国57店舗）の四日市店です。理学療法士または作業療法士の国家資格を持つインストラクターが担当する50分のパーソナルマシンピラティスで、初回は90〜120分かけてカウンセリングと身体評価を行います（DEP公式）。月額は料金エリアA（ライト月2回 14,800円〜）です。',
    access: '近鉄名古屋線 中川原駅から約350m・徒歩5分（公式の店舗ページ）',
    address: '三重県四日市市城西町13-28 第二大誠ビル 20A号室',
    popularPlan: {
      name: '月額会員プラン',
      description: '50分のパーソナルレッスンです（初回は90〜120分）。ライト月2回・スタンダード月4回・プレミアム月7回です。',
      price: 'ライト 14,800円／スタンダード 28,800円／プレミアム 47,600円（税込）',
    },
    options: [
      'ライト 月2回 14,800円／スタンダード 月4回 28,800円／プレミアム 月7回 47,600円（税込・エリアA）',
      '都度払い 1回 9,900円（エリアA）',
      '初回レッスン 90〜120分（カウンセリング＋身体評価）',
      'オンラインレッスン 月4回受け放題 3,000円（公式の料金ページ）',
    ],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: {
      hours: '火〜土 9:00〜18:00',
      closed: '月・日、12/29〜1/3',
      facilities: ['ピラティスマシン', '駐車場3台'],
    },
  },
  {
    name: 'Pilates Days', rating: 4.7, reviewCount: 22,
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['JR四日市駅徒歩5分','創始者直系','県下最大規模','本格ピラティス'],
    description: 'JR四日市駅から徒歩5分です。ジョセフ・ピラティス直系の本物のピラティスを提供しています。県下最大規模の広さを誇る',
    access: 'JR「四日市駅」徒歩5分', address: '三重県四日市市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'JR四日市駅から徒歩5分です。ジョセフ・ピラティス直系の本物のピラティスを', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'luluto（ルルト）四日市店', officialUrl: 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808', image: '/images/studios/luluto.webp', rating: 4.8, reviewCount: 15,
    price: '月3回 29,700円〜', trial: '体験レッスンあり', features: ['完全マンツーマン','理学療法士監修','高品質指導','カスタマイズ'],
    description: '完全マンツーマンのマシンピラティスです。理学療法士監修プログラムでプロフェッショナルなトレーナーが指導',
    access: '四日市市内（詳細は公式サイトでご確認ください）',
    address: '三重県四日市市安島2丁目8-10 フォレストヤスジマ1F',
    popularPlan: { name: '人気プラン', description: '完全マンツーマンのマシンピラティスです。理学療法士監修プログラムでプロフェ', price: '月3回 29,700円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'pilates studio coco', rating: 4.5, reviewCount: 20,
    price: '最安クラス（詳細は公式サイト）', trial: '体験レッスンあり', features: ['四日市最安クラス','手ぶらで参加可能','丁寧な指導','初心者歓迎'],
    description: '四日市で最安値クラスのマシンピラティススタジオです。手ぶらで来れる環境で初心者にも丁寧に指導',
    access: '四日市市内（詳細は公式サイトでご確認ください）', address: '三重県四日市市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '四日市で最安値クラスのマシンピラティススタジオです。手ぶらで来れる環境で初', price: '最安クラス（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティススタジオSwan', rating: 4.6, reviewCount: 18,
    price: '1回 約7,000円', trial: '体験レッスンあり', features: ['女性専用','見た目痩せ専門','パーソナル','大人女性向け'],
    description: '大人女性の見た目痩せを専門とするマシンピラティススタジオです。1対1のパーソナルレッスンで女性専用',
    access: '四日市市内（詳細は公式サイトでご確認ください）', address: '三重県四日市市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '大人女性の見た目痩せを専門とするマシンピラティススタジオです。1対1のパー', price: '1回 約7,000円' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。四日市エリアのスタジオはほとんどが初心者歓迎です。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者におすすめです。' },
  { question: '四日市のピラティスの料金相場は？', answer: 'グループ月4回で7,000円〜程度です。パーソナルは1回 7,000円〜15,000円が目安です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '四日市エリアには男性利用可のスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: '各スタジオの最新キャンペーン情報を公式サイトでご確認ください。無料体験を実施しているスタジオもあります。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。' },
]

export default function YokkaichiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '四日市', url: 'https://biyori-pilates.com/area/yokkaichi/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス四日市おすすめ5選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">四日市</span></nav></div></section>
        <TableOfContents areaName="四日市" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-8">本ページでは、四日市エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>四日市でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>近鉄「近鉄四日市駅」/ JR「四日市駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p></div></section>
        <PriceComparisonTable studios={studios} areaName="四日市" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">四日市のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格派</h3>
                <p className="text-warm-600 text-sm mb-4">本格派で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates Days（創始者直系）</li><li className="text-warm-700">• DEP（全員理学・作業療法士）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• pilates studio coco（最安クラス）</li><li className="text-warm-700">• Swan（1回 約7,000円）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Swan（見た目痩せ専門）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">四日市のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">7,000円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 7,000円〜15,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜5,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">四日市は三重県最大の都市で近鉄・JRの2路線が利用可能です。ピラティススタジオDEPは全インストラクターが理学・作業療法士という本格派です。Pilates Daysは創始者直系の本物のピラティスが学べる貴重なスタジオです。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">四日市でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近鉄四日市駅とJR四日市駅は離れている</h3>
                <p className="text-warm-600 leading-relaxed">近鉄四日市駅とJR四日市駅は約1km離れています。利用路線に合ったスタジオをお選びください。Pilates DaysはJR四日市駅から徒歩5分です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車移動が主流のエリア</h3>
                <p className="text-warm-600 leading-relaxed">四日市は車社会です。駐車場の有無や場所を事前に確認しておくと安心です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">本格的なピラティスが学べる街</h3>
                <p className="text-warm-600 leading-relaxed">創始者直系のPilates Daysや理学療法士が全員在籍するDEPなど、本格的なスタジオが揃っているのが四日市の特徴です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">名古屋方面も検討</h3>
                <p className="text-warm-600 leading-relaxed">近鉄特急で名古屋まで約35分です。名古屋市内のスタジオも通勤経路に合わせてご検討ください。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のスタジオが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>四日市エリアの豆知識：</strong>四日市は三重県北部の工業都市ですが、近年はおしゃれなカフェやショップも増加中です。Pilates Daysは県下最大規模の広さで設備も充実しています。車通いの方が多いので駐車場情報は必ずご確認ください。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">四日市の料金相場はグループ月4回で7,000円〜です。入会金やキャンペーンもご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">複数のスタジオで体験レッスンを受けて比較することをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間をご確認ください。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、四日市エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、四日市にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜5,000円です。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="yokkaichi" areaName="四日市" />

      <RelatedAreas currentSlug="yokkaichi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
