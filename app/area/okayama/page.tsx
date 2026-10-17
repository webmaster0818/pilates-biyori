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
  alternates: { canonical: 'https://biyori-pilates.com/area/okayama/' },
  title: '【2026年10月最新】岡山のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '岡山エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,岡山,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'La pilates 岡山駅前店',
    image: '/images/studios/la-pilates.webp',
    price: 'サブスク月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×マシンピラティス', '岡山駅徒歩5分', '女性専用', '産後ケア'],
    description: '岡山のマシンピラティスならLa pilates｜女性専用・整体×ピラティススタジオです。「岡山駅」より徒歩5分です。La pilates岡山駅前店は、整体とマシンピラティスを融合させた、女性専用のスタジオです。産後から美姿勢・引き締め・産後ケアを叶えます。身体の歪みを整えながらボディメイクです。明るいスタジオで楽しくレッスンです。',
    access: '岡山駅より徒歩5分',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'サブスクプラン',
      description: '整体×マシンピラティスの組み合わせです。女性専用のため安心して通えます。',
      price: 'サブスク月1回 12,000円〜、体験 3,000円',
    },
    options: [
      'サブスクプラン（月1回〜）',
      '整体施術',
      'マシンピラティス',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['整体×ピラティス', '身体の歪み改善', 'ボディメイク', '産後ケア'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '整体施術', '女性専用', '明るいスタジオ'],
    },
  },
  {
    name: 'ピラティスK 岡山店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '無料駐車場25台', '暗闇レッスン'],
    description: 'ピラティスK 岡山店、岡山県岡山市にある女性専用マシンピラティススタジオです。無料駐車場25台完備だから、お車で通いやすく、雨の日も安心です。店内はカジュアルかつスタイリッシュな店内で、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実しています。',
    access: '岡山市内、無料駐車場25台完備',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスンです。楽しく続けられると人気のプランです。',
      price: '月4回 13,420円（税込）+ 施設維持費 825円',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時通い放題 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加レッスン（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '無料駐車場25台'],
    },
  },
  {
    name: 'CLUB PILATES 岡山店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=80770',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 10,890円／月8回 14,190円／通い放題 17,490円（公式店舗ページ・税表記なし）',
    trial: '無料体験レッスン（30分）',
    features: ['アメリカ発', '世界800店舗以上', 'グループ＆プライベート', '初心者歓迎'],
    description: 'CLUB PILATES(クラブピラティス)は世界各国で800店舗以上展開するアメリカ発のピラティススタジオです。ピラティスが初めての方、運動習慣がない方も安心してスタジオにお越しください。クラブピラティスのインストラクターは、豊富な専門知識と観察力で、一人ひとりの動き方やクセに合わせた的確なレッスンを行います。完全初心者の方でも安心して取り組むことが可能です。入会を検討している方向けに30分間の無料体験クラスを開催しております。',
    access: '岡山市内（詳細は公式サイト参照）',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '世界800店舗以上のネットワークです。初心者でも安心して楽しめます。',
      price: '月4回 10,890円（税表記なし）',
    },
    options: ['月8回 14,190円', '通い放題 17,490円', '入会金 5,500円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['初心者歓迎', '世界的ブランド', 'ボディメイク', 'グループ＆プライベート'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備'],
    },
  },
  {
    name: 'ピラティススタジオDEP 岡山店',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3U4MO2+5IM0+5YJRM',
    image: '/images/studios/pilates-studio-dep.webp',
    price: 'ライト 月2回 14,800円〜（税込）',
    trial: '初回体験 2,980円（税込・通常9,900円・LINE予約限定）',
    features: ['理学療法士監修', '完全個室', '国家資格者指導', '姿勢改善専門'],
    description: 'ピラティススタジオDEP 岡山店です。完全個室＆国家資格者による指導しています。理学療法士が監修する完全個室のマシンピラティススタジオです。国家資格者による指導で、姿勢改善・猫背改善・腰痛改善に特化しています。一人ひとりの身体に合わせた丁寧な指導を提供しています。',
    access: '岡山市内（詳細は公式サイト参照）',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: '月額会員プラン',
      description: '50分のパーソナルレッスンです（初回は90〜120分）。ライト月2回・スタンダード月4回・プレミアム月7回です。',
      price: 'ライト 14,800円／スタンダード 28,800円／プレミアム 47,600円（税込）',
    },
    options: [
      'パーソナルレッスン',
      '姿勢改善プログラム',
      '腰痛改善プログラム',
      '完全個室',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '腰痛改善', '猫背改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', '理学療法士監修', 'マシン完備'],
    },
  },
  {
    name: 'UP LIFE GALLERY 岡山店',
    image: '/images/studios/uplife-gallery-okayama.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['遺伝子解析', '体質改善', 'トータルケア', '根拠に基づく'],
    description: '10年の現場で見つけた、女性の体が本当に変わる方法です。UP LIFE GALLERYでは、遺伝子解析をもとに一人ひとりの体質を可視化し、ピラティス・食事・睡眠・ボディケアまでをトータルで整える独自プログラムを提供しています。感覚ではなく、根拠に基づいた"本当に効く"体質改善を提供しています。',
    access: '岡山市内（詳細は公式サイト参照）',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: '遺伝子解析プログラム',
      description: '遺伝子解析で体質を可視化です。ピラティス・食事・睡眠をトータルで整えます。',
      price: '要問合せ',
    },
    options: [
      '遺伝子解析',
      'ピラティス',
      '食事指導',
      'ボディケア',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['体質改善', '根拠に基づく', 'トータルケア', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['遺伝子解析', 'カウンセリング', 'マシン完備'],
    },
  },
  {
    name: 'Rintosull 岡山店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['女性専用', '初心者歓迎', 'LAVAグループ', 'マシン専門'],
    description: 'マシンピラティススタジオRintosull 岡山店です。Rintosullでは、運動やピラティスを初めて行う方向けのプログラムをご用意しています。インストラクターがしっかりサポートいたしますので、ご安心ください。美尻や美脚に必要な筋肉にアプローチです。初心者でも安心して通えるスタジオです。',
    access: '岡山市内（詳細は公式サイト参照）',
    address: '岡山県岡山市北区駅前町1-1-1 ビックカメラ4F',
    popularPlan: {
      name: 'グループレッスン',
      description: '初心者向けプログラム充実です。美尻・美脚に特化したレッスンもあります。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['初心者歓迎', '美尻・美脚', 'ボディメイク', '女性専用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'studio kua（スタジオクウア）',
    image: '/images/studios/studio-kua-okayama.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['岡山市北区表町', '身体を自分で管理', '本質を伝える', '動きの質'],
    description: '岡山市北区表町にありますピラティススタジオ「studio kua（スタジオクウア）」は「身体を自分で管理する」をコンセプトに、ピラティスの本質をお伝えし、動きと身体の質に変化をもたらすスタジオです。一人ひとりの身体に合わせた丁寧な指導を提供しています。',
    access: '岡山市北区表町（詳細は公式サイト参照）',
    address: '岡山県岡山市北区表町（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '身体を自分で管理します。ピラティスの本質を伝えます。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '本質重視',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['本質重視', 'ボディメイク', '動きの質', '自己管理'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備'],
    },
  },
]

