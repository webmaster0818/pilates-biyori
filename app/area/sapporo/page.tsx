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
  alternates: { canonical: 'https://biyori-pilates.com/area/sapporo/' },
  title: 'ピラティス札幌おすすめ10選人気スタジオの料金プランの比較',
  description: '札幌のおすすめピラティススタジオ10選を比較しています。グループ月2回5,500円〜の料金相場、マシン専門・女性専用のスタジオ情報、体験レッスンの持ち物・冬場の注意点まで完全網羅しています。',
  keywords: 'ピラティス,札幌,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Pilates Mee 札幌大通り店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル 月4回 19,800円〜（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。大通駅 徒歩6分です。',
    access: '大通駅 徒歩6分',
    address: '〒060-0062 北海道札幌市中央区南2条西6丁目5-3 住友狸小路プラザハウス 504',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '運動習慣づくり'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'zen place pilates 札幌',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'グループ体験 1,000円',
    trial: '体験レッスン 1,000円',
    features: ['マット＆マシン', '全国展開', '北5条西6丁目', 'エデュケーター養成'],
    description: '全国100店舗以上を展開する大手ピラティススタジオです。マットピラティスからマシンピラティスまで幅広いレッスンを提供しています。初心者からエデュケーター養成まで対応し、アットホームな雰囲気で長く続けられるスタジオです。',
    access: 'アクセスは公式の店舗ページでご確認ください',
    address: '北海道札幌市中央区北5条西6丁目1-23 第二北海道通信ビル 508',
    popularPlan: {
      name: 'グループレッスン体験',
      description: 'マット・マシンどちらも選べる体験レッスンです。初心者でも安心の丁寧な指導です。',
      price: '体験 1,000円（税込）',
    },
    options: [
      'プライベートレッスン（1回 8,250円）',
      'エデュケーター養成コース（別途）',
      'ウェアレンタル（月額 2,200円）',
      'タオルレンタル（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ダイエット', '体幹強化', 'エデュケーター養成'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスK 札幌駅前店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '暗闇レッスン', '札幌駅直結'],
    description: '音楽に合わせて楽しくボディメイクを目指せます。女性専用スタジオのため安心して通えます。札幌駅地下直結で天候に左右されずに通えます。暗闇×音楽×マシンピラティスの融合レッスンが人気です。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。',
    access: '札幌駅南口から徒歩5分 / 地下鉄さっぽろ駅徒歩3分',
    address: '北海道札幌市中央区北4条西5丁目 アスティ45ビル 2F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闘×音楽×マシンピラティスの融合レッスンです。楽しく続けられると人気のプランです。',
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
      hours: '火〜金 10:00-22:00 / 土日祝 10:00-18:30',
      closed: '月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'スターピラティス 札幌駅前スタジオ',
    image: '/images/studios/star-pilates-sapporo.webp',
    price: '月2回 5,500円〜',
    trial: '体験レッスン あり',
    features: ['業界最安値級', 'チカホ直結', '酸素カプセル', 'セルフエステ無料'],
    description: '業界最安値級の月額5,500円から始められるマシンピラティスです。チカホ直結の札幌グランドホテル別館内で天候を気にせず通えます。酸素カプセル・水素吸入・セルフエステマシンが追加料金なしで利用可能です。初心者専用プログラムが充実し、85%が初心者から始めることをおすすめします。',
    access: 'チカホ直結・札幌グランドホテル別館5F',
    address: '札幌市中央区北1条西4丁目2−12 札幌グランドホテル別館5F',
    popularPlan: {
      name: '月2回メンバー',
      description: '業界最安値級の月額5,500円です。初心者でも続けやすいプランです。',
      price: '月2回 5,500円（税込）',
    },
    options: [
      '月4回メンバー（8,800円）',
      '追加レッスンチケット（1回 2,750円）',
      'セルフエステマシン（1日1回無料）',
      '酸素カプセル・水素吸入（別途料金）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['料金重視', 'ボディメイク', '姿勢改善', '美容ケア'],
    },
    basicInfo: {
      hours: '平日 10:00〜20:00 / 土日祝 10:00〜15:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '酸素カプセル', 'セルフエステ', 'コワーキングスペース'],
    },
  },
  {
    name: 'La pilates 札幌店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=816076W-u518546p&p=E9887623',
    image: '/images/studios/la-pilates.webp',
    price: '月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×ピラティス', '女性専用', '大通駅徒歩1分', '骨膜整体'],
    description: '整体とマシンピラティスを融合させた女性専用プライベートスタジオです。大通駅34番出口から徒歩1分です。独自の「骨膜整体 × マシンピラティス」プログラムで、肩こり・腰痛・姿勢の悩みを根本からケアです。ウッド調の温かみある内装でリラックスしながらトレーニングできます。',
    access: '大通駅34番出口から徒歩1分',
    address: '北海道札幌市中央区南1条西1-2 松崎ビル3F',
    popularPlan: {
      name: 'サブスク 月1回コース',
      description: '整体とマシンピラティスの融合プログラムです。初心者から経験者まで対応しています。',
      price: '月1回 12,000円（税込）',
    },
    options: [
      '月2回コース（月額 22,000円・単価 11,000円）',
      '月4回コース（月額 40,000円・単価 10,000円）',
      '月6回コース（月額 54,000円・単価 9,000円）',
      '年払いコース（さらにお得）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['肩こり・腰痛改善', '姿勢改善', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '9:00〜21:00（最終受付20:00）',
      closed: '年末年始',
      facilities: ['ロッカー', 'パウダールーム', 'マシン4台', 'プライベート空間'],
    },
  },
  {
    name: 'LATECO（ラティコ）',
    image: '/images/studios/lateco-sapporo.webp',
    price: '月4回 15,400円',
    trial: '体験レッスン 2,000円',
    features: ['加圧×ピラティス', '女性専用', 'AI姿勢解析', '大通駅徒歩3分'],
    description: '北海道初の加圧・マシンピラティス専門スタジオです。大通駅から徒歩3分です。加圧ベルトで血流を制限し成長ホルモンの分泌を促進です。AI姿勢解析で姿勢・バランスを可視化し、効果的なトレーニングを実現しています。完全予約制・少人数制（8名限定）で密を避けて安心です。',
    access: '大通駅から徒歩3分',
    address: '北海道札幌市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: '月会費（月4回利用）',
      description: '加圧×マシンピラティスで成長ホルモン分泌を促進です。美肌・ダイエット効果が期待できます。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      'AI姿勢解析（Sportip）',
      'サプリメントサーバー（Grande・無料）',
      'プロテイン自動調合（最大16種）',
      '1レッスン50分',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['アンチエイジング', 'ダイエット', '基礎体温向上', '美肌・美髪'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['女性専用', '少人数制（8名限定）', '完全予約制', 'AI姿勢解析', 'サプリメントサーバー'],
    },
  },
  {
    name: 'BodySoul（ボディソウル）',
    image: '/images/studios/bodysoul-sapporo.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['北海道初', 'マット専門', '2004年開設', 'インストラクター養成'],
    description: '2004年開設、北海道初のマットピラティス専門スタジオです。20年以上の実績があり、多くの会員が1回のレッスンで身体の変化を実感できます。初心者でも安心して始められる丁寧な指導が魅力です。グループレッスンとプライベートレッスンの両方に対応しています。',
    access: '詳細は公式サイト参照',
    address: '北海道札幌市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '少人数制で仲間と楽しく続けられます。初心者も安心のプログラムです。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン（マンツーマン指導）',
      'インストラクター養成コース（FTP認定ライセンス）',
      'グループレッスン',
    ],
    userProfile: {
      ageRange: '40代〜60代が中心',
      genderRatio: '女性95% / 男性5%',
      purpose: ['腰痛改善', '肩こり解消', '体形改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マットピラティス専門', '少人数制', 'インストラクター養成'],
    },
  },
  {
    name: 'Repilates 札幌円山店',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3TJ72A+5FZU+5YJRM',
    image: '/images/studios/repilates.webp',
    price: '月3回 12,900円〜（公式表記・税表記なし）',
    trial: '体験レッスン 0円（通常3,300円・60分・初回1回）',
    features: ['女性専用', 'マシン専門', '円山エリア', 'ボディリメイク'],
    description: 'マシン専門ピラティススタジオです。円山エリアに展開する女性専用スタジオです。「10回で違いを知り、20回で見た目が変わり、30回ですべてが変わる」をコンセプトに、姿勢習慣を正すことで美しいボディラインを実現しています。ライフスタイルマガジン「poroco」に掲載実績があります。',
    access: '円山エリア',
    address: '北海道札幌市中央区北１条西２０丁目３ 岸本ビル１F',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティスのグループレッスン月4回です（公式トップの表記。価格は店舗により異なる場合があります）。',
      price: '月4回 14,190円（税表記なし）',
    },
    options: [
      '月3回 12,900円／月6回 19,650円／月8回 23,000円／通い放題 28,490円',
      'プライベートチケット 1回 9,900円',
      'ドロップイン 4,500円',
      '入会金 5,000円・事務手数料 5,000円（体験当日の入会で無料）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '美しいボディライン'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '不定休',
      facilities: ['女性専用', 'マシン専門', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: '24/7ピラティス 札幌店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=J11817X.1.B1620582.U1357808',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらで参加可能）',
    features: ['マシンピラティス', '女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオです。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供しています。すすきの駅から徒歩5分です。※一部のご案内やサポート対応は、男性スタッフが行う場合がございます。※24/7Workout併設店舗のため、パーソナルトレーニングの男性会員様がご来店される場合もございます。',
    access: 'すすきの駅から徒歩5分',
    address: '北海道札幌市中央区南三条東二丁目1番地 サンシャインビル1階',
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
  {
    name: 'Pilates Mee札幌円山公園店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。円山公園駅から徒歩2分です。',
    access: '円山公園駅 徒歩2分',
    address: '〒064-0801 北海道札幌市中央区南1条西24丁目1-11 LEADビル302',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },

  },
]

const faqs = [
  {
    question: '札幌でピラティス初心者におすすめのスタジオはどこですか？',
    answer: 'スターピラティス札幌駅前スタジオがおすすめです。入会者の85%が初心者で、初級クラスはインストラクター2名体制でサポートしています。月額5,500円から始められるので、気軽にスタートできます。',
  },
  {
    question: '札幌駅直結で通えるピラティススタジオはありますか？',
    answer: 'はい、ピラティスK 札幌駅前店（アスティ45ビル2F・地下直結）があります。天候に左右されず通えます。',
  },
  {
    question: '札幌で一番安いピラティススタジオはどこですか？',
    answer: 'スターピラティス札幌駅前スタジオが月2回5,500円で業界最安値級です。月4回でも8,800円とリーズナブルです。さらにセルフエステマシンが1日1回無料で利用できます。',
  },
  {
    question: '女性専用のピラティススタジオはありますか？',
    answer: 'はい、4つあります。ピラティスK札幌駅前店、La pilates札幌店、LATECO、Repilates札幌円山店はすべて女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。',
  },
  {
    question: '体験レッスンはありますか？料金はいくらですか？',
    answer: 'ほとんどのスタジオで体験レッスンを実施しています。ピラティスK札幌駅前店は無料、zen place pilates札幌は1,000円、LATECOは2,000円、La pilatesは3,000円台、Repilatesは0円（通常3,300円）です。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは何ですか？',
    answer: 'マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で行い、体幹を鍛えるのに効果的です。初心者にはマシンピラティスがおすすめです。',
  },
  {
    question: 'どのくらいの期間で効果が出ますか？',
    answer: '週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。',
  },
  {
    question: '肩こりや腰痛の改善に効果はありますか？',
    answer: 'はい、効果が期待できます。特にLa pilates札幌店は整体とピラティスを組み合わせた独自プログラムで肩こり・腰痛を根本から改善しています。BodySoulでも腰痛改善の実績が多数あります。',
  },
  {
    question: '運動が苦手でも大丈夫ですか？',
    answer: 'はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので、正しいフォームで効果的にトレーニングできます。',
  },
  {
    question: 'インストラクターになりたいのですが、養成コースはありますか？',
    answer: 'はい、zen place pilates札幌とBodySoulでインストラクター養成コースを開講しています。BodySoulはFTP認定ライセンスが取得でき、これまでに100名以上の修了生が各地でインストラクターとして活躍しています。',
  },
]

export default async function SapporoAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '札幌', url: 'https://biyori-pilates.com/area/sapporo/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス札幌おすすめ10選<br className="hidden md:block" />
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
              <span className="text-warm-600">札幌</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="札幌" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、札幌エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>札幌でピラティススタジオを探している</span>
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
                  <span>JR札幌駅や地下鉄南北線・東西線・東豊線で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="札幌" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              札幌のおすすめピラティススタジオ10選
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
                  月額10,000円以下で通える格安スタジオです。料金重視で気軽に始めたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• スターピラティス 札幌駅前スタジオ（月2回 5,500円〜）</li>
                  <li className="text-warm-700">• スターピラティス 月4回（8,800円）</li>
                  <li className="text-warm-700">• zen place pilates 札幌（体験 1,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  男性の目を気にせずトレーニングに集中できる女性専用スタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 札幌駅前店</li>
                  <li className="text-warm-700">• La pilates 札幌店</li>
                  <li className="text-warm-700">• LATECO（ラティコ）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  JR札幌駅や地下鉄駅から直結・徒歩圏内です。冬の札幌でも天候を気にせず通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• スターピラティス（チカホ直結）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。手軽に始めたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• スターピラティス 札幌駅前（月2回 5,500円〜）</li>
                  <li>• スターピラティス 月4回（8,800円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  大手スタジオのグループレッスンです。マシン完備で充実の設備です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 札幌駅前店（月4回 13,420円）</li>
                  <li>• LATECO（月4回 15,400円）</li>
                  <li>• La pilates 札幌店（月1回 12,000円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">プライベート</p>
                <p className="text-sm text-warm-600 mb-4">
                  パーソナル・プライベートレッスンです。短期集中で成果を目指したい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 札幌（1回 8,250円〜）</li>
                  <li>• La pilates 月2回（22,000円）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にすることをおすすめします。ダイエット、姿勢改善、体幹強化、肩こり・腰痛改善など、目的によって最適なスタジオやプログラムは変わります。目的を明確にしておくと、スタジオを選びやすくなります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  札幌エリアの料金相場はグループで月4回5,500円〜15,400円程度です。無理なく継続できる予算を決めることをおすすめします。料金だけでなく、入会金やマット・ウェアのレンタル料などもご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスKは無料で体験できるので、体験レッスンをご利用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。札幌はJR札幌駅と地下鉄南北線・東西線・東豊線が利用でき、北海道札幌市の中心エリアです。駅直結やチカホ直結のスタジオを選ぶと、冬の雪の日でも天候を気にせず通えて便利です。すすきのや大通からもアクセス良好です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              札幌のピラティス料金相場
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                札幌のピラティスシーンは大通・札幌駅周辺を中心に成長中です。全国チェーンの進出と、地元密着型の個性的なスタジオが共存するエリアです。月2回5,500円〜と道内ではリーズナブルなプランから、月額15,400円の本格プランまで幅広い選択肢があります。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">5,500円〜15,400円</p>
                  <p className="text-sm text-warm-600">スターピラティスは月2回5,500円〜と札幌最安クラスです。ピラティスK札幌駅前店は月4回13,420円＋施設維持費825円です。LATECO（ラティコ）は月4回15,400円で女性専門の加圧×マシンピラティスです。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">パーソナル・サブスクプラン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">12,000円〜/月1回</p>
                  <p className="text-sm text-warm-600">La pilates札幌店はサブスク月1回12,000円〜で整体×マシンピラティスの組み合わせです。zen place pilates札幌はプライベートレッスンも対応しています。BodySoul・Repilatesなど地元スタジオはパーソナル対応で料金要問合せです。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は10,000円〜22,000円が相場です。キャンペーン期間中は0円になるスタジオもあります。体験レッスンはzen placeが1,000円〜、La pilatesは2,000円で体験可能です。まずは複数スタジオの体験を回って比較するのがおすすめです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              札幌でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">冬場の通いやすさは最重要ポイント</h3>
                <p className="text-warm-600 leading-relaxed">
                  札幌の冬（12月〜3月）は積雪が多く、路面が凍結することもあります。駅直結または地下歩行空間（チカホ）からアクセスできるスタジオを選ぶと、冬場もストレスなく通い続けられます。ピラティスK札幌駅前店は札幌駅すぐで冬場のアクセスに有利です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">札幌駅と大通駅でエリアが分かれる</h3>
                <p className="text-warm-600 leading-relaxed">
                  札幌のスタジオは札幌駅周辺と大通駅周辺（南1条〜南3条）に集中しています。地下歩行空間でつながっているため徒歩でも移動可能ですが、通勤経路に合わせて選ぶのが継続のコツです。LATECO（ラティコ）は大通駅エリアで女性専門の個性的なスタジオです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの行動を</h3>
                <p className="text-warm-600 leading-relaxed">
                  札幌は東京に比べるとスタジオ数が少なく、人気スタジオのキャンペーンや体験枠はすぐに埋まりがちです。気になるスタジオがあれば、早めに体験レッスンをご予約ください。特に新規オープンのスタジオは特別キャンペーンを実施することが多いのでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">暖房環境もチェック</h3>
                <p className="text-warm-600 leading-relaxed">
                  札幌のスタジオは暖房がしっかり効いているのが基本ですが、スタジオの位置（ビルの1階か上層階か）によって体感温度が異なることもあります。冬場のレッスンでは、最初は体が冷えているためウォームアップが重要です。体験レッスン時にスタジオの室温環境もご確認ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが基本です。冬場はスタジオ内が暖かいため薄着で問題ありませんが、行き帰りの防寒着は必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>水分（500ml程度）</strong>：暖房の効いたスタジオでは想像以上に汗をかきます。必ずご持参ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>タオル</strong>：汗拭き用に1枚です。冬場は乾燥するため保湿クリームもあると便利です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは靴下必須です。滑り止め付きをご持参ください。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>がマストです。ピラティスでは全身を大きく動かすため、ストレッチの効く素材をお選びください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>脱ぎ着しやすい服装</strong>が便利です。札幌は外と室内の温度差が大きいため、重ね着で調整しやすい服が最適です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>対応のスタジオもあります。ピラティスKは手ぶら体験可能な場合もあります。事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>冬場のブーツ</strong>は置き場所をご確認ください。ロッカーが小さいスタジオでは、大きなブーツの収納に困ることもあります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>札幌エリアの豆知識：</strong>札幌駅〜大通駅間の地下歩行空間（チカホ）は、雪の日でも快適に移動できる約520mの地下通路です。このルート沿いのスタジオなら冬場も安心して通えます。レッスン後は大通公園周辺のカフェでリフレッシュしたり、すすきのエリアでの食事も楽しめます。北海道ならではの旬の食材で体の内側からもキレイを目指すことをおすすめします。
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
              本ページでは、札幌のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、札幌に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜3,300円です。<br />
              まずは体験レッスンへの参加をおすすめします。
            </p>
            <Link
              href="#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="sapporo" areaName="札幌" />

      <RelatedAreas currentSlug="sapporo" />
      <SiteFooter />

      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://biyori-pilates.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: '地域別',
                item: 'https://biyori-pilates.com/area',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '札幌',
                item: 'https://biyori-pilates.com/area/sapporo',
              },
            ],
          }),
        }}
      />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
