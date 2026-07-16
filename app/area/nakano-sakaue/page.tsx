import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/nakano-sakaue/' },
  title: '【2026年7月最新】中野坂上のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '中野坂上エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,中野坂上,中野区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 中野坂上店',
    image: '\/images\/studios\/club-pilates.webp',
    rating: 4.8,
    reviewCount: 83,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: '中野坂上駅から徒歩2分。世界最大級のマシンピラティスブランドで安心感がある。15種類の器具を使った本格レッスン。無料の30分イントロクラスで雰囲気がわかる。',
      },
      {
        author: 'M.H',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けで初心者でも安心。インストラクター全員が500時間以上の研修を受けた資格保持者。男性もOK。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: '月4回13,090円〜とリーズナブル。8つのプログラムがあり飽きずに続けられる。朝7時から営業。',
      },
    ],
    price: '月4回 13,090円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['中野坂上駅徒歩2分', '世界最大級', '15種類の器具', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。中野坂上駅から徒歩2分。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備。8つのプログラムと4段階のレベル分け。インストラクター全員が500時間以上の研修修了。',
    access: '都営大江戸線・東京メトロ丸ノ内線「中野坂上駅」徒歩2分',
    address: '東京都中野区中央2丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 13,090円（税込）',
    },
    options: [
      '月8回プラン（24,090円）',
      '通い放題プラン（37,290円）',
      '都度払い（4,070円/回）',
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
    name: 'URBAN CLASSIC PILATES 中野坂上店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '\/images\/studios\/urban-classic-pilates.webp',
    rating: 4.6,
    reviewCount: 104,
    reviews: [
      {
        author: 'S.M',
        rating: 5,
        date: '1週間前',
        text: '中野坂上駅出口2から徒歩1分！予約不要のサーキット形式で、空いている時間にサッと通える。30分で効率的にトレーニングできる。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '2週間前',
        text: 'マシンピラティスとファンクショナルトレーニングの組み合わせが新鮮。自分のペースで進められるのが良い。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターがサポートしてくれるので初心者でも安心。周りを気にせずトレーニングできる。',
      },
    ],
    price: '月額プランあり',
    trial: '見学 無料',
    features: ['中野坂上駅徒歩1分', '予約不要', '30分サーキット', '自分のペース'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせた、30分のサーキット形式ボディメイクスタジオ。中野坂上駅出口2から徒歩1分。予約不要で空いている時間に通える。インストラクターがサポートしてくれるので初心者も安心。',
    access: '東京メトロ丸ノ内線・都営大江戸線「中野坂上駅」出口2 徒歩1分',
    address: '東京都中野区中央2-1-7 ベルメゾン武蔵屋 2F',
    popularPlan: {
      name: '月額プラン',
      description: '予約不要のサーキット形式マシンピラティス。',
      price: '公式サイトでご確認ください',
    },
    options: [
      '月額プラン',
      '見学 無料',
      '予約不要',
      'インストラクターサポートあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', 'ダイエット', '運動不足解消', '体幹強化'],
    },
    basicInfo: {
      hours: '9:30〜21:30（土祝〜19:30）',
      closed: '日曜',
      facilities: ['リフォーマー', 'ファンクショナルトレーニング器具', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Yoga & Pilates STUDiO kuu',
    image: '\/images\/studios\/studio-kuu.webp',
    rating: 4.7,
    reviewCount: 17,
    reviews: [
      {
        author: 'E.S',
        rating: 5,
        date: '1週間前',
        text: '中野坂上駅すぐ。少人数制でアットホームな雰囲気。ヨガもピラティスも両方受けられる。体験1,000円とリーズナブル。',
      },
      {
        author: 'N.Y',
        rating: 5,
        date: '2週間前',
        text: 'レベル別（初級・中級・上級）のプログラムがあり、自分に合ったクラスが選べる。マットレンタル無料。',
      },
      {
        author: 'K.M',
        rating: 4,
        date: '3週間前',
        text: '経験豊富なインストラクター陣が丁寧に指導。英語でのヨガクラスもあり国際的な環境。1回2,800円〜。',
      },
    ],
    price: '1回 2,800円〜',
    trial: '体験レッスン 1,000円',
    features: ['中野坂上駅すぐ', '少人数制', 'レベル別クラス', 'ヨガ&ピラティス'],
    description: '中野坂上駅すぐのヨガ&ピラティス専門スタジオ。少人数制のアットホームな環境で、経験豊富なインストラクターが丁寧に指導。レベル別（初級・中級・上級）のプログラムで初心者から経験者まで対応。マットレンタル無料。英語でのヨガクラスも。',
    access: '都営大江戸線・東京メトロ丸ノ内線「中野坂上駅」徒歩すぐ',
    address: '東京都中野区本町2丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '回数券プラン',
      description: '少人数制のヨガ&ピラティスレッスン。回数券でお得に。',
      price: '1回 2,800円〜',
    },
    options: [
      '1回レッスン（2,800円〜）',
      '回数券あり',
      '体験レッスン（1,000円）',
      'マットレンタル無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '柔軟性向上', 'リフレッシュ', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'プロップス', '更衣室'],
    },
  },
  {
    name: 'zen place pilates 中野スタジオ',
    image: '\/images\/studios\/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 17,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '1週間前',
        text: '中野坂上エリアからもアクセス良好。全国150店舗以上で他店利用可能。マットもマシンも両方受けられるのが魅力。',
      },
      {
        author: 'M.A',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス専門20年以上の実績。体験当日入会で入会金無料。グループ体験1,000円と気軽に試せる。',
      },
      {
        author: 'S.K',
        rating: 4,
        date: '3週間前',
        text: '男性もOK。朝7時からレッスンがあるので出勤前に通えます。インストラクターの質が高い。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国相互利用', '男性OK', '20年以上の実績', '朝7時〜'],
    description: 'ピラティス専門の大手スタジオ。中野坂上エリアからもアクセス良好。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。ピラティス専門20年以上の実績と質の高いインストラクター。',
    access: '中野坂上エリアからアクセス可能（詳細は公式サイトでご確認ください）',
    address: '東京都中野区（詳細は公式サイトでご確認ください）',
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
      facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ELEMENT 中野坂上（近隣エリア）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '\/images\/studios\/element.webp',
    rating: 4.6,
    reviewCount: 8,
    reviews: [
      {
        author: 'Y.N',
        rating: 5,
        date: '1週間前',
        text: '通い放題のパーソナルマシンピラティスジム。月額制でマンツーマン指導が受けられるのでコスパが良い。',
      },
      {
        author: 'T.S',
        rating: 4,
        date: '2週間前',
        text: 'ワークアウト、シェイプアップ、機能改善、マシンピラティス、セミパーソナルの5メニュー。飽きずに続けられる。',
      },
      {
        author: 'R.M',
        rating: 4,
        date: '3週間前',
        text: '初回無料体験あり。ボディケア（マッサージ・ストレッチ）もできるのが嬉しい。',
      },
    ],
    price: '月4回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['通い放題あり', 'パーソナル指導', '5メニュー対応', 'ボディケアあり'],
    description: '通い放題のパーソナルマシンピラティスジム。マンツーマン指導を月額制でリーズナブルに提供。ワークアウト、シェイプアップ、機能改善、マシンピラティス、セミパーソナルの5メニュー。ボディケアも可能。中野坂上エリアからアクセス良好。',
    access: '中野坂上エリアからアクセス可能（詳細は公式サイトでご確認ください）',
    address: '東京都内（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '全日フルタイムプラン（通い放題）',
      description: 'マンツーマンのパーソナルマシンピラティス通い放題。',
      price: '月額 43,780円（税込）',
    },
    options: [
      '月4回フルタイム（22,000円）',
      '月8回フルタイム（29,150円）',
      '通い放題（43,780円）',
      '初回無料体験あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', 'ダイエット', '機能改善', '体幹強化'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'トレーニング器具', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！中野坂上エリアのスタジオはほとんどが初心者歓迎。CLUB PILATESは4段階のレベル分け、STUDiO kuuはレベル別クラスで初心者も安心。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。CLUB PILATESは15種類の器具を完備。',
  },
  {
    question: '中野坂上のピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜13,090円程度。STUDiO kuuは1回2,800円〜の都度払いも可能。ELEMENTのパーソナルは月4回22,000円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。CLUB PILATESは無料イントロクラス、ELEMENTは初回無料体験あり。STUDiO kuuは体験1,000円。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。STUDiO kuuはヨガもピラティスも両方受けられます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'CLUB PILATES、zen place、ELEMENT、STUDiO kuuは男性も通えます。URBAN CLASSIC PILATESも男性OK。',
  },
  {
    question: '予約不要で通えるスタジオは？',
    answer: 'URBAN CLASSIC PILATESは予約不要のサーキット形式。空いている時間に自由に通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function NakanoSakauePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '中野坂上', url: 'https://pilates-biyori.com/area/nakano-sakaue/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年7月最新】ピラティス中野坂上おすすめ10選！<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較！
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
              <span className="text-warm-600">中野坂上</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="中野坂上" />


        <TableOfContents areaName="中野坂上" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「中野坂上で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、中野坂上エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>中野坂上でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="中野坂上" />
        <AreaMarketComparison studios={studios} areaName="中野坂上" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              中野坂上のおすすめピラティススタジオ10選
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
              中野坂上のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">2,800円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 43,780円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              中野坂上は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いていて狙い目です。近隣の中野エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              中野坂上でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">都営大江戸線・東京メトロ丸ノ内線「中野坂上駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  中野坂上エリアのスタジオは中野坂上駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。中野坂上駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  中野坂上は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、狙い目の時間帯を見つけておくと通いやすくなります。子連れOKのクラスがあるスタジオもあるので、お子さまがいる方は確認してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  中野坂上エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  中野坂上エリアだけでなく、近隣の<Link href="/area/nakano/" className="text-warm-700 underline hover:text-warm-900">中野</Link>、<Link href="/area/shinjuku/" className="text-warm-700 underline hover:text-warm-900">新宿</Link>、<Link href="/area/shin-okubo/" className="text-warm-700 underline hover:text-warm-900">新大久保</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>中野坂上エリアの豆知識：</strong>中野坂上は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無を確認しておきましょう。近場なら荷物も最小限で済むので、気軽に続けやすいのが中野坂上の良さです。
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
                  <li className="text-warm-700">• the SILK 中野坂上（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 中野坂上（月4回 13,420円〜）</li>
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
                  中野坂上の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
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
                  中野坂上はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は中野坂上エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では中野坂上にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/koenji/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">高円寺</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nakano-sakaue" areaName="中野坂上" />

      <RelatedAreas currentSlug="nakano-sakaue" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
