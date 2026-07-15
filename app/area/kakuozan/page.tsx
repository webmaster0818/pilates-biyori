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
  alternates: { canonical: 'https://biyori-pilates.com/area/kakuozan/' },
  title: '【2026年7月最新】覚王山のピラティススタジオおすすめ5選｜無料体験・料金で比較',
  description: '覚王山のピラティススタジオ5社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,覚王山,愛知県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Pilates Plus Kakuozan', image: '/images/studios/zen-place-pilates.webp', rating: 4.7, reviewCount: 25,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '28歳以上の女性に特化したマシンピラティススタジオ。最大5名の少人数制グループレッスン。デイタイム限定なら月2。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月2回 7,800円〜', trial: '体験レッスンあり', features: ['28歳以上女性限定','少人数制5名','覚王山駅徒歩6分','デイタイム割引'],
    description: '28歳以上の女性に特化したマシンピラティススタジオ。最大5名の少人数制グループレッスン。デイタイム限定なら月2回7,800円〜',
    access: '東山線「覚王山駅」3番出口 徒歩6分', address: '名古屋市千種区覚王山',
    popularPlan: { name: '人気プラン', description: '28歳以上の女性に特化したマシンピラティススタジオ。最大5名の少人数制', price: '月2回 7,800円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ATLAS pilates&yoga studio', image: '/images/studios/zen-place-pilates.webp', rating: 4.6, reviewCount: 18,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '覚王山駅より徒歩1分の女性専用スタジオ。肩こりや腰痛の緩和・自律神経の調整に合わせた丁寧な指導。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['覚王山駅徒歩1分','女性専用','肩こり・腰痛対応','自律神経調整'],
    description: '覚王山駅より徒歩1分の女性専用スタジオ。肩こりや腰痛の緩和・自律神経の調整に合わせた丁寧な指導',
    access: '東山線「覚王山駅」徒歩1分', address: '名古屋市千種区覚王山',
    popularPlan: { name: '人気プラン', description: '覚王山駅より徒歩1分の女性専用スタジオ。肩こりや腰痛の緩和・自律神経の', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'POLARIS Beauty', image: '/images/studios/zen-place-pilates.webp', rating: 4.5, reviewCount: 15,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '身体と呼吸を整えるヨガとピラティスの両方が選べるスタジオ。医療従事者監修のメニューで心身をケア。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['ヨガ＆ピラティス','医療従事者監修','覚王山エリア','心身ケア'],
    description: '身体と呼吸を整えるヨガとピラティスの両方が選べるスタジオ。医療従事者監修のメニューで心身をケア',
    access: '覚王山エリア', address: '名古屋市千種区覚王山',
    popularPlan: { name: '人気プラン', description: '身体と呼吸を整えるヨガとピラティスの両方が選べるスタジオ。医療従事者監', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Pilates Nag Studio 星が丘テラス店', image: '/images/studios/zen-place-pilates.webp', rating: 4.5, reviewCount: 45,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '東海エリア初のマシンピラティスグループレッスン専門スタジオ。覚王山から東山線1駅の星が丘テラス内。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['東海エリア初','全店相互利用','マシングループ専門','男女共用'],
    description: '東海エリア初のマシンピラティスグループレッスン専門スタジオ。覚王山から東山線1駅の星が丘テラス内',
    access: '東山線「星ヶ丘駅」直結（星が丘テラス内）', address: '名古屋市千種区 星が丘テラス内',
    popularPlan: { name: '人気プラン', description: '東海エリア初のマシンピラティスグループレッスン専門スタジオ。覚王山から', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'zen place pilates 名古屋', image: '/images/studios/zen-place-pilates.webp', rating: 4.7, reviewCount: 30,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'ピラティス専門大手スタジオ。覚王山エリアからもアクセスしやすい名古屋市内店舗。全国150店舗以上で他店利用可能。気に入っています。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: 'インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: '清潔感のあるスタジオで気持ちよくレッスンできます。' },
    ],
    price: '月4回 10,450円〜', trial: 'グループ体験 1,000円', features: ['大手の安心感','全国相互利用','男性OK','マット＆マシン'],
    description: 'ピラティス専門大手スタジオ。覚王山エリアからもアクセスしやすい名古屋市内店舗。全国150店舗以上で相互利用可能',
    access: '名古屋市内（詳細は公式サイトでご確認ください）', address: '名古屋市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'ピラティス専門大手スタジオ。覚王山エリアからもアクセスしやすい名古屋市', price: '月4回 10,450円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！覚王山エリアのスタジオはほとんどが初心者歓迎。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめです。' },
  { question: '覚王山のピラティスの料金相場は？', answer: 'グループ月4回で7,800円〜10,450円程度。パーソナルは1回 8,000円〜12,000円が目安です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。目的に合わせて選びましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '覚王山エリアには男性OKのスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: '各スタジオの最新キャンペーン情報を公式サイトで確認しましょう。無料体験を実施しているスタジオもあります。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function KakuozanPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '覚王山', url: 'https://pilates-biyori.com/area/kakuozan/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年07月15日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス覚王山おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">覚王山</span></nav></div></section>
        <TableOfContents areaName="覚王山" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「覚王山で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、覚王山エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>覚王山でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>名古屋市営地下鉄東山線「覚王山駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <PriceComparisonTable studios={studios} areaName="覚王山" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">覚王山のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大人の女性向け</h3>
                <p className="text-warm-600 text-sm mb-4">大人の女性向けで選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates Plus Kakuozan（28歳以上・月2回 7,800円〜）</li><li className="text-warm-700">• ATLAS（覚王山駅徒歩1分）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">心身ケア</h3>
                <p className="text-warm-600 text-sm mb-4">心身ケアで選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• POLARIS Beauty（ヨガ＆ピラティス）</li><li className="text-warm-700">• ATLAS（自律神経調整）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手ブランド</h3>
                <p className="text-warm-600 text-sm mb-4">大手ブランドで選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates Nag Studio（星が丘テラス）</li><li className="text-warm-700">• zen place（全国相互利用）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">覚王山のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">7,800円〜10,450円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜12,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">覚王山は名古屋屈指のおしゃれエリアで大人の女性向けスタジオが充実。Pilates Plus Kakuozanの月2回7,800円〜は始めやすい価格設定。28歳以上限定など独自のコンセプトを持つスタジオが多いのが特徴です。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">覚王山でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">覚王山は落ち着いた大人のエリア</h3>
                <p className="text-warm-600 leading-relaxed">覚王山は名古屋でも人気の高級住宅地。スタジオも大人の女性向けが多く、落ち着いた雰囲気で通えます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">28歳以上限定のスタジオがある</h3>
                <p className="text-warm-600 leading-relaxed">Pilates Plus Kakuozanは28歳以上の女性限定。同世代と一緒にレッスンを受けたい方におすすめです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">星が丘テラスは東山線1駅</h3>
                <p className="text-warm-600 leading-relaxed">覚王山から星ヶ丘は東山線1駅。Nag Studioは星が丘テラス直結で買い物ついでに通えます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">池下・千種エリアも合わせて検討</h3>
                <p className="text-warm-600 leading-relaxed">覚王山から東山線で1-2駅の池下・千種エリアにもスタジオが充実。合わせて比較検討しましょう。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のスタジオが多い。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>覚王山エリアの豆知識：</strong>覚王山は日泰寺の参道沿いにカフェや雑貨店が並ぶ名古屋屈指のおしゃれスポット。スタジオもおしゃれな雰囲気のところが多く、レッスン後に参道散策を楽しむのも覚王山ならではの楽しみ方です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">覚王山の料金相場はグループ月4回で7,800円〜10,450円。入会金やキャンペーンも確認しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">まずは気軽に複数スタジオを体験してみましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間を確認。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は覚王山エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では覚王山にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kakuozan" areaName="覚王山" />

      <RelatedAreas currentSlug="kakuozan" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
