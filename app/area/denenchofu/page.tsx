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
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/denenchofu/' },
  title: '【2026年7月最新】田園調布のピラティススタジオおすすめ6選｜無料体験・料金で比較',
  description: '田園調布のピラティススタジオ6社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,田園調布,奥沢,大田区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 田園調布スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7, reviewCount: 145,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '田園調布駅から徒歩3分で通いやすい。マットもマシンも両方受けられるのが魅力。全国150店舗以上で他店利用可能なので出張時にも便利。' },
      { author: 'S.T', rating: 5, date: '2週間前', text: 'インストラクターの質が高く丁寧な指導。20年以上の実績があり安心感がある。グループ体験1,000円で気軽に試せました。' },
      { author: 'R.N', rating: 4, date: '3週間前', text: '閑静な住宅街にあり落ち着いた雰囲気。男性もOKなので夫婦で通っています。プライベートレッスンも充実。' },
    ],
    price: '月4回 10,450円〜', trial: 'グループ体験 1,000円',
    features: ['田園調布駅徒歩3分', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。田園調布駅から徒歩3分。マットグループ・マシングループ・プライベートの3タイプから選べます。全国150店舗以上で相互利用可能。BASIピラティスをベースにした質の高い指導が特徴。',
    access: '東急東横線・目黒線「田園調布駅」徒歩3分',
    address: '東京都大田区田園調布エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。', price: '月額 13,552円〜（税込）' },
    options: ['月4回プラン（10,450円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン（体験 9,900円）', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '月〜金 10:00〜20:00 / 土日祝 10:00〜16:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'TSUTAYA Conditioning PILATES 田園調布店',
    image: '/images/studios/tsutaya-conditioning-pilates-shonan.webp',
    rating: 4.6, reviewCount: 98,
    reviews: [
      { author: 'A.Y', rating: 5, date: '1週間前', text: '2025年1月オープンの新しいスタジオ。田園調布駅東口から徒歩2分で清潔感抜群。女性専用で少人数制なので丁寧に見てもらえます。' },
      { author: 'K.S', rating: 5, date: '2週間前', text: '最新のリフォーマーマシンが揃っていて設備が充実。TSUTAYAブランドならではのおしゃれな空間でモチベーションが上がります。' },
      { author: 'N.M', rating: 4, date: '3週間前', text: '体験レッスン無料で気軽に始められました。初心者向けのクラスが充実していて安心。スタッフの対応も丁寧です。' },
    ],
    price: '月4回 11,000円〜', trial: '体験レッスン 無料',
    features: ['女性専用', '田園調布駅徒歩2分', '少人数制', '2025年オープン'],
    description: '2025年1月グランドオープンの女性専用マシンピラティススタジオ。田園調布駅東口から徒歩2分。TSUTAYAブランドが手がけるコンディショニング特化型で、少人数制の丁寧な指導が魅力。最新設備を完備。',
    access: '東急東横線・目黒線「田園調布駅」東口 徒歩2分',
    address: '東京都大田区田園調布2丁目エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月4回プラン', description: '女性専用少人数制マシンピラティス。最新リフォーマー使用。', price: '月4回 11,000円（税込）' },
    options: ['通い放題プラン', 'OPEN会員特典（月額2,200円割引）', '体験レッスン無料', '入会金無料キャンペーンあり'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', '健康維持', 'リフレッシュ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'] },
  },
  {
    name: 'Pilates Mee 田園調布店',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.7, reviewCount: 112,
    reviews: [
      { author: 'Y.K', rating: 5, date: '1週間前', text: '最大3名のセミパーソナル形式で、ほぼマンツーマンのような丁寧な指導が受けられます。田園調布駅から徒歩2分で通いやすい。' },
      { author: 'T.M', rating: 5, date: '2週間前', text: '通い放題プランだと1回あたり1,250円とコスパ抜群。当日予約・当日キャンセルOKで融通が利くのが嬉しい。' },
      { author: 'H.S', rating: 4, date: '3週間前', text: '女性専用で落ち着いた雰囲気。セミパーソナルなので自分のペースで進められます。チケット持ち越しもできて便利。' },
    ],
    price: '月2回 11,000円〜', trial: '体験レッスン 9,800円',
    features: ['セミパーソナル', '最大3名', '女性専用', '当日予約OK'],
    description: '最大3名までの少人数セミパーソナル形式の女性専用マシンピラティススタジオ。田園調布駅から徒歩2分。当日予約・当日キャンセルが可能で忙しい方にも柔軟に対応。通い放題プランなら1回あたり1,250円のコスパ。',
    access: '東急東横線・目黒線「田園調布駅」徒歩2分',
    address: '東京都大田区田園調布エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月4回プラン', description: 'セミパーソナル形式のマシンピラティス。最大3名の少人数制。', price: '月4回 19,800円（税込）' },
    options: ['月2回プラン（11,000円）', '通い放題（37,500円・1回あたり1,250円）', '当日予約・当日キャンセルOK', 'チケット持ち越し可能'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'] },
  },
  {
    name: 'STUDIO IVY 奥沢店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8, reviewCount: 86,
    reviews: [
      { author: 'E.N', rating: 5, date: '1週間前', text: '完全プライベート空間でオーダーメイドレッスン。自分の体の状態に合わせた指導が受けられて効果を実感しやすい。' },
      { author: 'R.K', rating: 5, date: '2週間前', text: '月謝制で1レッスン6,250円からとプライベートにしてはリーズナブル。奥沢駅から近くて通いやすいです。' },
      { author: 'M.A', rating: 4, date: '3週間前', text: '完全個室なので周りを気にせずレッスンに集中できます。インストラクターが体の癖を見抜いて的確にアドバイスしてくれます。' },
    ],
    price: '月4回 25,000円〜（1回6,250円〜）', trial: '体験レッスンあり',
    features: ['完全プライベート', 'オーダーメイド', '奥沢駅近く', '月謝制'],
    description: '完全プライベート空間で1人ひとりに合わせたオーダーメイドレッスンを提供するマシンピラティス専門スタジオ。奥沢駅近く、田園調布エリアからもアクセス良好。月謝制で継続しやすい料金設定。',
    access: '東急目黒線「奥沢駅」徒歩3分 / 「田園調布駅」徒歩10分',
    address: '東京都世田谷区奥沢エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月4回プラン', description: '完全プライベートのオーダーメイドマシンピラティス。', price: '月4回 25,000円〜（税込）' },
    options: ['月2回プラン', '月8回プラン', '体験レッスンあり', '完全個室対応'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'リハビリ', '体幹強化', '柔軟性向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', '完全個室', '更衣室'] },
  },
  {
    name: 'Dr.ピラティス 田園調布店',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8, reviewCount: 72,
    reviews: [
      { author: 'K.T', rating: 5, date: '1週間前', text: '田園調布駅から徒歩30秒！医学的根拠に基づいたアプローチが特徴。全米認定トレーナーが在籍していて安心感がある。' },
      { author: 'S.M', rating: 5, date: '2週間前', text: '2025年2月オープンの新しいスタジオ。ピラティスとトレーニングを組み合わせた二段階アプローチで効果を実感。' },
      { author: 'A.H', rating: 4, date: '3週間前', text: '駅から30秒は本当に便利。パーソナル専門なので自分に合ったプログラムを組んでもらえます。' },
    ],
    price: 'パーソナル 1回 8,800円〜', trial: '体験レッスンあり',
    features: ['駅徒歩30秒', '医学的アプローチ', 'パーソナル専門', '2025年オープン'],
    description: '2025年2月オープンのパーソナルピラティスジム。田園調布駅から徒歩30秒という最高の立地。医学的根拠に基づいたピラティスとトレーニングの二段階アプローチ。全米アスレティックトレーナーズ協会認定トレーナー在籍。',
    access: '東急東横線・目黒線「田園調布駅」徒歩30秒',
    address: '東京都大田区田園調布エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '医学的根拠に基づいたオーダーメイドピラティス＆トレーニング。', price: '1回 8,800円〜（税込）' },
    options: ['回数券プランあり', '月額プランあり', '体験レッスンあり', '全米認定トレーナー在籍'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性70% / 男性30%', purpose: ['姿勢改善', 'リハビリ', '痛み改善', 'パフォーマンス向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'トレーニング機器', '完全個室', '更衣室'] },
  },
  {
    name: 'Pilates Mee田園調布店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。田園調布駅から徒歩2分。',
    access: '田園調布駅から徒歩2分',
    address: '東京都大田区田園調布3丁目4-5 202',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！田園調布エリアのスタジオはほとんどが初心者歓迎。TSUTAYA Conditioningは初心者向けクラスが充実、zen placeは丁寧な指導で定評があります。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。田園調布はマシン専門スタジオが充実しています。' },
  { question: '田園調布のピラティスの料金相場は？', answer: 'グループ月4回で10,450円〜19,800円程度。zen placeが月4回10,450円〜、TSUTAYA Conditioningが月4回11,000円〜。パーソナルは1回8,800円〜25,000円。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に増やすと効果的です。Pilates Meeの通い放題プランなら毎日でも通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続で体の変化を実感する方が多いです。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。TSUTAYA Conditioningは体験無料、zen placeはグループ1,000円で体験できます。靴下（グリップソックス推奨）も忘れずに。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place田園調布とDr.ピラティスは男性も通えます。TSUTAYA ConditioningとPilates Meeは女性専用です。' },
  { question: 'パーソナルレッスンとグループレッスンどちらがおすすめ？', answer: '初心者や体の悩みがある方はパーソナルがおすすめ。Dr.ピラティスやSTUDIO IVYで個別指導を受けられます。コスパ重視ならグループレッスンのzen placeやTSUTAYA Conditioning。' },
  { question: '田園調布駅から近いスタジオは？', answer: 'Dr.ピラティスが駅徒歩30秒で最寄り。TSUTAYA ConditioningとPilates Meeが徒歩2分、zen placeが徒歩3分です。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く、ボディメイクは3ヶ月程度の継続がおすすめです。' },
]

