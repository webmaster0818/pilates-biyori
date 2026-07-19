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
  title: '【2026年7月最新】ピラティス大分おすすめ6選！人気スタジオの料金プランを簡単比較！',
  description: '大分エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,大分,大分市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'pilates K トキハ大分店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.5,
    reviewCount: 68,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'トキハ内で買い物ついでに通える。女性専用で音楽に合わせたレッスンが楽しい。' },
      { author: 'K.T', rating: 4, date: '2週間前', text: '部位別プログラムが充実。お尻や二の腕など気になるパーツに集中できる。' },
      { author: 'Y.N', rating: 5, date: '3週間前', text: '1人1台リフォーマー完備。グループでも効果的にトレーニングできる。' },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'トキハ内', '部位別プログラム', '1人1台マシン'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性限定マシンピラティス専門スタジオ。トキハ大分内で買い物ついでに通える好立地。部位別プログラムが充実。',
    access: 'JR「大分駅」徒歩10分（トキハ大分内）',
    address: '大分県大分市府内町（トキハ大分内）',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回のグループマシンピラティス。', price: '月4回 13,420円（税込）' },
    options: ['マンスリー8メンバー', 'マンスリーフルメンバー', '体験レッスン無料', '入会金 5,500円'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '部位別トレーニング', '運動不足解消'] },
    basicInfo: { hours: 'トキハ営業時間に準ずる', closed: 'トキハ休館日', facilities: ['リフォーマー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Reed Green',
    image: '/images/studios/reed-green-oita.webp',
    rating: 4.8,
    reviewCount: 32,
    reviews: [
      { author: 'A.M', rating: 5, date: '1週間前', text: 'トレーナー全員が理学療法士の資格保持者。身体の専門家による指導で安心感が違う。' },
      { author: 'S.K', rating: 5, date: '2週間前', text: '大分駅から徒歩9分でアクセス良好。個別の身体評価に基づいたオーダーメイドプログラム。' },
      { author: 'H.T', rating: 4, date: '3週間前', text: '姿勢改善や腰痛対策に効果的。医療系資格者ならではの的確なアドバイスが魅力。' },
    ],
    price: '1回 8,000円〜',
    trial: '体験レッスンあり',
    features: ['理学療法士在籍', 'パーソナル', '大分駅徒歩9分', 'オーダーメイド'],
    description: '在籍トレーナー全員が理学療法士の資格を持つピラティススタジオ。身体の根本から理解した上での指導で、姿勢改善や痛み改善に効果的。大分駅から徒歩9分。',
    access: 'JR「大分駅」徒歩9分',
    address: '大分県大分市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '理学療法士によるマンツーマンレッスン。', price: '1回 8,000円〜（税込）' },
    options: ['回数券あり', 'オーダーメイドプログラム', '身体評価あり', '体験レッスンあり'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性70% / 男性30%', purpose: ['姿勢改善', '痛み改善', 'リハビリ', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '各種ピラティス器具'] },
  },
  {
    name: 'Kyoumo Pilates',
    image: '/images/studios/kyoumo-pilates-oita.webp',
    rating: 4.7,
    reviewCount: 18,
    reviews: [
      { author: 'R.M', rating: 5, date: '1週間前', text: 'マット×マシンの組み合わせレッスンが効率的。一人ひとりに寄り添ったプライベートレッスン。' },
      { author: 'N.S', rating: 5, date: '2週間前', text: '姿勢改善に特化したプログラムが魅力。丁寧なカウンセリングから始まるので安心。' },
      { author: 'T.K', rating: 4, date: '3週間前', text: 'アットホームな雰囲気で通いやすい。毎回身体の変化を感じられる。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ['プライベート', 'マット×マシン', '姿勢改善特化', 'カウンセリング'],
    description: '一人ひとりのニーズに寄り添ったプライベートレッスンを提供。マット×マシンの効率的なレッスンで姿勢改善にアプローチ。丁寧なカウンセリングで初心者も安心。',
    access: '大分市内',
    address: '大分県大分市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'プライベートレッスン', description: 'マット×マシンの効率的なレッスン。', price: '要問合せ（公式サイト参照）' },
    options: ['プライベートレッスン', 'カウンセリング付き', '姿勢改善プログラム', '体験レッスンあり'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性90% / 男性10%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'Ciieliante（シエリアンテ）',
    image: '/images/studios/ciieliante-oita.webp',
    rating: 4.8,
    reviewCount: 15,
    reviews: [
      { author: 'K.Y', rating: 5, date: '1週間前', text: '理学療法士が運営。ピラティス×理学療法×分子栄養学の独自メソッドで不調を根本改善。' },
      { author: 'M.H', rating: 5, date: '2週間前', text: '2025年1月オープンの新しいスタジオ。設備がきれいで清潔感がある。' },
      { author: 'A.T', rating: 4, date: '3週間前', text: '栄養面からもアドバイスがもらえるのが他にない特徴。トータルケアが魅力。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ['理学療法士運営', '分子栄養学', '2025年オープン', 'トータルケア'],
    description: '2025年1月オープンの理学療法士が運営するマシンピラティススタジオ。「ピラティス×理学療法×分子栄養学」を組み合わせた独自メソッドで不調の改善をサポート。',
    access: '大分市内',
    address: '大分県大分市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: 'ピラティス×理学療法×栄養学のトータルケア。', price: '要問合せ（公式サイト参照）' },
    options: ['パーソナルレッスン', '栄養指導あり', '身体評価あり', '体験レッスンあり'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['不調改善', '姿勢改善', '体質改善', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '各種ピラティス器具'] },
  },
  {
    name: 'seuse（セウス）',
    image: '/images/studios/seuse-oita.webp',
    rating: 4.6,
    reviewCount: 42,
    reviews: [
      { author: 'E.S', rating: 5, date: '1週間前', text: 'トレーナー・治療家・理学療法士・管理栄養士が在籍。多角的なサポートが魅力。' },
      { author: 'Y.M', rating: 4, date: '2週間前', text: 'ピラティスとヨガの両方が受けられる。気分や体調に合わせてレッスンを選べる。' },
      { author: 'R.K', rating: 5, date: '3週間前', text: '一流のスタッフ陣。身体の悩みに対して的確なアドバイスがもらえる。' },
    ],
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ['多職種スタッフ', 'ピラティス&ヨガ', '管理栄養士在籍', 'トータルサポート'],
    description: 'トレーナー・治療家・理学療法士・管理栄養士が在籍する総合ピラティス&ヨガスタジオ。多角的なサポート体制で身体の悩みをトータルケア。',
    access: '大分市内',
    address: '大分県大分市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'ピラティスレッスン', description: '多職種スタッフによるトータルサポート。', price: '要問合せ（公式サイト参照）' },
    options: ['ピラティスレッスン', 'ヨガレッスン', '栄養指導', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['健康維持', '姿勢改善', 'ボディメイク', 'リフレッシュ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ヨガスタジオ', '更衣室'] },
  },
  {
    name: '24/7ピラティス 大分店',
    officialUrl: 'https://247-sports.jp/pilates/',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらOK）',
    features: ['女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供。大分駅から徒歩11分。',
    access: '大分駅から徒歩11分',
    address: '大分県大分市高砂町1-30 S-Fort高砂町201',
  },
]

const faqs = [
  { question: '大分でピラティス初心者におすすめのスタジオは？', answer: 'pilates Kトキハ大分店は会員の多くが初心者で、無料体験もあり。Kyoumo Pilatesは丁寧なカウンセリングから始まるので未経験者も安心です。' },
  { question: '大分のピラティスの料金相場は？', answer: 'グループレッスンはpilates Kの月4回13,420円〜が目安。パーソナルレッスンはReed Greenの1回8,000円〜。地元スタジオは要問合せが多いです。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マシンピラティスはリフォーマー等の専用マシンを使い負荷調整しやすく初心者にもおすすめ。マットピラティスは自重中心のエクササイズです。' },
  { question: '男性が通えるスタジオはありますか？', answer: 'Reed Green、Ciieliante、seuseは男性も受講可能です。pilates Kは女性専用です。' },
  { question: '理学療法士がいるスタジオは？', answer: 'Reed Greenはトレーナー全員が理学療法士。Ciielianteも理学療法士が運営しています。身体の専門家による指導を受けたい方におすすめ。' },
  { question: '体験レッスンは何を持っていけばいい？', answer: '動きやすい服装、飲み物、フェイスタオル、滑り止め付き靴下があればOK。pilates Kは無料体験を実施中。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回がおすすめ。慣れたら週2〜3回に。最低2〜3ヶ月の継続が大切です。' },
  { question: '大分駅から近いスタジオは？', answer: 'Reed Greenは大分駅から徒歩9分。pilates Kはトキハ大分内で大分駅から徒歩圏内です。' },
  { question: '栄養指導も受けられるスタジオは？', answer: 'Ciielianteは分子栄養学を取り入れた指導、seuseは管理栄養士が在籍。ピラティスと栄養の両面からサポートを受けられます。' },
  { question: 'ピラティスはどのくらいで効果が出る？', answer: '個人差はありますが、2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く、ボディメイクは3〜6ヶ月が目安。' },
]

export default function OitaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '大分', url: 'https://pilates-biyori.com/area/oita/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月19日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス大分おすすめ6選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">大分</span></nav></div></section>
        <TableOfContents areaName="大分" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「大分でピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「大分市内で通いやすいピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、大分エリアでおすすめのピラティススタジオ6選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>大分でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>理学療法士による専門的な指導を受けたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
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
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">大分エリアは理学療法士など医療系資格者が運営するスタジオが多いのが特徴。パーソナルレッスンの質が高く、身体の不調改善を目的とした方に特におすすめのエリアです。大手チェーンのpilates Kも出店しており、選択肢が広がっています。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">大分でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">車での通いやすさを優先的にチェック</h3><p className="text-warm-600 leading-relaxed">大分は車社会のため、駐車場の有無や近隣のコインパーキング情報を事前に確認しましょう。pilates Kはトキハ内の駐車場が利用できます。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">予約制スタジオが多いため事前確認を</h3><p className="text-warm-600 leading-relaxed">大分のピラティススタジオはパーソナル・少人数制が多く、完全予約制の場合がほとんど。希望の日時で予約が取れるか、キャンセルポリシーも確認しておきましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">目的に合ったスタジオ選びが重要</h3><p className="text-warm-600 leading-relaxed">大分には理学療法士が運営するリハビリ寄りのスタジオから、ボディメイク特化のスタジオまで特色が異なります。自分の目的を明確にしてからスタジオ選びをしましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣の別府エリアも選択肢に</h3><p className="text-warm-600 leading-relaxed">大分市内だけでなく、<Link href="/area/beppu/" className="text-warm-700 underline hover:text-warm-900">別府</Link>エリアにもピラティススタジオがあります。温泉地ならではのリラクゼーションと組み合わせた利用も検討してみましょう。</p></div>
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用に持参が安心。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認がしやすく。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>がある場合も。事前確認を。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600"><strong>大分エリアの豆知識：</strong>大分は温泉県としても有名。ピラティスで整えた身体を温泉でリラックスさせるのもおすすめの過ごし方です。車で通う方が多いので、駐車場情報は事前にチェックしておきましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク</h3><p className="text-warm-600 text-sm mb-4">部位別プログラムで効率的に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• pilates K（部位別プログラム充実）</li></ul></div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">姿勢・痛み改善</h3><p className="text-warm-600 text-sm mb-4">医療系資格者による専門指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Reed Green（理学療法士全員在籍）</li><li className="text-warm-700">• Ciieliante（理学療法士運営）</li></ul></div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">トータルケア</h3><p className="text-warm-600 text-sm mb-4">栄養指導も受けたい方に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Ciieliante（分子栄養学）</li><li className="text-warm-700">• seuse（管理栄養士在籍）</li></ul></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>

        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜15,000円</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">グループレッスン。</p><ul className="text-sm text-warm-700 space-y-1"><li>• pilates K（13,420円〜/月4回）</li></ul></div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">1回 8,000円〜</h3><p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p><p className="text-sm text-warm-600 mb-4">専門家による個別指導。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Reed Green（1回 8,000円〜）</li></ul></div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">要問合せ</h3><p className="text-3xl font-bold text-warm-800 mb-4">地域密着型</p><p className="text-sm text-warm-600 mb-4">アットホーム。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Kyoumo Pilates</li><li>• Ciieliante</li><li>• seuse</li></ul></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">大分の料金相場はグループ月4回で13,420円〜、パーソナル1回8,000円〜が目安。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">pilates Kは無料体験あり。各スタジオも体験レッスンを用意しています。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">大分は車社会。駐車場の有無や通勤経路上にあるかを重視して選びましょう。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>

        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は大分エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では大分にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>

        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="oita" areaName="大分" />

      <RelatedAreas currentSlug="oita" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