const faqs = [
  {
    question: '岡山でピラティス初心者におすすめのスタジオはどこですか？',
    answer: 'Rintosull 岡山店がおすすめです。運動やピラティスを初めて行う方向けのプログラムをご用意しており、インストラクターがしっかりサポートいたしますので、ご安心ください。また、CLUB PILATES 岡山店も完全初心者の方でも安心して取り組むことが可能です。',
  },
  {
    question: '岡山駅から一番近いピラティススタジオはどこですか？',
    answer: 'La pilates 岡山駅前店は岡山駅から徒歩5分で、最もアクセスに優れています。路面電車沿線のスタジオも多いので、公共交通機関での通いやすさも確認してみてください。',
  },
  {
    question: '岡山で一番安いピラティススタジオはどこですか？',
    answer: 'パーソナルならピラティススタジオDEP 岡山店が月2回14,800円〜（税込）、初回体験は2,980円（税込・LINE予約限定）です。体験レッスンはピラティスK 岡山店とCLUB PILATES 岡山店が無料で受けられます。',
  },
  {
    question: '女性専用のピラティススタジオはありますか？',
    answer: 'はい、3つあります。ピラティスK 岡山店、La pilates 岡山駅前店、Rintosull 岡山店はすべて女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは何ですか？',
    answer: 'マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で自重を使って行い、体幹を鍛えるのに効果的です。初心者にはマシンが補助してくれるマシンピラティスがおすすめです。',
  },
  {
    question: 'どのくらいの期間で効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。マットやタオルは、スタジオでレンタルできる場合が一般的です。詳細は各スタジオの体験レッスン案内でご確認ください。',
  },
  {
    question: '運動が苦手でも大丈夫ですか？',
    answer: 'はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので、正しいフォームで効果的にトレーニングできます。',
  },
  {
    question: '岡山で理学療法士監修のスタジオはありますか？',
    answer: 'はい、ピラティススタジオDEP 岡山店は理学療法士監修の完全個室スタジオです。国家資格者による指導で、姿勢改善・腰痛改善に特化しています。医療的な視点から体を整えたい方におすすめです。',
  },
  {
    question: '倉敷方面からでも通えるスタジオはありますか？',
    answer: 'ピラティスK 岡山店は岡山駅周辺に位置しており、JR山陽本線で倉敷からもアクセスできます。ピラティスK 岡山店は無料駐車場25台完備なので、お車での通いも便利です。',
  },
]

