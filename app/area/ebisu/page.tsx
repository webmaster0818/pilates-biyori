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
  alternates: { canonical: 'https://biyori-pilates.com/area/ebisu/' },
  title: '恵比寿のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: '恵比寿エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,恵比寿,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 恵比寿',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 19,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '恵比寿駅西口から徒歩5分。全国150以上のスタジオが他店利用できるのが魅力。マット・マシン・プライベートすべてのレッスンスタイルに対応。体験当日入会で入会金無料でした。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'エデュケーターの質が高く、体の変化を実感できました。マットグループ月4回9,625円からとリーズナブル。男性もOKなので夫婦で通っています。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '25歳以下割引や70歳以上割引もあり幅広い年齢層が通っています。広尾の落ち着いた雰囲気の中でレッスンに集中できます。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性OK', '恵比寿駅徒歩5分', '全国相互利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオ。恵比寿駅西口・日比谷線1番出口から徒歩5分。マットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式。Balanced Body製マシン完備。男性も受講可能。',
    access: 'JR「恵比寿駅」西口 徒歩5分 / 東京メトロ日比谷線「恵比寿駅」1番出口 徒歩5分',
    address: '東京都渋谷区広尾1丁目15-3 増田ビル 4階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスン。全国のzen placeスタジオで相互利用可能。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'マットグループフリー（月額14,960円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'プライベート月4回（月額33,880円〜）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00 / 土日祝 8:00〜17:00（目安）',
      closed: '不定休',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'BDC PILATES 恵比寿スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.8,
    reviewCount: 11,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '1週間前',
        text: '日本初のマシンピラティス専門スタジオ。認定資格を持つ講師の質が高い。体験レッスンが0円で始めやすかったです。グループもプライベートも充実。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '2週間前',
        text: '4メンバープランなら月11,220円からとリーズナブル。ダンサーやアスリートも通う本格的なスタジオで、身体の使い方を根本から学べます。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: '恵比寿駅から近くて便利。平日は10時から20時まで営業。プライベートレッスンでは完全カスタマイズしてもらえます。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 0円',
    features: ['日本初マシン専門', '恵比寿駅近', '認定講師', 'グループ&プライベート'],
    description: '日本初のマシンピラティス専門スタジオの恵比寿店。認定指導資格を保有した講師によるグループレッスンとプライベートレッスンの両方を提供。プライベートでは一人ひとりの身体の状態と目的に沿ってメニューを完全カスタマイズ。',
    access: '恵比寿駅から徒歩圏内',
    address: '東京都渋谷区恵比寿1-20-4 Sreed EBISU B1F',
    popularPlan: {
      name: '4メンバー（月4回）',
      description: '月4回のグループレッスン。認定講師による本格マシンピラティス。',
      price: '月4回 11,220〜13,420円（税込）',
    },
    options: [
      '8メンバー（月8回 15,070〜16,170円）',
      'デイメンバー（12,320〜14,520円）',
      'プレミアムメンバー（17,820〜18,920円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 10:00〜20:00 / 土日 10:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'CLUB PILATES 恵比寿ガーデンプレイス店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 81,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '5日前',
        text: '恵比寿ガーデンプレイスのグラススクエア1Fにあり、おしゃれな雰囲気。世界最大級のブランドで安心。無料体験レッスンで雰囲気がわかりました。入会金も体験当日なら無料に。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '1週間前',
        text: '12名のグループレッスンで、8つのプログラムと4段階のレベル分けがあるので自分に合ったクラスが選べます。月4回14,190円。15種類の器具を1人1台使えるのが贅沢。',
      },
      {
        author: 'N.Y',
        rating: 5,
        date: '2週間前',
        text: '朝7時から営業しているので仕事前に通えます。資格保持のインストラクターが丁寧に指導してくれます。男性もOK。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（当日入会で入会金無料）',
    features: ['世界最大級', '15種類の器具', '恵比寿ガーデンプレイス', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。恵比寿ガーデンプレイス グラススクエア1Fの好立地。最大12名のグループレッスンで、8つのプログラムと4段階のレベルに分けたクラスから選択可能。15種類のマシン・器具を1人1台完備。',
    access: '恵比寿駅から恵比寿ガーデンプレイス経由',
    address: '東京都渋谷区恵比寿4-20-4 ガーデンプレイス グラススクエア棟 1F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（26,290円）',
      '通い放題プラン（40,590円）',
      '入会金 5,500円（体験当日入会で無料）',
      '無料体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'the SILK 恵比寿店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 310,
    reviews: [
      {
        author: 'S.M',
        rating: 5,
        date: '1週間前',
        text: '恵比寿駅西口から徒歩5分。女性専用で安心。初回限定のパーソナルピラティスが2,000円で体験できました。おしゃれな空間で気分が上がります。',
      },
      {
        author: 'K.A',
        rating: 4,
        date: '2週間前',
        text: 'パーソナルレッスンに特化した恵比寿店。1対1でしっかり指導してもらえるので効果を実感しやすい。パウダールーム完備でレッスン後のお出かけにも便利。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '3週間前',
        text: 'the SILKのパーソナル専門店。グループレッスンとは違い、自分だけのプログラムで進められるのが嬉しい。',
      },
    ],
    price: 'パーソナル体験 2,000円〜',
    trial: '初回限定パーソナル 9,900円→2,000円',
    features: ['女性専用', 'パーソナル特化', '恵比寿駅徒歩5分', 'おしゃれ空間'],
    description: '女性専用マシンピラティススタジオthe SILKのパーソナル特化型恵比寿店。恵比寿駅西口から徒歩5分。1対1のプライベートレッスンでしっかり指導。初回限定50分のパーソナルピラティスが9,900円→2,000円のキャンペーン中。パウダールーム完備で手ぶらで通えます。',
    access: '恵比寿駅西口 徒歩5分',
    address: '東京都渋谷区恵比寿南1-17-15 VORT恵比寿VI 3階-B',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '1対1の完全プライベートマシンピラティス。',
      price: '要確認（初回体験 2,000円）',
    },
    options: [
      '初回限定パーソナル50分（9,900円→2,000円）',
      'パウダールーム完備',
      'レンタルウェア・タオルあり',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '美容'],
    },
    basicInfo: {
      hours: '10:00〜19:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム', 'レンタルウェア・タオル'],
    },
  },
  {
    name: 'Pilates Mee 恵比寿店',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.6,
    reviewCount: 3,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '5日前',
        text: '最大3名のセミパーソナル型で丁寧に見てもらえます。定額制で1回あたり1,250円〜と驚きのコスパ！当日予約・当日キャンセルOKで気軽に通えます。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '1週間前',
        text: '恵比寿駅から徒歩5分。朝9時から夜21時15分まで年中無休で営業。仕事帰りに通えて便利。セミパーソナルなので周りの目も気にならない。',
      },
      {
        author: 'R.A',
        rating: 5,
        date: '2週間前',
        text: '通い放題プランなら月10回通えば1回3,750円！マシンピラティスでこの価格は破格。初心者でもインストラクターが丁寧にフォローしてくれます。',
      },
    ],
    price: '1回 1,250円〜（定額制）',
    trial: '体験レッスンあり',
    features: ['セミパーソナル', '最大3名', '恵比寿駅徒歩5分', 'コスパ抜群'],
    description: '1人のインストラクターにつき最大3名のセミパーソナル型マシンピラティススタジオ。恵比寿駅から徒歩5分。定額制で1回あたり1,250円〜と驚きのコスパ。当日予約・当日キャンセルOKと柔軟な予約対応。年中無休・朝9時から夜21時15分まで営業。',
    access: '恵比寿駅 徒歩5分',
    address: '東京都渋谷区恵比寿1-21-11',
    popularPlan: {
      name: '定額制プラン',
      description: 'セミパーソナルのマシンピラティス。通い放題で1回あたり1,250円〜の驚きコスパ。',
      price: '定額制（詳細は公式サイト参照）',
    },
    options: [
      'セミパーソナル（1回約5,000円）',
      '通い放題プラン（1回約3,750円）',
      '当日予約・当日キャンセルOK',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '年中無休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ルルト 恵比寿店',
    image: '/images/studios/luluto.webp',
    rating: 4.9,
    reviewCount: 12,
    reviews: [
      {
        author: 'C.Y',
        rating: 5,
        date: '1週間前',
        text: '理学療法士監修の完全マンツーマン。「鍛える」ではなく「整える」ピラティスがテーマ。腰痛がひどくて通い始めましたが劇的に改善。体験が平日1,000円と格安。',
      },
      {
        author: 'M.O',
        rating: 5,
        date: '2週間前',
        text: 'リフォーマー、キャデラック、チェアと本格的なマシンが揃っています。インストラクターが体の状態をしっかり見てくれるので効果を実感しやすい。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '1ヶ月前',
        text: '月3回29,700円からとパーソナルとしては妥当な価格。翌月繰越可能なのも嬉しい。恵比寿に2店舗展開で予約が取りやすい。',
      },
    ],
    price: '月3回 29,700円〜',
    trial: '体験レッスン 平日1,000円 / 土日祝5,000円',
    features: ['理学療法士監修', '完全マンツーマン', '恵比寿2店舗', '整えるピラティス'],
    description: '理学療法士監修の完全マンツーマンプライベートピラティススタジオ。恵比寿に2店舗展開。「鍛える」ではなく「整える」ピラティスをテーマに、リフォーマー・キャデラック・チェアなど本格マシンを完備。体験当日入会で入会金22,000円が無料。翌月繰越可能。',
    access: '恵比寿駅西口 徒歩5分 / 代官山駅からも徒歩圏内',
    address: '東京都渋谷区恵比寿エリア（2店舗展開）',
    popularPlan: {
      name: '月4回プラン',
      description: '理学療法士監修のマンツーマンレッスン。翌月繰越可能。',
      price: '月4回 38,400円（税込・1回9,600円）',
    },
    options: [
      '月3回（29,700円・1回9,900円）',
      '月6回（55,800円・1回9,300円）',
      '月8回（72,000円・1回9,000円）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '20代〜60代以上（幅広い年齢層）',
      genderRatio: '女性75% / 男性25%',
      purpose: ['身体の不調改善', '姿勢矯正', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '9:30〜17:00（電話受付）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'the SILK 広尾店',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 280,
    reviews: [
      {
        author: 'A.M',
        rating: 5,
        date: '5日前',
        text: '広尾駅から徒歩4分で恵比寿からもアクセス可。朝7:30から夜22時まで営業で時間の融通が効きます。無料体験レッスンで始められました。おしゃれなスタジオで気分が上がる。',
      },
      {
        author: 'R.I',
        rating: 5,
        date: '1週間前',
        text: '女性専用で安心。音楽に合わせた50分のグループレッスンが楽しい。Light3なら月3回13,280円から。パウダールーム完備でレッスン後のお出かけも快適。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '2週間前',
        text: '初心者が80%なので気負わず始められます。プロフェッショナルグレードのリフォーマーで本格的なレッスン。ウェア・タオル・ソックスのレンタルもあり手ぶらOK。',
      },
    ],
    price: '月3回 13,280円〜',
    trial: '体験レッスン 0円（50分・手ぶらOK）',
    features: ['女性専用', 'マシン専門', '広尾駅徒歩4分', '朝7:30〜夜22時'],
    description: '女性専用マシンピラティス専門スタジオ。広尾駅から徒歩4分、恵比寿エリアからも好アクセス。朝7:30から夜22時まで営業で時間の融通が効きやすい。PMA加盟団体のプロ監修レッスン。プロフェッショナルグレードのリフォーマーマシンを使用し、音楽に合わせた50分のグループレッスンで楽しくボディメイク。',
    access: '東京メトロ日比谷線「広尾駅」徒歩4分 / 恵比寿エリアからもアクセス可',
    address: '東京都港区広尾エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '月4回の標準プラン。PMA監修のプロフェッショナルグレードリフォーマーレッスン。',
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
      hours: '7:30〜22:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム', 'ウォーターサービス', 'レンタルウェア・タオル・ソックス'],
    },
  },
  {
    name: 'ピラティスミラー 中目黒',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      {
        author: 'T.I',
        rating: 5,
        date: '1週間前',
        text: 'コナミスポーツクラブ運営で安心。月会費11,000円で月6回まで通えてコスパ良好。プライベートレッスンも30分4,400円と手頃。恵比寿からも近い。',
      },
      {
        author: 'Y.W',
        rating: 4,
        date: '2週間前',
        text: '平日朝7時から営業。鏡を使ったフォーム確認ができるのが特徴的。体験レッスン2,200円で気軽に試せました。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '3週間前',
        text: '初心者でも安心のマシンピラティス専門スタジオ。コナミの施設なので清潔感があります。恵比寿・中目黒どちらからもアクセスしやすい。',
      },
    ],
    price: '月会費 11,000円（月6回）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', 'マシン専門', '中目黒', '月6回制'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。恵比寿・中目黒エリアに位置。月会費11,000円で月6回まで通えるコスパの良いプラン。プライベートレッスンも30分4,400円から。大手運営ならではの安心感と清潔な施設が魅力。',
    access: '中目黒エリア / 恵比寿からもアクセス可',
    address: '東京都目黒区青葉台1丁目14-4 CONTRAL nakameguro',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: 'マシンピラティス月6回まで。コナミ運営の安心感。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      '入会金 11,000円',
      'プライベートレッスン30分（4,400円）',
      'プライベートレッスン50分（6,600円）',
      '体験レッスン（2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土 8:00〜18:00 / 日 8:00〜19:00',
      closed: '毎週木曜日',
      facilities: ['リフォーマーマシン', 'ミラー設備', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Dr.ピラティス 恵比寿本店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。恵比寿エリア（詳細は公式サイト参照）。',
    access: '恵比寿エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
  {
    name: 'Pilates Mee恵比寿店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。恵比寿駅から徒歩5分。',
    access: '恵比寿駅から徒歩5分',
    address: '東京都渋谷区恵比寿1丁目21-11',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！恵比寿エリアのピラティススタジオのほとんどが初心者向けレッスンを用意しています。CLUB PILATESはレベル分けがあり、the SILKは初心者が80%。BDC PILATESは体験0円で気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。恵比寿エリアではマシン専門スタジオが充実しています。',
  },
  {
    question: '恵比寿のピラティススタジオの料金相場は？',
    answer: '恵比寿エリアの料金相場は、グループレッスン月4回で9,600円〜14,200円程度。Pilates Meeは定額制で1回1,250円〜と驚きのコスパ。パーソナルは月4回29,700円〜が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に。大切なのは継続すること。無理のないペースで長く続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。最低でも2-3ヶ月は継続することが大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。BDC PILATESとthe SILK広尾は無料体験、ルルトは平日1,000円で体験できます。ウェアレンタルがあるスタジオも多いです。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹を鍛えることに特化。ヨガは柔軟性とリラックスを重視。目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ルルト恵比寿は理学療法士監修で、身体の不調改善に特化した指導を提供しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '効果が表れだすのは「2ヶ月を過ぎた頃」から。最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルはルルトやthe SILKで効果的な指導を。グループはBDC PILATESやzen placeなら月4回9,625円〜11,220円から。まずは体験で両方試してみましょう。',
  },
]

