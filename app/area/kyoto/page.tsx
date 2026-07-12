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
  alternates: { canonical: 'https://biyori-pilates.com/area/kyoto/' },
  title: '京都のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: '京都エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,京都,四条,烏丸,河原町,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
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
        text: '四条駅12番出口から徒歩1分、河原町駅からも徒歩1分と抜群のアクセス。全国150店舗を他店利用できるのが便利。マットもマシンも両方受けられる。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '男性OKなので夫婦で通っています。グループ体験1,000円で気軽に試せた。月4回10,450円〜とマシンピラティスにしてはリーズナブル。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターの質が高く、解剖学に基づいた指導が受けられる。烏丸駅からも徒歩2分で通いやすい。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗相互利用', 'マット&マシン対応', '男性OK', '四条駅徒歩1分'],
    description: '全国150店舗を展開する大手ピラティススタジオ。四条駅12番出口徒歩1分・河原町駅徒歩1分・烏丸駅徒歩2分の好アクセス。マットとマシン両方のレッスンに対応。男性も利用可能で全店舗相互利用OK。',
    access: '阪急京都線「京都河原町駅」徒歩1分 / 地下鉄烏丸線「四条駅」12番出口徒歩1分 / 阪急京都線「烏丸駅」徒歩2分',
    address: '京都府京都市下京区四条通エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: 'マット・マシン両方のグループレッスンが受けられる基本プラン。全国150店舗で相互利用可能。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      '月6回プラン',
      '通い放題プラン',
      'プライベートレッスン',
      'グループ体験 1,000円',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 京都四条烏丸店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6,
    reviewCount: 191,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '女性専用のマシン専門スタジオ。音楽に合わせたレッスンが楽しくてあっという間に終わる。体験0円で気軽に試せた。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '5パート別のボディメイクプログラムで気になる部位を集中的にケアできる。月4回13,420円〜で本格マシンピラティスが受けられる。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: 'おしゃれな空間で女性専用なので安心。リフォーマーを使ったレッスンが楽しい。初心者でもインストラクターが丁寧に教えてくれます。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '音楽レッスン', '体験0円'],
    description: '女性専用のマシンピラティス専門スタジオ。音楽に合わせた独自のレッスンスタイルで楽しく続けられる。5パート別のボディメイクプログラムで部位集中ケア。体験レッスン0円。',
    access: '地下鉄烏丸線「四条駅」・阪急京都線「烏丸駅」周辺',
    address: '京都府京都市下京区四条烏丸エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスレッスン。5パート別ボディメイクで部位集中ケア。',
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
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ヒップアップ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull 京都四条烏丸店',
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 158,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列で安心感がある。月4回8,800円と京都エリアのマシンピラティスでは最安クラス。体験無料で気軽に始められた。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '初心者が87%以上なので周りの目を気にせず通える。無料体験でパーソナル姿勢診断もしてもらえた。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '女性専用で清潔感のあるスタジオ。プレミアムプランならLAVA等系列のヨガスタジオも利用可能。ピラティスとヨガ両方やりたい人に最適。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', '初心者87%以上', '月4回8,800円〜'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。月4回8,800円のリーズナブルな料金設定。初心者が87%以上で安心。無料体験でパーソナル姿勢診断付き。',
    access: '地下鉄烏丸線「四条駅」・阪急京都線「烏丸駅」周辺',
    address: '京都府京都市下京区四条烏丸エリア（詳細は公式サイトでご確認ください）',
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
    name: 'アーバンクラシックピラティス 四条河原町店',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 13,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: '阪急京都河原町駅から徒歩3分。サーキット形式で30分完結なので仕事帰りにサッと通える。予約不要なのが本当に便利。',
      },
      {
        author: 'C.Y',
        rating: 4,
        date: '2週間前',
        text: '月4回9,680円〜とリーズナブル。予約なしでふらっと行けるので続けやすい。30分であっという間に終わるけどしっかり効く。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: 'サーキット形式で初心者でもマシンの使い方を自然に覚えられる。短時間集中型なので忙しい人にぴったり。',
      },
    ],
    price: '月4回 9,680円〜',
    trial: '体験レッスンあり',
    features: ['サーキット形式', '30分完結', '予約不要', '河原町駅徒歩3分'],
    description: '阪急京都河原町駅から徒歩3分。サーキット形式で30分完結の効率的なマシンピラティススタジオ。予約不要でいつでも通える手軽さが魅力。月4回9,680円〜。',
    access: '阪急京都線「京都河原町駅」徒歩3分',
    address: '京都府京都市下京区四条河原町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回プラン',
      description: 'サーキット形式のマシンピラティス。30分完結で予約不要。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      '予約不要',
      '30分完結サーキット形式',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['時短トレーニング', 'ダイエット', '運動不足解消', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'サーキット用マシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates MUSE 京都四条大宮',
    image: '/images/studios/pilates-muse.webp',
    rating: 4.8,
    reviewCount: 27,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用で有資格トレーナーが丁寧に指導してくれる。パーソナルとセルフの両方使えるのが魅力。24時間使い放題で自分のペースで通える。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '2週間前',
        text: '結果重視のプログラムで体の変化を実感できた。トレーナーが全員有資格者なので安心して任せられる。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '3週間前',
        text: '24時間営業なので早朝や深夜でも通える。セルフでマシンを使えるのでコスパも良い。パーソナルでしっかりフォーム確認もできる。',
      },
    ],
    price: 'パーソナル＆セルフ利用',
    trial: '体験レッスンあり',
    features: ['女性専用', '有資格トレーナー', '24時間使い放題', '結果重視'],
    description: '女性専用のピラティススタジオ。有資格トレーナーによるパーソナルレッスンとセルフ利用の両方に対応。24時間使い放題で自分のペースで通える。結果重視のプログラム。',
    access: '阪急京都線「大宮駅」周辺 / 嵐電「四条大宮駅」周辺',
    address: '京都府京都市中京区四条大宮エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナル＆セルフ利用プラン',
      description: '有資格トレーナーのパーソナルレッスンと24時間セルフ利用の組み合わせ。結果重視のプログラム。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'パーソナルレッスン',
      'セルフ利用（24時間）',
      '有資格トレーナー指導',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体質改善'],
    },
    basicInfo: {
      hours: '24時間営業（セルフ利用）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ピラティスマシン各種', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！京都エリアのスタジオはほとんどが初心者歓迎。Rintosullは初心者87%以上、zen place pilatesはレベル別クラスあり。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。',
  },
  {
    question: '京都のピラティスの料金相場は？',
    answer: 'Rintosullは月4回8,800円〜と最安クラス。アーバンクラシックは月4回9,680円〜。zen placeは月4回10,450円〜。グループ月4回で8,800円〜13,420円が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。ピラティスKは5パート別ボディメイクでダイエットに効果的。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。ピラティスKは体験0円、Rintosullも無料体験あり。zen placeはグループ体験1,000円。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates京都スタジオとアーバンクラシックピラティスは男性も通えます。ピラティスK・Rintosull・Pilates MUSEは女性専用。',
  },
  {
    question: '一番安いスタジオは？',
    answer: 'マシンピラティスではRintosullが月4回8,800円〜で最安。アーバンクラシックは月4回9,680円〜。zen placeは月4回10,450円〜。',
  },
  {
    question: '予約なしで通えるスタジオは？',
    answer: 'アーバンクラシックピラティス四条河原町店は予約不要のサーキット形式。Pilates MUSEはセルフ利用が24時間可能。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KyotoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '京都', url: 'https://pilates-biyori.com/area/kyoto/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス京都おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">京都</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="京都" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「京都で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、京都エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>京都でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="京都" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              京都のおすすめピラティススタジオ5選
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
              京都のピラティス料金相場【2026年4月最新】
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
              京都は観光地としても人気のエリアですが、地元の方が日常的に通えるスタジオも増えています。町家を改装したスタジオなど京都ならではの趣ある空間でピラティスを楽しめるのが魅力。料金は大阪と同程度か、やや抑えめの傾向です。近隣の京都駅エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              京都でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">阪急京都線「京都河原町駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都エリアのスタジオは京都河原町駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。京都河原町駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光客と地元利用者で混雑時間が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都は観光地としても有名なため、観光客向けの体験プランと地元向けの月額プランが分かれているスタジオもあります。紅葉や桜のシーズンは周辺の混雑で移動に時間がかかることがあるため、余裕を持ったスケジュールで通いましょう。地元在住なら平日昼間が穴場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都エリアだけでなく、近隣の<Link href="/area/kyoto-station/" className="text-warm-700 underline hover:text-warm-900">京都駅</Link>、<Link href="/area/karasuma-oike/" className="text-warm-700 underline hover:text-warm-900">烏丸御池</Link>、<Link href="/area/shijo-kawaramachi/" className="text-warm-700 underline hover:text-warm-900">四条河原町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>京都エリアの豆知識：</strong>京都は四季折々の風情が楽しめるエリアです。観光シーズンは周辺の混雑で移動に時間がかかることがあるため、時間に余裕を持って出発しましょう。町家スタジオなど京都ならではの空間でピラティスを楽しめるのも魅力のひとつです。
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月4回8,800円〜のスタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• アーバンクラシック（月4回 9,680円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン専門</h3>
                <p className="text-warm-600 text-sm mb-4">
                  リフォーマーで本格ピラティス。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（音楽レッスン）</li>
                  <li className="text-warm-700">• Pilates MUSE（24時間利用可）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  四条・河原町駅から徒歩圏内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（四条駅徒歩1分）</li>
                  <li className="text-warm-700">• アーバンクラシック（河原町駅徒歩3分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  コスパ重視ならここ。
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
                  充実のマシンピラティス。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円〜）</li>
                  <li>• ピラティスK（13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">24時間利用</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">セルフ＆パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  自分のペースで通いたい方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates MUSE（24時間使い放題）</li>
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
                  京都はマシン月4回8,800円〜13,420円と幅広い価格帯。Rintosullが最安でzen placeが中間帯。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスKは体験0円、Rintosullも無料体験あり。zen placeはグループ体験1,000円で試せます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  京都は四条・烏丸・河原町エリアにスタジオが集中。zen placeは四条駅徒歩1分、アーバンクラシックは河原町駅徒歩3分。
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
              今回は京都エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では京都にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/gion-shijo/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">祇園四条</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kyoto" areaName="京都" />

      <RelatedAreas currentSlug="kyoto" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