export default async function OkayamaAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '岡山', url: 'https://biyori-pilates.com/area/okayama/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】岡山のピラティススタジオおすすめ7選<br className="hidden md:block" />
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
              <span className="text-warm-600">岡山</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="岡山" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、岡山エリアでおすすめのピラティススタジオ7選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>岡山でピラティススタジオを探している</span>
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
                  <span>岡山駅・表町エリアで通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="スタジオ" />

        {/* Studios List */}

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              岡山のピラティス料金相場
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
                    <td className="px-4 py-3">3,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,900円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              岡山エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。近隣の広島エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              岡山でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">岡山駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  岡山エリアのスタジオは岡山駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにすることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">岡山エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  岡山エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめです。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  岡山エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  岡山エリアだけでなく、近隣の<Link href="/area/hiroshima/" className="text-warm-700 underline hover:text-warm-900">広島</Link>、<Link href="/area/kobe/" className="text-warm-700 underline hover:text-warm-900">神戸</Link>、<Link href="/area/osaka/" className="text-warm-700 underline hover:text-warm-900">大阪</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>岡山エリアの豆知識：</strong>岡山は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前にご確認ください。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              岡山のおすすめピラティススタジオ7選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* 目的別おすすめスタジオ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額10,000円以下で通える格安スタジオです。体験レッスン無料のスタジオもあります。費用を抑えたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティススタジオDEP 岡山店（初回体験 2,980円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備しています。マシンピラティスを本格的に学びたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 岡山店</li>
                  <li className="text-warm-700">• CLUB PILATES 岡山店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  岡山駅・表町エリアから徒歩圏内です。路面電車沿線のスタジオも多く、通いやすい環境が整っています。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates 岡山駅前店（岡山駅徒歩5分）</li>
                  <li className="text-warm-700">• studio kua（表町エリア）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 期間・頻度 */}
        <section className="py-16 bg-warm-50">
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

        {/* 予算別 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオです。グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• La pilates 岡山駅前店（12,000円〜）</li>
                  <li>• ピラティスK 岡山店（13,420円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">その他（要問合せ）</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">各種プラン</p>
                <p className="text-sm text-warm-600 mb-4">
                  遺伝子解析・世界ブランドなど独自アプローチのスタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES 岡山店</li>
                  <li>• UP LIFE GALLERY 岡山店</li>
                  <li>• Rintosull 岡山店</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 選び方 */}
        <section className="py-16 bg-warm-50">
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
                  岡山エリアの料金相場はグループで月4回10,890円〜13,420円程度です。無理なく継続できる予算を決めることをおすすめします。料金だけでなく、入会金やマット・ウェアのレンタル料などもご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK岡山店やCLUB PILATES岡山店は無料体験を実施しているので、体験レッスンをご利用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。岡山駅周辺、表町エリア、路面電車沿線など、自宅や職場から通いやすい場所を選ぶのがおすすめです。車で通う方はピラティスK岡山店の無料駐車場25台完備が便利です。倉敷方面からもJR山陽本線でアクセスしやすいスタジオもあります。
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

        {/* まとめ */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、岡山のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、岡山に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜3,000円です。<br />
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
      <ConsultantSection areaKey="okayama" areaName="岡山" />

      <RelatedAreas currentSlug="okayama" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
