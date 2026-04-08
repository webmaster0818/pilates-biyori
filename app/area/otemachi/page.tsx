import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス大手町・東京駅おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '大手町・東京駅・八重洲エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。仕事帰りに通えるスタジオが見つかります。',
  keywords: 'ピラティス,大手町,東京駅,八重洲,丸の内,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 八重洲スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 220,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '東京駅から徒歩5分、大手町からも歩ける距離で便利です。仕事帰りに通っています。マットもマシンも両方受けられるのが嬉しい。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制なので丁寧に見てもらえます。AIによる背骨ムーブメント解析が面白く、自分の身体の状態を客観的に知れました。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開しているので出張先でも通えるのが便利。八重洲のスタジオはビジネス街の中にあり、落ち着いた雰囲気です。',
      },
    ],
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '東京駅徒歩5分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。東京駅八重洲北口から徒歩5分、大手町駅B10出口から徒歩7分。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。世界初のAI「背骨ムーブメント解析」を導入し、科学的なアプローチも可能。',
    access: '日本橋駅A7出口 徒歩3分 / 東京駅八重洲北口 徒歩5分 / 大手町駅B10出口 徒歩7分',
    address: '東京都中央区日本橋2-3-21 八重洲セントラルビル6F',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシン（リフォーマー）を使ったグループレッスン。少人数制で丁寧な指導。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 10,450円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベートレッスン（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:30〜22:00 / 土日祝 8:00〜19:30',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'the SILK 東京八重洲店',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    reviewCount: 165,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '東京駅八重洲北口から徒歩3分で通いやすい！女性専用なので安心。開放感のある大きな窓が気持ちいいスタジオです。',
      },
      {
        author: 'A.H',
        rating: 5,
        date: '2週間前',
        text: '初心者が8割というだけあって、体が硬い私でも無理なく始められました。音楽に合わせたレッスンが楽しいです。',
      },
      {
        author: 'M.M',
        rating: 4,
        date: '3週間前',
        text: '仕事帰りに通っています。スタジオがおしゃれで、モチベーションが上がります。入会金無料キャンペーンで始められました。',
      },
    ],
    price: 'Standard4 12,980円〜',
    trial: '体験レッスン（グループ）3,850円',
    features: ['女性専用', 'マシンピラティス専門', '東京駅徒歩3分', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。JR東京駅八重洲北口（16番出口）から徒歩3分の好アクセス。開放感のある大きな窓と白いリフォーマーが並ぶスタイリッシュな空間。初心者が8割を占め、体が硬い方や体力に自信がない方でも安心して始められます。',
    access: 'JR「東京駅」八重洲北口（16番出口）徒歩3分',
    address: '東京都中央区八重洲1-5-9 八重洲加藤ビルディング5F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プラン。音楽に合わせた50分のグループレッスン。',
      price: '月4回 12,980円（税込）〜',
    },
    options: [
      'Standard4（月4回 12,980円〜）',
      'Full（通い放題）',
      'Full Day（デイタイム通い放題）',
      'パーソナルレッスン（体験 9,900円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '仕事帰りのリフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'Pilates Mee 築地店',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    reviewCount: 140,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: 'セミパーソナルで通い放題が月37,500円はコスパ最高。1回あたり1,250円で本格マシンピラティスが受けられます。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: '少人数のセミパーソナルなので、グループレッスンより丁寧に見てもらえます。大手町から日比谷線で2駅、通いやすいです。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '2週間前',
        text: '月4回プランで通っています。セミパーソナルなのでインストラクターとの距離が近く、フォームを細かく修正してもらえます。',
      },
    ],
    price: 'セミパーソナル 月2回 11,000円〜',
    trial: 'お問い合わせください',
    features: ['セミパーソナル', '通い放題あり', '築地駅徒歩3分', 'コスパ抜群'],
    description: 'セミパーソナル×通い放題で圧倒的なコスパを実現するマシンピラティススタジオ。築地駅から徒歩3分。大手町から日比谷線で数駅の好アクセス。少人数制のセミパーソナルレッスンで、グループレッスンより丁寧な指導が受けられます。',
    access: '日比谷線「築地駅」徒歩3分 / 有楽町線「新富町駅」徒歩7分',
    address: '東京都中央区築地1-4-8 築地ホワイトビル503',
    popularPlan: {
      name: 'セミパーソナル通い放題',
      description: '少人数制セミパーソナルレッスンが何度でも受けられる。1回あたり1,250円の圧倒的コスパ。',
      price: '月額 37,500円（税込）',
    },
    options: [
      'セミパーソナル月2回（11,000円）',
      'セミパーソナル月4回（19,800円）',
      'セミパーソナル通い放題（37,500円）',
      'パーソナル月2回（22,000円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'コスパ重視', '継続的な運動'],
    },
    basicInfo: {
      hours: '9:00〜21:30',
      closed: '不定休',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'ピラティスK 銀座店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    price: 'マンスリー4メンバー 13,420円',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', 'マシンピラティス専門', '銀座一丁目駅徒歩1分', 'グループレッスン'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性専用マシンピラティス専門スタジオ。銀座一丁目駅7番出口から徒歩1分。大手町から丸ノ内線で銀座駅まで1駅とアクセス良好。初心者から経験者まで個人のペースに合わせたプログラムを用意。',
    access: '有楽町線「銀座一丁目駅」7番出口 徒歩1分 / 丸ノ内線「銀座駅」から大手町駅まで1駅',
    address: '東京都中央区銀座1-6-10 上一ビルディング7F',
  },
  {
    name: 'BDC PILATES 銀座スタジオ',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    price: 'グループ 月額 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['プロダンサー養成校プロデュース', '少人数制（最大8名）', '銀座一丁目駅徒歩1分', '本格的'],
    description: '40年以上の実績を持つプロダンサー養成校「BDC」がプロデュースするマシンピラティス専門スタジオ。銀座一丁目駅から徒歩1分。大手町から丸ノ内線で銀座駅まで1駅。最大8名の少人数制で質の高いグループレッスンを提供。',
    access: '有楽町線「銀座一丁目駅」徒歩1分 / JR「有楽町駅」徒歩3分 / 丸ノ内線「銀座駅」から大手町駅まで1駅',
    address: '東京都中央区銀座（銀座一丁目駅徒歩1分）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！大手町・東京駅周辺のピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '大手町エリアのピラティススタジオの料金相場は？',
    answer: '大手町・東京駅周辺のピラティススタジオの料金相場は、グループレッスン月4回で10,000円〜16,000円程度。セミパーソナルは月4回19,800円程度。パーソナルレッスンは1回8,000円〜10,000円が相場です。体験レッスンは500円〜3,850円と幅があります。',
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
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多いビジネスパーソンの方にも特におすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function OtemachiPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス大手町・東京駅おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">大手町</span>
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
              「大手町や東京駅周辺でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「仕事帰りに通えるピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、大手町・東京駅・八重洲エリアから通えるおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>大手町・東京駅周辺でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>仕事帰りに通えるスタジオがいい</span>
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
              大手町・東京駅周辺のおすすめピラティススタジオ5選
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
                  月額1万円前後から通えるスタジオ。グループレッスンやセミパーソナルで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（マット月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK 八重洲（月4回 12,980円〜）</li>
                  <li className="text-warm-700">• ピラティスK 銀座（月4回 13,420円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">少人数・パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  セミパーソナルやプライベートレッスンで丁寧な指導を受けたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル通い放題あり）</li>
                  <li className="text-warm-700">• BDC PILATES（最大8名の少人数制）</li>
                  <li className="text-warm-700">• zen place（プライベートレッスンあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手町駅からの近さ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  大手町駅・東京駅から徒歩圏内。仕事帰りや昼休みにもアクセスしやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 八重洲（東京駅徒歩3分）</li>
                  <li className="text-warm-700">• zen place 八重洲（東京駅徒歩5分）</li>
                  <li className="text-warm-700">• ピラティスK 銀座（銀座駅まで丸ノ内線1駅）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  マットグループやリーズナブルなマシンレッスン。初心者が気軽に始められる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（マット月4回 10,450円〜）</li>
                  <li>• the SILK 八重洲（月4回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜20,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備のスタジオ。少人数制やセミパーソナルも。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円）</li>
                  <li>• BDC PILATES（月額 15,400円〜）</li>
                  <li>• Pilates Mee（月4回 19,800円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">通い放題</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">コスパ◎</p>
                <p className="text-sm text-warm-600 mb-4">
                  週2回以上通うなら通い放題プランがお得。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（通い放題 37,500円）</li>
                  <li>• zen place（フリー 16,940円〜）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  大手町・東京駅周辺の料金相場は、グループレッスン月4回で10,000円〜16,000円程度、セミパーソナルは月4回19,800円程度。無理なく継続できる予算を決めましょう。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。500円〜3,850円程度で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  大手町は丸ノ内線・東西線・千代田線・半蔵門線・三田線の5路線が乗り入れ、東京駅も徒歩圏内という抜群のアクセス。日本最大のビジネス街として多くの企業が集まるエリアです。仕事帰りに立ち寄れるスタジオを選ぶと、継続しやすいですよ。
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
              今回は大手町・東京駅周辺のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              大手町は5路線が乗り入れる交通の要所で、東京駅・日本橋・銀座も徒歩圏内。ビジネス街の中心にありながら、仕事帰りに通える質の高いピラティススタジオが揃っています。
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
              初回限定の体験レッスン500円〜3,850円。<br />
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
