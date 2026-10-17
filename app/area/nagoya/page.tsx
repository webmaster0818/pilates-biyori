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
  alternates: { canonical: 'https://biyori-pilates.com/area/nagoya/' },
  title: '【2026年10月最新】名古屋のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '名古屋エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,名古屋,愛知,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 久屋大通パーク店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', 'レイヤード久屋大通パーク内', '暗闇レッスン'],
    description: 'ピラティスK久屋大通パーク店は、名古屋市中区にある女性専用マシンピラティススタジオです。レイヤード久屋大通パークに入るから、平日は仕事帰りに、休日はお買い物ついでに最適です。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実しています。',
    access: '栄町駅近（レイヤード久屋大通パーク内）',
    address: '愛知県名古屋市中区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闘×音楽×マシンピラティスの融合レッスンです。楽しく続けられると人気のプランです。',
      price: '月4回 13,420円（税込）+ 施設維持費 825円',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時通い放題 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加レッスン（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'Two Three 名古屋',
    image: '/images/studios/two-three-pilates.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['少人数制', '最大8名', '女性に人気', 'ピラティスアカデミー運営'],
    description: '名古屋で女性に人気のピラティススタジオ8選に紹介されたスタジオです。最大8名までの少人数制グループレッスンが特徴で、一人ひとりに的確な指導が行き届くよう配慮です。誰でも通いやすいピラティススタジオです。まずは体験レッスンからお気軽にお申し込みください。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン（最大8名）',
      description: '少人数制で一人ひとりに的確な指導です。初心者からベテランまで対応しています。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'リフォーマー・スパインコレクター・コンビチェア・タワーなど充実',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['美しいカラダづくり', '姿勢改善', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['リフォーマー', 'スパインコレクター', 'コンビチェア', 'タワー', 'マシン充実'],
    },
  },
  {
    name: 'REBORN（リボーン）名古屋',
    image: '/images/studios/reborn-nagoya.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['充実設備', 'プライベート中心', 'あらゆる目的に対応', 'グループレッスンが不安な方も可'],
    description: '充実した設備により、あなたのあらゆる目的を叶えることができます。ピラティスを深く学びたい方、グループレッスンへの参加が不安な方など、どのような方でもご対応いたしますのでご相談ください。プライベートレッスンを中心に、一人ひとりに合わせた丁寧な指導を提供しています。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '充実した設備であらゆる目的に対応しています。一人ひとりに合わせた丁寧な指導です。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'ピラティスを深く学びたい方向け',
      '充実設備',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ピラティスを深く学ぶ', 'グループ不安解消', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['充実設備', 'プライベート空間', 'マシン完備'],
    },
  },
  {
    name: 'ピラティススタジオアステル（栄店・名駅店）',
    image: '/images/studios/astel-pilates-nagoya.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['栄・名駅2店舗', '東京南青山も展開', '身体を紐解く', '1回で効果実感'],
    description: '名古屋市 栄・名駅、東京 南青山のピラティス＆トレーニングスタジオ、アステルです。自分の癖を知り、身体の状態を知り、心や身体を紐解いていくアステルのピラティスです。たった1回のレッスンでもその効果を感じていただけるでしょう。名古屋市内に2店舗（栄店・名駅店）展開しています。',
    access: '栄・名駅（各駅近）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティス＆トレーニング',
      description: '自分の癖を知り、身体を紐解きます。1回のレッスンでも効果を実感できます。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'ピラティス',
      'トレーニング',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['身体の癖を知る', '効果を早く実感', 'ボディメイク', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['栄店・名駅店', 'マシン完備', 'トレーニング設備'],
    },
  },
  {
    name: 'ナグスタジオ（名古屋市内4店舗）',
    image: '/images/studios/nag-studio-nagoya.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['4店舗全店利用可', 'ピラティス＆ホットヨガ', 'イオン内店舗あり', '溶岩石ヨガ'],
    description: 'ナグスタジオに入会すると、ナディアパーク店、星が丘テラス店、イオン則武新町店、イオンモールナゴヤドーム前店の全店のピラティスレッスン・溶岩石ホットヨガレッスンを受講できます。ピラティスとホットヨガの両方を楽しめるのが魅力です。お買い物ついでに通えるイオン内店舗もあります。',
    access: 'ナディアパーク・星が丘テラス・イオン則武新町・イオンナゴヤドーム前',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティス＆ホットヨガ全店通い放題',
      description: '4店舗全店でピラティスと溶岩石ホットヨガが受講可能です。',
      price: '要問合せ',
    },
    options: [
      'ピラティスレッスン',
      '溶岩石ホットヨガレッスン',
      '全店相互利用可能',
      'イオン内店舗あり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ピラティス＆ヨガ併用', '買い物ついでに', 'リラックス', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['4店舗展開', 'ロッカー', 'パウダールーム', 'イオン内店舗', '溶岩石'],
    },
  },
  {
    name: 'Pilates Studio Tree',
    image: '/images/studios/pilates-tree-nagoya.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['養成コース開講', 'Peak Pilates PPC1', '資格取得可', 'プロ育成'],
    description: '名古屋のピラティススタジオTreeです。Peak Pilates養成コースPPC1を募集中しています。著名なピラティスインストラクターによる指導で、プロのインストラクターを目指す方にも対応しています。初心者から養成コースまで幅広く提供しています。ピラティスを深く学びたい方におすすめです。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '初心者からプロ育成まで対応しています。Peak Pilates養成コースも開講しています。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'Peak Pilates養成コースPPC1',
      '資格取得コース',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ピラティスを深く学ぶ', '資格取得', 'プロ育成', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['養成コース開講', 'マシン完備', 'プライベート空間'],
    },
  },
  {
    name: 'studio nano（名駅・伏見）',
    image: '/images/studios/studio-nano-nagoya.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['姿勢矯正専門', 'パーソナルトレーニング', 'セルフコンディショニング習得', '痛み改善'],
    description: '【姿勢矯正・改善専門】セルフコンディショニングが習得できるパーソナルトレーニング&ピラティススタジオnanoです。名古屋駅・伏見駅近くに展開しています。姿勢矯正と痛み改善に特化したスタジオで、一人ひとりの身体に合わせた専門的な指導を提供しています。自分で身体をケアする方法も学べます。',
    access: '名古屋駅・伏見駅近',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルトレーニング＆ピラティス',
      description: '姿勢矯正・痛み改善専門です。セルフコンディショニングも習得できます。',
      price: '要問合せ',
    },
    options: [
      'パーソナルトレーニング',
      'マシンピラティス',
      '姿勢矯正プログラム',
      'セルフコンディショニング指導',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢矯正', '痛み改善', 'セルフケア習得', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['姿勢矯正専門', 'パーソナル空間', 'トレーニング設備', 'マシン完備'],
    },
  },
  {
    name: 'zen place pilates 名駅',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zenplace.webp',
    price: 'マットグループ月4回 9,625円〜/フリープラン 14,960円〜（グレードにより異なる・税込）',
    trial: 'マットグループ体験 2,200円〜（グレードにより異なる）/マシングループ体験 5,000円',
    features: ['マット＋マシン（リフォーマー）', 'グループ＋プライベート', '男性も利用可'],
    description: '全国100店舗以上を展開するピラティス専門スタジオです。マットグループ・マシン（リフォーマー）グループ・プライベートを提供し、男性も利用可能です。全国の系列スタジオを他店利用できます。「名古屋駅」ミヤコ2出口徒歩1分です。',
    access: '「名古屋駅」ミヤコ2出口徒歩1分',
    address: '愛知県名古屋市中村区名駅4丁目26-10 名駅ファーストビル 6B',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。名古屋エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。Two Three 名古屋は最大8名の少人数制で一人ひとりに丁寧な指導が受けられますし、ピラティスK 久屋大通パーク店は無料体験もあるので気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。',
  },
  {
    question: '名古屋のピラティススタジオの料金相場は？',
    answer: '名古屋エリアのピラティススタジオの料金相場は、グループレッスンで月4回13,000円〜18,000円程度です。パーソナルレッスンはスタジオにより異なりますが1回8,000円〜15,000円が目安です。ピラティスK 久屋大通パーク店は月4回13,420円で比較的リーズナブルです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。大切なのは継続することです。無理のないペースで長く続けることが、目標達成への近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'ピラティスにはダイエット効果が期待できます。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。ただし即効性はないので、最低でも2〜3ヶ月は継続することが大切です。食事管理を並行すると、より効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。マットやタオルは、スタジオでレンタルできる場合が一般的です。詳細は各スタジオの体験レッスン案内でご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。名古屋ではナグスタジオのようにピラティスとホットヨガの両方を楽しめるスタジオもあるので、どちらも試してみるのもおすすめです。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。studio nanoのような姿勢矯正専門のスタジオもあるので、痛み改善が目的の方にはおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめです。グループは料金を抑えやすく、ほかの参加者と一緒に続けられる点が利点です。名古屋にはREBORNのようなプライベート中心のスタジオから、ピラティスKのような大人数グループまで選べます。',
  },
]

