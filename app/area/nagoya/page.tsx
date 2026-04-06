import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】名古屋のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '名古屋エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,名古屋,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 久屋大通パーク店',
    image: '/images/pilates2.jpg',
    rating: 4.1,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', 'レイヤード久屋大通パーク内', '暗闇レッスン'],
    description: 'ピラティスK久屋大通パーク店は、名古屋市中区にある女性専用マシンピラティススタジオ。レイヤード久屋大通パークに入るから、平日は仕事帰りに、休日はお買い物ついでに最適。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '栄町駅近（レイヤード久屋大通パーク内）',
    address: '愛知県名古屋市中区（詳細は公式サイト参照）',
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
    name: 'luluto 名古屋（名駅店・栄店・金山店・大曽根店）',
    image: '/images/pilates3.jpg',
    rating: 4.3,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士考案', '名古屋市内4店舗', 'マンツーマン', '医療的視点'],
    description: '身体の専門家である理学療法士が考案したピラティススタジオ。名古屋市内に4店舗（名駅店・栄店・金山店・大曽根店）展開。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。一人ひとりの身体の状態に合わせたオーダーメイドプログラムを提供。リハビリから本格的なボディメイクまで幅広く対応。',
    access: '名駅・栄・金山・大曽根（各駅近）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
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
      facilities: ['理学療法士常駐', 'プライベート空間', '医療的視点', '4店舗展開'],
    },
  },
  {
    name: 'Two Three 名古屋',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['少人数制', '最大8名', '女性に人気', 'ピラティスアカデミー運営'],
    description: '名古屋で女性に人気のピラティススタジオ7選に紹介されたスタジオ。最大8名までの少人数制グループレッスンが特徴で、一人ひとりに的確な指導が行き届くよう配慮。誰でも通いやすいピラティススタジオです。まずは体験レッスンからお気軽にお申し込みください。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
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
    name: 'REBORN（リボーン）名古屋',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['充実設備', 'プライベート中心', 'あらゆる目的に対応', 'グループ不安な方OK'],
    description: '充実した設備により、あなたのあらゆる目的を叶えることができます。ピラティスを深く学びたい方、グループレッスンへの参加が不安な方など、どのような方でもご対応いたしますのでご相談ください。プライベートレッスンを中心に、一人ひとりに合わせた丁寧な指導を提供。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '充実した設備であらゆる目的に対応。一人ひとりに合わせた丁寧な指導。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'ピラティスを深く学びたい方向け',
      '充実設備',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ピラティスを深く学ぶ', 'グループ不安解消', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['充実設備', 'プライベート空間', 'マシン完備'],
    },
  },
  {
    name: 'ピラティススタジオアステル（栄店・名駅店）',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['栄・名駅2店舗', '東京南青山も展開', '身体を紐解く', '1回で効果実感'],
    description: '名古屋市 栄・名駅、東京 南青山のピラティス＆トレーニングスタジオ、アステルです。自分の癖を知り、身体の状態を知り、心や身体を紐解いていくアステルのピラティス。たった1回のレッスンでもその効果を感じていただけるでしょう。名古屋市内に2店舗（栄店・名駅店）展開。',
    access: '栄・名駅（各駅近）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティス＆トレーニング',
      description: '自分の癖を知り、身体を紐解く。1回のレッスンでも効果を実感。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'ピラティス',
      'トレーニング',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['身体の癖を知る', '効果を早く実感', 'ボディメイク', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['栄店・名駅店', 'マシン完備', 'トレーニング設備'],
    },
  },
  {
    name: 'ナグスタジオ（名古屋市内4店舗）',
    image: '/images/pilates4.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['4店舗全店利用可', 'ピラティス＆ホットヨガ', 'イオン内店舗あり', '溶岩石ヨガ'],
    description: 'ナグスタジオに入会すると、ナディアパーク店、星が丘テラス店、イオン則武新町店、イオンモールナゴヤドーム前店の全店のピラティスレッスン・溶岩石ホットヨガレッスンを受講できます。ピラティスとホットヨガの両方を楽しめるのが魅力。お買い物ついでに通えるイオン内店舗も。',
    access: 'ナディアパーク・星が丘テラス・イオン則武新町・イオンナゴヤドーム前',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティス＆ホットヨガ全店通い放題',
      description: '4店舗全店でピラティスと溶岩石ホットヨガが受講可能。',
      price: '要問合せ',
    },
    options: [
      'ピラティスレッスン',
      '溶岩石ホットヨガレッスン',
      '全店相互利用可能',
      'イオン内店舗あり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ピラティス＆ヨガ併用', '買い物ついでに', 'リラックス', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['4店舗展開', 'ロッカー', 'パウダールーム', 'イオン内店舗', '溶岩石'],
    },
  },
  {
    name: 'Pilates Studio Tree',
    image: '/images/pilates2.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['養成コース開講', 'Peak Pilates PPC1', '資格取得可', 'プロ育成'],
    description: '名古屋のピラティススタジオTree。Peak Pilates養成コースPPC1を募集中。著名なピラティスインストラクターによる指導で、プロのインストラクターを目指す方にも対応。初心者から養成コースまで幅広く提供。ピラティスを深く学びたい方におすすめ。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '初心者からプロ育成まで対応。Peak Pilates養成コースも開講。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'Peak Pilates養成コースPPC1',
      '資格取得コース',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ピラティスを深く学ぶ', '資格取得', 'プロ育成', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['養成コース開講', 'マシン完備', 'プライベート空間'],
    },
  },
  {
    name: 'studio nano（名駅・伏見）',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['姿勢矯正専門', 'パーソナルトレーニング', 'セルフコンディショニング習得', '痛み改善'],
    description: '【姿勢矯正・改善専門】セルフコンディショニングが習得できるパーソナルトレーニング&ピラティススタジオnano。名古屋駅・伏見駅近くに展開。姿勢矯正と痛み改善に特化したスタジオで、一人ひとりの身体に合わせた専門的な指導を提供。自分で身体をケアする方法も学べます。',
    access: '名古屋駅・伏見駅近',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルトレーニング＆ピラティス',
      description: '姿勢矯正・痛み改善専門。セルフコンディショニングも習得できる。',
      price: '要問合せ',
    },
    options: [
      'パーソナルトレーニング',
      'マシンピラティス',
      '姿勢矯正プログラム',
      'セルフコンディショニング指導',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢矯正', '痛み改善', 'セルフケア習得', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['姿勢矯正専門', 'パーソナル空間', 'トレーニング設備', 'マシン完備'],
    },
  },
]

