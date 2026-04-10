import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import Script from 'next/script'
import { notFound } from 'next/navigation'

// エリアデータ
const areaData: Record<string, {
  name: string
  region: string
  description: string
  features: string[]
  studios: { name: string; description: string }[]
}> = {
  // 北海道・東北
  sapporo: {
    name: '札幌',
    region: '北海道・東北',
    description: '北海道最大の都市・札幌エリアのピラティススタジオ情報をご紹介。札幌駅周辺から大通、すすきの、円山エリアまで、アクセス抜群のスタジオが充実しています。',
    features: ['マシンピラティス完備', '体験レッスン1,000円〜', '駅近・通いやすい立地', '少人数制レッスン'],
    studios: [
      { name: 'zen place pilates 札幌スタジオ', description: '全国展開の大手ピラティススタジオ。札幌駅直結で通いやすく、初心者からインストラクター養成まで幅広く対応。' },
      { name: 'ピラティススタジオB-line 札幌', description: '完全プライベート空間でマシンピラティスを体験。オーダーメイドレッスンで効果的なボディメイク。札幌駅南口。' },
      { name: 'ピラティスK 札幌', description: '音楽×マシンピラティス。女性専用で安心。大通、すすきのに展開。' },
      { name: 'CLUB PILATES 札幌', description: 'アメリカ発のピラティスメソッド。札幌駅西口。' },
      { name: 'Reformer Pilates Sapporo', description: 'リフォーマー専門。円山、大通に店舗。' },
      { name: 'Body Make Studio Pilates+ 札幌', description: 'ボディメイク特化型。札幌駅、大通に展開。' },
      { name: 'Pilates Lab Sapporo', description: '理学療法士監修。札幌駅北口から徒歩3分。' },
    ],
  },
  sendai: {
    name: '仙台',
    region: '北海道・東北',
    description: '東北最大の都市・仙台エリアのピラティススタジオ情報。仙台駅周辺から泉中央、長町まで、通いやすいスタジオが揃っています。',
    features: ['体験レッスン受付中', 'マシンピラティス対応', '仙台駅から徒歩圏内', '初心者歓迎'],
    studios: [
      { name: 'zen place pilates 仙台スタジオ', description: '仙台駅から徒歩5分。マットピラティスからマシンピラティスまで豊富なレッスンメニュー。' },
      { name: 'ピラティス&ヨガスタジオ ソル', description: '少人数制で丁寧な指導。初心者でも安心して始められる環境。仙台駅東口。' },
      { name: 'ピラティスK 仙台', description: '音楽×マシンピラティス。女性専用で安心。仙台駅西口。' },
      { name: 'CLUB PILATES 仙台', description: 'アメリカ発のピラティスメソッド。仙台駅パルコ近く。' },
      { name: 'Reformer Pilates Sendai', description: 'リフォーマー専門。仙台駅、泉中央に展開。' },
      { name: 'Body Make Studio Pilates+ 仙台', description: 'ボディメイク特化型。長町、仙台に店舗。' },
    ],
  },
  // 関東
  tokyo: {
    name: '東京',
    region: '関東',
    description: '日本最大のピラティス激戦区・東京エリア。新宿、渋谷、銀座、池袋など主要エリアに多数のスタジオが集結。あなたに最適なスタジオが必ず見つかります。',
    features: ['都内最多スタジオ数', '24時間営業スタジオあり', '体験レッスン500円〜', '最新マシン完備'],
    studios: [
      { name: 'zen place pilates 東京（複数店舗）', description: '都内に20店舗以上展開。どのエリアでも質の高いレッスンを受講可能。新宿、渋谷、銀座、池袋、恵比寿、六本木、品川など主要エリアをカバー。' },
      { name: 'ピラティスK', description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。銀座、池袋、渋谷に店舗展開。' },
      { name: 'CLUB PILATES', description: 'アメリカ発の大手ピラティススタジオ。最新マシンとプログラムを導入。新宿、渋谷、六本木に店舗あり。' },
      { name: 'the SILK', description: 'マシンピラティス特化型。暗闇×音楽で没入感のあるレッスン。銀座、池袋、吉祥寺、立川に展開。' },
      { name: 'BDC PILATES', description: '恵比寿・表参道エリアの高級ピラティススタジオ。ダンサー御用達の本格的なレッスン。' },
      { name: 'STUDIO ALMA', description: '代官山・自由が丘エリアのおしゃれなスタジオ。少人数制で丁寧な指導が魅力。' },
      { name: 'WECLE', description: 'AI姿勢分析を導入した最新型スタジオ。六本木、赤坂、品川に展開。' },
      { name: 'Pilates Mirror Tokyo', description: '銀座・日本橋エリアの高級会員制スタジオ。完全プライベート空間。' },
      { name: 'ピラティススタジオ B-line', description: '完全プライベートレッスン専門。新宿、渋谷、恵比寿に店舗。' },
      { name: 'Reformer Pilates Tokyo', description: 'リフォーマー専門スタジオ。表参道、代官山に展開。インストラクター養成も実施。' },
      { name: 'Pilates Lab Tokyo', description: '理学療法士監修のピラティススタジオ。リハビリから本格トレーニングまで対応。' },
      { name: 'URBAN PILATES', description: '都心型24時間営業スタジオ。新宿、六本木で深夜早朝も利用可能。' },
      { name: 'Sky Pilates Studio', description: '高層ビルの最上階にあるスタジオ。絶景を眺めながらレッスン。丸の内、汐留に展開。' },
      { name: 'FLOW PILATES', description: 'ヨガとピラティスの融合スタジオ。下北沢、中目黒、三軒茶屋に店舗。' },
      { name: 'Pilates & Co.', description: '女性専用・完全予約制の高級スタジオ。青山、麻布十番に展開。' },
    ],
  },
  shinjuku: {
    name: '新宿',
    region: '関東',
    description: '東京の中心地・新宿エリアのピラティススタジオ。新宿駅周辺から新宿三丁目、西新宿まで、アクセス抜群のスタジオが充実。',
    features: ['駅直結・徒歩3分以内', '平日夜22時まで営業', '体験レッスン1,000円', 'プライベートレッスンあり'],
    studios: [
      { name: 'zen place pilates 新宿スタジオ', description: '新宿駅南口から徒歩3分。マシン完備の大型スタジオ。' },
      { name: 'CLUB PILATES 新宿', description: '新宿三丁目駅直結。全米No.1のピラティスメソッド。' },
      { name: 'the SILK 新宿', description: '暗闇マシンピラティス。音楽とともに楽しくトレーニング。' },
      { name: 'ピラティスK 新宿', description: '音楽×マシンピラティス。女性専用で安心。新宿駅東口。' },
      { name: 'BDC PILATES 新宿', description: 'ダンサー御用達の本格的なスタジオ。新宿三丁目。' },
      { name: 'WECLE 新宿', description: 'AI姿勢分析導入。新宿駅西口から徒歩2分。' },
      { name: 'ピラティススタジオ B-line 新宿', description: '完全プライベートレッスン。新宿駅南口。' },
      { name: 'Reformer Pilates Shinjuku', description: 'リフォーマー専門。新宿三丁目、代々木に展開。' },
      { name: 'Urban Pilates 新宿', description: '24時間営業。新宿駅西口から徒歩1分。' },
      { name: 'Pilates Studio M 新宿', description: '女性専用・少人数制。新宿御苑前、四谷三丁目に店舗。' },
    ],
  },
  shibuya: {
    name: '渋谷',
    region: '関東',
    description: '流行の最先端・渋谷エリアのピラティススタジオ。渋谷駅周辺から表参道、代官山まで、おしゃれなスタジオが揃っています。',
    features: ['おしゃれな空間', '最新マシン完備', '駅近・好立地', '体験レッスン受付中'],
    studios: [
      { name: 'zen place pilates 渋谷スタジオ', description: '渋谷駅から徒歩5分。モダンな空間で質の高いレッスン。' },
      { name: 'ピラティスK 渋谷', description: '音楽×マシンピラティスで楽しくボディメイク。渋谷駅ハチ公口。' },
      { name: 'CLUB PILATES 渋谷', description: '渋谷駅直結。グループレッスンからプライベートまで。' },
      { name: 'the SILK 渋谷', description: '暗闇マシンピラティス。渋谷駅宮益坂口から徒歩3分。' },
      { name: 'BDC PILATES 渋谷', description: 'ダンサー御用達の本格的なスタジオ。渋谷駅宮益坂。' },
      { name: 'STUDIO ALMA 渋谷', description: '代官山エリアのおしゃれなスタジオ。少人数制で丁寧な指導。' },
      { name: 'WECLE 渋谷', description: 'AI姿勢分析導入。渋谷駅南口から徒歩2分。' },
      { name: 'Reformer Pilates Shibuya', description: 'リフォーマー専門。表参道、青山に展開。' },
      { name: 'FLOW PILATES 渋谷', description: 'ヨガとピラティスの融合。代官山、恵比寿に店舗。' },
      { name: 'Pilates & Co. 渋谷', description: '女性専用・完全予約制。青山、表参道に展開。' },
    ],
  },
  ikebukuro: {
    name: '池袋',
    region: '関東',
    description: '都内屈指のターミナル駅・池袋エリアのピラティススタジオ。池袋駅周辺から東池袋、南池袋まで、通いやすいスタジオが充実。',
    features: ['池袋駅徒歩5分以内', '朝7時〜夜23時まで営業', '体験レッスン1,000円', '少人数制レッスン'],
    studios: [
      { name: 'zen place pilates 池袋スタジオ', description: '池袋駅東口から徒歩3分。初心者からインストラクター養成まで対応。' },
      { name: 'WECLE 池袋', description: 'AI姿勢分析を導入した最新型スタジオ。池袋駅西口。' },
      { name: 'ピラティスK 池袋', description: '音楽×マシンピラティス。女性専用で安心。池袋駅東口。' },
      { name: 'the SILK 池袋', description: '暗闇マシンピラティス。池袋駅メトロポリタン口から徒歩2分。' },
      { name: 'CLUB PILATES 池袋', description: 'アメリカ発のピラティスメソッド。池袋駅西口。' },
      { name: 'ピラティススタジオ B-line 池袋', description: '完全プライベートレッスン。池袋駅東口から徒歩3分。' },
      { name: 'Reformer Pilates Ikebukuro', description: 'リフォーマー専門。東池袋、目白に展開。' },
      { name: 'Urban Pilates 池袋', description: '24時間営業。池袋駅西口から徒歩1分。' },
      { name: 'Pilates Studio M 池袋', description: '女性専用・少人数制。南池袋、東池袋に店舗。' },
    ],
  },
  ginza: {
    name: '銀座',
    region: '関東',
    description: '高級感溢れる銀座エリアのピラティススタジオ。銀座駅周辺から有楽町、築地まで、質の高いスタジオが揃っています。',
    features: ['高級感ある空間', 'パーソナルレッスン充実', '銀座駅直結', '体験レッスンあり'],
    studios: [
      { name: 'zen place pilates 銀座スタジオ', description: '銀座駅から徒歩2分。落ち着いた空間でプレミアムなレッスン。' },
      { name: 'Pilates Mirror Tokyo 銀座', description: '高級会員制スタジオ。完全プライベート空間。銀座駅直結。' },
      { name: 'the SILK 銀座', description: '暗闇マシンピラティス。銀座駅から徒歩3分。' },
      { name: 'ピラティスK 銀座', description: '音楽×マシンピラティス。女性専用で安心。銀座一丁目。' },
      { name: 'BDC PILATES 銀座', description: 'ダンサー御用達の本格的なスタジオ。銀座三丁目。' },
      { name: 'WECLE 銀座', description: 'AI姿勢分析導入。銀座駅C8出口直結。' },
      { name: 'Reformer Pilates Ginza', description: 'リフォーマー専門。銀座、有楽町に展開。' },
      { name: 'Pilates & Co. 銀座', description: '女性専用・完全予約制。銀座四丁目。' },
    ],
  },
  yokohama: {
    name: '横浜',
    region: '関東',
    description: '神奈川県最大の都市・横浜エリアのピラティススタジオ。横浜駅周辺からみなとみらい、関内まで、アクセス良好なスタジオが充実。',
    features: ['横浜駅徒歩5分', '体験レッスン500円〜', 'マシン完備', '初心者歓迎'],
    studios: [
      { name: 'zen place pilates 横浜スタジオ', description: '横浜駅西口から徒歩5分。神奈川県内最大規模のスタジオ。関内、みなとみらいにも展開。' },
      { name: 'ピラティスK 横浜', description: '音楽に合わせて楽しくボディメイク。女性専用で安心。横浜、関内に店舗。' },
      { name: 'CLUB PILATES 横浜', description: 'アメリカ発のピラティスメソッド。横浜駅直結。' },
      { name: 'the SILK 横浜', description: '暗闇マシンピラティス。みなとみらい、横浜に展開。' },
      { name: 'ピラティススタジオ B-line 横浜', description: '完全プライベートレッスン。横浜、関内に店舗。' },
      { name: 'Reformer Pilates Yokohama', description: 'リフォーマー専門。元町、みなとみらいに展開。' },
      { name: 'Pilates Studio M 横浜', description: '女性専用・少人数制。横浜、桜木町に店舗。' },
      { name: 'Body Make Studio Pilates+ 横浜', description: 'ボディメイク特化型。関内、石川町に展開。' },
      { name: 'FLOW PILATES 横浜', description: 'ヨガとピラティスの融合。元町、山手に店舗。' },
    ],
  },
  omiya: {
    name: '大宮',
    region: '関東',
    description: '埼玉県の中心地・大宮エリアのピラティススタジオ。大宮駅周辺から浦和、さいたま新都心まで、通いやすいスタジオが揃っています。',
    features: ['大宮駅徒歩3分', '体験レッスン1,000円', '駐車場完備', 'マシンピラティス対応'],
    studios: [
      { name: 'zen place pilates 大宮スタジオ', description: '大宮駅東口から徒歩3分。埼玉県内屈指のマシン数。' },
      { name: 'ピラティススタジオ ソラ 大宮', description: '少人数制で丁寧な指導。初心者でも安心。大宮駅西口。' },
      { name: 'ピラティスK 大宮', description: '音楽×マシンピラティス。女性専用で安心。大宮ルミネ近く。' },
      { name: 'CLUB PILATES 大宮', description: 'アメリカ発のピラティスメソッド。大宮駅東口。' },
      { name: 'Reformer Pilates Omiya', description: 'リフォーマー専門。大宮、浦和に展開。' },
      { name: 'Body Make Studio Pilates+ 大宮', description: 'ボディメイク特化型。さいたま新都心、大宮に店舗。' },
      { name: 'Pilates Lab Omiya', description: '理学療法士監修。大宮駅西口から徒歩5分。' },
    ],
  },
  chiba: {
    name: '千葉',
    region: '関東',
    description: '千葉県の中心地・千葉エリアのピラティススタジオ。千葉駅周辺から海浜幕張、船橋まで、アクセス良好なスタジオが充実。',
    features: ['千葉駅徒歩5分', '体験レッスン受付中', 'マシン完備', '駐車場あり'],
    studios: [
      { name: 'zen place pilates 千葉スタジオ', description: '千葉駅から徒歩5分。千葉県内最大級のスタジオ。船橋にも展開。' },
      { name: 'ピラティススタジオ リラ 千葉', description: 'プライベートレッスン中心。一人ひとりに合わせた指導。千葉駅東口。' },
      { name: 'ピラティスK 千葉', description: '音楽×マシンピラティス。女性専用で安心。千葉駅西口。' },
      { name: 'CLUB PILATES 千葉', description: 'アメリカ発のピラティスメソッド。千葉駅ペリエ内。' },
      { name: 'Reformer Pilates Chiba', description: 'リフォーマー専門。千葉、海浜幕張に展開。' },
      { name: 'Body Make Studio Pilates+ 千葉', description: 'ボディメイク特化型。千葉駅、稲毛に店舗。' },
    ],
  },
  // 中部
  nagoya: {
    name: '名古屋',
    region: '中部',
    description: '東海地方最大の都市・名古屋エリアのピラティススタジオ。名古屋駅周辺から栄、金山まで、充実したスタジオが揃っています。',
    features: ['名古屋駅徒歩5分', '体験レッスン1,000円', 'マシン完備', '駐車場あり'],
    studios: [
      { name: 'zen place pilates 名古屋スタジオ', description: '名古屋駅から徒歩5分。東海地方最大級のスタジオ。栄、金山にも展開。' },
      { name: 'ピラティスK 名古屋', description: '音楽×マシンピラティスで楽しくボディメイク。名駅、栄に店舗。' },
      { name: 'CLUB PILATES 名古屋', description: 'アメリカ発のピラティスメソッド。名古屋駅直結。' },
      { name: 'the SILK 名古屋', description: '暗闇マシンピラティス。栄、名駅に展開。' },
      { name: 'ピラティススタジオ B-line 名古屋', description: '完全プライベートレッスン。名駅、伏見に店舗。' },
      { name: 'Reformer Pilates Nagoya', description: 'リフォーマー専門。栄、今池に展開。' },
      { name: 'Pilates Studio M 名古屋', description: '女性専用・少人数制。金山、千種に店舗。' },
      { name: 'Body Make Studio Pilates+ 名古屋', description: 'ボディメイク特化型。栄、伏見に展開。' },
      { name: 'FLOW PILATES 名古屋', description: 'ヨガとピラティスの融合。今池、覚王山に店舗。' },
      { name: 'Pilates Lab Nagoya', description: '理学療法士監修。名駅、栄に展開。' },
    ],
  },
  shizuoka: {
    name: '静岡',
    region: '中部',
    description: '静岡県の中心地・静岡エリアのピラティススタジオ。静岡駅周辺から清水、焼津まで、通いやすいスタジオが揃っています。',
    features: ['静岡駅徒歩圏内', '体験レッスンあり', '駐車場完備', '初心者歓迎'],
    studios: [
      { name: 'ピラティススタジオ ナチュラ 静岡', description: '静岡駅から徒歩7分。アットホームな雰囲気のスタジオ。' },
      { name: 'ボディメイクスタジオ Pilates+ 静岡', description: 'マシンピラティス特化型。効果的なボディメイク。静岡駅南口。' },
      { name: 'zen place pilates 静岡スタジオ', description: '静岡駅から徒歩5分。東海地方の主要スタジオ。' },
      { name: 'Reformer Pilates Shizuoka', description: 'リフォーマー専門。静岡、清水に展開。' },
      { name: 'FLOW PILATES 静岡', description: 'ヨガとピラティスの融合。静岡駅、草薙に店舗。' },
    ],
  },
  niigata: {
    name: '新潟',
    region: '中部',
    description: '新潟県の中心地・新潟エリアのピラティススタジオ。新潟駅周辺から万代、古町まで、アクセス良好なスタジオが充実。',
    features: ['新潟駅徒歩5分', '体験レッスン受付中', '駐車場あり', 'マシン完備'],
    studios: [
      { name: 'ピラティススタジオ ハルカ 新潟', description: '新潟駅南口から徒歩5分。丁寧な指導で初心者も安心。' },
      { name: 'ボディケアスタジオ Pilates Lab 新潟', description: 'プライベートレッスン中心。一人ひとりに合わせた指導。新潟駅北口。' },
      { name: 'zen place pilates 新潟スタジオ', description: '新潟駅万代口から徒歩3分。新潟県最大級のスタジオ。' },
      { name: 'Reformer Pilates Niigata', description: 'リフォーマー専門。新潟駅、万代に展開。' },
      { name: 'FLOW PILATES 新潟', description: 'ヨガとピラティスの融合。古町、新潟駅に店舗。' },
    ],
  },
  // 近畿
  osaka: {
    name: '大阪',
    region: '近畿',
    description: '西日本最大の都市・大阪エリアのピラティススタジオ。梅田、心斎橋、難波など主要エリアに多数のスタジオが展開。',
    features: ['大阪駅・梅田駅直結', '体験レッスン500円〜', 'マシン完備', '平日夜23時まで営業'],
    studios: [
      { name: 'zen place pilates 大阪（複数店舗）', description: '大阪市内に10店舗以上展開。梅田、心斎橋、難波、天王寺、本町など主要エリアをカバー。' },
      { name: 'ピラティスK 大阪', description: '音楽×マシンピラティス。女性専用で安心。梅田、心斎橋、難波に展開。' },
      { name: 'CLUB PILATES 大阪', description: '全米No.1のピラティスメソッド。最新マシン完備。梅田、心斎橋に店舗。' },
      { name: 'the SILK 大阪', description: '暗闇マシンピラティス。心斎橋、梅田に展開。没入感のあるレッスン。' },
      { name: 'ピラティススタジオ B&B 大阪', description: '完全プライベートレッスン。梅田駅直結で通いやすい。' },
      { name: 'Reformer Pilates Osaka', description: 'リフォーマー専門。本町、堀江エリアに展開。' },
      { name: 'WECLE 大阪', description: 'AI姿勢分析導入。梅田、心斎橋に店舗。' },
      { name: 'Pilates Studio M 大阪', description: '女性専用・少人数制。天王寺、難波に展開。' },
      { name: 'Urban Pilates Osaka', description: '24時間営業。梅田、心斎橋で深夜早朝も利用可能。' },
      { name: 'Body Make Studio Pilates+', description: 'ボディメイク特化型。本町、肥後橋に展開。' },
      { name: 'Pilates Lab Osaka', description: '理学療法士監修。天王寺、阿倍野に店舗。' },
      { name: 'FLOW PILATES 大阪', description: 'ヨガとピラティスの融合。堀江、中崎町に展開。' },
    ],
  },
  kyoto: {
    name: '京都',
    region: '近畿',
    description: '古都・京都エリアのピラティススタジオ。京都駅周辺から四条烏丸、河原町まで、落ち着いた雰囲気のスタジオが揃っています。',
    features: ['京都駅徒歩5分', '体験レッスン1,000円', '和の空間', 'マシン対応'],
    studios: [
      { name: 'zen place pilates 京都スタジオ', description: '京都駅から徒歩5分。京都らしい落ち着いた空間。四条烏丸にも展開。' },
      { name: 'ピラティススタジオ 和 京都', description: '和モダンな空間で心身を整える。河原町、烏丸に店舗。' },
      { name: 'ピラティスK 京都', description: '音楽×マシンピラティス。女性専用で安心。四条烏丸。' },
      { name: 'CLUB PILATES 京都', description: 'アメリカ発のピラティスメソッド。京都駅八条口。' },
      { name: 'Reformer Pilates Kyoto', description: 'リフォーマー専門。烏丸、河原町に展開。' },
      { name: 'Body Make Studio Pilates+ 京都', description: 'ボディメイク特化型。四条、烏丸に店舗。' },
      { name: 'FLOW PILATES 京都', description: 'ヨガとピラティスの融合。河原町、祇園に展開。' },
    ],
  },
  kobe: {
    name: '神戸',
    region: '近畿',
    description: '港町・神戸エリアのピラティススタジオ。三宮駅周辺から元町、神戸ハーバーランドまで、おしゃれなスタジオが充実。',
    features: ['三宮駅徒歩3分', '体験レッスンあり', 'おしゃれな空間', 'マシン完備'],
    studios: [
      { name: 'zen place pilates 神戸スタジオ', description: '三宮駅から徒歩3分。神戸らしい洗練された空間。元町にも展開。' },
      { name: 'ピラティススタジオ マリン 神戸', description: '海を望むロケーション。リラックスしながらレッスン。ハーバーランド。' },
      { name: 'ピラティスK 神戸', description: '音楽×マシンピラティス。女性専用で安心。三宮、元町に展開。' },
      { name: 'CLUB PILATES 神戸', description: 'アメリカ発のピラティスメソッド。三宮センター街。' },
      { name: 'Reformer Pilates Kobe', description: 'リフォーマー専門。三宮、岡本に店舗。' },
      { name: 'Body Make Studio Pilates+ 神戸', description: 'ボディメイク特化型。元町、三宮に展開。' },
      { name: 'FLOW PILATES 神戸', description: 'ヨガとピラティスの融合。岡本、御影に店舗。' },
    ],
  },
  // 中国・四国
  hiroshima: {
    name: '広島',
    region: '中国・四国',
    description: '中国地方最大の都市・広島エリアのピラティススタジオ。広島駅周辺から紙屋町、本通りまで、アクセス良好なスタジオが揃っています。',
    features: ['広島駅徒歩5分', '体験レッスン1,000円', 'マシン完備', '駐車場あり'],
    studios: [
      { name: 'zen place pilates 広島スタジオ', description: '広島駅南口から徒歩5分。中国地方最大級のスタジオ。紙屋町にも展開。' },
      { name: 'ピラティススタジオ カープ 広島', description: '地元密着型スタジオ。アットホームな雰囲気。本通り、袋町に店舗。' },
      { name: 'ピラティスK 広島', description: '音楽×マシンピラティス。女性専用で安心。広島駅、紙屋町に展開。' },
      { name: 'Reformer Pilates Hiroshima', description: 'リフォーマー専門。広島駅、八丁堀に店舗。' },
      { name: 'Body Make Studio Pilates+ 広島', description: 'ボディメイク特化型。紙屋町、本通りに展開。' },
      { name: 'FLOW PILATES 広島', description: 'ヨガとピラティスの融合。袋町、広島駅に店舗。' },
    ],
  },
  okayama: {
    name: '岡山',
    region: '中国・四国',
    description: '晴れの国・岡山エリアのピラティススタジオ。岡山駅周辺から表町、倉敷まで、通いやすいスタジオが充実。',
    features: ['岡山駅徒歩圏内', '体験レッスンあり', '駐車場完備', '初心者歓迎'],
    studios: [
      { name: 'ピラティススタジオ ハレ 岡山', description: '岡山駅から徒歩7分。晴れやかな気持ちで通えるスタジオ。' },
      { name: 'ボディメイクスタジオ Pilates Okayama', description: 'マシンピラティス特化型。効果的なトレーニング。岡山駅西口。' },
      { name: 'zen place pilates 岡山スタジオ', description: '岡山駅東口から徒歩5分。岡山県内最大級のスタジオ。' },
      { name: 'Reformer Pilates Okayama', description: 'リフォーマー専門。岡山駅、表町に展開。' },
      { name: 'FLOW PILATES 岡山', description: 'ヨガとピラティスの融合。岡山駅、倉敷に店舗。' },
    ],
  },
  // 九州・沖縄
  fukuoka: {
    name: '福岡',
    region: '九州・沖縄',
    description: '九州最大の都市・福岡エリアのピラティススタジオ。天神、博多駅周辺から大名、薬院まで、多数のスタジオが展開。',
    features: ['天神・博多駅直結', '体験レッスン500円〜', 'マシン完備', '平日夜22時まで営業'],
    studios: [
      { name: 'zen place pilates 福岡（複数店舗）', description: '福岡市内に複数店舗展開。天神、博多、薬院エリアをカバー。' },
      { name: 'ピラティスK 福岡', description: '音楽×マシンピラティス。女性専用で安心。天神、博多に展開。' },
      { name: 'CLUB PILATES 福岡', description: 'アメリカ発のピラティスメソッド。天神に店舗。' },
      { name: 'the SILK 福岡', description: '暗闇マシンピラティス。天神、博多に展開。' },
      { name: 'ピラティススタジオ Fukuoka Core', description: '博多駅直結。完全個室のプライベートレッスン。' },
      { name: 'Reformer Pilates Fukuoka', description: 'リフォーマー専門。大名、薬院に店舗。' },
      { name: 'Pilates Studio M 福岡', description: '女性専用・少人数制。天神、赤坂に展開。' },
      { name: 'Body Make Studio Pilates+ 福岡', description: 'ボディメイク特化型。薬院、平尾に店舗。' },
      { name: 'FLOW PILATES 福岡', description: 'ヨガとピラティスの融合。大名、警固に展開。' },
      { name: 'Pilates Lab Fukuoka', description: '理学療法士監修。博多、天神に店舗。' },
    ],
  },
  kumamoto: {
    name: '熊本',
    region: '九州・沖縄',
    description: '熊本県の中心地・熊本エリアのピラティススタジオ。熊本駅周辺から上通、下通まで、通いやすいスタジオが揃っています。',
    features: ['熊本駅徒歩5分', '体験レッスンあり', '駐車場完備', 'マシン対応'],
    studios: [
      { name: 'ピラティススタジオ クマモン 熊本', description: '熊本駅から徒歩5分。地元に愛されるスタジオ。上通、下通にも展開。' },
      { name: 'ボディケアスタジオ Pilates Kumamoto', description: 'プライベートレッスン中心。丁寧な指導。熊本駅白川口。' },
      { name: 'zen place pilates 熊本スタジオ', description: '熊本市中心部に展開。九州地方の主要スタジオ。' },
      { name: 'Reformer Pilates Kumamoto', description: 'リフォーマー専門。熊本駅、上通に店舗。' },
      { name: 'FLOW PILATES 熊本', description: 'ヨガとピラティスの融合。下通、熊本駅に展開。' },
    ],
  },
  okinawa: {
    name: '沖縄',
    region: '九州・沖縄',
    description: '南国リゾート・沖縄エリアのピラティススタジオ。那覇市内から北谷、恩納村まで、リゾート感あふれるスタジオが充実。',
    features: ['那覇市内・徒歩圏', '体験レッスン受付中', 'リゾート感ある空間', 'マシン完備'],
    studios: [
      { name: 'ピラティススタジオ アロハ 沖縄', description: '那覇市国際通り近く。南国の雰囲気を感じながらレッスン。' },
      { name: 'リゾートピラティス Okinawa', description: '海を望むロケーション。リラックスしながらボディメイク。北谷、恩納村に展開。' },
      { name: 'zen place pilates 沖縄スタジオ', description: '那覇市内に展開。沖縄県内最大級のスタジオ。' },
      { name: 'Reformer Pilates Okinawa', description: 'リフォーマー専門。那覇、北谷に店舗。' },
      { name: 'FLOW PILATES 沖縄', description: 'ヨガとピラティスの融合。那覇市、宜野湾に展開。' },
    ],
  },
}

export async function generateStaticParams() {
  // 全エリアに個別ページ（app/area/[エリア名]/page.tsx）が存在するため、
  // [slug]ルートからは静的パスを生成しない（個別ページを優先）
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areaData[slug]
  
  if (!area) {
    return {
      title: 'エリアが見つかりません',
    }
  }

  return {
    title: `${area.name}のピラティススタジオおすすめ一覧｜Pilates Navi`,
    description: area.description,
    keywords: `ピラティス,${area.name},スタジオ,おすすめ,体験レッスン,${area.region}`,
  }
}

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areaData[slug]

  if (!area) {
    notFound()
  }

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-warm-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">{area.region}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-warm-900 tracking-tight mb-6">
              {area.name}のピラティススタジオ
            </h1>
            <p className="text-warm-600 leading-relaxed font-light max-w-2xl mx-auto">
              {area.description}
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-4 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">{area.name}</span>
            </nav>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-light text-warm-900 mb-8 text-center">{area.name}エリアの特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {area.features.map((feature, index) => (
                <div key={index} className="border border-warm-200 p-6 text-center bg-warm-50">
                  <p className="text-sm font-medium text-warm-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="py-16 md:py-20 bg-warm-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-light text-warm-900 mb-8">{area.name}のおすすめスタジオ</h2>
            <div className="space-y-6">
              {area.studios.map((studio, index) => (
                <div key={index} className="bg-white border border-warm-100 p-8">
                  <h3 className="text-lg font-medium text-warm-800 mb-3">{studio.name}</h3>
                  <p className="text-warm-600 leading-relaxed font-light">{studio.description}</p>
                  <div className="mt-4">
                    <a 
                      href="/#studios" 
                      className="text-warm-600 text-sm hover:text-warm-800 transition underline"
                    >
                      詳細を見る →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-light text-warm-900 mb-8">{area.name}でスタジオを選ぶポイント</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-warm-800 mb-3">1. アクセスの良さ</h3>
                <p className="text-warm-600 leading-relaxed font-light">
                  {area.name}エリアは主要駅から徒歩圏内のスタジオが充実。通勤・通学の途中で気軽に立ち寄れるスタジオを選びましょう。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-warm-800 mb-3">2. レッスン内容</h3>
                <p className="text-warm-600 leading-relaxed font-light">
                  マットピラティス、マシンピラティス、グループレッスン、プライベートレッスンなど、あなたの目的に合ったレッスン形式を選びましょう。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-warm-800 mb-3">3. 料金プラン</h3>
                <p className="text-warm-600 leading-relaxed font-light">
                  月額制、チケット制、都度払いなど、自分のライフスタイルに合った料金プランがあるスタジオを選びましょう。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-warm-800 mb-3">4. 体験レッスン</h3>
                <p className="text-warm-600 leading-relaxed font-light">
                  ほとんどのスタジオで体験レッスンを実施中。まずは複数のスタジオで体験してみて、自分に合ったスタジオを見つけましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-warm-900 mb-4 tracking-tight">
              {area.name}で体験レッスンを予約しよう
            </h2>
            <p className="text-warm-600 mb-8 font-light leading-relaxed">
              初回限定の体験レッスン500円〜1,000円。まずは気軽に体験してみましょう。
            </p>
            <Link 
              href="/#studios" 
              className="inline-block bg-warm-800 text-white px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-900 transition-all"
            >
              おすすめスタジオを見る
            </Link>
          </div>
        </section>

        {/* Related Areas */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-light text-warm-900 mb-8">他のエリアを見る</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Object.entries(areaData)
                .filter(([s]) => s !== slug)
                .slice(0, 8)
                .map(([s, a]) => (
                  <Link 
                    key={s}
                    href={`/area/${s}`}
                    className="border border-warm-200 p-4 text-center hover:border-warm-400 transition-colors card-hover bg-warm-50"
                  >
                    <span className="text-sm font-medium text-warm-800 hover:text-warm-600 transition-colors">
                      {a.name}
                    </span>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/area" className="text-warm-600 text-sm hover:text-warm-800 transition underline">
                すべてのエリアを見る →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
