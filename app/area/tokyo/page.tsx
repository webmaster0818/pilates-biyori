import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】東京のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '東京都のおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates',
    image: '/images/pilates2.jpg',
    rating: 4.3,
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '全店相互利用可'],
    description: '全国150店舗以上を展開する日本最大級のピラティススタジオ。22年の実績と累計500万回以上のレッスン提供。マットグループ、マシングループ、プライベートレッスンと多彩なプログラム。全店舗相互利用可能で、自宅近くや職場近くなど生活シーンに合わせて自由に利用できます。医療機関も推奨する高品質なレッスンを提供。',
    access: '東京都内に多数展開',
    address: '東京都内（詳細は公式サイト参照）',
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
      hours: '店舗により異なる（早朝〜夜まで開催）',
      closed: '店舗により異なる',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'ピラティスK',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '暗闇レッスン', '東京都内多数'],
    description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。暗闇×音楽×マシンピラティスの融合レッスンが人気。中目黒、池袋、銀座など都内に多数展開。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。Forbes Japan Women Award 2021企業部門第一位受賞。',
    access: '東京都内多数（中目黒、池袋、銀座、吉祥寺など）',
    address: '東京都内（詳細は公式サイト参照）',
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
      hours: '店舗により異なる（10:00-22:00が目安）',
      closed: '店舗により異なる',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'CLUB PILATES',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', '世界最大級', 'グループ＆プライベート', '東京都内多数'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。世界各国で800店舗以上を展開。グループレッスンからプライベートレッスンまで幅広く対応。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラムを提供。インストラクター養成講座も開講。',
    access: '東京都内多数展開',
    address: '東京都内（詳細は公式サイト参照）',
    popularPlan: {
      name: '体験レッスン',
      description: '初回無料で世界最大級のピラティスメソッドを体験できます。',
      price: '体験 無料',
    },
    options: [
      'グループレッスン（月額プラン）',
      'プライベートレッスン（要問合せ）',
      'ウェアレンタル（月額 2,200円）',
      'Teacher Training（インストラクター養成講座）',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '店舗により異なる',
      closed: '店舗により異なる',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '最新マシン完備'],
    },
  },
  {
    name: 'ピラティスミラー',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['KONAMI運営', '天井鏡', '初心者向け', '短時間効果的'],
    description: 'コナミスポーツクラブが運営するマシンピラティススタジオ。スタジオの天井に設置した鏡と専用ピラティスマシンを活用することで、初心者の方も自分の身体の動きを確認しながら、短時間でも効果的にエクササイズできます。インナーマッスルに働きかけ、姿勢改善やボディメイクに効果的。',
    access: '東京都内（KONAMI施設内）',
    address: '東京都内（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティスコース',
      description: '天井鏡で動きを確認しながら効果的にエクササイズ。初心者でも安心。',
      price: '要問合せ',
    },
    options: [
      'コナミスポーツクラブ会員特典あり',
      '専用マシン使用',
      '天井鏡システム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'インナーマッスル強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: 'コナミ施設により異なる',
      closed: 'コナミ施設により異なる',
      facilities: ['天井鏡', '専用マシン', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'Studio Yoggy',
    image: '/images/pilates3.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['ヨガ＆ピラティス', '全国展開', '駅徒歩5分', '清潔な空間'],
    description: '全国展開のヨガ・ピラティス専門スタジオ。すべてのスタジオが駅徒歩5分圏内。清潔で開放感のある空間で、のびのびと深い呼吸を楽しめます。一年を通して運動に適した室温に保たれたスタジオ。ヨガとピラティスの両方を楽しめるのが魅力。初心者から経験者まで幅広く対応。',
    access: '東京都内多数（全店舗駅徒歩5分圏内）',
    address: '東京都内（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ヨガ＆ピラティスプラン',
      description: 'ヨガとピラティスの両方を楽しめるプラン。多様なクラスから選択可能。',
      price: '要問合せ',
    },
    options: [
      'ヨガクラス',
      'ピラティスクラス',
      'パーソナルトレーニング',
      '全店相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ヨガ＆ピラティス両方', '柔軟性向上', 'リラックス', 'ボディメイク'],
    },
    basicInfo: {
      hours: '店舗により異なる',
      closed: '店舗により異なる',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '清潔な空間', '適温管理'],
    },
  },
  {
    name: 'ルルト（luluto）',
    image: '/images/pilates4.jpg',
    rating: 4.3,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士考案', '医療的視点', '身体の専門家', 'オーダーメイド'],
    description: '身体の専門家である理学療法士が考案したピラティススタジオ。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。一人ひとりの身体の状態に合わせたオーダーメイドプログラムを提供。リハビリから本格的なボディメイクまで幅広く対応。',
    access: '東京都内',
    address: '東京都内（詳細は公式サイト参照）',
    popularPlan: {
      name: '理学療法士監修プログラム',
      description: '医療的視点からの身体分析。一人ひとりに合わせたオーダーメイドプログラム。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      '理学療法士による身体分析',
      'リハビリ対応',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['リハビリ', '身体の不調改善', '正しい動き習得', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['理学療法士常駐', 'プライベート空間', '医療的視点'],
    },
  },
  {
    name: 'K Village Pilates',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['パーソナル専門', '新宿西口徒歩3分', 'マンツーマン', '初心者歓迎'],
    description: '新宿駅西口から徒歩3分のパーソナルマシンピラティススタジオ。完全マンツーマンで、一人ひとりの目的や体力に合わせたオーダーメイドレッスン。初心者から上級者まで、それぞれのレベルに合わせた丁寧な指導。TK新都心ビル地下1階の静かな環境で集中してトレーニングできます。',
    access: '新宿駅西口から徒歩3分',
    address: '東京都（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全マンツーマン指導。あなただけのオーダーメイドプログラム。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      '初心者向けプログラム',
      '上級者向けプログラム',
      'マンツーマン指導',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['短期集中ボディメイク', 'マンツーマン指導希望', '姿勢改善', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'プライベート空間'],
    },
  },
  {
    name: 'タクトエイト（takt8）',
    image: '/images/pilates3.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士立ち上げ', '八王子', 'ヨガ＆ピラティス', 'オンライン対応'],
    description: '2011年に理学療法士が立ち上げた、八王子のヨガ・ピラティス専門スタジオ。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。オンラインレッスンも開催しており、自宅からでも受講可能。専門知識に基づいた安全で効果的な指導が魅力。',
    access: '八王子',
    address: '東京都八王子市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ヨガ＆ピラティスプログラム',
      description: '理学療法士監修のプログラム。オンラインレッスンも可能。',
      price: '要問合せ',
    },
    options: [
      'スタジオレッスン',
      'オンラインレッスン',
      'ヨガクラス',
      'ピラティスクラス',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['正しい動き習得', '身体の不調改善', 'オンライン受講', '地域密着'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['理学療法士監修', 'オンライン対応', 'ロッカー', 'パウダールーム'],
    },
  },
]