export default async function NagoyaAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              名古屋のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              名古屋エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                  おすすめ：ピラティスK 久屋大通パーク店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">理学療法士監修</h3>
                <p className="mb-4 text-warm-600">
                  医療的視点から身体を整えたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：luluto 名古屋（4店舗）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">少人数制</h3>
                <p className="mb-4 text-warm-600">
                  丁寧な指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：Two Three 名古屋
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">充実設備</h3>
                <p className="mb-4 text-warm-600">
                  あらゆる目的に対応したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：REBORN 名古屋
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">ピラティス＆ヨガ</h3>
                <p className="mb-4 text-warm-600">
                  両方楽しみたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ナグスタジオ（4店舗）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">姿勢矯正専門</h3>
                <p className="mb-4 text-warm-600">
                  姿勢と痛みの改善に特化
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：studio nano
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
                    <span>ピラティスK 久屋大通パーク店（月4回 13,420円）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">プライベート専門</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>REBORN 名古屋（充実設備）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>studio nano（姿勢矯正専門）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>luluto 名古屋（要問合せ）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>アステル（要問合せ）</span>
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
              4ステップで選ぶ！名古屋のピラティススタジオ
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
                  月額13,420円〜など幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  名駅・栄・金山・大曽根など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
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
                  名古屋でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  Two Three 名古屋がおすすめです。最大8名までの少人数制グループレッスンで、一人ひとりに的確な指導が行き届きます。誰でも通いやすいピラティススタジオとして、初心者でも安心して始められます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  名古屋で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ピラティスK 久屋大通パーク店が月4回13,420円で最もリーズナブルです。また、無料体験レッスンも実施しているので、まずは試してみたい方におすすめです。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、ピラティスK 久屋大通パーク店は女性専用スタジオです。音楽×暗闇×マシンピラティスの融合レッスンで、男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 久屋大通パーク店は無料、その他スタジオは要問合せです。
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
                  はい、luluto 名古屋（名駅店・栄店・金山店・大曽根店）は理学療法士が考案したスタジオです。医療現場での知見を活かし、「身体を正しく動かす」ことを重視。リハビリから本格的なボディメイクまで幅広く対応しています。
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
                  姿勢矯正専門のスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、studio nano（名駅・伏見）は姿勢矯正・痛み改善専門のスタジオです。セルフコンディショニングも習得でき、自分で身体をケアする方法も学べます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  資格取得できるスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、Pilates Studio TreeではPeak Pilates養成コースPPC1を開講しています。著名なピラティスインストラクターによる指導で、プロのインストラクターを目指す方にも対応しています。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              名古屋で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              名古屋には多様なピラティススタジオがあります。音楽×暗闇のピラティスK、理学療法士監修のluluto、少人数制のTwo Three、充実設備のREBORN、栄・名駅展開のアステル、ピラティス＆ヨガのナグスタジオ、養成コース開講のTree、姿勢矯正専門のstudio nanoなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
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
              <li className="font-semibold text-warm-800">名古屋</li>
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
                name: '名古屋',
                item: 'https://pilates-biyori.com/area/nagoya',
              },
            ],
          }),
        }}
      />
    </>
  )
}
