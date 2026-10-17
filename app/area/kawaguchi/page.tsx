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
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/kawaguchi/' },
  title: 'ピラティス川口おすすめ6選料金・体験レッスン・マシン対応を比較',
  description: '川口エリアのおすすめピラティススタジオ6選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,川口,埼玉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 川口',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,100円',
    features: ['川口駅徒歩4分', '2024年オープン', '男性利用可', '全国他店利用'],
    description: 'ピラティス専門の大手スタジオです。川口駅東口から徒歩4分です。2024年6月にオープンした新しいスタジオです。マットグループ・マシングループ・プライベートの3タイプのレッスンです。全国150店舗以上で他店利用可能です。',
    access: 'JR京浜東北線「川口駅」東口 徒歩4分',
    address: '埼玉県川口市栄町3-14-3 小田倉ビル 3F2号室',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題です。全国店舗で他店利用可能です。',
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
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK かわぐちキャスティ店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', '川口駅徒歩1分', '部位別プログラム', 'キャスティ7F'],
    description: '女性専用マシンピラティス専門スタジオです。川口駅東口から徒歩1分、かわぐちキャスティ7Fに位置しています。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実しています。買い物ついでに通えるアクセスの良さです。',
    access: 'JR京浜東北線「川口駅」東口 徒歩1分（かわぐちキャスティ 7F）',
    address: '埼玉県川口市栄町3-7-1 かわぐちキャスティ 7F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回です。部位別プログラムも選べます。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円・登録料 5,500円（当日入会で無料）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '火〜金 10:00-22:00 / 土日祝 10:00-18:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 川口',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '月4回 7,800円〜',
    trial: '体験レッスン 0円',
    features: ['予約不要', 'サーキット形式', '30分完結', '割安'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のボディメイクスタジオです。予約不要で仕事帰りに気軽に立ち寄れます。30分完結で効率的です。',
    access: 'JR京浜東北線「川口駅」徒歩5分',
    address: '埼玉県川口市栄町3丁目',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: 'マシンピラティス＋ファンクショナルトレーニング月4回です。予約不要です。',
      price: '月4回 7,800円（税込）',
    },
    options: [
      'マンスリー8（月8回）',
      '通い放題プラン（14,080円）',
      '体験レッスン 0円',
      '入会金・事務手数料あり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '運動不足解消', '姿勢改善', 'ダイエット'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜日',
      facilities: ['リフォーマーマシン', 'ファンクショナルトレーニング器具', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Mee 川口店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: '月2回 11,000円〜',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用マシンピラティススタジオです。川口駅から徒歩8分です。1レッスン最大3名のセミパーソナル形式で、一人ひとりに合わせた丁寧な指導が特徴です。通い放題プランなら1回あたり2,500円です（※37,500円の通い放題コースで15日通った場合）。',
    access: '川口駅 徒歩5分',
    address: '〒332-0016 埼玉県川口市幸町3丁目9-31 メゾン・ド・ボヌール 204',
    popularPlan: {
      name: '月4回コース',
      description: 'セミパーソナル（最大3名）マシンピラティス月4回です。',
      price: '月4回 19,800円（税込）',
    },
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '産後ケア'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'ELEMENT 川口店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月4回 22,000円〜',
    trial: '体験レッスン 3,300円',
    features: ['パーソナル', '通い放題あり', '川口駅徒歩6分', 'マシンピラティス＋ジム'],
    description: '通い放題のパーソナルマシンピラティスジムです。川口駅から徒歩6分です。マンツーマン指導で効率的にボディメイクを目指せます。パーソナルなのに通い放題プランがあるのが最大の魅力です。',
    access: 'JR京浜東北線「川口駅」徒歩6分',
    address: '埼玉県川口市栄町3-11-10 シャインハイツ川口栄町ライフアベニュー 101',
    popularPlan: {
      name: '通い放題プラン',
      description: 'パーソナルマシンピラティス通い放題です。マンツーマン指導です。',
      price: '月額 55,000円（税込）',
    },
    options: [
      '月4回プラン（22,000円〜）',
      'デイプラン（平日日中のみ）',
      '体験レッスン 3,300円',
      'オープン記念キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', 'ダイエット', '体幹強化', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'トレーニング器具', 'プライベートルーム', 'ロッカー'],
    },
  },
  {
    name: 'PILATES KASANE イオンモール川口前川店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=T15562j-7505717Y&p=E9887623',
    image: '/images/studios/pilates-kasane.webp',
    price: '月4回 11,880円〜',
    trial: '体験レッスン 500円',
    features: ['イオンモール内', '駐車場無料', 'マシン専門', '初心者歓迎'],
    description: 'イオンモール川口前川内にあるマシンピラティス専門スタジオです。買い物ついでに通えるアクセスの良さと無料駐車場が魅力です。初心者向けプログラムが充実しています。',
    access: 'JR京浜東北線「川口駅」バス15分 / 車でのアクセス推奨',
    address: '埼玉県川口市前川1-1-11 イオンモール川口前川内',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティスグループレッスン月4回です。',
      price: '月4回 11,880円（税込）',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      '体験レッスン 500円',
      '入会金 11,000円（キャンペーン中 無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '健康維持', '運動不足解消', '体幹強化'],
    },
    basicInfo: {
      hours: '10:00〜21:00',
      closed: 'イオンモール休館日に準ずる',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも川口のスタジオに通えますか？',
    answer: '問題ありません。川口エリアのスタジオはほとんどが初心者歓迎です。zen placeは段階的なレベル分けで安心、Pilates Meeは最大3名の少人数制で丁寧に教えてもらえます。URBAN CLASSICは自分のペースで進められるサーキット形式です。',
  },
  {
    question: '川口のピラティスの料金相場はどのくらいですか？',
    answer: 'グループ月4回で7,800円〜13,420円程度です。URBAN CLASSIC PILATESが月4回7,800円〜で最もリーズナブルです。zen placeは月4回10,450円〜です。ピラティスKは月4回13,420円〜です。',
  },
  {
    question: '川口駅から近いスタジオはどこですか？',
    answer: 'ピラティスKかわぐちキャスティ店が東口徒歩1分で最寄りです。zen place川口が徒歩4分です。URBAN CLASSIC PILATESが徒歩5分です。ELEMENTが徒歩6分です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place川口、URBAN CLASSIC PILATES、ELEMENT川口、PILATES KASANEは男性も利用可能です。ピラティスKとPilates Meeは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオはどこですか？',
    answer: 'ピラティスK（0円体験）、URBAN CLASSIC PILATES（0円体験）、Pilates Mee（体験レッスン無料）が無料体験可能です。zen placeはグループ体験1,100円、KASANEは500円です。',
  },
  {
    question: '車で通えるスタジオはありますか？',
    answer: 'PILATES KASANEはイオンモール川口前川内にあるため無料駐車場が利用可能です。車通いの方には最適です。駅前のスタジオは近隣コインパーキングを利用してください。',
  },
  {
    question: 'パーソナルレッスンが受けられるスタジオは？',
    answer: 'ELEMENT川口店は通い放題のパーソナル専門スタジオです。zen placeもプライベートレッスン（体験9,900円）を提供しています。Pilates Meeはセミパーソナル（最大3名）形式です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。川口はマシン専門スタジオが充実しています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。URBAN CLASSICは30分で完結するため、忙しい方でも週2〜3回通うことができます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。姿勢改善は比較的早く実感でき、ボディメイク効果は3ヶ月程度で目に見える変化が現れます。',
  },
]

