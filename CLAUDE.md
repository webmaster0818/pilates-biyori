# pilates-biyori — ピラティススタジオ比較

本番: **https://biyori-pilates.com/**（repo名と語順が逆。pilates-biyori.comは別物404）
Discord ch: `1487358680671326259` / deploy: out/ を rsync で pilates-biyori-deploy へ→両repo push→CF Pages（反映~40-60秒）

## ⚠️掲載レギュレーション（2026-06-12 MediaXAI共有・全掲載コンテンツに適用）
- **the SILK**: 薬機法・景表法遵守／体験のみを促す訴求NG／競合を陥れる訴求NG／第三者発信の言い回し必須／ブランド毀損NG／**「情報引用元」として公式サイトURLをテキストリンク添付**（対応済: 各紹介文に「情報引用元: the SILK公式サイト」＋StudioCardの公式リンク）
- **24/7ピラティス**: 表記は「24/7ピラティス」or「24/7Workout」（「247Pilates」「24/7 Pilates」NG）／料金は「〜」「から」必須（月2回14,500円〜等）／マット言及NG（マシン専門）／レンタル無料表記注意（体験時のみウェアレンタル可）／初回体験=無料・約60分（説明20分＋体験40分）／入会金不要
- **Pilates Mee**: 体験無料は「通常9,800円・**月末毎30名様限定**」表記／Pilates Mee（セミパーソナル最大3名）とPilates Mee Life（5人制少人数）は別業態・料金別／正式名称=ピラティスミー／運営=株式会社RiAGEL（シートで確認。エージェント調査のNAGELは誤読）／OPEN前店舗の記載NG（シートに注記）
- **zen place表現基準（2026-06-12 全文入手・準拠済み）**: zen placeの話をする場合NG→ インストラクター/トレーナー/先生=「エデュケーター」・トレーニング/運動=「エクササイズ/メソッド/ワーク」・鍛える=「強化する/アプローチする」・相互利用=「他店利用」・ピラティスはポーズと言わない（エクササイズ）・「ピラティスヨガ」NG（「ピラティス・ヨガ」中黒必須、zen話はピラティス先）・「〜になります」→です/ます・「〜たり」2回セットNG・ビジネスマン→ビジネスパーソン・ピラティスの歴史は「兵士のリハビリに用いられた」（「ために作られた」NG）・ヨガの呼吸は「主に腹式」（断言NG）・社名小文字「zen place」。**全zen placeブロック105ファイル修正済み**
- 全般: 評価★・口コミの捏造禁止（既存方針どおり）。キャンペーン価格は条件（限定数・期間）を併記

## 作業ログ

### 2026-06-11 MediaXAI依頼: 収益最大化の課題設定と戦略（ASP以外）
GSC実数診断:
- 28日: クリック66・表示8,358・平均36.7位・CTR 0.79%
- 表示が急増中（週150→3,654、3週で24倍）＝立ち上がり局面
- 主力はエリアページ（90日クリック65/304p）。記事57本はクリック12

**最大の課題: 提携スタジオ(ELEMENT/URBAN/BREST/Lucina/Celestia)入り62エリアページがほぼ全て30〜50位でクリックゼロ**（豊洲26.8/渋谷50.2/新宿64/二子玉川48.9位）。クリックが取れているのは非提携エリア（光が丘8.3位等）。

戦略をDiscordに報告済:
- Phase 0 = 提携エリアで15〜35位の約15ページ（海老名17.6/調布21.7/豊洲26.8/中野坂上30.4/高円寺31.2/錦糸町33.8…）を集中改修（独自データ図解・比較表・タイトルCTR・FAQ schema）
- Phase 1 = 近隣エリア相互リンク＋スタジオ名×駅クエリ（bdc二子玉川55位等）をページ内アンカーで回収＋残47エリア横展開
- Phase 2 = オンラインクラスター残6本＋211スタジオ調査の「料金白書」化で被リンク

MediaXAI「phase0進めてください」(2026-06-11 13:35)→実施。

### 2026-06-11 Phase 0実装（提携エリア15ページ集中改修）
- **対象15スラッグ**（GSC 28日・順位12〜42・表示15+の提携エリア）: toyosu/shimokitazawa/asakusa/nakano-sakaue/ebina/koenji/tamachi/takadanobaba/chofu/yoga-komazawa/nippori/otsuka/nishi-nippori/kinshicho/yoyogi-uehara
- **実装**: `components/AreaMarketComparison.tsx`（エリア掲載スタジオの実データを集計し全国211スタジオ調査SURVEYと対比＝体験無料率バー/平均評価バー/月額最安。出典・母数明記、解析不能表記は母数除外）＋ `scripts/enhance-area-phase0.py`（冪等パッチ: import＋PriceComparisonTable直後に挿入＋title【2026最新】→【2026年6月最新】・訴求を「料金・体験レッスン・マシン対応を比較！」へ）
- **⚠️数値検証で2バグ修正**（事実ベース原則）: ①`includes('0円')`は「3,300円」にマッチ（末尾00円）→無料判定は『無料』のみ＋parseYen \d{1,6}で「0円」を0円体験として拾う ②月額最安に「2,750円/回」回数券が混入→/月(額|\s*\d+回)/必須に。**生成数値は必ずビルド出力をgrepして元データと突合する**（minified HTMLは`<!-- -->`が挟まるためreplaceしてから）
- 注: エリアページは既に比較表(PriceComparisonTable)・FAQ schema完備で質が高い。今回の追加価値は「独自データ(一次情報)による差別化」
- デプロイ: out/→rsync→pilates-biyori-deploy 両repo push済

