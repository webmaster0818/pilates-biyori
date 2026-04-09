import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス渋谷おすすめ12選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '渋谷エリアのおすすめピラティススタジオ12選を徹底比較。マシンピラティス、パーソナル、女性専用、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,渋谷,東京,スタジオ,おすすめ,マシンピラティス,パーソナル,女性専用,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 渋谷',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 210,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: 'MIYASHITA PARK正面の好立地。マットもマシンも両方受けられるのが嬉しい。全国140スタジオ相互利用できるのも便利。' },
      { author: 'T.S', rating: 5, date: '2週間前', text: '男性もOKなので夫婦で通っています。インストラクターの質が高く、毎回新しい発見があります。' },
      { author: 'A.Y', rating: 4, date: '3週間前', text: '月4回9,625円〜は渋谷エリアではかなりリーズナブル。体験レッスンで気軽に始められました。' },
    ],
    price: '月4回 9,625円〜', trial: '体験レッスンあり',
    features: ['マットグループ', 'MIYASHITA PARK正面5F', '男性OK', '全国140スタジオ相互利用可'],
    description: '全国140スタジオ以上を展開するzen placeの渋谷スタジオ。MIYASHITA PARK正面5Fに位置し、マットピラティスとマシンピラティスの両方が受けられる総合型スタジオ。男性も利用可能で、月4回9,625円〜とリーズナブル。全国のzen placeスタジオを相互利用できるのも大きな魅力。',
    access: 'MIYASHITA PARK正面 5F',
    address: '東京都渋谷区（MIYASHITA PARK正面5F）',
    popularPlan: { name: 'マットグループ月4回プラン', description: 'マット・マシン両対応。全国140スタジオ相互利用可。', price: '月4回 9,625円（税込）〜' },
    options: ['月4回プラン（9,625円〜）', '月6回プラン', 'フリー（通い放題）プラン', 'プライベートレッスン追加'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リラックス'] },
    basicInfo: { hours: '平日 7:00〜22:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['マットスタジオ', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'the SILK 渋谷',
    image: '/images/pilates3.jpg',
    rating: 4.8, reviewCount: 170,
    reviews: [
      { author: 'R.H', rating: 5, date: '1週間前', text: '音楽に合わせてマシンピラティスができる新感覚スタジオ。渋谷駅徒歩2分で通いやすい！' },
      { author: 'S.N', rating: 5, date: '2週間前', text: '女性専用なので安心。暗闘の中で音楽に没入しながらトレーニングできるのが最高。' },
      { author: 'Y.M', rating: 4, date: '3週間前', text: '月4回12,980円〜で始められました。おしゃれな空間でモチベーションが上がります。' },
    ],
    price: '月4回 12,980円〜', trial: '体験レッスンあり',
    features: ['女性専用マシン', '渋谷駅徒歩2分', '音楽×ピラティス', '月4回12,980円〜'],
    description: '音楽とマシンピラティスを融合した女性専用スタジオ。渋谷駅徒歩2分の好立地で、暗闇×音楽の非日常空間で楽しみながらボディメイク。リフォーマーを使用した本格マシンピラティスを月4回12,980円〜で提供。',
    access: '渋谷駅 徒歩2分',
    address: '東京都渋谷区（渋谷駅徒歩2分）',
    popularPlan: { name: '月4回プラン', description: '音楽×暗闇の非日常空間でマシンピラティス。', price: '月4回 12,980円（税込）〜' },
    options: ['月4回プラン（12,980円〜）', '月8回プラン', '通い放題プラン', '体験レッスン'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', 'ストレス発散', '美容'] },
    basicInfo: { hours: '平日 7:00〜22:00 / 土日祝 8:00〜20:00', closed: '不定休', facilities: ['リフォーマーマシン', 'パウダールーム', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ピラティスK 渋谷店',
    image: '/images/pilates4.jpg',
    rating: 4.6, reviewCount: 150,
    reviews: [
      { author: 'H.A', rating: 5, date: '1週間前', text: '女性専用のマシングループレッスン。月4回11,220円〜で、予約も取りやすく続けやすい。' },
      { author: 'C.W', rating: 4, date: '2週間前', text: 'ボディメイクに特化したプログラムが豊富。渋谷駅から近くて仕事帰りに通いやすい。' },
      { author: 'M.U', rating: 4, date: '1ヶ月前', text: 'スタジオがきれいで清潔感がある。インストラクターも丁寧で初心者でも安心でした。' },
    ],
    price: '月4回 11,220円〜', trial: '体験レッスンあり',
    features: ['女性専用マシングループ', '月4回11,220円〜', 'ボディメイク特化', '渋谷駅近'],
    description: '女性専用のマシンピラティス専門グループレッスンスタジオ。全国展開の実績あるスタジオで、ボディメイクに特化したプログラムが豊富。月4回11,220円〜のリーズナブルな価格設定。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回メンバー', description: 'ボディメイク特化の女性専用マシングループ。', price: '月4回 11,220円（税込）〜' },
    options: ['月4回メンバー（11,220円〜）', '月8回メンバー', '通い放題メンバー', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['リフォーマーマシン', 'パウダールーム', 'ロッカー', '更衣室'] },
  },
  {
    name: 'Rintosull 渋谷',
    image: '/images/pilates2.jpg',
    rating: 4.5, reviewCount: 120,
    reviews: [
      { author: 'K.T', rating: 5, date: '2週間前', text: 'LAVA系列で安心感がある。女性専用マシンピラティスが月4回8,800円〜はかなりお得！' },
      { author: 'E.O', rating: 4, date: '3週間前', text: '女性専用で清潔感があり、スタジオの雰囲気が良い。マシンピラティスが初めてでも丁寧に教えてもらえた。' },
      { author: 'N.I', rating: 4, date: '1ヶ月前', text: 'スクリーンを見ながらだとフォームが確認しやすい。料金も渋谷エリアでは最安クラス。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用マシン', 'LAVA系列', '月4回8,800円〜', 'スクリーン指導'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。大型スクリーンの映像とインストラクターのダブル指導で、正しいフォームを習得できる独自メソッド。月4回8,800円〜と渋谷エリア最安クラスの価格設定。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: 'LAVA系列の女性専用マシンピラティス。スクリーン+インストラクターのダブル指導。', price: '月4回 8,800円（税込）〜' },
    options: ['月4回プラン（8,800円〜）', '月8回プラン', '通い放題プラン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '姿勢改善', 'ボディメイク', '運動不足解消'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['リフォーマーマシン', '大型スクリーン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'CLUB PILATES 渋谷',
    image: '/images/pilates3.jpg',
    rating: 4.6, reviewCount: 95,
    reviews: [
      { author: 'D.K', rating: 5, date: '1週間前', text: '最大12名のグループレッスンで程よい人数。無料体験があるので気軽に始められました。' },
      { author: 'R.M', rating: 4, date: '2週間前', text: '月4回10,890円〜で本格的なマシンピラティスが受けられる。レベル分けがしっかりしている。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: 'アメリカ発の世界的ブランド。プログラムの質が高く、インストラクターも経験豊富。' },
    ],
    price: '月4回 10,890円〜', trial: '無料体験',
    features: ['最大12名グループ', '月4回10,890円〜', '無料体験あり', '世界的ブランド'],
    description: 'アメリカ発の世界的ピラティスブランド。最大12名のグループレッスンで、レベル別にクラスが分かれているため初心者から上級者まで対応。月4回10,890円〜。無料体験レッスンあり。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: '最大12名のグループレッスン。レベル別クラス。', price: '月4回 10,890円（税込）〜' },
    options: ['月4回プラン（10,890円〜）', '月8回プラン', '通い放題プラン', '無料体験レッスン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['体幹強化', '姿勢改善', 'ボディメイク', '柔軟性向上'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 8:00〜18:00', closed: '不定休', facilities: ['リフォーマーマシン', '各種ピラティス器具', 'ロッカー', '更衣室'] },
  },
  {
    name: 'STUDIO IVY 渋谷',
    image: '/images/pilates4.jpg',
    rating: 4.8, reviewCount: 75,
    reviews: [
      { author: 'S.A', rating: 5, date: '1週間前', text: '完全個室パーソナルなので人目を気にせず集中できる。月2回15,000円〜で無理なく続けられる。' },
      { author: 'K.N', rating: 5, date: '2週間前', text: 'マンツーマンで自分の体に合わせたプログラムを組んでもらえる。効果の実感が早い。' },
      { author: 'M.H', rating: 4, date: '1ヶ月前', text: '個室なのでリラックスして受けられる。インストラクターの知識が豊富で信頼できる。' },
    ],
    price: '月2回 15,000円〜', trial: '体験レッスンあり',
    features: ['完全個室パーソナル', '月2回15,000円〜', 'マンツーマン指導', 'オーダーメイドプログラム'],
    description: '完全個室のパーソナルピラティススタジオ。一人ひとりの体の状態や目標に合わせたオーダーメイドプログラムを提供。月2回15,000円〜で、プライベートな空間で本格的なマシンピラティスが受けられる。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月2回プラン', description: '完全個室のパーソナルマシンピラティス。', price: '月2回 15,000円（税込）〜' },
    options: ['月2回プラン（15,000円〜）', '月4回プラン', '月8回プラン', '体験レッスン'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性70% / 男性30%', purpose: ['姿勢改善', '腰痛改善', 'ボディメイク', 'パフォーマンス向上'] },
    basicInfo: { hours: '平日 8:00〜22:00 / 土日祝 8:00〜20:00', closed: '不定休', facilities: ['完全個室', 'リフォーマーマシン', '各種ピラティス器具', '更衣室'] },
  },
  {
    name: 'ELEMENT 渋谷',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 85,
    reviews: [
      { author: 'T.K', rating: 5, date: '1週間前', text: 'マンツーマン30分で集中できる。短時間なので仕事の合間にも通いやすい。' },
      { author: 'A.M', rating: 4, date: '2週間前', text: '月4回22,000円は安くはないが、マンツーマンの質を考えれば納得。しっかり効果が出る。' },
      { author: 'H.S', rating: 5, date: '1ヶ月前', text: '30分で効率よくトレーニングできる。忙しい人にぴったり。' },
    ],
    price: '月4回 22,000円', trial: '体験レッスンあり',
    features: ['マンツーマン30分', '月4回22,000円', '短時間集中', '効率重視'],
    description: 'マンツーマン30分の短時間集中型ピラティススタジオ。忙しい方でも効率よくトレーニングできる。月4回22,000円で、パーソナルならではの丁寧な指導が受けられる。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: 'マンツーマン30分の短時間集中パーソナル。', price: '月4回 22,000円（税込）' },
    options: ['月4回プラン（22,000円）', '月8回プラン', '体験レッスン'],
    userProfile: { ageRange: '30代〜40代が中心', genderRatio: '女性65% / 男性35%', purpose: ['ボディメイク', '運動不足解消', '体幹強化', '姿勢改善'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['パーソナルスペース', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ピラティスミラー 渋谷',
    image: '/images/pilates3.jpg',
    rating: 4.5, reviewCount: 65,
    reviews: [
      { author: 'N.K', rating: 5, date: '2週間前', text: '女性専用で安心。プライベート30分4,400円〜はパーソナルとしてはかなりお得。' },
      { author: 'R.S', rating: 4, date: '3週間前', text: '30分でサクッと受けられるのが嬉しい。インストラクターが丁寧で初心者にもおすすめ。' },
      { author: 'Y.O', rating: 4, date: '1ヶ月前', text: 'スタジオが清潔で居心地が良い。女性専用なのでリラックスして通えます。' },
    ],
    price: 'プライベート30分 4,400円〜', trial: '体験レッスンあり',
    features: ['女性専用', 'プライベート30分4,400円〜', '都度払い可', 'リーズナブル'],
    description: '女性専用のピラティススタジオ。プライベートレッスン30分4,400円〜と、パーソナルピラティスとしてはリーズナブルな価格設定。短時間で効率よくトレーニングしたい女性におすすめ。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'プライベート30分', description: '女性専用のマンツーマンレッスン。', price: 'プライベート30分 4,400円（税込）〜' },
    options: ['プライベート30分（4,400円〜）', '月額プラン', '回数券', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['プライベートスペース', 'ピラティス器具', 'ロッカー', '更衣室'] },
  },
  {
    name: 'YUZU 渋谷',
    image: '/images/pilates4.jpg',
    rating: 4.6, reviewCount: 50,
    reviews: [
      { author: 'L.M', rating: 5, date: '2週間前', text: '女性専用のパーソナルマシンピラティス。一人ひとりに合わせたプログラムが魅力的。' },
      { author: 'K.H', rating: 4, date: '1ヶ月前', text: '女性専用なので安心して通える。マシンを使ったパーソナル指導で効果を実感しやすい。' },
      { author: 'A.T', rating: 5, date: '1ヶ月前', text: 'インストラクターが親切で知識豊富。自分の体の癖を見極めて的確にアドバイスしてくれる。' },
    ],
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['パーソナルマシン', '女性専用', 'オーダーメイド', '丁寧な指導'],
    description: '女性専用のパーソナルマシンピラティススタジオ。一人ひとりの体の状態に合わせたオーダーメイドプログラムを提供。マシンを使ったマンツーマン指導で効果的なトレーニングが可能。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'パーソナルプラン', description: '女性専用マシンパーソナルピラティス。', price: 'お問い合わせ' },
    options: ['パーソナルプラン', '回数券', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', '体質改善', '美容'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['パーソナルスペース', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'BDC PILATES 渋谷（近隣）',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 90,
    reviews: [
      { author: 'P.S', rating: 5, date: '1週間前', text: 'ダンサー御用達のスタジオ。ピラティスの質がとにかく高い。体の使い方が根本から変わった。' },
      { author: 'M.N', rating: 5, date: '3週間前', text: 'プロのダンサーも通うスタジオだけあって、インストラクターのレベルが段違い。' },
      { author: 'R.K', rating: 4, date: '1ヶ月前', text: 'ダンス経験がなくても大丈夫。基礎からしっかり教えてもらえて、体の変化を感じます。' },
    ],
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['ダンサー御用達', '高品質指導', '渋谷近隣', '本格派'],
    description: 'ダンサー御用達の本格ピラティススタジオ。渋谷近隣エリアに位置し、プロのダンサーやパフォーマーも通う高品質な指導が特徴。ピラティスの本質を追求したい方におすすめ。',
    access: '渋谷近隣エリア',
    address: '東京都渋谷区（渋谷近隣）',
    popularPlan: { name: 'レギュラープラン', description: 'ダンサー御用達の本格ピラティス。', price: 'お問い合わせ' },
    options: ['レギュラープラン', '回数券', 'プライベートレッスン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['パフォーマンス向上', '体幹強化', '柔軟性向上', '姿勢改善'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['スタジオ', 'ピラティス器具', 'ロッカー', '更衣室'] },
  },
  {
    name: 'NATURAglam 渋谷（近隣）',
    image: '/images/pilates3.jpg',
    rating: 4.4, reviewCount: 60,
    reviews: [
      { author: 'J.M', rating: 5, date: '2週間前', text: '女性専用のヨガ&ピラティススタジオ。少人数制で丁寧に教えてもらえるのが嬉しい。' },
      { author: 'T.Y', rating: 4, date: '1ヶ月前', text: 'ヨガとピラティスの両方ができるので飽きない。アットホームな雰囲気も良い。' },
      { author: 'S.K', rating: 4, date: '1ヶ月前', text: '少人数制でインストラクターの目が行き届く。初心者でも安心して参加できます。' },
    ],
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['女性専用', 'ヨガ&ピラティス', '少人数制', '渋谷近隣'],
    description: '女性専用のヨガ&ピラティススタジオ。渋谷近隣エリアに位置し、少人数制でアットホームな雰囲気が魅力。ヨガとピラティスの両方を楽しめるので、気分や目的に合わせてレッスンを選べる。',
    access: '渋谷近隣エリア',
    address: '東京都渋谷区（渋谷近隣）',
    popularPlan: { name: 'レギュラープラン', description: '女性専用のヨガ&ピラティス。少人数制。', price: 'お問い合わせ' },
    options: ['月額プラン', '回数券', 'ヨガクラス', 'ピラティスクラス', '体験レッスン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['リラックス', '柔軟性向上', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['スタジオ', 'ヨガマット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'CALDO 渋谷',
    image: '/images/pilates4.jpg',
    rating: 4.4, reviewCount: 130,
    reviews: [
      { author: 'F.N', rating: 5, date: '1週間前', text: 'ホットヨガがメインだがピラティスクラスも充実。温かい環境で体がほぐれやすい。' },
      { author: 'W.K', rating: 4, date: '2週間前', text: '渋谷駅からアクセスしやすい。ホットヨガとピラティスを組み合わせて受けられるのが魅力。' },
      { author: 'C.M', rating: 4, date: '1ヶ月前', text: '施設が充実していて、ジムエリアも使える。総合的にコスパが良い。' },
    ],
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '温熱環境', '施設充実', '渋谷駅近'],
    description: 'ホットヨガ&ピラティスの総合スタジオ。温かい環境でのピラティスは体がほぐれやすく効果的。ホットヨガとピラティスを組み合わせたプログラムで、デトックスとボディメイクを同時に実現。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'レギュラープラン', description: 'ホットヨガ&ピラティスの総合プラン。', price: 'お問い合わせ' },
    options: ['月額プラン', '通い放題プラン', 'ホットヨガクラス', 'ピラティスクラス', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性85% / 男性15%', purpose: ['デトックス', 'ダイエット', '冷え性改善', 'ボディメイク'] },
    basicInfo: { hours: '平日 10:00〜22:30 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['ホットスタジオ', 'ピラティススタジオ', 'ジムエリア', 'ロッカー', '更衣室'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！渋谷エリアのスタジオはレベル別クラスがあり初心者も安心です。Rintosullはスクリーン指導で初心者に特におすすめ。CLUB PILATESもレベル別クラスが充実しています。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用リフォーマーを使ったトレーニング。マシンは初心者でもフォームが安定しやすくおすすめです。渋谷エリアはマシン専門スタジオが豊富です。' },
  { question: '渋谷エリアの料金相場は？', answer: 'グループ月4回で8,800円〜12,980円が相場。Rintosullは8,800円〜で最安クラス、zen placeは9,625円〜。パーソナルはピラティスミラーの30分4,400円〜が手頃です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回からスタート。慣れたら週2-3回に増やすとより効果的です。ELEMENTの30分レッスンなら忙しい方も週2回は続けやすいです。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。CALDOのホット環境なら発汗効果も期待できます。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。ウェアレンタルがあるスタジオも多いです。CLUB PILATESは無料体験があるので手ぶらで気軽に。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心です。NATURAglam渋谷なら両方受けられます。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilates渋谷、CLUB PILATES渋谷、ELEMENT渋谷、BDC PILATESは男性もOKです。the SILK、ピラティスK、Rintosull、ピラティスミラー、YUZU、NATURAglam は女性専用です。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。週2回なら1ヶ月半ほどで変化を感じる方も。パーソナルレッスンの方がより早く効果を実感しやすいです。' },
  { question: '無料体験ができるスタジオはありますか？', answer: 'CLUB PILATES渋谷は無料体験レッスンがあります。zen placeやthe SILKなども体験レッスンを用意しています。まずは気軽に体験してみましょう。' },
]

export default function ShibuyaPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス渋谷おすすめ12選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">渋谷</span></nav></div></section>
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「渋谷でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「自分に合うスタジオを見つけたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、JR山手線・東急東横線・東京メトロ銀座線・半蔵門線が乗り入れる渋谷駅周辺でおすすめのピラティススタジオ12選をまとめました。MIYASHITA PARKや渋谷スクランブルスクエアなど商業施設が集まる渋谷エリアは、仕事帰りや買い物ついでにも通いやすいピラティス激戦区です。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>渋谷でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>女性専用スタジオに通いたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスやパーソナルを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較して選びたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>グループ・パーソナルどちらが良いか迷っている</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">渋谷のおすすめピラティススタジオ12選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円以下から通える。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li><li className="text-warm-700">• CLUB PILATES（月4回 10,890円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用で安心</h3><p className="text-warm-600 text-sm mb-4">女性だけの空間で集中。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• the SILK（音楽×マシン）</li><li className="text-warm-700">• ピラティスK（マシングループ）</li><li className="text-warm-700">• Rintosull（LAVA系列）</li><li className="text-warm-700">• ピラティスミラー（プライベート30分4,400円〜）</li><li className="text-warm-700">• YUZU（パーソナルマシン）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナルで本格的に</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで効率よく。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO IVY（完全個室・月2回15,000円〜）</li><li className="text-warm-700">• ELEMENT（30分集中・月4回22,000円）</li><li className="text-warm-700">• ピラティスミラー（30分4,400円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月で効果を実感。グループレッスンで基礎を身につけましょう。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。パーソナルとグループの併用も効果的。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。ELEMENTの30分レッスンなら忙しい方でも続けやすい。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">リーズナブル</p><p className="text-sm text-warm-600 mb-4">月4回で1万円以下。グループレッスン中心。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Rintosull（月4回 8,800円〜）</li><li>• zen place pilates（月4回 9,625円〜）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">スタンダード</p><p className="text-sm text-warm-600 mb-4">充実のマシンピラティス。選択肢豊富。</p><ul className="text-sm text-warm-700 space-y-1"><li>• CLUB PILATES（月4回 10,890円〜）</li><li>• ピラティスK（月4回 11,220円〜）</li><li>• the SILK（月4回 12,980円〜）</li><li>• STUDIO IVY（月2回 15,000円〜）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル重視</h3><p className="text-3xl font-bold text-warm-800 mb-4">本格派</p><p className="text-sm text-warm-600 mb-4">マンツーマンで効果的に。</p><ul className="text-sm text-warm-700 space-y-1"><li>• ピラティスミラー（30分 4,400円〜）</li><li>• ELEMENT（月4回 22,000円）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的に応じて選びましょう。ボディメイク重視ならピラティスK、楽しさ重視ならthe SILK、本格派ならBDC PILATESがおすすめ。パーソナルで集中したいならSTUDIO IVYやELEMENTを検討。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">渋谷エリアのグループ月4回は8,800円〜12,980円が相場。パーソナルはピラティスミラーの30分4,400円〜が手頃。体験レッスンを活用して、無理なく続けられる価格帯を見つけましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">CLUB PILATESは無料体験あり。zen placeやthe SILKも体験レッスンを用意しています。複数のスタジオを体験して比較するのがおすすめ。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">渋谷はJR山手線・東急東横線・東京メトロ銀座線・半蔵門線など複数路線が利用可能な東京を代表するターミナル駅。MIYASHITA PARKや渋谷スクランブルスクエア周辺にスタジオが集中しており、仕事帰りや休日にもアクセスしやすいエリアです。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は渋谷のおすすめピラティススタジオ12選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">渋谷はJR山手線・東急東横線・東京メトロ銀座線・半蔵門線など複数路線が乗り入れる東京を代表するターミナル駅。若者の街として知られる渋谷区には、MIYASHITA PARK正面のzen place pilates、音楽×マシンのthe SILK、月4回8,800円〜のRintosull、無料体験ありのCLUB PILATES、完全個室のSTUDIO IVY、30分集中のELEMENTなど、個性豊かなスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">グループレッスンからパーソナルまで、女性専用から男性OKまで、幅広い選択肢があるのが渋谷エリアの魅力です。ぜひ自分に合うスタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">CLUB PILATESは無料体験あり。zen placeやthe SILKも体験レッスンを用意。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
