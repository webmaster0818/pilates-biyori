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
  alternates: { canonical: 'https://biyori-pilates.com/area/ochanomizu/' },
  title: '【2026年8月最新】御茶ノ水・神保町のピラティス7社を比較｜無料体験1社・月額最安10,450円〜',
  description: '御茶ノ水・神保町のピラティススタジオ7社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,御茶ノ水,神保町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 本郷三丁目店',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '初心者歓迎', '本郷三丁目駅徒歩3分', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。本郷三丁目駅から徒歩3分の好立地。マットピラティスからマシンピラティスまで豊富なレッスンメニュー。2015年オープンの10周年スタジオで、経験豊富なエデュケーターが在籍。全国150店舗が相互利用可能。',
    access: '東京メトロ丸ノ内線「本郷三丁目駅」2番出口より徒歩3分、都営大江戸線「本郷三丁目駅」3番出口より徒歩3分、JR「御茶ノ水駅」より徒歩10分',
    address: '東京都文京区本郷3丁目32-7 東京ビル 4階',
    popularPlan: {
      name: 'フリープラン（グレード01）',
      description: 'マット・マシンどちらも受講可能な人気プラン。全国150店舗で利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      'デイフリーグレード01：月額 13,552円（平日18時まで）',
      '月4グレード01：月額 10,450円',
      '月6グレード01：月額 14,520円',
      'プライベートレッスン月4：月額 38,280円〜',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%（男性OK）',
      purpose: ['姿勢改善', '体幹強化', '不調改善', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:00 / 土日祝 7:30〜18:00',
      closed: '不定休',
      facilities: ['マットスタジオ', 'マシン（リフォーマー）', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ピラティスK 神保町店',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['音楽×マシン', '女性専用', '神保町駅徒歩2分', 'ボディメイク特化'],
    description: '音楽に合わせて楽しくボディメイク。2025年7月オープンの女性専用マシンピラティススタジオ。神保町駅から徒歩2分の新しくて綺麗なスタジオ。お腹、お尻、二の腕、脚、背中の部位に特化した17種類のプログラムが充実。',
    access: '「神保町駅」より徒歩2分、「新御茶ノ水駅」より徒歩7分、「御茶ノ水駅」より徒歩7分',
    address: '東京都千代田区神田神保町1-4 クロサワビル4階',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回レッスン。音楽×マシンピラティスで楽しくボディメイク。施設維持費別途825円/月。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー：月額 16,170円',
      'マンスリーデイメンバー：月額 14,520円（平日10-15時）',
      'マンスリープレミアムメンバー：月額 18,920円（毎日2レッスン）',
      '追加受講：1回 2,200円',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '楽しく痩せたい', 'ストレス発散', '部位痩せ'],
    },
    basicInfo: {
      hours: '火・金 10:00-15:00/17:30-22:00、水 10:00-14:00/17:30-22:00、木 17:30-22:00、土祝 10:00-18:30、日 10:00-17:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', 'ロッカー', '更衣室', '女性専用'],
    },
  },
  {
    name: 'YARD 御茶ノ水スタジオ',
    image: '/images/studios/yard.webp',
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['ヨガ＆ピラティス', 'お洒落空間', '淡路町駅徒歩1分', '初心者歓迎'],
    description: 'ヨガ・ピラティス専門スタジオ。淡路町駅・小川町駅から徒歩1分の好アクセス。モノトーン×ピンクのお洒落なインテリア。ヨガ、ピラティス、エアフローヨガ、ホイールヨガなど多彩なプログラム。会員の7割以上が初心者からスタート。',
    access: '東京メトロ丸ノ内線「淡路町駅」A2出口より徒歩1分、都営新宿線「小川町駅」A2出口より徒歩1分、東京メトロ千代田線「新御茶ノ水駅」A6出口より徒歩3分、JR中央線「御茶ノ水駅」聖橋口より徒歩10分',
    address: '東京都千代田区神田須田町1丁目4-1 日宝須田町ビルB1F',
    popularPlan: {
      name: 'フリープラン',
      description: 'ヨガ・ピラティス通い放題。全店相互利用OK。',
      price: '要問い合わせ',
    },
    options: [
      'ヨガ体験レッスン：1,000円',
      'ピラティス体験レッスン：1,000円',
      'エアフローヨガ体験：1,000円',
      '全店相互利用（追加料金なし）',
    ],
    userProfile: {
      ageRange: '20代〜50代まで幅広い',
      genderRatio: '女性95% / 男性5%',
      purpose: ['ヨガ＆ピラティス', 'リフレッシュ', '柔軟性向上', 'ストレス解消'],
    },
    basicInfo: {
      hours: '平日 9:30〜22:00 / 土日 8:15〜17:00 / 祝日 8:15〜15:00',
      closed: '火曜日他（事前告知）',
      facilities: ['マットスタジオ', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'zen place pilates 神保町店',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '神保町駅徒歩1分', '全国他店利用', '男性OK'],
    description: 'zen placeの神保町スタジオ。神保町駅A7出口から徒歩1分の好立地。マットグループ、マシングループ、プライベートレッスンに対応。全国150店舗が他店利用可能で、ライフスタイルに合わせて自由に通えます。',
    access: '都営地下鉄三田線・新宿線・東京メトロ半蔵門線「神保町駅」A7出口より徒歩1分',
    address: '東京都千代田区神田神保町1-13-2 文銭堂ビル4F',
    popularPlan: {
      name: 'フリープラン（グレード01）',
      description: 'マット・マシン通い放題。全国150店舗で利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4グレード01：月額 10,450円',
      'デイフリー：月額 13,552円（平日18時まで）',
      'プライベート月4：月額 38,280円〜',
    ],
    userProfile: {
      ageRange: '20代〜60代',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '体幹強化', '不調改善'],
    },
    basicInfo: {
      hours: '平日 8:55〜22:00 / 土日祝 8:00〜20:00',
      closed: '不定休',
      facilities: ['マットスタジオ', 'リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'rcu リチュ 御茶ノ水',
    image: '/images/studios/rcu-ochanomizu.webp',
    price: '要問い合わせ',
    trial: '体験レッスン あり',
    features: ['常温ヨガ＆ピラティス', 'マシンピラティス', '御茶ノ水駅徒歩4分', '森の景色'],
    description: 'ヒノキの床が気持ちいいナチュラルな常温スタジオ。御茶ノ水駅から徒歩4分。窓からは森の景色が広がり、四季折々の自然を感じながらヨガ・ピラティスができます。常温ヨガ、ピラティス、マシンピラティスに対応。',
    access: 'JR御茶ノ水駅より徒歩4分、秋葉原駅より9分、千代田線新御茶ノ水駅より徒歩5分、丸ノ内線御茶ノ水駅より徒歩6分',
    address: '東京都千代田区外神田2-17-2 延寿お茶の水ビル302',
    popularPlan: {
      name: 'マンスリー会員',
      description: '常温ヨガ・ピラティス・マシンピラティスが受講可能。',
      price: '要問い合わせ',
    },
    options: [
      '月定額制マンスリー会員',
      'ドロップイン（1回券）',
      'インストラクター養成講座',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['リラックス', '自然を感じる', 'ヨガ＆ピラティス'],
    },
    basicInfo: {
      hours: '平日 9:30〜20:00 / 土日祝 9:00〜17:00',
      closed: '月曜定休',
      facilities: ['ヒノキ床スタジオ', 'マシンピラティス', 'ロッカー'],
    },
  },
  {
    name: 'PILATES STUDIO ZERO 神保町店',
    image: '/images/studios/pilates-zero-jimbocho.webp',
    price: '月4回 37,200円〜',
    trial: '体験レッスン 4,400円（当日入会で無料）',
    features: ['完全プライベート', 'マシンピラティス', '神保町駅近', 'パーソナル専門'],
    description: 'マシンピラティスパーソナル専門スタジオ。神保町駅から徒歩圏内。完全プライベートレッスンで一人ひとりに合わせたオーダーメイドプログラム。1セッション40分、ミネラルウォーター付き。体験当日入会で体験料・入会金無料。',
    access: '都営地下鉄三田線「神保町駅」A3出口より徒歩圏内',
    address: '東京都千代田区神田神保町（詳細は店舗HP参照）',
    popularPlan: {
      name: '月4回プラン',
      description: 'パーソナルマシンピラティス。1回40分×月4回。',
      price: '月額 37,200円（税込）/ 1回あたり9,300円',
    },
    options: [
      '月3回プラン：月額 28,500円',
      '月6回プラン：月額 54,000円',
      '月8回プラン：月額 69,600円',
      '回数券10回：90,000円（体験当日購入で10%オフ）',
      '回数券30回：216,000円（体験当日購入で20%オフ＋ソックス進呈）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体の不調改善', 'パーソナル指導', '姿勢矯正', '慢性痛改善'],
    },
    basicInfo: {
      hours: '要問い合わせ（予約制）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベート空間', 'ロッカー'],
    },
  },
  {
    name: 'Z&Z Pilates Studio 神保町店',
    image: '/images/studios/zz-pilates-jimbocho.webp',
    price: '月4回 19,900円〜',
    trial: '団体体験 4,000円 / 私教体験 8,000円',
    features: ['中国語対応', '小班＋私教', '神保町駅1分', '国際認証'],
    description: '中国語対応のピラティススタジオ。神保町駅から徒歩1分。STOTT/BASI/PEAK国際認証インストラクター在籍。3人小班制グループレッスンとプライベートレッスンを提供。マシンピラティス×ウェイトトレーニング組み合わせで理想的な身体づくり。',
    access: '神保町駅より徒歩1分、九段下駅より2分、竹橋駅より9分、水道橋駅より8分、御茶ノ水駅より10分',
    address: '東京都千代田区神田神保町3-2-28 ACN神保町ビル3階',
    popularPlan: {
      name: '混合A（Hybrid Plan A）',
      description: '月カード：私教1回＋小班3回。人気のミックスプラン。',
      price: '月額 24,825円（税込）',
    },
    options: [
      '混合B：月額 29,750円（私教2回＋小班2回）',
      '混合C：月額 37,900円（私教2回＋小班4回）',
      '私教月卡4次：月額 39,600円',
      '小班月卡4次：月額 19,900円',
      '入会金：11,000円（当日入会で無料）',
    ],
    userProfile: {
      ageRange: '20代〜40代の中国語話者が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['体態矯正', '姿勢改善', '中国語でレッスン', '疼痛改善'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '小班スタジオ', 'プライベート空間', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: '神保町駅の近くにピラティススタジオはありますか？',
    answer: 'あります。神保町駅から徒歩1〜2分圏内に「zen place pilates 神保町店」（A7出口徒歩1分・マシン完備・男性可）、「ピラティスK 神保町店」（徒歩2分・女性専用・体験0円）があり、さらに完全プライベート専門の「PILATES STUDIO ZERO 神保町店」、中国語対応の「Z&Z Pilates Studio 神保町店」など、目的別に選べるスタジオが揃っています。いずれも御茶ノ水駅からも徒歩圏内です。',
  },
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！御茶ノ水・神保町エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。YARD御茶ノ水は会員の7割が初心者スタート、zen placeも初心者歓迎なので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '御茶ノ水・神保町のピラティススタジオの料金相場は？',
    answer: '御茶ノ水・神保町エリアの料金相場は、グループレッスンで月4回10,450円〜19,900円程度。パーソナルレッスンは1回9,300円〜が相場です。体験レッスンはピラティスK神保町店が0円、zen placeやYARDが1,000円で始められます。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。御茶ノ水エリアではYARDやrcu リチュなど、ヨガとピラティス両方を提供しているスタジオもあるので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や学生の方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。御茶ノ水エリアではPILATES STUDIO ZEROがパーソナル専門、zen placeやピラティスKがグループ中心です。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function OchanomizuPage() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '御茶ノ水・神保町のピラティススタジオ',
            description: '御茶ノ水・神保町エリアのおすすめピラティススタジオ一覧',
            numberOfItems: studios.length,
            itemListElement: [...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'LocalBusiness',
                name: studio.name,
                description: studio.description,
                address: studio.address,
              },
            })),
          }),
        }}
      />
      <FAQSchema faqs={faqs} />

      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '御茶ノ水', url: 'https://pilates-biyori.com/area/ochanomizu/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月20日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】御茶ノ水・神保町の<br className="hidden md:block" />
              ピラティススタジオおすすめ8選！
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
              <span className="text-warm-600">御茶ノ水・神保町</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="御茶ノ水・神保町" />


        <TableOfContents areaName="御茶ノ水・神保町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              こんにちは。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              Pilates-Biyori編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「御茶ノ水・神保町で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、JR中央線・総武線御茶ノ水駅や東京メトロ丸ノ内線・千代田線が利用できる御茶ノ水・神保町エリアでおすすめのピラティススタジオ8選をまとめました。千代田区・神田の学生の街・楽器街としても知られるこのエリアは、複数路線が交差する好アクセスな立地です。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>御茶ノ水・神保町でピラティススタジオを探している</span>
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
                  <span>JR中央線・総武線や丸ノ内線・千代田線で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="スタジオ" />
        <AreaMarketComparison studios={studios} areaName="スタジオ" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              御茶ノ水・神保町のおすすめピラティススタジオ8選
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
              御茶ノ水・神保町のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜19,900円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 37,200円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜8,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              御茶ノ水・神保町エリアの料金は、グループレッスンとパーソナルレッスンで大きく異なります。グループは月額1万円前後から、パーソナルは1回1万円以上が目安です。まずは体験レッスンで実際のレッスン内容と料金のバランスを確認するのがおすすめです。近隣の水道橋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="jimbocho">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">
              神保町駅周辺でピラティスを探すなら
            </h2>
            <p className="text-warm-600 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              御茶ノ水駅と神保町駅は徒歩圏内の隣接エリアで、スタジオはどちらの駅からも通える距離に集まっています。「神保町」「神保町駅」でピラティスを探している場合も、このページで比較しているスタジオがそのまま候補になります。神保町駅周辺には、女性専用・完全プライベート・多言語対応など特徴の異なるスタジオが揃っています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">神保町駅すぐのスタジオ（徒歩1〜2分）</h3>
                <p className="text-warm-600 leading-relaxed">
                  神保町駅から特に近いのは「zen place pilates 神保町店」（A7出口より徒歩1分・マシン完備・男性も利用可）と「ピラティスK 神保町店」（徒歩2分・女性専用・体験0円）です。どちらも新御茶ノ水・御茶ノ水駅からも徒歩7分ほどで、御茶ノ水方面から通う方にも便利です。最新の営業時間・体験条件は各スタジオ公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">目的で選ぶ神保町のピラティス</h3>
                <p className="text-warm-600 leading-relaxed">
                  マンツーマンでじっくり通いたい方は完全プライベート専門の「PILATES STUDIO ZERO 神保町店」、中国語での指導に対応してほしい方は国際認証インストラクター在籍の「Z&amp;Z Pilates Studio 神保町店」が選択肢になります。女性専用・グループ中心ならピラティスK、他店利用や男性もOKの通いやすさならzen placeと、目的に合わせて比較するのがおすすめです。
                </p>
              </div>
            </div>
            <p className="text-center mt-8">
              <a href="#studios" className="inline-block bg-warm-800 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-warm-900 transition">御茶ノ水・神保町のスタジオを料金で比較する</a>
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              御茶ノ水・神保町でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京メトロ丸ノ内線「本郷三丁目駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアのスタジオは本郷三丁目駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。本郷三丁目駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">御茶ノ水・神保町エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめ。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアだけでなく、近隣の<Link href="/area/suidobashi/" className="text-warm-700 underline hover:text-warm-900">水道橋</Link>、<Link href="/area/akihabara/" className="text-warm-700 underline hover:text-warm-900">秋葉原</Link>、<Link href="/area/korakuen/" className="text-warm-700 underline hover:text-warm-900">後楽園</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>御茶ノ水・神保町エリアの豆知識：</strong>御茶ノ水・神保町エリアのスタジオにはウェアやタオルのレンタルサービスを提供しているところもあります。手ぶらで通いたい方は、体験予約時にレンタルの有無と料金を確認しておくと安心です。
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
                  月額10,450円から通えるスタジオ。体験レッスン0円のスタジオもあり、コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 本郷三丁目店（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• zen place pilates 神保町店（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• YARD 御茶ノ水スタジオ（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  リフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 本郷三丁目店</li>
                  <li className="text-warm-700">• ピラティスK 神保町店</li>
                  <li className="text-warm-700">• PILATES STUDIO ZERO 神保町店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  神保町駅・御茶ノ水駅から徒歩3分以内。仕事帰りや学校帰りに通いやすい好立地なスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 神保町店（神保町駅徒歩1分）</li>
                  <li className="text-warm-700">• Z&Z Pilates Studio（神保町駅徒歩1分）</li>
                  <li className="text-warm-700">• YARD 御茶ノ水（淡路町駅徒歩1分）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。大手チェーンの基本プランが中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円〜）</li>
                  <li>• YARD 御茶ノ水（10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・小班制選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 神保町店（13,420円〜）</li>
                  <li>• zen place フリープラン（16,940円）</li>
                  <li>• Z&Z Pilates Studio（19,900円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• PILATES STUDIO ZERO（37,200円〜）</li>
                  <li>• zen place プライベート（38,280円〜）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアの料金相場はグループで月4回10,450円〜19,900円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK神保町店は体験0円、zen placeやYARDは1,000円で体験できるので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。御茶ノ水・神保町エリアはJR中央線・総武線、東京メトロ丸ノ内線・千代田線、都営三田線・新宿線が利用でき、千代田区の文教地区の中心です。神保町駅・御茶ノ水駅・淡路町駅など複数駅が利用できるので、通勤・通学ルートに合わせてスタジオを選べますよ。
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
              今回は御茶ノ水・神保町のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では御茶ノ水・神保町に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンを予約しよう
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜1,000円。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
              <AreaModifierSections studios={studios} areaName="御茶ノ水・神保町" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 料金相場・近隣エリアと比べる</h2>
              <p className="text-warm-600 text-sm mb-4">全国の料金データや他エリアの人気スタジオも見ると、自分に合った1校が選びやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国の料金相場</Link>
                <Link href="/area/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国のエリア一覧</Link>
                <Link href="/area/hamamatsucho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">浜松町のピラティス</Link>
                <Link href="/area/akihabara/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">秋葉原のピラティス</Link>
                <Link href="/area/meguro/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">目黒のピラティス</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="ochanomizu" areaName="御茶ノ水・神保町" />

      <RelatedAreas currentSlug="ochanomizu" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