### 2026-06-11 Phase 1実装（MediaXAI「phase1もすすめたい！」）
`scripts/enhance-area-phase1.py`（冪等）で3点:
- **A. prefectureAreas.ts未登録54エリアを登録**（最高順位の光が丘も未登録＝相互リンク圏外だった）。エリア名はtitle・都道府県は掲載スタジオ住所の最頻値から抽出。⚠️抽出名4件手修正: kasukabe=春日部/soka=草加/chuo-rinkan=中央林間/**mizonokuchi=溝の口**（「の」がregexの区切りと衝突）
- **B. ToCスタジオ名ジャンプリンク**: TableOfContents に `studioNames?` prop追加→283ページで `studios.map((s)=>s.name)` を渡す。StudioCardの既存 `id="studio-N"` アンカーへリンク＝スタジオ名×駅の指名検索対策
- **C. AreaMarketComparison＋title改修を全62提携エリアへ横展開**（Phase0の15は冪等スキップ）
- 検証: hikarigaokaの関連リンク106本/二子玉川ToCアンカー18本(BDC含む)/渋谷・新宿に独自データ枠/タイトル正常

### 2026-06-11 5ブランド掲載（MediaXAI依頼）
対象: Dr.ピラティス(29店)/the SILK(44店)/24/7ピラティス(34店)/DAYS PILATES(2店)/**Pilates Mee=m-pilates.comの正式名**(132店)。全データ公式サイト取得=`data/new-brands-202606.json`＋`data/new-brands-mee-stores.json`。
- **第1弾完了: 既存エリア169店舗分**（新規挿入144＝page.tsx 126＋area-studios.ts 9、既掲載25スキップ）。`scripts/add-brands-202606.py`（冪等。駅名×都道府県一致で突合/rating・reviews付けない=捏造回避/挿入後に「おすすめN選」を実数へ更新）。ブランド画像=公式キャプチャ→`public/images/studios/{brand}.webp`
- ⚠️ハマり: ①既存配列の最終要素に末尾カンマが無いページがあり挿入後に構文エラー→`}\n{name:`間にカンマ補修パス ②薄いページ(`const studios = areaStudios[...]`)は文字列'const studios'を含むためA/B判定は**配列リテラル regex**で行う
- **zen place追加（同日MediaXAI追加依頼）**: 全133店舗取得=`data/new-brands-zenplace-stores.json`＋`scripts/add-zenplace-202606.py`。未掲載3エリア(nagoya/osaka/shirokanedai)に追加・107エリアは掲載済みスキップ（同エリア重複掲載防止のため「ページにzen placeが1つでもあればスキップ」の保守判定）
- **新規エリア第1弾完了（同日）**: `scripts/gen-new-areas-batch1.py`＝hongo-sanchomeテンプレをドナーに14エリア生成（sakaihigashi/minamimorimachi/oizumigakuen/omori/komagome/nishikasai/kamiooka/shonandai/tsudanuma/motoyawata/shin-urayasu/warabi/ayase/shukugawa）。各エリア=新ブランド店舗＋Web調査で実在確認した併設スタジオ2-3件（pilates K/Rintosull/URBAN CLASSIC/CLUB PILATES/個人系。エージェント3体で公式サイト確認済み）。area-studios.ts＋page.tsx＋prefectureAreas＋sitemap(375URL)。札幌3店舗はsapporoページへ統合、24/7三宮店は既存sannomiyaへ追加
- **新規エリア第2弾完了（2026-06-12未明、MediaXAI「明日分進めて」で前倒し）**: `scripts/gen-new-areas-batch2.py`で20エリア生成（shin-koiwa/kanamachi/takenotsuka/hibarigaoka/musashisakai/ningyocho/asakusabashi/jujo/mejiro/hatanodai/tsurumi/center-kita/kikuna/saginuma/yachiyodai/makuharihongo/abiko/saiin/tsukaguchi/nishitanabe）。併設スタジオは4エージェント並列調査（公式fetch確認済み・受付停止中のルルト鶴見と公式404の折は除外）。sitemap 395URL・Indexing API 20件
- **新規エリア第3弾完了（2026-06-13、MediaXAI「次工程進めて」）**: `scripts/gen-new-areas-batch3.py`で18エリア（Lucina4=higashikurume/minowa/atami/kyoto-yawata＋Mee系14=kiyose/kumegawa/kitami/aomono-yokocho/shintomicho/hakusan/nishi-ojima/keisei-koiwa/keisei-tateishi/shin-kemigawa/nakayama/hodogaya/maita/kamonomiya）。sitemap 419URL・Indexing 18/18。**新秋津・京成高砂は併設スタジオ確認できず見送り**（バックログへ）。⚠️熱海のルキナは**ホテル内の男女可フィットネス業態**（他店と異なる）→正直に明記して掲載。**StudioCard.image任意化＋誤デフォルト画像53件除去**（無関係スタジオにpilates-k.webpが付くbatch1/2由来の誤掲載を一括修正。本物ピラティスK8件は維持。batch3以降はブランド公式キャプチャがある場合のみimage付与）。教訓: 一文字エリア名(蕨/柏)をlen()フィルタで落とさない／nameとimageの対応はブロック単位で処理（行regexは前のスタジオ名を拾う）
- **新規エリア第4弾完了（2026-06-13）**: `scripts/gen-new-areas-batch4.py`で11エリア（大阪=都島/蒲生四丁目/塚本/深江橋、愛知=安城/新栄町、千葉=佐倉、茨城=守谷、福岡=大濠公園/西鉄二日市/茶山）。**Mee＋実在併設2件以上を確保できた駅のみ採用**。雑餉隈(該当なし)・酒田(1件)・千葉中央/蒲生越谷/下大利/大町西公園(Mee単独)は見送り→次バッチ。sitemap 430URL・Indexing 11/11。zen place栄はエデュケーター語彙準拠。⚠️Python文字列内のアポストロフィ(Li'a)はダブルクォートで囲む。新規エリア累計63/約100、残バックログ約30(Mee単独駅＋遠隔)。
- **残バックログ: 約65エリア**（Pilates Mee中心。circles: 円山公園/大通→札幌統合済み。乗換系・郊外駅）。`/opt/homebrew/bin/python3`でバックログ再計算可（CLAUDE.md本節のスクリプト参照）。**次バッチはこのbatch1スクリプトを複製してAREASを差し替えるのが最速**。⚠️新規スラッグは必ず既存ディレクトリ・prefectureAreas両方と衝突確認（sannomiyaは既存ページがあり登録済みだった）

### 2026-06-12 Phase 2実行（MediaXAI「進めよう！」）
- **①オンラインクラスター完成（ピラー+6本）**: ピラー=/articles/online-pilates/（本文に6記事へのクラスター導線表を追加・relatedArticles修正）。新規5本=`online-pilates-koka`(効果)/`online-pilates-ryokin`(料金・211調査比較)/`online-vs-studio-pilates`(比較)/`online-pilates-shoshinsha`(始め方)/`online-pilates-live-video`(形式比較)。**比較記事は新規でなく既存`pilates-online`を全面リライト**（旧8選=★捏造評価・終了済みサービス・古い料金を含んでいた→調査エージェントが公式確認した7サービスに刷新。YOGATIVE/Olulu終了も正直に記載。LEAN BODY料金は公式403で確認不可→「公式参照」表記。**zen place言及はエデュケーター等レギュレーション準拠**）
- **②全国ピラティス料金白書2026**: `/articles/pilates-ryokin-hakusho/`＝site-survey.ts(211スタジオ)の全データをメソドロジー・チャート4種(体験/月額/設備/評価)・「出典明記で引用歓迎」セクション付きで公開＝被リンク資産。月額二極化(〜1万38% vs 1.3-1.6万34%)を主見出しに
- sitemap 401URL・Indexing API 8/8成功。⚠️ピラーのrelatedArticlesにあった`online-pilates-osusume`は未作成slugだった→pilates-onlineに差し替え
- 残: バックログ新規エリア約65（並走継続）。白書の被リンク営業（相互リンク交渉時の提案素材）は問い合わせフォーム経由で運用
- `/contact/`（app/contact/page.tsx＋components/ContactForm.tsx）→ POST `/api/contact` → pilates-biyori-deploy の `functions/api/contact.js` → Discord Webhook通知（MediaXAI＋tomomiメンション）
- footer「お問い合わせ（広告出稿・掲載）」（旧/#aboutアンカーを置換）/sitemapに/contact/追加
- **⚠️rsyncは`--exclude="functions"`必須**（--deleteでFunction消失。他Botがpilatesをデプロイする時も同様）
- **✅稼働開始(2026-06-12 15:18)**: MediaXAIがWebhook作成＋CF env var設定＋再デプロイ→tomomiテストPOST 200・Discord通知着弾確認。全経路正常。返信は webmaster@mediax.biz（差出人名=Pilates-Biyori編集部、gsc-api/send_reply.py --from-name）
- 返信メールは既存の webmaster@mediax.biz 基盤を共用（`gsc-api/send_reply.py --from-name "Pilates-Biyori編集部"`）

**⚠️発見: 19エリアページの本文にU+FFFD文字化けが大量に存在（計1,100カ所超）**: oita/komazawa-daigaku/ikejiri-ohashi/chuo-rinkan/tsunashima/kasukabe/wakoshi/chitose-funabashi/kyodo/toyonaka/kugayama/kanayama/honancho/nijo/shinjuku/shin-yurigaoka/fujimino/sakura-shinmachi/soka。**ページ生成時（初回コミット時点）から壊れており**git履歴に正常版なし。
**✅修復完了(2026-06-11 15:50頃、MediaXAI承認後)**: `scripts/repair-mojibake.py`＝クリーン271ページをコーパスに化け箇所の前後文脈で照合復元（候補が単一or80%+収束時のみ採用）→固有名詞辞書→残り74カ所は文脈で個別辞書化。**全489run修復・FFFD残ゼロ**、本番5ページで確認済み。副次修正:「。。」重複句点3ファイル10カ所(nara/otsu等、化けとは別の既存問題)。教訓: 同型テンプレページ群なら壊れページはサイト自身の正常文から復元できる（捏造回避）。

### 2026-06-14 ①準勝ち筋押し上げ＋②新規エリア第5弾＋ブルーオーシャン横展開（MediaXAI「①→②→横展開」）
- **①準勝ち筋5エリア押し上げ**（豊洲/高円寺/調布/代々木上原/海老名＝20〜30位）: `scripts/boost-winners-202606.py`（冪等）。レバー=(a)近隣18ページ→ターゲットへの内部リンクcallout(`boost-nav-202606`マーカー、`.kicker`等は使わずchip型Link) (b)料金白書`content/articles/pilates-ryokin-hakusho.md`に「エリア別の料金を詳しく見る」節追加で5エリアへ相互リンク (c)更新日→2026年06月14日・料金相場見出し→6月。**JSXコメント`{/* */}`は本番HTMLで消える**のでマーカーcountは0になる→見出しテキストで描画検証。
- **②新規エリア第5弾9エリア**: `scripts/gen-new-areas-batch5.py`（batch4方式）。小山/上福岡/新中野/東中野/富士見台/和田町/大阪上本町/阪急伊丹/西鉄久留米。**東船橋はMee単独(徒歩15分圏に他0)で一旦SKIP**。Life店(小山/西鉄久留米/雑餉隈/下大利)はMEE_OVERRIDEで料金上書き。
- **東船橋→ブルーオーシャン転換**（MediaXAI「1店だけ＝逆に低競合では？」）: 薄い1店ページは回避しつつ、**「駅すぐMee＋徒歩圏の近隣駅クラスタを正直な距離表記で掲載＋同県RelatedAreas相互リンク」**構成なら低競合クエリを取れる。東船橋=funabashiクラスタ流用で作成。さらに横展開=`scripts/gen-blueocean-202606.py`で7駅（京成高砂/新秋津/雑餉隈/下大利/蒲生/千葉中央/大町西公園）。各駅、**4体調査エージェントで近隣実在スタジオ＋"対象駅からの正直な距離(○駅・徒歩○分、徒歩圏外なら明記)"を確認**してから掲載。
- **累計エリア80**（30→80）。残Mee単独駅は酒田等地方少数のみ＝面拡大は一区切り。次は6月末GSCで①押し上げの効果測定。
- **Indexing API**: `~/.openclaw/workspace/secrets/gsc-token.json`はindexingスコープ込み→`AuthorizedSession(creds).post("https://indexing.googleapis.com/v3/urlNotifications:publish",json={"url":U,"type":"URL_UPDATED"})`で送信可（全バッチで使用）。詳細はメモリ gsc-indexing-and-inspection-api 参照。
  - ⚠️gsc-token.jsonは**OAuthユーザー資格**（service_accountではない）。`from google.oauth2.credentials import Credentials`＋`Credentials(token,refresh_token,token_uri,client_id,client_secret,scopes)`で読む。実行Pythonは`~/.openclaw/workspace/gsc-api/venv/bin/python`（google lib入り）。

### 2026-06-17 ③指名/エリアクエリ回収＝内部リンク・クラスタ化（MediaXAI「進めよう」）
- 上位機会15エリア（hamamatsucho/akihabara/meguro/aoyama-itchome/futakotamagawa/shimokitazawa/iidabashi/asakusa/shibuya/oji/esaka/seijo-gakuenmae/kagurazaka/nakano-sakaue/ochanomizu）の`<RelatedAreas>`直前に**相互リンクcalloutセクション**を挿入（料金白書＋全エリア索引＋近隣上位3駅へのchip型Link、`boost-nav-202606`マーカー）。既設3ページ(shimokitazawa/shibuya/nakano-sakaue)は冪等スキップ→**12ページ挿入**。描画検証=「料金相場・近隣エリアと比べる」見出しでgrep。Indexing API 12/12送信。
- **⚠️デプロイ機構の実体（重要）**: CF Pagesは**deploy repo `webmaster0818/pilates-biyori-deploy`**（SSHエイリアス`github.com-webmaster0818-pilates-biyori-deploy`）に直結。ソースrepo `pilates-biyori`へpushしても本番は更新されない。**必ず out/→rsync(--exclude=functions)→deploy repoでcommit&push**。今回deploy dirの`.git`が消失していた→`git init`→`git remote add origin <上記URL>`→`git fetch`→`git reset origin/main`(mixed)→`git add -A && commit && git push origin HEAD:main`で復元。次回も.git無ければこの手順。

### 2026-06-20 集客再策定(フルフュージョン)→P1/P2実行（MediaXAI「フルフュージョンで」「進めて」）
GSC28日=クリック99・表示13,575・平均39.1位（表示増だが大半3-6ページ目）。**フルフュージョン(claude+codex+gemini)で再策定→「被リンクより先に機会ページへの選択と集中」で3者合意**。
- **P1(トリアージ＋カニバリ監査)**: 機会ページを表示×1ページ目への近さでスコア化(最優先=hamamatsucho 578imp/14.8、pos<20の勝ち筋=yagoto/kitaoji/chatan/toranomon/izumi/oji/ebina/ochanomizu/kitahama)。**カニバリ41件=主因①trailing-slash重複(/area/kamata と /area/kamata/ 両方index)②隣接エリア食い合い(飯田橋→iidabashi/kagurazaka 等)**。
- **P2(白書一次データ注入)**: 機会ページの多くが`AreaMarketComparison`(白書211調査対比=体験無料率/平均評価/月額最安)未注入だった→勝ち筋19エリアに一括注入(phase0の注入ロジック・冪等・PriceComparisonTable直後)。Indexing 19/19・本番確認。
- ⚠️**デプロイ事故と教訓**: `rsync -a --delete out/ ../pilates-biyori-deploy/` で**`--exclude='.git'`を付け忘れ deploy repoの.gitを削除**→「not a git repository」。復元=git init→remote add(git@github.com-webmaster0818-pilates-biyori-deploy:webmaster0818/pilates-biyori-deploy.git)→fetch→reset --mixed origin/main→commit→push origin HEAD:main。**今後pilatesのrsyncは必ず `--exclude='.git' --exclude='functions'` 両方付ける**。CF Pagesはdeploy repo直結。
- 残: P2続き(結論ファースト＋無料体験/料金/初心者の意図別CTA)・trailing-slash統一・記事クラスタ→機会ページ内部リンク・P5被リンク営業(高品質化後)。効果は1-2週GSC測定。

### 2026-06-20 ①結論ファースト＋検索意図別CTA注入（MediaXAI「①進めよう」）
- `components/AreaConclusion.tsx`新設＝**結論ファースト要約ボックス**(「まず結論」バッジ＋「{エリア}のピラティスは{N}社を比較。{free}社が無料体験に対応、月額は最安{min}円〜。」をstudios実データから集計＝AreaMarketComparison同様の安全パース・捏造なし)＋**検索意図別CTA3つ**(無料体験で選ぶ→#trial-guide／料金で比較する→#price-comparison／初心者の選び方→#how-to-choose)。サーバーコンポーネント(アンカージャンプのみ・client不要)。
- `scripts/add-area-conclusion-202606.py`(冪等)で機会**23エリア**に挿入(import＝AreaMarketComparison import直後／本体＝`<TableOfContents`直前)。areaNameは既存の`areaName="..."`から抽出。23/23成功・skip0。
- 検証: ビルドEXIT0／全23でアンカー先(#trial-guide/#price-comparison/#how-to-choose)存在確認／本番3ページで「N社を比較・無料体験M社・月額最安」描画＆数値妥当(hamamatsucho 5社/2社/10,450円・akihabara 7社/1社・esaka 8社/3社)確認。
- デプロイ: 方式B(rsync **--exclude='.git' --exclude='functions'** 厳守→functions/contact.js保全確認)。⚠️deploy repoのローカルブランチは`master`・リモートは`main`→`git push origin HEAD:main`(0 behind/1 ahead・FF)。source+deploy両push・Indexing API 23/23。
- 次候補: trailing-slash統一(canonical)・記事クラスタ→機会ページ内部リンク・効果は1-2週GSC測定。

### 2026-06-25 AIスタジオ相談プロトA（MediaXAI「A案のプロトタイプ作って」）
- **本番 /ai-soudan/**（ヘッダーCTA「AIスタジオ相談」desktop+mobile・sitemap 448URL）。ルールベースの会話型診断ウィザード＝**完全無料・APIゼロ・クライアント完結**（コスト§1.4クリア）。
- 構成: `lib/consult.ts`（areaStudios 211店をflat化＝types[machine/mat]・hasFreeTrial・priceMinYen・purposeText派生＋regions/areasIn/recommend スコアリング）＋`components/StudioConsultant.tsx`（'use client' チャットUI: 地方→エリア→目的(複数)→タイプ→無料体験→料金→上位3提示）＋`app/ai-soudan/page.tsx`。
- **事実ベース厳守**: 推薦・リンクは実データのみ＝ハルシネーション/誤送客ゼロ。CTAは各studioの`officialUrl`を`rel="noopener noreferrer sponsored"`で（将来アフィリリンクに差し替えれば自動反映）。料金は「目安・公式で確認」明記＋広告開示表示。
- 割り切り（拡張余地）: 選択式対話（自由文会話=案B＝CF Workers AI無料枠で後付け可）／公式URL欠落店はエリア詳細へ誘導／常設フローティングは本採用後。
- デプロイ: 方式B（rsync **--exclude='.git' --exclude='functions'**→deploy repo `git push origin HEAD:main`）・本番200・widget描画＆contact.js保全確認。MediaXAIにフィードバック依頼中（質問順・選択肢・見せ方）。次=(a)アフィリ差替(b)案B自然会話(c)常設ウィジェット。

### 2026-06-25 AI相談プロト v2/v3（MediaXAIフィードバック反映）
- **v2**: ①エリア選択を3段階化（地方→**都道府県**→エリア）＝`lib/consult.ts`に`prefecturesIn/areasInPrefecture`追加。②スクロール改善＝チャットログを`max-h-[42vh] overflow-y-auto`＋`logRef`自動最下部スクロール、選択ボタンは常時見える位置に固定。
- **v3**: ①「出てないエリアがある」→原因はarea一覧を`area-studios.ts`掲載分(~154)に絞っていたため。**prefectureAreas全域(370エリア)＋ハードコードの全47県→地方マップ`PREF_REGION`**で全エリアを出すよう変更。掲載スタジオデータが無いエリアは診断結果で`/area/{slug}/`へ誘導。②**現在地優先表示**＝`pilates-biyori-deploy/functions/api/geo.js`新設（CFの`request.cf`が返す国/地域/regionCode/緯度経度を返却＝外部API・コスト不要）。widgetが`/api/geo`をfetch→`JP_CODE_PREF`(ISO 3166-2:JP番号→県)で現在地県を判定→最初の画面に「📍現在地から探す：◯◯県」ショートカット表示。テストで神奈川/横浜を正しく検出。
- ⚠️deployのrsyncは`--exclude='functions'`必須（geo.js/contact.js保全）。geo.jsはdeploy repo側に直接置く（functionsはrsync対象外のため）。次候補=(a)アフィリリンク差替(b)案B自然会話(無料Workers AI)(c)全ページ常設ウィジェット化。

### 2026-06-25 AI相談プロト v4（MediaXAI「現在地は県が限界？近いエリア順に」）
- **全エリア座標化**：`/tmp/geocode_areas.py`で国土地理院 住所検索API（無料・キー不要 `https://msearch.gsi.go.jp/address-search/AddressSearch?q=`）を使い、掲載スタジオ住所(高精度)／無い所はprefecture+エリア名で**349/370エリアを座標化→`data/area-coords.json`**。
- `lib/consult.ts`：`AREA_COORDS`(json import・`as unknown as Record<string,[number,number]>`でtuple化必須)＋haversine＋`nearestArea(lat,lon)`＋`sortAreasByDistance(areas,lat,lon)`。
- widget：`/api/geo`の緯度経度を保持→**「📍現在地に最も近いエリア：◯◯（約◦km）」をワンタップ最上部表示**(jumpToArea＝region/pref/area飛ばしてgoalsへ)＋**県選択後のエリア一覧を近い順に並べ替え**(各エリアに約◦km表示)。海外/位置不明は通常フォールバック。全部外部API課金ゼロ。

