import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/monzen-nakacho/' },
  title: '門前仲町のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: '門前仲町エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,門前仲町,江東区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place pilates,the SILK,DIVA,YARD,スタジオプラス',
}

const studios = [
  {
    name: 'zen place pilates 門前仲町スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 20,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: 'zen placeで唯一キッズルームが併設されているスタジオ。子連れでも安心して通えます。balanced body製のマシンが揃っていて本格的です。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '全国150店舗以上を相互利用できるのが便利。出張先でもレッスンを受けられます。男性OKなので夫婦で通っています。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'グループ体験が1,000円で気軽にお試しできました。月4回10,450円〜とコスパも良く、インストラクターの指導も丁寧です。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['キッズルーム併設', 'balanced body製マシン', '男性OK', '全国150店舗相互利用'],
    description: 'zen placeで唯一キッズルームを併設した門前仲町スタジオ。balanced body製のリフォーマー・チェア・バレルなどマシン各種を完備し、本格的なマシンピラティスを提供。月4回10,450円〜のリーズナブルな料金設定で、グループ体験は1,000円と気軽にお試し可能。男性も利用OK。全国150店舗以上を相互利用でき、ライフスタイルに合わせて柔軟に通えます。',
    access: '東京メトロ東西線・都営大江戸線「門前仲町駅」周辺',
    address: '東京都江東区門前仲町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン 月4回',
      description: 'balanced body製マシンを使った本格グループレッスン。初心者から上級者まで対応。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'グループレッスン（月4回 10,450円〜）',
      'プライベートレッスンあり',
      'グループ体験 1,000円',
      '全国150店舗相互利用可能',
      'キッズルーム完備',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（子連れママも多数）',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '産後ケア'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'バレル', 'キッズルーム', '更衣室'],
    },
  },
  {
    name: 'the SILK',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 300,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '女性専用で音楽に合わせたレッスンが楽しい！手ぶらOKなので仕事帰りにそのまま通えます。体験が無料なのも嬉しい。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '朝7:30から夜22:00まで営業しているので、早朝や仕事終わりでも通いやすいです。月3回12,980円〜で始められます。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '音楽に乗りながらのピラティスは新感覚。楽しく続けられるので運動嫌いの私でも3ヶ月続いています。女性専用で安心。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '音楽レッスン', '手ぶらOK', '体験無料'],
    description: '女性専用のマシンピラティススタジオ。音楽に合わせた独自のレッスンスタイルで、楽しみながらボディメイクができます。月3回12,980円〜、体験レッスンは無料。手ぶらOKなので仕事帰りにも気軽に通えます。営業時間は7:30〜22:00と幅広く、ライフスタイルに合わせやすい。',
    access: '門前仲町エリア（詳細は公式サイトでご確認ください）',
    address: '東京都江東区門前仲町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月3回プラン',
      description: '女性専用マシンピラティス。音楽に合わせた楽しいレッスン。手ぶらOK。',
      price: '月3回 12,980円〜（税込）',
    },
    options: [
      '月3回プラン（12,980円〜/月）',
      '月4回・通い放題プランあり',
      '体験レッスン 無料',
      '手ぶらOK（レンタルあり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス発散'],
    },
    basicInfo: {
      hours: '7:30〜22:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'レンタルウェア'],
    },
  },
  {
    name: 'ピラティススタジオDIVA',
    image: '/images/studios/pilates-diva-monzennakacho.webp',
    rating: 4.9,
    reviewCount: 6,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: '門前仲町駅から徒歩3分で通いやすい。1対1の60分パーソナルセッションで、自分の体の状態に合わせたオーダーメイドのレッスンが受けられます。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '越中島駅からも徒歩7分でアクセス良好。完全パーソナルなので初心者でも安心。体の悩みに寄り添った丁寧な指導が魅力です。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '3週間前',
        text: '60分のマンツーマンレッスンで、毎回自分の体調に合わせてメニューを組んでもらえます。肩こりや腰痛が改善されました。',
      },
    ],
    price: 'パーソナル（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['完全パーソナル', '駅徒歩3分', '60分セッション', 'オーダーメイド'],
    description: '門前仲町駅から徒歩3分、越中島駅から徒歩7分のパーソナルピラティススタジオ。1対1の60分パーソナルセッションで、一人ひとりの体の状態に合わせたオーダーメイドのレッスンを提供。姿勢改善、腰痛・肩こり改善、ボディメイクなど幅広い目的に対応。完全マンツーマンなので初心者でも安心して取り組めます。',
    access: '東京メトロ東西線・都営大江戸線「門前仲町駅」徒歩3分 / JR京葉線「越中島駅」徒歩7分',
    address: '東京都江東区門前仲町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルセッション（60分）',
      description: '1対1の完全パーソナル。体の状態に合わせたオーダーメイドレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      'パーソナルセッション（60分）',
      '体の状態に合わせたオーダーメイド',
      '体験レッスンあり',
      '2駅利用可能（門前仲町・越中島）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '腰痛・肩こり改善', 'ボディメイク', '体質改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティスマシン', '更衣室'],
    },
  },
  {
    name: 'YARD 清澄白河',
    image: '/images/studios/yard.webp',
    rating: 4.6,
    reviewCount: 19,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: 'ヨガとピラティスの専門スタジオで40種類以上のプログラムがあり飽きません。マットピラティスのクラスが充実しています。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: 'ホイールヨガやエアフローヨガなど珍しいプログラムも体験できます。ピラティスだけでなくヨガも楽しめるのが魅力。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: '清澄白河のおしゃれなエリアにあり、通うのが楽しい。プログラムの種類が豊富で、自分に合ったレッスンを選べます。',
      },
    ],
    price: '公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['ヨガ&ピラティス専門', '40種類以上のプログラム', 'マットピラティス', 'ホイールヨガあり'],
    description: 'ヨガとピラティスの専門スタジオ「YARD」清澄白河店。マットピラティスを中心に、40種類以上の多彩なプログラムを提供。ホイールヨガやエアフローヨガなどユニークなクラスも用意されており、ピラティスとヨガの両方を楽しみたい方に最適。初心者向けクラスも充実しています。',
    access: '東京メトロ半蔵門線・都営大江戸線「清澄白河駅」周辺',
    address: '東京都江東区清澄白河エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マットピラティスクラス',
      description: '40種類以上のプログラムから選べる。ヨガとの組み合わせも可能。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'マットピラティスクラス',
      'ヨガクラス各種',
      'ホイールヨガ・エアフローヨガ',
      '体験レッスンあり',
      '40種類以上のプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ヨガ&ピラティス両方', '柔軟性向上', 'リラクゼーション', 'ボディメイク'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マットピラティス', 'ヨガスタジオ', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'スタジオプラス 清澄白河',
    image: '/images/studios/studio-plus-kiyosumi.webp',
    rating: 4.7,
    reviewCount: 21,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '1週間前',
        text: 'ピラティスとエアリアルヨガの両方ができる珍しいスタジオ。1階のカフェでレッスン後にゆっくりくつろげるのも嬉しい。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '2週間前',
        text: '清澄白河駅と森下駅の両方から通えてアクセス便利。カフェ併設でおしゃれな雰囲気。エアリアルヨガは新感覚で楽しい。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '3週間前',
        text: 'カフェ併設のスタジオはなかなかないので、レッスン前後のひとときも楽しめます。ピラティスもエアリアルヨガも初心者向けクラスあり。',
      },
    ],
    price: '公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['ピラティス&エアリアルヨガ', 'カフェ併設', '2駅利用可能', '初心者歓迎'],
    description: '清澄白河駅・森下駅周辺のピラティス&エアリアルヨガスタジオ。ピラティスに加え、空中で行うエアリアルヨガのクラスも提供。1階にはカフェが併設されており、レッスン後にゆったりとくつろぐことができます。おしゃれな空間で心身をリフレッシュしたい方におすすめ。',
    access: '東京メトロ半蔵門線・都営大江戸線「清澄白河駅」/ 都営新宿線・大江戸線「森下駅」周辺',
    address: '東京都江東区清澄白河エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'ピラティスクラス',
      description: 'ピラティスとエアリアルヨガから選べる。カフェ併設のおしゃれなスタジオ。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'ピラティスクラス',
      'エアリアルヨガクラス',
      'カフェ併設（1階）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', 'リフレッシュ', 'エアリアルヨガ体験', '柔軟性向上'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティススタジオ', 'エアリアルヨガスタジオ', 'カフェ', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！門前仲町エリアのスタジオはほとんどが初心者歓迎です。zen place pilatesは多彩なクラスレベルで初心者専用もあり、the SILKは音楽に合わせた楽しいレッスンで初心者でも取り組みやすい。ピラティススタジオDIVAは完全パーソナルなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。門前仲町エリアではzen place pilatesやthe SILKがマシンピラティス、YARDがマットピラティスに対応しています。',
  },
  {
    question: '門前仲町のピラティスの料金相場は？',
    answer: 'zen place pilatesは月4回10,450円〜、the SILKは月3回12,980円〜。ピラティススタジオDIVAはパーソナルセッション（詳細は公式サイト参照）。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。zen place pilatesは全国150店舗を相互利用できるので、出張先でもレッスンを続けられます。大切なのは無理なく継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。the SILKは音楽に合わせた楽しいレッスンで、運動が苦手な方でも続けやすく、ダイエット効果も期待できます。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。the SILKは手ぶらOKでレンタルウェアもあり、体験は無料。zen place pilatesはグループ体験1,000円で気軽にお試しできます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates門前仲町スタジオは男性も通えます。the SILKは女性専用です。ピラティススタジオDIVA、YARD、スタジオプラスについては公式サイトでご確認ください。',
  },
  {
    question: '子連れで通えるスタジオはありますか？',
    answer: 'zen place pilates門前仲町スタジオはzen placeで唯一キッズルームを併設しており、お子さん連れでも安心して通えます。産後ママにも人気です。',
  },
  {
    question: 'ヨガとピラティス両方できるスタジオはありますか？',
    answer: 'YARD清澄白河はヨガとピラティスの専門スタジオで40種類以上のプログラムを提供。スタジオプラス清澄白河はピラティスとエアリアルヨガの両方を楽しめます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function MonzenNakachoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '門前仲町', url: 'https://pilates-biyori.com/area/monzen-nakacho/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス門前仲町おすすめ5選！
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
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">門前仲町</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="門前仲町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「門前仲町で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              門前仲町は東京メトロ東西線と都営大江戸線が乗り入れ、大手町まで東西線で約5分という好アクセスのエリア。深川不動堂や富岡八幡宮など歴史ある下町情緒が魅力の街です。そんな門前仲町エリアには、キッズルーム完備の大手チェーンから完全パーソナル、清澄白河のおしゃれなスタジオまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、門前仲町エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>門前仲町でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="門前仲町" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              門前仲町のおすすめピラティススタジオ5選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              門前仲町のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-4 py-3 text-left">種別</th>
                    <th className="px-4 py-3 text-left">料金相場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">グループレッスン（月4回）</td>
                    <td className="px-4 py-3">10,450円〜12,980円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 10,450円〜12,980円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              門前仲町は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の蔵前エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              門前仲町でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京メトロ東西線・都営大江戸線「門前仲町駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  門前仲町エリアのスタジオは門前仲町駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。門前仲町駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  門前仲町は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  門前仲町エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  門前仲町エリアだけでなく、近隣の<Link href="/area/kuramae/" className="text-warm-700 underline hover:text-warm-900">蔵前</Link>、<Link href="/area/toyosu/" className="text-warm-700 underline hover:text-warm-900">豊洲</Link>、<Link href="/area/tsukiji/" className="text-warm-700 underline hover:text-warm-900">築地</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              体験レッスン当日の持ち物・服装ガイド
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。自販機がないスタジオもあるため持参が安心。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多い。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用が必須のスタジオが多数。グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは脚を大きく動かすポーズが多いため、ストレッチの効く素材が必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。手ぶらで体験可能な場合もあるので事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>門前仲町エリアの豆知識：</strong>門前仲町は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額10,450円〜のスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティススタジオDIVA（1対1・60分）</li>
                  <li className="text-warm-700">• zen place pilates（プライベートレッスン）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">ライフスタイル重視</h3>
                <p className="text-warm-600 text-sm mb-4">子連れOKや多彩なプログラムも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（キッズルーム完備）</li>
                  <li className="text-warm-700">• the SILK（7:30〜22:00・手ぶらOK）</li>
                  <li className="text-warm-700">• YARD（40種類以上のプログラム）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。zen place pilatesは多彩なクラスレベルがあり、初心者専用クラスから始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。the SILKは音楽に合わせた楽しいレッスンで飽きずに続けられます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。zen place pilatesは全国150店舗を相互利用できるので、旅行先や出張先でもレッスンを続けやすい環境です。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000円前後/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">週1回ペースで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（12,980円/月3回）</li>
                  <li>• zen place pilates（10,450円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">個別対応</p>
                <p className="text-sm text-warm-600 mb-4">本気で体を変えたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティススタジオDIVA（60分パーソナル）</li>
                  <li>• オーダーメイドで効率的</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、産後ケア、体幹強化など、目的によって最適なスタジオは変わります。産後ケアならキッズルーム完備のzen place pilates、体の不調改善ならオーダーメイドのピラティススタジオDIVAがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  門前仲町エリアはグループ（zen place pilates・the SILK）、完全パーソナル（ピラティススタジオDIVA）、マットピラティス（YARD）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKは体験無料、zen place pilatesはグループ体験1,000円と気軽にお試しできます。まずは体験レッスンで雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  門前仲町は東京メトロ東西線・都営大江戸線が利用可能で、大手町まで約5分。ピラティススタジオDIVAは門前仲町駅から徒歩3分、越中島駅からも徒歩7分。the SILKは7:30〜22:00と営業時間が長く、ライフスタイルに合わせて通えます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
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
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は門前仲町エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              門前仲町は深川不動堂や富岡八幡宮など歴史ある下町情緒が魅力の街で、東京メトロ東西線・都営大江戸線で大手町まで約5分という好立地。キッズルーム完備のzen place pilates（グループ体験1,000円）、女性専用・音楽レッスンのthe SILK（体験無料）、完全パーソナルのピラティススタジオDIVA（駅徒歩3分）、40種類以上のプログラムを持つYARD清澄白河、カフェ併設のスタジオプラス清澄白河と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは無料体験ができるthe SILKや、1,000円で体験できるzen place pilatesから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              the SILKは体験無料、zen place pilatesはグループ体験1,000円。<br />
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
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/toyosu/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">豊洲</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="monzen-nakacho" areaName="門前仲町" />

      <RelatedAreas currentSlug="monzen-nakacho" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
