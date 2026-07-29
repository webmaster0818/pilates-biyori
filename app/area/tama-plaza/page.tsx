import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/tama-plaza/' },
  title: '【2026年7月最新】ピラティスたまプラーザおすすめ6選！料金・体験レッスン・マシン対応を比較！',
  description: 'たまプラーザエリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,たまプラーザ,青葉区,横浜市,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull たまプラーザ店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6, reviewCount: 134,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: 'たまプラーザ駅から徒歩3分。LAVA系列で安心。月4回8,800円〜とマシンピラティスでは破格のコスパ。無料体験あり。' },
      { author: 'S.T', rating: 4, date: '2週間前', text: '女性専用で清潔感抜群。初心者が87%以上で未経験でも始めやすい。大画面映像に合わせてレッスンが進むので分かりやすい。' },
      { author: 'R.N', rating: 5, date: '3週間前', text: 'プレミアムフリーフルタイム18,800円でLAVA等系列店も全国で利用可能。ヨガとピラティス両方できて最高。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', 'たまプラーザ駅徒歩3分', 'コスパ抜群'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。たまプラーザ駅から徒歩3分。月4回8,800円のリーズナブルな料金。大型スクリーン映像に合わせてレッスンが進み、87%以上が初心者で安心。',
    access: '東急田園都市線「たまプラーザ駅」徒歩3分',
    address: '神奈川県横浜市青葉区美しが丘エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マシンピラティス月4回プラン', description: 'リフォーマーを使った本格マシンピラティス。1回あたり2,200円のコスパ。', price: '月4回 8,800円（税込）' },
    options: ['2スタジオ通い放題（13,800円）', '全国通い放題（16,800円）', 'プレミアムフリーフルタイム（18,800円・LAVA等全店利用可）', '無料体験・施設使用料2,500円'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '大型スクリーン', '更衣室', 'ロッカー', 'シャワー'] },
  },
  {
    name: 'スタジオBYK たまプラーザ店',
    image: '/images/studios/studio-byk-sagamiono.webp',
    rating: 4.8, reviewCount: 76,
    reviews: [
      { author: 'A.Y', rating: 5, date: '1週間前', text: 'たまプラーザ駅から徒歩3分。完全個室のパーソナルピラティスで、10代から90代まで幅広い年齢層に対応。丁寧なカウンセリングが魅力。' },
      { author: 'K.M', rating: 5, date: '2週間前', text: '自分だけのプログラムを組んでもらえるので効果を実感しやすい。スタッフが親切で初心者でも安心して通えます。' },
      { author: 'N.S', rating: 4, date: '3週間前', text: '完全個室なので周りを気にせずレッスンに集中できる。体の状態に合わせた指導が受けられるのが嬉しい。' },
    ],
    price: 'パーソナル 1回 8,800円〜', trial: '体験レッスンあり',
    features: ['完全個室', 'パーソナル専門', 'たまプラーザ駅徒歩3分', '全年齢対応'],
    description: 'たまプラーザ駅から徒歩3分の完全個室パーソナルピラティス専門スタジオ。10代から90代まで多くの方に選ばれている。個々の体の状態に合わせたオーダーメイドプログラムで確実に効果を実感。',
    access: '東急田園都市線「たまプラーザ駅」徒歩3分',
    address: '神奈川県横浜市青葉区美しが丘エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '完全個室のマンツーマンピラティス。オーダーメイドプログラム。', price: '1回 8,800円〜（税込）' },
    options: ['回数券プランあり', '月額プランあり', '体験レッスンあり', '完全個室対応'],
    userProfile: { ageRange: '10代〜90代（幅広い年齢層）', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'リハビリ', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '完全個室', '更衣室', 'ロッカー'] },
  },
  {
    name: 'the SILK たまプラーザ店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7, reviewCount: 118,
    reviews: [
      { author: 'Y.K', rating: 5, date: '1週間前', text: '女性専用で清潔感のある内装。音楽に合わせたリフォーマーレッスンが楽しい。手ぶらで無料体験できるのが嬉しい。' },
      { author: 'T.M', rating: 5, date: '2週間前', text: 'パウダールーム完備。ウェア・タオル無料貸出で荷物なしで通えます。朝8時から営業で子どもを送った後に通える。' },
      { author: 'H.S', rating: 4, date: '3週間前', text: '初心者の割合が高いので未経験でも安心。月3回12,980円〜始められて、たまプラーザの主婦層に人気。' },
    ],
    price: '月3回 12,980円〜', trial: '体験レッスン 無料',
    features: ['女性専用', '手ぶら体験OK', '音楽レッスン', 'パウダールーム完備'],
    description: '女性専用マシンピラティススタジオ。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。パウダールームにメイクアップミラー・アイロン完備で外出前後の利用に便利。',
    access: '東急田園都市線「たまプラーザ駅」周辺',
    address: '神奈川県横浜市青葉区美しが丘エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'Standard4（月4回）', description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。', price: '月4回 15,070円（税込）' },
    options: ['Light3（月3回 12,980円）', 'Full（毎日1回 20,680円）', 'Full Day（18,480円）', '体験・入会金無料キャンペーンあり'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'] },
    basicInfo: { hours: '8:00〜22:00', closed: '年末年始', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'] },
  },
  {
    name: 'zen place pilates たまプラーザ近隣スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7, reviewCount: 148,
    reviews: [
      { author: 'K.N', rating: 5, date: '1週間前', text: '全国150店舗以上で他店利用可能なので、たまプラーザ近隣のスタジオも使える。マットもマシンも両方受けられるのが魅力。' },
      { author: 'Y.M', rating: 4, date: '2週間前', text: 'グループ体験1,000円で気軽に試せます。体験当日入会で入会金無料。ピラティス専門で20年以上の実績があり安心。' },
      { author: 'A.S', rating: 5, date: '3週間前', text: 'インストラクターの質が高い。男性もOKなので家族で通えます。オンラインレッスンも充実。' },
    ],
    price: '月4回 10,450円〜', trial: 'グループ体験 1,000円',
    features: ['男性OK', 'マット&マシン', '全国相互利用', '20年以上の実績'],
    description: 'ピラティス専門の大手スタジオ。全国150店舗以上で相互利用可能。マットグループ・マシングループ・プライベートの3タイプから選べます。BASIピラティスをベースにした本格指導。たまプラーザエリアからもアクセス良好。',
    access: '東急田園都市線沿線（たまプラーザエリアからアクセス良好）',
    address: '神奈川県横浜市青葉区エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。', price: '月額 14,960円〜（税込）' },
    options: ['月4回プラン（10,450円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン（体験 9,900円）', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '月〜金 10:00〜20:00 / 土日祝 10:00〜16:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'URBAN CLASSIC PILATES たまプラーザ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5, reviewCount: 86,
    reviews: [
      { author: 'S.K', rating: 5, date: '1週間前', text: 'マシンピラティスとTRXを組み合わせたサーキット形式。30分で全身を鍛えられる。予約不要で思い立ったら即通える。' },
      { author: 'M.H', rating: 4, date: '2週間前', text: '月額通い放題で9,680円〜。好きな時に通えてコスパ抜群。短時間なので家事の合間にも通いやすい。' },
      { author: 'R.Y', rating: 5, date: '3週間前', text: 'たまプラーザ駅近くで通いやすい。マシンとファンクショナルトレーニングの組み合わせで飽きない。' },
    ],
    price: '月額 9,680円〜（通い放題）', trial: '体験レッスンあり',
    features: ['サーキット形式', '30分レッスン', '予約不要', '通い放題'],
    description: 'マシンピラティスとTRXを使ったファンクショナルトレーニングのサーキット形式スタジオ。30分で効率よく全身を鍛えられる。予約不要の通い放題で忙しい方にもおすすめ。',
    access: '東急田園都市線「たまプラーザ駅」周辺',
    address: '神奈川県横浜市青葉区美しが丘エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月額通い放題プラン', description: '30分サーキット形式のマシンピラティス＆TRXトレーニング通い放題。', price: '月額 9,680円〜（税込）' },
    options: ['予約不要', '30分の効率レッスン', 'マシンピラティス＆TRX', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性85% / 男性15%', purpose: ['ボディメイク', 'ダイエット', '運動不足解消', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', 'TRX', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Dr.ピラティス たまプラーザ店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。たまプラーザエリア（詳細は公式サイト参照）。',
    access: 'たまプラーザエリア（詳細は公式サイト参照）',
    address: '神奈川県（詳細は公式サイト参照）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！たまプラーザエリアのスタジオはほとんどが初心者歓迎。Rintosullは87%以上が初心者、スタジオBYKは10代から90代まで幅広く対応しています。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。たまプラーザはマシン専門スタジオが充実。' },
  { question: 'たまプラーザのピラティスの料金相場は？', answer: 'グループ月4回で8,800円〜15,070円程度。Rintosullが月4回8,800円で最安級。通い放題ならアーバンクラシック9,680円〜が最もお得。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。通い放題のアーバンクラシックなら毎日30分で効率よく通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで無料体験可能（ウェア・タオル無料貸出）。Rintosullも無料体験あり。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place、スタジオBYK、アーバンクラシックは男性も通えます。Rintosull、the SILKは女性専用です。' },
  { question: '短時間で効果的なスタジオは？', answer: 'アーバンクラシックは30分のサーキット形式。予約不要の通い放題で忙しい主婦やビジネスパーソンに人気です。' },
  { question: 'ヨガとピラティスの両方やりたい場合は？', answer: 'Rintosullはプレミアムフリーフルタイム（18,800円）でLAVA等系列のヨガスタジオも全国で利用可能です。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function TamaPlazaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: 'たまプラーザ', url: 'https://pilates-biyori.com/area/tama-plaza/' },
      ]} />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティスたまプラーザおすすめ6選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">たまプラーザ</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="たまプラーザ" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「たまプラーザで人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、たまプラーザエリアでおすすめのピラティススタジオ6選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>たまプラーザでピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験のスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="たまプラーザ" />
        <AreaMarketComparison studios={studios} areaName="たまプラーザ" />

        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">たまプラーザのおすすめピラティススタジオ6選</h2>
            <div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>

        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">たまプラーザのピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜15,070円</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,800円〜</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜1,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              たまプラーザは東急田園都市線沿線の人気住宅街。ファミリー層が多く、主婦やワーキングマザーに人気のスタジオが充実しています。近隣の<Link href="/area/aobadai/" className="text-warm-700 underline hover:text-warm-900">青葉台</Link>（1駅）と合わせて比較検討する方も多いです。
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">たまプラーザでスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">田園都市線沿線のスタジオも視野に</h3>
                <p className="text-warm-600 leading-relaxed">たまプラーザから<Link href="/area/aobadai/" className="text-warm-700 underline hover:text-warm-900">青葉台</Link>（1駅）、<Link href="/area/mizonokuchi/" className="text-warm-700 underline hover:text-warm-900">溝の口</Link>方面にもスタジオが充実。通勤路線上のスタジオも検討すると選択肢が広がります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">グループとパーソナルの使い分け</h3>
                <p className="text-warm-600 leading-relaxed">たまプラーザはグループレッスン（Rintosull・the SILK）とパーソナル（スタジオBYK）の両方が充実。初心者はグループで基礎を学び、慣れたらパーソナルで効果を高めるのもおすすめ。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件を確認</h3>
                <p className="text-warm-600 leading-relaxed">入会金無料や初月割引のキャンペーンには最低継続期間が設定されている場合があります。Rintosullは施設使用料2,500円が別途必要な点も確認しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">子育て中の方は時間帯を確認</h3>
                <p className="text-warm-600 leading-relaxed">たまプラーザは子育て世代が多いエリア。午前中のレッスン枠が人気で埋まりやすい傾向があります。アーバンクラシックは予約不要なので好きな時間に通えて便利。</p>
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>：the SILKは無料貸出あり。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600"><strong>たまプラーザエリアの豆知識：</strong>たまプラーザは「たまプラーザテラス」をはじめとした商業施設が充実。レッスン後のショッピングやカフェタイムも楽しめます。子育て世代に人気のエリアなので、ママ友同士で通う方も多いです。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下で通えるスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• アーバンクラシック（通い放題 9,680円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">個別指導で確実に効果を。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• スタジオBYK（1回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（プライベート9,900円〜）</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">コスパ重視。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                  <li>• アーバンクラシック（9,680円〜/通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">大手チェーンの充実レッスン。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（12,980円〜）</li>
                  <li>• zen place（14,960円〜/通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 18,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題・パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">毎日通いたい方・個別指導。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK Full（20,680円）</li>
                  <li>• Rintosull プレミアム（18,800円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">たまプラーザの料金相場はグループ月4回で8,800円〜15,070円。通い放題は9,680円〜。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">the SILK・Rintosullは無料体験。zen placeは1,000円で体験可能。まずは2-3スタジオ比較がおすすめ。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">たまプラーザは東急田園都市線の利便性が高く、ほとんどのスタジオが駅から徒歩5分圏内です。</p></div>
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
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回はたまプラーザエリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">この記事ではたまプラーザにあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜1,000円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="tama-plaza" areaName="たまプラーザ" />

      <RelatedAreas currentSlug="tama-plaza" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
