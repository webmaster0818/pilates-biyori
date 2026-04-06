import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】福岡のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '福岡エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,福岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 福岡天神',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '福岡県2スタジオ目'],
    description: 'zen place pilates 福岡天神スタジオが12月1日オープン。福岡県で2スタジオ目になります。全国150店舗以上を展開する大手ピラティススタジオ。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。ご自身の目指したい姿やライフスタイルに合わせて、自由にプランを選ぶことができます。初心者から経験者まで幅広く対応。',
    access: '福岡天神（詳細は公式サイト参照）',
    address: '福岡県福岡市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ 月4',
      description: 'マットピラティスのグループレッスン。初心者にもおすすめの基本プラン。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'フリープラン（通い放題 14,960円）',
      'マット＆マシングループ MM22（各2回 12,650円）',
      'リフォーマーグループ RG4（月4回 15,400円）',
      'プライベートレッスン（月4回 33,880円）',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照（早朝〜夜まで開催）',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'ピラティスラボ 福岡（薬院）',
    image: '/images/pilates3.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['薬院', '少人数制', 'マット＆マシン', '東京代官山・南青山にも展開'],
    description: '福岡市薬院、東京代官山、南青山にあるピラティススタジオ「ピラティスラボ」。グループセッションのスタジオです。マットは最大８名、機械は最大６名と少人数制のセッションで、初めての方でも続けやすいクラスです。一人ひとりに丁寧な指導を提供。',
    access: '薬院（詳細は公式サイト参照）',
    address: '福岡県福岡市中央区薬院（詳細は公式サイト参照）',
    popularPlan: {
      name: '少人数グループセッション',
      description: 'マット最大8名、マシン最大6名の少人数制。初心者でも続けやすい。',
      price: '要問合せ',
    },
    options: [
      'マットグループ（最大8名）',
      'マシングループ（最大6名）',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['少人数希望', 'ボディメイク', '丁寧な指導', '初心者歓迎'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '少人数制'],
    },
  },
  {
    name: 'ピラティススタジオ エアー（今泉）',
    image: '/images/pilates4.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['今泉', 'マンツーマン', '20-40代向け', '麗なライン作り'],
    description: '福岡今泉のマンツーマンレッスン ピラティススタジオ エアー。姿勢が変われば、"印象"が変わる。20・30・40代の麗なライン作り。ピラティス・コンディショニングスタジオ。一人ひとりの姿勢や身体の状態に合わせた丁寧な指導を提供。',
    access: '今泉（詳細は公式サイト参照）',
    address: '福岡県福岡市中央区今泉（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンツーマンレッスン',
      description: '20-40代の麗なライン作り。姿勢改善で印象が変わる。',
      price: '要問合せ',
    },
    options: [
      'マンツーマンレッスン',
      '姿勢改善プログラム',
      'コンディショニング',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '麗なライン作り', 'マンツーマン希望', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マンツーマン空間', 'ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'PILATES JAPAN（大名）',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['福岡大名', '老舗', 'セミプライベート', 'マシン専門'],
    description: 'PILATES JAPANは福岡大名の中心部に位置し、老舗として多くの実績を誇るピラティス専門スタジオです。セミプライベートをメインに、マシンを使った質の高いレッスンを展開。一人ひとりに合わせた丁寧な指導で、長年の実績と信頼があります。',
    access: '福岡大名（詳細は公式サイト参照）',
    address: '福岡県福岡市中央区大名（詳細は公式サイト参照）',
    popularPlan: {
      name: 'セミプライベートレッスン',
      description: '老舗の実績。マシンを使った質の高いレッスン。',
      price: '要問合せ',
    },
    options: [
      'セミプライベートレッスン',
      'プライベートレッスン',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['老舗の実績', 'セミプライベート', '質の高い指導', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '老舗'],
    },
  },
  {
    name: 'kuon ピラティススタジオ（六本松・桜坂）',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['六本松・桜坂', '予約制', 'グループ＆パーソナル', 'マシン専門'],
    description: '福岡（六本松・桜坂）のピラティススタジオkuon。予約制のスタジオです。マシンピラティスでのグループとパーソナルレッスンをご提供しております。一人ひとりの身体に合わせた丁寧な指導を提供。落ち着いた環境でレッスンを受けられます。',
    access: '六本松・桜坂（詳細は公式サイト参照）',
    address: '福岡県福岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '予約制。グループ＆パーソナルレッスン対応。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'パーソナルレッスン',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['予約制希望', 'ボディメイク', 'グループ＆パーソナル', '落ち着いた環境'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['予約制', 'ロッカー', 'パウダールーム', 'マシン完備'],
    },
  },
  {
    name: 'STUDIO IVY 福岡大橋店',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['福岡大橋', 'パーソナル専門', '完全プライベート', '人目を気にせず'],
    description: '福岡大橋のパーソナルマシンピラティス STUDIO IVY福岡大橋店。当スタジオでは、インストラクターとお客様が1対1で向き合う完全プライベート制を採用。人目を気にせず、自分だけの時間に集中できる環境をご用意しています。パーソナルでのマシンピラティスが初めての方でも、安心して通っていただけます。',
    access: '福岡大橋（詳細は公式サイト参照）',
    address: '福岡県福岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全プライベート制。人目を気にせず集中できる。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      '完全プライベート',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['パーソナル希望', '完全プライベート', '人目を気にしない', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'マシン完備'],
    },
  },
  {
    name: 'スタジオKANON（大濠）',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['大濠', 'ピラティス＆ヨガ', '大手門', 'アットホーム'],
    description: '福岡の大濠にあるピラティス・ヨガ スタジオKANON（カノン）。〒810-0074 福岡県福岡市中央区大手門3-7-13 エステート芳賀大手門201。ピラティスとヨガの両方を楽しめるアットホームなスタジオ。一人ひとりに合わせた丁寧な指導を提供。',
    access: '大濠（大手門）',
    address: '福岡県福岡市中央区大手門3-7-13 エステート芳賀大手門201',
    popularPlan: {
      name: 'ピラティス＆ヨガ',
      description: 'ピラティスとヨガの両方を楽しめる。アットホームな雰囲気。',
      price: '要問合せ',
    },
    options: [
      'ピラティスレッスン',
      'ヨガレッスン',
      'グループレッスン',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ピラティス＆ヨガ', 'アットホーム', 'ボディメイク', 'リラックス'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'アットホーム'],
    },
  },
  {
    name: 'La pilates 福岡店',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: 'サブスク月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×マシンピラティス', '赤坂駅徒歩3分', '女性専用', '天神駅徒歩7分'],
    description: '福岡のマシンピラティスならLa pilates｜女性専用・整体×ピラティススタジオ。赤坂駅徒歩3分/天神駅徒歩7分。La pilates福岡店は、整体とマシンピラティスを融合させた、女性専用のスタジオ。身体の歪みを整えながらボディメイク。明るいスタジオで楽しくレッスン。',
    access: '赤坂駅徒歩3分/天神駅徒歩7分',
    address: '福岡県福岡市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'サブスクプラン',
      description: '整体×マシンピラティスの組み合わせ。女性専用で安心。',
      price: 'サブスク月1回 12,000円〜、体験 3,000円',
    },
    options: [
      'サブスクプラン（月1回〜）',
      '整体施術',
      'マシンピラティス',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['整体×ピラティス', '身体の歪み改善', 'ボディメイク', '女性専用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '整体施術', '女性専用', '明るいスタジオ'],
    },
  },
]

