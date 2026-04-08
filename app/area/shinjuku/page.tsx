import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス新宿おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '新宿エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,新宿,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 新宿',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 265,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '大江戸線新宿西口駅D5出口から徒歩2分で通いやすいです。マットもマシンも両方受けられるので、その日の気分で選べるのが嬉しい。男性OKなので夫婦で通っています。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制で丁寧に見てもらえます。リフォーマーのグループレッスンが特に気に入っています。全国展開なので出張先でも通えるのが便利。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '体験500円で気軽に始められました。インストラクターの質が高く、身体の使い方を丁寧に教えてくれます。新宿駅からも近くて通いやすいです。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '大江戸線新宿西口駅徒歩2分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。大江戸線新宿西口駅D5出口から徒歩2分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。男性も利用可能で、経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を行います。体験レッスンは500円から気軽にお試しできます。',
    access: '大江戸線「新宿西口駅」D5出口 徒歩2分 / JR「新宿駅」西口 徒歩5分 / 丸ノ内線「新宿駅」徒歩5分',
    address: '東京都新宿区西新宿1丁目（新宿西口駅D5出口徒歩2分）',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットピラティスのグループレッスン。初心者から経験者まで無理なく続けられる人気プラン。マシンレッスンへのステップアップも可能。',
      price: '月4回 10,450円（税込）〜',
    },
    options: [
      'マットグループ（月4回 10,450円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'プライベートレッスン（1回 9,900円〜）',
      'ウェアレンタル・タオルレンタルあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスK 新宿店',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    reviewCount: 186,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '音楽に合わせて楽しくトレーニングできます！新宿三丁目駅から近くて通いやすい。女性専用なので周りの目を気にせず集中できるのが嬉しいです。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1週間前',
        text: 'マシンピラティス専門なので設備が充実しています。インストラクターが明るくて楽しい雰囲気。仕事帰りに通っています。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: 'グループレッスンですが丁寧に見てくれます。2ヶ月で体が引き締まってきました。月4回13,420円はコスパ良いです。',
      },
    ],
    price: 'マンスリー4メンバー 13,420円',
    trial: '体験レッスン 2,000円',
    features: ['マシンピラティス専門', '女性専用', '新宿三丁目駅近', '音楽×マシン'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性専用マシンピラティス専門スタジオ。全国54店舗展開。新宿三丁目駅から好アクセス。音楽に合わせた独自プログラムで楽しくボディメイク。初心者から経験者まで個人のペースに合わせたプログラムを用意しています。',
    access: '東京メトロ丸ノ内線・副都心線「新宿三丁目駅」近く / JR「新宿駅」東口 徒歩圏内',
    address: '東京都新宿区新宿3丁目（新宿三丁目駅近く）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスレッスン。女性専用で安心して通える人気プラン。音楽に合わせた50分のグループレッスン。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円）',
      'マンスリーデイメンバー（14,520円）',
      'マンスリーフルメンバー（16,170円）',
      '追加受講料（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ストレス発散', '体幹強化'],
    },
    basicInfo: {
      hours: '月〜金 9:30〜16:00 / 17:30〜22:00 / 土日祝 9:30〜20:00',
      closed: '第一月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'Rintosull 新宿西口駅前店',
    image: '/images/pilates4.jpg',
    rating: 4.6,
    reviewCount: 142,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '駅から3分で通いやすく、マシンピラティスとホットヨガの両方が受けられるのが魅力。通い放題プランがリーズナブルで助かります。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: '女性専用なので安心です。ホットヨガとピラティスを組み合わせて受けられるので、飽きずに続けられています。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: 'リーズナブルな通い放題プランが嬉しい。スタジオも清潔感があって気持ちよく通えます。',
      },
    ],
    price: 'リーズナブルな通い放題プランあり',
    trial: '体験レッスンあり',
    features: ['マシンピラティス&ホットヨガ', '女性専用', '駅から3分', 'リーズナブル通い放題'],
    description: 'マシンピラティスとホットヨガの両方を楽しめる女性専用スタジオ。新宿西口駅から徒歩3分の好立地。リーズナブルな通い放題プランが人気で、コストを抑えながらしっかりと身体を鍛えられます。ピラティスとヨガを組み合わせたプログラムで、より効果的なボディメイクが可能です。',
    access: '大江戸線「新宿西口駅」徒歩3分 / JR「新宿駅」西口 徒歩5分',
    address: '東京都新宿区西新宿（新宿西口駅前）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マシンピラティスもホットヨガも通い放題のお得なプラン。リーズナブルな価格で好きなだけレッスンを受けられます。',
      price: '詳細は店舗にお問い合わせください',
    },
    options: [
      'マシンピラティスレッスン',
      'ホットヨガレッスン',
      '通い放題プラン（リーズナブル）',
      '月回数制プランあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ダイエット', 'デトックス', '柔軟性向上', 'ストレス解消'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'ホットスタジオ', '女性専用'],
    },
  },
  {
    name: 'the SILK 新宿店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 195,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用で安心して通えます。スタジオの雰囲気がとてもおしゃれで、モチベーションが上がります。体験レッスンが無料なので気軽に始められました。',
      },
      {
        author: 'C.Y',
        rating: 5,
        date: '2週間前',
        text: '音楽に合わせたレッスンが楽しい！リフォーマーマシンを使ったレッスンで効果を実感しています。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '3週間前',
        text: 'Standard4プランで月4回通っています。新宿でのショッピングのついでに通えるのが便利。15,070円で質の高いレッスンが受けられるのは嬉しいです。',
      },
    ],
    price: 'Standard4 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['マシンピラティス専門', '女性専用', '新宿駅近', '体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。新宿駅からアクセス良好。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。世界水準のピラティス指導を提供しています。体験レッスンは無料で受けられるので、初めての方も気軽にお試しいただけます。',
    access: 'JR「新宿駅」近く / 東京メトロ丸ノ内線「新宿駅」徒歩圏内',
    address: '東京都新宿区新宿（新宿駅近く）',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プラン。音楽に合わせた50分のグループレッスン。初心者にも人気。',
      price: '月4回 15,070円（税込）〜',
    },
    options: [
      'Standard4（月4回 15,070円〜）',
      'Full（通い放題）',
      'Full Day（デイタイム通い放題）',
      '体験レッスン無料キャンペーン実施中',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！新宿エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。新宿ではzen place pilatesがマット&マシンの両方を提供しています。',
  },
  {
    question: '新宿のピラティススタジオの料金相場は？',
    answer: '新宿エリアのピラティススタジオの料金相場は、グループレッスン月4回で10,000円〜15,000円程度。zen place pilatesの月4回10,450円からthe SILKの月4回15,070円まで幅があります。体験レッスンは無料〜2,000円程度なので、まずは体験で試してみるのがおすすめです。',
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
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。Rintosullではマシンピラティスとホットヨガの両方が受けられるので、両方試したい方にもおすすめです。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: '新宿エリアではzen place pilates 新宿が男性も利用可能です。ピラティスK、Rintosull、the SILKは女性専用スタジオとなっています。男性の方はzen place pilatesの体験レッスン（500円〜）から始めてみるのがおすすめです。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
]

