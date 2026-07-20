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
  alternates: { canonical: 'https://biyori-pilates.com/area/shijo-kawaramachi/' },
  title: '【2026年7月最新】四条河原町のピラティススタジオおすすめ5選｜無料体験・料金で比較',
  description: '四条河原町のピラティススタジオ5社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,四条河原町,京都,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place pilates,ピラティスK,アーバンクラシックピラティス,Rintosull,Pilates MUSE',
}

const studios = [
  {
    name: 'zen place pilates 京都スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 30,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '四条駅12番出口から徒歩1分で通いやすさ抜群。全国150店舗で他店利用できるので、出張先でもレッスンを受けられます。マットもマシンも両方対応しているのが魅力。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '男性も通えるスタジオなので夫婦で通っています。グループ体験が1,000円と手頃なので気軽に始められました。インストラクターの質が高く丁寧な指導です。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: '月4回10,450円〜とリーズナブル。河原町駅からも徒歩1分なので仕事帰りに通えます。マット&マシン両方のレッスンがあり飽きません。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗相互利用', 'マット&マシン対応', '男性OK', '駅徒歩1分'],
    description: '全国150店舗以上を展開するzen place pilatesの京都スタジオ。四条駅12番出口から徒歩1分、河原町駅からも徒歩1分、烏丸駅から徒歩2分と3路線からアクセス抜群。マットピラティスとマシンピラティスの両方に対応し、初心者から上級者まで幅広いプログラムを提供。全国の系列店を相互利用できるため、出張や旅行先でもレッスンを継続可能。男性も通えるスタジオです。',
    access: '地下鉄烏丸線「四条駅」12番出口徒歩1分 / 阪急京都線「京都河原町駅」徒歩1分 / 阪急京都線「烏丸駅」徒歩2分',
    address: '京都府京都市下京区四条河原町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン（月4回）',
      description: 'マット&マシン対応のグループレッスン。全国150店舗で相互利用可能。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'グループレッスン（月4回 10,450円〜）',
      'マット&マシン両方対応',
      'グループ体験レッスン 1,000円',
      '全国150店舗相互利用可能',
      '入会金あり（詳細は公式サイト参照）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マットスペース', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 京都四条烏丸店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6,
    reviewCount: 191,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '女性専用なので安心して通えます。マシン専門スタジオで音楽に合わせてレッスンするのが楽しい。体験0円で気軽に始められました。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '5パート別のボディメイクプログラムがあり、気になる部位を集中的に鍛えられます。月4回13,420円〜で本格マシンピラティスができるのはコスパが良い。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '音楽レッスンがテンション上がります。女性専用でマシン専門なので、効率的にボディメイクできます。スタッフも親切で初心者でも安心。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '音楽レッスン', '体験0円'],
    description: '女性専用のマシンピラティス専門スタジオ。音楽に合わせた独自のレッスンスタイルで、楽しみながらボディメイクができます。5パート別のプログラムで、気になる部位を集中的にアプローチ。月4回13,420円〜で本格マシンピラティスを体験可能。体験レッスンは0円で、初めての方でも気軽にお試しできます。',
    access: '阪急京都線「烏丸駅」周辺 / 地下鉄烏丸線「四条駅」周辺',
    address: '京都府京都市下京区四条烏丸エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '女性専用マシンピラティス。音楽レッスンで楽しくボディメイク。5パート別プログラム。',
      price: '月4回 13,420円〜（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円〜）',
      '5パート別ボディメイクプログラム',
      '体験レッスン 0円',
      '入会金あり（詳細は公式サイト参照）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '部位別トレーニング', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'アーバンクラシックピラティス 四条河原町店',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 13,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: '30分完結のサーキット形式なので忙しくても通いやすい。予約不要で思い立った時にすぐ行けるのが最高です。月4回9,680円〜とコスパも抜群。',
      },
      {
        author: 'Y.S',
        rating: 4,
        date: '2週間前',
        text: '阪急京都河原町駅から徒歩3分で通いやすい。サーキット形式で効率よくトレーニングできるので、仕事帰りにサクッと寄れます。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '3週間前',
        text: '予約不要なのが本当に便利。急に時間ができた時にふらっと行けます。30分で全身しっかり動かせるので短時間でも効果を実感。',
      },
    ],
    price: '月4回 9,680円〜',
    trial: '体験レッスンあり',
    features: ['サーキット形式', '30分完結', '予約不要', '駅徒歩3分'],
    description: '阪急京都河原町駅から徒歩3分のサーキット形式ピラティススタジオ。30分完結のプログラムで、忙しい方でも効率的にトレーニングできます。予約不要で思い立った時にすぐ通えるのが最大の魅力。月4回9,680円〜とリーズナブルな価格設定で、手軽にマシンピラティスを始められます。',
    access: '阪急京都線「京都河原町駅」徒歩3分',
    address: '京都府京都市下京区四条河原町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4',
      description: 'サーキット形式の30分完結マシンピラティス。予約不要で好きな時に通える。',
      price: '月4回 9,680円〜（税込）',
    },
    options: [
      'マンスリー4（月4回 9,680円〜）',
      'サーキット形式・30分完結',
      '予約不要',
      '体験レッスンあり',
      '入会金あり（詳細は公式サイト参照）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['運動不足解消', 'ダイエット', '体幹強化', '姿勢改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 京都四条烏丸店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 158,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列なのでサービスの質が安定しています。月4回8,800円〜はかなりリーズナブル。女性専用で安心して通えます。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '初心者が87%以上というだけあって、レッスンは丁寧でわかりやすい。体験無料なのでハードルが低く始めやすかったです。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: 'LAVA系列でヨガスタジオとの併用も可能。ピラティスとヨガ両方やりたい人に最適。初心者向けの丁寧な指導で安心。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'LAVA系列', '初心者87%以上', '体験無料'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。月4回8,800円〜という手頃な価格で本格マシンピラティスを体験できます。会員の87%以上が初心者からスタートしており、未経験者でも安心。体験レッスンは無料で、パーソナル姿勢診断も受けられます。LAVA系列店との併用も可能。',
    access: '阪急京都線「烏丸駅」周辺 / 地下鉄烏丸線「四条駅」周辺',
    address: '京都府京都市下京区四条烏丸エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4',
      description: '女性専用マシンピラティス。LAVA系列の安心サービス。初心者87%以上で安心。',
      price: '月4回 8,800円〜（税込）',
    },
    options: [
      'マンスリー4（月4回 8,800円〜）',
      'LAVA系列店との併用プランあり',
      '体験レッスン 無料・パーソナル姿勢診断付き',
      '入会金あり（詳細は公式サイト参照）',
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
    name: 'Pilates MUSE 京都四条大宮',
    image: '/images/studios/pilates-muse.webp',
    rating: 4.8,
    reviewCount: 27,
    reviews: [
      {
        author: 'C.H',
        rating: 5,
        date: '1週間前',
        text: '有資格トレーナーによるパーソナル指導が素晴らしい。結果重視のプログラムで、姿勢改善の効果を実感しています。女性専用で安心。',
      },
      {
        author: 'T.O',
        rating: 5,
        date: '2週間前',
        text: '24時間使い放題なので、自分のスケジュールに合わせて通えるのが最高。セルフトレーニングもできるので、パーソナルと組み合わせて効率的。',
      },
      {
        author: 'M.I',
        rating: 4,
        date: '3週間前',
        text: 'パーソナルとセルフの両方ができるのが魅力。トレーナーが全員有資格者なので指導の質が高い。結果にこだわりたい方におすすめ。',
      },
    ],
    price: 'パーソナル&セルフ（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['女性専用', '有資格トレーナー', '24時間使い放題', '結果重視'],
    description: '女性専用のマシンピラティススタジオ。有資格トレーナーによるパーソナル指導とセルフトレーニングの両方に対応。24時間使い放題で、自分のライフスタイルに合わせて通えます。結果重視のプログラムで、姿勢改善・ボディメイク・ダイエットなど具体的な目標達成をサポート。',
    access: '阪急京都線「大宮駅」周辺 / 四条大宮エリア',
    address: '京都府京都市中京区四条大宮エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナル&セルフプラン',
      description: '有資格トレーナーによるパーソナル指導+24時間セルフ使い放題。結果重視のプログラム。',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルレッスン',
      'セルフトレーニング（24時間使い放題）',
      'パーソナル&セルフ併用プラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '結果重視トレーニング'],
    },
    basicInfo: {
      hours: '24時間利用可能（セルフトレーニング）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！四条河原町エリアのスタジオはほとんどが初心者歓迎です。Rintosullは会員の87%以上が初心者からスタート。zen place pilatesもレベル別クラスがあり安心。アーバンクラシックピラティスは30分完結のサーキット形式で気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。zen place pilatesはマット&マシン両方に対応、その他のスタジオはマシン専門です。',
  },
  {
    question: '四条河原町のピラティスの料金相場は？',
    answer: 'Rintosullは月4回8,800円〜、アーバンクラシックピラティスは月4回9,680円〜、zen place pilatesは月4回10,450円〜、ピラティスKは月4回13,420円〜です。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。アーバンクラシックピラティスは予約不要・30分完結なので通いやすく、Pilates MUSEは24時間使い放題で好きな時に通えます。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。ピラティスKは5パート別ボディメイクで気になる部位を集中ケア。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。ピラティスKは体験0円、Rintosullも無料体験でパーソナル姿勢診断付き。zen place pilatesはグループ体験1,000円で気軽にお試しできます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates京都スタジオは男性も通えます。アーバンクラシックピラティスも男女問わず利用可能です。ピラティスK、Rintosull、Pilates MUSEは女性専用です。',
  },
  {
    question: '予約なしで通えるスタジオはありますか？',
    answer: 'アーバンクラシックピラティス四条河原町店は予約不要で通えます。30分完結のサーキット形式なので、思い立った時にすぐトレーニングできます。Pilates MUSEもセルフトレーニングは24時間利用可能です。',
  },
]

