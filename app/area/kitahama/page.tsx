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
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/kitahama/' },
  title: '【2026年8月最新】北浜・淀屋橋のピラティス6社を比較｜無料体験2社・月額最安10,450円〜',
  description: '北浜・淀屋橋のピラティススタジオ6社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,北浜,淀屋橋,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ビーキューブ（B-Cube）',
    image: '/images/studios/bbbcube-kitahama.webp',
    price: '都度利用制',
    trial: '無料コンサルティング（要確認）',
    features: ['北浜駅徒歩3分', '西日本最大級', '姿勢分析機器完備', '本格指導'],
    description: '西日本最大級のピラティス専門スタジオ。北浜駅から徒歩3分。ピラティス専用の大型器具や姿勢分析の機械が豊富に揃い、開放感のあるスタジオと充実した施設を備えています。都度利用制で自分のペースで通えます。',
    access: '大阪メトロ堺筋線「北浜駅」徒歩3分 / 大阪メトロ御堂筋線「淀屋橋駅」徒歩7分',
    address: '大阪府大阪市中央区伏見町2丁目6-6',
    popularPlan: {
      name: '都度利用プラン',
      description: 'ピラティス専用大型器具を使った本格レッスン。自分のペースで通える都度利用制。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '無料コンサルティング（空き状況による）',
      'マットピラティスレッスン',
      'マシンピラティスレッスン',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', '姿勢分析機器'],
    },
  },
  {
    name: 'Pilates Bodywork Studio 大阪北浜淀屋橋本店',
    image: '/images/studios/pilates-bodywork-kitahama.webp',
    price: '月額制（詳細は公式サイト）',
    trial: '入会金・初月度無料キャンペーンあり',
    features: ['北浜駅徒歩1分', '豊富なマシン', '平日22時まで', '全国展開'],
    description: '北浜駅から徒歩1分の好立地。キャデラック、リフォーマー、シルクサスペンション、マスターストレッチなど、すべてを揃えたスタジオは日本でもまだまだ珍しく、様々な年代や運動レベルに対応。東京日本橋・京都四条烏丸・名古屋栄伏見にも展開。',
    access: '大阪メトロ堺筋線「北浜駅」徒歩1分 / 大阪メトロ御堂筋線「淀屋橋駅」徒歩5分',
    address: '大阪府大阪市中央区伏見町2-3-9 TAG北浜ビル2階',
    popularPlan: {
      name: 'リフォーマーグループレッスン',
      description: '少人数制のリフォーマーグループレッスン。多彩なマシンを使った本格指導。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '入会金・初月度無料キャンペーン（4か月継続条件）',
      'リフォーマーグループレッスン',
      'プライベートレッスン',
      'シルクサスペンションレッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '柔軟性向上'],
    },
    basicInfo: {
      hours: '月〜金 10:00〜22:00 / 土日 10:00〜19:00',
      closed: '不定休',
      facilities: ['キャデラック', 'リフォーマー', 'シルクサスペンション', 'マスターストレッチ', 'マット'],
    },
  },
  {
    name: 'ピラティススタジオ進化',
    image: '/images/studios/studio-shinka-kitahama.webp',
    price: '月4回 17,160円',
    trial: '体験レッスンあり（要問合せ）',
    features: ['北浜駅徒歩3分', '姿勢改善特化', '定員6名', 'リフォーマーグループ'],
    description: '北浜駅から徒歩3分。全国でも希少なリフォーマーのグループレッスンを提供する姿勢改善特化型ピラティス専門スタジオ。定員6名の少人数制で、50分で姿勢を変えるプログラムが特徴。',
    access: '大阪メトロ堺筋線「北浜駅」徒歩3分',
    address: '大阪府大阪市中央区北浜（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月謝制（月4回）',
      description: '定員6名の少人数リフォーマーグループレッスン。姿勢改善に特化。',
      price: '月4回 17,160円（税込）',
    },
    options: [
      '月謝制（月4回 17,160円）',
      '都度利用（1回 6,600円）',
      '入会金 22,000円（先着5名 9,900円）',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', '腰痛改善', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室'],
    },
  },
  {
    name: 'Ua pilates 北浜（韓国式ピラティス）',
    image: '/images/studios/ua-pilates-kitahama.webp',
    price: 'パーソナル制（詳細は公式サイト）',
    trial: '初回体験 6,000円',
    features: ['女性限定', '北浜駅徒歩3分', '韓国式ピラティス', 'バレエ×ピラティス'],
    description: '北浜駅から徒歩3分の韓国式ピラティススタジオ。女性限定。本場韓国の難関国際資格保有インストラクターによる「姿勢分析×体型分析」で、Ua独自メソッド「ballet × pilates」を提供。しなやかな韓国人ボディを目指せます。',
    access: '大阪メトロ堺筋線「北浜駅」徒歩3分 / 大阪メトロ御堂筋線「淀屋橋駅」徒歩8分 / 大阪メトロ各線「本町駅」徒歩12分',
    address: '大阪府大阪市中央区平野町2丁目2-8 イシモトビル9F',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '韓国式ピラティスのパーソナルレッスン。姿勢分析×体型分析付き。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '初回体験 6,000円',
      'パーソナルレッスン',
      '姿勢分析×体型分析',
      'ballet × pilatesメソッド',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性限定）',
      purpose: ['ボディメイク', '姿勢改善', '美脚', 'しなやかな体づくり'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'パウダールーム'],
    },
  },
  {
    name: 'zen place pilates 南森町',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国相互利用', '男性OK', '大手の安心感', 'コスパ良好'],
    description: 'ピラティス専門の大手スタジオ。北浜・淀屋橋エリアから近い南森町に位置。全国150店舗以上で相互利用可能。マットグループ・マシングループ・プライベートの3タイプのレッスン。体験当日入会で入会金無料。',
    access: '大阪メトロ谷町線・堺筋線「南森町駅」徒歩すぐ / 「北浜駅」から電車で約5分',
    address: '大阪府大阪市北区（詳細は公式サイトでご確認ください）',
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
    name: 'SHIN pilates studio 堺筋本町店',
    image: '/images/studios/shin-pilates.webp',
    price: '月額制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['堺筋本町駅近く', 'グループ&プライベート', '少人数制', 'アットホーム'],
    description: '北浜・淀屋橋エリアから近い堺筋本町に位置するピラティススタジオ。グループレッスンとプライベートレッスンの両方を提供。少人数制の丁寧な指導で、初心者から経験者まで対応。',
    access: '大阪メトロ堺筋線・中央線「堺筋本町駅」徒歩すぐ / 「北浜駅」から電車で約3分',
    address: '大阪府大阪市中央区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン',
      description: '少人数制のリフォーマーグループレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '体験レッスン',
      'マットレッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '運動不足解消'],
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
    question: '淀屋橋の近くにピラティススタジオはありますか？',
    answer: 'あります。北浜駅と淀屋橋駅は徒歩数分の隣接エリアで、このページで比較しているスタジオはどちらの駅からも通えます。たとえば「Pilates Bodywork Studio 大阪北浜淀屋橋本店」は北浜・淀屋橋の両エリアを商圏とし、リフォーマーを使ったグループレッスンに対応しています。「淀屋橋 ピラティス」で探している方も、北浜エリアのスタジオを候補に料金・体験レッスンを比較するのがおすすめです。',
  },
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！北浜・淀屋橋エリアのスタジオはほとんどが初心者歓迎。ビーキューブは姿勢分析からスタート、ピラティススタジオ進化は定員6名の少人数制で安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。北浜エリアはマシンピラティス専門スタジオが充実しています。',
  },
  {
    question: '北浜・淀屋橋のピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜17,160円程度。zen place南森町が月4回10,450円〜で最もリーズナブル。ピラティススタジオ進化は月4回17,160円。パーソナル中心のスタジオは1回6,000円〜が目安です。',
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
    answer: '動きやすい服装と飲み物があればOK。zen placeはグループ体験1,000円、Ua pilatesは初回体験6,000円で受けられます。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place南森町、ビーキューブ、Pilates Bodywork Studio、ピラティススタジオ進化、SHIN pilatesは男性も通えます。Ua pilatesは女性限定です。',
  },
  {
    question: '仕事帰りに通えるスタジオは？',
    answer: 'Pilates Bodywork Studioは平日22時まで営業。zen placeも平日21時まで。北浜・淀屋橋はオフィス街なので仕事帰りに通いやすいスタジオが多いです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KitahamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '北浜・淀屋橋', url: 'https://pilates-biyori.com/area/kitahama/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年6月最新】ピラティス北浜・淀屋橋おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">北浜・淀屋橋</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="北浜・淀屋橋" />


        <TableOfContents areaName="北浜・淀屋橋" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「北浜・淀屋橋で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、北浜・淀屋橋エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>北浜・淀屋橋でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>オフィス街で仕事帰りに通えるスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="北浜・淀屋橋" />
        <AreaMarketComparison studios={studios} areaName="北浜・淀屋橋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              北浜・淀屋橋のおすすめピラティススタジオ6選
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
              北浜・淀屋橋のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜17,160円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 10,450円〜17,160円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜6,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              北浜・淀屋橋はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。近隣の本町エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="yodoyabashi">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">
              淀屋橋駅周辺でピラティスを探すなら
            </h2>
            <p className="text-warm-600 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              北浜駅と淀屋橋駅は御堂筋・土佐堀通をはさんで隣接する徒歩数分のエリアで、スタジオはどちらの駅からも通える距離に集まっています。「淀屋橋 ピラティス」「淀屋橋駅 ピラティス」で探している場合も、このページで比較している北浜・淀屋橋エリアのスタジオがそのまま候補になります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">北浜・淀屋橋の両方から通えるスタジオ</h3>
                <p className="text-warm-600 leading-relaxed">
                  「Pilates Bodywork Studio 大阪北浜淀屋橋本店」は店名のとおり北浜・淀屋橋の両エリアを商圏とするスタジオで、リフォーマーを使ったグループレッスンに対応しています。淀屋橋駅から通う場合も、北浜駅から通う場合も徒歩圏内。ビジネス街の立地で、仕事帰りに通いやすいのが特徴です。
                </p>
              </div>
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">淀屋橋エリアで選ぶポイント</h3>
                <p className="text-warm-600 leading-relaxed">
                  淀屋橋・北浜はオフィスワーカーが多いエリアのため、朝や仕事帰りの時間帯に予約が集中しやすい傾向があります。通いたい時間帯にレッスン枠があるか、マシン（リフォーマー）中心かマット中心か、体験レッスンの料金を、北浜エリアのスタジオとあわせて比較するのがおすすめです。
                </p>
              </div>
            </div>
            <p className="text-center mt-8">
              <a href="#studios" className="inline-block bg-warm-800 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-warm-900 transition">北浜・淀屋橋のスタジオを料金で比較する</a>
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              北浜・淀屋橋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">大阪メトロ堺筋線「北浜駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋エリアのスタジオは北浜駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。北浜駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋エリアだけでなく、近隣の<Link href="/area/honmachi/" className="text-warm-700 underline hover:text-warm-900">本町</Link>、<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>、<Link href="/area/shinsaibashi/" className="text-warm-700 underline hover:text-warm-900">心斎橋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>北浜・淀屋橋エリアの豆知識：</strong>北浜・淀屋橋はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                  <li className="text-warm-700">• zen place 南森町（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティススタジオ進化（月4回 17,160円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・女性限定</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Ua pilates（韓国式・女性限定）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  北浜駅から徒歩3分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Bodywork Studio（徒歩1分）</li>
                  <li className="text-warm-700">• ビーキューブ（徒歩3分）</li>
                  <li className="text-warm-700">• ピラティススタジオ進化（徒歩3分）</li>
                  <li className="text-warm-700">• Ua pilates（徒歩3分）</li>
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
                  <li>• zen place 南森町（10,450円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜18,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  少人数制マシンレッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティススタジオ進化（17,160円）</li>
                  <li>• zen place 通い放題（16,940円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1回 6,000円〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマンで集中指導。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Ua pilates（初回体験 6,000円）</li>
                  <li>• ピラティススタジオ進化（都度 6,600円）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。北浜エリアは姿勢改善に特化したスタジオが多いのが特徴です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋の料金相場はグループ月4回で10,450円〜17,160円。パーソナルは1回6,000円〜。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeは1,000円で体験可能。Ua pilatesは初回体験6,000円。Pilates Bodywork Studioは入会金・初月度無料キャンペーンあり。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋は大阪のビジネス街。堺筋線・御堂筋線が通り、Pilates Bodywork Studioは北浜駅徒歩1分、ビーキューブ・進化・Uaも徒歩3分とアクセス抜群です。
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
              今回は北浜・淀屋橋エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では北浜・淀屋橋にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン1,000円〜6,000円。<br />
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
              <AreaModifierSections studios={studios} areaName="北浜・淀屋橋" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kitahama" areaName="北浜・淀屋橋" />

      <RelatedAreas currentSlug="kitahama" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
