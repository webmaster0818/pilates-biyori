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
  title: '【2026最新】ピラティス赤坂おすすめ8選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '赤坂エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,赤坂,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 赤坂',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 265,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '赤坂見附駅10番出口から徒歩3分で通いやすいです。窓が大きく明るい開放的なスタジオで気持ちよくレッスンできます。全国150以上のスタジオが相互利用できるのも魅力。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'マットもリフォーマーも選べるのが嬉しい。エデュケーター（インストラクター）の質が高く、体の変化を実感できました。体験当日入会で入会金無料でした。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '赤坂駅からも徒歩4分でアクセス抜群。25歳以下や70歳以上の割引制度もあって幅広い年齢層が通っています。男性も受講できるので夫婦で通っています。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性OK', '赤坂見附駅徒歩3分', '全国相互利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオ。赤坂見附駅10番出口から徒歩3分、赤坂駅1番出口から徒歩4分の好立地。窓が大きく明るい開放的なスタジオで、各種ピラティスマシンを完備。世界レベルの資格と豊富な経験を持つエデュケーターが、初心者から経験者まで幅広いレッスンを提供。男性も受講可能です。',
    access: '東京メトロ銀座線・丸ノ内線「赤坂見附駅」10番出口 徒歩3分 / 千代田線「赤坂駅」1番出口 徒歩4分',
    address: '東京都港区赤坂3-7-13 赤坂HMビル 5F',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスン。初心者から経験者まで対応。全国のzen placeスタジオで相互利用可能。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'マットグループフリー（月額14,960円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'リフォーマーグループ月8回（月額25,300円）',
      'プライベート月4回（月額33,880円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の80%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00 / 土日祝 8:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 赤坂見附店',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 198,
    reviews: [
      {
        author: 'A.M',
        rating: 5,
        date: '1週間前',
        text: '赤坂見附駅10番出口から徒歩30秒！雨の日でもほぼ濡れずに通えます。おしゃれなスタジオで気分が上がります。体験レッスンが無料で手ぶらOKだったので気軽に始められました。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '2週間前',
        text: '女性専用で安心。音楽に合わせた50分のレッスンがあっという間です。パウダールームにアイロンやドライヤー完備で、レッスン後のお出かけにも便利。',
      },
      {
        author: 'N.K',
        rating: 4,
        date: '3週間前',
        text: 'Light3プランなら月3回13,280円で始められるのが嬉しい。プロフェッショナルグレードのリフォーマーで本格的なレッスンが受けられます。初心者が80%なので気負わず通えます。',
      },
    ],
    price: '月3回 13,280円〜',
    trial: '体験レッスン 0円（50分・手ぶらOK）',
    features: ['女性専用', 'マシン専門', '赤坂見附駅徒歩30秒', 'おしゃれ空間'],
    description: '女性専用マシンピラティス専門スタジオ。赤坂見附駅10番出口から徒歩わずか30秒の圧倒的好立地。プロフェッショナルグレードのリフォーマーマシンを使用し、音楽に合わせた50分のグループレッスンで楽しくボディメイク。初心者が80%で安心して始められます。パウダールームにはライト付きメイクアップミラー・アイロン・ドライヤー完備で、レッスン後のお出かけも快適。',
    access: '東京メトロ各線「赤坂見附駅」10番出口 徒歩30秒',
    address: '東京都港区赤坂3-8-1 赤坂アルトビル 7階',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '月4回の標準プラン。プロフェッショナルグレードのリフォーマーで本格レッスン。',
      price: '月4回 15,280円（税込）+ 施設利用料700円',
    },
    options: [
      'Light3（月3回 13,280円）',
      'Full Day（平日デイタイム無制限 19,280円）',
      'Full（無制限 22,280円）',
      'レンタル（ウェア・タオル・ソックスあり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム（ミラー・アイロン・ドライヤー完備）', 'ウォーターサービス', 'レンタルウェア・タオル・ソックス'],
    },
  },
  {
    name: 'PILATES STUDIO noa 赤坂',
    image: '/images/studios/pilates-studio-noa.webp',
    rating: 4.7,
    reviewCount: 134,
    reviews: [
      {
        author: 'M.H',
        rating: 5,
        date: '5日前',
        text: '赤坂駅1番出口を出て徒歩0分！駅直結レベルの近さです。月6,600円から通えるのでコスパ最強。回数繰越が無制限なのも嬉しいポイント。',
      },
      {
        author: 'T.Y',
        rating: 4,
        date: '1週間前',
        text: '2025年3月にオープンした新しいスタジオで設備がきれい。女性専用なので安心。シャワールームも完備されていてレッスン後も快適です。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '2週間前',
        text: 'Intro・BODY MAKE・Conditioningの3つのプログラムから選べるので目的に合わせやすい。体験レッスンが550円と格安で、スタッフの対応も丁寧でした。',
      },
    ],
    price: '月額 6,600円〜',
    trial: '体験レッスン 550円',
    features: ['女性専用', 'マシン専門', '赤坂駅徒歩0分', '回数繰越無制限'],
    description: '2025年3月オープンの女性専用マシンピラティス専門スタジオ。赤坂駅1番出口から徒歩0分という圧倒的アクセス。月6,600円からとリーズナブルで、回数の繰越が無制限。Intro・BODY MAKE・Conditioningの3つのプログラムカテゴリを展開。シャワールーム・更衣室完備で、レッスン前後も快適に過ごせます。',
    access: '千代田線「赤坂駅」1番出口 徒歩0分 / 銀座線・丸ノ内線「赤坂見附駅」徒歩7分 / 銀座線・南北線「溜池山王駅」7番出口 徒歩7分',
    address: '東京都港区赤坂3丁目13-12（受付3F）',
    popularPlan: {
      name: '月4回コース',
      description: '月4回のマシンピラティスレッスン。未消化分は無制限繰越可能。',
      price: '月4回 要確認（月額6,600円〜）',
    },
    options: [
      '月2回コース',
      '月6回コース',
      '月8回コース',
      '回数繰越無制限（在籍中は無期限）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'コンディショニング', '姿勢改善', '初心者'],
    },
    basicInfo: {
      hours: '平日 10:00〜23:00 / 土日 10:00〜21:00',
      closed: '不定休',
      facilities: ['マシンピラティス設備', 'シャワールーム', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'STUDIO IVY 赤坂店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.7,
    reviewCount: 112,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '1週間前',
        text: '完全パーソナルなので自分のペースで進められます。赤坂見附駅から徒歩3分で通いやすい。朝8時から21時まで営業しているので仕事前後に通えます。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '2週間前',
        text: '月2回コースなら15,000円で始められるので、パーソナルとしてはリーズナブル。体験レッスンが4,500円で丁寧にカウンセリングしてもらえました。',
      },
      {
        author: 'Y.A',
        rating: 5,
        date: '3週間前',
        text: '赤坂にANNEX店もあって2店舗展開。インストラクターの指導が的確で、体の変化を早く実感できました。回数が増えるほど1回あたりの単価が下がるのもお得。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', 'マシン完備', '赤坂見附駅徒歩3分', '赤坂2店舗'],
    description: '完全パーソナルのマシンピラティス専門スタジオ。赤坂見附駅から徒歩3分。赤坂エリアに本店とANNEX店の2店舗を展開。一人ひとりの目的・体力に合わせたオーダーメイドレッスンで、短期間で効果を実感。月2回コースから通い放題まで柔軟なプラン設定。',
    access: '銀座線・丸ノ内線「赤坂見附駅」徒歩3分',
    address: '東京都港区赤坂4-2-12 エスセナーリオ赤坂WEST 011',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティス。1回あたり7,000円とパーソナルでは好コスパ。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '月2回コース（15,000円・1回7,500円）',
      '月8回コース（52,000円・1回6,500円）',
      '都度利用（8,800円）',
      '入会金 20,000円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', 'リハビリ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'STUDIO IVY 赤坂ANNEX店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.6,
    reviewCount: 87,
    reviews: [
      {
        author: 'C.N',
        rating: 5,
        date: '1週間前',
        text: '赤坂駅から徒歩3分。本店と同じクオリティのパーソナルレッスンが受けられます。完全個室で周りを気にせず集中できるのが良い。',
      },
      {
        author: 'H.O',
        rating: 4,
        date: '2週間前',
        text: '清潔感のあるスタジオで快適。インストラクターが毎回体の状態を確認してくれるので、無理なく進められます。',
      },
      {
        author: 'R.I',
        rating: 5,
        date: '1ヶ月前',
        text: '赤坂に2店舗あるので予約が取りやすい。仕事帰りに通えて便利です。体の歪みが改善されて姿勢が良くなりました。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', 'マシン完備', '赤坂駅徒歩3分', '完全個室'],
    description: 'STUDIO IVYの赤坂2号店。赤坂駅から徒歩3分。本店と同じクオリティの完全パーソナルマシンピラティスを提供。完全個室で周りを気にせずレッスンに集中できます。赤坂エリア2店舗で予約も取りやすい。',
    access: '千代田線「赤坂駅」徒歩3分',
    address: '東京都港区赤坂6-4-18 プリンストン赤坂 402',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティス。赤坂2店舗どちらでも利用可能。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '月2回コース（15,000円・1回7,500円）',
      '月8回コース（52,000円・1回6,500円）',
      '都度利用（8,800円）',
      '入会金 20,000円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', 'リハビリ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マシンピラティス器具', '完全個室', '更衣室'],
    },
  },
  {
    name: 'Studio-BMP 赤坂店',
    image: '/images/studios/studio-bmp-akasaka.webp',
    rating: 4.8,
    reviewCount: 95,
    reviews: [
      {
        author: 'J.M',
        rating: 5,
        date: '5日前',
        text: '赤坂駅6番出口から徒歩2分で通いやすい。BMP式スタイルupトレーニングが独特で、ピラティスと整体を組み合わせたアプローチが効果的。BESJピラティス認定のインストラクターで安心。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: 'パーソナル50分11,000円とプライベートレッスンとしてはリーズナブル。全身矯正・小顔矯正付きの80分コースも人気。体験レッスンで効果を実感できました。',
      },
      {
        author: 'M.Y',
        rating: 4,
        date: '3週間前',
        text: 'グループレッスンもあるので予算に合わせて選べます。フルタイム月額17,600円でグループ通い放題はお得。少人数制なのでしっかり見てもらえます。',
      },
    ],
    price: 'グループ月額 15,400円〜',
    trial: 'パーソナル体験 6,600円（50分）',
    features: ['BMP式メソッド', 'パーソナル&グループ', '赤坂駅徒歩2分', '整体×ピラティス'],
    description: 'ボディメイク×ピラティスのオリジナルメソッドが魅力のスタジオ。赤坂駅6番出口から徒歩2分。BESJピラティス認定インストラクターが多数在籍し、少人数制グループからパーソナルまで選べます。ピラティスに加えて全身矯正・小顔矯正を組み合わせた80分コースも人気。',
    access: '千代田線「赤坂駅」6番出口 徒歩2分 / 銀座線・南北線「溜池山王駅」11番出口 徒歩10分',
    address: '東京都港区赤坂6-11-13 ファブリックビル 4階',
    popularPlan: {
      name: 'グループレッスン フルタイム',
      description: '全営業時間のグループレッスンが受け放題。少人数制で丁寧な指導。',
      price: '月額 17,600円（税込）',
    },
    options: [
      'グループ ライトタイム（月額15,400円）',
      'グループ 単発受講（1回3,300円）',
      'パーソナル BMP式スタイルup 50分（11,000円）',
      'パーソナル BMP式+全身矯正・小顔矯正 80分（16,500円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢矯正', '小顔矯正', 'ダイエット'],
    },
    basicInfo: {
      hours: '火〜金 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '月曜日',
      facilities: ['リフォーマー', 'マシンピラティス器具', '整体施術スペース', '更衣室'],
    },
  },
  {
    name: 'Rintosull 赤坂見附',
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 108,
    reviews: [
      {
        author: 'Y.W',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列なので安心感があります。マシンピラティス専門でしっかりトレーニングできます。プレミアムフリーフルタイムならLAVAのホットヨガも通い放題なのが嬉しい。',
      },
      {
        author: 'K.A',
        rating: 4,
        date: '2週間前',
        text: '新規入会キャンペーンで最初の3ヶ月が月額1,980円とお得に始められました。施設がきれいで清潔感があります。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '3週間前',
        text: 'マンスリー4プランで月4回通えます。予約件数は3件までですが、十分に使えます。LAVA・BurnesStyleなど系列店も利用できるのが便利。',
      },
    ],
    price: 'マンスリー4 要確認',
    trial: 'キャンペーン価格あり',
    features: ['LAVA系列', 'マシン専門', '赤坂見附', '系列店相互利用'],
    description: 'ホットヨガLAVA系列のマシンピラティス専門スタジオ。赤坂見附エリアに展開。プレミアムフリーフルタイム月額16,800円でRintosull・LAVA・BurnesStyle等の全店が利用可能。新規入会キャンペーンでは3ヶ月間月額1,980円の特別価格も。マンスリー4プランなら月4回のマシンピラティスレッスンが受けられます。',
    access: '東京メトロ各線「赤坂見附駅」周辺',
    address: '東京都港区赤坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プレミアムフリーフルタイム',
      description: 'Rintosull・LAVA・BurnesStyle等の全店が通い放題。ピラティスもヨガも楽しめる。',
      price: '月額 16,800円（税込）+ 運営管理費680円',
    },
    options: [
      'マンスリー4（月4回・1日1レッスン）',
      '施設使用料 初回2,500円',
      '運営管理費 毎月680円',
      '新規入会キャンペーン（3ヶ月 月額1,980円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性95% / 男性5%',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '店舗により異なる（公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'WECLE 赤坂',
    image: '/images/studios/wecle-pilates.webp',
    rating: 4.6,
    reviewCount: 92,
    reviews: [
      {
        author: 'A.H',
        rating: 5,
        date: '1週間前',
        text: '30分のストレッチピラティスなので忙しいビジネスパーソンにぴったり。赤坂エリアで仕事帰りにサクッと通えます。予約不要で好きな時間に行けるのが便利。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '2週間前',
        text: '通い放題で月額9,680円からとコスパが良い。マシンに乗ってストレッチする感覚で、ピラティス初心者でも無理なく始められました。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: 'スタッフが常駐してフォームを確認してくれるので安心。自分のペースで進められるのが良いです。仕事のストレス解消にもなっています。',
      },
    ],
    price: '月額 9,680円〜（通い放題）',
    trial: '体験レッスンあり',
    features: ['30分ストレッチピラティス', '予約不要', '通い放題', '赤坂エリア'],
    description: '30分のストレッチピラティス専門スタジオ。予約不要で好きな時間にサクッと通える手軽さが魅力。通い放題月額9,680円からとリーズナブル。マシンに乗ってストレッチする感覚で、初心者でも無理なく始められます。スタッフが常駐してフォームを確認してくれるので安心。忙しいビジネスパーソンにもおすすめ。',
    access: '赤坂エリア（詳細は公式サイトでご確認ください）',
    address: '東京都港区赤坂エリア',
    popularPlan: {
      name: '通い放題プラン',
      description: '予約不要で何度でも通える定額プラン。30分のストレッチピラティスで手軽にボディケア。',
      price: '月額 9,680円〜（税込）',
    },
    options: [
      '通い放題プラン（月額9,680円〜）',
      '体験レッスンあり',
      '予約不要',
      'スタッフ常駐のフォーム確認サービス',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ストレッチ', '姿勢改善', 'リフレッシュ', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日 10:00〜19:00（店舗により異なる）',
      closed: '不定休',
      facilities: ['ストレッチマシン', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！赤坂エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。PILATES STUDIO noaは初心者向けのIntroプログラムがあり、the SILKは初心者が80%を占めています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。赤坂エリアではマシン専門スタジオが多いです。',
  },
  {
    question: '赤坂のピラティススタジオの料金相場は？',
    answer: '赤坂エリアの料金相場は、グループレッスン月4回で6,600円〜15,300円程度。PILATES STUDIO noaは月額6,600円からと格安。パーソナルレッスンは月4回28,000円前後が相場です。体験レッスンは無料〜6,600円と幅があります。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。the SILK赤坂見附店は手ぶらOKの無料体験を実施しています。マットやタオルはスタジオでレンタルできることが多いので、各スタジオの案内を確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。両方やりたい方はRintosullのプレミアムフリープランならLAVAのホットヨガも通い放題で便利です。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。Studio-BMPでは全身矯正と組み合わせたアプローチで、より効果的に身体の不調を改善できます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、STUDIO IVYやStudio-BMPがおすすめ。グループは料金が安く、PILATES STUDIO noaなら月額6,600円から。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function AkasakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス赤坂おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">赤坂</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="赤坂" />

        <PriceComparisonTable studios={studios} areaName="赤坂" />

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
              「赤坂で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、赤坂エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>赤坂でピラティススタジオを探している</span>
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
                  <span>赤坂見附駅・赤坂駅から近いスタジオがいい</span>
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

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              赤坂のおすすめピラティススタジオ8選
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
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下で通えるリーズナブルなスタジオ。コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• PILATES STUDIO noa（月額6,600円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• WECLE（通い放題 9,680円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（各種マシン完備）</li>
                  <li className="text-warm-700">• the SILK（プロフェッショナルグレード）</li>
                  <li className="text-warm-700">• STUDIO IVY（リフォーマー・キャデラック）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  赤坂駅・赤坂見附駅から徒歩3分以内。仕事帰りにサクッと通える。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• PILATES STUDIO noa（赤坂駅 徒歩0分）</li>
                  <li className="text-warm-700">• the SILK（赤坂見附駅 徒歩30秒）</li>
                  <li className="text-warm-700">• Studio-BMP（赤坂駅 徒歩2分）</li>
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
                  グループレッスン中心。マットピラティスやストレッチ系。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• PILATES STUDIO noa（6,600円〜）</li>
                  <li>• zen place pilates（9,625円〜）</li>
                  <li>• WECLE（9,680円〜通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜18,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループレッスンが充実。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（13,280円〜）</li>
                  <li>• Studio-BMP グループ（15,400円〜）</li>
                  <li>• Rintosull（16,800円 通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 28,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（月4回 28,000円）</li>
                  <li>• zen place プライベート（33,880円〜）</li>
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
                  赤坂エリアの料金相場はグループレッスン月4回で6,600円〜15,300円程度。パーソナルは月4回28,000円前後。無理なく継続できる予算を決めましょう。入会金やレンタル料も確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。the SILKは無料体験、PILATES STUDIO noaは550円と格安で体験できます。スタジオの雰囲気やインストラクターとの相性は実際に行ってみないとわかりませんよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。赤坂エリアは東京メトロ千代田線「赤坂駅」、銀座線・丸ノ内線「赤坂見附駅」、銀座線・南北線「溜池山王駅」の3駅が利用可能。PILATES STUDIO noaは赤坂駅徒歩0分、the SILKは赤坂見附駅徒歩30秒と駅近スタジオが充実しています。
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
              今回は赤坂のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では赤坂に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜550円。<br />
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

      <RelatedAreas currentSlug="akasaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
