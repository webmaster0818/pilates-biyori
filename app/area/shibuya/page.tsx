import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス渋谷おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '渋谷エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,渋谷,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 渋谷',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 180,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '渋谷駅B1出口から徒歩2分で通いやすい。マットもマシンも両方受けられるのが嬉しい。' },
      { author: 'T.S', rating: 5, date: '2週間前', text: '男性もOKなので夫婦で通っています。インストラクターの質が高く、毎回新しい発見があります。' },
      { author: 'A.Y', rating: 4, date: '3週間前', text: '月4回10,450円は渋谷エリアではリーズナブル。体験500円で気軽に始められました。' },
    ],
    price: '月4回 10,450円〜', trial: '体験 500円〜',
    features: ['マット&マシン', '渋谷駅B1出口徒歩2分', '男性OK', '体験500円〜'],
    description: '全国100店舗以上を展開するzen placeの渋谷スタジオ。マットピラティスとマシンピラティスの両方が受けられる総合型スタジオ。渋谷駅B1出口から徒歩2分の好立地。男性も利用可能で、月4回10,450円〜とリーズナブル。体験レッスンは500円〜。',
    access: '渋谷駅B1出口 徒歩2分',
    address: '東京都渋谷区（渋谷駅B1出口徒歩2分）',
    popularPlan: { name: '月4回プラン', description: 'マット・マシン両対応。初心者から経験者まで。', price: '月4回 10,450円（税込）〜' },
    options: ['月4回プラン（10,450円〜）', '月6回プラン', 'フリー（通い放題）プラン', 'プライベートレッスン追加'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リラックス'] },
    basicInfo: { hours: '平日 7:00〜22:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['マットスタジオ', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'the SILK 渋谷店',
    image: '/images/pilates3.jpg',
    rating: 4.8, reviewCount: 150,
    reviews: [
      { author: 'R.H', rating: 5, date: '1週間前', text: '音楽に合わせてマシンピラティスができる新感覚スタジオ。楽しくトレーニングできます。' },
      { author: 'S.N', rating: 5, date: '2週間前', text: '女性専用なので安心。暗闇の中で音楽に没入しながらトレーニングできるのが最高。' },
      { author: 'Y.M', rating: 4, date: '3週間前', text: '体験無料で気軽にスタート。Standard4で月15,070円〜は妥当な価格。スタジオがおしゃれ。' },
    ],
    price: 'Standard4 15,070円〜', trial: '体験無料',
    features: ['女性専用', 'マシンピラティス専門', '音楽×マシン', '体験無料'],
    description: '音楽とマシンピラティスを融合した女性専用スタジオ。暗闇×音楽の非日常空間で楽しみながらボディメイク。リフォーマーを使用した本格マシンピラティスを提供。体験レッスン無料。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'Standard4プラン', description: '月4回のマシンピラティス。音楽×暗闇の非日常空間。', price: 'Standard4 15,070円（税込）〜' },
    options: ['Standard4（15,070円〜）', 'Standard8プラン', 'Premium（通い放題）プラン', '体験無料'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', 'ストレス発散', '美容'] },
    basicInfo: { hours: '平日 7:00〜22:00 / 土日祝 8:00〜20:00', closed: '不定休', facilities: ['リフォーマーマシン', 'パウダールーム', 'ロッカー', '更衣室'] },
  },
  {
    name: 'Rintosull 渋谷店',
    image: '/images/pilates4.jpg',
    rating: 4.6, reviewCount: 110,
    reviews: [
      { author: 'K.T', rating: 5, date: '2週間前', text: 'スクリーン映像とインストラクターのダブル指導で初心者でも安心。月4回9,800円はかなりお得。' },
      { author: 'E.O', rating: 4, date: '3週間前', text: '女性専用で清潔感があり、スタジオの雰囲気が良い。マシンピラティスが初めてでも丁寧に教えてもらえた。' },
      { author: 'N.I', rating: 4, date: '1ヶ月前', text: 'スクリーンを見ながらだとフォームが確認しやすい。インストラクターも補助してくれるので効果的。' },
    ],
    price: '月4回 9,800円〜', trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', 'スクリーン指導', '月4回9,800円〜'],
    description: '女性専用のマシンピラティススタジオ。大型スクリーンの映像とインストラクターのダブル指導で、正しいフォームを習得できる独自メソッド。月4回9,800円〜のリーズナブルな価格設定。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: 'スクリーン+インストラクターのダブル指導。', price: '月4回 9,800円（税込）〜' },
    options: ['月4回プラン（9,800円〜）', '月8回プラン', '通い放題プラン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '姿勢改善', 'ボディメイク', '運動不足解消'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['リフォーマーマシン', '大型スクリーン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ピラティスK 渋谷店',
    image: '/images/pilates2.jpg',
    rating: 4.5, reviewCount: 130,
    reviews: [
      { author: 'H.A', rating: 5, date: '1週間前', text: '女性専用のマシンピラティス。月4回13,420円で、予約も取りやすく続けやすい。' },
      { author: 'C.W', rating: 4, date: '2週間前', text: '体験2,000円で本格マシンピラティスを試せた。スタジオがきれいで通いたくなる雰囲気。' },
      { author: 'M.U', rating: 4, date: '1ヶ月前', text: 'ボディメイクに特化したプログラムが豊富。渋谷駅から近くて仕事帰りに通いやすい。' },
    ],
    price: '月4回 13,420円', trial: '体験 2,000円',
    features: ['女性専用', 'マシンピラティス専門', '月4回13,420円', '体験2,000円'],
    description: '女性専用のマシンピラティス専門スタジオ。全国展開の実績あるスタジオで、ボディメイクに特化したプログラムが豊富。月4回13,420円のシンプルな料金体系。体験レッスンは2,000円。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回メンバー', description: 'ボディメイク特化のマシンピラティス。', price: '月4回 13,420円（税込）' },
    options: ['月4回メンバー（13,420円）', '月8回メンバー', '通い放題メンバー', '体験レッスン（2,000円）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['リフォーマーマシン', 'パウダールーム', 'ロッカー', '更衣室'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！渋谷エリアのスタジオはレベル別クラスがあり初心者も安心です。Rintosullはスクリーン指導で初心者に特におすすめ。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用リフォーマーを使ったトレーニング。マシンは初心者でもフォームが安定しやすくおすすめです。' },
  { question: '渋谷エリアの料金相場は？', answer: 'グループ月4回で9,800円〜15,070円が相場。zen placeは10,450円〜、Rintosullは9,800円〜と比較的リーズナブルです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に増やすとより効果的です。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。ウェアレンタルがあるスタジオも多いです。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心です。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilates 渋谷は男性もOKです。the SILK、Rintosull、ピラティスKは女性専用です。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。週2回なら1ヶ月半ほどで変化を感じる方も。' },
  { question: '無料体験ができるスタジオはありますか？', answer: 'the SILK 渋谷店は体験無料です。zen placeは500円〜、ピラティスKは2,000円で体験できます。' },
]

export default function ShibuyaPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス渋谷おすすめ4選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">渋谷</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「渋谷でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「自分に合うスタジオを見つけたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、渋谷エリアでおすすめのピラティススタジオ4選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>渋谷でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>女性専用スタジオに通いたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較して選びたい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">渋谷のおすすめピラティススタジオ4選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後から。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 9,800円〜）</li><li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用で安心</h3><p className="text-warm-600 text-sm mb-4">女性だけの空間で集中。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• the SILK（音楽×マシン・体験無料）</li><li className="text-warm-700">• Rintosull（スクリーン指導）</li><li className="text-warm-700">• ピラティスK（ボディメイク特化）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">体験がお得</h3><p className="text-warm-600 text-sm mb-4">気軽にお試しできる。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• the SILK（体験無料）</li><li className="text-warm-700">• zen place pilates（体験500円〜）</li><li className="text-warm-700">• ピラティスK（体験2,000円）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">リーズナブル</p><p className="text-sm text-warm-600 mb-4">月4回で1万円以下も。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Rintosull（月4回 9,800円〜）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">スタンダード</p><p className="text-sm text-warm-600 mb-4">充実のマシンピラティス。</p><ul className="text-sm text-warm-700 space-y-1"><li>• zen place pilates（月4回 10,450円〜）</li><li>• ピラティスK（月4回 13,420円）</li><li>• the SILK（Standard4 15,070円〜）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">通い放題</h3><p className="text-3xl font-bold text-warm-800 mb-4">コスパ◎</p><p className="text-sm text-warm-600 mb-4">週2回以上通うならお得。</p><ul className="text-sm text-warm-700 space-y-1"><li>• 各スタジオに通い放題プランあり</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的に応じて選びましょう。ボディメイク重視ならピラティスK、楽しさ重視ならthe SILKがおすすめ。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">渋谷エリアのグループ月4回は9,800円〜15,070円が相場。体験レッスンを活用して、無理なく続けられる価格帯を見つけましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">the SILKは体験無料、zen placeは500円〜で気軽に試せます。複数のスタジオを体験して比較するのがおすすめ。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">渋谷はJR各線・東京メトロ各線・東急各線・京王井の頭線が利用可能な東京を代表するターミナル駅。仕事帰りや休日にもアクセスしやすいエリアです。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は渋谷のおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">渋谷はJR各線・東京メトロ各線・東急各線・京王井の頭線が利用可能な東京を代表するターミナル駅。駅B1出口徒歩2分のzen place pilates、音楽×マシンのthe SILK、月4回9,800円〜のRintosull、ボディメイク特化のピラティスKと、個性豊かなスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うスタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">the SILKは体験無料、zen placeは500円〜。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
