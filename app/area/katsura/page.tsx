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
  title: '【2026最新】ピラティス桂おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '京都桂エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,桂,京都,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,嵐山',
}

const studios = [
  {
    name: 'Rintosull 京都桂店',
    image: '/images/studios/rintosull.webp',
    rating: 4.8,
    reviewCount: 157,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: '桂駅西口から徒歩1分！ホットヨガLAVAが運営するマシンピラティス専門スタジオ。体験0円で気軽に始められました。87%以上が初心者とのこと。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '2週間前',
        text: '美尻・美脚に特化したレッスンが豊富。大画面スクリーンを使った最新スタイルで楽しくレッスンできます。月額13,800円〜とリーズナブル。',
      },
      {
        author: 'K.N',
        rating: 4,
        date: '3週間前',
        text: '女性専用で安心。定休日は日曜だけなので平日も土曜も通えます。桂駅のすぐそばなので雨の日も便利。',
      },
    ],
    price: '月額 13,800円〜',
    trial: '体験レッスン 0円',
    features: ['桂駅西口徒歩1分', '女性専用', '体験0円', 'LAVA運営'],
    description: 'ホットヨガLAVAが運営する女性専用マシンピラティス専門スタジオ。桂駅西口から徒歩1分の好立地。大画面スクリーンを活用した最新スタイルのグループレッスン。美尻・美脚プログラムが充実。',
    access: '阪急京都線・嵐山線「桂駅」西口 徒歩1分',
    address: '京都府京都市西京区川島有栖川町50-2 ECS第24ビル3F',
    popularPlan: {
      name: 'マシンピラティス2店舗通い放題',
      description: '2店舗でのマシンピラティスグループレッスン通い放題。',
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
    image: '/images/studios/pilates-studio-dep.webp',
    rating: 4.9,
    reviewCount: 17,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: 'Google口コミ2,000件以上で平均4.96の超高評価スタジオ。国家資格保有のインストラクターによるオーダーメイドピラティスが受けられます。',
      },
      {
        author: 'S.M',
        rating: 5,
        date: '2週間前',
        text: '体験レッスンが2,980円（キャンペーン価格）。1,000種類以上のエクササイズから自分に合ったプログラムを組んでもらえます。',
      },
      {
        author: 'R.T',
        rating: 5,
        date: '3週間前',
        text: 'インストラクターが理学療法士の国家資格を持っているので安心。桂駅から車で5分、徒歩だと15分ほどかかりますが、質の高いレッスンは価値あり。',
      },
    ],
    price: '月額 14,800円〜',
    trial: '体験レッスン 2,980円（キャンペーン）',
    features: ['国家資格保有', '口コミ4.96', '1,000種類以上', 'オーダーメイド'],
    description: '国家資格を保有するインストラクターが指導するマシンピラティス専門スタジオ。Google口コミ2,000件以上で平均4.96の超高評価。1,000種類以上のエクササイズから一人ひとりに最適なプログラムをオーダーメイドで提供。',
    access: '阪急京都線「桂駅」徒歩15分 / 車5分',
    address: '京都府京都市西京区桂千代原町71-5',
    popularPlan: {
      name: 'パーソナルピラティス月定額',
      description: '国家資格保有インストラクターによるオーダーメイドパーソナルレッスン。',
      price: '月額 14,800円〜（税込）/ 1回あたり6,800円〜',
    },
    options: [
      '月定額サービス（14,800円〜）',
      '体験レッスン（通常9,900円→キャンペーン2,980円）',
      '体験無料キャンペーン実施中（〜2026年5月31日）',
      'パーソナルレッスン',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '腰痛改善', 'リハビリ', '体幹強化'],
    },
    basicInfo: {
      hours: '月〜水・金・土 9:00〜18:00',
      closed: '木・日曜日',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '更衣室'],
    },
  },
  {
    name: 'Studio ViV（スタジオヴィヴ）',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 30,
    reviews: [
      {
        author: 'T.Y',
        rating: 5,
        date: '1週間前',
        text: '桂駅西口から徒歩2分！理学療法士が指導する完全予約制のパーソナルマシンピラティス。6種類のマシンを完備していて本格的。',
      },
      {
        author: 'N.O',
        rating: 5,
        date: '2週間前',
        text: '入会金・年会費がかからないのが嬉しい。完全個室・完全プライベートなので人目を気にせずレッスンに集中できます。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '3週間前',
        text: 'ピラティス初心者でも6種類のマシンを使い分けることで、心身の変化を実感できます。理学療法士ならではの安全な指導。',
      },
    ],
    price: '入会金・年会費 0円',
    trial: '体験レッスンあり',
    features: ['桂駅西口徒歩2分', '理学療法士指導', '6種類マシン完備', '入会金0円'],
    description: '桂駅西口から徒歩2分の完全予約制パーソナルマシンピラティススタジオ。理学療法士が科学的根拠に基づいて指導。リフォーマー、キャデラック、チェア、バレル、スパインコレクター、アームチェアの6種類のマシンを完備。入会金・年会費0円。',
    access: '阪急京都線・嵐山線「桂駅」西口 徒歩2分',
    address: '京都府京都市西京区（桂駅西口徒歩2分）',
    popularPlan: {
      name: 'パーソナルマシンピラティス',
      description: '理学療法士による完全プライベートレッスン。6種類のマシン使用。',
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
      genderRatio: '女性85% / 男性15%',
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
    rating: 4.7,
    reviewCount: 8,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '桂から阪急で1駅の四条大宮駅から徒歩5分。完全プライベートでオーダーメイドプログラムが受けられます。月謝制で1回6,250円〜。',
      },
      {
        author: 'K.H',
        rating: 5,
        date: '2週間前',
        text: '清潔感のある洗練された空間。パーソナル専門なので初心者でも安心。桂から通っている方も多いそうです。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '3週間前',
        text: '8時から21時まで営業で通いやすい。入会金は20,000円ですが、体験レッスンで雰囲気を確認できます。',
      },
    ],
    price: '1回 6,250円〜',
    trial: '体験レッスンあり',
    features: ['四条大宮駅徒歩5分', 'パーソナル専門', 'オーダーメイド', '月謝制'],
    description: '桂から阪急で1駅の四条大宮にあるパーソナル専門マシンピラティススタジオ。完全プライベート空間でお客様のお悩みに沿ったオーダーメイドプログラムを提供。月謝制で継続しやすい料金設定。',
    access: '嵐電嵐山本線「四条大宮駅」徒歩5分 / 阪急京都線「大宮駅」徒歩5分（桂駅から阪急で約6分）',
    address: '京都府京都市下京区仏光寺通堀川西入晒屋町622-1 ナレッジスペース四条大宮302',
    popularPlan: {
      name: 'パーソナルレッスン月4回',
      description: '完全プライベート空間でのマンツーマンマシンピラティス。',
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
      genderRatio: '女性80% / 男性20%',
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
    image: '/images/studios/rintosull.webp',
    rating: 4.7,
    reviewCount: 158,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '1週間前',
        text: '桂から阪急で烏丸駅まで約10分。Rintosull桂店と相互利用できるので、2店舗通い放題プランがお得。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '2週間前',
        text: '烏丸駅から徒歩2分。桂店と合わせて週2回ペースで通っています。桂店が日曜定休なので四条烏丸店と使い分けています。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '女性専用でマシンピラティス専門。お悩み部位にピンポイントでアプローチできるのが良い。',
      },
    ],
    price: '月額 13,800円〜',
    trial: '体験レッスン 0円',
    features: ['烏丸駅徒歩2分', '女性専用', '2店舗相互利用', 'LAVA運営'],
    description: '桂店と相互利用できるRintosull四条烏丸店。桂から阪急で烏丸駅まで約10分。2店舗通い放題プランを利用すれば、桂店と四条烏丸店を使い分けて通えます。',
    access: '阪急京都線「烏丸駅」徒歩2分（桂駅から阪急で約10分）',
    address: '京都府京都市下京区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス2店舗通い放題',
      description: '桂店と四条烏丸店の2店舗でマシンピラティス通い放題。',
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
    answer: 'Rintosull京都桂店は87%以上が初心者で体験0円。Studio ViVは理学療法士の丁寧な指導で初心者に好評です。',
  },
  {
    question: '桂のピラティスの料金相場は？',
    answer: 'グループ通い放題が月額13,800円〜（Rintosull）。パーソナルは月額14,800円〜（DEP）。Studio ViVは入会金・年会費0円で始められます。',
  },
  {
    question: '桂駅から最も近いスタジオはどこですか？',
    answer: 'Rintosull京都桂店は桂駅西口から徒歩1分で最寄り。Studio ViVも桂駅西口から徒歩2分です。',
  },
  {
    question: '理学療法士が指導するスタジオはありますか？',
    answer: 'Studio ViVとピラティススタジオDEP京都桂店はインストラクターが理学療法士の国家資格を保有。医学的根拠に基づいた安全な指導が受けられます。',
  },
  {
    question: '女性専用のスタジオはありますか？',
    answer: 'Rintosull京都桂店とRintosull京都四条烏丸店が女性専用です。2店舗通い放題プランで両方通えます。',
  },
  {
    question: '体験レッスンの料金は？',
    answer: 'Rintosull桂店は0円、DEP京都桂店は2,980円（キャンペーン価格、通常9,900円）。Studio ViVも体験レッスンを実施しています。',
  },
  {
    question: '嵐山方面からも通えますか？',
    answer: '桂駅は阪急嵐山線の接続駅なので、嵐山方面からのアクセスも良好。嵐山駅から桂駅まで阪急で約4分です。',
  },
  {
    question: '桂駅周辺に駐車場はありますか？',
    answer: '桂駅周辺にはコインパーキングがいくつかあります。DEP京都桂店は車で5分の立地。各スタジオの駐車場の有無は公式サイトでご確認ください。',
  },
  {
    question: '複数のスタジオを使い分けることはできますか？',
    answer: 'Rintosullの2店舗通い放題プラン（13,800円/月）なら、桂店と四条烏丸店を使い分けて通えます。桂店が日曜定休なので、日曜は四条烏丸店を利用するのがおすすめ。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月の継続がおすすめです。',
  },
]

