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
  alternates: { canonical: 'https://biyori-pilates.com/area/oita/' },
  title: '【2026年10月最新】ピラティス大分おすすめ6選人気スタジオの料金プランの比較',
  description: '大分エリアのおすすめピラティススタジオ6選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,大分,大分市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'pilates K トキハ大分店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'トキハ内', '部位別プログラム', '1人1台マシン'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性限定マシンピラティス専門スタジオです。トキハ大分内で買い物ついでに通える好立地です。部位別プログラムが充実しています。',
    access: 'JR「大分駅」徒歩10分（トキハ大分内）',
    address: '大分県大分市府内町（トキハ大分内）',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回のグループマシンピラティスです。', price: '月4回 13,420円（税込）' },
    options: ['マンスリー8メンバー', 'マンスリーフルメンバー', '体験レッスン無料', '入会金 5,500円'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '部位別トレーニング', '運動不足解消'] },
    basicInfo: { hours: 'トキハ営業時間に準ずる', closed: 'トキハ休館日', facilities: ['リフォーマー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Reed Green',
    image: '/images/studios/reed-green-oita.webp',
    price: '1回 8,000円〜',
    trial: '体験レッスンあり',
    features: ['理学療法士在籍', 'パーソナル', '大分駅徒歩9分', 'オーダーメイド'],
    description: '在籍トレーナー全員が理学療法士の資格を持つピラティススタジオです。身体の根本から理解した上での指導で、姿勢改善や痛み改善に効果的です。大分駅から徒歩9分です。',
    access: 'JR「大分駅」徒歩9分',
    address: '大分県大分市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '理学療法士によるマンツーマンレッスンです。', price: '1回 8,000円〜（税込）' },
    options: ['回数券あり', 'オーダーメイドプログラム', '身体評価あり', '体験レッスンあり'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性70% / 男性30%', purpose: ['姿勢改善', '痛み改善', 'リハビリ', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '各種ピラティス器具'] },
  },
  {
    name: 'Kyoumo Pilates',
    image: '/images/studios/kyoumo-pilates-oita.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ['プライベート', 'マット×マシン', '姿勢改善特化', 'カウンセリング'],
    description: '一人ひとりのニーズに寄り添ったプライベートレッスンを提供しています。マット×マシンの効率的なレッスンで姿勢改善にアプローチです。丁寧なカウンセリングで初心者も安心です。',
    access: '大分市内',
    address: '大分県大分市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'プライベートレッスン', description: 'マット×マシンの効率的なレッスンです。', price: '要問合せ（公式サイト参照）' },
    options: ['プライベートレッスン', 'カウンセリング付き', '姿勢改善プログラム', '体験レッスンあり'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性90% / 男性10%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'Ciieliante（シエリアンテ）',
    image: '/images/studios/ciieliante-oita.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ['理学療法士運営', '分子栄養学', '2025年オープン', 'トータルケア'],
    description: '2025年1月オープンの理学療法士が運営するマシンピラティススタジオです。「ピラティス×理学療法×分子栄養学」を組み合わせた独自メソッドで不調の改善をサポートしています。',
    access: '大分市内',
    address: '大分県大分市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: 'ピラティス×理学療法×栄養学のトータルケアです。', price: '要問合せ（公式サイト参照）' },
    options: ['パーソナルレッスン', '栄養指導あり', '身体評価あり', '体験レッスンあり'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['不調改善', '姿勢改善', '体質改善', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '各種ピラティス器具'] },
  },
  {
    name: 'seuse（セウス）',
    image: '/images/studios/seuse-oita.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ['多職種スタッフ', 'ピラティス&ヨガ', '管理栄養士在籍', 'トータルサポート'],
    description: 'トレーナー・治療家・理学療法士・管理栄養士が在籍する総合ピラティス&ヨガスタジオです。多角的なサポート体制で身体の悩みをトータルケアです。',
    access: '大分市内',
    address: '大分県大分市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'ピラティスレッスン', description: '多職種スタッフによるトータルサポートしています。', price: '要問合せ（公式サイト参照）' },
    options: ['ピラティスレッスン', 'ヨガレッスン', '栄養指導', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['健康維持', '姿勢改善', 'ボディメイク', 'リフレッシュ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ヨガスタジオ', '更衣室'] },
  },
  {
    name: '24/7ピラティス 大分店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=J11817X.1.B1620582.U1357808',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらで参加可能）',
    features: ['マシンピラティス', '女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオです。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供しています。大分駅から徒歩11分です。※一部のご案内やサポート対応は、男性スタッフが行う場合がございます。※24/7Workout併設店舗のため、パーソナルトレーニングの男性会員様がご来店される場合もございます。',
    access: '大分駅から徒歩11分',
    address: '大分県大分市高砂町1-30 S-Fort高砂町201',
    popularPlan: {
      name: '月4回プラン',
      description: '完全個室でマシンを使ったマンツーマン指導しています。入会金不要の月謝制です。',
      price: '月4回 27,000円〜（税込）',
    },
    options: [
      'なし',
    ],
    userProfile: {
      ageRange: '20代〜50代と幅広い',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '健康維持'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年中無休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
]

const faqs = [
  { question: '大分でピラティス初心者におすすめのスタジオは？', answer: 'pilates Kトキハ大分店は会員の多くが初心者で、無料体験もあります。Kyoumo Pilatesは丁寧なカウンセリングから始まるので未経験者も安心です。' },
  { question: '大分のピラティスの料金相場は？', answer: 'グループレッスンはpilates Kの月4回13,420円〜が目安です。パーソナルレッスンはReed Greenの1回8,000円〜です。地元スタジオは要問合せが多いです。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マシンピラティスはリフォーマー等の専用マシンを使い負荷調整しやすく初心者にもおすすめです。マットピラティスは自重中心のエクササイズです。' },
  { question: '男性が通えるスタジオはありますか？', answer: 'Reed Green、Ciieliante、seuseは男性も受講可能です。pilates Kは女性専用です。' },
  { question: '理学療法士がいるスタジオは？', answer: 'Reed Greenはトレーナー全員が理学療法士です。Ciielianteも理学療法士が運営しています。身体の専門家による指導を受けたい方におすすめです。' },
  { question: '体験レッスンは何を持っていけばいい？', answer: '動きやすい服装、飲み物、フェイスタオル、滑り止め付き靴下があれば可能です。pilates Kは無料体験を実施中です。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。最低2〜3ヶ月の継続が大切です。' },
  { question: '大分駅から近いスタジオは？', answer: 'Reed Greenは大分駅から徒歩9分です。pilates Kはトキハ大分内で大分駅から徒歩圏内です。' },
  { question: '栄養指導も受けられるスタジオは？', answer: 'Ciielianteは分子栄養学を取り入れた指導、seuseは管理栄養士が在籍しています。ピラティスと栄養の両面からサポートを受けられます。' },
  { question: 'ピラティスはどのくらいで効果が出る？', answer: '個人差はありますが、2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く、ボディメイクは3〜6ヶ月が目安です。' },
]

export default function OitaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '大分', url: 'https://biyori-pilates.com/area/oita/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス大分おすすめ6選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">大分</span></nav></div></section>
        <TableOfContents areaName="大分" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">本ページでは、大分エリアでおすすめのピラティススタジオ6選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>大分でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>理学療法士による専門的な指導を受けたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>
        <PriceComparisonTable studios={studios} areaName="大分" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">大分のおすすめピラティススタジオ6選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>

        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">大分のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">10,000円〜15,000円</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜10,000円</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,000円程度</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">大分エリアは理学療法士など医療系資格者が運営するスタジオが多いのが特徴です。パーソナルレッスンの質が高く、身体の不調改善を目的とした方に特におすすめのエリアです。大手チェーンのpilates Kも出店しており、選択肢が広がっています。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">大分でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">車での通いやすさを優先的にチェック</h3><p className="text-warm-600 leading-relaxed">大分は車社会のため、駐車場の有無や近隣のコインパーキング情報を事前にご確認ください。pilates Kはトキハ内の駐車場が利用できます。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">予約制スタジオが多いため事前確認を</h3><p className="text-warm-600 leading-relaxed">大分のピラティススタジオはパーソナル・少人数制が多く、完全予約制の場合がほとんどです。希望の日時で予約が取れるか、キャンセルポリシーもご確認ください。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">目的に合ったスタジオ選びが重要</h3><p className="text-warm-600 leading-relaxed">大分には理学療法士が運営するリハビリ寄りのスタジオから、ボディメイク特化のスタジオまで特色が異なります。自分の目的を明確にしてからスタジオを選ぶことをおすすめします。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣の別府エリアも選択肢に</h3><p className="text-warm-600 leading-relaxed">大分市内だけでなく、<Link href="/area/beppu/" className="text-warm-700 underline hover:text-warm-900">別府</Link>エリアにもピラティススタジオがあります。温泉地ならではのリラクゼーションと組み合わせた利用もご検討ください。</p></div>
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用に持参が安心です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォームを確認しやすくなります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>がある場合もあります。事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600"><strong>大分エリアの豆知識：</strong>大分は温泉県としても有名です。ピラティスで整えた身体を温泉でリラックスさせるのもおすすめの過ごし方です。車で通う方が多いので、駐車場情報は事前にご確認ください。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク</h3><p className="text-warm-600 text-sm mb-4">部位別プログラムで効率的に通えます。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• pilates K（部位別プログラム充実）</li></ul></div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">姿勢・痛み改善</h3><p className="text-warm-600 text-sm mb-4">医療系資格者による専門指導しています。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Reed Green（理学療法士全員在籍）</li><li className="text-warm-700">• Ciieliante（理学療法士運営）</li></ul></div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">トータルケア</h3><p className="text-warm-600 text-sm mb-4">栄養指導も受けたい方におすすめです。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Ciieliante（分子栄養学）</li><li className="text-warm-700">• seuse（管理栄養士在籍）</li></ul></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続することをおすすめします。</p></div></div></section>

        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜15,000円</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">グループレッスンです。</p><ul className="text-sm text-warm-700 space-y-1"><li>• pilates K（13,420円〜/月4回）</li></ul></div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">1回 8,000円〜</h3><p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p><p className="text-sm text-warm-600 mb-4">専門家による個別指導しています。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Reed Green（1回 8,000円〜）</li></ul></div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">要問合せ</h3><p className="text-3xl font-bold text-warm-800 mb-4">地域密着型</p><p className="text-sm text-warm-600 mb-4">アットホームです。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Kyoumo Pilates</li><li>• Ciieliante</li><li>• seuse</li></ul></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">大分の料金相場はグループ月4回で13,420円〜、パーソナル1回8,000円〜が目安です。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">pilates Kは無料体験があります。各スタジオも体験レッスンを用意しています。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">大分は車社会です。駐車場の有無や通勤経路上にあるかを重視してお選びください。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>

        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、大分エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、大分にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>

        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜です。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="oita" areaName="大分" />

      <RelatedAreas currentSlug="oita" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
