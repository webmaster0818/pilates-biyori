import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'



export const metadata = {
  title: '【2026年6月最新】ピラティス池袋おすすめ9選！料金・体験レッスン・マシン対応を比較！',
  description: '【2026年4月最新】池袋のおすすめピラティススタジオ9選を徹底比較。グループ月4回10,450円〜、マシン専門・女性専用のスタジオ情報、料金相場・体験レッスンの流れまで完全網羅。',
  keywords: 'ピラティス,池袋,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Celestia（セレスティア）池袋店',
    officialUrl: 'https://t.hatmiso.net/fmcl?ak=U114734.1.W158213V.U1357808',
    image: '/images/studios/celestia.webp',
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり（詳細は公式サイト参照）',
    features: ['マシンピラティス', 'セミパーソナル', '少人数制', '美しさ重視'],
    description: '「本来の輝きを引き出す」をコンセプトにしたセミパーソナルのマシンピラティス専門スタジオ。美しさと健康を両立する洗練された空間で、少人数制のレッスンを提供しています。契約プランの範囲で系列店を相互利用でき、池袋店もその一つです。',
    access: '池袋駅周辺（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシンピラティス', 'セミパーソナル', '更衣室', '女性も通いやすい'],
    },
  },
  {
    name: 'zen place pilates 池袋スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 20,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: '池袋駅東口から徒歩2分。グレード01の上位スタジオでリフォーマー・キャデラック・チェア・ラダーバレルなどマシンが充実。体験当日入会で入会金無料。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '全国150店舗以上で相互利用可能なので出張先でも通える。マットもマシンも両方受けられるのが魅力。男性もOK。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '3週間前',
        text: '朝7時からレッスンがあるので出勤前に通えます。インストラクターの質が高く、ピラティス専門で20年以上の実績がある。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['池袋駅徒歩2分', 'グレード01', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。池袋駅東口から徒歩2分。最上位グレード01で、リフォーマー・キャデラック・チェア・ラダーバレルなど充実のマシン設備。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。',
    access: 'JR各線・東京メトロ各線・西武池袋線・東武東上線「池袋駅」東口 徒歩2分',
    address: '東京都豊島区南池袋2-27-8 南水ビル 8F',
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
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 池袋店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 239,
    reviews: [
      {
        author: 'M.N',
        rating: 5,
        date: '1週間前',
        text: '池袋駅東口33番出口から徒歩1分！女性専用で安心。音楽に合わせたリフォーマーレッスンが楽しくて毎回あっという間。部位別ボディメイクプログラムが充実。',
      },
      {
        author: 'S.H',
        rating: 5,
        date: '2週間前',
        text: '体験2,000円で気軽に試せました。月4回13,420円とコスパも良い。商業ビル内でアクセス抜群。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '3週間前',
        text: '朝9:30から夜22:00まで営業で通いやすい。マシンピラティス専門なのでリフォーマーの台数が多く予約が取りやすい。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', '池袋駅徒歩1分', '部位別プログラム', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオ。池袋駅東口33番・34番出口から徒歩1分。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。強度や目的に合わせて選べるクラスが豊富。',
    access: 'JR「池袋駅」東口 33番・34番出口 徒歩1分',
    address: '東京都豊島区東池袋1-3-6 池袋山手ビル 4F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜金 9:30-16:00,17:30-22:00 / 土日祝 9:30-20:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'the SILK 池袋東口店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 234,
    reviews: [
      {
        author: 'E.Y',
        rating: 5,
        date: '1週間前',
        text: '池袋駅東口41番出口から徒歩1分。女性専用で清潔感のある内装がおしゃれ。音楽に合わせたレッスンが楽しい。手ぶら体験無料で気軽に試せました。',
      },
      {
        author: 'N.M',
        rating: 5,
        date: '2週間前',
        text: '朝7:30から夜21:30まで営業で通いやすい。ウェア・タオル無料貸出やウォーターサーバーも完備。池袋西口にも店舗があるので予約が取りやすい。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '体験者の8割がピラティス未経験者とのこと。初心者向けプログラムが充実していて安心。月3回12,980円〜と始めやすい。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '池袋駅徒歩1分', '手ぶら体験OK', '2店舗あり'],
    description: '女性専用マシンピラティススタジオ。池袋駅東口41番出口から徒歩1分。池袋に東口店・西口店の2店舗展開で予約が取りやすい。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。手ぶらで体験可能。',
    access: 'JR「池袋駅」東口 41番出口 徒歩1分',
    address: '東京都豊島区南池袋1丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Full（毎日1回 20,680円）',
      'Full Day（18,480円）',
      '体験・入会金・登録手数料 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:30',
      closed: '年末年始',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'CLUB PILATES 目白店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 74,
    reviews: [
      {
        author: 'H.A',
        rating: 5,
        date: '1週間前',
        text: '目白駅から徒歩1分、池袋からも徒歩圏内。世界最大級のブランドで15種類の器具を使った本格レッスン。無料の30分イントロクラスで雰囲気がわかります。',
      },
      {
        author: 'C.S',
        rating: 4,
        date: '2週間前',
        text: '4段階のレベル分けで初心者でも安心。男性会員も多く、カップルで通っています。インストラクター全員が500時間以上の研修を受けた資格保持者。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '3週間前',
        text: '月4回14,190円〜。8つのプログラムがあり飽きずに続けられます。朝7時から営業で出勤前にも通える。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '目白駅徒歩1分', '15種類の器具', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。目白駅から徒歩1分、池袋からも徒歩圏内。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備。8つのプログラムと4段階のレベル分け。',
    access: 'JR「目白駅」徒歩1分（池袋駅から徒歩約10分）',
    address: '東京都豊島区目白2-39-1 TRAD目白 2F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（25,190円）',
      '通い放題プラン（28,490円）',
      'プライベートレッスン（1回 9,900円〜）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜木 7:00-21:00 / 金 8:00-21:00 / 土 7:00-18:00 / 日 9:00-21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'BDC PILATES 池袋スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.6,
    reviewCount: 11,
    reviews: [
      {
        author: 'Y.K',
        rating: 5,
        date: '1週間前',
        text: 'ダンサーのためのピラティスから生まれたスタジオ。マシンピラティスのグループレッスンが充実。リフォーマーを使ったダイナミックなレッスンが特徴。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '2週間前',
        text: '少人数制で一人ひとりの動きをしっかりチェックしてもらえる。体の使い方が上手くなるのを実感。インストラクターの指導が丁寧。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '3週間前',
        text: '池袋エリアでBDC PILATESのレッスンが受けられるのは嬉しい。体験レッスンで雰囲気を確認できました。',
      },
    ],
    price: '月4回 14,520円〜',
    trial: '体験レッスン 3,850円',
    features: ['ダンサー発祥', '少人数制', 'マシングループ', '池袋エリア'],
    description: 'ダンサーのためのピラティスから生まれたマシンピラティス専門スタジオ。リフォーマーを使ったダイナミックなグループレッスンが特徴。少人数制で丁寧な指導。体の使い方を根本から改善するプログラム。',
    access: 'JR「池袋駅」周辺',
    address: '東京都豊島区池袋エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシングループ月4回',
      description: 'リフォーマーを使ったマシンピラティスグループレッスン。',
      price: '月4回 14,520円（税込）',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      'プライベートレッスン',
      '体験レッスン 3,850円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'ダンスパフォーマンス', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Dr.ピラティス 池袋店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。池袋エリア（詳細は公式サイト参照）。',
    access: '池袋エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
  {
    name: 'the SILK 池袋西口店',
    officialUrl: 'https://the-silk.co.jp/',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370〜15,280円 / 通い放題 19,980〜22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴。池袋駅から徒歩1分（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '池袋駅から徒歩1分',
    address: '東京都豊島区西池袋1-21-2 ハイブリッヂ西池袋6階',
  },
  {
    name: '24/7ピラティス 池袋東口店',
    officialUrl: 'https://247-sports.jp/pilates/',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらOK）',
    features: ['女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供。東池袋駅から徒歩3分。',
    access: '東池袋駅から徒歩3分',
    address: '東京都豊島区東池袋4丁目29-12 サンフラット佐藤2F',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！池袋エリアのスタジオはほとんどが初心者歓迎。CLUB PILATESは4段階のレベル分け、the SILKは体験者の約8割がピラティス未経験者。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。池袋はマシン専門スタジオが特に充実。',
  },
  {
    question: '池袋のピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜15,070円程度。zen placeが月4回10,450円〜で最もリーズナブル。the SILKは月3回12,980円〜、ピラティスKは月4回13,420円〜。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで体験可能（ウェア・タオル無料貸出）。CLUB PILATESは無料イントロクラスあり。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place池袋、CLUB PILATES目白、BDC PILATES池袋は男性も通えます。the SILKとピラティスKは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'the SILKとCLUB PILATESは無料体験あり。zen placeはグループ体験1,000円。ピラティスKは体験2,000円。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function IkebukuroPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '池袋', url: 'https://pilates-biyori.com/area/ikebukuro/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス池袋おすすめ9選！<br className="hidden md:block" />
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
              <span className="text-warm-600">池袋</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="池袋" studioNames={studios.map((s) => s.name)} />

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
              「池袋で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、池袋エリアでおすすめのピラティススタジオ9選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>池袋でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="池袋" />
        <AreaMarketComparison studios={studios} areaName="池袋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              池袋のおすすめピラティススタジオ9選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円台で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 池袋（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 池袋（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• the SILK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• zen place（東口 徒歩2分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• the SILK（12,980円〜/月3回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• BDC PILATES（14,520円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• CLUB PILATES（28,490円/通い放題）</li>
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
                  池袋の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKとCLUB PILATESは無料体験。zen placeは1,000円、ピラティスKは2,000円で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  池袋はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              池袋のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                池袋エリアは渋谷や新宿に比べるとスタジオ数は少なめですが、大手チェーンが揃っており、都心の中では比較的落ち着いた雰囲気で通えるのが魅力です。東口・西口ともにアクセスが良好で、西武池袋線・東武東上線ユーザーにも便利な立地です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">10,450円〜15,070円</p>
                  <p className="text-sm text-warm-600">zen place pilatesのマットグループ月4回10,450円〜が最安。ピラティスK 月4回13,420円〜、the SILK月4回15,070円〜、CLUB PILATES目白店が月4回14,190円〜。BDC PILATESは14,520円〜でダンスメソッド融合の少人数制レッスンが受けられます。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">通い放題プラン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">16,940円〜</p>
                  <p className="text-sm text-warm-600">zen place pilatesはフリープラン（通い放題）が月額16,940円〜。週2回以上通うなら月4回プランよりもお得になります。通い放題プランは池袋以外のzen place全店舗でも利用可能です。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は10,000円〜33,000円程度ですが、各スタジオでキャンペーン期間中は無料になることが多いです。体験レッスンはthe SILKが無料、zen placeは1,000円〜。まずは2〜3スタジオで体験して、自分に合う雰囲気のスタジオを見つけましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              池袋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東口と西口でスタジオの分布が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  池袋駅は東口（サンシャインシティ方面）と西口（東京芸術劇場方面）で雰囲気が異なります。zen place pilatesやBDC PILATESは東口徒歩圏内、他のスタジオも駅近にあります。自分の利用路線（JR・東京メトロ・西武・東武）に合わせて、最寄り出口から近いスタジオを選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  池袋は渋谷・新宿に比べてスタジオ数が少なめなため、人気の時間帯はすぐに埋まります。特に土日午前中や平日夜のレッスンは予約が取りにくいことも。早めの予約を心がけるか、比較的空いている平日昼間の時間帯を狙いましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">目白・大塚エリアも選択肢に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  池袋駅だけでなく、隣駅の目白（CLUB PILATES 目白店）も徒歩圏内です。JR山手線で1駅なので、池袋駅周辺で希望のスタジオが見つからない場合は近隣エリアにも目を向けてみてください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">月額料金以外のコストに注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  レッスン料金以外に、入会金・事務手数料・施設維持費がかかるスタジオがあります。ピラティスKは施設維持費が別途月825円、CLUB PILATES目白店は入会金が必要です。トータルコストで比較し、キャンペーン期間中の入会を狙うと初期費用を抑えられます。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>水分（500ml以上）</strong>：レッスン中の水分補給に必須。スタジオ内に自販機がない場合もあります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多いです。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは靴下着用必須のスタジオが大半。滑り止め付きがベスト。スタジオで購入できる場合も。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは全身を大きく動かすため、動きやすさが最優先です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが分かる服</strong>の方が、インストラクターがフォームをチェックしやすく効果的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。the SILK池袋東口店は手ぶら体験が可能な場合があります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリーは外して</strong>参加。ピアス・ネックレス・腕時計はマシンに引っかかる恐れがあります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>池袋エリアの豆知識：</strong>池袋はサンシャインシティやルミネ池袋が近く、レッスン前後のショッピングにも便利。BDC PILATES池袋スタジオは東口徒歩1分と好立地なので、仕事帰りにサッと立ち寄れます。西武池袋線・東武東上線沿線から通う方も多く、都心の中では比較的リラックスした環境でレッスンに集中できるエリアです。
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
              今回は池袋エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では池袋にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜3,850円。<br />
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

      <RelatedAreas currentSlug="ikebukuro" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
