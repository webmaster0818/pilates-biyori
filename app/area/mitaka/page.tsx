import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/mitaka/' },
  title: '【2026年10月最新】三鷹のピラティススタジオおすすめ4選｜無料体験・料金で比較',
  description: '三鷹のピラティススタジオ4社の料金・無料体験・マシン対応を比較しています。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,三鷹,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,ピラティスミラー,YUZU,COCOLANCE,Pilaticise',
}

const studios = [
  {
    name: 'ピラティスミラー 三鷹',
    image: '/images/studios/pilates-mirror.webp',
    price: '月6回 11,000円（税込）',
    trial: '体験レッスン 2,200円',
    features: ['コナミスポーツ運営', '天井ミラー', '30分レッスン', '少人数制'],
    description: 'コナミスポーツが運営するマシンピラティススタジオです。天井に設置されたミラーで自分のフォームをリアルタイムに確認しながらレッスンできるのが特徴です。1レッスン30分の効率的なプログラムのため、忙しい方でも通うことができます。少人数制で一人ひとりに目が行き届く丁寧な指導です。月6回11,000円のリーズナブルな料金設定も魅力です。',
    access: 'JR中央線「三鷹駅」周辺',
    address: '東京都三鷹市エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月6回プラン',
      description: '天井ミラー付きのスタジオで少人数制マシンピラティスです。30分の効率的なレッスンです。',
      price: '11,000円/月（税込）',
    },
    options: [
      '月6回プラン（11,000円/月）',
      '30分レッスン',
      '体験レッスン 2,200円',
      '少人数制グループレッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '天井ミラー', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'YUZU 三鷹店',
    image: '/images/studios/yuzu-pilates.webp',
    price: 'パーソナルレッスン（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['パーソナルマシンピラティス', 'リフォーマー完備', 'キャデラック・チェア・バレル', '豊富なマシン'],
    description: 'パーソナルマシンピラティス専門スタジオです。リフォーマー、キャデラック、チェア、バレルなど豊富なマシンを完備し、一人ひとりの体の状態や目的に合わせた幅広いエクササイズが可能です。マンツーマン指導で正しいフォームを丁寧に教えてもらえるため、効率的に体を変えたい方におすすめです。',
    access: 'JR中央線「三鷹駅」周辺',
    address: '東京都三鷹市エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'リフォーマー・キャデラック・チェア・バレルなど豊富なマシンを使ったマンツーマン指導しています。',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルマシンピラティス',
      'リフォーマー・キャデラック・チェア・バレル完備',
      '体験レッスンあり',
      '一人ひとりに合わせたプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '更衣室'],
    },
  },
  {
    name: 'COCOLANCE 三鷹店',
    image: '/images/studios/cocolance-mitaka.webp',
    price: 'パーソナルレッスン（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['女性専門', '個室プライベート', '産後ダイエット対応', '姿勢矯正対応'],
    description: '女性専門の個室プライベートピラティススタジオです。完全個室でのマンツーマン指導で、周囲を気にせず集中してレッスンを受けられます。産後ダイエットや姿勢矯正など、女性ならではの体の悩みに特化したプログラムを提供しています。一人ひとりの目的や体の状態に合わせたオーダーメイドのレッスンが魅力です。',
    access: 'JR中央線「三鷹駅」周辺',
    address: '東京都三鷹市エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '女性専門・完全個室でのマンツーマンピラティスです。産後ダイエット・姿勢矯正に対応しています。',
      price: '詳細は公式サイト参照',
    },
    options: [
      '個室プライベートレッスン',
      '産後ダイエットプログラム',
      '姿勢矯正プログラム',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（産後ママも多数）',
      genderRatio: '女性100%（女性専門）',
      purpose: ['産後ダイエット', '姿勢矯正', 'ボディメイク', '体質改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティスマシン', '完全個室', '更衣室'],
    },
  },
  {
    name: 'Pilaticise（ピラティシーズ）',
    image: '/images/studios/pilaticise-mitaka.webp',
    price: 'パーソナルレッスン（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['女性限定', '駅徒歩3分', 'パーソナルピラティス', '三鷹駅近'],
    description: '三鷹駅から徒歩3分の女性限定パーソナルピラティススタジオです。マンツーマン指導で一人ひとりの体の状態や目標に合わせたオーダーメイドのレッスンを提供しています。女性限定なので安心してリラックスした環境でレッスンを受けられます。駅近で通いやすく、継続しやすい立地も魅力です。',
    access: 'JR中央線「三鷹駅」徒歩3分',
    address: '東京都三鷹市エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '女性限定・駅徒歩3分のマンツーマンピラティスです。体の状態に合わせたオーダーメイドレッスンです。',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルピラティスレッスン',
      '女性限定スタジオ',
      '三鷹駅徒歩3分',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性限定）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティスマシン', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。三鷹エリアのスタジオはほとんどが初心者歓迎です。ピラティスミラーは30分の短時間レッスンで少人数制です。YUZU、COCOLANCE、Pilaticiseはパーソナルなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめです。三鷹エリアの5スタジオはすべてマシンピラティスに対応しています。',
  },
  {
    question: '三鷹のピラティスの料金相場は？',
    answer: 'ピラティスミラーは月6回11,000円です。YUZU、COCOLANCE、Pilaticiseはパーソナルレッスンで料金は公式サイトをご確認ください。目的と頻度に合わせてお選びください。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。ピラティスミラーは30分レッスンのため、忙しい方でも週2回通うことができます。大切なのは無理なく継続することです。最低2〜3ヶ月続けることをおすすめします。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。COCOLANCEは産後ダイエットにも対応しています。2〜3ヶ月の継続で効果を実感される方が多くなっています。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。ピラティスミラーは体験2,200円と気軽に試せます。YUZU、COCOLANCE、Pilaticiseも体験レッスンを実施しています。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'ピラティスミラーは男女問わず利用可能です。COCOLANCE、Pilaticiseは女性専門・女性限定です。YUZUについては公式サイトでご確認ください。',
  },
  {
    question: '女性専用のスタジオはありますか？',
    answer: 'COCOLANCE三鷹店は女性専門、Pilaticiseは女性限定のパーソナルスタジオです。女性だけの安心した環境でレッスンを受けたい方におすすめです。',
  },
  {
    question: '産後ケアに対応しているスタジオはありますか？',
    answer: 'COCOLANCE三鷹店は産後ダイエット・姿勢矯正に特化したプログラムを提供しています。女性専門の個室プライベートレッスンなので、産後ママも安心して通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感される方が多くなっています。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function MitakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '三鷹', url: 'https://biyori-pilates.com/area/mitaka/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス三鷹おすすめ4選
              <br className="hidden md:block" />
              人気スタジオの料金プランの比較
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
              <span className="text-warm-600">三鷹</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="三鷹" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              三鷹はJR中央線の特快停車駅で、新宿まで約15分という好アクセスのエリアです。太宰治ゆかりの文学の街としても知られ、井の頭恩賜公園やジブリ美術館など自然と文化が共存する住みやすい街です。そんな三鷹エリアには、費用対効果の良いグループレッスンから女性専門パーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、三鷹エリアでおすすめの実在するピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>三鷹でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金を抑えられるスタジオを知りたい</span>
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
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="三鷹" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              三鷹のおすすめピラティススタジオ4選
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
              三鷹のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">11,000円（月6回）</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">各スタジオの公式サイトでご確認ください</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              三鷹は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いている傾向があります。近隣の吉祥寺エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              三鷹でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR中央線「三鷹駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  三鷹エリアのスタジオは三鷹駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。三鷹駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  三鷹は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、比較的空いている時間帯を把握しておくと通いやすくなります。子連れ可のクラスがあるスタジオもあるので、お子さまがいる方はご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  三鷹エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  三鷹エリアだけでなく、近隣の<Link href="/area/kichijoji/" className="text-warm-700 underline hover:text-warm-900">吉祥寺</Link>、<Link href="/area/chofu/" className="text-warm-700 underline hover:text-warm-900">調布</Link>、<Link href="/area/nishi-ogikubo/" className="text-warm-700 underline hover:text-warm-900">西荻窪</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。ジーンズやスカートは適していません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。自動販売機がないスタジオもあるため、持参をおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されている場合が一般的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、靴下の着用が必須のスタジオが多数あります。グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは脚を大きく動かすエクササイズが多いため、伸縮性のある素材が適しています。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。手ぶらで体験可能な場合もあるので事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>三鷹エリアの豆知識：</strong>三鷹は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無をご確認ください。近場なら荷物も最小限で済むので、気軽に続けやすいのが三鷹の良さです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月1万円台から始められるスタジオもあります。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YUZU（豊富なマシン完備）</li>
                  <li className="text-warm-700">• COCOLANCE（女性専門・個室）</li>
                  <li className="text-warm-700">• Pilaticise（女性限定・駅徒歩3分）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用で安心</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの空間で安心レッスンです。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• COCOLANCE（女性専門・産後対応）</li>
                  <li className="text-warm-700">• Pilaticise（女性限定パーソナル）</li>
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
                週1〜2回からスタートするのがおすすめです。最低2〜3ヶ月継続することで効果を実感できます。ピラティスミラーは30分レッスンなので初心者でも無理なく取り組めます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化を実感できます。YUZUはリフォーマー・キャデラック・チェア・バレルと豊富なマシンで効率的にボディメイクが可能です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">産後ケア・姿勢矯正</h3>
              <p className="text-warm-600 leading-relaxed">
                週1〜2回のペースで無理なく継続することをおすすめします。COCOLANCEは産後ダイエット・姿勢矯正に特化した女性専門スタジオなので、産後ママにおすすめです。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に適しています。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜20,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜8回</p>
                <p className="text-sm text-warm-600 mb-4">週1〜2回ペースで着実に成果です。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• グループ+パーソナル併用</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル重視</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">完全個室</p>
                <p className="text-sm text-warm-600 mb-4">本気で体を変えたい方におすすめです。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• YUZU（豊富なマシン完備）</li>
                  <li>• COCOLANCE（女性専門）</li>
                  <li>• Pilaticise（女性限定）</li>
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
                  ダイエット、姿勢改善、産後ケア、体幹強化など、目的によって最適なスタジオは変わります。産後ケアならCOCOLANCE、豊富なマシンで幅広いエクササイズならYUZUがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  三鷹エリアはグループ（ピラティスミラー）、パーソナル（YUZU、COCOLANCE、Pilaticise）と多彩な形式が揃っています。自分の好みや予算に合わせてお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスミラーは体験2,200円と手頃な価格で試せます。まずは体験で雰囲気やインストラクターとの相性をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  三鷹はJR中央線の特快停車駅で、新宿まで約15分です。Pilaticiseは三鷹駅徒歩3分とアクセス抜群です。
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
              今回は三鷹エリアのおすすめピラティススタジオ4選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              三鷹はJR中央線の特快停車駅で新宿まで約15分という好立地です。コナミスポーツ運営で天井ミラー付きのピラティスミラー（月6回11,000円）、豊富なマシン完備のパーソナルスタジオYUZU、女性専門・個室プライベートのCOCOLANCE、女性限定・駅徒歩3分のPilaticiseと、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは体験レッスンが手頃なピラティスミラー（体験2,200円）から試してみるのがおすすめです。本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              ピラティスミラーは体験2,200円です。<br />
              まずは体験レッスンへの参加をおすすめします。
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
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/chofu/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">調布</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="mitaka" areaName="三鷹" />

      <RelatedAreas currentSlug="mitaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
