import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス天神おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '天神エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,天神,福岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 福岡天神店',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 150,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '天神駅からすぐ。女性専用で安心。音楽に合わせたレッスンが楽しくて続けられる。体験0円で始めやすい。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '部位別プログラムが充実。お腹・脚・ヒップなど目的に合わせてレッスンを選べるのが良い。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '天神の中心地にあってアクセス抜群。仕事帰りに通えるのが便利です。' },
    ],
    price: 'マンスリー4メンバー 13,420円〜', trial: '体験レッスン 0円',
    features: ['女性専用', '天神駅近', 'マシンピラティス専門', '体験0円'],
    description: '女性専用マシンピラティス専門スタジオ。天神駅・西鉄福岡駅・天神南駅からアクセス良好。音楽に合わせた独自プログラムで楽しくボディメイク。部位別プログラムが充実し、お腹・脚・ヒップなど目的に合わせて選べます。',
    access: '地下鉄空港線「天神駅」/ 西鉄「福岡(天神)駅」/ 地下鉄七隈線「天神南駅」',
    address: '福岡市中央区天神（天神駅周辺）',
    popularPlan: { name: 'マンスリー4メンバー', description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。', price: '月4回 13,420円（税込）' },
    options: ['マンスリー4メンバー（13,420円）', 'マンスリーフルメンバー', '追加受講料（2,200円/回）', '体験レッスン 0円'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', 'ストレス発散', '体幹強化'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['リフォーマーマシン', 'シャワー', 'ロッカー', 'パウダールーム'] },
  },
  {
    name: 'zen place pilates 福岡天神スタジオ',
    image: '/images/pilates3.jpg',
    rating: 4.8, reviewCount: 130,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: 'マットもマシンも両方受けられる。全国150店舗以上で相互利用可能。体験1,000円で気軽。' },
      { author: 'A.H', rating: 5, date: '2週間前', text: '男性もOKなので夫婦で通っています。少人数制で丁寧な指導。天神の便利な立地。' },
      { author: 'M.M', rating: 4, date: '3週間前', text: '1回約2,125円〜はコスパが良い。インストラクターの質が高い。' },
    ],
    price: 'マットグループ 月4回 9,625円〜', trial: '体験レッスン 1,000円〜',
    features: ['マット&マシン', '天神エリア', '男性OK', '全国相互利用'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。福岡天神に展開。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンに対応。全国の店舗で相互利用可能。',
    access: '地下鉄空港線「天神駅」徒歩圏内',
    address: '福岡市中央区天神（天神エリア）',
    popularPlan: { name: 'リフォーマーグループ（月4回）', description: 'マシンを使ったグループレッスン。少人数制。', price: '月4回 15,400円（税込）〜' },
    options: ['マットグループ（月4回 9,625円〜）', 'リフォーマーグループ（月4回 15,400円〜）', 'フリープラン（月16,940円〜）', 'プライベート（1回 9,900円〜）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '月末不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'] },
  },
  {
    name: 'Rintosull 天神店',
    image: '/images/pilates4.jpg',
    rating: 4.6,
    price: '月4回 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', '天神エリア', 'LAVA系列'],
    description: 'ホットヨガLAVAが手がけるマシンピラティススタジオ。天神エリアに展開。女性専用で月4回8,800円からのリーズナブルな料金設定。スクリーン+インストラクター指導で初心者も安心。',
    access: '地下鉄空港線「天神駅」徒歩圏内',
    address: '福岡市中央区天神（天神エリア）',
  },
  {
    name: 'ルルト 福岡天神店',
    image: '/images/pilates2.jpg',
    rating: 4.9,
    price: '月3回 29,700円〜', trial: '体験レッスン 1,000円',
    features: ['理学療法士監修', '完全マンツーマン', '天神エリア', '全額返金保証'],
    description: '理学療法士が監修・指導する完全マンツーマンのパーソナルマシンピラティススタジオ。福岡天神に展開。医学的根拠に基づいた指導で、怪我予防やリハビリにも対応。体験1,000円。',
    access: '地下鉄空港線「天神駅」徒歩圏内',
    address: '福岡市中央区天神（天神エリア）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！天神エリアのスタジオは初心者歓迎。ピラティスKは体験0円、Rintosullは初心者が87%以上です。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめ。' },
  { question: '天神エリアの料金相場は？', answer: 'グループ月4回で8,800円〜15,400円。パーソナルは月3回29,700円〜。体験は0円〜1,000円。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。ルルトは理学療法士監修で特におすすめ。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。' },
]

export default function TenjinPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス天神おすすめ4選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">天神</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「天神でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「コスパの良いスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、天神エリアでおすすめのピラティススタジオ4選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>天神でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">天神のおすすめピラティススタジオ4選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円以下から。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">理学療法士監修のマンツーマン。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ルルト（体験1,000円・全額返金保証）</li><li className="text-warm-700">• zen place（プライベートあり）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3><p className="text-warm-600 text-sm mb-4">女性だけの安心空間。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスK（体験0円）</li><li className="text-warm-700">• Rintosull（女性専用）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的に応じて選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回で8,800円〜15,400円が相場。パーソナルは月3回29,700円〜。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">0円〜1,000円で体験できるスタジオが多いです。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">天神は地下鉄空港線・七隈線、西鉄天神大牟田線が利用可能。福岡市の中心繁華街で、仕事帰りやショッピングのついでに通いやすいエリアです。</p></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は天神のおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">天神は地下鉄空港線・七隈線・西鉄が利用でき、福岡市の中心地。ピラティスK（体験0円）やRintosull（月4回8,800円〜）などコスパの良いスタジオから、ルルト（理学療法士監修）のパーソナルまで多彩な選択肢があります。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うスタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン0円〜1,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
