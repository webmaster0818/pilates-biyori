import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】熊本のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '熊本エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,熊本,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 熊本駅前店',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', '世界800店舗以上', '熊本駅徒歩1分', '男女OK'],
    description: 'JR熊本駅新幹線口より徒歩1分！世界最大級のピラティス『CLUB PILATES(クラブピラティス)』熊本駅前店。12名のグループレッスンを中心に、8つのプログラムと4段階のレベルに分けたクラスを提供。アメリカ発の世界最大級のマシンピラティススタジオで、初心者から経験者まで幅広く対応。男性もOK。',
    access: 'JR熊本駅新幹線口より徒歩1分',
    address: '熊本県熊本市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ANNUAL 月4回',
      description: '世界最大級のピラティススタジオ。8つのプログラムと4段階のレベル。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      'ANNUAL 月4回（14,190円）',
      'ANNUAL 月8回（26,290円）',
      '通い放題プラン',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'ダイエット'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照（早朝〜夜まで開催）',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'ピラティスK 熊本店',
    image: '/images/pilates3.jpg',
    rating: 4.1,
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', '暗闇×音楽', '通町筋駅徒歩1分', '部位別プログラム'],
    description: '熊本県熊本市にある女性専用マシンピラティススタジオ。熊本市電「通町筋駅」から徒歩1分だから、平日は仕事帰りに、休日はお買い物ついでに最適！店内はカジュアルかつスタイリッシュで音楽にあわせたグループレッスンを楽しめるスタジオ。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実しており、強度や目的に合わせて選べます。まずは0円の体験レッスンから。',
    access: '熊本市電 通町筋駅 徒歩1分',
    address: '熊本県熊本市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '女性専用。音楽×暗闇×マシンピラティス。部位別プログラム充実。',
      price: '月4回 13,420円（税込）、体験 0円',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円）',
      'デイタイム（平日昼間 11,220円）',
      'マンスリーフルタイム（通い放題 16,170円）',
      'チケット会員',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '部位痩せ', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '女性専用'],
    },
  },
  {
    name: 'ピラティスK 光の森店',
    image: '/images/pilates4.jpg',
    rating: 4.0,
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', '暗闇×音楽', 'ゆめタウン光の森', '部位別プログラム'],
    description: '熊本県菊池郡菊陽町光の森のゆめタウン光の森南館1階にある女性専用マシンピラティススタジオ。Becoming my neutral self. Pilates studio for women only. 音楽にあわせたグループレッスンで、お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。0円体験レッスンから始められます。',
    access: 'ゆめタウン光の森南館1階',
    address: '熊本県菊池郡菊陽町光の森7丁目33-1ゆめタウン光の森南館1階',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '女性専用。音楽×暗闇×マシンピラティス。光の森エリア。',
      price: '月4回 13,420円（税込）、体験 0円',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円）',
      'デイタイム（平日昼間 11,220円）',
      'マンスリーフルタイム（通い放題 16,170円）',
      'チケット会員',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '部位痩せ', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '女性専用'],
    },
  },
  {
    name: 'Two Three 熊本',
    image: '/images/pilates2.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['少人数制', 'マシンピラティス', '正確な姿勢', '丁寧な指導'],
    description: 'Two Threeピラティススタジオ 熊本。ピラティスのレッスンは何より正確な姿勢で行うことが大切です。一人一人に的確なレッスンを受講いただくには少人数制であることが重要となります。皆様に満足のいく行き届いた指導を提供。マシンピラティス専門スタジオとして、丁寧なレッスンを展開。',
    access: '詳細は公式サイト参照',
    address: '熊本県熊本市（詳細は公式サイト参照）',
    popularPlan: {
      name: '少人数制レッスン',
      description: '少人数制で正確な姿勢を重視。一人一人に的確な指導。',
      price: '要問合せ',
    },
    options: [
      '少人数制グループレッスン',
      'パーソナルレッスン',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['少人数希望', '正確な姿勢', '丁寧な指導', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '少人数制'],
    },
  },
  {
    name: 'Rintosull ゆめタウンサンピアン店',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '月4回 9,900円〜',
    trial: '体験レッスン あり',
    features: ['女性専用', 'LAVA運営', 'AI姿勢分析', '初心者87%'],
    description: 'マシンピラティススタジオRintosull ゆめタウンサンピアン店。Rintosullでは、運動やピラティスを初めて行う方向けのプログラムをご用意しています。インストラクターがしっかりサポートいたしますので、ご安心ください。LAVA運営のマシンピラティススタジオで、AI姿勢分析など最新のサポート体制が充実。初心者87%で安心して始められます。',
    access: 'ゆめタウンサンピアン内',
    address: '熊本県（詳細は公式サイト参照）',
    popularPlan: {
      name: '月4回プラン',
      description: 'LAVA運営。AI姿勢分析。初心者87%で安心。',
      price: '月4回 9,900円（税込）',
    },
    options: [
      '月4回プラン（9,900円）',
      '通い放題プラン',
      'AI姿勢分析',
      '初心者向けプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['初心者歓迎', 'AI姿勢分析', 'ボディメイク', 'ダイエット'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'AI姿勢分析', 'マシン完備', '女性専用'],
    },
  },
  {
    name: 'ピラティススタジオイグネス熊本菊陽店',
    image: '/images/pilates4.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['パーソナル専門', '光の森/菊陽/大津/合志', 'マシン完備', '24時間LINE相談'],
    description: '菊陽町/光の森/大津町/合志市エリアのパーソナルピラティス。ピラティスマシンを完備しており、リフォーマー、キャデラック(タワー)、チェアなど主要ピラティスマシンに加えてプロップスも準備しております。自宅でのセルフケアやご質問等をいつでも気軽に聞けるようにしたいと思い、イグネスでは公式LINEにて２４時間サポートを受け付けております。スタジオではなくとも相談ができる環境が整っています。',
    access: '光の森/菊陽/大津/合志エリア',
    address: '熊本県菊陽町（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'パーソナル専門。主要マシン完備。24時間LINE相談。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      '24時間LINEサポート',
      'セルフケア指導',
      '主要マシン完備（リフォーマー、キャデラック、チェア）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['パーソナル希望', '24時間相談', 'セルフケア', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシン完備', '24時間LINEサポート', 'パーソナル専門'],
    },
  },
  {
    name: 'ピラティス スタジオ クララ',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['熊本市中央区', '少人数制', '初心者歓迎', 'アットホーム'],
    description: 'ピラティス スタジオ クララ 熊本市のピラティススタジオ、少人数制なので初めての方でも安心。〒862-0976 熊本市中央区九品寺3丁目3-42。アットホームな雰囲気で、初心者の方でも安心して通えるスタジオ。少人数制で一人一人に丁寧な指導を提供。',
    access: '九品寺エリア',
    address: '熊本市中央区九品寺3丁目3-42',
    popularPlan: {
      name: '少人数制レッスン',
      description: '少人数制で初心者歓迎。アットホームな雰囲気。',
      price: '要問合せ',
    },
    options: [
      '少人数制グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['初心者歓迎', '少人数希望', 'アットホーム', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '少人数制', 'アットホーム'],
    },
  },
  {
    name: 'laugh fit（ラフィット）',
    image: '/images/pilates3.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['24時間ジム', 'パーソナル×整体', '複合型フィットネス', '熊本駅エリア'],
    description: '「laugh fit（ラフィット）」は熊本にある24時間制トレーニングジムにパーソナルトレーニングと整体を融合させた複合型フィットネス施設です。ダイエット・骨盤矯正・シックスパック・ボディメイクなど、多様な目的に対応。ピラティスとパーソナルトレーニング、整体を組み合わせた総合的なアプローチが可能。',
    access: '熊本駅エリア',
    address: '熊本県熊本市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナル×整体',
      description: '24時間ジム。パーソナル×整体の複合型。ピラティスも対応。',
      price: '要問合せ',
    },
    options: [
      '24時間ジム利用',
      'パーソナルトレーニング',
      '整体施術',
      'ピラティス',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性60% / 男性40%',
      purpose: ['ダイエット', '骨盤矯正', 'ボディメイク', '複合型希望'],
    },
    basicInfo: {
      hours: '24時間営業（詳細は公式サイト参照）',
      closed: '年中無休',
      facilities: ['24時間ジム', 'パーソナルルーム', '整体施術', 'ロッカー'],
    },
  },
]

