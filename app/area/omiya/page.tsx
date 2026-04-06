import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】大宮のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '大宮エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,大宮,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 大宮店',
    image: '/images/pilates2.jpg',
    rating: 4.1,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '大宮駅徒歩3分', '暗闇レッスン'],
    description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。JR大宮駅から徒歩3分とアクセス抜群。暗闇×音楽×マシンピラティスの融合レッスンが人気。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。',
    access: 'JR大宮駅から徒歩3分',
    address: '埼玉県さいたま市大宮区（詳細は公式サイト参照）',
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
    name: 'zen place pilates 大宮',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '大宮駅東口徒歩6分', '男性OK'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。JR大宮駅東口から徒歩6分。マットグループ、マシングループ、プライベートレッスンと多彩なレッスンを提供。全店舗相互利用可能で、自宅近くや職場近くなど生活シーンに合わせて自由に利用できます。男性もOKで、体験・見学もお気軽に。',
    access: 'JR大宮駅東口から徒歩6分',
    address: '埼玉県さいたま市大宮区（詳細は公式サイト参照）',
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
    name: 'the SILK 大宮',
    image: '/images/pilates4.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['高級感', '大宮駅徒歩2分', 'マシン専門', 'パウダールーム充実'],
    description: '大宮駅から徒歩2分の好立地。高級感あふれる落ち着いた空間で、質の高いマシンピラティスを提供。充実したパウダールームで、快適に身支度できます。the SILKならではの上質な空間で、リラックスしながら効果的にボディメイク。',
    access: '大宮駅から徒歩2分',
    address: '埼玉県さいたま市大宮区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティスグループレッスン',
      description: '高級感あふれる空間で上質なピラティス体験。少人数制で丁寧な指導。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '体験レッスン',
      '充実のパウダールーム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['上質な空間で運動', 'ボディメイク', 'リラックス', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', '充実のパウダールーム', 'Wi-Fi', 'マシン完備', '高級感ある内装'],
    },
  },
  {
    name: 'La pilates 大宮店',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×ピラティス', '女性専用', '骨膜整体', 'プライベート空間'],
    description: '整体とマシンピラティスを融合させた女性専用プライベートスタジオ。独自の「骨膜整体 × マシンピラティス」プログラムで、肩こり・腰痛・姿勢の悩みを根本からケア。ウッド調の温かみある内装でリラックスしながらトレーニングできます。',
    access: '大宮エリア',
    address: '埼玉県さいたま市大宮区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'サブスク 月1回コース',
      description: '整体とマシンピラティスの融合プログラム。初心者から経験者まで対応。',
      price: '月1回 12,000円（税込）',
    },
    options: [
      '月2回コース（月額 22,000円・単価 11,000円）',
      '月4回コース（月額 40,000円・単価 10,000円）',
      '月6回コース（月額 54,000円・単価 9,000円）',
      '年払いコース（さらにお得）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['肩こり・腰痛改善', '姿勢改善', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '9:00〜21:00（最終受付20:00）',
      closed: '年末年始',
      facilities: ['ロッカー', 'パウダールーム', 'マシン4台', 'プライベート空間'],
    },
  },
  {
    name: 'luluto 大宮店',
    image: '/images/pilates3.jpg',
    rating: 4.3,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士考案', '医療的視点', '身体の専門家', 'オーダーメイド'],
    description: '身体の専門家である理学療法士が考案したピラティススタジオ。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。一人ひとりの身体の状態に合わせたオーダーメイドプログラムを提供。リハビリから本格的なボディメイクまで幅広く対応。',
    access: '大宮エリア',
    address: '埼玉県さいたま市大宮区（詳細は公式サイト参照）',
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
    name: 'EIGHT 大宮',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['マンツーマン', 'パーソナルジム併設', 'マシンピラティス', 'トレーニング併用可'],
    description: '大宮のマンツーマンマシンピラティスジム。ご自身に合ったマンツーマンのマシンピラティスとパーソナルトレーニングの組み合わせが可能。パーソナルジムの施設も隣接しており、目的に合わせて柔軟にプログラムを組めます。完全個別指導で効果的にボディメイク。',
    access: '大宮エリア',
    address: '埼玉県さいたま市大宮区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンツーマンマシンピラティス',
      description: 'マシンピラティスとパーソナルトレーニングの組み合わせ可能。',
      price: '要問合せ',
    },
    options: [
      'マシンピラティス',
      'パーソナルトレーニング',
      'ピラティス×トレーニング併用',
      '完全マンツーマン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['短期集中ボディメイク', 'マンツーマン指導希望', '筋力アップ', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'パーソナルジム併設'],
    },
  },
  {
    name: 'Studio Yoggy 大宮',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['ヨガ＆ピラティス', '大宮駅徒歩4分', '清潔な空間', '開放的'],
    description: '全国展開のヨガ・ピラティス専門スタジオ。大宮駅から徒歩4分。清潔で開放的な空間で、のびのびと深い呼吸を楽しめます。大きな窓のある開放的なスタジオで、自分だけのとっておきの時間を過ごせます。ヨガとピラティスの両方を楽しめるのが魅力。',
    access: '大宮駅から徒歩4分',
    address: '埼玉県さいたま市大宮区（詳細は公式サイト参照）',
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
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '清潔な空間', '開放的なスタジオ'],
    },
  },
  {
    name: 'Rintosull 大宮',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['LAVA運営', 'ホットヨガ併用可', '初心者87%', '相互利用可'],
    description: 'ホットヨガスタジオLAVAを運営する会社が手がけるマシンピラティス専門スタジオ。会員様の87%以上がマシンピラティス未経験からスタート。初心者でも安心して取り組める環境づくりを大切にしています。Rintosull全店とLAVA全店を相互利用できるお得なプランも用意。',
    access: '大宮エリア',
    address: '埼玉県さいたま市大宮区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス通い放題プラン',
      description: 'Rintosull全店でマシンピラティスが通い放題。初心者でも安心のサポート体制。',
      price: '要問合せ',
    },
    options: [
      'マシンピラティス＋ホットヨガ通い放題プラン',
      'マシンピラティス＋ホットヨガ＋暗闇キックボクシング通い放題プラン',
      'LAVA全店＋BurnesStyle全店相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['運動習慣づくり', 'ボディメイク', '姿勢改善', '複数エクササイズ併用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'LAVA併設'],
    },
  },
]