### 2026-06-29 メルメイク掲載（MediaXAI「メルメイク掲載してほしい」mermake.co.jp）
メルメイク＝完全個室パーソナルジム＆マシン/マットピラティス（24h・ダイエット/姿勢矯正）。**ピラティス対応の稼働店3つを公式実データで掲載**：女性専用・名古屋駅店【マシンピラティス】→/area/nagoya-station/、伏見店【マシンピラティス】→/area/sakae/（伏見エリア無→栄が最寄り）、西新店【マットピラティス】→/area/nishijin/。
- データ取得=公式 f-nagoya-pilates/fusimi-pilates/f-fukuoka-pilates/menu-pilates をfetch。料金=50分月謝制プライベート2/4/6=17,300/33,000/47,100円・体験5,500円(当日入会で無料)・単発9,050円・入会金33,000円(入会で無料)・指名料550円。StudioCard5タブ全項目を実データ記入。公式キャプチャ→public/images/studios/mermake.webp(目視確認)。
- **これらのエリアはstudiosが area-studios.ts でなく page.tsx 内の`const studios = [`にインライン定義**(全エリアが area-studios.ts にあるわけではない)。挿入は page.tsx の `const studios = [` 直後。
- **おすすめN選はハードコード(studios.length不使用)→実数に更新必須**。⚠️studio数カウントは`officialUrl:`では不可(既存studioはofficialUrl無しがある)。**`access:`/`address:`/`popularPlan:`が1studio=1**（または`awk '/const studios/{f=1}f&&/^  \{/{c++}'`）。
- 事実ベース除外: 新横浜/横浜日吉/豊田=公式「人員不足にて停止」、パーソナル専門店(名駅店等)=ピラティス非対応。
- 🚨**重大教訓: functions/ が deploy repo の作業ツリーから欠落していた**（2026-06-25のネコノビ掲載デプロイ cf2ca3224 で削除されていた）→今回のデプロイでCFが再ビルドし**/api/contact が404化**。**functions/api/{contact,geo}.js を履歴(bfd7c9233)から復元＋恒久コミット**で解消(POST=400で稼働確認、GET404はonRequestPostのみゆえ正常)。`--exclude='functions'`は「作業ツリーにfunctions/が在る場合のみ」保護＝**欠落していたら無力**。**今後pilatesデプロイ前に`ls pilates-biyori-deploy/functions/api/`で存在確認必須**（今回コミット済なので以後は維持される）。