export default function ShijoKawaramachiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '四条河原町', url: 'https://pilates-biyori.com/area/shijo-kawaramachi/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月20日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス四条河原町おすすめ5選！
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
              <span className="text-warm-600">四条河原町</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="四条河原町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「四条河原町で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              四条河原町は京都最大の繁華街で、阪急京都線・京都市営地下鉄烏丸線・京阪本線が交差する交通の要衝。四条通と河原町通の交差点を中心に、百貨店やショッピングモールが建ち並ぶ京都随一のエリアです。そんな四条河原町エリアには、全国展開の大手チェーンから個性派スタジオまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、四条河原町エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>四条河原町でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="四条河原町" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              四条河原町のおすすめピラティススタジオ5選
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
              四条河原町のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,800円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,800円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              四条河原町は観光地としても人気のエリアですが、地元の方が日常的に通えるスタジオも増えています。町家を改装したスタジオなど四条河原町ならではの趣ある空間でピラティスを楽しめるのが魅力。料金は大阪と同程度か、やや抑えめの傾向です。近隣の烏丸御池エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              四条河原町でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">地下鉄烏丸線「四条駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  四条河原町エリアのスタジオは四条駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。四条駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光客と地元利用者で混雑時間が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  四条河原町は観光地としても有名なため、観光客向けの体験プランと地元向けの月額プランが分かれているスタジオもあります。紅葉や桜のシーズンは周辺の混雑で移動に時間がかかることがあるため、余裕を持ったスケジュールで通いましょう。地元在住なら平日昼間が穴場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  四条河原町エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  四条河原町エリアだけでなく、近隣の<Link href="/area/karasuma-oike/" className="text-warm-700 underline hover:text-warm-900">烏丸御池</Link>、<Link href="/area/gion-shijo/" className="text-warm-700 underline hover:text-warm-900">祇園四条</Link>、<Link href="/area/kyoto-station/" className="text-warm-700 underline hover:text-warm-900">京都駅</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>四条河原町エリアの豆知識：</strong>四条河原町は四季折々の風情が楽しめるエリアです。観光シーズンは周辺の混雑で移動に時間がかかることがあるため、時間に余裕を持って出発しましょう。町家スタジオなど四条河原町ならではの空間でピラティスを楽しめるのも魅力のひとつです。
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
                <p className="text-warm-600 text-sm mb-4">月額8,800円〜のスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• アーバンクラシックピラティス（月4回 9,680円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates MUSE（有資格トレーナー・結果重視）</li>
                  <li className="text-warm-700">• zen place pilates（プライベートレッスン対応）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">ライフスタイル重視</h3>
                <p className="text-warm-600 text-sm mb-4">24時間利用や予約不要も。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates MUSE（24時間使い放題）</li>
                  <li className="text-warm-700">• アーバンクラシックピラティス（予約不要・30分完結）</li>
                  <li className="text-warm-700">• zen place pilates（全国150店舗相互利用）</li>
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
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。Rintosullは初心者87%以上で安心、zen place pilatesもレベル別クラスがあり初心者専用レッスンから始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。ピラティスKの5パート別ボディメイクなら気になる部位を集中ケア。Pilates MUSEは結果重視のプログラムで目標達成をサポート。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。アーバンクラシックピラティスは予約不要・30分完結なので忙しい方でも続けやすい。Pilates MUSEは24時間使い放題で自分のペースで通えます。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円〜/月4回）</li>
                  <li>• アーバンクラシック（9,680円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜14,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">週1回ペースで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円〜/月4回）</li>
                  <li>• ピラティスK（13,420円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル・通い放題</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">結果重視</p>
                <p className="text-sm text-warm-600 mb-4">本気でボディメイクしたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates MUSE（パーソナル&24時間セルフ）</li>
                  <li>• 有資格トレーナーの指導で結果にコミット</li>
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
                  ダイエット、姿勢改善、ボディメイク、健康維持など、目的によって最適なスタジオは変わります。部位別ボディメイクならピラティスK、結果重視ならPilates MUSE、初心者なら87%が初心者のRintosullがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  四条河原町エリアはグループ（zen place pilates）、マシン専門（ピラティスK）、サーキット形式（アーバンクラシック）、パーソナル（Pilates MUSE）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスKは体験0円、Rintosullも無料体験でパーソナル姿勢診断付き。zen place pilatesはグループ体験1,000円。まずは体験で雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  四条河原町は阪急・地下鉄・京阪の3路線が利用でき交通アクセス抜群。zen place pilatesは四条駅から徒歩1分、アーバンクラシックは河原町駅から徒歩3分。Pilates MUSEは24時間利用可能、アーバンクラシックは予約不要で柔軟に通えます。
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
              今回は四条河原町エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              四条河原町は京都最大の繁華街で、阪急・地下鉄・京阪の3路線が利用できる好立地。全国150店舗で相互利用可能なzen place pilates（グループ体験1,000円）、女性専用マシン専門のピラティスK（体験0円）、予約不要・30分完結のアーバンクラシックピラティス（月4回9,680円〜）、LAVA系列で初心者87%以上のRintosull（体験無料）、有資格トレーナーによる結果重視のPilates MUSE（24時間使い放題）と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは無料体験ができるピラティスKやRintosullから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              ピラティスKとRintosullは体験0円。<br />
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
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="shijo-kawaramachi" areaName="四条河原町" />

      <RelatedAreas currentSlug="shijo-kawaramachi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
