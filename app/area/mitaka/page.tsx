import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス三鷹おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '三鷹エリアのおすすめピラティススタジオ5選を徹底比較。ピラティスミラー、YUZU、zen place pilates、COCOLANCE、Pilaticiseなど実在スタジオの料金・体験レッスン・アクセスを完全ガイド。グループ・パーソナル・女性専用まで。',
  keywords: 'ピラティス,三鷹,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,ピラティスミラー,YUZU,zen place pilates,COCOLANCE,Pilaticise',
}

const studios = [
  {
    name: 'ピラティスミラー 三鷹',
    image: '/images/pilates1.jpg',
    rating: 4.6,
    reviewCount: 88,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: 'コナミスポーツが運営しているので安心感があります。天井ミラーで自分のフォームを確認しながらレッスンできるのが良い。30分レッスンで集中できます。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '2週間前',
        text: '月6回11,000円はコスパが良いです。少人数制なのでインストラクターにしっかり見てもらえます。体験2,200円で気軽にお試しできました。',
      },
      {
        author: 'R.N',
        rating: 5,
        date: '3週間前',
        text: '30分のレッスンなので忙しい日でも通いやすい。天井にミラーがあるので正しいフォームを意識しやすく、効果を実感しています。',
      },
    ],
    price: '月6回 11,000円（税込）',
    trial: '体験レッスン 2,200円',
    features: ['コナミスポーツ運営', '天井ミラー', '30分レッスン', '少人数制'],
    description: 'コナミスポーツが運営するマシンピラティススタジオ。天井に設置されたミラーで自分のフォームをリアルタイムに確認しながらレッスンできるのが特徴。1レッスン30分の効率的なプログラムで、忙しい方でも通いやすい。少人数制で一人ひとりに目が行き届く丁寧な指導。月6回11,000円のリーズナブルな料金設定も魅力です。',
    access: 'JR中央線「三鷹駅」周辺',
    address: '東京都三鷹市エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月6回プラン',
      description: '天井ミラー付きのスタジオで少人数制マシンピラティス。30分の効率的なレッスン。',
      price: '11,000円/月（税込）',
    },
    options: [
      '月6回プラン（11,000円/月）',
      '30分レッスン',
      '体験レッスン 2,200円',
      '少人数制グループレッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '天井ミラー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'YUZU 三鷹店',
    image: '/images/pilates2.webp',
    rating: 4.9,
    reviewCount: 72,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: 'リフォーマー、キャデラック、チェア、バレルと豊富なマシンが揃っていて、毎回違うエクササイズが楽しめます。パーソナルなので自分の体に合ったプログラムを組んでもらえます。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '完全パーソナルなので周りを気にせず集中できます。マシンの種類が多く、体の悩みに合わせた幅広いアプローチが可能。効果を実感しています。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '3週間前',
        text: 'キャデラックやバレルなど他のスタジオにはないマシンも完備。インストラクターの知識が豊富で、一人ひとりに合ったプログラムを提案してくれます。',
      },
    ],
    price: 'パーソナルレッスン（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['パーソナルマシンピラティス', 'リフォーマー完備', 'キャデラック・チェア・バレル', '豊富なマシン'],
    description: 'パーソナルマシンピラティス専門スタジオ。リフォーマー、キャデラック、チェア、バレルなど豊富なマシンを完備し、一人ひとりの体の状態や目的に合わせた幅広いエクササイズが可能。マンツーマン指導で正しいフォームを丁寧に教えてもらえるため、効率的に体を変えたい方におすすめです。',
    access: 'JR中央線「三鷹駅」周辺',
    address: '東京都三鷹市エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'リフォーマー・キャデラック・チェア・バレルなど豊富なマシンを使ったマンツーマン指導。',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルマシンピラティス',
      'リフォーマー・キャデラック・チェア・バレル完備',
      '体験レッスンあり',
      '一人ひとりに合わせたプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '更衣室'],
    },
  },
  {
    name: 'zen place pilates（三鷹エリア最寄り店舗）',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 130,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '三鷹から吉祥寺の店舗に通っています。月4回10,450円〜とリーズナブルで、グループ体験が1,000円で受けられるのも嬉しい。全国150店舗相互利用できるのも便利。',
      },
      {
        author: 'N.K',
        rating: 4,
        date: '2週間前',
        text: '男性OKなので夫婦で通っています。インストラクターの質が高く、解剖学に基づいた丁寧な指導が受けられます。全国の店舗で利用できるので出張先でも通えます。',
      },
      {
        author: 'H.Y',
        rating: 5,
        date: '3週間前',
        text: 'グループレッスンの体験が1,000円と気軽に試せます。マットもマシンもどちらもあるので飽きずに続けられています。初心者クラスも充実。',
      },
    ],
    price: '月4回 10,450円〜（税込）',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗相互利用', '月4回10,450円〜', '男性OK', 'グループ体験1,000円'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。三鷹エリアからアクセス可能な最寄り店舗（吉祥寺等）を利用可能。月4回10,450円〜のリーズナブルな料金で、マットピラティス・マシンピラティスの両方に対応。グループ体験1,000円で気軽に試せます。男性も利用OK。全国の店舗を相互利用できるため、出張やお出かけ先でも通えて便利です。',
    access: '三鷹エリアから最寄り店舗（吉祥寺等）へアクセス可能',
    address: '最寄り店舗の詳細は公式サイトでご確認ください',
    popularPlan: {
      name: 'グループレッスン 月4回プラン',
      description: 'マット・マシンどちらも対応のグループレッスン。全国150店舗で相互利用可能。',
      price: '10,450円〜/月（税込）',
    },
    options: [
      '月4回プラン（10,450円〜/月）',
      '月6回・月8回・通い放題プランあり',
      'グループ体験 1,000円',
      '全国150店舗相互利用可能',
      '男性利用OK',
    ],
    userProfile: {
      ageRange: '20代〜60代幅広い年齢層',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', '健康維持', 'ストレス解消'],
    },
    basicInfo: {
      hours: '店舗により異なる（公式サイトでご確認ください）',
      closed: '店舗により異なる',
      facilities: ['リフォーマー', 'マットスタジオ', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'COCOLANCE 三鷹店',
    image: '/images/pilates4.webp',
    rating: 4.8,
    reviewCount: 56,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '女性専門で個室プライベートなので、人目を気にせずリラックスして取り組めます。産後ダイエットの相談にも丁寧に対応してくれました。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '姿勢矯正目的で通い始めました。個室でマンツーマンなので自分の体の歪みに合わせたプログラムを組んでもらえます。女性専門なので安心。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '3週間前',
        text: '産後の体型戻しで利用しています。個室なので子供のことも相談しやすく、女性ならではの悩みに寄り添ってくれるスタジオです。',
      },
    ],
    price: 'パーソナルレッスン（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['女性専門', '個室プライベート', '産後ダイエット対応', '姿勢矯正対応'],
    description: '女性専門の個室プライベートピラティススタジオ。完全個室でのマンツーマン指導で、周囲を気にせず集中してレッスンを受けられます。産後ダイエットや姿勢矯正など、女性ならではの体の悩みに特化したプログラムを提供。一人ひとりの目的や体の状態に合わせたオーダーメイドのレッスンが魅力です。',
    access: 'JR中央線「三鷹駅」周辺',
    address: '東京都三鷹市エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '女性専門・完全個室でのマンツーマンピラティス。産後ダイエット・姿勢矯正に対応。',
      price: '詳細は公式サイト参照',
    },
    options: [
      '個室プライベートレッスン',
      '産後ダイエットプログラム',
      '姿勢矯正プログラム',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（産後ママも多数）',
      genderRatio: '女性100%（女性専門）',
      purpose: ['産後ダイエット', '姿勢矯正', 'ボディメイク', '体質改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティスマシン', '完全個室', '更衣室'],
    },
  },
  {
    name: 'Pilaticise（ピラティシーズ）',
    image: '/images/pilates5.jpg',
    rating: 4.8,
    reviewCount: 48,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: '三鷹駅から徒歩3分で通いやすい。女性限定のパーソナルスタジオなので安心して通えます。インストラクターが丁寧で毎回しっかり効果を感じます。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '駅近で女性限定なのが決め手でした。パーソナルなので自分のペースで進められるし、体の変化を実感できています。',
      },
      {
        author: 'R.O',
        rating: 4,
        date: '3週間前',
        text: '女性限定のパーソナルピラティスで安心感があります。三鷹駅から徒歩3分とアクセス抜群。一人ひとりに合わせたレッスンが受けられます。',
      },
    ],
    price: 'パーソナルレッスン（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['女性限定', '駅徒歩3分', 'パーソナルピラティス', '三鷹駅近'],
    description: '三鷹駅から徒歩3分の女性限定パーソナルピラティススタジオ。マンツーマン指導で一人ひとりの体の状態や目標に合わせたオーダーメイドのレッスンを提供。女性限定なので安心してリラックスした環境でレッスンを受けられます。駅近で通いやすく、継続しやすい立地も魅力です。',
    access: 'JR中央線「三鷹駅」徒歩3分',
    address: '東京都三鷹市エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '女性限定・駅徒歩3分のマンツーマンピラティス。体の状態に合わせたオーダーメイドレッスン。',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルピラティスレッスン',
      '女性限定スタジオ',
      '三鷹駅徒歩3分',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性限定）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティスマシン', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！三鷹エリアのスタジオはほとんどが初心者歓迎です。ピラティスミラーは30分の短時間レッスンで少人数制、zen place pilatesは初心者クラスも充実。YUZU、COCOLANCE、Pilaticiseはパーソナルなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。三鷹エリアの5スタジオはすべてマシンピラティスに対応しています。',
  },
  {
    question: '三鷹のピラティスの料金相場は？',
    answer: 'ピラティスミラーは月6回11,000円、zen place pilatesは月4回10,450円〜。YUZU、COCOLANCE、Pilaticiseはパーソナルレッスンで料金は公式サイトをご確認ください。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。ピラティスミラーは30分レッスンなので忙しい方でも週2回通いやすい。大切なのは無理なく継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。COCOLANCEは産後ダイエットにも対応しています。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。ピラティスミラーは体験2,200円、zen place pilatesはグループ体験1,000円と気軽に試せます。YUZU、COCOLANCE、Pilaticiseも体験レッスンを実施しています。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilatesは男性も通えます。ピラティスミラーも男女問わず利用可能です。COCOLANCE、Pilaticiseは女性専門・女性限定です。YUZUについては公式サイトでご確認ください。',
  },
  {
    question: '女性専用のスタジオはありますか？',
    answer: 'COCOLANCE三鷹店は女性専門、Pilaticiseは女性限定のパーソナルスタジオです。女性だけの安心した環境でレッスンを受けたい方におすすめです。',
  },
  {
    question: '産後ケアに対応しているスタジオはありますか？',
    answer: 'COCOLANCE三鷹店は産後ダイエット・姿勢矯正に特化したプログラムを提供しています。女性専門の個室プライベートレッスンなので、産後ママも安心して通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function MitakaPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス三鷹おすすめ5選！
              <br className="hidden md:block" />
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
              <span className="text-warm-600">三鷹</span>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「三鷹で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              三鷹はJR中央線の特快停車駅で、新宿まで約15分という好アクセスのエリア。太宰治ゆかりの文学の街としても知られ、井の頭恩賜公園やジブリ美術館など自然と文化が共存する住みやすい街です。そんな三鷹エリアには、コスパの良いグループレッスンから女性専門パーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、三鷹エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>三鷹でピラティススタジオを探している</span>
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
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              三鷹のおすすめピラティススタジオ5選
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
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月1万円台から始められるスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YUZU（豊富なマシン完備）</li>
                  <li className="text-warm-700">• COCOLANCE（女性専門・個室）</li>
                  <li className="text-warm-700">• Pilaticise（女性限定・駅徒歩3分）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用で安心</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの空間で安心レッスン。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• COCOLANCE（女性専門・産後対応）</li>
                  <li className="text-warm-700">• Pilaticise（女性限定パーソナル）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。ピラティスミラーは30分レッスンなので初心者でも無理なく取り組めます。zen place pilatesは初心者クラスも充実。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。YUZUはリフォーマー・キャデラック・チェア・バレルと豊富なマシンで効率的にボディメイクが可能です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">産後ケア・姿勢矯正</h3>
              <p className="text-warm-600 leading-relaxed">
                週1〜2回のペースで無理なく継続。COCOLANCEは産後ダイエット・姿勢矯正に特化した女性専門スタジオなので、産後ママにおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円〜/月4回）</li>
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜20,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜8回</p>
                <p className="text-sm text-warm-600 mb-4">週1〜2回ペースで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（上位プラン）</li>
                  <li>• グループ+パーソナル併用</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル重視</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">完全個室</p>
                <p className="text-sm text-warm-600 mb-4">本気で体を変えたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• YUZU（豊富なマシン完備）</li>
                  <li>• COCOLANCE（女性専門）</li>
                  <li>• Pilaticise（女性限定）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、産後ケア、体幹強化など、目的によって最適なスタジオは変わります。産後ケアならCOCOLANCE、豊富なマシンで幅広いエクササイズならYUZUがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  三鷹エリアはグループ（ピラティスミラー、zen place pilates）、パーソナル（YUZU、COCOLANCE、Pilaticise）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen place pilatesはグループ体験1,000円、ピラティスミラーは体験2,200円と手頃な価格で試せます。まずは体験で雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  三鷹はJR中央線の特快停車駅で、新宿まで約15分。Pilaticiseは三鷹駅徒歩3分とアクセス抜群。zen place pilatesは全国150店舗相互利用可能なので、出張先でも通えて便利です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は三鷹エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              三鷹はJR中央線の特快停車駅で新宿まで約15分という好立地。コナミスポーツ運営で天井ミラー付きのピラティスミラー（月6回11,000円）、豊富なマシン完備のパーソナルスタジオYUZU、全国150店舗相互利用のzen place pilates（月4回10,450円〜）、女性専門・個室プライベートのCOCOLANCE、女性限定・駅徒歩3分のPilaticiseと、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは体験レッスンが手頃なzen place pilates（グループ体験1,000円）やピラティスミラー（体験2,200円）から試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              zen place pilatesはグループ体験1,000円、ピラティスミラーは体験2,200円。<br />
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
      <RelatedAreas currentSlug="mitaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
