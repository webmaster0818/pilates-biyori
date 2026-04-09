import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス中野おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '中野エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,中野,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'PILATES STUDIO noa 中野スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 130,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '中野駅から徒歩4分。月4回11,000円はリーズナブル。通えなかった分は次月繰越できるのが嬉しい。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: 'リフォーマーを使った本格マシンピラティス。初心者から上級者までクラスが分かれていて安心。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '予約なしで全ジャンルのレッスンを自由に受けられるのが便利。中野の活気ある雰囲気も好き。' },
    ],
    price: '月4回 11,000円〜', trial: '体験レッスンあり',
    features: ['マシンピラティス専門', '中野駅徒歩4分', '繰越可能', '予約不要クラスあり'],
    description: 'マシンピラティス専門スタジオ。中野駅から徒歩4分。リフォーマーを使用した本格レッスン。月4回11,000円で、通えなかった分は無制限で次月繰越可能。初心者から上級者までレベル別クラスあり。',
    access: 'JR中央線・総武線・東西線「中野駅」徒歩4分',
    address: '東京都中野区（中野駅徒歩4分）',
    popularPlan: { name: '月4回プラン', description: 'マシンピラティス月4回。繰越可能。', price: '月4回 11,000円（税込）' },
    options: ['月4回プラン（11,000円）', '通い放題プラン', '繰越無制限', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性85% / 男性15%', purpose: ['ボディメイク', '姿勢改善', '体幹強化', '運動習慣'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'STUDIO IVY 中野店',
    image: '/images/pilates3.jpg',
    rating: 4.8, reviewCount: 95,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '完全プライベート空間でオーダーメイドレッスン。1回6,250円〜はパーソナルとしてはリーズナブル。' },
      { author: 'A.H', rating: 5, date: '2週間前', text: '姿勢改善に特化したプログラムで、3ヶ月で体の変化を実感。インストラクターの知識が豊富。' },
      { author: 'M.M', rating: 4, date: '3週間前', text: '中野で本格パーソナルマシンピラティスが受けられる貴重なスタジオ。月謝制で通いやすい。' },
    ],
    price: '1回 6,250円〜', trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '中野エリア', '月謝制'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。中野エリアに展開。完全プライベート空間でオーダーメイドのプログラムを提供。月謝制で1レッスン6,250円〜。',
    access: 'JR中央線・総武線・東西線「中野駅」徒歩圏内',
    address: '東京都中野区（中野エリア）',
    popularPlan: { name: '月4回コース', description: '完全パーソナル。1回あたり6,250円〜。', price: '月4回 25,000円〜（税込）' },
    options: ['月2回（15,000円〜）', '月4回（25,000円〜）', '月8回（48,000円〜）', '都度利用（8,800円）'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', 'ボディメイク', '肩こり腰痛改善', '体幹強化'] },
    basicInfo: { hours: '8:00〜21:00', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', '完全プライベート空間'] },
  },
  {
    name: 'Dee Pilates 中野店',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    price: '1回 6,600円〜', trial: '体験レッスンあり',
    features: ['パーソナル専門', '中野駅北口徒歩1分', 'マシンピラティス', '駅近'],
    description: 'パーソナル指導専門のマシンピラティススタジオ。中野駅北口から徒歩1分の抜群のアクセス。1回6,600円〜という通いやすい価格でマンツーマンレッスンが受けられます。',
    access: 'JR「中野駅」北口 徒歩1分',
    address: '東京都中野区（中野駅北口徒歩1分）',
  },
  {
    name: 'ELEMENT 中野店',
    image: '/images/pilates2.jpg',
    rating: 4.6,
    price: '1回 2,750円〜（通い放題）', trial: '体験レッスン 1,000円〜',
    features: ['通い放題', '1回30分', '中野駅徒歩9分', 'パーソナル'],
    description: '1回30分から通える通い放題型マシンピラティスジム。中野駅より徒歩9分。マンツーマン指導を月額制で、通い放題なら1回2,750円〜。ウェア・タオル・ドリンク・プロテイン無料。',
    access: 'JR「中野駅」徒歩9分',
    address: '東京都中野区（中野駅徒歩9分）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！中野エリアのスタジオはレベル別クラスがあり初心者も安心です。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめ。' },
  { question: '中野エリアの料金相場は？', answer: 'グループ月4回で11,000円程度。パーソナルは1回6,250円〜6,600円。通い放題で1回2,750円〜も。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。ELEMENTはウェア等無料レンタルあり。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。' },
]

export default function NakanoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス中野おすすめ4選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">中野</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「中野でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「コスパの良いスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、中野エリアでおすすめのピラティススタジオ4選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>中野でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">中野のおすすめピラティススタジオ4選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後から。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• noa（月4回 11,000円・繰越可）</li><li className="text-warm-700">• ELEMENT（通い放題1回 2,750円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマン指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO IVY（1回 6,250円〜）</li><li className="text-warm-700">• Dee Pilates（1回 6,600円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3><p className="text-warm-600 text-sm mb-4">中野駅から徒歩すぐ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Dee Pilates（中野駅北口徒歩1分）</li><li className="text-warm-700">• noa（中野駅徒歩4分）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">グループ</p><p className="text-sm text-warm-600 mb-4">リーズナブルなグループレッスン。</p><ul className="text-sm text-warm-700 space-y-1"><li>• noa（月4回 11,000円・繰越可）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル 月4回</h3><p className="text-3xl font-bold text-warm-800 mb-4">25,000円〜</p><p className="text-sm text-warm-600 mb-4">マンツーマンで効果を実感。</p><ul className="text-sm text-warm-700 space-y-1"><li>• STUDIO IVY（月4回 25,000円〜）</li><li>• Dee Pilates（1回 6,600円〜）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">通い放題</h3><p className="text-3xl font-bold text-warm-800 mb-4">コスパ◎</p><p className="text-sm text-warm-600 mb-4">週2回以上通うならお得。</p><ul className="text-sm text-warm-700 space-y-1"><li>• ELEMENT（1回 2,750円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的に応じて選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回で11,000円程度、パーソナルは1回6,250円〜が相場。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">1,000円〜で体験できるスタジオが多いので気軽に試してみてください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">中野はJR中央線・総武線・東西線が利用でき、新宿まで中央線快速で約5分。サブカルチャーの街として知られ、活気あふれる商店街やカフェも魅力です。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は中野のおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">中野はJR中央線で新宿まで約5分。月4回11,000円のnoa、駅北口徒歩1分のDee Pilates、パーソナル専門のSTUDIO IVY、通い放題のELEMENTと多彩なスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うスタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン1,000円〜。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
