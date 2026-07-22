import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/amagasaki/' },
  title: '【2026年7月最新】ピラティス尼崎おすすめ5選！料金・体験レッスン・マシン対応を比較！',
  description: '尼崎エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。JR「尼崎駅」/ 阪神「尼崎駅」/ 阪急「塚口駅」周辺の初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,尼崎,兵庫県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull（リントスル）阪神尼崎店', image: '/images/studios/rintosull.webp', rating: 4.5, reviewCount: 88,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'ホットヨガLAVAの姉妹ブランド。体験レッスンではAI姿勢分析アプリを使った姿勢診断が受けられる。月4回8,8。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスンあり（AI姿勢診断付き）', features: ['低価格','AI姿勢分析','LAVA相互利用','マシン専門'],
    description: 'ホットヨガLAVAの姉妹ブランド。体験レッスンではAI姿勢分析アプリを使った姿勢診断が受けられる。月4回8,800円〜と低価格',
    access: '阪神「尼崎駅」徒歩圏内', address: '兵庫県尼崎市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'ホットヨガLAVAの姉妹ブランド。体験レッスンではAI姿勢分析アプリを', price: '月4回 8,800円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'zen place pilates 尼崎', image: '/images/studios/zen-place-pilates.webp', rating: 4.7, reviewCount: 25,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'ピラティス専門の大手スタジオ。全国150店舗以上で他店利用可能。マットグループ・マシングループ・プライベートの。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 10,450円〜', trial: 'グループ体験 1,000円', features: ['大手の安心感','全国相互利用','男性OK','マット＆マシン'],
    description: 'ピラティス専門の大手スタジオ。全国150店舗以上で相互利用可能。マットグループ・マシングループ・プライベートの3タイプ',
    access: '尼崎市内（詳細は公式サイトでご確認ください）', address: '兵庫県尼崎市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'ピラティス専門の大手スタジオ。全国150店舗以上で相互利用可能。マット', price: '月4回 10,450円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'URBAN CLASSIC PILATES 尼崎店', image: '/images/studios/urban-classic-pilates.webp', rating: 4.5, reviewCount: 45,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式。一人ずつ違う動きを行うため運動久し。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['サーキット形式','予約不要','個別ペース','ファンクショナルトレーニング'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式。一人ずつ違う動きを行うため運動久しぶりの方も安心',
    access: '尼崎市内（詳細は公式サイトでご確認ください）', address: '兵庫県尼崎市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティスアヴニール 尼崎武庫之荘店', image: '/images/studios/zen-place-pilates.webp', rating: 4.6, reviewCount: 30,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'キッズスペース付き完全個室を完備。医療国家資格を持つ実績豊富なトレーナーが個々に合ったトレーニングを提供。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: 'パーソナル制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['キッズスペース付き','完全個室','医療国家資格保有','子連れOK'],
    description: 'キッズスペース付き完全個室を完備。医療国家資格を持つ実績豊富なトレーナーが個々に合ったトレーニングを提供',
    access: '阪急「武庫之荘駅」徒歩圏内', address: '兵庫県尼崎市武庫之荘（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'キッズスペース付き完全個室を完備。医療国家資格を持つ実績豊富なトレーナ', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'SynerGym（シナジム）塚口本店', image: '/images/studios/zen-place-pilates.webp', rating: 4.4, reviewCount: 55,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'マシンピラティス受け放題が月額16,500円で尼崎エリア最安級。ジムも併設されており総合的にボディメイクが可能。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月額 16,500円（通い放題）', trial: '体験レッスンあり', features: ['マシンピラティス受け放題','最安級','ジム併設','塚口駅近く'],
    description: 'マシンピラティス受け放題が月額16,500円で尼崎エリア最安級。ジムも併設されており総合的にボディメイクが可能',
    access: '阪急「塚口駅」徒歩圏内', address: '兵庫県尼崎市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'マシンピラティス受け放題が月額16,500円で尼崎エリア最安級。ジムも', price: '月額 16,500円（通い放題）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！尼崎エリアのスタジオはほとんどが初心者歓迎。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめです。' },
  { question: '尼崎のピラティスの料金相場は？', answer: 'グループ月4回で8,800円〜16,500円程度。パーソナルは1回 8,000円〜15,000円が目安です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。目的に合わせて選びましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '尼崎エリアには男性OKのスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: '各スタジオの最新キャンペーン情報を公式サイトで確認しましょう。無料体験を実施しているスタジオもあります。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function AmagasakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '尼崎', url: 'https://pilates-biyori.com/area/amagasaki/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年07月22日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026年6月最新】ピラティス尼崎おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">尼崎</span></nav></div></section>
        <AreaConclusion studios={studios} areaName="尼崎" />

        <TableOfContents areaName="尼崎" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「尼崎で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、尼崎エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>尼崎でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>JR「尼崎駅」/ 阪神「尼崎駅」/ 阪急「塚口駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="尼崎" />
        <AreaMarketComparison studios={studios} areaName="尼崎" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">尼崎のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• SynerGym（通い放題 16,500円）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">子連れOK</h3>
                <p className="text-warm-600 text-sm mb-4">子連れOKで選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスアヴニール（キッズスペース付き個室）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手ブランド</h3>
                <p className="text-warm-600 text-sm mb-4">大手ブランドで選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（全国150店舗相互利用）</li><li className="text-warm-700">• URBAN CLASSIC PILATES</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">尼崎のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜16,500円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜15,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">尼崎はJR・阪神・阪急の3路線が通る交通至便な街。Rintosullの月4回8,800円〜からSynerGymの通い放題16,500円まで幅広い価格帯のスタジオが揃っています。子連れOKのスタジオもあり、子育て世代にも優しいエリアです。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">尼崎でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR尼崎駅と阪神尼崎駅は別の場所</h3>
                <p className="text-warm-600 leading-relaxed">JR尼崎駅と阪神尼崎駅は約1.5km離れています。また阪急は「塚口駅」「武庫之荘駅」が主要駅です。利用路線に合わせて選びましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">子連れの方はアヴニールを検討</h3>
                <p className="text-warm-600 leading-relaxed">ピラティスアヴニール武庫之荘店はキッズスペース付き完全個室で、小さなお子様連れでも安心して通えます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ジム併用したい方はSynerGymを</h3>
                <p className="text-warm-600 leading-relaxed">SynerGym塚口本店はマシンピラティスとジムが併設。筋トレとピラティスを両立したい方におすすめです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣の西宮・伊丹・大阪も検討</h3>
                <p className="text-warm-600 leading-relaxed">尼崎は交通の要衝。西宮北口や梅田のスタジオも通勤経路に合わせて検討してみましょう。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のスタジオが多い。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>尼崎エリアの豆知識：</strong>尼崎はJR・阪神・阪急の3路線が利用可能で大阪・神戸どちらへもアクセス抜群。近年は再開発が進み、若いファミリー層も増加中。キッズスペース付きのスタジオもあり子育て世代にも通いやすいエリアです。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">尼崎の料金相場はグループ月4回で8,800円〜16,500円。入会金やキャンペーンも確認しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">まずは気軽に複数スタジオを体験してみましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間を確認。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は尼崎エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では尼崎にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
              <AreaModifierSections studios={studios} areaName="尼崎" />
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="amagasaki" areaName="尼崎" />

      <RelatedAreas currentSlug="amagasaki" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
