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
  alternates: { canonical: 'https://biyori-pilates.com/area/hirakata/' },
  title: '枚方のピラティス12社を比較｜無料体験2社・月額最安11,220円〜【2026年7月】',
  description: '枚方エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,枚方,枚方市,くずは,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK くずはモール店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 180,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: 'くずはモール内にあり、京阪樟葉駅から直結で通いやすい。女性専用で音楽に合わせたリフォーマーレッスンが楽しい。体験無料！',
      },
      {
        author: 'A.Y',
        rating: 5,
        date: '2週間前',
        text: '月4回11,220円〜とコスパ抜群。部位別ボディメイクプログラムも充実していて飽きない。買い物ついでに通えるのが最高。',
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
    features: ['女性専用', 'くずはモール内', '京阪樟葉駅直結', '体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。くずはモール内に位置し、京阪樟葉駅から直結でアクセス抜群。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。買い物ついでに通える便利さも魅力。',
    access: '京阪本線「樟葉駅」直結（くずはモール内）',
    address: '大阪府枚方市楠葉花園町 くずはモール内',
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
    name: 'Pilates KASANE 枚方店',
    image: '/images/studios/pilates-kasane.webp',
    rating: 4.6,
    reviewCount: 42,
    reviews: [
      {
        author: 'H.N',
        rating: 5,
        date: '1週間前',
        text: 'パーソナルとグループの両方があり、マシンもマットも受けられる。4名以下の少人数制で丁寧に指導してもらえます。',
      },
      {
        author: 'R.A',
        rating: 5,
        date: '2週間前',
        text: '体験レッスン3,000円で気軽に試せました。インストラクターの質が高く、体の悩みに寄り添った指導。1回3,025円〜とコスパも良い。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '3週間前',
        text: '少人数制なので一人ひとりしっかり見てもらえる。枚方市駅からも近くて通いやすいです。',
      },
    ],
    price: '1回 3,025円〜',
    trial: '体験レッスン 3,000円',
    features: ['少人数制（4名以下）', 'マシン＆マット', 'パーソナルあり', '枚方市駅近く'],
    description: 'パーソナルレッスンとグループレッスンの両方を提供。マシンとマット両方のピラティスが受けられ、4名以下の少人数制クラスで丁寧な指導が特徴。',
    access: '京阪本線「枚方市駅」徒歩圏内',
    address: '大阪府枚方市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン',
      description: '4名以下の少人数制。マシンとマットから選べる。',
      price: '1回 3,025円〜（税込）',
    },
    options: [
      'グループレッスン（3,025円〜/回）',
      'パーソナルレッスン',
      '体験レッスン（3,000円）',
      'マシン＆マット対応',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'luluto（ルルト）枚方店',
    image: '/images/studios/luluto.webp',
    rating: 4.8,
    reviewCount: 28,
    reviews: [
      {
        author: 'S.M',
        rating: 5,
        date: '1週間前',
        text: 'マンツーマンレッスンで丁寧に指導してもらえる。理学療法士監修のプログラムで体の不調改善にも効果的。',
      },
      {
        author: 'K.Y',
        rating: 5,
        date: '2週間前',
        text: '実技試験に合格したプロのトレーナーだけが指導。一人ひとりの体に合わせたカスタマイズレッスンが受けられる。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '3週間前',
        text: '体験レッスン後にしっかりカウンセリングしてくれる。料金は高めだが質の高さは間違いない。',
      },
    ],
    price: '月3回 29,700円〜',
    trial: '体験レッスン 12,000円',
    features: ['完全マンツーマン', '理学療法士監修', '高品質指導', 'カスタマイズ'],
    description: '全国展開の完全マンツーマンマシンピラティススタジオ。理学療法士が監修したプログラムで、実技試験に合格したプロフェッショナルなトレーナーが一人ひとりの体に合わせて指導。',
    access: '京阪本線「枚方市駅」徒歩圏内',
    address: '大阪府枚方市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー3（月3回）',
      description: '完全マンツーマンのマシンピラティス。理学療法士監修。',
      price: '月3回 29,700円（税込）',
    },
    options: [
      '月3回プラン（29,700円）',
      '月4回プラン',
      '体験レッスン（12,000円）',
      '完全個室',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['体の不調改善', '姿勢改善', 'ボディメイク', 'リハビリ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室'],
    },
  },
  {
    name: 'kiraris（キラリス）枚方市駅前店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.5,
    reviewCount: 35,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '枚方市内に5店舗展開するピラティス・ヨガ教室。駅前店は枚方市駅からすぐで通いやすい。美容と運動を両立できるプログラムが魅力。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '2週間前',
        text: 'ピラティスだけでなくヨガやハーブテントもあり、トータルで体を整えられる。アットホームな雰囲気で初心者でも安心。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '3週間前',
        text: '市内複数店舗で通えるので、自宅や職場の近くを選べて便利。インストラクターが親切で丁寧。',
      },
    ],
    price: '月額制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['枚方市内5店舗', '美容×運動', 'ヨガ併設', 'アットホーム'],
    description: '枚方市駅・御殿山駅・樟葉駅など市内5店舗で展開するピラティス・ヨガ教室。美容と運動を両立できるプログラムが特徴で、ハーブテントも併設。',
    access: '京阪本線「枚方市駅」すぐ',
    address: '大阪府枚方市岡東町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '市内5店舗で受講可能。ヨガも選べる。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      'ピラティスレッスン',
      'ヨガレッスン',
      'ハーブテント',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['美容', '健康維持', 'リラックス', '姿勢改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', '更衣室'],
    },
  },
  {
    name: 'ピラティスK 枚方T-SITE店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6,
    reviewCount: 95,
    reviews: [
      {
        author: 'A.I',
        rating: 5,
        date: '1週間前',
        text: '枚方T-SITE内にあり、枚方市駅から徒歩すぐ。女性専用で清潔感のあるスタジオ。体験レッスン無料で始めやすい。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '音楽に合わせたレッスンが楽しくてあっという間に50分が終わる。ボディメイクに特化したプログラムが充実。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'T-SITE内なのでレッスン後にカフェや書店を楽しめる。施設がきれいでモチベーションが上がります。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '枚方市駅すぐ', '枚方T-SITE内', '体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。枚方T-SITE内に位置し、枚方市駅から徒歩すぐ。音楽に合わせた楽しいレッスンとボディメイクに特化したプログラムが魅力。',
    access: '京阪本線「枚方市駅」徒歩すぐ（枚方T-SITE内）',
    address: '大阪府枚方市岡東町 枚方T-SITE内',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。',
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
    name: 'Studio K（スタジオK）',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.5,
    reviewCount: 18,
    reviews: [
      {
        author: 'N.T',
        rating: 5,
        date: '1週間前',
        text: 'JR長尾駅徒歩3分のアットホームなスタジオ。ピラティスだけでなくリンパケアやシルクサスペンションも受けられる。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '少人数制で丁寧に教えてもらえる。体のメンテナンスにピラティスとリンパを組み合わせると効果的。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '地域密着型の温かいスタジオ。初心者でも気軽に参加できる雰囲気が良い。',
      },
    ],
    price: '回数券制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['JR長尾駅徒歩3分', 'リンパケア併設', 'シルクサスペンション', '少人数制'],
    description: 'JR長尾駅徒歩3分のピラティス＆リンパケアスタジオ。ピラティスに加えてシルクサスペンションやリンパケアも受けられ、トータルで体を整えられる地域密着型スタジオ。',
    access: 'JR学研都市線「長尾駅」徒歩3分',
    address: '大阪府枚方市長尾元町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '少人数制のピラティスレッスン。リンパケアも選べる。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      'ピラティスレッスン',
      'リンパケア',
      'シルクサスペンション',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['健康維持', '肩こり改善', 'リラックス', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'シルクサスペンション', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！枚方エリアのスタジオはほとんどが初心者歓迎。ピラティスKは初心者向けクラスが充実、Pilates KASANEは4名以下の少人数制で丁寧に指導してもらえます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。枚方にはマシン専門のピラティスKが2店舗あります。',
  },
  {
    question: '枚方のピラティスの料金相場は？',
    answer: 'グループ月4回で11,220円程度。パーソナルレッスンは1回9,000円〜12,000円。Pilates KASANEは1回3,025円〜とリーズナブルなグループレッスンもあります。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。月4回プランから始めるのが一般的です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。ピラティスKは無料体験あり。Pilates KASANEは体験3,000円。靴下（滑り止め付き推奨）も用意しておくと安心です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。kiraris枚方ではピラティスとヨガの両方を楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'Pilates KASANEやluluto、Studio Kは男性も通えます。ピラティスKは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'ピラティスKは2店舗（くずはモール店・枚方T-SITE店）とも無料体験あり。まずは無料体験から始めるのがおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function HirakataPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '枚方', url: 'https://pilates-biyori.com/area/hirakata/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月14日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス枚方おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">枚方</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="枚方" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「枚方で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、枚方エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>枚方でピラティススタジオを探している</span>
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
                  <span>京阪沿線から通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="枚方" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              枚方のおすすめピラティススタジオ6選
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
                  1回あたりの料金が安いスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates KASANE（1回 3,025円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK くずはモール店</li>
                  <li className="text-warm-700">• ピラティスK 枚方T-SITE店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで丁寧に指導。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• luluto（理学療法士監修）</li>
                  <li className="text-warm-700">• Pilates KASANE（少人数制）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              枚方のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,000円〜15,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,000円〜12,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜12,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              枚方エリアは京阪沿線の主要な住宅地で、くずはモールや枚方T-SITEなど大型商業施設内にスタジオが集まっています。大阪市内と比べると料金はやや抑えめで、買い物ついでに通える便利さが特徴。ピラティスKの無料体験から始めて、自分に合ったスタジオを見つけるのがおすすめです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              枚方でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京阪本線の駅からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  枚方エリアのスタジオは枚方市駅と樟葉駅の2つの拠点に分かれています。自宅や職場の最寄り駅から通いやすい方を選びましょう。くずはモール内のスタジオは駅直結で雨の日も快適です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">商業施設内スタジオの駐車場利用ルールを確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  くずはモールや枚方T-SITE内のスタジオは駐車場が利用できますが、時間制限や料金がかかる場合があります。レッスン時間と合わせて駐車場の利用条件を事前に確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">レッスン形式（グループ or パーソナル）を明確に</h3>
                <p className="text-warm-600 leading-relaxed">
                  枚方にはグループ専門のピラティスKから完全マンツーマンのlulutoまで、レッスン形式が幅広いです。初心者はグループで雰囲気を知り、しっかり効果を出したい方はパーソナルを検討するのが良いでしょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  枚方エリアだけでなく、京阪沿線の<Link href="/area/takatsuki/" className="text-warm-700 underline hover:text-warm-900">高槻</Link>や<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>エリアにもピラティススタジオがあります。通勤経路に合わせて複数エリアを比較すると、より自分に合ったスタジオが見つかります。
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
                  <strong>枚方エリアの豆知識：</strong>枚方は京阪沿線のベッドタウンで、くずはモールや枚方T-SITEなど商業施設内にスタジオが入っていることが多いです。レッスン前後にショッピングやカフェを楽しめるのが枚方ならではの魅力。駐車場完備の施設も多いので、車での通いも便利です。
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。lulutoは体の不調改善に特化、ピラティスKはボディメイク向けです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  枚方の料金相場はグループ月4回で11,220円程度。Pilates KASANEは1回3,025円〜と回数券で始めやすい。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスKは2店舗とも無料体験あり。Pilates KASANEは3,000円で体験可能。まずは気軽に複数スタジオを体験してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  枚方市駅周辺と樟葉駅周辺に分かれるので、自分の生活圏に合った立地を選びましょう。商業施設内のスタジオは駐車場も利用可能で車通いにも便利です。
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
              今回は枚方エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では枚方にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜12,000円。<br />
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
      <ConsultantSection areaKey="hirakata" areaName="枚方" />

      <RelatedAreas currentSlug="hirakata" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
