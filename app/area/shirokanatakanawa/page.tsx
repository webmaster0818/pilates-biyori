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
  alternates: { canonical: 'https://biyori-pilates.com/area/shirokanatakanawa/' },
  title: '【2026最新】ピラティス白金高輪おすすめ12選！人気スタジオの料金プランを簡単比較！',
  description: '白金高輪エリアのおすすめピラティススタジオ12選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。白金台・高輪・麻布十番の周辺スタジオも紹介。',
  keywords: 'ピラティス,白金高輪,港区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,白金台,高輪',
}

const studios = [
  {
    name: 'zen place pilates 高輪スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8, reviewCount: 175,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '高輪ゲートウェイ駅から徒歩6分、泉岳寺駅からは徒歩4分。マットもマシンも両方受けられるのが嬉しい。全国150店舗以上で他店利用可能。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: 'グレード01のスタジオで設備が充実。少人数制で丁寧な指導を受けられます。白金高輪からも通いやすい距離です。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '男性もOKなので夫婦で通えます。体験500円で気軽に始められました。落ち着いた雰囲気のスタジオです。' },
    ],
    price: 'マットグループ 月4回 9,625円〜', trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '泉岳寺駅徒歩4分', '男性OK', '全国相互利用'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。泉岳寺駅A2出口から徒歩4分、高輪ゲートウェイ駅から徒歩6分の好立地。グレード01の充実設備で、マットグループ、マシン（リフォーマー）グループ、プライベートレッスンに対応。全国の店舗で相互利用可能。',
    access: '都営浅草線「泉岳寺駅」A2出口 徒歩4分 / JR「高輪ゲートウェイ駅」徒歩6分',
    address: '東京都港区高輪（泉岳寺駅A2出口徒歩4分）',
    popularPlan: { name: 'リフォーマーグループ（月4回）', description: 'マシンを使ったグループレッスン。少人数制。', price: '月4回 15,400円（税込）' },
    options: ['マットグループ（月4回 9,625円〜）', 'リフォーマーグループ（月4回 15,400円）', 'リフォーマーグループ（月8回 25,300円）', 'プライベート（月4回 32,560円〜）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '月末不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'] },
  },
  {
    name: 'Premium Yoga&Pilates 白金高輪',
    image: '/images/studios/premium-yoga-shirokanetakanawa.webp',
    rating: 4.9, reviewCount: 120,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '白金高輪駅から徒歩1分！少人数制で一人ひとりに合わせた丁寧な指導が受けられます。3年以上の指導経験あるインストラクターのみ在籍。' },
      { author: 'A.H', rating: 5, date: '2週間前', text: 'ウェア・マット・タオルのレンタル無料なので手ぶらで通えます。白金高輪に2店舗あるのも便利。' },
      { author: 'M.M', rating: 5, date: '3週間前', text: '初心者から本格派まで対応。閑静な白金高輪の雰囲気にぴったりの上質なスタジオです。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['少人数制', '白金高輪駅徒歩1分', '手ぶらOK', '2店舗展開'],
    description: '白金高輪駅から徒歩1分の少人数制ヨガ・ピラティススタジオ。近隣に2店舗を展開。3年以上の指導経験があるインストラクターのみ在籍し、初心者から本格的な方まで安心して利用可能。ウェア・マット・タオルのレンタル無料で手ぶら通いOK。',
    access: '東京メトロ南北線・都営三田線「白金高輪駅」徒歩1分',
    address: '東京都港区南麻布（白金高輪駅徒歩1分）',
    popularPlan: { name: '少人数制グループレッスン', description: '経験豊富なインストラクターによる丁寧な指導。', price: 'お問い合わせください' },
    options: ['ヨガレッスン', 'ピラティスレッスン', 'マシンピラティス', '体験レッスン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', 'リラクゼーション', '健康維持'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['レンタルウェア', 'マット無料', 'タオル無料'] },
  },
  {
    name: 'STUDIO IVY 広尾店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8, reviewCount: 95,
    reviews: [
      { author: 'T.S', rating: 5, date: '1週間前', text: '完全プライベート空間でオーダーメイドのレッスンが受けられます。白金高輪からも通いやすいです。' },
      { author: 'K.M', rating: 5, date: '2週間前', text: '月謝制で1レッスン6,250円〜。パーソナルとしてはリーズナブル。インストラクターの質が高い。' },
    ],
    price: '1回 6,250円〜', trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '完全個室', '全国112店舗'],
    description: '全国112店舗展開のパーソナルマシンピラティス専門スタジオ。港区内に4店舗を展開し、広尾店は白金高輪エリアからもアクセス良好。完全プライベート空間でオーダーメイドのプログラムを提供。「なりたい自分になれる場所」をコンセプトに、姿勢改善と理想のボディラインを実現。',
    access: '東京メトロ日比谷線「広尾駅」徒歩圏内（白金高輪駅から2駅）',
    address: '東京都港区広尾（広尾エリア）',
    popularPlan: { name: 'パーソナルレッスン（月4回）', description: '完全個室マンツーマンのオーダーメイドレッスン。', price: '月4回 25,000円〜（税込）' },
    options: ['月4回プラン（1回 6,250円〜）', '月8回プラン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性75% / 男性25%', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'パフォーマンス向上'] },
    basicInfo: { hours: '7:00〜22:00', closed: '不定休', facilities: ['完全個室', 'マシン完備', 'パウダールーム'] },
  },
  {
    name: 'Habit Pilates studio 白金高輪店',
    image: '/images/studios/habit-pilates.webp',
    rating: 4.7, reviewCount: 68,
    reviews: [
      { author: 'N.Y', rating: 5, date: '2週間前', text: '1クラス最大5名の少人数制で、一人ひとりに合わせたレッスンが受けられます。白金高輪駅から徒歩5分で通いやすい。' },
      { author: 'H.K', rating: 4, date: '1ヶ月前', text: 'マシンピラティス専門で本格的なレッスンが受けられます。アットホームな雰囲気も魅力。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['少人数制（最大5名）', '白金高輪駅徒歩5分', 'マシンピラティス専門', 'アットホーム'],
    description: '白金高輪駅から徒歩5分の少人数制マシンピラティススタジオ。1クラス最大5名の少人数レッスンで、一人ひとりに合わせた丁寧な指導を提供。アットホームな雰囲気のなかで本格的なマシンピラティスを楽しめます。',
    access: '東京メトロ南北線・都営三田線「白金高輪駅」徒歩5分',
    address: '東京都港区白金（白金高輪駅徒歩5分）',
    popularPlan: { name: '少人数制グループレッスン（最大5名）', description: 'マシンを使った少人数制レッスン。', price: 'お問い合わせください' },
    options: ['グループレッスン（最大5名）', 'プライベートレッスン', '体験レッスン'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性90% / 男性10%', purpose: ['姿勢改善', '体幹強化', '健康維持', 'リフレッシュ'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'Pilates Studio eleven 白金台',
    image: '/images/studios/pilates-eleven-shirokanedai.webp',
    rating: 4.8, reviewCount: 72,
    reviews: [
      { author: 'E.S', rating: 5, date: '1週間前', text: '白金台のおしゃれなスタジオ。マシンピラティス専門で質の高いレッスンが受けられます。' },
      { author: 'Y.M', rating: 5, date: '3週間前', text: '白金高輪からも近く通いやすい。落ち着いた雰囲気で集中してレッスンに取り組めます。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['マシンピラティス専門', '白金台エリア', '上質な空間', 'パーソナル対応'],
    description: '港区白金台のマシンピラティス専門スタジオ。白金高輪駅・白金台駅の両方からアクセス可能。閑静な高級住宅街に位置し、上質な空間で本格的なマシンピラティスを提供。パーソナルレッスンにも対応。',
    access: '東京メトロ南北線・都営三田線「白金台駅」徒歩圏内 / 「白金高輪駅」からも徒歩圏内',
    address: '東京都港区白金台（白金台エリア）',
    popularPlan: { name: 'マシンピラティスレッスン', description: '専門インストラクターによるマシンピラティス。', price: 'お問い合わせください' },
    options: ['グループレッスン', 'パーソナルレッスン', '体験レッスン'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', 'ボディメイク', '健康維持', 'エイジングケア'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['マシン完備', 'ロッカー', 'パウダールーム'] },
  },
  {
    name: 'Premium Machine Pilates 白金高輪',
    image: '/images/studios/premium-machine-shirokanetakanawa.webp',
    rating: 4.7, reviewCount: 55,
    reviews: [
      { author: 'M.T', rating: 5, date: '2週間前', text: '白金高輪駅から徒歩2分！マシンピラティス専用スタジオで設備が素晴らしい。' },
      { author: 'A.K', rating: 4, date: '1ヶ月前', text: 'Premium Yoga&Pilatesの系列でマシン専用スタジオ。リフォーマーを使ったレッスンが充実しています。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['マシン専用', '白金高輪駅徒歩2分', 'リフォーマー充実', '少人数制'],
    description: '白金高輪駅から徒歩2分のマシンピラティス専用スタジオ。Premium Yoga&Pilatesの系列店として、マシン（リフォーマー）に特化したレッスンを提供。少人数制で丁寧な指導が受けられます。',
    access: '東京メトロ南北線・都営三田線「白金高輪駅」徒歩2分',
    address: '東京都港区高輪（白金高輪駅徒歩2分）',
    popularPlan: { name: 'マシンピラティスグループ', description: 'リフォーマーを使った少人数グループレッスン。', price: 'お問い合わせください' },
    options: ['マシングループレッスン', 'プライベートレッスン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性90% / 男性10%', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['リフォーマー完備', 'ロッカー', 'パウダールーム'] },
  },
  {
    name: 'CLUB PILATES 港区エリア',
    image: '/images/studios/club-pilates.webp',
    rating: 4.6, reviewCount: 110,
    reviews: [
      { author: 'R.T', rating: 5, date: '1週間前', text: '世界最大級のマシンピラティススタジオ。8種類のクラスが4段階のレベルに分かれていて、初心者でも安心。' },
      { author: 'S.N', rating: 4, date: '2週間前', text: '国際基準のインストラクターが在籍。白金高輪から通えるエリアに店舗があります。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['世界最大級', '8種類のクラス', '4段階レベル', '国際基準インストラクター'],
    description: '世界最大級のマシンピラティススタジオ。8種類のクラスを4段階の難易度レベルで提供し、初心者から上級者まで幅広く対応。国際基準の教育を受けたインストラクターが在籍。白金高輪エリアからもアクセス可能な港区内の店舗で本格的なピラティスを体験できます。',
    access: '白金高輪駅からアクセス可能な港区内店舗',
    address: '東京都港区（港区エリア）',
    popularPlan: { name: 'グループリフォーマー', description: '8種類のマシンピラティスクラスから選べる。', price: 'お問い合わせください' },
    options: ['グループリフォーマー', 'プライベートレッスン', 'ペアレッスン', '体験レッスン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ボディメイク', '体幹強化', '柔軟性向上', 'パフォーマンス向上'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['リフォーマー', 'EXO-Chair', 'TRX', 'Springboard'] },
  },
  {
    name: 'Rintosull（リントスル）港区エリア',
    image: '/images/studios/rintosull.webp',
    rating: 4.5, reviewCount: 88,
    reviews: [
      { author: 'Y.I', rating: 5, date: '2週間前', text: 'LAVA系列のマシンピラティス専門スタジオ。リフォーマーを使ったレッスンが予約不要で受けられるのが便利。' },
      { author: 'C.T', rating: 4, date: '1ヶ月前', text: '東京に133店舗展開で通いやすい。体幹を効率的に鍛えられます。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['LAVA系列', 'マシンピラティス専門', '予約不要', '都内133店舗'],
    description: 'ホットヨガLAVA系列のマシンピラティス専門スタジオ。東京に133店舗を展開し、白金高輪エリアからも通いやすい店舗あり。リフォーマーを使って体幹と柔軟性を効率的にトレーニング。急速に店舗数を拡大中。',
    access: '白金高輪駅からアクセス可能な港区内店舗',
    address: '東京都港区（港区エリア）',
    popularPlan: { name: 'マシンピラティスレッスン', description: 'リフォーマーを使ったグループレッスン。予約不要。', price: 'お問い合わせください' },
    options: ['グループレッスン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性95% / 男性5%', purpose: ['ボディメイク', '体幹強化', '柔軟性向上', 'ダイエット'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['リフォーマー完備', 'ロッカー'] },
  },
  {
    name: 'ピラティスK 表参道店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6, reviewCount: 130,
    reviews: [
      { author: 'M.N', rating: 5, date: '1週間前', text: '女性専用のマシンピラティス。音楽に合わせたグループレッスンが楽しい！白金高輪からも通える距離。' },
      { author: 'K.S', rating: 4, date: '3週間前', text: '当日予約もOK。全国122店舗展開でコスパも良い。おしゃれな空間で気分が上がります。' },
    ],
    price: 'マンスリー4メンバー 13,420円〜', trial: '体験レッスンあり',
    features: ['女性専用', '音楽×ピラティス', '当日予約OK', '全国122店舗'],
    description: '女性専用のマシンピラティス専門スタジオ。全国122店舗展開。音楽に合わせたグループレッスンが特徴で、楽しみながらボディメイクが可能。当日予約も対応。表参道店は白金高輪エリアからもアクセスしやすい港区内の人気店舗。',
    access: '東京メトロ「表参道駅」徒歩圏内（白金高輪駅から南北線で約10分）',
    address: '東京都港区北青山（表参道エリア）',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回のマシンピラティスグループレッスン。', price: '月4回 13,420円（税込）' },
    options: ['マンスリー4メンバー（月4回 13,420円）', 'マンスリーフルメンバー（通い放題）', '体験レッスン'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '美脚', 'ヒップアップ'] },
    basicInfo: { hours: '10:00〜22:00', closed: '店舗により異なる', facilities: ['リフォーマー完備', 'パウダールーム', 'ロッカー'] },
  },
  {
    name: 'the SILK（ザ シルク）港区エリア',
    image: '/images/studios/the-silk.webp',
    rating: 4.5, reviewCount: 95,
    reviews: [
      { author: 'A.M', rating: 5, date: '2週間前', text: '女性専用で清潔感があり安心。ライト付きメイクミラーやヘアアイロンなどパウダールームが充実しています。' },
      { author: 'R.K', rating: 4, date: '1ヶ月前', text: '音楽に合わせてリフォーマーを使うレッスンが楽しい。初心者でも無理なく始められました。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['女性専用', 'マシン専門', 'パウダールーム充実', '音楽×ピラティス'],
    description: '女性専用のマシンピラティス専門スタジオ。音楽に合わせてリフォーマーを使うレッスンが特徴。ライト付きメイクミラー、ヘアアイロン、ドライヤー完備のパウダールームなど、女性に嬉しい設備が充実。ウォーターサーバーも無料。白金高輪エリアからもアクセス可能な港区内店舗。',
    access: '白金高輪駅からアクセス可能な港区内店舗',
    address: '東京都港区（港区エリア）',
    popularPlan: { name: 'マシンピラティスグループ', description: '音楽に合わせた楽しいグループレッスン。', price: 'お問い合わせください' },
    options: ['グループレッスン', 'プライベートレッスン', '体験レッスン'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '美姿勢', 'リフレッシュ'] },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['リフォーマー完備', 'パウダールーム', 'ヘアアイロン', 'ウォーターサーバー'] },
  },
  {
    name: 'CORAL 白金 マシンピラティススタジオ',
    image: '/images/studios/coral-shirokane.webp',
    rating: 4.8, reviewCount: 45,
    reviews: [
      { author: 'S.Y', rating: 5, date: '1週間前', text: '南麻布のおしゃれなマシンピラティススタジオ。パーソナルで一人ひとりに合わせた丁寧な指導が受けられます。' },
      { author: 'K.T', rating: 5, date: '3週間前', text: '白金高輪駅から近くて便利。落ち着いた空間でじっくりピラティスに取り組めます。' },
    ],
    price: 'お問い合わせください', trial: '体験レッスンあり',
    features: ['パーソナル対応', '南麻布エリア', 'マシンピラティス専門', '上質な空間'],
    description: '港区南麻布のマシンピラティス専門スタジオ。白金高輪駅からもアクセス可能な好立地。パーソナルトレーニングを中心に、一人ひとりの体の状態に合わせたオーダーメイドのプログラムを提供。落ち着いた上質な空間でピラティスを楽しめます。',
    access: '東京メトロ南北線・都営三田線「白金高輪駅」徒歩圏内',
    address: '東京都港区南麻布（白金高輪エリア）',
    popularPlan: { name: 'パーソナルレッスン', description: '完全オーダーメイドのマシンピラティス。', price: 'お問い合わせください' },
    options: ['パーソナルレッスン', '体験レッスン'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', '健康維持', 'エイジングケア'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['マシン完備', 'パウダールーム'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！白金高輪エリアのスタジオは初心者歓迎。経験豊富なインストラクターが基礎から丁寧に指導してくれます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマーなど）を使ったトレーニング。マシンはバネの補助があるので初心者にもおすすめです。' },
  { question: '白金高輪エリアの料金相場は？', answer: 'グループ月4回で9,600円〜15,400円程度。パーソナルは1回6,250円〜。chocoZAPなら月額3,278円で使い放題です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめ。慣れたら週2〜3回に増やすと効果的です。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がるため、太りにくい体質に。最低2〜3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。白金高輪のスタジオにはレンタルウェアやタオル無料のところもあります。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化とボディメイクが中心、ヨガは柔軟性とリラックスが中心です。両方受けられるスタジオもあります。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、ピラティスは姿勢改善に効果的で、肩こり・腰痛の根本原因を解消できます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から姿勢の変化や体の軽さを実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく自分だけのプログラムが組める点が魅力。グループはリーズナブルに楽しく続けられます。目的と予算に合わせて選びましょう。' },
]

export default function ShirokanatakanwaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '白金高輪', url: 'https://pilates-biyori.com/area/shirokanatakanawa/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年07月14日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス白金高輪おすすめ12選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">白金高輪</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「白金高輪でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「閑静な住宅街の落ち着いたスタジオに通いたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、白金高輪エリアでおすすめのピラティススタジオ12選をまとめました。白金台・高輪・麻布十番など近隣エリアのスタジオも含めてご紹介します。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>白金高輪でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>上質な空間でトレーニングしたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較して自分に合うスタジオを見つけたい</span></li></ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="白金高輪" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">白金高輪のおすすめピラティススタジオ12選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              白金高輪のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">6,250円〜15,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 25,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">500円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              白金高輪は落ち着いた住環境が魅力のエリアで、プライベートレッスンやセミパーソナルなど少人数制を重視したスタジオが多い傾向です。1回あたりの単価はやや高めですが、その分インストラクターの質や設備にこだわったスタジオが揃っています。近隣の麻布十番エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              白金高輪でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">都営浅草線「泉岳寺駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  白金高輪エリアのスタジオは泉岳寺駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。泉岳寺駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">少人数制スタジオは早めの予約がカギ</h3>
                <p className="text-warm-600 leading-relaxed">
                  白金高輪は少人数制やプライベートレッスンを重視するスタジオが多く、1クラスの定員が少ないため予約が早く埋まりがちです。特にマシンピラティスは定員4〜8名のスタジオが主流なので、希望の時間帯があれば早めに予約を。キャンセル待ち制度のあるスタジオを選ぶと安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  白金高輪エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  白金高輪エリアだけでなく、近隣の<Link href="/area/azabujuban/" className="text-warm-700 underline hover:text-warm-900">麻布十番</Link>、<Link href="/area/shirokanedai/" className="text-warm-700 underline hover:text-warm-900">白金台</Link>、<Link href="/area/mita/" className="text-warm-700 underline hover:text-warm-900">三田</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>白金高輪エリアの豆知識：</strong>白金高輪は美意識の高い方が多いエリアで、レッスン後にそのままカフェやショッピングに行く方もいます。着替えやメイク直しのセットを持参しておくと、レッスン後の時間も有効活用できます。おしゃれなウェアで通う方も多いのが白金高輪の特徴です。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額3,278円から通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• chocoZAP（月額 3,278円・使い放題）</li><li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li><li className="text-warm-700">• ピラティスK（月4回 13,420円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル・少人数制</h3><p className="text-warm-600 text-sm mb-4">マンツーマンや少人数で丁寧な指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO IVY（パーソナル専門）</li><li className="text-warm-700">• CORAL 白金（パーソナル対応）</li><li className="text-warm-700">• Habit Pilates（最大5名）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3><p className="text-warm-600 text-sm mb-4">白金高輪駅から徒歩すぐのスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Premium Yoga&Pilates（駅徒歩1分）</li><li className="text-warm-700">• Premium Machine Pilates（駅徒歩2分）</li><li className="text-warm-700">• zen place 高輪（泉岳寺駅徒歩4分）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回からスタート。最低2〜3ヶ月継続で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回がおすすめ。3〜6ヶ月で目に見える変化が期待。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的に応じてスタジオを選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">白金高輪エリアの料金相場はグループ月4回で9,600円〜15,400円、パーソナルは1回6,250円〜が相場。chocoZAPなら月額3,278円で利用可能。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">多くのスタジオで体験レッスンを実施しています。zen placeは500円〜と気軽に試せるのでまずは体験してみてください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">白金高輪は東京メトロ南北線と都営三田線が利用可能。白金台・麻布十番・三田も徒歩圏内で、閑静な高級住宅街に位置する港区の落ち着いたエリアです。レッスン後にカフェでくつろぐ時間も楽しめます。</p></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は白金高輪のおすすめピラティススタジオ12選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">白金高輪は東京メトロ南北線・都営三田線が利用でき、白金台・麻布十番・三田にもアクセスしやすい港区の閑静な高級住宅街。駅徒歩1分のPremium Yoga&Pilatesから、パーソナル専門のSTUDIO IVY、コスパ抜群のchocoZAPまで多彩な選択肢があります。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ体験レッスンに足を運んで、自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">白金高輪エリアには体験レッスンを実施しているスタジオが多数。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="shirokanatakanawa" areaName="白金高輪" />

      <RelatedAreas currentSlug="shirokanatakanawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
