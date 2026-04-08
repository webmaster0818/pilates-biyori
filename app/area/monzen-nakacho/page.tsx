import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス門前仲町おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '門前仲町・清澄白河エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,門前仲町,清澄白河,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 門前仲町スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8, reviewCount: 175,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '門前仲町駅6番出口から徒歩2分。キッズルーム併設でお子さん連れでも安心！zen placeで唯一の子連れOKスタジオです。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '少人数制で丁寧に見てもらえます。balanced bodyのマシンが揃っていてレッスンの質が高い。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '全国150店舗以上で相互利用可能。体験500円で始めやすかったです。下町の雰囲気が好きです。' },
    ],
    price: 'マットグループ 月4回 9,625円〜', trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '門前仲町駅徒歩2分', 'キッズルーム完備', '男性OK'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。門前仲町駅6番出口から徒歩2分。zen placeで唯一キッズルームを併設しており、3歳以上のお子さんはピラティス中にキッズルームで待つことが可能。balanced bodyのマシンが各種揃った本格スタジオ。',
    access: '東西線・大江戸線「門前仲町駅」6番出口 徒歩2分',
    address: '東京都江東区門前仲町（門前仲町駅6番出口徒歩2分）',
    popularPlan: { name: 'リフォーマーグループ（月4回）', description: 'マシンを使ったグループレッスン。少人数制。', price: '月4回 15,400円（税込）〜' },
    options: ['マットグループ（月4回 9,625円〜）', 'リフォーマーグループ（月4回 15,400円〜）', 'フリープラン（月16,940円〜）', 'プライベート（1回 9,900円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', '子連れで通いたい', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '月末不定休', facilities: ['シャワー', 'ロッカー', 'キッズルーム', 'Wi-Fi'] },
  },
  {
    name: 'CLUB PILATES 清澄白河店',
    image: '/images/pilates3.jpg',
    rating: 4.7, reviewCount: 120,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '世界最大級のピラティスチェーン。グループでも最大12名で丁寧に見てもらえます。無料体験があって始めやすい。' },
      { author: 'A.H', rating: 4, date: '2週間前', text: '初心者から上級者までレベル分けされたクラスがあるので、自分に合ったレッスンが見つかります。' },
      { author: 'M.M', rating: 5, date: '3週間前', text: '清澄白河のおしゃれな街並みの中にあるスタジオ。レッスン後にカフェ巡りするのが楽しみです。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスン 無料',
    features: ['世界最大級チェーン', 'グループ&プライベート', '清澄白河エリア', '初心者歓迎'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。清澄白河に展開。最大12名のグループレッスンとマンツーマンのプライベートレッスンを提供。初心者から上級者までレベル分けされたクラスで安心。無料体験レッスンあり。',
    access: '半蔵門線・大江戸線「清澄白河駅」徒歩圏内 / 門前仲町からも近い',
    address: '東京都江東区（清澄白河エリア）',
    popularPlan: { name: 'グループレッスン', description: '最大12名のグループレッスン。レベル分けあり。', price: 'お問い合わせください' },
    options: ['グループレッスン', 'プライベートレッスン', '無料体験レッスン'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['ボディメイク', '姿勢改善', '体幹強化', '初めてのピラティス'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['リフォーマー', 'ロッカー', '更衣室'] },
  },
  {
    name: 'パーソナルマシンピラティスYUZU 門前仲町店',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['全員女性インストラクター', 'パーソナル専門', '門前仲町エリア', 'キッズスペース'],
    description: '全員女性インストラクターによるパーソナルマシンピラティス。門前仲町エリアに展開。キッズスペース完備でお子様連れでも安心。一人ひとりに合わせたオーダーメイドのレッスンを提供。',
    access: '東西線・大江戸線「門前仲町駅」徒歩圏内',
    address: '東京都江東区（門前仲町エリア）',
  },
  {
    name: 'スタジオプラス 清澄白河',
    image: '/images/pilates2.jpg',
    rating: 4.6,
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['マシンピラティス&エアリアルヨガ', '清澄白河・森下', 'おしゃれ空間', '多彩なプログラム'],
    description: 'マシンピラティスとエアリアルヨガができるユニークなスタジオ。清澄白河駅と森下駅の間に位置。カフェの3階にあるおしゃれな空間で、ピラティスだけでなくエアリアルヨガも楽しめます。',
    access: '半蔵門線「清澄白河駅」/ 都営新宿線・大江戸線「森下駅」徒歩圏内',
    address: '東京都江東区（清澄白河・森下エリア）',
  },
  {
    name: 'OLUTANA pilates',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    price: '月会費プランあり', trial: '体験レッスンあり',
    features: ['月会費&チケット制', 'マシンピラティス', '門前仲町周辺', 'わかりやすい料金'],
    description: '通いやすい月会費プランと都度使えるチケット制のわかりやすい料金設定が魅力のマシンピラティススタジオ。門前仲町周辺に展開。自分のライフスタイルに合った通い方を選べます。',
    access: '門前仲町・清澄白河エリア',
    address: '東京都江東区（門前仲町周辺）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！門前仲町エリアのスタジオは初心者歓迎。レベル分けされたクラスがあるスタジオも多いです。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめ。' },
  { question: '門前仲町エリアの料金相場は？', answer: 'グループ月4回で9,600円〜15,400円程度。パーソナルは1回8,000円〜10,000円。体験は無料〜500円のスタジオも。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '子連れでも通えますか？', answer: 'zen place pilates 門前仲町はキッズルーム完備（3歳以上）。YUZU門前仲町もキッズスペースありで子連れOKです。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心です。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。' },
]

export default function MonzenNakachoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス門前仲町おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">門前仲町</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「門前仲町・清澄白河でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「子連れでも通えるスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、門前仲町・清澄白河エリアでおすすめのピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>門前仲町・清澄白河でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>子連れでも通えるスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">門前仲町・清澄白河のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後から通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li><li className="text-warm-700">• CLUB PILATES（無料体験あり）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">子連れOK</h3><p className="text-warm-600 text-sm mb-4">キッズルーム・キッズスペース完備。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place 門前仲町（キッズルーム完備）</li><li className="text-warm-700">• YUZU 門前仲町（キッズスペースあり）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3><p className="text-warm-600 text-sm mb-4">門前仲町駅・清澄白河駅から徒歩すぐ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place（門前仲町駅徒歩2分）</li><li className="text-warm-700">• CLUB PILATES（清澄白河駅近）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的に応じて選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回で9,600円〜15,400円、パーソナルは1回8,000円〜が相場。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">無料〜500円で体験できるスタジオもあるので、気軽に試してみてください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">門前仲町は東西線・大江戸線、清澄白河は半蔵門線・大江戸線が利用可能。下町の落ち着いた雰囲気とおしゃれなカフェが共存するエリアで、レッスン後の散策も楽しめます。</p></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は門前仲町・清澄白河のおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">門前仲町はキッズルーム完備のzen placeがある子育て世代にも嬉しいエリア。清澄白河にはCLUB PILATESもあり、下町の落ち着いた雰囲気のなかでピラティスを楽しめます。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うスタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜500円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
