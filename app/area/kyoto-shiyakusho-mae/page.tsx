import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス京都市役所前おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '京都市役所前エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,京都市役所前,京都,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 京都スタジオ',
    image: '/images/pilates2.webp',
    rating: 4.7,
    reviewCount: 110,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '四条駅12番出口から徒歩1分で通いやすい。全国150店舗相互利用できるので出張先でも通えるのが便利。グループ体験1,000円で気軽に試せる。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '男性も通えるスタジオ。マットもマシンも両方あり、自分に合ったレッスンを選べる。インストラクターの質が高い。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: '京都市役所前からも地下鉄で簡単にアクセスできる。月4回10,450円〜とリーズナブル。継続しやすい料金設定。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗相互利用', '男性OK', '四条駅徒歩1分', 'マット&マシン両対応'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。四条駅12番出口から徒歩1分。マットピラティスとマシンピラティスの両方に対応。男性も通える。全店舗相互利用が可能で、出張や旅行先でもレッスンを受けられる。',
    access: '地下鉄烏丸線「四条駅」12番出口 徒歩1分（京都市役所前から地下鉄でアクセス可）',
    address: '京都市下京区四条通エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: 'マット・マシン両対応のグループレッスン。全国150店舗で相互利用可能。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      '月6回プラン',
      '通い放題プラン',
      'プライベートレッスン',
      'グループ体験 1,000円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 京都四条烏丸店',
    image: '/images/pilates3.webp',
    rating: 4.6,
    reviewCount: 98,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '女性専用のマシン専門スタジオ。音楽に合わせたレッスンが楽しくてあっという間に時間が過ぎる。体験0円で気軽に試せた。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: 'リフォーマーマシン専門で本格的。女性専用なので周りの目を気にせず集中できる。京都市役所前から地下鉄ですぐ。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: '月4回13,420円〜。音楽レッスンが他にはない楽しさ。インストラクターも丁寧で初心者でも安心。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '音楽レッスン', '体験0円'],
    description: '女性専用のマシンピラティス専門スタジオ。リフォーマーマシンを使い、音楽に合わせた独自のレッスンスタイルが特徴。体験レッスンは0円で気軽にスタートできる。京都市役所前から地下鉄でアクセス可能。',
    access: '地下鉄烏丸線「四条駅」周辺（京都市役所前から地下鉄でアクセス可）',
    address: '京都市下京区四条烏丸エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー',
      'マンスリーフルメンバー',
      '体験レッスン 0円',
      '入会金あり（キャンペーンで無料の場合あり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull 京都四条烏丸店',
    image: '/images/pilates4.webp',
    rating: 4.5,
    reviewCount: 88,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列で安心感がある。月4回8,800円はマシンピラティスとしてはかなりリーズナブル。初心者が87%以上で雰囲気も良い。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '無料体験でパーソナル姿勢診断もしてもらえた。女性専用なので安心。リフォーマーを使った本格レッスン。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: 'プレミアムフリーフルタイムでLAVA等系列のヨガスタジオも利用可能。ピラティスとヨガ両方やりたい人におすすめ。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', '初心者87%以上', '月4回8,800円〜'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。月4回8,800円〜のリーズナブルな料金設定。初心者が87%以上を占め、未経験でも安心。無料体験でパーソナル姿勢診断付き。',
    access: '地下鉄烏丸線「四条駅」周辺（京都市役所前から地下鉄でアクセス可）',
    address: '京都市下京区四条烏丸エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使った本格マシンピラティス。1回あたり2,200円のコスパ。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '施設使用料あり',
      '無料体験・パーソナル姿勢診断付き',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'CLUB PILATES 烏丸御池店',
    image: '/images/pilates2.webp',
    rating: 4.7,
    reviewCount: 105,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のピラティスブランド。烏丸御池駅徒歩1分で京都市役所前の隣駅。15種類の器具を使った本格レッスンが体験無料。',
      },
      {
        author: 'C.Y',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けで初心者から上級者まで対応。男性会員も多く、夫婦で通っている方も。8つのプログラムで飽きない。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '3週間前',
        text: 'インストラクター全員が500時間以上の研修済み。有酸素運動を含むレッスンもあり、ダイエット目的にも最適。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料',
    features: ['世界最大級', '15種類の器具', '男性OK', '烏丸御池駅徒歩1分'],
    description: '世界最大級のマシンピラティスブランド。烏丸御池駅徒歩1分（京都市役所前の隣駅）。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備。8つのプログラムと4段階のレベル分け。',
    access: '地下鉄烏丸線・東西線「烏丸御池駅」徒歩1分（京都市役所前の隣駅）',
    address: '京都市中京区烏丸御池エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（25,190円）',
      '通い放題プラン（28,490円）',
      'プライベートレッスン（1回 9,900円〜）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'ダイエット'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'アーバンクラシックピラティス 四条河原町店',
    image: '/images/pilates3.webp',
    rating: 4.5,
    reviewCount: 95,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '阪急京都河原町駅から徒歩3分。30分で完結するサーキット形式が忙しい日でもちょうどいい。予約不要でふらっと行ける。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '2週間前',
        text: '月4回9,680円〜とリーズナブル。マシンとフロアを交互に行うサーキット形式で効率よく全身を鍛えられる。',
      },
      {
        author: 'M.H',
        rating: 5,
        date: '3週間前',
        text: '予約不要なのが最大の魅力。思い立った時にすぐ行ける。30分で終わるので仕事帰りにもサクッと通える。',
      },
    ],
    price: '月4回 9,680円〜',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分完結', 'サーキット形式', '河原町駅徒歩3分'],
    description: '阪急京都河原町駅から徒歩3分。マシンとフロアを交互に行うサーキット形式で30分完結。予約不要で好きな時間に通える手軽さが魅力。月4回9,680円〜のリーズナブルな料金設定。',
    access: '阪急京都線「京都河原町駅」徒歩3分（京都市役所前から徒歩圏内）',
    address: '京都市下京区四条河原町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回プラン',
      description: 'サーキット形式の30分マシンピラティス。予約不要で通いやすい。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      '予約不要',
      '30分完結レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', 'ダイエット', '運動不足解消', '時短トレーニング'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'フロアエクササイズ', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！京都市役所前エリアのスタジオはほとんどが初心者歓迎。Rintosullは初心者87%以上、CLUB PILATESは4段階のレベル分けで安心。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。zen placeは両方対応。',
  },
  {
    question: '京都市役所前のピラティスの料金相場は？',
    answer: 'Rintosullは月4回8,800円〜と最安。アーバンクラシックピラティスは月4回9,680円〜。zen placeは月4回10,450円〜。グループ月4回で8,800円〜14,190円が相場。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。CLUB PILATESは高強度クラスもありダイエットに効果的。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。ピラティスKは体験0円、CLUB PILATESとRintosullも無料体験あり。zen placeはグループ体験1,000円。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates京都スタジオとCLUB PILATES烏丸御池店は男性も通えます。ピラティスK・Rintosullは女性専用です。',
  },
  {
    question: '一番安いスタジオは？',
    answer: 'Rintosullが月4回8,800円〜で最安。次にアーバンクラシックピラティスが月4回9,680円〜、zen placeが月4回10,450円〜。',
  },
  {
    question: '予約なしで通えるスタジオはありますか？',
    answer: 'アーバンクラシックピラティス四条河原町店は予約不要。30分完結のサーキット形式で好きな時間に通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KyotoShiyakushoMaePage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス京都市役所前おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">京都市役所前</span>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              こんにちは。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              Pilates-Biyori編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「京都市役所前で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、京都市役所前エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>京都市役所前でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>コスパの良いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅近で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              京都市役所前のおすすめピラティススタジオ5選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月4回8,800円〜のスタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• アーバンクラシックピラティス（月4回 9,680円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン専門</h3>
                <p className="text-warm-600 text-sm mb-4">
                  リフォーマーで本格ピラティス。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（15種類の器具）</li>
                  <li className="text-warm-700">• ピラティスK（音楽レッスン）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  地下鉄各駅から徒歩圏内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（烏丸御池駅徒歩1分）</li>
                  <li className="text-warm-700">• zen place（四条駅徒歩1分）</li>
                  <li className="text-warm-700">• アーバンクラシック（河原町駅徒歩3分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  コスパ重視の方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                  <li>• アーバンクラシック（9,680円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜14,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  バランス重視の方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜）</li>
                  <li>• ピラティスK（13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">本格派</p>
                <p className="text-sm text-warm-600 mb-4">
                  器具・プログラム充実。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（14,190円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないスタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  京都市役所前エリアはマシン月4回8,800円〜14,190円と幅広い価格帯。予約不要のスタジオもあり。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスK・CLUB PILATES・Rintosullは無料体験。zen placeはグループ体験1,000円で試せます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  京都市役所前は地下鉄東西線・烏丸線が利用可能。四条・烏丸御池・河原町の各駅周辺にスタジオが集中。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              よくある質問
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は京都市役所前エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では京都市役所前にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンを予約しよう
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜1,000円。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="kyoto-shiyakusho-mae" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
