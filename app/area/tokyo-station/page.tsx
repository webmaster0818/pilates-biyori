import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス東京駅おすすめ12選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '東京駅エリアのおすすめピラティススタジオ12選を徹底比較。丸の内・大手町・八重洲・日本橋・銀座エリアのマシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,東京駅,八重洲,丸の内,大手町,日本橋,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'the SILK 八重洲店',
    image: '/images/pilates2.webp',
    rating: 4.7,
    reviewCount: 165,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '東京駅八重洲北口から徒歩5分で通勤帰りに最適。女性専用で安心。開放感のある大きな窓と真っ白なリフォーマーが並ぶスタイリッシュな空間です。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '初心者が8割とのことで、体が硬い私でも無理なく始められました。音楽に合わせたレッスンが楽しくて50分があっという間です。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '仕事帰りに通っています。PMA加盟団体監修のレッスンで本格的。入会金無料キャンペーンで始められました。',
      },
    ],
    price: 'Standard4 12,980円〜',
    trial: '体験レッスン 0円（キャンペーン中）',
    features: ['女性専用', 'マシンピラティス専門', '東京駅徒歩5分', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。JR東京駅八重洲北口から徒歩5分、大手町駅B10出口から徒歩5分の好アクセス。PMA加盟団体監修のレッスンで、音楽に合わせながら楽しくボディメイク。初心者が8割で安心して始められます。',
    access: 'JR「東京駅」八重洲北口 徒歩5分 / 東京メトロ「大手町駅」B10出口 徒歩5分',
    address: '東京都中央区八重洲1丁目（東京駅八重洲北口徒歩5分）',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プラン。',
      price: '月4回 12,980円（税込）〜',
    },
    options: [
      'Standard4（月4回 12,980円〜）',
      'Full（通い放題）',
      'Full Day（デイタイム通い放題）',
      'パーソナル（体験 9,900円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '仕事帰りのリフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'zen place pilates 八重洲スタジオ',
    image: '/images/pilates3.webp',
    rating: 4.8,
    reviewCount: 220,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '東京駅から徒歩5分、日本橋駅から徒歩3分。マットもマシンも両方受けられるのが嬉しい。AI背骨ムーブメント解析が面白いです。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: '少人数制で丁寧な指導。男性もOKなので夫婦で通っています。体験1,000円で気軽に始められました。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '全国135店舗以上で相互利用可能。出張が多いので助かっています。八重洲はビジネス街なので平日夜が程よい人数です。',
      },
    ],
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 1,000円〜',
    features: ['マット&マシン', '東京駅徒歩5分', '男性OK', 'AI背骨解析'],
    description: '全国135店舗以上展開の大手ピラティススタジオ。東京駅八重洲北口から徒歩5分、日本橋駅A7出口から徒歩3分、大手町駅B10出口から徒歩7分。マットグループ、マシングループ、プライベートに対応。世界初のAI「背骨ムーブメント解析」導入。',
    access: '日本橋駅A7出口 徒歩3分 / 東京駅八重洲北口 徒歩5分 / 大手町駅B10出口 徒歩7分',
    address: '東京都中央区日本橋2-3-21 八重洲セントラルビル6F',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシンを使ったグループレッスン。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 10,450円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベート（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:30〜22:00 / 土日祝 8:00〜19:30',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'ピラティスK 銀座店',
    image: '/images/pilates4.webp',
    rating: 4.7,
    reviewCount: 190,
    reviews: [
      {
        author: 'N.S',
        rating: 5,
        date: '1週間前',
        text: '銀座一丁目駅6番出口から徒歩1分。東京駅から有楽町線で1駅なので仕事帰りにピッタリ。音楽に合わせたレッスンで楽しく続けられます。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '2週間前',
        text: 'ボディメイクプログラムが充実していて、お腹・お尻・二の腕・脚・背中と部位別に選べるのが嬉しい。',
      },
      {
        author: 'T.K',
        rating: 5,
        date: '1ヶ月前',
        text: '体験レッスン2,000円で気軽に始められました。女性専用なので周りの目を気にせず集中できます。',
      },
    ],
    price: 'マンスリー4メンバー 13,420円',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', 'マシンピラティス専門', '銀座一丁目駅徒歩1分', 'ボディメイク特化'],
    description: '女性専用マシンピラティス専門スタジオ。銀座一丁目駅6番出口から徒歩1分、有楽町駅から徒歩6分。東京駅から有楽町線で1駅。お腹・お尻・二の腕・脚・背中の部位特化プログラムが充実。音楽に合わせたカジュアルなレッスンスタイル。',
    access: '有楽町線「銀座一丁目駅」6番出口 徒歩1分 / JR「有楽町駅」中央口 徒歩6分',
    address: '東京都中央区銀座1-6-10 上一ビルディング7F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスグループレッスン。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円）',
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（デイタイム通い放題 14,520円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '部分痩せ', '美姿勢'],
    },
    basicInfo: {
      hours: '火〜金 10:00〜21:30 / 土日祝 10:00〜18:00',
      closed: '月曜日',
      facilities: ['ロッカー', 'パウダールーム', '女性専用'],
    },
  },
  {
    name: 'BDC PILATES 銀座スタジオ',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      {
        author: 'E.S',
        rating: 5,
        date: '2週間前',
        text: 'プロダンサー養成校プロデュースだけあって指導の質が高い。最大8名の少人数制で一人ひとりしっかり見てもらえます。',
      },
      {
        author: 'K.O',
        rating: 5,
        date: '1ヶ月前',
        text: '銀座一丁目駅から徒歩1分。有楽町駅からも歩ける距離で、東京駅からのアクセスも良好。スタジオの雰囲気が素敵。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '3週間前',
        text: '40年以上の実績があるBDCのメソッドで、身体の使い方が根本から変わりました。',
      },
    ],
    price: 'グループ月4回 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['プロダンサー養成校プロデュース', '少人数制（最大8名）', '銀座一丁目駅徒歩1分', '本格メソッド'],
    description: '40年以上の実績を持つプロダンサー養成校「ブロードウェイダンスセンター（BDC）」プロデュースのマシンピラティス専門スタジオ。銀座一丁目駅から徒歩1分、JR有楽町駅から徒歩3分。最大8名の少人数制グループレッスンで丁寧な指導。',
    access: '有楽町線「銀座一丁目駅」徒歩1分 / JR「有楽町駅」徒歩3分',
    address: '東京都中央区銀座1-4-5 GINZA URBAN 21 8F',
    popularPlan: {
      name: 'グループレッスン（月4回）',
      description: '最大8名の少人数制マシンピラティス。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      'グループ（月4回 15,400円）',
      'プライベート（月1回 9,900円〜）',
      'レンタルウェア上下（220円/回）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '身体の使い方改善', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜17:00',
      closed: '不定休',
      facilities: ['ロッカー', 'レンタルウェア', 'Wi-Fi'],
    },
  },
  {
    name: 'the SILK 銀座店',
    image: '/images/pilates2.webp',
    rating: 4.6,
    reviewCount: 130,
    reviews: [
      {
        author: 'H.Y',
        rating: 5,
        date: '1週間前',
        text: '銀座駅A3出口から徒歩2分という好立地。東京駅から銀座線で1駅。パウダールームが充実していてレッスン後そのままお出かけできます。',
      },
      {
        author: 'R.I',
        rating: 4,
        date: '3週間前',
        text: '八重洲店と迷いましたが、銀座でのショッピング帰りに立ち寄れるこちらに決めました。スタジオの雰囲気が素敵です。',
      },
      {
        author: 'C.N',
        rating: 5,
        date: '1ヶ月前',
        text: '体験レッスンが無料だったので気軽に始められました。インストラクターの指導が丁寧で初心者でも安心。',
      },
    ],
    price: 'Standard4 12,980円〜',
    trial: '体験レッスン 0円（キャンペーン中）',
    features: ['女性専用', 'マシンピラティス専門', '銀座駅徒歩2分', 'パウダールーム充実'],
    description: '女性専用マシンピラティス専門スタジオ。銀座駅A3出口から徒歩2分、東銀座駅A1出口から徒歩3分。東京駅から銀座線で1駅の好立地。パウダールームにライト付きミラーやドライヤー完備で、レッスン後そのままお出かけ可能。',
    access: '銀座線「銀座駅」A3出口 徒歩2分 / 日比谷線「東銀座駅」A1出口 徒歩3分',
    address: '東京都中央区銀座5-9-12 ダイヤモンドビル3F',
  },
  {
    name: 'zen place pilates 銀座二丁目スタジオ',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 175,
    reviews: [
      {
        author: 'Y.A',
        rating: 5,
        date: '2週間前',
        text: '銀座一丁目駅から徒歩3分。八重洲スタジオと相互利用できるので、その日の予定に合わせて使い分けています。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '1ヶ月前',
        text: 'マットとマシンの両方のレッスンがあり、その日の体調に合わせて選べるのが良い。男性もいるので夫婦でも通いやすい。',
      },
      {
        author: 'S.O',
        rating: 5,
        date: '3週間前',
        text: '平日朝7時台からレッスンがあるので出勤前に通えます。東京駅周辺のビジネスマンにもおすすめ。',
      },
    ],
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 1,000円〜',
    features: ['マット&マシン', '銀座一丁目駅徒歩3分', '男性OK', '早朝レッスンあり'],
    description: '全国135店舗以上のzen placeの銀座スタジオ。銀座一丁目駅から徒歩3分、東京駅から有楽町線経由で約10分。八重洲スタジオと相互利用可能で、通勤ルートに合わせて使い分けができる。早朝レッスンも開講。',
    access: '有楽町線「銀座一丁目駅」徒歩3分 / JR「有楽町駅」徒歩5分',
    address: '東京都中央区銀座2丁目（銀座一丁目駅徒歩3分）',
  },
  {
    name: 'ルルト 銀座店',
    image: '/images/pilates4.webp',
    rating: 4.8,
    reviewCount: 98,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '理学療法士監修のパーソナルレッスンで、腰痛が劇的に改善しました。医学的根拠に基づいた指導なので安心感が違います。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '銀座一丁目駅から徒歩1分。東京駅からも近くて通いやすい。完全マンツーマンなので自分のペースで進められます。',
      },
      {
        author: 'H.N',
        rating: 4,
        date: '1ヶ月前',
        text: '肩こりと猫背で悩んでいましたが、3ヶ月で姿勢が見違えるほど改善。周囲から「姿勢良くなったね」と言われます。',
      },
    ],
    price: 'パーソナル 月4回 32,560円〜',
    trial: '体験レッスン 4,000円〜',
    features: ['完全パーソナル', '理学療法士監修', '銀座一丁目駅徒歩1分', '医学的アプローチ'],
    description: '理学療法士が考案した完全個別指導のマシンピラティススタジオ。銀座一丁目駅から徒歩1分、東京駅から有楽町線で1駅。医学的知識に基づいたマンツーマンレッスンで、腰痛・肩こり・姿勢改善に定評あり。全国95店舗展開。',
    access: '有楽町線「銀座一丁目駅」徒歩1分 / 丸ノ内線「銀座駅」徒歩4分',
    address: '東京都中央区銀座2-11-9 三和産工ビル6F',
  },
  {
    name: 'ピラティスガーデン銀座',
    image: '/images/pilates2.webp',
    rating: 4.6,
    reviewCount: 110,
    reviews: [
      {
        author: 'K.A',
        rating: 5,
        date: '2週間前',
        text: '東銀座駅から徒歩2分。マットもマシンも両方あるのに月4回10,200円はコスパ抜群。フリー会員なら月15,300円で通い放題。',
      },
      {
        author: 'N.M',
        rating: 4,
        date: '1ヶ月前',
        text: '女性専用で安心。営業時間が長く、平日22時まで開いているので仕事帰りに余裕を持って通えます。',
      },
      {
        author: 'A.K',
        rating: 5,
        date: '3週間前',
        text: '月8回プランだと1回あたり1,530円。週2回通いたい方にはとてもお得です。',
      },
    ],
    price: '月4回 10,200円〜',
    trial: '体験レッスン お問い合わせ',
    features: ['女性専用', 'マット&マシン', '東銀座駅徒歩2分', 'コスパ抜群'],
    description: '女性専用のマット・マシンピラティス専門スタジオ。東銀座駅3番出口から徒歩2分、銀座駅A12出口から徒歩5分。月4回10,200円からの良心的な料金設定で、フリー会員なら月15,300円で通い放題。平日22時まで営業。',
    access: '日比谷線「東銀座駅」3番出口 徒歩2分 / 銀座線「銀座駅」A12出口 徒歩5分',
    address: '東京都中央区銀座3-14-13 第一厚生館ビル2F',
  },
  {
    name: 'バース ピラティス スタジオ 銀座',
    image: '/images/pilates3.webp',
    rating: 4.8,
    reviewCount: 85,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '1週間前',
        text: '完全個室のパーソナルレッスン。周りを気にせず集中できる環境が最高です。インストラクターの知識が豊富で毎回新しい発見があります。',
      },
      {
        author: 'S.H',
        rating: 5,
        date: '3週間前',
        text: '膝の痛みがあって不安でしたが、個々の身体の状態に合わせたプログラムを組んでくれるので安心して通えています。',
      },
      {
        author: 'R.W',
        rating: 4,
        date: '1ヶ月前',
        text: '銀座駅から徒歩6分。東京駅からも地下鉄ですぐ。個室空間でリラックスしてレッスンを受けられます。',
      },
    ],
    price: 'パーソナル 1回 8,800円〜',
    trial: '初回体験レッスン 4,500円',
    features: ['完全個室パーソナル', '身体の不調対応', '銀座駅徒歩6分', 'オーダーメイド'],
    description: '個室空間でマシンピラティスによるパーソナルレッスンを提供。銀座駅から徒歩6分。ボディメイクだけでなく、腰痛・肩こり・膝や股関節の痛みなど身体の不調にも対応。一人ひとりの状態に合わせたオーダーメイドプログラム。',
    access: '銀座線「銀座駅」徒歩6分 / 丸ノ内線「銀座駅」徒歩6分',
    address: '東京都中央区銀座（銀座駅徒歩6分）',
  },
  {
    name: 'Pilates Studio excel 日本橋店',
    image: '/images/pilates4.webp',
    rating: 4.6,
    reviewCount: 72,
    reviews: [
      {
        author: 'T.Y',
        rating: 5,
        date: '2週間前',
        text: '日本橋駅から近くて通いやすい。少人数制のグループレッスンで、インストラクターが丁寧にフォームを修正してくれます。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '1ヶ月前',
        text: '東京駅から歩ける距離。マシンピラティスの質が高く、初心者でも安心して受けられるプログラムが充実。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: 'アットホームな雰囲気で居心地が良い。大手スタジオにはない温かさがあります。',
      },
    ],
    price: 'グループ 月4回 13,200円〜',
    trial: '体験レッスン 3,300円',
    features: ['少人数制', 'アットホーム', '日本橋駅近く', '丁寧な指導'],
    description: '日本橋エリアのマシンピラティス専門スタジオ。日本橋駅から徒歩圏内、東京駅からも徒歩でアクセス可能。少人数制のグループレッスンで一人ひとりに丁寧な指導。アットホームな雰囲気で初心者も安心。',
    access: '東京メトロ「日本橋駅」徒歩3分 / JR「東京駅」徒歩10分',
    address: '東京都中央区日本橋（日本橋駅徒歩3分）',
  },
  {
    name: 'the SILK 銀座一丁目店',
    image: '/images/pilates2.webp',
    rating: 4.6,
    reviewCount: 105,
    reviews: [
      {
        author: 'Y.K',
        rating: 5,
        date: '1週間前',
        text: '銀座一丁目駅から徒歩2分。京橋駅からも近いので東京駅方面からのアクセスが便利。他のthe SILK店舗とも相互利用可能です。',
      },
      {
        author: 'M.I',
        rating: 4,
        date: '2週間前',
        text: '八重洲店・銀座店と3店舗あるので、予約の取りやすさで選べるのが良い。どの店舗もスタジオが綺麗です。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '1ヶ月前',
        text: '手ぶらで体験できるキャンペーンがあり、ウェアやタオルを持っていく必要がなくて助かりました。',
      },
    ],
    price: 'Standard4 12,980円〜',
    trial: '体験レッスン 0円（キャンペーン中）',
    features: ['女性専用', 'マシンピラティス専門', '銀座一丁目駅徒歩2分', '手ぶら体験OK'],
    description: '女性専用マシンピラティス専門スタジオ。銀座一丁目駅6番出口から徒歩2分、京橋駅3番出口から徒歩4分。八重洲店・銀座店との相互利用が可能で、予約の取りやすさも魅力。手ぶらで無料体験レッスンが受けられるキャンペーン実施中。',
    access: '有楽町線「銀座一丁目駅」6番出口 徒歩2分 / 銀座線「京橋駅」3番出口 徒歩4分',
    address: '東京都中央区銀座1丁目（銀座一丁目駅徒歩2分）',
  },
  {
    name: 'Bloom Pilates 銀座スタジオ',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 68,
    reviews: [
      {
        author: 'N.T',
        rating: 5,
        date: '2週間前',
        text: '銀座エリアでマシンピラティスのパーソナルレッスンを探していてここに決めました。インストラクターのレベルが高くて満足です。',
      },
      {
        author: 'R.K',
        rating: 5,
        date: '1ヶ月前',
        text: '東京駅からも近いのでランチタイムに通っています。短時間でも効果を実感できるプログラムが嬉しい。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: 'きれいなスタジオで気分が上がります。丁寧なカウンセリングで自分に合ったプランを提案してくれました。',
      },
    ],
    price: 'パーソナル 1回 9,900円〜',
    trial: '体験レッスン お問い合わせ',
    features: ['マシンピラティス', 'パーソナル対応', '銀座エリア', '丁寧なカウンセリング'],
    description: '銀座エリアのマシンピラティススタジオ。東京駅から銀座線で数分の好立地。丁寧なカウンセリングで一人ひとりの目標に合わせたプログラムを提案。マシンピラティスで効率的にボディメイク。',
    access: '銀座線「銀座駅」徒歩5分 / 東京駅から銀座線で約5分',
    address: '東京都中央区銀座（銀座駅徒歩5分）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！東京駅周辺のスタジオは初心者歓迎のところがほとんどです。the SILKは初心者が8割以上、ピラティスKもビギナー向けプログラムが充実しています。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重を使ったエクササイズ、マシンはリフォーマーなどの専用マシンを使ったトレーニングです。マシンはバネの負荷を調整でき、初心者でも正しいフォームで効果的に鍛えられます。',
  },
  {
    question: '東京駅エリアの料金相場は？',
    answer: 'グループレッスン月4回で10,200円〜15,400円程度。パーソナルは1回8,800円〜10,000円。体験は0円〜4,500円です。銀座エリアはやや高めですが、キャンペーンを利用するとお得に始められます。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回からスタートがおすすめ。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がることで太りにくい体質になります。最低2〜3ヶ月は継続することが大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。the SILKなど手ぶら体験キャンペーンを実施しているスタジオもあります。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラクゼーションが中心です。筋力アップや姿勢改善を重視するならピラティスがおすすめです。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、ピラティスは姿勢改善を通じて肩こりや腰痛の根本原因にアプローチします。ルルトのように理学療法士監修のスタジオなら、より専門的なケアが受けられます。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢改善やボディラインの変化を実感する方が多いです。週2回以上通うとより早く効果を感じられます。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは自分だけのプログラムで効果が出やすく、グループは安く楽しく続けられます。初心者はまずグループ体験から始めて、もっと効果を高めたい方はパーソナルに移行するのがおすすめです。',
  },
]

