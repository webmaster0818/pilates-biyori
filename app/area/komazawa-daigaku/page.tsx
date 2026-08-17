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
  alternates: { canonical: 'https://biyori-pilates.com/area/komazawa-daigaku/' },
  title: '【2026年8月最新】ピラティス駒沢大学おすすめ6選！料金・体験レッスン・マシン対応を比較！',
  description: '駒沢大学エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,駒沢大学,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 駒沢',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン','駒沢大学駅徒歩4分','男性OK','全国店舗利用可'],
    description: '全国150店舗以上展開。駒沢大学駅駒沢公園口から徒歩4分。マットグループ月4回9,625円〜。マット・マシン両方対応。',
    access: '東急田園都市線「駒沢大学駅」駒沢公園口 徒歩4分',
    address: '東京都世田谷区駒沢（駒沢大学駅徒歩4分）',
    popularPlan: { name: '人気プラン', description: 'zen place pilates 駒沢の人気プラン。', price: 'マットグループ月4回 9,625円〜' },
    options: ['マット&マシン','駒沢大学駅徒歩4分','男性OK','全国店舗利用可'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'Pilates Mee 駒沢大学店',
    image: '/images/studios/pilates-mee.webp',
    price: '月2回 11,000円〜',
    trial: '体験レッスン 無料キャンペーン中',
    features: ['最大3名セミパーソナル','当日予約OK','当日キャンセルOK','駒沢大学駅近'],
    description: '最大3名のセミパーソナル形式。当日予約・当日キャンセルOK。月2回11,000円〜。体験無料キャンペーン中。',
    access: '東急田園都市線「駒沢大学駅」徒歩圏内',
    address: '東京都世田谷区駒沢（駒沢大学駅徒歩圏内）',
    popularPlan: { name: '人気プラン', description: 'Pilates Mee 駒沢大学店の人気プラン。', price: '月2回 11,000円〜' },
    options: ['最大3名セミパーソナル','当日予約OK','当日キャンセルOK','駒沢大学駅近'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'PILATES STUDIO noa 駒沢',
    image: '/images/studios/pilates-noa.webp',
    price: '月2回 6,600円〜',
    trial: '体験レッスンあり',
    features: ['女性専用','マシンピラティス専門','駒沢大学駅徒歩3分','月2回6,600円〜'],
    description: '女性専用マシンピラティス専門。駒沢大学駅西口徒歩3分。3つのプログラムカテゴリから選択可能。月2回6,600円〜。',
    access: '東急田園都市線「駒沢大学駅」西口 徒歩3分',
    address: '東京都世田谷区駒沢（駒沢大学駅徒歩3分）',
    popularPlan: { name: '人気プラン', description: 'PILATES STUDIO noa 駒沢の人気プラン。', price: '月2回 6,600円〜' },
    options: ['女性専用','マシンピラティス専門','駒沢大学駅徒歩3分','月2回6,600円〜'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ELEMENT 駒沢大学（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月4回 22,000円',
    trial: '体験レッスン 3,300円',
    features: ['マンツーマン30分','月4回 22,000円','体験3,300円','駒沢大学近隣'],
    description: 'マシンピラティス専門パーソナルジム。30分マンツーマンレッスン。月4回22,000円。',
    access: '駒沢大学駅から近隣エリア',
    address: '東京都世田谷区（駒沢大学近隣）',
    popularPlan: { name: '人気プラン', description: 'ELEMENT 駒沢大学（近隣）の人気プラン。', price: '月4回 22,000円' },
    options: ['マンツーマン30分','月4回 22,000円','体験3,300円','駒沢大学近隣'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'CLUB PILATES 駒沢大学（近隣）',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 10,890円〜',
    trial: '体験レッスンあり',
    features: ['最大12名グループ','リフォーマー使用','月4回 10,890円〜','駒沢大学近隣'],
    description: 'アメリカ発マシンピラティス専門。最大12名グループレッスン。月4回10,890円〜。',
    access: '駒沢大学駅から近隣エリア',
    address: '東京都世田谷区（駒沢大学近隣）',
    popularPlan: { name: '人気プラン', description: 'CLUB PILATES 駒沢大学（近隣）の人気プラン。', price: '月4回 10,890円〜' },
    options: ['最大12名グループ','リフォーマー使用','月4回 10,890円〜','駒沢大学近隣'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'Pilates Mee駒沢大学店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。駒沢大学駅から徒歩1分。',
    access: '駒沢大学駅から徒歩1分',
    address: '東京都世田谷区駒沢1丁目4-14 4階',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも駒沢大学のスタジオに通えますか？', answer: 'はい、駒沢大学エリアのスタジオは初心者歓迎がほとんどです。zen place pilatesは初心者向けクラスが充実しており、体験レッスンも1,000円〜で気軽に始められます。' },
  { question: '駒沢大学のピラティス料金相場はどのくらいですか？', answer: '駒沢大学エリアのグループレッスン料金相場は月4回で9,625円〜11,220円程度。パーソナルはELEMENTが月4回22,000円。体験レッスンは無料〜3,300円が一般的です。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者向け。zen place pilatesは両方対応しています。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回（月4〜8回）がおすすめ。慣れたら週2〜3回に。継続が大切なので無理のないペースで。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝を上げることでダイエット効果が期待できます。最低2〜3ヶ月の継続がおすすめです。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。滑り止め付き靴下があると便利です。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化が中心、ヨガは柔軟性とリラックスが中心。目的に合わせて選びましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilatesやELEMENTは男性も利用可能です。女性専用のスタジオもあるので事前に確認しましょう。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '短期で結果を出したい方にはパーソナル。コスパ重視で楽しく続けたい方にはグループがおすすめ。まずは体験で両方試してみましょう。' },
  { question: '駒沢大学から通いやすい近隣エリアは？', answer: '駒沢大学は東急田園都市線沿線で近隣エリアのスタジオにもアクセスしやすいです。沿線で複数のスタジオを比較検討するのがおすすめです。' }
]

export default function KomazawadaigakuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '駒沢大学', url: 'https://pilates-biyori.com/area/komazawa-daigaku/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年08月18日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス駒沢大学おすすめ6選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">駒沢大学</span></nav></div></section>
        <TableOfContents areaName="駒沢大学" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「駒沢大学で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
          <p className="text-warm-600 leading-relaxed mb-8">東急田園都市線「駒沢大学駅」周辺でおすすめのピラティススタジオ6選をまとめました。駒沢大学は駒沢オリンピック公園の最寄り駅で、ランニングやスポーツを楽しむ健康志向の高いエリアです。駅周辺のスタジオから公園近くのスタジオまで幅広くご紹介します。</p>
          <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駒沢大学でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金やレッスン内容を比較したい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li></ul></div>
          <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
        </div></section>
        <PriceComparisonTable studios={studios} areaName="駒沢大学" />
        <AreaMarketComparison studios={studios} areaName="駒沢大学" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">駒沢大学のおすすめピラティススタジオ6選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後で通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで効果を最大化。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ELEMENT（30分パーソナル・月4回 22,000円）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者向け</h3><p className="text-warm-600 text-sm mb-4">体験レッスンから気軽にスタート。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（体験1,000円）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">駒沢大学のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">9,625円〜11,220円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td><td className="px-4 py-3">22,000円〜</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,300円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">駒沢大学駅は駒沢オリンピック公園の最寄り駅で、健康志向の高い方が多いエリアです。zen place pilatesは駒沢公園口から徒歩4分。Pilates MeeやPILATES STUDIO noaなど個性的なスタジオも揃っています。公園でのランニングとピラティスを組み合わせる方も多いです。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">駒沢大学でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">駒沢公園口と国道246号側の出口で距離が変わる</h3><p className="text-warm-600 leading-relaxed">スタジオによって最寄りの出口が異なります。zen place pilatesは駒沢公園口から徒歩4分、PILATES STUDIO noaは西口から徒歩3分です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">休日は公園周辺が混雑</h3><p className="text-warm-600 leading-relaxed">駒沢オリンピック公園周辺は休日にランナーや家族連れで賑わいます。時間に余裕を持って出発しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣の三軒茶屋・桜新町も検討</h3><p className="text-warm-600 leading-relaxed">三軒茶屋、桜新町、学芸大学エリアも田園都市線で近く、比較検討するのがおすすめです。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のことが多い。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>駒沢大学エリアの豆知識：</strong>駒沢大学駅は駒沢オリンピック公園の最寄り駅。公園ランナーがピラティスと組み合わせて通うケースが増えています。レッスン前後に公園で軽いウォーキングをするとより効果的です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的を明確にし、最適なスタジオを選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回9,625円〜、パーソナル月4回22,000円〜。無理なく続けられる予算で。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">気になるスタジオを2〜3つ体験してみましょう。無料〜3,300円で体験可能です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">東急田園都市線「駒沢大学駅」からのアクセスや、通勤経路との相性を確認しましょう。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は駒沢大学のおすすめピラティススタジオ6選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン。まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="komazawa-daigaku" areaName="駒沢大学" />

      <RelatedAreas currentSlug="komazawa-daigaku" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