### 2026-07-01 🚨canonical重大バグ修正＋勝ち筋強化（MediaXAI「①②③進めて」＝押し上げ戦略）
フュージョン(next-lever-strategy-2026-07-01.md)＝「エリア拡張より勝ち筋の1ページ目押し上げ」。実装中に**サイト全体を止めていた重大バグ発見**：
- **全403ページのcanonicalがホームページを指していた**＝`app/layout.tsx`の`alternates.canonical:'https://biyori-pilates.com/'`を全ページが継承→エリアページ全部が「正規URL=トップ」とGoogleに宣言＝**個別ページが評価されずトップに集約**。**pos40問題(表示多いが順位深い)のサイト全体の根本原因の可能性大**。
- **修正**：layoutの`alternates.canonical`ブロックを削除→**全ページ自己canonical化**(タグ無し=Googleが各URLを自己正規化)。本番でhamamatsuchoのホームcanonical消失を確認(CF伝播で2回目のcurlで確認・1回目はキャッシュ)。⚠️**今後area/記事ページはlayoutで静的canonicalを設定しない**(継承で全ページ誤canonical化する)。
- **勝ち筋強化**：gion-shijo(祇園四条)が唯一AreaMarketComparison/AreaConclusion未挿入だった→enhance-area-phase0.py/add-area-conclusion-202606.pyのSLUGS/TARGETSに追加して実行(冪等)。hamamatsucho/yagoto/ochanomizu/ojiは既に独自データ枠あり。
- 方式Bデプロイ(--exclude .git/functions・functions保全OK)・両push。効果1-2週GSC(canonicalは全エリアに効く最大レバー)。

