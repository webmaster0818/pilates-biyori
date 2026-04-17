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
  title: '【2026最新】ピラティス浜松町おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '浜松町エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,浜松町,大門,田町,三田,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'the SILK 大門浜松町店',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '2026年2月オープンの新しいスタジオ。大門駅A2出口から徒歩1分で通いやすい。音楽に合わせてリフォーマーを使うレッスンが楽しく、あっという間に終わります。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '女性専用なので安心。手ぶらで体験できるのが嬉しかった。ウェア・タオル無料貸出、ウォーターサーバーも完備。内装もきれいでモチベーションが上がります。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: '浜松町駅JR北口からも徒歩2分。朝7:30から夜22:00まで営業しているので仕事前後に通える。体験者の8割がピラティス未経験者とのことで初心者も安心。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '大門駅徒歩1分', '2026年2月OPEN', '手ぶら体験OK'],
    description: '2026年2月オープンの女性専用マシンピラティススタジオ。大門駅A2出口から徒歩1分、浜松町駅JR北口から徒歩2分。音楽のリズムに合わせて動く独自のレッスンスタイルで、初心者でも楽しく続けられます。体験者の約8割がピラティス未経験者。',
    access: '都営浅草線・大江戸線「大門駅」A2出口 徒歩1分 / JR「浜松町駅」北口 徒歩2分',
    address: '東京都港区浜松町1-27-10 バッカス第3ビル 7F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Full（毎日1回 20,680円）',
      'Full Day（18,480円）',
      '体験・入会金・登録手数料 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜22:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'zen place pilates 三田スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 198,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '三田駅A3出口直結でアクセス抜群。田町駅からも徒歩1分。マットもマシンも両方受けられるのが魅力。インストラクターの質が高いです。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: 'グループレッスンは体験1,000円とお手頃。男性も通えるので夫婦で参加しています。全国80店舗以上で相互利用できるのも便利。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: '朝7時からレッスンがあるので出勤前に通えます。ピラティス専門で20年以上の実績があり、インストラクター養成も行っている本格派。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['三田駅直結', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。三田駅A3出口直結（エレベーター利用可）、田町駅から徒歩1分。マットグループ・マシングループ・プライベートの3タイプから選べます。全国80店舗以上で相互利用可能。男性も歓迎。',
    access: '都営浅草線・三田線「三田駅」A3出口 直結 / JR「田町駅」西口 徒歩1分',
    address: '東京都港区芝5-31-7 三田ステーションビルアミタ 902',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4回プラン（10,450円〜）',
      'マシングループ体験（3,000円）',
      'プライベートレッスン（体験 9,900円）',
      '他グレード店舗利用（差額あり）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室', 'Wi-Fi'],
    },
  },
  {
    name: 'zen place pilates 田町スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.6,
    reviewCount: 175,
    reviews: [
      {
        author: 'Y.H',
        rating: 5,
        date: '1週間前',
        text: '田町駅東口から徒歩5分。芝浦エリアの落ち着いた雰囲気で集中してレッスンを受けられます。マシンピラティスのグループレッスンが特に人気。',
      },
      {
        author: 'E.M',
        rating: 4,
        date: '2週間前',
        text: '三田スタジオと併用できるので、スケジュールに合わせて通い分けられるのが便利。体験1,000円で気軽に試せました。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '3週間前',
        text: 'プライベートレッスンで体の癖を細かく指導してもらえます。ピラティス歴10年以上のインストラクターが在籍していて安心。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['田町駅徒歩5分', '男性OK', 'マシングループ', '三田店と併用可'],
    description: 'zen place pilatesの田町スタジオ。田町駅東口（芝浦口）から徒歩5分。マットグループ・マシングループ・プライベートレッスンに対応。三田スタジオとの併用も可能で、スケジュールに合わせた通い方ができます。',
    access: 'JR「田町駅」東口（芝浦口） 徒歩5分',
    address: '東京都港区芝浦3-13-2 Yビル 6F',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。三田スタジオとの併用も可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4回プラン（10,450円〜）',
      'マシングループ体験（3,000円）',
      'プライベートレッスン（体験 9,900円）',
      '三田スタジオとの相互利用可',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'パフォーマンス向上', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'CLUB PILATES 田町店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 132,
    reviews: [
      {
        author: 'H.S',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のピラティスブランドだけあって設備が充実。リフォーマー・スプリングボード・TRXなど15種類の器具を使ったレッスンは他では体験できない。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: '田町駅から徒歩6分。4段階のレベル分けがあるので初心者でも安心。無料の30分イントロクラスで雰囲気がわかります。',
      },
      {
        author: 'K.Y',
        rating: 5,
        date: '3週間前',
        text: '男性会員も多く、カップルで通っています。8つのプログラムがあり飽きずに続けられます。インストラクター全員が資格保持者。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '15種類の器具', '田町駅徒歩6分', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。田町駅から徒歩6分。最大12名の少人数制グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を1人1台完備。8つのプログラムと4段階のレベル分けで初心者から上級者まで対応。',
    access: 'JR「田町駅」徒歩6分',
    address: '東京都港区田町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（26,290円）',
      '通い放題プラン（40,590円）',
      '入会金 5,500円（キャンペーン時無料）',
      '無料イントロクラス（30分）',
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
    name: 'Pilates Studio B&B 田町店',
    image: '/images/studios/pilates-bb.webp',
    rating: 4.8,
    reviewCount: 95,
    reviews: [
      {
        author: 'C.M',
        rating: 5,
        date: '1週間前',
        text: '田町駅東口から徒歩4分。キッズスペースがあるので子連れでも通えます。産後のボディケアに最適。インストラクターの指導がとても丁寧。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '2週間前',
        text: 'パーソナルレッスンで体の状態をしっかり見てもらえます。リフォーマー・キャデラック・チェアなど本格マシンが揃っていて、オーダーメイドのプログラムが受けられる。',
      },
      {
        author: 'A.K',
        rating: 4,
        date: '3週間前',
        text: '少人数制で一人ひとりに目が行き届く。産前産後ケアのプログラムが充実していて、ママ友にもおすすめしました。',
      },
    ],
    price: 'パーソナル 1回 8,250円〜',
    trial: '体験レッスンあり',
    features: ['キッズスペース完備', '田町駅徒歩4分', 'パーソナル専門', '産前産後ケア'],
    description: 'パーソナル・少人数制のマシンピラティス専門スタジオ。田町駅東口から徒歩4分。キッズスペース完備で子連れOK。リフォーマー・キャデラック・チェアなど本格マシンを使ったオーダーメイドレッスン。産前産後ケアプログラムも充実。',
    access: 'JR「田町駅」東口 徒歩4分',
    address: '東京都港区芝浦エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'マシンを使った完全オーダーメイドのパーソナルレッスン。',
      price: '1回 8,250円〜（税込）',
    },
    options: [
      '回数券プランあり',
      'グループレッスンあり',
      '産前産後ケアプログラム',
      'キッズスペース利用無料',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['産後ケア', '姿勢改善', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 9:00〜21:00 / 土日 9:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'キッズスペース', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！浜松町エリアのスタジオはほとんどが初心者歓迎。the SILKは体験者の約8割がピラティス未経験者、CLUB PILATESは4段階のレベル分けがあります。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。浜松町エリアはマシン対応スタジオが充実。',
  },
  {
    question: '浜松町エリアのピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜15,070円程度。zen placeが月4回10,450円〜で最もリーズナブル。パーソナルはPilates Studio B&Bが1回8,250円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで体験可能（ウェア・タオル無料貸出）。CLUB PILATESは無料の30分イントロクラスあり。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place（三田・田町）とCLUB PILATESは男性も通えます。the SILKは女性専用です。',
  },
  {
    question: '子連れで通えるスタジオはありますか？',
    answer: 'Pilates Studio B&B田町店はキッズスペース完備で子連れOK。産前産後ケアプログラムも充実しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function HamamatsuchoPage() {
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
              【2026最新】ピラティス浜松町おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">浜松町</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="浜松町" />

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
              「浜松町で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、浜松町・大門・田町エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>浜松町・大門・田町でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="浜松町" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              浜松町のおすすめピラティススタジオ5選
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
              浜松町のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,250円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,250円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              浜松町エリアの料金はスタジオのタイプや立地によって異なります。まずは体験レッスンを活用して、料金と内容のバランスが自分に合うスタジオを見つけましょう。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              浜松町でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">最寄り駅の出口・路線を事前に確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  浜松町エリアは複数路線が利用できる便利な立地ですが、出口によってスタジオまでの距離が大きく変わることがあります。通う前にGoogleマップで自分の利用路線からのルートを確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">平日夜・土日午前は予約が集中</h3>
                <p className="text-warm-600 leading-relaxed">
                  浜松町エリアでは平日19時〜21時、土日午前中がレッスン予約のピークタイムです。人気スタジオは早めの予約が必須。平日午前〜昼間は比較的空いているので、時間に融通が利く方は狙い目です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">最低契約期間・キャンセルポリシーを確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  入会キャンペーンを利用すると3〜6ヶ月の最低契約期間が設定されるスタジオもあります。また、レッスン直前のキャンセルルール（何時間前まで無料か）もスタジオごとに異なるため、入会前に必ず確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンは2〜3スタジオ回るのがおすすめ</h3>
                <p className="text-warm-600 leading-relaxed">
                  浜松町エリアにはグループ専門からパーソナル専門まで多彩なスタジオがあります。1つだけで決めず、2〜3スタジオの体験レッスンを受けて、インストラクターとの相性や雰囲気を比較してから入会を決めましょう。
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
                  <strong>浜松町エリアの豆知識：</strong>スタジオによってはウェアやタオルのレンタルサービスを提供しているところもあります。仕事帰りや外出先から直接通いたい方は、レンタルの有無を事前に確認しておくと便利です。
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
                  <li className="text-warm-700">• zen place 三田（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• zen place 田町（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 大門浜松町（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩5分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（大門駅 徒歩1分）</li>
                  <li className="text-warm-700">• zen place 三田（三田駅 直結）</li>
                  <li className="text-warm-700">• Pilates Studio B&B（田町駅 徒歩4分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place 三田（10,450円〜）</li>
                  <li>• zen place 田町（10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（12,980円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 8,250円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全オーダーメイド。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Studio B&B（8,250円〜/回）</li>
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
                  ダイエット、姿勢改善、体幹強化、産後ケアなど目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  浜松町エリアの料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKとCLUB PILATESは無料体験、zen placeはグループ1,000円で体験可能。気軽に試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  浜松町エリアはJR山手線・都営浅草線・三田線・大江戸線が利用可能。the SILKは大門駅徒歩1分、zen place三田は三田駅直結とアクセス抜群。
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
              今回は浜松町・大門・田町エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では浜松町エリアにあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜3,000円。<br />
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

      <RelatedAreas currentSlug="hamamatsucho" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
