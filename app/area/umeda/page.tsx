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
  alternates: { canonical: 'https://biyori-pilates.com/area/umeda/' },
  title: '梅田のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '梅田エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,梅田,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 梅田スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '初心者歓迎', '梅田駅徒歩3分', 'エデュケーター養成'],
    description: '全国展開の大手ピラティススタジオです。梅田駅から徒歩3分の好立地です。マットピラティスからマシンピラティスまで豊富なレッスンメニューです。大阪最大のターミナル駅・梅田で、JR・阪急・阪神・地下鉄が利用可能です。キタの中心、オフィス・商業の一大拠点です。グランフロント、阪急百貨店、ヨドバシなどが近く、レッスン後のショッピングも楽しめます。経験豊富なエデュケーターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '梅田駅から徒歩3分',
    address: '大阪府大阪市北区梅田1丁目12-17 梅田スクエアビル 10階',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プランです。大阪最大の拠点で、通いやすい立地です。',
      price: '月4回 13,200円（税込）',
    },
    options: [
      'プライベートレッスン追加（1回 9,900円〜）',
      'ウェアレンタル（月額 2,200円）',
      'タオルレンタル（月額 1,100円）',
      'エデュケーター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスK 梅田',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 15,070円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '暗闇レッスン', 'グループレッスン'],
    description: '音楽に合わせて楽しくボディメイクを目指せます。女性専用スタジオのため安心して通えます。梅田駅から徒歩5分です。暗闇×音楽×マシンピラティスの融合レッスンが人気です。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。',
    access: '梅田駅から徒歩5分',
    address: '大阪府大阪市北区角田町8-1 梅田阪急ビルオフィスタワー 5F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスンです。楽しく続けられると人気のプランです。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      '追加レッスンチケット（1回 4,400円）',
      '通い放題プラン変更（月額 22,000円〜）',
      'ウェア・タオルセット（月額 2,200円）',
      'ドリンクサービス（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'Dr.ピラティス 梅田店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオです。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せます。梅田エリアです（詳細は公式サイト参照）。',
    access: '梅田エリア（詳細は公式サイト参照）',
    address: '大阪府（詳細は公式サイト参照）',
  },
  {
    name: 'the SILK 大阪梅田店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370円 / 通い放題 19,980円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴です。梅田駅から徒歩3分です（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '梅田駅から徒歩3分',
    address: '大阪府大阪市北区芝田1丁目4-14 芝田町ビル9階F・G室',
  },
  {
    name: 'DAYS PILATES 梅田店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=H16011O-W518522Z&p=E9887623',
    image: '/images/studios/days-pilates.webp',
    price: '月3回 11,180円 / 月4回 12,060円 / 毎日最大2回 15,510円（税込・公式料金ページの割引後価格・2026年10月9日確認）',
    trial: '初回体験 0円（通常5,500円）',
    features: ['女性専用', 'マシンピラティス（リフォーマー）', 'グループレッスン中心'],
    description: '女性専用のマシンピラティス（リフォーマー）グループレッスンスタジオです。リーズナブルな月額で通いやすいのが特徴です。東梅田駅から徒歩2分です。',
    access: '東梅田駅から徒歩2分',
    address: '大阪府大阪市北区太融寺町8-2 エーワンビル4階',
  },
  {
    name: 'ピラティスアヴニール 梅田中津店',
    officialUrl: 'https://pilates.avenir-training.com/stores-2-4/umedanakatsu/',
    image: '/images/studios/pilates-avenir-umedanakatsu.webp',
    price: 'マンツーマン（30分）月2回 9,900円〜・月4回 19,360円〜／1回 5,170円〜（税込・担当トレーナーのランクにより異なります）',
    trial: '初回体験 90分 2,980円（税込）',
    features: ['女性専用', '完全個室マンツーマン', '中津駅1番出口 徒歩6分', '7:00〜23:00 年中無休'],
    description: '大阪メトロ中津駅1番出口から徒歩6分、北区豊崎のティーズオフィスビル201号室にある、完全個室・マンツーマンのマシンピラティススタジオです。女性専用の店舗です。リフォーマー・チェア・バレルを使い、目的や体力に合わせてレッスンを組み立てます。営業時間は7:00〜23:00（年中無休）。妊娠中・産後の方のマタニティピラティスにも対応し、お子さま連れでも通えます（保育はありません）。初回体験は90分2,980円、マンツーマン30分の月4回は19,360円〜です。料金は担当トレーナーのランクにより異なります（公式の店舗ページ・税込・2026年10月22日確認）。',
    access: '大阪メトロ「中津駅」1番出口 徒歩6分',
    address: '〒531-0072 大阪府大阪市北区豊崎2丁目9-16 ティーズオフィスビル201号室',
    popularPlan: {
      name: 'マンツーマン（30分）月4回',
      description: '完全個室でトレーナーとマンツーマンのマシンピラティスを月4回受けられるプランです。',
      price: '月額19,360円〜（税込）',
    },
    options: [
      'マンツーマン（60分）月2回 18,040円〜・月4回 35,200円〜',
      'ペア・セミパーソナル（3人）のプランもあります',
      '回数券 30分1回 5,170円〜・60分1回 9,350円〜',
      '入会金 8,800円（体験当日に32回券を購入すると無料）',
    ],
    userProfile: {
      genderRatio: '女性専用',
    },
    basicInfo: {
      hours: '7:00〜23:00',
      closed: '年中無休',
      facilities: ['リフォーマー', 'チェア', 'バレル', '更衣室', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスアヴニール 福島店',
    officialUrl: 'https://pilates.avenir-training.com/stores-2-4/fukushima/',
    image: '/images/studios/pilates-avenir-fukushima.webp',
    price: 'マンツーマン（30分）月2回 9,900円〜・月4回 19,360円〜／1回 5,170円〜（税込・担当トレーナーのランクにより異なります）',
    trial: '初回体験 90分 2,980円（税込）',
    features: ['完全個室マンツーマン', '新福島駅2番出口 徒歩1分', '阪神福島駅 徒歩3分', '7:00〜23:00 年中無休'],
    description: 'JR新福島駅2番出口から徒歩1分、福島区福島5丁目にある、完全個室・マンツーマンのマシンピラティススタジオです。リフォーマー・チェア・バレルを使い、目的や体力に合わせてレッスンを組み立てます。営業時間は7:00〜23:00（年中無休）。妊娠中・産後の方のマタニティピラティスにも対応し、お子さま連れでも通えます（保育はありません）。初回体験は90分2,980円、マンツーマン30分の月4回は19,360円〜です。料金は担当トレーナーのランクにより異なります（公式の店舗ページ・税込・2026年10月22日確認）。',
    access: 'JR「新福島駅」2番出口 徒歩1分／阪神「福島駅」徒歩3分／JR「福島駅」徒歩4分',
    address: '〒553-0003 大阪府大阪市福島区福島5丁目15-15 2Yoshikawa Bild502',
    popularPlan: {
      name: 'マンツーマン（30分）月4回',
      description: '完全個室でトレーナーとマンツーマンのマシンピラティスを月4回受けられるプランです。',
      price: '月額19,360円〜（税込）',
    },
    options: [
      'マンツーマン（60分）月2回 18,040円〜・月4回 35,200円〜',
      'ペア・セミパーソナル（3人）のプランもあります',
      '回数券 30分1回 5,170円〜・60分1回 9,350円〜',
      '入会金 8,800円（体験当日に32回券を購入すると無料）',
    ],
    basicInfo: {
      hours: '7:00〜23:00',
      closed: '年中無休',
      facilities: ['リフォーマー', 'チェア', 'バレル', '更衣室', 'ウォーターサーバー'],
    },
  },

]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。梅田エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。インストラクターが基礎から指導するため、運動が苦手な方でも始めやすい環境です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。',
  },
  {
    question: '梅田のピラティススタジオの料金相場は？',
    answer: '梅田エリアのピラティススタジオの料金相場は、月4回で12,000円〜16,000円程度です。体験レッスンは無料〜3,000円が一般的です。プライベートレッスンは1回8,000円〜12,000円が相場となっています。完全個室マンツーマンのピラティスアヴニール（梅田中津店・福島店）は30分1回5,170円〜・60分1回9,350円〜です（税込）。',
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
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
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

export default function UmedaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '梅田', url: 'https://biyori-pilates.com/area/umeda/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス梅田おすすめ7選<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較
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
              <span className="text-warm-600">梅田</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="梅田" />


        <TableOfContents areaName="梅田" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、梅田エリアでおすすめのピラティススタジオ7選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>梅田でピラティススタジオを探している</span>
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
                  <span>複数路線利用できるスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="梅田" />
        <AreaMarketComparison studios={studios} areaName="梅田" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              梅田のおすすめピラティススタジオ7選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
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
                  月額12,000円以下で通える格安スタジオです。体験レッスン無料のスタジオも多数あります。費用を抑えたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Studio Harmony 梅田</li>
                  <li className="text-warm-700">• Reformer Pilates Umeda</li>
                  <li className="text-warm-700">• FLOW PILATES 梅田</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備しています。マシンピラティスを本格的に学びたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 梅田</li>
                  <li className="text-warm-700">• the SILK 梅田</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・キタの中心</h3>
                <p className="text-warm-600 text-sm mb-4">
                  梅田駅から徒歩3分以内です。大阪最大のターミナルで、グランフロント・阪急百貨店の近くです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Urban Pilates 梅田（駅徒歩1分）</li>
                  <li className="text-warm-700">• the SILK 大阪梅田店（駅徒歩3分）</li>
                  <li className="text-warm-700">• zen place pilates 梅田（駅徒歩3分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。初心者向けの基本的なレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Studio Harmony</li>
                  <li>• Reformer Pilates</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオです。zen place pilates はグループ・プライベートを選べます。ピラティスK と the SILK 大阪梅田店はグループレッスンのみです（各公式サイト・2026年10月確認）。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates</li>
                  <li>• ピラティスK</li>
                  <li>• the SILK</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスンです。短期集中で成果を目指したい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• B-line（1回8,800円）</li>
                  <li>• Pilates Lab</li>
                  <li>• ピラティスアヴニール 梅田中津店・福島店（60分 月4回 35,200円〜）</li>
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
                  梅田エリアの料金相場は月4回で12,000円〜16,000円程度です。無理なく継続できる予算を決めることをおすすめします。料金だけでなく、入会金やマット・ウェアのレンタル料などもご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。多くのスタジオが無料〜1,000円程度で体験レッスンを提供しているので、体験レッスンをご利用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。梅田は大阪最大のターミナル駅で、JR・阪急・阪神・地下鉄が利用可能です。キタの中心、オフィス・商業の一大拠点です。駅から近い場所を選ぶと、グランフロント・阪急百貨店でのショッピングついでにも通えて便利です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              梅田のピラティス料金相場
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                梅田・大阪梅田エリアは関西最大級のターミナルです。JR大阪駅・阪急大阪梅田駅・地下鉄御堂筋線梅田駅などが集中し、大手チェーンから個人スタジオまで多彩な選択肢があります。東京に比べると若干高めの料金設定のスタジオもありますが、キャンペーンを活用すればお得に始められます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">13,200円〜15,070円</p>
                  <p className="text-sm text-warm-600">zen place pilates梅田の月4回13,200円〜が最安クラスです。ピラティスKは月4回15,070円〜です。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">パーソナル・プライベートレッスン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">8,000円〜12,000円/回</p>
                  <p className="text-sm text-warm-600">梅田エリアのプライベートレッスン相場は1回8,000円〜12,000円程度です。Studio Venusは完全パーソナルで個室対応しています。zen placeはプライベートとグループの併用も可能で柔軟な利用ができます。ピラティスアヴニール（梅田中津店・福島店）は完全個室マンツーマンで、30分1回5,170円〜・60分1回9,350円〜です（税込・担当トレーナーのランクにより異なります）。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は5,000円〜33,000円程度です。キャンペーン期間中の入会が割安です。体験レッスンは無料〜3,000円程度です。ピラティスKは無料体験があります。複数スタジオを体験してから入会を決めるのがおすすめです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              梅田でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">梅田の地下街は複雑 ─ 地上ルートも確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  梅田エリアは地下街（ホワイティうめだ・ディアモール大阪など）が広大なため、初めての方は道に迷いやすい点にご注意ください。スタジオへのアクセスは地上ルートも事前に確認しておくと安心です。阪急梅田駅からNU茶屋町方面、JR大阪駅から北新地方面などエリアによってアクセスの便が変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">仕事帰りの予約はお早めに</h3>
                <p className="text-warm-600 leading-relaxed">
                  梅田はオフィスワーカーが非常に多いエリアのため、平日19時〜21時のレッスンは特に混雑します。人気スタジオは前日には満席になることもあります。予約は早め早めに取るか、比較的空いている平日昼間を狙うことをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">なんば・心斎橋エリアとの比較も</h3>
                <p className="text-warm-600 leading-relaxed">
                  大阪でピラティスを探すなら、梅田だけでなく、なんば・心斎橋エリアのスタジオも選択肢に含めてご検討ください。御堂筋線1本で移動可能なので、休日と平日で別エリアのスタジオを使い分けるのもアリです。zen placeは大阪エリア複数スタジオの他店利用が可能です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">AI姿勢分析などの先進サービスをチェック</h3>
                <p className="text-warm-600 leading-relaxed">
                  梅田エリアではzen placeのAI分析など、テクノロジーを活用したサービスを提供するスタジオが増えています。自分の体の状態を客観的にデータで把握できるため、初心者の方や効率的に効果を出したい方は先進サービスのあるスタジオを選ぶのもおすすめです。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスで可能です。ゆったりしすぎる服はマシンに挟まるため避けることをおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（500ml以上）</strong>：水分補給は必須です。スタジオ近くのコンビニで調達しても利用可能です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>タオル</strong>：汗拭き用に1枚は持っていくことをおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは靴下着用必須です。滑り止め付きが最適です。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>がマストです。ピラティスでは、脚を大きく広げたり体をひねったりするポーズが多く含まれます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体にフィットする服</strong>を選ぶとフォーム確認がしやすくなり、指導の効果が上がります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル対応</strong>スタジオもあります。ピラティスKやthe SILKは手ぶら体験可能な場合があります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>ご参加ください。マシンのバネやストラップに引っかかる危険があります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>梅田エリアの豆知識：</strong>阪急梅田駅周辺のNU茶屋町エリアにはおしゃれなカフェが多く、レッスン後のリフレッシュにも適しています。グランフロント大阪やルクア大阪でのショッピングと組み合わせて、充実した休日を過ごす方が多いエリアです。仕事帰り派はJR大阪駅直結のスタジオを選ぶと雨の日も快適に通えます。
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
              本ページでは、梅田のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、梅田に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜1,000円です。<br />
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
              <AreaModifierSections studios={studios} areaName="梅田" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="umeda" areaName="梅田" />

            {/* boost-p1-kitahama-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                近隣の<Link href="/area/kitahama/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">北浜・淀屋橋エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて確認できます。
              </p>
            </div>
            {/* boost-p1-shin-osaka-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                近隣の<Link href="/area/shin-osaka/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">新大阪エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて確認できます。
              </p>
            </div>
      {/* g1-link-202609 */}
      <div className="my-8 bg-white border border-warm-200 p-5">
        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/brands/the-silk-umeda/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 大阪梅田店の料金・体験を見る</Link>
        </div>
      </div>

      <RelatedAreas currentSlug="umeda" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
