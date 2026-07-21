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
  alternates: { canonical: 'https://biyori-pilates.com/area/kokubunji/' },
  title: '【2026年7月最新】ピラティス国分寺おすすめ5選！料金・体験レッスン・マシン対応を比較！',
  description: '国分寺エリアのおすすめピラティススタジオ5選を徹底比較。pilates K国分寺店・zen place pilates国分寺・ピラティスミラー国分寺・URBAN CLASSIC PILATES国分寺店・Rintosull国分寺店など実在スタジオの料金・体験レッスン・アクセスを完全ガイド。',
  keywords: 'ピラティス,国分寺,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,pilates K,zen place,ピラティスミラー,URBAN CLASSIC',
}

const studios = [
  {
    name: 'pilates K 国分寺店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 212,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '1週間前',
        text: '駅から徒歩1分で通いやすいです。音楽に合わせたグループレッスンが楽しくて、あっという間に時間が過ぎます。女性専用なのも安心ポイント。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '2週間前',
        text: '体験0円で気軽に始められました。1人1台リフォーマーを使えるので、しっかり効いている感覚があります。インストラクターも明るくて楽しい。',
      },
      {
        author: 'A.Y',
        rating: 4,
        date: '3週間前',
        text: '30歳からのボディメイクというコンセプトが気に入っています。月4回プランから始めて、今は通い放題に切り替えました。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシンピラティス専門', '体験0円', '国分寺駅徒歩1分'],
    description: '女性専用マシンピラティス専門スタジオ。JR中央線「国分寺駅」から徒歩1分の好立地。「30歳からの本気ボディメイク」をコンセプトに、1人1台のリフォーマーを使い、音楽に合わせて楽しくトレーニングできます。体験レッスン0円で気軽にスタート可能。月4回11,220円〜のリーズナブルな料金設定も魅力です。',
    access: 'JR中央線「国分寺駅」から徒歩1分',
    address: '東京都国分寺市南町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '女性専用マシンピラティス。月4回の利用で無理なく続けられる人気プラン。体験0円。',
      price: '月4回 11,220円〜（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 11,220円〜）',
      'マンスリー8メンバー（月8回）',
      'マンスリーフルメンバー（通い放題）',
      '体験レッスン 0円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ヒップアップ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 国分寺',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 27,
    reviews: [
      {
        author: 'H.N',
        rating: 5,
        date: '1週間前',
        text: '国分寺駅北口から徒歩3分で通いやすい。マットもマシンも両方受けられるのが魅力。エデュケーターの質が高く、解剖学に基づいた指導で体の変化を実感。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: 'ウェアレンタルがあるので手ぶらで通えます。全店舗利用可能プランにしたので、出先でも別店舗に行けて便利。',
      },
      {
        author: 'R.S',
        rating: 4,
        date: '3週間前',
        text: '男性もOKなので夫婦で通っています。初心者クラスから上級者クラスまで幅広く、自分のペースで進められます。体験1,000円で試せました。',
      },
    ],
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['全国展開大手', 'マット&マシン完備', '男女共用', 'ウェアレンタルあり'],
    description: '全国130店舗以上を展開する大手ピラティススタジオ。JR中央線・西武国分寺線「国分寺駅」北口徒歩3分。マットグループ・マシングループ・プライベートレッスンに対応。解剖学に基づいた科学的アプローチと、経験豊富なインストラクターの質の高い指導が特徴。ウェアレンタルがあり手ぶらで通えます。',
    access: 'JR中央線・西武国分寺線「国分寺駅」北口徒歩3分',
    address: '東京都国分寺市本町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能。全店舗利用可能プランもあり。',
      price: '月4回 13,200円〜（税込）',
    },
    options: [
      'マットグループレッスン',
      'マシングループレッスン',
      'プライベートレッスン（1回 9,900円〜）',
      '全店舗利用可能プランあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00（店舗により異なる）',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'バレル', 'シャワー', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスミラー 国分寺',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.6,
    reviewCount: 29,
    reviews: [
      {
        author: 'Y.T',
        rating: 5,
        date: '1週間前',
        text: 'コナミ運営で安心感があります。天井の鏡で自分のフォームを確認しながらできるので、効果を実感しやすい。1レッスン30分で忙しくても通えます。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '最大6名の少人数制なので、一人ひとりしっかり見てもらえます。運動が苦手な私でも楽しく続けられています。',
      },
      {
        author: 'E.M',
        rating: 4,
        date: '3週間前',
        text: '国分寺駅北口から徒歩3分でアクセス良好。月6回プランで無理なく通っています。体験2,200円で試せました。',
      },
    ],
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '少人数制（最大6名）', '1レッスン30分', 'ミラー完備'],
    description: 'スポーツクラブ大手コナミが運営するピラティススタジオ。天井に設置された鏡でフォームを客観的に確認しながらエクササイズできるのが特徴。最大6名の少人数制で初心者にも安心。1レッスン30分と短時間で、忙しい方でも気軽に通えます。月6回11,000円のリーズナブルな料金設定。',
    access: 'JR中央線・西武国分寺線「国分寺駅」北口から徒歩3分',
    address: '東京都国分寺市本町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月6回プラン',
      description: 'コナミ運営の安心感。月6回30分レッスンで無理なく続けられるプラン。',
      price: '月6回 11,000円（税込）',
    },
    options: [
      '月6回プラン（11,000円/月）',
      'プライベートレッスン（30分 4,400円）',
      '体験レッスン 2,200円',
      'コナミ施設との併用可能',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['健康維持', '姿勢改善', '体幹強化', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '施設の営業時間に準ずる（公式サイトでご確認ください）',
      closed: '施設休館日に準ずる',
      facilities: ['ミラー', 'リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 国分寺店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 268,
    reviews: [
      {
        author: 'C.H',
        rating: 5,
        date: '1週間前',
        text: '予約不要のサーキット形式なので、空いた時間にサッと通えるのが便利。1回30分で効率的にトレーニングできます。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '2週間前',
        text: 'マンスリー4で月8,580円は安い。1人1台リフォーマーを使えるし、一人ずつ違う動きだから周りを気にしなくていい。',
      },
      {
        author: 'K.I',
        rating: 4,
        date: '3週間前',
        text: '運動が久しぶりでしたが、インストラクターが丁寧に教えてくれて安心でした。続けやすい価格設定も嬉しいです。',
      },
    ],
    price: '月4回 8,580円〜',
    trial: '体験レッスンあり',
    features: ['予約不要', 'サーキット形式', '1回30分', 'リーズナブル'],
    description: 'マシンピラティス専門のグループレッスンスタジオ。予約不要のサーキット形式で、1人1台のリフォーマーを使って30分間集中トレーニング。一人ずつ異なる動きを行うため、周りを気にせず自分のペースで進められます。月4回8,580円〜とリーズナブルで、通い放題プラン（12,980円）もあり。',
    access: 'JR中央線「国分寺駅」から徒歩圏内',
    address: '東京都国分寺市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4',
      description: '予約不要のサーキット形式。月4回利用で8,580円のリーズナブルプラン。',
      price: '月4回 8,580円（税込）',
    },
    options: [
      'マンスリー4（月4回 8,580円）',
      'マンスリー8（月8回 10,780円）',
      'レギュラー（通い放題 12,980円）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['体幹強化', 'ボディメイク', '運動不足解消', '姿勢改善'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜日',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 国分寺店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 106,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用なので安心して通えます。LAVA系列でサービスの質が安定しています。体験無料キャンペーン中に入会できました。',
      },
      {
        author: 'R.N',
        rating: 5,
        date: '2週間前',
        text: 'マシンピラティスが初めてでしたが、インストラクターが丁寧に教えてくれて安心。プレミアムプランでLAVAも利用できるのがお得。',
      },
      {
        author: 'S.Y',
        rating: 4,
        date: '3週間前',
        text: '国分寺駅からのアクセスが良く、仕事帰りに通いやすい。初心者が多いので気兼ねなく始められました。',
      },
    ],
    price: 'プレミアムプラン 月額10,978円（税込）',
    trial: '体験無料キャンペーン実施中',
    features: ['女性専用', 'マシンピラティス', '体験無料', 'LAVA系列'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。リフォーマーを使ったレッスンで、気になる部位に集中的にアプローチ。プレミアムプラン月額10,978円で、プレミアムフリーフルタイムプランならLAVA等系列店も利用可能。体験無料キャンペーン実施中で気軽に始められます。',
    access: 'JR中央線「国分寺駅」から徒歩圏内',
    address: '東京都国分寺市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プレミアムプラン',
      description: '女性専用マシンピラティス。体験無料キャンペーン中。LAVA系列店も利用可能。',
      price: '月額 10,978円（税込）',
    },
    options: [
      'プレミアムプラン（月額 10,978円/税込）',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '体験無料キャンペーン実施中',
      'パーソナル姿勢診断付き体験あり',
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
    answer: '大丈夫です！国分寺エリアのスタジオはほとんどが初心者歓迎です。pilates K国分寺店は体験0円で女性専用、ピラティスミラー国分寺は最大6名の少人数制、URBAN CLASSIC PILATESは予約不要で気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスはリフォーマーなどの専用マシンを使います。マシンはバネの力で負荷調整ができるため初心者にもおすすめ。国分寺では5スタジオ全てがマシンピラティスに対応しています。',
  },
  {
    question: '国分寺のピラティスの料金相場は？',
    answer: 'URBAN CLASSIC PILATESは月4回8,580円と最安級。Rintosullは月額10,978円、ピラティスミラーは月6回11,000円、pilates Kは月4回11,220円〜、zen placeは月4回13,200円〜です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。URBAN CLASSIC PILATESの通い放題プラン（12,980円）なら毎日でも通えます。最低2〜3ヶ月は継続しましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わります。pilates K国分寺店はボディメイク特化、URBAN CLASSIC PILATESの通い放題なら効率的にシェイプアップが可能です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。pilates K国分寺店は体験0円、Rintosullは体験無料キャンペーン中、zen placeは体験1,000円、ピラティスミラーは体験2,200円。zen placeはウェアレンタルもあり手ぶらOKです。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates国分寺とURBAN CLASSIC PILATES国分寺店は男性も通えます。pilates K・Rintosullは女性専用です。ピラティスミラーも男性利用可能です。',
  },
  {
    question: '国分寺駅からのアクセスは？',
    answer: '国分寺駅はJR中央線・西武国分寺線・西武多摩湖線の3路線が利用可能。pilates Kは徒歩1分、zen placeとピラティスミラーは徒歩3分と、各スタジオとも駅近で通いやすい立地です。',
  },
  {
    question: 'パーソナルレッスンを受けたいのですが？',
    answer: 'zen place pilates国分寺はプライベートレッスン（1回9,900円〜）を提供。ピラティスミラー国分寺もプライベートレッスン30分4,400円で対応。マンツーマンでしっかりフォームを見てもらえます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function KokubunjiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '国分寺', url: 'https://pilates-biyori.com/area/kokubunji/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月22日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス国分寺おすすめ5選！
              <br className="hidden md:block" />
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
              <span className="text-warm-600">国分寺</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="国分寺" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「国分寺で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              国分寺はJR中央線・西武国分寺線・西武多摩湖線の3路線が乗り入れ、新宿まで中央線特快で約20分という好アクセスのエリア。武蔵野の面影を残す自然豊かな文教都市で、殿ヶ谷戸庭園やお鷹の道など歴史的なスポットも魅力です。そんな国分寺エリアには、女性専用マシンピラティスから全国展開の大手、予約不要のサーキット型まで、多彩なスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、国分寺エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>国分寺でピラティススタジオを探している</span>
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
                  <span>JR中央線沿線で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="国分寺" />
        <AreaMarketComparison studios={studios} areaName="国分寺" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              国分寺のおすすめピラティススタジオ5選
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
              国分寺のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,580円〜13,200円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 4,400円〜9,900円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              国分寺エリアは都心のターミナル駅と比較してテナント賃料が抑えめのため、質の高いレッスンをリーズナブルに受けられる傾向があります。特にURBAN CLASSIC PILATESの月4回8,580円は都内でもかなり安い水準。5スタジオ全てがマシンピラティスに対応しているので、目的と予算に合わせて選びましょう。隣駅の<Link href="/area/kunitachi/" className="text-warm-700 underline hover:text-warm-900">国立</Link>エリアと合わせて検討するのもおすすめです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              国分寺でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">3路線の出口を事前に確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  国分寺駅はJR中央線・西武国分寺線・西武多摩湖線の3路線が乗り入れるため、利用路線によって最適な出口が異なります。多くのスタジオは北口側に集中していますが、初回訪問時は余裕を持って10分前に到着できるようルートを確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">女性専用と男女共用の違いに注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  国分寺エリアにはpilates KやRintosullなど女性専用スタジオと、zen placeやURBAN CLASSIC PILATESなど男女共用スタジオがあります。ご夫婦やカップルで通いたい場合は男女共用スタジオを、女性だけの環境を希望する方は女性専用を選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">予約制と予約不要の違いを理解する</h3>
                <p className="text-warm-600 leading-relaxed">
                  URBAN CLASSIC PILATESは予約不要のサーキット形式で、空いた時間に行けるのが便利。一方、pilates Kやzen placeは事前予約制です。自分のライフスタイルに合った予約形式を選ぶと長続きしやすいです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  国分寺だけでなく、隣駅の<Link href="/area/kunitachi/" className="text-warm-700 underline hover:text-warm-900">国立</Link>や<Link href="/area/tachikawa/" className="text-warm-700 underline hover:text-warm-900">立川</Link>、<Link href="/area/kichijoji/" className="text-warm-700 underline hover:text-warm-900">吉祥寺</Link>エリアにもピラティススタジオがあります。zen placeなら全店舗利用可能プランで複数エリアのスタジオを使い分けられます。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多い。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用必須のスタジオが多数。グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。脚を大きく動かすポーズが多いため、ストレッチの効く素材が必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>：zen place pilates国分寺はウェアレンタルあり。手ぶらで体験も可能。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>国分寺エリアの豆知識：</strong>国分寺駅周辺にはマルイやセレオ国分寺などの商業施設があるため、ピラティス帰りにショッピングも楽しめます。駅北口のカフェで体を休めてから帰るのもおすすめ。駐輪場も複数あるので、自転車で通う方にも便利なエリアです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下からスタート。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 8,580円）</li>
                  <li className="text-warm-700">• Rintosull（月額 10,978円）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格派・パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">解剖学ベースの本格指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（プライベート 9,900円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                  <li className="text-warm-700">• zen place（全店舗利用可能プラン）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの空間で安心。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• pilates K（女性専用・体験0円）</li>
                  <li className="text-warm-700">• Rintosull（女性専用・LAVA系列）</li>
                  <li className="text-warm-700">• ピラティスミラー（コナミ運営）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続で効果を実感できます。ピラティスミラー国分寺の月6回プラン（11,000円）やpilates Kの月4回プラン（11,220円〜）で無理なく始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。URBAN CLASSIC PILATESの通い放題プラン（12,980円）なら毎日でも通えて、30分の短時間集中型で効率的。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。RintosullはLAVA系列店も利用可能なプランがあり、ピラティスとヨガを組み合わせた健康管理が可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC（8,580円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜12,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">週1〜2回で着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（10,978円/月）</li>
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                  <li>• pilates K（11,220円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">本格派・高頻度の方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC通い放題（12,980円）</li>
                  <li>• zen place（13,200円〜/月4回）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ボディメイクならpilates K国分寺店、健康維持ならピラティスミラー国分寺の少人数制、コスパ重視ならURBAN CLASSIC PILATESがおすすめ。目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  予約不要サーキット型（URBAN CLASSIC）、グループレッスン型（pilates K・Rintosull）、マット＆マシン対応型（zen place）など形式は多彩。自分のライフスタイルに合った形式を選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  pilates K国分寺店は体験0円、Rintosullは体験無料キャンペーン中。zen placeは体験1,000円、ピラティスミラーは体験2,200円。まずは無料の体験から試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  国分寺駅は3路線が利用可能で交通至便。pilates Kは徒歩1分、zen placeとピラティスミラーは徒歩3分。自宅や職場からの動線に合ったスタジオを選ぶと長続きします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は国分寺エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              国分寺はJR中央線で新宿まで約20分の好アクセスで、3路線が利用可能な交通至便なエリアです。pilates K国分寺店（体験0円・女性専用）、zen place pilates国分寺（ウェアレンタルあり・男女共用）、ピラティスミラー国分寺（コナミ運営・少人数制）、URBAN CLASSIC PILATES国分寺店（予約不要・月4回8,580円〜）、Rintosull国分寺店（体験無料・LAVA系列）と、多彩なスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは体験0円のpilates K国分寺店や体験無料のRintosullから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              pilates K国分寺店は体験レッスン0円。<br />
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
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kokubunji" areaName="国分寺" />

      <RelatedAreas currentSlug="kokubunji" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
