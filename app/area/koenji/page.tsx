import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス高円寺おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '高円寺エリアのおすすめピラティススタジオ4選を徹底比較。CLUB PILATES、Pilates Mee、YUZU、Rintosullなど実在スタジオの料金・体験レッスン・アクセスを完全ガイド。グループ・セミパーソナル・完全個室パーソナルまで。',
  keywords: 'ピラティス,高円寺,杉並区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,CLUB PILATES,Pilates Mee,YUZU,Rintosull',
}

const studios = [
  {
    name: 'CLUB PILATES 高円寺店',
    image: '/images/pilates1.jpg',
    rating: 4.7,
    reviewCount: 115,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のピラティスブランドで安心感があります。15種類の器具を使ったレッスンは毎回新鮮で飽きません。体験が無料なのも嬉しいポイント。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けがあるので初心者でも安心して始められました。男性会員もいるので夫婦で通っています。インストラクターの質が高い。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'インストラクター全員が500時間以上の研修を受けた資格保持者。有酸素運動を含むクラスもあり、ダイエット目的の方にもおすすめです。',
      },
    ],
    price: '1回 2,736円〜',
    trial: '体験レッスン 0円（30分）',
    features: ['世界最大級チェーン', '15種類の器具', '男性OK', '体験0円'],
    description: '世界最大級のマシンピラティスブランド「CLUB PILATES」の高円寺店。最大12名の少人数グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備。8つのプログラムと4段階のレベル分けで、初心者から上級者まで対応。インストラクター全員が500時間以上の研修を受けた有資格者で、質の高い指導を受けられます。体験レッスンは0円で気軽にお試し可能。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン',
      description: '最大12名の少人数制。15種類の器具を使った本格グループレッスン。4段階のレベル分けで初心者も安心。',
      price: '1回あたり 2,736円〜（税込）',
    },
    options: [
      'グループレッスン（1回 2,736円〜）',
      '月4回・月8回・通い放題プランあり',
      '体験レッスン 0円（30分）',
      '入会金あり（詳細は公式サイト参照）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'ダイエット'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Pilates Mee 高円寺店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 78,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '最大3名のセミパーソナルで1レッスン1,250円〜は驚きの価格。パーソナルに近い丁寧な指導をグループ価格で受けられます。通い放題37,500円もお得。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '当日予約・当日キャンセルOKなので急な予定変更にも対応できます。チケット繰り越しもできて無駄になりません。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターが丁寧で初心者にも優しい。最大3名なのでしっかりフォームを見てもらえます。体験9,800円は本格的な内容です。',
      },
    ],
    price: '1回 1,250円〜（通い放題）',
    trial: '体験レッスン 9,800円',
    features: ['セミパーソナル最大3名', '1回1,250円〜', '当日予約OK', 'チケット繰り越し可'],
    description: 'セミパーソナル形式のマシンピラティススタジオ。最大3名の少人数制で、パーソナルに近い丁寧な指導を受けられます。月2回11,000円、月4回19,800円、通い放題37,500円と多彩なプランを用意。通い放題プランなら1回あたり1,250円〜の高コスパ。当日予約・当日キャンセルOK、チケット繰り越し可能で忙しい方にも便利。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: '最大3名のセミパーソナルマシンピラティスが通い放題。1回あたり1,250円〜の高コスパ。',
      price: '37,500円/月（税込）',
    },
    options: [
      '月2回プラン（11,000円/月）',
      '月4回プラン（19,800円/月）',
      '通い放題プラン（37,500円/月）',
      '体験レッスン 9,800円',
      '当日予約・当日キャンセルOK',
      'チケット繰り越し可能',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'パーソナルマシンピラティスYUZU 高円寺店',
    image: '/images/pilates3.jpg',
    rating: 4.9,
    reviewCount: 64,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: 'JR高円寺駅から徒歩2分で通いやすい。完全個室のパーソナルなので周りの目を気にせず集中できます。女性インストラクターなので安心。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: 'キッズスペースがあるので子連れで通えるのが本当にありがたい。産後の体型戻しに最適です。チケット制で自分のペースで通えます。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '3週間前',
        text: '完全個室でマンツーマン指導。自分の体の状態に合わせたオーダーメイドのレッスンが受けられます。結果にコミットしたい方におすすめ。',
      },
    ],
    price: 'チケット制（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['完全個室パーソナル', '駅徒歩2分', '女性インストラクター', 'キッズスペース'],
    description: 'JR高円寺駅から徒歩2分の完全個室パーソナルマシンピラティススタジオ。女性インストラクターによるマンツーマン指導で、一人ひとりの体の状態に合わせたオーダーメイドのレッスンを提供。キッズスペース完備で子連れママも安心して通えます。チケット制なので自分のペースで無理なく継続可能。産後ケア、姿勢改善、ボディメイクなど幅広い目的に対応。',
    access: 'JR中央線・総武線「高円寺駅」徒歩2分',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン（チケット制）',
      description: '完全個室でのマンツーマンマシンピラティス。女性インストラクターが丁寧に指導。',
      price: 'チケット制（詳細は公式サイト参照）',
    },
    options: [
      'チケット制（都度払い・回数券）',
      '完全個室パーソナルレッスン',
      'キッズスペース完備',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（産後ママも多数）',
      genderRatio: '女性95% / 男性5%',
      purpose: ['産後ケア', '姿勢改善', 'ボディメイク', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '完全個室', 'キッズスペース', '更衣室'],
    },
  },
  {
    name: 'Rintosull 高円寺店',
    image: '/images/pilates4.jpg',
    rating: 4.6,
    reviewCount: 92,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '24時間営業なので仕事終わりの遅い時間でも通えるのが最高。プレミアムプラン月額10,978円（税込）でコスパも良い。女性専用で安心。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: 'JR高円寺駅北口から徒歩5分。LAVA系列なのでサービスの質が安定しています。無料体験でパーソナル姿勢診断もしてもらえました。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: 'プレミアムプランでLAVA等系列のヨガスタジオも利用可能。ピラティスとヨガ両方やりたい人におすすめ。初心者が多いので気兼ねなく通えます。',
      },
    ],
    price: 'プレミアムプラン 月額10,978円（税込）',
    trial: '体験レッスン 無料',
    features: ['女性専用', '24時間営業', 'LAVA系列', '駅徒歩5分'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。JR高円寺駅北口から徒歩5分。24時間営業で、早朝や深夜でも自分の都合に合わせて通えます。プレミアムプラン月額10,978円（税込）。無料体験ではパーソナル姿勢診断も受けられます。プレミアムフリーフルタイムプランならLAVA等系列店も利用可能。',
    access: 'JR中央線・総武線「高円寺駅」北口徒歩5分',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プレミアムプラン',
      description: '女性専用マシンピラティス。24時間営業で好きな時間に通える。',
      price: '月額 10,978円（税込）',
    },
    options: [
      'プレミアムプラン（月額 10,978円/税込）',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '24時間営業',
      '無料体験・パーソナル姿勢診断付き',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '24時間営業',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！高円寺エリアのスタジオはほとんどが初心者歓迎です。CLUB PILATESは4段階のレベル分けで初心者専用クラスあり、Rintosullは初心者87%以上で安心。YUZUは完全個室パーソナルなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。高円寺エリアの4スタジオはすべてマシンピラティスに対応しています。',
  },
  {
    question: '高円寺のピラティスの料金相場は？',
    answer: 'Pilates Meeは通い放題37,500円（1回1,250円〜）、月2回11,000円、月4回19,800円。Rintosullはプレミアムプラン月額10,978円。CLUB PILATESは1回2,736円〜。YUZUはチケット制です。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。Pilates Meeの通い放題プランなら毎日でも通えます。大切なのは無理なく継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。CLUB PILATESには高強度・有酸素運動クラスもありダイエットに効果的。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。CLUB PILATESは体験0円（30分）、Rintosullも無料体験でパーソナル姿勢診断付き。Pilates Meeは体験9,800円で本格的な内容を体験できます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'CLUB PILATES高円寺店は男性も通えます。Rintosullは女性専用です。Pilates MeeとYUZUについては公式サイトでご確認ください。',
  },
  {
    question: '子連れで通えるスタジオはありますか？',
    answer: 'パーソナルマシンピラティスYUZU高円寺店はキッズスペース完備で、お子さん連れでも安心して通えます。産後ママにも人気のスタジオです。',
  },
  {
    question: '24時間通えるスタジオはありますか？',
    answer: 'Rintosull高円寺店は24時間営業です。仕事終わりの遅い時間や早朝でも、自分のライフスタイルに合わせて通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function KoenjiPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス高円寺おすすめ4選！
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
              <span className="text-warm-600">高円寺</span>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「高円寺で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              高円寺はJR中央線・総武線が乗り入れ、新宿まで中央線で約10分という好アクセスのエリア。杉並区の下町風情ある商店街が魅力の街です。そんな高円寺エリアには、世界最大級チェーンのグループレッスンから完全個室パーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、高円寺エリアでおすすめの実在するピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>高円寺でピラティススタジオを探している</span>
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
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高円寺のおすすめピラティススタジオ4選
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
                <p className="text-warm-600 text-sm mb-4">1回1,250円〜のスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（1回 1,250円〜 / 通い放題）</li>
                  <li className="text-warm-700">• Rintosull（月額 10,978円）</li>
                  <li className="text-warm-700">• CLUB PILATES（1回 2,736円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YUZU（完全個室パーソナル）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル最大3名）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">ライフスタイル重視</h3>
                <p className="text-warm-600 text-sm mb-4">24時間営業や子連れOKも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（24時間営業）</li>
                  <li className="text-warm-700">• YUZU（キッズスペース完備）</li>
                  <li className="text-warm-700">• CLUB PILATES（体験0円）</li>
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
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。CLUB PILATESは4段階のレベル分けがあり、初心者専用クラスから始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。Pilates Meeの通い放題プラン（37,500円/月）なら毎日でも通えてコスパ抜群。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。Rintosullは24時間営業なので、忙しい方でも自分のスケジュールに合わせて通いやすい環境です。
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（10,978円/月）</li>
                  <li>• Pilates Mee（11,000円/月2回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 19,800円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">週1回ペースで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（19,800円/月4回）</li>
                  <li>• CLUB PILATES（1回2,736円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 37,500円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">本気でボディメイクしたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（37,500円/通い放題）</li>
                  <li>• 1回あたり1,250円〜の高コスパ</li>
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
                  ダイエット、姿勢改善、産後ケア、体幹強化など、目的によって最適なスタジオは変わります。産後ケアならキッズスペース完備のYUZU、ダイエットなら高強度クラスもあるCLUB PILATESがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  高円寺エリアはグループ（CLUB PILATES）、セミパーソナル最大3名（Pilates Mee）、完全個室パーソナル（YUZU）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは体験0円（30分）、Rintosullも無料体験でパーソナル姿勢診断付き。まずは無料体験で雰囲気やインストラクターとの相性を確認しましょう。Pilates Meeは体験9,800円で本格的な内容です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  高円寺はJR中央線・総武線が利用可能で、新宿まで約10分。YUZUは駅徒歩2分、Rintosullは北口徒歩5分。Rintosullは24時間営業なので生活スタイルに合わせて通えます。
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
              今回は高円寺エリアのおすすめピラティススタジオ4選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              高円寺は杉並区の下町風情ある商店街が魅力の街で、JR中央線・総武線で新宿まで約10分という好立地。世界最大級チェーンのCLUB PILATES（体験0円）、セミパーソナル最大3名のPilates Mee（1回1,250円〜）、完全個室パーソナルのYUZU（駅徒歩2分・キッズスペース完備）、24時間営業のRintosull（女性専用・月額10,978円）と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは無料体験ができるCLUB PILATESやRintosullから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              CLUB PILATESとRintosullは体験0円。<br />
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
