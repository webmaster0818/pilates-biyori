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
  alternates: { canonical: 'https://biyori-pilates.com/area/tennoji/' },
  title: '天王寺のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '天王寺エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,天王寺,阿倍野,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 天王寺',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン', '男性利用可', '大阪阿部野橋駅徒歩3分', '全国他店利用可'],
    description: '全国130店舗以上を展開する大手ピラティススタジオです。天王寺スタジオは大阪阿部野橋駅出口2から徒歩3分、JR天王寺駅南口から徒歩5分の好立地です。マットグループ、リフォーマーグループ、プライベートレッスンの3形態を用意しています。男性も利用可能で、経験豊富なエデュケーターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '大阪阿部野橋駅 出口2 徒歩3分 / JR天王寺駅 南口 徒歩5分',
    address: '大阪府大阪市阿倍野区阿倍野筋1-3-15 阿倍野共同ビル6F',
    popularPlan: {
      name: 'マットグループ フリープラン',
      description: 'マットグループレッスン通い放題です。全国のzen placeスタジオで他店利用も可能です。',
      price: '月額 14,960円（税込）',
    },
    options: [
      'プライベートレッスン（1回 9,900円〜）',
      'リフォーマーグループ（1回 5,000円〜）',
      'マットグループ月4回（9,625円/月）',
      '全店舗他店利用可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の80%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 7:00〜16:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ロッカー', 'Wi-Fi'],
    },
  },
  {
    name: 'pilates K 天王寺店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: 'マンスリー4 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '体験0円', 'きんえいアポロビル'],
    description: 'マシンピラティス専門の女性専用スタジオです。大阪メトロ天王寺駅14番出口から徒歩1分、きんえいアポロビル6階に位置しています。リフォーマーを使ったグループレッスンを音楽に合わせて楽しく行うスタイルが人気です。体験レッスン0円で気軽に始められ、マンスリー4回13,420円からと費用対効果も優秀です。',
    access: '大阪メトロ天王寺駅 14番出口 徒歩1分 / 近鉄阿倍野橋駅 徒歩4分',
    address: '大阪府大阪市阿倍野区阿倍野筋1-5-31 きんえいアポロビル6F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスグループレッスンです。1回あたり約2,805円とお得です。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10〜15時 14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円（キャンペーン時0円の場合あり）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '楽しく運動', 'ストレス発散'],
    },
    basicInfo: {
      hours: '火・木 9:30〜22:00 / 月・水・金 10:00〜22:00 / 土・祝 9:30〜20:00 / 日 10:00〜19:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'ロッカー', 'パウダールーム', '女性専用'],
    },
  },
  {
    name: 'Rintosull（リントスル）天王寺店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月額 9,800円〜',
    trial: '体験レッスン 150円',
    features: ['LAVA運営', '女性専用', '大画面映像レッスン', '30分レッスンあり'],
    description: 'ホットヨガスタジオLAVAが運営するマシンピラティス専門スタジオです。アベノセンタービル4階に位置し、JR天王寺駅中央改札口から徒歩3分です。大画面スクリーンの映像とインストラクターによるダブル指導が特徴です。30分からのレッスンがあり、忙しい方でも通いやすい女性専用スタジオです。',
    access: 'JR天王寺駅 中央改札口 徒歩3分 / 大阪メトロ天王寺駅 14番出口 徒歩1分',
    address: '大阪府大阪市阿倍野区阿倍野筋1-5-36 アベノセンタービル4F',
    popularPlan: {
      name: 'マンスリーメンバー・4',
      description: '月4回のマシンピラティスレッスンです。大画面映像とインストラクターのダブル指導です。',
      price: '月4回 9,800円（税込）',
    },
    options: [
      'フルタイム通い放題（月額 16,800円）',
      'デイタイム通い放題（月額 13,800円）',
      'LAVA相互利用プラン（別途）',
      '体験レッスン 150円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '運動初心者', '手軽にピラティス'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 9:00〜19:00',
      closed: '毎週日曜',
      facilities: ['リフォーマー', '大画面スクリーン', 'ロッカー', '女性専用'],
    },
  },
  {
    name: 'La pilates 天王寺店',
    image: '/images/studios/la-pilates.webp',
    price: '月額 9,900円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×ピラティス', '女性専用', 'プライベート', '天王寺駅徒歩1分'],
    description: '整体とマシンピラティスを融合させた女性専用プライベートスタジオです。天王寺駅から徒歩1分、悲田院町の安倍野橋ビル8階に位置しています。骨盤矯正セラピーとマシンピラティスを組み合わせた独自メソッドで、根本から身体を整えます。完全マンツーマン指導で一人ひとりに合わせたオーダーメイドレッスンを提供しています。',
    access: '天王寺駅から徒歩1分',
    address: '大阪府大阪市天王寺区悲田院町9-20 安倍野橋ビル8F',
  },
  {
    name: 'Pilates Studio soRa',
    image: '/images/studios/pilates-sora-tennoji.webp',
    price: '1回 3,520円〜',
    trial: '体験レッスン 2,500円',
    features: ['STOTT認定', 'マット&マシン', '上本町駅徒歩5分', 'プライベートあり'],
    description: 'STOTT PILATES認定インストラクターが指導するピラティススタジオです。大阪市天王寺区上本町に位置し、上本町駅から徒歩5分です。プライベートレッスンとグループレッスンの両方に対応しています。マシンピラティスとマットピラティスを組み合わせた効果的なトレーニングが特徴です。',
    access: '上本町駅から徒歩5分',
    address: '大阪府大阪市天王寺区上本町7-4-25',
  },
  {
    name: 'Pilates studio Sonare',
    image: '/images/studios/pilates-sonare-tennoji.webp',
    price: '1回 9,350円〜',
    trial: '体験レッスン あり',
    features: ['完全プライベート', 'マシン完備', '桃谷駅徒歩5分', 'オーダーメイド'],
    description: '完全プライベートレッスン専門のピラティススタジオです。JR桃谷駅から徒歩5分の生野区に位置しています。一人ひとりの身体の状態に合わせたオーダーメイドレッスンを提供しています。経験豊富なインストラクターがマンツーマンで指導し、姿勢改善や体幹強化に効果的です。',
    access: 'JR桃谷駅から徒歩5分',
    address: '大阪府大阪市生野区勝山北2-1-16',
  },
  {
    name: 'fis.pilates 天王寺店',
    image: '/images/studios/fis-pilates.webp',
    price: '月額 3,000円台〜（分割払い）',
    trial: '体験レッスン 4,000円',
    features: ['女性専用', '完全個室', '女性トレーナー', 'お子様連れ可'],
    description: '女性専用マシンピラティス専門パーソナルスタジオです。完全個室で女性トレーナーによるマンツーマン指導が特徴です。ウェア・靴下・タオル・ミネラルウォーター・プロテインが無料で用意されており、手ぶらで通えます。ベビーベッドやバウンサーも完備で、お子様連れのママにも人気です。',
    access: '天王寺駅から徒歩5分',
    address: '大阪府大阪市阿倍野区阿倍野筋1丁目',
  },
  {
    name: 'ピラティスアヴニール 天王寺店',
    image: '/images/studios/pilates-avenir-tennoji.webp',
    price: '都度払い・月額制あり',
    trial: '体験レッスン あり',
    features: ['完全個室', 'マンツーマン', 'あべのベルタ', '阿倍野駅徒歩1分'],
    description: '完全個室でマンツーマンのマシンピラティスを提供するパーソナルスタジオです。あべのベルタ4階に位置し、地下鉄阿倍野駅から徒歩1分の好立地です。都度払い・月額制・回数券制の3プランから選べ、朝7時から夜23時まで営業と通いやすさも抜群です。顧客満足度の高い丁寧な指導が評判です。',
    access: '地下鉄阿倍野駅 徒歩1分 / JR天王寺駅 徒歩5分',
    address: '大阪府大阪市阿倍野区阿倍野筋3-10-1 あべのベルタ4F',
  },
  {
    name: 'Hain pilates 天王寺店',
    image: '/images/studios/hain-pilates.webp',
    price: '月4回プランあり',
    trial: '体験レッスン 2,200円',
    features: ['女性専用', '30分レッスン', '女性インストラクター', '天王寺駅徒歩3分'],
    description: '女性専用のパーソナルマシンピラティススタジオです。天王寺駅から徒歩3分です。女性インストラクターによるマンツーマン指導で、1回30分で完結する効率的なレッスンが特徴です。短時間で効果を実感できるプログラムで、忙しい方にもおすすめです。',
    access: '天王寺駅から徒歩3分',
    address: '大阪府大阪市天王寺区悲田院町8',
  },
  {
    name: 'PILATES & PERSONAL GYM LAULE\'A',
    image: '/images/pilates2.webp',
    price: 'チケット制',
    trial: '体験レッスン あり',
    features: ['ピラティス×パーソナル', 'お子様連れ可', '阿倍野駅徒歩10秒', 'グループあり'],
    description: 'ピラティスとパーソナルジムを融合させたスタジオです。谷町線阿倍野駅から徒歩10秒という驚異のアクセスです。姿勢改善やダイエットに特化し、最大4名のグループレッスンとパーソナルレッスンの両方を提供しています。お子様連れ可で、子育て中のママにも通いやすいと好評です。',
    access: '大阪メトロ谷町線 阿倍野駅 徒歩10秒 / 御堂筋線 天王寺駅 徒歩5分',
    address: '大阪府大阪市阿倍野区阿倍野筋3-5-11 あべの恵寿ビル2F',
  },
  {
    name: 'ピラティス・トトヤセ 天王寺店',
    image: '/images/studios/pilates-totoyase-tennoji.webp',
    price: 'パーソナルプラン',
    trial: '体験レッスン あり',
    features: ['整体×ピラティス', '女性専用', '完全個室', '手ぶらで参加可能'],
    description: 'オーダーメイドの整体とマシンピラティスで身体を整える女性専用スタジオです。天王寺駅から徒歩3分の完全個室空間です。シューズ不要、ウェアレンタルあり、お水飲み放題で手ぶら来店が可能です。担当トレーナーが目標達成までマンツーマンで責任を持って指導します。',
    access: '天王寺駅から徒歩3分',
    address: '大阪府大阪市阿倍野区阿倍野筋1丁目',
  },
  {
    name: 'Belluna Pilates',
    image: '/images/studios/belluna-pilates-tennoji.webp',
    price: '1回 2,000円〜',
    trial: '体験レッスン あり',
    features: ['リーズナブル', 'グループレッスン', '少人数制', '寺田町駅徒歩3分'],
    description: '一人ひとりに合わせた丁寧な指導で、健康で豊かな生活をサポートするピラティススタジオです。天王寺スタジオは寺田町駅から徒歩3分です。水曜・金曜の10:30からグループレッスンを開催しています。1回2,000円からとリーズナブルな価格設定が魅力で、気軽にピラティスを始めたい方におすすめです。',
    access: '寺田町駅から徒歩3分',
    address: '大阪府大阪市天王寺区',
  },
  {
    name: 'Dr.ピラティス 天王寺店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオです。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せます。天王寺エリアです（詳細は公式サイト参照）。',
    access: '天王寺エリア（詳細は公式サイト参照）',
    address: '大阪府（詳細は公式サイト参照）',
  },
  {
    name: 'the SILK 天王寺MIO店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370円 / 通い放題 19,980円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴です。天王寺駅から直結です（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '天王寺駅から直結',
    address: '大阪府大阪市天王寺区悲田院町10番48号天王寺ミオプラザ館7階 第705号',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。天王寺エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。pilates Kやリントスルなど映像付きのレッスンもあるので、動きが分かりやすく安心です。インストラクターが基礎から指導するため、運動が苦手な方でも始めやすい環境です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。天王寺エリアではpilates Kやリントスルなどマシン専門スタジオが多く、zen placeは両方に対応しています。',
  },
  {
    question: '天王寺のピラティススタジオの料金相場は？',
    answer: '天王寺エリアのピラティススタジオの料金相場は、月4回のグループレッスンで10,000円〜15,000円程度です。pilates Kのマンスリー4が13,420円、リントスルが9,800円と比較的お手頃です。体験レッスンは無料〜4,000円が一般的です。プライベートレッスンは1回7,000円〜12,000円が相場となっています。',
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
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。fis.pilatesやトトヤセではウェアレンタルがあるので手ぶらでも大丈夫です。詳細は各スタジオの体験レッスン案内でご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的です。目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。La pilatesやSonareなど整体×ピラティスのスタジオなら、より効果的にアプローチできます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルはLa pilatesやfis.pilatesのように一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめです。グループはpilates Kやリントスルのように料金が安く、仲間と楽しく続けられるのが魅力です。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function TennojiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '天王寺', url: 'https://biyori-pilates.com/area/tennoji/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス天王寺おすすめ14選<br className="hidden md:block" />
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
              <span className="text-warm-600">天王寺</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="天王寺" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、天王寺・阿倍野エリアでおすすめのピラティススタジオ14選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>天王寺・阿倍野でピラティススタジオを探している</span>
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
                  <span>JR天王寺駅・大阪メトロ御堂筋線・谷町線からアクセスの良いスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="天王寺" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              天王寺のおすすめピラティススタジオ14選
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
              天王寺のピラティス料金相場
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
                    <td className="px-4 py-3">2,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 3,000円〜9,900円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">150円〜4,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              天王寺はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるのでご確認ください。近隣のなんばエリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              天王寺でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">大阪阿部野橋駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  天王寺エリアのスタジオは大阪阿部野橋駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにすることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  天王寺はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  天王寺エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  天王寺エリアだけでなく、近隣の<Link href="/area/namba/" className="text-warm-700 underline hover:text-warm-900">なんば</Link>、<Link href="/area/abeno/" className="text-warm-700 underline hover:text-warm-900">阿倍野</Link>、<Link href="/area/shinsaibashi/" className="text-warm-700 underline hover:text-warm-900">心斎橋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>天王寺エリアの豆知識：</strong>天王寺はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオをお選びください。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                  月額10,000円前後で通える料金を抑えられるスタジオです。体験レッスン0円のスタジオもあります。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 天王寺（月4回 9,800円）</li>
                  <li className="text-warm-700">• pilates K 天王寺（月4回 13,420円）</li>
                  <li className="text-warm-700">• Belluna Pilates（1回 2,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備しています。マシンピラティスを本格的に学びたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 天王寺</li>
                  <li className="text-warm-700">• pilates K 天王寺</li>
                  <li className="text-warm-700">• Rintosull 天王寺</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・アクセス良好</h3>
                <p className="text-warm-600 text-sm mb-4">
                  JR天王寺駅・大阪メトロ御堂筋線・谷町線から徒歩すぐです。あべのハルカス周辺の好立地です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• LAULE'A（阿倍野駅徒歩10秒）</li>
                  <li className="text-warm-700">• La pilates（天王寺駅徒歩1分）</li>
                  <li className="text-warm-700">• pilates K（天王寺駅14番出口徒歩1分）</li>
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
                  グループレッスンが中心です。マシン専門スタジオもこの価格帯で見つかります。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（9,800円/月4回）</li>
                  <li>• zen place（9,625円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜17,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  通い放題プランのある大手スタジオです。充実した設備と豊富なレッスンです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place フリー（14,960円）</li>
                  <li>• pilates K マンスリー8（16,170円）</li>
                  <li>• Rintosull 通い放題（16,800円）</li>
                  <li>• pilates K（13,420円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスンです。短期集中で成果を目指したい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Sonare（1回9,350円）</li>
                  <li>• La pilates（プライベート）</li>
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
                  天王寺エリアの料金相場は月4回のグループレッスンで10,000円〜15,000円程度です。リントスルの月4回9,800円やpilates Kの13,420円など、比較的お手頃なスタジオもあります。料金だけでなく、入会金やレンタル料などもご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。pilates Kは体験0円、リントスルは150円、zen placeは1,000円と、気軽に試せるスタジオがそろっています。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。天王寺はJR天王寺駅、大阪メトロ御堂筋線・谷町線、近鉄南大阪線が集まる大阪南部のターミナル駅です。あべのハルカスや天王寺公園に隣接し、阿倍野筋沿いには多くのスタジオが集まっています。レッスン前後にショッピングや食事も楽しめる便利なエリアです。
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
              本ページでは、天王寺・阿倍野エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              天王寺はJR・大阪メトロ・近鉄が集まるターミナル駅で、阿倍野筋を中心に多くのピラティススタジオが集まっています。あべのハルカスや天王寺公園が近く、レッスン前後の時間も充実させやすいエリアです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、天王寺に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
      <ConsultantSection areaKey="tennoji" areaName="天王寺" />

      {/* g1-link-202609 */}

      <div className="my-8 bg-white border border-warm-200 p-5">

        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>

        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>

        <div className="flex flex-wrap gap-2">

          <Link href="/brands/the-silk-tennoji-mio/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 天王寺MIO店の料金・体験を見る</Link>

        </div>

      </div>


      <RelatedAreas currentSlug="tennoji" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
