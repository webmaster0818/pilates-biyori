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
  alternates: { canonical: 'https://biyori-pilates.com/area/kyodo/' },
  title: '【2026年10月最新】ピラティス経堂おすすめ7選料金・体験レッスン・マシン対応を比較',
  description: '経堂エリアのおすすめピラティススタジオ7選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,経堂,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 経堂',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン','経堂駅北口徒歩3分','初心者歓迎','男性利用可'],
    description: '全国150店舗以上展開の大手です。経堂駅北口から徒歩3分です。マットグループ月4回9,625円〜です。マット・マシン両方対応です。男性利用可能です。',
    access: '小田急線「経堂駅」北口 徒歩3分',
    address: '東京都世田谷区宮坂3丁目13-1 経堂オリオン 2階',
    popularPlan: { name: '人気プラン', description: 'zen place pilates 経堂の人気プランです。', price: 'マットグループ月4回 9,625円〜' },
    options: ['マット&マシン','経堂駅北口徒歩3分','初心者歓迎','男性利用可'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'NATURAglam 経堂スタジオ',
    image: '/images/studios/naturaglam.webp',
    price: '1回 1,071円〜',
    trial: '体験レッスン 1,000円',
    features: ['女性専用','ヨガ&ピラティス','体験1,000円','7店舗共通利用'],
    description: '女性専用のヨガ＆ピラティススタジオです。1回あたり1,071円〜の圧倒的費用対効果です。三軒茶屋・下北沢・中目黒・祐天寺・高円寺・戸越銀座・経堂の7店舗を追加料金なしで利用可能です。',
    access: '小田急線「経堂駅」徒歩圏内',
    address: '東京都世田谷区経堂（経堂駅徒歩圏内）',
    popularPlan: { name: '人気プラン', description: 'NATURAglam 経堂スタジオの人気プランです。', price: '1回 1,071円〜' },
    options: ['女性専用','ヨガ&ピラティス','体験1,000円','7店舗共通利用'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'URBAN CLASSIC PILATES 経堂（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '月4回 9,680円',
    trial: '体験レッスンあり',
    features: ['予約不要','30分レッスン','月4回 9,680円','経堂近隣'],
    description: '予約不要で通えるマシンピラティス＆ファンクショナルトレーニングです。30分サーキット形式です。月4回9,680円です。',
    access: '経堂駅から近隣エリア',
    address: '東京都世田谷区（経堂近隣）',
    popularPlan: { name: '人気プラン', description: 'URBAN CLASSIC PILATES 経堂（近隣）の人気プランです。', price: '月4回 9,680円' },
    options: ['予約不要','30分レッスン','月4回 9,680円','経堂近隣'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ELEMENT 経堂（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月4回 22,000円',
    trial: '体験レッスン 3,300円',
    features: ['マンツーマン30分','月4回 22,000円','体験3,300円','経堂近隣'],
    description: 'マシンピラティス専門パーソナルジムです。30分マンツーマンレッスンです。月4回22,000円です。',
    access: '経堂駅から近隣エリア',
    address: '東京都世田谷区（経堂近隣）',
    popularPlan: { name: '人気プラン', description: 'ELEMENT 経堂（近隣）の人気プランです。', price: '月4回 22,000円' },
    options: ['マンツーマン30分','月4回 22,000円','体験3,300円','経堂近隣'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ピラティスK 経堂（近隣）',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 11,220円〜',
    trial: '体験レッスンあり',
    features: ['女性専用','マシンピラティス','月4回 11,220円〜','経堂近隣'],
    description: '女性専用マシンピラティスです。リフォーマーを使ったグループレッスンで月4回11,220円〜です。',
    access: '経堂駅から近隣エリア',
    address: '東京都世田谷区（経堂近隣）',
    popularPlan: { name: '人気プラン', description: 'ピラティスK 経堂（近隣）の人気プランです。', price: '月4回 11,220円〜' },
    options: ['女性専用','マシンピラティス','月4回 11,220円〜','経堂近隣'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'CLUB PILATES 経堂（近隣）',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62359',
    image: '/images/studios/club-pilates.webp',
    price: '料金は店舗により異なる（公式の店舗ページで確認）',
    trial: '体験レッスンあり',
    features: ['最大12名グループ', 'リフォーマー使用', '料金は店舗ごと', '経堂近隣'],
    description: 'アメリカ発マシンピラティス専門です。最大12名グループレッスンです。料金は店舗により異なります。レベル別クラスで初心者安心です。',
    access: '経堂駅から近隣エリア',
    address: '東京都世田谷区（経堂近隣）',
    popularPlan: { name: '人気プラン', description: 'CLUB PILATES 経堂（近隣）の人気プランです。', price: '店舗により異なる（公式の店舗ページで確認）' },
    options: ['料金は店舗により異なる（公式の店舗ページで確認）', '参考：公式店舗ページの月4回 10,890〜17,050円／通い放題 17,490〜40,590円（2026年10月14日・86店舗）', '入会金 5,500円（税込）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'Pilates Mee経堂店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。経堂駅から徒歩3分です。',
    access: '経堂駅 徒歩3分',
    address: '〒156-0052 東京都世田谷区経堂1丁目16−11 PAL経堂Ⅱ 303',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },

  },
]

const faqs = [
  { question: 'ピラティス初心者でも経堂のスタジオに通えますか？', answer: 'はい、経堂エリアのスタジオは初心者歓迎がほとんどです。zen place pilatesは初心者向けクラスが充実しており、体験レッスンも1,000円〜で気軽に始められます。' },
  { question: '経堂のピラティス料金相場はどのくらいですか？', answer: '経堂エリアのグループレッスン料金相場は月4回で9,625円〜11,220円程度です。パーソナルはELEMENTが月4回22,000円です。体験レッスンは無料〜3,300円が一般的です。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者向けです。zen place pilatesは両方対応しています。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回が目安です。継続が大切なので無理のないペースで通うことをおすすめします。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝を上げることでダイエット効果が期待できます。最低2〜3ヶ月の継続がおすすめです。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。滑り止め付き靴下があると便利です。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化が中心、ヨガは柔軟性とリラックスが中心です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilatesやELEMENTは男性も利用可能です。女性専用のスタジオもあるので事前にご確認ください。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '短期で結果を出したい方にはパーソナルです。料金重視で楽しく続けたい方にはグループがおすすめです。まずは体験レッスンで両方を試すことをおすすめします。' },
  { question: '経堂から通いやすい近隣エリアは？', answer: '経堂は小田急小田原線沿線のため、近隣エリアのスタジオにもアクセスしやすい立地です。沿線で複数のスタジオを比較検討するのがおすすめです。' }
]

export default function KyodoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '経堂', url: 'https://biyori-pilates.com/area/kyodo/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス経堂おすすめ7選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">経堂</span></nav></div></section>
        <TableOfContents areaName="経堂" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-warm-600 leading-relaxed mb-8">小田急線「経堂駅」周辺でおすすめのピラティススタジオ7選をまとめました。経堂は新宿まで小田急線で約15分という好アクセスながら、商店街が賑わう暮らしやすい住宅街です。駅近のスタジオから大手チェーンまで幅広くご紹介します。</p>
          <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>経堂でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金やレッスン内容を比較したい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li></ul></div>
          <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
        </div></section>
        <PriceComparisonTable studios={studios} areaName="経堂" />
        <AreaMarketComparison studios={studios} areaName="経堂" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">経堂のおすすめピラティススタジオ7選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後で通えるスタジオです。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマン指導で効率よく取り組めます。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ELEMENT（30分パーソナル・月4回 22,000円）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者向け</h3><p className="text-warm-600 text-sm mb-4">体験レッスンから気軽にスタートです。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（体験1,000円）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">経堂のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">9,625円〜11,220円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td><td className="px-4 py-3">22,000円〜</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,300円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">経堂は小田急線沿線の暮らしやすい住宅街で、商店街が充実した生活利便性の高いエリアです。平日昼間は主婦層、夕方以降は仕事帰りの方が多く通っています。近隣の千歳船橋エリアと比較検討される方も少なくありません。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">経堂でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">経堂駅の北口・南口でアクセスが変わる</h3><p className="text-warm-600 leading-relaxed">経堂駅は北口と南口で周辺の雰囲気が異なります。スタジオの場所によって最寄りの出口をご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">商店街のピークタイムに注意</h3><p className="text-warm-600 leading-relaxed">経堂駅北口の農大通り商店街は夕方にかけて混雑します。スタジオへの通い道を事前に確認しておくとスムーズです。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較する</h3><p className="text-warm-600 leading-relaxed">千歳船橋や祖師ヶ谷大蔵エリアも小田急線沿線で近く、選択肢を広げて比較するのがおすすめです。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のことが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>経堂エリアの豆知識：</strong>経堂は小田急線沿線の住宅街で、地元在住の方が徒歩や自転車で通うケースが多いエリアです。経堂駅北口の商店街にはカフェや飲食店が充実しており、レッスン後のリフレッシュも楽しめます。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的を明確にし、最適なスタジオをお選びください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回9,625円〜、パーソナル月4回22,000円〜です。無理なく続けられる予算でお選びください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">気になるスタジオを2〜3つ体験してみることをおすすめします。無料〜3,300円で体験可能です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">小田急線「経堂駅」からのアクセスや、通勤経路との相性をご確認ください。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は経堂のおすすめピラティススタジオ7選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスンです。まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kyodo" areaName="経堂" />

      <RelatedAreas currentSlug="kyodo" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