export default function TokyoStationPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス東京駅おすすめ12選！<br className="hidden md:block" />
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
              <span className="text-warm-600">東京駅</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="東京駅" />

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
              「東京駅周辺でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「仕事帰りに通えるスタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、東京駅・八重洲・丸の内・大手町・日本橋・銀座エリアから通えるおすすめのピラティススタジオ12選をまとめました。千代田区・中央区のビジネス街に位置するスタジオを中心に、料金・特徴・アクセスを徹底比較しています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>東京駅・丸の内・八重洲・大手町周辺でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>仕事帰りに通えるビジネス街近くのスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較して自分に合うスタジオを見つけたい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              東京駅周辺のおすすめピラティススタジオ12選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円前後から通える。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（マット月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスガーデン銀座（月4回 10,200円）</li>
                  <li className="text-warm-700">• the SILK（月4回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">少人数・本格派</h3>
                <p className="text-warm-600 text-sm mb-4">
                  少人数制やパーソナルで丁寧な指導。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• BDC PILATES（最大8名）</li>
                  <li className="text-warm-700">• ルルト（完全パーソナル・理学療法士監修）</li>
                  <li className="text-warm-700">• バース ピラティス（完全個室パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">東京駅からの近さ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  JR東京駅から徒歩圏内・1駅圏内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 八重洲（東京駅徒歩5分）</li>
                  <li className="text-warm-700">• zen place 八重洲（東京駅徒歩5分）</li>
                  <li className="text-warm-700">• ピラティスK 銀座（有楽町線で1駅）</li>
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
              <h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタート。最低2〜3ヶ月で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を感じられます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。東京駅周辺はビジネス街なので仕事帰りに立ち寄る習慣を作りやすいエリアです。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  マットグループやリーズナブルなプラン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（マット月4回 10,450円〜）</li>
                  <li>• ピラティスガーデン銀座（月4回 10,200円）</li>
                  <li>• the SILK（月4回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の充実レッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円）</li>
                  <li>• BDC PILATES（月4回 15,400円）</li>
                  <li>• zen place リフォーマー（月4回 15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1対1</p>
                <p className="text-sm text-warm-600 mb-4">
                  自分だけのプログラムで効果を最大化。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• バース ピラティス（1回 8,800円〜）</li>
                  <li>• ルルト（月4回 32,560円〜）</li>
                  <li>• zen place プライベート（1回 9,900円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないスタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化、腰痛改善など、目的に応じてスタジオを選びましょう。身体の不調がある方はルルトやバース ピラティスのようなパーソナル対応のスタジオがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  グループ月4回で10,200円〜15,400円、パーソナルは1回8,800円〜が相場です。通い放題プランなら1回あたりの単価を抑えられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  0円〜4,500円で体験できるスタジオが多いので、2〜3件は体験してから決めましょう。the SILKは無料体験キャンペーン、zen placeは1,000円から体験可能です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  東京駅はJR各線・東京メトロ丸ノ内線・東西線・銀座線など多数の路線が集まる日本最大のターミナル駅。八重洲口側（中央区）と丸の内口側（千代田区）それぞれにスタジオがあり、有楽町線で1駅の銀座・銀座一丁目にも多数の選択肢があります。仕事帰りに無理なく立ち寄れる場所を選びましょう。
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
              今回は東京駅周辺のおすすめピラティススタジオ12選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              東京駅は日本最大のターミナル駅で、八重洲・丸の内・大手町・日本橋・銀座も徒歩圏内または地下鉄1駅圏内。千代田区・中央区のビジネス街に位置するため、仕事帰りに通える質の高いスタジオが充実しています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              女性専用スタジオならthe SILKやピラティスK、男性もOKならzen place、身体の不調を改善したいならルルトやバース ピラティス、コスパ重視ならピラティスガーデン銀座がおすすめです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひ体験レッスンに足を運んで、自分に合うスタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのスタジオが見つかることを願っています。
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
              初回限定の体験レッスン0円〜4,500円。<br />
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

      <RelatedAreas currentSlug="tokyo-station" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
