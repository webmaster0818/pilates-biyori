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
  title: '【2026最新】ピラティス北谷おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '北谷エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,北谷,沖縄県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスアクス 北谷店',
    image: '/images/studios/default-studio.webp',
    rating: 4.6,
    reviewCount: 32,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: 'マシンピラティス専門スタジオ。入会金11,000円がキャンペーン中は無料に。本格的なマシンピラティスが受けられる。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["マシン専門", "キャンペーン", "入会金無料", "本格レッスン"],
    description: 'マシンピラティス専門スタジオ。入会金11,000円がキャンペーン中は無料に。本格的なマシンピラティスが受けられる。',
    access: '北谷町内',
    address: '沖縄県中頭郡北谷町',
    popularPlan: { name: 'マシンピラティスレッスン', description: '専用マシンを使った本格レッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'Pilates Studio gg',
    image: '/images/studios/default-studio.webp',
    rating: 4.8,
    reviewCount: 22,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '完全マンツーマンのパーソナルピラティス。女性インストラクターが担当。マットとマシン両方に対応。よもぎ蒸しサービスも。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["完全マンツーマン", "女性インストラクター", "マット&マシン", "よもぎ蒸し"],
    description: '完全マンツーマンのパーソナルピラティス。女性インストラクターが担当。マットとマシン両方に対応。よもぎ蒸しサービスも。',
    access: '北谷町吉原955',
    address: '沖縄県中頭郡北谷町吉原955',
    popularPlan: { name: 'パーソナルレッスン', description: '完全マンツーマンのパーソナル。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'ピラティスアクス 那覇新都心店',
    image: '/images/studios/default-studio.webp',
    rating: 4.5,
    reviewCount: 45,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '北谷からもアクセス可能な那覇新都心のマシンピラティス専門スタジオ。アクス系列で北谷店と併用も可能。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["マシン専門", "那覇新都心", "複数店舗", "初心者歓迎"],
    description: '北谷からもアクセス可能な那覇新都心のマシンピラティス専門スタジオ。アクス系列で北谷店と併用も可能。',
    access: '那覇市新都心',
    address: '沖縄県那覇市新都心（詳細は公式サイト）',
    popularPlan: { name: 'マシンピラティスレッスン', description: '那覇新都心のマシンピラティス。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'ルキナ那覇新都心',
    image: '/images/studios/default-studio.webp',
    rating: 4.5,
    reviewCount: 38,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: 'マシンピラティス専用コラーゲンスタジオ。少人数制でパーソナルトレーニングも。リフォーマーによる効率的なレッスン。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["コラーゲンスタジオ", "少人数制", "パーソナル対応", "リフォーマー"],
    description: 'マシンピラティス専用コラーゲンスタジオ。少人数制でパーソナルトレーニングも。リフォーマーによる効率的なレッスン。',
    access: '那覇市新都心',
    address: '沖縄県那覇市新都心（詳細は公式サイト）',
    popularPlan: { name: 'グループレッスン', description: 'コラーゲンスタジオでのレッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'LAVA 那覇新都心店',
    image: '/images/studios/default-studio.webp',
    rating: 4.4,
    reviewCount: 112,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '全国400店舗以上のホットヨガスタジオ。ピラティスプログラムも充実。北谷からもアクセス可能。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '月4回 9,800円〜',
    trial: '体験レッスン 0円',
    features: ["ホットヨガ", "ピラティスプログラム", "女性専用", "全国チェーン"],
    description: '全国400店舗以上のホットヨガスタジオ。ピラティスプログラムも充実。北谷からもアクセス可能。',
    access: '那覇市新都心',
    address: '沖縄県那覇市新都心（詳細は公式サイト）',
    popularPlan: { name: 'マンスリーメンバー', description: '月4回のヨガ&ピラティス。', price: '月4回 9,800円〜（税込）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
]

const faqs = [
  { question: '北谷にピラティススタジオはある？', answer: 'ピラティスアクス北谷店とPilates Studio ggが北谷町内にあります。那覇新都心のスタジオも車で約20分。' },
  { question: '北谷・沖縄のピラティス料金相場は？', answer: 'LAVAの月4回9,800円〜が目安。専門スタジオは要問合せが多いです。' },
  { question: '初心者でも大丈夫？', answer: 'どのスタジオも初心者歓迎。LAVAは0円体験で気軽に始められます。' },
  { question: '男性が通えるスタジオは？', answer: 'ピラティスアクスは男女OK。LAVAは女性専用。' },
  { question: '車で通いやすいスタジオは？', answer: '沖縄は車社会。各スタジオの駐車場情報を確認しましょう。北谷は駐車場が充実しているエリアです。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装、飲み物、タオル、靴下があればOK。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回。2〜3ヶ月継続が大切。' },
  { question: 'よもぎ蒸しとピラティスの効果は？', answer: 'Studio ggはよもぎ蒸しサービスも提供。ピラティスと組み合わせてデトックス効果アップ。' },
  { question: 'コラーゲンスタジオとは？', answer: 'ルキナはコラーゲンランプを使ったスタジオ。ピラティスしながら美肌効果も期待できます。' },
  { question: 'ピラティスの効果は？', answer: '姿勢改善、体幹強化、ボディメイクなど。2ヶ月過ぎから実感する方が多い。' },
]

export default function ChatanPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '北谷', url: 'https://pilates-biyori.com/area/chatan/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月26日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス北谷おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">北谷</span></nav></div></section>
        <TableOfContents areaName="北谷" />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「北谷・沖縄でピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「北谷町内や近隣のスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、北谷・沖縄エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>北谷でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="北谷" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">北谷のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">北谷のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">9,800円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">要問合せ</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">北谷は沖縄本島中部のリゾートタウン。町内にはピラティスアクスとStudio ggがあり、那覇新都心のスタジオも車で約20分。沖縄らしいリラックスした雰囲気でピラティスを楽しめます。</p></div></section>
        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">北谷でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">沖縄は車社会。駐車場を必ずチェック</h3><p className="text-warm-600 leading-relaxed">北谷は駐車場が充実したエリアですが、各スタジオの駐車場情報は事前に確認を。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">那覇のスタジオも通える範囲</h3><p className="text-warm-600 leading-relaxed">北谷から那覇新都心は車で約20分。選択肢を広げて比較検討しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">沖縄の気候に合わせた水分補給</h3><p className="text-warm-600 leading-relaxed">沖縄は気温・湿度が高いため、レッスン中の水分補給は特に重要。多めに持参を。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">リゾート地ならではのリラックス効果</h3><p className="text-warm-600 leading-relaxed">北谷のビーチやカフェとピラティスを組み合わせて、心身ともにリフレッシュしましょう。</p></div></div></div></section>
        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認がしやすく。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>対応のスタジオも。事前確認を。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>北谷エリアの豆知識：</strong>北谷はアメリカンビレッジなどショッピングスポットも充実。レッスン後はビーチ沿いのカフェでリラックスするのもおすすめ。沖縄は暑いので水分は多めに持参を。</p></div></div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Studio gg（完全マンツーマン+よもぎ蒸し）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">マシン専門</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスアクス（北谷&那覇）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• LAVA（月4回 9,800円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">グループ</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">9,800円〜</p></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3><p className="text-3xl font-bold text-warm-800 mb-4">個別指導</p><p className="text-sm text-warm-600 mb-4">要問合せ</p></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">体験</h3><p className="text-3xl font-bold text-warm-800 mb-4">まずはここから</p><p className="text-sm text-warm-600 mb-4">0円〜</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">LAVAの月4回9,800円〜が目安。専門スタジオは要問合せが多い。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">LAVAは0円体験。各スタジオも体験を実施中。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">北谷は車が基本。那覇新都心のスタジオも車で約20分。</p></div></div></div></section>
        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は北谷エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では北谷にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <RelatedAreas currentSlug="chatan" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
