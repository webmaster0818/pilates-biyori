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
  title: '【2026最新】ピラティス一宮おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '一宮エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。JR「尾張一宮駅」/ 名鉄「名鉄一宮駅」周辺の初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,一宮,愛知県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティス&ジム 1to1 一宮店', image: '/images/studios/zen-place-pilates.webp', rating: 4.6, reviewCount: 25,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '女性専用完全個室のボディメイクスタジオ。マシンピラティスと「ゆるトレ」を融合。月額6,600円〜とリーズナブル。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 6,600円〜', trial: '体験レッスンあり', features: ['月4回6,600円〜','完全個室','女性専用','マシンピラティス×ゆるトレ'],
    description: '女性専用完全個室のボディメイクスタジオ。マシンピラティスと「ゆるトレ」を融合。月額6,600円〜とリーズナブル',
    access: '一宮市内（詳細は公式サイトでご確認ください）', address: '愛知県一宮市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '女性専用完全個室のボディメイクスタジオ。マシンピラティスと「ゆるトレ」', price: '月4回 6,600円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Pilates cocowa', image: '/images/studios/zen-place-pilates.webp', rating: 4.5, reviewCount: 18,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'マットピラティスのグループレッスンを中心に展開するリーズナブルなスタジオ。回数券制で1回1,200円〜と通いや。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '回数券制 1回1,200円〜', trial: '体験レッスンあり', features: ['1回1,200円〜','子連れ対応','マットピラティス','リーズナブル'],
    description: 'マットピラティスのグループレッスンを中心に展開するリーズナブルなスタジオ。回数券制で1回1,200円〜と通いやすい',
    access: '一宮市九品町エリア', address: '愛知県一宮市九品町',
    popularPlan: { name: '人気プラン', description: 'マットピラティスのグループレッスンを中心に展開するリーズナブルなスタジ', price: '回数券制 1回1,200円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティスK イオンモール木曽川店', image: '/images/studios/pilates-k.webp', rating: 4.6, reviewCount: 80,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '女性専用マシンピラティス専門スタジオ。イオンモール木曽川3Fに位置し黒田駅から徒歩3分。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 11,220円〜', trial: '体験レッスン 無料', features: ['女性専用','イオンモール内','黒田駅徒歩3分','体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。イオンモール木曽川3Fに位置し黒田駅から徒歩3分',
    access: '名鉄「黒田駅」徒歩3分（イオンモール木曽川3F）', address: '愛知県一宮市木曽川町 イオンモール木曽川3F',
    popularPlan: { name: '人気プラン', description: '女性専用マシンピラティス専門スタジオ。イオンモール木曽川3Fに位置し黒', price: '月4回 11,220円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Rintosull（リントスル）一宮店', image: '/images/studios/rintosull.webp', rating: 4.5, reviewCount: 55,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'ホットヨガLAVAの姉妹ブランド。月4回8,800円〜と低価格でLAVA全店との相互利用も可能。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスンあり', features: ['低価格','LAVA相互利用','マシン専門','映像レッスン'],
    description: 'ホットヨガLAVAの姉妹ブランド。月4回8,800円〜と低価格でLAVA全店との相互利用も可能',
    access: '一宮市内（詳細は公式サイトでご確認ください）', address: '愛知県一宮市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'ホットヨガLAVAの姉妹ブランド。月4回8,800円〜と低価格でLAV', price: '月4回 8,800円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'パーソナルマシンピラティス 一宮', image: '/images/studios/zen-place-pilates.webp', rating: 4.7, reviewCount: 10,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '完全予約制のパーソナル専門マシンピラティススタジオ。一人ひとりの体に合わせたカスタマイズレッスン。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: 'パーソナル制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['完全予約制','パーソナル専門','妙興寺駅近く','カスタマイズ'],
    description: '完全予約制のパーソナル専門マシンピラティススタジオ。一人ひとりの体に合わせたカスタマイズレッスン',
    access: '名鉄「妙興寺駅」車7分', address: '愛知県一宮市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '完全予約制のパーソナル専門マシンピラティススタジオ。一人ひとりの体に合', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！一宮エリアのスタジオはほとんどが初心者歓迎。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめです。' },
  { question: '一宮のピラティスの料金相場は？', answer: 'グループ月4回で1,200円〜11,220円/回程度。パーソナルは1回 6,600円〜10,000円が目安です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。目的に合わせて選びましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '一宮エリアには男性OKのスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: '各スタジオの最新キャンペーン情報を公式サイトで確認しましょう。無料体験を実施しているスタジオもあります。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function IchinomiyaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '一宮', url: 'https://pilates-biyori.com/area/ichinomiya/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月26日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス一宮おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">一宮</span></nav></div></section>
        <TableOfContents areaName="一宮" />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「一宮で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、一宮エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>一宮でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>JR「尾張一宮駅」/ 名鉄「名鉄一宮駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="一宮" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">一宮のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates cocowa（1回 1,200円〜）</li><li className="text-warm-700">• 1to1（月4回 6,600円〜）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用で選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスK（体験無料）</li><li className="text-warm-700">• 1to1（完全個室）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手ブランド</h3>
                <p className="text-warm-600 text-sm mb-4">大手ブランドで選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスK（イオンモール木曽川）</li><li className="text-warm-700">• Rintosull（LAVA相互利用）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">一宮のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">1,200円〜11,220円/回</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 6,600円〜10,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">一宮はJR・名鉄の2路線が利用可能で名古屋まで約15分。Pilates cocowaの1回1,200円〜は一宮エリア最安クラス。イオンモール木曽川内のピラティスKは駐車場無料で車通いにも便利です。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">一宮でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR尾張一宮駅と名鉄一宮駅は隣接</h3>
                <p className="text-warm-600 leading-relaxed">JR尾張一宮駅と名鉄名鉄一宮駅はほぼ同じ場所にあります。どちらの路線でもアクセス可能です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">木曽川エリアは名鉄黒田駅が最寄り</h3>
                <p className="text-warm-600 leading-relaxed">イオンモール木曽川内のスタジオは名鉄黒田駅が最寄り。一宮駅からは車で約15分です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">子連れの方はPilates cocowaを検討</h3>
                <p className="text-warm-600 leading-relaxed">Pilates cocowaは子連れ対応。お子様と一緒に通えるスタジオです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">名古屋市内も検討</h3>
                <p className="text-warm-600 leading-relaxed">JR新快速で名古屋まで約15分。名古屋市内のスタジオも通勤経路に合わせて検討しましょう。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のスタジオが多い。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>一宮エリアの豆知識：</strong>一宮は愛知県北西部の主要都市で繊維産業の街として知られています。JR・名鉄が隣接する駅前にスタジオが集まるほか、郊外のイオンモール内にもスタジオがあり車通いにも対応しています。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">一宮の料金相場はグループ月4回で1,200円〜11,220円/回。入会金やキャンペーンも確認しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">まずは気軽に複数スタジオを体験してみましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間を確認。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は一宮エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では一宮にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <RelatedAreas currentSlug="ichinomiya" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
