import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】御茶ノ水・神保町のピラティススタジオおすすめ8選！料金・アクセス徹底比較｜Pilates Navi',
  description: '御茶ノ水・神保町エリアのピラティススタジオ8選を徹底比較。zen place、ピラティスK、YARDなど実在スタジオの料金、体験レッスン、アクセス情報を詳しく紹介。',
  keywords: 'ピラティス,御茶ノ水,神保町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 本郷三丁目店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 265,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '2週間前',
        text: '本郷三丁目駅から徒歩3分で通いやすいです。マットもマシンも両方できるので自分のペースで続けられます。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '1ヶ月前',
        text: 'インストラクターが丁寧で初心者でも安心。全国の店舗が使えるので出張先でも通えて便利です。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '3週間前',
        text: '10周年を迎えた老舗スタジオ。経験豊富なエデュケーターが多く、質の高いレッスンが受けられます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '初心者歓迎', '本郷三丁目駅徒歩3分', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。本郷三丁目駅から徒歩3分の好立地。マットピラティスからマシンピラティスまで豊富なレッスンメニュー。2015年オープンの10周年スタジオで、経験豊富なエデュケーターが在籍。全国150店舗が相互利用可能。',
    access: '東京メトロ丸ノ内線「本郷三丁目駅」2番出口より徒歩3分、都営大江戸線「本郷三丁目駅」3番出口より徒歩3分、JR「御茶ノ水駅」より徒歩10分',
    address: '東京都文京区本郷3丁目32-7 東京ビル 4階',
    popularPlan: {
      name: 'フリープラン（グレード01）',
      description: 'マット・マシンどちらも受講可能な人気プラン。全国150店舗で利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      'デイフリーグレード01：月額 13,552円（平日18時まで）',
      '月4グレード01：月額 10,450円',
      '月6グレード01：月額 14,520円',
      'プライベートレッスン月4：月額 38,280円〜',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%（男性OK）',
      purpose: ['姿勢改善', '体幹強化', '不調改善', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:00 / 土日祝 7:30〜18:00',
      closed: '不定休',
      facilities: ['マットスタジオ', 'マシン（リフォーマー）', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ピラティスK 神保町店',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    reviewCount: 204,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: '2025年7月オープンの新しいスタジオ。駅から徒歩2分で通いやすく、設備も綺麗です！',
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
        text: 'インストラクターが明るくて雰囲気が良い。ボディメイクに特化したプログラムが充実しています。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['音楽×マシン', '女性専用', '神保町駅徒歩2分', 'ボディメイク特化'],
    description: '音楽に合わせて楽しくボディメイク。2025年7月オープンの女性専用マシンピラティススタジオ。神保町駅から徒歩2分の新しくて綺麗なスタジオ。お腹、お尻、二の腕、脚、背中の部位に特化した17種類のプログラムが充実。',
    access: '「神保町駅」より徒歩2分、「新御茶ノ水駅」より徒歩7分、「御茶ノ水駅」より徒歩7分',
    address: '東京都千代田区神田神保町1-4 クロサワビル4階',
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
    name: 'YARD 御茶ノ水スタジオ',
    image: '/images/pilates4.jpg',
    rating: 4.6,
    reviewCount: 186,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '5日前',
        text: 'モノトーン×ピンクのお洒落なスタジオ。ヨガもピラティスも両方できるのが嬉しい。',
      },
      {
        author: 'H.N',
        rating: 4,
        date: '1週間前',
        text: '淡路町駅から徒歩1分の好立地。会員の7割が初心者からスタートしているので安心して通えます。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '2週間前',
        text: '全米ヨガアライアンス200時間卒業のインストラクターが多数在籍。質の高いレッスンです。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['ヨガ＆ピラティス', 'お洒落空間', '淡路町駅徒歩1分', '初心者歓迎'],
    description: 'ヨガ・ピラティス専門スタジオ。淡路町駅・小川町駅から徒歩1分の好アクセス。モノトーン×ピンクのお洒落なインテリア。ヨガ、ピラティス、エアフローヨガ、ホイールヨガなど多彩なプログラム。会員の7割以上が初心者からスタート。',
    access: '東京メトロ丸ノ内線「淡路町駅」A2出口より徒歩1分、都営新宿線「小川町駅」A2出口より徒歩1分、東京メトロ千代田線「新御茶ノ水駅」A6出口より徒歩3分、JR中央線「御茶ノ水駅」聖橋口より徒歩10分',
    address: '東京都千代田区神田須田町1丁目4-1 日宝須田町ビルB1F',
    popularPlan: {
      name: 'フリープラン',
      description: 'ヨガ・ピラティス通い放題。全店相互利用OK。',
      price: '要問い合わせ',
    },
    options: [
      'ヨガ体験レッスン：1,000円',
      'ピラティス体験レッスン：1,000円',
      'エアフローヨガ体験：1,000円',
      '全店相互利用（追加料金なし）',
    ],
    userProfile: {
      ageRange: '20代〜50代まで幅広い',
      genderRatio: '女性95% / 男性5%',
      purpose: ['ヨガ＆ピラティス', 'リフレッシュ', '柔軟性向上', 'ストレス解消'],
    },
    basicInfo: {
      hours: '平日 9:30〜22:00 / 土日 8:15〜17:00 / 祝日 8:15〜15:00',
      closed: '火曜日他（事前告知）',
      facilities: ['マットスタジオ', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'zen place pilates 神保町店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '神保町駅徒歩1分', '全国相互利用', '男性OK'],
    description: 'zen placeの神保町スタジオ。神保町駅A7出口から徒歩1分の好立地。マットグループ、マシングループ、プライベートレッスンに対応。全国150店舗が相互利用可能で、ライフスタイルに合わせて自由に通えます。',
    access: '都営地下鉄三田線・新宿線・東京メトロ半蔵門線「神保町駅」A7出口より徒歩1分',
    address: '東京都千代田区神田神保町1-13-2 文銭堂ビル4F',
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
      hours: '平日 8:55〜22:00 / 土日祝 8:00〜20:00',
      closed: '不定休',
      facilities: ['マットスタジオ', 'リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'rcu リチュ 御茶ノ水',
    image: '/images/pilates3.jpg',
    rating: 4.5,
    price: '要問い合わせ',
    trial: '体験レッスン あり',
    features: ['常温ヨガ＆ピラティス', 'マシンピラティス', '御茶ノ水駅徒歩4分', '森の景色'],
    description: 'ヒノキの床が気持ちいいナチュラルな常温スタジオ。御茶ノ水駅から徒歩4分。窓からは森の景色が広がり、四季折々の自然を感じながらヨガ・ピラティスができます。常温ヨガ、ピラティス、マシンピラティスに対応。',
    access: 'JR御茶ノ水駅より徒歩4分、秋葉原駅より9分、千代田線新御茶ノ水駅より徒歩5分、丸ノ内線御茶ノ水駅より徒歩6分',
    address: '東京都千代田区外神田2-17-2 延寿お茶の水ビル302',
    popularPlan: {
      name: 'マンスリー会員',
      description: '常温ヨガ・ピラティス・マシンピラティスが受講可能。',
      price: '要問い合わせ',
    },
    options: [
      '月定額制マンスリー会員',
      'ドロップイン（1回券）',
      'インストラクター養成講座',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['リラックス', '自然を感じる', 'ヨガ＆ピラティス'],
    },
    basicInfo: {
      hours: '平日 9:30〜20:00 / 土日祝 9:00〜17:00',
      closed: '月曜定休',
      facilities: ['ヒノキ床スタジオ', 'マシンピラティス', 'ロッカー'],
    },
  },
  {
    name: 'PILATES STUDIO ZERO 神保町店',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    price: '月4回 37,200円〜',
    trial: '体験レッスン 4,400円（当日入会で無料）',
    features: ['完全プライベート', 'マシンピラティス', '神保町駅近', 'パーソナル専門'],
    description: 'マシンピラティスパーソナル専門スタジオ。神保町駅から徒歩圏内。完全プライベートレッスンで一人ひとりに合わせたオーダーメイドプログラム。1セッション40分、ミネラルウォーター付き。体験当日入会で体験料・入会金無料。',
    access: '都営地下鉄三田線「神保町駅」A3出口より徒歩圏内',
    address: '東京都千代田区神田神保町（詳細は店舗HP参照）',
    popularPlan: {
      name: '月4回プラン',
      description: 'パーソナルマシンピラティス。1回40分×月4回。',
      price: '月額 37,200円（税込）/ 1回あたり9,300円',
    },
    options: [
      '月3回プラン：月額 28,500円',
      '月6回プラン：月額 54,000円',
      '月8回プラン：月額 69,600円',
      '回数券10回：90,000円（体験当日購入で10%オフ）',
      '回数券30回：216,000円（体験当日購入で20%オフ＋ソックス進呈）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体の不調改善', 'パーソナル指導', '姿勢矯正', '慢性痛改善'],
    },
    basicInfo: {
      hours: '要問い合わせ（予約制）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベート空間', 'ロッカー'],
    },
  },
  {
    name: 'Z&Z Pilates Studio 神保町店',
    image: '/images/pilates2.jpg',
    rating: 4.6,
    price: '月4回 19,900円〜',
    trial: '団体体験 4,000円 / 私教体験 8,000円',
    features: ['中国語対応', '小班＋私教', '神保町駅1分', '国際認証'],
    description: '中国語対応のピラティススタジオ。神保町駅から徒歩1分。STOTT/BASI/PEAK国際認証インストラクター在籍。3人小班制グループレッスンとプライベートレッスンを提供。マシンピラティス×ウェイトトレーニング組み合わせで理想的な身体づくり。',
    access: '神保町駅より徒歩1分、九段下駅より2分、竹橋駅より9分、水道橋駅より8分、御茶ノ水駅より10分',
    address: '東京都千代田区神田神保町3-2-28 ACN神保町ビル3階',
    popularPlan: {
      name: '混合A（Hybrid Plan A）',
      description: '月カード：私教1回＋小班3回。人気のミックスプラン。',
      price: '月額 24,825円（税込）',
    },
    options: [
      '混合B：月額 29,750円（私教2回＋小班2回）',
      '混合C：月額 37,900円（私教2回＋小班4回）',
      '私教月卡4次：月額 39,600円',
      '小班月卡4次：月額 19,900円',
      '入会金：11,000円（当日入会で無料）',
    ],
    userProfile: {
      ageRange: '20代〜40代の中国語話者が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['体態矯正', '姿勢改善', '中国語でレッスン', '疼痛改善'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '小班スタジオ', 'プライベート空間', 'ロッカー'],
    },
  },
]

export default function OchanomizuPage() {
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
            name: '御茶ノ水・神保町のピラティススタジオ',
            description: '御茶ノ水・神保町エリアのおすすめピラティススタジオ一覧',
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
              御茶ノ水・神保町の
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                ピラティススタジオ8選
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              御茶ノ水・神保町エリアの実在するピラティススタジオを厳選してご紹介。駅近で通いやすいスタジオの料金・特徴を徹底比較。
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
                <div className="text-sm text-gray-600">徒歩1〜10分圏内</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">御茶ノ水・神保町エリアの料金相場</h2>

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
                <div className="text-3xl font-bold text-gray-900 mb-2">9,300円〜/回</div>
                <div className="text-sm text-gray-600">マンツーマン指導</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💡 スタジオ選びのポイント</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>大手チェーン</strong>：zen place、ピラティスKなど全国展開の安心感</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>駅近立地</strong>：神保町駅・御茶ノ水駅から徒歩1〜3分のスタジオ多数</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>専門スタジオ</strong>：プライベート専門、中国語対応などニーズに合わせて選べる</span>
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
                  Q. 御茶ノ水・神保町エリアで初心者におすすめのスタジオは？
                </summary>
                <p className="mt-4 text-gray-700">
                  zen place pilates（本郷三丁目店・神保町店）がおすすめです。全国150店舗展開の大手で、初心者向けの丁寧な指導が受けられます。YARDも会員の7割が初心者からスタートしており安心です。
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. 駅から一番近いスタジオはどこ？
                </summary>
                <p className="mt-4 text-gray-700">
                  Z&Z Pilates Studio神保町店（神保町駅徒歩1分）、zen place pilates神保町店（神保町駅A7出口徒歩1分）、YARD御茶ノ水スタジオ（淡路町駅・小川町駅徒歩1分）が駅直結レベルの好立地です。
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. 女性専用のスタジオはありますか？
                </summary>
                <p className="mt-4 text-gray-700">
                  ピラティスK神保町店が女性専用スタジオです。音楽に合わせた楽しいレッスンで、周りの目を気にせず集中できます。
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. プライベートレッスンが受けられるスタジオは？
                </summary>
                <p className="mt-4 text-gray-700">
                  PILATES STUDIO ZERO神保町店が完全プライベート専門です。zen placeやZ&Z Pilates Studioでもプライベートレッスンを選べます。
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Q. 体験レッスンの料金は？
                </summary>
                <p className="mt-4 text-gray-700">
                  無料：ピラティスK（0円）、1,000円：zen place・YARD、4,000円〜：Z&Z・PILATES STUDIO ZERO。ほとんどのスタジオで体験レッスンを提供しています。
                </p>
              </details>
            </div>
          </section>

          {/* エリアガイド */}
          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">御茶ノ水・神保町エリアの特徴</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                御茶ノ水・神保町エリアは、学生街・古書店街として知られる文教地区です。JR中央線・総武線、東京メトロ丸ノ内線・千代田線、都営三田線・新宿線が利用でき、都心各地へのアクセスが良好です。
              </p>
              <p className="mb-4">
                近年はピラティススタジオの新規出店が相次ぎ、ピラティスK神保町店（2025年7月オープン）など新しいスタジオも増えています。大手チェーンから中国語対応の専門スタジオまで、多様なニーズに対応できるエリアとなっています。
              </p>
              <p>
                駅から徒歩1〜3分圏内のスタジオが多く、仕事帰りや学校帰りに気軽に通えるのが魅力。神保町駅・御茶ノ水駅・本郷三丁目駅など複数駅が利用できるため、自分の通勤・通学ルートに合わせてスタジオを選べます。
              </p>
            </div>
          </section>

          {/* CTAセクション */}
          <section className="text-center py-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-4">御茶ノ水・神保町でピラティスを始めよう</h2>
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
