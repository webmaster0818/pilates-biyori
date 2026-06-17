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



export const metadata = {
  title: '中目黒のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年6月】',
  description: '中目黒エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,中目黒,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 中目黒スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 14,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '中目黒駅から徒歩7分。目黒川沿いの落ち着いた雰囲気のなかでリラックスしてレッスンを受けられます。マットもマシンも両方あるのが嬉しい。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制で丁寧に見てもらえます。全国の店舗が利用可能なので、出張先でも通えるのが便利。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '池尻大橋駅からも徒歩7分でアクセスしやすい。体験500円からなので気軽に始められました。',
      },
    ],
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '中目黒駅徒歩7分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。中目黒駅から徒歩7分、池尻大橋駅からも徒歩7分。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニュー。おしゃれな中目黒の街でピラティスを楽しめます。',
    access: '東急東横線・日比谷線「中目黒駅」徒歩7分 / 東急田園都市線「池尻大橋駅」徒歩7分',
    address: '東京都目黒区（中目黒駅徒歩7分）',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシン（リフォーマー）を使ったグループレッスン。少人数制で丁寧な指導。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'プライベート月2回（19,800円）',
      'プライベート月4回（36,960円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
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
    name: 'the SILK 中目黒店',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 162,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '中目黒駅から徒歩すぐで通いやすい！女性専用なので安心。スタジオがとてもおしゃれで気分が上がります。',
      },
      {
        author: 'A.H',
        rating: 5,
        date: '2週間前',
        text: '無料体験レッスンがあるので気軽に始められました。音楽に合わせたレッスンが楽しいです。',
      },
      {
        author: 'M.M',
        rating: 4,
        date: '3週間前',
        text: '中目黒のおしゃれな雰囲気にマッチしたスタジオ。レッスン後にカフェに立ち寄るのが楽しみです。',
      },
    ],
    price: 'Standard4 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', '中目黒駅すぐ', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。中目黒駅から徒歩すぐの好立地。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。無料体験レッスンを実施中。',
    access: '東急東横線・日比谷線「中目黒駅」徒歩すぐ',
    address: '東京都目黒区上目黒1-18-6 NMビル4F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プラン。音楽に合わせた50分のグループレッスン。',
      price: '月4回 15,070円（税込）〜',
    },
    options: [
      'Standard4（月4回 15,070円〜）',
      'Full（通い放題）',
      'Full Day（デイタイム通い放題）',
      '体験レッスン無料キャンペーン実施中',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'ピラティスミラー 中目黒',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '月6回11,000円で1回あたり1,833円はコスパ最高。7回目以降も1,100円で追加できるので通い放題に近い感覚で使えます。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1週間前',
        text: 'コナミスポーツが運営しているので安心感があります。プライベートレッスンも30分4,400円からとリーズナブル。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: '朝7時からやっているので出勤前に通えるのが嬉しい。中目黒のおしゃれなスタジオで気持ちよくトレーニングできます。',
      },
    ],
    price: '月会費 11,000円（月6回まで）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '月6回定額', '中目黒駅近', '朝7時から'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。中目黒駅近くに位置。月会費11,000円で月6回まで利用可能、7回目以降は1回1,100円で追加利用可能。プライベートレッスンも30分4,400円からとリーズナブル。',
    access: '東急東横線・日比谷線「中目黒駅」徒歩圏内',
    address: '東京都目黒区青葉台1-14-4 CONTRAL nakameguro',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: '月6回まで定額で利用可能。7回目以降は1回1,100円で追加OK。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      '月会費（月6回まで 11,000円）',
      '追加利用（1回 1,100円）',
      'プライベート30分（4,400円）',
      'プライベート50分（6,600円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'コスパ重視', '朝活'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土 8:00〜18:00 / 日 8:00〜19:00',
      closed: '毎週木曜日',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'STUDIO IVY 中目黒店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    price: '1レッスン 6,250円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '中目黒駅徒歩2分', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。中目黒駅から徒歩2分の好立地。経験豊富なインストラクターが一人ひとりの体型や目標に合わせたオーダーメイドのトレーニングを提供。',
    access: '東急東横線・日比谷線「中目黒駅」徒歩2分',
    address: '東京都目黒区上目黒1-18-6 NMビル4F',
  },
  {
    name: 'NATURAglam 中目黒スタジオ',
    image: '/images/studios/naturaglam.webp',
    rating: 4.6,
    price: 'お問い合わせください',
    trial: '体験レッスンあり',
    features: ['ヨガ&ピラティス', '7スタジオ利用可能', '中目黒エリア', 'アットホーム'],
    description: 'ヨガ・ピラティスのスタジオ。中目黒・祐天寺・三軒茶屋・下北沢など都内7スタジオを追加料金なしで利用可能。アットホームな雰囲気で初心者でも安心して通えます。',
    access: '東急東横線・日比谷線「中目黒駅」徒歩圏内',
    address: '東京都目黒区（中目黒エリア）',
  },
  {
    name: 'BDC PILATES 恵比寿スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.7,
    price: 'グループ 月額 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['プロダンサー養成校プロデュース', '少人数制', '恵比寿駅近', '本格的'],
    description: '40年以上の実績を持つプロダンサー養成校「BDC」がプロデュースするマシンピラティス専門スタジオ。恵比寿駅から徒歩圏内で、中目黒からも1駅。最大8名の少人数制で質の高いレッスンを提供。',
    access: 'JR・日比谷線「恵比寿駅」徒歩圏内 / 中目黒から東急東横線で1駅',
    address: '東京都渋谷区（恵比寿エリア）',
  },
  {
    name: 'Dr.ピラティス 中目黒店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。中目黒エリア（詳細は公式サイト参照）。',
    access: '中目黒エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！中目黒エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめです。',
  },
  {
    question: '中目黒エリアのピラティススタジオの料金相場は？',
    answer: '中目黒エリアの料金相場は、グループレッスン月4〜6回で9,600円〜15,400円程度。パーソナルは1回6,250円〜10,000円が相場です。体験レッスンは無料〜2,200円と手頃です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。最低2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹を鍛えることに特化し、ヨガは柔軟性とリラックスを重視します。目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、姿勢改善に効果的で、肩こりや腰痛の根本原因を解消できます。デスクワークの方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '効果が表れだすのは「2ヶ月を過ぎた頃」から。最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルは効果が出やすく短期間で結果を出したい方に、グループは料金が安く楽しく続けられます。まずは体験で試してみてください。',
  },
]