### 2026-07-01 ②内部リンク集約（勝ち筋の被リンク強化・MediaXAI「進めて」）
フュージョン戦略の②(striking-distanceページへ内部リンク集約)を実行。被リンクが薄かった勝ち筋2本を強化：
- **yagoto(八事)=被リンク1本のみ→4本 / gion-shijo(祇園四条)=2本→5本**。`scripts/boost-winners-202606.py`のTARGETSに`"yagoto":["nagoya","sakae","kanayama"]`＋`"gion-shijo":["kyoto","kyoto-shiyakusho-mae","karasuma-oike"]`追加。①ターゲット側=近隣+白書へのboost-nav callout挿入 ②近隣6ページ側=ターゲットへの相互内部リンクcallout挿入(双方向)。
- ⚠️**NAME辞書に新規スラッグの表示名(八事/祇園四条/名古屋/栄/金山/京都/京都市役所前/烏丸御池)を追加しないとKeyErrorで挿入失敗**する(script part1/part2両方でNAME参照)。追加後に冪等再実行で全8ページ挿入完了。
- 方式Bデプロイ(functions保全OK)・両push・本番で「近隣エリア」節の描画を4ページ確認。**Indexing APIは本日クォータ超過(429)＝他サイト作業と合算で枯渇→sitemap任せ＋翌日再送**。効果1-2週GSC。

