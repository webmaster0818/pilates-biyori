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
  alternates: { canonical: 'https://biyori-pilates.com/area/sasazuka/' },
  title: 'ピラティス笹塚おすすめ6選料金・体験レッスン・マシン対応を比較',
  description: '笹塚エリアのおすすめピラティススタジオ6選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,笹塚,渋谷区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 笹塚スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '\/images\/studios\/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 500円〜（キャンペーン）',
    features: ['笹塚駅徒歩5分', '2023年オープン', '男性利用可', '全国他店利用'],
    description: 'ピラティス専門の大手スタジオです。京王線笹塚駅北口から徒歩5分です。2023年9月オープンの新しいスタジオです。マットグループ・マシングループ・プライベートの3タイプです。リフォーマー・キャデラック・チェアなどマシン完備です。全国150店舗以上で他店利用可能です。',
    access: '京王線「笹塚駅」北口 徒歩5分',
    address: '東京都渋谷区笹塚2-21-12 グリーンライフビル 6F',
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
    name: 'CLUB PILATES 笹塚店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=75159',
    image: '\/images\/studios\/club-pilates.webp',
    price: '月4回 13,090円／月8回 24,090円／通い放題 37,290円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['笹塚駅徒歩1分', '世界最大級', '15種類の器具', '男性利用可'],
    description: '世界最大級のマシンピラティスブランドです。笹塚駅から徒歩1分、笹塚ショッピングモールTWENTY ONE 2Fに入居です。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備しています。8つのプログラムと4段階のレベル分けです。',
    access: '京王線「笹塚駅」徒歩1分（笹塚ショッピングモール TWENTY ONE 2F）',
    address: '東京都渋谷区笹塚1丁目 笹塚ショッピングモール TWENTY ONE 2F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスンです。4段階のレベル分けで安心です。',
      price: '月4回 13,090円（税表記なし）',
    },
    options: ['月8回 24,090円', '通い放題 37,290円', '入会金 5,500円（税込）・事務手数料 2,200円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜木 7:00-21:00 / 金 8:00-21:00 / 土 7:00-18:00 / 日 9:00-21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'ピラティスミラー 笹塚',
    image: '\/images\/studios\/pilates-mirror.webp',
    price: '月額 11,000円（月6回）',
    trial: '体験レッスン 2,200円',
    features: ['女性専用', '笹塚駅徒歩4分', 'コナミ運営', '30分レッスン'],
    description: 'コナミスポーツが運営する女性専用マシンピラティススタジオです。笹塚駅から徒歩4分です。「もっと鏡が見たくなる」をコンセプトに、鏡を効果的に活用したレッスンです。30分の短時間レッスンで最大6名の少人数制です。月額11,000円で月6回まで利用可能です。',
    access: '京王線「笹塚駅」徒歩4分',
    address: '東京都渋谷区笹塚エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: '女性専用マシンピラティス月6回です。30分の短時間レッスンです。',
      price: '月額 11,000円（税込）',
    },
    options: [
      '月会費プラン（11,000円/月6回）',
      'プライベート30分（4,400円）',
      'プライベート50分（6,600円）',
      '入会金 11,000円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'ミラー', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'ELEMENT 笹塚A1店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '\/images\/studios\/element.webp',
    price: '月4回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['通い放題あり', 'パーソナル指導', '5メニュー対応', 'ボディケアあり'],
    description: '通い放題のパーソナルマシンピラティスジムです。笹塚駅から徒歩8分、Daiwa笹塚タワー内スポーツクラブA-1笹塚に入居です。マンツーマン指導を月額制でリーズナブルに提供しています。5つのメニューとボディケアも可能です。',
    access: '京王線「笹塚駅」徒歩8分',
    address: '東京都渋谷区笹塚1-50-1 Daiwa笹塚タワー スポーツクラブA-1笹塚',
    popularPlan: {
      name: '全日フルタイムプラン（通い放題）',
      description: 'マンツーマンのパーソナルマシンピラティス通い放題です。',
      price: '月額 43,780円（税込）',
    },
    options: [
      '月4回フルタイム（22,000円）',
      '月8回フルタイム（29,150円）',
      '通い放題（43,780円）',
      '初回無料体験あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', 'ダイエット', '機能改善', '体幹強化'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'トレーニング器具', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 笹塚（近隣エリア）',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '\/images\/studios\/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', '部位別プログラム', 'マシン専門', '通い放題あり'],
    description: '女性専用マシンピラティス専門スタジオです。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実しています。強度や目的に合わせて選べるクラスが豊富です。笹塚から電車で数分のアクセスです。',
    access: '笹塚エリアから電車で数分（詳細は公式サイトでご確認ください）',
    address: '東京都内（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回です。部位別プログラムも選べます。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜金 9:30-16:00,17:30-22:00 / 土日祝 9:30-20:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Pilates Mee笹塚店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。笹塚駅から徒歩1分です。',
    access: '笹塚駅 徒歩1分',
    address: '〒151-0073 東京都渋谷区笹塚1丁目56-6 クレセントプラザ笹塚 50D号室',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },

  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。笹塚エリアのスタジオはほとんどが初心者歓迎です。CLUB PILATESは4段階のレベル分け、ピラティスミラーは30分の短時間レッスンのため、初めての方も始めやすい体制です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。笹塚はマシン専門スタジオが充実しています。',
  },
  {
    question: '笹塚のピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜13,420円程度です。ピラティスミラーは月額11,000円で月6回です。ELEMENTのパーソナルは月4回22,000円〜です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。CLUB PILATESは無料イントロクラス、ELEMENTは初回無料体験があります。zen placeはキャンペーン500円〜です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place笹塚、CLUB PILATES笹塚、ELEMENTは男性も通えます。ピラティスミラーとピラティスKは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'CLUB PILATESとELEMENTは無料体験があります。zen placeはキャンペーン体験500円〜です。ピラティスKは体験2,000円です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function SasazukaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '笹塚', url: 'https://biyori-pilates.com/area/sasazuka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス笹塚おすすめ6選<br className="hidden md:block" />
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
              <span className="text-warm-600">笹塚</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="笹塚" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、笹塚エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>笹塚でピラティススタジオを探している</span>
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
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="笹塚" />
        <AreaMarketComparison studios={studios} areaName="笹塚" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              笹塚のおすすめピラティススタジオ6選
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
              笹塚のピラティス料金相場
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
                    <td className="px-4 py-3">10,450円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 13,420円〜43,780円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              笹塚は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の代々木上原エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              笹塚でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京王線「笹塚駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  笹塚エリアのスタジオは笹塚駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。笹塚駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  笹塚は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  笹塚エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  笹塚エリアだけでなく、近隣の<Link href="/area/yoyogi-uehara/" className="text-warm-700 underline hover:text-warm-900">代々木上原</Link>、<Link href="/area/shinjuku/" className="text-warm-700 underline hover:text-warm-900">新宿</Link>、<Link href="/area/shimokitazawa/" className="text-warm-700 underline hover:text-warm-900">下北沢</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>笹塚エリアの豆知識：</strong>笹塚は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額2万円未満で通えるスタジオです（店舗カードの料金）。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 笹塚スタジオ（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー 笹塚（月額 11,000円（月6回））</li>
                  <li className="text-warm-700">• CLUB PILATES 笹塚店（月4回 13,090円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー 笹塚</li>
                  <li className="text-warm-700">• ピラティスK 笹塚（近隣エリア）</li>
                  <li className="text-warm-700">• Pilates Mee笹塚店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES 笹塚店（京王線「笹塚駅」徒歩1分（笹塚ショッピングモール TWENTY ONE 2F））</li>
                  <li className="text-warm-700">• Pilates Mee笹塚店（笹塚駅 徒歩1分）</li>
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
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。
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
                  グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• CLUB PILATES（月4回 13,090円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• CLUB PILATES（通い放題 37,290円）</li>
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
                  笹塚の掲載店のうち、公式サイトで料金を確認できた店舗のグループ月4回は10,450円〜13,090円（zen place pilates 笹塚スタジオ（マット）・CLUB PILATES 笹塚店・2026年10月確認）です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  体験料金は、zen place pilates 笹塚スタジオが「グループ体験 500円〜（キャンペーン）」、CLUB PILATES 笹塚店が「体験レッスン 無料（30分イントロクラス）」、ピラティスミラー 笹塚が「体験レッスン 2,200円」、ELEMENT 笹塚A1店が「体験レッスン 無料」です（店舗カードの記載）。最新の条件は各公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  笹塚の掲載スタジオでは、CLUB PILATES 笹塚店（京王線「笹塚駅」徒歩1分（笹塚ショッピングモール TWENTY ONE 2F））、Pilates Mee笹塚店（笹塚駅 徒歩1分）、ピラティスミラー 笹塚（京王線「笹塚駅」徒歩4分）が駅から近いスタジオです。通う時間帯の経路もご確認ください。
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
              本ページでは、笹塚エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、笹塚にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜3,850円です。<br />
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
      <ConsultantSection areaKey="sasazuka" areaName="笹塚" />

      <RelatedAreas currentSlug="sasazuka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
