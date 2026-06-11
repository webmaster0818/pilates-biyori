import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'



export const metadata = {
  title: '【2026最新】ピラティス吹田おすすめ6選！人気スタジオの料金プランを簡単比較！',
  description: '吹田市エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。江坂・千里丘エリアで初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,吹田,江坂,千里丘,吹田市,大阪,北摂,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 江坂スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7, reviewCount: 156,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '江坂駅から徒歩1分で通いやすい。マットもマシンも両方受けられるのが魅力。全国150店舗以上で相互利用可能なので出張時にも便利。' },
      { author: 'S.T', rating: 5, date: '2週間前', text: 'インストラクターの質が高く丁寧な指導。初回体験1,000円で気軽に試せました。グループレッスンの種類も豊富です。' },
      { author: 'R.N', rating: 4, date: '3週間前', text: '北摂エリアの玄関口・江坂にあるので梅田方面からもアクセス良好。男性もOKなので夫婦で通っています。' },
    ],
    price: '月4回 9,625円〜', trial: 'グループ体験 1,000円',
    features: ['江坂駅徒歩1分', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。江坂駅から徒歩1分の好立地。マットグループ・マシングループ・プライベートの3タイプから選べます。全国150店舗以上で相互利用可能。正統派ピラティスをベースにした質の高い指導が特徴。',
    access: '大阪メトロ御堂筋線「江坂駅」徒歩1分',
    address: '大阪府吹田市江坂町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。', price: '月額 14,960円〜（税込）' },
    options: ['月4回プラン（9,625円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '月〜金 10:00〜20:00 / 土日祝 10:00〜16:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'La pilates（ラピラティス）江坂店',
    image: '/images/studios/la-pilates.webp',
    rating: 4.8, reviewCount: 92,
    reviews: [
      { author: 'A.Y', rating: 5, date: '1週間前', text: '整体×マシンピラティスの融合で初回から効果を実感！女性専用で落ち着いた空間。姿勢改善に特化したWメソッドが画期的です。' },
      { author: 'K.S', rating: 5, date: '2週間前', text: '江坂駅から徒歩2分で通いやすい。パーソナル形式なので自分のペースで進められます。スタッフの方がとても親切。' },
      { author: 'N.M', rating: 4, date: '3週間前', text: '整体で体を整えてからピラティスで鍛えるので効率的。肩こりや腰痛が劇的に改善しました。' },
    ],
    price: 'パーソナル 1回 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用', '整体×ピラティス', 'パーソナル専門', '江坂駅徒歩2分'],
    description: '整体×マシンピラティスを融合した女性専用プライベートスタジオ。江坂駅から徒歩2分。姿勢改善に特化したWメソッドで、整体で体を整えてからピラティスで鍛える効率的なアプローチ。リラックスできる空間設計が特徴。',
    access: '大阪メトロ御堂筋線「江坂駅」徒歩2分',
    address: '大阪府吹田市江坂町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '整体×マシンピラティスのWメソッド。女性専用完全個室。', price: '1回 8,800円〜（税込）' },
    options: ['回数券プランあり', '月額プランあり', '体験レッスンあり', '整体単体も可能'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', '肩こり・腰痛改善', 'ボディメイク', 'リフレッシュ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '整体ベッド', '完全個室', '更衣室'] },
  },
  {
    name: 'ピラティス コアセンス 千里丘',
    image: '/images/studios/pilates-kasane.webp',
    rating: 4.6, reviewCount: 78,
    reviews: [
      { author: 'Y.K', rating: 5, date: '1週間前', text: '2025年リニューアルオープンしたばかりで設備がきれい。パーソナルトレーニングでマシンピラティスを丁寧に指導してもらえます。' },
      { author: 'T.M', rating: 5, date: '2週間前', text: '千里丘駅前で通いやすい。肩こりや腰痛の改善だけでなく、小学生の体幹トレーニングにも対応しているのが珍しい。' },
      { author: 'H.S', rating: 4, date: '3週間前', text: '初心者にも丁寧に指導してくれます。パーソナルなので周りを気にせずレッスンに集中できるのが良い。' },
    ],
    price: 'パーソナル 1回 7,000円〜', trial: '体験レッスンあり',
    features: ['千里丘駅前', 'パーソナル専門', '2025年リニューアル', '子ども対応'],
    description: '2025年リニューアルオープンしたパーソナルピラティス＆トレーニングスタジオ。千里丘駅前の好立地。マシンピラティスのパーソナルレッスンで肩こり・腰痛改善から体幹強化まで対応。小学生の体幹トレーニングにも対応。',
    access: 'JR東海道本線「千里丘駅」徒歩1分',
    address: '大阪府吹田市千里丘エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: 'マシンピラティスのマンツーマン指導。', price: '1回 7,000円〜（税込）' },
    options: ['回数券プランあり', '体験レッスンあり', '小学生体幹トレーニング', '肩こり・腰痛改善コース'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性80% / 男性20%', purpose: ['肩こり・腰痛改善', '体幹強化', '姿勢改善', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'トレーニング機器', '更衣室'] },
  },
  {
    name: 'Rintosull（リントスル）吹田店',
    image: '/images/studios/rintosull.webp',
    rating: 4.5, reviewCount: 88,
    reviews: [
      { author: 'E.N', rating: 5, date: '1週間前', text: '女性専用で安心。映像×インストラクターのハイブリッドレッスンが分かりやすくて初心者でも安心して受けられます。' },
      { author: 'R.K', rating: 5, date: '2週間前', text: '月額8,800円〜の通い放題がコスパ最高。LAVAと同じ系列で信頼感もあります。スタジオもきれいです。' },
      { author: 'M.A', rating: 4, date: '3週間前', text: '仕事帰りに通いやすい立地。レッスンの種類も豊富で飽きずに続けられています。' },
    ],
    price: '月額 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用', '通い放題あり', '映像×インストラクター', 'LAVA系列'],
    description: 'ホットヨガLAVAが手がける女性専用マシンピラティススタジオ。大型スクリーンの映像とインストラクターのハイブリッドレッスンで初心者でも安心。月額8,800円〜とリーズナブルな通い放題プランが魅力。',
    access: '吹田エリア（詳細は公式サイトでご確認ください）',
    address: '大阪府吹田市内（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '通い放題プラン', description: '女性専用マシンピラティス。映像×インストラクターのハイブリッドレッスン。', price: '月額 8,800円〜（税込）' },
    options: ['月額8,800円〜', '対象ブランド全店通い放題コースあり', '体験レッスンあり', 'LAVA会員優待あり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '大型スクリーン', '更衣室', 'ロッカー'] },
  },
  {
    name: 'pilates K（ピラティスケー）江坂店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.5, reviewCount: 95,
    reviews: [
      { author: 'K.T', rating: 5, date: '1週間前', text: '女性専用でおしゃれな空間。音楽に合わせたマシンピラティスが楽しい！ボディメイク効果をしっかり実感できています。' },
      { author: 'S.M', rating: 5, date: '2週間前', text: '体験レッスン無料で気軽に始められました。江坂駅から近くて仕事帰りに通いやすいです。スタッフも明るくて好印象。' },
      { author: 'A.H', rating: 4, date: '3週間前', text: 'グループレッスンですが少人数制なのでしっかり見てもらえます。通い放題プランがお得。' },
    ],
    price: '月4回 13,420円〜', trial: '体験レッスン 無料',
    features: ['女性専用', '音楽×ピラティス', '江坂駅近く', '体験無料'],
    description: '女性専用のマシンピラティス専門スタジオ。音楽に合わせたグループレッスンが特徴で、楽しみながらボディメイクできると人気。おしゃれなスタジオ空間でモチベーションもアップ。初回体験無料。',
    access: '大阪メトロ御堂筋線「江坂駅」徒歩圏内',
    address: '大阪府吹田市江坂町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回のグループマシンピラティス。', price: '月4回 13,420円〜（税込）' },
    options: ['マンスリー8メンバー', 'マンスリーフルメンバー（通い放題）', '体験レッスン無料', 'ウェアレンタルあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス発散'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '更衣室', 'ロッカー', 'パウダールーム'] },
  },
  {
    name: 'BASCO PILATES 江坂',
    image: '/images/studios/basco-esaka.webp',
    rating: 4.7, reviewCount: 68,
    reviews: [
      { author: 'Y.N', rating: 5, date: '1週間前', text: 'アットホームな雰囲気のスタジオ。少人数制で丁寧に見てもらえるのが嬉しい。江坂エリアでは穴場的な存在です。' },
      { author: 'K.M', rating: 5, date: '2週間前', text: 'インストラクターの質が高く、体の状態をしっかり見てくれます。マットもマシンも選べるのが良い。' },
      { author: 'T.K', rating: 4, date: '3週間前', text: '少人数制なのでグループでもセミパーソナルのような感覚。料金も良心的で続けやすいです。' },
    ],
    price: '月4回 10,000円〜', trial: '体験レッスンあり',
    features: ['少人数制', 'アットホーム', 'マット&マシン', '良心的料金'],
    description: '江坂エリアのアットホームなピラティススタジオ。少人数制のグループレッスンで、セミパーソナルのような丁寧な指導が受けられる。マットとマシンの両方に対応し、良心的な料金設定で継続しやすい。',
    access: '大阪メトロ御堂筋線「江坂駅」徒歩圏内',
    address: '大阪府吹田市江坂町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月4回プラン', description: '少人数制グループレッスン。マット＆マシン選択可能。', price: '月4回 10,000円〜（税込）' },
    options: ['月8回プラン', 'プライベートレッスン', '体験レッスンあり', 'マット・マシン選択可能'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', '健康維持', 'リフレッシュ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！吹田エリアのスタジオはほとんどが初心者歓迎。zen placeは丁寧な指導で定評があり、Rintosullは映像×インストラクターのハイブリッドレッスンで分かりやすいです。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。吹田市内はマシン専門スタジオが充実しています。' },
  { question: '吹田のピラティスの料金相場は？', answer: 'グループ月4回で9,625円〜13,420円程度。zen placeが月4回9,625円〜、pilates Kが月4回13,420円〜。通い放題はRintosullが月額8,800円〜と北摂エリアでは比較的リーズナブルです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に増やすと効果的です。zen placeのフリープランやRintosullの通い放題なら毎日でも通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続で体の変化を実感する方が多いです。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。zen placeはグループ体験1,000円、pilates Kは体験無料で気軽に試せます。靴下（グリップソックス推奨）も忘れずに。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place江坂、コアセンス、BASCO PILATESは男性も通えます。La pilates、Rintosull、pilates Kは女性専用です。' },
  { question: '江坂と千里丘、どちらが便利？', answer: '御堂筋線ユーザーは江坂駅周辺（zen place、La pilates、pilates K）がおすすめ。JR東海道線ユーザーは千里丘駅前のコアセンスが便利です。' },
  { question: '吹田市と梅田で迷っています', answer: '吹田市は梅田に比べて料金が抑えめで、混雑も少なく落ち着いた環境でレッスンを受けられます。御堂筋線で梅田まで約10分なので、zen placeなら相互利用で両方通うことも可能です。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く、ボディメイクは3ヶ月程度の継続がおすすめです。' },
]

