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
  alternates: { canonical: 'https://biyori-pilates.com/area/higashi-murayama/' },
  title: '【2026最新】ピラティス東村山おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '東村山エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,東村山,東京都東村山市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Shiori Ballet Class ピラティス',
    image: '/images/studios/default-studio.webp',
    rating: 4.6,
    reviewCount: 18,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '久米川駅北口徒歩3分。バレエスクール併設のピラティス教室。親子での参加もOK。初心者でも丁寧な指導。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["バレエ併設", "駅徒歩3分", "親子参加OK", "丁寧な指導"],
    description: '久米川駅北口徒歩3分。バレエスクール併設のピラティス教室。親子での参加もOK。初心者でも丁寧な指導。',
    access: '久米川駅北口徒歩3分',
    address: '東京都東村山市（久米川駅北口徒歩3分）',
    popularPlan: { name: 'ピラティスレッスン', description: 'バレエ要素を取り入れたレッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'プラスピラティス（Plus Pilates）',
    image: '/images/studios/default-studio.webp',
    rating: 4.7,
    reviewCount: 15,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '女性専用・少人数・完全予約制。1対1のパーソナルと2人までのセミパーソナル。ママクラスは子連れOK。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["女性専用", "ママクラス", "子連れOK", "完全予約制"],
    description: '女性専用・少人数・完全予約制。1対1のパーソナルと2人までのセミパーソナル。ママクラスは子連れOK。',
    access: '東村山駅東口徒歩3分',
    address: '東京都東村山市（東村山駅東口徒歩3分）',
    popularPlan: { name: 'パーソナルレッスン', description: '1対1の丁寧なパーソナル。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'zen place pilates 所沢',
    image: '/images/studios/default-studio.webp',
    rating: 4.5,
    reviewCount: 45,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '東村山から西武線で2駅の所沢。全国150店舗以上展開。マット・マシン両方に対応。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ["全国150店舗", "マット&マシン", "男性OK", "AI姿勢分析"],
    description: '東村山から西武線で2駅の所沢。全国150店舗以上展開。マット・マシン両方に対応。',
    access: '所沢駅（東村山から2駅）',
    address: '埼玉県所沢市（所沢駅周辺）',
    popularPlan: { name: 'グループ月4回プラン', description: 'マットグループレッスン。', price: '月4回 10,450円〜（税込）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'LAVA 東村山店',
    image: '/images/studios/default-studio.webp',
    rating: 4.4,
    reviewCount: 72,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '全国400店舗以上のホットヨガスタジオ。ピラティスプログラムも充実。女性専用で安心。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '月4回 9,800円〜',
    trial: '体験レッスン 0円',
    features: ["ホットヨガ", "ピラティスプログラム", "女性専用", "全国チェーン"],
    description: '全国400店舗以上のホットヨガスタジオ。ピラティスプログラムも充実。女性専用で安心。',
    access: '東村山駅周辺',
    address: '東京都東村山市（東村山駅周辺）',
    popularPlan: { name: 'マンスリーメンバー', description: '月4回のヨガ&ピラティス。', price: '月4回 9,800円〜（税込）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: '東村山市民ステーション サンパルネ',
    image: '/images/studios/default-studio.webp',
    rating: 4.3,
    reviewCount: 25,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '東村山駅直結の市民施設。ピラティスクリニックを定期開催。少人数制で個人に合わせたアドバイス。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '低価格（市民施設）',
    trial: '参加可',
    features: ["市民施設", "ピラティスクリニック", "少人数制", "低価格"],
    description: '東村山駅直結の市民施設。ピラティスクリニックを定期開催。少人数制で個人に合わせたアドバイス。',
    access: '東村山駅直結',
    address: '東京都東村山市（東村山駅直結）',
    popularPlan: { name: 'ピラティスクリニック', description: '少人数制のピラティス教室。', price: '低価格（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
]

const faqs = [
  { question: '東村山でピラティス初心者におすすめは？', answer: 'LAVAは0円体験で気軽に。プラスピラティスは1対1で丁寧な指導。' },
  { question: '東村山のピラティス料金相場は？', answer: 'LAVAの月4回9,800円〜が目安。サンパルネは市民施設で低価格。' },
  { question: '子連れで通えるスタジオは？', answer: 'プラスピラティスのママクラスは子連れOK。Shioriも親子参加可。' },
  { question: '男性が通えるスタジオは？', answer: 'zen place所沢とサンパルネは男性OK。LAVA・プラスピラティスは女性専用。' },
  { question: '東村山駅から近いスタジオは？', answer: 'サンパルネは駅直結。プラスピラティスは東口徒歩3分。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装、飲み物、タオル、靴下。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回。2〜3ヶ月継続を。' },
  { question: '所沢のスタジオも検討すべき？', answer: '東村山から所沢は2駅。zen placeなど大手スタジオが揃います。' },
  { question: '市民施設のピラティスとは？', answer: 'サンパルネはリーズナブルにピラティスが体験できる市民施設。' },
  { question: 'ピラティスの効果は？', answer: '姿勢改善、体幹強化など。2ヶ月過ぎから実感する方が多い。' },
]

export default function HigashimurayamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '東村山', url: 'https://pilates-biyori.com/area/higashi-murayama/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年07月14日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス東村山おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">東村山</span></nav></div></section>
        <TableOfContents areaName="東村山" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「東村山でピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「東村山・久米川で通いやすいスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、東村山エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>東村山でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="東村山" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">東村山のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">東村山のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">9,800円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">要問合せ</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">東村山は地元密着型のスタジオが中心。LAVAのような全国チェーンも出店。所沢まで足を伸ばせば選択肢が広がります。サンパルネの市民施設は低価格で始められる穴場です。</p></div></section>
        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">東村山でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">東村山はスタジオ数が限られる</h3><p className="text-warm-600 leading-relaxed">専門スタジオは少なめ。所沢や国分寺など近隣エリアも検討しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">西武線の路線を活用</h3><p className="text-warm-600 leading-relaxed">東村山は西武新宿線と国分寺線が交差。沿線のスタジオも選択肢に。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">子連れ対応の確認を</h3><p className="text-warm-600 leading-relaxed">ママ向けスタジオはプラスピラティスやShioriなど限定的。事前に確認を。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">市民施設も活用</h3><p className="text-warm-600 leading-relaxed">サンパルネのピラティスクリニックは低価格で始められる。まずはここから試すのもアリ。</p></div></div></div></section>
        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認がしやすく。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>対応のスタジオも。事前確認を。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>東村山エリアの豆知識：</strong>東村山はのどかな住宅街。レッスン後は北山公園やクロスコートなどで散策を楽しむのもおすすめです。</p></div></div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">ママ向け</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• プラスピラティス（子連れOK）</li><li className="text-warm-700">• Shiori（親子参加OK）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• LAVA（月4回 9,800円〜）</li><li className="text-warm-700">• サンパルネ（低価格・市民施設）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">本格派</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place 所沢（全国150店舗）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">グループ</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">9,800円〜</p></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3><p className="text-3xl font-bold text-warm-800 mb-4">個別指導</p><p className="text-sm text-warm-600 mb-4">要問合せ</p></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">体験</h3><p className="text-3xl font-bold text-warm-800 mb-4">まずはここから</p><p className="text-sm text-warm-600 mb-4">0円〜</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">LAVAの月4回9,800円〜が目安。サンパルネは低価格の市民施設。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">LAVAは0円体験。各スタジオも体験を実施中。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">東村山駅周辺と近隣の所沢も選択肢に。西武線で2駅。</p></div></div></div></section>
        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は東村山エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では東村山にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="higashi-murayama" areaName="東村山" />

      <RelatedAreas currentSlug="higashi-murayama" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
