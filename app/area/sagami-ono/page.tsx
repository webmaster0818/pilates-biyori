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
  title: '【2026最新】ピラティス相模大野おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '相模大野エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,相模大野,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 相模大野店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 182,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: '相模大野駅から徒歩1分！ジョイモアーズ6階にあり買い物ついでに通えます。女性専用で安心。音楽に合わせたリフォーマーレッスンが楽しい。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '2週間前',
        text: '体験0円で気軽にスタートできました。月4回13,420円とコスパ良し。部位別プログラムでお腹周りに集中できるのが嬉しい。',
      },
      {
        author: 'A.K',
        rating: 4,
        date: '3週間前',
        text: '火〜金は22時まで営業で仕事帰りでも通いやすい。マシン専門なのでリフォーマーの台数が多く予約も取りやすいです。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', '相模大野駅徒歩1分', '部位別プログラム', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオ。相模大野駅から徒歩1分、ジョイモアーズ6階。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。強度や目的に合わせて選べるクラスが豊富。',
    access: '小田急線「相模大野駅」徒歩1分',
    address: '神奈川県相模原市南区相模大野3-9-1 相模大野ジョイモアーズ 6F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
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
      hours: '火〜金 10:00-22:00 / 土日祝 10:00-20:00',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'CLUB PILATES 相模大野店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      {
        author: 'H.M',
        rating: 5,
        date: '1週間前',
        text: '相模大野駅北口から徒歩3分。世界最大級のブランドで15種類の器具を使った本格レッスン。無料体験クラスがあるので気軽にスタートできました。',
      },
      {
        author: 'C.Y',
        rating: 4,
        date: '2週間前',
        text: '4段階のレベル分けで初心者でも安心。男性会員もいます。インストラクター全員が500時間以上の研修を受けた資格保持者。',
      },
      {
        author: 'R.N',
        rating: 5,
        date: '3週間前',
        text: '朝7時から営業で出勤前にも通える。8つのプログラムがあり飽きずに続けられます。',
      },
    ],
    price: '月4回 11,990円〜',
    trial: '体験レッスン 無料',
    features: ['世界最大級', '相模大野駅徒歩3分', '15種類の器具', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。相模大野駅北口から徒歩3分。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備。8つのプログラムと4段階のレベル分け。',
    access: '小田急線「相模大野駅」北口 徒歩3分',
    address: '神奈川県相模原市南区相模大野3-13-7 YSビルB1F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 11,990円（税込）',
    },
    options: [
      '月8回プラン（21,890円）',
      '通い放題プラン（36,190円）',
      'プライベートレッスン（1回 9,900円〜）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'zen place pilates 相模大野スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 120,
    reviews: [
      {
        author: 'K.I',
        rating: 5,
        date: '1週間前',
        text: '相模大野駅から徒歩3分。マット・マシン・プライベートと3タイプのレッスンがあり自分に合ったスタイルを選べる。全国150店舗以上で相互利用可能。',
      },
      {
        author: 'S.O',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス専門で20年以上の実績がある老舗。インストラクターの質が高く、丁寧に指導してもらえる。男性もOK。',
      },
      {
        author: 'N.H',
        rating: 4,
        date: '3週間前',
        text: '体験当日入会で入会金無料。グループ体験1,000円〜と試しやすい。月4回10,450円〜でコスパも良い。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['相模大野駅徒歩3分', 'ピラティス専門', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。相模大野駅から徒歩3分。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。体験当日入会で入会金無料。',
    access: '小田急線「相模大野駅」徒歩3分',
    address: '神奈川県相模原市南区相模大野エリア（詳細は公式サイトでご確認ください）',
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
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'roll UP pilates studio 相模大野',
    image: '/images/studios/rollup-pilates-sagamiono.webp',
    rating: 4.6,
    reviewCount: 85,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: '相模大野駅南口から徒歩3分。ココカラ相模大野1Fにあるアクセス抜群のスタジオ。経験豊富なインストラクターが一人ひとりに合わせた指導をしてくれます。',
      },
      {
        author: 'E.S',
        rating: 4,
        date: '2週間前',
        text: '体験0円で気軽に試せました。月4回11,000円〜とリーズナブル。都度払い2,200円もあるので気軽に始められます。',
      },
      {
        author: 'M.K',
        rating: 5,
        date: '3週間前',
        text: 'マシンピラティス専門で、リフォーマーを使った本格レッスンが受けられる。少人数制で丁寧に見てもらえるのが嬉しい。',
      },
    ],
    price: '月4回 11,000円〜',
    trial: '体験レッスン 0円',
    features: ['相模大野駅徒歩3分', 'マシン専門', '都度払いあり', '少人数制'],
    description: '相模大野駅南口から徒歩3分、ココカラ相模大野1Fのマシンピラティス専門スタジオ。経験豊富なインストラクターが一人ひとりのニーズに合わせた指導を行う。都度払い2,200円〜も可能で気軽に始められる。',
    access: '小田急線「相模大野駅」南口 徒歩3分',
    address: '神奈川県相模原市南区相模大野7-19-1 ココカラ相模大野1F',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティスのグループレッスン月4回。',
      price: '月4回 11,000円（税込）',
    },
    options: [
      '都度払い（1回 2,200円〜）',
      '月8回プラン',
      '体験レッスン 0円',
      '月額制オプションあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'スタジオBYK ボーノ相模大野店',
    image: '/images/studios/studio-byk-sagamiono.webp',
    rating: 4.5,
    reviewCount: 72,
    reviews: [
      {
        author: 'A.Y',
        rating: 5,
        date: '1週間前',
        text: '相模大野駅北口サンデッキ直結で徒歩3分。ボーノ相模大野2Fにあるので雨の日も安心。マシンとマット両方受けられるのが魅力。',
      },
      {
        author: 'K.N',
        rating: 4,
        date: '2週間前',
        text: 'パーソナルレッスンが充実。マシンピラティスのプライベートレッスンで身体の癖をしっかり矯正してもらえました。',
      },
      {
        author: 'R.I',
        rating: 5,
        date: '3週間前',
        text: 'グループレッスンとパーソナルの両方を提供。体験は4,400円とやや高めだが、質の高い指導が受けられます。',
      },
    ],
    price: '1回 3,300円〜',
    trial: '体験レッスン 4,400円',
    features: ['ボーノ相模大野内', '駅直結', 'パーソナル充実', 'マシン＆マット'],
    description: 'ボーノ相模大野2Fのピラティス専門スタジオ。相模大野駅北口サンデッキ直結で徒歩3分。パーソナルレッスンとグループレッスンの両方を提供。マシンとマット両方のピラティスが受けられる。',
    access: '小田急線「相模大野駅」北口サンデッキ直結 徒歩3分',
    address: '神奈川県相模原市南区相模大野3-3 ボーノ サウスモール 2F',
    popularPlan: {
      name: 'グループレッスン',
      description: 'マシン＆マットのグループレッスン。',
      price: '1回 3,300円〜（税込）',
    },
    options: [
      'パーソナルレッスン',
      'グループレッスン（1回 3,300円〜）',
      '体験レッスン（4,400円）',
      '回数券あり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！相模大野エリアのスタジオはほとんどが初心者歓迎。CLUB PILATESは4段階のレベル分け、ピラティスKは音楽に合わせた楽しいレッスンで初心者でも安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。相模大野はマシン専門スタジオが特に充実。',
  },
  {
    question: '相模大野のピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜13,420円程度。zen placeが月4回10,450円〜で最もリーズナブル。roll UPは月4回11,000円〜、CLUB PILATESは月4回11,990円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。ピラティスKとroll UPは0円で体験可能。CLUB PILATESも無料体験あり。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place、CLUB PILATES、roll UP、スタジオBYKは男性も通えます。ピラティスKは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'ピラティスK、roll UP、CLUB PILATESは無料体験あり。zen placeはグループ体験1,000円〜。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function SagamiOnoPage() {
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
              【2026最新】ピラティス相模大野おすすめ10選！<br className="hidden md:block" />
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
              <span className="text-warm-600">相模大野</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="相模大野" />

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
              「相模大野で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、相模大野エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>相模大野でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="相模大野" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              相模大野のおすすめピラティススタジオ10選
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
              相模大野のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,300円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 3,300円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,400円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              相模大野エリアの料金はスタジオのタイプや立地によって異なります。まずは体験レッスンを活用して、料金と内容のバランスが自分に合うスタジオを見つけましょう。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              相模大野でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駅前にスタジオが集中している傾向</h3>
                <p className="text-warm-600 leading-relaxed">
                  相模大野エリアではスタジオの多くが駅徒歩5分圏内に集中しています。駅から離れたスタジオの場合は駐車場・駐輪場の有無を事前に確認しておくと安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車・自転車通いの場合は駐車場を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  相模大野は車や自転車で通う方も多いエリアです。スタジオ自体に駐車場がない場合でも、近隣のコインパーキングや提携駐車場がある場合があるので、事前に問い合わせておきましょう。
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
                  相模大野エリアでは商業施設の近くにスタジオがある場合、買い物のついでに通えて続けやすいメリットがあります。通い放題プランと組み合わせると生活動線に組み込みやすくおすすめです。
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
                  <strong>相模大野エリアの豆知識：</strong>スタジオによってはウェアやタオルのレンタルサービスを提供しているところもあります。仕事帰りや外出先から直接通いたい方は、レンタルの有無を事前に確認しておくと便利です。
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
                  <li className="text-warm-700">• the SILK 相模大野（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 相模大野（月4回 13,420円〜）</li>
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
                  相模大野の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
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
                  相模大野はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は相模大野エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では相模大野にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      <RelatedAreas currentSlug="sagami-ono" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
