import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス川越おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '川越エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,川越,埼玉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 川越店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: '女性専用マシンピラティス専門スタジオ。音楽に合わせたリフォーマーレッスンが楽しい。月額11,220円〜でコスパが良い。',
      },
      {
        author: 'A.K',
        rating: 5,
        date: '2週間前',
        text: '2024年5月オープンの新しいスタジオ。設備がきれいで清潔感がある。部位別ボディメイクプログラムが充実。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '本川越駅から徒歩6分、川越駅から徒歩7分。トライアルレッスン0円で気軽に試せました。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: 'トライアルレッスン 0円',
    features: ['女性専用', '音楽レッスン', 'トライアル0円', '部位別プログラム'],
    description: '女性専用マシンピラティス専門スタジオ。2024年5月川越にオープン。音楽に合わせた楽しいリフォーマーレッスンと部位別ボディメイクプログラムが充実。トライアルレッスン0円で気軽に体験可能。',
    access: '西武新宿線「本川越駅」徒歩6分 / 東武東上線・JR埼京線「川越駅」徒歩7分',
    address: '埼玉県川越市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 11,220円（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 11,220円）',
      'マンスリーフルメンバー（通い放題）',
      '追加受講あり',
      'トライアルレッスン0円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 川越店',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.7,
    reviewCount: 128,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: '川越駅西口から徒歩1分！マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式。予約不要で通えるのが便利。',
      },
      {
        author: 'S.A',
        rating: 4,
        date: '2週間前',
        text: '月4回8,800円〜とリーズナブル。1レッスン30分で短時間で効率的。セミパーソナルで一人ずつ違う動きをするので周りを気にしなくていい。',
      },
      {
        author: 'T.M',
        rating: 5,
        date: '3週間前',
        text: '運動が久しぶりでも安心のセミパーソナル。インストラクターが少人数を丁寧に指導してくれる。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['川越駅徒歩1分', '予約不要', 'サーキット形式', '30分レッスン'],
    description: '川越駅西口から徒歩1分のマシンピラティス＆ファンクショナルトレーニングスタジオ。予約不要のセミパーソナル形式で、マシンピラティスとワークアウトを組み合わせたサーキットトレーニング。1レッスン30分で効率的。',
    access: '東武東上線・JR埼京線「川越駅」西口 徒歩1分',
    address: '埼玉県川越市脇田本町1-3 グランベル川越ビル 5F',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティス＆ワークアウト月4回。予約不要。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '月4回プラン（8,800円）',
      '月8回プラン',
      '通い放題プラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '体幹強化', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜',
      facilities: ['リフォーマー', 'ファンクショナルトレーニング機器', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 本川越店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 98,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '1週間前',
        text: '本川越駅から徒歩3分。2026年1月オープンの新しいスタジオ。LAVA系列で安心感がある。初月1,980円のキャンペーンがお得。',
      },
      {
        author: 'N.S',
        rating: 5,
        date: '2週間前',
        text: '女性専用で大画面モニターを見ながらグループでマシンピラティス。姿勢診断で自分の体の状態が分かるのが良い。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '3週間前',
        text: '月4回8,800円〜でコスパが良い。LAVA会員特典もあり、ホットヨガとの併用も可能。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり（キャンペーンで初月1,980円）',
    features: ['女性専用', '本川越駅徒歩3分', '2026年1月OPEN', 'LAVA系列'],
    description: '女性専用マシンピラティススタジオ。2026年1月4日に本川越駅近くにオープン。LAVA系列のRintosullで大画面モニターを見ながらグループレッスン。姿勢診断付き。初月1,980円のキャンペーン実施中。',
    access: '西武新宿線「本川越駅」徒歩3分',
    address: '埼玉県川越市新富町付近（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: '女性専用マシンピラティス月4回。姿勢診断付き。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '月4回プラン（8,800円）',
      '通い放題プラン（16,800円）',
      '初月1,980円キャンペーン',
      'LAVA会員特典あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '大画面モニター', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'La pilates 川越店',
    image: '/images/studios/la-pilates.webp',
    rating: 4.7,
    reviewCount: 72,
    reviews: [
      {
        author: 'H.Y',
        rating: 5,
        date: '1週間前',
        text: '整体×マシンピラティスの融合スタジオ。JR川越駅から徒歩6分。整体の知識を活かした体のケアとピラティスを同時に受けられる。',
      },
      {
        author: 'M.K',
        rating: 5,
        date: '2週間前',
        text: '初回体験3,000円〜で試せます。整体師の資格を持つインストラクターが体の状態を見ながらレッスンしてくれる。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: '体の歪みやコリが気になる人におすすめ。整体とピラティスのダブルアプローチで効果を実感しやすい。',
      },
    ],
    price: '要問合せ',
    trial: '初回体験 3,000円〜',
    features: ['整体×ピラティス', '川越駅徒歩6分', '体のケア重視', '資格保持者'],
    description: '整体とマシンピラティスを融合させたスタジオ。JR川越駅から徒歩6分。整体師の資格を持つインストラクターが体の歪みやコリを見ながらマシンピラティスのレッスンを提供。体のケアとトレーニングを同時に行える。',
    access: '東武東上線・JR埼京線「川越駅」徒歩6分 / 西武新宿線「本川越駅」徒歩8分',
    address: '埼玉県川越市脇田町33-1 アイシンビル 6F',
    popularPlan: {
      name: '整体×マシンピラティス',
      description: '整体の知識を活かしたマシンピラティスレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '初回体験（3,000円〜）',
      '回数券・月額プランあり',
      '整体メニューあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体のケア', '姿勢改善', '肩こり・腰痛改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', '整体ベッド', '更衣室'],
    },
  },
  {
    name: 'ELEMENT 川越店',
    image: '/images/studios/element.webp',
    rating: 4.6,
    reviewCount: 65,
    reviews: [
      {
        author: 'K.T',
        rating: 5,
        date: '1週間前',
        text: 'マンツーマン専門のマシンピラティス。1回30分の短時間で効率的にトレーニングできる。通い放題プランもあり。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '2週間前',
        text: '完全マンツーマンで自分の体に合わせたメニューを組んでもらえる。初心者でも安心。',
      },
      {
        author: 'Y.A',
        rating: 5,
        date: '3週間前',
        text: 'パーソナルなのにリーズナブル。1回あたり2,750円〜で通い放題。川越駅からアクセスしやすい。',
      },
    ],
    price: '月額 38,280円〜（通い放題）',
    trial: '体験レッスンあり',
    features: ['マンツーマン', '30分レッスン', '通い放題', '川越駅近く'],
    description: 'マンツーマン専門のマシンピラティスジム。1回30分の短時間レッスンを通い放題で利用可能。完全マンツーマンで一人ひとりの体の状態に合わせたオーダーメイドレッスン。',
    access: '東武東上線・JR埼京線「川越駅」徒歩圏内',
    address: '埼玉県川越市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マンツーマンマシンピラティス通い放題。1回30分。',
      price: '月額 38,280円（税込）',
    },
    options: [
      '月4回プラン（22,000円）',
      '月8回プラン（33,000円）',
      '通い放題プラン（38,280円）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！川越エリアのスタジオはほとんどが初心者歓迎。ピラティスKはトライアルレッスン0円、URBAN CLASSICは予約不要で気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。川越はマシン専門スタジオが充実しています。',
  },
  {
    question: '川越のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜11,220円程度。URBAN CLASSICとRintosullが月4回8,800円〜で最もリーズナブル。ピラティスKは月4回11,220円。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。ピラティスKはトライアルレッスン0円、La pilatesは初回体験3,000円〜。各スタジオの公式サイトで確認してください。',
  },
  {
    question: '川越駅と本川越駅、どちらが便利ですか？',
    answer: 'URBAN CLASSIC PILATESは川越駅西口徒歩1分で最もアクセス◎。Rintosullは本川越駅徒歩3分。ピラティスKは両駅から徒歩6-7分。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'URBAN CLASSIC PILATES、La pilates、ELEMENTは男性も通えます。ピラティスK、Rintosullは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'ピラティスKがトライアルレッスン0円。Rintosullは初月1,980円のキャンペーンを実施中。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KawagoePage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス川越おすすめ10選！<br className="hidden md:block" />
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
              <span className="text-warm-600">川越</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="川越" />

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
              「川越で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、川越エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>川越でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
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
              川越のおすすめピラティススタジオ10選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円台で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 川越（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 川越（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• the SILK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• zen place（東口 徒歩2分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
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
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• the SILK（12,980円〜/月3回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• BDC PILATES（14,520円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• CLUB PILATES（28,490円/通い放題）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
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
                  川越の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKとCLUB PILATESは無料体験。zen placeは1,000円、ピラティスKは2,000円で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  川越はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
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
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は川越エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では川越にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜3,850円。<br />
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

      <RelatedAreas currentSlug="kawagoe" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
