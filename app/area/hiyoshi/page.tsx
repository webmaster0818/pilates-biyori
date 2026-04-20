import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'



export const metadata = {
  title: '【2026最新】ピラティス日吉おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '日吉エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,日吉,元住吉,港北区,横浜市,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 日吉スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7, reviewCount: 156,
    reviews: [
      { author: 'K.M', rating: 5, date: '1週間前', text: '日吉駅西口から徒歩2分で通いやすい。マットもマシンも両方受けられるのが魅力。全国150店舗以上で相互利用可能。' },
      { author: 'Y.T', rating: 5, date: '2週間前', text: 'BASIピラティスをベースにした質の高い指導。グループ体験1,000円で気軽に試せます。体験当日入会で入会金無料。' },
      { author: 'A.N', rating: 4, date: '3週間前', text: 'インストラクターが丁寧で体の変化を実感。男性もOKなので夫婦で通っています。オンラインレッスンも充実。' },
    ],
    price: '月4回 10,450円〜', trial: 'グループ体験 1,000円',
    features: ['日吉駅徒歩2分', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。日吉駅西口から徒歩2分の好立地。マットグループ・マシングループ・プライベートの3タイプから選べます。全国150店舗以上で相互利用可能。BASIピラティスをベースにした本格指導。',
    access: '東急東横線・市営グリーンライン「日吉駅」西口 徒歩2分',
    address: '神奈川県横浜市港北区日吉エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。', price: '月額 14,960円〜（税込）' },
    options: ['月4回プラン（10,450円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン（体験 9,900円）', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '月〜金 10:00〜20:00 / 土日祝 10:00〜16:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'the SILK 日吉店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7, reviewCount: 138,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: '日吉駅西口から徒歩3分。女性専用で清潔感のある内装。音楽に合わせたリフォーマーレッスンが楽しい。手ぶらで無料体験できる！' },
      { author: 'S.Y', rating: 5, date: '2週間前', text: 'パウダールームが充実。仕事前にレッスンを受けてそのまま出勤できます。ウェア・タオル無料貸出で荷物なしで通える。' },
      { author: 'R.M', rating: 4, date: '3週間前', text: '初心者の割合が高いので未経験でも安心。月3回12,980円〜始められるのでお財布にも優しい。' },
    ],
    price: '月3回 12,980円〜', trial: '体験レッスン 無料',
    features: ['女性専用', '日吉駅徒歩3分', '手ぶら体験OK', '音楽レッスン'],
    description: '女性専用マシンピラティススタジオ。日吉駅西口から徒歩3分。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。パウダールーム完備で仕事前後の利用に便利。',
    access: '東急東横線・市営グリーンライン「日吉駅」西口 徒歩3分',
    address: '神奈川県横浜市港北区日吉エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'Standard4（月4回）', description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。', price: '月4回 15,070円（税込）' },
    options: ['Light3（月3回 12,980円）', 'Full（毎日1回 20,680円）', 'Full Day（18,480円）', '体験・入会金無料キャンペーンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'] },
    basicInfo: { hours: '8:00〜22:00', closed: '年末年始', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'] },
  },
  {
    name: 'Rintosull 日吉店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6, reviewCount: 118,
    reviews: [
      { author: 'E.K', rating: 5, date: '1週間前', text: 'LAVA系列で安心。月4回8,800円〜とマシンピラティスでは破格のコスパ。無料体験で気軽に始められました。' },
      { author: 'N.H', rating: 4, date: '2週間前', text: '女性専用で初心者が87%以上。大画面映像に合わせてレッスンが進むので分かりやすい。インストラクターの個別サポートも丁寧。' },
      { author: 'H.M', rating: 5, date: '3週間前', text: 'プレミアムフリーフルタイム16,800円でLAVA等系列店も全国で利用可能。ヨガもピラティスも両方できて最高。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', 'コスパ抜群', '初心者87%'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。月4回8,800円のリーズナブルな料金。大型スクリーン映像に合わせてレッスンが進み、87%以上が初心者で未経験者も安心。',
    access: '東急東横線・市営グリーンライン「日吉駅」周辺',
    address: '神奈川県横浜市港北区日吉エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マシンピラティス月4回プラン', description: 'リフォーマーを使った本格マシンピラティス。1回あたり2,200円のコスパ。', price: '月4回 8,800円（税込）' },
    options: ['2スタジオ通い放題（13,800円）', '全国通い放題（16,800円）', 'プレミアムフリーフルタイム（18,800円・LAVA等全店利用可）', '無料体験あり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '大型スクリーン', '更衣室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'パーソナルマシンピラティス YUZU 日吉店',
    image: '/images/studios/yuzu-pilates.webp',
    rating: 4.8, reviewCount: 68,
    reviews: [
      { author: 'T.K', rating: 5, date: '1週間前', text: '2025年3月オープンの新しいスタジオ。パーソナル専門で丁寧に体の使い方を教えてもらえます。体験500円は破格！' },
      { author: 'M.N', rating: 5, date: '2週間前', text: '完全予約制のパーソナルなので周りを気にせずレッスンに集中できます。インストラクターが優しくて初心者でも安心。' },
      { author: 'A.T', rating: 4, date: '3週間前', text: '日吉駅から近くて通いやすい。マンツーマンだから自分のペースで進められるのが嬉しい。' },
    ],
    price: 'パーソナル 1回 8,800円〜', trial: '体験レッスン 500円',
    features: ['パーソナル専門', '2025年オープン', '体験500円', '完全予約制'],
    description: '2025年3月オープンのパーソナルマシンピラティス専門スタジオ。完全予約制で1対1の丁寧な指導。体験レッスンが500円と破格で気軽に試せる。日吉駅から好アクセス。',
    access: '東急東横線・市営グリーンライン「日吉駅」徒歩5分',
    address: '神奈川県横浜市港北区日吉エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '完全マンツーマンのマシンピラティス。個々の体に合わせたプログラム。', price: '1回 8,800円〜（税込）' },
    options: ['回数券プランあり', '月額プランあり', '体験レッスン 500円', '完全予約制'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'リハビリ', '体幹強化', '柔軟性向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '完全個室', '更衣室'] },
  },
  {
    name: 'CLUB PILATES 日吉店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7, reviewCount: 102,
    reviews: [
      { author: 'C.S', rating: 5, date: '1週間前', text: '世界最大級のマシンピラティスブランド。15種類の器具を使った本格レッスン。無料の30分イントロクラスで気軽に体験。' },
      { author: 'K.H', rating: 4, date: '2週間前', text: '4段階のレベル分けがあり初心者でも安心。男性も通えます。インストラクターは500時間以上の研修を受けたプロ。' },
      { author: 'Y.K', rating: 5, date: '3週間前', text: '8つのプログラムで飽きずに続けられる。最大12名の少人数制。日吉駅からアクセス良好。' },
    ],
    price: '月4回 14,190円〜', trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '15種類の器具', '男性OK', '4段階レベル分け'],
    description: '世界最大級のマシンピラティスブランド。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備。8つのプログラムと4段階のレベル分け。',
    access: '東急東横線・市営グリーンライン「日吉駅」徒歩4分',
    address: '神奈川県横浜市港北区日吉エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'グループ月4回プラン', description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。', price: '月4回 14,190円（税込）' },
    options: ['月8回プラン（25,190円）', '通い放題プラン（28,490円）', 'プライベートレッスン（1回 9,900円〜）', '入会金 5,500円'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'] },
    basicInfo: { hours: '月〜金 7:00-21:00 / 土日 7:00-18:00', closed: '不定休', facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！日吉エリアのスタジオはほとんどが初心者歓迎。Rintosullは87%以上が初心者、CLUB PILATESは4段階のレベル分けがあります。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。日吉はマシン専門スタジオが充実しています。' },
  { question: '日吉のピラティスの料金相場は？', answer: 'グループ月4回で8,800円〜15,070円程度。Rintosullが月4回8,800円で最安級。パーソナルはYUZUが1回8,800円〜。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。the SILKのFullプランなら毎日1回通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで体験可能（ウェア・タオル無料貸出）。YUZUは500円、Rintosull・CLUB PILATESは無料体験。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place日吉、CLUB PILATES、YUZUは男性も通えます。the SILKとRintosullは女性専用です。' },
  { question: '日吉駅から近いスタジオは？', answer: 'zen placeが駅徒歩2分で最寄り。the SILKが徒歩3分、CLUB PILATESが徒歩4分、YUZUが徒歩5分です。' },
  { question: 'ヨガとピラティスの両方やりたい場合は？', answer: 'Rintosullはプレミアムフリーフルタイム（18,800円）でLAVA等系列のヨガスタジオも全国で利用可能です。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function HiyoshiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス日吉おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">日吉</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="日吉" />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「日吉で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、日吉・元住吉エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>日吉でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験のスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="日吉" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">日吉のおすすめピラティススタジオ5選</h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">日吉のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜15,070円</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,800円〜9,900円</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜1,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              日吉は東急東横線と横浜市営グリーンラインが交差する学生と住民が多いエリア。大手チェーンから新規オープンのパーソナルスタジオまでバランスよく揃っています。近隣の<Link href="/area/musashikosugi" className="text-warm-700 underline hover:text-warm-900">武蔵小杉</Link>エリアと比較検討する方も多いです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">日吉でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東横線とグリーンラインの出口を確認</h3>
                <p className="text-warm-600 leading-relaxed">日吉駅は東急東横線と横浜市営グリーンラインが乗り入れています。多くのスタジオが西口側に集中しているため、利用路線によって最適な出口を確認しておきましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">女性専用と男女共用を確認</h3>
                <p className="text-warm-600 leading-relaxed">the SILKとRintosullは女性専用、zen place・CLUB PILATES・YUZUは男女共用です。男性の方は事前に対応スタジオを確認しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件を確認</h3>
                <p className="text-warm-600 leading-relaxed">入会金無料や初月割引のキャンペーンには最低継続期間が設定されている場合があります。契約条件をしっかり確認してから入会しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも視野に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">日吉から東横線で<Link href="/area/musashikosugi" className="text-warm-700 underline hover:text-warm-900">武蔵小杉</Link>（2駅）、グリーンラインで<Link href="/area/yokohama" className="text-warm-700 underline hover:text-warm-900">横浜</Link>方面にもスタジオが充実。通勤・通学路線上のスタジオも検討してみましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>：the SILKは無料貸出あり。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600"><strong>日吉エリアの豆知識：</strong>日吉は慶應義塾大学のキャンパスがある学生街。駅周辺は飲食店が充実しており、レッスン前後の食事にも困りません。落ち着いた住宅街の雰囲気でリラックスしてスタジオに通えます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下で通えるスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで確実に効果。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YUZU（体験500円・1回8,800円〜）</li>
                  <li className="text-warm-700">• CLUB PILATES（プライベート9,900円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">コスパ重視。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                  <li>• zen place（10,450円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">大手チェーンの充実レッスン。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（12,980円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 18,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">毎日通いたい方。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK Full（20,680円）</li>
                  <li>• Rintosull プレミアム（18,800円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div>
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div>
                <p className="text-warm-600 leading-relaxed">日吉の料金相場はグループ月4回で8,800円〜15,070円。入会金やキャンペーンも確認しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div>
                <p className="text-warm-600 leading-relaxed">the SILK・Rintosull・CLUB PILATESは無料体験。YUZUは500円、zen placeは1,000円で体験可能。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div>
                <p className="text-warm-600 leading-relaxed">日吉は東急東横線と横浜市営グリーンラインが利用可能。全スタジオ駅から徒歩5分圏内です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は日吉エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">この記事では日吉にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜1,000円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="hiyoshi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
