import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】大阪のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '大阪エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 大阪（複数店舗）',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '大阪府内複数店舗', '暗闇レッスン'],
    description: 'ピラティスK 大阪は、大阪府内に複数店舗を展開する女性専用マシンピラティススタジオ。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。河内長野店など、各エリアに展開。',
    access: '大阪府内複数店舗（詳細は公式サイト参照）',
    address: '大阪府（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
      price: '月4回 13,420円（税込）+ 施設維持費 825円',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時通い放題 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加レッスン（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'fis.pilates（フィスピラティス）',
    image: '/images/pilates3.jpg',
    rating: 4.3,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['女性専用', 'マシン専門パーソナル', '大阪府下12店舗', '個室マンツーマン'],
    description: '大阪府下に12直営店舗を構える女性専用マシンピラティス専門パーソナルスタジオ。資格所有女性トレーナーと個室マンツーマン。質の高いピラティスをお求めの方はぜひお越しください。痛みや不調のないスッとした美しい体づくりをサポート。完全個室で周りを気にせず集中できます。',
    access: '大阪府下12店舗（詳細は公式サイト参照）',
    address: '大阪府（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '資格所有女性トレーナーと個室マンツーマン。質の高いピラティスを提供。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      '個室マンツーマン',
      '女性トレーナー',
      '痛み・不調改善',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['痛み改善', '不調解消', 'ボディメイク', '質の高い指導'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', '女性専用', '12店舗展開'],
    },
  },
  {
    name: 'La pilates 天王寺店',
    image: '/images/pilates4.jpg',
    rating: 4.2,
    price: 'サブスク月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×マシンピラティス', '駅近', '明るいスタジオ', '楽しいレッスン'],
    description: '整体×マシンピラティススタジオ La pilates 天王寺店。いつも楽しくレッスンしてもらってます。駅からも近くスタジオの雰囲気も明るくて、毎回レッスンが楽しみという口コミ多数。整体とピラティスを組み合わせた独自のメソッドで、身体の歪みを整えながらボディメイク。',
    access: '天王寺駅近（詳細は公式サイト参照）',
    address: '大阪府大阪市天王寺区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'サブスクプラン',
      description: '整体×マシンピラティスの組み合わせ。明るいスタジオで楽しくレッスン。',
      price: 'サブスク月1回 12,000円〜、体験 3,000円',
    },
    options: [
      'サブスクプラン（月1回〜）',
      '整体施術',
      'マシンピラティス',
      '駅近アクセス',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['整体×ピラティス', '身体の歪み改善', 'ボディメイク', '楽しく続けたい'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '整体施術', '明るいスタジオ'],
    },
  },
  {
    name: 'DAYS PILATES（デイズピラティス）',
    image: '/images/pilates2.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['女性専用', 'マシン専門', '心斎橋・梅田', '充実設備'],
    description: 'DAYS PILATES（デイズピラティス）は、大阪の心斎橋と梅田にある女性専用のマシン専門ピラティススタジオです。スタジオには、フリーロッカー・更衣室・パウダーコーナーが完備されており、快適にレッスンを受けられます。初心者から経験者まで幅広く対応。',
    access: '心斎橋・梅田（詳細は公式サイト参照）',
    address: '大阪府大阪市（心斎橋・梅田）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '女性専用のマシン専門スタジオ。充実した設備で快適にレッスン。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '女性専用',
      '充実設備',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['女性専用希望', 'ボディメイク', '快適な環境', '駅近'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['フリーロッカー', '更衣室', 'パウダーコーナー', '女性専用', '2店舗'],
    },
  },
  {
    name: 'CLUB PILATES 大阪',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '無料体験レッスン',
    features: ['アメリカ発', '世界800店舗以上', 'グループ＆プライベート', '初心者歓迎'],
    description: 'CLUB PILATESは世界各国で800店舗以上展開するアメリカ発のピラティススタジオ。初めての方でも安心してマシンピラティスを楽しめます。グループレッスンとプライベートレッスンの両方を提供。世界最大級のピラティスネットワークで培われたノウハウを活かした指導。',
    access: '大阪市内（詳細は公式サイト参照）',
    address: '大阪府大阪市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '世界800店舗以上のネットワーク。初心者でも安心して楽しめる。',
      price: '要問合せ（無料体験あり）',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
      '世界最大級ネットワーク',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['初心者歓迎', '世界的ブランド', 'ボディメイク', 'グループ＆プライベート'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '世界展開'],
    },
  },
  {
    name: 'STUDIO IVY 大阪',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['大阪府3店舗', '通いやすい立地', 'マシン完備', '選べる店舗'],
    description: '「STUDIO IVY」は大阪府に3店舗展開しており、ご自宅や職場に近いスタジオを選べます。マシンピラティスを中心に、初心者から経験者まで幅広く対応。通いやすい立地にあるため、継続しやすいと好評。',
    access: '大阪府内3店舗（詳細は公式サイト参照）',
    address: '大阪府（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '大阪府内3店舗展開。自宅や職場に近いスタジオを選べる。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '3店舗相互利用可',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['通いやすい立地', '店舗選択可', 'ボディメイク', '継続しやすい'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '3店舗展開'],
    },
  },
  {
    name: 'STABE 本町',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['大阪本町', 'マシン専門', 'PILATES × YOGA', '背骨の柔軟性'],
    description: '大阪本町マシンピラティス専門スタジオ STABE。背骨の柔らかさが若さの秘訣 "You are only as young as your spine is flexible." ピラティス×ヨガの融合で、背骨の柔軟性を高め、若々しい身体づくりをサポート。STABEのピラティスマシン完備。',
    access: '大阪本町（詳細は公式サイト参照）',
    address: '大阪府大阪市中央区本町（詳細は公式サイト参照）',
    popularPlan: {
      name: 'PILATES × YOGA',
      description: '背骨の柔軟性を高めるピラティス×ヨガの融合プログラム。',
      price: '要問合せ',
    },
    options: [
      'マシンピラティス',
      'ヨガ',
      'PILATES × YOGA融合',
      '背骨の柔軟性向上',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['背骨の柔軟性', 'ピラティス×ヨガ', '若々しい身体', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシン完備', 'ヨガスペース', '本町駅近', 'PILATES × YOGA'],
    },
  },
  {
    name: 'PILATES KASANE 大阪',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '体験 2,200円',
    trial: '体験レッスン 2,200円',
    features: ['お手頃体験料金', '少人数制', '健康美を引き出す', '丁寧な指導'],
    description: 'PILATES KASANEは、体験料金が2,200円というお手頃価格から、気軽にピラティスを試すことができます。一人一人の「健康美」を引き出す少人数制のピラティススタジオ。心と身体に向き合う日々を丁寧につみ「かさね」る。体験レッスンも少人数制で丁寧に行いますので、初心者の方も安心してご参加いただけます。',
    access: '大阪市内（詳細は公式サイト参照）',
    address: '大阪府大阪市（詳細は公式サイト参照）',
    popularPlan: {
      name: '少人数制グループレッスン',
      description: '一人一人の健康美を引き出す丁寧な指導。体験2,200円とお手頃。',
      price: '体験 2,200円',
    },
    options: [
      'グループレッスン（少人数制）',
      'プライベートレッスン',
      '体験レッスン 2,200円',
      '健康美を引き出す',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['健康美を引き出す', 'お手頃に体験', 'ボディメイク', '初心者歓迎'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '少人数制', 'お手頃体験'],
    },
  },
]

