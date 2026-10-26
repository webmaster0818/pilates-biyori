import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/sakura-shinmachi/' },
  title: '桜新町のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '桜新町エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,桜新町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスミラー 桜新町',
    image: '/images/studios/pilates-mirror.webp',
    price: 'プライベート30分 4,400円〜',
    trial: '体験レッスンあり',
    features: ['女性専用','天井ミラー','30分レッスン','少人数6名制'],
    description: 'コナミ運営の女性専用マシンピラティスです。天井の鏡で動きを確認できるのが特長です。30分短時間集中レッスンです。少人数6名制です。低料金で気軽に始められます。',
    access: '東急田園都市線「桜新町駅」徒歩圏内',
    address: '東京都世田谷区桜新町（桜新町駅徒歩圏内）',
    popularPlan: { name: '人気プラン', description: 'ピラティスミラー 桜新町の人気プランです。', price: 'プライベート30分 4,400円〜' },
    options: ['女性専用','天井ミラー','30分レッスン','少人数6名制'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['マシン完備', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'] },
  },
  {
    name: 'ピラティス スタジオ・クラール',
    image: '/images/studios/klar-pilates.webp',
    price: '料金は店舗にお問い合わせください',
    trial: '体験レッスンあり',
    features: ['本格プライベート','落ち着いた空間','桜新町エリア','オーダーメイド'],
    description: '本来の自分を感じ、ご自身の身体に集中しやすい落ち着いた空間づくりにこだわったプライベートピラティススタジオです。一人ひとりに合わせたオーダーメイドレッスンです。',
    access: '東急田園都市線「桜新町駅」徒歩圏内',
    address: '東京都世田谷区桜新町エリア',
    popularPlan: { name: '人気プラン', description: 'ピラティス スタジオ・クラールの人気プランです。', price: '料金は店舗にお問い合わせください' },
    options: ['本格プライベート','落ち着いた空間','桜新町エリア','オーダーメイド'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'パーソナルマシンピラティスYUZU 桜新町（近隣）',
    image: '/images/studios/yuzu-pilates.webp',
    price: '1回 7,200円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門','有資格者多数','キッズスペース完備','レンタルウェア完備'],
    description: '完全個室のパーソナルマシンピラティスです。有資格者によるマンツーマンレッスンです。キッズスペースを完備しており、子育て中の方にも配慮された環境です。1回7,200円〜です。',
    access: '桜新町駅から近隣エリア',
    address: '東京都世田谷区（桜新町近隣）',
    popularPlan: { name: '人気プラン', description: 'パーソナルマシンピラティスYUZU 桜新町（近隣）の人気プランです。', price: '1回 7,200円〜' },
    options: ['パーソナル専門','有資格者多数','キッズスペース完備','レンタルウェア完備'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ELEMENT 桜新町（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月4回 22,000円',
    trial: '体験レッスン 3,300円',
    features: ['マンツーマン30分','月4回 22,000円','体験3,300円','桜新町近隣'],
    description: 'マシンピラティス専門パーソナルジムです。30分マンツーマンレッスンです。月4回22,000円です。',
    access: '桜新町駅から近隣エリア',
    address: '東京都世田谷区（桜新町近隣）',
    popularPlan: { name: '人気プラン', description: 'ELEMENT 桜新町（近隣）の人気プランです。', price: '月4回 22,000円' },
    options: ['マンツーマン30分','月4回 22,000円','体験3,300円','桜新町近隣'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ピラティスK 桜新町（近隣）',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 11,220円〜',
    trial: '体験レッスンあり',
    features: ['女性専用','マシンピラティス','月4回 11,220円〜','桜新町近隣'],
    description: '女性専用マシンピラティスです。リフォーマーを使ったグループレッスンです。月4回11,220円〜です。',
    access: '桜新町駅から近隣エリア',
    address: '東京都世田谷区（桜新町近隣）',
    popularPlan: { name: '人気プラン', description: 'ピラティスK 桜新町（近隣）の人気プランです。', price: '月4回 11,220円〜' },
    options: ['女性専用','マシンピラティス','月4回 11,220円〜','桜新町近隣'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも桜新町のスタジオに通えますか？', answer: 'はい、桜新町エリアのスタジオは初心者歓迎がほとんどです。' },
  { question: '桜新町のピラティス料金相場はどのくらいですか？', answer: '桜新町エリアのグループレッスン料金相場は月4回でピラティスKの11,220円〜です。パーソナルはELEMENTが月4回22,000円です。体験レッスンは無料〜3,300円が一般的です。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者向けです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回が目安です。継続が大切なので無理のないペースで通うことをおすすめします。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝を上げることでダイエット効果が期待できます。最低2〜3ヶ月の継続がおすすめです。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。滑り止め付き靴下があると便利です。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化が中心、ヨガは柔軟性とリラックスが中心です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'ELEMENTは男性も利用可能です。女性専用のスタジオもあるので事前にご確認ください。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '短期で結果を出したい方にはパーソナルです。料金重視で楽しく続けたい方にはグループがおすすめです。まずは体験レッスンで両方を試すことをおすすめします。' },
  { question: '桜新町から通いやすい近隣エリアは？', answer: '桜新町は東急田園都市線沿線のため、近隣エリアのスタジオにもアクセスしやすい立地です。沿線で複数のスタジオを比較検討するのがおすすめです。' }
]

export default function SakurashinmachiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '桜新町', url: 'https://biyori-pilates.com/area/sakura-shinmachi/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス桜新町おすすめ5選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">桜新町</span></nav></div></section>
        <TableOfContents areaName="桜新町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-warm-600 leading-relaxed mb-8">東急田園都市線「桜新町駅」周辺でおすすめのピラティススタジオ5選をまとめました。桜新町はサザエさん通りで知られる親しみやすい住宅街です。駅近にピラティスミラーやクラールなど個性的なスタジオが揃い、用賀エリアのスタジオも利用しやすい環境です。</p>
          <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>桜新町でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金やレッスン内容を比較したい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li></ul></div>
          <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
        </div></section>
        <PriceComparisonTable studios={studios} areaName="桜新町" />
        <AreaMarketComparison studios={studios} areaName="桜新町" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">桜新町のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマン指導で効率よく取り組めます。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ELEMENT（30分パーソナル・月4回 22,000円）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">桜新町のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">11,220円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td><td className="px-4 py-3">22,000円〜</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,300円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">桜新町はサザエさん通りで有名な親しみやすい住宅街です。田園都市線で渋谷まで約10分のアクセスの良さに加え、落ち着いた環境でピラティスに集中できます。用賀エリアのスタジオとの比較検討もおすすめです。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">桜新町でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">田園都市線沿線で比較検討</h3><p className="text-warm-600 leading-relaxed">桜新町は用賀・駒沢大学・三軒茶屋に挟まれた好立地です。田園都市線沿線で複数スタジオを比較するのがおすすめです。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">駅からの距離を確認</h3><p className="text-warm-600 leading-relaxed">スタジオによって駅からの距離が異なります。初回は余裕を持って出発することをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも検討</h3><p className="text-warm-600 leading-relaxed">用賀、駒沢大学、三軒茶屋エリアも田園都市線沿線で近く、選択肢が広がります。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のことが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>桜新町エリアの豆知識：</strong>桜新町はサザエさん通りで知られる親しみやすい住宅街です。駅周辺にはカフェやパン屋さんも多く、レッスン後のリフレッシュも楽しめます。地元の方が自転車で通うケースが多いエリアです。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的を明確にし、最適なスタジオをお選びください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回11,220円〜、パーソナル月4回22,000円〜です。無理なく続けられる予算でお選びください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">気になるスタジオを2〜3つ体験してみることをおすすめします。無料〜3,300円で体験可能です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">東急田園都市線「桜新町駅」からのアクセスや、通勤経路との相性をご確認ください。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は桜新町のおすすめピラティススタジオ5選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスンです。まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="sakura-shinmachi" areaName="桜新町" />

      <RelatedAreas currentSlug="sakura-shinmachi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
