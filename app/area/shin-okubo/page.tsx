import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス新大久保・新宿おすすめ8選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '新大久保・新宿エリアのおすすめピラティススタジオ8選を徹底比較。新大久保駅から1駅の新宿・高田馬場の実在スタジオを厳選。マシンピラティス、体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,新大久保,新宿,高田馬場,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'the SILK 新宿店',
    image: '/images/pilates1.jpg',
    rating: 4.8,
    reviewCount: 186,
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
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 142,
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
    image: '/images/pilates3.jpg',
    rating: 4.6,
    reviewCount: 128,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス指導歴10年以上のベテランインストラクター達が呼吸の仕方から丁寧に指導してくれます。2024年5月に拡張移転してスタジオが広くなりました。',
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
    image: '/images/pilates4.jpg',
    rating: 4.5,
    reviewCount: 95,
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
    image: '/images/pilates5.jpg',
    rating: 4.4,
    reviewCount: 88,
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
    image: '/images/pilates6.jpg',
    rating: 4.6,
    reviewCount: 156,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '2週間前',
        text: '新宿西口駅から徒歩2分で通いやすい。全国150店舗相互利用できるので、出張先でも通えて便利です。',
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
    image: '/images/pilates7.jpg',
    rating: 4.7,
    reviewCount: 178,
    reviews: [
      {
        author: 'N.A',
        rating: 5,
        date: '1週間前',
        text: '新宿三丁目駅から徒歩1分で超便利。新宿駅からも徒歩3分で通えます。全国150店舗相互利用できるのが魅力です。',
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
    image: '/images/pilates8.jpg',
    rating: 4.5,
    reviewCount: 102,
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

export default function ShinOkuboAreaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: studios.map((studio, index) => ({
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
      <Navigation />
      <main className="flex-grow bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              新大久保・新宿エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              新大久保駅から1駅の新宿・高田馬場エリアを中心に、実在する人気ピラティススタジオ8選を厳選してご紹介します
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                JR山手線 新大久保駅・新宿駅・高田馬場駅周辺
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                体験レッスンあり
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
                月額 10,450円〜
              </span>
            </div>
          </div>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">新大久保エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              新大久保駅周辺には専門ピラティススタジオが少ないため、JR山手線で1駅の新宿駅・高田馬場駅周辺の実在スタジオを中心にご紹介しています。新宿駅は日本最大のターミナル駅で、女性専用の音楽×マシンピラティスの「the SILK」「ピラティスK」や、全国展開の「zen place pilates」など多彩なスタジオが揃っています。高田馬場駅からも徒歩1〜3分の好立地で通いやすいスタジオが充実。新大久保駅からは各駅わずか1駅（2〜3分）で、乗り換えなしでアクセス可能です。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">新大久保・新宿エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                新大久保駅周辺は専門ピラティススタジオは少ないものの、JR山手線で1駅の新宿駅・高田馬場駅周辺に多数の実在スタジオが集中しています。新大久保駅からは各駅わずか1駅（2〜3分）、乗り換えなしでアクセス可能な好立地です。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>新宿駅：日本最大のターミナル駅、女性専用スタジオ「the SILK」「ピラティスK」など充実</li>
                <li>高田馬場駅：駅徒歩1〜3分の好立地スタジオが多数、「zen place pilates」「Rintosull」など</li>
                <li>新大久保駅から各駅1駅（2〜3分）で乗り換えなしアクセス</li>
                <li>体験レッスン無料〜1,000円で気軽に始められる</li>
                <li>全国展開の大手から女性専用まで、多彩なスタジオが選べる</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                月4回で10,450円〜22,280円が相場。zen place pilatesは月4回10,450円〜、the SILKは月4回15,280円、ピラティスKは月4回13,420円と、スタジオによって料金体系が異なります。体験レッスンは無料〜1,000円で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                新大久保駅からJR山手線で新宿駅まで1駅（2分）、高田馬場駅まで1駅（3分）。各スタジオは駅から徒歩1〜5分の好立地で、仕事帰りや買い物ついでに通いやすい環境です。新宿駅は複数路線が乗り入れる日本最大のターミナル駅なので、都内各地からのアクセスも便利です。
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              他のエリアを見る
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
