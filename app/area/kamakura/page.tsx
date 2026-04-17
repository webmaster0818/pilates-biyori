import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'



export const metadata = {
  title: '【2026最新】ピラティス鎌倉おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '鎌倉エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,鎌倉,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 鎌倉スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 178,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '鎌倉駅西口から徒歩4分。湘南エリア最大数のピラティスマシンを完備。マットグループ・マシングループ・プライベートの3タイプから選べます。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '2週間前',
        text: '全国150店舗以上で相互利用可能なので、都内のスタジオも使えて便利。ヨガレッスンも受講可能。男性もOK。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '3週間前',
        text: 'ピラティス専門20年以上の実績。インストラクターの質が高く、体験当日入会で入会金無料。朝7:30から営業。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['鎌倉駅徒歩4分', '湘南最大マシン数', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。鎌倉駅西口から徒歩4分。湘南エリア最大数のピラティスマシンを完備。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。ヨガレッスンも受講可能。',
    access: 'JR横須賀線・湘南新宿ライン・江ノ島電鉄「鎌倉駅」西口 徒歩4分',
    address: '神奈川県鎌倉市御成町7-8 御成エバービル2F',
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
      hours: '月〜金 7:30〜21:00 / 土日祝 7:30〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 鎌倉店',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.6,
    reviewCount: 98,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '鎌倉駅東口から徒歩3分。予約不要で1回30分のサーキット形式だから、仕事帰りやお買い物の合間にサクッと通えます。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '2週間前',
        text: '「30才からのピラティス×ボディメイク」がテーマ。インナーマッスルとアウターマッスルを同時に鍛えられるサーキット形式が新鮮。',
      },
      {
        author: 'S.Y',
        rating: 4,
        date: '3週間前',
        text: '通い放題でも14,080円とリーズナブル。予約不要なので空いた時間にふらっと行けるのが最大のメリット。',
      },
    ],
    price: '通い放題 14,080円〜',
    trial: '無料体験あり',
    features: ['鎌倉駅徒歩3分', '予約不要', '1回30分', 'サーキット形式'],
    description: '「30才からのピラティス×ボディメイク」をテーマにしたサーキット形式のスタジオ。鎌倉駅東口から徒歩3分。予約不要・1回30分でインナーマッスルとアウターマッスルを効率的に鍛える。通い放題でもリーズナブルな価格設定。',
    access: 'JR横須賀線「鎌倉駅」東口 徒歩3分',
    address: '神奈川県鎌倉市小町1丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: '予約不要・1回30分のサーキット形式。好きな時間に何度でも通える。',
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
    rating: 4.7,
    reviewCount: 112,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '鎌倉駅東口から徒歩5分、若宮大路の下馬交差点に面した好立地。ヨガとピラティスの両方が受けられるスタジオ。リフォーマーピラティスのプライベートレッスンが充実。',
      },
      {
        author: 'N.T',
        rating: 5,
        date: '2週間前',
        text: 'グループレッスンは初回体験2,000円で気軽に試せます。マットピラティスとリフォーマーピラティスの両方があるのが魅力。',
      },
      {
        author: 'C.O',
        rating: 4,
        date: '3週間前',
        text: 'SUPやパドリングなど湘南ならではのアウトドアプログラムも。鎌倉の雰囲気と合ったアットホームなスタジオです。',
      },
    ],
    price: '1回 3,000円〜',
    trial: '体験レッスン 2,000円',
    features: ['鎌倉駅徒歩5分', 'ヨガ＆ピラティス', 'リフォーマーあり', 'SUP体験'],
    description: '鎌倉駅東口から徒歩5分。ヨガとピラティスの両方が楽しめるスタジオ。マットピラティスのグループレッスンとリフォーマーピラティスのプライベートレッスンを提供。SUPなど湘南ならではのアウトドアプログラムも併設。',
    access: 'JR横須賀線「鎌倉駅」東口 徒歩約5分',
    address: '神奈川県鎌倉市御成町3-10 1F',
    popularPlan: {
      name: 'グループレッスン10回券',
      description: 'ヨガ・マットピラティスのグループレッスンに使える10回券。',
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
    rating: 4.8,
    reviewCount: 85,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: '鎌倉駅から徒歩3分。国際認定資格を持つインストラクターによる本格的なプライベートセッション。少人数制グループも。指導の質が非常に高いです。',
      },
      {
        author: 'K.A',
        rating: 5,
        date: '2週間前',
        text: '品質にこだわったスタジオ。マシン完備でリフォーマー、キャデラック、チェアなど使える。プライベートレッスンで自分だけのプログラムを組んでもらえます。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '3週間前',
        text: '1回あたりの料金は高めだが、その分インストラクターの質が高い。しっかり効果を出したい人向け。',
      },
    ],
    price: '1回 5,500円〜',
    trial: '体験レッスン 6,600円',
    features: ['鎌倉駅徒歩3分', '国際認定資格', 'プライベート充実', '高品質'],
    description: '国際認定資格保持者によるプライベートセッションと少人数制グループレッスンを提供。鎌倉駅から徒歩3分。リフォーマー・キャデラック・チェアなどマシン完備。品質を重視した本格ピラティススタジオ。',
    access: 'JR横須賀線「鎌倉駅」徒歩3分',
    address: '神奈川県鎌倉市御成町9-34 Confort御成3F',
    popularPlan: {
      name: 'プライベートセッション',
      description: '国際認定インストラクターによるマンツーマンレッスン。',
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
    rating: 4.7,
    reviewCount: 68,
    reviews: [
      {
        author: 'L.H',
        rating: 5,
        date: '1週間前',
        text: '鎌倉駅から徒歩4分の完全予約制プライベートスタジオ。マンツーマンで丁寧に指導してもらえるので、初心者でも安心して通えます。',
      },
      {
        author: 'A.K',
        rating: 5,
        date: '2週間前',
        text: '国際認定資格保有のインストラクターが、一人ひとりの体の状態に合わせたオーダーメイドプログラムを提供。効果を実感しやすい。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: '完全予約制なのでプライバシーが守られる。落ち着いた鎌倉の雰囲気の中でリラックスしてレッスンを受けられます。',
      },
    ],
    price: 'プライベート（料金は公式サイト）',
    trial: '体験レッスンあり',
    features: ['鎌倉駅徒歩4分', '完全予約制', 'マンツーマン', '国際認定資格'],
    description: '鎌倉駅から徒歩4分の完全予約制プライベートピラティススタジオ。国際認定資格保有のインストラクターによるマンツーマンレッスン。一人ひとりの体の状態に合わせたオーダーメイドプログラムを提供。',
    access: 'JR横須賀線「鎌倉駅」徒歩4分',
    address: '神奈川県鎌倉市御成町5-16 Link-A2',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '国際認定インストラクターによるマンツーマンの完全予約制レッスン。',
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
    answer: '大丈夫です！鎌倉エリアのスタジオはほとんどが初心者歓迎。URBAN CLASSICは予約不要で30分のサーキット形式。zen placeは丁寧なレベル分けで安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。鎌倉ではzen placeが最も充実したマシン設備。',
  },
  {
    question: '鎌倉のピラティスの料金相場は？',
    answer: 'グループレッスンは月4回10,450円〜14,080円程度。zen placeが月4回10,450円〜で最もリーズナブル。URBAN CLASSICは通い放題14,080円。プライベートは1回5,500円〜。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に増やしましょう。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。各スタジオの持ち物は公式サイトで事前に確認しましょう。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。SUGATAではヨガとピラティスの両方が楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place鎌倉、SUGATA、ピラティスアライアンス、ピラティススタジオV8は男性も通えます。URBAN CLASSICは公式サイトでご確認ください。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'URBAN CLASSIC PILATESは無料体験あり。zen placeはグループ体験1,000円。SUGATAは体験2,000円。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KamakuraPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス鎌倉おすすめ10選！<br className="hidden md:block" />
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
              <span className="text-warm-600">鎌倉</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="鎌倉" />

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
              「鎌倉で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、鎌倉エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
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
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="鎌倉" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              鎌倉のおすすめピラティススタジオ10選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
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
              鎌倉エリアの料金はスタジオのタイプや立地によって異なります。まずは体験レッスンを活用して、料金と内容のバランスが自分に合うスタジオを見つけましょう。
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
                <h3 className="text-lg font-bold text-warm-900 mb-3">駅前にスタジオが集中している傾向</h3>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉エリアではスタジオの多くが駅徒歩5分圏内に集中しています。駅から離れたスタジオの場合は駐車場・駐輪場の有無を事前に確認しておくと安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車・自転車通いの場合は駐車場を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉は車や自転車で通う方も多いエリアです。スタジオ自体に駐車場がない場合でも、近隣のコインパーキングや提携駐車場がある場合があるので、事前に問い合わせておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">営業時間が都心部より短い場合がある</h3>
                <p className="text-warm-600 leading-relaxed">
                  郊外のスタジオは都心部と比べて営業時間が短い傾向があります。特に平日夜の最終レッスン時間は要チェック。仕事帰りに通いたい方は、21時以降もレッスンがあるか確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ショッピングモール近接のスタジオは便利</h3>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉エリアでは商業施設の近くにスタジオがある場合、買い物のついでに通えて続けやすいメリットがあります。通い放題プランと組み合わせると生活動線に組み込みやすくおすすめです。
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
                  <strong>鎌倉エリアの豆知識：</strong>スタジオによってはウェアやタオルのレンタルサービスを提供しているところもあります。仕事帰りや外出先から直接通いたい方は、レンタルの有無を事前に確認しておくと便利です。
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
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 鎌倉（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 鎌倉（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• the SILK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• zen place（東口 徒歩2分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• the SILK（12,980円〜/月3回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• BDC PILATES（14,520円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• CLUB PILATES（28,490円/通い放題）</li>
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
                  鎌倉の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKとCLUB PILATESは無料体験。zen placeは1,000円、ピラティスKは2,000円で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  鎌倉はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は鎌倉エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では鎌倉にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜3,850円。<br />
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

      <RelatedAreas currentSlug="kamakura" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
