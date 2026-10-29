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
  alternates: { canonical: 'https://biyori-pilates.com/area/akasaka/' },
  title: '赤坂のピラティスおすすめ6選｜赤坂見附駅30秒・赤坂駅30秒の店も徒歩分と体験料金で比較',
  description: '赤坂 ピラティスを探す方へ。the SILK・zen place・STUDIO IVY・noa・Studio-BMP に、ena・Lume Pilates も加えて赤坂見附・赤坂・溜池山王の3駅からの徒歩分、体験料金、営業時間・定休日を早見表で比較（2026年10月25〜26日に各公式ページで確認）。',
  keywords: 'ピラティス,赤坂,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 赤坂',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'マットグループ体験 1,000円（今だけの体験価格・通常3,300円〜）/ マシングループ体験 3,000円（初回キャンペーン）',
    features: ['マシン完備', '男性利用可', '赤坂見附駅徒歩3分', '全国他店利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオです。赤坂見附駅10番出口から徒歩3分、赤坂駅1番出口から徒歩4分の好立地です。窓が大きく明るい開放的なスタジオで、各種ピラティスマシンを完備しています。世界レベルの資格と豊富な経験を持つエデュケーターが、初心者から経験者まで幅広いレッスンを提供しています。男性も受講可能です。',
    access: '東京メトロ銀座線・丸ノ内線「赤坂見附駅」10番出口 徒歩3分 / 千代田線「赤坂駅」1番出口 徒歩4分 / 銀座線・南北線「溜池山王駅」10番出口 徒歩6分',
    address: '東京都港区赤坂3丁目7-13 HMビル 5階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスンです。初心者から経験者まで対応しています。全国のzen placeスタジオで他店利用可能です。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      'マットグループフリー（月額16,940円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'リフォーマーグループ月8回（月額25,300円）',
      'プライベート月4回（月額38,280円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の80%）',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:45〜21:00 / 土日祝 9:00〜16:30',
      closed: '公式に記載なし',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 赤坂見附店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: '月3回 13,280円〜',
    trial: '体験レッスン 0円（50分・手ぶらで参加可能）',
    features: ['女性専用', 'マシン専門', '赤坂見附駅徒歩30秒', 'おしゃれ空間'],
    description: '公式サイトによると、赤坂見附駅から徒歩30秒の女性専用マシンピラティススタジオとのことです。リフォーマーを使った50分のグループレッスンで、初回体験レッスンは0円（50分）と案内されています。営業時間は7:30〜21:00、休みは年末年始（12/29〜1/3）とされています。（情報引用元: the SILK公式サイト https://the-silk.co.jp/studios/tokyo/akasakamitsuke/ ・2026年10月25日確認）',
    access: '東京メトロ「赤坂見附駅」徒歩30秒 / 千代田線「赤坂駅」徒歩6分 / 「溜池山王駅」徒歩9分',
    address: '東京都港区赤坂3丁目8-1 赤坂アルトビル 7F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '月4回の標準プランです。プロフェッショナルグレードのリフォーマーで本格レッスンです。',
      price: '月4回 15,280円（税込）+ 施設利用料700円',
    },
    options: [
      'Light3（月3回 13,280円）',
      'Full Day（平日デイタイム無制限 19,280円）',
      'Full（無制限 22,280円）',
      'レンタル（ウェア・タオル・ソックスあり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム（ミラー・アイロン・ドライヤー完備）', 'ウォーターサービス', 'レンタルウェア・タオル・ソックス'],
    },
  },
  {
    name: 'PILATES STUDIO noa 赤坂',
    image: '/images/studios/pilates-studio-noa.webp',
    price: '月額 6,600円〜',
    trial: '体験レッスンあり（公式トップに550円と1,100円の2つの表記・税込）',
    features: ['女性専用', 'マシン専門', '赤坂駅1番出口徒歩30秒', '回数繰越無制限'],
    description: '女性専用のマシンピラティス専門スタジオです。赤坂駅1番出口から徒歩30秒です。月6,600円から（別途システム手数料550円・マシン利用料550円）で、回数の繰越が無制限です。Intro・BODY MAKE・Conditioningの3つのプログラムカテゴリを展開しています。シャワールーム・更衣室完備で、レッスン前後も快適に過ごせます。',
    access: '千代田線「赤坂駅」1番出口 徒歩30秒 / 銀座線・丸ノ内線「赤坂見附駅」ベルビー赤坂出口 徒歩7分 / 銀座線・南北線「溜池山王駅」7番出口 徒歩7分',
    address: '東京都港区赤坂3丁目13-12（受付3F）',
    popularPlan: {
      name: '月4回コース',
      description: '月4回のマシンピラティスレッスンです。未消化分は無制限繰越可能です。',
      price: '月4回 要確認（月額6,600円〜）',
    },
    options: [
      '月2回コース',
      '月6回コース',
      '月8回コース',
      '回数繰越無制限（在籍中は無期限）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'コンディショニング', '姿勢改善', '初心者'],
    },
    basicInfo: {
      hours: '公式に記載なし（電話受付 平日10:00〜23:00・土日10:00〜21:00）',
      closed: '公式に記載なし',
      facilities: ['マシンピラティス設備', 'シャワールーム', '更衣室', '鍵付きロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'STUDIO IVY 赤坂店',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', 'マシン完備', '赤坂見附駅徒歩3分', '赤坂2店舗'],
    description: '完全パーソナルのマシンピラティス専門スタジオです。赤坂見附駅から徒歩3分です。赤坂エリアに本店とANNEX店の2店舗を展開しています。一人ひとりの目的・体力に合わせたオーダーメイドレッスンで、短期間で効果を実感できます。月2回コースから通い放題まで柔軟なプラン設定です。',
    access: '銀座線・丸ノ内線「赤坂見附駅」徒歩3分',
    address: '東京都港区赤坂4-2-12 エスセナーリオ赤坂WEST 011',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティスです。1回あたり7,000円とパーソナルでは好費用対効果です。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '月2回コース（15,000円・1回7,500円）',
      '月8回コース（52,000円・1回6,500円）',
      '1レッスン50分',
      '男性も受講可（公式記載）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', 'リハビリ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '公式に記載なし',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'STUDIO IVY 赤坂ANNEX店',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円〜',
    trial: '初回体験 4,500円（10/1〜10/31は初回体験無料キャンペーン表示あり）',
    features: ['完全パーソナル', 'マシン完備', '赤坂駅徒歩3分', '完全個室'],
    description: 'STUDIO IVYの赤坂2号店です。赤坂駅から徒歩3分です。本店と同じクオリティの完全パーソナルマシンピラティスを提供しています。完全個室で周りを気にせずレッスンに集中できます。赤坂エリアに2店舗あり、予約も取りやすくなっています。',
    access: '千代田線「赤坂駅」徒歩3分',
    address: '東京都港区赤坂6-4-18 プリンストン赤坂 402',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティスです。赤坂2店舗どちらでも利用可能です。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '月2回コース（15,000円・1回7,500円）',
      '月8回コース（52,000円・1回6,500円）',
      '1レッスン50分',
      '男性も受講可（公式記載）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', 'リハビリ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '公式に記載なし',
      facilities: ['リフォーマー', 'マシンピラティス器具', '完全個室', '更衣室'],
    },
  },
  {
    name: 'Studio-BMP 赤坂店',
    image: '/images/studios/studio-bmp-akasaka.webp',
    price: 'パーソナル50分 11,000円〜（ポイント制回数券）',
    trial: 'パーソナル体験 6,600円（50分）',
    features: ['BMP式メソッド', '完全プライベート', '赤坂駅徒歩2分', '整体×ピラティス'],
    description: 'ボディメイク×ピラティスのオリジナルメソッドが魅力のスタジオです。赤坂駅6番出口から徒歩2分です。公式サイトでは「完全プライベート」のマンツーマン指導と案内されています。ピラティスに美容矯正を組み合わせた80分コース（16,500円）もあります。',
    access: '千代田線「赤坂駅」6番出口 徒歩2分 / 銀座線・南北線「溜池山王駅」11番出口 徒歩10分',
    address: '東京都港区赤坂6-11-13 ファブリックビル 4階',
    popularPlan: {
      name: 'パーソナル50分',
      description: '完全プライベートのマンツーマンレッスンです。料金はポイント制の回数券で支払います（50分＝10ポイント）。',
      price: '50分 11,000円相当（税込）',
    },
    options: [
      'パーソナル80分・美容矯正付き（16,500円）',
      'オイルコース80分（22,000円）',
      '体験50分 6,600円 / 80分 9,900円（1人1回）',
      '入会金 11,000円（初回来店当日に50ポイント以上の回数券購入で半額5,500円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      purpose: ['ボディメイク', '姿勢矯正', '小顔矯正', 'ダイエット'],
    },
    basicInfo: {
      hours: '火〜金 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '月曜日',
      facilities: ['リフォーマー', 'マシンピラティス器具', '整体施術スペース', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。赤坂エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。PILATES STUDIO noaは初心者向けのIntroプログラムがあり、the SILKは50分の初回体験レッスンを0円で案内しています（公式サイト・2026年10月25日確認）。経験豊富なインストラクターが基礎から丁寧に指導してくれるので安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。赤坂エリアでは、マシン専門スタジオが中心です。',
  },
  {
    question: '赤坂のピラティススタジオの料金相場は？',
    answer: '赤坂エリアの料金相場は、グループレッスン月4回で6,600円〜15,280円程度です。PILATES STUDIO noaは月額6,600円からと格安です。パーソナルレッスンは月4回28,000円前後が相場です。体験レッスンは無料〜6,600円と幅があります。',
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
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。the SILK赤坂見附店は手ぶらで参加可能の無料体験を実施しています。マットやタオルはスタジオでレンタルできることが多いので、各スタジオの案内を確認してください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。Studio-BMPでは全身矯正と組み合わせたアプローチで、より効果的に身体の不調を改善できます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、STUDIO IVYやStudio-BMPがおすすめです。グループは料金が安く、PILATES STUDIO noaなら月額6,600円からです。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function AkasakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '赤坂', url: 'https://biyori-pilates.com/area/akasaka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              赤坂のピラティスおすすめ6選<br className="hidden md:block" />
              赤坂駅・赤坂見附駅からの徒歩分・体験料金で比較
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
              <span className="text-warm-600">赤坂</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="赤坂" />


        <TableOfContents areaName="赤坂" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、赤坂エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>赤坂でピラティススタジオを探している</span>
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
                  <span>赤坂見附駅・赤坂駅から近いスタジオがいい</span>
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

        <section className="py-12 bg-white" id="by-station"><div className="max-w-5xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">赤坂駅・赤坂見附駅・溜池山王駅からの徒歩分で比べる早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">赤坂でピラティスに通うときの最寄駅は、赤坂見附駅（銀座線・丸ノ内線）、赤坂駅（千代田線）、溜池山王駅（銀座線・南北線）の3つです。掲載6店を駅から近い順に並べ、下のカードに無い2店（pilates studio ena・Lume Pilates）を最後に加えました。徒歩分・体験料金・営業時間・定休日は各スタジオの公式ページの表記です（2026年10月25日確認・追加2店は10月26日確認）。公式に記載のない項目は「公式に記載なし」としています。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">赤坂見附駅から</th><th className="px-4 py-3 text-left">赤坂駅から</th><th className="px-4 py-3 text-left">溜池山王駅から</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">体験（税込）</th><th className="px-4 py-3 text-left">営業時間・定休日</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">the SILK 赤坂見附店（港区赤坂3-8-1 赤坂アルトビル7F）</td><td className="px-4 py-3">徒歩30秒</td><td className="px-4 py-3">徒歩6分</td><td className="px-4 py-3">徒歩9分</td><td className="px-4 py-3">マシンのグループ（女性専用）</td><td className="px-4 py-3">0円（50分）</td><td className="px-4 py-3">7:30〜21:00／年末年始（12/29〜1/3）休み</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">PILATES STUDIO noa 赤坂（港区赤坂3-13-12・受付3F）</td><td className="px-4 py-3">ベルビー赤坂出口 徒歩7分</td><td className="px-4 py-3">1番出口 徒歩30秒</td><td className="px-4 py-3">7番出口 徒歩7分</td><td className="px-4 py-3">マシン（女性専用）</td><td className="px-4 py-3">公式トップに550円・1,100円の2表記</td><td className="px-4 py-3">公式に記載なし（電話受付 平日10:00〜23:00・土日10:00〜21:00）</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">zen place pilates 赤坂（港区赤坂3-7-13 HMビル5階）</td><td className="px-4 py-3">10番出口 徒歩3分</td><td className="px-4 py-3">1番出口 徒歩4分</td><td className="px-4 py-3">10番出口 徒歩6分</td><td className="px-4 py-3">マット・マシンのグループ・プライベート（男女共用）</td><td className="px-4 py-3">マット 1,000円・マシン 3,000円・プライベート 9,900円〜</td><td className="px-4 py-3">平日 7:45〜21:00・土日祝 9:00〜16:30／定休日は公式に記載なし</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Studio-BMP 赤坂店（港区赤坂6-11-13 ファブリックビル4階）</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">6番出口 徒歩2分</td><td className="px-4 py-3">11番出口 徒歩10分</td><td className="px-4 py-3">完全プライベート</td><td className="px-4 py-3">50分 6,600円・80分 9,900円</td><td className="px-4 py-3">火〜金 10:00〜21:00・土日祝 10:00〜18:00／月曜定休</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">STUDIO IVY 赤坂店（港区赤坂4-2-12 エスセナーリオ赤坂WEST 011）</td><td className="px-4 py-3">徒歩3分</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">マシンのパーソナル50分（男性も可）</td><td className="px-4 py-3">4,500円</td><td className="px-4 py-3">8:00〜21:00／定休日は公式に記載なし</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">STUDIO IVY 赤坂ANNEX店（港区赤坂6-4-18 プリンストン赤坂402）</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">徒歩3分</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">マシンのパーソナル50分（男性も可）</td><td className="px-4 py-3">4,500円（10/1〜10/31は初回体験無料の表示あり）</td><td className="px-4 py-3">8:00〜21:00／定休日は公式に記載なし</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">pilates studio ena（港区赤坂3-21-5 三銀ビル408）<br /><span className="text-xs text-warm-500">※下のカードには未掲載（10月26日追加）</span></td><td className="px-4 py-3">徒歩30秒</td><td className="px-4 py-3">徒歩6分</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">完全個室のパーソナル（基本は女性専用）／1回13,200円・4回42,000円・8回79,200円・入会金20,000円</td><td className="px-4 py-3">料金案内は5,000円（10月はクーポンで3,300円の案内あり）</td><td className="px-4 py-3">8:00〜20:30／不定休</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Lume Pilates 赤坂（港区赤坂3-13-3 赤坂セントラルビル3F）<br /><span className="text-xs text-warm-500">※このページのカードには未掲載（<a href="/area/toranomon/" className="underline">虎ノ門ページ</a>に掲載）</span></td><td className="px-4 py-3">徒歩5分</td><td className="px-4 py-3">徒歩30秒</td><td className="px-4 py-3">徒歩6分</td><td className="px-4 py-3">パーソナル（男性可）・最大4名のグループ（女性限定）／グループ月4回24,000円・パーソナル月4回48,000円</td><td className="px-4 py-3">体験料金の記載なし（HP申込で入会金無料）</td><td className="px-4 py-3">平日 9:00〜22:00・土日祝 10:00〜18:00（アクセス欄は19:00）／記載なし</td></tr>
        </tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">赤坂見附駅から歩くなら the SILK（徒歩30秒・女性専用・体験0円）と zen place（徒歩3分・男女共用）、千代田線の赤坂駅なら noa（1番出口 徒歩30秒）と Studio-BMP（6番出口 徒歩2分）が近い店です。男性も通えるのは zen place と STUDIO IVY（公式に男性受講可と記載）です。赤坂見附駅と赤坂駅は歩いて行き来できる距離のため、表のとおり両駅から歩ける店もあります。</p><p className="text-warm-500 leading-relaxed mt-3 text-xs">確認した公式ページ（2026年10月25日）: the SILK赤坂見附店（情報引用元: <a href="https://the-silk.co.jp/studios/tokyo/akasakamitsuke/" target="_blank" rel="noopener" className="underline">the SILK公式サイト</a>）／<a href="https://www.zenplace.co.jp/studios/pilates-akasaka" target="_blank" rel="noopener" className="underline">zen place pilates 赤坂</a>／<a href="https://www.noapilates.jp/studio/akasaka/" target="_blank" rel="noopener" className="underline">PILATES STUDIO noa 赤坂</a>／<a href="https://b-m-p.jp/studio/studios/akasaka/" target="_blank" rel="noopener" className="underline">Studio-BMP 赤坂店</a>（料金は<a href="https://b-m-p.jp/studio/menu/" target="_blank" rel="noopener" className="underline">メニュー＆料金</a>）／<a href="https://www.pilates-ivy.jp/studio/akasaka" target="_blank" rel="noopener" className="underline">STUDIO IVY 赤坂店</a>／<a href="https://www.pilates-ivy.jp/studio/akasakaannex" target="_blank" rel="noopener" className="underline">STUDIO IVY 赤坂ANNEX店</a>／（10月26日）<a href="https://pilatesstudioena.com/" target="_blank" rel="noopener" className="underline">pilates studio ena</a>／<a href="https://lume-pilates.com/" target="_blank" rel="noopener" className="underline">Lume Pilates</a></p></div></section>

        <PriceComparisonTable studios={studios} areaName="赤坂" />
        <AreaMarketComparison studios={studios} areaName="赤坂" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              赤坂のおすすめピラティススタジオ6選
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
              赤坂のピラティス料金相場
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
                    <td className="px-4 py-3">6,600円〜15,400円（noaは別途手数料あり）</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 15,000円〜28,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜6,600円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              赤坂は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の永田町エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              赤坂でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京メトロ銀座線・丸ノ内線「赤坂見附駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  赤坂エリアのスタジオは赤坂見附駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。赤坂見附駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  赤坂は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  赤坂エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  赤坂エリアだけでなく、近隣の<Link href="/area/nagatacho/" className="text-warm-700 underline hover:text-warm-900">永田町</Link>、<Link href="/area/toranomon/" className="text-warm-700 underline hover:text-warm-900">虎ノ門</Link>、<Link href="/area/roppongi/" className="text-warm-700 underline hover:text-warm-900">六本木</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。手ぶらで体験可能な場合もあるので事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>赤坂エリアの豆知識：</strong>赤坂は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円以下で通えるリーズナブルなスタジオです。費用を抑えたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• PILATES STUDIO noa（月額6,600円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備しています。マシンピラティスを本格的に学びたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（各種マシン完備）</li>
                  <li className="text-warm-700">• the SILK（プロフェッショナルグレード）</li>
                  <li className="text-warm-700">• STUDIO IVY（リフォーマー・キャデラック）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  赤坂駅・赤坂見附駅から徒歩3分以内です。仕事帰りにサクッと通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• PILATES STUDIO noa（赤坂駅1番出口 徒歩30秒）</li>
                  <li className="text-warm-700">• the SILK（赤坂見附駅 徒歩30秒）</li>
                  <li className="text-warm-700">• Studio-BMP（赤坂駅 徒歩2分）</li>
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

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。マットピラティスやストレッチ系です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• PILATES STUDIO noa（6,600円〜）</li>
                  <li>• zen place pilates（10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜18,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオです。グループレッスンが充実しています。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（13,280円〜）</li>
                  <li>• zen place リフォーマーグループ（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 28,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスンです。短期集中で成果を目指したい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（月4回 28,000円）</li>
                  <li>• zen place プライベート（38,280円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
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
                  まずは自分がピラティスで何を達成したいのかを明確にすることをおすすめします。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的を明確にしておくと、スタジオを選びやすくなります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  赤坂エリアの料金相場はグループレッスン月4回で6,600円〜15,280円程度です。パーソナルは月4回28,000円前後です。無理なく継続できる予算を決めることをおすすめします。入会金やレンタル料もご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。the SILKは無料体験、zen placeはマットグループ体験が1,000円（今だけの体験価格）です。スタジオの雰囲気やインストラクターとの相性は実際に行ってみないとわかりません。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。赤坂エリアは東京メトロ千代田線「赤坂駅」、銀座線・丸ノ内線「赤坂見附駅」、銀座線・南北線「溜池山王駅」の3駅が利用可能です。PILATES STUDIO noaは赤坂駅1番出口から徒歩30秒、the SILKは赤坂見附駅から徒歩30秒と駅近スタジオが充実しています。
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
              本ページでは、赤坂のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、赤坂に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              体験レッスンは0円〜6,600円です（2026年10月25日に各公式ページで確認）。<br />
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
              <AreaModifierSections studios={studios} areaName="赤坂" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="akasaka" areaName="赤坂" />

      {/* g1-link-202609 */}

      <div className="my-8 bg-white border border-warm-200 p-5">

        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>

        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>

        <div className="flex flex-wrap gap-2">

          <Link href="/brands/the-silk-akasaka-mitsuke/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 赤坂見附店の料金・体験を見る</Link>

        </div>

      </div>


      <RelatedAreas currentSlug="akasaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
