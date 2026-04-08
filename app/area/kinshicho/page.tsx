import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス錦糸町おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '錦糸町エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,錦糸町,墨田区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 錦糸町スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 185,
    reviews: [
      { author: 'K.S', rating: 5, date: '1週間前', text: '錦糸町駅南口から徒歩4分。マットもマシンも両方受けられる。全国150店舗以上で相互利用可能で男性もOK。国道14号沿いでわかりやすい。' },
      { author: 'Y.M', rating: 4, date: '2週間前', text: 'グループ体験1,000円で気軽に試せた。半蔵門線からも徒歩4分でアクセス良好。インストラクターの質が高い。' },
      { author: 'A.T', rating: 5, date: '3週間前', text: '朝7時からレッスンがあり出勤前に通える。体験当日入会で入会金無料。ピラティス専門20年以上の実績で安心。' },
    ],
    price: '月4回 10,450円〜', trial: 'グループ体験 1,000円',
    features: ['錦糸町駅徒歩4分', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。錦糸町駅南口から徒歩4分、半蔵門線2番出口からも徒歩4分。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。',
    access: 'JR総武線「錦糸町駅」南口 徒歩4分 / 東京メトロ半蔵門線「錦糸町駅」2番出口 徒歩4分',
    address: '東京都墨田区錦糸町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。', price: '月額 16,940円（税込）' },
    options: ['月4回プラン（10,450円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン（体験 9,900円）', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ピラティスK オリナス錦糸町店',
    image: '/images/pilates3.jpg',
    rating: 4.6, reviewCount: 158,
    reviews: [
      { author: 'M.N', rating: 5, date: '1週間前', text: 'オリナス錦糸町内で買い物ついでにも便利。女性専用で音楽に合わせたリフォーマーレッスンが楽しい。5パート別ボディメイクプログラムが充実。' },
      { author: 'S.H', rating: 5, date: '2週間前', text: '月4回13,420円とコスパ良好。「30歳からの本気ボディメイク」がコンセプトで大人の女性にぴったり。' },
      { author: 'R.K', rating: 4, date: '3週間前', text: 'マシンピラティス専門でリフォーマーの台数が多く予約が取りやすい。初心者クラスも充実していて安心。' },
    ],
    price: '月4回 13,420円〜', trial: '体験レッスン 2,000円',
    features: ['女性専用', 'オリナス錦糸町内', '5パート別', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオ。オリナス錦糸町内に位置し、買い物ついでにも便利。「30歳からの本気ボディメイク」をコンセプトに、脚・お尻・お腹・二の腕・背中の5パート別プログラムが充実。',
    access: 'JR総武線・東京メトロ半蔵門線「錦糸町駅」周辺 オリナス錦糸町内',
    address: '東京都墨田区太平4-1-2 オリナス錦糸町内',
    popularPlan: { name: 'マンスリー4メンバー（月4回）', description: '女性専用マシンピラティス月4回。5パート別プログラムも選べる。', price: '月4回 13,420円（税込）' },
    options: ['マンスリーフルメンバー（通い放題 16,170円）', 'マンスリーデイメンバー（14,520円）', '追加受講（1回 2,200円）', '入会金 5,500円'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'] },
  },
  {
    name: 'the SILK 錦糸町店',
    image: '/images/pilates4.jpg',
    rating: 4.7, reviewCount: 142,
    reviews: [
      { author: 'E.Y', rating: 5, date: '1週間前', text: '女性専用でおしゃれな内装。音楽に合わせたリフォーマーレッスンが楽しい。手ぶら無料体験で気軽に試せました。' },
      { author: 'N.M', rating: 5, date: '2週間前', text: 'ウェア・タオル無料貸出やウォーターサーバーも完備。体験者の8割が未経験者。月3回12,980円〜。' },
      { author: 'T.K', rating: 4, date: '3週間前', text: '朝7:30から夜22:00まで営業で通いやすい。入会キャンペーンで3,980円/月の特別価格も。' },
    ],
    price: '月3回 12,980円〜', trial: '体験レッスン 無料',
    features: ['女性専用', '手ぶら体験OK', '音楽レッスン', '朝7:30〜夜22:00'],
    description: '女性専用マシンピラティススタジオ。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。手ぶらで体験可能。入会キャンペーンも充実。',
    access: 'JR総武線・東京メトロ半蔵門線「錦糸町駅」周辺',
    address: '東京都墨田区錦糸町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'Standard4（月4回）', description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。', price: '月4回 15,070円（税込）' },
    options: ['Light3（月3回 12,980円）', 'Full（毎日1回 20,680円）', 'Full Day（18,480円）', '体験・入会金 無料キャンペーンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'] },
    basicInfo: { hours: '7:30〜22:00', closed: '年末年始', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'] },
  },
  {
    name: 'Pilates & Gym 1to1 錦糸町店',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 88,
    reviews: [
      { author: 'C.M', rating: 5, date: '1週間前', text: '女性専用の完全個室パーソナルスタジオ。リフォーマーを使ったマシンピラティスと軽いトレーニングの組み合わせ。1回6,600円〜で入会金無料。' },
      { author: 'Y.N', rating: 5, date: '2週間前', text: '手ぶらで通える。食事プランの提案もしてもらえるので、ダイエット目的の方にぴったり。完全個室で人目を気にせず集中。' },
      { author: 'A.K', rating: 4, date: '3週間前', text: '全国17店舗展開の信頼あるブランド。パーソナルなので体の状態に合わせた効果的なプログラムが受けられます。' },
    ],
    price: 'パーソナル 1回 6,600円〜', trial: '体験レッスンあり',
    features: ['女性専用', '完全個室', '入会金無料', '食事プラン付き'],
    description: '女性専用の完全個室パーソナルスタジオ。リフォーマーを使ったマシンピラティスと軽いトレーニングの組み合わせ。全国17店舗展開。1回6,600円〜、入会金無料。食事プランの提案もあり。手ぶらで通える。',
    access: 'JR総武線・東京メトロ半蔵門線「錦糸町駅」周辺',
    address: '東京都墨田区錦糸町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: 'マシンピラティス＋トレーニングの完全個室パーソナル。', price: '1回 6,600円〜（税込）' },
    options: ['入会金無料', '食事プラン提案', '手ぶらで通える', '回数券プランあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'トレーニング機器', '完全個室', '更衣室'] },
  },
  {
    name: 'Pilates Studio B&B 錦糸町店',
    image: '/images/pilates3.jpg',
    rating: 4.6, reviewCount: 72,
    reviews: [
      { author: 'R.S', rating: 5, date: '1週間前', text: '少人数制のマシンピラティス専門スタジオ。リフォーマー・キャデラック・チェアなど本格マシンが揃っている。キッズスペースがあるので子連れも安心。' },
      { author: 'H.T', rating: 4, date: '2週間前', text: 'パーソナルレッスンで体の状態をしっかり見てもらえる。産前産後ケアのプログラムも充実。' },
      { author: 'M.K', rating: 5, date: '3週間前', text: 'インストラクターの指導が丁寧。一人ひとりに合わせたオーダーメイドプログラム。少人数制で安心。' },
    ],
    price: 'パーソナル 1回 8,250円〜', trial: '体験レッスンあり',
    features: ['キッズスペース', '少人数制', 'パーソナル充実', '産前産後ケア'],
    description: 'パーソナル・少人数制のマシンピラティス専門スタジオ。リフォーマー・キャデラック・チェアなど本格マシンを使ったオーダーメイドレッスン。キッズスペース完備で子連れOK。産前産後ケアプログラムも充実。',
    access: 'JR総武線・東京メトロ半蔵門線「錦糸町駅」周辺',
    address: '東京都墨田区錦糸町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: 'マシンを使った完全オーダーメイドのパーソナルレッスン。', price: '1回 8,250円〜（税込）' },
    options: ['回数券プランあり', 'グループレッスンあり', '産前産後ケアプログラム', 'キッズスペース利用無料'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性90% / 男性10%', purpose: ['産後ケア', '姿勢改善', 'ボディメイク', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', 'チェア', 'キッズスペース', '更衣室'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！錦糸町エリアのスタジオはほとんどが初心者歓迎。the SILKは体験者の約8割がピラティス未経験者、ピラティスKは初心者クラスが充実。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。錦糸町はマシン専門スタジオが充実。' },
  { question: '錦糸町のピラティスの料金相場は？', answer: 'グループ月4回で10,450円〜15,070円。zen placeが月4回10,450円〜。パーソナルは1to1が1回6,600円〜。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。1to1は食事プラン提案もあり。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで無料体験可能。1to1も手ぶらOK。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place錦糸町とPilates Studio B&Bは男性も通えます。the SILK・ピラティスK・1to1は女性専用。' },
  { question: '子連れで通えるスタジオは？', answer: 'Pilates Studio B&Bはキッズスペース完備で子連れOK。産前産後ケアプログラムも充実。' },
  { question: '無料で体験できるスタジオは？', answer: 'the SILKは手ぶらで無料体験可能。zen placeはグループ体験1,000円。ピラティスKは体験2,000円。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function KinshichoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス錦糸町おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">錦糸町</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「錦糸町で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、錦糸町エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>錦糸町でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">錦糸町のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円台で通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place（月4回 10,450円〜）</li><li className="text-warm-700">• the SILK（月3回 12,980円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで効果的に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• 1to1（1回 6,600円〜・入会金無料）</li><li className="text-warm-700">• B&B（1回 8,250円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">子連れOK</h3><p className="text-warm-600 text-sm mb-4">キッズスペースありのスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates Studio B&B（キッズスペース完備）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3><p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p><p className="text-sm text-warm-600 mb-4">グループレッスン中心。</p><ul className="text-sm text-warm-700 space-y-1"><li>• zen place（10,450円〜/月4回）</li><li>• the SILK（12,980円〜/月3回）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">マシン専門スタジオ。</p><ul className="text-sm text-warm-700 space-y-1"><li>• ピラティスK（13,420円〜）</li><li>• the SILK（15,070円/月4回）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 6,600円〜/回</h3><p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p><p className="text-sm text-warm-600 mb-4">完全オーダーメイド。</p><ul className="text-sm text-warm-700 space-y-1"><li>• 1to1（6,600円〜/回・入会金無料）</li><li>• B&B（8,250円〜/回）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、産後ケアなど目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">錦糸町の料金相場はグループ月4回で10,450円〜15,070円。パーソナルは1回6,600円〜。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">the SILKは無料体験。zen placeは1,000円、ピラティスKは2,000円で体験可能。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">錦糸町はJR総武線・半蔵門線の2路線利用可能。zen placeは駅南口徒歩4分、ピラティスKはオリナス内。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は錦糸町エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では錦糸町にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜2,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
