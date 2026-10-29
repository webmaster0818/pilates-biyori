import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import Script from 'next/script'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/katsura/' },
  title: 'ピラティス桂おすすめ5選人気スタジオの料金プランの比較',
  description: '京都桂エリアのおすすめピラティススタジオ5選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,桂,京都,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,嵐山',
}

const studios = [
  {
    name: 'Rintosull 京都桂店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月額 13,800円〜',
    trial: '体験レッスン 0円',
    features: ['桂駅西口徒歩1分', '女性専用', '体験0円', 'LAVA運営'],
    description: 'ホットヨガLAVAが運営する女性専用マシンピラティス専門スタジオです。桂駅西口から徒歩1分の好立地です。大画面スクリーンを活用した最新スタイルのグループレッスンです。美尻・美脚プログラムが充実しています。',
    access: '阪急京都線・嵐山線「桂駅」西口 徒歩1分',
    address: '京都府京都市西京区川島有栖川町50-2 ECS第24ビル3F',
    popularPlan: {
      name: 'マシンピラティス2店舗通い放題',
      description: '2店舗でのマシンピラティスグループレッスン通い放題です。',
      price: '月額 13,800円（税込）',
    },
    options: [
      'マシンピラティス2店舗通い放題（13,800円）',
      'マシンピラティス全国通い放題（16,800円）',
      'ピラティス&ホットヨガ&暗闘キックボクシング通い放題（18,800円）',
      '体験レッスン0円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '美尻・美脚', '姿勢改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '毎週日曜日',
      facilities: ['リフォーマー', '大画面スクリーン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティススタジオDEP 京都桂店',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3U4MO2+5IM0+5YJRM',
    image: '/images/studios/pilates-studio-dep.webp',
    price: '月額 14,800円〜',
    trial: '体験レッスン 2,980円（キャンペーン）',
    features: ['理学療法士・作業療法士が担当', '50分パーソナル', '駐車場2台', '料金エリアA'],
    description: 'ピラティススタジオDEP（株式会社DEP・公式の店舗一覧に全国57店舗）の京都桂店です。理学療法士または作業療法士の国家資格を持つインストラクターが担当する50分のパーソナルマシンピラティスで、初回は90〜120分かけてカウンセリングと身体評価を行います。月額は料金エリアAの金額で、駐車場が2台分あります。公式サイトでは、ブランド全体でGoogle口コミ3,000件以上・平均★4.9以上、1,000種類以上の運動から内容を組むと案内されています（2026年10月29日確認）。',
    access: '阪急「桂駅」西口から950m・徒歩約15分／車で5分（公式の店舗ページ）',
    address: '京都府京都市西京区桂千代原町71-5',
    popularPlan: {
      name: 'パーソナルピラティス月定額',
      description: '国家資格保有インストラクターによるオーダーメイドパーソナルレッスンです。',
      price: '月額 14,800円〜（税込）/ 1回あたり6,800円〜',
    },
    options: [
      'ライト 月2回 14,800円／スタンダード 月4回 28,800円／プレミアム 月7回 47,600円（税込・エリアA・公式の店舗ページ 2026年10月29日確認）',
      '体験レッスン（通常9,900円→LINE予約限定2,980円・税込、公式サイト2026年10月29日確認）',
      'パーソナルレッスン',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      purpose: ['姿勢改善', '腰痛改善', 'リハビリ', '体幹強化'],
    },
    basicInfo: {
      hours: '月〜水・金・土 9:00〜18:00',
      closed: '木・日、12/29〜1/3',
      facilities: ['ピラティスマシン', '駐車場2台（店舗横ほか）'],
    },
  },
  {
    name: 'Studio ViV（スタジオヴィヴ）',
    price: '入会金・年会費 0円',
    trial: '体験レッスンあり',
    features: ['桂駅西口徒歩2分', '理学療法士指導', '6種類マシン完備', '入会金0円'],
    description: '桂駅西口から徒歩2分の完全予約制パーソナルマシンピラティススタジオです。理学療法士が科学的根拠に基づいて指導しています。リフォーマー、キャデラック、チェア、バレル、スパインコレクター、アームチェアの6種類のマシンを完備しています。入会金・年会費0円です。',
    access: '阪急京都線・嵐山線「桂駅」西口 徒歩2分',
    address: '京都府京都市西京区（桂駅西口徒歩2分）',
    popularPlan: {
      name: 'パーソナルマシンピラティス',
      description: '理学療法士による完全プライベートレッスンです。6種類のマシン使用です。',
      price: '入会金・年会費 0円（レッスン料は公式サイトでご確認ください）',
    },
    options: [
      '入会金0円',
      '年会費0円',
      '体験レッスン',
      '完全予約制',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      purpose: ['姿勢改善', '腰痛改善', 'リハビリ', '体幹強化'],
    },
    basicInfo: {
      hours: '完全予約制（公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', 'スパインコレクター', 'アームチェア'],
    },
  },
  {
    name: 'STUDIO IVY 四条大宮店',
    image: '/images/studios/studio-ivy.webp',
    price: '1回 6,250円〜',
    trial: '体験レッスンあり',
    features: ['四条大宮駅徒歩5分', 'パーソナル専門', 'オーダーメイド', '月謝制'],
    description: '桂から阪急で1駅の四条大宮にあるパーソナル専門マシンピラティススタジオです。完全プライベート空間でお客様のお悩みに沿ったオーダーメイドプログラムを提供しています。月謝制で継続しやすい料金設定です。',
    access: '嵐電嵐山本線「四条大宮駅」徒歩5分 / 阪急京都線「大宮駅」徒歩5分（桂駅から阪急で約6分）',
    address: '京都府京都市下京区仏光寺通堀川西入晒屋町622-1 ナレッジスペース四条大宮302',
    popularPlan: {
      name: 'パーソナルレッスン月4回',
      description: '完全プライベート空間でのマンツーマンマシンピラティスです。',
      price: '月額 15,000円〜（税込）/ 1レッスン6,250円〜',
    },
    options: [
      '月4回プラン（15,000円〜）',
      '月8回プラン',
      '体験レッスン',
      '入会金 20,000円',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      purpose: ['姿勢改善', 'ボディメイク', '腰痛改善', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室'],
    },
  },
  {
    name: 'Rintosull 京都四条烏丸店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月額 13,800円〜',
    trial: '体験レッスン 0円',
    features: ['烏丸駅徒歩2分', '女性専用', '2店舗相互利用', 'LAVA運営'],
    description: '桂店と相互利用できるRintosull四条烏丸店です。桂から阪急で烏丸駅まで約10分です。2店舗通い放題プランを利用すれば、桂店と四条烏丸店を使い分けて通えます。',
    access: '阪急京都線「烏丸駅」徒歩2分（桂駅から阪急で約10分）',
    address: '京都府京都市下京区四条通堺町西入立売中之町94 四条KSビル2F',
    popularPlan: {
      name: 'マシンピラティス2店舗通い放題',
      description: '桂店と四条烏丸店の2店舗でマシンピラティス通い放題です。',
      price: '月額 13,800円（税込）',
    },
    options: [
      'マシンピラティス2店舗通い放題（13,800円）',
      'マシンピラティス全国通い放題（16,800円）',
      'ピラティス&ホットヨガ通い放題（18,800円）',
      '体験レッスン0円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美脚・美尻'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '大画面スクリーン', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: '桂でピラティス初心者におすすめのスタジオは？',
    answer: 'Rintosull京都桂店は87%以上が初心者で体験0円です。Studio ViVは理学療法士の丁寧な指導で初心者に好評です。',
  },
  {
    question: '桂のピラティスの料金相場は？',
    answer: 'グループ通い放題が月額13,800円〜です（Rintosull）。パーソナルは月額14,800円〜です（DEP）。Studio ViVは入会金・年会費0円で始められます。',
  },
  {
    question: '桂駅から最も近いスタジオはどこですか？',
    answer: 'Rintosull京都桂店は桂駅西口から徒歩1分で最寄りです。Studio ViVも桂駅西口から徒歩2分です。',
  },
  {
    question: '理学療法士が指導するスタジオはありますか？',
    answer: 'Studio ViVは理学療法士が指導するスタジオです。ピラティススタジオDEP京都桂店は、理学療法士または作業療法士の国家資格を持つインストラクターが担当します（DEP公式）。',
  },
  {
    question: '女性専用のスタジオはありますか？',
    answer: 'Rintosull京都桂店とRintosull京都四条烏丸店が女性専用です。2店舗通い放題プランで両方通えます。',
  },
  {
    question: '体験レッスンの料金は？',
    answer: 'Rintosull桂店は0円、DEP京都桂店は2,980円です（キャンペーン価格、通常9,900円）。Studio ViVも体験レッスンを実施しています。',
  },
  {
    question: '嵐山方面からも通えますか？',
    answer: '桂駅は阪急嵐山線の接続駅なので、嵐山方面からのアクセスも良好です。嵐山駅から桂駅まで阪急で約4分です。',
  },
  {
    question: '桂駅周辺に駐車場はありますか？',
    answer: '桂駅周辺にはコインパーキングがいくつかあります。DEP京都桂店は桂駅西口から車で5分（徒歩約15分）で、駐車場が2台分あります（店舗横が埋まっている場合は近くのコインパーキングの指定番号・公式の店舗ページ）。ほかのスタジオの駐車場の有無は公式サイトでご確認ください。',
  },
  {
    question: '複数のスタジオを使い分けることはできますか？',
    answer: 'Rintosullの2店舗通い放題プラン（13,800円/月）なら、桂店と四条烏丸店を使い分けて通えます。桂店が日曜定休なので、日曜は四条烏丸店を利用するのがおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。週1〜2回のペースで最低2〜3ヶ月の継続がおすすめです。',
  },
]

export default function KatsuraPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '桂', url: 'https://biyori-pilates.com/area/katsura/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス桂おすすめ5選<br className="hidden md:block" />
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
              <span className="text-warm-600">桂</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="桂" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、京都桂エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>桂・嵐山エリアでピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>理学療法士の安全な指導を受けたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験のあるスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="桂" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">桂のおすすめピラティススタジオ5選</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">通い放題がお得です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull桂店（通い放題 13,800円〜）</li>
                  <li className="text-warm-700">• DEP（月額 14,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">医療ベース</h3>
                <p className="text-warm-600 text-sm mb-4">国家資格保有者の安心指導です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Studio ViV（理学療法士・6種マシン）</li>
                  <li className="text-warm-700">• DEP（理学療法士・作業療法士が担当）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">桂駅から徒歩2分以内です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（桂駅西口 徒歩1分）</li>
                  <li className="text-warm-700">• Studio ViV（桂駅西口 徒歩2分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">桂のピラティス料金相場</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループ通い放題</td><td className="px-4 py-3">13,800円〜18,800円/月</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td><td className="px-4 py-3">14,800円〜25,000円</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜2,980円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              桂エリアは阪急京都線と嵐山線の接続駅であり、京都市西部の住宅地として人気のエリアです。駅前にRintosullとStudio ViVが集まっており、駅から徒歩2分以内で通える利便性が魅力です。理学療法士が指導するスタジオが2つもあるのは桂エリアの大きな特徴で、医学的根拠に基づいた安全な指導を受けたい方に最適です。嵐山方面からのアクセスも良く、四条方面のスタジオと使い分けることも可能です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">桂でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">桂駅の東口・西口を間違えないように</h3>
                <p className="text-warm-600 leading-relaxed">Rintosull桂店とStudio ViVは桂駅「西口」が最寄りです。東口から出ると遠回りになるので、初回訪問時は出口をご確認ください。桂駅は阪急京都線と嵐山線の乗り換え駅なので、ホームの位置にも注意です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">DEP桂店は桂駅から徒歩15分・車利用が便利</h3>
                <p className="text-warm-600 leading-relaxed">ピラティススタジオDEP京都桂店は、公式の店舗ページでは阪急桂駅西口から950m・徒歩約15分、車で5分です。駐車場が2台分あり（1台は店舗横）、埋まっている場合は近くのコインパーキングの指定番号を使うよう案内されています。Googleマップの評価は★4.9（55件・2026年8月時点）です。DEP全体の料金表（エリアA／B／S）・全57店舗の一覧・口コミの傾向は<Link href="/brands/dep/" className="underline decoration-warm-400 hover:text-warm-900">ピラティススタジオDEPのブランドページ</Link>にまとめています。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">Rintosull桂店は日曜定休に注意</h3>
                <p className="text-warm-600 leading-relaxed">Rintosull京都桂店は毎週日曜日が定休日です。日曜日にも通いたい方は、2店舗通い放題プラン（13,800円）を利用してRintosull京都四条烏丸店も併用するのがおすすめです。桂から烏丸駅まで阪急で約10分です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも視野に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">桂エリアだけでなく、<Link href="/area/nijo/" className="text-warm-700 underline hover:text-warm-900">二条</Link>や<Link href="/area/shijo-kawaramachi/" className="text-warm-700 underline hover:text-warm-900">四条河原町</Link>、<Link href="/area/kyoto-station/" className="text-warm-700 underline hover:text-warm-900">京都駅</Link>エリアにもスタジオがあります。阪急京都線を利用すれば四条大宮まで約6分です。通勤ルート上のスタジオもご検討ください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-warm-50" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
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
                  <strong>桂エリアの豆知識：</strong>桂は阪急京都線と嵐山線の接続駅で、嵐山方面の玄関口です。落ち着いた住宅地で、ファミリー層に人気のエリアです。レッスン後は桂離宮周辺の散策や、嵐山方面への小旅行もおすすめです。駅前のスタジオなら買い物ついでにも通えます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div>
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、腰痛改善など目的によって最適なスタジオは変わります。医療ベースならStudio ViVやDEP、料金重視ならRintosullです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div>
                <p className="text-warm-600 leading-relaxed">桂の相場はグループ通い放題13,800円〜です。パーソナルは14,800円〜です。Studio ViVは入会金・年会費0円で始められます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div>
                <p className="text-warm-600 leading-relaxed">Rintosull桂店は0円で体験可能です。DEPはキャンペーン価格2,980円です。まずは体験で雰囲気をご確認ください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div>
                <p className="text-warm-600 leading-relaxed">桂駅西口にはRintosullとStudio ViVが集中しています。嵐山方面からも阪急嵐山線で約4分とアクセス良好です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">本ページでは、京都桂エリアのおすすめピラティススタジオについてご紹介しました。</p>
            <p className="text-warm-600 leading-relaxed mb-6">桂は駅前に質の高いスタジオが集まっており、理学療法士が指導するスタジオが2つもある珍しいエリアです。嵐山方面の玄関口としてアクセスも良好です。落ち着いた住宅地で、自分のペースでピラティスを楽しめます。</p>
            <p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p>
            <p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜2,980円です。<br />まずは体験レッスンへの参加をおすすめします。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="katsura" areaName="桂" />

      {/* g1-link-202609 */}

      <div className="my-8 bg-white border border-warm-200 p-5">

        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>

        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>

        <div className="flex flex-wrap gap-2">

          <Link href="/brands/rintosull-katsura/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">Rintosull 京都桂店の料金・体験を見る</Link>

        </div>

      </div>


      <RelatedAreas currentSlug="katsura" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
