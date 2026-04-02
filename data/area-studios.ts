// エリア別スタジオデータ

type Studio = {
  name: string
  image: string
  rating: number
  price: string
  trial: string
  features: string[]
  description: string
  access: string
  address?: string
  popularPlan?: {
    name: string
    description: string
    price: string
  }
  options?: string[]
  userProfile?: {
    ageRange: string
    genderRatio: string
    purpose: string[]
  }
  basicInfo?: {
    hours: string
    closed: string
    facilities: string[]
  }
}

type AreaData = {
  name: string
  region: string
  description: string
  studios: Studio[]
}

export const areaStudios: Record<string, AreaData> = {
  // 北海道・東北
  sapporo: {
    name: '札幌',
    region: '北海道・東北',
    description: '北海道最大の都市・札幌エリアのピラティススタジオ。札幌駅周辺から大通、すすきのまで、通いやすいスタジオが充実。',
    studios: [
      {
        name: 'zen place pilates 札幌スタジオ',
        image: '/images/pilates2.jpg',
        rating: 4.2,
        price: '月4回 13,200円〜',
        trial: '体験レッスン 1,000円',
        features: ['マシン完備', '初心者歓迎', '札幌駅直結', 'インストラクター養成'],
        description: '全国展開の大手ピラティススタジオ。札幌駅直結で通いやすい。マットピラティスからマシンピラティスまで豊富なレッスンメニュー。',
        access: '札幌駅直結',
        address: '北海道札幌市中央区北5条西2-5 JRタワーオフィスプラザさっぽろ 8F',
      },
      {
        name: 'ピラティスK 札幌',
        image: '/images/pilates3.jpg',
        rating: 4.0,
        price: '月4回 15,070円〜',
        trial: '無料体験レッスン',
        features: ['音楽×マシン', '女性専用', '暗闇レッスン', 'グループレッスン'],
        description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。大通駅から徒歩3分。',
        access: '大通駅から徒歩3分',
        address: '北海道札幌市中央区南1条西3-8-20 メットライフ札幌プラザ 5F',
      },
      {
        name: 'CLUB PILATES 札幌',
        image: '/images/pilates4.jpg',
        rating: 4.1,
        price: '月4回 14,190円〜',
        trial: '体験レッスン 無料',
        features: ['アメリカ発', 'グループ&プライベート', '大通駅近', '初心者歓迎'],
        description: 'アメリカ発の世界最大級ピラティススタジオチェーン。グループレッスンからプライベートレッスンまで幅広く対応。',
        access: '大通駅から徒歩4分',
        address: '北海道札幌市中央区南2条西3-13 アルシェビル 3F',
      },
      {
        name: 'Reformer Pilates Sapporo',
        image: '/images/pilates2.jpg',
        rating: 4.3,
        price: '月4回 13,200円〜',
        trial: '体験レッスン 1,000円',
        features: ['リフォーマー専門', '少人数制', '円山', '初心者歓迎'],
        description: 'リフォーマー専門のピラティススタジオ。円山エリアに展開。少人数制で丁寧な指導が魅力。',
        access: '円山公園駅から徒歩5分',
        address: '北海道札幌市中央区北1条西25-1-17 円山プラザビル 2F',
      },
      {
        name: 'ピラティススタジオ B-line 札幌',
        image: '/images/pilates3.jpg',
        rating: 4.2,
        price: '1回 8,800円〜',
        trial: '体験レッスン 5,500円',
        features: ['完全プライベート', 'マシン完備', '札幌駅南口', 'オーダーメイド'],
        description: '完全プライベートレッスン専門スタジオ。一人ひとりの目的・体力に合わせたオーダーメイドレッスン。',
        access: '札幌駅南口から徒歩5分',
        address: '北海道札幌市中央区北4条西5-1 アスティ45ビル 9F',
      },
    ],
  },

  sendai: {
    name: '仙台',
    region: '北海道・東北',
    description: '東北最大の都市・仙台エリアのピラティススタジオ。仙台駅周辺から泉中央まで、通いやすいスタジオが揃っています。',
    studios: [
      {
        name: 'zen place pilates 仙台スタジオ',
        image: '/images/pilates2.jpg',
        rating: 4.1,
        price: '月4回 13,200円〜',
        trial: '体験レッスン 1,000円',
        features: ['マシン完備', '初心者歓迎', '仙台駅徒歩5分', 'インストラクター養成'],
        description: '全国展開の大手ピラティススタジオ。仙台駅から徒歩5分の好立地。マットピラティスからマシンピラティスまで対応。',
        access: '仙台駅から徒歩5分',
        address: '宮城県仙台市青葉区中央1-10-1 ヒューモスファイヴ 4F',
      },
      {
        name: 'ピラティスK 仙台',
        image: '/images/pilates3.jpg',
        rating: 3.9,
        price: '月4回 15,070円〜',
        trial: '無料体験レッスン',
        features: ['音楽×マシン', '女性専用', '暗闇レッスン', 'グループレッスン'],
        description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。仙台駅西口から徒歩3分。',
        access: '仙台駅西口から徒歩3分',
        address: '宮城県仙台市青葉区中央3-1-24 荘銀ビル 5F',
      },
      {
        name: 'CLUB PILATES 仙台',
        image: '/images/pilates4.jpg',
        rating: 4.0,
        price: '月4回 14,190円〜',
        trial: '体験レッスン 無料',
        features: ['アメリカ発', 'グループ&プライベート', '仙台パルコ近く', '初心者歓迎'],
        description: 'アメリカ発の世界最大級ピラティススタジオチェーン。仙台駅パルコ近くで通いやすい。',
        access: '仙台駅から徒歩4分',
        address: '宮城県仙台市青葉区中央2-5-9 庄文堂ビル 3F',
      },
      {
        name: 'Pilates & Yoga Sol 仙台',
        image: '/images/pilates2.jpg',
        rating: 4.2,
        price: '月4回 12,800円〜',
        trial: '体験レッスン 1,000円',
        features: ['ヨガ×ピラティス', '少人数制', '仙台駅東口', '初心者歓迎'],
        description: 'ヨガとピラティスの融合スタジオ。少人数制で丁寧な指導。初心者でも安心して始められる環境。',
        access: '仙台駅東口から徒歩6分',
        address: '宮城県仙台市宮城野区榴岡4-2-3 仙台MTビル 6F',
      },
    ],
  },

  // その他のエリアデータは後で追加予定（作業進行中）
}
