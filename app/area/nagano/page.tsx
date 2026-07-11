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
  alternates: { canonical: 'https://biyori-pilates.com/area/nagano/' },
  title: '【2026最新】ピラティス長野おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '長野エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。JR「長野駅」/ しなの鉄道「長野駅」周辺の初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,長野,長野県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK MEGAドン・キホーテ長野店', image: '/images/studios/pilates-k.webp', rating: 4.6, reviewCount: 55,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '女性専用マシンピラティス専門スタジオ。MEGAドン・キホーテ長野店1Fに位置し駐車場完備。音楽に合わせた楽しい。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 11,220円〜', trial: '体験レッスン 無料', features: ['女性専用','MEGAドンキ1F','マシン専門','体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。MEGAドン・キホーテ長野店1Fに位置し駐車場完備。音楽に合わせた楽しいレッスン',
    access: '長野市高田（MEGAドン・キホーテ長野店1F）', address: '長野県長野市高田 MEGAドン・キホーテ長野店1F',
    popularPlan: { name: '人気プラン', description: '女性専用マシンピラティス専門スタジオ。MEGAドン・キホーテ長野店1F', price: '月4回 11,220円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'K Plus Pilates', image: '/images/studios/zen-place-pilates.webp', rating: 4.7, reviewCount: 20,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '長野駅から徒歩5分のパーソナルピラティススタジオ。完全個室で最新のマシンを導入し効果的なトレーニングを実現。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: 'パーソナル制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['長野駅徒歩5分','完全個室','最新マシン','パーソナル'],
    description: '長野駅から徒歩5分のパーソナルピラティススタジオ。完全個室で最新のマシンを導入し効果的なトレーニングを実現',
    access: 'JR「長野駅」徒歩5分', address: '長野県長野市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '長野駅から徒歩5分のパーソナルピラティススタジオ。完全個室で最新のマシ', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'luluto（ルルト）長野店', image: '/images/studios/luluto.webp', rating: 4.8, reviewCount: 18,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '長野市高田に位置する完全マンツーマンマシンピラティス。長野駅から車で10分。理学療法士が考案した医学的アプロー。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月3回 29,700円〜', trial: '体験レッスンあり', features: ['完全マンツーマン','理学療法士監修','長野駅車10分','カスタマイズ'],
    description: '長野市高田に位置する完全マンツーマンマシンピラティス。長野駅から車で10分。理学療法士が考案した医学的アプローチ',
    access: '長野駅から車で約10分', address: '長野県長野市高田',
    popularPlan: { name: '人気プラン', description: '長野市高田に位置する完全マンツーマンマシンピラティス。長野駅から車で1', price: '月3回 29,700円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Rintosull（リントスル）長野店', image: '/images/studios/rintosull.webp', rating: 4.5, reviewCount: 45,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'ホットヨガLAVAの姉妹ブランド。月4回8,800円〜と低価格でLAVA全店との相互利用も可能。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスンあり', features: ['低価格','LAVA相互利用','マシン専門','映像レッスン'],
    description: 'ホットヨガLAVAの姉妹ブランド。月4回8,800円〜と低価格でLAVA全店との相互利用も可能',
    access: '長野市内（詳細は公式サイトでご確認ください）', address: '長野県長野市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'ホットヨガLAVAの姉妹ブランド。月4回8,800円〜と低価格でLAV', price: '月4回 8,800円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'CLUB PILATES 長野店', image: '/images/studios/club-pilates.webp', rating: 4.6, reviewCount: 30,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '世界最大級のマシンピラティスブランド。15種類の器具を使った本格レッスン。4段階のレベル分けで初心者から上級者。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 14,190円〜', trial: '体験レッスン 無料（30分イントロクラス）', features: ['世界最大級','15種類の器具','4段階レベル分け','男性OK'],
    description: '世界最大級のマシンピラティスブランド。15種類の器具を使った本格レッスン。4段階のレベル分けで初心者から上級者まで対応',
    access: '長野市内（詳細は公式サイトでご確認ください）', address: '長野県長野市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '世界最大級のマシンピラティスブランド。15種類の器具を使った本格レッス', price: '月4回 14,190円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！長野エリアのスタジオはほとんどが初心者歓迎。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめです。' },
  { question: '長野のピラティスの料金相場は？', answer: 'グループ月4回で8,800円〜14,190円程度。パーソナルは1回 8,000円〜15,000円が目安です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。目的に合わせて選びましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '長野エリアには男性OKのスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: '各スタジオの最新キャンペーン情報を公式サイトで確認しましょう。無料体験を実施しているスタジオもあります。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function NaganoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '長野', url: 'https://pilates-biyori.com/area/nagano/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年07月11日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス長野おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">長野</span></nav></div></section>
        <TableOfContents areaName="長野" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「長野で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、長野エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>長野でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>JR「長野駅」/ しなの鉄道「長野駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="長野" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">長野のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• ピラティスK（月4回 11,220円〜・体験無料）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">パーソナルで選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• K Plus Pilates（長野駅徒歩5分）</li><li className="text-warm-700">• luluto（理学療法士監修）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手ブランド</h3>
                <p className="text-warm-600 text-sm mb-4">大手ブランドで選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• CLUB PILATES（世界最大級）</li><li className="text-warm-700">• ピラティスK（女性専用）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">長野のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜14,190円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜15,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜5,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">長野は善光寺で知られる県都。2025年にピラティスK・K Plus Pilates・lulutoが相次いでオープンし、スタジオの選択肢が一気に広がりました。車社会のため駐車場完備のスタジオが人気です。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">長野でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車移動が主流のエリア</h3>
                <p className="text-warm-600 leading-relaxed">長野は車社会。ピラティスKのMEGAドンキは駐車場完備で車通いに最適です。K Plus Pilatesは長野駅徒歩5分で電車通いにも対応。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">2025年新規オープンのスタジオが多い</h3>
                <p className="text-warm-600 leading-relaxed">ピラティスK・K Plus Pilates・lulutoは2025年に長野にオープン。最新の設備と環境でレッスンを受けられます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">冬場は積雪に注意</h3>
                <p className="text-warm-600 leading-relaxed">長野は冬場に積雪があります。冬の通いやすさも考慮してスタジオを選びましょう。駅近や駐車場完備のスタジオが安心です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">松本エリアにもスタジオあり</h3>
                <p className="text-warm-600 leading-relaxed">長野県内では松本にもピラティススタジオがあります。お住まいの地域に合わせて選択しましょう。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のスタジオが多い。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>長野エリアの豆知識：</strong>長野は善光寺の門前町として栄える県都。2025年に新スタジオが続々オープンし、ピラティスの選択肢が充実してきました。冬はウィンタースポーツのコンディショニングとしてピラティスを始める方も多いエリアです。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">長野の料金相場はグループ月4回で8,800円〜14,190円。入会金やキャンペーンも確認しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">まずは気軽に複数スタジオを体験してみましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間を確認。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は長野エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では長野にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜5,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nagano" areaName="長野" />

      <RelatedAreas currentSlug="nagano" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