export default async function OsakaAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              大阪のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              大阪エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                <h3 className="mb-3 text-xl font-bold text-warm-800">音楽×暗闇で楽しく</h3>
                <p className="mb-4 text-warm-600">
                  音楽に合わせて楽しくボディメイクしたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティスK 大阪
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">完全個室パーソナル</h3>
                <p className="mb-4 text-warm-600">
                  マンツーマンで質の高い指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：fis.pilates（12店舗）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">整体×ピラティス</h3>
                <p className="mb-4 text-warm-600">
                  身体の歪みも整えたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：La pilates 天王寺店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">女性専用・充実設備</h3>
                <p className="mb-4 text-warm-600">
                  快適な環境で集中したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：DAYS PILATES（心斎橋・梅田）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">世界最大級</h3>
                <p className="mb-4 text-warm-600">
                  実績と安心感を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：CLUB PILATES 大阪
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">お手頃体験</h3>
                <p className="mb-4 text-warm-600">
                  2,200円で試したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：PILATES KASANE 大阪
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
                <h3 className="mb-4 text-xl font-bold text-warm-800">〜15,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK 大阪（月4回 13,420円）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>La pilates 天王寺店（月1回 12,000円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">パーソナル専門</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>fis.pilates（完全個室12店舗）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>DAYS PILATES（要問合せ）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>CLUB PILATES（要問合せ）</span>
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
              4ステップで選ぶ！大阪のピラティススタジオ
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
                  月額12,000円〜13,420円など幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  心斎橋、梅田、天王寺、本町など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
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
                  大阪でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  PILATES KASANE 大阪がおすすめです。体験料金が2,200円とお手頃で、少人数制で丁寧に指導してくれるので、初心者の方も安心してご参加いただけます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  大阪で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  La pilates 天王寺店がサブスク月1回12,000円〜で最もリーズナブルです。また、ピラティスK 大阪は月4回13,420円で無料体験レッスンも実施しています。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、3つあります。ピラティスK 大阪、fis.pilates（12店舗）、DAYS PILATES（心斎橋・梅田）はすべて女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 大阪とCLUB PILATES 大阪は無料、PILATES KASANE 大阪は2,200円、La pilates 天王寺店は3,000円、その他スタジオは要問合せです。
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
                  完全個室のパーソナルスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、fis.pilatesは大阪府下に12直営店舗を構える女性専用マシンピラティス専門パーソナルスタジオです。資格所有女性トレーナーと完全個室マンツーマンで、質の高いピラティスを受けられます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  整体とピラティスを組み合わせたスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、La pilates 天王寺店では、整体×マシンピラティスの組み合わせ施術を受けられます。身体の歪みを整えながらボディメイクできると好評です。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  ピラティス×ヨガのスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、STABE 本町では、PILATES × YOGAの融合プログラムを提供しています。背骨の柔軟性を高め、若々しい身体づくりをサポートします。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              大阪で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              大阪には多様なピラティススタジオがあります。音楽×暗闇のピラティスK、完全個室パーソナルのfis.pilates（12店舗）、整体×ピラティスのLa pilates天王寺店、女性専用・充実設備のDAYS PILATES、世界最大級のCLUB PILATES、お手頃体験のPILATES KASANEなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
            </p>
            <p className="mb-8 text-warm-50">
              まずは体験レッスンで、スタジオの雰囲気やインストラクターとの相性を確認してみましょう。多くのスタジオが無料〜有料で体験レッスンを実施しています。
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
              <li className="font-semibold text-warm-800">大阪</li>
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
                name: '大阪',
                item: 'https://pilates-biyori.com/area/osaka',
              },
            ],
          }),
        }}
      />
    </>
  )
}
