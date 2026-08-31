import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/roppongi/' },
  title: '【2026年9月最新】六本木のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '六本木エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,六本木,東京,港区,スタジオ,おすすめ,マシンピラティス,パーソナル,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 六本木',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ月4回 9,625円〜（税込）',
    trial: '体験レッスンあり',
    features: ['マット&マシン', '六本木駅徒歩2分', '男性OK', '全国相互利用'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。六本木駅2番出口から徒歩2分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンに対応。全国の店舗で相互利用が可能で、出張先や旅行先でもレッスンを受けられます。男性も利用可能。',
    access: '日比谷線・大江戸線「六本木駅」2番出口 徒歩2分',
    address: '東京都港区六本木（六本木駅2番出口徒歩2分）',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットを使ったグループレッスン。初心者から経験者まで無理なく続けられる回数設定。男性も受講可能。',
      price: 'マットグループ月4回 9,625円〜（税込）',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'マシングループ（月4回 15,400円〜）',
      'プライベート（別途料金）',
      '全国店舗相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'STUDIO IVY 麻布台',
    image: '/images/studios/studio-ivy.webp',
    price: '1回 6,500円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全個室パーソナル', 'マシンピラティス', '麻布台エリア', 'オーダーメイド'],
    description: '完全個室のパーソナルマシンピラティス専門スタジオ。麻布台エリアに展開し、六本木からもアクセス良好。完全プライベート空間でオーダーメイドのプログラムを提供。体験4,500円、1回6,500円〜、月2回15,000円〜とパーソナルとしてはリーズナブルな価格設定。初心者から上級者まで、一人ひとりの目標に合わせた指導を受けられます。',
    access: '六本木エリア・麻布台',
    address: '東京都港区麻布台（麻布台エリア）',
    popularPlan: {
      name: '月2回プラン',
      description: '完全個室でのマンツーマンレッスン。オーダーメイドのプログラムで効率的にボディメイク。',
      price: '月2回 15,000円〜',
    },
    options: [
      'パーソナルレッスン（1回 6,500円〜）',
      '月2回プラン（15,000円〜）',
      '体験レッスン（4,500円）',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['完全個室', 'マシン完備', 'ロッカー'],
    },
  },
  {
    name: 'BDC PILATES 六本木',
    image: '/images/studios/bdc-pilates.webp',
    price: 'グループ&プライベートあり',
    trial: '体験レッスンあり',
    features: ['ダンサー御用達', 'グループ&プライベート', '六本木エリア', '高品質指導'],
    description: 'プロダンサー養成校「ブロードウェイダンスセンター」がプロデュースするピラティススタジオ。ダンサー御用達の質の高いレッスンが特徴。グループレッスンとプライベートレッスンの両方に対応し、体の使い方を徹底的に学べます。六本木エリアで本格的なピラティスを受けたい方におすすめ。',
    access: '六本木エリア',
    address: '東京都港区六本木（六本木エリア）',
    popularPlan: {
      name: 'グループレッスン',
      description: 'プロダンサー養成校の知見を活かしたグループマシンピラティス。質の高いインストラクターによる指導。',
      price: 'お問い合わせください',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '体験レッスン',
      'ドロップイン（1回券）あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'ダンスパフォーマンス向上', '体幹強化'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'スタジオMiiA 六本木',
    image: '/images/studios/studio-miia-roppongi.webp',
    price: 'プライベート専門（料金はお問い合わせ）',
    trial: '体験レッスンあり',
    features: ['プライベート専門', '六本木駅近く', 'マンツーマン', '丁寧な指導'],
    description: '六本木駅近くのプライベート専門ピラティススタジオ。マンツーマンで一人ひとりの体の状態や目標に合わせた丁寧な指導を提供。プライベート専門ならではの静かで集中できる環境が魅力です。',
    access: '六本木駅近く',
    address: '東京都港区六本木（六本木駅近く）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: 'マンツーマンの個別指導。体の状態に合わせたオーダーメイドプログラム。',
      price: 'お問い合わせください',
    },
    options: [
      'プライベートレッスン',
      '体験レッスンあり',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー'],
    },
  },
  {
    name: 'BLC Personal Gym',
    image: '/images/studios/blc-roppongi.webp',
    price: '1回 9,000円〜',
    trial: '体験レッスン 5,500円',
    features: ['パーソナルマシン', '六本木エリア', '体験5,500円', '本格指導'],
    description: '六本木エリアのパーソナルマシンピラティススタジオ。体験レッスン5,500円、1回9,000円〜で本格的なマンツーマン指導を受けられます。マシンを使った効果的なトレーニングで、体の変化を実感できると評判です。',
    access: '六本木エリア',
    address: '東京都港区六本木（六本木エリア）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'マシンを使ったマンツーマンレッスン。一人ひとりの目標に合わせた本格的な指導。',
      price: '1回 9,000円〜',
    },
    options: [
      'パーソナルレッスン（1回 9,000円〜）',
      '体験レッスン（5,500円）',
      '回数券プランあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性65% / 男性35%',
      purpose: ['ボディメイク', '筋力アップ', '姿勢改善', 'ダイエット'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー'],
    },
  },
  {
    name: 'CLUB PILATES 六本木（近隣）',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 10,890円〜（税込）',
    trial: '体験レッスンあり',
    features: ['最大12名グループ', '月4回10,890円〜', 'レベル別クラス', 'アメリカ発'],
    description: 'アメリカ発の世界的ピラティスブランド。最大12名のグループレッスンで、リフォーマーを使った本格的なマシンピラティスを月4回10,890円〜のリーズナブルな価格で受けられます。レベル別のクラス分けがあり、初心者から上級者まで安心。六本木近隣で通いやすい立地。',
    access: '六本木近隣',
    address: '東京都港区（六本木近隣）',
    popularPlan: {
      name: 'グループレッスン（月4回）',
      description: '最大12名のリフォーマーグループレッスン。レベル別クラスで初心者も安心。',
      price: '月4回 10,890円〜（税込）',
    },
    options: [
      'グループレッスン（月4回 10,890円〜）',
      '通い放題プランあり',
      '体験レッスン',
      'レベル別クラス',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['リフォーマー完備', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'ピラティスK 六本木（近隣）',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 11,220円〜（税込）',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', '月4回11,220円〜', 'おしゃれ空間'],
    description: '女性専用のマシンピラティススタジオ。月4回11,220円〜でリフォーマーを使った本格的なマシンピラティスが受けられます。おしゃれで清潔感のあるスタジオ空間が女性に人気。六本木近隣で通いやすい立地です。',
    access: '六本木近隣',
    address: '東京都港区（六本木近隣）',
    popularPlan: {
      name: 'マシングループ（月4回）',
      description: '女性専用のマシンピラティスグループレッスン。おしゃれな空間で楽しくトレーニング。',
      price: '月4回 11,220円〜（税込）',
    },
    options: [
      'マシングループ（月4回 11,220円〜）',
      '通い放題プランあり',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['リフォーマー完備', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull 六本木（近隣）',
    image: '/images/studios/rintosull.webp',
    price: 'LAVA系列（料金はお問い合わせ）',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', 'LAVA系列', '安心の大手'],
    description: 'ホットヨガスタジオLAVA系列の女性専用マシンピラティススタジオ。LAVA会員は併用しやすく、ヨガとピラティスの両方を楽しめます。大手ならではの安心感と充実したサポート体制が魅力。六本木近隣で通いやすい立地。',
    access: '六本木近隣',
    address: '東京都港区（六本木近隣）',
    popularPlan: {
      name: 'マシンピラティスレッスン',
      description: 'LAVA系列の女性専用マシンピラティス。充実したサポート体制で初心者も安心。',
      price: 'お問い合わせください',
    },
    options: [
      'マシンピラティスレッスン',
      'LAVA会員優待あり',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ヨガとの併用'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['リフォーマー完備', 'ロッカー', 'パウダールーム', 'シャワー'],
    },
  },
  {
    name: 'ELEMENT 六本木',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月4回 22,000円（税込）',
    trial: '体験レッスンあり',
    features: ['マンツーマン30分', '月4回22,000円', '効率的', '六本木エリア'],
    description: 'マンツーマン30分の効率的なパーソナルピラティススタジオ。月4回22,000円で質の高いマンツーマン指導を受けられます。30分という短時間に集中してトレーニングするため、忙しいビジネスパーソンにも人気。六本木エリアで仕事帰りにも通いやすい立地です。',
    access: '六本木エリア',
    address: '東京都港区六本木（六本木エリア）',
    popularPlan: {
      name: 'マンツーマン30分（月4回）',
      description: '30分間のマンツーマンレッスン。短時間で効率的にトレーニング。',
      price: '月4回 22,000円（税込）',
    },
    options: [
      'マンツーマン30分（月4回 22,000円）',
      '体験レッスン',
      '回数追加プランあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性60% / 男性40%',
      purpose: ['時短トレーニング', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスミラー 六本木（近隣）',
    image: '/images/studios/pilates-mirror.webp',
    price: 'プライベート30分 4,400円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'プライベート30分', '4,400円〜', 'リーズナブル'],
    description: '女性専用のピラティススタジオ。プライベート30分4,400円〜と六本木エリアではリーズナブルな価格でパーソナルレッスンを受けられます。短時間で効率的にトレーニングしたい女性に人気。六本木近隣で通いやすい立地です。',
    access: '六本木近隣',
    address: '東京都港区（六本木近隣）',
    popularPlan: {
      name: 'プライベート30分',
      description: '女性専用の30分プライベートレッスン。リーズナブルな価格で本格パーソナル指導。',
      price: 'プライベート30分 4,400円〜',
    },
    options: [
      'プライベート30分（4,400円〜）',
      '体験レッスン',
      '回数券プランあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '時短トレーニング'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'CALDO 六本木（近隣）',
    image: '/images/studios/caldo.webp',
    price: 'ホットヨガ&ピラティス（料金はお問い合わせ）',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '大手スタジオ', '施設充実', '通い放題あり'],
    description: 'ホットヨガをメインに展開する大手スタジオ。ピラティスのクラスも提供しており、ホットヨガとピラティスの両方を楽しめます。暖かい環境でのトレーニングは体が柔らかくなり効果的。大手ならではの充実した施設が魅力。六本木近隣で通いやすい立地です。',
    access: '六本木近隣',
    address: '東京都港区（六本木近隣）',
    popularPlan: {
      name: 'ホットヨガ&ピラティス',
      description: 'ホットヨガとピラティスの両方が受けられるプラン。暖かい環境で効果的にトレーニング。',
      price: 'お問い合わせください',
    },
    options: [
      'ホットヨガ&ピラティス',
      '通い放題プランあり',
      '体験レッスン',
      'ドロップインあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ダイエット', '柔軟性向上', 'リフレッシュ', 'デトックス'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['ホットスタジオ', 'シャワー', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Dr.ピラティス 六本木店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。六本木エリア（詳細は公式サイト参照）。',
    access: '六本木エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！六本木エリアのスタジオは初心者歓迎のところがほとんどです。zen place pilatesでは基礎から丁寧に指導してもらえますし、パーソナル専門のSTUDIO IVYやAll Present Pilatesなら一人ひとりのレベルに合わせたプログラムを組んでもらえます。CLUB PILATESはレベル別クラスがあり初心者も安心です。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使ったトレーニングです。マシンはバネの負荷を調整できるため、初心者にもおすすめです。zen placeではマット・マシン両方に対応しています。' },
  { question: '六本木エリアの料金相場は？', answer: 'グループレッスンは月4回9,625円〜11,220円程度。パーソナルは1回4,400円〜9,000円が相場です。体験レッスンはパーソナルで4,500円〜5,500円程度。ELEMENT六本木はマンツーマン30分で月4回22,000円です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回からスタートするのがおすすめ。慣れてきたら週2〜3回に増やしましょう。最低2〜3ヶ月は継続することで効果を実感できます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、ピラティスはインナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質へと変わっていきます。即効性よりも継続が大切で、2〜3ヶ月の継続をおすすめします。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOKです。ウェアやタオルのレンタルがあるスタジオもありますので、事前に確認しましょう。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心です。ピラティスはリハビリ目的で生まれたエクササイズで、体の使い方を学ぶのに最適です。CALDOではホットヨガとピラティスの両方を楽しめます。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、ピラティスは姿勢改善を通じて肩こりや腰痛の根本原因にアプローチします。特にパーソナルレッスンでは個別の悩みに合わせたプログラムを組んでもらえます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の変化や体の軽さを実感する方が多いです。ボディラインの変化は3〜6ヶ月程度で感じられます。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '目的や予算によります。パーソナルは効果が出やすく個別対応が可能。グループは費用を抑えながら楽しく続けられます。六本木エリアにはSTUDIO IVY、All Present Pilates、スタジオMiiAなどパーソナル専門スタジオが充実しています。グループならzen place pilates、CLUB PILATES、ピラティスKがおすすめです。' },
  { question: '女性専用のスタジオはありますか？', answer: 'はい、六本木エリアにはピラティスK、Rintosull、ピラティスミラーなど女性専用スタジオがあります。周りの目を気にせず集中したい方におすすめです。' },
  { question: '短時間で効果のあるレッスンはありますか？', answer: 'ELEMENT六本木はマンツーマン30分のレッスンで、短時間ながら効率的にトレーニングできます。ピラティスミラーもプライベート30分4,400円〜で受けられます。忙しい方にもぴったりです。' },
]

export default function RoppongiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '六本木', url: 'https://pilates-biyori.com/area/roppongi/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年09月01日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス六本木おすすめ12選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">六本木</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「六本木でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「六本木ヒルズや東京ミッドタウンの近くで通えるスタジオを探している」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、東京メトロ日比谷線・都営大江戸線「六本木駅」周辺でおすすめのピラティススタジオ12選をまとめました。六本木ヒルズや東京ミッドタウンに近い港区の国際色豊かなエリアで、パーソナル専門からグループレッスン、女性専用スタジオまで、自分にぴったりのスタジオを見つけましょう。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>六本木でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>パーソナルで丁寧に指導してほしい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>女性専用スタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較して選びたい</span></li></ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="六本木" />
        <AreaMarketComparison studios={studios} areaName="六本木" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">六本木のおすすめピラティススタジオ12選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後から通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（マット月4回 9,625円〜）</li><li className="text-warm-700">• CLUB PILATES（月4回 10,890円〜）</li><li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル専門</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導を受けたい方に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO IVY（1回 6,500円〜）</li><li className="text-warm-700">• All Present Pilates（1回 6,600円〜）</li><li className="text-warm-700">• スタジオMiiA（プライベート専門）</li><li className="text-warm-700">• BLC Personal Gym（1回 9,000円〜）</li><li className="text-warm-700">• ELEMENT（30分 月4回 22,000円）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3><p className="text-warm-600 text-sm mb-4">女性だけの安心空間でトレーニング。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li><li className="text-warm-700">• Rintosull（LAVA系列）</li><li className="text-warm-700">• ピラティスミラー（30分 4,400円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回からスタート。最低2〜3ヶ月継続で効果を実感できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回がおすすめ。3〜6ヶ月で目に見える変化が期待できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続しましょう。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的に応じてスタジオを選びましょう。パーソナルは効果が出やすく、グループは楽しく続けられます。女性専用スタジオなら周りを気にせず集中できます。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">六本木エリアの料金相場はグループ月4回9,625円〜11,220円、パーソナルは1回4,400円〜9,000円程度。体験レッスンは4,500円〜5,500円が中心です。ELEMENTはマンツーマン30分で月4回22,000円。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">各スタジオで体験レッスンを実施しています。STUDIO IVYは4,500円、All Present PilatesとBLC Personal Gymは5,500円で体験可能。まずは気軽に試してみましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">六本木は東京メトロ日比谷線と都営大江戸線が利用可能。六本木ヒルズや東京ミッドタウンに近い港区の国際色豊かなエリアで、レッスン前後のショッピングや食事も楽しめます。zen place pilatesは駅から徒歩2分と好アクセスです。</p></div></div></div></section>
        {/* Price Market Section */}
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              六本木のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                六本木エリアは東京メトロ日比谷線・都営大江戸線が利用でき、六本木ヒルズや東京ミッドタウンに近い港区の国際色豊かなエリア。パーソナル専門スタジオが充実しており、質の高いマンツーマン指導を受けたい方に人気です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">9,625円〜11,220円</p>
                  <p className="text-sm text-warm-600">zen place pilates六本木のマット月4回9,625円〜が最安。CLUB PILATES月4回10,890円〜、ピラティスK月4回11,220円〜。六本木はパーソナル専門スタジオが多く、グループレッスンの選択肢は他エリアに比べてやや少なめです。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">パーソナルレッスン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">4,400円〜22,000円</p>
                  <p className="text-sm text-warm-600">ピラティスミラーは30分4,400円〜で最安クラス。STUDIO IVY麻布台は1回6,500円〜、BLC Personal Gymは1回9,000円〜。ELEMENTは30分マンツーマン月4回22,000円。六本木はパーソナルの選択肢が非常に豊富です。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">体験レッスン費用</h3>
                <p className="text-sm text-warm-600">体験レッスンはSTUDIO IVYが4,500円、All Present Pilates・BLC Personal Gymが5,500円程度。zen placeは1,000円〜で体験可能。パーソナル専門スタジオの体験はやや高めですが、マンツーマンで自分の体の状態を詳しく診てもらえるため、投資する価値があります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              六本木でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">六本木駅と六本木一丁目駅は別の場所</h3>
                <p className="text-warm-600 leading-relaxed">
                  六本木駅（日比谷線・大江戸線）と六本木一丁目駅（南北線）は徒歩約10分離れています。スタジオがどちらの駅に近いかを必ず確認しましょう。zen place pilates六本木は日比谷線六本木駅2番出口徒歩2分。麻布台ヒルズ周辺のスタジオは六本木一丁目駅の方がアクセスしやすい場合があります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">パーソナル主体のためスタジオの見極めが重要</h3>
                <p className="text-warm-600 leading-relaxed">
                  六本木エリアはパーソナルスタジオが多いため、インストラクターの質が満足度を大きく左右します。体験レッスンでインストラクターとの相性、説明の分かりやすさ、体の状態を丁寧に見てもらえるかを必ず確認してから入会を決めましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリア（麻布・広尾・赤坂）のスタジオも視野に</h3>
                <p className="text-warm-600 leading-relaxed">
                  六本木から徒歩圏内には麻布・広尾・赤坂エリアのスタジオもあります。六本木駅周辺だけで決めず、近隣エリアも含めて幅広く検討すると、より自分に合ったスタジオが見つかる可能性が高まります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">外国語対応スタジオも選べる</h3>
                <p className="text-warm-600 leading-relaxed">
                  六本木は外国人居住者が多い国際色豊かなエリア。英語でレッスンを受けられるスタジオや、外国人インストラクターが在籍するスタジオもあります。海外の方にもおすすめのエリアです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-warm-50" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              体験レッスン当日の持ち物・服装ガイド
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが基本。六本木のスタジオはおしゃれな雰囲気のところも多いですが、カジュアルなウェアでOK。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>水分（500ml以上）</strong>：レッスン中の水分補給に必須。六本木周辺はコンビニが多いですが持参が確実です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用に1枚は持っていきましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは必須。滑り止め付きタイプを用意しましょう。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>が必須。ピラティスは全身の可動域を使うため、動きを妨げない服を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体にフィットする服</strong>がベスト。パーソナルレッスンではインストラクターがフォームを細かくチェックします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>レンタル対応</strong>スタジオもあり。ピラティスKやRintosullはウェアレンタルが利用できる場合があります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリーは外して</strong>ロッカーに預けましょう。マシンのバネに引っかかる恐れがあります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>六本木エリアの豆知識：</strong>六本木ヒルズや東京ミッドタウンに近いため、レッスン後にはアート鑑賞やグルメも楽しめます。パーソナルスタジオは完全予約制のところが多いので、体験レッスンは必ず事前予約を。けやき坂通りを散歩しながらクールダウンする常連さんも多いエリアです。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は六本木のおすすめピラティススタジオ12選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">六本木は東京メトロ日比谷線・都営大江戸線が利用でき、六本木ヒルズや東京ミッドタウンに近い港区の国際色豊かなエリア。zen place pilates 六本木のようなグループ対応の大手スタジオから、STUDIO IVY・All Present Pilates・スタジオMiiA・BLC Personal Gymのパーソナル専門スタジオ、ELEMENT六本木の効率的な30分マンツーマン、ダンサー御用達のBDC PILATES、女性専用のピラティスK・Rintosull・ピラティスミラー、さらにホットヨガとの両立ができるCALDOまで多彩な選択肢があります。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">各スタジオで体験レッスン実施中。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="roppongi" areaName="六本木" />

            {/* boost-hamamatsucho-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                オフィス街で仕事帰りに通うなら、<Link href="/area/hamamatsucho/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">浜松町・大門エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて比較できます。
              </p>
            </div>
      <RelatedAreas currentSlug="roppongi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
