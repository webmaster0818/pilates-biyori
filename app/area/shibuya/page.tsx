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
  alternates: { canonical: 'https://biyori-pilates.com/area/shibuya/' },
  title: '渋谷のピラティス12社を比較｜無料体験3社・月額最安4,400円〜',
  description: '渋谷エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,渋谷,東京,スタジオ,おすすめ,マシンピラティス,パーソナル,女性専用,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 渋谷',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp', reviewCount: 14,
    price: '月4回 9,625円〜', trial: '体験レッスンあり',
    features: ['マットグループ', 'MIYASHITA PARK正面5F', '男性利用可', '全国140スタジオ他店利用可'],
    description: '全国140スタジオ以上を展開するzen placeの渋谷スタジオです。MIYASHITA PARK正面5Fに位置し、マットピラティスとマシンピラティスの両方が受けられる総合型スタジオです。男性も利用可能で、月4回9,625円〜とリーズナブルです。全国のzen placeスタジオを他店利用できるのも大きな魅力です。',
    access: 'MIYASHITA PARK正面 5F',
    address: '東京都渋谷区渋谷1丁目23-18 渋谷ワールドイーストビル 5階',
    popularPlan: { name: 'マットグループ月4回プラン', description: 'マット・マシン両対応です。全国140スタジオ他店利用可能です。', price: '月4回 9,625円（税込）〜' },
    options: ['月4回プラン（9,625円〜）', '月6回プラン', 'フリー（通い放題）プラン', 'プライベートレッスン追加'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リラックス'] },
    basicInfo: { hours: '平日 7:00〜22:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['マットスタジオ', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ピラティスK 渋谷店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp', reviewCount: 107,
    price: '月4回 11,220円〜', trial: '体験レッスンあり',
    features: ['女性専用マシングループ', '月4回11,220円〜', 'ボディメイク特化', '渋谷駅近'],
    description: '女性専用のマシンピラティス専門グループレッスンスタジオです。全国展開の実績あるスタジオで、ボディメイクに特化したプログラムが豊富です。月4回11,220円〜のリーズナブルな価格設定です。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回メンバー', description: 'ボディメイク特化の女性専用マシングループです。', price: '月4回 11,220円（税込）〜' },
    options: ['月4回メンバー（11,220円〜）', '月8回メンバー', '通い放題メンバー', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['リフォーマーマシン', 'パウダールーム', 'ロッカー', '更衣室'] },
  },
  {
    name: 'Rintosull 渋谷',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp', reviewCount: 82,
    price: '月4回 8,800円〜', trial: '体験レッスンあり',
    features: ['男女共用', 'LAVA渋谷店内', '月4回8,800円〜', 'スクリーン指導'],
    description: 'LAVA渋谷店内のマシンピラティススタジオで、公式の店舗ページでは「男女共用」と案内されています。大型スクリーンの映像とインストラクターのダブル指導で、正しいフォームを習得できる独自メソッドです。月4回8,800円〜と渋谷エリア最安クラスの価格設定です。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区道玄坂2-23-12フォンティスビル6F',
    popularPlan: { name: '月4回プラン', description: 'LAVA系列のマシンピラティス（男女共用）です。スクリーン+インストラクターのダブル指導です。', price: '月4回 8,800円（税込）〜' },
    options: ['月4回プラン（8,800円〜）', '月8回プラン', '通い放題プラン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '男女共用（公式の店舗ページ表記）', purpose: ['ダイエット', '姿勢改善', 'ボディメイク', '運動不足解消'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['リフォーマーマシン', '大型スクリーン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'STUDIO IVY 渋谷',
    image: '/images/studios/studio-ivy.webp', reviewCount: 566,
    price: '月2回 15,000円〜', trial: '体験レッスンあり',
    features: ['完全個室パーソナル', '月2回15,000円〜', 'マンツーマン指導', 'オーダーメイドプログラム'],
    description: '完全個室のパーソナルピラティススタジオです。一人ひとりの体の状態や目標に合わせたオーダーメイドプログラムを提供しています。月2回15,000円〜で、プライベートな空間で本格的なマシンピラティスが受けられます。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月2回プラン', description: '完全個室のパーソナルマシンピラティスです。', price: '月2回 15,000円（税込）〜' },
    options: ['月2回プラン（15,000円〜）', '月4回プラン', '月8回プラン', '体験レッスン'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性70% / 男性30%', purpose: ['姿勢改善', '腰痛改善', 'ボディメイク', 'パフォーマンス向上'] },
    basicInfo: { hours: '平日 8:00〜22:00 / 土日祝 8:00〜20:00', closed: '不定休', facilities: ['完全個室', 'リフォーマーマシン', '各種ピラティス器具', '更衣室'] },
  },
  {
    name: 'ELEMENT 渋谷',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp', reviewCount: 85, /* ※GoogleMaps未確認 */
    price: '月4回 22,000円', trial: '体験レッスンあり',
    features: ['マンツーマン30分', '月4回22,000円', '短時間集中', '効率重視'],
    description: 'マンツーマン30分の短時間集中型ピラティススタジオです。忙しい方でも効率よくトレーニングできます。月4回22,000円で、パーソナルならではの丁寧な指導が受けられます。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: 'マンツーマン30分の短時間集中パーソナルです。', price: '月4回 22,000円（税込）' },
    options: ['月4回プラン（22,000円）', '月8回プラン', '体験レッスン'],
    userProfile: { ageRange: '30代〜40代が中心', genderRatio: '女性65% / 男性35%', purpose: ['ボディメイク', '運動不足解消', '体幹強化', '姿勢改善'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['パーソナルスペース', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ピラティスミラー 渋谷',
    image: '/images/studios/pilates-mirror.webp', reviewCount: 65, /* ※GoogleMaps未確認（全店舗平均4.5） */
    price: 'プライベート30分 4,400円〜', trial: '体験レッスンあり',
    features: ['女性専用', 'プライベート30分4,400円〜', '都度払い可', 'リーズナブル'],
    description: '女性専用のピラティススタジオです。プライベートレッスン30分4,400円〜と、パーソナルピラティスとしてはリーズナブルな価格設定です。短時間で効率よくトレーニングしたい女性におすすめです。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'プライベート30分', description: '女性専用のマンツーマンレッスンです。', price: 'プライベート30分 4,400円（税込）〜' },
    options: ['プライベート30分（4,400円〜）', '月額プラン', '回数券', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['プライベートスペース', 'ピラティス器具', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'] },
  },
  {
    name: 'YUZU 渋谷',
    image: '/images/studios/yuzu-pilates.webp', reviewCount: 50, /* ※reviewCount GoogleMaps未確認 */
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['パーソナルマシン', '女性専用', 'オーダーメイド', '丁寧な指導'],
    description: '女性専用のパーソナルマシンピラティススタジオです。一人ひとりの体の状態に合わせたオーダーメイドプログラムを提供しています。マシンを使ったマンツーマン指導で効果的なトレーニングが可能です。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'パーソナルプラン', description: '女性専用マシンパーソナルピラティスです。', price: 'お問い合わせ' },
    options: ['パーソナルプラン', '回数券', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', '体質改善', '美容'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['パーソナルスペース', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'NATURAglam 渋谷（近隣）',
    image: '/images/studios/naturaglam.webp', reviewCount: 60, /* ※GoogleMaps未確認（全店舗評価4.4） */
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['女性専用', 'ヨガ&ピラティス', '少人数制', '渋谷近隣'],
    description: '女性専用のヨガ&ピラティススタジオです。渋谷近隣エリアに位置し、少人数制でアットホームな雰囲気が魅力です。ヨガとピラティスの両方を楽しめるので、気分や目的に合わせてレッスンを選べます。',
    access: '渋谷近隣エリア',
    address: '東京都渋谷区（渋谷近隣）',
    popularPlan: { name: 'レギュラープラン', description: '女性専用のヨガ&ピラティスです。少人数制です。', price: 'お問い合わせ' },
    options: ['月額プラン', '回数券', 'ヨガクラス', 'ピラティスクラス', '体験レッスン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['リラックス', '柔軟性向上', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['スタジオ', 'ヨガマット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'CALDO 渋谷',
    image: '/images/studios/caldo.webp', reviewCount: 114,
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '温熱環境', '施設充実', '渋谷駅近'],
    description: 'ホットヨガ&ピラティスの総合スタジオです。温かい環境でのピラティスは体がほぐれやすく効果的です。ホットヨガとピラティスを組み合わせたプログラムで、デトックスとボディメイクを同時に実現しています。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'レギュラープラン', description: 'ホットヨガ&ピラティスの総合プランです。', price: 'お問い合わせ' },
    options: ['月額プラン', '通い放題プラン', 'ホットヨガクラス', 'ピラティスクラス', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性85% / 男性15%', purpose: ['デトックス', 'ダイエット', '冷え性改善', 'ボディメイク'] },
    basicInfo: { hours: '平日 10:00〜22:30 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['ホットスタジオ', 'ピラティススタジオ', 'ジムエリア', 'ロッカー', '更衣室'] },
  },
  {
    name: 'Dr.ピラティス 渋谷店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 無料（入会金も0円・公式の店舗ページ表示・2026年10月23日確認）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオです。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せます。渋谷エリアです（詳細は公式サイト参照）。',
    access: '渋谷エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
  {
    name: 'the SILK 渋谷店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 15,280円 / 通い放題 22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴です。渋谷駅から徒歩2分です（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '渋谷駅から徒歩2分',
    address: '東京都渋谷区神南1丁目11-1 渋谷市野ビル6階',
  },
  {
    name: '24/7ピラティス 渋谷・南青山店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=J11817X.1.B1620582.U1357808',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらで参加可能）',
    features: ['マシンピラティス', '女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオです。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供しています。渋谷駅から徒歩7分です。※一部のご案内やサポート対応は、男性スタッフが行う場合がございます。※24/7Workout併設店舗のため、パーソナルトレーニングの男性会員様がご来店される場合もございます。',
    access: '渋谷駅から徒歩7分',
    address: '東京都渋谷区渋谷2丁目6-12 ベルデ青山1F',
    popularPlan: {
      name: '月4回プラン',
      description: '完全個室でマシンを使ったマンツーマン指導しています。入会金不要の月謝制です。',
      price: '月4回 27,000円〜（税込）',
    },
    options: [
      'なし',
    ],
    userProfile: {
      ageRange: '20代〜50代と幅広い',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '健康維持'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年中無休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。渋谷エリアのスタジオはレベル別クラスがあり初心者も安心です。Rintosullはスクリーン指導で初心者に特におすすめです。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用リフォーマーを使ったトレーニングです。マシンは初心者でもフォームが安定しやすくおすすめです。渋谷エリアはマシン専門スタジオが豊富です。' },
  { question: '渋谷エリアの料金相場は？', answer: 'グループ月4回で8,800円〜15,280円が相場です。Rintosullは8,800円〜で最安クラス、zen placeは9,625円〜です。パーソナルはピラティスミラーの30分4,400円〜が手頃です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回から始めることをおすすめします。慣れたら週2〜3回に増やすとより効果的です。ELEMENTの30分レッスンであれば、忙しい方も週2回は続けることができます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がり太りにくい体質づくりにつながります。最低2〜3ヶ月は継続することをおすすめします。CALDOのホット環境なら発汗効果も期待できます。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。ウェアレンタルを用意しているスタジオもあります。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心です。NATURAglam渋谷なら両方受けられます。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilates渋谷、ELEMENT渋谷は男性も利用可能です。Rintosull 渋谷店（LAVA渋谷店内）も公式の店舗ページで「男女共用」と案内されています。the SILK、ピラティスK、ピラティスミラー、YUZU、NATURAglam は女性専用です。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。週2回なら1ヶ月半ほどで変化を感じる方もいます。パーソナルレッスンの方が、より早く効果を実感しやすくなります。' },
  { question: '無料体験ができるスタジオはありますか？', answer: 'zen placeやthe SILKなどが体験レッスンを用意しています。まずは体験レッスンへの参加をおすすめします。' },
]

export default function ShibuyaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '渋谷', url: 'https://biyori-pilates.com/area/shibuya/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス渋谷おすすめ12選<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較
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
              <span className="text-warm-600">渋谷</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="渋谷" />


        <TableOfContents areaName="渋谷" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、JR山手線・東急東横線・東京メトロ銀座線・半蔵門線が乗り入れる渋谷駅周辺でおすすめのピラティススタジオ12選をまとめました。MIYASHITA PARKや渋谷スクランブルスクエアなど商業施設が集まる渋谷エリアは、仕事帰りや買い物ついでにも通いやすいピラティススタジオが多いエリアです。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>渋谷でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>女性専用スタジオに通いたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスやパーソナルを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較して選びたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>グループ・パーソナルどちらが良いか迷っている</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="渋谷" />
        <AreaMarketComparison studios={studios} areaName="渋谷" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              渋谷のおすすめピラティススタジオ12選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
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
                  月額1万円以下から通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• <a href="#studio-7" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">Rintosull</a>（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• <a href="#studio-1" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">zen place pilates</a>（月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用で安心</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの空間で集中して取り組めます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• <a href="#studio-4" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">the SILK</a>（音楽×マシン）</li>
                  <li className="text-warm-700">• <a href="#studio-6" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスK</a>（マシングループ）</li>
                  <li className="text-warm-700">• <a href="#studio-9" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスミラー</a>（プライベート30分4,400円〜）</li>
                  <li className="text-warm-700">• YUZU（パーソナルマシン）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナルで本格的に</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効率よく取り組めます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• <a href="#studio-8" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">STUDIO IVY</a>（完全個室・月2回15,000円〜）</li>
                  <li className="text-warm-700">• <a href="#studio-2" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ELEMENT</a>（30分集中・月4回22,000円）</li>
                  <li className="text-warm-700">• <a href="#studio-9" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスミラー</a>（30分4,400円〜）</li>
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
              <h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月で効果を実感できます。グループレッスンで基礎を身につけることをおすすめします。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。パーソナルとグループの併用も効果的です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。ELEMENTの30分レッスンであれば、忙しい方でも続けることができます。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">リーズナブル</p>
                <p className="text-sm text-warm-600 mb-4">
                  月4回で1万円以下のプランです。グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• <a href="#studio-7" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">Rintosull</a>（月4回 8,800円〜）</li>
                  <li>• <a href="#studio-1" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">zen place pilates</a>（月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">スタンダード</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシンピラティスの選択肢が充実しています。選択肢が豊富です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• <a href="#studio-6" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスK</a>（月4回 11,220円〜）</li>
                  <li>• <a href="#studio-8" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">STUDIO IVY</a>（月2回 15,000円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル重視</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">本格派</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導で効率よく取り組めます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• <a href="#studio-9" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスミラー</a>（30分 4,400円〜）</li>
                  <li>• <a href="#studio-2" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ELEMENT</a>（月4回 22,000円）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的に応じてお選びください。ボディメイク重視ならピラティスK、楽しさ重視ならthe SILKがおすすめです。パーソナルで集中したいならSTUDIO IVYやELEMENTをご検討ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  渋谷エリアのグループ月4回は8,800円〜15,280円が相場です。パーソナルはピラティスミラーの30分4,400円〜が手頃です。体験レッスンを活用して、無理なく続けられる価格帯を見つけることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeやthe SILKが体験レッスンを用意しています。複数のスタジオを体験して比較するのがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  渋谷はJR山手線・東急東横線・東京メトロ銀座線・半蔵門線など複数路線が利用可能な東京を代表するターミナル駅です。MIYASHITA PARKや渋谷スクランブルスクエア周辺にスタジオが集中しており、仕事帰りや休日にもアクセスしやすいエリアです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              渋谷のピラティス料金相場
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                渋谷エリアは東京都内でもピラティススタジオが多いエリアのひとつで、スタジオ数が多い分、料金競争が進んでおり比較的リーズナブルに通えるのが特徴です。料金相場は以下の通りです。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">8,800円〜15,280円</p>
                  <p className="text-sm text-warm-600">最安はRintosull（LAVA系列）の月4回8,800円です。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">パーソナルレッスン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">4,400円〜22,000円</p>
                  <p className="text-sm text-warm-600">ピラティスミラーは30分4,400円〜と都内最安クラスです。STUDIO IVYは月2回15,000円〜、ELEMENTは30分集中型で月4回22,000円です。目的に応じてお選びください。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は5,000円〜33,000円が相場ですが、キャンペーン期間中は無料になるスタジオもあります。体験レッスンは、the SILK・Dr.ピラティス・24/7ピラティスが無料、zen place がマットグループ初回1,000円（今だけ）です（2026年10月25日公式確認）。まずは体験レッスンで雰囲気を確認するのがおすすめです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              渋谷でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">渋谷駅の出口選びが重要</h3>
                <p className="text-warm-600 leading-relaxed">
                  渋谷駅はJR・東急・東京メトロ・京王と複数路線が交わる巨大ターミナルです。出口によってはスタジオまで10分以上かかることもあります。zen place pilatesはMIYASHITA PARK正面、the SILKは渋谷駅徒歩2分と、スタジオごとに最寄り出口が異なるため、自分の利用路線に合わせてアクセスを事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ピーク時間帯の混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  渋谷は平日夜19時〜21時、土日午前中がレッスン予約の激戦帯です。特に人気スタジオのthe SILKやピラティスKは早めの予約が必須です。逆に平日午前中は比較的空いており、フリーランスの方や主婦の方には比較的予約を取りやすい時間帯です。予約の取りやすさもスタジオ選びの大切なポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">最低契約期間とキャンセルポリシーを確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  スタジオによっては入会キャンペーン適用時に3〜6ヶ月の最低契約期間が設定されていることがあります。また、レッスンの直前キャンセルに関するルール（何時間前まで無料キャンセル可能か）もスタジオごとに異なります。入会前に必ずご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">グループとパーソナルの使い分け</h3>
                <p className="text-warm-600 leading-relaxed">
                  渋谷エリアはグループ専門（ピラティスK、Rintosull）からパーソナル専門（STUDIO IVY、ELEMENT）まで選択肢が豊富です。初心者はまずグループレッスンで基礎を身につけ、慣れてきたらパーソナルで弱点を集中的に改善するのが効率的です。zen placeは両方に対応しているので、併用したい方におすすめです。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。ジーンズやスカートは適していません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。自動販売機がないスタジオもあるため、持参をおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されている場合が一般的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、靴下の着用が必須のスタジオが多数あります。グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは脚を大きく動かすエクササイズが多いため、伸縮性のある素材が適しています。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。the SILKやピラティスKは手ぶら体験も可能です。仕事帰りに渋谷で体験したい方は事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>渋谷エリアの豆知識：</strong>渋谷駅周辺は着替えスペースが限られるスタジオもあるため、なるべくレッスンウェアを着た状態で来店するか、上から羽織れるアウターを用意すると効率的です。MIYASHITA PARKや渋谷ヒカリエのロッカーを活用する常連さんもいます。
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
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は渋谷のおすすめピラティススタジオ12選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              渋谷はJR山手線・東急東横線・東京メトロ銀座線・半蔵門線など複数路線が乗り入れる東京を代表するターミナル駅です。若者の街として知られる渋谷区には、MIYASHITA PARK正面のzen place pilates、音楽×マシンのthe SILK、月4回8,800円〜のRintosull、完全個室のSTUDIO IVY、30分集中のELEMENTなど、個性豊かなスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              グループレッスンからパーソナルまで、女性専用から男性利用可まで、幅広い選択肢があるのが渋谷エリアの魅力です。本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、スタジオ選びの参考になれば幸いです。
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
              zen placeやthe SILKが体験レッスンを用意しています。<br />
              まずは体験レッスンへの参加をおすすめします。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
              <AreaModifierSections studios={studios} areaName="渋谷" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/yoyogi-uehara/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">代々木上原</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="shibuya" areaName="渋谷" />

      <RelatedAreas currentSlug="shibuya" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