export default function DenenchofuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '田園調布', url: 'https://pilates-biyori.com/area/denenchofu/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月22日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス田園調布おすすめ6選！<br className="hidden md:block" />
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
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">田園調布</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="田園調布" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「田園調布で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、田園調布・奥沢エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>田園調布でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>閑静な環境で質の高いレッスンを受けたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅近で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="田園調布" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              田園調布のおすすめピラティススタジオ6選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              田園調布のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜19,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,800円〜25,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜9,800円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              田園調布は閑静な高級住宅街で、質の高いサービスを提供するスタジオが多いのが特徴です。グループレッスンの料金は都心部と同程度ですが、パーソナルやセミパーソナルの選択肢が豊富で、個々のニーズに合わせた丁寧な指導を受けられます。近隣の<Link href="/area/jiyugaoka/" className="text-warm-700 underline hover:text-warm-900">自由が丘</Link>エリアと比較検討する方も多いです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              田園調布でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駅からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  田園調布駅は東急東横線・目黒線が乗り入れています。スタジオは駅周辺に集中していますが、奥沢方面のスタジオもあるため、事前にルートを確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">パーソナルとグループの違いを理解する</h3>
                <p className="text-warm-600 leading-relaxed">
                  田園調布エリアはパーソナルやセミパーソナル形式のスタジオが多いのが特徴です。1対1の指導は効果的ですが料金も高め。予算と目的に合わせて、グループレッスンとパーソナルのバランスを考えましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンの料金差に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  田園調布エリアのスタジオは体験レッスンの料金が無料〜9,800円と幅があります。TSUTAYA Conditioningは無料、zen placeは1,000円と安価ですが、セミパーソナルのPilates Meeは9,800円。事前に確認してから予約しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  田園調布エリアだけでなく、近隣の<Link href="/area/jiyugaoka/" className="text-warm-700 underline hover:text-warm-900">自由が丘</Link>、<Link href="/area/futakotamagawa/" className="text-warm-700 underline hover:text-warm-900">二子玉川</Link>エリアにもピラティススタジオが充実しています。東横線・目黒線で1-2駅の距離なので、複数エリアで体験レッスンを受けてみるのもおすすめです。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。手ぶらで体験可能な場合もあるので事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>田園調布エリアの豆知識：</strong>田園調布は落ち着いた雰囲気の高級住宅街。スタジオも上品で洗練された空間が多く、リラックスしてレッスンに集中できます。駅周辺にはカフェも多いので、レッスン後のリフレッシュにもおすすめ。
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
                  リーズナブルにグループレッスン。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• TSUTAYA Conditioning（月4回 11,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• TSUTAYA Conditioning（月4回 11,000円〜）</li>
                  <li className="text-warm-700">• Pilates Mee（月2回 11,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  個別指導で確実に効果を。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Dr.ピラティス（1回 8,800円〜）</li>
                  <li className="text-warm-700">• STUDIO IVY（1回 6,250円〜）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• TSUTAYA Conditioning（11,000円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  セミパーソナル・通い放題。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place通い放題（13,552円〜）</li>
                  <li>• Pilates Mee月4回（19,800円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 25,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  個別指導で確実に効果。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（25,000円〜/月4回）</li>
                  <li>• Pilates Mee通い放題（37,500円）</li>
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
                  田園調布の料金相場はグループ月4回で10,450円〜19,800円。パーソナルは1回8,800円〜。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  TSUTAYA Conditioningは無料体験。zen placeは1,000円で体験可能。まずは2-3スタジオの体験を受けて比較しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  田園調布駅から徒歩5分以内にほとんどのスタジオが集中。東横線・目黒線利用で自由が丘や二子玉川のスタジオも通いやすいです。
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
              今回は田園調布エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では田園調布にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="denenchofu" areaName="田園調布" />

      <RelatedAreas currentSlug="denenchofu" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
