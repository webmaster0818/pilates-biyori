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
  alternates: { canonical: 'https://biyori-pilates.com/area/daikanyama/' },
  title: '【2026年8月最新】代官山のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '代官山エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,代官山,中目黒,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'BREST PILATES & BODYMAKE 代官山',
    officialUrl: 'https://t.felmat.net/fmcl?ak=C11549B.1.Z1597059.U1357808',
    image: '/images/studios/brest.webp',
    price: '月4回 22,880円〜（パーソナル）',
    trial: '体験レッスンあり（詳細は公式サイト参照）',
    features: ['マシンピラティス', 'ウェイトトレーニング', 'パーソナル', '約30分集中'],
    description: 'マシンピラティスとウェイトトレーニングを組み合わせたパーソナルスタジオ。インナーマッスルとアウターマッスルの両方にアプローチし、約30分の効率的なセッションでボディメイクを目指せます。全国展開のURBAN CLASSIC PILATESの姉妹ブランドで、初心者にもトレーナーが丁寧に対応。代官山エリアの店舗です。',
    access: '代官山エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
    popularPlan: {
      name: 'Personal M4（月4回）',
      description: 'マシンピラティス×ウェイトのパーソナル。月4回で習慣化しやすいプラン。',
      price: '月4回 22,880円（税込）',
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシンピラティス', 'パーソナル', '更衣室', 'ウェイトエリア'],
    },
  },
  {
    name: 'CLUB PILATES 代官山店',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '15種類の器具', '代官山駅徒歩1分', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。代官山駅から徒歩1分の好立地。最大12名の少人数制グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を1人1台完備。資格保持インストラクターのみ在籍し、初級から上級まで多様なクラスを提供。男性も受講可能。',
    access: '東急東横線「代官山駅」徒歩1分',
    address: '東京都渋谷区恵比寿西1-35-17 JMFビル代官山02 B1F',
    popularPlan: { name: 'グループ月4回プラン', description: '15種類の器具を使った本格グループレッスン。初級〜上級まで多彩なクラスから選択可能。', price: '月4回 14,190円（税込）' },
    options: ['月8回プラン（26,290円）', '通い放題プラン（40,590円）', '入会金 5,500円（キャンペーン時無料）', '無料イントロクラス（30分）'],
    userProfile: { ageRange: '20代〜50代が中心（全体の75%）', genderRatio: '女性80% / 男性20%', purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'] },
    basicInfo: { hours: '月〜金 7:00-21:00 / 土 7:00-16:00 / 日 8:00-17:30', closed: '不定休', facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'] },
  },
  {
    name: 'zen place pilates 代官山',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月額 10,450円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性OK', '代官山駅徒歩4分', '全国相互利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオ。代官山駅北口から徒歩4分。2021年9月オープンのプライベートレッスン専門スタジオ。マットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式。男性も受講可能。',
    access: '東急東横線「代官山駅」北口 徒歩4分',
    address: '東京都渋谷区代官山町15-9 代官山センタービル 4F',
    popularPlan: { name: 'マットグループフリー', description: 'マットピラティスのグループレッスン通い放題。全国のzen placeスタジオで相互利用可能。', price: '月額 10,450円〜（税込）' },
    options: ['リフォーマーグループ月4回（月額15,400円）', 'リフォーマーグループ月8回（月額25,300円）', 'プライベート月4回（月額33,880円〜）', '入会金 22,000円（体験当日入会で無料）'],
    userProfile: { ageRange: '30代〜50代が中心（全体の75%）', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'] },
    basicInfo: { hours: '平日 8:15〜21:10 / 土日祝 7:20〜15:55', closed: '不定休', facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'] },
  },
  {
    name: 'the SILK 中目黒店',
    image: '/images/studios/the-silk.webp',
    price: '月3回 13,280円〜',
    trial: '体験レッスン 0円（50分・手ぶらOK）',
    features: ['女性専用', 'マシン専門', '中目黒駅徒歩3分', 'PMA監修'],
    description: '女性専用マシンピラティス専門スタジオ。中目黒駅から徒歩3分、代官山エリアからも好アクセス。PMA加盟団体のプロが監修したレッスン。プロフェッショナルグレードのリフォーマーマシンを使用し、音楽に合わせた50分のグループレッスンで楽しくボディメイク。初心者が80%で安心。',
    access: '東急東横線・日比谷線「中目黒駅」徒歩3分',
    address: '東京都目黒区上目黒1丁目18-6 NMビル 4階',
    popularPlan: { name: 'Standard4（月4回）', description: '月4回の標準プラン。PMA監修のプロフェッショナルグレードリフォーマーレッスン。', price: '月4回 15,280円（税込）+ 施設利用料700円' },
    options: ['Light3（月3回 13,280円）', 'Full Day（平日デイタイム無制限 19,280円）', 'Full（無制限 22,280円）', 'レンタル（ウェア・タオル・ソックスあり）'],
    userProfile: { ageRange: '20代〜40代が中心（全体の80%）', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'] },
    basicInfo: { hours: '8:00〜21:00', closed: '年末年始（12/29〜1/3）', facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム（アイロン・ドライヤー完備）', 'ウォーターサービス', 'レンタルウェア・タオル・ソックス'] },
  },
  {
    name: 'ピラティスミラー 中目黒',
    image: '/images/studios/pilates-mirror.webp',
    price: '月会費 11,000円（月6回）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', 'マシン専門', '中目黒', '月6回制'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。中目黒エリアに位置し、代官山からも好アクセス。月会費11,000円で月6回まで通えるコスパの良いプラン。プライベートレッスンも30分4,400円からとリーズナブル。大手運営ならではの安心感と清潔な施設が魅力。',
    access: '中目黒エリア / 代官山からもアクセス可',
    address: '東京都目黒区青葉台1丁目14-4 CONTRAL nakameguro',
    popularPlan: { name: '月会費プラン（月6回）', description: 'マシンピラティス月6回まで。コナミ運営の安心感。', price: '月会費 11,000円（税込）' },
    options: ['入会金 11,000円', 'プライベートレッスン30分（4,400円）', 'プライベートレッスン50分（6,600円）', '体験レッスン（2,200円）'],
    userProfile: { ageRange: '20代〜50代が中心（全体の75%）', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土 8:00〜18:00 / 日 8:00〜19:00', closed: '毎週木曜日', facilities: ['リフォーマーマシン', 'ミラー設備', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Pilates en Rose（ピラティスアンローズ）',
    image: '/images/studios/pilates-en-rose.webp',
    price: '回数制（入会金・月会費不要）',
    trial: '体験レッスン 5,500円',
    features: ['完全パーソナル', '回数制', '代官山駅徒歩2分', 'マタニティ対応'],
    description: 'マシンピラティスプライベート専門スタジオ。代官山駅から徒歩2分、恵比寿駅からも徒歩10分。入会金・月会費不要の回数制を採用し、気軽に始められて無理なく続けられる。姿勢改善、腰痛改善、マタニティなど、クライアントの悩みに沿ったパーソナルセッションを提供。アットホームで通いやすい価格帯が特徴。',
    access: '代官山駅 徒歩2分 / JR恵比寿駅 徒歩10分',
    address: '東京都渋谷区恵比寿西1-33-3 光雲閣 406/610',
    popularPlan: { name: 'パーソナルセッション', description: '完全マンツーマンのマシンピラティス。悩みに合わせたオーダーメイドプログラム。', price: '回数制（詳細は公式サイト参照）' },
    options: ['入会金・月会費不要', '回数制（都度払い可能）', '体験レッスン（5,500円）', 'マタニティピラティス対応'],
    userProfile: { ageRange: '20代〜40代が中心（全体の80%）', genderRatio: '女性90% / 男性10%', purpose: ['姿勢改善', '腰痛改善', 'マタニティ', 'ボディメイク'] },
    basicInfo: { hours: '月〜日 7:00〜21:00', closed: '不定休', facilities: ['リフォーマー', 'マシンピラティス器具', '完全プライベート空間', '更衣室'] },
  },
  {
    name: 'ピラティスラボ 代官山',
    image: '/images/studios/pilates-lab-daikanyama.webp',
    price: '1回 11,000円〜（55分）',
    trial: '体験レッスンあり',
    features: ['クリニック併設', '完全パーソナル', '代官山', 'ランク制料金'],
    description: '医療法人明和会 整形外科スポーツ・栄養クリニック併設のピラティススタジオ。医療的な知識に基づいた質の高いプライベートレッスンを提供。インストラクターのランク（S・A・N）に応じた料金制で、1回11,000円（55分）から。福岡にも店舗を展開。',
    access: '代官山エリア',
    address: '東京都渋谷区恵比寿西2-21-4 代官山パークスビル 3F',
    popularPlan: { name: 'プライベートセッション（Nランク）', description: 'クリニック併設の本格プライベートピラティス55分。', price: '1回 11,000円（税込・ビジター）' },
    options: ['Sランク プライベート（18,700円）', 'Aランク プライベート（15,400円）', 'Nランク プライベート（11,000円）', 'セミプライベートあり'],
    userProfile: { ageRange: '30代〜50代が中心（全体の70%）', genderRatio: '女性75% / 男性25%', purpose: ['リハビリ', '姿勢改善', 'パフォーマンス向上', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', 'クリニック併設'] },
  },
  {
    name: 'BDC PILATES 恵比寿スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    price: '月4回 11,220円〜',
    trial: '体験レッスン 0円',
    features: ['日本初マシン専門', '恵比寿', '認定講師', 'グループ&プライベート'],
    description: '日本初のマシンピラティス専門スタジオの恵比寿店。代官山からも徒歩圏内。認定指導資格を保有した講師によるグループレッスンとプライベートレッスンの両方を提供。ダンサーやアスリートも通う質の高いレッスンが特徴。',
    access: '恵比寿駅周辺 / 代官山からも徒歩圏内',
    address: '東京都渋谷区恵比寿エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '4メンバー（月4回）', description: '月4回のグループレッスン。認定講師による本格マシンピラティス。', price: '月4回 11,220〜13,420円（税込）' },
    options: ['8メンバー（月8回 15,070〜16,170円）', 'デイメンバー（12,320〜14,520円）', 'プレミアムメンバー（17,820〜18,920円）', '追加受講（1回 2,200円）'],
    userProfile: { ageRange: '20代〜40代が中心（全体の80%）', genderRatio: '女性85% / 男性15%', purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', '体幹強化'] },
    basicInfo: { hours: '平日 10:00〜20:00 / 土日 10:00〜17:00', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室', 'ロッカー'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！代官山エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。CLUB PILATESはレベル分けがあり、the SILKは初心者が80%。BDC PILATESとピラティスKは体験レッスンが0円なので気軽に始められますよ。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。代官山エリアではマシン専門スタジオが充実しています。' },
  { question: '代官山のピラティススタジオの料金相場は？', answer: '代官山エリアの料金相場は、グループレッスン月4回で10,000円〜15,000円程度。BDC PILATESは月4回11,220円からとリーズナブル。パーソナルは1回5,500円〜18,700円と幅があります。体験レッスンは無料〜5,500円。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが理想です。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '基本的に動きやすい服装と飲み物があればOK。the SILKは手ぶらOKの無料体験、BDC PILATESも0円で体験できます。各スタジオの案内を確認してくださいね。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。' },
  { question: 'ピラティスで肩こりや腰痛は改善しますか？', answer: 'はい、改善が期待できます。ピラティスラボ代官山はクリニック併設で医療的なアプローチも可能。Pilates en Roseは腰痛改善に特化したセッションも提供しています。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。' },
  { question: 'パーソナルとグループ、どちらがおすすめですか？', answer: 'それぞれ良さがあります。パーソナルはピラティスラボやPilates en Roseで一人ひとりに合わせた指導を受けられます。グループはCLUB PILATESやBDC PILATESなら月4回11,220円から。まずは体験で両方試してみるのがいいですよ。' },
]

export default function DaikanyamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '代官山', url: 'https://pilates-biyori.com/area/daikanyama/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月21日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス代官山おすすめ7選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">代官山</span>
            </nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「代官山で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、代官山・中目黒エリアでおすすめのピラティススタジオ7選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>代官山・中目黒でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが安いスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>おしゃれな街で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="代官山" />
        <AreaMarketComparison studios={studios} areaName="代官山" />
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">代官山のおすすめピラティススタジオ7選</h2>
            <div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              代官山のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜15,280円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 11,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜5,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              代官山は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の恵比寿エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              代官山でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東急東横線「代官山駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  代官山エリアのスタジオは代官山駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。代官山駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  代官山は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  代官山エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  代官山エリアだけでなく、近隣の<Link href="/area/ebisu/" className="text-warm-700 underline hover:text-warm-900">恵比寿</Link>、<Link href="/area/nakameguro/" className="text-warm-700 underline hover:text-warm-900">中目黒</Link>、<Link href="/area/shibuya/" className="text-warm-700 underline hover:text-warm-900">渋谷</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>代官山エリアの豆知識：</strong>代官山は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円前後で通えるスタジオ。体験レッスン無料も。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月額10,450円〜）</li>
                  <li className="text-warm-700">• BDC PILATES（月4回 11,220円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">完全マンツーマンで質の高いレッスンを受けたい方に。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスラボ（クリニック併設）</li>
                  <li className="text-warm-700">• Pilates en Rose（回数制・入会金不要）</li>
                  <li className="text-warm-700">• zen place プライベート</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">代官山駅・中目黒駅から徒歩5分以内。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（代官山駅 徒歩1分）</li>
                  <li className="text-warm-700">• Pilates en Rose（代官山駅 徒歩2分）</li>
                  <li className="text-warm-700">• the SILK（中目黒駅 徒歩3分）</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回（月8-12回）がおすすめ。3-6ヶ月継続すると目に見える変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回（月4回）のペースで継続するのがおすすめ。自分のペースで楽しく通えるのが一番ですよ。</p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">グループレッスン中心。体験無料も。</p>
                <ul className="text-sm text-warm-700 space-y-1"><li>• zen place pilates（10,450円〜）</li><li>• BDC PILATES（11,220円〜）</li><li>• ピラティスミラー（11,000円/月6回）</li></ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備のスタジオ。女性専用も充実。</p>
                <ul className="text-sm text-warm-700 space-y-1"><li>• the SILK（13,280円〜）</li><li>• CLUB PILATES（14,190円〜）</li><li>• zen place リフォーマー（15,400円〜）</li></ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">完全プライベート。短期集中で結果を出したい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1"><li>• ピラティスラボ（11,000円〜/回）</li><li>• zen place プライベート（33,880円〜）</li></ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化、美容など、目的によって最適なスタジオは変わります。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">代官山エリアの料金相場はグループ月4回で10,000円〜15,000円程度。入会金やレンタル料も確認しましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">BDC PILATESとthe SILKは無料体験、CLUB PILATESは30分の無料イントロクラスを実施。気軽に試してみましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">代官山は東急東横線で渋谷・中目黒から1駅。CLUB PILATESは駅徒歩1分、Pilates en Roseは徒歩2分と駅近スタジオが充実しています。</p></div>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は代官山のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">この記事では代官山に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p>
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
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="daikanyama" areaName="代官山" />

                  {/* g1-link-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands/club-pilates-daikanyama/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">CLUB PILATES 代官山店の料金・体験を見る</Link>
              </div>
            </div>
      <RelatedAreas currentSlug="daikanyama" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