export default async function OmiyaAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              大宮のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              大宮エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                  おすすめ：ピラティスK 大宮店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">全国最大級</h3>
                <p className="mb-4 text-warm-600">
                  実績と安心感を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：zen place pilates 大宮
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">高級感ある空間</h3>
                <p className="mb-4 text-warm-600">
                  上質な空間で運動したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：the SILK 大宮
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">整体×ピラティス</h3>
                <p className="mb-4 text-warm-600">
                  肩こり・腰痛を根本から改善したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：La pilates 大宮店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">理学療法士監修</h3>
                <p className="mb-4 text-warm-600">
                  医療的視点から身体を整えたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：luluto 大宮店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">マンツーマン専門</h3>
                <p className="mb-4 text-warm-600">
                  パーソナル指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：EIGHT 大宮
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
                    <span>zen place pilates 大宮（月4回 9,625円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜20,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK 大宮店（月4回 13,420円）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>La pilates 大宮店（月1回 12,000円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">プライベート・その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>EIGHT 大宮（マンツーマン専門）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>the SILK 大宮（上質空間）</span>
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
              4ステップで選ぶ！大宮のピラティススタジオ
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
                  大宮駅徒歩2-6分など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
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
                  大宮でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  Rintosull 大宮がおすすめです。会員様の87%以上がマシンピラティス未経験からスタートしており、初心者でも安心して取り組める環境づくりを大切にしています。ホットヨガLAVAを運営する会社が手がけているので安心感もあります。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  大宮駅から一番近いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  the SILK 大宮が大宮駅から徒歩2分で最もアクセスが良いです。次いでピラティスK 大宮店が徒歩3分、Studio Yoggy 大宮が徒歩4分です。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  大宮で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilates 大宮が月4回9,625円で最も安く通えます。全国150店舗以上を展開する大手スタジオなので、実績と安心感もあります。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、2つあります。ピラティスK 大宮店とLa pilates 大宮店は女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 大宮店は無料、La pilates 大宮店は3,000円、zen place pilates 大宮やその他スタジオは要問合せです。
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
                  肩こりや腰痛の改善に効果はありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、効果が期待できます。特にLa pilates 大宮店は整体とピラティスを組み合わせた独自プログラムで肩こり・腰痛を根本から改善。luluto 大宮店は理学療法士監修で身体の不調改善に特化しています。
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
                  マンツーマンで指導してもらえるスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、EIGHT 大宮がマンツーマン専門スタジオです。マシンピラティスとパーソナルトレーニングの組み合わせが可能で、一人ひとりの目的に合わせた完全個別指導を受けられます。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              大宮で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              大宮には多様なピラティススタジオがあります。音楽×暗闇のピラティスK、全国最大級のzen place、上質空間のthe SILK、整体×ピラティスのLa pilates、理学療法士監修のlulutoなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
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
              <li className="font-semibold text-warm-800">大宮</li>
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
                name: '大宮',
                item: 'https://pilates-biyori.com/area/omiya',
              },
            ],
          }),
        }}
      />
    </>
  )
}