### 2026-07-02 成長戦略再策定（MediaXAI「fable5で最短・最大の実行計画を」）
GSC診断(28d 6/3-7/1): クリック90(前月比+88%)・表示14,104(2.8倍)・平均40.5位・CTR0.64%。**6/22以降 日次表示600-700→350-450に減速**(大量新規エリアの再評価疑い・2週監視)。
- 勝ちパターン=低競合エリア(指宿5.0位/八事9.2位/光が丘)。都市部大型エリアは30-60位で停滞=**最大制約はドメインオーソリティ**(オンページは6月にやり切った)
- 機会バンド(8-30位×表示30+)=29ページ。筆頭hamamatsucho 575imp/14.6位/CTR0.3%
- **未開拓インテント発見: ブランド×店舗×口コミ/レビュー系クエリに受け皿ゼロで表示中**(BDC二子玉川/恵比寿/表参道 計83imp 42-58位、kasane店舗レビュー19-40位、the silk レビュー等)
- 技術: **canonicalタグが全ページ無し**(継承バグ修正時に根こそぎ削除された模様)＋GSC上slash重複31組(308リダイレクトはあり)

**戦略4本柱(Discord報告済)**: P0=canonical自己参照+機会29ページtitle/CTR改修+内部リンク集中+AI相談アフィリ差替(今週) / P1=ブランド評判レイヤー/brands/12-15社・出典付き口コミ(2-3週・最大上振れ・yoga-db方式) / P2=料金白書で監修者獲得・被リンク営業(並行・費用ゼロ) / P3=エリア面拡大は凍結→押し上げ専念。KPI=8月末300クリック/10月末1,000。

