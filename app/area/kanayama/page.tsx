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



export const metadata = {
  title: '【2026最新】ピラティス金山おすすめ6選！人気スタジ���の料金プランを簡単比較！',
  description: '名古屋金山エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験��ッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,金山,名古屋,愛知,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 金山',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 16,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: '金山駅2番出口から��歩5分。グレード01（最上位）のスタジオで設備が充実。マット・マシン・プライベートの3タイプが選べます。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス専門で20年以上の実績。全国150店舗以上で相互利用可能。出張先でもレッスンを受けられて便利。',
      },
      {
        author: 'M.A',
        rating: 4,
        date: '3週間前',
        text: '体験はマットグループ1,000円。体験当日入会で入会金無料。男性も通えるので夫婦で通い始めました。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'マットグループ体験 1,000円',
    features: ['金山駅徒歩5分', 'グレード01', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。名城線・名港線「金山駅」2番出口から徒歩5分。グレード01（最上位グレード）で設備が充実。マットグループ・マシングループ・プライベートの3タイプが選べます。全国150店舗以上で相互利用可能。',
    access: '地下鉄名城線・名港線「金山駅」2番出口 徒歩5分 / JR・名鉄「金山駅」北口 徒歩7分',
    address: '愛知県名古屋市中区金山4-3-7 中洋ビル3F',
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
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:30 / 土日祝 8:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 金山店',
    image: '/images/studios/rintosull.webp',
    rating: 4.7,
    reviewCount: 49,
    reviews: [
      {
        author: 'Y.M',
        rating: 5,
        date: '1週間前',
        text: '金山駅南口から徒歩2分！ホットヨガLAVAが運営するマシンピラティス専門スタジオ。体験0円で気軽に始められました。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '2週間前',
        text: '大画面スクリーンを使ったグループレッスンが楽しい。女性専用なので安心。月額13,800円〜で通い放題はコスパ良し。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '3週間前',
        text: '日曜定休以外は毎日通えるので、仕事帰りに立ち寄りやすい。リフォーマーを使ったレッスンで部位別にアプローチできます。',
      },
    ],
    price: '月額 13,800円〜',
    trial: '体験レッスン 0円',
    features: ['金山駅南口徒歩2分', '女性専用', '体験0円', 'LAVA運営'],
    description: 'ホットヨガLAVAが運営する女性専用マシンピラティス専門スタジオ。金山駅南口から徒歩2分の好立地。大画面スクリーンを活用した最新スタイルのグループレッスン。',
    access: 'JR・名鉄・地下鉄「金山駅」南口 徒歩2分',
    address: '愛知県名古屋市熱田区金山町1-4-6 アルティメイト金山5F',
    popularPlan: {
      name: 'マシンピラティス2店舗通い放題',
      description: '2店舗でのマシンピラティスグループレッスン通い放題。',
      price: '月額 13,800円（税込）',
    },
    options: [
      'マシンピラティス2店舗通い放題（13,800円）',
      'マシンピラ��ィス全国通い放題（16,800円）',
      'ピラティス&ホットヨガ&暗闇キックボクシング通い放題（18,800円）',
      '体験レッスン0円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美脚・美尻'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '毎週日曜日',
      facilities: ['リフォーマー', '大画面スクリーン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Mee 名古屋金山店',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      {
        author: 'R.K',
        rating: 5,
        date: '1週間前',
        text: '金山駅から徒歩3分。最大3名のセミパーソナル形式で、パーソナルに近い手厚い指導が受けられます。女性専用で安心。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '2週間前',
        text: 'セミパーソナル定額制で1回あたり1,250円〜というコスパの良さ。インストラクターが一人ひとりしっかり見てくれます。',
      },
      {
        author: 'E.Y',
        rating: 4,
        date: '3週間前',
        text: 'パーソナルは高いけどグループだと物足りない…という方にぴったり。3名までなので待ち時間もなくスムーズ。',
      },
    ],
    price: '1回あたり 1,250円〜',
    trial: '体験レッスンあり',
    features: ['金山駅徒歩3分', '女性専用', 'セミパーソナル', '最大3名'],
    description: '最大3名までの少人数セミパーソナル形式の女性専用マシンピラティススタジオ。金山駅から徒歩3分。インストラクターが一人ひとりに十分に対応できるセミパーソナル定額制で、1回あたり1,250円〜の高コスパ。',
    access: 'JR・名鉄・地下鉄「金山駅」徒歩3分',
    address: '愛知県名古屋市熱田区新尾頭1-6-11 プレミール金山702',
    popularPlan: {
      name: 'セミパーソナル定額制',
      description: '最大3名のセミパーソナルマシンピラティス。',
      price: '1回あたり 1,250円〜（税込）',
    },
    options: [
      'セミパーソナル定額制',
      '月額プラン',
      '体験レッスン',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'PPPスタジオ 金山',
    image: '/images/studios/club-pilates.webp',
    rating: 4.6,
    reviewCount: 4,
    reviews: [
      {
        author: 'N.S',
        rating: 5,
        date: '1週間前',
        text: '女性専用・完全予約制のピラティススタジオ。キャデラックとリフォーマーが2台ずつあり、設備が充実しています。',
      },
      {
        author: 'H.O',
        rating: 4,
        date: '2週間前',
        text: '撮影OKなのが珍しい。フォームの確認に使えて便利。パーソナルレッスンとセルフフリーピラティスの組み合わせプランがユニーク。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '3週間前',
        text: 'ピラティス経験者にはセルフフリーの通い放題プランがおすすめ。初心者はパーソナルレッスンからスタートできます。',
      },
    ],
    price: '要問い合わせ',
    trial: '体験レッスンあり',
    features: ['金山駅周辺', '女性専用', '撮影OK', 'セルフフリー通い放題'],
    description: '名古屋市中区伊勢山（金山駅周辺）にある女性専用・完全予約制のマシンピラティススタジオ。キャデラック・リフォーマー各2台に加え、チェア、バレル、マット等も完備。パーソナルレッスンとセルフフリーピラティスの組み合わせプランが特徴。',
    access: 'JR・名鉄・地下鉄「金山駅」徒歩圏内',
    address: '愛知県名古屋市中区伊勢山',
    popularPlan: {
      name: 'マンスリー2&2プラン',
      description: '月2回パーソナル＋月2回セルフフリーピラティスの組み合わせプラン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      'パーソナルレッスン',
      'セルフフリーピラティス通い放題',
      'マンスリー2&2プラン',
      '撮影OK',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'セルフケア'],
    },
    basicInfo: {
      hours: '完全予約制（公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー×2', 'キャデラック×2', 'チェア', 'バレル', 'マット'],
    },
  },
  {
    name: 'CALDO（カルド）金山',
    image: '/images/studios/caldo.webp',
    rating: 4.5,
    reviewCount: 207,
    reviews: [
      {
        author: 'A.M',
        rating: 5,
        date: '1週間前',
        text: '室温40度・湿度55%のホット環境でヨガやピラティスが受けられます。プログラム数が豊富で飽きません。金山駅からアクセス良好。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: 'ホット環境でのピラティスは大量に汗をかけてデトックス効果あり。料金もリーズナブルで続けやすい。',
      },
      {
        author: 'R.S',
        rating: 4,
        date: '3週間前',
        text: 'ヨガメインですがピラティスプログラムも充実。予約不要で気軽に通えるのが良いところ。',
      },
    ],
    price: '月額 要問い合わせ',
    trial: '体験レッスンあり',
    features: ['ホット環境', 'プログラム豊富', '予約不要', 'ヨガ＆ピラティス'],
    description: '室温40度・湿度55%のホット環境でヨガやピラティスのレッスンが受けられるスタジオ。プログラム数が豊富で、ピラティス以外にもホットヨガやファイティングなど多彩なレッスンを提供。予約不要で気軽に通える。',
    access: 'JR・名鉄・地下鉄「金山駅」徒歩圏内',
    address: '愛知県名古屋市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー会員',
      description: 'ホットヨガ・ピラティスなど全プログラムが受けられる月額プラン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      '月額会員プラン',
      'ホットヨガ',
      'ピラティス���ログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ダイエット', 'デトックス', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ホットスタジオ', 'マット', '更衣室', 'シャワー', 'ロッカー'],
    },
  },
  {
    name: 'A.STUDIO 金山',
    image: '/images/studios/pilates-studio-dep.webp',
    rating: 4.6,
    reviewCount: 18,
    reviews: [
      {
        author: 'L.M',
        rating: 5,
        date: '1週間前',
        text: '金山駅から徒歩5分のパーソナルマシンピラティススタジオ。完全予約制で一人ひとりに合わせた丁寧なレッスン。',
      },
      {
        author: 'S.A',
        rating: 4,
        date: '2週間前',
        text: 'マンツーマンで自分のペースで進められるのが安心。インストラクターの説明がわかりやすくて初心者でも楽しめました。',
      },
      {
        author: 'M.K',
        rating: 5,
        date: '3週間前',
        text: 'アットホームな雰囲気のプライベートスタジオ。大手チェーンにはない温かさがあります。',
      },
    ],
    price: '要問い合わせ',
    trial: '体験レッスンあり',
    features: ['金山駅徒歩5分', 'パーソナル専門', '完全予約制', 'アットホーム'],
    description: '金山駅から徒歩5分のパーソナルマシンピラティススタジオ。完全予約制のマンツーマンレッスンで、一人ひとりの体の状態に合わせたオーダーメイドプログラムを提供。アットホームな雰囲気が魅力。',
    access: 'JR・名鉄・地下鉄「金山駅」徒歩5分',
    address: '愛知県名古屋市（金山駅徒歩5分）',
    popularPlan: {
      name: 'パーソナルマシンピラティス',
      description: 'マンツーマンでのマシンピラティスレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      'パーソナルレッスン',
      '完全予約制',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '腰痛改善', '体��強化', '健康維持'],
    },
    basicInfo: {
      hours: '完全予約制（公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: '金山でピラティス初心者におすすめのスタジオは？',
    answer: 'zen place金山はピラティス専門20年以上の実績で初心者歓迎。Rintosull金山店は87%以上が初心者で体験0円。どちらも初心者に安心のスタジオです。',
  },
  {
    question: '金山のピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜。通い放題は13,800円〜（Rintosull）。セミパーソナルのPilates Meeは1回あたり1,250円〜と高コスパ。',
  },
  {
    question: '金山駅から最も近いスタジオはどこですか？',
    answer: 'Rintosull金山店は金山駅南口から徒歩2分で最寄り。Pilates Mee金山店は徒歩3分。zen place金山は2番出口から徒歩5分です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place金山とCALDO金山は男性も通えます。A.STUDIOも男女問わず利用可能。Rintosull、Pilates Mee、PPPスタジオは女性専用です。',
  },
  {
    question: '女性専用のスタジオはどこですか？',
    answer: 'Rintosull金山店、Pilates Mee金山店、PPPスタジオが女性専用です。人目を気にせず集中してレッスンが受けられます。',
  },
  {
    question: '体験レッスンの料金は？',
    answer: 'Rintosull金山店は0円で体験可能。zen place金山はマットグループ体験1,000円。各スタジオで体験内容・料金が異なるので公式サイトで確認しましょう。',
  },
  {
    question: 'ホットピラティスを受けられるスタジオはありますか？',
    answer: 'CALDO金山は室温40度・湿度55%のホット環境でピラティスが受けられます。大量に汗をかけるのでデトックス効果も期待できます。',
  },
  {
    question: 'セルフでピラティスの練習ができるスタジオはありますか？',
    answer: 'PPPスタジオはセルフフリーピラティスの通い放題プランがあります。パーソナルレッスンで学んだ内容を自分で復習できるので上達が早いです。',
  },
  {
    question: '名古屋駅や栄からも通えますか？',
    answer: '金山駅はJR・名鉄・地下鉄の3路線が乗り入れるターミナル駅。名古屋駅からJRで約5分、栄からも地下鉄で約10分とアクセス良好です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月の継続がおすすめ。まずは体験レッスンで始めてみましょう。',
  },
]