export default function EbisuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '恵比寿', url: 'https://pilates-biyori.com/area/ebisu/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス恵比寿おすすめ10選！<br className="hidden md:block" />
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
              <span className="text-warm-600">恵比寿</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="恵比寿" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「恵比寿で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、恵比寿エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>恵比寿でピラティススタジオを探している</span>
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
                  <span>おしゃれな街で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="恵比寿" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              恵比寿のおすすめピラティススタジオ10選
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
              恵比寿のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">2,000円〜15,280円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 1,250円〜38,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜9,900円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              恵比寿は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の代官山エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              恵比寿でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「恵比寿駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿エリアのスタジオは恵比寿駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。恵比寿駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿エリアだけでなく、近隣の<Link href="/area/daikanyama" className="text-warm-700 underline hover:text-warm-900">代官山</Link>、<Link href="/area/nakameguro" className="text-warm-700 underline hover:text-warm-900">中目黒</Link>、<Link href="/area/hiroo" className="text-warm-700 underline hover:text-warm-900">広尾</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>恵比寿エリアの豆知識：</strong>恵比寿は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円前後で通えるスタジオ。体験無料も。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（1回1,250円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで質の高いレッスンを。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ルルト（理学療法士監修）</li>
                  <li className="text-warm-700">• the SILK 恵比寿（パーソナル特化）</li>
                  <li className="text-warm-700">• zen place プライベート</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・施設充実</h3>
                <p className="text-warm-600 text-sm mb-4">
                  恵比寿駅から好アクセス。設備充実。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（恵比寿ガーデンプレイス）</li>
                  <li className="text-warm-700">• BDC PILATES（恵比寿駅近）</li>
                  <li className="text-warm-700">• the SILK 広尾（朝7:30〜夜22時）</li>
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
                週1-2回（月4-8回）からスタート。最低でも2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。自分のペースが一番です。
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループ・セミパーソナル中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（定額1,250円〜/回）</li>
                  <li>• zen place（9,625円〜/月4回）</li>
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• BDC PILATES（11,220円〜）</li>
                  <li>• the SILK 広尾（13,280円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベート。効果重視の方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ルルト（月3回 29,700円〜）</li>
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
                  ダイエット、姿勢改善、体幹強化、美容など、目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿エリアの料金相場はグループ月4回で9,600円〜14,200円。入会金やレンタル料も確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  BDC PILATESとthe SILKは無料体験、CLUB PILATESも無料体験を実施。気軽に試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿はJR山手線・埼京線・東京メトロ日比谷線が利用可能。CLUB PILATESは恵比寿ガーデンプレイス内で買い物ついでにも便利です。
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
              今回は恵比寿のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では恵比寿に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜2,200円。<br />
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
      <ConsultantSection areaKey="ebisu" areaName="恵比寿" />

      <RelatedAreas currentSlug="ebisu" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