export default async function FukuokaAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              福岡のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              福岡エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
            </p>
          </header>

          {/* スタジオカード一覧 */}
          <section className="mb-16">
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </section>

          {/* 好みから探すセクション */}
          <section className="mb-16 rounded-2xl bg-warm-50 p-8 shadow-sm">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              好みのタイプから探す
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">全国最大級</h3>
                <p className="mb-4 text-warm-600">
                  実績と安心感を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：zen place pilates 福岡天神
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">少人数制</h3>
                <p className="mb-4 text-warm-600">
                  丁寧な指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティスラボ 福岡（薬院）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">マンツーマン</h3>
                <p className="mb-4 text-warm-600">
                  20-40代の麗なライン作り
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティススタジオ エアー（今泉）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">老舗の実績</h3>
                <p className="mb-4 text-warm-600">
                  信頼と実績を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：PILATES JAPAN（大名）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">完全プライベート</h3>
                <p className="mb-4 text-warm-600">
                  人目を気にせず集中したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：STUDIO IVY 福岡大橋店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">整体×ピラティス</h3>
                <p className="mb-4 text-warm-600">
                  身体の歪みも整えたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：La pilates 福岡店
                </p>
              </div>
            </div>
          </section>

          {/* 料金帯別セクション */}
          <section className="mb-16">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              料金帯別スタジオ
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">〜10,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>zen place pilates 福岡天神（月4回 9,625円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜20,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>La pilates 福岡店（月1回 12,000円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスラボ 福岡（要問合せ）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>PILATES JAPAN（老舗、要問合せ）</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 通う頻度・期間の目安 */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-50 to-warm-100 p-8 shadow-sm">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              通う頻度・期間の目安
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-warm-800">週1回（月4回）</h3>
                <p className="mb-4 text-warm-700">
                  初心者や運動習慣をつけたい方におすすめ。3ヶ月で姿勢の変化を実感できます。
                </p>
                <div className="space-y-2 text-sm text-warm-600">
                  <p>• 1ヶ月目：動きに慣れる</p>
                  <p>• 2ヶ月目：体の変化を感じ始める</p>
                  <p>• 3ヶ月目：姿勢が改善され、周りから変化を指摘される</p>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-warm-800">週2回（月8回）</h3>
                <p className="mb-4 text-warm-700">
                  本格的にボディメイクしたい方におすすめ。2ヶ月で見た目の変化が現れます。
                </p>
                <div className="space-y-2 text-sm text-warm-600">
                  <p>• 1ヶ月目：筋肉の使い方をマスター</p>
                  <p>• 2ヶ月目：ボディラインが変わり始める</p>
                  <p>• 3ヶ月目：理想の体型に近づく</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4ステップ選び方ガイド */}
          <section className="mb-16">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              4ステップで選ぶ！福岡のピラティススタジオ
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 1
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">目的を明確にする</h3>
                <p className="text-warm-600">
                  ダイエット、姿勢改善、体幹強化など、あなたの目的に合ったスタジオを選びましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 2
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">予算を決める</h3>
                <p className="text-warm-600">
                  月額9,625円〜12,000円など幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  天神、薬院、今泉、大名など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 4
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">体験レッスンを受ける</h3>
                <p className="text-warm-600">
                  スタジオの雰囲気やインストラクターとの相性を確認。ほとんどのスタジオで体験レッスンを実施しています。
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              よくある質問
            </h2>
            <div className="space-y-4">
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  福岡でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilates 福岡天神がおすすめです。全国150店舗以上を展開する大手ピラティススタジオで、初心者から経験者まで幅広く対応しています。また、ピラティスラボ 福岡（薬院）は少人数制で初めての方でも続けやすいクラスです。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  天神駅から一番近いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilates 福岡天神が天神駅近くにあります。また、La pilates 福岡店は天神駅徒歩7分/赤坂駅徒歩3分でアクセス良好です。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  福岡で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilates 福岡天神が月4回9,625円で最もリーズナブルです。また、La pilates 福岡店はサブスク月1回12,000円〜で通えます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、La pilates 福岡店は女性専用スタジオです。整体×マシンピラティスで身体の歪みを整えながらボディメイクできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。zen place pilates 福岡天神、ピラティスラボ 福岡、ピラティススタジオ エアー、PILATES JAPAN、kuon、STUDIO IVY、スタジオKANONは要問合せ。La pilates 福岡店は3,000円です。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  マシンピラティスとマットピラティスの違いは何ですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で行い、体幹を鍛えるのに効果的。初心者にはマシンピラティスがおすすめです。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  どのくらいの期間で効果が出ますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  運動が苦手でも大丈夫ですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので、正しいフォームで効果的にトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  完全プライベートのスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、STUDIO IVY 福岡大橋店は完全プライベート制を採用しています。人目を気にせず、自分だけの時間に集中できる環境をご用意しています。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  老舗の実績があるスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、PILATES JAPAN（大名）は福岡大名の中心部に位置し、老舗として多くの実績を誇るピラティス専門スタジオです。セミプライベートをメインに、マシンを使った質の高いレッスンを展開しています。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              福岡で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              福岡には多様なピラティススタジオがあります。全国最大級のzen place、少人数制のピラティスラボ、マンツーマンのピラティススタジオ エアー、老舗のPILATES JAPAN、完全プライベートのSTUDIO IVY、整体×ピラティスのLa pilatesなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
            </p>
            <p className="mb-8 text-warm-50">
              まずは体験レッスンで、スタジオの雰囲気やインストラクターとの相性を確認してみましょう。多くのスタジオが体験レッスンを実施しています。
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#studios"
                className="rounded-full bg-white px-8 py-3 font-bold text-warm-700 shadow-md transition-all hover:bg-warm-50 hover:shadow-lg"
              >
                スタジオ一覧を見る
              </a>
              <Link
                href="/"
                className="rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-all hover:bg-white hover:text-warm-700"
              >
                他のエリアを探す
              </Link>
            </div>
          </section>

          {/* パンくずリスト */}
          <nav className="mb-8 text-sm text-warm-600" aria-label="パンくずリスト">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-warm-800">
                  ホーム
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/area" className="hover:text-warm-800">
                  エリアから探す
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-warm-800">福岡</li>
            </ol>
          </nav>
        </main>

        <SiteFooter />
      </div>

      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://pilates-biyori.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'エリアから探す',
                item: 'https://pilates-biyori.com/area',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '福岡',
                item: 'https://pilates-biyori.com/area/fukuoka',
              },
            ],
          }),
        }}
      />
    </>
  )
}