export default function KanayamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '金山', url: 'https://pilates-biyori.com/area/kanayama/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月21日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス金山おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">金山</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="金山" studioNames={studios.map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「金山で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、名古屋金山エリアでおすすめのピラティススタ��オ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>金山でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="金山" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">金山のおすすめピラティススタジオ6選</h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Purpose-based Recommendations */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円台で通えるスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• Pilates Mee（1回 1,250円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（体験0円・LAVA運営）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル）</li>
                  <li className="text-warm-700">• PPPスタジオ（セルフ通い放題）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">金山駅から徒歩5分以内。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（南口 徒歩2分）</li>
                  <li className="text-warm-700">• Pilates Mee（徒歩3分）</li>
                  <li className="text-warm-700">• zen place（2番出口 徒歩5分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">金山のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">10,450円〜16,940円</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">セミパーソナルレッスン</td><td className="px-4 py-3">1回 1,250円〜5,000円</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜3,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              金山はJR・名鉄・地下鉄の3路線が乗り入れる名古屋南部のターミナル駅。名古屋駅や栄と比べて家賃が抑えられるため、スタジオの料金もやや低めの傾向���あります。大手チェーンのzen placeやRintosullに加え、セミパーソナルのPilates Meeや独自のセルフフリープランを提供するPPPスタジオなど、バリエーション豊富。名古屋駅からJRで約5分、栄から地下鉄で約10分とアクセスも良く、仕事帰りの立ち寄りにも便利なエリアです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">金山でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">金山駅の出口によって最寄りスタジオが変わる</h3>
                <p className="text-warm-600 leading-relaxed">金山駅はJR・名鉄・地下鉄の3路線が乗り入れ、出口も複数あります。Rintosullは南口、zen placeは地下鉄2番出口、Pilates Meeは金山駅から北方面が便利。初回訪問時は出口と経路を事前に確認しておきましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">名古屋の夏は高温多湿、通い方に注意</h3>
                <p className="text-warm-600 leading-relaxed">名古屋の夏は日本でもトップクラスの暑さ。レッスン前後の水分補給をしっかり行い、着替えやタオルは多めに持参しましょう。CALDOのホットピラティスを夏に受ける場合は特に体調管理に注意。駅近のスタジオなら暑い中の移動時間を最小限に抑えられます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">Rintosull金山店は日曜定休</h3>
                <p className="text-warm-600 leading-relaxed">Rintosull金山店は毎週日曜日が定休日です。日曜日にも通いたい方は、全国通い放題プラン（16,800円）で他店舗を利用するか、日曜も営業しているzen place金山やCALDO金山を併用しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも視野に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">金山エリアだけでなく、<Link href="/area/nagoya-station" className="text-warm-700 underline hover:text-warm-900">名古屋駅</Link>や<Link href="/area/sakae" className="text-warm-700 underline hover:text-warm-900">栄</Link>エリアにも多数のスタジオがあります。金山からのアクセスも良好なので、通勤ルート上のスタジオも検討すると選択肢が広がります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-warm-50" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。名古屋の夏は特に多めに持参を。</span></li>
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
                  <strong>金山エリアの豆知識：</strong>金山はJR・名鉄・地下鉄の3路線が集まる名古屋南部のターミナル駅。金山総合駅周辺にはショッピングモールや飲食店が充実しており、レッ��ン前後の時間も有���活用できます。名古屋駅からJRで約5分、栄から地下鉄で約10分と、名古屋市内のどこからでもアクセスしやすいのが金山の強みです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div>
                <p className="text-warm-600 leading-relaxed">ダイエット、姿��改善、体幹強化など目的によって最適なスタジオは変わります。ホット環境でのデトックスならCALDO、本格マシンピラティスならzen place。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div>
                <p className="text-warm-600 leading-relaxed">金山の相場はグループ月4回で10,450円〜。Pilates Meeは1回1,250円〜と高コスパ。Rintosullは通い放題13,800円〜。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div>
                <p className="text-warm-600 leading-relaxed">Rintosull金山店は0円で体験可能。zen placeはマットグループ体験1,000円。まずは気軽に体験に行きましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div>
                <p className="text-warm-600 leading-relaxed">金山はJR・名鉄・地下鉄の3路線が集まるターミナル駅。出口ごとの最寄りスタジオと営業時間を確認しましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は名古屋金山エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">金山は3路線が集まるターミナル駅で、大手チェーンから個性的な個人スタジオまで選択肢が豊富。セミパーソナルやセルフフリーなど、ユニークなプランを提供するスタジオもあり、自分に合ったスタイルで通えます。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願���ています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,000円。<br />まずは気軽に��験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="kanayama" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
