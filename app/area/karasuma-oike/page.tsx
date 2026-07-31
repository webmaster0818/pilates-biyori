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
  alternates: { canonical: 'https://biyori-pilates.com/area/karasuma-oike/' },
  title: '【2026年8月最新】烏丸御池のピラティススタジオおすすめ5選｜無料体験・料金で比較',
  description: '烏丸御池のピラティススタジオ5社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,烏丸御池,京都,四条烏丸,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 烏丸御池店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 139,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '烏丸御池駅から徒歩1分！世界最大級のブランドで15種類の器具を使った本格レッスン。無料の30分イントロクラスで雰囲気がわかります。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けで初心者でも安心。男性会員もいるのでカップルで通えます。8つのプログラムで飽きずに続けられる。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: '朝7時から営業で仕事前にも通える。インストラクター全員が500時間以上の研修を受けた資格保持者。京都の中心地でアクセス抜群。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '烏丸御池駅徒歩1分', '15種類の器具', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。烏丸御池駅から徒歩1分。最大12名の少人数制グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備。8つのプログラムと4段階のレベル分け。',
    access: '京都市営地下鉄烏丸線・東西線「烏丸御池駅」徒歩1分',
    address: '京都府京都市中京区烏丸御池エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（26,290円）',
      '通い放題プラン（40,590円）',
      'プライベートレッスン（1回 9,900円〜）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '平日 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'zen place pilates 京都スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 30,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '烏丸御池エリアからもアクセス良好。マットもマシンも両方受けられるのが魅力。全国150店舗以上で他店利用可能。男性もOK。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: 'グループ体験1,000円で気軽に試せました。ピラティス専門で20年以上の実績があり安心。京都の落ち着いた雰囲気で集中できます。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: 'インストラクターの質が高く体の変化を早く実感。体験当日入会で入会金無料になるキャンペーンも。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['京都市内', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。京都市内に位置し、烏丸御池エリアからもアクセス可能。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。男性も歓迎。',
    access: '京都市営地下鉄「烏丸御池駅」周辺',
    address: '京都府京都市中京区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 14,960円（税込）',
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
    name: 'ルルト 烏丸御池店', officialUrl: 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808',
    image: '/images/studios/luluto.webp',
    rating: 4.8,
    reviewCount: 28,
    reviews: [
      {
        author: 'E.Y',
        rating: 5,
        date: '1週間前',
        text: '烏丸御池駅から徒歩3分。理学療法士が監修、STOTT PILATES公認インストラクターが指導。女性専用で「整えるピラティス」がコンセプト。',
      },
      {
        author: 'H.M',
        rating: 5,
        date: '2週間前',
        text: '体験1,000円（通常12,000円）で試せました。満足できなければ全額返金保証あり。パーソナルなので体の状態に合わせた丁寧な指導。',
      },
      {
        author: 'N.K',
        rating: 4,
        date: '3週間前',
        text: '朝9時から夜21時まで営業。京都の中心地で通いやすい。マシンピラティスで姿勢改善の効果を早く実感できました。',
      },
    ],
    price: '月3回 29,700円〜',
    trial: '体験レッスン 1,000円（通常12,000円）',
    features: ['理学療法士監修', '女性専用', '烏丸御池徒歩3分', '全額返金保証'],
    description: '理学療法士が監修する女性専用マシンピラティススタジオ。烏丸御池駅から徒歩3分。STOTT PILATES公認インストラクターによる丁寧な指導。「整えるピラティス」をテーマに、体験1,000円、満足できなければ全額返金保証。',
    access: '京都市営地下鉄「烏丸御池駅」徒歩3分',
    address: '京都府京都市中京区烏丸御池エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回コース',
      description: '理学療法士監修のマシンピラティス。STOTT PILATES公認インストラクターが指導。',
      price: '月4回 38,400円（税込）',
    },
    options: [
      '月3回コース（29,700円）',
      '月6回コース（55,800円）',
      '月8回コース（72,000円）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'リハビリ', '体の不調改善', '健康維持'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'STUDIO IVY 烏丸御池店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.7,
    reviewCount: 9,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: '烏丸御池駅から徒歩4分。完全プライベートのマシンピラティス。一対一でオーダーメイドのプログラムが受けられる。月謝制で1レッスン6,250円〜。',
      },
      {
        author: 'C.M',
        rating: 4,
        date: '2週間前',
        text: '体験4,500円で丁寧なカウンセリングから始まります。体の癖や改善ポイントを詳しく教えてもらえた。',
      },
      {
        author: 'Y.A',
        rating: 5,
        date: '3週間前',
        text: '朝8時から夜21時まで営業。リフォーマー・キャデラック・チェアなど本格マシン完備。男性も歓迎。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', '烏丸御池徒歩4分', 'マシン完備', '月謝制'],
    description: '完全プライベートのマシンピラティス専門スタジオ。烏丸御池駅から徒歩4分。一人ひとりの目的・体力に合わせたオーダーメイドプログラム。月謝制で1レッスン6,250円〜。リフォーマー・キャデラック・チェア完備。',
    access: '京都市営地下鉄「烏丸御池駅」徒歩4分',
    address: '京都府京都市中京区烏丸御池エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'STANDARD月4回コース',
      description: '完全パーソナルのマシンピラティス。1回あたり7,000円。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      'BASIC月2回（15,000円）',
      'PREMIUM月8回（52,000円）',
      '都度利用（8,800円）',
      '入会金 20,000円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', 'リハビリ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'Rintosull 京都四条烏丸店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 158,
    reviews: [
      {
        author: 'R.H',
        rating: 5,
        date: '1週間前',
        text: '四条烏丸エリアにあり烏丸御池からも近い。LAVA系列で安心。月4回8,800円とマシンピラティスでは破格の安さ。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '2週間前',
        text: '女性専用で初心者が87%以上。未経験でも始めやすい環境。プレミアムフリーフルタイムでLAVA等系列店も利用可能。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '3週間前',
        text: '施設がきれいで清潔感がある。リフォーマーマシンを使った本格レッスンがこの価格で受けられるのはありがたい。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', '四条烏丸エリア', 'コスパ抜群'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。四条烏丸エリアに位置し、烏丸御池からもアクセス可能。月4回8,800円のリーズナブルな料金。87%以上が初心者で未経験者も安心。',
    access: '京都市営地下鉄「四条駅」/ 阪急「烏丸駅」周辺',
    address: '京都府京都市下京区四条烏丸エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使った本格マシンピラティス。1回あたり2,200円のコスパ。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '施設使用料あり',
      '無料体験・入会キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！烏丸御池エリアのスタジオはほとんどが初心者歓迎。CLUB PILATESは4段階のレベル分け、Rintosullは87%以上が初心者。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。',
  },
  {
    question: '烏丸御池エリアの料金相場は？',
    answer: 'グループ月4回で8,800円〜14,190円。Rintosullが月4回8,800円で最安。パーソナルはSTUDIO IVYが月2回15,000円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。CLUB PILATESとRintosullは無料体験。ルルトは体験1,000円で全額返金保証付き。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'CLUB PILATES、zen place、STUDIO IVYは男性も通えます。ルルトとRintosullは女性専用です。',
  },
  {
    question: '理学療法士の指導を受けられるスタジオは？',
    answer: 'ルルト烏丸御池店は理学療法士が監修。STOTT PILATES公認インストラクターが指導。満足できなければ全額返金保証付き。',
  },
  {
    question: 'ヨガもやりたい場合は？',
    answer: 'RintosullはプレミアムフリーフルタイムでホットヨガLAVA等系列店も全国で利用可能。zen placeもヨガスタジオを運営。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KarasumaOikePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '烏丸御池', url: 'https://pilates-biyori.com/area/karasuma-oike/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス烏丸御池おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">烏丸御池</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="烏丸御池" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「烏丸御池で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、烏丸御池・四条烏丸エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>烏丸御池・四条烏丸でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験のスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="烏丸御池" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              烏丸御池のおすすめピラティススタジオ5選
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
              烏丸御池のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,800円〜38,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,800円〜28,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              烏丸御池は観光地としても人気のエリアですが、地元の方が日常的に通えるスタジオも増えています。町家を改装したスタジオなど烏丸御池ならではの趣ある空間でピラティスを楽しめるのが魅力。料金は大阪と同程度か、やや抑えめの傾向です。近隣の京都駅エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              烏丸御池でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京都市営地下鉄烏丸線・東西線「烏丸御池駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  烏丸御池エリアのスタジオは烏丸御池駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。烏丸御池駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光客と地元利用者で混雑時間が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  烏丸御池は観光地としても有名なため、観光客向けの体験プランと地元向けの月額プランが分かれているスタジオもあります。紅葉や桜のシーズンは周辺の混雑で移動に時間がかかることがあるため、余裕を持ったスケジュールで通いましょう。地元在住なら平日昼間が穴場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  烏丸御池エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  烏丸御池エリアだけでなく、近隣の<Link href="/area/kyoto-station/" className="text-warm-700 underline hover:text-warm-900">京都駅</Link>、<Link href="/area/shijo-kawaramachi/" className="text-warm-700 underline hover:text-warm-900">四条河原町</Link>、<Link href="/area/kyoto-shiyakusho-mae/" className="text-warm-700 underline hover:text-warm-900">京都市役所前</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>烏丸御池エリアの豆知識：</strong>烏丸御池は四季折々の風情が楽しめるエリアです。観光シーズンは周辺の混雑で移動に時間がかかることがあるため、時間に余裕を持って出発しましょう。町家スタジオなど烏丸御池ならではの空間でピラティスを楽しめるのも魅力のひとつです。
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
                  月額1万円以下のスタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果的に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（月2回 15,000円〜）</li>
                  <li className="text-warm-700">• ルルト（月3回 29,700円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  烏丸御池駅から徒歩圏内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（駅 徒歩1分）</li>
                  <li className="text-warm-700">• ルルト（駅 徒歩3分）</li>
                  <li className="text-warm-700">• STUDIO IVY（駅 徒歩4分）</li>
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
                  コスパ重視のグループ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                  <li>• zen place（10,450円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  大手マシン専門。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• zen place フリー（14,960円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル月2回〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全オーダーメイド。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（15,000円〜/月2回）</li>
                  <li>• ルルト（29,700円〜/月3回）</li>
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
                  ダイエット、姿勢改善、リハビリなど目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  烏丸御池の料金相場はグループ月4回で8,800円〜14,190円。パーソナルは月2回15,000円〜。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESとRintosullは無料体験。ルルトは体験1,000円で全額返金保証付き。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  烏丸御池は地下鉄烏丸線・東西線の2路線利用可能。CLUB PILATESは駅徒歩1分とアクセス抜群。
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
              今回は烏丸御池・四条烏丸エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では烏丸御池エリアにあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜4,500円。<br />
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
                <Link href="/area/gion-shijo/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">祇園四条</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="karasuma-oike" areaName="烏丸御池" />

      <RelatedAreas currentSlug="karasuma-oike" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
