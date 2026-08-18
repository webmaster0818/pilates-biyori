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
  alternates: { canonical: 'https://biyori-pilates.com/area/toritsudaigaku/' },
  title: '【2026年8月最新】都立大学のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '都立大学エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,都立大学,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 都立大学',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン', '都立大学駅近', '少人数制', '男性OK'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。東急東横線都立大学駅から徒歩すぐの好立地。マットピラティスからマシンピラティス（リフォーマー）まで幅広いレッスンに対応し、有資格インストラクターが丁寧に指導。月4回9,625円〜とリーズナブルに始められます。',
    access: '東急東横線「都立大学駅」徒歩すぐ',
    address: '東京都目黒区（都立大学駅徒歩圏内）',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットを使ったグループレッスン。少人数制で丁寧な指導。初心者にもおすすめ。',
      price: '月4回 9,625円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベート（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'PILATES STUDIO noa 都立大',
    image: '/images/studios/pilates-studio-noa.webp',
    price: '月4回 11,000円',
    trial: '体験レッスンあり',
    features: ['マシンピラティス専門', '都立大学駅徒歩圏内', 'リフォーマー完備', '女性人気'],
    description: 'マシンピラティス専門のスタジオ。都立大学駅徒歩圏内にあり、リフォーマーをはじめとした本格マシンを完備。月4回11,000円でマシンピラティスが受けられるコストパフォーマンスの高さが魅力。専門スタジオならではの質の高いレッスンを提供しています。',
    access: '東急東横線「都立大学駅」徒歩圏内',
    address: '東京都目黒区（都立大学駅徒歩圏内）',
    popularPlan: {
      name: 'マシングループ（月4回）',
      description: 'リフォーマーを使ったマシンピラティスのグループレッスン。少人数制。',
      price: '月4回 11,000円（税込）',
    },
    options: [
      '月4回プラン（11,000円）',
      '月8回プラン',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', '姿勢改善', 'マシンピラティス体験', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'STUDIO IVY',
    image: '/images/studios/studio-ivy.webp',
    price: '1回 6,250円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', '完全予約制', 'オーダーメイド指導', '短期集中OK'],
    description: 'パーソナルピラティス専門のスタジオ。一人ひとりの体の状態や目標に合わせたオーダーメイドのレッスンを提供。1回6,250円〜と都内のパーソナルピラティスとしてはリーズナブル。完全予約制のプライベート空間で、集中してトレーニングに取り組めます。',
    access: '都立大学エリア',
    address: '東京都目黒区（都立大学エリア）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全マンツーマンのオーダーメイドレッスン。体の状態に合わせた最適なプログラム。',
      price: '1回 6,250円〜',
    },
    options: [
      '単発レッスン（1回 6,250円〜）',
      '回数券（お得な割引あり）',
      '短期集中コース',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '腰痛・肩こり改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '完全予約制（10:00〜21:00）',
      closed: '不定休',
      facilities: ['マシン完備', '完全個室', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスミラー',
    image: '/images/studios/pilates-mirror.webp',
    price: '月6回 11,000円',
    trial: '体験レッスンあり',
    features: ['コナミ運営', '月6回プラン', 'マシン完備', '大手の安心感'],
    description: '大手フィットネスクラブ・コナミスポーツが運営するマシンピラティス専門スタジオ。月6回11,000円という通いやすい料金設定が魅力。大手ならではの充実した設備と丁寧なサービスで、初心者から経験者まで幅広く対応しています。',
    access: '都立大学エリア',
    address: '東京都目黒区（都立大学エリア）',
    popularPlan: {
      name: '月6回プラン',
      description: 'マシンピラティスのグループレッスンが月6回受けられる人気プラン。',
      price: '月6回 11,000円（税込）',
    },
    options: [
      '月6回プラン（11,000円）',
      'プライベートレッスン（30分 4,400円）',
      '追加レッスン（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['健康維持', '運動不足解消', '姿勢改善', 'ダイエット'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '施設に準ずる',
      facilities: ['マシン完備', 'ロッカー', 'シャワー', 'パウダールーム'],
    },
  },
  {
    name: 'Pilates Mee都立大学店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。都立大学駅から徒歩30秒。',
    access: '都立大学駅から徒歩30秒',
    address: '東京都目黒区平町1丁目26-17 301号室',
  },
]