export default function KawaguchiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '川口', url: 'https://biyori-pilates.com/area/kawaguchi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス川口おすすめ6選<br className="hidden md:block" />
              人気スタジオの料金プランの比較
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
              <span className="text-warm-600">川口</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="川口" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">本ページでは、川口エリアでおすすめのピラティススタジオ6選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>川口でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="川口" />
        <AreaMarketComparison studios={studios} areaName="川口" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">川口のおすすめピラティススタジオ6選</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">川口のピラティス料金相場</h2>
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
                    <td className="px-4 py-3">7,800円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,900円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,300円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              川口エリアはJR京浜東北線で東京駅まで約30分、赤羽まで1駅というアクセスの良さが魅力です。都心部と比べて料金はリーズナブルで、URBAN CLASSIC PILATESは月4回7,800円〜と非常に割安です。近隣の<Link href="/area/urawa/" className="text-warm-700 underline hover:text-warm-900">浦和</Link>や<Link href="/area/akabane/" className="text-warm-700 underline hover:text-warm-900">赤羽</Link>エリアのスタジオとも比較検討するのがおすすめです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">川口でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">川口駅東口にスタジオが集中</h3>
                <p className="text-warm-600 leading-relaxed">川口エリアのスタジオは主に川口駅東口方面に集中しています。ピラティスKはかわぐちキャスティ7Fで東口徒歩1分、zen placeは東口徒歩4分です。初回訪問時は余裕を持って到着できるよう、事前にルートをご確認ください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京浜東北線1本で都心スタジオも視野に</h3>
                <p className="text-warm-600 leading-relaxed">川口はJR京浜東北線で<Link href="/area/akabane/" className="text-warm-700 underline hover:text-warm-900">赤羽</Link>まで1駅、<Link href="/area/urawa/" className="text-warm-700 underline hover:text-warm-900">浦和</Link>まで約10分です。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、自分に合ったスタジオが見つかりやすくなります。zen placeは全国他店利用可能なので、エリアをまたいで通うこともできます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車通いなら郊外型スタジオも検討</h3>
                <p className="text-warm-600 leading-relaxed">PILATES KASANEはイオンモール川口前川内にあるため、無料駐車場が利用可能で車通いに最適です。買い物ついでに通えるのも便利です。駅前のスタジオは近隣コインパーキングを利用することになるため、駐車料金も考慮してお選びください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">グループ vs パーソナルの違いを理解する</h3>
                <p className="text-warm-600 leading-relaxed">川口エリアにはグループ型（ピラティスK、URBAN CLASSIC）とパーソナル型（ELEMENT）の両方があります。グループは料金が安く仲間と楽しめますが、パーソナルは自分だけの指導で効果を最大化できます。まずは体験で両方試してみるのがおすすめです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。ジーンズやスカートは適していません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方がフォーム確認に最適です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>川口エリアの豆知識：</strong>川口は鋳物の街として知られ、近年は住みやすい街ランキングでも上位に入るベッドタウンです。川口駅前にはかわぐちキャスティやアリオ川口など商業施設が充実しています。レッスン前後の買い物や食事にも困りません。荒川河川敷でのランニングと組み合わせてフィットネスライフを充実させる方も多いエリアです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額2万円未満で通えるスタジオです（店舗カードの料金）。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES 川口（月4回 7,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates 川口（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• Pilates Mee 川口店（月2回 11,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK かわぐちキャスティ店</li>
                  <li className="text-warm-700">• Pilates Mee 川口店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">駅から徒歩5分以内です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK かわぐちキャスティ店（JR京浜東北線「川口駅」東口 徒歩1分（かわぐちキャスティ 7F））</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続することをおすすめします。</p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">グループレッスンが中心です。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC（7,800円〜/月4回）</li>
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• KASANE（11,880円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">充実の設備で本格レッスンです。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜/月4回）</li>
                  <li>• URBAN CLASSIC（14,080円/通い放題）</li>
                  <li>• Pilates Mee（19,800円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 22,000〜55,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">マンツーマン指導で確実に効果です。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ELEMENT（22,000円〜/月4回）</li>
                  <li>• ELEMENT（55,000円/通い放題）</li>
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
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">川口の料金相場はグループ月4回で7,800円〜13,420円です。都心と比べてリーズナブルなのが魅力です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">ピラティスK、URBAN CLASSICは0円体験を実施しています。Pilates Meeも体験レッスン無料です。zen placeは1,100円です。まずは体験してみることをおすすめします。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">川口はJR京浜東北線で東京方面・大宮方面どちらにもアクセス良好です。ピラティスKはかわぐちキャスティ内で東口徒歩1分と駅近です。車派ならKASANEのイオンモール店が便利です。</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
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
            <p className="text-warm-600 leading-relaxed mb-6">本ページでは、川口エリアのおすすめピラティススタジオについてご紹介しました。</p>
            <p className="text-warm-600 leading-relaxed mb-6">本ページでは、川口にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p>
            <p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p>
            <p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,300円です。<br />まずは体験レッスンへの参加をおすすめします。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kawaguchi" areaName="川口" />

                  {/* g1-link-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands/kasane-kawaguchi-maekawa/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">PILATES KASANE イオンモール川口前川店の料金・体験を見る</Link>
              </div>
            </div>
      <RelatedAreas currentSlug="kawaguchi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