export default function ShinjukuPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス新宿おすすめ4選！<br className="hidden md:block" />
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
              <span className="text-warm-600">新宿</span>
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
              「新宿で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-4">
              新宿は、JR各線・小田急線・京王線・東京メトロ丸ノ内線・大江戸線等多数の路線が集まる日本最大級のターミナル駅。仕事帰りや買い物のついでにも通いやすいエリアです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、新宿エリアでおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>新宿でピラティススタジオを探している</span>
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
                  <span>仕事帰りに通えるスタジオがいい</span>
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
              新宿のおすすめピラティススタジオ4選
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
                  月額1万円前後から通えるスタジオ。グループレッスンで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 13,420円）</li>
                  <li className="text-warm-700">• Rintosull（リーズナブル通い放題）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの空間で安心してトレーニング。周りの目を気にせず集中できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（音楽×マシン）</li>
                  <li className="text-warm-700">• Rintosull（ピラティス&ホットヨガ）</li>
                  <li className="text-warm-700">• the SILK（体験無料）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  新宿西口駅・新宿三丁目駅から徒歩圏内。複数路線からアクセス可能。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（新宿西口駅徒歩2分）</li>
                  <li className="text-warm-700">• Rintosull（駅から3分）</li>
                  <li className="text-warm-700">• ピラティスK（新宿三丁目駅近）</li>
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
                <p className="text-3xl font-bold text-warm-800 mb-4">マットグループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  マットグループレッスンで気軽にピラティスデビュー。初心者におすすめ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マシン月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の人気スタジオ。少人数制グループレッスンでしっかりボディメイク。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円）</li>
                  <li>• the SILK（月4回 15,070円〜）</li>
                  <li>• zen place（リフォーマー月4回 15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">通い放題</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">フリープラン</p>
                <p className="text-sm text-warm-600 mb-4">
                  通い放題で頻度を上げたい方向け。短期集中でしっかり結果を出したい方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（リーズナブル通い放題）</li>
                  <li>• the SILK Full（通い放題プラン）</li>
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
                  新宿エリアの料金相場は、グループレッスン月4回で10,000円〜15,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。新宿エリアでは無料〜2,000円程度で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。新宿はJR各線・小田急線・京王線・東京メトロ丸ノ内線・大江戸線など多数の路線が集まる日本最大級のターミナル駅。仕事帰りやショッピングのついでに立ち寄れる立地が魅力です。
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
              今回は新宿のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              新宿はJR各線・小田急線・京王線・東京メトロ丸ノ内線・大江戸線等、多数の路線が集まる日本最大級のターミナル駅。大手チェーンから女性専用スタジオまで、多彩なスタジオが集まるエリアです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              男性も通えるzen place pilates、音楽×マシンが楽しいピラティスK、ピラティスとホットヨガが両方楽しめるRintosull、体験無料のthe SILKと、それぞれ特徴が異なるので、目的に合わせて選んでみてください。
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
              初回限定の体験レッスン無料〜2,000円。<br />
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
