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
  alternates: { canonical: 'https://biyori-pilates.com/area/kurume/' },
  title: '【2026年9月最新】ピラティス久留米おすすめ6選！人気スタジオの料金プランを簡単比較！',
  description: '久留米エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,久留米,福岡県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'pilates K 久留米店',
    image: '/images/studios/default-studio.webp',
    price: '月4回 13,420円〜',
    trial: '体験レッスン 無料',
    features: ["女性専用", "無料駐車場", "部位別プログラム", "1人1台マシン"],
    description: '女性限定マシンピラティス専門スタジオ。無料駐車場完備で車通いに最適。部位別プログラムが充実。',
    access: '久留米市内（無料駐車場完備）',
    address: '福岡県久留米市（詳細は公式サイト）',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回のグループマシンピラティス。', price: '月4回 13,420円（税込）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'リアン久留米スタジオ',
    image: '/images/studios/default-studio.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["解剖学ベース", "少人数制", "プライベート", "ピラティス&ヨガ"],
    description: '解剖学・運動科学に基づいたアプローチが特長。少人数専門プライベートスタジオ。ピラティス&ヨガを提供。',
    access: '久留米市内',
    address: '福岡県久留米市（詳細は公式サイト）',
    popularPlan: { name: 'プライベートレッスン', description: '解剖学ベースの個別指導。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'ピラティススタジオNOA',
    image: '/images/studios/default-studio.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["医療監修", "整形外科監修", "産婦人科監修", "鍼灸院併設"],
    description: '整形外科と産婦人科の双方が監修に携わる久留米市最大級のマシンピラティススタジオ。鍼灸院・整骨院も併設。',
    access: '久留米市内',
    address: '福岡県久留米市（詳細は公式サイト）',
    popularPlan: { name: 'マシンピラティス', description: '医療監修の本格レッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'Pilates Studio egal',
    image: '/images/studios/default-studio.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["国際資格トレーナー", "女性専用", "20代〜70代", "個別指導"],
    description: '国際資格トレーナーが指導する女性専用スタジオ。20代〜70代まで幅広い会員。個別指導で初心者も安心。',
    access: '久留米市内',
    address: '福岡県久留米市（詳細は公式サイト）',
    popularPlan: { name: 'ピラティスレッスン', description: '国際資格トレーナーの個別指導。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: '晴れるや',
    image: '/images/studios/default-studio.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["初心者専門", "女性専用", "パーソナル&セミパーソナル", "1対1"],
    description: '初心者専門の女性専用マシンピラティススタジオ。1対1のパーソナルと2人までのセミパーソナルレッスン。',
    access: '久留米市内',
    address: '福岡県久留米市（詳細は公式サイト）',
    popularPlan: { name: 'パーソナルレッスン', description: '初心者専門の1対1レッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'Pilates Mee Life西鉄久留米店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: '5人制少人数 月4回 14,800円〜（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。西鉄久留米駅から徒歩5分。',
    access: '西鉄久留米駅から徒歩5分',
    address: '福岡県久留米市東和町6-9 フジホーム久留米ビル903',
  },
]

const faqs = [
  { question: '久留米でピラティス初心者におすすめは？', answer: '晴れるやは初心者専門スタジオ。pilates Kも無料体験ありで気軽に始められます。' },
  { question: '久留米のピラティス料金相場は？', answer: 'pilates Kの月4回13,420円〜が目安。地元スタジオは要問合せが多いです。' },
  { question: '医療監修のスタジオはある？', answer: 'NOAは整形外科と産婦人科の監修で鍼灸院も併設。医療面からのサポートが充実。' },
  { question: '男性が通えるスタジオは？', answer: 'NOAは男性も受講可能。pilates K・egal・晴れるやは女性専用です。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装、飲み物、フェイスタオル、靴下があればOK。' },
  { question: '車で通えるスタジオは？', answer: 'pilates K久留米店は無料駐車場完備。他のスタジオも駐車場を確認しましょう。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回。最低2〜3ヶ月継続が大切。' },
  { question: '産後のピラティスにおすすめは？', answer: 'NOAは産婦人科監修で産後ケアにも対応。晴れるやも女性専用で安心です。' },
  { question: 'パーソナルレッスンが受けられるスタジオは？', answer: 'リアン、NOA、egal、晴れるやがパーソナル対応。' },
  { question: 'ピラティスの効果はいつ頃？', answer: '2ヶ月過ぎから効果を実感。継続が大切です。' },
]

export default function KurumePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '久留米', url: 'https://pilates-biyori.com/area/kurume/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年09月04日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス久留米おすすめ6選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">久留米</span></nav></div></section>
        <TableOfContents areaName="久留米" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「久留米でピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「久留米で人気のスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、久留米エリアでおすすめのピラティススタジオ6選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>久留米でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="久留米" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">久留米のおすすめピラティススタジオ6選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">久留米のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">13,420円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">要問合せ</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">久留米は医療監修や初心者専門など特色あるスタジオが揃うエリア。pilates Kの無料駐車場は車通いに便利。福岡市内と比べてスタジオ数は少なめですが、質の高い指導が受けられます。</p></div></section>
        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">久留米でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">久留米は車通いが基本</h3><p className="text-warm-600 leading-relaxed">pilates K久留米店は無料駐車場完備。他のスタジオも駐車場の有無を確認しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">医療系スタジオは目的を明確に</h3><p className="text-warm-600 leading-relaxed">NOAのような医療監修スタジオは、身体の不調改善が目的の方に最適。目的に合わせて選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンで相性を確認</h3><p className="text-warm-600 leading-relaxed">スタジオごとに雰囲気が異なるため、2〜3ヶ所は体験してから決めるのがおすすめ。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">天神・博多エリアも比較検討</h3><p className="text-warm-600 leading-relaxed">久留米から福岡市内は電車で約30分。天神や博多のスタジオも選択肢に入れてみましょう。</p></div></div></div></section>
        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認がしやすく。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>対応のスタジオも。事前確認を。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>久留米エリアの豆知識：</strong>久留米は車社会のためpilates Kの無料駐車場が人気。レッスン後は久留米ラーメンを楽しむのも一興です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者専門</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• 晴れるや（初心者専門・女性専用）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">医療監修</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• NOA（整形外科&産婦人科監修）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• pilates K（月4回 13,420円〜・駐車場無料）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">グループ</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">13,420円〜</p></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3><p className="text-3xl font-bold text-warm-800 mb-4">個別指導</p><p className="text-sm text-warm-600 mb-4">要問合せ</p></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">体験</h3><p className="text-3xl font-bold text-warm-800 mb-4">まずはここから</p><p className="text-sm text-warm-600 mb-4">0円〜</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">久留米はpilates Kの月4回13,420円〜が目安。地元スタジオは要問合せが多い。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">pilates Kは無料体験あり。各スタジオも体験を実施中。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">久留米は車が基本。駐車場完備のスタジオを優先して選びましょう。</p></div></div></div></section>
        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は久留米エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では久留米にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kurume" areaName="久留米" />

      <RelatedAreas currentSlug="kurume" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
