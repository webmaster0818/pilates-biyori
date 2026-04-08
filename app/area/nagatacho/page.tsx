import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス永田町・赤坂見附おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '永田町・赤坂見附・赤坂エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,永田町,赤坂見附,赤坂,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 赤坂スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8, reviewCount: 160,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '赤坂見附駅から徒歩3分で永田町からもすぐ。2023年にオープンした新しいスタジオで設備がきれい。マットもマシンも両方あり。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '少人数制で丁寧な指導。全国150店舗以上で相互利用可能なので出張時にも便利です。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '永田町・溜池山王からも歩ける距離。仕事帰りに通いやすいです。体験500円で気軽。' },
    ],
    price: 'マットグループ 月4回 9,625円〜', trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '赤坂見附駅徒歩3分', '男性OK', '2023年OPEN'],
    description: '2023年11月オープンの本格ピラティス専門スタジオ。赤坂見附駅から徒歩3分、永田町・溜池山王からも徒歩圏内。マットグループ、マシングループ、プライベートレッスンに対応。全国150店舗以上で相互利用可能。',
    access: '銀座線・丸ノ内線「赤坂見附駅」徒歩3分 / 半蔵門線・有楽町線・南北線「永田町駅」徒歩圏内',
    address: '東京都港区赤坂（赤坂見附駅徒歩3分）',
    popularPlan: { name: 'リフォーマーグループ（月4回）', description: 'マシンを使ったグループレッスン。少人数制で丁寧な指導。', price: '月4回 15,400円（税込）〜' },
    options: ['マットグループ（月4回 9,625円〜）', 'リフォーマーグループ（月4回 15,400円〜）', 'フリープラン（月16,940円〜）', 'プライベート（1回 9,900円〜）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '月末不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'] },
  },
  {
    name: 'the SILK 赤坂見附店',
    image: '/images/pilates3.jpg',
    rating: 4.7, reviewCount: 140,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '赤坂見附駅から徒歩1分！女性専用で安心。音楽に合わせたレッスンが楽しくて毎回あっという間。' },
      { author: 'A.H', rating: 5, date: '2週間前', text: '永田町で働いているので仕事帰りに通っています。無料体験で雰囲気を確認してから入会しました。' },
      { author: 'M.M', rating: 4, date: '3週間前', text: 'ライト3プラン12,980円から始められるのがお手頃。パーソナルも受けられるのが良い。' },
    ],
    price: 'ライト3 12,980円〜', trial: '体験レッスン 無料',
    features: ['女性専用', '赤坂見附駅徒歩1分', 'マシンピラティス専門', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。赤坂見附駅から徒歩1分の好立地。永田町駅からも徒歩圏内。グループからパーソナルまで対応。音楽に合わせた独自プログラムで楽しくトレーニング。',
    access: '銀座線・丸ノ内線「赤坂見附駅」徒歩1分 / 永田町駅からも徒歩圏内',
    address: '東京都港区赤坂（赤坂見附駅徒歩1分）',
    popularPlan: { name: 'Standard4（月4回）', description: '女性専用マシンピラティスの基本プラン。', price: '月4回 15,070円（税込）' },
    options: ['ライト3（月3回 12,980円）', 'Standard4（月4回 15,070円）', 'Full（通い放題 20,680円）', 'パーソナル プライベート2（19,800円）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'] },
    basicInfo: { hours: '7:30〜21:00', closed: '年末年始', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'] },
  },
  {
    name: 'ピラティススタジオnoa 赤坂',
    image: '/images/pilates4.jpg',
    rating: 4.6,
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['予約不要', '赤坂駅徒歩30秒', '全ジャンル自由', 'マシン専門'],
    description: 'マシンピラティス専門スタジオ。赤坂駅1番出口から徒歩30秒の圧倒的アクセス。赤坂見附駅・溜池山王駅からも徒歩7分。予約なしで全ジャンルのレッスンを自由に受けられる自由度の高さが魅力。',
    access: '千代田線「赤坂駅」1番出口 徒歩30秒 / 銀座線「赤坂見附駅」徒歩7分 / 南北線「溜池山王駅」徒歩7分',
    address: '東京都港区赤坂（赤坂駅1番出口徒歩30秒）',
  },
  {
    name: 'Studio-BMP 赤坂店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    price: 'パーソナル体験 6,600円〜', trial: '体験レッスン 6,600円（50分）',
    features: ['ボディメイク×ピラティス', 'パーソナル', '赤坂エリア', '美容矯正あり'],
    description: 'ボディメイクとピラティスを融合させたオリジナルメソッドが特徴。パーソナルとグループ両方に対応。ピラティスだけでなく美容矯正や小顔矯正も受けられるユニークなスタジオ。',
    access: '赤坂エリア / 永田町・赤坂見附から徒歩圏内',
    address: '東京都港区赤坂（赤坂エリア）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！永田町・赤坂エリアのスタジオは初心者歓迎。経験豊富なインストラクターが基礎から丁寧に指導してくれます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめです。' },
  { question: '永田町エリアの料金相場は？', answer: 'グループ月3〜4回で9,600円〜15,400円程度。パーソナルは1回6,600円〜10,000円。体験は無料〜6,600円です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。継続が大切です。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心です。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。' },
]

export default function NagatachoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス永田町・赤坂見附おすすめ4選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">永田町</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「永田町・赤坂見附でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「仕事帰りに通えるスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、永田町・赤坂見附・赤坂エリアでおすすめのピラティススタジオ4選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>永田町・赤坂見附でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>仕事帰りに通えるスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">永田町・赤坂見附のおすすめピラティススタジオ4選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後から通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li><li className="text-warm-700">• the SILK（ライト3 12,980円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマン指導で効果を最大化。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Studio-BMP（ボディメイク×ピラティス）</li><li className="text-warm-700">• zen place（プライベート 9,900円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3><p className="text-warm-600 text-sm mb-4">駅から徒歩すぐのスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• noa 赤坂（赤坂駅徒歩30秒）</li><li className="text-warm-700">• the SILK（赤坂見附駅徒歩1分）</li><li className="text-warm-700">• zen place（赤坂見附駅徒歩3分）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化が期待。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的に応じてスタジオを選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月3〜4回で9,600円〜15,400円、パーソナルは1回6,600円〜が相場。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">無料〜6,600円で体験できるスタジオが多いので、まずは試してみてください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">永田町は半蔵門線・有楽町線・南北線、赤坂見附は銀座線・丸ノ内線が利用可能。政治の中心地でありながらオフィスも多く、仕事帰りに通いやすいエリアです。</p></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は永田町・赤坂見附エリアのおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">永田町・赤坂見附は多くの路線が集まる交通至便なエリア。赤坂駅徒歩30秒のnoaから、赤坂見附駅徒歩1分のthe SILKまで、駅近スタジオが充実しています。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜6,600円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
