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
  title: '【2026最新】ピラティス関内おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '関内エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,関内,馬車道,横浜,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'アーバンクラシックピラティス 関内店',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.6,
    reviewCount: 118,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '関内駅から徒歩1分、マリナード地下街内でアクセス抜群！マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式で30分完結。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '2週間前',
        text: '予約不要で通い放題。仕事帰りにそのまま立ち寄れるのが便利。短時間で全身効率よく鍛えられます。',
      },
      {
        author: 'R.N',
        rating: 5,
        date: '3週間前',
        text: '月4回から通い放題まで選べるプランが嬉しい。初心者でもマシンの使い方を丁寧に教えてもらえます。',
      },
    ],
    price: '月4回 9,680円〜',
    trial: '体験レッスンあり',
    features: ['関内駅徒歩1分', 'サーキット形式', '30分完結', '予約不要'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のスタジオ。関内駅から徒歩1分、マリナード地下街内。30分で全身を効率よく鍛えられる。予約不要で通い放題プランあり。',
    access: 'JR根岸線・横浜市営地下鉄ブルーライン「関内駅」徒歩1分',
    address: '神奈川県横浜市中区港町5-24-2 マリナード地下街',
    popularPlan: {
      name: '月4回プラン',
      description: '30分サーキット形式のマシンピラティス＆ファンクショナルトレーニング。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      '予約不要',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', 'ダイエット', '運動不足解消', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ファンクショナルトレーニング機器', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 横浜元町スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 185,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '関内駅からも徒歩圏内。マットもマシンも両方受けられるのが魅力。全国150店舗以上で相互利用可能。男性もOK。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: 'グループ体験1,000円で気軽に試せました。ピラティス専門で20年以上の実績があり安心。元町の落ち着いた雰囲気で集中できます。',
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
    features: ['元町エリア', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。横浜元町エリアに位置し、関内からもアクセス可能。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。男性も歓迎。',
    access: 'みなとみらい線「元町・中華街駅」周辺 / JR「関内駅」徒歩圏内',
    address: '神奈川県横浜市中区元町エリア（詳細は公式サイトでご確認ください）',
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
      facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'マシンピラティスあるく 関内・馬車道店',
    image: '/images/studios/aruku-kannai.webp',
    rating: 4.8,
    reviewCount: 72,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '理学療法士によるパーソナルレッスン。1500名以上のリハビリ実績がある先生が、一人ひとりに合わせたメニューを組んでくれます。完全プライベート空間で安心。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '馬車道駅から徒歩5分。女性専用で清潔感のあるスタジオ。体の痛みや不調がある方にもおすすめ。医学的な知識に基づいた指導。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '日本大通り駅からも徒歩5分。パーソナル専門なのでしっかり見てもらえる。運動が苦手な方にも丁寧に指導。',
      },
    ],
    price: 'パーソナル（要問合せ）',
    trial: '体験レッスンあり',
    features: ['理学療法士', '女性専用', '完全プライベート', '馬車道徒歩5分'],
    description: '理学療法士とピラティスインストラクターの資格を持つトレーナーによる女性専用パーソナルマシンピラティス。馬車道駅から徒歩5分。1500名以上のリハビリ実績を活かした指導。完全プライベート空間でオーダーメイドレッスン。',
    access: 'みなとみらい線「馬車道駅」出口5 徒歩5分 / 「日本大通り駅」徒歩5分',
    address: '神奈川県横浜市中区南仲通3-30-1 スギヤマビル 2-A',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '理学療法士によるオーダーメイドのマシンピラティス。',
      price: '要問合せ（公式サイト参照）',
    },
    options: [
      '完全プライベート空間',
      '理学療法士による指導',
      '女性専用',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'リハビリ', '体の不調改善', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '完全プライベート空間', '更衣室'],
    },
  },
  {
    name: 'Cachette（カシェット）関内',
    image: '/images/studios/cachette-kannai.webp',
    rating: 4.7,
    reviewCount: 65,
    reviews: [
      {
        author: 'C.S',
        rating: 5,
        date: '1週間前',
        text: '関内駅から徒歩5分の女性専用パーソナルスタジオ。カウンセリングに基づいた丁寧なレッスンで、自分の体に合ったプログラムが受けられます。',
      },
      {
        author: 'T.M',
        rating: 5,
        date: '2週間前',
        text: 'トリガーポイントやピラティスリングなど様々な道具を使ったレッスンが面白い。体の変化を早く実感できました。',
      },
      {
        author: 'A.K',
        rating: 4,
        date: '3週間前',
        text: 'パーソナル専門なので周りを気にせず集中できる。おしゃれなスタジオで通うのが楽しみ。',
      },
    ],
    price: 'パーソナル 1回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '関内駅徒歩5分', 'パーソナル専門', 'カウンセリング充実'],
    description: '関内駅から徒歩5分の女性専用パーソナルピラティススタジオ。カウンセリングに基づき、トリガーポイントやピラティスリングなど様々なプロップを使った丁寧で効果的なレッスンを提供。',
    access: 'JR根岸線「関内駅」徒歩5分',
    address: '神奈川県横浜市中区関内エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'カウンセリングベースのオーダーメイドピラティス。',
      price: '1回 8,800円〜（税込）',
    },
    options: [
      'カウンセリング付き',
      '多彩なプロップ使用',
      '女性専用',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体の不調改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'ピラティスリング', 'トリガーポイント', '更衣室'],
    },
  },
  {
    name: 'スタジオ・ヨギー 横浜',
    image: '/images/studios/studio-yoggy.webp',
    rating: 4.5,
    reviewCount: 158,
    reviews: [
      {
        author: 'Y.N',
        rating: 5,
        date: '1週間前',
        text: '横浜駅近くで関内からもアクセス可能。ヨガ・ピラティス・ビューティペルヴィスの30以上のクラスが受けられる。大手なので安心感がある。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '2週間前',
        text: 'マットピラティスが中心だが、ヨガとの組み合わせで柔軟性と体幹を同時に鍛えられるのが魅力。月額制で通い放題。',
      },
      {
        author: 'K.T',
        rating: 5,
        date: '3週間前',
        text: 'インストラクター養成スクールも運営しているので指導の質が高い。初心者向けクラスが充実していて安心。',
      },
    ],
    price: '月額 11,000円〜',
    trial: '体験レッスンあり',
    features: ['ヨガ&ピラティス', '30以上のクラス', '横浜駅近く', '月額通い放題'],
    description: 'ヨガ・ピラティス・ビューティペルヴィスの3つのプログラムを中心に30以上の多彩なクラスを定期開催。マットピラティスを中心にヨガとの組み合わせで柔軟性と体幹を同時に鍛えられます。',
    access: 'JR「横浜駅」周辺（関内からもアクセス可能）',
    address: '神奈川県横浜市西区横浜エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月額通い放題プラン',
      description: 'ヨガ・ピラティス・ビューティペルヴィスのクラスが受け放題。',
      price: '月額 11,000円〜（税込）',
    },
    options: [
      '30以上のレギュラークラス',
      'ヨガクラス',
      'ビューティペルヴィス',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['柔軟性向上', '姿勢改善', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'ヨガマット', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！関内エリアのスタジオはほとんどが初心者歓迎。アーバンクラシックは30分サーキット形式で初心者も始めやすい。zen placeはグループ体験1,000円で気軽にスタート。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '関内エリアの料金相場は？',
    answer: '関内エリアのピラティススタジオの料金相場は、グループ月4回で9,680円〜10,450円程度。アーバンクラシックが月4回9,680円〜と最も手頃です。パーソナルは1回8,800円〜が相場となっています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place横浜元町、アーバンクラシック、スタジオ・ヨギーは男性も通えます。あるく・Cachetteは女性専用です。zen placeは男性比率が約20%で、男性も気兼ねなく通える雰囲気です。',
  },
  {
    question: '理学療法士の指導を受けられるスタジオは？',
    answer: 'マシンピラティスあるくは理学療法士がパーソナルで指導。1500名以上のリハビリ実績があり、体の痛みや不調がある方にも安心して通えます。完全プライベート空間でのオーダーメイドレッスンが特徴です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。スタジオ・ヨギーではヨガとピラティスの両方を受けられるので、両方試して自分に合うスタイルを見つけるのもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
]

export default function KannaiPage() {
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
              【2026最新】ピラティス関内おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">関内</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="関内" />

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
              「関内で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、関内・馬車道エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>関内・馬車道でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>コスパの良いスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="関内" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              関内のおすすめピラティススタジオ5選
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
              関内のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">9,680円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,800円〜11,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              関内エリアの料金はスタジオのタイプや立地によって異なります。まずは体験レッスンを活用して、料金と内容のバランスが自分に合うスタジオを見つけましょう。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              関内でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通いやすさは継続の鍵</h3>
                <p className="text-warm-600 leading-relaxed">
                  関内でスタジオを選ぶ際、自宅や職場からの距離・所要時間が最も重要なポイントです。駅からの徒歩分数だけでなく、駐車場・駐輪場の有無も確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">レッスンスケジュールと生活リズムの相性</h3>
                <p className="text-warm-600 leading-relaxed">
                  自分が通える時間帯にレッスンが開講されているか事前に確認しましょう。特に仕事帰りに通いたい方は、平日夜のレッスン枠が充実しているスタジオがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">最低契約期間・キャンセルポリシーを確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  入会キャンペーン適用時に最低契約期間が設定されるスタジオもあります。また、レッスン直前のキャンセルルールもスタジオごとに異なるため、入会前に必ず確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンは2〜3スタジオ比較がおすすめ</h3>
                <p className="text-warm-600 leading-relaxed">
                  1つのスタジオだけで決めず、関内エリアの複数スタジオで体験レッスンを受けましょう。インストラクターの指導スタイル、スタジオの清潔感、会員の雰囲気を比較して判断すると後悔しません。
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
                  <strong>関内エリアの豆知識：</strong>スタジオによってはウェアやタオルのレンタルサービスを提供しているところもあります。仕事帰りや外出先から直接通いたい方は、レンタルの有無を事前に確認しておくと便利です。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円前後で通えるスタジオ。グループレッスン中心で気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• アーバンクラシック（月4回 9,680円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果的に。一人ひとりに合わせたオーダーメイドレッスンが受けられます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• あるく（理学療法士のパーソナル）</li>
                  <li className="text-warm-700">• Cachette（女性専用パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  関内駅から徒歩1分。仕事帰りや買い物ついでに通いやすい好立地なスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• アーバンクラシック（関内駅 徒歩1分）</li>
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
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。初心者向けの基本的なレッスンが多い。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• アーバンクラシック（9,680円〜）</li>
                  <li>• zen place（10,450円〜）</li>
                  <li>• スタジオ・ヨギー（11,000円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜17,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。グループレッスン通い放題プラン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place フリー（16,940円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 8,800円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全オーダーメイド。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Cachette（8,800円〜/回）</li>
                  <li>• あるく（要問合せ）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、リハビリなど目的によって最適なスタジオは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  関内の料金相場はグループ月4回で9,680円〜10,450円。パーソナルは1回8,800円〜。無理なく継続できる予算を決めましょう。料金だけでなく、入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。zen placeはグループ体験1,000円で気軽に試せます。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。各スタジオで体験レッスンを実施中です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。関内はJR根岸線・ブルーライン・みなとみらい線が利用可能。アーバンクラシックは関内駅徒歩1分とアクセス抜群。自宅や職場から通いやすい場所を選ぶのがおすすめです。
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
              今回は関内・馬車道エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では関内エリアにあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン1,000円〜。<br />
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

      <RelatedAreas currentSlug="kannai" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