export default function NagoyaAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '名古屋', url: 'https://biyori-pilates.com/area/nagoya/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス名古屋おすすめ8選<br className="hidden md:block" />
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
              <span className="text-warm-600">名古屋</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="名古屋" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、名古屋エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>名古屋でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>名古屋駅・栄・金山エリアで通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="名古屋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              名古屋のおすすめピラティススタジオ8選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference - 目的別おすすめスタジオ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用スタジオなら人目を気にせず集中できます。音楽×暗闇のレッスンで楽しくボディメイクを目指せます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 久屋大通パーク店（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">少人数制・丁寧指導</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最大8名までの少人数制で、一人ひとりに的確な指導です。初心者でも安心です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Two Three 名古屋（最大8名）</li>
                  <li className="text-warm-700">• REBORN 名古屋（プライベート中心）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">姿勢矯正・痛み改善</h3>
                <p className="text-warm-600 text-sm mb-4">
                  姿勢矯正やリハビリに特化したスタジオです。セルフケアも学べます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• studio nano（名駅・伏見）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス＆ヨガ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ピラティスとホットヨガの両方を楽しみたい方におすすめです。全店相互利用可能です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ナグスタジオ（4店舗全店利用可）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">資格取得・プロ育成</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ピラティスインストラクターを目指す方におすすめです。養成コースも開講しています。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Studio Tree（Peak Pilates PPC1）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide - おすすめの期間・頻度 */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回（月4〜8回）からスタートするのがおすすめです。まずは身体を慣らすことが大切です。継続期間は最低でも2〜3ヶ月です。この期間で効果を実感される方が多くみられます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回（月8〜12回）がおすすめです。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3〜6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめです。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切です。無理のないペースで通うことが大切です。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide - 予算別の料金相場 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。手軽にマシンピラティスを始めたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜8回</p>
                <p className="text-sm text-warm-600 mb-4">
                  通い放題プランや複数店舗利用です。しっかり通いたい方におすすめです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 通い放題（18,920円）</li>
                  <li>• ナグスタジオ（4店舗利用可）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">プライベート・専門</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">要問合せ</p>
                <p className="text-sm text-warm-600 mb-4">
                  パーソナルレッスン中心です。専門的な指導で効率よく結果を出したい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• REBORN 名古屋（充実設備）</li>
                  <li>• アステル（1回で効果実感）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose - 失敗しない選び方 */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  まずは自分がピラティスで何を達成したいのかを明確にすることをおすすめします。ダイエット、姿勢改善、体幹強化、リハビリなど、目的によって最適なスタジオやプログラムは変わります。名古屋にはピラティスKのような楽しいグループレッスンなど選択肢が豊富です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  名古屋エリアの料金相場はグループで月4回13,000円〜18,000円程度です。無理なく継続できる予算を決めることをおすすめします。料金だけでなく、入会金やマット・ウェアのレンタル料などもご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK 久屋大通パーク店は無料体験を実施しているので、体験レッスンをご利用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。名古屋は地下鉄東山線・名城線、名鉄、JR中央線など交通網が充実しています。名古屋駅・栄・金山・伏見エリアに多くのスタジオが集まっているので、自宅や職場からの通いやすさを重視してお選びください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              名古屋のピラティス料金相場
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                名古屋エリアは名駅（名古屋駅）・栄・久屋大通を中心にピラティススタジオが増加中です。東京・大阪の大手チェーンの進出と、地元密着型の個人スタジオが共存するエリアです。料金帯は東京とほぼ同等ですが、地域密着型スタジオでは独自のキャンペーンを展開していることもあります。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">13,420円〜18,000円</p>
                  <p className="text-sm text-warm-600">ピラティスK久屋大通パーク店が月4回13,420円＋施設維持費825円です。ナグスタジオ・Two Threeなど地元スタジオも人気です。パーソナル1回は8,000円〜15,000円が目安です。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">地元密着型スタジオ</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">要問合せが多い</p>
                  <p className="text-sm text-warm-600">名古屋の特徴として、REBORN・アステル・ナグスタジオ・Pilates Studio Treeなど地元スタジオは、料金を公開していないケースが大半です。体験レッスンで直接確認するか、電話・メールで問い合わせるのが確実です。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は10,000円〜30,000円程度が一般的です。キャンペーン期間中は無料になるスタジオも多数あります。体験レッスンは無料〜5,000円程度です。ピラティスKは無料体験があります。まずは体験レッスンへの参加をおすすめします。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              名古屋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">名駅エリアと栄エリアでスタジオの特色が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋のピラティスは名駅（名古屋駅周辺）と栄・久屋大通エリアの2大拠点に分かれています。名駅はビジネスパーソン向けのスタジオが多く、栄エリアはショッピングと一体化した女性向けスタジオが充実しています。ピラティスK久屋大通パーク店は久屋大通駅直結で女性専用のマシン専門スタジオです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車通いの方は駐車場を事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋は車社会のため、車で通うことを前提にスタジオを探す方も多いエリアです。栄・名駅エリアはコインパーキングが割高なので、スタジオ提携の駐車場があるか、近隣の安い駐車場を事前にご確認ください。地下鉄利用なら東山線・鶴舞線・名城線が便利です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">理学療法士・医療系監修スタジオに注目</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋エリアではREBORNやstudio nanoなど、医療系のバックグラウンドを持つスタジオが増えています。腰痛・肩こり・姿勢改善などの目的がある方は、理学療法士やトレーナー資格を持つインストラクターがいるスタジオを選ぶと、より効果的な指導を受けられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金非公開スタジオは体験で確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋の地元スタジオは、料金をWebサイトで公開していないケースが大半です。「要問合せ」のスタジオは、まず体験レッスンを申し込んで料金プランの詳細を確認するのがおすすめです。体験時にキャンペーン情報も聞いておくことをおすすめします。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが基本です。フードやファスナー付きの服はマシンに引っかかるため避けてください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>水分（500ml以上）</strong>：名古屋は夏の暑さが厳しいため、特に夏場は多めにご持参ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>タオル</strong>：汗拭き用に1枚は必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは必須のスタジオがほとんどです。滑り止め付きをご持参ください。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは全身を大きく動かすため、動きやすさが最重要です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方がフォームチェックがしやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。ピラティスKは手ぶら体験が可能な場合があります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリーは外して</strong>から参加です。マシンのスプリングやストラップに引っかかる恐れがあります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>名古屋エリアの豆知識：</strong>名古屋は車文化が根強いですが、栄・名駅エリアなら地下鉄で快適にアクセス可能です。久屋大通パークは2020年にリニューアルオープンした緑豊かな公園で、レッスン前後の散歩やランニングにも最適です。ナグスタジオは名古屋市内4店舗あるため、生活圏に合わせて使い分けられます。
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

        {/* Summary - まとめ */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、名古屋のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              名古屋には、音楽×暗闇のピラティスK、少人数制のTwo Three、充実設備のREBORN、栄・名駅展開のアステル、ピラティス＆ヨガのナグスタジオ、養成コース開講のTree、姿勢矯正専門のstudio nanoなど、個性豊かなスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、ピラティススタジオ選びの参考になれば幸いです。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンのご予約
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスンは無料〜有料です。<br />
              まずは体験レッスンへの参加をおすすめします。
            </p>
            <Link
              href="#studios"
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
                <Link href="/area/yagoto/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">八事</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nagoya" areaName="名古屋" />

      <RelatedAreas currentSlug="nagoya" />
      <SiteFooter />

      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://biyori-pilates.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'エリアから探す',
                item: 'https://biyori-pilates.com/area',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '名古屋',
                item: 'https://biyori-pilates.com/area/nagoya',
              },
            ],
          }),
        }}
      />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
