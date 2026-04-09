import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス三軒茶屋おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '三軒茶屋エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,三軒茶屋,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 三軒茶屋',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 265,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '三軒茶屋駅から徒歩3分で通いやすいです。マットもマシンも両方受けられるのが嬉しい。インストラクターの質が高く、身体の使い方を丁寧に教えてくれます。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制なので丁寧に見てもらえます。マシンの種類も豊富で、自分のレベルに合わせて進められます。男性も通えるので夫婦で利用しています。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開しているので出張先でも通えるのが便利です。三軒茶屋はカフェも多く、レッスン後のリフレッシュも楽しめます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 3,300円',
    features: ['マット&マシン', '初心者歓迎', '三軒茶屋駅徒歩3分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。三軒茶屋駅世田谷通り口から徒歩3分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を行います。男性も利用可能です。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」世田谷通り口 徒歩3分',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩3分）',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プラン。三軒茶屋駅から徒歩3分で通いやすい。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      '月6回プラン（14,520円）',
      'フリープラン（16,940円）',
      'プライベートレッスン追加（1回 9,900円〜）',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスミラー 三軒茶屋',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    reviewCount: 180,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: 'コナミが運営しているので安心感があります。月6回11,000円はかなりコスパが良い。7回目以降も1,100円で追加できるのが嬉しいです。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: 'プライベート30分4,400円というのは他のスタジオと比べてもかなりお手頃。短時間でサクッと通えるのが気に入っています。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '体験レッスンが2,200円で気軽に試せました。大手コナミの運営なので設備も綺麗で清潔感があります。',
      },
    ],
    price: '月6回 11,000円〜',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '高コスパ', 'プライベート30分4,400円', '三軒茶屋駅近'],
    description: 'コナミスポーツが運営するマシンピラティス専門スタジオ。月6回11,000円という高コスパが魅力で、7回目以降も1回1,100円で追加受講可能。プライベートレッスンも30分4,400円とリーズナブル。大手ならではの安心感と充実した設備が特徴です。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」徒歩圏内',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩圏内）',
    popularPlan: {
      name: '月6回プラン',
      description: 'コナミ運営の高コスパプラン。7回目以降も1回1,100円で追加受講可能。',
      price: '月6回 11,000円（税込）',
    },
    options: [
      '7回目以降の追加レッスン（1回 1,100円）',
      'プライベートレッスン 30分（4,400円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', '健康維持'],
    },
    basicInfo: {
      hours: '施設により異なる',
      closed: '施設により異なる',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'luluto（ルルト）三軒茶屋店',
    image: '/images/pilates4.jpg',
    rating: 4.9,
    reviewCount: 120,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '理学療法士が監修しているので、身体の状態をしっかり見てもらえます。完全マンツーマンなので、自分だけのプログラムで進められるのが嬉しい。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: '体験が1,000円で、しかも体験当日に入会すると入会金22,000円が無料になるのでお得でした。丁寧なカウンセリングで安心感があります。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: '腰痛が改善しました。理学療法士の知識に基づいた指導なので、身体の不調にしっかり向き合ってもらえます。料金は高めですが価値があります。',
      },
    ],
    price: '月3回 29,700円〜',
    trial: '体験レッスン 1,000円',
    features: ['理学療法士監修', '完全マンツーマン', '体験当日入会金無料', '三軒茶屋駅近'],
    description: '理学療法士が監修する完全マンツーマンのマシンピラティススタジオ。一人ひとりの身体の状態を丁寧にカウンセリングし、オーダーメイドのプログラムを提供。腰痛・肩こりなどの身体の不調改善から、ボディメイクまで幅広く対応。入会金22,000円は体験当日の入会で無料になります。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」徒歩圏内',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩圏内）',
    popularPlan: {
      name: '月4回プラン',
      description: '完全マンツーマンで理学療法士監修のオーダーメイドレッスン。',
      price: '月4回 38,400円（税込）',
    },
    options: [
      '月3回プラン（29,700円）',
      '月4回プラン（38,400円）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['不調改善', '姿勢改善', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備', '完全個室'],
    },
  },
  {
    name: 'ELEMENT 三軒茶屋店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 150,
    reviews: [
      {
        author: 'K.S',
        rating: 5,
        date: '3日前',
        text: '30分のパーソナルレッスンなので、忙しい日でもサクッと通えます。体験1,000円で気軽に始められました。体験当日に入会すると入会金無料なのもお得です。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '1週間前',
        text: 'マシンピラティスのパーソナルジムなので、トレーナーさんがしっかりフォームを見てくれます。30分でも十分効果を感じられます。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '2週間前',
        text: '三軒茶屋駅から近くて通いやすい。パーソナルなので周りの目を気にせずトレーニングに集中できるのが嬉しいです。',
      },
    ],
    price: 'パーソナル30分',
    trial: '体験レッスン 1,000円',
    features: ['マシンピラティスジム', '30分パーソナル', '体験当日入会金無料', '三軒茶屋駅近'],
    description: 'マシンピラティス専門のパーソナルジム。1回30分の短時間パーソナルレッスンで、忙しい方でも効率的にトレーニングが可能。マシンピラティスの専門トレーナーがマンツーマンで指導するので、正しいフォームで効果的に身体を変えられます。入会金33,000円は体験当日の入会で無料になります。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」徒歩圏内',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩圏内）',
    popularPlan: {
      name: 'パーソナルプラン',
      description: 'マシンピラティス専門トレーナーによる30分パーソナルレッスン。',
      price: '料金は店舗にお問い合わせください',
    },
    options: [
      '入会金 33,000円（体験当日入会で無料）',
      '30分パーソナルレッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '体幹強化', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！三軒茶屋エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。zen place pilatesはマット&マシンの両方に対応、ピラティスミラーはコナミ運営で安心、lulutoは理学療法士監修で身体の状態に合わせた指導が受けられます。運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。三軒茶屋ではzen place pilatesが両方に対応しています。',
  },
  {
    question: '三軒茶屋のピラティススタジオの料金相場は？',
    answer: '三軒茶屋エリアのピラティススタジオの料金相場は、グループレッスン月6回で11,000円〜（ピラティスミラー）、月4回で10,450円〜（zen place pilates）。パーソナルレッスンは月3回29,700円〜（luluto）が目安です。体験レッスンは1,000円〜3,300円が一般的です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。特にluluto（ルルト）は理学療法士が監修しているため、腰痛や肩こりなどの身体の不調改善に強みがあります。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで根本原因を解消できます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方にはlulutoやELEMENTがおすすめ。グループはzen place pilatesやピラティスミラーで料金を抑えながら楽しく続けられます。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function SangenjayaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス三軒茶屋おすすめ4選！<br className="hidden md:block" />
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
              <span className="text-warm-600">三軒茶屋</span>
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
              Pilates Navi編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「三軒茶屋で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、東急田園都市線・世田谷線「三軒茶屋駅」周辺でおすすめのピラティススタジオ4選をまとめました。渋谷まで田園都市線で2駅というアクセスの良さに加え、おしゃれなカフェや個性的なお店が並ぶ人気エリアです。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>三軒茶屋でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金やレッスン内容を比較したい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅近で通いやすいスタジオがいい</span>
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
              三軒茶屋のおすすめピラティススタジオ4選
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
                  月額1万円前後で通えるスタジオ。グループレッスンで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を最大化。姿勢改善や身体の不調にしっかり向き合いたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• luluto（理学療法士監修・完全マンツーマン）</li>
                  <li className="text-warm-700">• ELEMENT（30分パーソナル）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">体験がお得</h3>
                <p className="text-warm-600 text-sm mb-4">
                  まずは気軽に体験レッスンから。お得な体験プランがあるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• luluto（体験1,000円・当日入会金無料）</li>
                  <li className="text-warm-700">• ELEMENT（体験1,000円・当日入会金無料）</li>
                  <li className="text-warm-700">• ピラティスミラー（体験2,200円）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。コスパ良く始めたい方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回 10,450円〜）</li>
                  <li>• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,000〜17,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">フリー</p>
                <p className="text-sm text-warm-600 mb-4">
                  通い放題やフリープランで回数を気にせず通える。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates フリー（16,940円）</li>
                  <li>• zen place pilates 月6回（14,520円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全マンツーマン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• luluto（月3回 29,700円〜）</li>
                  <li>• luluto（月4回 38,400円）</li>
                  <li>• ELEMENT（パーソナル30分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。身体の不調改善が目的ならlulutoの理学療法士監修プログラム、効率的なボディメイクならELEMENTの30分パーソナルがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  三軒茶屋エリアの料金相場は、グループレッスン月4〜6回で10,450円〜14,520円程度、パーソナルは月3回29,700円〜。無理なく継続できる予算を決めましょう。コスパ重視ならピラティスミラーの月6回11,000円がおすすめ。入会金も確認を。lulutoとELEMENTは体験当日入会で入会金が無料になります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。三軒茶屋エリアでは1,000円〜3,300円で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。三軒茶屋は東急田園都市線と世田谷線が利用でき、渋谷まで田園都市線で2駅という好アクセス。おしゃれなカフェや個性的なお店が並ぶ人気エリアなので、レッスン後のリフレッシュも楽しめますよ。駅から近いスタジオを選ぶと、仕事帰りや買い物ついでにも通えて便利です。
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
              今回は三軒茶屋のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              三軒茶屋は渋谷まで田園都市線で2駅という好立地ながら、おしゃれなカフェや個性的なお店が並ぶ住みやすいエリア。コスパの良いグループレッスンから、理学療法士監修のパーソナルまで、目的に合ったスタジオが見つかります。
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
              初回限定の体験レッスン1,000円〜3,300円。<br />
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

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
