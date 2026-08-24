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
  alternates: { canonical: 'https://biyori-pilates.com/area/sendai/' },
  title: '【2026年8月最新】ピラティス仙台おすすめ9選！料金・体験レッスン・マシン対応を比較！',
  description: '仙台エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,仙台,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Celestia（セレスティア）仙台店',
    officialUrl: 'https://t.hatmiso.net/fmcl?ak=U114734.1.W158213V.U1357808',
    image: '/images/studios/celestia.webp',
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり（詳細は公式サイト参照）',
    features: ['マシンピラティス', 'セミパーソナル', '少人数制', '美しさ重視'],
    description: '「本来の輝きを引き出す」をコンセプトにしたセミパーソナルのマシンピラティス専門スタジオ。美しさと健康を両立する洗練された空間で、少人数制のレッスンを提供しています。契約プランの範囲で系列店を相互利用でき、仙台店もその一つです。',
    access: '仙台駅周辺（詳細は公式サイト参照）',
    address: '宮城県（詳細は公式サイト参照）',
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシンピラティス', 'セミパーソナル', '更衣室', '女性も通いやすい'],
    },
  },
  {
    name: 'ピラティスK 仙台PARCO2店',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '仙台駅直結', 'PARCO2内'],
    description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。仙台駅西口より徒歩4分、仙台PARCO2の5階。暗闇×音楽×マシンピラティスの融合レッスンが人気。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。お買い物ついでに通えるアクセスの良さも魅力。',
    access: '仙台駅西口より徒歩4分 / 地下鉄東西線仙台駅南1番出口より徒歩3分',
    address: '宮城県仙台市青葉区中央3丁目7-5 仙台PARCO2 5F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闘×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
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
      hours: '月・水・金 10:00-21:30 / 火・木 9:30-21:30 / 土・祝 9:30-20:00 / 日 10:00-19:00',
      closed: '第一月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'zen place pilates 仙台',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['マット＆マシン', '全国展開', '仙台駅徒歩3分', '男性OK'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。JR仙台駅徒歩3分の好立地。マットグループ、マシングループ、プライベートレッスンと多彩なレッスンを提供。2023年8月3日グランドオープン、東北初上陸・宮城県第一号店。男性もOKで、専門知識を持つエデュケーターが丁寧に指導します。',
    access: 'JR仙台駅徒歩3分',
    address: '宮城県仙台市青葉区中央1丁目6-27 仙信ビル 3階',
    popularPlan: {
      name: 'マットグループ 月4',
      description: 'マットピラティスのグループレッスン。初心者にもおすすめの基本プラン。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'フリープラン（通い放題 14,960円）',
      'マット＆マシングループ MM22（各2回 12,650円）',
      'リフォーマーグループ RG4（月4回 15,400円）',
      'プライベートレッスン（月4回 33,880円）',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リハビリ'],
    },
    basicInfo: {
      hours: '平日 10:00-21:00 / 土日祝 10:00-17:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'La pilates 仙台店',
    image: '/images/studios/la-pilates.webp',
    price: '月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×ピラティス', '女性専用', '仙台駅徒歩4分', '骨膜整体'],
    description: '整体とマシンピラティスを融合させた女性専用プライベートスタジオ。JR仙台駅より徒歩4分。2026年1月NEW OPEN。独自の「骨膜整体 × マシンピラティス」プログラムで、肩こり・腰痛・姿勢の悩みを根本からケア。ウッド調の温かみある内装でリラックスしながらトレーニングできます。',
    access: 'JR仙台駅より徒歩4分',
    address: '宮城県仙台市青葉区中央4丁目4-8 中央4丁目ビル3F',
    popularPlan: {
      name: 'サブスク 月1回コース',
      description: '整体とマシンピラティスの融合プログラム。初心者から経験者まで対応。',
      price: '月1回 12,000円（税込）',
    },
    options: [
      '月2回コース（月額 22,000円・単価 11,000円）',
      '月4回コース（月額 40,000円・単価 10,000円）',
      '月6回コース（月額 54,000円・単価 9,000円）',
      '年払いコース（さらにお得）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['肩こり・腰痛改善', '姿勢改善', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '9:00〜21:00（最終受付20:00）',
      closed: '年末年始',
      facilities: ['ロッカー', 'パウダールーム', 'マシン4台', 'プライベート空間'],
    },
  },
  {
    name: 'Rintosull 仙台駅前店',
    image: '/images/studios/rintosull.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['LAVA運営', 'ホットヨガ併用可', '仙台駅近', '初心者87%'],
    description: 'ホットヨガスタジオLAVAを運営する会社が手がけるマシンピラティス専門スタジオ。会員様の87%以上がマシンピラティス未経験からスタート。初心者でも安心して取り組める環境づくりを大切にしています。Rintosull全店とLAVA全店を相互利用できるお得なプランも用意。',
    access: '仙台駅近',
    address: '宮城県仙台市青葉区中央3-1-24 荘銀ビル3F ホットヨガスタジオLAVA仙台駅前店内',
    popularPlan: {
      name: 'マシンピラティス通い放題プラン',
      description: 'Rintosull全店でマシンピラティスが通い放題。初心者でも安心のサポート体制。',
      price: '要問合せ',
    },
    options: [
      'マシンピラティス＋ホットヨガ通い放題プラン',
      'マシンピラティス＋ホットヨガ＋暗闇キックボクシング通い放題プラン',
      'LAVA全店＋BurnesStyle全店相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['運動習慣づくり', 'ボディメイク', '姿勢改善', '複数エクササイズ併用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'LAVA併設'],
    },
  },
  {
    name: 'REborn（リボーン）',
    image: '/images/studios/reborn-sendai.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['宮城県初', 'マンツーマン', '資格取得可', '6歳〜70代'],
    description: '2018年に宮城県初のピラティス専門サロンとしてオープン。マンツーマンレッスンをメインとし、6歳〜70代まで1,000人以上の方の身体と向き合ってきた実績があります。体験レッスンから資格取得コースまで幅広く対応。身体の歪みや癖、冷えを解消して心身のバランスを整えます。',
    access: '詳細は公式サイト参照',
    address: '仙台市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンツーマンレッスン',
      description: '一人ひとりに合わせたオーダーメイドプログラム。初心者から上級者まで対応。',
      price: '要問合せ',
    },
    options: [
      'ペアレッスン',
      'グループレッスン',
      '資格取得コース',
      'メンズピラティス（紹介制）',
    ],
    userProfile: {
      ageRange: '6歳〜70代まで幅広い',
      genderRatio: '女性95% / 男性5%',
      purpose: ['身体の歪み解消', '冷え改善', '姿勢改善', '資格取得'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マンツーマン専用スペース', 'プライベート空間', '資格養成講座'],
    },
  },
  {
    name: 'Two Three 仙台一番町',
    image: '/images/studios/two-three-pilates.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['少人数制', '最大8名', '2024年7月OPEN', 'ピラティスアカデミー運営'],
    description: '2024年7月にオープンした、仙台一番町エリアにあるマシンピラティス専門スタジオ。最大8名までの少人数制グループレッスンが特徴で、一人ひとりに的確な指導が行き届くよう配慮。経験豊富なインストラクターが所属し、自社でピラティスアカデミーを運営。定期的な研修制度により常に高い指導水準を維持。',
    access: '仙台一番町エリア',
    address: '仙台市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン（最大8名）',
      description: '少人数制で一人ひとりに的確な指導。初心者からベテランまで対応。',
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
    name: 'ピラティススタジオDEP 仙台店 Calm',
    image: '/images/studios/pilates-studio-dep.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士監修', '一番町', '2023年11月OPEN', '高品質マシン'],
    description: '2023年11月1日にOPENしたピラティススタジオ。全スタッフが理学療法士で、高品質のピラティス専用マシンを主体に、理学療法士の知識を組み合わせたDEPオリジナルトレーニングで効果的に体を整えることができます。一番町中央ビル内で通いやすい立地。繰り返すごとに身体を良い状態に導き、一生ものの知識が習得できます。',
    access: '一番町エリア',
    address: '宮城県仙台市青葉区一番町2丁目5-5 東一中央ビルC棟402',
    popularPlan: {
      name: '月額会員プラン',
      description: '理学療法士監修のオリジナルトレーニング。姿勢改善・パフォーマンス向上に効果的。',
      price: '要問合せ',
    },
    options: [
      '理学療法士による専門指導',
      '高品質ピラティス専用マシン使用',
      'DEPオリジナルトレーニング',
      '全国口コミ評価トップクラス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢・歪み改善', 'パフォーマンス向上', 'リハビリ', '体のケア'],
    },
    basicInfo: {
      hours: '月・土 9:00-18:00 / 日 9:00-19:00 / 火〜金 9:00-20:00',
      closed: '年末年始',
      facilities: ['高品質マシン', 'ロッカー', 'パウダールーム', '理学療法士常駐'],
    },
  },
  {
    name: 'Repilates 仙台泉大沢店',
    image: '/images/studios/repilates.webp',
    price: '3ヶ月通い放題 5,000円（キャンペーン）',
    trial: '無料体験会・内覧会受付中',
    features: ['女性専用', 'イオンタウン内', '2026年4月OPEN予定', '通い放題'],
    description: 'イオンタウン仙台泉大沢内に2026年4月4日OPEN予定の女性専用マシンピラティス専門スタジオ。都内・関東圏に複数店舗展開するスタジオの仙台進出。最大13名のグループピラティスで運動習慣を身につける。インストラクターがしっかりサポートし、効果を実感できます。お得に始めたい方におすすめ。',
    access: 'イオンタウン仙台泉大沢内',
    address: '宮城県仙台市泉区大沢1丁目5-1 イオンタウン仙台泉大沢店',
    popularPlan: {
      name: '3ヶ月通い放題キャンペーン',
      description: 'オープン記念の特別キャンペーン。3ヶ月間5,000円で通い放題。',
      price: '3ヶ月通い放題 5,000円（キャンペーン）',
    },
    options: [
      '無料体験会・内覧会受付中',
      'グループレッスン（最大13名）',
      '通常プラン（要問合せ）',
      '口コミ限定特典あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['運動習慣づくり', 'ボディメイク', '友達と通いたい', 'お得に始めたい'],
    },
    basicInfo: {
      hours: '10:00〜21:00',
      closed: '不定休',
      facilities: ['女性専用', 'ロッカー', 'パウダールーム', 'イオンタウン内', '駐車場あり'],
    },
  },
]

