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

export const metadata = {
  title: '【2026最新】ピラティス長崎おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '長崎エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,長崎,長崎市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティススタジオ Shape 長崎店',
    image: '/images/studios/shape-nagasaki.webp',
    rating: 4.8, reviewCount: 45,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '理学療法士・鍼灸師など医療系国家資格者が在籍。長崎県唯一の種類と数を誇るピラティス専用マシンを完備。' },
      { author: 'S.T', rating: 5, date: '2週間前', text: '国際ライセンス取得インストラクターによる本格指導。マシンの種類が豊富。' },
      { author: 'R.N', rating: 4, date: '3週間前', text: '長崎県内に4店舗展開。医療系資格者ならではの安心感がある。' },
    ],
    price: '要問合せ', trial: '体験レッスンあり',
    features: ['医療系資格者', '豊富なマシン', '県内4店舗', '国際ライセンス'],
    description: '医療系国家資格者及び国際ライセンス取得インストラクターが在籍。長崎県唯一の種類と数のリフォーマーやラダーバレルなど専用マシンを完備。県内4店舗展開。',
    access: '長崎市内', address: '長崎県長崎市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'ピラティスレッスン', description: '医療系資格者による本格レッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['パーソナルレッスン', 'グループレッスン', '体験レッスンあり', '複数店舗利用可'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '痛み改善', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'ラダーバレル', 'チェア', '各種専用マシン'] },
  },
  {
    name: 'Lien（リアン）長崎駅前スタジオ',
    image: '/images/studios/lien-nagasaki.webp',
    rating: 4.7, reviewCount: 38,
    reviews: [
      { author: 'K.N', rating: 5, date: '1週間前', text: '長崎駅より徒歩3分。少人数スクール制でひとりひとりに最適なプログラム。' },
      { author: 'Y.M', rating: 4, date: '2週間前', text: 'ピラティスとヨガ両方が受けられる。アットホームな雰囲気で通いやすい。' },
      { author: 'A.S', rating: 5, date: '3週間前', text: '少人数制でインストラクターの目が行き届く。初心者でも安心。' },
    ],
    price: '要問合せ', trial: '体験レッスンあり',
    features: ['長崎駅徒歩3分', '少人数制', 'ピラティス&ヨガ', 'スクール制'],
    description: '長崎駅より徒歩3分の少人数スクール制ピラティス＆ヨガスタジオ。ひとりひとりに最適なレッスンプログラムを提供。',
    access: 'JR「長崎駅」徒歩3分', address: '長崎県長崎市（長崎駅前エリア）',
    popularPlan: { name: 'ピラティスレッスン', description: '少人数スクール制の丁寧なレッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['ピラティスクラス', 'ヨガクラス', '少人数制', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性90% / 男性10%', purpose: ['姿勢改善', '柔軟性向上', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['マット', 'リフォーマー', '更衣室'] },
  },
  {
    name: 'Two Three ピラティススタジオ長崎',
    image: '/images/studios/twothree-nagasaki.webp',
    rating: 4.6, reviewCount: 22,
    reviews: [
      { author: 'E.M', rating: 5, date: '1週間前', text: '長崎駅より徒歩5分。マシンピラティス専門で体幹強化と姿勢改善に効果的。' },
      { author: 'N.K', rating: 4, date: '2週間前', text: 'リフォーマーを使ったレッスンが中心。初心者でも丁寧に指導してもらえる。' },
      { author: 'H.Y', rating: 5, date: '3週間前', text: '駅近で仕事帰りに通いやすい。マシンピラティスの効果を実感できる。' },
    ],
    price: '要問合せ', trial: '体験レッスンあり',
    features: ['マシン専門', '長崎駅徒歩5分', '体幹強化', '姿勢改善'],
    description: '長崎駅より徒歩5分のマシンピラティス専門スタジオ。リフォーマーを使ったレッスンで体幹強化・姿勢改善を目指す。',
    access: 'JR「長崎駅」徒歩5分', address: '長崎県長崎市（長崎駅周辺）',
    popularPlan: { name: 'マシンピラティスレッスン', description: 'リフォーマーを使った本格レッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['マシンピラティス', '体幹強化プログラム', '姿勢改善プログラム', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性85% / 男性15%', purpose: ['体幹強化', '姿勢改善', 'ボディメイク', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Pilates Studio Blue',
    image: '/images/studios/blue-nagasaki.webp',
    rating: 4.5, reviewCount: 18,
    reviews: [
      { author: 'T.M', rating: 5, date: '1週間前', text: '明るくて気持ちのいいスタジオ。経験豊富なインストラクターが在籍。' },
      { author: 'C.Y', rating: 4, date: '2週間前', text: 'オンラインクラスもあるので自宅でも続けられる。' },
      { author: 'K.S', rating: 5, date: '3週間前', text: 'アットホームな雰囲気。初めてのピラティスでも楽しく続けられる。' },
    ],
    price: '要問合せ', trial: '体験レッスンあり',
    features: ['明るいスタジオ', 'オンライン対応', '経験豊富な講師', 'アットホーム'],
    description: '明るく気持ちの良い空間で、経験豊富なインストラクターが指導。オンラインクラスにも対応。',
    access: '長崎市内', address: '長崎県長崎市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'ピラティスレッスン', description: '明るいスタジオでの丁寧なレッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['スタジオレッスン', 'オンラインレッスン', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性90% / 男性10%', purpose: ['健康維持', '姿勢改善', 'リフレッシュ', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['マット', '更衣室'] },
  },
  {
    name: 'ヨギフィール東長崎',
    image: '/images/studios/yogifeel-nagasaki.webp',
    rating: 4.6, reviewCount: 28,
    reviews: [
      { author: 'A.K', rating: 5, date: '1週間前', text: '東長崎エリアで通いやすい。ヨガとピラティス両方が楽しめる。' },
      { author: 'Y.N', rating: 4, date: '2週間前', text: '地域密着型で温かい雰囲気。初心者にも優しい。' },
      { author: 'M.H', rating: 5, date: '3週間前', text: '体の硬い人でも安心。無理のないペースで進めてもらえる。' },
    ],
    price: '要問合せ', trial: '体験レッスンあり',
    features: ['東長崎', 'ヨガ&ピラティス', '地域密着', '初心者歓迎'],
    description: '東長崎エリアのヨガ・ピラティススタジオ。地域密着型の温かい雰囲気で初心者でも安心。',
    access: '東長崎エリア', address: '長崎県長崎市東長崎エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'ピラティスレッスン', description: '地域密着型の丁寧なレッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['ピラティスクラス', 'ヨガクラス', '初心者クラス', '体験レッスンあり'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性90% / 男性10%', purpose: ['健康維持', '柔軟性向上', 'リフレッシュ', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['マット', '更衣室'] },
  },
]

const faqs = [
  { question: '長崎でピラティス初心者におすすめのスタジオは？', answer: 'Lien長崎駅前スタジオは少人数制で初心者も安心。ヨギフィール東長崎も初心者歓迎のアットホームなスタジオです。' },
  { question: '長崎のピラティスの料金相場は？', answer: '長崎のスタジオは要問合せが多いですが、一般的にグループレッスン月4回で8,000円〜15,000円、パーソナルは1回5,000円〜10,000円が目安です。' },
  { question: 'マシンピラティスが受けられるスタジオは？', answer: 'Shape長崎店はリフォーマー・ラダーバレルなど豊富なマシンを完備。Two Threeもマシンピラティス専門です。' },
  { question: '男性が通えるスタジオはありますか？', answer: 'Shape長崎店やTwo Three、Pilates Studio Blue等は男性も受講可能です。事前に各スタジオに確認することをおすすめします。' },
  { question: '長崎駅から近いスタジオは？', answer: 'Lienは長崎駅徒歩3分、Two Threeは徒歩5分。駅近で仕事帰りにも通いやすいです。' },
  { question: '体験レッスンは何を持っていけばいい？', answer: '動きやすい服装、飲み物、フェイスタオル、滑り止め付き靴下があればOK。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回がおすすめ。慣れたら週2〜3回に。最低2〜3ヶ月の継続が大切です。' },
  { question: '医療系資格者がいるスタジオは？', answer: 'Shape長崎店は理学療法士・鍼灸師・柔道整復師などの医療系国家資格者が多数在籍しています。' },
  { question: 'オンラインレッスンが受けられるスタジオは？', answer: 'Pilates Studio Blueはオンラインクラスにも対応。自宅でもレッスンが受けられます。' },
  { question: 'ピラティスはどのくらいで効果が出る？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く、ボディメイクは3〜6ヶ月が目安。' },
]

export default function NagasakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '長崎', url: 'https://pilates-biyori.com/area/nagasaki/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月26日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス長崎おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">長崎</span></nav></div></section>
        <TableOfContents areaName="長崎" />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「長崎でピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「長崎市内で通いやすいスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、長崎エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>長崎でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>医療系資格者による指導を受けたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="長崎" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">長崎のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">長崎のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,000円〜15,000円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 5,000円〜10,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">要問合せ〜3,000円程度</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">長崎エリアは医療系資格者が運営するスタジオが多く質の高い指導が受けられます。Shapeは県内4店舗で通いやすく、長崎駅周辺にはLienやTwo Threeが集中。坂の街ならではの立地を考慮してスタジオを選びましょう。</p></div></section>
        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">長崎でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">坂の街・長崎ならではのアクセス確認</h3><p className="text-warm-600 leading-relaxed">長崎は坂が多い地形です。駅からの距離だけでなく、実際の道のりに坂があるかも確認しましょう。レッスン後の疲れた身体で急な坂を上るのは大変です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">路面電車を活用してスムーズに通おう</h3><p className="text-warm-600 leading-relaxed">長崎市内は路面電車が便利。スタジオ最寄りの電停を確認しておくと天候に左右されず快適に通えます。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">少人数制スタジオは予約の取りやすさを確認</h3><p className="text-warm-600 leading-relaxed">長崎のスタジオは少人数制が多く、人気の時間帯は予約が取りにくい場合も。複数の曜日・時間帯で通える柔軟性があるとスムーズです。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">諫早・佐世保のスタジオも選択肢に</h3><p className="text-warm-600 leading-relaxed">長崎市内だけでなく諫早や佐世保にもShapeの店舗があります。通勤圏に合わせて幅広く検討してみましょう。</p></div></div></div></section>
        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認がしやすく。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>対応のスタジオも。事前確認を。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>長崎エリアの豆知識：</strong>坂の多い長崎ではレッスン後の移動も考慮して歩きやすい靴で来ましょう。路面電車で通う場合はICカードを準備しておくとスムーズです。</p></div></div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">専門的な指導</h3><p className="text-warm-600 text-sm mb-4">医療系資格者による指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Shape（医療系資格者多数在籍）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3><p className="text-warm-600 text-sm mb-4">長崎駅から徒歩圏内。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Lien（長崎駅徒歩3分）</li><li className="text-warm-700">• Two Three（長崎駅徒歩5分）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">アットホーム</h3><p className="text-warm-600 text-sm mb-4">温かい雰囲気で通いたい方に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates Studio Blue</li><li className="text-warm-700">• ヨギフィール東長崎</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">グループレッスン</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">少人数制中心。</p><ul className="text-sm text-warm-700 space-y-1"><li>• 8,000円〜15,000円/月</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3><p className="text-3xl font-bold text-warm-800 mb-4">1回5,000円〜</p><p className="text-sm text-warm-600 mb-4">個別指導で効果的。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Shape（要問合せ）</li><li>• Kyoumo Pilates（要問合せ）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">オンライン</h3><p className="text-3xl font-bold text-warm-800 mb-4">自宅OK</p><p className="text-sm text-warm-600 mb-4">通えない日も継続。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Pilates Studio Blue</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">長崎は要問合せのスタジオが多いため、まずは体験レッスンで料金体系を確認しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">各スタジオで体験レッスンを実施中。2〜3ヶ所は体験してから決めましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">長崎駅周辺のスタジオなら公共交通機関でアクセス良好。坂道を考慮したルート確認も大切。</p></div></div></div></section>
        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は長崎エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では長崎にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <RelatedAreas currentSlug="nagasaki" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
