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
import { STUDIO_REVIEWS } from '@/data/studio-reviews'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/kumamoto/' },
  title: 'ピラティス熊本おすすめ4選｜リントスル ゆめタウンサンピアン店の口コミ・料金とゆめタウン光の森・荒尾のピラティスK',
  description: '熊本エリアのおすすめピラティススタジオ4選を料金・体験レッスンで比較。熊本のゆめタウンにあるRintosull（リントスル）ゆめタウンサンピアン店の料金（月4回8,800円〜）・口コミ・アクセスも公式で確認して掲載しています。',
  keywords: 'ピラティス,熊本,熊本市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 熊本駅前店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=73546',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 13,090円／月8回 24,090円／通い放題 37,290円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 無料（30分）',
    features: ['世界最大級', '15種類の器具', '男性利用可', '4段階レベル分け'],
    description: '世界最大級のマシンピラティスブランドです。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備しています。8つのプログラムと4段階のレベル分けです。高強度・有酸素運動クラスもあります。',
    access: 'JR「熊本駅」周辺',
    address: '熊本県熊本市熊本駅前エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスンです。4段階のレベル分けで安心です。',
      price: '月4回 13,090円（税表記なし）',
    },
    options: ['月8回 24,090円', '通い放題 37,290円', '入会金 5,500円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'ダイエット'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'ピラティスK 熊本店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '音楽レッスン', '5パート別ボディメイク'],
    description: '女性専用のマシンピラティス専門スタジオです。音楽に合わせたリフォーマーレッスンで楽しく続けられます。5パート別ボディメイクプログラムで部位ごとに集中トレーニングです。体験0円です。',
    access: '市電「通町筋」電停 徒歩1分（駐車場なし）',
    address: '熊本県熊本市中央区上通町1番22号 大進プラザビル5階',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '女性専用マシンピラティス月4回です。音楽に合わせた楽しいレッスンです。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '体験レッスン 0円',
      '5パート別ボディメイクプログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'くびれ作り'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '月曜日（公式店舗ページ・2026年10月26日確認）',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull ゆめタウンサンピアン店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円〜',
    // 2026-10-25 公式店舗ページ https://rintosull.jp/shop/kumamoto/sanpian/ で照合（旧: 不定休・シャワーあり・ゆめタウンサンピアン内のみ → 公式値に修正）
    trial: '体験会 0円（約45分・手ぶらで参加可）',
    features: ['LAVA系列', '女性専用', '初心者87%以上', '熊本エリア'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオです。ゆめタウンサンピアン内で買い物ついでに通えます。月4回8,800円のリーズナブルな料金です。無料体験でパーソナル姿勢診断付きです。初心者87%以上です。',
    access: 'ゆめタウンサンピアン2F（桜町バスターミナル25番のりば K5-1「光の森産交行き」で「ゆめタウンサンピアン前」下車／無料駐車場・駐輪場あり）',
    address: '〒861-8010 熊本県熊本市東区上南部2-2-2 ゆめタウンサンピアン2F',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使った本格マシンピラティスです。1回あたり2,200円と割安です。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '施設使用料あり',
      '無料体験・パーソナル姿勢診断付き',
    ],
    userProfile: {
      ageRange: '公式サイトに記載なし',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式の店舗ページに記載なし（レッスンスケジュールPDFで確認できます）',
      closed: '毎週日曜',
      facilities: ['水素水サーバー', 'ドライヤー付きパウダースペース', '更衣室', '鍵付きロッカー'],
    },
  },
  {
    name: 'STUDIO IVY 熊本大江店',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', '完全プライベート空間', 'オーダーメイド', '月2回から'],
    description: '完全パーソナルのマシンピラティススタジオです。完全プライベート空間で一人ひとりの体に合わせたオーダーメイドレッスンです。月2回15,000円から始められます。',
    access: '熊本市中央区大江エリア',
    address: '熊本県熊本市中央区大江エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナル月2回プラン',
      description: '完全プライベート空間でのオーダーメイドマシンピラティスです。',
      price: '月2回 15,000円（税込）',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      '体験レッスン（4,500円）',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'プライベートルーム', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。熊本エリアのスタジオはほとんどが初心者歓迎です。Rintosullは初心者87%以上、CLUB PILATESは4段階のレベル分けです。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。',
  },
  {
    question: '熊本のピラティスの料金相場は？',
    answer: 'Rintosullは月4回8,800円です。ピラティスKは月4回13,420円です。CLUB PILATESは月4回 13,090円です。パーソナルはSTUDIO IVYが月2回15,000円〜です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。ピラティスKは5パート別ボディメイクでダイエットに効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。CLUB PILATESとRintosullは無料体験を実施しています。ピラティスKも体験0円です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'CLUB PILATES熊本駅前とSTUDIO IVY熊本大江は男性も通えます。ピラティスK・Rintosullは女性専用です。',
  },
  {
    question: '一番安いスタジオは？',
    answer: 'グループレッスンではRintosullが月4回8,800円で最安です。',
  },
  {
    question: 'パーソナルレッスンを受けたい場合は？',
    answer: 'STUDIO IVY（月2回15,000円〜）は完全プライベート空間です。CLUB PILATESもプライベートレッスンがあります。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function KumamotoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '熊本', url: 'https://biyori-pilates.com/area/kumamoto/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス熊本おすすめ4選<br className="hidden md:block" />
              人気スタジオの料金プランの比較
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
              <span className="text-warm-600">熊本</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="熊本" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、熊本エリアでおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>熊本でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金を抑えられるスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>パーソナルレッスンを受けたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="熊本" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              熊本のおすすめピラティススタジオ4選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        {/* 2026-10-25: 「リントスル 熊本ゆめタウン」16.5位の受け皿。値は公式店舗ページ（2026-10-25確認）と data/studio-reviews.ts の Google 要約のみ */}
        <section className="py-16 bg-white" id="rintosull-yumetown">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">熊本のゆめタウンにあるリントスル（Rintosull ゆめタウンサンピアン店）</h2>
            <p className="text-warm-600 leading-relaxed mb-6 text-sm">熊本県の Rintosull（リントスル）は、公式の店舗一覧ではゆめタウンサンピアン店（熊本市東区・ゆめタウンサンピアン2F）の1店舗です（2026年10月25日時点）。女性専用のマシンピラティススタジオで、無料の駐車場・駐輪場があります。料金・定休日・設備は<a href="https://rintosull.jp/shop/kumamoto/sanpian/" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-800">公式の店舗ページ</a>の表記です（2026年10月25日確認・税込）。</p>
            <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">項目</th><th className="px-4 py-3 text-left">内容</th></tr></thead><tbody>
              <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">4・フルタイム（当店・月4回）</td><td className="px-4 py-3">月8,800円</td></tr>
              <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ライト・フルタイム（当店＋1店舗・通い放題）</td><td className="px-4 py-3">月13,800円</td></tr>
              <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">プレミアム フリー・フルタイム（系列全店・通い放題）</td><td className="px-4 py-3">月16,800円（同じモール内の LAVA ゆめタウンサンピアン店なども利用可。利用可能状況は店舗により異なります）</td></tr>
              <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">そのほかの費用</td><td className="px-4 py-3">運営管理費 月680円／1回券 3,300円／他店舗利用料 1回500円／入会時に施設使用料2,500円・入会金5,000円・登録金5,000円（体験当日入会・キャンペーン入会の場合は入会金・登録金0円）</td></tr>
              <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験会</td><td className="px-4 py-3">0円・約45分（施設見学・カウンセリング・マシンピラティスのプチ体験）。手ぶらで参加でき、来店特典としてパーソナル姿勢診断つき</td></tr>
              <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">定休日／種別</td><td className="px-4 py-3">毎週日曜／女性専用（営業時間は公式の店舗ページに記載がなく、レッスンスケジュールPDFで確認できます）</td></tr>
              <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">アクセス</td><td className="px-4 py-3">桜町バスターミナル25番のりば K5-1「光の森産交行き」で「ゆめタウンサンピアン前」下車。車は熊本東バイパス経由（無料駐車場あり）</td></tr>
            </tbody></table></div>
            <p className="text-warm-600 text-sm leading-relaxed mb-8">2026年11月末までのキャンペーンでは、条件を満たす方は利用開始月を含む3ヶ月間、系列全店通い放題（16,800円/月）が1,980円/月になります。公式の適用条件では、特別価格終了後12ヶ月間の継続が条件です。体験会に参加する前に、公式の適用条件をご確認ください。</p>
            <h3 className="text-lg font-bold text-warm-900 mb-3">公式の店舗ページに掲載されている口コミ（原文の一部を引用）</h3>
            <ul className="space-y-3 mb-3">
              <li className="bg-warm-50 border border-warm-200 rounded-lg p-4 text-sm text-warm-700">「週に4日ほど通って、食事制限せずに体重が8キロ減り、ウエストがスッキリした上、ヒップアップしました。」「坐骨神経痛もほとんど出なくなり、体力もつき疲れにくくなりました。」<span className="block text-xs text-warm-500 mt-1">2026年5月25日掲載</span></li>
              <li className="bg-warm-50 border border-warm-200 rounded-lg p-4 text-sm text-warm-700">「長女が楽しそうに通ってるのを見ていて、また体の変化も目に見えて分かるのが羨ましすぎて始めました。」<span className="block text-xs text-warm-500 mt-1">2026年4月18日掲載</span></li>
              <li className="bg-warm-50 border border-warm-200 rounded-lg p-4 text-sm text-warm-700">「キャンペーン中に加入すると2年縛りがあります。クーリングオフ制度が利用できません。」（★3の声）<span className="block text-xs text-warm-500 mt-1">2026年6月16日掲載</span></li>
            </ul>
            <p className="text-[11px] text-warm-500 mb-8">出典：<a href="https://rintosull.jp/shop/kumamoto/sanpian/" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-700">Rintosull ゆめタウンサンピアン店 公式店舗ページ「ゆめタウンサンピアン店の口コミ」</a>（2026年10月25日確認）。公式サイトに掲載された声です。感じ方には個人差があります。</p>
            {(() => { const rev = STUDIO_REVIEWS['Rintosull ゆめタウンサンピアン店']; if (!rev) return null; return (
              <div className="bg-warm-50 border border-warm-200 rounded-lg p-4 mb-6">
                <p className="text-sm font-bold text-warm-800">Googleマップの口コミ（要約）：★{rev.rating}（{rev.userRatings}件）</p>
                <p className="text-sm text-warm-700 mt-2 leading-relaxed">{rev.summary}</p>
                <p className="text-[11px] text-warm-500 mt-2">Googleマップに投稿された口コミをもとに、編集部が要約したものです（{rev.fetchedAt}時点）。口コミ本文は転載していません。 <a href={rev.mapsUri} target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-700">出典：Googleマップの口コミを見る</a></p>
              </div>) })()}
            <h3 className="text-lg font-bold text-warm-900 mb-3">公式の声と Google の口コミの両方に見られる傾向</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-warm-700">
              <li>10か月ほど続けて体重が減り、坐骨神経痛が出なくなったという具体的な変化の声が、公式の店舗ページの口コミと Googleマップの口コミ（要約）の両方にあります。</li>
              <li>家族に勧められて（家族が通っているのを見て）始めたという声が両方に見られます。</li>
              <li>キャンペーン加入時の契約期間・クーリングオフ・体験当日契約の条件に触れた★3の指摘が両方にあります。現在の公式の適用条件（特別価格終了後12ヶ月間の継続）と合わせて、契約前に確認してください。</li>
            </ul>
            <h3 className="text-lg font-bold text-warm-900 mt-10 mb-3" id="yumetown-kumamoto-others">熊本のほかのゆめタウンにあるピラティス（ピラティス K）</h3>
            <p className="text-warm-600 text-sm leading-relaxed mb-4">熊本県内のゆめタウンには、Rintosull のサンピアン店のほかに、女性専用マシンピラティスの ピラティス K が2店あります（公式の店舗ページ・2026年10月26日確認・税込）。どちらも下のカードには載せていない店舗です。店舗ページに載っている利用者の声は銀座・池袋などほかの店舗のもので、両店の口コミではありません。</p>
            <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">店舗（住所）</th><th className="px-4 py-3 text-left">アクセス・駐車場</th><th className="px-4 py-3 text-left">料金（月額）</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">定休日</th></tr></thead><tbody>
              <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">ピラティス K ゆめタウン光の森店（菊陽町光の森7-33-1 南館1階）</td><td className="px-4 py-3">JR光の森駅 北口 徒歩2分／無料駐車場（立体駐車場は22:30以降出庫不可）</td><td className="px-4 py-3">月4回 11,220円・月8回 15,070円・プレミアム 17,820円＋施設維持費 825円（初期費用 13,530円）</td><td className="px-4 py-3">0円</td><td className="px-4 py-3">月曜</td></tr>
              <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ピラティス K ゆめタウン荒尾シティモール店（荒尾市緑ヶ丘1-1-1 2階）</td><td className="px-4 py-3">無料駐車場あり（2026年8月9日オープン）</td><td className="px-4 py-3">同上（月4回 11,220円〜）</td><td className="px-4 py-3">0円</td><td className="px-4 py-3">日曜・月曜</td></tr>
            </tbody></table></div>
            <p className="text-warm-500 text-xs leading-relaxed mb-8">確認元: <a href="https://pilates-k.jp/studio/kumamoto-ken/hikarinomori" target="_blank" rel="noopener noreferrer" className="underline">ピラティスK ゆめタウン光の森店</a>／<a href="https://pilates-k.jp/studio/kumamoto-ken/arao" target="_blank" rel="noopener noreferrer" className="underline">ピラティスK ゆめタウン荒尾シティモール店</a>。市街地の ピラティス K 熊本店（上通町・通町筋 徒歩1分）は月4回 13,420円の料金帯で、ゆめタウン内の2店より高くなります。全国のゆめタウン内ピラティスの料金は<a href="/area/himeji/#yumetown-all" className="underline">姫路のページの早見表</a>にまとめています。</p>
          </div>
        </section>

        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              熊本のピラティス料金相場
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
                    <td className="px-4 py-3">8,800円〜15,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">月2回 15,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              熊本エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。近隣の福岡エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              熊本でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「熊本駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  熊本エリアのスタジオは熊本駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。熊本駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">熊本エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  熊本エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめです。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  熊本エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  熊本エリアだけでなく、近隣の<Link href="/area/fukuoka/" className="text-warm-700 underline hover:text-warm-900">福岡</Link>、<Link href="/area/hakata/" className="text-warm-700 underline hover:text-warm-900">博多</Link>、<Link href="/area/kagoshima/" className="text-warm-700 underline hover:text-warm-900">鹿児島</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。ジーンズやスカートは適していません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。自動販売機がないスタジオもあるため、持参をおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されている場合が一般的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、靴下の着用が必須のスタジオが多数あります。グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは脚を大きく動かすエクササイズが多いため、伸縮性のある素材が適しています。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。手ぶらで体験可能な場合もあるので事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>熊本エリアの豆知識：</strong>熊本は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前にご確認ください。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月4回8,800円〜のスタジオもあります。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで本格指導しています。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全プライベート空間）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（マシン専門）</li>
                  <li className="text-warm-700">• Rintosull（LAVA系列）</li>
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
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜9,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  割安な料金設定です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• CLUB PILATES（月4回 13,090円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">月2回 15,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマンで本格指導しています。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（15,000円〜/月2回）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  熊本はグループ月4回8,800円〜、パーソナル月2回15,000円〜と幅広い価格帯です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESとRintosullは無料体験を実施しています。ピラティスKも体験0円です。まずは体験レッスンで実際の雰囲気をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは熊本駅前です。Rintosullはゆめタウンサンピアン内で買い物ついでに通えます。
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
              本ページでは、熊本エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、熊本にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、ピラティススタジオ選びの参考になれば幸いです。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンのご予約
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜4,500円です。<br />
              まずは体験レッスンへの参加をおすすめします。
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
      <ConsultantSection areaKey="kumamoto" areaName="熊本" />

      <RelatedAreas currentSlug="kumamoto" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
