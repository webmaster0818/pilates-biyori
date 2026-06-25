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
