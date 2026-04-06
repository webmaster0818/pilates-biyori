import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】仙台のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '仙台エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,仙台,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 仙台PARCO2店',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '仙台駅直結', 'PARCO2内'],
    description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。仙台駅西口より徒歩4分、仙台PARCO2の5階。暗闇×音楽×マシンピラティスの融合レッスンが人気。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。お買い物ついでに通えるアクセスの良さも魅力。',
    access: '仙台駅西口より徒歩4分 / 地下鉄東西線仙台駅南1番出口より徒歩3分',
    address: '宮城県仙台市青葉区中央3丁目7-5 仙台PARCO2 5F',
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
      hours: '月・水・金 10:00-21:30 / 火・木 9:30-21:30 / 土・祝 9:30-20:00 / 日 10:00-19:00',
      closed: '第一月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'zen place pilates 仙台',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['マット＆マシン', '全国展開', '仙台駅徒歩3分', '男性OK'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。JR仙台駅徒歩3分の好立地。マットグループ、マシングループ、プライベートレッスンと多彩なレッスンを提供。2023年8月3日グランドオープン、東北初上陸・宮城県第一号店。男性もOKで、専門知識を持つエデュケーターが丁寧に指導します。',
    access: 'JR仙台駅徒歩3分',
    address: '宮城県仙台市青葉区中央1丁目6-27 仙信ビル 3階',
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
      hours: '平日 10:00-21:00 / 土日祝 10:00-17:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'La pilates 仙台店',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×ピラティス', '女性専用', '仙台駅徒歩4分', '骨膜整体'],
    description: '整体とマシンピラティスを融合させた女性専用プライベートスタジオ。JR仙台駅より徒歩4分。2026年1月NEW OPEN。独自の「骨膜整体 × マシンピラティス」プログラムで、肩こり・腰痛・姿勢の悩みを根本からケア。ウッド調の温かみある内装でリラックスしながらトレーニングできます。',
    access: 'JR仙台駅より徒歩4分',
    address: '宮城県仙台市青葉区中央4丁目4-8 中央4丁目ビル3F',
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
    name: 'Rintosull 仙台駅前店',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['LAVA運営', 'ホットヨガ併用可', '仙台駅近', '初心者87%'],
    description: 'ホットヨガスタジオLAVAを運営する会社が手がけるマシンピラティス専門スタジオ。会員様の87%以上がマシンピラティス未経験からスタート。初心者でも安心して取り組める環境づくりを大切にしています。Rintosull全店とLAVA全店を相互利用できるお得なプランも用意。',
    access: '仙台駅近',
    address: '宮城県仙台市青葉区中央3-1-24 荘銀ビル3F ホットヨガスタジオLAVA仙台駅前店内',
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
  {
    name: 'REborn（リボーン）',
    image: '/images/pilates3.jpg',
    rating: 4.3,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['宮城県初', 'マンツーマン', '資格取得可', '6歳〜70代'],
    description: '2018年に宮城県初のピラティス専門サロンとしてオープン。マンツーマンレッスンをメインとし、6歳〜70代まで1,000人以上の方の身体と向き合ってきた実績があります。体験レッスンから資格取得コースまで幅広く対応。身体の歪みや癖、冷えを解消して心身のバランスを整えます。',
    access: '詳細は公式サイト参照',
    address: '仙台市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンツーマンレッスン',
      description: '一人ひとりに合わせたオーダーメイドプログラム。初心者から上級者まで対応。',
      price: '要問合せ',
    },
    options: [
      'ペアレッスン',
      'グループレッスン',
      '資格取得コース',
      'メンズピラティス（紹介制）',
    ],
    userProfile: {
      ageRange: '6歳〜70代まで幅広い',
      genderRatio: '女性95% / 男性5%',
      purpose: ['身体の歪み解消', '冷え改善', '姿勢改善', '資格取得'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マンツーマン専用スペース', 'プライベート空間', '資格養成講座'],
    },
  },
  {
    name: 'Two Three 仙台一番町',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['少人数制', '最大8名', '2024年7月OPEN', 'ピラティスアカデミー運営'],
    description: '2024年7月にオープンした、仙台一番町エリアにあるマシンピラティス専門スタジオ。最大8名までの少人数制グループレッスンが特徴で、一人ひとりに的確な指導が行き届くよう配慮。経験豊富なインストラクターが所属し、自社でピラティスアカデミーを運営。定期的な研修制度により常に高い指導水準を維持。',
    access: '仙台一番町エリア',
    address: '仙台市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン（最大8名）',
      description: '少人数制で一人ひとりに的確な指導。初心者からベテランまで対応。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'リフォーマー・スパインコレクター・コンビチェア・タワーなど充実',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['美しいカラダづくり', '姿勢改善', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['リフォーマー', 'スパインコレクター', 'コンビチェア', 'タワー', 'マシン充実'],
    },
  },
  {
    name: 'ピラティススタジオDEP 仙台店 Calm',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士監修', '一番町', '2023年11月OPEN', '高品質マシン'],
    description: '2023年11月1日にOPENしたピラティススタジオ。全スタッフが理学療法士で、高品質のピラティス専用マシンを主体に、理学療法士の知識を組み合わせたDEPオリジナルトレーニングで効果的に体を整えることができます。一番町中央ビル内で通いやすい立地。繰り返すごとに身体を良い状態に導き、一生ものの知識が習得できます。',
    access: '一番町エリア',
    address: '宮城県仙台市青葉区一番町2丁目5-5 東一中央ビルC棟402',
    popularPlan: {
      name: '月額会員プラン',
      description: '理学療法士監修のオリジナルトレーニング。姿勢改善・パフォーマンス向上に効果的。',
      price: '要問合せ',
    },
    options: [
      '理学療法士による専門指導',
      '高品質ピラティス専用マシン使用',
      'DEPオリジナルトレーニング',
      '全国口コミ評価トップクラス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢・歪み改善', 'パフォーマンス向上', 'リハビリ', '体のケア'],
    },
    basicInfo: {
      hours: '月・土 9:00-18:00 / 日 9:00-19:00 / 火〜金 9:00-20:00',
      closed: '年末年始',
      facilities: ['高品質マシン', 'ロッカー', 'パウダールーム', '理学療法士常駐'],
    },
  },
  {
    name: 'Repilates 仙台泉大沢店',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '3ヶ月通い放題 5,000円（キャンペーン）',
    trial: '無料体験会・内覧会受付中',
    features: ['女性専用', 'イオンタウン内', '2026年4月OPEN予定', '通い放題'],
    description: 'イオンタウン仙台泉大沢内に2026年4月4日OPEN予定の女性専用マシンピラティス専門スタジオ。都内・関東圏に複数店舗展開するスタジオの仙台進出。最大13名のグループピラティスで運動習慣を身につける。インストラクターがしっかりサポートし、効果を実感できます。お得に始めたい方におすすめ。',
    access: 'イオンタウン仙台泉大沢内',
    address: '宮城県仙台市泉区大沢1丁目5-1 イオンタウン仙台泉大沢店',
    popularPlan: {
      name: '3ヶ月通い放題キャンペーン',
      description: 'オープン記念の特別キャンペーン。3ヶ月間5,000円で通い放題。',
      price: '3ヶ月通い放題 5,000円（キャンペーン）',
    },
    options: [
      '無料体験会・内覧会受付中',
      'グループレッスン（最大13名）',
      '通常プラン（要問合せ）',
      '口コミ限定特典あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['運動習慣づくり', 'ボディメイク', '友達と通いたい', 'お得に始めたい'],
    },
    basicInfo: {
      hours: '10:00〜21:00',
      closed: '不定休',
      facilities: ['女性専用', 'ロッカー', 'パウダールーム', 'イオンタウン内', '駐車場あり'],
    },
  },
]

