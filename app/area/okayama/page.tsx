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
  alternates: { canonical: 'https://biyori-pilates.com/area/okayama/' },
  title: '【2026年8月最新】岡山のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '岡山エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,岡山,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'La pilates 岡山駅前店',
    image: '/images/studios/la-pilates.webp',
    rating: 4.2,
    reviewCount: 11,
    reviews: [
      {
        author: 'A.M',
        rating: 5,
        date: '2週間前',
        text: '岡山駅から徒歩5分で通いやすいです。整体とマシンピラティスの組み合わせが他にはないアプローチで、身体の歪みが改善されました。女性専用なので安心して通えます。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '1ヶ月前',
        text: '産後ケアで通い始めました。整体で身体を整えてからピラティスをするので効果的。明るいスタジオで気持ちよくレッスンできます。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '岡山駅前で通いやすい立地が魅力。サブスクプランで自分のペースで通えるのも良いです。スタッフの方が丁寧で初心者でも安心でした。',
      },
    ],
    price: 'サブスク月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×マシンピラティス', '岡山駅徒歩5分', '女性専用', '産後ケア'],
    description: '岡山のマシンピラティスならLa pilates｜女性専用・整体×ピラティススタジオ。「岡山駅」より徒歩5分。La pilates岡山駅前店は、整体とマシンピラティスを融合させた、女性専用のスタジオ。産後から美姿勢・引き締め・産後ケアを叶える。身体の歪みを整えながらボディメイク。明るいスタジオで楽しくレッスン。',
    access: '岡山駅より徒歩5分',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'サブスクプラン',
      description: '整体×マシンピラティスの組み合わせ。女性専用で安心。',
      price: 'サブスク月1回 12,000円〜、体験 3,000円',
    },
    options: [
      'サブスクプラン（月1回〜）',
      '整体施術',
      'マシンピラティス',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['整体×ピラティス', '身体の歪み改善', 'ボディメイク', '産後ケア'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '整体施術', '女性専用', '明るいスタジオ'],
    },
  },
  {
    name: 'ピラティスK 岡山店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.0,
    reviewCount: 123,
    reviews: [
      {
        author: 'R.T',
        rating: 5,
        date: '1週間前',
        text: '無料駐車場25台完備で車通いに最適！音楽に合わせたグループレッスンが楽しくて、あっという間に時間が過ぎます。女性専用なので気兼ねなく通えます。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '2週間前',
        text: '暗闘レッスンが新鮮で楽しい！お尻や二の腕など部位別プログラムがあるので、気になる部分を集中的に鍛えられます。カジュアルでスタイリッシュな店内も気分が上がります。',
      },
      {
        author: 'S.O',
        rating: 4,
        date: '1ヶ月前',
        text: '月4回13,420円で通えてコスパが良い。雨の日も無料駐車場があるので安心です。岡山で音楽×マシンピラティスを楽しめるのはここだけだと思います。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '無料駐車場25台', '暗闇レッスン'],
    description: 'ピラティスK 岡山店、岡山県岡山市にある女性専用マシンピラティススタジオ。無料駐車場25台完備だから、お車で通いやすく、雨の日も安心。店内はカジュアルかつスタイリッシュな店内で、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '岡山市内、無料駐車場25台完備',
    address: '岡山県岡山市（詳細は公式サイト参照）',
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
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '無料駐車場25台'],
    },
  },
  {
    name: 'CLUB PILATES 岡山店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.0,
    reviewCount: 122,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '10日前',
        text: '世界800店舗以上の実績があるだけあって、インストラクターの質が高い。一人ひとりの動き方やクセを見抜いて的確にアドバイスしてくれます。完全初心者でも安心して参加できました。',
      },
      {
        author: 'N.Y',
        rating: 4,
        date: '3週間前',
        text: '30分の無料体験クラスでスタジオの雰囲気がよくわかりました。グループとプライベートの両方があるので、自分のレベルに合わせて選べるのが良いです。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '1ヶ月前',
        text: 'アメリカ発の本格的なピラティスメソッド。専門知識が豊富なインストラクターが多く、初心者にも経験者にも対応してくれます。岡山で世界基準のレッスンが受けられるのは嬉しい。',
      },
    ],
    price: '要問合せ',
    trial: '無料体験レッスン（30分）',
    features: ['アメリカ発', '世界800店舗以上', 'グループ＆プライベート', '初心者歓迎'],
    description: 'CLUB PILATES(クラブピラティス)は世界各国で800店舗以上展開するアメリカ発のピラティススタジオ。ピラティスが初めての方、運動習慣がない方も安心してスタジオにお越しください。クラブピラティスのインストラクターは、豊富な専門知識と観察力で、一人ひとりの動き方やクセに合わせた的確なレッスンを行います。完全初心者の方でも安心して取り組むことが可能です。入会を検討している方向けに30分間の無料体験クラスを開催しております。',
    access: '岡山市内（詳細は公式サイト参照）',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '世界800店舗以上のネットワーク。初心者でも安心して楽しめる。',
      price: '要問合せ（無料体験30分あり）',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
      '世界最大級ネットワーク',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['初心者歓迎', '世界的ブランド', 'ボディメイク', 'グループ＆プライベート'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備'],
    },
  },
  {
    name: 'ピラティススタジオDEP 岡山店',
    image: '/images/studios/pilates-studio-dep.webp',
    rating: 4.2,
    reviewCount: 9,
    reviews: [
      {
        author: 'E.S',
        rating: 5,
        date: '5日前',
        text: '理学療法士監修の完全個室パーソナル。国家資格者の先生が丁寧に体の状態を見てくれて、姿勢改善に特化した指導が受けられます。腰痛が改善されてきました。',
      },
      {
        author: 'C.T',
        rating: 5,
        date: '2週間前',
        text: '平日限定パーソナル90分2,980円は破格。完全個室なので人目を気にせず集中できます。猫背が気になっていましたが、2ヶ月で姿勢が良くなったと周りに言われました。',
      },
      {
        author: 'J.I',
        rating: 4,
        date: '1ヶ月前',
        text: '国家資格者による指導なので安心感が違います。リハビリ目的で通っていますが、体の根本的な改善を感じます。岡山で医療的視点のピラティスならここ。',
      },
    ],
    price: 'パーソナルレッスン 90分 2,980円〜',
    trial: '体験レッスン 2,980円',
    features: ['理学療法士監修', '完全個室', '国家資格者指導', '姿勢改善専門'],
    description: 'ピラティススタジオDEP 岡山店。完全個室＆国家資格者による指導。理学療法士が監修する完全個室のマシンピラティススタジオ。国家資格者による指導で、姿勢改善・猫背改善・腰痛改善に特化。一人ひとりの身体に合わせた丁寧な指導を提供。',
    access: '岡山市内（詳細は公式サイト参照）',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '理学療法士監修の完全個室パーソナルレッスン。姿勢・腰痛改善に特化。',
      price: '平日限定 パーソナルレッスン 90分 2,980円',
    },
    options: [
      'パーソナルレッスン',
      '姿勢改善プログラム',
      '腰痛改善プログラム',
      '完全個室',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '腰痛改善', '猫背改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', '理学療法士監修', 'マシン完備'],
    },
  },
  {
    name: 'UP LIFE GALLERY 岡山店',
    image: '/images/studios/uplife-gallery-okayama.webp',
    rating: 4.1,
    reviewCount: 3,
    reviews: [
      {
        author: 'M.W',
        rating: 5,
        date: '1週間前',
        text: '遺伝子解析で自分の体質がわかるのが面白い。ピラティスだけでなく食事・睡眠まで総合的にアドバイスしてもらえるので、根本的な体質改善を実感しています。',
      },
      {
        author: 'R.A',
        rating: 4,
        date: '3週間前',
        text: '感覚ではなく科学的根拠に基づいたプログラムが魅力。10年の現場経験に裏打ちされた指導で、本当に効く体質改善ができます。岡山では唯一のアプローチだと思います。',
      },
      {
        author: 'F.K',
        rating: 4,
        date: '1ヶ月前',
        text: 'トータルケアの考え方が素晴らしい。ピラティスだけでなくボディケアや食事指導まで受けられるので、ライフスタイル全体が変わりました。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['遺伝子解析', '体質改善', 'トータルケア', '根拠に基づく'],
    description: '10年の現場で見つけた、女性の体が本当に変わる方法。UP LIFE GALLERYでは、遺伝子解析をもとに一人ひとりの体質を可視化し、ピラティス・食事・睡眠・ボディケアまでをトータルで整える独自プログラムを提供しています。感覚ではなく、根拠に基づいた"本当に効く"体質改善をあなたに。',
    access: '岡山市内（詳細は公式サイト参照）',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: '遺伝子解析プログラム',
      description: '遺伝子解析で体質を可視化。ピラティス・食事・睡眠をトータルで整える。',
      price: '要問合せ',
    },
    options: [
      '遺伝子解析',
      'ピラティス',
      '食事指導',
      'ボディケア',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['体質改善', '根拠に基づく', 'トータルケア', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['遺伝子解析', 'カウンセリング', 'マシン完備'],
    },
  },
  {
    name: 'Rintosull 岡山店',
    image: '/images/studios/rintosull.webp',
    rating: 4.0,
    reviewCount: 82,
    reviews: [
      {
        author: 'L.O',
        rating: 5,
        date: '1週間前',
        text: 'LAVAグループの安心感があります。初心者向けプログラムが充実していて、ピラティスが初めてでも丁寧にサポートしてもらえました。女性専用なのでリラックスして通えます。',
      },
      {
        author: 'P.U',
        rating: 4,
        date: '2週間前',
        text: '美尻・美脚プログラムが効果的！マシン専門なので初心者でも正しいフォームでトレーニングできます。インストラクターが明るくて楽しいレッスンです。',
      },
      {
        author: 'D.H',
        rating: 4,
        date: '1ヶ月前',
        text: '路面電車沿線でアクセスしやすい立地。女性専用のマシンピラティス専門スタジオとして岡山では人気のスタジオです。LAVAグループなのでサービス品質も安定しています。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['女性専用', '初心者歓迎', 'LAVAグループ', 'マシン専門'],
    description: 'マシンピラティススタジオRintosull 岡山店。Rintosullでは、運動やピラティスを初めて行う方向けのプログラムをご用意しています。インストラクターがしっかりサポートいたしますので、ご安心ください。美尻や美脚に必要な筋肉にアプローチ。初心者でも安心して通えるスタジオ。',
    access: '岡山市内（詳細は公式サイト参照）',
    address: '岡山県岡山市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '初心者向けプログラム充実。美尻・美脚に特化したレッスンも。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['初心者歓迎', '美尻・美脚', 'ボディメイク', '女性専用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'studio kua（スタジオクウア）',
    image: '/images/studios/studio-kua-okayama.webp',
    rating: 4.1,
    reviewCount: 22,
    reviews: [
      {
        author: 'W.M',
        rating: 5,
        date: '10日前',
        text: '表町エリアにある隠れ家的スタジオ。「身体を自分で管理する」というコンセプトに共感して通い始めました。動きの質にこだわった指導で、身体の使い方が根本から変わりました。',
      },
      {
        author: 'G.S',
        rating: 4,
        date: '3週間前',
        text: 'ピラティスの本質を伝えてくれるスタジオ。大手とは違う丁寧で個別対応の指導が魅力。岡山市北区表町という落ち着いた立地も気に入っています。',
      },
      {
        author: 'B.Y',
        rating: 4,
        date: '1ヶ月前',
        text: '一人ひとりの身体に合わせた丁寧な指導が受けられます。表面的なトレーニングではなく、動きの質を高めるアプローチが他にはない魅力です。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['岡山市北区表町', '身体を自分で管理', '本質を伝える', '動きの質'],
    description: '岡山市北区表町にありますピラティススタジオ「studio kua（スタジオクウア）」は「身体を自分で管理する」をコンセプトに、ピラティスの本質をお伝えし、動きと身体の質に変化をもたらすスタジオ。一人ひとりの身体に合わせた丁寧な指導を提供。',
    access: '岡山市北区表町（詳細は公式サイト参照）',
    address: '岡山県岡山市北区表町（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '身体を自分で管理する。ピラティスの本質を伝える。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '本質重視',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['本質重視', 'ボディメイク', '動きの質', '自己管理'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備'],
    },
  },
  {
    name: 'zen place pilates 岡山',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.2,
    reviewCount: 23,
    reviews: [
      {
        author: 'I.T',
        rating: 5,
        date: '5日前',
        text: '全国150店舗以上展開の大手なので安心感があります。岡山駅近くでアクセスも良い。マットもマシンも選べて、男性もOKなのが嬉しい。初心者から経験者まで幅広く対応してくれます。',
      },
      {
        author: 'U.K',
        rating: 4,
        date: '2週間前',
        text: '月4回9,625円からとリーズナブル。全店舗相互利用できるので出張時にも便利です。倉敷方面からも通っている方がいるようで、岡山エリアでは人気のスタジオです。',
      },
      {
        author: 'O.N',
        rating: 4,
        date: '1ヶ月前',
        text: 'リフォーマーグループレッスンがおすすめ。少人数で丁寧に指導してもらえます。プライベートレッスンもあるので、体の悩みに合わせてプランを選べるのが良いです。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '岡山駅近く'],
    description: 'zen place pilates 岡山スタジオ。全国150店舗以上を展開する大手ピラティススタジオ。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。初心者から経験者まで幅広く対応。全店舗相互利用可能。',
    access: '岡山駅近く（詳細は公式サイト参照）',
    address: '岡山県岡山市（詳細は公式サイト参照）',
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
]

const faqs = [
  {
    question: '岡山でピラティス初心者におすすめのスタジオはどこですか？',
    answer: 'Rintosull 岡山店がおすすめです。運動やピラティスを初めて行う方向けのプログラムをご用意しており、インストラクターがしっかりサポートいたしますので、ご安心ください。また、CLUB PILATES 岡山店も完全初心者の方でも安心して取り組むことが可能です。',
  },
  {
    question: '岡山駅から一番近いピラティススタジオはどこですか？',
    answer: 'La pilates 岡山駅前店が、岡山駅より徒歩5分で最もアクセスが良いです。また、zen place pilates 岡山も岡山駅近くにあります。路面電車沿線のスタジオも多いので、公共交通機関での通いやすさも確認してみてください。',
  },
  {
    question: '岡山で一番安いピラティススタジオはどこですか？',
    answer: 'ピラティススタジオDEP 岡山店が平日限定パーソナルレッスン90分2,980円で最もリーズナブルです。また、zen place pilates 岡山は月4回9,625円で通えます。体験レッスンはピラティスK 岡山店とCLUB PILATES 岡山店が無料で受けられます。',
  },
  {
    question: '女性専用のピラティススタジオはありますか？',
    answer: 'はい、3つあります。ピラティスK 岡山店、La pilates 岡山駅前店、Rintosull 岡山店はすべて女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは何ですか？',
    answer: 'マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で自重を使って行い、体幹を鍛えるのに効果的。初心者にはマシンが補助してくれるマシンピラティスがおすすめです。',
  },
  {
    question: 'どのくらいの期間で効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: '運動が苦手でも大丈夫ですか？',
    answer: 'はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので、正しいフォームで効果的にトレーニングできます。',
  },
  {
    question: '岡山で理学療法士監修のスタジオはありますか？',
    answer: 'はい、ピラティススタジオDEP 岡山店は理学療法士監修の完全個室スタジオです。国家資格者による指導で、姿勢改善・腰痛改善に特化しています。医療的な視点から体を整えたい方におすすめです。',
  },
  {
    question: '倉敷方面からでも通えるスタジオはありますか？',
    answer: 'zen place pilates 岡山やピラティスK 岡山店は岡山駅周辺に位置しており、JR山陽本線で倉敷からもアクセスしやすいです。ピラティスK 岡山店は無料駐車場25台完備なので、お車での通いも便利です。',
  },
]

export default async function OkayamaAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '岡山', url: 'https://pilates-biyori.com/area/okayama/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】岡山のピラティススタジオおすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">岡山</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="岡山" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「岡山で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、岡山エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>岡山でピラティススタジオを探している</span>
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
                  <span>岡山駅・表町エリアで通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="スタジオ" />

        {/* Studios List */}

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              岡山のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 2,980円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              岡山エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。近隣の広島エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              岡山でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">岡山駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  岡山エリアのスタジオは岡山駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">岡山エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  岡山エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめ。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  岡山エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  岡山エリアだけでなく、近隣の<Link href="/area/hiroshima/" className="text-warm-700 underline hover:text-warm-900">広島</Link>、<Link href="/area/kobe/" className="text-warm-700 underline hover:text-warm-900">神戸</Link>、<Link href="/area/osaka/" className="text-warm-700 underline hover:text-warm-900">大阪</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>岡山エリアの豆知識：</strong>岡山は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前に確認。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              岡山のおすすめピラティススタジオ8選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* 目的別おすすめスタジオ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額10,000円以下で通える格安スタジオ。体験レッスン無料のスタジオも。コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 岡山（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティススタジオDEP 岡山店（パーソナル 2,980円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 岡山店</li>
                  <li className="text-warm-700">• CLUB PILATES 岡山店</li>
                  <li className="text-warm-700">• zen place pilates 岡山</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  岡山駅・表町エリアから徒歩圏内。路面電車沿線のスタジオも多く、通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates 岡山駅前店（岡山駅徒歩5分）</li>
                  <li className="text-warm-700">• zen place pilates 岡山（岡山駅近く）</li>
                  <li className="text-warm-700">• studio kua（表町エリア）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 期間・頻度 */}
        <section className="py-16 bg-warm-50">
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

        {/* 予算別 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽に始めたい方向け。パーソナルも格安あり。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 岡山（9,625円〜）</li>
                  <li>• ピラティススタジオDEP（2,980円/回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループレッスンが中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• La pilates 岡山駅前店（12,000円〜）</li>
                  <li>• ピラティスK 岡山店（13,420円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">その他（要問合せ）</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">各種プラン</p>
                <p className="text-sm text-warm-600 mb-4">
                  遺伝子解析・世界ブランドなど独自アプローチのスタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES 岡山店</li>
                  <li>• UP LIFE GALLERY 岡山店</li>
                  <li>• Rintosull 岡山店</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 選び方 */}
        <section className="py-16 bg-warm-50">
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
                  岡山エリアの料金相場はグループで月4回9,625円〜13,420円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK岡山店やCLUB PILATES岡山店は無料体験を実施しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。岡山駅周辺、表町エリア、路面電車沿線など、自宅や職場から通いやすい場所を選ぶのがおすすめ。車で通う方はピラティスK岡山店の無料駐車場25台完備が便利。倉敷方面からもJR山陽本線でアクセスしやすいスタジオもありますよ。
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

        {/* まとめ */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は岡山のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では岡山に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="okayama" areaName="岡山" />

      <RelatedAreas currentSlug="okayama" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
