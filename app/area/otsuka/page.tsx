import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス大塚おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '大塚エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,大塚,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ELEMENT 大塚店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 142,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '通い放題のマンツーマンマシンピラティスがこの価格で受けられるのは驚きです。大塚駅から徒歩4分で通いやすく、ウェアやタオルも無料なので手ぶらで通えます。',
      },
      {
        author: 'K.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'パーソナルなのにリーズナブルな料金が魅力。プロテインまで無料で提供してくれるので、トレーニング後の栄養補給もばっちりです。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: '1回あたり2,750円からマンツーマンレッスンが受けられるのはコスパ最高。インストラクターが丁寧に指導してくれるので初心者でも安心です。',
      },
    ],
    price: '1回2,750円〜（通い放題プランあり）',
    trial: '体験レッスンあり',
    features: ['通い放題マンツーマン', 'マシンピラティス', '大塚駅徒歩4分', 'ウェアタオル無料'],
    description: '通い放題型のマンツーマンマシンピラティススタジオ。大塚駅から徒歩4分の好立地。1回あたり2,750円からという業界屈指のコストパフォーマンスで、パーソナルレッスンが受け放題。ウェア・タオル・ドリンク・プロテインが全て無料なので、手ぶらで通えるのも魅力です。',
    access: '大塚駅から徒歩4分',
    address: '東京都豊島区南大塚3丁目',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マンツーマンマシンピラティスが通い放題。1回あたり2,750円〜の圧倒的コスパ。',
      price: '月額制（1回あたり2,750円〜）',
    },
    options: [
      'ウェア無料レンタル',
      'タオル無料レンタル',
      'ドリンク無料',
      'プロテイン無料提供',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '不定休',
      facilities: ['マシンピラティス', 'ロッカー', 'ウェア無料', 'タオル無料', 'プロテイン無料'],
    },
  },
  {
    name: 'パーソナルマシンピラティスYUZU 大塚店',
    image: '/images/pilates3.jpg',
    rating: 4.9,
    reviewCount: 98,
    reviews: [
      {
        author: 'R.H',
        rating: 5,
        date: '1週間前',
        text: '女性インストラクターなので安心して通えます。キッズスペースがあるので子連れでもOKなのが本当にありがたい。パーソナル専門なので自分に合ったレッスンを受けられます。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '産後の体型戻しで通い始めました。子どもを連れていけるので、託児の心配がなくて助かります。インストラクターさんが優しくて毎回楽しいです。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '1ヶ月前',
        text: 'パーソナル専門なので、自分のペースで丁寧に教えてもらえます。マシンを使ったレッスンで姿勢がどんどん良くなっているのを実感しています。',
      },
    ],
    price: 'パーソナルレッスン（要問い合わせ）',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', '女性インストラクター', 'キッズスペース完備', 'マシンピラティス'],
    description: 'パーソナル専門のマシンピラティススタジオ。女性インストラクターが一人ひとりの目標に合わせた丁寧な指導を提供。キッズスペース完備で、小さなお子様連れのママも安心して通えるのが大きな特徴。産後ケアや姿勢改善を目的とした方に特に人気です。',
    access: '大塚駅から徒歩圏内',
    address: '東京都豊島区南大塚エリア',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '女性インストラクターによるマンツーマンマシンピラティス。お子様連れOK。',
      price: '詳細は要問い合わせ',
    },
    options: [
      'キッズスペース利用（無料）',
      '女性インストラクター指名',
      '産後ケアプログラム',
      '姿勢改善プログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（子育てママ多数）',
      genderRatio: '女性100%',
      purpose: ['産後ケア', '姿勢改善', 'ボディメイク', '体力回復'],
    },
    basicInfo: {
      hours: '営業時間は要問い合わせ',
      closed: '不定休',
      facilities: ['マシンピラティス', 'キッズスペース', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 池袋店',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 312,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '大塚から山手線で1駅の池袋にあるので、通いやすいです。女性専用なので周りを気にせず集中できます。体験が2,000円で気軽に始められました。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1週間前',
        text: '音楽に合わせてマシンピラティスができるので楽しい！女性専用でグループレッスンなので、仲間と一緒に頑張れます。月4回13,420円はコスパ良し。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: 'マシンピラティスが初めてでしたが、グループレッスンでもしっかりフォームを見てもらえます。池袋駅直結で雨の日も楽に通えます。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', 'マシンピラティス', '池袋駅（大塚から1駅）', '音楽×マシン'],
    description: '大塚から山手線で1駅の池袋にある女性専用マシンピラティススタジオ。音楽に合わせた独自のグループマシンピラティスレッスンが人気。月4回13,420円からとリーズナブルな料金設定で、体験レッスンは2,000円で受けられます。',
    access: '池袋駅（大塚からJR山手線で1駅・約2分）',
    address: '東京都豊島区西池袋エリア',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスグループレッスン。女性専用で安心。音楽に合わせて楽しくトレーニング。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      '追加レッスンチケット（1回あたり追加料金）',
      '通い放題プラン変更',
      'ウェア・タオルレンタル',
      'ドリンクサービス',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ストレス発散', '楽しく運動'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '不定休',
      facilities: ['マシンピラティス', 'シャワー', 'ロッカー', 'パウダールーム', '女性専用'],
    },
  },
  {
    name: 'zen place pilates 池袋スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 278,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: '大塚から1駅の池袋にあるzen placeは、マットもマシンも両方できるのが魅力。月4回9,625円からで質の高いレッスンが受けられます。',
      },
      {
        author: 'N.Y',
        rating: 5,
        date: '2週間前',
        text: '全国展開している大手なので安心感があります。インストラクターのレベルが高く、一人ひとりに合わせた指導をしてくれます。',
      },
      {
        author: 'E.S',
        rating: 4,
        date: '3週間前',
        text: 'マットとマシンの両方を選べるのがいいですね。月9,625円〜はマットレッスンの価格ですが、この質でこの価格はかなりお得だと思います。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン 1,000円〜',
    features: ['マット&マシン', '大手スタジオ', '池袋駅（大塚から1駅）', '初心者歓迎'],
    description: '大塚から山手線で1駅の池袋にある全国展開の大手ピラティススタジオ。マットピラティスからマシンピラティスまで豊富なレッスンメニューが揃い、月4回9,625円〜というリーズナブルな料金で始められます。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '池袋駅（大塚からJR山手線で1駅・約2分）',
    address: '東京都豊島区西池袋エリア',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マットレッスン月4回プラン。マシンレッスンへのアップグレードも可能。',
      price: '月4回 9,625円〜（税込）',
    },
    options: [
      'プライベートレッスン追加（1回 9,900円〜）',
      'マシンレッスン追加',
      'ウェアレンタル',
      'タオルレンタル',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['マシンピラティス', 'マットスタジオ', 'シャワー', 'ロッカー', 'パウダールーム'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！大塚エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。ELEMENT大塚店やzen place pilatesは初心者歓迎で、経験豊富なインストラクターが基礎から丁寧に指導してくれます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。大塚エリアではELEMENT大塚店やピラティスKなど、マシンピラティスに対応したスタジオが充実しています。',
  },
  {
    question: '大塚エリアのピラティススタジオの料金相場は？',
    answer: '大塚エリアのピラティススタジオの料金は、ELEMENT大塚店の1回2,750円〜（通い放題）からzen place pilatesの月4回9,625円〜、ピラティスKの月4回13,420円と幅広いです。体験レッスンは1,000円〜2,000円程度が一般的です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。ELEMENT大塚店のような通い放題プランなら、自分のペースで頻度を上げられるのでおすすめです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。ELEMENT大塚店ならウェア・タオル・ドリンクが全て無料なので手ぶらでOKです。他のスタジオもレンタルが用意されていることが多いので、事前に確認しましょう。',
  },
  {
    question: '子連れでもピラティスに通えますか？',
    answer: 'はい、パーソナルマシンピラティスYUZU大塚店はキッズスペース完備で、小さなお子様連れでも安心して通えます。女性インストラクターが指導してくれるので、産後ケアにもおすすめです。',
  },
  {
    question: '大塚から池袋のスタジオには通いやすいですか？',
    answer: '大塚から池袋はJR山手線で1駅、約2分で到着します。ピラティスKやzen place pilatesは池袋駅から好アクセスなので、大塚在住の方でも十分通いやすい距離です。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルは一人ひとりに合わせた指導で効果が出やすく、ELEMENT大塚店やYUZU大塚店で受けられます。グループはピラティスKのように仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function OtsukaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス大塚おすすめ4選！<br className="hidden md:block" />
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
              <span className="text-warm-600">大塚</span>
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
              「大塚で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、大塚エリアでおすすめのピラティススタジオ4選をまとめました。大塚はJR山手線・都電荒川線が利用可能で、池袋まで1駅という好アクセスのエリア。大塚駅周辺のスタジオに加え、1駅先の池袋エリアのスタジオも含めてご紹介します。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>大塚でピラティススタジオを探している</span>
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
                  <span>子連れで通えるスタジオを探している</span>
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
              大塚のおすすめピラティススタジオ4選
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
                  リーズナブルな料金で質の高いレッスンを受けたい方におすすめ。通い放題プランやお手頃な月額プランが魅力。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ELEMENT 大塚店（1回2,750円〜）</li>
                  <li className="text-warm-700">• zen place pilates 池袋（月4回9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスK 池袋（月4回13,420円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで丁寧に指導してもらいたい方におすすめ。自分のペースで効果的にトレーニング。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ELEMENT 大塚店（通い放題マンツーマン）</li>
                  <li className="text-warm-700">• YUZU 大塚店（パーソナル専門）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性・ママ向け</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用スタジオやキッズスペース完備のスタジオ。安心して通える環境が整っています。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YUZU 大塚店（キッズスペース完備）</li>
                  <li className="text-warm-700">• ピラティスK 池袋（女性専用）</li>
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
                週2-3回（月8-12回）がおすすめ。ELEMENT大塚店のような通い放題プランなら、コストを気にせず頻度を上げられます。3-6ヶ月継続すると、周りからも変化に気づかれるレベルの効果が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。zen place pilatesの月4回プランなどは、無理なく長く続けられるちょうどいい頻度と料金設定です。
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
                  マットレッスン中心。初心者向けの基本プランが多い。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシンピラティス対応の人気プラン。グループ・パーソナル選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回13,420円）</li>
                  <li>• ELEMENT 大塚店（通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル専門</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">個別対応</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全マンツーマンレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• YUZU 大塚店（パーソナル専門）</li>
                  <li>• ELEMENT 大塚店（マンツーマン通い放題）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、産後ケアなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  大塚エリアの料金は、通い放題のELEMENT大塚店（1回2,750円〜）からzen place pilatesの月4回9,625円〜、ピラティスKの月4回13,420円まで幅広い選択肢があります。無理なく継続できる予算を決めましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスKは2,000円、zen placeは1,000円〜で体験できます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。大塚はJR山手線・都電荒川線が利用可能で、池袋まで1駅という好アクセスのエリアです。大塚駅周辺のELEMENTやYUZUはもちろん、池袋のピラティスKやzen placeも十分通いやすい距離ですよ。
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
              今回は大塚エリアのおすすめピラティススタジオ4選をご紹介しました。いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              大塚はJR山手線・都電荒川線が利用可能で、池袋まで1駅というアクセスの良さが魅力。大塚駅周辺にはELEMENT大塚店やYUZU大塚店があり、1駅先の池袋にはピラティスKやzen place pilatesもあるので、選択肢が豊富です。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは気になるスタジオの体験レッスンに参加して、自分に合うスタジオを見つけてみてください。
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
              初回限定の体験レッスン1,000円〜2,000円。<br />
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
