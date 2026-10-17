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
  alternates: { canonical: 'https://biyori-pilates.com/area/sakae/' },
  title: '【2026年10月最新】ピラティス栄おすすめ5選人気スタジオの料金プランの比較',
  description: '栄エリアのおすすめピラティススタジオ5選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,栄,名古屋,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'メルメイク 伏見店【マシンピラティス】',
    officialUrl: 'https://mermake.co.jp/fusimi-pilates/',
    image: '/images/studios/mermake.webp',
    price: '月謝制（50分）プライベート2 17,300円／プライベート4 33,000円／プライベート6 47,100円（税込）',
    trial: '体験レッスン（50分）5,500円（税込・当日入会で無料）',
    features: ['マシンピラティス', '完全個室・パーソナル（マンツーマン）', '24時間営業', 'ウェア・タオル無料レンタル', '水素水飲み放題', '地下鉄東山線・鶴舞線「伏見駅」E出口徒歩30秒／「栄駅」徒歩7分'],
    description: '完全個室のパーソナルジム＆マシンピラティスを展開するメルメイクの伏見店です。完全個室のマンツーマン指導、24時間営業、ウェア・タオル無料レンタル、セッション中の水素水飲み放題、管理栄養士監修の食事アドバイス付きです。ダイエット・ボディメイク・姿勢矯正（反り腰・巻き肩・猫背・骨盤矯正）に対応します。',
    access: '地下鉄東山線・鶴舞線「伏見駅」E出口徒歩30秒／「栄駅」徒歩7分',
    address: '〒460-0003 愛知県名古屋市中区錦2丁目13-31 H-2 VIVACE',
    popularPlan: { name: 'プライベート4（月4回・50分）', description: '完全個室のパーソナルマシンピラティスを月4回のペースで継続したい方向けの人気プランです。姿勢矯正・インナーマッスル強化を中心に一人ひとりに合わせて指導します。', price: '月額 33,000円（税込・1回あたり8,250円）' },
    options: ['体験レッスン（50分）5,500円（当日入会で無料）', '月謝制プライベート2（月2回・50分）17,300円／プライベート6（月6回・50分）47,100円（税込）', '75分月謝制 プライベート2 22,800円／プライベート4 44,000円／プライベート6 63,600円（税込）', '単発（都度）1回50分 9,050円／75分 11,800円（税込）', '入会金・事務手数料 33,000円（カウンセリング時の入会で無料）', 'インストラクター指名料 550円（税込）'],
    userProfile: { ageRange: '男女・年代問わず利用可', genderRatio: '男女利用可', purpose: ['ダイエット・ボディメイク', '姿勢矯正（反り腰・巻き肩・猫背）', '骨盤矯正', 'マシンピラティス'] },
    basicInfo: { hours: '24時間営業（電話受付 平日10:00〜19:00）', closed: '年中無休', facilities: ['マシンピラティス', '完全個室', 'シャワー・更衣スペース', 'ウェア・タオル無料レンタル', '水素水'] },
  },

  {
    name: 'zen place pilates 栄',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '1回約2,125円〜',
    trial: '体験レッスン 3,300円',
    features: ['マット&マシン', '初心者歓迎', '栄駅近', '全国展開'],
    description: '全国展開の大手ピラティススタジオです。名古屋市栄エリアに展開しています。マットピラティスからマシンピラティスまで豊富なレッスンメニューを用意しています。1回あたり約2,125円〜とリーズナブルな価格設定です。地下鉄東山線・名城線「栄駅」から好アクセスです。経験豊富なエデュケーターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '地下鉄東山線・名城線「栄駅」徒歩圏内',
    address: '愛知県名古屋市中区栄2丁目4-12 TOSHIN HONMACHIビル 5階',
    popularPlan: { name: 'フリープラン', description: 'マット・マシンどちらも受講可能な人気プランです。栄の中心に位置し、通いやすい立地です。', price: '1回約2,125円〜（税込）' },
    options: ['マットグループレッスン', 'マシングループレッスン', 'プライベートレッスン（1回 9,900円〜）', 'ウェアレンタル（月額 2,200円）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'] },
  },
  {
    name: 'ピラティスK 久屋大通パーク店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '1回約3,355円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシンピラティス専門', '体験無料', '久屋大通パーク'],
    description: '女性専用のマシンピラティス専門スタジオです。久屋大通パーク沿いに位置し、栄エリアからもアクセス良好です。体験レッスンが0円で気軽にスタートできるのが魅力です。最新のリフォーマーマシンを完備し、初心者から経験者まで個人のペースに合わせたプログラムを提供しています。',
    access: '地下鉄名城線「久屋大通駅」徒歩圏内 / 栄駅からも徒歩圏内',
    address: '愛知県名古屋市中区（久屋大通パーク周辺）',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回のマシンピラティスレッスンです。女性専用のため安心して通えます。', price: '月4回 13,420円〜（税込）' },
    options: ['マンスリー4メンバー（月4回）', 'マンスリーフルメンバー（通い放題）', '追加レッスンチケット', 'ウェア・タオルレンタル'],
    userProfile: { ageRange: '20代〜40代が中心（全体の85%）', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス発散'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'] },
  },
  {
    name: 'Rintosull 栄店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', '割安', 'LAVA系列'],
    description: '女性専用のマシンピラティススタジオです。ホットヨガLAVA系列が手がけるブランドで、運営面の信頼性があります。月4回8,800円〜という手頃な価格設定が魅力です。栄駅から徒歩圏内で通いやすく、初心者にもおすすめです。リフォーマーを使った本格的なマシンピラティスが気軽に始められます。',
    access: '地下鉄東山線・名城線「栄駅」徒歩圏内',
    address: '愛知県名古屋市中区錦3-24-4 サンシャインサカエ4F',
    popularPlan: { name: '月4回プラン', description: 'マシンピラティス月4回です。割安な人気プランです。', price: '月4回 8,800円〜（税込）' },
    options: ['月4回プラン（8,800円〜）', '通い放題プラン', '追加レッスンチケット'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動習慣づくり'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜19:00', closed: '不定休', facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'] },
  },
  {
    name: 'Pilates Mee 名古屋栄店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'パーソナル料金',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: 'パーソナルマシンピラティス専門スタジオです。名古屋栄エリアに展開しています。一人ひとりの体型・目標に合わせたオーダーメイドのマシンピラティスレッスンを提供しています。完全マンツーマン指導で初心者でも安心です。姿勢改善やボディメイクを効率的に目指せます。',
    access: '丸の内駅 徒歩5分／久屋大通駅 徒歩8分',
    address: '〒460-0002 愛知県名古屋市中区丸の内3丁目23-6 丸の内セントラルハイツ 401号室',
    popularPlan: { name: 'パーソナルコース', description: '完全マンツーマンのマシンピラティスです。オーダーメイドプログラムです。', price: 'お問い合わせください' },
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', 'ボディメイク', '肩こり腰痛改善', '体幹強化'] },
    basicInfo: { hours: '9:00〜21:15', closed: '不定休', facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。栄エリアのピラティススタジオは初心者歓迎のスタジオがほとんどです。経験豊富なインストラクターが基礎から丁寧に指導してくれます。zen place pilatesは体験3,300円、ピラティスKは体験0円で気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。栄エリアではピラティスK、Rintosull、Pilates Meeがマシン専門です。' },
  { question: '栄エリアの料金相場は？', answer: 'グループレッスンは月4回8,800円〜13,420円程度です。zen place pilatesは1回約2,125円〜、Rintosullは月4回8,800円〜とリーズナブルです。パーソナルレッスンは1回8,000円〜が相場です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回が目安です。継続が大切です。' },
  { question: 'ピラティスで痩せますか？', answer: '基礎代謝が上がり、太りにくい体質づくりにつながります。最低2〜3ヶ月は継続することをおすすめします。食事管理を並行すると、より効果的です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。マットやタオルは、スタジオでレンタルできる場合が一般的です。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹（コア）強化に特化、ヨガは柔軟性とリラックスが中心です。目的に合わせてお選びください。' },
  { question: '肩こりや腰痛は改善しますか？', answer: '姿勢の改善により、肩こりや腰痛の原因へのアプローチが期待できます。デスクワークが多い方にもおすすめです。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。継続が何より大切です。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく短期集中に向いています。グループは安く楽しく続けられます。栄エリアではPilates Meeがパーソナル専門、ピラティスKやRintosullがグループ対応です。' },
]

export default function SakaePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '栄', url: 'https://biyori-pilates.com/area/sakae/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス栄おすすめ5選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">栄</span></nav></div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">本ページでは、栄エリアでおすすめのピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>栄・久屋大通でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが安いスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>名古屋最大の商業エリアで通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="栄" />
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">栄エリアのおすすめピラティススタジオ5選</h2>
            <div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              栄のピラティス料金相場
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
                    <td className="px-4 py-3">2,125円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,800円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">3,300円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              栄は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の名古屋駅エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              栄でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">地下鉄東山線・名城線「栄駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  栄エリアのスタジオは栄駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。栄駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  栄は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  栄エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  栄エリアだけでなく、近隣の<Link href="/area/nagoya-station/" className="text-warm-700 underline hover:text-warm-900">名古屋駅</Link>、<Link href="/area/nagoya/" className="text-warm-700 underline hover:text-warm-900">名古屋</Link>、<Link href="/area/kanazawa/" className="text-warm-700 underline hover:text-warm-900">金沢</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>栄エリアの豆知識：</strong>栄は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                <p className="text-warm-600 text-sm mb-4">月額1万円以下で始められるスタジオもあります。体験0円のスタジオもあります。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 栄店（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates 栄（1回約2,125円〜）</li>
                  <li className="text-warm-700">• ピラティスK（体験0円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの空間で安心してトレーニングに集中できます。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 久屋大通パーク店</li>
                  <li className="text-warm-700">• Rintosull 栄店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル・マンツーマン</h3>
                <p className="text-warm-600 text-sm mb-4">一人ひとりに合わせた指導で効果を最大化です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee 名古屋栄店</li>
                  <li className="text-warm-700">• zen place pilates 栄（プライベート対応）</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1〜2回からスタートがおすすめです。最低2〜3ヶ月の継続で効果を実感される方が多くなっています。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続するのが理想です。</p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">グループレッスンが中心です。リーズナブルに始めたい方におすすめです。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull 栄店（8,800円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備の大手スタジオです。グループレッスンの定番価格帯です。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 栄</li>
                  <li>• ピラティスK 久屋大通パーク店</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">パーソナルレッスンです。短期集中で成果を目指したい方向けです。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee 名古屋栄店</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化、肩こり腰痛改善など、目的に応じてスタジオをお選びください。パーソナルであれば短期集中、グループであれば楽しく継続できる点が特長です。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">栄エリアの料金相場はグループ月4回で8,800円〜13,420円程度です。パーソナルは1回8,000円〜が目安です。無理なく継続できる予算を決めることをおすすめします。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。ピラティスKは体験0円、zen placeは3,300円で体験可能です。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">栄は名古屋市の中心繁華街で、地下鉄東山線・名城線「栄駅」が利用可能です。名古屋最大の商業エリアなので、三越・パルコ・ラシックでの買い物やオアシス21の散策ついでにも通えて便利です。</p></div>
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
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は栄エリアのおすすめピラティススタジオ5選をご紹介しました。</p>
            <p className="text-warm-600 leading-relaxed mb-6">栄は名古屋市の中心繁華街で、地下鉄東山線・名城線「栄駅」から好アクセスです。名古屋最大の商業エリアなので、買い物や食事ついでに通えるのが魅力です。料金重視ならRintosull（月4回8,800円〜）、体験無料で始めたいならピラティスK、マット&マシン両方ならzen place、パーソナルならPilates Meeと、目的に合わせて選べます。</p>
            <p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p>
            <p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p>
          </div>
        </section>
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">体験レッスン無料〜3,300円です。<br />まずは体験レッスンへの参加をおすすめします。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/yagoto/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">八事</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="sakae" areaName="栄" />

      <RelatedAreas currentSlug="sakae" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
