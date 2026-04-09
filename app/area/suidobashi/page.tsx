import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス水道橋・後楽園おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '水道橋・後楽園エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,水道橋,後楽園,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスミラー 後楽園',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 130,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '後楽園駅から徒歩2分で通いやすい。天井に鏡があるので自分のフォームを確認しながらレッスンできるのが良い。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '月6回11,000円でコスパ最高。7回目以降も1,100円で追加できるので実質通い放題に近い。コナミ運営で安心感もあります。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '30分のレッスンが中心なので時間がない方にもぴったり。水道橋からも歩ける距離です。' },
    ],
    price: '月会費 11,000円（月6回まで）', trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '後楽園駅徒歩2分', '月6回定額', '天井鏡設計'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。後楽園駅5番口から徒歩2分。天井に鏡を設置した特徴的な設計で、自分のフォームを確認しながらレッスンできます。月6回11,000円、7回目以降は1回1,100円で追加利用可能。',
    access: '丸ノ内線・南北線「後楽園駅」5番口 徒歩2分 / JR「水道橋駅」徒歩圏内',
    address: '東京都文京区（後楽園駅5番口徒歩2分）',
    popularPlan: { name: '月会費プラン（月6回）', description: '月6回まで定額。7回目以降は1回1,100円で追加OK。', price: '月会費 11,000円（税込）' },
    options: ['月会費（月6回まで 11,000円）', '追加利用（1回 1,100円）', 'プライベート30分（4,400円）', 'プライベート50分（6,600円）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['ボディメイク', '姿勢改善', 'コスパ重視', '短時間トレーニング'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土 8:00〜18:00 / 日 8:00〜19:00', closed: '毎週木曜日', facilities: ['ロッカー', 'マシン完備', '天井鏡'] },
  },
  {
    name: 'STUDIO IVY 後楽園店',
    image: '/images/pilates3.jpg',
    rating: 4.8, reviewCount: 90,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '完全パーソナルで自分のペースで集中できます。後楽園駅から近くて通いやすい。1回6,250円〜はパーソナルとしてはリーズナブル。' },
      { author: 'A.H', rating: 5, date: '2週間前', text: 'オーダーメイドのプログラムで身体の変化を実感。インストラクターの知識が豊富で信頼できます。' },
      { author: 'M.M', rating: 4, date: '3週間前', text: '水道橋で働いているので仕事帰りに通っています。体験で丁寧にカウンセリングしてもらえました。' },
    ],
    price: '1回 6,250円〜', trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '後楽園駅近', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。後楽園・水道橋駅から徒歩圏内。一人ひとりの体型や目標に合わせたオーダーメイドのトレーニングを提供。月謝制で1レッスン6,250円〜。',
    access: '丸ノ内線・南北線「後楽園駅」徒歩圏内 / JR「水道橋駅」徒歩圏内',
    address: '東京都文京区（後楽園・水道橋エリア）',
    popularPlan: { name: '月4回コース', description: '完全パーソナルのマシンピラティス。1回あたり6,250円〜。', price: '月4回 25,000円〜（税込）' },
    options: ['月2回コース（15,000円〜）', '月4回コース（25,000円〜）', '月8回コース（48,000円〜）', '都度利用（8,800円）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', 'ボディメイク', '肩こり腰痛改善', '体幹強化'] },
    basicInfo: { hours: '8:00〜21:00', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', '完全プライベート空間'] },
  },
  {
    name: 'zen place pilates 飯田橋スタジオ',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    price: 'マットグループ 月4回 9,625円〜', trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '飯田橋駅徒歩1分', '水道橋から1駅', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。飯田橋駅B4b出口から徒歩1分。水道橋からJR総武線で1駅の好アクセス。マットグループ、マシングループ、プライベートレッスンに対応。',
    access: '地下鉄「飯田橋駅」B4b出口 徒歩1分 / 水道橋からJR総武線で1駅',
    address: '東京都新宿区（飯田橋駅B4b出口徒歩1分）',
  },
  {
    name: 'URBAN CLASSIC PILATES 飯田橋店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    price: '月額 7,800円〜（通い放題 14,080円）', trial: '体験レッスン 3,800円',
    features: ['予約不要', '30分サーキット', '飯田橋駅近', '水道橋から1駅'],
    description: 'マシンピラティスとファンクショナルトレーニングのサーキット形式。予約不要・1回30分の短時間設計。飯田橋駅徒歩圏内、水道橋からも1駅。忙しい方でも気軽に続けられます。',
    access: '「飯田橋駅」徒歩圏内 / 水道橋からJR総武線で1駅',
    address: '東京都新宿区（飯田橋駅徒歩圏内）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！水道橋・後楽園エリアのスタジオは初心者歓迎。基礎から丁寧に指導してくれます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめです。' },
  { question: '水道橋エリアの料金相場は？', answer: 'グループ月4〜6回で9,600円〜15,400円程度。パーソナルは1回6,250円〜。体験は500円〜2,200円です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心です。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。' },
]

export default function SuidobashiPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス水道橋・後楽園おすすめ4選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">水道橋</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「水道橋・後楽園でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「コスパの良いスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、水道橋・後楽園エリアでおすすめのピラティススタジオ4選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>水道橋・後楽園でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">水道橋・後楽園のおすすめピラティススタジオ4選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後から通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• URBAN CLASSIC（月額7,800円〜）</li><li className="text-warm-700">• zen place 飯田橋（マット月4回 9,625円〜）</li><li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマン指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO IVY（1回6,250円〜）</li><li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3><p className="text-warm-600 text-sm mb-4">後楽園駅・水道橋駅から徒歩すぐ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスミラー（後楽園駅徒歩2分）</li><li className="text-warm-700">• STUDIO IVY（後楽園駅近）</li><li className="text-warm-700">• zen place（飯田橋駅徒歩1分）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化が期待。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的に応じてスタジオを選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4〜6回で7,800円〜15,400円、パーソナルは1回6,250円〜が相場。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">500円〜3,800円で体験できるスタジオが多いので、気軽に試してみてください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">水道橋はJR総武線・中央線、三田線が利用可能。後楽園は丸ノ内線・南北線が使え、飯田橋も隣駅。東京ドームや大学が集まる学生街で、活気のあるエリアです。</p></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は水道橋・後楽園のおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">水道橋・後楽園は飯田橋も隣駅で、コスパの良いピラティスミラーからパーソナル専門のSTUDIO IVYまで選べるスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン500円〜3,800円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
