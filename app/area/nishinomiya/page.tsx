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



export const metadata = {
  title: '【2026最新】ピラティス西宮おすすめ6選！人気スタジオの料金プランを簡単比較！',
  description: '西宮エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。西宮北口駅・阪神西宮駅周辺の初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,西宮,西宮北口,兵庫,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 阪急西宮ガーデンズ店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 229,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: '阪急西宮ガーデンズ プラス館8Fにあり、西宮北口駅から直結デッキで徒歩約3分。女性専用で安心。音楽に合わせたリフォーマーレッスンが楽しい。体験レッスン無料！',
      },
      {
        author: 'A.Y',
        rating: 5,
        date: '2週間前',
        text: '月4回11,220円〜と西宮エリアではコスパ抜群。部位別ボディメイクプログラムも充実。買い物ついでに通えるのが最高。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '3週間前',
        text: 'マシンピラティス専門なのでリフォーマーの台数が多く予約が取りやすい。初心者向けから上級者向けまでクラスが豊富。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '西宮北口駅徒歩3分', '阪急西宮ガーデンズ内', '体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。阪急西宮ガーデンズ プラス館8Fに位置し、西宮北口駅から直結デッキで徒歩約3分。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。買い物ついでに通える便利さも魅力。',
    access: '阪急神戸線「西宮北口駅」東改札口から直結デッキで徒歩約3分（阪急西宮ガーデンズ プラス館8F）',
    address: '兵庫県西宮市高松町8-25 阪急西宮ガーデンズ プラス館8F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 11,220円〜（税込）+ 施設維持費 月825円',
    },
    options: [
      'マンスリー4メンバー（11,220円〜）',
      'マンスリー8メンバー',
      'マンスリーフルメンバー（通い放題）',
      '施設維持費 月825円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'zen place pilates 西宮北口',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 13,
    reviews: [
      {
        author: 'H.N',
        rating: 5,
        date: '1週間前',
        text: '西宮北口駅から徒歩2分。ピラティス専門で20年以上の実績。マットもマシンも両方受けられる。全国150店舗以上で相互利用可能なので出張先でも通える。',
      },
      {
        author: 'R.A',
        rating: 5,
        date: '2週間前',
        text: 'グループ体験1,000円で気軽に試せました。インストラクターの質が高く、丁寧な指導。月4回10,450円〜とコスパも良い。男性もOK。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '3週間前',
        text: '体験当日入会で入会金無料。朝7時からレッスンがあるので出勤前に通えます。にしきた公園の近くで環境も良い。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['西宮北口駅徒歩2分', '男性OK', '全国相互利用', '大手の安心感'],
    description: 'ピラティス専門の大手スタジオ。西宮北口駅北西口から徒歩2分。全国150店舗以上で相互利用可能。マットグループ・マシングループ・プライベートの3タイプ。体験当日入会で入会金無料。',
    access: '阪急神戸線「西宮北口駅」北西口 徒歩2分',
    address: '兵庫県西宮市甲風園1丁目9-3 プラザビル1階 103号室',
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
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'CLUB PILATES 西宮北口店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 63,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のマシンピラティスブランド。西宮北口駅から徒歩5分。15種類の器具を使った本格レッスンが受けられる。無料の30分イントロクラスで雰囲気がわかります。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '2週間前',
        text: '4段階のレベル分けで初心者でも安心。8つのプログラムがあり飽きずに続けられる。インストラクター全員が500時間以上の研修修了。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '3週間前',
        text: '最大12名の少人数制グループレッスン。リフォーマー・スプリングボード・TRX・チェアなど設備が充実。男性もOK。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '西宮北口駅徒歩5分', '15種類の器具', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。西宮北口駅から徒歩5分。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備。8つのプログラムと4段階のレベル分け。',
    access: '阪急神戸線「西宮北口駅」徒歩5分',
    address: '兵庫県西宮市（詳細は公式サイトでご確認ください）',
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
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Rintosull（リントスル）西宮北口店',
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 155,
    reviews: [
      {
        author: 'S.M',
        rating: 5,
        date: '1週間前',
        text: '西宮北口駅南改札口から徒歩1分！ホットヨガLAVAから生まれたマシンピラティススタジオ。月4回8,800円〜と西宮エリア最安クラス。',
      },
      {
        author: 'K.Y',
        rating: 4,
        date: '2週間前',
        text: 'LAVAの全店舗も相互利用可能なので、ピラティスとヨガの両方楽しめるのが嬉しい。清潔で快適なスタジオ。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '3週間前',
        text: '通い放題でも月13,800円とリーズナブル。体験レッスンは予約制。駅近で通いやすい。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり（予約制）',
    features: ['西宮北口駅徒歩1分', 'LAVA相互利用', '低価格', 'マシン専門'],
    description: 'ホットヨガLAVAから生まれたマシンピラティススタジオ。西宮北口駅南改札口から徒歩1分。月4回8,800円〜と低価格。Rintosull全店とLAVA全店の相互利用が可能で、ピラティスとヨガの両方を楽しめます。',
    access: '阪急神戸線「西宮北口駅」南改札口 徒歩1分',
    address: '兵庫県西宮市高松町3-34 パセオ・エスタシオン5F',
    popularPlan: {
      name: 'マンスリーメンバー4（月4回）',
      description: 'マシンピラティス月4回。LAVA全店も相互利用可能。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '月4回プラン（8,800円）',
      '通い放題プラン（13,800円）',
      'LAVA全店相互利用可能',
      '体験レッスン（予約制）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ダイエット', '姿勢改善', '運動不足解消', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'La pilates（ラピラティス）西宮北口店',
    image: '/images/studios/la-pilates.webp',
    rating: 4.6,
    reviewCount: 6,
    reviews: [
      {
        author: 'A.I',
        rating: 5,
        date: '1週間前',
        text: '西宮北口駅南西口から徒歩4分。整体×マシンピラティスの女性専用プライベートスタジオ。骨膜整体とマシンピラティスを組み合わせた独自プログラムが特徴。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: 'ウッド調の自然を感じさせるおしゃれな内装。完全個室でリラックスしてレッスンを受けられる。肩こりや腰痛の改善に効果を実感。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'ビフォーアフターの写真を見せてもらいながら丁寧に説明してもらえる。体の変化が目で見えるのでモチベーションが上がります。',
      },
    ],
    price: 'パーソナル制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['女性専用', '西宮北口駅徒歩4分', '整体×ピラティス', '完全個室'],
    description: '整体×マシンピラティスの女性専用プライベートスタジオ。西宮北口駅南西口から徒歩4分。独自の「骨膜整体×マシンピラティス」プログラムで、肩こりや腰痛の改善、体の使い方の向上をサポート。ウッド調のおしゃれな空間。',
    access: '阪急神戸線「西宮北口駅」南西口 徒歩4分',
    address: '兵庫県西宮市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '骨膜整体×マシンピラティス',
      description: '整体とマシンピラティスを組み合わせた独自プログラム。完全個室。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      '骨膜整体×マシンピラティス',
      'パーソナルレッスン',
      'ビフォーアフター写真付き',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['肩こり改善', '腰痛改善', '姿勢改善', 'ボディメイク'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '整体ベッド', '完全個室', '更衣室'],
    },
  },
  {
    name: 'Movement Plus PILATES & FITNESS',
    image: '/images/studios/movement-plus-nishinomiya.webp',
    rating: 4.6,
    reviewCount: 21,
    reviews: [
      {
        author: 'N.T',
        rating: 5,
        date: '1週間前',
        text: '西宮北口駅から徒歩2分。マットピラティス月4回11,000円〜とリーズナブル。リフォーマーグループは定員3名の超少人数制で丁寧な指導。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: 'リフォーマー、マット、サーキットフュージョンの3タイプのレッスンがある。入会金3,300円と始めやすい。マット体験1,650円で気軽に試せました。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: 'マットグループは5〜7名の少人数制。リフォーマーとフィットネスを組み合わせたサーキットフュージョンが新しくて楽しい。',
      },
    ],
    price: 'マット月4回 11,000円〜',
    trial: 'マット体験 1,650円 / リフォーマー体験 4,400円',
    features: ['西宮北口駅徒歩2分', '定員3名リフォーマー', '低価格', '3タイプのレッスン'],
    description: '西宮北口駅から徒歩2分。リフォーマー・マット・サーキットフュージョンの3タイプのレッスンを提供。リフォーマーグループは定員3名、マットグループも5〜7名の少人数制で一人ひとり丁寧な指導。入会金3,300円と始めやすい。',
    access: '阪急神戸線「西宮北口駅」徒歩2分',
    address: '兵庫県西宮市甲風園1-9-8 睦ビル4C',
    popularPlan: {
      name: 'マットグループ月4回',
      description: '少人数制マットピラティスグループレッスン。',
      price: '月4回 11,000円（税込）',
    },
    options: [
      'マットグループ月4回（11,000円〜）',
      'リフォーマーグループレッスン',
      'サーキットフュージョン',
      '入会金 3,300円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['体幹強化', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！西宮エリアのスタジオはほとんどが初心者歓迎。CLUB PILATESは4段階のレベル分け、ピラティスKは初心者向けクラスが充実しています。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。西宮はマシン専門スタジオが特に充実しています。',
  },
  {
    question: '西宮のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜14,190円程度。Rintosullが月4回8,800円〜で最もリーズナブル。zen placeは月4回10,450円〜、ピラティスKは月4回11,220円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。ピラティスKは無料体験あり。zen placeはグループ体験1,000円、Movement Plusはマット体験1,650円。CLUB PILATESは無料イントロクラスあり。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。Rintosullは姉妹ブランドのLAVA全店も利用可能で、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place西宮北口、CLUB PILATES西宮北口、Movement Plusは男性も通えます。ピラティスKとLa pilatesは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'ピラティスKとCLUB PILATESは無料体験あり。zen placeはグループ体験1,000円。Movement Plusはマット体験1,650円。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function NishinomiyaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '西宮', url: 'https://pilates-biyori.com/area/nishinomiya/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス西宮おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">西宮</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="西宮" studioNames={studios.map((s) => s.name)} />

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
              「西宮で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、西宮エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>西宮でピラティススタジオを探している</span>
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
                  <span>西宮北口駅から通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="西宮" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西宮のおすすめピラティススタジオ6選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西宮のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,800円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 11,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,400円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              西宮エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。近隣の三宮エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西宮でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">阪急神戸線「西宮北口駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  西宮エリアのスタジオは西宮北口駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。西宮北口駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">西宮エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  西宮エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめ。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  西宮エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  西宮エリアだけでなく、近隣の<Link href="/area/sannomiya" className="text-warm-700 underline hover:text-warm-900">三宮</Link>、<Link href="/area/kobe" className="text-warm-700 underline hover:text-warm-900">神戸</Link>、<Link href="/area/umeda" className="text-warm-700 underline hover:text-warm-900">梅田</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>西宮エリアの豆知識：</strong>西宮は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前に確認。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 阪急西宮ガーデンズ</li>
                  <li className="text-warm-700">• La pilates 西宮北口（完全個室）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  西宮北口駅から徒歩3分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（南改札口 徒歩1分）</li>
                  <li className="text-warm-700">• zen place（北西口 徒歩2分）</li>
                  <li className="text-warm-700">• Movement Plus（徒歩2分）</li>
                  <li className="text-warm-700">• ピラティスK（直結デッキ 徒歩3分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円〜/月4回）</li>
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• Movement Plus マット（11,000円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（11,220円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（13,800円/通い放題）</li>
                  <li>• zen place（16,940円/通い放題）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。La pilatesは整体と組み合わせた肩こり・腰痛改善に特化しています。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  西宮の料金相場はグループ月4回で8,800円〜14,190円。Rintosullが最安の月4回8,800円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスKとCLUB PILATESは無料体験。zen placeは1,000円、Movement Plusはマット体験1,650円で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  西宮北口駅は阪急神戸線の主要駅。Rintosullは南改札口から徒歩1分、zen placeとMovement Plusは徒歩2分、ピラティスKは阪急西宮ガーデンズ直結で徒歩3分とアクセス抜群です。
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
              今回は西宮エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では西宮にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜4,400円。<br />
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

      <RelatedAreas currentSlug="nishinomiya" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
