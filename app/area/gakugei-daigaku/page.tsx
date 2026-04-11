import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス学芸大学おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '学芸大学エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,学芸大学,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスミラー 学芸大学',
    image: '/images/pilates2.webp',
    rating: 4.7,
    reviewCount: 120,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: 'コナミ運営なので安心感がある。月6回11,000円で通えるのでコスパがいい。プライベートレッスンも30分4,400円でリーズナブル。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '学芸大学駅から近くて通いやすい。マシンがきれいで清潔感があります。スタッフの対応も丁寧。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '体験2,200円で気軽に試せました。7回目以降も1回1,100円なのが嬉しい。初心者にもおすすめ。',
      },
    ],
    price: '月会費 11,000円（月6回まで）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '月6回定額', '学芸大学駅近', 'プライベートあり'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。月6回11,000円の定額制で、7回目以降は1回1,100円と追加利用もリーズナブル。プライベートレッスンも30分4,400円から受けられます。大手ならではの安心感と清潔な設備が魅力。',
    access: '東急東横線「学芸大学駅」徒歩圏内',
    address: '東京都目黒区鷹番（学芸大学駅徒歩圏内）',
    popularPlan: {
      name: '月6回プラン',
      description: 'マシンピラティス月6回まで定額。7回目以降は1回1,100円で追加可能。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      'プライベートレッスン（30分 4,400円）',
      '7回目以降の追加利用（1回 1,100円）',
      '体験レッスン（2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', '健康維持', 'ボディメイク'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '施設に準ずる',
      facilities: ['マシン完備', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'STUDIO IVY 学芸大学店',
    image: '/images/pilates3.webp',
    rating: 4.8,
    reviewCount: 95,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '完全パーソナルなので自分のペースで進められる。学芸大学駅からすぐなので仕事帰りに通いやすい。',
      },
      {
        author: 'A.H',
        rating: 5,
        date: '2週間前',
        text: '月2回15,000円から始められるのが手軽。マシンを使ったマンツーマン指導で効果を実感しています。',
      },
      {
        author: 'M.M',
        rating: 4,
        date: '3週間前',
        text: '月4回28,000円で1回7,000円。パーソナルとしてはコスパが良い。インストラクターの質が高い。',
      },
    ],
    price: '月2回 15,000円〜 / 月4回 28,000円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '学芸大学駅近', '月謝制'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。学芸大学駅近くの好立地。完全プライベート空間でオーダーメイドのプログラムを提供。月2回15,000円から始められ、月4回28,000円のプランも人気。一人ひとりの体の状態に合わせた丁寧な指導が受けられます。',
    access: '東急東横線「学芸大学駅」徒歩圏内',
    address: '東京都目黒区鷹番（学芸大学駅徒歩圏内）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティスのパーソナルレッスン。週1回ペースで無理なく続けられる。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '月2回プラン（15,000円）',
      '月4回プラン（28,000円）',
      '追加レッスン（都度払い）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー', '完全個室'],
    },
  },
  {
    name: 'YUZU 学芸大学店',
    image: '/images/pilates4.webp',
    rating: 4.7,
    reviewCount: 80,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '女性インストラクターなので安心して通えます。キッズスペースがあるので子連れでも気兼ねなくレッスンできました。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: 'パーソナルなので子供が泣いても周りを気にしなくていい。産後の体型戻しに通っています。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '2週間前',
        text: 'アットホームな雰囲気。インストラクターさんが親身になって体の悩みを聞いてくれます。',
      },
    ],
    price: 'パーソナル（料金は要問い合わせ）',
    trial: '体験レッスンあり',
    features: ['パーソナル', '女性インストラクター', 'キッズスペース', '産後ケア'],
    description: '女性インストラクターによるパーソナルピラティス。キッズスペース完備で子連れのママも安心して通えるのが最大の魅力。産後の体型戻しや育児中のリフレッシュにもおすすめ。一人ひとりの体の状態に合わせたオーダーメイドレッスンを提供しています。',
    access: '東急東横線「学芸大学駅」徒歩圏内',
    address: '東京都目黒区（学芸大学エリア）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '女性インストラクターによるマンツーマン指導。キッズスペース完備で子連れOK。',
      price: '料金は要問い合わせ',
    },
    options: [
      'パーソナルレッスン',
      'キッズスペース利用（無料）',
      '産後ケアプログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性95% / 男性5%',
      purpose: ['産後ケア', '体型戻し', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '営業時間は要確認',
      closed: '不定休',
      facilities: ['マシン完備', 'キッズスペース', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates（東横線沿線）',
    image: '/images/pilates2.webp',
    rating: 4.8,
    reviewCount: 200,
    reviews: [
      {
        author: 'L.M',
        rating: 5,
        date: '1週間前',
        text: '東横線沿線の店舗を相互利用できるので便利。学芸大学から中目黒・渋谷の店舗にも通えます。マットもマシンも両方受けられる。',
      },
      {
        author: 'P.K',
        rating: 5,
        date: '2週間前',
        text: '全国展開で安定したクオリティ。有資格インストラクターの指導が丁寧。AI姿勢分析で変化を実感。',
      },
      {
        author: 'Q.R',
        rating: 4,
        date: '3週間前',
        text: 'マットグループは月4回9,625円〜でコスパ良い。リフォーマーグループもあり本格的。',
      },
    ],
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '東横線沿線で相互利用', 'AI姿勢分析', '男性OK'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。東急東横線沿線に複数店舗があり、学芸大学から中目黒・渋谷などの店舗を相互利用可能。マットグループ、マシングループ、プライベートに対応。有資格インストラクターが在籍し、AIによる姿勢分析で効果を実感しやすい。',
    access: '東急東横線沿線に複数店舗（学芸大学から利用しやすい）',
    address: '東京都（東急東横線沿線に複数店舗）',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシンを使ったグループレッスン。少人数制で丁寧な指導。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベート（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！学芸大学のスタジオは初心者歓迎。ピラティスミラーは体験2,200円、zen placeは体験500円〜で気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマー等）を使ったトレーニング。マシンは初心者でもフォームが安定しやすくおすすめです。',
  },
  {
    question: '学芸大学エリアの料金相場は？',
    answer: 'グループは月6回11,000円〜、マットグループは月4回9,625円〜。パーソナルは月2回15,000円〜28,000円程度です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れてきたら週2-3回に増やすと効果的です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がることで太りにくい体質に。最低2-3ヶ月は継続しましょう。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。靴は不要です。スタジオによってはウェアレンタルもあります。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心。目的に応じて選びましょう。',
  },
  {
    question: '子連れで通えるスタジオはありますか？',
    answer: 'YUZUはキッズスペース完備で子連れOK。女性インストラクターによるパーソナルレッスンなので安心です。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から姿勢改善や体の引き締まりを実感する方が多いです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは効果が出やすく自分のペースで進められます。グループは安く楽しく続けられます。目的と予算で選びましょう。',
  },
]

export default function GakugeiDaigakuPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス学芸大学おすすめ4選！<br className="hidden md:block" />
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
              <span className="text-warm-600">学芸大学</span>
            </nav>
          </div>
        </section>

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
              「学芸大学でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「おしゃれな街で通いやすいスタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              東急東横線「学芸大学駅」は、おしゃれなカフェやパン屋が並ぶ住みたい街として人気のエリア。そんな学芸大学には、コスパの良いスタジオからパーソナル専門、子連れOKのスタジオまで、個性豊かなピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、学芸大学エリアでおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>学芸大学でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>コスパの良いマシンピラティスに通いたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>パーソナルレッスンを受けたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>子連れでも通えるスタジオを知りたい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              学芸大学のおすすめピラティススタジオ4選
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
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  定額で通いやすいスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• STUDIO IVY（月2回 15,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果的に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（月4回 28,000円）</li>
                  <li className="text-warm-700">• YUZU（女性インストラクター）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">子連れOK</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ママも安心して通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YUZU（キッズスペース完備）</li>
                  <li className="text-warm-700">• YUZU（女性インストラクター）</li>
                  <li className="text-warm-700">• YUZU（産後ケアプログラム）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回からスタート。最低2-3ヶ月で効果を実感できます。ピラティスミラーの月6回プランなら週1-2回ペースにぴったりです。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化を実感。パーソナルレッスンなら効率的に結果が出ます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。zen placeのマットグループなら月4回9,625円〜で始められます。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  定額でお得に通えるプラン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（マット月4回 9,625円〜）</li>
                  <li>• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜28,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマンで効果的に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（月2回 15,000円）</li>
                  <li>• STUDIO IVY（月4回 28,000円）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">都度払い</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">お手軽</p>
                <p className="text-sm text-warm-600 mb-4">
                  気軽にプライベートを体験。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（30分 4,400円）</li>
                  <li>• zen place（プライベート 9,900円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
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
                  ダイエット、姿勢改善、産後ケアなど目的に応じて最適なスタジオが変わります。子連れならYUZU、コスパならピラティスミラーがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  学芸大学エリアはグループ月4回9,625円〜、パーソナル月2回15,000円〜と幅広い価格帯。まずは体験レッスンでスタジオの雰囲気を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeは500円〜、ピラティスミラーは2,200円で体験できます。複数のスタジオを体験して比較するのがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  学芸大学は東急東横線で渋谷・横浜方面にもアクセス良好。おしゃれなカフェやパン屋が並ぶ落ち着いた雰囲気の街で、レッスン前後の時間も楽しめます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は学芸大学のおすすめピラティススタジオをご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              学芸大学はコナミ運営のピラティスミラー（月6回11,000円）からSTUDIO IVYのパーソナル、子連れOKのYUZU、東横線沿線で相互利用できるzen placeまで、ライフスタイルに合わせたスタジオが揃っています。おしゃれなカフェやパン屋が並ぶ住みたい街で、ピラティスのある生活を始めてみませんか。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひ自分に合うスタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのスタジオが見つかることを願っています。
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
              初回限定の体験レッスン500円〜2,200円。<br />
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

      <RelatedAreas currentSlug="gakugei-daigaku" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
