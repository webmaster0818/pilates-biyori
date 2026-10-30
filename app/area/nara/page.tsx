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
  alternates: { canonical: 'https://biyori-pilates.com/area/nara/' },
  title: 'ピラティス奈良おすすめ5選人気スタジオの料金プランの比較',
  description: '奈良エリアのおすすめピラティススタジオ5選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。近鉄「近鉄奈良駅」/ JR「奈良駅」周辺の初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,奈良,奈良県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 奈良大安寺店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 11,220円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシン専門', '体験無料', '部位別プログラム'],
    description: '女性専用マシンピラティス専門スタジオです。音楽に合わせたテンポの良いレッスンが特徴です。部位別に特化した多彩なプログラムがあります。',
    access: '奈良市大安寺エリア（詳細は公式サイトでご確認ください）',
    address: '奈良県奈良市大安寺（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '女性専用マシンピラティス専門スタジオです。音楽に合わせたテンポの良いレッスンが特徴です。', price: '月4回 11,220円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティススタジオDEP 奈良店',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3U4MO2+5IM0+5YJRM',
    image: '/images/studios/pilates-studio-dep.webp',
    price: 'ライト 月2回 17,000円〜（税込）',
    trial: '初回体験 2,980円（税込・通常9,900円・LINE予約限定）',
    features: ['理学療法士・作業療法士が担当', '50分パーソナル', '近鉄奈良駅 徒歩5分', '料金エリアB'],
    description: 'ピラティススタジオDEP（株式会社DEP・公式の店舗一覧に全国57店舗）の奈良店です。理学療法士または作業療法士の国家資格を持つインストラクターが担当する50分のパーソナルマシンピラティスで、初回は90〜120分かけてカウンセリングと身体評価を行います（DEP公式）。月額は料金エリアB（ライト月2回 17,000円〜）です。',
    access: '近鉄奈良駅から500m・徒歩5分（公式の店舗ページ）',
    address: '奈良県奈良市林小路町16-1 伝宝ビル 2F',
    popularPlan: {
      name: '月額会員プラン',
      description: '50分のパーソナルレッスンです（初回は90〜120分）。ライト月2回・スタンダード月4回・プレミアム月7回です。',
      price: 'ライト 17,000円／スタンダード 32,000円／プレミアム 54,600円（税込）',
    },
    options: [
      'ライト 月2回 17,000円／スタンダード 月4回 32,000円／プレミアム 月7回 54,600円（税込・エリアB）',
      '都度払い 1回 12,000円（エリアB）',
      '初回レッスン 90〜120分（カウンセリング＋身体評価）',
      'オンラインレッスン 月4回受け放題 3,000円（公式の料金ページ）',
    ],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: {
      hours: '9:00〜18:00',
      closed: '年末年始',
      facilities: ['ピラティスマシン', '駐車場なし（公式の店舗ページ）'],
    },
  },
  {
    name: 'studio Kulah（スタジオクーラ）',
    price: '月額制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['学園前駅徒歩4分', '少人数制', 'ヨガ併設', 'プライベートあり'],
    description: '近鉄学園前駅徒歩4分のピラティス・ヨガ専門スタジオです。少人数制のグループレッスンからプライベートレッスンまで提供しています。',
    access: '近鉄奈良線「学園前駅」徒歩4分',
    address: '奈良県奈良市学園前（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '近鉄学園前駅徒歩4分のピラティス・ヨガ専門スタジオです。少人数制のグループレッスンか', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Pilates butterfly',
    price: 'パーソナル制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['近鉄奈良駅徒歩3分', '女性専用', '完全予約制', 'プライベート'],
    description: '近鉄奈良駅徒歩3分、奈良小西さくら通りにある女性専用完全予約制のプライベートピラティススタジオです。',
    access: '近鉄「近鉄奈良駅」徒歩3分',
    address: '奈良県奈良市小西町（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '近鉄奈良駅徒歩3分、奈良小西さくら通りにある女性専用完全予約制のプライベートピラ', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'GRANDY PILATES STUDIO 学園前店',
    price: 'パーソナル制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['プライベート専門', 'マシン＆マット', '男性利用可', '子連れ歓迎'],
    description: '奈良市のプライベート専門ピラティススタジオです。リフォーマーを用いたマシンピラティスやマットピラティスを提供しています。男性やお子様連れも歓迎です。',
    access: '近鉄奈良線「学園前駅」徒歩圏内',
    address: '奈良県奈良市学園前エリア',
    popularPlan: { name: '人気プラン', description: '奈良市のプライベート専門ピラティススタジオです。リフォーマーを用いたマシンピラティス', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。奈良エリアのスタジオはほとんどが初心者歓迎です。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者におすすめです。' },
  { question: '奈良のピラティスの料金相場は？', answer: 'グループ月4回で11,220円〜程度です。パーソナルは1回 8,000円〜15,000円が目安です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '奈良エリアには男性利用可のスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: 'ピラティスKをはじめ、無料体験を実施しているスタジオが多くあります。各スタジオの最新キャンペーン情報をご確認ください。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。' },
]

export default function NaraPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '奈良', url: 'https://biyori-pilates.com/area/nara/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス奈良おすすめ5選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">奈良</span>
            </nav>
          </div>
        </section>
        <TableOfContents areaName="奈良" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">本ページでは、奈良エリアでおすすめのピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>奈良でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>近鉄「近鉄奈良駅」/ JR「奈良駅」から通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>
        <PriceComparisonTable studios={studios} areaName="奈良" />
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">奈良のおすすめピラティススタジオ5選</h2>
            <div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスK 奈良大安寺店（月4回 11,220円〜）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスK 奈良大安寺店</li><li className="text-warm-700">• Pilates butterfly（完全個室）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">パーソナルで選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティススタジオDEP（理学療法士監修）</li><li className="text-warm-700">• GRANDY PILATES STUDIO（子連れ歓迎）</li></ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">奈良のピラティス料金相場</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">11,220円〜</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜15,000円</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜5,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">奈良エリアは近鉄奈良駅と学園前駅の2拠点にスタジオが集中しています。大阪と比べて個人スタジオやプライベート専門スタジオが多く、一人ひとり丁寧に指導してもらえる環境が特徴です。</p>
          </div>
        </section>
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">奈良でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近鉄奈良駅と学園前駅でエリアが分かれる</h3>
                <p className="text-warm-600 leading-relaxed">奈良のスタジオは近鉄奈良駅周辺と学園前駅周辺に分かれています。自宅や通勤経路から通いやすいエリアをお選びください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">プライベート専門スタジオが多い</h3>
                <p className="text-warm-600 leading-relaxed">奈良はグループレッスンよりパーソナル・プライベート専門スタジオが多い傾向です。予算とニーズに合わせてお選びください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駐車場の確認を忘れずに</h3>
                <p className="text-warm-600 leading-relaxed">奈良は車移動が多いエリアです。スタジオの駐車場の有無や近隣コインパーキングの場所を事前に確認しておくと安心です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">大阪方面も検討</h3>
                <p className="text-warm-600 leading-relaxed">近鉄で大阪方面にも30分程度です。天王寺やなんばエリアのスタジオも通勤経路に合わせてご検討ください。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のスタジオが多くあります。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600"><strong>奈良エリアの豆知識：</strong>奈良は観光地のイメージが強いですが、学園前エリアを中心に住宅地のスタジオが充実しています。個人スタジオが多いため、完全予約制の場合は事前予約を忘れずにご用意ください。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">奈良の料金相場はグループ月4回で11,220円〜です。入会金やキャンペーンもご確認ください。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">複数のスタジオで体験レッスンを受けて比較することをおすすめします。体験当日の入会で特典を用意しているスタジオもあります。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間、営業時間をご確認ください。継続するには通いやすさが最も重要です。</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">本ページでは、奈良エリアのおすすめピラティススタジオについてご紹介しました。</p>
            <p className="text-warm-600 leading-relaxed mb-6">本ページでは、奈良にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p>
            <p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p>
            <p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p>
          </div>
        </section>
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜5,000円です。<br />まずは体験レッスンへの参加をおすすめします。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nara" areaName="奈良" />

      <RelatedAreas currentSlug="nara" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
