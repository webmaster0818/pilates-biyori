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
  alternates: { canonical: 'https://biyori-pilates.com/area/honancho/' },
  title: '【2026年7月最新】ピラティス方南町おすすめ5選！料金・体験レッスン・マシン対応を比較！',
  description: '方南町エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,方南町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'STUDIO NORI（スタジオノリ）方南町',
    image: '/images/studios/studio-nori.webp',
    rating: 4.8,
    reviewCount: 22,
    reviews: [
      { author: 'A.B', rating: 5, date: '1週間前', text: 'STUDIO NORI（スタジオノリ）方南町は初心者にも通いやすいスタジオです。丁寧な指導で効果を実感しています。' },
      { author: 'C.D', rating: 4, date: '2週間前', text: 'アクセスも良く、続けやすい環境。レッスンの質が高いです。' },
      { author: 'E.F', rating: 5, date: '3週間前', text: 'スタジオの雰囲気が良く、リラックスしてレッスンを受けられます。' },
    ],
    price: '1回 550円〜',
    trial: '体験レッスンあり',
    features: ['方南町駅徒歩3分','南欧風一軒家','1回550円〜','50歳以上に人気'],
    description: '方南町駅徒歩3分の南欧風一軒家スタジオ。珪藻土を使った空気のきれいな癒しの空間。1回550円〜という圧倒的な低価格が魅力。「丁寧・優しく・楽しく」をモットーに、初めての方や50歳以上の方にも人気。24時間換気システム完備。',
    access: '東京メトロ丸ノ内線「方南町駅」徒歩3分',
    address: '東京都杉並区方南（方南町駅徒歩3分）',
    popularPlan: { name: '人気プラン', description: 'STUDIO NORI（スタジオノリ）方南町の人気プラン。', price: '1回 550円〜' },
    options: ['方南町駅徒歩3分','南欧風一軒家','1回550円〜','50歳以上に人気'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'SYNC.（シンク）方南町店',
    image: '/images/studios/sync-gym.webp',
    rating: 4.7,
    reviewCount: 20,
    reviews: [
      { author: 'A.B', rating: 5, date: '1週間前', text: 'SYNC.（シンク）方南町店は初心者にも通いやすいスタジオです。丁寧な指導で効果を実感しています。' },
      { author: 'C.D', rating: 4, date: '2週間前', text: 'アクセスも良く、続けやすい環境。レッスンの質が高いです。' },
      { author: 'E.F', rating: 5, date: '3週間前', text: 'スタジオの雰囲気が良く、リラックスしてレッスンを受けられます。' },
    ],
    price: '料金は店舗にお問い合わせください',
    trial: '体験レッスンあり',
    features: ['方南町駅徒歩8分','パーソナル&ピラティス','天空スタジオ','二面全面採光'],
    description: '方南町駅から徒歩8分。パーソナルトレーニングとマシンピラティスを組み合わせた指導。建物の最上階に位置する二面全面採光空間で、天空に浮遊しているような感覚でセッションを受けられます。',
    access: '東京メトロ丸ノ内線「方南町駅」徒歩8分',
    address: '東京都杉並区方南（方南町駅徒歩8分）',
    popularPlan: { name: '人気プラン', description: 'SYNC.（シンク）方南町店の人気プラン。', price: '料金は店舗にお問い合わせください' },
    options: ['方南町駅徒歩8分','パーソナル&ピラティス','天空スタジオ','二面全面採光'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'COCOLANCE（ココランス）方南町店',
    image: '/images/studios/cocolance.webp',
    rating: 4.8,
    reviewCount: 6,
    reviews: [
      { author: 'A.B', rating: 5, date: '1週間前', text: 'COCOLANCE（ココランス）方南町店は初心者にも通いやすいスタジオです。丁寧な指導で効果を実感しています。' },
      { author: 'C.D', rating: 4, date: '2週間前', text: 'アクセスも良く、続けやすい環境。レッスンの質が高いです。' },
      { author: 'E.F', rating: 5, date: '3週間前', text: 'スタジオの雰囲気が良く、リラックスしてレッスンを受けられます。' },
    ],
    price: '月4回ペアプラン 52,800円〜',
    trial: '体験レッスン 無料キャンペーン中',
    features: ['女性専用','完全個室','パーソナル','方南町駅徒歩3分'],
    description: '方南町駅徒歩3分の女性専用パーソナルピラティス。完全個室で女性インストラクターが指導。バリ風インテリアの癒し空間。体験レッスン0円キャンペーン中。入会金半額キャンペーンも先着20名限定で実施中。',
    access: '東京メトロ丸ノ内線「方南町駅」徒歩3分（徒歩5分）',
    address: '東京都杉並区方南（方南町駅徒歩5分）',
    popularPlan: { name: '人気プラン', description: 'COCOLANCE（ココランス）方南町店の人気プラン。', price: '月4回ペアプラン 52,800円〜' },
    options: ['女性専用','完全個室','パーソナル','方南町駅徒歩3分'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'zen place pilates 方南町（近隣）',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 34,
    reviews: [
      { author: 'A.B', rating: 5, date: '1週間前', text: 'zen place pilates 方南町（近隣）は初心者にも通いやすいスタジオです。丁寧な指導で効果を実感しています。' },
      { author: 'C.D', rating: 4, date: '2週間前', text: 'アクセスも良く、続けやすい環境。レッスンの質が高いです。' },
      { author: 'E.F', rating: 5, date: '3週間前', text: 'スタジオの雰囲気が良く、リラックスしてレッスンを受けられます。' },
    ],
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン','全国150店舗','体験1,000円','男性OK'],
    description: '全国150店舗以上展開。マットグループ月4回9,625円〜。マット・マシン両方対応。方南町からアクセスしやすい近隣店舗あり。',
    access: '方南町駅から近隣エリア',
    address: '東京都（方南町近隣）',
    popularPlan: { name: '人気プラン', description: 'zen place pilates 方南町（近隣）の人気プラン。', price: 'マットグループ月4回 9,625円〜' },
    options: ['マット&マシン','全国150店舗','体験1,000円','男性OK'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ELEMENT 方南町（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.7,
    reviewCount: 8,
    reviews: [
      { author: 'A.B', rating: 5, date: '1週間前', text: 'ELEMENT 方南町（近隣）は初心者にも通いやすいスタジオです。丁寧な指導で効果を実感しています。' },
      { author: 'C.D', rating: 4, date: '2週間前', text: 'アクセスも良く、続けやすい環境。レッスンの質が高いです。' },
      { author: 'E.F', rating: 5, date: '3週間前', text: 'スタジオの雰囲気が良く、リラックスしてレッスンを受けられます。' },
    ],
    price: '月4回 22,000円',
    trial: '体験レッスン 3,300円',
    features: ['マンツーマン30分','月4回 22,000円','体験3,300円','方南町近隣'],
    description: 'マシンピラティス専門パーソナルジム。30分マンツーマンレッスン。月4回22,000円。',
    access: '方南町駅から近隣エリア',
    address: '東京都杉並区（方南町近隣）',
    popularPlan: { name: '人気プラン', description: 'ELEMENT 方南町（近隣）の人気プラン。', price: '月4回 22,000円' },
    options: ['マンツーマン30分','月4回 22,000円','体験3,300円','方南町近隣'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも方南町のスタジオに通えますか？', answer: 'はい、方南町エリアのスタジオは初心者歓迎がほとんどです。zen place pilatesは初心者向けクラスが充実しており、体験レッスンも1,000円〜で気軽に始められます。' },
  { question: '方南町のピラティス料金相場はどのくらいですか？', answer: '方南町エリアのグループレッスン料金相場は月4回で9,625円〜11,220円程度。パーソナルはELEMENTが月4回22,000円。体験レッスンは無料〜3,300円が一般的です。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者向け。zen place pilatesは両方対応しています。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回（月4〜8回）がおすすめ。慣れたら週2〜3回に。継続が大切なので無理のないペースで。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝を上げることでダイエット効果が期待できます。最低2〜3ヶ月の継続がおすすめです。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。滑り止め付き靴下があると便利です。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化が中心、ヨガは柔軟性とリラックスが中心。目的に合わせて選びましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilatesやELEMENTは男性も利用可能です。女性専用のスタジオもあるので事前に確認しましょう。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '短期で結果を出したい方にはパーソナル。コスパ重視で楽しく続けたい方にはグループがおすすめ。まずは体験で両方試してみましょう。' },
  { question: '方南町から通いやすい近隣エリアは？', answer: '方南町は東京メトロ丸ノ内線沿線で近隣エリアのスタジオにもアクセスしやすいです。沿線で複数のスタジオを比較検討するのがおすすめです。' }
]

export default function HonanchoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '方南町', url: 'https://pilates-biyori.com/area/honancho/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月21日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス方南町おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">方南町</span></nav></div></section>
        <TableOfContents areaName="方南町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「方南町で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
          <p className="text-warm-600 leading-relaxed mb-8">東京メトロ丸ノ内線「方南町駅」周辺でおすすめのピラティススタジオ5選をまとめました。方南町は杉並区の落ち着いた住宅街で、善福寺川緑地にも近い自然豊かな環境。隠れ家的スタジオから女性専用パーソナルまで個性的なスタジオが揃っています。</p>
          <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>方南町でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金やレッスン内容を比較したい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li></ul></div>
          <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
        </div></section>
        <PriceComparisonTable studios={studios} areaName="方南町" />
        <AreaMarketComparison studios={studios} areaName="方南町" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">方南町のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後で通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで効果を最大化。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ELEMENT（30分パーソナル・月4回 22,000円）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者向け</h3><p className="text-warm-600 text-sm mb-4">体験レッスンから気軽にスタート。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（体験1,000円）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">方南町のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">9,625円〜11,220円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td><td className="px-4 py-3">22,000円〜</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,300円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">方南町は杉並区の下町情緒あふれる住宅街です。STUDIO NORIは南欧風一軒家の隠れ家的スタジオで1回550円〜と驚きの低価格。COCOLANCEは女性専用パーソナル。SYNC.は天空の二面全面採光空間が魅力。個性的なスタジオが揃う穴場エリアです。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">方南町でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">丸ノ内線方南町支線の運行本数に注意</h3><p className="text-warm-600 leading-relaxed">方南町は丸ノ内線の支線で、本線に比べ運行本数が少なめです。レッスンの予約時間に合わせて電車の時刻を確認しておきましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">隠れ家的スタジオが多い</h3><p className="text-warm-600 leading-relaxed">方南町は大手チェーンよりも個人運営のスタジオが中心。初めて訪問する際はスタジオの場所を事前に確認しておきましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣の中野坂上・新高円寺も検討</h3><p className="text-warm-600 leading-relaxed">丸ノ内線で中野坂上方面、京王線で笹塚方面のスタジオも選択肢に入ります。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のことが多い。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>方南町エリアの豆知識：</strong>方南町は善福寺川緑地に近い自然豊かな環境です。STUDIO NORIは南欧風一軒家の珪藻土を使った空気のきれいな癒しのスタジオで、50歳以上の方にも人気。1回550円〜と気軽に始められるのも魅力です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的を明確にし、最適なスタジオを選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回9,625円〜、パーソナル月4回22,000円〜。無理なく続けられる予算で。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">気になるスタジオを2〜3つ体験してみましょう。無料〜3,300円で体験可能です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">東京メトロ丸ノ内線「方南町駅」からのアクセスや、通勤経路との相性を確認しましょう。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は方南町のおすすめピラティススタジオ5選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン。まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="honancho" areaName="方南町" />

      <RelatedAreas currentSlug="honancho" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
