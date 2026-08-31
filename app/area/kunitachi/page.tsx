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
  alternates: { canonical: 'https://biyori-pilates.com/area/kunitachi/' },
  title: '【2026年9月最新】ピラティス国立おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '国立エリアのおすすめピラティススタジオ5選を徹底比較。zen place pilates国立・Rintosull国立店・ピラティスミラー国立・YU\'s PILATES・COCOLANCE国立店など実在スタジオの料金・体験レッスン・アクセスを完全ガイド。',
  keywords: 'ピラティス,国立,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place,Rintosull,ピラティスミラー',
}

const studios = [
  {
    name: 'zen place pilates 国立',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['全国展開大手', 'マット&マシン完備', '男女共用', '全店舗利用可能'],
    description: '全国130店舗以上を展開する大手ピラティススタジオ。JR中央線「国立駅」南口徒歩3分。世界トップクラスの流派から受け継いだ正統派ピラティスを学べます。マットグループ・マシングループ・プライベートの3形態に対応。ウェアレンタルあり。',
    access: 'JR中央線「国立駅」南口徒歩3分',
    address: '東京都国立市東（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能。全店舗利用可能プランもあり。',
      price: '月4回 13,200円〜（税込）',
    },
    options: [
      'マットグループレッスン',
      'マシングループレッスン',
      'プライベートレッスン（1回 9,900円〜）',
      '全店舗利用可能プランあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00（店舗により異なる）',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'バレル', 'シャワー', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 国立店',
    image: '/images/studios/rintosull.webp',
    price: 'プレミアムプラン 月額10,978円（税込）',
    trial: '体験無料キャンペーン実施中',
    features: ['女性専用', 'マシンピラティス', '体験無料', 'LAVA系列'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。リフォーマーを使って気になる部位に集中アプローチ。体験無料キャンペーン実施中。プレミアムフリーフルタイムプランならLAVA等系列店も利用可能。初心者87%以上。',
    access: 'JR中央線「国立駅」から徒歩圏内',
    address: '東京都国立市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プレミアムプラン',
      description: '女性専用マシンピラティス。体験無料キャンペーン中。LAVA系列店も利用可能。',
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
    name: 'ピラティスミラー 国立',
    image: '/images/studios/pilates-mirror.webp',
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '少人数制', '1レッスン30分', 'ミラー完備'],
    description: 'スポーツクラブ大手コナミが運営するピラティススタジオ。天井に設置された鏡でフォームを確認しながらエクササイズ。最大6名の少人数制で初心者にも安心。1レッスン30分の短時間集中型。月6回11,000円のリーズナブルな価格。',
    access: 'JR中央線「国立駅」から徒歩圏内',
    address: '東京都国立市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月6回プラン',
      description: 'コナミ運営。月6回30分レッスンで無理なく続けられるプラン。',
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
      genderRatio: '女性85% / 男性15%',
      purpose: ['健康維持', '姿勢改善', '体幹強化', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '施設の営業時間に準ずる（公式サイトでご確認ください）',
      closed: '施設休館日に準ずる',
      facilities: ['ミラー', 'リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: "YU's PILATES",
    image: '/images/studios/zen-place-pilates.webp',
    price: 'レッスン料は公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['女性限定', '少人数制', 'ネバダ州立大学公認', '国立駅徒歩2分'],
    description: '国立駅南口から徒歩2分の女性限定ピラティススタジオ。ネバダ州立大学公認ピラティスインストラクターが在籍し、本格的なピラティスを少人数制で受けられます。アロマ漂うリラックス空間で心身ともにリフレッシュ。一人ひとりの体に合わせた丁寧な指導が特徴。',
    access: 'JR中央線「国立駅」南口徒歩2分',
    address: '東京都国立市東（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '少人数グループレッスン',
      description: '資格を持つインストラクターによる本格少人数レッスン。',
      price: '公式サイトでご確認ください',
    },
    options: [
      '少人数グループレッスン',
      'プライベートレッスン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性限定）',
      purpose: ['姿勢改善', '健康維持', 'リフレッシュ', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'プロップス', '更衣室'],
    },
  },
  {
    name: 'COCOLANCE 国立店',
    image: '/images/studios/cocolance-mitaka.webp',
    price: 'パーソナルレッスン（料金は公式サイトでご確認ください）',
    trial: '体験レッスンあり',
    features: ['完全個室', '女性専用', 'パーソナル', 'マシンピラティス'],
    description: '完全個室の女性専用パーソナルマシンピラティススタジオ。周りの視線を気にせず自分のペースでエクササイズに集中できます。一人ひとりの体の状態に合わせたオーダーメイドプログラムで、業界屈指のコストパフォーマンスが魅力。',
    access: 'JR中央線「国立駅」から徒歩圏内',
    address: '東京都国立市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室の女性専用マシンピラティス。オーダーメイドプログラム。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'パーソナルレッスン',
      '体験レッスンあり',
      '完全個室対応',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！国立エリアのスタジオは初心者歓迎がほとんどです。Rintosull国立店は初心者87%以上で安心。ピラティスミラー国立は最大6名の少人数制、COCOLANCE国立店は完全個室パーソナルで自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使います。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。国立ではzen place・Rintosull・COCOLANCE・ピラティスミラーがマシンピラティスに対応しています。',
  },
  {
    question: '国立のピラティスの料金相場は？',
    answer: 'Rintosull国立店は月額10,978円、ピラティスミラー国立は月6回11,000円、zen place pilates国立は月4回13,200円〜です。パーソナルはCOCOLANCE国立店が完全個室でコスパ良好。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。大切なのは無理なく継続すること。最低2〜3ヶ月は続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わります。COCOLANCE国立店のパーソナルレッスンなら効率的にボディメイクが可能。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。Rintosull国立店は体験無料キャンペーン中、zen placeは体験1,000円、ピラティスミラーは体験2,200円。zen placeはウェアレンタルもあり手ぶらで体験可能です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates国立は男性もOKです。Rintosull・YU\'s PILATES・COCOLANCEは女性専用です。ピラティスミラーも男性利用可能です。',
  },
  {
    question: '国立駅からのアクセスは？',
    answer: '国立駅はJR中央線が利用でき、新宿まで約30分。YU\'s PILATESは駅南口徒歩2分、zen placeは南口徒歩3分と、各スタジオとも駅近で通いやすい立地です。',
  },
  {
    question: 'パーソナルレッスンを受けたいのですが？',
    answer: 'COCOLANCE国立店は完全個室のパーソナルマシンピラティス専門。zen place pilates国立はプライベートレッスン（1回9,900円〜）を提供。ピラティスミラー国立もプライベートレッスン30分4,400円で対応しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function KunitachiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '国立', url: 'https://pilates-biyori.com/area/kunitachi/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年09月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス国立おすすめ5選！
              <br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">国立</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="国立" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「国立で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              国立はJR中央線沿線の文教都市として知られ、一橋大学をはじめとする教育機関が集まる知性あふれる街です。大学通りの桜並木が美しく、緑豊かで落ち着いた街並みが魅力。新宿まで中央線で約30分のアクセスの良さもポイント。そんな国立エリアには、大手チェーンから個人スタジオまで、質の高いピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、国立エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>国立でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>文教都市ならではの落ち着いたスタジオに通いたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>パーソナルレッスンを受けたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>JR中央線沿線で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="国立" />

        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">国立のおすすめピラティススタジオ5選</h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">国立のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4〜6回）</td><td className="px-4 py-3">10,978円〜13,200円</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 4,400円〜9,900円</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜2,200円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              国立エリアは文教都市らしく質の高いスタジオが揃っています。個人スタジオならではのきめ細かい指導も魅力。隣駅の<Link href="/area/kokubunji/" className="text-warm-700 underline hover:text-warm-900">国分寺</Link>にはURBAN CLASSIC PILATESなど月4回8,580円からの格安スタジオもあるので、合わせて検討するのもおすすめです。
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">国立でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">南口・北口で雰囲気が異なる</h3>
                <p className="text-warm-600 leading-relaxed">国立駅は南口が大学通りに面し、落ち着いた文教エリア。北口は商業施設が多いエリアです。スタジオの所在地が南口か北口かで雰囲気が異なるので、事前にチェックしておきましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">個人スタジオは予約が取りにくい場合も</h3>
                <p className="text-warm-600 leading-relaxed">YU&apos;s PILATESのような少人数制の個人スタジオは人気が高く、予約が埋まりやすい傾向があります。特に土曜午前は早めの予約がおすすめ。平日夜も仕事帰りの方で混み合うことがあります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">グループとパーソナルの違いを理解する</h3>
                <p className="text-warm-600 leading-relaxed">国立にはグループレッスン（zen place・Rintosull）と完全パーソナル（COCOLANCE・YU&apos;s PILATES）の両方があります。費用を抑えたいならグループ、しっかり見てほしいならパーソナルを選びましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも選択肢に</h3>
                <p className="text-warm-600 leading-relaxed">隣駅の<Link href="/area/kokubunji/" className="text-warm-700 underline hover:text-warm-900">国分寺</Link>や<Link href="/area/tachikawa/" className="text-warm-700 underline hover:text-warm-900">立川</Link>にもスタジオが多数。zen placeなら全店舗利用可能プランで複数エリアのスタジオを使い分けられます。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用必須のスタジオが多数。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>だとフォーム確認がしやすい。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>zen placeはウェアレンタルあり</strong>で手ぶらOK。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>国立エリアの豆知識：</strong>国立の大学通りはカフェや雑貨店が並ぶおしゃれな通り。ピラティス帰りに散策するのも楽しいエリアです。駅前にはnonowa国立などの商業施設もあり、買い物も便利。自転車で通う方も多いので駐輪場もチェックしておきましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円台からスタート。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月額 10,978円）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• zen place（月4回 13,200円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• COCOLANCE（完全個室パーソナル）</li>
                  <li className="text-warm-700">• YU&apos;s PILATES（少人数制・資格保有）</li>
                  <li className="text-warm-700">• zen place（プライベート 9,900円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの空間で安心。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（女性専用・LAVA系列）</li>
                  <li className="text-warm-700">• YU&apos;s PILATES（女性限定）</li>
                  <li className="text-warm-700">• COCOLANCE（女性専用・完全個室）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週1〜2回からスタート。ピラティスミラー国立の月6回プラン（11,000円）で無理なく始められます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2〜3回がおすすめ。COCOLANCE国立店のパーソナルレッスンで効率的にボディメイク。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">週1回ペースで継続。RintosullはLAVA系列店も利用可能で、ピラティスとヨガの組み合わせが可能。</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="price-guide">
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,200円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">本格派志向の方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（13,200円〜/月4回）</li>
                  <li>• マット&マシン両方受講可能</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナルプラン</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1回4,400円〜</p>
                <p className="text-sm text-warm-600 mb-4">マンツーマンで効率的に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（30分 4,400円）</li>
                  <li>• COCOLANCE（完全個室パーソナル）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div>
                <p className="text-warm-600 leading-relaxed">ボディメイクならCOCOLANCE、健康維持ならピラティスミラー、本格派ならzen placeがおすすめ。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3></div>
                <p className="text-warm-600 leading-relaxed">グループ（zen place・Rintosull）、少人数（ピラティスミラー・YU&apos;s PILATES）、完全パーソナル（COCOLANCE）。好みに合わせて。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div>
                <p className="text-warm-600 leading-relaxed">Rintosullは体験無料、zen placeは1,000円。まずは気軽に体験してスタジオの雰囲気を確認しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div>
                <p className="text-warm-600 leading-relaxed">各スタジオとも国立駅から徒歩圏内。YU&apos;s PILATESは徒歩2分、zen placeは徒歩3分で特にアクセス良好です。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は国立エリアのおすすめピラティススタジオ5選をご紹介しました。</p>
            <p className="text-warm-600 leading-relaxed mb-6">
              国立は文教都市らしい落ち着いた雰囲気の中で、質の高いピラティスが楽しめるエリアです。zen place pilates国立（男女共用・全店舗利用可）、Rintosull国立店（女性専用・体験無料）、ピラティスミラー国立（コナミ運営・少人数制）、YU&apos;s PILATES（女性限定・資格保有）、COCOLANCE国立店（完全個室パーソナル）と、個性豊かなスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">まずは体験無料のRintosull国立店や体験1,000円のzen placeから始めてみましょう。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">Rintosull国立店は体験無料キャンペーン実施中。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kunitachi" areaName="国立" />

      <RelatedAreas currentSlug="kunitachi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
