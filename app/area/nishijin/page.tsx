import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/nishijin/' },
  title: '【2026年9月最新】西新のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '西新エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,西新,福岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,早良区',
}

const studios = [
  {
    name: 'メルメイク 西新店【マットピラティス】',
    officialUrl: 'https://mermake.co.jp/f-fukuoka-pilates/',
    image: '/images/studios/mermake.webp',
    price: '月謝制（50分）プライベート2 17,300円／プライベート4 33,000円／プライベート6 47,100円（税込）',
    trial: '体験レッスン（50分）5,500円（税込・当日入会で無料）',
    features: ['マットピラティス', '完全個室・パーソナル（マンツーマン）', '24時間営業', 'ウェア・タオル無料レンタル', '水素水飲み放題', '福岡市地下鉄空港線「西新駅」徒歩3分'],
    description: '完全個室のパーソナルジム＆マットピラティスを展開するメルメイクの西新店。完全個室のマンツーマン指導、24時間営業、ウェア・タオル無料レンタル、セッション中の水素水飲み放題、管理栄養士監修の食事アドバイス付き。ダイエット・ボディメイク・姿勢矯正（反り腰・巻き肩・猫背・骨盤矯正）に対応します。',
    access: '福岡市地下鉄空港線「西新駅」徒歩3分',
    address: '〒814-0002 福岡県福岡市早良区西新1丁目8-7 シルキーコート西新203号室',
    popularPlan: { name: 'プライベート4（月4回・50分）', description: '完全個室のパーソナルマットピラティスを月4回のペースで継続したい方向けの人気プラン。姿勢矯正・インナーマッスル強化を中心に一人ひとりに合わせて指導します。', price: '月額 33,000円（税込・1回あたり8,250円）' },
    options: ['体験レッスン（50分）5,500円（当日入会で無料）', '月謝制プライベート2（月2回・50分）17,300円／プライベート6（月6回・50分）47,100円（税込）', '75分月謝制 プライベート2 22,800円／プライベート4 44,000円／プライベート6 63,600円（税込）', '単発（都度）1回50分 9,050円／75分 11,800円（税込）', '入会金・事務手数料 33,000円（カウンセリング時の入会で無料）', 'インストラクター指名料 550円（税込）'],
    userProfile: { ageRange: '男女・年代問わず利用可', genderRatio: '男女利用可', purpose: ['ダイエット・ボディメイク', '姿勢矯正（反り腰・巻き肩・猫背）', '骨盤矯正', 'マットピラティス'] },
    basicInfo: { hours: '24時間営業（電話受付 平日10:00〜19:00）', closed: '年中無休', facilities: ['マットピラティス', '完全個室', 'シャワー・更衣スペース', 'ウェア・タオル無料レンタル', '水素水'] },
  },

  {
    name: 'CLUB PILATES 福岡西新店',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料',
    features: ['世界最大級チェーン', 'グループ&プライベート', '体験無料', '初心者歓迎'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。福岡市地下鉄空港線「西新駅」から徒歩圏内の好立地。グループレッスンからプライベートレッスンまで幅広く対応し、レベル別のクラス分けで初心者から上級者まで満足できるプログラムを提供。無料体験レッスンを実施中。',
    access: '福岡市地下鉄空港線「西新駅」徒歩圏内',
    address: '福岡県福岡市早良区（西新エリア）',
    popularPlan: { name: 'グループレッスン（月4回）', description: 'リフォーマーを使ったグループレッスン。レベル別クラスで初心者も安心。', price: '月4回 14,190円〜（税込）' },
    options: ['プライベートレッスン（別途料金）', 'グループ月4回プラン', 'グループ月8回プラン', '通い放題プラン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'ロッカー'] },
  },
  {
    name: 'ピラティススタジオ Live 西新店',
    image: '/images/studios/pilates-live-nishijin.webp',
    price: '月4回 12,000円〜',
    trial: '体験レッスンあり',
    features: ['最短30分', '少人数制', '初心者歓迎', '効率的'],
    description: '最短30分からレッスンが受けられるピラティススタジオ。少人数制で一人ひとりに目が行き届く丁寧な指導が特徴。初心者でも安心して始められる環境が整っています。福岡市早良区の文教エリア・西新に位置し、落ち着いた雰囲気の中でトレーニングに集中できます。',
    access: '福岡市地下鉄空港線「西新駅」徒歩圏内',
    address: '福岡県福岡市早良区（西新エリア）',
    popularPlan: { name: '月4回プラン', description: '少人数制のグループレッスン。最短30分から受講可能。', price: '月4回 12,000円〜（税込）' },
    options: ['30分レッスン', '60分レッスン', '月4回プラン', '月8回プラン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性90% / 男性10%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '初心者向け'] },
    basicInfo: { hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', 'ウォーターサーバー'] },
  },
  {
    name: 'Rintosull 西新店',
    image: '/images/studios/rintosull.webp',
    price: '1回 2,200円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシンピラティス', '体験0円', '1回2,200円〜'],
    description: '女性専用のマシンピラティススタジオ。体験レッスン0円で気軽にスタートでき、1回2,200円〜というリーズナブルな料金設定が魅力。西新駅近くの好アクセスで、女性が安心して通える環境。マシンピラティスを手頃な価格で始めたい方におすすめ。',
    access: '福岡市地下鉄空港線「西新駅」徒歩圏内',
    address: '福岡県福岡市早良区（西新エリア）',
    popularPlan: { name: '都度払いプラン', description: '女性専用マシンピラティス。1回2,200円〜の都度払い。', price: '1回 2,200円〜（税込）' },
    options: ['都度払い（1回 2,200円〜）', '月額プラン（お問い合わせ）', '体験レッスン 0円'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'コスパ重視'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜19:00', closed: '不定休', facilities: ['リフォーマー', 'ロッカー', 'パウダールーム', '女性専用'] },
  },
  {
    name: 'zen place pilates',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '全国展開', '男性OK', '福岡エリアで利用可能'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。福岡エリアでも利用可能。マットグループ、マシングループ、プライベートレッスンの3種類から選べ、初心者から上級者まで対応。全店舗他店利用可能なので、出張先や旅行先でも通えるのが強み。',
    access: '福岡エリアで利用可能（西新駅周辺から通いやすい店舗あり）',
    address: '福岡県福岡市（福岡エリア店舗）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！西新エリアのピラティススタジオは初心者歓迎のスタジオがほとんど。CLUB PILATESはレベル別クラス、ピラティススタジオ Liveは少人数制、Rintosullは体験0円で始めやすいです。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマーなど）を使ったトレーニング。マシンは負荷調整がしやすく初心者におすすめです。西新ではCLUB PILATESやRintosullでマシンピラティスが受けられます。' },
  { question: '西新エリアの料金相場は？', answer: 'グループレッスン月4回で12,000円〜15,000円程度。Rintosullは1回2,200円〜の都度払いも可能。体験レッスンは無料〜500円が多いです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。ピラティスは継続が大切です。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹（コア）強化、ヨガは柔軟性とリラックスが中心。目的に合わせて選びましょう。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。デスクワークの方にもおすすめ。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。継続が大切です。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。CLUB PILATESではどちらも選択可能です。' },
]

export default function NishijinPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '西新', url: 'https://pilates-biyori.com/area/nishijin/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年09月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年6月最新】ピラティス西新おすすめ5選！<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較！
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
              <span className="text-warm-600">西新</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="西新" />


        <TableOfContents areaName="西新" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「西新でピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「福岡市早良区で通いやすいスタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、福岡市地下鉄空港線「西新駅」周辺で通えるおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>西新・早良区でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが無料・格安のスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>西南学院大学の近くで通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="西新" />
        <AreaMarketComparison studios={studios} areaName="西新" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西新のおすすめピラティススタジオ4選
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
              西新のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">9,625円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,625円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              西新は観光地としても人気のエリアですが、地元の方が日常的に通えるスタジオも増えています。町家を改装したスタジオなど西新ならではの趣ある空間でピラティスを楽しめるのが魅力。料金は大阪と同程度か、やや抑えめの傾向です。近隣の烏丸御池エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西新でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">福岡市地下鉄空港線「西新駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  西新エリアのスタジオは西新駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。西新駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光客と地元利用者で混雑時間が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  西新は観光地としても有名なため、観光客向けの体験プランと地元向けの月額プランが分かれているスタジオもあります。紅葉や桜のシーズンは周辺の混雑で移動に時間がかかることがあるため、余裕を持ったスケジュールで通いましょう。地元在住なら平日昼間が穴場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  西新エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  西新エリアだけでなく、近隣の<Link href="/area/karasuma-oike/" className="text-warm-700 underline hover:text-warm-900">烏丸御池</Link>、<Link href="/area/kitaoji/" className="text-warm-700 underline hover:text-warm-900">北大路</Link>、<Link href="/area/kyoto-station/" className="text-warm-700 underline hover:text-warm-900">京都駅</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>西新エリアの豆知識：</strong>西新は四季折々の風情が楽しめるエリアです。観光シーズンは周辺の混雑で移動に時間がかかることがあるため、時間に余裕を持って出発しましょう。町家スタジオなど西新ならではの空間でピラティスを楽しめるのも魅力のひとつです。
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
                  リーズナブルな料金で通えるスタジオ。体験レッスン無料・0円のスタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 西新店（1回2,200円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティススタジオ Live（月4回 12,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシンピラティス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  リフォーマーなど専用マシンを使った本格的なトレーニングができるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES 福岡西新店</li>
                  <li className="text-warm-700">• Rintosull 西新店</li>
                  <li className="text-warm-700">• zen place pilates</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・初心者向け</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用スタジオや初心者歓迎のスタジオ。周りを気にせず集中できる環境。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 西新店（女性専用）</li>
                  <li className="text-warm-700">• ピラティススタジオ Live（少人数制）</li>
                  <li className="text-warm-700">• CLUB PILATES（レベル別クラス）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Area Info */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西新エリアの特徴
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <p className="text-warm-600 leading-relaxed mb-6">
                西新は福岡市地下鉄空港線「西新駅」を中心とした、福岡市早良区の文教エリアです。西南学院大学に近く、学生や若い世代が多く住むエリアとして知られています。
              </p>
              <p className="text-warm-600 leading-relaxed mb-6">
                商店街やカフェも充実しており、レッスン前後の買い物や食事も楽しめます。天神エリアへも地下鉄空港線で数分とアクセス良好。福岡タワーやシーサイドももち方面にも近く、海を感じられる開放的な環境も魅力です。
              </p>
              <p className="text-warm-600 leading-relaxed">
                落ち着いた文教地区の雰囲気の中で、自分のペースでピラティスに取り組める環境が整っています。
              </p>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-white" id="frequency">
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
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも変化に気づいてもらえるレベルになります。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-warm-50" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">都度払い</p>
                <p className="text-sm text-warm-600 mb-4">
                  都度払いで気軽に通えるスタジオ。まずは試してみたい方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（1回 2,200円〜）</li>
                  <li>• zen place（月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備のスタジオ。グループレッスン中心で通いやすい価格帯。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティススタジオ Live</li>
                  <li>• CLUB PILATES</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  しっかり通いたい方向け。短期集中で結果を出したい方にも。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（通い放題）</li>
                  <li>• zen place（月6回〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  西新エリアの料金相場は月4回で12,000円〜15,000円程度。Rintosullのように1回2,200円〜の都度払いもあります。無理なく継続できる予算を決めましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。CLUB PILATESとRintosullは無料体験を実施中。実際にスタジオの雰囲気やインストラクターとの相性を確認してみてください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも通いにくいと続きません。西新は福岡市地下鉄空港線でアクセスしやすく、天神エリアへも数分。西南学院大学に近い文教エリアなので、学校帰りや仕事帰りにも通いやすい環境です。
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
              今回は西新エリアのおすすめピラティススタジオ4選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              世界最大級チェーンのCLUB PILATES、最短30分の少人数制ピラティススタジオ Live、女性専用で1回2,200円〜のRintosull、全国展開のzen place pilatesと、それぞれ特徴が異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              西新は福岡市早良区の文教エリアで、西南学院大学にも近く落ち着いた環境。地下鉄空港線でアクセスも良好です。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
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
              初回限定の体験レッスン無料〜500円。<br />
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
              <AreaModifierSections studios={studios} areaName="西新" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nishijin" areaName="西新" />

                  {/* g1-link-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands/rintosull-nishijin/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">Rintosull 西新店の料金・体験を見る</Link>
                <Link href="/brands/club-pilates-fukuoka-nishijin/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">CLUB PILATES 福岡西新店の料金・体験を見る</Link>
              </div>
            </div>
      <RelatedAreas currentSlug="nishijin" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
