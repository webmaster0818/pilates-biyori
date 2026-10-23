import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/otemachi/' },
  title: '大手町のピラティスおすすめ5選｜大手町駅からの徒歩分・無料体験・料金で比較',
  description: '大手町駅から通えるピラティススタジオ5社の料金・体験料金・営業時間を、各スタジオの公式ページで確認して比較しています（2026年10月23日確認）。大手町駅からの徒歩分・乗り換えの早見表、初心者向けの選び方もわかります。',
  keywords: 'ピラティス,大手町,東京駅,八重洲,丸の内,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 八重洲スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 10,450円〜',
    trial: 'マットグループ初回体験 1,000円（通常3,300円〜）',
    features: ['マット&マシン', '初心者歓迎', '大手町駅B10出口徒歩7分', '男女共用'],
    description: 'マットとマシン（リフォーマー）を備えたピラティス専門スタジオです（グレード01）。日本橋駅A7出口から徒歩3分、東京駅八重洲北口から徒歩5分、大手町駅B10出口から徒歩7分です。マットグループ、マシン（リフォーマー）グループ、プライベートの3タイプで、グループ店は全店相互利用できます（公式のスタジオページ・2026年10月23日確認）。',
    access: '日本橋駅A7出口 徒歩3分 / 東京駅八重洲北口 徒歩5分 / 大手町駅B10出口 徒歩7分',
    address: '東京都中央区日本橋2-3-21 八重洲セントラルビル6F',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシン（リフォーマー）を使ったグループレッスンです。少人数制で丁寧な指導です。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 10,450円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベート 体験 9,900円〜／マシングループ 初回体験 3,000円（通常5,000円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:30〜22:00 / 土日祝 8:00〜19:30',
      closed: '公式サイトでご確認ください',
      facilities: ['リフォーマー', 'マット（無料）', '男女別更衣室', '鍵付きロッカー'],
    },
  },
  {
    name: 'the SILK 東京八重洲店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'Standard 4（月4回）15,280円（税込）',
    trial: '初回体験レッスン（50分）無料',
    features: ['女性限定', 'マシンピラティス専門', '大手町駅徒歩5分', 'グループレッスン専門'],
    description: '女性限定のマシンピラティス専門スタジオで、公式サイトでは東京メトロ大手町駅から徒歩5分、JR東京駅から徒歩3分と案内されています。大きな窓とウォーターサーバー・パウダールームを備えた空間で、1コマ50分のグループレッスンのみを行う店舗です（パーソナルは目黒・新宿のパーソナル店）。公式によると体験者の8割はピラティス初心者とされています（情報引用元: the SILK公式サイト・2026年10月23日確認）。',
    access: '東京メトロ「日本橋駅」徒歩2分／JR「東京駅」徒歩3分／東京メトロ「大手町駅」徒歩5分（公式表記）',
    address: '東京都中央区八重洲1-5-9 八重洲加藤ビルディング5F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プランです。音楽に合わせた50分のグループレッスンです。',
      price: '月4回 15,280円（税込）〜',
    },
    options: [
      'Light 3（月3回 13,280円）',
      'Full（毎日1回まで 22,280円）',
      'Full Day（平日OPEN〜15時開始 毎日1回まで 19,280円）',
      '月額ウェア/タオルレンタル 2,200円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '仕事帰りのリフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['ウォーターサーバー', 'パウダールーム', 'レンタルウェア・タオル', '女性限定'],
    },
  },
  {
    name: 'Pilates Mee 築地店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル 月2回 11,000円〜',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: 'セミパーソナル×通い放題で圧倒的な費用対効果を実現するマシンピラティススタジオです。築地駅から徒歩3分です。大手町駅からは東西線で茅場町駅（2駅）へ出て、日比谷線で築地駅（2駅）です。少人数制のセミパーソナルレッスンで、グループレッスンより丁寧な指導が受けられます。',
    access: '築地駅 徒歩3分／新富町駅 徒歩7分',
    address: '〒104-0045 東京都中央区築地7丁目6-7 松田ビル 302',
    popularPlan: {
      name: 'セミパーソナル通い放題',
      description: '少人数制セミパーソナルレッスンが何度でも受けられます。1回あたり3,750円（公式の表記・月10回利用で算出）です。',
      price: '月額 37,500円（税込）',
    },
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '料金重視', '継続的な運動'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'ピラティスK 銀座店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: 'マンスリー4メンバー 13,420円',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシンピラティス専門', '銀座一丁目駅徒歩1分', 'グループレッスン'],
    description: '音楽にあわせたグループレッスンの女性専用マシンピラティス専門スタジオです。銀座一丁目駅6番出口から徒歩1分、丸ノ内線銀座駅C8出口から徒歩5分です。大手町駅からは丸ノ内線で銀座駅まで2駅です。お腹・お尻・二の腕・脚・背中の部位別プログラムがあります（公式の店舗ページ・2026年10月23日確認）。',
    access: '有楽町線「銀座一丁目駅」6番出口 徒歩1分 / 丸ノ内線「銀座駅」C8出口 徒歩5分（大手町駅から丸ノ内線で2駅）',
    address: '東京都中央区銀座1-6-10 上一ビルディング7F',
  },
  {
    name: 'BDC PILATES 銀座スタジオ',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40590',
    image: '/images/studios/bdc-pilates.webp',
    price: 'グループ 月4回 16,280円（税込）',
    trial: '体験レッスンあり（料金は公式の予約ページでご確認ください）',
    features: ['プロダンサー養成校プロデュース', '少人数制（最大8名）', '銀座駅C8出口徒歩30秒', '本格的'],
    description: '40年以上の実績を持つプロダンサー養成校「BDC」がプロデュースするマシンピラティス専門スタジオです。銀座駅C8出口から徒歩30秒です（大手町駅からは丸ノ内線で銀座駅まで2駅）。最大8名の少人数制グループレッスンで、月6回 23,100円・月8回 29,260円、プライベート月1回 11,000円、入会金11,000円・事務手数料2,200円・施設維持費 月770円です（公式の店舗ページ・2026年10月23日確認・税込）。',
    access: '銀座駅C8出口から徒歩30秒（公式表記）',
    address: '東京都中央区銀座4-2-1 銀座教会堂ビル7F',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。大手町・東京駅周辺のピラティススタジオのほとんどが初心者向けのレッスンを用意しています。インストラクターが基礎から指導するため、運動が苦手な方でも始めやすい環境です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。',
  },
  {
    question: '大手町エリアのピラティススタジオの料金相場は？',
    answer: '掲載5店のグループ月4回は、zen place 八重洲（マット）10,450円〜、ピラティスK 銀座 13,420円、the SILK 東京八重洲 15,280円、BDC PILATES 銀座 16,280円です。Pilates Mee 築地のセミパーソナルは月4回19,800円、パーソナルは1回あたり8,800〜11,000円です。体験は the SILK・ピラティスK・Pilates Mee が無料、zen place のマットグループが初回1,000円です（いずれも税込・2026年10月23日確認）。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。大切なのは継続することです。無理のないペースで長く続けることが、目標達成への近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'ピラティスにはダイエット効果が期待できます。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。ただし即効性はないので、最低でも2〜3ヶ月は継続することが大切です。食事管理を並行すると、より効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。マットやタオルは、スタジオでレンタルできる場合が一般的です。詳細は各スタジオの体験レッスン案内でご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的です。目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多いビジネスパーソンの方にも特におすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめです。グループは料金を抑えやすく、ほかの参加者と一緒に続けられる点が利点です。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function OtemachiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '大手町', url: 'https://biyori-pilates.com/area/otemachi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月23日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス大手町・東京駅おすすめ5選<br className="hidden md:block" />
              大手町駅からの徒歩分と料金の比較
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
              <span className="text-warm-600">大手町</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="大手町" />


        <TableOfContents areaName="大手町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、大手町・東京駅・八重洲エリアから通えるおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>大手町・東京駅周辺でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>仕事帰りに通えるスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
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

        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">大手町駅からの徒歩分・乗り換えで比べる早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">大手町駅から近い順に並べました。当サイトの掲載店で大手町駅から歩いて行けるのは八重洲側の2店（徒歩5〜7分）で、ほかの3店は地下鉄で2〜4駅です。徒歩分・体験料金・営業時間は各スタジオの公式ページの表記です（2026年10月23日確認・税込）。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">大手町駅から</th><th className="px-4 py-3 text-left">ほかの最寄駅</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">営業時間</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">the SILK 東京八重洲店（中央区八重洲1-5-9 八重洲加藤ビルディング5階）</td><td className="px-4 py-3">徒歩5分</td><td className="px-4 py-3">日本橋駅 徒歩2分・東京駅 徒歩3分</td><td className="px-4 py-3">マシンのグループ（女性限定）</td><td className="px-4 py-3">無料（50分）</td><td className="px-4 py-3">7:30〜21:00（年末年始休み）</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">zen place pilates 八重洲（中央区日本橋2-3-21 八重洲セントラルビル6階）</td><td className="px-4 py-3">B10出口 徒歩7分</td><td className="px-4 py-3">日本橋駅A7出口 徒歩3分・東京駅八重洲北口 徒歩5分</td><td className="px-4 py-3">マット・マシンのグループ・プライベート（男女共用）</td><td className="px-4 py-3">マットグループ 1,000円</td><td className="px-4 py-3">平日 7:30〜22:00・土日祝 8:00〜19:30</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">BDC PILATES 銀座（中央区銀座4-2-1 銀座教会堂ビル7F）</td><td className="px-4 py-3">丸ノ内線で2駅（銀座駅C8出口 徒歩30秒）</td><td className="px-4 py-3">—</td><td className="px-4 py-3">最大8名のグループ・プライベート</td><td className="px-4 py-3">予約ページで確認</td><td className="px-4 py-3">店舗ページに記載なし（電話受付 平日10〜20時・土日10〜17時）</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ピラティスK 銀座店（中央区銀座1-6-10 上一ビルディング7F）</td><td className="px-4 py-3">丸ノ内線で2駅（銀座駅C8出口 徒歩5分）</td><td className="px-4 py-3">銀座一丁目駅6番出口 徒歩1分</td><td className="px-4 py-3">マシンのグループ（女性専用）</td><td className="px-4 py-3">0円</td><td className="px-4 py-3">平日 9:30〜16:00・17:30〜22:00／土日祝 9:30〜20:00（第一月曜定休）</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Pilates Mee 築地店（中央区築地7-6-7 松田ビル302）</td><td className="px-4 py-3">東西線で茅場町駅（2駅）→日比谷線で築地駅（2駅）</td><td className="px-4 py-3">築地駅 徒歩3分・新富町駅 徒歩7分</td><td className="px-4 py-3">最大3名のセミパーソナル・パーソナル（女性専用）</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">9:00〜21:15（不定休）</td></tr>
        </tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">昼休みや仕事帰りに大手町から歩いて通うなら、八重洲側の the SILK（女性限定・体験無料）か zen place 八重洲（男女共用・マットとマシン）が候補です。丸ノ内線1本で行ける銀座の2店は、ピラティスK が月4回13,420円・体験0円、BDC が最大8名の少人数制です。大手町駅の近くにある総合フィットネスクラブのピラティスクラスは、このページでは掲載していません。</p></div></section>

        <PriceComparisonTable studios={studios} areaName="大手町・東京駅" />
        <AreaMarketComparison studios={studios} areaName="大手町・東京駅" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              大手町・東京駅周辺のおすすめピラティススタジオ5選
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
              大手町のピラティス料金相場
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
                    <td className="px-4 py-3">10,450円〜16,280円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回あたり 8,800円〜11,000円（Pilates Mee 築地のパーソナル）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円（BDC は予約ページで確認）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              大手町・東京駅は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の丸の内エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              大手町・東京駅でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">日本橋駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  大手町・東京駅エリアのスタジオは日本橋駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにすることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  大手町・東京駅は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  大手町・東京駅エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  大手町・東京駅エリアだけでなく、近隣の<Link href="/area/marunouchi/" className="text-warm-700 underline hover:text-warm-900">丸の内</Link>、<Link href="/area/tokyo-station/" className="text-warm-700 underline hover:text-warm-900">東京駅</Link>、<Link href="/area/nihonbashi/" className="text-warm-700 underline hover:text-warm-900">日本橋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>大手町・東京駅エリアの豆知識：</strong>大手町・東京駅は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円前後から通えるスタジオです。グループレッスンやセミパーソナルで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（マット月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK 八重洲（月4回 15,280円〜）</li>
                  <li className="text-warm-700">• ピラティスK 銀座（月4回 13,420円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">少人数・パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  セミパーソナルやプライベートレッスンで丁寧な指導を受けたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル通い放題あり）</li>
                  <li className="text-warm-700">• BDC PILATES（最大8名の少人数制）</li>
                  <li className="text-warm-700">• zen place（プライベートレッスンあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手町駅からの近さ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  大手町駅・東京駅から徒歩圏内です。仕事帰りや昼休みにもアクセスできる立地です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 東京八重洲（大手町駅徒歩5分・東京駅徒歩3分）</li>
                  <li className="text-warm-700">• zen place 八重洲（大手町駅B10出口徒歩7分・東京駅徒歩5分）</li>
                  <li className="text-warm-700">• ピラティスK 銀座・BDC 銀座（大手町駅から丸ノ内線で銀座駅まで2駅）</li>
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
                週1〜2回（月4〜8回）からスタートするのがおすすめです。まずは身体を慣らすことが大切です。継続期間は最低でも2〜3ヶ月です。この期間で効果を実感される方が多くみられます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回（月8〜12回）がおすすめです。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3〜6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめです。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切です。無理のないペースで通うことが大切です。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  マットグループやリーズナブルなマシンレッスンです。初心者が気軽に始められます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（マット月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜20,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備のスタジオです。少人数制やセミパーソナルのスタジオもあります。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円）</li>
                  <li>• the SILK 東京八重洲（月4回 15,280円）</li>
                  <li>• BDC PILATES（月4回 16,280円）</li>
                  <li>• Pilates Mee（月4回 19,800円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">通い放題</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">割安</p>
                <p className="text-sm text-warm-600 mb-4">
                  週2回以上通うなら通い放題プランがお得です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（通い放題 37,500円）</li>
                  <li>• zen place（フリー 16,940円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  まずは自分がピラティスで何を達成したいのかを明確にすることをおすすめします。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的を明確にしておくと、スタジオを選びやすくなります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  掲載5店のグループ月4回は10,450円〜16,280円、セミパーソナル（Pilates Mee）は月4回19,800円です。無理なく継続できる予算を決めることをおすすめします。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。掲載5店のうち the SILK・ピラティスK・Pilates Mee は体験無料、zen place はマットグループ初回1,000円です（2026年10月23日確認）。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  大手町は丸ノ内線・東西線・千代田線・半蔵門線・三田線の5路線が乗り入れ、東京駅も徒歩圏内という抜群のアクセスです。日本最大のビジネス街として多くの企業が集まるエリアです。仕事帰りに立ち寄れるスタジオを選ぶと、継続しやすくなります。
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
              本ページでは、大手町・東京駅周辺のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              大手町は5路線が乗り入れる交通の要所で、東京駅・日本橋・銀座も徒歩圏内です。ビジネス街の中心にありながら、仕事帰りに通える質の高いピラティススタジオが揃っています。
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
              掲載店の体験料金は無料〜1,000円です（BDC は予約ページで確認・2026年10月23日確認）。<br />
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
              <AreaModifierSections studios={studios} areaName="大手町" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="otemachi" areaName="大手町" />

      <RelatedAreas currentSlug="otemachi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