export default function NakameguroPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '中目黒', url: 'https://pilates-biyori.com/area/nakameguro/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス中目黒おすすめ7選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">中目黒</span>
            </nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「中目黒でおしゃれなピラティススタジオに通いたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「コスパの良いスタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、中目黒エリアでおすすめのピラティススタジオ7選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>中目黒でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>おしゃれな空間でトレーニングしたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが安いスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="中目黒" />
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">中目黒のおすすめピラティススタジオ7選</h2>
            <div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              中目黒のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">15,400円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,250円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,850円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              中目黒は落ち着いた住環境が魅力のエリアで、プライベートレッスンやセミパーソナルなど少人数制を重視したスタジオが多い傾向です。1回あたりの単価はやや高めですが、その分インストラクターの質や設備にこだわったスタジオが揃っています。近隣の恵比寿エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              中目黒でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東急東横線・日比谷線「中目黒駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  中目黒エリアのスタジオは中目黒駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。中目黒駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">少人数制スタジオは早めの予約がカギ</h3>
                <p className="text-warm-600 leading-relaxed">
                  中目黒は少人数制やプライベートレッスンを重視するスタジオが多く、1クラスの定員が少ないため予約が早く埋まりがちです。特にマシンピラティスは定員4〜8名のスタジオが主流なので、希望の時間帯があれば早めに予約を。キャンセル待ち制度のあるスタジオを選ぶと安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  中目黒エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  中目黒エリアだけでなく、近隣の<Link href="/area/ebisu" className="text-warm-700 underline hover:text-warm-900">恵比寿</Link>、<Link href="/area/daikanyama" className="text-warm-700 underline hover:text-warm-900">代官山</Link>、<Link href="/area/meguro" className="text-warm-700 underline hover:text-warm-900">目黒</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>中目黒エリアの豆知識：</strong>中目黒は美意識の高い方が多いエリアで、レッスン後にそのままカフェやショッピングに行く方もいます。着替えやメイク直しのセットを持参しておくと、レッスン後の時間も有効活用できます。おしゃれなウェアで通う方も多いのが中目黒の特徴です。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円前後から通えるスタジオ。定額制やグループレッスンがお得。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• the SILK（月4回 15,070円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマン指導で効果を最大化。短期間で結果を出したい方に。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（中目黒駅徒歩2分）</li>
                  <li className="text-warm-700">• zen place（プライベートレッスンあり）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分4,400円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">中目黒駅から徒歩すぐのスタジオ。レッスン後のカフェ巡りも楽しめる。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 中目黒（駅徒歩すぐ）</li>
                  <li className="text-warm-700">• STUDIO IVY（駅徒歩2分）</li>
                  <li className="text-warm-700">• ピラティスミラー（駅徒歩圏内）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタートがおすすめ。継続期間は最低2-3ヶ月。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月継続すると目に見える変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで継続がおすすめ。無理なく長く続けることが大切です。</p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">マットグループや定額制プラン。気軽に始められる。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（マット月4回 9,625円〜）</li>
                  <li>• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備の大手スタジオ。少人数制グループ。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（月4回 15,070円〜）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                  <li>• BDC PILATES（月額15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 25,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">マンツーマンの丁寧な指導。短期集中向け。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（1回 6,250円〜）</li>
                  <li>• zen place（プライベート月2回 19,800円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div>
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div>
                <p className="text-warm-600 leading-relaxed">中目黒エリアの料金相場は月4〜6回で9,600円〜15,400円程度。無理なく継続できる予算を決めましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div>
                <p className="text-warm-600 leading-relaxed">無料〜2,200円で体験できるスタジオが多いので、気軽に試してみてください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div>
                <p className="text-warm-600 leading-relaxed">中目黒は東急東横線と日比谷線が利用でき、渋谷・恵比寿・代官山も徒歩圏内。おしゃれなカフェやショップが並ぶ落ち着いたエリアで、レッスン前後の時間も楽しめます。目黒川沿いの散歩もおすすめ。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は中目黒のおすすめピラティススタジオについてご紹介しましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">中目黒は東急東横線・日比谷線が利用でき、渋谷・恵比寿・代官山も近い人気エリア。おしゃれなスタジオが多く、レッスン後のカフェ巡りも楽しめます。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜2,200円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
      <RelatedAreas currentSlug="nakameguro" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