export default async function SendaiAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              仙台のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              仙台エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                  おすすめ：ピラティスK 仙台PARCO2店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">整体×ピラティス</h3>
                <p className="mb-4 text-warm-600">
                  肩こり・腰痛を根本から改善したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：La pilates 仙台店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">全国展開の大手</h3>
                <p className="mb-4 text-warm-600">
                  実績と安心感を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：zen place pilates 仙台
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">理学療法士監修</h3>
                <p className="mb-4 text-warm-600">
                  専門知識に基づいた指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティススタジオDEP 仙台店 Calm
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">マンツーマン専門</h3>
                <p className="mb-4 text-warm-600">
                  一人ひとりに合わせた指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：REborn（リボーン）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">お得に始める</h3>
                <p className="mb-4 text-warm-600">
                  キャンペーン価格で始めたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：Repilates 仙台泉大沢店
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
                    <span>zen place pilates 仙台（月4回 9,625円〜）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>Repilates 仙台泉大沢店（3ヶ月通い放題 5,000円キャンペーン）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜20,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK 仙台PARCO2店（月4回 13,420円）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>La pilates 仙台店（月1回 12,000円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">プライベート専門</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>REborn（リボーン）（要問合せ）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>zen place pilates 仙台（月4回 33,880円）</span>
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
              4ステップで選ぶ！仙台のピラティススタジオ
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
                  仙台駅徒歩3分や一番町エリアなど、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
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
                  仙台でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  Rintosull 仙台駅前店がおすすめです。会員様の87%以上がマシンピラティス未経験からスタートしており、初心者でも安心して取り組める環境づくりを大切にしています。ホットヨガLAVAを運営する会社が手がけているので安心感もあります。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  仙台駅直結で通えるピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、2つあります。ピラティスK 仙台PARCO2店（仙台駅西口徒歩4分・PARCO2内）とzen place pilates 仙台（JR仙台駅徒歩3分）。天候に左右されず通えるので、仕事帰りやお買い物ついでに便利です。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  仙台で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilates 仙台が月4回9,625円で最も安く通えます。また、Repilates 仙台泉大沢店はオープン記念キャンペーンで3ヶ月通い放題5,000円と非常にお得です（期間限定）。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、3つあります。ピラティスK 仙台PARCO2店、La pilates 仙台店、Repilates 仙台泉大沢店はすべて女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 仙台PARCO2店とRepilates 仙台泉大沢店は無料、La pilates 仙台店は3,000円、zen place pilates 仙台やその他スタジオは要問合せです。
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
                  はい、効果が期待できます。特にLa pilates 仙台店は整体とピラティスを組み合わせた独自プログラムで肩こり・腰痛を根本から改善。ピラティススタジオDEP 仙台店 Calmは理学療法士監修で姿勢・歪み改善に特化しています。
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
                  資格を取得したいのですが、養成コースはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、REborn（リボーン）で資格取得コースを開講しています。2018年に宮城県初のピラティス専門サロンとしてオープンし、1,000人以上の方の身体と向き合ってきた実績があります。体験レッスンから資格取得まで幅広く対応しています。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              仙台で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              仙台には多様なピラティススタジオがあります。音楽×暗闇のピラティスK、整体×ピラティスのLa pilates、全国展開のzen place、理学療法士監修のDEP、マンツーマン専門のREbornなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
            </p>
            <p className="mb-8 text-warm-50">
              まずは体験レッスンで、スタジオの雰囲気やインストラクターとの相性を確認してみましょう。多くのスタジオが無料〜3,000円で体験レッスンを実施しています。
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
              <li className="font-semibold text-warm-800">仙台</li>
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
                name: '仙台',
                item: 'https://pilates-biyori.com/area/sendai',
              },
            ],
          }),
        }}
      />
    </>
  )
}
