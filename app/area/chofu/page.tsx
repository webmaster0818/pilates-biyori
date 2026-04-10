import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス調布おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '調布エリアのおすすめピラティススタジオ4選を徹底比較。ピラティスミラー調布・Rintosull調布店・ELEMENT調布店・zen place pilatesなど実在スタジオの料金・体験レッスン・アクセスを完全ガイド。コナミ運営・女性専用・通い放題パーソナルまで。',
  keywords: 'ピラティス,調布,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,ピラティスミラー,Rintosull,ELEMENT,zen place',
}

const studios = [
  {
    name: 'ピラティスミラー 調布',
    image: '/images/pilates1.jpg',
    rating: 4.6,
    reviewCount: 98,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '1週間前',
        text: 'コナミ運営なので安心感があります。月6回プランで無理なく通えています。プライベートレッスン30分4,400円もリーズナブルで、フォームをしっかり見てもらえます。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '2週間前',
        text: '体験2,200円で気軽に試せました。インストラクターが丁寧で、初心者でも安心。調布駅から近くて通いやすいです。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: 'コナミの施設なので設備が充実しています。月6回11,000円はコスパが良いと思います。グループレッスンの雰囲気も良く、楽しく続けられています。',
      },
    ],
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '月6回プラン', 'プライベート30分4,400円', '調布駅近'],
    description: 'スポーツクラブ大手コナミが運営するピラティススタジオ。月6回11,000円のリーズナブルな価格設定で、無理なく通い続けられます。プライベートレッスンは30分4,400円で、一人ひとりの体の状態に合わせた丁寧な指導を受けられます。大手ならではの充実した設備と安定したサービス品質が魅力。初心者から経験者まで幅広いレベルに対応しています。',
    access: '京王線「調布駅」から徒歩圏内',
    address: '東京都調布市小島町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月6回プラン',
      description: 'コナミ運営の安心感。月6回で無理なく続けられる人気プラン。プライベートレッスンの追加も可能。',
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
      genderRatio: '女性80% / 男性20%',
      purpose: ['健康維持', '姿勢改善', '体幹強化', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '施設の営業時間に準ずる（公式サイトでご確認ください）',
      closed: '施設休館日に準ずる',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', '駐車場'],
    },
  },
  {
    name: 'Rintosull 調布店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 82,
    reviews: [
      {
        author: 'Y.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用なので安心して通えます。マシンピラティスが初めてでしたが、インストラクターが丁寧に教えてくれました。体験無料キャンペーン中に入会できてラッキーでした。',
      },
      {
        author: 'S.M',
        rating: 5,
        date: '2週間前',
        text: 'LAVA系列なのでサービスの質が安定しています。プレミアムプランでLAVAのヨガスタジオも利用できるのが嬉しい。ピラティスとヨガ両方楽しめます。',
      },
      {
        author: 'R.I',
        rating: 4,
        date: '3週間前',
        text: '調布駅から近くてアクセス便利。女性専用なので服装を気にせず集中できます。初心者が多いので気兼ねなく始められました。',
      },
    ],
    price: 'プレミアムプラン 月額10,978円（税込）',
    trial: '体験無料キャンペーン実施中',
    features: ['女性専用', 'マシンピラティス', '体験無料', 'LAVA系列'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。調布駅から徒歩圏内の好立地。体験無料キャンペーンを実施中で、気軽にマシンピラティスを試せます。プレミアムプラン月額10,978円（税込）。プレミアムフリーフルタイムプランならLAVA等系列店も利用可能で、ピラティスとヨガを両方楽しめます。初心者87%以上で安心して始められる環境です。',
    access: '京王線「調布駅」から徒歩圏内',
    address: '東京都調布市布田（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プレミアムプラン',
      description: '女性専用マシンピラティス。体験無料キャンペーン実施中。LAVA系列店も利用可能なプランあり。',
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
  {
    name: 'ELEMENT 調布店',
    image: '/images/pilates3.jpg',
    rating: 4.8,
    reviewCount: 67,
    reviews: [
      {
        author: 'T.H',
        rating: 5,
        date: '1週間前',
        text: '通い放題型のパーソナルジムで、1回30分と短時間で済むのが忙しい自分にピッタリ。1回あたり2,750円〜はパーソナルとしては破格です。',
      },
      {
        author: 'N.O',
        rating: 5,
        date: '2週間前',
        text: 'マンツーマンでしっかり見てもらえるのに通い放題。毎日でも通えるので短期間で体の変化を実感できました。30分だから仕事の合間にも通えます。',
      },
      {
        author: 'M.Y',
        rating: 4,
        date: '3週間前',
        text: 'パーソナルなのにリーズナブル。インストラクターが毎回体の状態を確認して最適なメニューを組んでくれます。調布駅から近いのも嬉しい。',
      },
    ],
    price: '1回 2,750円〜（通い放題型）',
    trial: '体験レッスンあり',
    features: ['通い放題パーソナル', '1回30分', '1回2,750円〜', 'マンツーマン'],
    description: '通い放題型のパーソナルピラティスジム。1回30分の短時間集中型レッスンで、忙しい方でも無理なく通えます。1回あたり2,750円〜とパーソナルレッスンとしてはリーズナブルな価格設定。マンツーマンで一人ひとりの目標や体の状態に合わせたオーダーメイドのプログラムを提供。通い放題なので、集中的にボディメイクしたい方にもおすすめです。',
    access: '京王線「調布駅」から徒歩圏内',
    address: '東京都調布市小島町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'パーソナルレッスンが通い放題。1回30分で忙しい方にもおすすめ。1回あたり2,750円〜の高コスパ。',
      price: '1回あたり 2,750円〜（税込）',
    },
    options: [
      '通い放題プラン（1回 2,750円〜）',
      '1回30分の短時間集中レッスン',
      'マンツーマン指導',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', 'ダイエット', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティスマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates（京王線沿線）',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 210,
    reviews: [
      {
        author: 'H.M',
        rating: 5,
        date: '1週間前',
        text: '全国展開の大手なので安心感があります。京王線沿線のスタジオを利用可能で、調布から通いやすい。マットもマシンもどちらも受講できるのが良い。',
      },
      {
        author: 'E.K',
        rating: 5,
        date: '2週間前',
        text: 'インストラクターの質が高く、解剖学に基づいた指導で体の変化を実感できます。全店舗利用可能なプランもあり、出先でも通えて便利。',
      },
      {
        author: 'C.T',
        rating: 4,
        date: '3週間前',
        text: 'レッスンの種類が豊富で飽きません。初心者向けから上級者向けまであるので、自分のレベルに合わせて選べます。体験1,000円で気軽に試せました。',
      },
    ],
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['全国展開大手', 'マット&マシン完備', '京王線沿線利用可', 'インストラクター養成'],
    description: '全国130店舗以上を展開する大手ピラティススタジオ。京王線沿線のスタジオを利用可能で、調布エリアからもアクセス良好。マットピラティスからマシンピラティスまで豊富なレッスンメニューを用意。解剖学に基づいた科学的なアプローチと、経験豊富なインストラクターによる質の高い指導が特徴。全店舗利用可能なプランもあり、ライフスタイルに合わせて柔軟に通えます。',
    access: '京王線沿線のスタジオを利用可能（調布駅から京王線でアクセス）',
    address: '京王線沿線各スタジオ（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プラン。全店舗利用可能プランもあり。',
      price: '月4回 13,200円〜（税込）',
    },
    options: [
      'マットグループレッスン',
      'マシングループレッスン',
      'プライベートレッスン（1回 9,900円〜）',
      '全店舗利用可能プランあり',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00（店舗により異なる）',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'バレル', 'シャワー', 'ロッカー', 'Wi-Fi'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！調布エリアのスタジオはほとんどが初心者歓迎です。ピラティスミラー調布はコナミ運営で初心者向けクラスが充実。Rintosull調布店は初心者87%以上で安心。ELEMENT調布店はマンツーマンなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。調布エリアではRintosull・ELEMENT・zen placeがマシンピラティスに対応しています。',
  },
  {
    question: '調布のピラティスの料金相場は？',
    answer: 'ピラティスミラー調布は月6回11,000円、Rintosull調布店はプレミアムプラン月額10,978円、ELEMENT調布店は通い放題で1回2,750円〜、zen place pilatesは月4回13,200円〜です。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。ELEMENT調布店の通い放題プランなら毎日でも通えます。大切なのは無理なく継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。ELEMENT調布店なら通い放題のパーソナルレッスンで効率的にボディメイクが可能。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。ピラティスミラー調布は体験2,200円、Rintosull調布店は体験無料キャンペーン実施中、zen place pilatesは体験1,000円。まずは気軽に体験してみましょう。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'ピラティスミラー調布、ELEMENT調布店、zen place pilatesは男性も通えます。Rintosull調布店は女性専用です。',
  },
  {
    question: '調布駅からのアクセスは？',
    answer: '調布駅は京王線の特急停車駅で、新宿まで約15分の好アクセス。各スタジオとも調布駅から徒歩圏内にあり、通いやすい立地です。zen place pilatesは京王線沿線のスタジオを利用可能です。',
  },
  {
    question: 'パーソナルレッスンを受けたいのですが？',
    answer: 'ELEMENT調布店は通い放題型のパーソナルジムで、1回30分のマンツーマンレッスン。ピラティスミラー調布はプライベートレッスン30分4,400円。zen place pilatesもプライベートレッスン（1回9,900円〜）を提供しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function ChofuPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス調布おすすめ4選！
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
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">調布</span>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「調布で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              調布は京王線「調布駅」が最寄りで、新宿まで京王線特急で約15分という好アクセスのエリア。映画の街として知られ、深大寺や神代植物公園など自然豊かな環境も魅力の街です。そんな調布エリアには、コナミ運営のスタジオから女性専用マシンピラティス、通い放題型パーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、調布エリアでおすすめの実在するピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>調布でピラティススタジオを探している</span>
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
                  <span>京王線沿線で通いやすいスタジオがいい</span>
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

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              調布のおすすめピラティススタジオ4選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円台からスタート。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月額 10,978円）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• ELEMENT（1回 2,750円〜 / 通い放題）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ELEMENT（通い放題パーソナル・30分）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                  <li className="text-warm-700">• zen place（プライベート 9,900円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用や大手運営で安心。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（女性専用・体験無料）</li>
                  <li className="text-warm-700">• ピラティスミラー（コナミ運営）</li>
                  <li className="text-warm-700">• zen place（全国130店舗以上）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。ピラティスミラー調布の月6回プラン（11,000円）なら週1〜2回ペースで無理なく始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。ELEMENT調布店の通い放題プランなら毎日でも通えて、1回30分だから忙しい方でも続けやすい。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。Rintosull調布店はLAVA系列店も利用可能なプランがあり、ピラティスとヨガを組み合わせた健康管理が可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（10,978円/月）</li>
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,200円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">週1回ペースで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（13,200円〜/月4回）</li>
                  <li>• マット&マシン両方受講可能</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">通い放題プラン</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1回2,750円〜</p>
                <p className="text-sm text-warm-600 mb-4">本気でボディメイクしたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ELEMENT（通い放題パーソナル）</li>
                  <li>• 1回30分の短時間集中型</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、健康維持、体幹強化など、目的によって最適なスタジオは変わります。ボディメイクならELEMENT調布店の通い放題パーソナル、健康維持ならピラティスミラー調布の月6回プランがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  調布エリアはグループレッスン（ピラティスミラー・zen place）、マシンピラティス（Rintosull）、完全パーソナル（ELEMENT）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  Rintosull調布店は体験無料キャンペーン実施中、zen place pilatesは体験1,000円。まずは気軽に体験で雰囲気やインストラクターとの相性を確認しましょう。ピラティスミラー調布は体験2,200円です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  調布駅は京王線特急の停車駅で、新宿まで約15分。各スタジオとも調布駅から徒歩圏内にあります。zen place pilatesは京王線沿線の複数スタジオを利用できるので、通勤経路に合わせて柔軟に通えます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は調布エリアのおすすめピラティススタジオ4選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              調布は京王線特急で新宿まで約15分の好立地で、映画の街・自然豊かなエリアとして人気の街です。コナミ運営のピラティスミラー調布（月6回11,000円）、女性専用のRintosull調布店（体験無料）、通い放題型パーソナルのELEMENT調布店（1回2,750円〜）、全国展開のzen place pilates（京王線沿線利用可）と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは体験無料のRintosull調布店や、体験1,000円のzen place pilatesから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              Rintosull調布店は体験無料キャンペーン実施中。<br />
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
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
