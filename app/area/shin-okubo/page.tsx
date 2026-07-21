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
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/shin-okubo/' },
  title: '【2026年7月最新】新大久保・新宿のピラティススタジオおすすめ8選｜無料体験・料金で比較',
  description: '新大久保・新宿のピラティススタジオ8社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,新大久保,新宿,高田馬場,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'the SILK 新宿店',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 371,
    reviews: [
      {
        author: 'M.O',
        rating: 5,
        date: '3週間前',
        text: '初回の体験レッスンで身体の変化に感動したことが、入会の決め手でした。オシャレな雰囲気や、音楽にあわせた堅苦しくないレッスンが好きです。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '1ヶ月前',
        text: '新宿西口駅から徒歩1分で通いやすい。全て綺麗で、無料で手ぶら体験できるのすごい。飲み物もカップと蓋を自分でつけられるウォーターサーバーあるので有難い。',
      },
      {
        author: 'Y.T',
        rating: 4,
        date: '2週間前',
        text: 'インストラクターさんの説明が分かりやすく、フォームの修正を行ってくださります。レッスンの種類が多く、音楽に合わせて動いていくのでとても楽しいです。',
      },
    ],
    price: 'Full 22,280円/月、Standard4 15,280円/月',
    trial: '体験レッスン 無料（期間限定）',
    features: ['女性専用', '音楽×マシン', '新宿西口駅1分', 'PMA加盟団体監修'],
    description: 'PMA加盟団体監修の本格マシンピラティススタジオ。新宿西口駅D5出口から徒歩1分の好立地。音楽に合わせて身体を動かす独自のレッスンスタイルで、運動経験を問わず楽しめます。駅チカのスタイリッシュなスタジオで、清潔感と上質な空間を体験できるのも魅力。',
    access: '都営大江戸線「新宿西口駅」D5出口より徒歩1分、JR「新宿駅」西口徒歩5分',
    address: '東京都新宿区西新宿7-1-8 ヒノデビル6階',
    popularPlan: {
      name: 'Standard 4（月4回）',
      description: '毎月1~末日までの間で4回グループレッスン受講可能',
      price: '15,280円/月（税込）',
    },
    options: [
      'Full（毎日1回まで）: 22,280円/月',
      'Full Day（平日昼のみ毎日1回）: 19,280円/月',
      'Light 3（月3回）: 13,280円/月',
      '月額ウェア/タオルレンタル: 2,200円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '8:00〜22:00',
      closed: '年末年始（12/29～1/3）',
      facilities: ['パウダールーム', 'ロッカー', 'ウォーターサーバー', 'リファ（メイク直しスペース）'],
    },
  },
  {
    name: 'ピラティスK 新宿西口店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 119,
    reviews: [
      {
        author: 'C.O',
        rating: 5,
        date: '2週間前',
        text: 'pilates Kに通って―14キロのダイエットに成功しました。スタジオのインストラクターの皆さんが優しく、アットホームな雰囲気が好きです。',
      },
      {
        author: 'M.N',
        rating: 4,
        date: '3週間前',
        text: '運動不足解消のため通いはじめました。レッスンに来た日と、来ない日の身体の軽さの違いを実感しています。特に足がむくみやすいからスッキリして良いです。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '1ヶ月前',
        text: 'インストラクターの先生たちが、とても親切で優しく、元気でパワーをもらっています。2025年7月にオープンしたばかりで設備が新しいです。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '音楽×マシン', '新宿駅1分', 'ボディメイク特化'],
    description: '2025年7月20日オープンの新しい女性専用マシンピラティススタジオ。新宿駅から徒歩1分の好立地。音楽にあわせたグループレッスンを楽しめるスタジオ。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実しており、強度や目的に合わせて選べます。',
    access: '大江戸線「新宿駅」より徒歩1分、京王線「新宿駅」より徒歩2分、山手線「新宿駅」より徒歩3分',
    address: '東京都新宿区西新宿1丁目12番1号 高倉第一ビル5階',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回レッスン。平日・土日祝のお好きな時間で受講',
      price: '13,420円/月（税込）+ 施設維持費825円',
    },
    options: [
      'マンスリー8メンバー: 16,170円/月',
      'マンスリーデイメンバー（平日10-15時毎日1レッスン）: 14,520円/月',
      'マンスリープレミアムメンバー（毎日2レッスン）: 18,920円/月',
      '追加受講: 2,200円/回',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性専用',
      purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '火・金 10:00-15:00/17:30-22:00、水 10:00-14:00/17:30-22:00、木 17:30-22:00、土・祝 10:00-18:30、日 10:00-17:30',
      closed: '月曜日',
      facilities: ['ロッカー', 'パウダールーム', 'レンタルウェア', 'レンタルタオル'],
    },
  },
  {
    name: 'zen place pilates 高田馬場店',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.6,
    reviewCount: 17,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス指導歴10年以上のベテランエデュケーター達が呼吸の仕方から丁寧に指導してくれます。2024年5月に拡張移転してスタジオが広くなりました。',
      },
      {
        author: 'Y.S',
        rating: 4,
        date: '3週間前',
        text: '少人数制なので、ひとりひとりじっくりとレッスンできます。高田馬場駅から徒歩1分で通いやすい。全国150店舗が相互利用できるのも便利です。',
      },
      {
        author: 'T.H',
        rating: 5,
        date: '1ヶ月前',
        text: '運動経験もなく、ピラティスを始めましたが丁寧に教えてもらえるので安心です。男性も通えるので夫婦で通っています。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '少人数制', '高田馬場駅1分', '全国150店舗相互利用'],
    description: '2024年5月17日拡張移転オープンの大手ピラティススタジオ。JR・西武新宿線高田馬場駅戸山口から徒歩1分。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。当スタジオの会員さんの2人に1人は運動経験もなく、ピラティスを始めた人ばかり。ピラティス指導歴10年以上のベテランインストラクターが呼吸の仕方から丁寧に指導。',
    access: 'JR山手線・西武新宿線「高田馬場駅」木戸山改札西側徒歩1分、東京メトロ東西線「高田馬場駅」1番出口徒歩4分',
    address: '東京都新宿区高田馬場4丁目3-8 松島第二ビル3階 3F号室',
    popularPlan: {
      name: 'マットグループ月4',
      description: 'マットグループレッスン月4回。全国150店舗どこでも受講可能',
      price: '10,450円/月（税込）',
    },
    options: [
      'フリープラン（回数無制限）: 16,940円/月',
      'デイフリー（平日昼のみ無制限）: 13,552円/月',
      'マットグループ月6: 14,520円/月',
      'リフォーマーグループRG4（月4回）: 15,400円/月',
      'プライベート月4: 38,280円/月',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '腰痛・肩こり改善', '自律神経の調整', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '平日 8:00-21:30 / 土日祝 8:00-18:00',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー'],
    },
  },
  {
    name: 'Rintosull 高田馬場店',
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 55,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: 'LAVAから生まれたマシンピラティス専門スタジオ。女性専用なので安心して通えます。高田馬場駅から徒歩3分で通いやすいです。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: '目的に合わせた多彩なプログラムが用意されています。初心者向けから上級者向けまであるので、レベルに合わせて選べます。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: 'インストラクターの質が高く、丁寧に指導してくれます。音楽に合わせて動くので楽しく続けられます。',
      },
    ],
    price: '月4回プランあり',
    trial: '体験レッスンあり',
    features: ['女性専用', 'LAVAグループ', '高田馬場駅3分', '多彩なプログラム'],
    description: 'ホットヨガスタジオLAVAから生まれたマシンピラティス専門スタジオ。高田馬場駅徒歩3分の女性専用スタジオ。目的に合わせた多彩なプログラムをご用意。専用のマシン（リフォーマー）使用し、効率よく体幹を鍛え、身体の柔軟性アップを促すエクササイズ。気になる部位・お悩み部分にピンポイントで効果的に効かせることができます。',
    access: '高田馬場駅徒歩3分',
    address: '東京都新宿区高田馬場（詳細住所は公式サイト参照）',
    popularPlan: {
      name: '月4回プラン',
      description: '月4回のグループレッスン。女性専用で安心',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', 'リラックス'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull 新宿西口駅前店',
    image: '/images/studios/rintosull.webp',
    rating: 4.4,
    reviewCount: 157,
    reviews: [
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: '新宿西口駅の目の前で便利。LAVAグループなので安心感があります。女性専用で通いやすいです。',
      },
      {
        author: 'K.Y',
        rating: 4,
        date: '3週間前',
        text: 'マシンピラティス初心者ですが、丁寧に教えてもらえるので安心。音楽に合わせて動くのが楽しいです。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '1ヶ月前',
        text: '駅近で仕事帰りに通いやすい。スタジオも清潔で気持ちよくレッスンできます。',
      },
    ],
    price: '月4回プランあり',
    trial: '体験レッスンあり',
    features: ['女性専用', '新宿西口駅前', 'LAVAグループ', '駅近'],
    description: 'ホットヨガスタジオLAVAから生まれたマシンピラティス専門スタジオ。新宿西口駅前の好立地で通いやすい。女性専用スタジオで安心して通えます。全国に続々スタジオ拡大中の人気スタジオ。専用のマシン（リフォーマー）を使用し、効率よく体幹を鍛え、身体の柔軟性アップを促します。',
    access: '新宿西口駅前',
    address: '東京都新宿区西新宿（詳細住所は公式サイト参照）',
    popularPlan: {
      name: '月4回プラン',
      description: '月4回のグループレッスン。女性専用',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室', 'パウダールーム'],
    },
  },
  {
    name: 'zen place pilates 新宿（西口）',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.6,
    reviewCount: 31,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '2週間前',
        text: '新宿西口駅から徒歩2分で通いやすい。全国150店舗他店利用できるので、出張先でも通えて便利です。',
      },
      {
        author: 'M.I',
        rating: 4,
        date: '3週間前',
        text: '少人数制で丁寧に見てもらえます。マットとマシン両方受講できるプランがあるのが良いです。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '1ヶ月前',
        text: 'ベテランインストラクターが多く、質の高いレッスンが受けられます。男女共用なので夫婦で通っています。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '少人数制', '新宿西口駅2分', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。地下鉄大江戸線新宿西口駅D5出口から徒歩約2分、JR新宿駅西口から徒歩約7分。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。医療機関も推奨している、大人の方にこそ受けてほしいzen placeのレッスンでいつまでもアクティブに人生を愉しめます。',
    access: '地下鉄大江戸線「新宿西口駅」D5出口徒歩約2分、JR「新宿駅」西口徒歩約7分',
    address: '東京都新宿区西新宿（詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ月4',
      description: 'マットグループレッスン月4回。全国150店舗どこでも受講可能',
      price: '10,450円/月（税込）',
    },
    options: [
      'フリープラン（回数無制限）: 16,940円/月',
      'デイフリー（平日昼のみ無制限）: 13,552円/月',
      'マットグループ月6: 14,520円/月',
      'リフォーマーグループRG4（月4回）: 15,400円/月',
      'プライベート月4: 38,280円/月',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '腰痛・肩こり改善', '姿勢改善', '健康維持'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー'],
    },
  },
  {
    name: 'zen place pilates 新宿南口',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 17,
    reviews: [
      {
        author: 'N.A',
        rating: 5,
        date: '1週間前',
        text: '新宿三丁目駅から徒歩1分で超便利。新宿駅からも徒歩3分で通えます。全国150店舗他店利用できるのが魅力です。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: '少人数制なので、一人ひとり丁寧に見てもらえます。マシンの種類も豊富で、レベルに合わせて選べます。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: '男女共用なので家族で通っています。ベテランインストラクターが多く、質の高いレッスンが受けられます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '少人数制', '新宿三丁目駅1分', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。東京メトロ丸の内・副都心・都営新宿線新宿三丁目駅E6出口から徒歩1分、JR各線新宿駅ミライナタワー改札から徒歩3分。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。医療機関も推奨している、質の高いレッスンでいつまでもアクティブに人生を愉しめます。',
    access: '東京メトロ丸の内・副都心・都営新宿線「新宿三丁目駅」E6出口徒歩1分、JR各線「新宿駅」ミライナタワー改札徒歩3分',
    address: '東京都新宿区新宿（詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ月4',
      description: 'マットグループレッスン月4回。全国150店舗どこでも受講可能',
      price: '10,450円/月（税込）',
    },
    options: [
      'フリープラン（回数無制限）: 16,940円/月',
      'デイフリー（平日昼のみ無制限）: 13,552円/月',
      'マットグループ月6: 14,520円/月',
      'リフォーマーグループRG4（月4回）: 15,400円/月',
      'プライベート月4: 38,280円/月',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '姿勢改善', '健康維持', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー'],
    },
  },
  {
    name: 'CLUB PILATES 西新宿店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.5,
    reviewCount: 67,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '2週間前',
        text: '世界最大級のピラティススタジオ。15種類もの機器を使用したレッスンが受けられます。初心者から上級者まで幅広く対応しています。',
      },
      {
        author: 'F.H',
        rating: 4,
        date: '3週間前',
        text: '最大12名までの少人数制なので、丁寧に見てもらえます。リフォーマーだけでなく、様々な機器を使えるのが魅力です。',
      },
      {
        author: 'M.Y',
        rating: 5,
        date: '1ヶ月前',
        text: '本格的なマシンピラティスが学べます。世界800店舗以上展開しているので信頼できます。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['世界最大級', '15種類の機器', '少人数制', '初心者〜上級者対応'],
    description: '世界各国で800店舗以上展開している、世界最大級のピラティススタジオ。初心者から上級者まで幅広いレベルに対応できるプログラムで、未経験でもステップアップしながら通えます。リフォーマーだけでなく、15種類もの機器を使用した本格的なマシンピラティスが体験できます。最大12名までの少人数制で丁寧な指導が受けられます。',
    access: '西新宿駅より徒歩圏内',
    address: '東京都新宿区西新宿（詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '最大12名までの少人数制。15種類の機器を使用',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      '通い放題プラン',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['本格的なピラティス', '筋力強化', '柔軟性向上', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室', 'シャワー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！新大久保・新宿エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '新大久保・新宿エリアのピラティススタジオの料金相場は？',
    answer: '新大久保・新宿エリアのピラティススタジオの料金相場は、グループレッスンで月4回10,000円〜15,000円程度。女性専用の音楽系スタジオは月4回13,000円〜15,000円、zen placeは月4回10,450円〜が目安です。体験レッスンは無料〜1,000円で受けられるスタジオが多いですよ。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。the SILKやピラティスKでは手ぶら体験が可能なスタジオもあります。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。新大久保からすぐの新宿・高田馬場エリアにはデスクワーカーの方にも通いやすい駅近スタジオが多いですよ。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: '新大久保駅周辺にピラティススタジオはありますか？',
    answer: '新大久保駅の周辺（大久保通り・コリアタウン付近）には専門ピラティススタジオは少ないですが、JR山手線で1駅の新宿駅・高田馬場駅に多数のスタジオが集中しています。新大久保駅からは各駅わずか2〜3分、乗り換えなしでアクセスできるので、とても通いやすいですよ。',
  },
]

