import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス神楽坂おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '神楽坂エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,神楽坂,飯田橋,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 神楽坂店',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 142,
    reviews: [
      { author: 'S.N', rating: 5, date: '1週間前', text: '神楽坂駅1A出口から徒歩30秒！世界最大級のブランドで設備が充実。リフォーマー・スプリングボード・TRXなど15種類の器具を使えるのは他にない体験。' },
      { author: 'Y.K', rating: 5, date: '2週間前', text: '無料の30分イントロクラスで雰囲気がわかります。4段階のレベル分けで初心者でも安心。男性会員も多い。' },
      { author: 'E.M', rating: 4, date: '3週間前', text: '8つのプログラムがあり飽きずに続けられます。インストラクター全員が500時間以上の教育を受けた資格保持者で指導の質が高い。' },
    ],
    price: '月4回 14,190円〜', trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '神楽坂駅徒歩30秒', '15種類の器具', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。神楽坂駅1A出口から徒歩30秒。最大12名の少人数制グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を1人1台完備。8つのプログラムと4段階のレベル分け。',
    access: '東京メトロ東西線「神楽坂駅」1A出口 徒歩30秒',
    address: '東京都新宿区神楽坂6-48 トモスビル 2F',
    popularPlan: { name: 'グループ月4回プラン', description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。', price: '月4回 14,190円（税込）' },
    options: ['月8回プラン（25,190円）', '通い放題プラン（28,490円）', 'プライベートレッスン（1回 9,900円〜）', '入会金 5,500円'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'] },
    basicInfo: { hours: '月〜金 7:00-21:00 / 土日 7:00-18:00', closed: '不定休', facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'] },
  },
  {
    name: 'zen place pilates 飯田橋スタジオ',
    image: '/images/pilates3.jpg',
    rating: 4.7, reviewCount: 198,
    reviews: [
      { author: 'K.S', rating: 5, date: '1週間前', text: '飯田橋駅B4b出口から徒歩1分、神楽坂からも徒歩圏内。マットもマシンも両方受けられるのが魅力。全国150店舗以上で相互利用可能。' },
      { author: 'M.T', rating: 4, date: '2週間前', text: '男性もOKで夫婦で通っています。朝7時からレッスンがあり出勤前に通える。グループ体験3,300円で体験当日入会すると入会金無料。' },
      { author: 'A.Y', rating: 5, date: '3週間前', text: '4路線使えるアクセスの良さが最高。ピラティス専門で20年以上の実績があり、インストラクターの質が高い。' },
    ],
    price: '月4回 10,450円〜', trial: 'グループ体験 3,300円',
    features: ['飯田橋駅徒歩1分', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。飯田橋駅B4b出口から徒歩1分、神楽坂エリアからも徒歩圏内。東西線・南北線・有楽町線・大江戸線の4路線利用可能。マットグループ・マシングループ・プライベートの3タイプ。',
    access: '東京メトロ「飯田橋駅」B4b出口 徒歩1分 / JR「飯田橋駅」西口 徒歩3分',
    address: '東京都新宿区揚場町1-1 揚場ビル 4F',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。', price: '月額 16,940円（税込）' },
    options: ['月4回プラン（10,450円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン（体験 9,900円）', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室', 'Wi-Fi'] },
  },
  {
    name: 'Pilates Mee 神楽坂・飯田橋店',
    image: '/images/pilates4.jpg',
    rating: 4.8, reviewCount: 95,
    reviews: [
      { author: 'C.M', rating: 5, date: '1週間前', text: '神楽坂駅から徒歩3分。最大3名のセミパーソナルで、1レッスン1,250円〜の驚きの価格。パーソナルに近い指導をグループ価格で受けられます。' },
      { author: 'R.K', rating: 5, date: '2週間前', text: '女性専用で安心。当日予約・当日キャンセルOKなのが忙しい日でも助かる。チケット繰り越しもできるので無駄にならない。' },
      { author: 'N.S', rating: 4, date: '3週間前', text: 'マシンピラティスがこの価格で受けられるのは神楽坂エリアで一番コスパが良い。インストラクターも丁寧で初心者にも優しい。' },
    ],
    price: '1回 1,250円〜', trial: '体験レッスンあり',
    features: ['女性専用', '最大3名', '1回1,250円〜', '当日予約OK'],
    description: '女性専用セミパーソナルマシンピラティススタジオ。神楽坂駅から徒歩3分、牛込神楽坂A3出口から徒歩2分。最大3名の少人数制で1レッスン1,250円〜の高コスパ。当日予約・当日キャンセルOK。チケット繰り越し可能。',
    access: '東京メトロ東西線「神楽坂駅」徒歩3分 / 都営大江戸線「牛込神楽坂駅」A3出口 徒歩2分',
    address: '東京都新宿区神楽坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月額定額プラン', description: '最大3名のセミパーソナルマシンピラティス。1回あたり1,250円〜。', price: '月額制（公式サイト参照）' },
    options: ['当日予約・当日キャンセルOK', 'チケット繰り越し可能', '女性専用', 'セミパーソナル形式'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Repilates 飯田橋神楽坂店',
    image: '/images/pilates2.jpg',
    rating: 4.6, reviewCount: 115,
    reviews: [
      { author: 'R.H', rating: 5, date: '1週間前', text: '飯田橋駅東口から徒歩1分の女性専用マシンピラティス。1レッスン3,300円〜と手頃な価格。少人数制で丁寧に指導してもらえます。' },
      { author: 'N.T', rating: 4, date: '2週間前', text: '朝7:30から夜21:00まで営業で通いやすい。女性専用なので安心。初心者でも楽しめるプログラムが充実。' },
      { author: 'M.S', rating: 5, date: '3週間前', text: 'マシン専門スタジオなのでリフォーマーの台数が多く予約が取りやすい。月額プランの選択肢も多い。' },
    ],
    price: '1回 3,300円〜', trial: '体験レッスンあり',
    features: ['女性専用', '飯田橋駅徒歩1分', '1回3,300円〜', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオ。飯田橋駅東口から徒歩1分、神楽坂エリアからもアクセス良好。少人数制グループレッスンで1回3,300円〜の手頃な料金設定。月3回・月4回・月8回・通い放題と豊富なプラン。',
    access: 'JR「飯田橋駅」東口 徒歩1分',
    address: '東京都新宿区下宮比町1-4 飯田橋御幸ビル B1F',
    popularPlan: { name: '月4回プラン', description: '女性専用マシンピラティス月4回。少人数制で丁寧な指導。', price: '月4回（公式サイト参照）' },
    options: ['月3回プラン', '月8回プラン', '通い放題プラン', '入会金 5,500円'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'] },
    basicInfo: { hours: '7:30〜21:00', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ルルト 飯田橋・神楽坂店',
    image: '/images/pilates3.jpg',
    rating: 4.8, reviewCount: 88,
    reviews: [
      { author: 'T.K', rating: 5, date: '1週間前', text: '理学療法士が指導してくれる完全マンツーマンのパーソナルスタジオ。体の状態を医学的に見てもらえるので安心感が違います。満足できなければ全額返金保証あり。' },
      { author: 'H.M', rating: 5, date: '2週間前', text: '体験1,000円（通常12,000円）で試せました。カウンセリングが丁寧で、自分の体の癖を詳しく教えてもらえます。' },
      { author: 'Y.A', rating: 4, date: '3週間前', text: '牛込神楽坂駅から徒歩5分。パーソナル専門なので周りを気にせず集中できる。月3回29,700円と高めだが効果は抜群。' },
    ],
    price: '月3回 29,700円〜', trial: '体験レッスン 1,000円（通常12,000円）',
    features: ['理学療法士指導', '完全マンツーマン', '全額返金保証', '体験1,000円'],
    description: '理学療法士が監修・指導する完全マンツーマンのパーソナルマシンピラティススタジオ。医学的根拠に基づいた指導で怪我予防やリハビリにも対応。体験1,000円、満足できなければ全額返金保証あり。',
    access: '都営大江戸線「牛込神楽坂駅」徒歩5分 / 東京メトロ「飯田橋駅」B1出口 徒歩6分',
    address: '東京都新宿区筑土八幡町5-12 相川ビル 2F',
    popularPlan: { name: '月4回コース', description: '理学療法士による完全マンツーマンのマシンピラティス。', price: '月4回 38,400円（税込）' },
    options: ['月3回コース（29,700円）', '月6回コース（55,800円）', '月8回コース（72,000円）', '入会金 22,000円（体験当日入会で無料）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', 'リハビリ', '怪我予防', 'パフォーマンス向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！神楽坂エリアのスタジオはほとんどが初心者歓迎。CLUB PILATESは4段階のレベル分け、Pilates Meeは最大3名の少人数制で丁寧に指導。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。神楽坂はマシン対応スタジオが充実。' },
  { question: '神楽坂エリアの料金相場は？', answer: 'セミパーソナルのPilates Meeは1回1,250円〜と格安。グループ月4回で10,450円〜14,190円程度。パーソナルはルルトが月3回29,700円〜。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。CLUB PILATESは無料イントロクラス、ルルトは体験1,000円で全額返金保証付き。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'CLUB PILATES神楽坂とzen place飯田橋は男性も通えます。Pilates MeeとRepilatesは女性専用です。' },
  { question: '一番コスパが良いスタジオは？', answer: 'Pilates Meeは1回1,250円〜と圧倒的なコスパ。最大3名のセミパーソナルで、パーソナルに近い指導を格安で受けられます。' },
  { question: '理学療法士の指導を受けられるスタジオは？', answer: 'ルルトは理学療法士が監修・指導するパーソナルスタジオ。医学的根拠に基づいた指導で、満足できなければ全額返金保証付き。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function KagurazakaPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス神楽坂おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">神楽坂</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「神楽坂で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、神楽坂・飯田橋エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>神楽坂・飯田橋でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">神楽坂のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">1回1,250円〜のスタジオも。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates Mee（1回 1,250円〜）</li><li className="text-warm-700">• zen place（月4回 10,450円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">理学療法士のマンツーマン。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ルルト（月3回 29,700円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3><p className="text-warm-600 text-sm mb-4">駅から徒歩1分以内。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• CLUB PILATES（神楽坂駅 徒歩30秒）</li><li className="text-warm-700">• zen place（飯田橋駅 徒歩1分）</li><li className="text-warm-700">• Repilates（飯田橋駅 徒歩1分）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜5,000円/回</h3><p className="text-3xl font-bold text-warm-800 mb-4">セミパーソナル</p><p className="text-sm text-warm-600 mb-4">少人数制で高コスパ。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Pilates Mee（1,250円〜/回）</li><li>• Repilates（3,300円〜/回）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">グループレッスン。</p><ul className="text-sm text-warm-700 space-y-1"><li>• zen place（10,450円〜）</li><li>• CLUB PILATES（14,190円〜）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 29,700円〜</h3><p className="text-3xl font-bold text-warm-800 mb-4">パーソナル月3回</p><p className="text-sm text-warm-600 mb-4">理学療法士の指導。</p><ul className="text-sm text-warm-700 space-y-1"><li>• ルルト（29,700円〜/月3回）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化、リハビリなど目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">神楽坂の料金相場はセミパーソナル1回1,250円〜、グループ月4回10,450円〜14,190円。入会金やキャンペーンも確認。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">CLUB PILATESは無料体験。ルルトは体験1,000円で全額返金保証付き。気軽に試してみましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">神楽坂エリアは東西線・南北線・有楽町線・大江戸線・JRが利用可能。CLUB PILATESは神楽坂駅徒歩30秒とアクセス抜群。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は神楽坂・飯田橋エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では神楽坂エリアにあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,300円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
