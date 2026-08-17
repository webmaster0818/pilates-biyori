// スタジオごとのGoogle口コミの要約。
//
// ⚠️ ここに口コミ本文を転載してはいけない。載せるのは編集部が書いた要約のみ。
//    Googleの口コミ本文をそのまま保存・配信することは利用規約上できないため、
//    「要約を載せる／その旨を明記する／出典（Googleマップ）へリンクする」の3点で成立させている。
//
// ⚠️ 要約は必ず店舗ごとに書き分ける。使い回しは禁止。
//    以前この枠には編集部が用意した定型文が入っており、同じ本文が90店舗で共用されていた。
//    それは「その店の口コミの要約」ではないので、実在の口コミを読んで書き直した。
//
// ⚠️ 店名の照合を通っていない店舗は載せない。
//    店名検索だけでは別の店に当たる（実測: OUTLINE上野店→上野マルイ、
//    ビーコンセプト目黒店→家具店BoConcept、UNDEUX梅田→UNDEUX銀座）。
//    照合できなかった店舗は口コミを持たせず、Googleマップへの導線だけを出す。

export type StudioReview = {
  name: string
  summary: string
  rating: number
  userRatings: number
  mapsUri: string
  googleName: string
  fetchedAt: string
}

export const STUDIO_REVIEWS: Record<string, StudioReview> = {
  "the SILK 八重洲店": {"name": "the SILK 八重洲店", "summary": "白を基調とした女性専用の空間と、20台前後のマシンが並ぶスタジオの雰囲気に触れる声が多い。音楽に合わせて動くレッスン形式で、運動習慣がない状態から初心者体験で通い始めたという投稿が目立つ。フィッティングルームなど設備面の評価も挙がっている。", "rating": 4.7, "userRatings": 444, "mapsUri": "https://maps.google.com/?cid=1925666839397398847&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "ピラティススタジオ the SILK東京八重洲店", "fetchedAt": "2026-08-17"},
  "ピラティスガーデン銀座": {"name": "ピラティスガーデン銀座", "summary": "少人数制で自分のペースで進められた、という声が中心。通い始めて1〜2か月で引き締まりを実感したという投稿や、最初は体幹が弱くできなかった動きが変わったという声がある。", "rating": 4.8, "userRatings": 18, "mapsUri": "https://maps.google.com/?cid=6594196319052079663&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "ピラティスガーデン", "fetchedAt": "2026-08-17"},
  "バース ピラティス スタジオ 銀座": {"name": "バース ピラティス スタジオ 銀座", "summary": "完全個室のパーソナル形式である点への評価が中心。グループでは体の硬さが気になったが個室で気にせず受けられた、という声や、姿勢改善・腰痛・マタニティ・産後ケアといった目的別プログラムへの言及がある。", "rating": 4.8, "userRatings": 15, "mapsUri": "https://maps.google.com/?cid=26482155219641250&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "バース ピラティス スタジオ 銀座店", "fetchedAt": "2026-08-17"},
  "Pilates Studio excel 日本橋店": {"name": "Pilates Studio excel 日本橋店", "summary": "初心者への説明が丁寧で、自分の姿勢や体の使い方の癖に気づけたという声が多い。負荷を調整できる点やプログラムの種類の多さ、季節ごとのオリジナルレッスンにも触れられている。", "rating": 4.9, "userRatings": 141, "mapsUri": "https://maps.google.com/?cid=5545775409978311411&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "Pilates Studio excel 日本橋店", "fetchedAt": "2026-08-17"},
  "the SILK 銀座一丁目店": {"name": "the SILK 銀座一丁目店", "summary": "グループとパーソナルの両方を受けられる点と、窓があるスタジオの清潔感への言及が中心。マタニティで1対1の調整を受けた、日常の癖が矯正されたという声もある。", "rating": 4.8, "userRatings": 301, "mapsUri": "https://maps.google.com/?cid=12599402492869321500&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "ピラティススタジオ the SILK銀座一丁目店", "fetchedAt": "2026-08-17"},
  "ピラティス sloths（スロース）": {"name": "ピラティス sloths（スロース）", "summary": "レッスン中に何度もアジャスト（姿勢の修正）が入る点への評価が中心。バレエの動きを取り入れたレッスンなど、種類の幅にも触れられている。", "rating": 4.7, "userRatings": 46, "mapsUri": "https://maps.google.com/?cid=4419477811584789820&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "マシンピラティスRintosull 戸越公園店", "fetchedAt": "2026-08-17"},
  "CLUB PILATES 烏丸御池店": {"name": "CLUB PILATES 烏丸御池店", "summary": "落ち着いた雰囲気と、インストラクターの声かけへの評価が中心。月8回コースを2か月続けて体の変化を実感したという声や、年齢が高い利用者に対して安全面に配慮があったという投稿がある。", "rating": 4.9, "userRatings": 52, "mapsUri": "https://maps.google.com/?cid=18158155952539761685&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "CLUB PILATES 烏丸御池", "fetchedAt": "2026-08-17"},
  "REIBELLE 京都北山店": {"name": "REIBELLE 京都北山店", "summary": "定員が最大17名でゆったり受けられる点と、シャワー室にタオルが備わるなど設備面への言及が中心。開業して新しい建物であることにも触れられている。", "rating": 4.9, "userRatings": 99, "mapsUri": "https://maps.google.com/?cid=11310758769440709836&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "REIBELLE(レイベル) ピラティススタジオ京都北山店", "fetchedAt": "2026-08-17"},
  "the SILK 新宿店": {"name": "the SILK 新宿店", "summary": "初心者にも分かるように動きを説明してもらえた、という声が中心。内装やドリンク無料などの環境面、無料体験から入会した経緯への言及が多い。反り腰を気にして始めた投稿もある。", "rating": 4.9, "userRatings": 466, "mapsUri": "https://maps.google.com/?cid=7280635253342045933&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "ピラティススタジオ the SILK新宿店", "fetchedAt": "2026-08-17"},
  "ピラティスK 久屋大通パーク店": {"name": "ピラティスK 久屋大通パーク店", "summary": "レッスンごとに音楽が変わり、リズミカルに動く形式が楽しいという声が中心。どこに効くか・どこを意識するかを繰り返し伝えてもらえた点や、駅からの近さにも触れられている。", "rating": 4.8, "userRatings": 140, "mapsUri": "https://maps.google.com/?cid=3173018328679824046&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "ピラティスK 久屋大通パーク店", "fetchedAt": "2026-08-17"},
  "ピラティスK 神戸三宮店": {"name": "ピラティスK 神戸三宮店", "summary": "手ぶらで通える点と、体験時に無理な勧誘がなかったという声が中心。初心者向けレッスンの強度は程よく、サポートが付くため恥ずかしさなく受けられたという投稿がある。", "rating": 4.8, "userRatings": 176, "mapsUri": "https://maps.google.com/?cid=9016311513391151552&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "ピラティスK 神戸三宮店", "fetchedAt": "2026-08-17"},
  "マシンピラティス": {"name": "マシンピラティス", "summary": "体の使い方を細かく教わることで日々の姿勢が変わった、という声が中心。体重は変わらないのに痩せたと言われた、肩こりが軽くなったという投稿や、自分では気づかなかった体の癖を知れたという声がある。", "rating": 4.9, "userRatings": 34, "mapsUri": "https://maps.google.com/?cid=11665792620159443275&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "パーソナルマシンピラティスSAKURA五反田店", "fetchedAt": "2026-08-17"},
  "PILATES × YOGA": {"name": "PILATES × YOGA", "summary": "ヒアリングをもとに整体とマシンピラティスを組み合わせる進め方への言及が中心。パーソナル形式で細かく見てもらえる安心感や、姿勢の悪さからくる腰の痛みが軽くなったという声がある。", "rating": 4.9, "userRatings": 96, "mapsUri": "https://maps.google.com/?cid=10006111168602647033&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "La pilates 目黒店", "fetchedAt": "2026-08-17"},
  "zen place pilates 福岡天神": {"name": "zen place pilates 福岡天神", "summary": "日光が入るスタジオの環境と、マットとマシンを併用できる点への言及が中心。パーソナルが講師2人体制であることへの評価や、20回以上通って15回目あたりから変化を実感したという声がある。", "rating": 5, "userRatings": 93, "mapsUri": "https://maps.google.com/?cid=13710889017917986075&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "zen place pilates 福岡天神", "fetchedAt": "2026-08-17"},
  "ピラティス＆ヨガ": {"name": "ピラティス＆ヨガ", "summary": "開放感のあるスタジオ（窓から見える桜など）への言及が中心。スタッフの知識の豊富さや、運動不足解消のつもりで始めたが体と向き合う時間になった、という声がある。", "rating": 4.9, "userRatings": 52, "mapsUri": "https://maps.google.com/?cid=10739327055546849476&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", "googleName": "zen place ピラティス 不動前", "fetchedAt": "2026-08-17"},
}