export default function SuitaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '吹田', url: 'https://pilates-biyori.com/area/suita/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月21日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス吹田おすすめ6選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">吹田</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="吹田" studioNames={studios.map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              こんにちは。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              Pilates-Biyori編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「吹田市で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、吹田市（江坂・千里丘）エリアでおすすめのピラティススタジオ6選をまとめました。吹田市は大阪メトロ御堂筋線の江坂駅を中心に、北摂エリアの玄関口として栄えるオフィス街。梅田まで約10分のアクセスの良さも魅力です。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>吹田市でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>江坂・千里丘エリアで駅近スタジオを見つけたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>北摂エリアで通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="吹田" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              吹田のおすすめピラティススタジオ6選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              吹田のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-4 py-3 text-left">種別</th>
                    <th className="px-4 py-3 text-left">料金相場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">グループレッスン（月4回）</td>
                    <td className="px-4 py-3">9,625円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 7,000円〜8,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">通い放題プラン</td>
                    <td className="px-4 py-3">月額 8,800円〜14,960円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              吹田市は北摂エリアの中心地で、<Link href="/area/umeda" className="text-warm-700 underline hover:text-warm-900">梅田</Link>と比べて料金がやや抑えめなのが特徴です。御堂筋線沿線では<Link href="/area/esaka" className="text-warm-700 underline hover:text-warm-900">江坂</Link>にスタジオが集中しており、北摂在住の方に通いやすいエリアです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              吹田でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">御堂筋線とJRで最寄りスタジオが異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  吹田市は御堂筋線の江坂駅とJR東海道線の千里丘駅・吹田駅でアクセスが大きく変わります。通勤路線に合わせてスタジオを選ぶと継続しやすいです。江坂エリアにはzen place・La pilates・pilates Kが集中しています。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">オフィス街のため平日昼は空いていることが多い</h3>
                <p className="text-warm-600 leading-relaxed">
                  江坂はオフィス街のため、平日夜と土日は混み合いますが、平日日中は比較的空いています。主婦やフリーランスの方は平日昼のレッスンが狙い目。予約が取りやすく快適にレッスンを受けられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">整体×ピラティスの新しいアプローチも</h3>
                <p className="text-warm-600 leading-relaxed">
                  吹田エリアにはLa pilatesのように整体とピラティスを融合したスタジオもあります。慢性的な肩こりや腰痛がある方は、通常のピラティスだけでなく整体アプローチも検討してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">全国相互利用で梅田・新大阪も通える</h3>
                <p className="text-warm-600 leading-relaxed">
                  zen placeは全国150店舗以上で相互利用可能。江坂で入会しても梅田や新大阪のスタジオにも通えるため、出張やお出かけの際にも柔軟にレッスンを受けられます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              体験レッスン当日の持ち物・服装ガイド
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。自販機がないスタジオもあるため持参が安心。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多い。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用が必須のスタジオが多数。グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは脚を大きく動かすポーズが多いため、ストレッチの効く素材が必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。pilates Kではレンタル可能なので仕事帰りでも安心です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>吹田エリアの豆知識：</strong>江坂は大阪メトロ御堂筋線で梅田まで約10分の好立地。オフィスビルが立ち並ぶ一方、万博記念公園や服部緑地など自然も豊かなエリアです。レッスン後に服部緑地でウォーキングを楽しむ方も多く、運動習慣の定着にぴったりの環境です。
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  通い放題プランでお得に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月額 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates（整体×ピラティス）</li>
                  <li className="text-warm-700">• pilates K（音楽×ピラティス）</li>
                  <li className="text-warm-700">• Rintosull（映像×インストラクター）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  個別指導で確実に効果を。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates（1回 8,800円〜）</li>
                  <li className="text-warm-700">• コアセンス（1回 7,000円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円〜）</li>
                  <li>• zen place月4回（9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  本格レッスンを充実の頻度で。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• pilates K（13,420円〜/月4回）</li>
                  <li>• zen placeフリー（14,960円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 7,000円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  個別指導で確実に効果。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• コアセンス（7,000円〜/回）</li>
                  <li>• La pilates（8,800円〜/回）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないスタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  吹田の料金相場はグループ月4回で9,625円〜13,420円。通い放題は8,800円〜。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  pilates Kは体験無料、zen placeは1,000円で体験可能。まずは2-3スタジオの体験を受けて比較しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  御堂筋線ユーザーは江坂駅周辺、JRユーザーは千里丘駅前がおすすめ。自分の生活動線に合わせて選びましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              よくある質問
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は吹田市エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では吹田市にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンを予約しよう
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜1,000円。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="suita" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
