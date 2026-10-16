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
  alternates: { canonical: 'https://biyori-pilates.com/area/kamakura/' },
  title: '【2026年10月最新】鎌倉のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '鎌倉エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,鎌倉,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 鎌倉スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['鎌倉駅徒歩4分', '湘南最大マシン数', '男性利用可', '全国他店利用'],
    description: 'ピラティス専門の大手スタジオです。鎌倉駅西口から徒歩4分です。湘南エリア最大数のピラティスマシンを完備しています。マットグループ・マシングループ・プライベートの3タイプです。全国150店舗以上で他店利用可能です。ヨガレッスンも受講可能です。',
    access: 'JR横須賀線・湘南新宿ライン・江ノ島電鉄「鎌倉駅」西口 徒歩4分',
    address: '神奈川県鎌倉市御成町7-8 御成エバービル2F',
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
      hours: '月〜金 7:30〜21:00 / 土日祝 7:30〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 鎌倉店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '通い放題 14,080円〜',
    trial: '無料体験あり',
    features: ['鎌倉駅徒歩3分', '予約不要', '1回30分', 'サーキット形式'],
    description: '「30才からのピラティス×ボディメイク」をテーマにしたサーキット形式のスタジオです。鎌倉駅東口から徒歩3分です。予約不要・1回30分でインナーマッスルとアウターマッスルを効率的に鍛えます。通い放題でもリーズナブルな価格設定です。',
    access: 'JR横須賀線「鎌倉駅」東口 徒歩3分',
    address: '神奈川県鎌倉市小町1丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: '予約不要・1回30分のサーキット形式です。好きな時間に何度でも通えます。',
      price: '月額 14,080円（税込）',
    },
    options: [
      '週1回プラン',
      '週2回プラン',
      '通い放題プラン（14,080円）',
      '無料体験あり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', '体幹強化', '運動不足解消', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['サーキットマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'SUGATA 鎌倉',
    image: '/images/studios/sugata-kamakura.webp',
    price: '1回 3,000円〜',
    trial: '体験レッスン 2,000円',
    features: ['鎌倉駅徒歩5分', 'ヨガ＆ピラティス', 'リフォーマーあり', 'SUP体験'],
    description: '鎌倉駅東口から徒歩5分です。ヨガとピラティスの両方が楽しめるスタジオです。マットピラティスのグループレッスンとリフォーマーピラティスのプライベートレッスンを提供しています。SUPなど湘南ならではのアウトドアプログラムも併設しています。',
    access: 'JR横須賀線「鎌倉駅」東口 徒歩約5分',
    address: '神奈川県鎌倉市御成町3-10 1F',
    popularPlan: {
      name: 'グループレッスン10回券',
      description: 'ヨガ・マットピラティスのグループレッスンに使える10回券です。',
      price: '10回券 24,300円（税込）',
    },
    options: [
      'グループ1回券（3,000円）',
      'グループ4回券（10,800円）',
      'リフォーマープライベート（8,240円/回）',
      '体験レッスン 2,000円',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'リフレッシュ', '健康維持', 'アウトドア'],
    },
    basicInfo: {
      hours: '平日 9:00〜20:00 / 土日祝 9:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ヨガスタジオ', '更衣室'],
    },
  },
  {
    name: 'ピラティスアライアンス 鎌倉スタジオ',
    image: '/images/studios/pilates-alliance-kamakura.webp',
    price: '1回 5,500円〜',
    trial: '体験レッスン 6,600円',
    features: ['鎌倉駅徒歩3分', '国際認定資格', 'プライベート充実', '高品質'],
    description: '国際認定資格保持者によるプライベートセッションと少人数制グループレッスンを提供しています。鎌倉駅から徒歩3分です。リフォーマー・キャデラック・チェアなどマシン完備です。品質を重視した本格ピラティススタジオです。',
    access: 'JR横須賀線「鎌倉駅」徒歩3分',
    address: '神奈川県鎌倉市御成町9-34 Confort御成3F',
    popularPlan: {
      name: 'プライベートセッション',
      description: '国際認定インストラクターによるマンツーマンレッスンです。',
      price: '1回 5,500円〜（税込）',
    },
    options: [
      'プライベートセッション（5,500円〜/回）',
      'グループレッスン',
      '体験レッスン 6,600円',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'リハビリ', '体幹強化', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '9:00〜20:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'マット', '更衣室'],
    },
  },
  {
    name: 'ピラティススタジオ V8 鎌倉',
    image: '/images/studios/pilates-studio-v8-kamakura.webp',
    price: 'プライベート（料金は公式サイト）',
    trial: '体験レッスンあり',
    features: ['鎌倉駅徒歩4分', '完全予約制', 'マンツーマン', '国際認定資格'],
    description: '鎌倉駅から徒歩4分の完全予約制プライベートピラティススタジオです。国際認定資格保有のインストラクターによるマンツーマンレッスンです。一人ひとりの体の状態に合わせたオーダーメイドプログラムを提供しています。',
    access: 'JR横須賀線「鎌倉駅」徒歩4分',
    address: '神奈川県鎌倉市御成町5-16 Link-A2',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '国際認定インストラクターによるマンツーマンの完全予約制レッスンです。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'プライベートレッスン',
      '体験レッスンあり',
      '完全予約制',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'リハビリ', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '9:30〜20:00',
      closed: '不定休（完全予約制）',
      facilities: ['リフォーマー', 'マット', '各種ピラティス器具'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。鎌倉エリアのスタジオはほとんどが初心者歓迎です。URBAN CLASSICは予約不要で30分のサーキット形式です。zen placeは丁寧なレベル分けで安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。鎌倉ではzen placeが最も充実したマシン設備です。',
  },
  {
    question: '鎌倉のピラティスの料金相場は？',
    answer: 'グループレッスンは月4回10,450円〜14,080円程度です。zen placeが月4回10,450円〜で最もリーズナブルです。URBAN CLASSICは通い放題14,080円です。プライベートは1回5,500円〜です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れたら週2〜3回に増やすことをおすすめします。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。各スタジオの持ち物は公式サイトで事前にご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。SUGATAではヨガとピラティスの両方が楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place鎌倉、SUGATA、ピラティスアライアンス、ピラティススタジオV8は男性も通えます。URBAN CLASSICは公式サイトでご確認ください。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'URBAN CLASSIC PILATESは無料体験があります。zen placeはグループ体験1,000円です。SUGATAは体験2,000円です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function KamakuraPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '鎌倉', url: 'https://biyori-pilates.com/area/kamakura/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス鎌倉おすすめ5選<br className="hidden md:block" />
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
              <span className="text-warm-600">鎌倉</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="鎌倉" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、鎌倉エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>鎌倉でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="鎌倉" />
        <AreaMarketComparison studios={studios} areaName="鎌倉" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              鎌倉のおすすめピラティススタジオ5選
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
              鎌倉のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,000円〜24,300円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 5,500円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜6,600円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              鎌倉は海に近い開放的な雰囲気が魅力のエリアです。観光客向けの体験クラスからしっかり通える月額プランまで幅広く、リゾート感覚で通えるスタジオもあります。地元密着型スタジオは料金も良心的なのでご確認ください。近隣の藤沢エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              鎌倉でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR横須賀線・湘南新宿ライン・江ノ島電鉄「鎌倉駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉エリアのスタジオは鎌倉駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。鎌倉駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光シーズンの混雑に備えた予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉は観光エリアとしても人気のため、GW・夏休み・年末年始は体験レッスンの申し込みが増加します。地元の方は観光シーズンを避けた平日昼間が快適に通える時間帯です。ビジター利用を受け付けるスタジオもあるので、旅行のついでに体験するのもおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">季節による料金プランの違いに注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉エリアでは季節限定のキャンペーンや、夏季限定の短期集中プランを提供するスタジオもあります。年間を通して通うなら月額制が割安ですが、特定の時期だけ通いたい方は回数券をご検討ください。入会時のキャンペーンは時期によって内容が変わるので、タイミングを見計らうのもポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉エリアだけでなく、近隣の<Link href="/area/fujisawa/" className="text-warm-700 underline hover:text-warm-900">藤沢</Link>、<Link href="/area/shonan/" className="text-warm-700 underline hover:text-warm-900">湘南</Link>、<Link href="/area/yokohama/" className="text-warm-700 underline hover:text-warm-900">横浜</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>鎌倉エリアの豆知識：</strong>鎌倉は海沿いのエリアならではの開放感が魅力です。特に夏場は汗をかきやすいので、制汗スプレーや替えのTシャツを持参すると快適です。海風で髪が乱れやすい時期は、ヘアバンドやヘアゴムも忘れずにご用意ください。
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
                  <li className="text-warm-700">• zen place pilates 鎌倉スタジオ（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES 鎌倉店（通い放題 14,080円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• このページの掲載スタジオでは該当なし</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• このページの掲載スタジオでは該当なし</li>
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
                  <li>• URBAN CLASSIC PILATES 鎌倉店（通い放題 14,080円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• このページの掲載スタジオでは該当なし（各スタジオの料金は上の店舗カードを参照）</li>
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
                  鎌倉の料金相場はグループ月4回で10,450円〜15,070円です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  体験料金は、zen place pilates 鎌倉スタジオが「グループ体験 1,000円」、URBAN CLASSIC PILATES 鎌倉店が「無料体験あり」、SUGATA 鎌倉が「体験レッスン 2,000円」、ピラティスアライアンス 鎌倉スタジオが「体験レッスン 6,600円」です（店舗カードの記載）。最新の条件は各公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉の掲載スタジオでは、URBAN CLASSIC PILATES 鎌倉店（JR横須賀線「鎌倉駅」東口 徒歩3分）、ピラティスアライアンス 鎌倉スタジオ（JR横須賀線「鎌倉駅」徒歩3分）、zen place pilates 鎌倉スタジオ（JR横須賀線・湘南新宿ライン・江ノ島電鉄「鎌倉駅」西口 徒歩4分）が駅から近いスタジオです。通う時間帯の経路もご確認ください。
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
              本ページでは、鎌倉エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、鎌倉にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kamakura" areaName="鎌倉" />

      <RelatedAreas currentSlug="kamakura" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
