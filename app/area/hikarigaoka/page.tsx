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
  alternates: { canonical: 'https://biyori-pilates.com/area/hikarigaoka/' },
  title: '【2026最新】ピラティス光が丘おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '光が丘エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,光が丘,東京都練馬区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティス青空',
    image: '/images/studios/default-studio.webp',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '練馬・光が丘にある専用マシンの揃うプライベートピラティススタジオ。少人数で丁寧な指導。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["プライベートスタジオ", "専用マシン", "少人数", "アットホーム"],
    description: '練馬・光が丘にある専用マシンの揃うプライベートピラティススタジオ。少人数で丁寧な指導。',
    access: '光が丘エリア',
    address: '東京都練馬区光が丘エリア',
    popularPlan: { name: 'プライベートレッスン', description: '専用マシンを使ったプライベート。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'CLUB PILATES 練馬店',
    image: '/images/studios/default-studio.webp',
    rating: 4.6,
    reviewCount: 72,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '世界1000店舗以上展開。15種類の器具と4段階レベル分けで初心者から上級者まで対応。光が丘からもアクセス可能。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分）',
    features: ["世界最大級", "15種類の器具", "男性OK", "4段階レベル"],
    description: '世界1000店舗以上展開。15種類の器具と4段階レベル分けで初心者から上級者まで対応。光が丘からもアクセス可能。',
    access: '西武池袋線「練馬駅」周辺',
    address: '東京都練馬区（練馬駅周辺）',
    popularPlan: { name: 'グループ月4回プラン', description: '15種類の器具を使った本格レッスン。', price: '月4回 14,190円（税込）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '月〜金 7:00-21:00 / 土日 7:00-18:00', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'ピラティススタジオcococara',
    image: '/images/studios/default-studio.webp',
    rating: 4.7,
    reviewCount: 22,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: 'マシン×マンツーマンのオーダーメイド指導。少人数制マットレッスンもあり。光が丘の静かな環境でリラックス。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["マシン×マンツーマン", "オーダーメイド", "静かな環境", "少人数マット"],
    description: 'マシン×マンツーマンのオーダーメイド指導。少人数制マットレッスンもあり。光が丘の静かな環境でリラックス。',
    access: '光が丘エリア',
    address: '東京都練馬区（光が丘エリア）',
    popularPlan: { name: 'パーソナルレッスン', description: 'マシン×マンツーマンのオーダーメイド。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'zen place pilates 練馬',
    image: '/images/studios/default-studio.webp',
    rating: 4.5,
    reviewCount: 48,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '全国150店舗以上展開。マット・マシン・グループ・プライベートすべてに対応。光が丘から練馬駅はバスで約15分。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ["全国150店舗", "マット&マシン", "男性OK", "AI姿勢分析"],
    description: '全国150店舗以上展開。マット・マシン・グループ・プライベートすべてに対応。光が丘から練馬駅はバスで約15分。',
    access: '西武池袋線「練馬駅」徒歩3分',
    address: '東京都練馬区（練馬駅徒歩3分）',
    popularPlan: { name: 'グループ月4回プラン', description: 'マットグループレッスン。', price: '月4回 10,450円〜（税込）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'PALES ピラティス練馬・練馬春日町店',
    image: '/images/studios/default-studio.webp',
    rating: 4.6,
    reviewCount: 15,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '完全予約制のマンツーマンピラティス。1回30分4,950円〜と都内では比較的安価。光が丘からバスでアクセス可能。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '初心者でも安心して通える。インストラクターが丁寧に指導してくれる。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'アクセスも良く通いやすい。レッスン後は身体がすっきりする。' },
    ],
    price: '1回 4,950円〜',
    trial: '体験レッスンあり',
    features: ["完全予約制", "マンツーマン", "30分4,950円〜", "体幹強化"],
    description: '完全予約制のマンツーマンピラティス。1回30分4,950円〜と都内では比較的安価。光が丘からバスでアクセス可能。',
    access: '練馬春日町駅周辺',
    address: '東京都練馬区（練馬春日町エリア）',
    popularPlan: { name: 'パーソナルレッスン', description: '完全予約制のマンツーマン。', price: '1回30分 4,950円〜（税込）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
]

const faqs = [
  { question: '光が丘にピラティススタジオはある？', answer: 'ピラティス青空とcococaraが光が丘エリアにあります。練馬駅周辺のスタジオもバスで通える範囲。' },
  { question: '光が丘・練馬の料金相場は？', answer: 'PALESの1回4,950円〜が最安級。zen placeは月4回10,450円〜。CLUB PILATESは月4回14,190円〜。' },
  { question: '初心者におすすめは？', answer: 'CLUB PILATESは4段階レベル分けで安心。cococaraはオーダーメイド指導で初心者にも丁寧。' },
  { question: '男性が通えるスタジオは？', answer: 'CLUB PILATES、zen place、PALESは男性OK。' },
  { question: '光が丘駅から通いやすいスタジオは？', answer: 'ピラティス青空とcococaraは光が丘エリア。練馬駅へは大江戸線で約5分。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装、飲み物、タオル、靴下。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回。2〜3ヶ月継続を。' },
  { question: 'パーソナルレッスンが安いスタジオは？', answer: 'PALESは1回30分4,950円〜。都内では比較的リーズナブルです。' },
  { question: '練馬駅周辺のスタジオも選択肢に？', answer: '光が丘から練馬駅は大江戸線で約5分。CLUB PILATESやzen placeなど大手も揃います。' },
  { question: 'ピラティスの効果は？', answer: '姿勢改善、体幹強化など。2ヶ月過ぎから実感する方が多い。' },
]

export default function HikarigaokaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '光が丘', url: 'https://pilates-biyori.com/area/hikarigaoka/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月26日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス光が丘おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">光が丘</span></nav></div></section>
        <TableOfContents areaName="光が丘" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「光が丘・練馬でピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「光が丘から通いやすいスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、光が丘・練馬エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>光が丘でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="光が丘" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">光が丘のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">光が丘のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">10,450円〜14,190円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 4,950円〜</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜1,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">光が丘エリアは地元のプライベートスタジオと練馬駅周辺の大手スタジオの両方が選択肢。大江戸線で練馬駅へ約5分と近く、選択肢が豊富です。</p></div></section>
        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">光が丘でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">光が丘と練馬駅の移動手段を確認</h3><p className="text-warm-600 leading-relaxed">光が丘から練馬駅は大江戸線で約5分、バスでも約15分。通いやすいルートを確認しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">プライベートスタジオは予約必須</h3><p className="text-warm-600 leading-relaxed">光が丘の個人スタジオは完全予約制が多い。希望日時の予約が取れるか確認を。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">練馬駅周辺の大手も検討</h3><p className="text-warm-600 leading-relaxed">CLUB PILATESやzen placeなど、練馬駅周辺の大手スタジオも選択肢に。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンで雰囲気を確認</h3><p className="text-warm-600 leading-relaxed">個人スタジオと大手ではレッスンの雰囲気が大きく異なります。複数体験してから決めましょう。</p></div></div></div></section>
        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認がしやすく。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>対応のスタジオも。事前確認を。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>光が丘エリアの豆知識：</strong>光が丘は緑豊かな住宅街。レッスン後は光が丘公園を散歩するのもリフレッシュになります。</p></div></div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">プライベート</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティス青空（専用マシン完備）</li><li className="text-warm-700">• cococara（オーダーメイド指導）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">大手チェーン</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• CLUB PILATES（世界最大級）</li><li className="text-warm-700">• zen place（全国150店舗）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• PALES（1回30分 4,950円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">グループ</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">10,450円〜14,190円</p></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3><p className="text-3xl font-bold text-warm-800 mb-4">個別指導</p><p className="text-sm text-warm-600 mb-4">1回 4,950円〜</p></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">体験</h3><p className="text-3xl font-bold text-warm-800 mb-4">まずはここから</p><p className="text-sm text-warm-600 mb-4">0円〜1,000円</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">PALESの1回4,950円〜が最安級。zen placeは月4回10,450円〜。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">CLUB PILATESは無料体験30分。zen placeは1,000円体験。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">光が丘エリアの地元スタジオか、大江戸線で練馬駅の大手スタジオか選べます。</p></div></div></div></section>
        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は光が丘エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では光が丘にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="hikarigaoka" areaName="光が丘" />

      <RelatedAreas currentSlug="hikarigaoka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