const faqs = [
  {
    question: '仙台でピラティス初心者におすすめのスタジオはどこですか？',
    answer: 'Rintosull 仙台駅前店がおすすめです。会員様の87%以上がマシンピラティス未経験からスタートしており、初心者でも安心して取り組める環境づくりを大切にしています。ホットヨガLAVAを運営する会社が手がけているので安心感もあります。',
  },
  {
    question: '仙台駅直結で通えるピラティススタジオはありますか？',
    answer: 'はい、2つあります。ピラティスK 仙台PARCO2店（仙台駅西口徒歩4分・PARCO2内）とzen place pilates 仙台（JR仙台駅徒歩3分）。天候に左右されず通えるので、仕事帰りやお買い物ついでに便利です。',
  },
  {
    question: '仙台で一番安いピラティススタジオはどこですか？',
    answer: 'zen place pilates 仙台が月4回9,625円で最も安く通えます。また、Repilates 仙台泉大沢店はオープン記念キャンペーンで3ヶ月通い放題5,000円と非常にお得です（期間限定）。',
  },
  {
    question: '女性専用のピラティススタジオはありますか？',
    answer: 'はい、3つあります。ピラティスK 仙台PARCO2店、La pilates 仙台店、Repilates 仙台泉大沢店はすべて女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。',
  },
  {
    question: '体験レッスンはありますか？料金はいくらですか？',
    answer: 'ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 仙台PARCO2店とRepilates 仙台泉大沢店は無料、La pilates 仙台店は3,000円、zen place pilates 仙台やその他スタジオは要問合せです。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは何ですか？',
    answer: 'マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で行い、体幹を鍛えるのに効果的。初心者にはマシンピラティスがおすすめです。',
  },
  {
    question: 'どのくらいの期間で効果が出ますか？',
    answer: '週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。',
  },
  {
    question: '肩こりや腰痛の改善に効果はありますか？',
    answer: 'はい、効果が期待できます。特にLa pilates 仙台店は整体とピラティスを組み合わせた独自プログラムで肩こり・腰痛を根本から改善。ピラティススタジオDEP 仙台店 Calmは理学療法士監修で姿勢・歪み改善に特化しています。',
  },
  {
    question: '運動が苦手でも大丈夫ですか？',
    answer: 'はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので、正しいフォームで効果的にトレーニングできます。',
  },
  {
    question: '資格を取得したいのですが、養成コースはありますか？',
    answer: 'はい、REborn（リボーン）で資格取得コースを開講しています。2018年に宮城県初のピラティス専門サロンとしてオープンし、1,000人以上の方の身体と向き合ってきた実績があります。体験レッスンから資格取得まで幅広く対応しています。',
  },
]