const faqs = [
  {
    question: '都立大学エリアでピラティスの相場はどれくらい？',
    answer: 'グループレッスンは月4回9,625円〜11,000円、パーソナルは1回6,250円〜が相場です。ピラティスミラーは月6回11,000円とコスパが高いです。',
  },
  {
    question: '初心者でも大丈夫ですか？',
    answer: 'はい、どのスタジオも初心者歓迎です。特にzen placeは少人数制、STUDIO IVYはマンツーマン指導で初心者に丁寧に対応しています。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。ウェアレンタルがあるスタジオもあります。',
  },
  {
    question: 'マットとマシン、どちらがおすすめ？',
    answer: '初心者はマットで基礎を身につけるのがおすすめ。慣れてきたらマシンでより効果的にトレーニングできます。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '週1〜2回のペースで2ヶ月を過ぎた頃から効果を実感する方が多いです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: '短期間で効果を出したい方はパーソナル、楽しく続けたい方はグループがおすすめです。',
  },
]

export default function ToritsudaigakuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '都立大学', url: 'https://pilates-biyori.com/area/toritsudaigaku/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月19日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス都立大学おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">都立大学</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="都立大学" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「都立大学でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「自由が丘や中目黒にも近い閑静な住宅街でスタジオを探したい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、東急東横線「都立大学駅」周辺でおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>都立大学でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>パーソナルとグループを比較したい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較して自分に合うスタジオを見つけたい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="都立大学" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              都立大学のおすすめピラティススタジオ5選
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
              都立大学のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">6,250円〜11,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,250円〜11,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              都立大学は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いていて狙い目です。近隣の自由が丘エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              都立大学でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東急東横線「都立大学駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  都立大学エリアのスタジオは都立大学駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。都立大学駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  都立大学は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、狙い目の時間帯を見つけておくと通いやすくなります。子連れOKのクラスがあるスタジオもあるので、お子さまがいる方は確認してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  都立大学エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  都立大学エリアだけでなく、近隣の<Link href="/area/jiyugaoka/" className="text-warm-700 underline hover:text-warm-900">自由が丘</Link>、<Link href="/area/gakugei-daigaku/" className="text-warm-700 underline hover:text-warm-900">学芸大学</Link>、<Link href="/area/futakotamagawa/" className="text-warm-700 underline hover:text-warm-900">二子玉川</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>都立大学エリアの豆知識：</strong>都立大学は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無を確認しておきましょう。近場なら荷物も最小限で済むので、気軽に続けやすいのが都立大学の良さです。
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
                  リーズナブルに通いたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• noa（月4回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果的に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（1回 6,250円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                  <li className="text-warm-700">• zen place（プライベート 9,900円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシンピラティス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  本格マシンで効果的に鍛える。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• noa（マシン専門）</li>
                  <li className="text-warm-700">• ピラティスミラー（コナミ運営）</li>
                  <li className="text-warm-700">• zen place（リフォーマーグループ）</li>
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
              <h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタート。最低2〜3ヶ月で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マット</p>
                <p className="text-sm text-warm-600 mb-4">
                  マットピラティスでリーズナブルに。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（マット月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マシン</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備で効果的にトレーニング。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• noa（月4回 11,000円）</li>
                  <li>• ピラティスミラー（月6回 11,000円）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">効果◎</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマンで最大効果。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（30分 4,400円）</li>
                  <li>• STUDIO IVY（1回 6,250円〜）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的に応じてスタジオを選びましょう。パーソナルは短期集中、グループは楽しく継続に向いています。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  都立大学エリアはマット月4回9,625円〜、マシン月4回11,000円〜、パーソナル1回6,250円〜と幅広い価格帯が揃っています。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeは体験1,000円で受けられます。まずは気軽に体験して、雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  都立大学は東急東横線沿線で、自由が丘や中目黒にも近い閑静な住宅街。駅からの距離やレッスン時間を確認して、無理なく通えるスタジオを選びましょう。
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
              今回は都立大学のおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              都立大学は東急東横線沿線の閑静な住宅街で、自由が丘や中目黒にも近いエリア。zen placeのマット月4回9,625円〜から、noaのマシン専門、STUDIO IVYのパーソナル、コナミ運営のピラティスミラーまで、目的や予算に合わせて選べるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひ体験レッスンに足を運んで、自分に合うスタジオを見つけてくださいね。
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
              初回限定の体験レッスン1,000円〜。<br />
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
      <ConsultantSection areaKey="toritsudaigaku" areaName="都立大学" />

      <RelatedAreas currentSlug="toritsudaigaku" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