### 2026-07-02 P0実行（MediaXAI「P0進めて」）
- **①canonical全ページ**: `scripts/add-canonical-202607.py`(冪等)で378ページに`alternates:{canonical}`挿入＋articles/[slug]のgenerateMetadataに動的canonical＋**app/page.tsxは'use client'のためHomeClient.tsx分離でサーバー化**してcanonical付与。ビルド後out/ 448HTML全てにcanonical確認。layoutにmetadataBase既存(相対でも解決可だが絶対URLで統一)
- **②CTR改修**: `scripts/p0-title-ctr-202607.py`＝機会29ページをtitle「{エリア}のピラティススタジオおすすめN選｜無料体験・料金で比較【2026年7月】」(N=既存「おすすめN選」見出しから抽出=捏造なし)＋description意図刷新。複合エリア名は手動修正(hamamatsucho=浜松町・大門/izumi=和泉中央・和泉市)。他219ページは【2026年6月】→7月バンプのみ
- **③内部リンク集中**: HomeClient.tsxのエリアガイド先頭に「注目エリア」ブロック=機会上位10(浜松町・大門/秋葉原/北浜・淀屋橋/御茶ノ水/王子/和泉中央/新大阪/八事/代々木上原/新大久保)へ強調チップリンク
- **④アフィリ差し替え**: data/area-studios.tsの素URL13件をfelmatへ(URBAN CLASSIC11件=Z11337L共通/ELEMENT2件=U11199J共通)。AI相談ツールはofficialUrl参照なので自動反映。the SILK/pilates K等は非提携のため公式URLのまま(正しい)
- デプロイ方式B(--exclude .git/functions厳守・contact.js保全確認)・両repo push・本番curl確認(canonical/7月title/注目エリア)・**Indexing API 30/30**(機会29+ホーム)。効果測定は1-2週GSC(スラッシュ重複31組の解消・CTR・注目エリア10の順位)

