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
  alternates: { canonical: 'https://biyori-pilates.com/area/shizuoka/' },
  title: '【2026年8月最新】ピラティス静岡おすすめ9選！人気スタジオの料金プランを簡単比較！',
  description: '静岡エリアのおすすめピラティススタジオ9選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,静岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'pilates KASANE 静岡店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.2,
    reviewCount: 15,
    reviews: [
      {
        author: 'A.M',
        rating: 5,
        date: '2週間前',
        text: '少人数制なので一人ひとりしっかり見てもらえます。呉服町通り方面からもアクセスしやすく、静岡駅からも歩ける距離です。体験レッスンが手ぶらOKなのも嬉しいポイント。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '1ヶ月前',
        text: '表参道・松戸にも展開しているスタジオで信頼感があります。インストラクターが丁寧で、初心者の私でも安心して通えています。駿府城公園の近くで雰囲気も良いです。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '3週間前',
        text: '一度の体験レッスンでもピラティスの効果を実感できました。少人数制なので質問もしやすく、自分のペースで進められます。紺屋町からも近くて便利。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり（手ぶらOK）',
    features: ['少人数制', '表参道・松戸展開', '健康美を引き出す', '丁寧な指導'],
    description: 'pilates KASANEは、表参道、松戸、静岡で展開している一人一人の「健康美」を引き出す少人数制のピラティススタジオです。心と身体に向き合う日々を丁寧につみ「かさね」る。体験レッスンも少人数制で丁寧に行いますので、初心者の方も安心してご参加いただけます。一度の体験レッスンでも、ピラティスの効果を実感。',
    access: '静岡市内（詳細は公式サイト参照）',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: '少人数制グループレッスン',
      description: '一人一人の健康美を引き出す丁寧な指導。体験レッスンも少人数制で安心。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン（少人数制）',
      'プライベートレッスン',
      '体験レッスン（手ぶらOK）',
      'ウェア無料貸出',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['健康美を引き出す', 'ボディメイク', '姿勢改善', '初心者歓迎'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'ウェアレンタル無料', '少人数制'],
    },
  },
  {
    name: 'ピラティスK 静岡店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.0,
    reviewCount: 80,
    reviews: [
      {
        author: 'R.T',
        rating: 5,
        date: '1週間前',
        text: '新静岡駅から徒歩1分なので仕事帰りにサクッと通えます。JR東海道線の静岡駅からも歩ける距離。暗闘×音楽のレッスンが楽しくて、ストレス発散にもなっています。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '2週間前',
        text: '女性専用なので周りの目を気にせずトレーニングに集中できます。呉服町通りでのショッピング帰りにも寄れて便利。無料体験があるので気軽に始められました。',
      },
      {
        author: 'S.O',
        rating: 5,
        date: '3週間前',
        text: 'お腹、お尻、二の腕など部位に特化したプログラムが充実しています。月4回13,420円で通えるのはコスパが良いと思います。紺屋町エリアからもアクセス抜群。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '新静岡駅徒歩1分', '暗闇レッスン'],
    description: '静岡県静岡市にある女性専用マシンピラティススタジオ。静岡鉄道「新静岡駅」から徒歩1分だから、平日は仕事帰りに、休日はお買い物ついでに最適。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '静岡鉄道 新静岡駅から徒歩1分',
    address: '静岡県静岡市（詳細は公式サイト参照）',
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
    name: 'zen place pilates 静岡',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.2,
    reviewCount: 32,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: 'JR東海道線の静岡駅から徒歩11分。全国150店舗以上あるので出張先でも通えるのが便利です。マットもマシンも充実していて、自分のレベルに合わせて選べます。',
      },
      {
        author: 'N.I',
        rating: 4,
        date: '3週間前',
        text: '新静岡駅からも徒歩12分で通えます。駿府城公園の近くなので、レッスン後に散歩するのが日課になりました。インストラクターの質が高いです。',
      },
      {
        author: 'H.Y',
        rating: 5,
        date: '1ヶ月前',
        text: '全店舗相互利用できるのが最大のメリット。月4回9,625円からとリーズナブルで、マットからマシンまで幅広いレッスンが受けられます。呉服町通り方面からもアクセス可能。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '全店相互利用可'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。JR線 静岡駅から徒歩11分、静岡清水線 新静岡駅 けやき通り口から徒歩12分。マットグループ、マシングループ、プライベートレッスンと多彩なレッスンを提供。全店舗相互利用可能で、自宅近くや職場近くなど生活シーンに合わせて自由に利用できます。',
    access: 'JR静岡駅徒歩11分 / 新静岡駅徒歩12分',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ 月4',
      description: 'マットピラティスのグループレッスン。初心者にもおすすめの基本プラン。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'フリープラン（通い放題 14,960円）',
      'マット＆マシングループ MM22（各2回 12,650円）',
      'リフォーマーグループ RG4（月4回 15,400円）',
      'プライベートレッスン（月4回 33,880円）',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照（早朝〜夜まで開催）',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'ピラティス-8810-',
    image: '/images/studios/pilates-8810-shizuoka.webp',
    rating: 4.0,
    reviewCount: 27,
    reviews: [
      {
        author: 'E.W',
        rating: 5,
        date: '2週間前',
        text: '静岡市内で長く愛されているスタジオです。アットホームな雰囲気で、初心者でもリラックスして通えます。紺屋町方面からも近くて便利。',
      },
      {
        author: 'C.M',
        rating: 4,
        date: '1ヶ月前',
        text: '地域密着型で、一人ひとりに合わせた丁寧な指導が魅力。駿府城公園の近くにあるので、レッスン前後の散策も楽しめます。',
      },
      {
        author: 'J.T',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターが親切で質問しやすい環境です。静岡駅からも歩ける距離で、JR東海道線利用者にも通いやすいスタジオだと思います。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['静岡市内', '地域密着', 'アットホーム', '丁寧な指導'],
    description: '静岡のピラティススタジオ。地域密着型のアットホームなスタジオで、一人ひとりに合わせた丁寧な指導を提供。初心者から経験者まで幅広く対応。静岡市内で長く愛されているスタジオです。',
    access: '静岡市内（詳細は公式サイト参照）',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '地域密着型のアットホームな指導。初心者から経験者まで対応。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
      '経験者向けプログラム',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '健康維持', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'アットホームな空間'],
    },
  },
  {
    name: 'ピラティススタジオMAEDA',
    image: '/images/studios/pilates-maeda-shizuoka.webp',
    rating: 4.1,
    reviewCount: 28,
    reviews: [
      {
        author: 'P.K',
        rating: 5,
        date: '5日前',
        text: '静岡駅前徒歩6分で通いやすい！JR東海道線で通勤している私にはぴったりのロケーション。少人数グループレッスン2,200円はかなりリーズナブルです。',
      },
      {
        author: 'L.S',
        rating: 4,
        date: '2週間前',
        text: 'let\'s jumpなど多彩なレッスンが楽しい。呉服町通りでの買い物帰りに寄れるのも便利。アットホームな雰囲気で初心者にもおすすめ。',
      },
      {
        author: 'D.H',
        rating: 5,
        date: '1ヶ月前',
        text: '2,200円でしっかりしたレッスンが受けられるのは静岡エリアでは最安クラス。紺屋町からも近く、駿府城公園の散歩ついでに通っています。',
      },
    ],
    price: '少人数グループレッスン 2,200円',
    trial: '体験レッスン あり',
    features: ['静岡駅前徒歩6分', '少人数制', 'let\'s jump', 'リーズナブル'],
    description: '静岡駅前徒歩6分の駅近スタジオ。少人数グループレッスン 2,200円とリーズナブルな価格設定が魅力。ピラティス、let\'s jumpなど多彩なレッスンを提供。アットホームな雰囲気で、初心者でも安心して通えます。',
    access: '静岡駅前徒歩6分',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: '少人数グループレッスン',
      description: '少人数制で丁寧な指導。2,200円とリーズナブルな価格設定。',
      price: '少人数グループレッスン 2,200円',
    },
    options: [
      'ピラティス',
      'let\'s jump',
      '少人数グループレッスン',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['お手頃に始めたい', 'ボディメイク', '姿勢改善', '楽しく運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['駅徒歩6分', 'ロッカー', '少人数制', 'リーズナブル'],
    },
  },
  {
    name: 'pilates Light 静岡',
    image: '/images/studios/pilates-light-shizuoka.webp',
    rating: 4.2,
    reviewCount: 18,
    reviews: [
      {
        author: 'F.A',
        rating: 5,
        date: '1週間前',
        text: 'マシン専門のプライベートスタジオで、完全マンツーマンの指導が受けられます。産後の体型戻しで通い始めましたが、丁寧に寄り添ってくれるので安心です。',
      },
      {
        author: 'G.R',
        rating: 5,
        date: '3週間前',
        text: 'Lolita\'s Legacy認定のインストラクターなので指導の質が高いです。静岡駅からJR東海道線で通っていますが、リラックスできる空間が気に入っています。',
      },
      {
        author: 'B.U',
        rating: 4,
        date: '1ヶ月前',
        text: '1対1でじっくり話を聞いてもらえるのが嬉しい。駿府城公園の近くで、レッスン後の散歩も癒しの時間になっています。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['マシン専門プライベート', '2022年夏OPEN', '2児の母', 'Lolita\'s Legacy認定'],
    description: '2022年夏、静岡市にマシンピラティス専門プライベートスタジオをオープン。Lolita\'s Legacy™️認定ピラティス指導者、産前産後ピラティス指導者認定。5歳・3歳を育てる2児の母。大人数があまり得意ではなく、1対1で話す時間が好き。リラックスできる空間で、丁寧なマンツーマン指導を提供。',
    access: '静岡市内（詳細は公式サイト参照）',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: 'マンツーマンで丁寧な指導。産前産後ピラティスにも対応。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'マタニティピラティス',
      'リカバリーピラティス（産後）',
      'マシン専門',
    ],
    userProfile: {
      ageRange: '30代〜40代が中心',
      genderRatio: '女性100%',
      purpose: ['マンツーマン希望', '産前産後ケア', 'リラックス', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['プライベート空間', 'マシン完備', '産前産後対応', 'リラックス空間'],
    },
  },
  {
    name: 'Natural Soma',
    image: '/images/studios/natural-soma-shizuoka.webp',
    rating: 4.1,
    reviewCount: 11,
    reviews: [
      {
        author: 'W.K',
        rating: 5,
        date: '10日前',
        text: '3回体験プランがあるので、じっくり試してから入会できました。静岡市駿河区にあり、静岡駅からJR東海道線でアクセスしやすいです。マシン専門で本格的。',
      },
      {
        author: 'V.M',
        rating: 4,
        date: '2週間前',
        text: 'マシンピラティス専門なので設備が充実しています。3回体験で効果を実感できたので入会を決めました。紺屋町方面からも車で通いやすいです。',
      },
      {
        author: 'O.S',
        rating: 5,
        date: '1ヶ月前',
        text: '健康な身体づくりをテーマにしたスタジオ。インストラクターが体の状態をしっかり見てくれます。駿府城公園の近くで環境も良いです。',
      },
    ],
    price: '3回体験プランあり',
    trial: '3回体験プラン あり',
    features: ['静岡市駿河区', 'マシン専門', '健康な身体づくり', 'お得な体験プラン'],
    description: '静岡市駿河区のマシンピラティス専門 Pilates Studio Natural Soma。当スタジオを初めてご利用になる方に、3回分のレッスンをお得に体験していただけるプランがございます。専用マシンを用いたピラティスのレッスンを通じて、健康な身体づくりをサポート。',
    access: '静岡市駿河区',
    address: '静岡県静岡市駿河区（詳細は公式サイト参照）',
    popularPlan: {
      name: '3回体験プラン',
      description: '初めての方にお得な3回体験プラン。マシンピラティスを試せる。',
      price: '3回体験プランあり（詳細は公式サイト参照）',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '3回体験プラン',
      'マシン専門',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['健康な身体づくり', 'お得に体験', 'ボディメイク', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '3回体験プラン'],
    },
  },
  {
    name: 'Repilates 富士宮店',
    image: '/images/studios/repilates.webp',
    rating: 4.0,
    reviewCount: 5,
    reviews: [
      {
        author: 'I.N',
        rating: 5,
        date: '1週間前',
        text: '女性専用のマシンピラティススタジオで安心して通えます。口コミ限定キャンペーンでピラティスソックスがもらえました。富士宮市で本格的なマシンピラティスが受けられるのは嬉しい。',
      },
      {
        author: 'U.T',
        rating: 4,
        date: '3週間前',
        text: '都内にも展開しているスタジオなので指導の質が高いです。静岡駅からはJR東海道線で少し距離がありますが、富士宮エリアの方にはぴったりのスタジオです。',
      },
      {
        author: 'Q.H',
        rating: 4,
        date: '1ヶ月前',
        text: 'グループレッスンが楽しい！女性専用なのでリラックスしてトレーニングに集中できます。呉服町通りのスタジオと迷いましたが、地元で通えるのが決め手でした。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり（口コミ限定キャンペーン）',
    features: ['女性専用', '富士宮市', 'グループレッスン', 'ソックスプレゼント'],
    description: 'マシンピラティス専門スタジオ Repilates 富士宮店。女性専用スタジオで、グループレッスンを提供。口コミ限定でグループレッスン+ピラティスソックスプレゼントのキャンペーンを実施中。都内・関東圏に複数店舗展開するスタジオの静岡進出。',
    access: '富士宮市（詳細は公式サイト参照）',
    address: '静岡県富士宮市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '女性専用のグループレッスン。口コミ限定キャンペーン実施中。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      '口コミ限定キャンペーン',
      'ピラティスソックスプレゼント',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['女性専用希望', 'ボディメイク', '仲間と運動', 'キャンペーン活用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用', 'キャンペーン実施中'],
    },
  },
  {
    name: 'Pilates Mee静岡店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。静岡駅から徒歩7分。',
    access: '静岡駅から徒歩7分',
    address: '静岡県静岡市駿河区稲川2丁目3-15 STビル2階',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！静岡エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。pilates KASANE 静岡店は少人数制で丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。静岡ではzen place pilates 静岡が両方に対応しています。',
  },
  {
    question: '静岡のピラティススタジオの料金相場は？',
    answer: '静岡エリアのピラティススタジオの料金相場は、グループレッスンで月4回2,200円〜13,420円程度。ピラティススタジオMAEDAの少人数グループレッスン2,200円が最安、ピラティスK 静岡店の月4回13,420円が大手の標準的な価格帯です。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。pilates KASANE 静岡店は手ぶらOKでウェア無料貸出もあります。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
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
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方にはpilates Light 静岡がおすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function ShizuokaAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '静岡', url: 'https://pilates-biyori.com/area/shizuoka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス静岡おすすめ9選！<br className="hidden md:block" />
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
              <span className="text-warm-600">静岡</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="静岡" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「静岡で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、静岡エリアでおすすめのピラティススタジオ9選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>静岡でピラティススタジオを探している</span>
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
                  <span>静岡駅・新静岡駅から通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="静岡" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              静岡のおすすめピラティススタジオ9選
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
              静岡のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">2,200円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,625円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円程度</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              静岡エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。近隣の浜松エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              静岡でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">静岡エリアのスタジオへのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  静岡エリアのスタジオは静岡市内（詳細は公式サイト参照）が最寄りです。初めて通う際は地図アプリで経路と所要時間を確認し、レッスン開始10分前には到着できるよう計画しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">静岡エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  静岡エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめ。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  静岡エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  静岡エリアだけでなく、近隣の<Link href="/area/hamamatsu/" className="text-warm-700 underline hover:text-warm-900">浜松</Link>、<Link href="/area/nagoya/" className="text-warm-700 underline hover:text-warm-900">名古屋</Link>、<Link href="/area/yokohama/" className="text-warm-700 underline hover:text-warm-900">横浜</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>静岡エリアの豆知識：</strong>静岡は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前に確認。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。
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
                  月額10,000円以下で通える格安スタジオ。リーズナブルに始めたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティススタジオMAEDA（1回 2,200円）</li>
                  <li className="text-warm-700">• zen place pilates 静岡（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• Natural Soma（3回体験プランあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  専用マシンを使った本格的なピラティス。初心者でも正しいフォームでトレーニング可能。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 静岡店</li>
                  <li className="text-warm-700">• zen place pilates 静岡</li>
                  <li className="text-warm-700">• pilates Light 静岡</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  静岡駅・新静岡駅から徒歩圏内。JR東海道線利用で仕事帰りにも通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 静岡店（新静岡駅徒歩1分）</li>
                  <li className="text-warm-700">• ピラティススタジオMAEDA（静岡駅前徒歩6分）</li>
                  <li className="text-warm-700">• zen place pilates 静岡（静岡駅徒歩11分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽にピラティスを始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティススタジオMAEDA（2,200円/回）</li>
                  <li>• zen place pilates 静岡（9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループレッスン中心で楽しく通える。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 静岡店（13,420円〜）</li>
                  <li>• zen place RG4（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">プライベート・要問合せ</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">個別対応</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全マンツーマンレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• pilates Light 静岡（要問合せ）</li>
                  <li>• pilates KASANE 静岡店（要問合せ）</li>
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
                  静岡エリアの料金相場はグループで1回2,200円〜月4回13,420円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK 静岡店は無料体験、Natural Somaは3回体験プランがあるので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。静岡駅はJR東海道線が利用でき、呉服町通りや紺屋町など繁華街も近いエリアです。新静岡駅徒歩1分のピラティスK、静岡駅前徒歩6分のピラティススタジオMAEDAなど、駅から近いスタジオを選ぶと仕事帰りにも通えて便利ですよ。駿府城公園も近く、レッスン後の散策も楽しめます。
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
              今回は静岡のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では静岡に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜お得な体験プランあり。<br />
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
      <ConsultantSection areaKey="shizuoka" areaName="静岡" />

      <RelatedAreas currentSlug="shizuoka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
