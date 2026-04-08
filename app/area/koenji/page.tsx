import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス高円寺おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '高円寺エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,高円寺,杉並区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 高円寺店',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 115,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '世界最大級のブランドで15種類の器具を使った本格レッスン。最大12名のグループレッスンで1人1台マシン完備。無料の30分体験あり。' },
      { author: 'S.T', rating: 5, date: '2週間前', text: '4段階のレベル分けで初心者でも安心。男性会員も多い。8つのプログラムで飽きずに続けられる。高強度クラスもありダイエットにも最適。' },
      { author: 'R.N', rating: 4, date: '3週間前', text: 'インストラクター全員が500時間以上の研修を受けた資格保持者。有酸素運動を含むレッスンもあり多彩。' },
    ],
    price: '月4回 14,190円〜', trial: '体験レッスン 無料（30分）',
    features: ['世界最大級', '15種類の器具', '男性OK', '高強度クラスあり'],
    description: '世界最大級のマシンピラティスブランド。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備。8つのプログラムと4段階のレベル分け。高強度・有酸素運動クラスもあり。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'グループ月4回プラン', description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。', price: '月4回 14,190円（税込）' },
    options: ['月8回プラン（25,190円）', '通い放題プラン（28,490円）', 'プライベートレッスン（1回 9,900円〜）', '入会金 5,500円'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'ダイエット'] },
    basicInfo: { hours: '月〜金 7:00-21:00 / 土日 7:00-18:00', closed: '不定休', facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'] },
  },
  {
    name: 'Rintosull 高円寺店',
    image: '/images/pilates3.jpg',
    rating: 4.6, reviewCount: 92,
    reviews: [
      { author: 'K.N', rating: 5, date: '1週間前', text: '高円寺駅から徒歩1分！2026年1月オープンの新しいスタジオ。LAVA系列で安心。月4回8,800円とマシンピラティスでは破格の安さ。' },
      { author: 'Y.M', rating: 4, date: '2週間前', text: '無料体験でパーソナル姿勢診断もしてもらえた。女性専用で初心者が87%以上。リフォーマーを使った本格レッスン。' },
      { author: 'A.S', rating: 5, date: '3週間前', text: 'プレミアムフリーフルタイムでLAVA等系列のヨガスタジオも利用可能。ピラティスとヨガ両方やりたい人におすすめ。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', '高円寺駅徒歩1分', '2026年1月OPEN'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。2026年1月オープン。高円寺駅から徒歩1分。月4回8,800円のリーズナブルな料金。無料体験でパーソナル姿勢診断付き。',
    access: 'JR中央線・総武線「高円寺駅」徒歩1分',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マシンピラティス月4回プラン', description: 'リフォーマーを使った本格マシンピラティス。1回あたり2,200円のコスパ。', price: '月4回 8,800円（税込）' },
    options: ['通い放題プラン', 'プレミアムフリーフルタイム（LAVA等全店利用可）', '施設使用料あり', '無料体験・パーソナル姿勢診断付き'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'Pilates Mee 高円寺店',
    image: '/images/pilates4.jpg',
    rating: 4.8, reviewCount: 78,
    reviews: [
      { author: 'E.M', rating: 5, date: '1週間前', text: '最大3名のセミパーソナルで1レッスン1,250円〜の驚きの価格！パーソナルに近い指導をグループ価格で受けられる。女性専用で安心。' },
      { author: 'N.K', rating: 5, date: '2週間前', text: '当日予約・当日キャンセルOKが忙しい日でも助かる。チケット繰り越しもできて無駄にならない。高円寺エリアで一番コスパが良い。' },
      { author: 'H.Y', rating: 4, date: '3週間前', text: 'インストラクターが丁寧で初心者にも優しい。少人数なのでしっかりフォームを見てもらえます。' },
    ],
    price: '1回 1,250円〜', trial: '体験レッスンあり',
    features: ['女性専用', '最大3名', '1回1,250円〜', '当日予約OK'],
    description: '女性専用セミパーソナルマシンピラティススタジオ。最大3名の少人数制で1レッスン1,250円〜の高コスパ。当日予約・当日キャンセルOK。チケット繰り越し可能。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月額定額プラン', description: '最大3名のセミパーソナルマシンピラティス。1回あたり1,250円〜。', price: '月額制（公式サイト参照）' },
    options: ['当日予約・当日キャンセルOK', 'チケット繰り越し可能', '女性専用', 'セミパーソナル形式'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'] },
  },
  {
    name: 'NATURAglam 高円寺スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.5, reviewCount: 125,
    reviews: [
      { author: 'T.M', rating: 5, date: '1週間前', text: '高円寺駅から徒歩1分！女性専用でヨガ・ピラティス・ベリーダンスなど多彩なプログラム。月額制で高円寺エリア最安価格帯。' },
      { author: 'C.Y', rating: 4, date: '2週間前', text: 'マットピラティスが中心だけど種類が豊富で飽きない。グループレッスンでアットホームな雰囲気。' },
      { author: 'K.S', rating: 5, date: '3週間前', text: '月額制で通い放題。ヨガもダンスも楽しめるので気分に合わせて選べるのが嬉しい。' },
    ],
    price: '月額 4,400円〜', trial: '体験レッスンあり',
    features: ['女性専用', '高円寺駅徒歩1分', 'ヨガ&ダンスも', '最安価格帯'],
    description: '女性専用のヨガ・ピラティス・ダンススタジオ。高円寺駅から徒歩1分。マットピラティスを中心にヨガやベリーダンスなど多彩なプログラム。月額4,400円〜と高円寺エリア最安価格帯。',
    access: 'JR中央線・総武線「高円寺駅」徒歩1分',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月額通い放題プラン', description: 'ヨガ・ピラティス・ダンスの多彩なレッスンが受け放題。', price: '月額 4,400円〜（税込）' },
    options: ['マットピラティスクラス', 'ヨガクラス', 'ベリーダンスクラス', '月額制通い放題'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['柔軟性向上', '姿勢改善', 'リフレッシュ', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['マット', 'ヨガマット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'the SILK 高円寺エリア',
    image: '/images/pilates3.jpg',
    rating: 4.7, reviewCount: 135,
    reviews: [
      { author: 'A.K', rating: 5, date: '1週間前', text: '女性専用でおしゃれな内装。音楽に合わせたリフォーマーレッスンが楽しい。手ぶら無料体験で気軽に試せる。' },
      { author: 'Y.N', rating: 5, date: '2週間前', text: 'ウェア・タオル無料貸出やウォーターサーバーも完備。体験者の8割が未経験者。月3回12,980円〜。' },
      { author: 'M.H', rating: 4, date: '3週間前', text: '朝7:30から夜22:00まで営業。入会キャンペーンも充実。パウダールームもしっかり完備。' },
    ],
    price: '月3回 12,980円〜', trial: '体験レッスン 無料',
    features: ['女性専用', '手ぶら体験OK', '音楽レッスン', '朝7:30〜夜22:00'],
    description: '女性専用マシンピラティススタジオ。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。手ぶらで体験可能（ウェア・タオル無料貸出）。',
    access: 'JR中央線「高円寺駅」周辺（最寄り店舗は公式サイトでご確認ください）',
    address: '東京都杉並区（最寄り店舗は公式サイトでご確認ください）',
    popularPlan: { name: 'Standard4（月4回）', description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。', price: '月4回 15,070円（税込）' },
    options: ['Light3（月3回 12,980円）', 'Full（毎日1回 20,680円）', 'Full Day（18,480円）', '体験・入会金 無料キャンペーンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'] },
    basicInfo: { hours: '7:30〜22:00', closed: '年末年始', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！高円寺エリアのスタジオはほとんどが初心者歓迎。Rintosullは初心者87%以上、CLUB PILATESは4段階のレベル分け。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。' },
  { question: '高円寺のピラティスの料金相場は？', answer: 'NATURAglamは月額4,400円〜と格安。Rintosullは月4回8,800円。Pilates Meeは1回1,250円〜。グループ月4回で8,800円〜14,190円。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。CLUB PILATESは高強度クラスもありダイエットに効果的。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで無料体験。CLUB PILATESとRintosullも無料体験あり。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'CLUB PILATES高円寺は男性も通えます。Rintosull・Pilates Mee・NATURAglam・the SILKは女性専用。' },
  { question: '一番安いスタジオは？', answer: 'NATURAglamは月額4,400円〜（マットピラティス）。マシンピラティスではPilates Meeが1回1,250円〜、Rintosullが月4回8,800円。' },
  { question: 'ヨガもやりたい場合は？', answer: 'NATURAglamはヨガ・ベリーダンスも楽しめる。RintosullはプレミアムフリーフルタイムでホットヨガLAVA等も利用可能。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function KoenjiPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス高円寺おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">高円寺</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「高円寺で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、高円寺エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>高円寺でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">高円寺のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額4,400円〜のスタジオも。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• NATURAglam（月額 4,400円〜）</li><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• Pilates Mee（1回 1,250円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">マシン専門</h3><p className="text-warm-600 text-sm mb-4">リフォーマーで本格ピラティス。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• CLUB PILATES（15種類の器具）</li><li className="text-warm-700">• the SILK（音楽レッスン）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3><p className="text-warm-600 text-sm mb-4">高円寺駅から徒歩1分。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（駅徒歩1分）</li><li className="text-warm-700">• NATURAglam（駅徒歩1分）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜9,000円</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p><p className="text-sm text-warm-600 mb-4">驚きのコスパ。</p><ul className="text-sm text-warm-700 space-y-1"><li>• NATURAglam（4,400円〜/通い放題）</li><li>• Rintosull（8,800円/月4回）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3><p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p><p className="text-sm text-warm-600 mb-4">マシン専門スタジオ。</p><ul className="text-sm text-warm-700 space-y-1"><li>• the SILK（12,980円〜）</li><li>• CLUB PILATES（14,190円〜）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">1回 1,250円〜</h3><p className="text-3xl font-bold text-warm-800 mb-4">セミパーソナル</p><p className="text-sm text-warm-600 mb-4">少人数制で高コスパ。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Pilates Mee（1,250円〜/回）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">高円寺はマット月額4,400円〜、マシン月4回8,800円〜と幅広い価格帯。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">CLUB PILATESとRintosullは無料体験。the SILKも手ぶらで無料体験可能。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">高円寺はJR中央線・総武線が利用可能。Rintosull・NATURAglamは駅徒歩1分。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は高円寺エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では高円寺にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜2,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