export default function KatsuraPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '桂', url: 'https://pilates-biyori.com/area/katsura/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月21日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス桂おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">桂</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="桂" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「桂で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、京都桂エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>桂・嵐山エリアでピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>理学療法士の安全な指導を受けたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験のあるスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
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
                <p className="text-warm-600 text-sm mb-4">通い放題がお得。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull桂店（通い放題 13,800円〜）</li>
                  <li className="text-warm-700">• DEP（月額 14,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">医療ベース</h3>
                <p className="text-warm-600 text-sm mb-4">国家資格保有者の安心指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Studio ViV（理学療法士・6種マシン）</li>
                  <li className="text-warm-700">• DEP（理学療法士・口コミ4.96）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">桂駅から徒歩2分以内。</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">桂のピラティス料金相場【2026年4月最新】</h2>
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
              桂エリアは阪急京都線と嵐山線の接続駅であり、京都市西部の住宅地として人気のエリアです。駅前にRintosullとStudio ViVが集まっており、駅から徒歩2分以内で通える利便性が魅力。理学療法士が指導するスタジオが2つもあるのは桂エリアの大きな特徴で、医学的根拠に基づいた安全な指導を受けたい方に最適です。嵐山方面からのアクセスも良く、四条方面のスタジオと使い分けることも可能です。
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
                <p className="text-warm-600 leading-relaxed">Rintosull桂店とStudio ViVは桂駅「西口」が最寄りです。東口から出ると遠回りになるので、初回訪問時は出口を確認しておきましょう。桂駅は阪急京都線と嵐山線の乗り換え駅なので、ホームの位置にも注意。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">DEP桂店は桂駅から徒歩15分・車利用が便利</h3>
                <p className="text-warm-600 leading-relaxed">ピラティススタジオDEP京都桂店は桂駅から徒歩15分とやや距離があります。車なら5分でアクセス可能。高評価（口コミ4.96）の質の高いレッスンを求めるなら、少し足を延ばす価値は十分にあります。周辺のコインパーキングを事前に確認しておきましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">Rintosull桂店は日曜定休に注意</h3>
                <p className="text-warm-600 leading-relaxed">Rintosull京都桂店は毎週日曜日が定休日です。日曜日にも通いたい方は、2店舗通い放題プラン（13,800円）を利用してRintosull京都四条烏丸店も併用するのがおすすめ。桂から烏丸駅まで阪急で約10分です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも視野に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">桂エリアだけでなく、<Link href="/area/nijo" className="text-warm-700 underline hover:text-warm-900">二条</Link>や<Link href="/area/shijo-kawaramachi" className="text-warm-700 underline hover:text-warm-900">四条河原町</Link>、<Link href="/area/kyoto-station" className="text-warm-700 underline hover:text-warm-900">京都駅</Link>エリアにもスタジオがあります。阪急京都線を利用すれば四条大宮まで約6分。通勤ルート上のスタジオも検討してみましょう。</p>
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
                  <strong>桂エリアの豆知識：</strong>桂は阪急京都線と嵐山線の接続駅で、嵐山方面の玄関口。落ち着いた住宅地で、ファミリー層に人気のエリアです。レッスン後は桂離宮周辺の散策や、嵐山方面への小旅行もおすすめ。駅前のスタジオなら買い物ついでにも通えます。
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
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、腰痛改善など目的によって最適なスタジオは変わります。医療ベースならStudio ViVやDEP、コスパ重視ならRintosull。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div>
                <p className="text-warm-600 leading-relaxed">桂の相場はグループ通い放題13,800円〜。パーソナルは14,800円〜。Studio ViVは入会金・年会費0円で始められます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div>
                <p className="text-warm-600 leading-relaxed">Rintosull桂店は0円で体験可能。DEPはキャンペーン価格2,980円。まずは体験で雰囲気を確認しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div>
                <p className="text-warm-600 leading-relaxed">桂駅西口にはRintosullとStudio ViVが集中。嵐山方面からも阪急嵐山線で約4分とアクセス良好です。</p>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は京都桂エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">桂は駅前に質の高いスタジオが集まっており、理学療法士が指導するスタジオが2つもある珍しいエリアです。嵐山方面の玄関口としてアクセスも良好。落ち着いた住宅地で、自分のペースでピラティスを楽しめます。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜2,980円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="katsura" areaName="桂" />

      <RelatedAreas currentSlug="katsura" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
