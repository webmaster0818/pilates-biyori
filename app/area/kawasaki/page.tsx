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
  alternates: { canonical: 'https://biyori-pilates.com/area/kawasaki/' },
  title: '川崎のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: '川崎エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,川崎,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 川崎店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.8,
    reviewCount: 239,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: '京急川崎駅から徒歩2分で通いやすい！音楽に合わせたレッスンが楽しくて続けられます。体験レッスンが0円なので気軽に始められました。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '2週間前',
        text: '女性専用で安心です。マシンピラティス専門なので効果を実感しやすい。インストラクターさんが優しく指導してくれます。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '3週間前',
        text: 'スタイリッシュな店内でモチベーションが上がります。部位に特化したプログラムが豊富で、目的に合わせて選べるのが良いです。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン完備', '京急川崎駅徒歩2分', '音楽レッスン'],
    description: '女性専用のマシンピラティス専門スタジオ。京急川崎駅中央口から徒歩2分、JR川崎駅からも徒歩5分の好立地。音楽に合わせたグループレッスンが特徴で、お腹・お尻・二の腕・脚・背中の部位に特化したボディメイクプログラムが充実。カジュアルかつスタイリッシュな店内で楽しくピラティスを続けられます。',
    access: '京急川崎駅中央口から徒歩2分 / JR川崎駅から徒歩5分',
    address: '神奈川県川崎市川崎区駅前本町10-1 MEFULL川崎8F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '平日・土日祝いつでも受講可能。お好きな時間で受講できる人気プラン。',
      price: '月4回 13,420円（税込）+ 施設維持費825円',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時 毎日1レッスン 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス解消'],
    },
    basicInfo: {
      hours: '月〜金 10:00-15:00 / 17:30-22:00、土・祝 10:00-19:00、日 10:00-17:30',
      closed: '第一月曜日',
      facilities: ['ロッカー', 'パウダールーム', 'ウォーターサーバー', 'レンタルウェア'],
    },
  },
  {
    name: 'zen place pilates 川崎',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 34,
    reviews: [
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '京急川崎駅から徒歩5分で通いやすい。全国150店舗が他店利用できるので出張先でも通えます。エデュケーターの質が高く、体の変化を実感できました。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '1ヶ月前',
        text: 'マットとマシン両方受講できます。少人数制なので丁寧に見てもらえます。男性も利用可能なので家族で通えるのが嬉しい。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '医療機関も推奨している本格的なピラティス。体験レッスンが1,000円で受けられるので気軽に始められました。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン', '全国150店舗相互利用', '男性OK', '医療機関推奨'],
    description: '全国150店舗展開の大手ピラティススタジオ。京急川崎駅中央口から徒歩5分、JR川崎駅中央東口から徒歩6分。マットグループ、マシングループ、プライベートレッスンがあり、男性も利用可能。医療機関も推奨している本格的なピラティスで、いつまでもアクティブに人生を愉しめる身体づくりをサポート。',
    access: '京急川崎駅中央口から徒歩5分 / JR川崎駅中央東口から徒歩6分',
    address: '神奈川県川崎市川崎区砂子2丁目11-29 平松川崎ビル 6階',
    popularPlan: {
      name: 'マットグループ フリー（月4回）',
      description: '全国150店舗相互利用可能。マット・マシン両方受講できる人気プラン。',
      price: 'グレード01 月4回 10,450円（税込）',
    },
    options: [
      'マットグループ デイフリー（グレード01 13,552円）',
      'マットグループ フリー（グレード01 16,940円）',
      'プライベートレッスン（月4回 38,280円〜）',
      'マット&マシングループ（MM22 12,650円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00-21:30 / 土日祝 8:00-21:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'Rintosull 川崎店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 115,
    reviews: [
      {
        author: 'H.M',
        rating: 5,
        date: '1週間前',
        text: 'AI姿勢分析が面白い！自分の体の癖が数値で分かるので改善しやすいです。2025年5月オープンの新しいスタジオで設備も綺麗。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '2週間前',
        text: '通い放題プランでホットヨガと暗闇キックボクシングも利用できる。LAVAとも連携していてお得感があります。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '3週間前',
        text: 'JR川崎駅から徒歩5分。女性専用で安心して通えます。体験会が無料なので気軽に始められました。',
      },
    ],
    price: '月4回 14,800円〜',
    trial: '体験レッスン 無料',
    features: ['AI姿勢分析', 'LAVA連携', '女性専用', 'JR川崎駅徒歩5分'],
    description: 'AI姿勢分析を導入した最新型ピラティススタジオ。2025年5月1日オープン。JR川崎駅から徒歩5分。マシンピラティス、ホットヨガ、暗闇キックボクシングの通い放題プランあり。全国540店舗以上のLAVAとも連携。AI姿勢分析で身体のバランスや骨格を計測し、最適なトレーニング方法を提案。',
    access: 'JR川崎駅から徒歩5分',
    address: '神奈川県川崎市川崎区砂子2丁目6番地2 川崎三恵ビル6階',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マシンピラティス、ホットヨガ、暗闇キックボクシングが通い放題。LAVA連携。',
      price: '月額 19,800円（税込）',
    },
    options: [
      '入会金＋登録金 10,000円 → 0円（体験会当日入会）',
      '施設使用料 2,500円（入会時のみ）',
      'AI姿勢分析レポート（QRコードまたは印刷）',
      'ウェア・タオルレンタル（月額 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'AI分析'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '毎週木曜',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'AI姿勢分析システム', '女性専用'],
    },
  },
  {
    name: 'the SILK 川崎店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 178,
    reviews: [
      {
        author: 'R.S',
        rating: 5,
        date: '1週間前',
        text: '京急川崎駅から徒歩2分で通いやすい。音楽に合わせたレッスンが楽しくて時間があっという間。2024年7月オープンの新しいスタジオで綺麗です。',
      },
      {
        author: 'N.Y',
        rating: 4,
        date: '2週間前',
        text: '初回体験が無料で手ぶらで受けられました。PMA加盟団体の監修プログラムで質が高い。女性限定で安心です。',
      },
      {
        author: 'K.T',
        rating: 5,
        date: '3週間前',
        text: 'リフォーマー専門で50分のレッスン。インストラクターが明るく親切で続けやすい。日常の不調が改善してきました。',
      },
    ],
    price: '月4回 14,370円〜',
    trial: '体験レッスン 無料',
    features: ['音楽×マシン', '女性限定', '京急川崎駅徒歩2分', 'PMA加盟'],
    description: 'マシンピラティス専門スタジオ。京急川崎駅中央口から徒歩2分、JR川崎駅北口東から徒歩4分。2024年7月オープン。音楽に合わせた50分のリフォーマーレッスン。PMA加盟団体監修の質の高いプログラム。初回体験が無料で手ぶらで受けられる。女性限定で安心して通える環境。',
    access: '京急川崎駅中央口から徒歩2分 / JR川崎駅北口東から徒歩4分',
    address: '神奈川県川崎市川崎区砂子2-4-10 ヒューリック川崎ビル8階',
    popularPlan: {
      name: 'Standard 4（月4回）',
      description: '毎月1〜末日までの間で4回グループレッスン受講可能。音楽に合わせた楽しいレッスン。',
      price: '月4回 14,370円（税込）',
    },
    options: [
      'Light 3（月3回 12,280円）',
      'Full（毎日1回まで 19,980円）',
      'Full Day（平日OPEN〜15時 毎日1回まで 17,780円）',
      '月額ウェア/タオルレンタル（2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性限定）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['ロッカー', 'パウダールーム', 'ウォーターサーバー', 'レンタルウェア', '女性限定'],
    },
  },
  {
    name: 'STUZIO ONCE 川崎店',
    image: '/images/studios/stuzio-once-kawasaki.webp',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '完全個室のプライベートレッスンで集中できます。川崎駅西口から徒歩5分。マンツーマン指導で効果を実感しやすい。',
      },
      {
        author: 'M.H',
        rating: 5,
        date: '2週間前',
        text: '初心者でも安心して始められました。インストラクターが細やかな気遣いで丁寧に教えてくれます。体のラインが綺麗になってきました。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: 'パーソナルレッスンなので自分のペースで進められます。価格は高めですが、短期間で結果が出るので満足です。',
      },
    ],
    price: '1回 8,800円〜',
    trial: '体験レッスン 5,500円',
    features: ['完全プライベート', 'マシン完備', '川崎駅西口徒歩5分', 'マンツーマン'],
    description: '完全個室のプライベートレッスン専門スタジオ。川崎駅西口から徒歩5分、尻手駅から徒歩12分。マンツーマン指導で一人ひとりの目的・体力に合わせたオーダーメイドレッスン。経験豊富なインストラクターが丁寧に指導。通い放題でお得に続けられる。初心者の9割が安心して通えるプログラム。',
    access: '川崎駅西口から徒歩5分 / 尻手駅から徒歩12分',
    address: '神奈川県川崎市幸区中幸町4-38',
    popularPlan: {
      name: '通い放題プラン',
      description: '完全プライベートレッスン通い放題。マンツーマン指導で短期間で効果を実感。',
      price: '月額 39,800円（税込）',
    },
    options: [
      '月4回プラン（1回 8,800円）',
      '月8回プラン（1回 8,250円）',
      'チケット制（1回 9,900円）',
      'ウェア・タオルレンタル（都度 500円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の70%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['短期集中', 'ボディメイク', '姿勢改善', 'パーソナル指導'],
    },
    basicInfo: {
      hours: '平日 9:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'マシン完備', '待合室なし（予約時間に来店）'],
    },
  },
  {
    name: 'TSUTAYA Conditioning PILATES 川崎駅前店',
    image: '/images/studios/tsutaya-pilates-kawasaki.webp',
    rating: 4.5,
    reviewCount: 25,
    reviews: [
      {
        author: 'S.M',
        rating: 5,
        date: '1週間前',
        text: '京急川崎駅から徒歩1分で便利。少人数制なので丁寧に見てもらえます。TSUTAYAの蔦屋書店に併設されていて買い物ついでに通えます。',
      },
      {
        author: 'T.Y',
        rating: 4,
        date: '2週間前',
        text: '女性専用で安心。楽々ピラティスのコンセプトで初心者でも無理なく始められました。インストラクターが優しくて続けやすい。',
      },
      {
        author: 'N.I',
        rating: 5,
        date: '3週間前',
        text: '少人数制グループレッスンで質問しやすい。駅近で通いやすく、仕事帰りに寄れるのが嬉しい。',
      },
    ],
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['女性専用', '少人数制', '京急川崎駅徒歩1分', 'TSUTAYA併設'],
    description: '女性専用・少人数制のマシンピラティス専門スタジオ。JR川崎駅から徒歩4分、京急川崎駅中央口から徒歩1分の好立地。TSUTAYAの蔦屋書店に併設され、買い物ついでに通える。楽々ピラティスのコンセプトで初心者でも安心。インストラクターが丁寧に指導する少人数制グループレッスン。',
    access: '京急川崎駅中央口から徒歩1分 / JR川崎駅から徒歩4分',
    address: '神奈川県川崎市川崎区駅前本町8番地',
    popularPlan: {
      name: '月4回プラン',
      description: '少人数制グループレッスン。女性専用で安心して通える人気プラン。',
      price: '月4回 13,200円（税込）',
    },
    options: [
      '月8回プラン（16,500円）',
      'デイタイムプラン（平日昼 月4回 11,000円）',
      '追加レッスン（1回 3,300円）',
      'ウェア・タオルレンタル（月額 2,200円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', '女性専用', 'TSUTAYA併設'],
    },
  },
  {
    name: 'CLUB PILATES 川崎',
    image: '/images/studios/club-pilates.webp',
    rating: 4.6,
    reviewCount: 76,
    reviews: [
      {
        author: 'K.S',
        rating: 5,
        date: '1週間前',
        text: 'アメリカ発の世界最大級ピラティスチェーン。川崎駅東口から徒歩3分。グループとプライベート両方受けられるのが嬉しい。',
      },
      {
        author: 'M.R',
        rating: 4,
        date: '2週間前',
        text: '全米No.1のピラティスメソッド。初心者から上級者まで幅広くプログラムがあります。体験が無料で始めやすかった。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '3週間前',
        text: 'インストラクターの質が高い。世界800店舗以上展開していて出張先でも通えます。効果を実感しやすいプログラムです。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', 'グループ&プライベート', '川崎駅東口徒歩3分', '世界800店舗'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。川崎駅東口から徒歩3分。グループレッスンからプライベートレッスンまで幅広く対応。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラムを提供。世界800店舗以上展開で出張先でも通える。',
    access: '川崎駅東口から徒歩3分',
    address: '神奈川県川崎市川崎区駅前本町12-1 リバークビル5F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '全米No.1メソッド。グループレッスンで楽しく続けられる人気プラン。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      'グループ月8回プラン（22,990円）',
      'プライベートレッスン（月4回 38,280円〜）',
      '追加レッスン（1回 3,850円）',
      'ウェア・タオルレンタル（月額 2,200円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の70%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['本格的なピラティス', '姿勢改善', '体幹強化', 'ボディメイク'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 9:00〜19:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備'],
    },
  },
  {
    name: '24/7ピラティス 川崎店',
    officialUrl: 'https://247-sports.jp/pilates/',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらOK）',
    features: ['女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供。川崎駅から徒歩7分。',
    access: '川崎駅から徒歩7分',
    address: '神奈川県川崎市川崎区小川町2-7-8 昼間ビルIVY TOWER 9階',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！川崎エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '川崎のピラティススタジオの料金相場は？',
    answer: '川崎エリアのピラティススタジオの料金相場は、月4回で12,000円〜15,000円程度。体験レッスンは無料〜3,000円が一般的です。プライベートレッスンは1回8,000円〜10,000円が相場となっています。',
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
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function KawasakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '川崎', url: 'https://pilates-biyori.com/area/kawasaki/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス川崎おすすめ8選！<br className="hidden md:block" />
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
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">川崎</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="川崎" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「川崎で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、川崎エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>川崎でピラティススタジオを探している</span>
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
                  <span>東京・横浜へのアクセスも良いスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="川崎" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              川崎のおすすめピラティススタジオ8選
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
              川崎のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,800円〜19,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 13,200円〜39,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜5,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              川崎エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランのコスパが特に良いエリアなので、週2回以上通える方は月額制プランが断然おすすめです。近隣の武蔵小杉エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              川崎でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京急川崎駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアのスタジオは京急川崎駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無も確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアでは通い放題プランが都心部より割安に設定されていることが多いです。週2回以上通えるなら通い放題が断然お得ですが、月1〜2回のペースなら回数券やドロップインの方がコスパが良い場合も。自分の通う頻度を想定してプランを選びましょう。初月は回数制で様子を見るのも賢い方法です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアだけでなく、近隣の<Link href="/area/musashikosugi/" className="text-warm-700 underline hover:text-warm-900">武蔵小杉</Link>、<Link href="/area/kamata/" className="text-warm-700 underline hover:text-warm-900">蒲田</Link>、<Link href="/area/yokohama/" className="text-warm-700 underline hover:text-warm-900">横浜</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>川崎エリアの豆知識：</strong>川崎エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前に確認しておきましょう。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  月額12,000円以下で通える格安スタジオ。体験レッスン無料のスタジオも多数。コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 川崎</li>
                  <li className="text-warm-700">• TSUTAYA Conditioning PILATES</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 川崎店</li>
                  <li className="text-warm-700">• the SILK 川崎店</li>
                  <li className="text-warm-700">• Rintosull 川崎店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  川崎駅から徒歩3分以内。買い物ついでに通える好立地。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• TSUTAYA Conditioning PILATES（駅徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスK 川崎店（駅徒歩2分）</li>
                  <li className="text-warm-700">• the SILK 川崎店（駅徒歩2分）</li>
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
                  グループレッスン中心。初心者向けの基本的なレッスンが多い。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・プライベート選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK</li>
                  <li>• the SILK</li>
                  <li>• TSUTAYA Conditioning</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUZIO ONCE（1回8,800円〜）</li>
                  <li>• Pilates Lab</li>
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
                  川崎エリアの料金相場は月4回で12,000円〜15,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。多くのスタジオが無料〜1,000円程度で体験レッスンを提供しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。川崎は東京・横浜へのアクセスも良好で、複数路線が利用できます。駅から近い場所を選ぶと、買い物ついでにも通えて便利ですよ。
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
              今回は川崎のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では川崎に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kawasaki" areaName="川崎" />

      <RelatedAreas currentSlug="kawasaki" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
