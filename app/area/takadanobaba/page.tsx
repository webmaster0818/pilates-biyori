import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス高田馬場おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '高田馬場エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,高田馬場,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 高田馬場スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8, reviewCount: 170,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '高田馬場駅から近くて通いやすい。マットもマシンも両方受けられるのが嬉しい。全国150店舗以上で相互利用可能なのも便利。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '少人数制で丁寧な指導。体験500円で気軽に始められました。学生が多いエリアですが、スタジオは落ち着いた雰囲気。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '男性もOKなので夫婦で通えます。出張先でも別店舗を利用できるのが便利。' },
    ],
    price: 'マットグループ 月4回 9,625円〜', trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '高田馬場駅近', '男性OK', '全国相互利用'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。高田馬場駅から徒歩圏内。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンに対応。全国の店舗で相互利用可能。',
    access: 'JR・西武新宿線・東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: { name: 'リフォーマーグループ（月4回）', description: 'マシンを使ったグループレッスン。少人数制。', price: '月4回 15,400円（税込）〜' },
    options: ['マットグループ（月4回 9,625円〜）', 'リフォーマーグループ（月4回 15,400円〜）', 'フリープラン（月16,940円〜）', 'プライベート（1回 9,900円〜）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '月末不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'] },
  },
  {
    name: 'the SILK 高田馬場店',
    image: '/images/pilates3.jpg',
    rating: 4.7, reviewCount: 130,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '女性専用で安心。体験レッスンが無料なので気軽に始められました。音楽に合わせたレッスンが楽しい。' },
      { author: 'A.H', rating: 5, date: '2週間前', text: '1回約3,768円はこのエリアではコスパが良い。スタジオがおしゃれでモチベーションが上がります。' },
      { author: 'M.M', rating: 4, date: '3週間前', text: '仕事帰りに高田馬場で通えるのが便利。女性専用なので周りを気にせず集中できます。' },
    ],
    price: 'Standard4 15,070円〜', trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', '高田馬場エリア', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。高田馬場エリアに展開。音楽に合わせた独自プログラムで楽しくトレーニング。無料体験レッスン実施中。1回約3,768円からのリーズナブルな料金。',
    access: 'JR・西武新宿線・東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場エリア）',
    popularPlan: { name: 'Standard4（月4回）', description: '女性専用マシンピラティスの基本プラン。', price: '月4回 15,070円（税込）〜' },
    options: ['Standard4（月4回 15,070円〜）', 'Full（通い放題）', 'Full Day（デイタイム通い放題）', '体験レッスン無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'] },
    basicInfo: { hours: '7:30〜21:00', closed: '年末年始', facilities: ['シャワー', 'ロッカー', 'パウダールーム', '女性専用'] },
  },
  {
    name: 'Rintosull 高田馬場店',
    image: '/images/pilates4.jpg',
    rating: 4.6,
    price: '月4回 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', '高田馬場エリア', 'コスパ抜群'],
    description: '女性専用のマシンピラティススタジオ。リフォーマーマシンを使用したピラティスで、効率よく体幹を鍛えられます。月4回8,800円からのコスパの良い料金設定。初心者が87%以上で安心。',
    access: 'JR・西武新宿線・東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場エリア）',
  },
  {
    name: 'STUDIO IVY 高田馬場店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    price: '1回 6,250円〜', trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '高田馬場駅近', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。高田馬場駅から徒歩圏内。月謝制で1レッスン6,250円〜とパーソナルとしてはリーズナブル。完全プライベート空間でオーダーメイドのプログラムを提供。',
    access: 'JR・西武新宿線・東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場エリア）',
  },
  {
    name: 'SAKURA 高田馬場・西早稲田店',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    price: '1回 7,975円〜', trial: '体験レッスンあり',
    features: ['女性専用', 'パーソナル専門', '高田馬場・西早稲田', '女性インストラクター'],
    description: '女性専用のパーソナルマシンピラティススタジオ。高田馬場・西早稲田エリアに展開。インストラクターも全員女性。部位別のボディメイクや姿勢改善などのプログラムが充実。リーズナブルな料金で継続しやすい。',
    access: '副都心線「西早稲田駅」/ JR「高田馬場駅」徒歩圏内',
    address: '東京都新宿区（高田馬場・西早稲田エリア）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！高田馬場エリアのスタジオは初心者が87%以上のスタジオもあり、安心して始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめ。' },
  { question: '高田馬場エリアの料金相場は？', answer: 'グループ月4回で8,800円〜15,400円程度。パーソナルは1回6,250円〜。体験は無料〜500円のスタジオも。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心です。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。' },
]

export default function TakadanobabaPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス高田馬場おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">高田馬場</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「高田馬場でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「コスパの良いスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、高田馬場エリアでおすすめのピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>高田馬場でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">高田馬場のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円以下から。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマン指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO IVY（1回6,250円〜）</li><li className="text-warm-700">• SAKURA（女性専用パーソナル）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3><p className="text-warm-600 text-sm mb-4">女性だけの安心空間。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• the SILK（体験無料）</li><li className="text-warm-700">• Rintosull（女性専用）</li><li className="text-warm-700">• SAKURA（女性専用パーソナル）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">グループ</p><p className="text-sm text-warm-600 mb-4">コスパ抜群のグループレッスン。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Rintosull（月4回 8,800円〜）</li><li>• zen place（マット月4回 9,625円〜）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜16,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">マシン完備の充実レッスン。</p><ul className="text-sm text-warm-700 space-y-1"><li>• the SILK（月4回 15,070円〜）</li><li>• zen place リフォーマー（15,400円〜）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 25,000円〜/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p><p className="text-sm text-warm-600 mb-4">プライベートレッスン。</p><ul className="text-sm text-warm-700 space-y-1"><li>• STUDIO IVY（1回 6,250円〜）</li><li>• SAKURA（1回 7,975円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的に応じて選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回で8,800円〜15,400円、パーソナルは1回6,250円〜が相場。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">無料〜500円で体験できるスタジオが多いので、気軽に試してください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">高田馬場はJR山手線・西武新宿線・東西線の3路線が利用可能。新宿・池袋へもアクセスしやすく、学生街ならではの活気あるエリアです。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は高田馬場のおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">高田馬場はJR・西武線・東西線の3路線が使え、月4回8,800円からのコスパ抜群スタジオから女性専用パーソナルまで多彩な選択肢があります。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うスタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜500円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