### 2026-07-02 P1実行（MediaXAI「p1進めて」）＝ブランド評判レイヤー /brands/ 新設
- **データ基盤**: `scripts/aggregate-brands-202607.py`＝系統A(インラインstudios)+系統B(area-studios.ts)から**15ブランド714店舗**をブランド別集計→`data/brands-aggregate.json`(name/price/trial/rating/officialUrl/areaSlug/areaName)。kasaneはpilates-K誤爆防止で先判定。price/trial取得率100%
- **編集データ**: `data/brands.ts`＝15ブランドの特徴/料金注記/体験注記/FAQ/CTA。**レギュレーション準拠**(SILK=情報引用元リンク+第三者言い回し/24-7=マット言及なし・料金〜・体験無料約60分・入会金不要/Mee=通常9,800円毎月先着30名限定・Mee Life別業態・RiAGEL/zen place=エデュケーター等の語彙・小文字)。KASANE/BDCは公式ドメイン未確認のためCTA無し(捏造回避)
- **ページ**: `app/brands/[slug]/page.tsx`(generateStaticParams15＋動的canonical)＝結論ボックス(掲載店舗数/代表プラン/無料体験店舗数/平均評価※rating n≥5のみ表示・出典注記)+特徴+料金表(掲載データの頻度集計)+体験+店舗一覧表(**全店舗→エリアページへ内部リンク**=zen place160本等)+FAQ(FAQPage schema)+BreadcrumbList+他ブランド相互リンク。`app/brands/page.tsx`=ハブ。titleは評価データ十分なブランドのみ「評判」使用(useHyoban)
- **導線**: Navigation(PC+モバイル)に「Brands」・SiteFooterに「ブランド別ガイド」追加。sitemap生成器にlistBrands()追加=463URL(+16)
- 提携CTA=felmat/hatmiso(rel sponsored+PR表記)、非提携=公式サイト(rel noopener)。BREST=店舗別リンクのためブランドCTA無し
- ビルド469p・方式Bデプロイ・両push・本番200確認・Indexing API 16/16+sitemap再送信
- **v2候補(未着手)**: 出典付き口コミ収集(取材/公開レビュー引用)・エリアページ→ブランドページの逆リンク・ブランド×エリアクエリ(「BDC 二子玉川」等)の個別受け皿

### 2026-07-03 AI相談ウィジェット全ページ搭載（MediaXAI「Aで進めて」→✅完了・本番反映済み）
「/ai-soudan/ をリンク誘導でなくTOP・エリア全ページ・know系ページに搭載」。A案=ページ内セクション埋め込みで実装:
- **`components/ConsultantSection.tsx`新設**='use client'。誘導パネル(見出し/コピー/「無料診断を始める」ボタン/広告開示)＋**next/dynamicでStudioConsultant(384KBチャンク)をタップ時のみ読込**=設置ページのCWV影響ゼロ(本体チャンクがページHTMLから未参照を確認)。`bare` propで記事本文内はsectionラッパー無し
- **エリア自動セット**: StudioConsultantに`initialAreaKey` prop追加(lib/consult.tsに`areaInfo(key)`export)。エリアページは「{エリア}で無料診断を始める」→エリア選択スキップでgoalsから開始＋「{エリア}以外のエリアで探す」で通常フロー切替
- 設置: TOP=HomeClientのAreaSearch直下 / エリア370ページ=`scripts/add-consultant-section-202607.py`(冪等・`<RelatedAreas`直前・areaName抽出+prefectureAreasフォールバック) / 記事=articles/[slug]テンプレのCTA後(bare) / basics=末尾
- 方式Bデプロイ・両repo push・本番4ページタイプ確認・/api/contact POST=400(正常)確認。B案(フローティング)は不採用(ヘッダーCTAと重複のため)・必要になれば後付け可

### 2026-07-02 ブランドレイヤーv2（MediaXAI「v2進めて」）
- **①出典付き口コミ42件**: エージェント3体で各ブランド**公式サイトの声/公式PR/公式インタビュー**から原文引用収集(`data/brand-voices-{1,2,3}.json`→`brand-voices.json`統合)。**Googleマップレビューは規約リスクで不使用**。24/7=公式に声なし→正直に0件(非表示)。the SILK=声ページなし→NEXER共同調査等survey型で代替。ブランドページに「口コミ・利用者の声(出典付き)」セクション(blockquote+属性+出典リンク+「公式公開情報からの引用」注記)
- **②エリア→ブランド逆リンク**: `lib/brandLink.ts`(brandSlugOf=aggregate-brandsと同一判定・kasane先判定)+StudioCardの公式ボタン横に「このブランドの料金・店舗一覧を見る」→**全エリアで計1,036本**の逆リンク自動生成
- 両repo push・本番確認・Indexing 16/16。v3候補: ブランド×エリアクエリ受け皿(BDC二子玉川等)・体験取材