export default function SendaiAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '仙台', url: 'https://pilates-biyori.com/area/sendai/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月24日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス仙台おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">仙台</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="仙台" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「仙台で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、仙台エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>仙台でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>仙台駅やJR東北本線沿線で通いたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>地下鉄南北線・一番町エリアが便利</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>青葉通り周辺で体験レッスンを受けたい</span>
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

        <PriceComparisonTable studios={studios} areaName="仙台" />
        <AreaMarketComparison studios={studios} areaName="仙台" />

        {/* Studios List */}

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              仙台のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">5,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,625円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              仙台エリアでは全国チェーンのスタジオに加え、地元密着型のスタジオも選べます。冬場は通いづらくなりがちなため、駅直結や駅近のスタジオを選ぶと継続率がアップします。月額制なら冬場の運動不足解消にも効果的です。近隣の大宮エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              仙台でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">地下鉄東西線「仙台駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  仙台エリアのスタジオは仙台駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。仙台駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">冬場の通いやすさも考慮したスタジオ選びを</h3>
                <p className="text-warm-600 leading-relaxed">
                  仙台は冬の寒さが厳しいエリアのため、駅からの距離は特に重要なポイントです。駅直結や地下街直結のスタジオなら悪天候でも通いやすく、継続率がぐんと上がります。冬場は体が冷えているため、レッスン前のウォームアップを丁寧にしてくれるスタジオだと安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  仙台エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  仙台エリアだけでなく、近隣の<Link href="/area/omiya/" className="text-warm-700 underline hover:text-warm-900">大宮</Link>、<Link href="/area/sapporo/" className="text-warm-700 underline hover:text-warm-900">札幌</Link>、<Link href="/area/niigata/" className="text-warm-700 underline hover:text-warm-900">新潟</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>仙台エリアの豆知識：</strong>仙台は冬場の気温が低いため、スタジオまでの移動中に体が冷えないよう防寒着を用意しましょう。レッスン後は汗をかいた状態で外に出ると体が冷えやすいので、着替え用のインナーを1枚多めに持参するのがおすすめです。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              仙台のおすすめピラティススタジオ8選
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">音楽×暗闇で楽しく</h3>
                <p className="text-warm-600 text-sm mb-4">
                  音楽に合わせて楽しくボディメイクしたい方に。暗闇レッスンで周りの目を気にせず集中できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 仙台PARCO2店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">整体・理学療法士監修</h3>
                <p className="text-warm-600 text-sm mb-4">
                  肩こり・腰痛を根本から改善したい方に。専門知識に基づいた確かな指導が受けられます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates 仙台店</li>
                  <li className="text-warm-700">• ピラティススタジオDEP 仙台店 Calm</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  仙台駅から徒歩5分以内。仕事帰りやお買い物ついでに通いやすい好立地なスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 仙台（駅徒歩3分）</li>
                  <li className="text-warm-700">• ピラティスK 仙台PARCO2店（駅徒歩4分）</li>
                  <li className="text-warm-700">• La pilates 仙台店（駅徒歩4分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide - 期間・頻度 */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide - 予算別 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。初心者向けの基本的なレッスンが多い。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 仙台（9,625円）</li>
                  <li>• Repilates（キャンペーン5,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・プライベート選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円）</li>
                  <li>• La pilates（12,000円）</li>
                  <li>• zen place マシン（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place プライベート（33,880円）</li>
                  <li>• La pilates 月4回（40,000円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose - 選び方 */}
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、肩こり・腰痛の改善など、目的によって最適なスタジオやプログラムは変わります。仙台には整体融合型やマンツーマン専門など多様なスタジオがあるので、目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  仙台エリアの料金相場は月4回で9,625円〜40,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。仙台では無料〜3,000円程度で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。仙台駅周辺、JR東北本線沿線、地下鉄南北線沿線、一番町・青葉通りエリアなど、自宅や職場から通いやすい場所を選ぶのがおすすめ。営業時間も要チェックです。
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
              今回は仙台のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              仙台には、音楽×暗闇のピラティスK、整体×ピラティスのLa pilates、全国展開のzen place、LAVA運営のRintosull、マンツーマン専門のREborn、理学療法士監修のDEPなど、多様なスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では仙台に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              href="#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="sendai" areaName="仙台" />

      <RelatedAreas currentSlug="sendai" />
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
                item: 'https://pilates-biyori.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'エリアから探す',
                item: 'https://pilates-biyori.com/area',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '仙台',
                item: 'https://pilates-biyori.com/area/sendai',
              },
            ],
          }),
        }}
      />
    </>
  )
}
