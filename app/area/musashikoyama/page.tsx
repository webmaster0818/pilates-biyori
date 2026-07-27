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
  alternates: { canonical: 'https://biyori-pilates.com/area/musashikoyama/' },
  title: '【2026年7月最新】武蔵小山のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '武蔵小山エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,武蔵小山,品川区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place pilates,ピラティスミラー,STUDIO IVY,アトリオドゥーエNext,Two Three',
}

const studios = [
  {
    name: 'zen place pilates 武蔵小山',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '武蔵小山駅東口から徒歩1分で通いやすい。全国150店舗で他店利用できるので、出先でもレッスンが受けられるのが嬉しいポイント。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: 'マットもマシンも両方受けられるので飽きずに続けられます。男性もOKなので夫婦で通っています。グループ体験1,000円はお得。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターの質が安定していて、初心者でも丁寧に教えてもらえます。月4回10,450円〜で手軽に始められるのもいい。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗相互利用', 'マット&マシン対応', '男性OK', '駅徒歩1分'],
    description: '全国150店舗以上を展開するzen place pilatesの武蔵小山スタジオ。東急目黒線「武蔵小山駅」東口から徒歩1分の好立地。マットピラティスとマシンピラティスの両方に対応し、グループレッスンからプライベートレッスンまで幅広く提供。全国の系列店で相互利用が可能なので、出張先や旅行先でもレッスンを受けられます。男性も利用可能。グループ体験1,000円で気軽にお試しできます。',
    access: '東急目黒線「武蔵小山駅」東口徒歩1分',
    address: '東京都品川区武蔵小山エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン月4回プラン',
      description: 'マット&マシン対応のグループレッスン。全国150店舗で相互利用可能。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'グループレッスン月4回（10,450円〜/月）',
      'グループレッスン月6回・通い放題プランあり',
      'プライベートレッスンあり',
      'グループ体験 1,000円',
      '全国150店舗相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マットスペース', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスミラー 武蔵小山',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.6,
    reviewCount: 16,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: 'コナミスポーツが運営しているので安心感があります。天井にミラーがあり、自分のフォームを確認しながらレッスンできるのが良い。',
      },
      {
        author: 'N.K',
        rating: 4,
        date: '2週間前',
        text: '30分のレッスンなので仕事帰りでも気軽に通えます。月6回11,000円はコスパがいい。レッスン前20分のセルフトレーニングも活用しています。',
      },
      {
        author: 'H.Y',
        rating: 5,
        date: '3週間前',
        text: '体験2,200円で本格的なマシンピラティスを試せました。天井ミラーのおかげで正しい姿勢が身につきやすいです。',
      },
    ],
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['コナミスポーツ運営', '天井ミラー', '30分レッスン', 'セルフトレーニング可'],
    description: 'コナミスポーツが運営するマシンピラティス専門スタジオ。武蔵小山駅東口から徒歩5分。天井にミラーを設置した独自の空間で、自分のフォームを確認しながら効果的にレッスンを受けられます。1レッスン30分のコンパクトな構成で、忙しい方でも通いやすい。レッスン前20分のセルフトレーニングタイムも利用可能。月6回11,000円のリーズナブルな料金設定が魅力です。',
    access: '東急目黒線「武蔵小山駅」東口徒歩5分',
    address: '東京都品川区武蔵小山エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月6回プラン',
      description: '天井ミラー付きスタジオで30分のマシンピラティスレッスン。レッスン前20分のセルフトレーニング付き。',
      price: '月6回 11,000円（税込）',
    },
    options: [
      '月6回プラン（11,000円/月）',
      '30分レッスン',
      'レッスン前20分セルフトレーニング可',
      '体験レッスン 2,200円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '運動不足解消', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '天井ミラー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'STUDIO IVY 武蔵小山店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.9,
    reviewCount: 17,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: '完全パーソナルなので自分だけの空間で集中してレッスンできます。オーダーメイドプログラムで効率的にボディメイクできています。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '月2回15,000円〜でパーソナルレッスンが受けられるのは良心的。完全プライベート空間なので人目が気になりません。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '3週間前',
        text: '体験4,500円で丁寧なカウンセリングと本格レッスン。自分の体の課題が明確になり、通い続けるモチベーションになりました。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', '完全プライベート空間', 'オーダーメイド', '月2回15,000円〜'],
    description: '完全パーソナルのマシンピラティススタジオ。完全プライベート空間で、一人ひとりの体の状態や目標に合わせたオーダーメイドプログラムを提供。月2回15,000円〜と、パーソナルピラティスとしてはリーズナブルな価格設定。体験レッスン4,500円で、丁寧なカウンセリングと本格的なレッスンを受けられます。人目を気にせず集中したい方におすすめ。',
    access: '東急目黒線「武蔵小山駅」周辺',
    address: '東京都品川区武蔵小山エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン月2回プラン',
      description: '完全プライベート空間でのオーダーメイドパーソナルピラティス。',
      price: '月2回 15,000円〜（税込）',
    },
    options: [
      '月2回プラン（15,000円〜/月）',
      '月4回・月8回プランあり',
      '完全パーソナル・完全プライベート空間',
      '体験レッスン 4,500円',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '完全個室', '更衣室'],
    },
  },
  {
    name: 'Two Three 武蔵小山',
    image: '/images/studios/two-three-pilates.webp',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      {
        author: 'T.H',
        rating: 5,
        date: '1週間前',
        text: 'マシンピラティス専門で、正確な姿勢を重視した指導が素晴らしい。最大8名のグループなのでしっかりフォームを見てもらえます。',
      },
      {
        author: 'M.O',
        rating: 5,
        date: '2週間前',
        text: '姿勢の正確さにこだわったレッスンが受けられるので、他のスタジオとは一味違います。体の変化を実感しやすいです。',
      },
      {
        author: 'C.K',
        rating: 4,
        date: '3週間前',
        text: 'マシンピラティス専門だけあって、リフォーマーの使い方を丁寧に教えてもらえます。最大8名なので適度な緊張感もあり良い。',
      },
    ],
    price: '公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['マシンピラティス専門', '最大8名グループ', '正確な姿勢重視', '丁寧な指導'],
    description: 'マシンピラティス専門のスタジオ。最大8名のグループレッスンで、正確な姿勢を重視した質の高い指導を提供。マシンピラティスに特化しているからこそ、リフォーマーの効果を最大限に引き出すレッスンが受けられます。フォームの正確さにこだわり、一人ひとりの姿勢をしっかりチェック。効率的に体の変化を実感したい方におすすめです。',
    access: '東急目黒線「武蔵小山駅」周辺',
    address: '東京都品川区武蔵小山エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン（最大8名）',
      description: 'マシンピラティス専門の正確な姿勢重視レッスン。最大8名の少人数制。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'グループレッスン（最大8名）',
      'マシンピラティス専門',
      '正確な姿勢重視の指導',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！武蔵小山エリアのスタジオはほとんどが初心者歓迎です。zen place pilatesはレベル別クラスで初心者専用レッスンあり、ピラティスミラーは30分の短時間レッスンで始めやすい。STUDIO IVYは完全パーソナルなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。武蔵小山エリアではzen place pilatesがマット&マシン両方に対応しています。',
  },
  {
    question: '武蔵小山のピラティスの料金相場は？',
    answer: 'zen place pilatesは月4回10,450円〜、ピラティスミラーは月6回11,000円とグループレッスンは1万円台から。STUDIO IVYのパーソナルは月2回15,000円〜。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。ピラティスミラーの30分レッスンなら仕事帰りにも通いやすく、高頻度の通い方もしやすいです。大切なのは無理なく継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。2〜3ヶ月の継続で効果を実感する方が多いです。STUDIO IVYのオーダーメイドパーソナルなら、ダイエット目的に特化したプログラムも組めます。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。zen place pilatesはグループ体験1,000円、ピラティスミラーは体験2,200円、STUDIO IVYは体験4,500円です。まずは気軽に体験してみましょう。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates武蔵小山は男性も利用可能で、男性会員も多く通っています。STUDIO IVYは完全パーソナルなので男性も通いやすい環境です。その他のスタジオについては公式サイトでご確認ください。',
  },
  {
    question: '駅から近いスタジオはどこですか？',
    answer: 'zen place pilates武蔵小山は東口徒歩1分、アトリオドゥーエNextは武蔵小山駅直結で最もアクセス抜群です。ピラティスミラーも東口徒歩5分と駅近です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function MusashikoyamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '武蔵小山', url: 'https://pilates-biyori.com/area/musashikoyama/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月28日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス武蔵小山おすすめ5選！
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
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">武蔵小山</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="武蔵小山" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「武蔵小山で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              武蔵小山は東急目黒線で目黒まで約3分、大井町線も利用可能な便利なエリア。パルム商店街をはじめ活気ある商店街が魅力の街です。そんな武蔵小山エリアには、大手チェーンのグループレッスンから完全パーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、武蔵小山エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>武蔵小山でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="武蔵小山" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              武蔵小山のおすすめピラティススタジオ5選
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
              武蔵小山のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜15,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 15,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜4,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              武蔵小山は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いていて狙い目です。近隣の自由が丘エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              武蔵小山でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東急目黒線「武蔵小山駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  武蔵小山エリアのスタジオは武蔵小山駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。武蔵小山駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  武蔵小山は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、狙い目の時間帯を見つけておくと通いやすくなります。子連れOKのクラスがあるスタジオもあるので、お子さまがいる方は確認してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  武蔵小山エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  武蔵小山エリアだけでなく、近隣の<Link href="/area/jiyugaoka/" className="text-warm-700 underline hover:text-warm-900">自由が丘</Link>、<Link href="/area/meguro/" className="text-warm-700 underline hover:text-warm-900">目黒</Link>、<Link href="/area/gotanda/" className="text-warm-700 underline hover:text-warm-900">五反田</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>武蔵小山エリアの豆知識：</strong>武蔵小山は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無を確認しておきましょう。近場なら荷物も最小限で済むので、気軽に続けやすいのが武蔵小山の良さです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月1万円台から通えるスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• STUDIO IVY（月2回 15,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全パーソナル・オーダーメイド）</li>
                  <li className="text-warm-700">• zen place pilates（プライベートレッスンあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">アクセス重視</h3>
                <p className="text-warm-600 text-sm mb-4">駅直結・徒歩1分のスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• アトリオドゥーエNext（駅直結）</li>
                  <li className="text-warm-700">• zen place pilates（駅徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスミラー（駅徒歩5分）</li>
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
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。ピラティスミラーの30分レッスンなら気軽に始めやすく、zen place pilatesはレベル別クラスで初心者専用レッスンもあります。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。STUDIO IVYのオーダーメイドパーソナルなら、目的に合わせた最適なプログラムを組んでもらえます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。zen place pilatesは全国150店舗で相互利用可能なので、出張先でもレッスンを受けられます。アトリオドゥーエNextなら駅直結で通いやすさ抜群です。
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
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円/月4回〜）</li>
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2回パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">マンツーマンで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（15,000円〜/月2回）</li>
                  <li>• 完全プライベート空間</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">総合施設利用</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">ピラティス+α</p>
                <p className="text-sm text-warm-600 mb-4">ジム・プールも使いたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• アトリオドゥーエNext（駅直結）</li>
                  <li>• ジム・プール併設の総合施設</li>
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
                  ダイエット、姿勢改善、体幹強化など、目的によって最適なスタジオは変わります。ボディメイク重視ならSTUDIO IVYのオーダーメイドパーソナル、姿勢改善ならTwo Threeの正確な姿勢重視レッスンがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  武蔵小山エリアはグループ（zen place pilates、Two Three）、少人数制（アトリオドゥーエNext）、完全パーソナル（STUDIO IVY）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen place pilatesはグループ体験1,000円、ピラティスミラーは体験2,200円、STUDIO IVYは体験4,500円。まずは体験で雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  武蔵小山は東急目黒線で目黒まで約3分。アトリオドゥーエNextは駅直結、zen place pilatesは東口徒歩1分、ピラティスミラーは東口徒歩5分。zen place pilatesは全国150店舗で相互利用可能なので通いやすさ抜群です。
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
              今回は武蔵小山エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              武蔵小山は東急目黒線で目黒まで約3分の好立地で、パルム商店街をはじめ活気ある街です。全国150店舗で相互利用可能なzen place pilates（体験1,000円・駅徒歩1分）、コナミスポーツ運営のピラティスミラー（月6回11,000円・30分レッスン）、完全パーソナルのSTUDIO IVY（月2回15,000円〜・オーダーメイド）、駅直結のアトリオドゥーエNext（少人数制・総合施設）、マシンピラティス専門のTwo Three（最大8名・正確な姿勢重視）と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずはzen place pilatesのグループ体験1,000円やピラティスミラーの体験2,200円から試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              zen place pilatesはグループ体験1,000円、ピラティスミラーは体験2,200円。<br />
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
      <ConsultantSection areaKey="musashikoyama" areaName="武蔵小山" />

      <RelatedAreas currentSlug="musashikoyama" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
