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
  title: '【2026最新】ピラティス小倉おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '小倉エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,小倉,北九州,福岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 小倉店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 108,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のブランドで15種類の器具を使った本格レッスン。最大12名のグループで1人1台マシン完備。無料の30分体験あり。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けで初心者でも安心。男性会員も多い。8つのプログラムで飽きずに続けられる。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'インストラクター全員が500時間以上の研修を受けた資格保持者。北九州で本格マシンピラティスが受けられるのは嬉しい。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分）',
    features: ['世界最大級', '15種類の器具', '男性OK', '4段階レベル'],
    description: '世界最大級のマシンピラティスブランド。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備。8つのプログラムと4段階のレベル分けで初心者から上級者まで対応。',
    access: 'JR「小倉駅」周辺',
    address: '福岡県北九州市小倉北区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。',
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
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Rintosull 小倉店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 95,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列で安心。月4回8,800円とマシンピラティスでは破格の安さ。大型スクリーンを使ったレッスンが分かりやすい。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '無料体験で気軽に始められた。女性専用で初心者87%以上。豊富なプログラムが目的に合わせて選べる。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: 'プレミアムフリーフルタイムでLAVA等系列のヨガスタジオも全国で利用可能。コスパ最強。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', 'コスパ抜群', '大型スクリーン'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。月4回8,800円のリーズナブルな料金。大型スクリーンを使った分かりやすいレッスン。87%以上が初心者で未経験者も安心。',
    access: 'JR「小倉駅」周辺',
    address: '福岡県北九州市小倉北区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使った本格マシンピラティス。1回あたり2,200円。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '施設使用料あり',
      '無料体験あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '大型スクリーン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'スターピラティス 小倉駅前スタジオ',
    image: '/images/studios/star-pilates-kokura.webp',
    rating: 4.7,
    reviewCount: 88,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '小倉駅直結でアクセス抜群！サウナと個室シャワーも完備。雨の日でも快適に通える。月額5,500円〜とリーズナブル。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '女性専用のマシンピラティス。リフォーマーを使った本格的なグループレッスン。初心者でも丁寧に教えてもらえる。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '北九州エリアでサウナ付きのピラティススタジオは珍しい。レッスン後にサウナでリラックスできるのが嬉しい。',
      },
    ],
    price: '月額 5,500円〜',
    trial: '体験レッスンあり',
    features: ['小倉駅直結', 'サウナ完備', '女性専用', '個室シャワー'],
    description: '小倉駅直結のマシンピラティススタジオ。サウナと個室シャワーを完備。女性専用で月額5,500円〜のリーズナブルな料金設定。雨の日でも快適アクセス。',
    access: 'JR「小倉駅」直結',
    address: '福岡県北九州市小倉北区小倉駅前エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月額プラン',
      description: 'マシンピラティスのグループレッスン。サウナ付き。',
      price: '月額 5,500円〜（税込）',
    },
    options: [
      'サウナ利用可',
      '個室シャワー完備',
      '女性専用',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'リフレッシュ', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'サウナ', '個室シャワー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'arugamama ピラティススタジオ',
    image: '/images/studios/arugamama-kokura.webp',
    rating: 4.8,
    reviewCount: 62,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: '少人数制の女性専用ピラティススタジオ。モノレール旦過駅から徒歩5分。アットホームな雰囲気で初心者も安心。',
      },
      {
        author: 'C.Y',
        rating: 5,
        date: '2週間前',
        text: '一人ひとりの体の状態に合わせた丁寧な指導。少人数制なのでしっかり見てもらえる。地域密着型で通いやすい。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '3週間前',
        text: 'マシンピラティスとマットピラティスの両方が受けられる。インストラクターの知識が豊富で信頼できる。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ['女性専用', '少人数制', '地域密着型', 'アットホーム'],
    description: '少人数制の女性専用ピラティススタジオ。モノレール旦過駅から徒歩5分。一人ひとりの体の状態に合わせた丁寧な指導。マシンピラティスとマットピラティスの両方に対応。',
    access: '北九州モノレール「旦過駅」徒歩5分',
    address: '福岡県北九州市小倉北区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '少人数制の丁寧なピラティスレッスン。',
      price: '要問合せ（公式サイト参照）',
    },
    options: [
      'マシンピラティス',
      'マットピラティス',
      '少人数制',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '健康維持', 'リフレッシュ', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室'],
    },
  },
  {
    name: 'Heart&Body Studio Lead',
    image: '/images/studios/studio-lead-kokura.webp',
    rating: 4.6,
    reviewCount: 72,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '小倉南区にあるヨガ・ピラティス・シルクサスペンションのスタジオ。少人数制で多彩なプログラム。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '2週間前',
        text: 'シルクサスペンションが体験できるのは珍しい。ピラティスとヨガの両方が楽しめる。',
      },
      {
        author: 'M.H',
        rating: 5,
        date: '3週間前',
        text: 'アットホームな雰囲気で通いやすい。インストラクターが丁寧で初心者でも安心。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ['少人数制', 'シルクサスペンション', 'ヨガ&ピラティス', '小倉南区'],
    description: '小倉南区のヨガ・ピラティス・シルクサスペンションスタジオ。少人数制で多彩なプログラムを提供。シルクサスペンションなど他にはないプログラムも楽しめます。',
    access: '北九州市小倉南区',
    address: '福岡県北九州市小倉南区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '少人数制のピラティス・ヨガ・シルクサスペンション。',
      price: '要問合せ（公式サイト参照）',
    },
    options: [
      'ピラティスクラス',
      'ヨガクラス',
      'シルクサスペンション',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['柔軟性向上', '姿勢改善', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'シルクサスペンション', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！小倉エリアのスタジオはほとんどが初心者歓迎。Rintosullは87%以上が初心者、CLUB PILATESは4段階のレベル分け。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。',
  },
  {
    question: '小倉のピラティスの料金相場は？',
    answer: 'スターピラティスは月額5,500円〜と最安。Rintosullは月4回8,800円。CLUB PILATESは月4回14,190円。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。CLUB PILATESとRintosullは無料体験。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'CLUB PILATES小倉とHeart&Body Studio Leadは男性も通えます。Rintosull・スターピラティス・arugamamaは女性専用。',
  },
  {
    question: 'サウナ付きのスタジオはありますか？',
    answer: 'スターピラティス小倉駅前スタジオはサウナと個室シャワーを完備。レッスン後のリフレッシュに最適。',
  },
  {
    question: 'ヨガもやりたい場合は？',
    answer: 'RintosullはプレミアムフリーフルタイムでホットヨガLAVA等も利用可能。Heart&Body Studio Leadはヨガクラスも充実。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KokuraPage() {
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
              【2026最新】ピラティス小倉おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">小倉</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="小倉" />

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
              「小倉で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、小倉・北九州エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>小倉・北九州でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="小倉" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              小倉のおすすめピラティススタジオ5選
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
              小倉のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">5,500円〜14,190円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 5,500円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円程度</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              小倉エリアの料金はスタジオのタイプや立地によって異なります。まずは体験レッスンを活用して、料金と内容のバランスが自分に合うスタジオを見つけましょう。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              小倉でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの体験予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  小倉エリアは都市部と比べてスタジオ数が限られています。人気スタジオは体験予約が埋まりやすいため、気になるスタジオには早めに予約を入れましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">オンラインレッスン併用も検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  通えるスタジオが少ない場合は、オンラインレッスンとの併用がおすすめです。zen placeなど大手スタジオではオンラインレッスンを提供しており、自宅でも本格的なピラティスが受けられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランがあるスタジオは要チェック</h3>
                <p className="text-warm-600 leading-relaxed">
                  小倉エリアでスタジオが限られる分、1つのスタジオに集中して通える通い放題プランはコスパが良くおすすめです。月額固定で何度でも通えるため、上達も早くなります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンは可能な限り複数受ける</h3>
                <p className="text-warm-600 leading-relaxed">
                  選択肢が少ないからこそ、利用可能なスタジオの体験レッスンはすべて受けてみましょう。インストラクターとの相性、スタジオの雰囲気、レッスン内容を比較して、長く続けられるスタジオを選ぶことが大切です。
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
                  <strong>小倉エリアの豆知識：</strong>スタジオによってはウェアやタオルのレンタルサービスを提供しているところもあります。仕事帰りや外出先から直接通いたい方は、レンタルの有無を事前に確認しておくと便利です。
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
                  月額5,500円〜のスタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• スターピラティス（月額 5,500円〜）</li>
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">設備充実</h3>
                <p className="text-warm-600 text-sm mb-4">
                  サウナ付きも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• スターピラティス（サウナ・個室シャワー）</li>
                  <li className="text-warm-700">• CLUB PILATES（15種類の器具）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">アクセス重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  小倉駅直結も。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• スターピラティス（小倉駅直結）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜9,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  コスパ重視。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• スターピラティス（5,500円〜）</li>
                  <li>• Rintosull（8,800円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  大手マシン専門。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（14,190円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">少人数制</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">地域密着</p>
                <p className="text-sm text-warm-600 mb-4">
                  アットホーム。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• arugamama（要問合せ）</li>
                  <li>• Studio Lead（要問合せ）</li>
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
                  小倉の料金相場はグループ月4回で5,500円〜14,190円と幅広い。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESとRintosullは無料体験。気軽に試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  スターピラティスは小倉駅直結でアクセス抜群。JR・モノレールが利用可能。
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
              今回は小倉・北九州エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では小倉にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜。<br />
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

      <RelatedAreas currentSlug="kokura" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
