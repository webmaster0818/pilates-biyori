import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス白金高輪・白金台おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '白金高輪・白金台エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,白金高輪,白金台,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Habit Pilates studio 白金高輪店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 110,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '白金高輪駅から近くて通いやすい。パーソナルもグループもあるので目的に合わせて選べます。体験1,980円でお手頃。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制のセミパーソナルが良い。1回4,500円〜はコスパが良いです。丁寧に見てもらえます。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: 'マシンピラティスを始めたくて通い始めました。白金高輪の落ち着いた雰囲気でリラックスできます。',
      },
    ],
    price: '1回 4,500円〜',
    trial: '体験レッスン 1,980円',
    features: ['パーソナル&グループ', '白金高輪駅近', 'マシンピラティス', 'コスパ◎'],
    description: 'パーソナルレッスンとグループレッスンの両方に対応するマシンピラティススタジオ。白金高輪駅から近い好立地。1回4,500円〜のリーズナブルな料金設定。体験レッスン1,980円で気軽に始められます。',
    access: '南北線・三田線「白金高輪駅」徒歩圏内',
    address: '東京都港区白金（白金高輪エリア）',
    popularPlan: {
      name: 'グループレッスン',
      description: 'マシンピラティスのグループレッスン。コスパ抜群。',
      price: '1回 4,500円（税込）〜',
    },
    options: [
      'グループレッスン（1回 4,500円〜）',
      'パーソナルレッスン',
      '体験レッスン（1,980円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 8:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'Premium Yoga&Pilates 白金高輪駅前店',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    reviewCount: 95,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '少人数制でヨガとピラティスの両方が受けられるのが嬉しい。白金高輪駅前で通いやすい。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: 'マシンとマット両方に対応。プライベートレッスンも受けられるので、グループと使い分けています。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '白金高輪の上品な雰囲気にマッチしたスタジオ。インストラクターの質が高いです。',
      },
    ],
    price: 'お問い合わせください',
    trial: '体験レッスン 5,500円',
    features: ['ヨガ&ピラティス', '少人数制', '白金高輪駅前', 'マシン&マット'],
    description: '少人数制のヨガ・ピラティススタジオ。白金高輪駅前の好立地。マシンとマット両方のピラティスに対応。プライベートレッスンとグループレッスンの両方を提供。上品で落ち着いた空間でトレーニングできます。',
    access: '南北線・三田線「白金高輪駅」駅前',
    address: '東京都港区白金（白金高輪駅前）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '少人数制のマシンピラティスレッスン。',
      price: 'お問い合わせください',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '体験レッスン（5,500円）',
      '入会金（11,000円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '柔軟性向上', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'SOU PILATES STUDIO 高輪台店',
    image: '/images/pilates4.jpg',
    rating: 4.9,
    price: 'お問い合わせください',
    trial: '体験レッスン 5,500円',
    features: ['パーソナル専門', 'マシンピラティス', '高輪台駅近', '国際ライセンス'],
    description: 'マシンピラティス専門のパーソナルスタジオ。高輪台駅から徒歩圏内、白金高輪からもアクセス可能。国際ライセンス保持のインストラクターが一人ひとりに合わせた丁寧な指導。入会金11,000円、年会費なし。',
    access: '都営浅草線「高輪台駅」徒歩圏内 / 南北線「白金高輪駅」徒歩圏内',
    address: '東京都港区白金台（高輪台・白金高輪エリア）',
  },
  {
    name: 'studio ready',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    price: '1回 8,000円〜',
    trial: '体験レッスン 6,600円',
    features: ['パーソナル専門', '40代以上対応', '白金高輪エリア', 'マシンピラティス'],
    description: '40代以上の女性を中心に対応するパーソナルマシンピラティススタジオ。白金高輪エリアに展開。年齢に合わせた丁寧な指導で、姿勢改善や身体の不調にしっかり向き合います。',
    access: '南北線・三田線「白金高輪駅」徒歩圏内',
    address: '東京都港区白金（白金高輪エリア）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！白金高輪エリアのスタジオは初心者歓迎。丁寧な指導で安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめ。',
  },
  {
    question: '白金高輪エリアの料金相場は？',
    answer: 'グループ1回4,500円〜、パーソナルは1回8,000円〜。体験は1,980円〜6,600円です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心です。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、姿勢改善で根本原因を解消できます。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。',
  },
]

export default function ShirokanedaiPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス白金高輪・白金台おすすめ4選！<br className="hidden md:block" />
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
              <span className="text-warm-600">白金高輪</span>
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
              「白金高輪・白金台でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「上質なスタジオに通いたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、白金高輪・白金台エリアでおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>白金高輪・白金台でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>上質な空間でトレーニングしたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
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
              白金高輪・白金台のおすすめピラティススタジオ4選
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
                  リーズナブルに通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Habit Pilates（1回 4,500円〜）</li>
                  <li className="text-warm-700">• Premium Yoga&Pilates（グループあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を最大化。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• SOU PILATES（国際ライセンス）</li>
                  <li className="text-warm-700">• studio ready（40代以上対応）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  白金高輪駅から徒歩圏内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Habit Pilates（駅近）</li>
                  <li className="text-warm-700">• Premium Yoga&Pilates（駅前）</li>
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
                週1-2回からスタート。最低2-3ヶ月で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
              </p>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white">
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
                  ダイエット、姿勢改善、体幹強化など、目的に応じてスタジオを選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  グループ1回4,500円〜、パーソナル1回8,000円〜が相場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  1,980円〜6,600円で体験できるスタジオが多いので、気軽に試してみてください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  白金高輪は南北線・三田線が利用可能。麻布十番・目黒も近く、閑静な高級住宅街で落ち着いた雰囲気。上質な空間でピラティスを楽しめます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50">
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
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は白金高輪・白金台のおすすめピラティススタジオをご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              白金高輪は南北線・三田線が利用でき、閑静な高級住宅街ならではの上質なスタジオが揃っています。コスパの良いグループレッスンから、40代以上対応のパーソナルスタジオまで多彩な選択肢があります。
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
              初回限定の体験レッスン1,980円〜6,600円。<br />
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
