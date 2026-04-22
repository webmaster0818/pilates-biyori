import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'



export const metadata = {
  title: '【2026最新】ピラティス天王寺おすすめ12選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '天王寺・阿倍野エリアのおすすめピラティススタジオ12選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,天王寺,阿倍野,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 天王寺',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 21,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '2週間前',
        text: '大阪阿部野橋駅から徒歩3分で通いやすいです。マットもマシンも両方受けられるのが魅力。インストラクターの質が高く、身体の使い方を丁寧に教えてくれます。',
      },
      {
        author: 'K.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'リフォーマーグループレッスンが楽しい！少人数制なので丁寧に見てもらえます。男性もOKなので夫婦で通っています。天王寺公園の近くでレッスン後の散歩も気持ちいい。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開しているので出張先でも通えるのが便利。体験レッスンが1,000円とお手頃で始めやすかったです。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン', '男性OK', '大阪阿部野橋駅徒歩3分', '全国相互利用可'],
    description: '全国130店舗以上を展開する大手ピラティススタジオ。天王寺スタジオは大阪阿部野橋駅出口2から徒歩3分、JR天王寺駅南口から徒歩5分の好立地。マットグループ、リフォーマーグループ、プライベートレッスンの3形態を用意。男性も利用可能で、経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '大阪阿部野橋駅 出口2 徒歩3分 / JR天王寺駅 南口 徒歩5分',
    address: '大阪府大阪市阿倍野区阿倍野筋1-3-15 阿倍野共同ビル6F',
    popularPlan: {
      name: 'マットグループ フリープラン',
      description: 'マットグループレッスン通い放題。全国のzen placeスタジオで相互利用も可能。',
      price: '月額 14,960円（税込）',
    },
    options: [
      'プライベートレッスン（1回 9,900円〜）',
      'リフォーマーグループ（1回 5,000円〜）',
      'マットグループ月4回（10,450円/月）',
      '全店舗相互利用可能',
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
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 131,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '音楽に合わせてリフォーマーを使うグループレッスンが楽しい！きんえいアポロビルの中にあるので、天王寺でのショッピング帰りに通えます。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1週間前',
        text: '女性専用なので周りを気にせず集中できます。マンスリー4回で11,220円はこのエリアでは安い方。体験0円で始められたのも嬉しかった。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: 'インストラクターが明るくて雰囲気がいいです。あべのハルカス近くなのでレッスン後にカフェやショッピングも楽しめます。',
      },
    ],
    price: 'マンスリー4 11,220円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '体験0円', 'きんえいアポロビル'],
    description: 'マシンピラティス専門の女性専用スタジオ。大阪メトロ天王寺駅14番出口から徒歩1分、きんえいアポロビル6階に位置。リフォーマーを使ったグループレッスンを音楽に合わせて楽しく行うスタイルが人気。体験レッスン0円で気軽に始められ、マンスリー4回11,220円からとコスパも優秀です。',
    access: '大阪メトロ天王寺駅 14番出口 徒歩1分 / 近鉄阿倍野橋駅 徒歩4分',
    address: '大阪府大阪市阿倍野区阿倍野筋1-5-31 きんえいアポロビル6F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスグループレッスン。1回あたり約2,805円とお得。',
      price: '月4回 11,220円（税込）',
    },
    options: [
      'マンスリーフルメンバー（月額 15,070円）',
      'マンスリーデイメンバー（月額 12,320円）',
      '追加受講（1回 2,200円）',
      '入会金 5,000円（キャンペーン時0円の場合あり）',
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
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 74,
    reviews: [
      {
        author: 'R.M',
        rating: 5,
        date: '1週間前',
        text: 'LAVAが運営しているので安心感があります。大画面スクリーンを見ながらレッスンできるので分かりやすい。アベノセンタービルの中で天王寺駅から近いです。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '2週間前',
        text: '30分のレッスンもあるので忙しい日でも通いやすいです。女性専用なのも嬉しいポイント。インストラクターのサポートが手厚い。',
      },
      {
        author: 'N.S',
        rating: 5,
        date: '3週間前',
        text: 'マシンピラティス初心者でしたが、映像とインストラクターのダブル指導で安心してレッスンを受けられました。天王寺公園の近くで通いやすい。',
      },
    ],
    price: '月額 9,800円〜',
    trial: '体験レッスン 150円',
    features: ['LAVA運営', '女性専用', '大画面映像レッスン', '30分レッスンあり'],
    description: 'ホットヨガスタジオLAVAが運営するマシンピラティス専門スタジオ。アベノセンタービル4階に位置し、JR天王寺駅中央改札口から徒歩3分。大画面スクリーンの映像とインストラクターによるダブル指導が特徴。30分からのレッスンがあり、忙しい方でも通いやすい女性専用スタジオです。',
    access: 'JR天王寺駅 中央改札口 徒歩3分 / 大阪メトロ天王寺駅 14番出口 徒歩1分',
    address: '大阪府大阪市阿倍野区阿倍野筋1-5-36 アベノセンタービル4F',
    popularPlan: {
      name: 'マンスリーメンバー・4',
      description: '月4回のマシンピラティスレッスン。大画面映像とインストラクターのダブル指導。',
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
    rating: 4.8,
    price: '月額 9,900円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×ピラティス', '女性専用', 'プライベート', '天王寺駅徒歩1分'],
    description: '整体とマシンピラティスを融合させた女性専用プライベートスタジオ。天王寺駅から徒歩1分、悲田院町の安倍野橋ビル8階に位置。骨盤矯正セラピーとマシンピラティスを組み合わせた独自メソッドで、根本から身体を整えます。完全マンツーマン指導で一人ひとりに合わせたオーダーメイドレッスンを提供。',
    access: '天王寺駅から徒歩1分',
    address: '大阪府大阪市天王寺区悲田院町9-20 安倍野橋ビル8F',
  },
  {
    name: 'Pilates Studio soRa',
    image: '/images/studios/pilates-sora-tennoji.webp',
    rating: 4.7,
    price: '1回 3,520円〜',
    trial: '体験レッスン 2,500円',
    features: ['STOTT認定', 'マット&マシン', '上本町駅徒歩5分', 'プライベートあり'],
    description: 'STOTT PILATES認定インストラクターが指導するピラティススタジオ。大阪市天王寺区上本町に位置し、上本町駅から徒歩5分。プライベートレッスンとグループレッスンの両方に対応。マシンピラティスとマットピラティスを組み合わせた効果的なトレーニングが特徴です。',
    access: '上本町駅から徒歩5分',
    address: '大阪府大阪市天王寺区上本町7-4-25',
  },
  {
    name: 'Pilates studio Sonare',
    image: '/images/studios/pilates-sonare-tennoji.webp',
    rating: 4.8,
    price: '1回 9,350円〜',
    trial: '体験レッスン あり',
    features: ['完全プライベート', 'マシン完備', '桃谷駅徒歩5分', 'オーダーメイド'],
    description: '完全プライベートレッスン専門のピラティススタジオ。JR桃谷駅から徒歩5分の生野区に位置。一人ひとりの身体の状態に合わせたオーダーメイドレッスンを提供。経験豊富なインストラクターがマンツーマンで指導し、姿勢改善や体幹強化に効果的です。',
    access: 'JR桃谷駅から徒歩5分',
    address: '大阪府大阪市生野区勝山北2-1-16',
  },
  {
    name: 'fis.pilates 天王寺店',
    image: '/images/studios/fis-pilates.webp',
    rating: 4.7,
    price: '月額 3,000円台〜（分割払い）',
    trial: '体験レッスン 4,000円',
    features: ['女性専用', '完全個室', '女性トレーナー', 'お子様連れOK'],
    description: '女性専用マシンピラティス専門パーソナルスタジオ。完全個室で女性トレーナーによるマンツーマン指導が特徴。ウェア・靴下・タオル・ミネラルウォーター・プロテインが無料で用意されており、手ぶらで通えます。ベビーベッドやバウンサーも完備で、お子様連れのママにも人気です。',
    access: '天王寺駅から徒歩5分',
    address: '大阪府大阪市阿倍野区阿倍野筋1丁目',
  },
  {
    name: 'ピラティスアヴニール 天王寺店',
    image: '/images/studios/pilates-avenir-tennoji.webp',
    rating: 4.6,
    price: '都度払い・月額制あり',
    trial: '体験レッスン あり',
    features: ['完全個室', 'マンツーマン', 'あべのベルタ', '阿倍野駅徒歩1分'],
    description: '完全個室でマンツーマンのマシンピラティスを提供するパーソナルスタジオ。あべのベルタ4階に位置し、地下鉄阿倍野駅から徒歩1分の好立地。都度払い・月額制・回数券制の3プランから選べ、朝7時から夜23時まで営業と通いやすさも抜群。顧客満足度の高い丁寧な指導が評判です。',
    access: '地下鉄阿倍野駅 徒歩1分 / JR天王寺駅 徒歩5分',
    address: '大阪府大阪市阿倍野区阿倍野筋3-10-1 あべのベルタ4F',
  },
  {
    name: 'Hain pilates 天王寺店',
    image: '/images/studios/hain-pilates.webp',
    rating: 4.6,
    price: '月4回プランあり',
    trial: '体験レッスン 2,200円',
    features: ['女性専用', '30分レッスン', '女性インストラクター', '天王寺駅徒歩3分'],
    description: '女性専用のパーソナルマシンピラティススタジオ。天王寺駅から徒歩3分。女性インストラクターによるマンツーマン指導で、1回30分で完結する効率的なレッスンが特徴。短時間で効果を実感できるプログラムで、忙しい方にもおすすめです。',
    access: '天王寺駅から徒歩3分',
    address: '大阪府大阪市天王寺区悲田院町8',
  },
  {
    name: 'PILATES & PERSONAL GYM LAULE\'A',
    image: '/images/pilates2.webp',
    rating: 4.7,
    price: 'チケット制',
    trial: '体験レッスン あり',
    features: ['ピラティス×パーソナル', 'お子様連れOK', '阿倍野駅徒歩10秒', 'グループあり'],
    description: 'ピラティスとパーソナルジムを融合させたスタジオ。谷町線阿倍野駅から徒歩10秒という驚異のアクセス。姿勢改善やダイエットに特化し、最大4名のグループレッスンとパーソナルレッスンの両方を提供。お子様連れOKで、子育て中のママにも通いやすいと好評です。',
    access: '大阪メトロ谷町線 阿倍野駅 徒歩10秒 / 御堂筋線 天王寺駅 徒歩5分',
    address: '大阪府大阪市阿倍野区阿倍野筋3-5-11 あべの恵寿ビル2F',
  },
  {
    name: 'ピラティス・トトヤセ 天王寺店',
    image: '/images/studios/pilates-totoyase-tennoji.webp',
    rating: 4.8,
    price: 'パーソナルプラン',
    trial: '体験レッスン あり',
    features: ['整体×ピラティス', '女性専用', '完全個室', '手ぶらOK'],
    description: 'オーダーメイドの整体とマシンピラティスで身体を整える女性専用スタジオ。天王寺駅から徒歩3分の完全個室空間。シューズ不要、ウェアレンタルあり、お水飲み放題で手ぶら来店が可能。担当トレーナーが目標達成までマンツーマンで責任を持って指導します。',
    access: '天王寺駅から徒歩3分',
    address: '大阪府大阪市阿倍野区阿倍野筋1丁目',
  },
  {
    name: 'Belluna Pilates',
    image: '/images/studios/belluna-pilates-tennoji.webp',
    rating: 4.5,
    price: '1回 2,000円〜',
    trial: '体験レッスン あり',
    features: ['リーズナブル', 'グループレッスン', '少人数制', '寺田町駅徒歩3分'],
    description: '一人ひとりに合わせた丁寧な指導で、健康で豊かな生活をサポートするピラティススタジオ。天王寺スタジオは寺田町駅から徒歩3分。水曜・金曜の10:30からグループレッスンを開催。1回2,000円からとリーズナブルな価格設定が魅力で、気軽にピラティスを始めたい方におすすめです。',
    access: '寺田町駅から徒歩3分',
    address: '大阪府大阪市天王寺区',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！天王寺エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。pilates Kやリントスルなど映像付きのレッスンもあるので、動きが分かりやすく安心です。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。天王寺エリアではpilates Kやリントスルなどマシン専門スタジオが多く、zen placeは両方に対応しています。',
  },
  {
    question: '天王寺のピラティススタジオの料金相場は？',
    answer: '天王寺エリアのピラティススタジオの料金相場は、月4回のグループレッスンで10,000円〜15,000円程度。pilates Kのマンスリー4が11,220円、リントスルが9,800円と比較的お手頃です。体験レッスンは無料〜4,000円が一般的。プライベートレッスンは1回7,000円〜12,000円が相場となっています。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。fis.pilatesやトトヤセではウェアレンタルがあるので手ぶらでも大丈夫です。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。La pilatesやSonareなど整体×ピラティスのスタジオなら、より効果的にアプローチできます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルはLa pilatesやfis.pilatesのように一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループはpilates Kやリントスルのように料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function TennojiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス天王寺おすすめ12選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">天王寺</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="天王寺" />

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
              「天王寺・阿倍野で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、天王寺・阿倍野エリアでおすすめのピラティススタジオ12選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
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
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="天王寺" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              天王寺のおすすめピラティススタジオ12選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              天王寺のピラティス料金相場【2026年4月最新】
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
              天王寺はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。近隣のなんばエリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
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
                  天王寺エリアのスタジオは大阪阿部野橋駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  天王寺はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  天王寺エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  天王寺エリアだけでなく、近隣の<Link href="/area/namba" className="text-warm-700 underline hover:text-warm-900">なんば</Link>、<Link href="/area/abeno" className="text-warm-700 underline hover:text-warm-900">阿倍野</Link>、<Link href="/area/shinsaibashi" className="text-warm-700 underline hover:text-warm-900">心斎橋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>天王寺エリアの豆知識：</strong>天王寺はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                  月額10,000円前後で通えるコスパの良いスタジオ。体験レッスン0円のスタジオもあり。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 天王寺（月4回 9,800円）</li>
                  <li className="text-warm-700">• pilates K 天王寺（月4回 11,220円）</li>
                  <li className="text-warm-700">• Belluna Pilates（1回 2,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
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
                  JR天王寺駅・大阪メトロ御堂筋線・谷町線から徒歩すぐ。あべのハルカス周辺の好立地。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。マシン専門スタジオもこの価格帯で見つかる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（9,800円/月4回）</li>
                  <li>• zen place（10,450円/月4回）</li>
                  <li>• pilates K（11,220円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜17,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  通い放題プランのある大手スタジオ。充実した設備と豊富なレッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place フリー（14,960円）</li>
                  <li>• pilates K フル（15,070円）</li>
                  <li>• Rintosull 通い放題（16,800円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  天王寺エリアの料金相場は月4回のグループレッスンで10,000円〜15,000円程度。リントスルの月4回9,800円やpilates Kの11,220円など、比較的お手頃なスタジオもあります。料金だけでなく、入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。pilates Kは体験0円、リントスルは150円、zen placeは1,000円と気軽に試せるスタジオが多いですよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。天王寺はJR天王寺駅、大阪メトロ御堂筋線・谷町線、近鉄南大阪線が集まる大阪南部のターミナル駅。あべのハルカスや天王寺公園に隣接し、阿倍野筋沿いには多くのスタジオが集まっています。レッスン前後にショッピングや食事も楽しめる便利なエリアです。
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
              今回は天王寺・阿倍野エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              天王寺はJR・大阪メトロ・近鉄が集まるターミナル駅で、阿倍野筋を中心に多くのピラティススタジオが集まっています。あべのハルカスや天王寺公園が近く、レッスン前後の時間も充実させやすいエリアです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では天王寺に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜3,000円。<br />
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
      </main>

      <RelatedAreas currentSlug="tennoji" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
