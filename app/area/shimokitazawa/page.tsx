import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス下北沢おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '下北沢エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,下北沢,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 下北沢スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8, reviewCount: 175,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '下北沢駅から近くて通いやすい。マットもマシンも両方受けられる。AIによる姿勢分析で体の変化が分かりやすい。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '少人数制で丁寧な指導。全国150店舗以上で相互利用可能。下北沢のおしゃれな雰囲気が好き。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: 'マシングループ体験3,000円で手ぶらセット付き。体験当日入会で入会金無料なのがお得。' },
    ],
    price: 'マットグループ 月4回 9,625円〜', trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '下北沢駅近', 'AI姿勢分析', '男性OK'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。下北沢駅から徒歩圏内。有資格インストラクターが在籍し、AIによる姿勢分析で初心者も体の変化を実感しやすい。マットグループ、マシングループ、プライベートに対応。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区（下北沢駅徒歩圏内）',
    popularPlan: { name: 'リフォーマーグループ（月4回）', description: 'マシンを使ったグループレッスン。少人数制。', price: '月4回 15,400円（税込）〜' },
    options: ['マットグループ（月4回 9,625円〜）', 'リフォーマーグループ（月4回 15,400円〜）', 'フリープラン（月16,940円〜）', 'プライベート（1回 9,900円〜）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '月末不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'] },
  },
  {
    name: 'NATURAglam 下北沢スタジオ',
    image: '/images/pilates3.jpg',
    rating: 4.6, reviewCount: 140,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '月4回4,800円（税別）は驚きの安さ！マットピラティスで気軽に始められました。体験も1,000円でお得。' },
      { author: 'A.H', rating: 4, date: '2週間前', text: 'アットホームな雰囲気で初心者でも安心。7スタジオ相互利用可能なので都合に合わせて通える。' },
      { author: 'M.M', rating: 5, date: '3週間前', text: '1回1,073円〜はコスパ最強。下北沢・祐天寺・三軒茶屋など7スタジオどこでも追加料金なし。' },
    ],
    price: '月4回 4,800円〜（税別）', trial: '体験レッスン 1,000円',
    features: ['圧倒的低価格', '7スタジオ相互利用', 'マットピラティス', 'アットホーム'],
    description: '月4回4,800円（税別）という圧倒的な低価格でマットピラティスが楽しめるスタジオ。下北沢・祐天寺・三軒茶屋・中目黒・高円寺・戸越銀座・経堂の7スタジオを追加料金なしで利用可能。体験レッスン1,000円。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区（下北沢エリア）',
    popularPlan: { name: '月4回プラン', description: 'マットピラティス月4回。7スタジオ相互利用OK。', price: '月4回 4,800円（税別）' },
    options: ['月4回プラン（4,800円税別）', '7スタジオ相互利用（追加料金なし）', '体験レッスン（1,000円）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性90% / 男性10%', purpose: ['運動習慣づくり', '姿勢改善', 'コスパ重視', 'リラックス'] },
    basicInfo: { hours: 'スタジオにより異なる', closed: '不定休', facilities: ['マット', 'ロッカー'] },
  },
  {
    name: 'STUDIO IVY 下北沢店',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    price: '1回 6,250円〜', trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '下北沢駅近', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。下北沢駅から徒歩圏内。完全プライベート空間でオーダーメイドのプログラムを提供。月謝制で1レッスン6,250円〜。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区（下北沢エリア）',
  },
  {
    name: 'ピラティスミラー 下北沢',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    price: '月会費 11,000円（月6回まで）', trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '月6回定額', '下北沢エリア', 'プライベートあり'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。月6回11,000円、7回目以降は1回1,100円。プライベートレッスンも30分4,400円からとリーズナブル。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区（下北沢エリア）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！下北沢のスタジオは初心者歓迎。NATURAglamは月4回4,800円〜で気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめ。' },
  { question: '下北沢エリアの料金相場は？', answer: 'マットは月4回4,800円〜、マシングループは月4回9,625円〜15,400円。パーソナルは1回6,250円〜。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。' },
]

export default function ShimokitazawaPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス下北沢おすすめ4選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">下北沢</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「下北沢でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「おしゃれな街で楽しく通えるスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、下北沢エリアでおすすめのピラティススタジオ4選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>下北沢でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>安くてコスパの良いスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">下北沢のおすすめピラティススタジオ4選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ最強</h3><p className="text-warm-600 text-sm mb-4">月額5,000円以下から！</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• NATURAglam（月4回 4,800円〜）</li><li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li><li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマン指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO IVY（1回 6,250円〜）</li><li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li><li className="text-warm-700">• zen place（プライベート 9,900円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">マシンピラティス</h3><p className="text-warm-600 text-sm mb-4">本格マシンで効果的に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place（リフォーマーグループ）</li><li className="text-warm-700">• ピラティスミラー（マシン専門）</li><li className="text-warm-700">• STUDIO IVY（マシンパーソナル）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜5,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">マット</p><p className="text-sm text-warm-600 mb-4">圧倒的低価格のマットピラティス。</p><ul className="text-sm text-warm-700 space-y-1"><li>• NATURAglam（月4回 4,800円〜）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜16,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">マシン</p><p className="text-sm text-warm-600 mb-4">マシン完備のスタジオ。</p><ul className="text-sm text-warm-700 space-y-1"><li>• zen place（マット月4回 9,625円〜）</li><li>• ピラティスミラー（月6回 11,000円）</li><li>• zen place リフォーマー（15,400円〜）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3><p className="text-3xl font-bold text-warm-800 mb-4">効果◎</p><p className="text-sm text-warm-600 mb-4">マンツーマン指導。</p><ul className="text-sm text-warm-700 space-y-1"><li>• ピラティスミラー（30分 4,400円）</li><li>• STUDIO IVY（1回 6,250円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的に応じて選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">下北沢はマット月4回4,800円〜という最安クラスからマシンピラティスまで幅広い。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">500円〜1,000円で体験できるスタジオが多いです。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">下北沢は小田急線・京王井の頭線が利用でき、渋谷・新宿にもアクセス良好。古着屋やカフェ、ライブハウスが並ぶカルチャーの街で、レッスン前後の時間も楽しめます。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は下北沢のおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">下北沢はNATURAglamの月4回4,800円〜というコスパ最強スタジオから、zen placeやSTUDIO IVYの本格マシンピラティスまで多彩な選択肢があります。カルチャーの街ならではのおしゃれなスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うスタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン500円〜1,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
