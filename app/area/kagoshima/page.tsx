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
  alternates: { canonical: 'https://biyori-pilates.com/area/kagoshima/' },
  title: '【2026最新】ピラティス鹿児島おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '鹿児島エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,鹿児島,鹿児島県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK イオンモール鹿児島店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 181,
    reviews: [
      {
        author: 'M.H',
        rating: 5,
        date: '1週間前',
        text: '鹿児島初上陸の女性専用マシンピラティス専門スタジオ。イオンモール鹿児島2階にあるので買い物ついでに通える。体験レッスン0円で気軽に試せました。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '2週間前',
        text: '音楽に合わせたグループレッスンが楽しい。部位別ボディメイクプログラムが充実していて飽きない。当日入会で入会金・登録料0円。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: '火・水・金は22時まで営業で仕事帰りにも通いやすい。月4回13,420円とマシンピラティスとしてはコスパが良い。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'イオンモール内', '体験0円', '部位別プログラム'],
    description: '女性専用マシンピラティス専門スタジオ。イオンモール鹿児島2階に位置し、買い物ついでに通える利便性。音楽に合わせた楽しいグループレッスンと部位別ボディメイクプログラムが充実。体験レッスン0円で気軽に始められる。',
    access: '鹿児島市電「谷山電停」からバス7分・イオンモール鹿児島2階',
    address: '鹿児島県鹿児島市東開町7 イオンモール鹿児島 2階',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '当日入会で入会金・登録料0円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '火・水・金 10:00-22:00 / 木 17:30-22:00 / 土・祝 10:00-18:30 / 日 10:00-17:30',
      closed: '月曜',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Pilates KASANE 鹿児島天文館店',
    image: '/images/studios/kasane-kagoshima.webp',
    rating: 4.6,
    reviewCount: 18,
    reviews: [
      {
        author: 'S.M',
        rating: 5,
        date: '1週間前',
        text: '天文館通駅から徒歩5分の好立地。4名以下の少人数制でインストラクターが一人ひとりに寄り添ったレッスン。レンタルウェア・ソックスも無料で手ぶらで通える。',
      },
      {
        author: 'K.Y',
        rating: 5,
        date: '2週間前',
        text: '和を基調とした落ち着いた空間が素敵。ビギナー向けからステップアップまでプログラムが豊富。月8回で1回あたり3,025円とコスパも良い。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: 'パウダールームも完備で仕事前後にも便利。初心者でも安心して始められる雰囲気。',
      },
    ],
    price: '月4回 15,400円〜',
    trial: '体験レッスン 3,000円',
    features: ['天文館徒歩5分', '少人数制4名', 'レンタル無料', '和の空間'],
    description: '天文館通駅から徒歩5分の少人数制マシンピラティススタジオ。4名以下の少人数制で、和を基調とした落ち着いた空間でレッスン。レンタルウェア・ソックス無料で手ぶらで通える。ビギナーからステップアップまで豊富なプログラム。',
    access: '鹿児島市電「天文館通駅」徒歩5分・「いづろ通駅」徒歩4分',
    address: '鹿児島県鹿児島市中町4-3 Next Terrace表参道1階',
    popularPlan: {
      name: '月8回プラン',
      description: '少人数制マシンピラティス月8回。1回あたり3,025円でコスパ◎。',
      price: '月8回（1回あたり3,025円）',
    },
    options: [
      '月4回プラン（15,400円〜）',
      '月8回プラン（1回3,025円）',
      '体験レッスン（3,000円）',
      'レンタルウェア・ソックス無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'パウダールーム', 'レンタルウェア'],
    },
  },
  {
    name: 'STUDIO IVY（スタジオアイビー）鹿児島店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 18,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '鹿児島中央駅から徒歩5分。完全個室でオーダーメイドのパーソナルレッスン。月額制で1回約6,500円〜と続けやすい価格。',
      },
      {
        author: 'N.S',
        rating: 5,
        date: '2週間前',
        text: '「なりたい自分になれる場所」というコンセプト通り、自分の目標に合わせたプログラムを組んでもらえる。インストラクターの質が高い。',
      },
      {
        author: 'T.H',
        rating: 4,
        date: '3週間前',
        text: '完全プライベートなので周りを気にせず集中できる。マンツーマンだから初心者でも安心。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスンあり',
    features: ['鹿児島中央駅徒歩5分', '完全個室', 'オーダーメイド', 'パーソナル専門'],
    description: '鹿児島中央駅から徒歩5分の完全個室パーソナルマシンピラティススタジオ。一人ひとりの目標に合わせたオーダーメイドプログラムを提供。月額制で1回約6,500円〜と続けやすい価格設定。',
    access: 'JR「鹿児島中央駅」徒歩5分',
    address: '鹿児島県鹿児島市（鹿児島中央駅周辺・詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回コース',
      description: '完全個室でのオーダーメイドパーソナルレッスン。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '月2回コース（15,000円）',
      '月4回コース（28,000円）',
      '月8回コース（52,000円）',
      '都度払い（8,800円/回）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Coralful Journey（コーラルフルジャーニー）',
    image: '/images/studios/coralful-journey-kagoshima.webp',
    rating: 4.5,
    reviewCount: 13,
    reviews: [
      {
        author: 'H.M',
        rating: 5,
        date: '1週間前',
        text: '鹿児島中央駅から徒歩1分で最高のアクセス。市内最大級10名以上のインストラクターが在籍。無料体験レッスンがあるので気軽に始められる。',
      },
      {
        author: 'Y.A',
        rating: 4,
        date: '2週間前',
        text: 'ヨガとピラティスの両方が受けられる。ベビーシッター在籍でママさんも安心して通える。通い放題プランもあり。',
      },
      {
        author: 'C.N',
        rating: 4,
        date: '3週間前',
        text: '体験レッスン1,100円が今なら0円。当日入会で入会金5,500円も無料。初心者から経験者まで楽しめるレッスン内容。',
      },
    ],
    price: '月額制（プラン複数あり）',
    trial: '体験レッスン 0円',
    features: ['中央駅徒歩1分', '体験0円', 'ベビーシッター在籍', 'ヨガ&ピラティス'],
    description: '鹿児島中央駅から徒歩1分のヨガ＆ピラティススタジオ。市内最大級10名以上のインストラクターが在籍し、初心者から経験者まで楽しめる充実のレッスン。ベビーシッター在籍でママさんも安心。体験レッスン0円キャンペーン中。',
    access: 'JR「鹿児島中央駅」徒歩1分',
    address: '鹿児島県鹿児島市西田2丁目20-8 山野ビル 2F',
    popularPlan: {
      name: '通い放題プラン',
      description: 'ヨガ・ピラティスが通い放題。10名以上のインストラクターによる多彩なレッスン。',
      price: '公式サイトでご確認ください',
    },
    options: [
      '通い放題プラン',
      '月4回プラン',
      'チケット払い（都度払い）',
      '当日入会で入会金0円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['リフレッシュ', '運動不足解消', '産後ケア', '柔軟性向上'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'ヨガスタジオ', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates KASANE 鹿児島中央駅前店',
    image: '/images/studios/pilates-kasane.webp',
    rating: 4.6,
    reviewCount: 22,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '1週間前',
        text: '天文館店と合わせて鹿児島に2店舗展開。中央駅前で駅近アクセス抜群。少人数制で丁寧な指導が受けられる。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: '和の雰囲気が落ち着く。レンタル無料で手ぶらで通えるのが嬉しい。ビギナープログラムが充実。',
      },
      {
        author: 'S.Y',
        rating: 5,
        date: '3週間前',
        text: '天文館店と両方利用できるので予約が取りやすい。スタッフの対応も丁寧で安心。',
      },
    ],
    price: '月4回 15,400円〜',
    trial: '体験レッスン 3,000円',
    features: ['中央駅前', '2店舗展開', '少人数制', 'レンタル無料'],
    description: '鹿児島中央駅前の少人数制マシンピラティススタジオ。天文館店と合わせて鹿児島に2店舗展開で予約が取りやすい。4名以下の少人数制で丁寧な指導。レンタルウェア・ソックス無料で手ぶらOK。',
    access: 'JR「鹿児島中央駅」すぐ',
    address: '鹿児島県鹿児島市（鹿児島中央駅前・詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月8回プラン',
      description: '少人数制マシンピラティス月8回。2店舗利用可能。',
      price: '月8回（1回あたり3,025円）',
    },
    options: [
      '月4回プラン（15,400円〜）',
      '月8回プラン（1回3,025円）',
      '体験レッスン（3,000円）',
      '天文館店との相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'パウダールーム', 'レンタルウェア'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！鹿児島エリアのスタジオはほとんどが初心者歓迎。ピラティスKは体験0円、KASANEは少人数制で丁寧に指導してもらえます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。鹿児島ではピラティスK、KASANE、STUDIO IVYでマシンピラティスが受けられます。',
  },
  {
    question: '鹿児島のピラティスの料金相場は？',
    answer: 'グループ月4回で13,420円〜15,400円程度。ピラティスKが月4回13,420円〜で最もリーズナブル。KASANEは月8回プランで1回3,025円。',
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
    answer: '動きやすい服装と飲み物があればOK。KASANEはレンタルウェア・ソックス無料で手ぶらOK。ピラティスKも体験0円で気軽に試せます。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。Coralful Journeyでは両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'KASANE、STUDIO IVY、Coralful Journeyは男性も通えます。ピラティスKは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'ピラティスKとCoralful Journeyは体験0円。KASANEは体験3,000円です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KagoshimaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '鹿児島', url: 'https://pilates-biyori.com/area/kagoshima/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス鹿児島おすすめ10選！<br className="hidden md:block" />
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
              <span className="text-warm-600">鹿児島</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="鹿児島" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「鹿児島で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、鹿児島エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>鹿児島でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="鹿児島" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              鹿児島のおすすめピラティススタジオ10選
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
              鹿児島のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,025円〜15,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 28,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">3,000円〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              鹿児島エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。近隣の熊本エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              鹿児島でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">鹿児島エリアのスタジオへのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  鹿児島エリアのスタジオは鹿児島市電「谷山電停」からバス7分・イオンモール鹿児島2階が最寄りです。初めて通う際は地図アプリで経路と所要時間を確認し、レッスン開始10分前には到着できるよう計画しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">鹿児島エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  鹿児島エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめ。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  鹿児島エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  鹿児島エリアだけでなく、近隣の<Link href="/area/kumamoto" className="text-warm-700 underline hover:text-warm-900">熊本</Link>、<Link href="/area/fukuoka" className="text-warm-700 underline hover:text-warm-900">福岡</Link>、<Link href="/area/naha" className="text-warm-700 underline hover:text-warm-900">那覇</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>鹿児島エリアの豆知識：</strong>鹿児島は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前に確認。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。
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
                  <li className="text-warm-700">• the SILK 鹿児島（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 鹿児島（月4回 13,420円〜）</li>
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
                  鹿児島の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
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
                  鹿児島はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は鹿児島エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では鹿児島にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kagoshima" areaName="鹿児島" />

      <RelatedAreas currentSlug="kagoshima" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
