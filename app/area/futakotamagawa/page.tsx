import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス二子玉川おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '二子玉川エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,二子玉川,世田谷,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 二子玉川',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 198,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '二子玉川駅から徒歩4分。全国150以上のスタジオが相互利用可能。マット・マシン・プライベートすべて対応。体験当日入会で入会金無料でした。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'マットグループ月額10,450円から。エデュケーターの質が高く体の変化を実感。1Fのスタジオで開放感があります。男性もOK。',
      },
      {
        author: 'K.N',
        rating: 4,
        date: '3週間前',
        text: '平日は22時まで営業で仕事帰りにも通える。用賀や溝の口からもアクセスしやすい。',
      },
    ],
    price: '月額 10,450円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性OK', '二子玉川駅徒歩4分', '全国相互利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオ。二子玉川駅から徒歩4分。1Fの開放的なスタジオでマットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式。男性も受講可能。',
    access: '東急田園都市線・大井町線「二子玉川駅」徒歩4分',
    address: '東京都世田谷区玉川3-20-10 メリス玉川Part2 1F',
    popularPlan: {
      name: 'マットグループフリー',
      description: 'マットピラティスのグループレッスン通い放題。全国のzen placeスタジオで相互利用可能。',
      price: '月額 10,450円（税込）',
    },
    options: [
      'リフォーマーグループ月4回（月額15,400円）',
      'リフォーマーグループ月8回（月額25,300円）',
      'プライベート月4回（月額33,880円〜）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 10:00〜22:00 / 土日祝 9:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 二子玉川店',
    image: '/images/pilates3.jpg',
    rating: 4.8,
    reviewCount: 167,
    reviews: [
      {
        author: 'N.Y',
        rating: 5,
        date: '5日前',
        text: '二子玉川駅西口から徒歩5分。女性専用で安心。体験レッスンが無料で手ぶらOK。グループレッスンだけでなくパーソナルレッスンも受けられるのが嬉しい。',
      },
      {
        author: 'E.S',
        rating: 5,
        date: '1週間前',
        text: '初心者が80%で気負わず始められました。ライト3プランなら月3回12,980円。PMA加盟団体のプロ監修レッスンが受けられます。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '2週間前',
        text: '朝8時から夜21時まで営業。パーソナルレッスンもあるのがこの店舗の特徴。パウダールーム完備で買い物ついでにも通えます。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 0円（50分・手ぶらOK）',
    features: ['女性専用', 'マシン専門', '二子玉川駅徒歩5分', 'パーソナルあり'],
    description: '女性専用マシンピラティス専門スタジオ。二子玉川駅西口から徒歩5分。グループレッスンに加えてパーソナルレッスンも提供（二子玉川店限定）。PMA加盟団体のプロ監修レッスン。プロフェッショナルグレードのリフォーマーマシンを使用。',
    access: '東急電鉄「二子玉川駅」西口 徒歩5分',
    address: '東京都世田谷区玉川4-1-9 タマリバー246 2階',
    popularPlan: {
      name: 'スタンダード4（月4回）',
      description: '月4回のグループレッスン。PMA監修のプロフェッショナルグレードリフォーマー。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'ライト3（月3回 12,980円）',
      'フル（毎日1回 20,680円）',
      'フル(デイ)（平日8:00-15:00 18,480円）',
      'プライベート2（月2回 19,800円）/ プライベート4（月4回 36,960円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム', 'ウォーターサービス', 'レンタルウェア・タオル・ソックス'],
    },
  },
  {
    name: 'BDC PILATES 二子玉川',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      {
        author: 'R.K',
        rating: 5,
        date: '1週間前',
        text: '二子玉川駅から徒歩2分！日本初のマシンピラティス専門スタジオ。認定資格を持つ講師の質が高い。体験レッスンが3,850円。グループもプライベートも充実。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '2週間前',
        text: '月4回15,400円。ダンサーやアスリートも通う本格的なスタジオ。身体の使い方を根本から学べます。6Fからの眺めも良い。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '3週間前',
        text: '平日は10時から20時、土日は9:30から17時まで。プライベートレッスンで完全カスタマイズしてもらえます。',
      },
    ],
    price: '月4回 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['日本初マシン専門', '二子玉川駅徒歩2分', '認定講師', 'グループ&プライベート'],
    description: '日本初のマシンピラティス専門スタジオの二子玉川店。駅から徒歩2分の好立地。認定指導資格を保有した講師によるグループレッスンとプライベートレッスン。一人ひとりの身体の状態と目的に沿ってメニューを完全カスタマイズ。',
    access: '東急田園都市線・大井町線「二子玉川駅」徒歩2分',
    address: '東京都世田谷区玉川3-6-1 第6明友ビル 6F',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: '認定講師による本格マシンピラティスグループレッスン。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      '月6回（21,945円）',
      '月8回（27,720円）',
      '入会金 11,000円 + 事務手数料 2,200円',
      'プライベートレッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 10:00〜20:00 / 土日 9:30〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'CLUB PILATES 二子玉川店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 134,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '5日前',
        text: '二子玉川駅西口から徒歩3分。世界最大級のブランドで安心。30分の無料体験で雰囲気がわかりました。入会金も体験当日なら無料に。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '1週間前',
        text: '15種類の器具を1人1台使えるのが贅沢。8つのプログラムと4段階のレベル分け。月4回14,190円。朝7時から営業で仕事前にも通えます。',
      },
      {
        author: 'N.Y',
        rating: 5,
        date: '2週間前',
        text: '資格保持のインストラクターが丁寧に指導。最大12名の少人数制でしっかり見てもらえます。男性もOK。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（当日入会で入会金無料）',
    features: ['世界最大級', '15種類の器具', '二子玉川駅徒歩3分', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。二子玉川駅西口から徒歩3分。最大12名の少人数制グループレッスンで、15種類のマシン・器具を1人1台完備。8つのプログラムと4段階のレベルに分けたクラスから選択可能。',
    access: '東急田園都市線・大井町線「二子玉川駅」西口 徒歩3分',
    address: '東京都世田谷区玉川3-15-1 曽根ビル 2F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（26,290円）',
      '通い放題プラン（40,590円）',
      '入会金 5,500円（体験当日入会で無料）',
      '無料体験レッスン',
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
    name: 'ピラティスミラー 二子玉川',
    image: '/images/pilates3.jpg',
    rating: 4.6,
    reviewCount: 112,
    reviews: [
      {
        author: 'T.I',
        rating: 5,
        date: '1週間前',
        text: 'コナミスポーツクラブ運営で安心。月会費11,000円で月6回まで通えてコスパ良好。7回目以降は1回1,100円で追加可能。鏡を使ったフォーム確認が特徴的。',
      },
      {
        author: 'Y.W',
        rating: 4,
        date: '2週間前',
        text: '平日は朝8時から夜22時まで営業。プライベートレッスンも月2回19,800円から。体験当日入会で入会金11,000円が無料になりました。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '3週間前',
        text: '二子玉川ライズの近くにあってアクセス便利。グループもパーソナルも選べて、初心者でも安心のマシンピラティス。',
      },
    ],
    price: '月会費 11,000円（月6回）',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['コナミ運営', 'マシン専門', 'パーソナルあり', 'ミラー設備'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。「もっと鏡が見たくなる」をコンセプトに、鏡を効果的に利用する新しいピラティススタジオ。月会費11,000円で月6回まで、7回目以降は1,100円で追加可能。パーソナルレッスンも提供。',
    access: '二子玉川駅周辺',
    address: '東京都世田谷区玉川4丁目1-9 タマリバー246 2F',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: 'マシンピラティス月6回まで。7回目以降は1,100円で追加可能。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      '入会金 11,000円（体験当日入会で無料）',
      '7回目以降 追加1,100円/回',
      'プライベート2（月2回 19,800円）',
      'プライベート4（月4回 36,960円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 8:00〜22:00 / 土日祝 8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ミラー設備', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！二子玉川のスタジオのほとんどが初心者歓迎。the SILKは初心者が80%、CLUB PILATESはレベル分けがあるので安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。二子玉川はマシン専門スタジオが充実しています。',
  },
  {
    question: '二子玉川のピラティススタジオの料金相場は？',
    answer: 'グループ月4回で10,450円〜15,400円程度。ピラティスミラーは月6回11,000円でコスパ抜群。パーソナルは月2回19,800円〜が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回（月4-8回）がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらOKの無料体験、CLUB PILATESも無料体験を実施しています。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化に特化。ヨガは柔軟性とリラックス重視。目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、姿勢改善で根本原因を解消できます。BDC PILATESのプライベートレッスンでは体の状態に合わせた完全カスタマイズが可能です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルはBDC PILATESやthe SILKで効果的な指導を。グループはzen placeなら月額10,450円から。まずは体験で両方試してみましょう。',
  },
]

export default function FutakotamagawaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス二子玉川おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">二子玉川</span>
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
              Pilates Navi編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「二子玉川で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、二子玉川エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>二子玉川でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>田園都市線沿線で通いやすいスタジオがいい</span>
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

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              二子玉川のおすすめピラティススタジオ5選
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円前後で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月額10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  充実したマシン設備で本格的なレッスンを。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（15種類の器具）</li>
                  <li className="text-warm-700">• BDC PILATES（日本初マシン専門）</li>
                  <li className="text-warm-700">• zen place pilates（各種マシン完備）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  二子玉川駅から徒歩5分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• BDC PILATES（徒歩2分）</li>
                  <li className="text-warm-700">• CLUB PILATES（徒歩3分）</li>
                  <li className="text-warm-700">• zen place pilates（徒歩4分）</li>
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
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも変化に気づかれるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。初心者向けの基本的なレッスンが多い。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜）</li>
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・プライベート選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（12,980円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• BDC PILATES（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  パーソナルレッスン。効果重視の方におすすめ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK プライベート（19,800円〜/月2回）</li>
                  <li>• zen place プライベート（33,880円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  二子玉川エリアの料金相場はグループ月4回で10,450円〜15,400円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。the SILKとCLUB PILATESは無料体験を実施。zen placeは体験当日入会で入会金無料。気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。二子玉川は東急田園都市線・大井町線が利用可能。すべてのスタジオが駅から徒歩5分以内で、二子玉川ライズでの買い物ついでにも通えて便利です。営業時間も要チェックです。
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
              今回は二子玉川のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では二子玉川にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
