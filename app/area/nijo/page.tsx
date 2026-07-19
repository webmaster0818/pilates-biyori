import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import Script from 'next/script'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/nijo/' },
  title: '【2026年7月最新】ピラティス二条おすすめ6選！人気スタジオの料金プランを簡単比較！',
  description: '京都二条エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,二条,京都,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,四条大宮',
}

const studios = [
  {
    name: 'STUDIO IVY 四条大宮店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 8,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '四条大宮駅から徒歩5分。完全プライベート空間でのマシンピラティスが受けられます。オーダーメイドプログラムで自分の悩みにピンポイントで対応。',
      },
      {
        author: 'K.H',
        rating: 5,
        date: '2週間前',
        text: '月謝制で1レッスン6,250円〜と継続しやすい価格設定。清潔感のある洗練された空間で気持ちよくレッスンできます。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '3週間前',
        text: '二条からも通いやすい立地。パーソナル専門なので初心者でも自分のペースで進められるのが安心。',
      },
    ],
    price: '1回 6,250円〜',
    trial: '体験レッスンあり',
    features: ['四条大宮駅徒歩5分', 'パーソナル専門', 'オーダーメイド', '月謝制'],
    description: '京都四条大宮のパーソナル専門マシンピラティススタジオ。嵐電四条大宮駅から徒歩5分。完全プライベート空間でお客様のお悩みに沿ったオーダーメイドプログラムを提供。月謝制で1レッスン6,250円〜で継続しやすい価格設定。',
    access: '嵐電嵐山本線「四条大宮駅」徒歩5分 / 阪急京都線「大宮駅」徒歩5分',
    address: '京都府京都市下京区仏光寺通堀川西入晒屋町622-1 ナレッジスペース四条大宮302',
    popularPlan: {
      name: 'パーソナルレッスン月4回',
      description: '完全プライベート空間でのマンツーマンマシンピラティス。',
      price: '月額 15,000円〜（税込）/ 1レッスン6,250円〜',
    },
    options: [
      '月4回プラン（15,000円〜）',
      '月8回プラン',
      '体験レッスン',
      '入会金 20,000円',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '肩こり腰痛改善', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室'],
    },
  },
  {
    name: 'Rintosull 京都四条烏丸店',
    image: '/images/studios/rintosull.webp',
    rating: 4.7,
    reviewCount: 158,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '1週間前',
        text: '烏丸駅から徒歩2分！ホットヨガLAVAが運営するマシンピラティス専門スタジオ。大画面スクリーンを使った最新スタイルのレッスンが新鮮。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '2週間前',
        text: '体験0円で気軽にスタート。87%以上が初心者とのことで安心。月額13,800円〜とリーズナブル。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '二条からも電車ですぐ。女性専用で清潔感のあるスタジオ。お悩み部位にピンポイントでアプローチできるのが良い。',
      },
    ],
    price: '月額 13,800円〜',
    trial: '体験レッスン 0円',
    features: ['烏丸駅徒歩2分', '女性専用', '体験0円', 'LAVA運営'],
    description: 'ホットヨガLAVAが運営する女性専用マシンピラティス専門スタジオ。烏丸駅から徒歩2分。大画面スクリーンを活用した最新スタイルのグループレッスン。リフォーマーを使い、お悩み部位にピンポイントでアプローチ。',
    access: '阪急京都線「烏丸駅」徒歩2分 / 地下鉄烏丸線「四条駅」徒歩5分',
    address: '京都府京都市下京区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス2店舗通い放題',
      description: '2店舗でのマシンピラティスグループレッスン通い放題。',
      price: '月額 13,800円（税込）',
    },
    options: [
      'マシンピラティス2店舗通い放題（13,800円）',
      'マシンピラティス全国通い放題（16,800円）',
      'ピラティス&ヨガ通い放題（18,800円）',
      '体験レッスン0円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美脚・美尻'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '大画面スクリーン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 京都スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 30,
    reviews: [
      {
        author: 'T.O',
        rating: 5,
        date: '1週間前',
        text: '烏丸御池駅から徒歩4分。マット・マシン・プライベートの3タイプが選べる。全国150店舗以上で他店利用可能なのが便利。',
      },
      {
        author: 'H.S',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス専門で20年以上の実績。グループ体験1,000円で気軽に試せました。インストラクターの質が高い。',
      },
      {
        author: 'N.T',
        rating: 4,
        date: '3週間前',
        text: '二条城が近くにあるエリア。レッスン後の散歩も気持ちいい。体験当日入会で入会金無料になりました。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['烏丸御池駅徒歩4分', 'マシンピラティス専門', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。烏丸御池駅から徒歩4分、二条エリアからもアクセス良好。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。',
    access: '地下鉄烏丸線・東西線「烏丸御池駅」徒歩4分',
    address: '京都府京都市中京区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4回プラン（10,450円〜）',
      'マシングループ体験（3,000円）',
      'プライベートレッスン（体験 9,900円）',
      '体験当日入会で入会金無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00 / 土日祝 8:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'SOU PILATES STUDIO（ソウピラティス）',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 7,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '烏丸エリアにあるマシンピラティス専門スタジオ。トレーナーの指導が丁寧で、楽しく続けられます。',
      },
      {
        author: 'M.I',
        rating: 5,
        date: '2週間前',
        text: '体のアライメント（姿勢の並び）を整えるレッスンで、根本的な体づくりを目指せる。一人ひとりに合わせた指導が嬉しい。',
      },
      {
        author: 'R.O',
        rating: 4,
        date: '3週間前',
        text: 'ビルの上階にあるスタジオ。清潔感があり、二条からも通いやすい立地です。',
      },
    ],
    price: '要問い合わせ',
    trial: '体験レッスンあり',
    features: ['烏丸エリア', 'マシン専門', 'アライメント重視', 'パーソナル対応'],
    description: '京都烏丸エリアのマシンピラティス専門スタジオ。体のアライメント（姿勢の並び）を整えることに重点を置いたレッスンで、健康な体づくりを目指す。一人ひとりに合わせたきめ細やかな指導。',
    access: '地下鉄烏丸線「四条駅」徒歩圏内',
    address: '京都府京都市中京区小伊山町535 ムタコタチビル（4F/5F/6F）',
    popularPlan: {
      name: 'マシンパーソナルレッスン',
      description: 'アライメントを重視したマシンピラティスパーソナルレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      'パーソナルレッスン',
      'グループレッスン',
      'アライメント改善プログラム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'アライメント改善', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室'],
    },
  },
  {
    name: 'Pilates MUSE 京都四条大宮',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.6,
    reviewCount: 27,
    reviews: [
      {
        author: 'E.S',
        rating: 5,
        date: '1週間前',
        text: '「パーソナル指導×24時間スタジオ使い放題」のハイブリッド型が画期的。有資格トレーナーのレッスン後、自分でも復習できるのが良い。',
      },
      {
        author: 'C.M',
        rating: 4,
        date: '2週間前',
        text: '女性専用の結果重視スタジオ。四条大宮駅から近くて通いやすい。韓国風のおしゃれな内装も気分が上がります。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '3週間前',
        text: '24時間使い放題のスタジオはなかなか珍しい。自分のペースで練習できるので上達が早い気がします。',
      },
    ],
    price: '70分6チケット＋24h使い放題 61,000円',
    trial: '体験レッスンあり',
    features: ['四条大宮駅近', '女性専用', '24h使い放題', '有資格トレーナー'],
    description: '全レッスンを有資格トレーナーが担当する結果重視の女性専用ピラティススタジオ。「パーソナル指導×24時間スタジオ使い放題」のハイブリッド型スタイルが特徴。四条大宮駅から近くアクセス良好。',
    access: '嵐電嵐山本線「四条大宮駅」徒歩圏内',
    address: '京都府京都市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '70分6チケット＋24時間使い放題',
      description: '有資格トレーナーによる70分レッスン6回＋24時間スタジオ自主練使い放題',
      price: '61,000円（税込）',
    },
    options: [
      '70分6チケット＋24h使い放題（61,000円）',
      'パーソナルレッスン',
      '24時間スタジオ利用',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'],
    },
    basicInfo: {
      hours: '24時間利用可能（セルフトレーニング）',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'style pilates 京都',
    image: '/images/studios/style-pilates-kyoto.webp',
    rating: 4.5,
    reviewCount: 10,
    reviews: [
      {
        author: 'L.T',
        rating: 5,
        date: '1週間前',
        text: '完全プライベート空間の韓国風スタジオ。おしゃれな内装でSNS映えします。レッスンの質も高くて大満足。',
      },
      {
        author: 'N.A',
        rating: 4,
        date: '2週間前',
        text: '韓国のピラティススタジオのような洗練された空間。二条エリアからもアクセスしやすい場所にあります。',
      },
      {
        author: 'H.K',
        rating: 4,
        date: '3週間前',
        text: 'インスタで見つけて体験に行きました。雰囲気がとても良く、レッスンも丁寧。定期的に通いたいスタジオです。',
      },
    ],
    price: '要問い合わせ',
    trial: '体験レッスンあり',
    features: ['韓国風スタジオ', '完全プライベート', 'おしゃれ空間', 'マシンピラティス'],
    description: '完全プライベート空間の韓国風マシンピラティススタジオ。洗練されたおしゃれな内装で、SNS映えする空間。一人ひとりに合わせたパーソナルレッスンを提供。京都の二条エリアからもアクセス良好。',
    access: '京都市内（詳細は公式サイトでご確認ください）',
    address: '京都府京都市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '韓国風完全プライベート空間でのマシンピラティス。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      'パーソナルレッスン',
      '完全プライベート空間',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', '美容', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: '二条エリアでピラティス初心者におすすめのスタジオは？',
    answer: 'Rintosull京都四条烏丸店は87%以上が初心者で体験0円。zen place京都は体験1,000円でグループレッスンを気軽に試せます。どちらも初心者に優しいスタジオです。',
  },
  {
    question: '二条周辺のピラティスの料金相場は？',
    answer: 'グループレッスン月4回で10,450円〜13,800円程度。パーソナルは1回6,250円〜。Rintosullは通い放題13,800円〜と通い放題プランがお得です。',
  },
  {
    question: '二条駅から通いやすいスタジオはどこですか？',
    answer: '二条駅から四条大宮は電車で約5分。STUDIO IVY四条大宮店やPilates MUSEが最寄り。烏丸御池方面ならzen place京都やRintosull四条烏丸店がアクセス良好です。',
  },
  {
    question: '女性専用のスタジオはありますか？',
    answer: 'Rintosull京都四条烏丸店とPilates MUSE京都四条大宮が女性専用です。Rintosullは体験0円なので気軽に試せます。',
  },
  {
    question: '24時間利用できるスタジオはありますか？',
    answer: 'Pilates MUSE京都四条大宮は「パーソナル指導×24時間スタジオ使い放題」のハイブリッド型。レッスン後に自主練習もできるユニークなスタイルです。',
  },
  {
    question: '体験レッスンの料金は？',
    answer: 'Rintosullは0円、zen placeはグループ体験1,000円〜。STUDIO IVYやSOU PILATESも体験レッスンを実施しています。まずは無料体験から試すのがおすすめ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。二条エリアはマシン専門スタジオが充実しています。',
  },
  {
    question: '京都らしいおしゃれなスタジオはありますか？',
    answer: 'style pilates京都は韓国風のおしゃれな完全プライベートスタジオ。Pilates MUSEも洗練された内装が特徴。京都らしい落ち着いた雰囲気の中でレッスンを楽しめます。',
  },
  {
    question: '二条城観光のついでにピラティスは受けられますか？',
    answer: '二条城周辺からは四条大宮方面のスタジオが近いです。STUDIO IVYやPilates MUSEは四条大宮駅から徒歩圏内。観光と組み合わせて京都でのピラティス体験も楽しめます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月の継続がおすすめ。まずは体験レッスンで自分に合うスタジオを見つけましょう。',
  },
]

