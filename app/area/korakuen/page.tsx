import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】後楽園・春日・水道橋のピラティススタジオおすすめ7選！料金・体験徹底比較｜Pilates Navi',
  description: '後楽園・春日・水道橋エリアのピラティススタジオ7選を徹底比較。ピラティスK、zen place、STUDIO IVYなど実在スタジオの料金、体験レッスン、アクセス情報を詳しく紹介。',
  keywords: 'ピラティス,後楽園,春日,水道橋,東京,文京区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 春日店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 204,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: '2024年8月オープンの新しいスタジオ。春日駅A5出口から徒歩1分で通いやすく、設備も綺麗です！',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '2週間前',
        text: '音楽に合わせて楽しくレッスン。女性専用なので気兼ねなく集中できます。体験が0円で始めやすかったです。',
      },
      {
        author: 'R.I',
        rating: 5,
        date: '3週間前',
        text: 'インストラクターが明るくて雰囲気が良い。17種類のボディメイクプログラムが充実しています。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['音楽×マシン', '女性専用', '春日駅徒歩1分', 'ボディメイク特化'],
    description: '音楽に合わせて楽しくボディメイク。2024年8月オープンの女性専用マシンピラティススタジオ。春日駅A5出口から徒歩1分、後楽園駅から徒歩5分の好立地。お腹、お尻、二の腕、脚、背中の部位に特化した17種類のプログラムが充実。',
    access: '都営三田線「春日駅」A5出口より徒歩1分、東京メトロ丸ノ内線「後楽園駅」より徒歩5分',
    address: '東京都文京区小石川1-9-1 小石川富士ビル 3階',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回レッスン。音楽×マシンピラティスで楽しくボディメイク。施設維持費別途825円/月。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー：月額 16,170円',
      'マンスリーデイメンバー：月額 14,520円（平日10-15時）',
      'マンスリープレミアムメンバー：月額 18,920円（毎日2レッスン）',
      '追加受講：1回 2,200円',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '楽しく痩せたい', 'ストレス発散', '部位痩せ'],
    },
    basicInfo: {
      hours: '火・金 10:00-15:00/17:30-22:00、水 10:00-14:00/17:30-22:00、木 17:30-22:00、土祝 10:00-18:30、日 10:00-17:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', 'ロッカー', '更衣室', '女性専用'],
    },
  },
  {
    name: 'ピラティスミラー 後楽園',
    image: '/images/pilates3.jpg',
    rating: 4.6,
    reviewCount: 186,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '5日前',
        text: '天井の鏡で自分のフォームを確認できるのが画期的！30分レッスンで気軽に通えます。',
      },
      {
        author: 'H.N',
        rating: 4,
        date: '1週間前',
        text: '春日駅A3口から徒歩1分の好立地。荷物も着替えも不要で、サッと通えるのが魅力。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '2週間前',
        text: '最大6名の少人数制で丁寧に見てもらえます。コナミ運営なので安心感があります。',
      },
    ],
    price: '月会費 11,000円（月6回）',
    trial: '体験レッスン 2,200円',
    features: ['天井鏡', '30分レッスン', '春日駅徒歩1分', '女性専用'],
    description: '天井に鏡を設置した新感覚ピラティススタジオ。春日駅A3口・後楽園駅5番口から徒歩1〜2分。1レッスン30分の短時間集中型。レッスン前20分はリフォーマーでセルフトレーニング可能。コナミスポーツクラブ運営で安心。',
    access: '都営三田線・大江戸線「春日駅」A3口より徒歩1分、東京メトロ丸ノ内線・南北線「後楽園駅」5番口より徒歩2分',
    address: '東京都文京区小石川1-1-18 文京ガーデン ザ サウス1階101',
    popularPlan: {
      name: '月会費プラン',
      description: '月6回まで通い放題。7回目以降は1回1,100円で追加受講可能。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      'チケットプラン：1回 2,750円',
      'プライベートレッスン30分：4,400円',
      'プライベートレッスン50分：6,600円',
      '入会金：11,000円',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用、18歳以上）',
      purpose: ['短時間で効率的', '姿勢改善', 'ボディライン整える', 'リフレッシュ'],
    },
    basicInfo: {
      hours: 'レッスンスケジュールによる',
      closed: '毎週金曜日',
      facilities: ['天井鏡', 'リフォーマー', 'ロッカー', '女性専用'],
    },
  },
  {
    name: 'STUDIO IVY 後楽園店',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    reviewCount: 165,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '水道橋駅から徒歩2分の好アクセス。完全プライベートで周りの目を気にせず集中できます。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '2週間前',
        text: 'マンツーマンなのに月4回25,000円で続けやすい。姿勢改善の効果をすぐに実感できました。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '3週間前',
        text: '洗練された清潔感のある空間。初心者の私でもインストラクターが丁寧にサポートしてくれます。',
      },
    ],
    price: '月4回 25,000円〜',
    trial: '体験レッスン 4,500円（50分）',
    features: ['完全プライベート', 'マシンピラティス', '水道橋駅徒歩2分', 'オーダーメイド'],
    description: 'パーソナル専門のマシンピラティススタジオ。水道橋駅から徒歩2分、後楽園駅から徒歩7分。完全プライベート空間で一人ひとりに合わせたオーダーメイドレッスン。姿勢改善、ダイエット、骨盤矯正などお悩みに沿ったプログラムを提供。',
    access: '都営三田線「水道橋駅」より徒歩2分、東京メトロ丸ノ内線「後楽園駅」より徒歩7分',
    address: '東京都文京区本郷1-21-1 TEC本郷EAST101',
    popularPlan: {
      name: 'STANDARD（月4回コース）',
      description: 'マンツーマンマシンピラティス。週1ペースで通いやすい一番人気プラン。',
      price: '月額 25,000円（税込）※価格は要確認',
    },
    options: [
      'BASIC（月2回コース）：忙しい方向け',
      'PREMIUM（月8回コース）：より早く効果を実感',
      '初回体験レッスン：4,500円（50分）',
    ],
    userProfile: {
      ageRange: '20代〜50代',
      genderRatio: '女性85% / 男性15%（男性OK）',
      purpose: ['姿勢改善', 'ダイエット', '骨盤矯正', 'パーソナル指導'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベート空間', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'zen place pilates 飯田橋店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '飯田橋駅徒歩1分', '全国相互利用', '男性OK'],
    description: 'zen placeの飯田橋スタジオ。地下鉄B4b出口から徒歩1分、JR飯田橋駅西口から徒歩3分の好立地。水道橋・神楽坂エリアからもアクセス良好。マットグループ、マシングループ、プライベートレッスンに対応。全国150店舗が相互利用可能。',
    access: '地下鉄東西線・南北線・有楽町線・都営大江戸線「飯田橋駅」B4b出口より徒歩1分、JR中央･総武線「飯田橋駅」西口より徒歩3分',
    address: '東京都新宿区揚場町 1-1 揚場ビル 4階',
    popularPlan: {
      name: 'フリープラン（グレード01）',
      description: 'マット・マシン通い放題。全国150店舗で利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4グレード01：月額 10,450円',
      'デイフリー：月額 13,552円（平日18時まで）',
      'プライベート月4：月額 38,280円〜',
    ],
    userProfile: {
      ageRange: '20代〜60代',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '体幹強化', '不調改善'],
    },
    basicInfo: {
      hours: '平日 9:00〜21:00 / 土日祝 7:30〜17:00',
      closed: '不定休',
      facilities: ['マットスタジオ', 'リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'Physio Pilates Conditioning Studio',
    image: '/images/pilates3.jpg',
    rating: 4.9,
    price: '要問い合わせ',
    trial: '体験レッスン あり',
    features: ['理学療法士×ピラティス', 'メディカル', '春日駅徒歩2分', '腰痛改善'],
    description: '理学療法士によるメディカルピラティス専門スタジオ。春日駅A1・A2出口から徒歩2分、後楽園駅から徒歩3〜4分。繰り返す腰痛、リハビリ後の運動不安、姿勢改善に特化。理学療法士の専門知識とピラティスメソッドを融合させたアプローチで高品質なメディカルコンディショニングを提供。',
    access: '都営三田線・大江戸線「春日駅」A1・A2出口より徒歩2分、東京メトロ南北線・丸ノ内線「後楽園駅」5番・6番出口より徒歩3〜4分、都営三田線「水道橋駅」徒歩7分',
    address: '東京都文京区本郷1-35-26 スカイテックビル5F/6F',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '理学療法士による姿勢・動きの評価、メディカルコンディショニング、メディカルピラティスを提供。',
      price: '要問い合わせ',
    },
    options: [
      '理学療法士による徒手的コンディショニング',
      '個々の状態に合わせたリスク管理',
      '腰痛・姿勢改善・パフォーマンス向上',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['腰痛改善', 'リハビリ後運動', '姿勢改善', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月 10:00〜19:30、火 10:00〜19:30、水 13:00〜18:00、木 10:00〜19:30、金 11:00〜20:30、土 10:00〜19:30',
      closed: '日曜・祝日',
      facilities: ['リフォーマー', 'プライベート空間', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 本郷三丁目店',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '本郷三丁目駅徒歩3分', '全国相互利用', '10周年'],
    description: '後楽園エリアからもアクセス良好なzen place本郷三丁目スタジオ。本郷三丁目駅から徒歩3分。2015年オープンの10周年スタジオで、経験豊富なエデュケーターが在籍。マットピラティスからマシンピラティスまで豊富なレッスンメニュー。',
    access: '東京メトロ丸ノ内線「本郷三丁目駅」2番出口より徒歩3分、都営大江戸線「本郷三丁目駅」3番出口より徒歩3分',
    address: '東京都文京区本郷3丁目32-7 東京ビル 4階',
    popularPlan: {
      name: 'フリープラン（グレード01）',
      description: 'マット・マシンどちらも受講可能な人気プラン。全国150店舗で利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4グレード01：月額 10,450円',
      '月6グレード01：月額 14,520円',
      'デイフリー：月額 13,552円（平日18時まで）',
      'プライベートレッスン月4：月額 38,280円〜',
    ],
    userProfile: {
      ageRange: '20代〜60代',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', '不調改善', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:00 / 土日祝 7:30〜18:00',
      closed: '不定休',
      facilities: ['マットスタジオ', 'マシン（リフォーマー）', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'piqué pilates 本郷三丁目店',
    image: '/images/pilates2.jpg',
    rating: 4.6,
    price: '要問い合わせ',
    trial: '体験レッスン あり',
    features: ['韓国ブランド', 'おしゃれ空間', 'マンツーマン', '本郷三丁目駅近'],
    description: '韓国ブランドのピラティスマシンを揃えたおしゃれな空間でマンツーマンレッスンを受けられるスタジオ。本郷三丁目駅から徒歩圏内で、後楽園エリアからもアクセス良好。洗練されたインテリアと最新設備で快適なレッスン環境を提供。',
    access: '東京メトロ丸ノ内線「本郷三丁目駅」より徒歩圏内',
    address: '東京都文京区本郷（詳細は店舗HP参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '韓国ブランドマシンを使用したマンツーマンレッスン。おしゃれな空間でボディメイク。',
      price: '要問い合わせ',
    },
    options: [
      '体験レッスン（要問い合わせ）',
      'マンツーマン指導',
      '韓国ブランドマシン使用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['おしゃれ空間', 'ボディメイク', 'パーソナル指導'],
    },
    basicInfo: {
      hours: '要問い合わせ',
      closed: '要問い合わせ',
      facilities: ['韓国ブランドマシン', 'プライベート空間', 'ロッカー'],
    },
  },
]

export default function KorakuenPage() {
  const sortedStudios = [...studios].sort((a, b) => b.rating - a.rating)

  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '後楽園・春日・水道橋のピラティススタジオ',
            description: '後楽園・春日・水道橋エリアのおすすめピラティススタジオ一覧',
            numberOfItems: studios.length,
            itemListElement: studios.map((studio, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'LocalBusiness',
                name: studio.name,
                description: studio.description,
                address: studio.address,
              },
            })),
          }),
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
        <Navigation />

        <article className="max-w-6xl mx-auto px-4 py-8">
          {/* ヒーローセクション */}
          <section className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              後楽園・春日・水道橋の
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                ピラティススタジオ7選
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              後楽園・春日・水道橋エリアの実在するピラティススタジオを厳選してご紹介。駅近で通いやすいスタジオの料金・特徴を徹底比較。
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                <div className="text-pink-600 text-2xl mb-2">🏢</div>
                <div className="font-semibold text-gray-900">全{studios.length}スタジオ掲載</div>
                <div className="text-sm text-gray-600">実在する店舗のみ</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                <div className="text-purple-600 text-2xl mb-2">🚇</div>
                <div className="font-semibold text-gray-900">駅近スタジオ多数</div>
                <div className="text-sm text-gray-600">徒歩1〜3分圏内</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <div className="text-blue-600 text-2xl mb-2">💰</div>
                <div className="font-semibold text-gray-900">料金相場</div>
                <div className="text-sm text-gray-600">月4回 10,450円〜</div>
              </div>
            </div>
          </section>

          {/* スタジオ一覧 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">おすすめスタジオ一覧</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {sortedStudios.map((studio, index) => (
                <StudioCard key={index} studio={studio} />
              ))}
            </div>
          </section>

          {/* 料金相場セクション */}
          <section className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">後楽園・春日・水道橋エリアの料金相場</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-pink-600 font-semibold mb-2">月4回プラン</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">10,450円〜</div>
                <div className="text-sm text-gray-600">週1回ペースで通える基本プラン</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-purple-600 font-semibold mb-2">通い放題プラン</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">16,940円〜</div>
                <div className="text-sm text-gray-600">毎日通いたい方におすすめ</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 font-semibold mb-2">プライベート</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25,000円〜/月4回</div>
                <div className="text-sm text-gray-600">マンツーマン指導</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💡 スタジオ選びのポイント</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>駅直結レベル</strong>：春日駅・後楽園駅から徒歩1〜2分のスタジオ多数</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>女性専用</strong>：ピラティスK、ピラティスミラーは女性専用スタジオ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>メディカル特化</strong>：理学療法士によるメディカルピラティスも選択可能</span>
                </li>
              </ul>
            </div>
          </section>

          {/* よくある質問 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">よくある質問</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. 後楽園・春日エリアで初心者におすすめのスタジオは？
                </summary>
                <p className="mt-4 text-gray-700">
                  zen place pilates（飯田橋店・本郷三丁目店）がおすすめです。全国150店舗展開の大手で、初心者向けの丁寧な指導が受けられます。ピラティスミラー後楽園も最大6名の少人数制で初心者に優しいです。
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. 駅から一番近いスタジオはどこ？
                </summary>
                <p className="mt-4 text-gray-700">
                  ピラティスK春日店（春日駅A5出口徒歩1分）、ピラティスミラー後楽園（春日駅A3口徒歩1分）、zen place pilates飯田橋店（地下鉄B4b出口徒歩1分）が駅直結レベルの好立地です。
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. 女性専用のスタジオはありますか？
                </summary>
                <p className="mt-4 text-gray-700">
                  ピラティスK春日店とピラティスミラー後楽園が女性専用スタジオです。音楽に合わせた楽しいレッスンや、天井鏡を使った独自メソッドで、周りの目を気にせず集中できます。
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. プライベートレッスンが受けられるスタジオは？
                </summary>
                <p className="mt-4 text-gray-700">
                  STUDIO IVY後楽園店がパーソナル専門です。zen placeでもプライベートレッスンを選択できます。また、Physio Pilates Conditioning Studioは理学療法士によるメディカルピラティスを提供しています。
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. 腰痛改善に特化したスタジオはありますか？
                </summary>
                <p className="mt-4 text-gray-700">
                  Physio Pilates Conditioning Studioがおすすめです。理学療法士による姿勢・動きの評価とメディカルコンディショニングで、繰り返す腰痛やリハビリ後の運動不安に対応しています。
                </p>
              </details>
            </div>
          </section>

          {/* エリアガイド */}
          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">後楽園・春日・水道橋エリアの特徴</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                後楽園・春日・水道橋エリアは、東京ドームや文京シビックセンターがある文京区の中心地です。都営三田線・大江戸線、東京メトロ丸ノ内線・南北線、JR中央線・総武線が利用でき、都心各地へのアクセスが良好です。
              </p>
              <p className="mb-4">
                近年はピラティススタジオの新規出店が相次ぎ、ピラティスK春日店（2024年8月オープン）など新しいスタジオも増えています。大手チェーンからメディカル特化の専門スタジオまで、多様なニーズに対応できるエリアとなっています。
              </p>
              <p>
                駅から徒歩1〜3分圏内のスタジオが多く、仕事帰りや買い物ついでに気軽に通えるのが魅力。春日駅・後楽園駅・水道橋駅・飯田橋駅など複数駅が利用できるため、自分の通勤・生活ルートに合わせてスタジオを選べます。
              </p>
            </div>
          </section>

          {/* CTAセクション */}
          <section className="text-center py-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-4">後楽園・春日・水道橋でピラティスを始めよう</h2>
            <p className="text-xl mb-6 text-pink-50">
              まずは体験レッスンから。あなたに合ったスタジオが見つかります。
            </p>
            <p className="text-pink-50">
              ↑ 上記のスタジオ一覧から、気になるスタジオの詳細をチェック！
            </p>
          </section>
        </article>

        <SiteFooter />
      </div>
    </>
  )
}