export default async function TokyoAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              東京のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              東京都で人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                  おすすめ：ピラティスK
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">全国最大級</h3>
                <p className="mb-4 text-warm-600">
                  実績と安心感を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：zen place pilates
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">世界最大級</h3>
                <p className="mb-4 text-warm-600">
                  アメリカ発の本格メソッドを体験したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：CLUB PILATES
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">理学療法士監修</h3>
                <p className="mb-4 text-warm-600">
                  医療的視点から身体を整えたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ルルト / タクトエイト
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">KONAMI運営</h3>
                <p className="mb-4 text-warm-600">
                  大手スポーツクラブの安心感を求める方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティスミラー
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">パーソナル専門</h3>
                <p className="mb-4 text-warm-600">
                  マンツーマンで集中指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：K Village Pilates
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
                    <span>zen place pilates（月4回 9,625円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜20,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK（月4回 13,420円）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">プライベート・その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>K Village Pilates（パーソナル専門）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>CLUB PILATES（体験無料）</span>
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
              4ステップで選ぶ！東京のピラティススタジオ
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
                  月額9,625円〜40,000円まで幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  東京都内に多数展開するスタジオなら、自宅や職場から通いやすい店舗が見つかります。
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
                  東京でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilatesがおすすめです。全国150店舗以上を展開し、22年の実績があります。初心者向けのプログラムが充実しており、全店舗相互利用可能なので、自宅や職場近くで通いやすい店舗を選べます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  東京で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilatesが月4回9,625円で最も安く通えます。また、CLUB PILATESは体験レッスンが無料なので、まずは試してみたい方におすすめです。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、ピラティスKは女性専用スタジオです。音楽×暗闇×マシンピラティスの融合レッスンで、男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。CLUB PILATESは無料、zen place pilatesやその他スタジオは有料ですが、入会すると入会金が無料になるなどの特典があります。
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
                  理学療法士監修のスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、ルルトとタクトエイトは理学療法士が考案・立ち上げたスタジオです。医療現場での知見を活かし、「身体を正しく動かす」ことを重視。リハビリから本格的なボディメイクまで幅広く対応しています。
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
                  パーソナルレッスン専門のスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、K Village Pilatesは新宿駅西口徒歩3分のパーソナル専門スタジオです。完全マンツーマンで、一人ひとりの目的や体力に合わせたオーダーメイドレッスンを提供しています。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  大手スポーツクラブが運営するピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、ピラティスミラーはコナミスポーツクラブが運営しています。スタジオの天井に設置した鏡と専用マシンを活用し、初心者でも自分の身体の動きを確認しながら短時間で効果的にエクササイズできます。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              東京で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              東京には多様なピラティススタジオがあります。全国最大級のzen place、音楽×暗闇のピラティスK、世界最大級のCLUB PILATES、KONAMI運営のピラティスミラー、理学療法士監修のルルト・タクトエイトなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
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
              <li className="font-semibold text-warm-800">東京</li>
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
                name: '東京',
                item: 'https://pilates-biyori.com/area/tokyo',
              },
            ],
          }),
        }}
      />
    </>
  )
}
