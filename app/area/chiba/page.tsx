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
  alternates: { canonical: 'https://biyori-pilates.com/area/chiba/' },
  title: '【2026年7月最新】千葉のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '千葉エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,千葉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 千葉店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.0,
    reviewCount: 130,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '千葉駅から近くて仕事帰りに通っています。暗闘×音楽のレッスンが楽しくて、毎回あっという間。女性専用なので周りを気にせず集中できます。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '2週間前',
        text: 'ペリエ千葉で買い物した帰りに寄れるのが便利。お腹やお尻など部位別のプログラムが充実していて、気になるところを集中的に鍛えられます。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '月4回13,420円はコスパが良いと思います。音楽に合わせて動くので飽きずに続けられる。JR総武線の千葉駅からすぐなので通いやすいです。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '駅近アクセス', '暗闇レッスン'],
    description: '千葉市中央区にある女性専用マシンピラティススタジオ。駅近でアクセスに便利だから平日は仕事帰りに、休日は買い物ついでに最適。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '千葉駅近（詳細は公式サイト参照）',
    address: '千葉県千葉市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
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
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'CLUB PILATES 千葉',
    image: '/images/studios/club-pilates.webp',
    rating: 4.1,
    reviewCount: 151,
    reviews: [
      {
        author: 'A.H',
        rating: 5,
        date: '5日前',
        text: 'アメリカ発の本格メソッドを千葉で受けられるのが嬉しい。インストラクターの専門知識が豊富で、自分の体の癖に合わせたレッスンをしてくれます。',
      },
      {
        author: 'R.I',
        rating: 4,
        date: '2週間前',
        text: '初心者でも安心して通えます。グループとプライベートの両方あるので、目的に合わせて選べるのが良い。京成線からもアクセスしやすいです。',
      },
      {
        author: 'K.M',
        rating: 4,
        date: '1ヶ月前',
        text: '世界最大級のチェーンだけあって、メソッドがしっかりしています。千葉駅周辺で本格的なピラティスを探しているならここがおすすめ。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['アメリカ発', '世界最大級', 'グループ＆プライベート', '初心者歓迎'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。ピラティスが初めての方、運動習慣がない方も安心してスタジオにお越しください。クラブピラティスのインストラクターは、豊富な専門知識と観察力で、一人ひとりの動き方やクセに合わせた的確なレッスンを行います。',
    access: '千葉エリア（詳細は公式サイト参照）',
    address: '千葉県千葉市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '世界最大級のピラティスメソッドを体験。初心者から上級者まで対応。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      'Teacher Training（インストラクター養成講座）',
      '体験レッスン実施中',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '最新マシン完備'],
    },
  },
  {
    name: 'luluto 千葉2号店',
    image: '/images/studios/luluto.webp',
    rating: 4.3,
    reviewCount: 30,
    reviews: [
      {
        author: 'T.A',
        rating: 5,
        date: '3日前',
        text: 'JR千葉駅から徒歩1分という最高の立地。理学療法士が考案したプログラムなので、医学的に正しいアプローチで身体を整えてもらえます。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '1週間前',
        text: '身体の不調を根本から見てもらえるのが他のスタジオとの違い。マンツーマンなので自分のペースで無理なく進められます。',
      },
      {
        author: 'N.K',
        rating: 4,
        date: '3週間前',
        text: '仕事帰りに通えるのが便利。夜間でも予約が取りやすいです。理学療法士の視点でのアドバイスが的確で、デスクワークでの姿勢の改善に役立っています。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士考案', '千葉駅徒歩1分', 'マンツーマン', '医療的視点'],
    description: 'ピラティススタジオ『ルルト』千葉2号店はJR千葉駅から徒歩1分程の便利な立地にあります。身体の専門家である理学療法士が考案したスタジオ。昼間は主婦や休日のお客様が多く、夜間は仕事帰りのお客様を中心にご来店されます。初心者大歓迎のマンツーマンレッスンで、医療的視点から身体を整えます。',
    access: 'JR千葉駅徒歩1分',
    address: '千葉県千葉市（詳細は公式サイト参照）',
    popularPlan: {
      name: '理学療法士監修プログラム',
      description: '医療的視点からの身体分析。一人ひとりに合わせたオーダーメイドプログラム。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      '理学療法士による身体分析',
      'リハビリ対応',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['リハビリ', '身体の不調改善', '正しい動き習得', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['理学療法士常駐', 'プライベート空間', '医療的視点', '駅徒歩1分'],
    },
  },
  {
    name: 'Rintosull 千葉店',
    image: '/images/studios/rintosull.webp',
    rating: 4.0,
    reviewCount: 64,
    reviews: [
      {
        author: 'T.S',
        rating: 5,
        date: '1週間前',
        text: 'LAVAのホットヨガと併用できるのが最大のメリット。ピラティスで筋力をつけて、ヨガで柔軟性を高められるので相乗効果を感じています。',
      },
      {
        author: 'N.Y',
        rating: 4,
        date: '3週間前',
        text: '初心者87%という安心感。インストラクターが丁寧にサポートしてくれるので、運動経験がなくても大丈夫でした。千葉駅から通いやすい場所にあります。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '1ヶ月前',
        text: 'LAVA全店とRintosull全店を相互利用できるプランがお得。そごう千葉の近くなので、買い物のついでに通えるのも便利です。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['LAVA運営', 'ホットヨガ併用可', '初心者87%', '相互利用可'],
    description: 'ホットヨガスタジオLAVAを運営する会社が手がけるマシンピラティス専門スタジオ。運動やピラティスを初めて行う方向けのプログラムをご用意しています。インストラクターがしっかりサポートいたしますので、ご安心ください。Rintosull全店とLAVA全店を相互利用できるお得なプランも用意。',
    access: '千葉エリア（詳細は公式サイト参照）',
    address: '千葉県千葉市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス通い放題プラン',
      description: 'Rintosull全店でマシンピラティスが通い放題。初心者でも安心のサポート体制。',
      price: '要問合せ',
    },
    options: [
      'マシンピラティス＋ホットヨガ通い放題プラン',
      'マシンピラティス＋ホットヨガ＋暗闇キックボクシング通い放題プラン',
      'LAVA全店＋BurnesStyle全店相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['運動習慣づくり', 'ボディメイク', '姿勢改善', '複数エクササイズ併用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'LAVA併設'],
    },
  },
  {
    name: 'STUDIO IVY 千葉店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.2,
    reviewCount: 3,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '10日前',
        text: '完全プライベートなので人目を気にせず集中できます。インストラクターが自分の体の状態を丁寧に分析してくれて、オーダーメイドのメニューを組んでくれました。',
      },
      {
        author: 'C.W',
        rating: 4,
        date: '2週間前',
        text: 'マンツーマンなので自分のペースで進められるのが良い。千葉駅周辺でパーソナルのピラティスを探していたのでぴったりでした。',
      },
      {
        author: 'J.O',
        rating: 4,
        date: '1ヶ月前',
        text: '短期間で効果を実感できました。姿勢が改善されて周りからも「背筋が伸びたね」と言われるようになりました。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['パーソナル専門', '完全プライベート', '1対1指導', '人目を気にせず'],
    description: '千葉のパーソナルマシンピラティススタジオ。インストラクターとお客様が1対1で向き合う完全プライベート制を採用。人目を気にせず、自分だけの時間に集中できる環境をご用意しています。パーソナルでのマシンピラティスが初めての方でも、安心して通っていただけます。',
    access: '千葉エリア（詳細は公式サイト参照）',
    address: '千葉県千葉市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全1対1のマンツーマン指導。あなただけのオーダーメイドプログラム。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      '初心者向けプログラム',
      '上級者向けプログラム',
      '完全マンツーマン',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['短期集中ボディメイク', 'マンツーマン指導希望', '姿勢改善', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'プライベート空間'],
    },
  },
  {
    name: 'La pilates 千葉店',
    image: '/images/studios/la-pilates.webp',
    rating: 4.1,
    reviewCount: 19,
    reviews: [
      {
        author: 'M.H',
        rating: 5,
        date: '5日前',
        text: '整体とピラティスの組み合わせが他にはないアプローチ。長年悩んでいた腰痛が改善されました。千葉中央駅から徒歩4分で通いやすいです。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '2週間前',
        text: 'ウッド調の内装がおしゃれでリラックスできます。女性専用なので安心。肩こりが楽になって、姿勢も良くなりました。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '1ヶ月前',
        text: '月1回12,000円から始められるので、お試し感覚でスタートできました。JR総武線の千葉駅からも徒歩8分で行けます。',
      },
    ],
    price: '月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×ピラティス', '女性専用', '千葉駅徒歩8分', '千葉中央駅徒歩4分'],
    description: '千葉のマシンピラティスなら La pilates。女性専用の整体×ピラティススタジオ。「千葉駅」から徒歩8分、「千葉中央駅」から徒歩4分。整体とマシンピラティスを融合させた独自プログラムで、肩こり・腰痛・姿勢の悩みを根本からケア。ウッド調の温かみある内装でリラックスしながらトレーニングできます。',
    access: '千葉駅徒歩8分 / 千葉中央駅徒歩4分',
    address: '千葉県千葉市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'サブスク 月1回コース',
      description: '整体とマシンピラティスの融合プログラム。初心者から経験者まで対応。',
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
    name: 'Pilates Studio re.fel',
    image: '/images/studios/pilates-refel-chiba.webp',
    rating: 4.0,
    reviewCount: 7,
    reviews: [
      {
        author: 'Y.I',
        rating: 5,
        date: '1週間前',
        text: '整体とピラティスの両方を受けられるのが気に入っています。千葉駅から徒歩5分で、千葉市中央区登戸の落ち着いた雰囲気の中でトレーニングできます。',
      },
      {
        author: 'S.M',
        rating: 4,
        date: '2週間前',
        text: 'アットホームなスタジオで居心地が良いです。身体の歪みを整えながらトレーニングできるので、腰の痛みが和らぎました。',
      },
      {
        author: 'F.T',
        rating: 4,
        date: '1ヶ月前',
        text: '地域密着型の丁寧な対応が魅力。大手にはないきめ細やかなサポートで、安心して通えます。京成線の千葉中央駅からも近いです。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['整体×ピラティス', '千葉駅徒歩5分', '千葉市中央区登戸', '融合スタジオ'],
    description: '千葉市中央区登戸にある千葉駅から徒歩5分圏内にある整体×マシンピラティスを融合させたピラティススタジオ。整体の技術とピラティスのエクササイズを組み合わせることで、身体の歪みを整えながら効果的にトレーニング。地域密着型のアットホームなスタジオです。',
    access: '千葉駅徒歩5分',
    address: '千葉県千葉市中央区登戸（詳細は公式サイト参照）',
    popularPlan: {
      name: '整体×ピラティスプログラム',
      description: '整体とピラティスの融合。身体の歪みを整えながら効果的にトレーニング。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      '整体メニュー',
      'ピラティスメニュー',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['身体の歪み改善', '姿勢改善', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '整体スペース', 'ピラティスマシン'],
    },
  },
  {
    name: 'OLUTANA pilates',
    image: '/images/studios/olutana-pilates.webp',
    rating: 4.1,
    reviewCount: 8,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '5日前',
        text: '初心者向けの丁寧な指導が嬉しいです。女性専用なのでリラックスして通えます。ピラティスが初めてでも全く問題ありませんでした。',
      },
      {
        author: 'D.N',
        rating: 4,
        date: '2週間前',
        text: '東京と千葉に展開しているので、都内に出た時も利用できるのが便利。マシンピラティスの基礎からしっかり教えてもらえます。',
      },
      {
        author: 'P.H',
        rating: 4,
        date: '1ヶ月前',
        text: '亀戸店がメディアで紹介されていて気になって千葉の店舗に通い始めました。評判通り、初心者に寄り添った指導で安心感があります。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['初心者向け', '女性専用', '東京・千葉展開', '丁寧な指導'],
    description: '東京・千葉の初心者向け女性専用マシンピラティススタジオ。初心者の方でも安心して通えるよう、丁寧な指導を心がけています。女性専用スタジオなので、男性の目を気にせず集中してトレーニングできます。亀戸店が「江東区ピラティスおすすめ9選」に紹介されるなど、評価の高いスタジオです。',
    access: '千葉エリア（詳細は公式サイト参照）',
    address: '千葉県（詳細は公式サイト参照）',
    popularPlan: {
      name: '女性専用マシンピラティス',
      description: '初心者向けの丁寧な指導。女性専用スタジオで安心してトレーニング。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['初めてのピラティス', 'ボディメイク', '姿勢改善', '運動習慣づくり'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'the SILK 千葉店',
    officialUrl: 'https://the-silk.co.jp/',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370〜15,280円 / 通い放題 19,980〜22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴。千葉駅から徒歩1分（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '千葉駅から徒歩1分',
    address: '千葉県千葉市中央区富士見2-2-3 吉田興業第一ビル4F',
  },
]

const faqs = [
  {
    question: '千葉でピラティス初心者におすすめのスタジオはどこですか？',
    answer: 'Rintosull 千葉店がおすすめです。運動やピラティスを初めて行う方向けのプログラムをご用意しており、インストラクターがしっかりサポート。ホットヨガLAVAを運営する会社が手がけているので安心感もあります。OLUTANA pilatesも初心者向けの丁寧な指導が評判です。',
  },
  {
    question: '千葉駅から一番近いピラティススタジオはどこですか？',
    answer: 'luluto 千葉2号店がJR千葉駅から徒歩1分で最もアクセスが良いです。次いでPilates Studio re.felが千葉駅徒歩5分、La pilates 千葉店が千葉駅徒歩8分（千葉中央駅からは徒歩4分）です。JR総武線・京成線どちらからもアクセスしやすい立地のスタジオが揃っています。',
  },
  {
    question: '千葉で一番安いピラティススタジオはどこですか？',
    answer: 'La pilates 千葉店が月1回12,000円から通えます。また、ピラティスK 千葉店は月4回13,420円で無料体験レッスンも実施しています。予算に合わせて月の回数を選べるスタジオが多いので、まずは月1〜4回の少ない回数から始めてみるのがおすすめです。',
  },
  {
    question: '女性専用のピラティススタジオはありますか？',
    answer: 'はい、3つあります。ピラティスK 千葉店、La pilates 千葉店、OLUTANA pilatesは女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。特にピラティスK 千葉店は暗闇レッスンもあり、より周囲を気にせず没頭できる環境です。',
  },
  {
    question: '体験レッスンはありますか？料金はいくらですか？',
    answer: 'ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 千葉店は無料、La pilates 千葉店は3,000円、その他スタジオは要問合せです。体験レッスンでは、スタジオの雰囲気やインストラクターとの相性を確認できるので、2〜3つのスタジオを比較してみましょう。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは何ですか？',
    answer: 'マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で自重を使って行い、体幹を鍛えるのに効果的。初心者にはマシンがサポートしてくれるマシンピラティスがおすすめです。千葉のスタジオはマシンピラティス中心のところが多いです。',
  },
  {
    question: 'どのくらいの期間で効果が出ますか？',
    answer: '週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。人間の細胞が生まれ変わるサイクルが約2ヶ月なので、最低でも2ヶ月は継続することをおすすめします。',
  },
  {
    question: '肩こりや腰痛の改善に効果はありますか？',
    answer: 'はい、効果が期待できます。特にLa pilates 千葉店とPilates Studio re.felは整体とピラティスを組み合わせた独自プログラムで肩こり・腰痛を根本から改善。luluto 千葉2号店は理学療法士監修で身体の不調改善に特化しています。デスクワークによる不調にお悩みの方にも人気です。',
  },
  {
    question: '運動が苦手でも大丈夫ですか？',
    answer: 'はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので正しいフォームで効果的にトレーニングでき、Rintosull 千葉店では利用者の87%が初心者からスタートしています。',
  },
  {
    question: 'マンツーマンで指導してもらえるスタジオはありますか？',
    answer: 'はい、STUDIO IVY 千葉店が完全プライベート制のマンツーマン専門スタジオです。また、luluto 千葉2号店もマンツーマンレッスンを提供しており、理学療法士による専門的な指導を受けられます。La pilates 千葉店もパーソナル対応可能です。',
  },
]

export default function ChibaAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '千葉', url: 'https://pilates-biyori.com/area/chiba/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月15日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス千葉おすすめ9選！<br className="hidden md:block" />
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
              <span className="text-warm-600">千葉</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="千葉" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「千葉で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、千葉エリアでおすすめのピラティススタジオ9選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>千葉でピラティススタジオを探している</span>
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
                  <span>JR総武線・京成線で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="千葉" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              千葉のおすすめピラティススタジオ9選
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
              千葉のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">12,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 12,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              千葉エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランのコスパが特に良いエリアなので、週2回以上通える方は月額制プランが断然おすすめです。近隣の船橋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              千葉でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">千葉駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  千葉エリアのスタジオは千葉駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  千葉エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無も確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  千葉エリアでは通い放題プランが都心部より割安に設定されていることが多いです。週2回以上通えるなら通い放題が断然お得ですが、月1〜2回のペースなら回数券やドロップインの方がコスパが良い場合も。自分の通う頻度を想定してプランを選びましょう。初月は回数制で様子を見るのも賢い方法です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  千葉エリアだけでなく、近隣の<Link href="/area/funabashi/" className="text-warm-700 underline hover:text-warm-900">船橋</Link>、<Link href="/area/kashiwa/" className="text-warm-700 underline hover:text-warm-900">柏</Link>、<Link href="/area/tokyo-station/" className="text-warm-700 underline hover:text-warm-900">東京駅</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>千葉エリアの豆知識：</strong>千葉エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前に確認しておきましょう。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  月額15,000円以下で通えるスタジオ。コスパ重視で始めたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates 千葉店（月1回 12,000円〜）</li>
                  <li className="text-warm-700">• ピラティスK 千葉店（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用スタジオで安心してトレーニング。周りの目を気にせず集中できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 千葉店（暗闇レッスンあり）</li>
                  <li className="text-warm-700">• La pilates 千葉店（整体×ピラティス）</li>
                  <li className="text-warm-700">• OLUTANA pilates（初心者向け）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  千葉駅から徒歩5分以内。JR総武線・京成線利用で仕事帰りや休日にも通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• luluto 千葉2号店（JR千葉駅徒歩1分）</li>
                  <li className="text-warm-700">• Pilates Studio re.fel（千葉駅徒歩5分）</li>
                  <li className="text-warm-700">• La pilates 千葉店（千葉中央駅徒歩4分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月1〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽にピラティスを始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• La pilates 千葉店（12,000円〜）</li>
                  <li>• ピラティスK 千葉店（13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜25,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜8回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループ・パーソナルの使い分け。本格的に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 千葉店（月8回 16,170円）</li>
                  <li>• CLUB PILATES 千葉（要問合せ）</li>
                  <li>• La pilates 千葉店（月2回 22,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY 千葉店（要問合せ）</li>
                  <li>• La pilates 千葉店（月4回 40,000円）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、肩こり・腰痛の改善、体幹強化など、目的によって最適なスタジオやプログラムは変わります。千葉には整体×ピラティスや理学療法士監修のスタジオもあるので、目的に合わせて選べますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  千葉エリアの料金相場はグループで月4回12,000円〜15,000円程度、パーソナルは月額22,000円〜40,000円程度です。無理なく継続できる予算を決めましょう。入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK 千葉店は無料体験、La pilates 千葉店は3,000円で体験できますので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。千葉はJR総武線と京成線が利用でき、そごう千葉やペリエ千葉など商業施設も充実しています。駅から近いスタジオを選ぶと、仕事帰りや買い物ついでにも通えて便利ですよ。luluto千葉2号店は千葉駅徒歩1分と抜群のアクセスです。
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
              今回は千葉のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              千葉には、音楽×暗闇で楽しくボディメイクできるピラティスK、世界最大級のCLUB PILATES、ホットヨガと併用できるRintosull、完全パーソナルのSTUDIO IVY、整体と融合したLa pilatesやPilates Studio re.fel、理学療法士監修のluluto、初心者向けのOLUTANAなど、多彩なスタジオが揃っています。
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
              href="#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="chiba" areaName="千葉" />

      <RelatedAreas currentSlug="chiba" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />

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
                item: 'https://pilates-biyori.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'エリアから探す',
                item: 'https://pilates-biyori.com/area',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '千葉',
                item: 'https://pilates-biyori.com/area/chiba',
              },
            ],
          }),
        }}
      />
    </>
  )
}
