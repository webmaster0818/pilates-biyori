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
  title: '【2026最新】ピラティス四ツ谷おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '四ツ谷エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,四ツ谷,四谷,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'STUDIO IVY 四谷三丁目店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 95,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '四谷三丁目駅から近くて便利。完全パーソナルなので自分のペースで集中してレッスンを受けられます。1回6,250円〜はパーソナルとしてはリーズナブル。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'オーダーメイドのプログラムで、自分の身体の課題にしっかり向き合えます。姿勢が改善されてきたと実感。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '体験レッスンで丁寧にカウンセリングしてもらえました。インストラクターの知識が豊富で信頼できます。',
      },
    ],
    price: '1回 6,250円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '四谷三丁目駅近', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。四谷三丁目駅から徒歩圏内。一人ひとりの体型や目標に合わせたオーダーメイドのトレーニングを提供。月謝制で1レッスン6,250円〜とパーソナルとしてはリーズナブル。',
    access: '丸ノ内線「四谷三丁目駅」徒歩圏内',
    address: '東京都新宿区（四谷三丁目エリア）',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティス。1回あたり6,250円〜。',
      price: '月4回 25,000円〜（税込）',
    },
    options: [
      '月2回コース（15,000円〜）',
      '月4回コース（25,000円〜）',
      '月8回コース（48,000円〜）',
      '都度利用（8,800円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', 'ボディメイク', '肩こり腰痛改善', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', '完全プライベート空間'],
    },
  },
  {
    name: 'zen place pilates 飯田橋スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '飯田橋駅徒歩1分', '男性OK', '四ツ谷から2駅'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。飯田橋駅B4b出口から徒歩1分。四ツ谷駅から南北線で2駅の好アクセス。マットグループ、マシングループ、プライベートレッスンに対応。',
    access: '南北線「飯田橋駅」B4b出口 徒歩1分 / 四ツ谷駅から南北線で2駅',
    address: '東京都新宿区（飯田橋駅B4b出口徒歩1分）',
  },
  {
    name: 'ピラティスK 新宿店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    price: 'マンスリー4メンバー 13,420円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', 'マシンピラティス専門', '新宿エリア', '四ツ谷から丸ノ内線で近い'],
    description: '女性専用マシンピラティス専門スタジオ。新宿エリアに展開。四ツ谷駅から丸ノ内線で新宿方面にすぐ。初心者から経験者まで個人のペースに合わせたプログラムを用意。',
    access: '丸ノ内線「新宿駅」/ 四ツ谷駅から丸ノ内線で近い',
    address: '東京都新宿区（新宿エリア）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！四ツ谷エリアのピラティススタジオは初心者歓迎のスタジオがほとんど。経験豊富なインストラクターが基礎から丁寧に指導してくれます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマーなど）を使ったトレーニング。マシンは初心者におすすめです。',
  },
  {
    question: '四ツ谷エリアの料金相場は？',
    answer: 'パーソナルレッスン1回5,000円〜8,800円程度。グループは月4回10,000円〜15,000円が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。継続が大切です。',
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

export default function YotsuyaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス四ツ谷おすすめ4選！<br className="hidden md:block" />
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
              <span className="text-warm-600">四ツ谷</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="四ツ谷" />

        <PriceComparisonTable studios={studios} areaName="四ツ谷" />

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
              「四ツ谷周辺でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「パーソナルで丁寧に指導してもらえるスタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、四ツ谷エリアから通えるおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>四ツ谷・四谷三丁目でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>パーソナルレッスンを受けたい</span>
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
              四ツ谷エリアのおすすめピラティススタジオ4選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を最大化。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（1回6,250円〜）</li>
                  <li className="text-warm-700">• Grand Chariot（30分5,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">グループ・コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  グループレッスンで気軽に始めたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place 飯田橋（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスK 新宿（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">四ツ谷からのアクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  丸ノ内線・南北線・中央線で近隣にもアクセス。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（四谷三丁目駅近）</li>
                  <li className="text-warm-700">• zen place 飯田橋（南北線で2駅）</li>
                  <li className="text-warm-700">• ピラティスK（丸ノ内線で新宿方面）</li>
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
                週1-2回からスタートがおすすめ。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
              </p>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
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
                  パーソナルは1回5,000円〜8,800円程度、グループは月4回10,000円〜15,000円が相場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  実際にスタジオの雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  四ツ谷はJR中央線・総武線、丸ノ内線、南北線が利用可能。新宿・飯田橋・市ヶ谷も近く、近隣エリアのスタジオも選択肢に入ります。落ち着いた住宅街で通いやすいエリアです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
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
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は四ツ谷エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              四ツ谷はJR中央線・丸ノ内線・南北線が利用でき、新宿・飯田橋方面にも好アクセス。パーソナル専門のスタジオが充実しており、じっくり丁寧に指導してもらいたい方におすすめのエリアです。
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
              初回限定の体験レッスン500円〜。<br />
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

      <RelatedAreas currentSlug="yotsuya" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