export default async function KumamotoAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              熊本のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              熊本エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                <h3 className="mb-3 text-xl font-bold text-warm-800">世界最大級</h3>
                <p className="mb-4 text-warm-600">
                  アメリカ発の実績を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：CLUB PILATES 熊本駅前店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">女性専用×0円体験</h3>
                <p className="mb-4 text-warm-600">
                  音楽×暗闇で楽しくトレーニング
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティスK 熊本店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">少人数制</h3>
                <p className="mb-4 text-warm-600">
                  丁寧な指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：Two Three 熊本
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">AI姿勢分析</h3>
                <p className="mb-4 text-warm-600">
                  初心者87%で安心スタート
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：Rintosull ゆめタウンサンピアン店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">パーソナル専門</h3>
                <p className="mb-4 text-warm-600">
                  24時間LINE相談対応
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティススタジオイグネス熊本菊陽店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">複合型フィットネス</h3>
                <p className="mb-4 text-warm-600">
                  ピラティス×パーソナル×整体
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：laugh fit（ラフィット）
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
                    <span>Rintosull ゆめタウンサンピアン店（月4回 9,900円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜15,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK 熊本店（月4回 13,420円〜）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>CLUB PILATES 熊本駅前店（月4回 14,190円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>Two Three 熊本（少人数制、要問合せ）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>イグネス（パーソナル専門、要問合せ）</span>
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
              4ステップで選ぶ！熊本のピラティススタジオ
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
                  月額9,900円〜14,190円など幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  熊本駅、通町筋、光の森など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 4
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">体験レッスンを受ける</h3>
                <p className="text-warm-600">
                  スタジオの雰囲気やインストラクターとの相性を確認。CLUB PILATESは無料、ピラティスKは0円で体験できます。
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
                  熊本でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  Rintosull ゆめタウンサンピアン店がおすすめです。初心者87%で、運動やピラティスを初めて行う方向けのプログラムが充実しています。また、ピラティスK 熊本店は0円体験レッスンがあり、初心者でも気軽に始められます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  熊本駅から一番近いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  CLUB PILATES 熊本駅前店がJR熊本駅新幹線口より徒歩1分で最もアクセス良好です。世界最大級のピラティススタジオで、初心者から経験者まで幅広く対応しています。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  熊本で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  Rintosull ゆめタウンサンピアン店が月4回9,900円で最もリーズナブルです。LAVA運営のマシンピラティススタジオで、AI姿勢分析など最新のサポート体制が充実しています。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、ピラティスK 熊本店、ピラティスK 光の森店、Rintosull ゆめタウンサンピアン店が女性専用スタジオです。音楽×暗闇×マシンピラティスで楽しくトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。CLUB PILATES 熊本駅前店は無料、ピラティスK 熊本店・光の森店は0円で体験できます。その他のスタジオも体験レッスンを実施していますので、各スタジオにお問い合わせください。
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
                  パーソナル専門のスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、ピラティススタジオイグネス熊本菊陽店はパーソナル専門スタジオです。主要ピラティスマシン（リフォーマー、キャデラック、チェア）を完備し、24時間LINEサポートも受けられます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  24時間相談できるスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、ピラティススタジオイグネス熊本菊陽店では公式LINEにて24時間サポートを受け付けています。自宅でのセルフケアやご質問等をいつでも気軽に聞けるので、スタジオに行けない時でも安心です。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              熊本で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              熊本には多様なピラティススタジオがあります。世界最大級のCLUB PILATES、女性専用×0円体験のピラティスK、少人数制のTwo Three、AI姿勢分析のRintosull、パーソナル専門のイグネス、複合型のlaugh fitなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
            </p>
            <p className="mb-8 text-warm-50">
              まずは体験レッスンで、スタジオの雰囲気やインストラクターとの相性を確認してみましょう。CLUB PILATESは無料、ピラティスKは0円で体験できます。
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
              <li className="font-semibold text-warm-800">熊本</li>
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
                name: '熊本',
                item: 'https://pilates-biyori.com/area/kumamoto',
              },
            ],
          }),
        }}
      />
    </>
  )
}