export default function NijoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '二条', url: 'https://pilates-biyori.com/area/nijo/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月19日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス二条おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">二条</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="二条" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「二条・四条大宮エリアで人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、京都二条エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>二条・四条大宮エリアでピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験のあるスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>京都らしいおしゃれなスタジオに通いたい</span>
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

        <PriceComparisonTable studios={studios} areaName="二条" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              二条のおすすめピラティススタジオ6選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Purpose-based Recommendations */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円台で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• Rintosull（通い放題 13,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（体験0円・LAVA運営）</li>
                  <li className="text-warm-700">• Pilates MUSE（24h使い放題）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンの丁寧な指導。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（1回 6,250円〜）</li>
                  <li className="text-warm-700">• style pilates（韓国風プライベート）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              二条のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,250円〜9,350円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">0円〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              二条・四条大宮エリアは京都の中心部に位置しながらも、河原町・四条烏丸ほどの混雑がなく落ち着いた雰囲気。大手チェーンと個人スタジオがバランスよく揃い、グループからパーソナルまで選択肢が豊富です。Rintosullの通い放題13,800円〜は京都エリアでもコスパが高く、頻繁に通いたい方におすすめ。嵐電・阪急・地下鉄の3路線が利用でき、嵐山方面や四条烏丸方面からもアクセスしやすいエリアです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              二条でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">二条駅周辺と四条大宮は徒歩圏外</h3>
                <p className="text-warm-600 leading-relaxed">
                  二条駅から四条大宮駅は電車で約5分ですが、徒歩だと15〜20分かかります。天候の悪い日はバスか電車の利用がおすすめ。スタジオの最寄り駅を確認し、自分の通勤・通学ルートに合ったスタジオを選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京都の夏は暑く冬は寒い！季節に合った通い方を</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都の盆地特有の気候で、夏は蒸し暑く冬は底冷えします。夏は汗をかきやすいので着替えやタオルを多めに持参。冬は上着やマフラーを収納できるロッカーがあるか確認しましょう。四条大宮エリアはアーケード街が近く、雨の日でも比較的歩きやすいです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光シーズンは混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都は春の桜・秋の紅葉シーズンに観光客が急増します。二条城周辺は特に混雑するため、スタジオへの移動時間に余裕を持ちましょう。バスは渋滞で遅れることが多いので、電車での移動がおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較検討を</h3>
                <p className="text-warm-600 leading-relaxed">
                  二条エリアだけでなく、<Link href="/area/shijo-kawaramachi/" className="text-warm-700 underline hover:text-warm-900">四条河原町</Link>や<Link href="/area/kyoto-station/" className="text-warm-700 underline hover:text-warm-900">京都駅</Link>、<Link href="/area/katsura/" className="text-warm-700 underline hover:text-warm-900">桂</Link>エリアにもピラティススタジオがあります。地下鉄東西線を使えば二条から烏丸御池まで約3分。エリアをまたいで検討すると選択肢が広がります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-warm-50" id="trial-guide">
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
                  <strong>二条エリアの豆知識：</strong>二条は世界遺産・二条城をはじめ、京都の歴史と文化が息づくエリア。レッスン後は二条城周辺の散策や、三条商店街でのカフェ巡りもおすすめ。四条大宮エリアは飲食店も多く、レッスン後のランチやディナーにも困りません。京都ならではの落ち着いた雰囲気の中でピラティスを楽しんでみてください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
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
                  二条エリアの相場はグループ月4回で10,450円〜。Rintosullの通い放題13,800円〜はコスパ抜群。パーソナルは1回6,250円〜。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  Rintosullは0円で体験可能。zen placeはグループ体験1,000円。まずは気軽に体験に行きましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  二条エリアは嵐電・阪急・地下鉄の3路線が利用可能。自宅や職場からの通いやすさと営業時間を確認して選びましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
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
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は京都二条エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              二条・四条大宮エリアは京都の中心部でありながら落ち着いた雰囲気があり、ピラティスを始めるのにぴったりの環境です。大手チェーンのリーズナブルなプランからおしゃれなプライベートスタジオまで、多彩な選択肢が揃っています。
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
              初回限定の体験レッスン無料〜3,000円。<br />
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
      <ConsultantSection areaKey="nijo" areaName="二条" />

      <RelatedAreas currentSlug="nijo" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