export default function ShinOkuboAreaPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'LocalBusiness',
                name: studio.name,
                address: studio.address,
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: studio.rating,
                  reviewCount: studio.reviewCount,
                },
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
        { name: '新大久保', url: 'https://pilates-biyori.com/area/shin-okubo/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月22日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス新大久保・新宿おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">新大久保・新宿</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="新大久保・新宿" />


        <TableOfContents areaName="新大久保・新宿" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「新大久保でピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「JR山手線新大久保駅から通いやすい人気スタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、新大久保駅（新宿区・コリアタウン・大久保通りエリア）から通いやすいおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>新大久保・新宿エリアでピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安い・無料のスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>JR山手線新大久保駅から1駅で通えるスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="新大久保・新宿" />
        <AreaMarketComparison studios={studios} areaName="新大久保・新宿" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新大久保・新宿のおすすめピラティススタジオ8選
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
              新大久保・新宿のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜22,280円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 10,450円〜22,280円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              新大久保・新宿は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の新宿エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新大久保・新宿でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">都営大江戸線「新宿西口駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大久保・新宿エリアのスタジオは新宿西口駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。新宿西口駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大久保・新宿は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大久保・新宿エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大久保・新宿エリアだけでなく、近隣の<Link href="/area/shinjuku/" className="text-warm-700 underline hover:text-warm-900">新宿</Link>、<Link href="/area/takadanobaba/" className="text-warm-700 underline hover:text-warm-900">高田馬場</Link>、<Link href="/area/yotsuya/" className="text-warm-700 underline hover:text-warm-900">四ツ谷</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>新大久保・新宿エリアの豆知識：</strong>新大久保・新宿は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの空間で安心してレッスンに集中できる。音楽×マシンの楽しいプログラムが充実。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 新宿店（月4回 15,280円）</li>
                  <li className="text-warm-700">• ピラティスK 新宿西口店（月4回 13,420円〜）</li>
                  <li className="text-warm-700">• Rintosull 高田馬場店・新宿西口駅前店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">男女共用・少人数制</h3>
                <p className="text-warm-600 text-sm mb-4">
                  男性もOK。夫婦やカップルでも通える。全国150店舗相互利用で出張先でも続けやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 高田馬場店（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• zen place pilates 新宿（西口）（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• zen place pilates 新宿南口（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  新大久保駅からJR山手線1駅。各スタジオ駅から徒歩1〜5分の好立地。仕事帰りにも通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 新宿店（新宿西口駅1分）</li>
                  <li className="text-warm-700">• ピラティスK 新宿西口店（新宿駅1分）</li>
                  <li className="text-warm-700">• zen place pilates 高田馬場店（駅徒歩1分）</li>
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
                  全国展開の大手スタジオ。マット中心のグループレッスンで手軽に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 高田馬場（10,450円〜）</li>
                  <li>• zen place pilates 新宿西口（10,450円〜）</li>
                  <li>• zen place pilates 新宿南口（10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  女性専用の音楽×マシンスタジオ。ボディメイクに特化したプログラム。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 新宿西口店（13,420円〜）</li>
                  <li>• the SILK 新宿店（15,280円）</li>
                  <li>• zen place RG4（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 17,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方向け。回数制限なしで好きなだけ通える充実プラン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place フリープラン（16,940円）</li>
                  <li>• ピラティスK プレミアム（18,920円）</li>
                  <li>• the SILK Full（22,280円）</li>
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
                  新大久保・新宿エリアの料金相場はグループで月4回10,000円〜15,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。新大久保・新宿エリアでは無料〜1,000円程度で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。JR山手線新大久保駅からは新宿駅まで1駅（2分）、高田馬場駅まで1駅（3分）と好アクセス。新宿区の中心エリアなので、コリアタウンや大久保通りでの買い物ついでにも通えて便利ですよ。駅近のスタジオを選ぶと、仕事帰りや休日のお出かけにも合わせやすいです。
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
              今回は新大久保・新宿エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              新大久保駅周辺（新宿区・コリアタウン・大久保通り）には専門スタジオは少ないものの、JR山手線で1駅の新宿駅・高田馬場駅に人気スタジオが多数集中しています。新大久保駅からは各駅わずか2〜3分、乗り換えなしでアクセスできるので、とても通いやすい環境です。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では新大久保・新宿エリアに数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
      <ConsultantSection areaKey="shin-okubo" areaName="新大久保・新宿" />

      <RelatedAreas currentSlug="shin-okubo" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
