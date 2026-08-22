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

### 2026-07-03 trailing-slash統一（MediaXAI「この要因何？」→「実施して」）
GSC「ページにリダイレクトがあります」141件=全て末尾スラッシュ無しURL(+http1件)。原因=**内部リンク529+箇所がスラッシュ無しhref**（trailingSlash:trueなので308で正規版へ転送→GSCが重複バリアントとして計上。エラーではない）。`scripts/fix-trailing-slash-202607.py`(冪等)で**942箇所/384ファイル**修正（href="…"・href="…#anchor"・テンプレリテラル href={`/x/${v}`}・MDX内の](/path) 全対応。拡張子付き・"/"単体・外部は除外）。ビルドHTMLで非スラッシュ内部リンクゼロ確認→方式Bデプロイ・両push・本番確認(渋谷138本全スラッシュ付き)。GSCの141件は再クロールで数週かけ自然減。

### 2026-07-02 ブランドレイヤーv2（MediaXAI「v2進めて」）
- **①出典付き口コミ42件**: エージェント3体で各ブランド**公式サイトの声/公式PR/公式インタビュー**から原文引用収集(`data/brand-voices-{1,2,3}.json`→`brand-voices.json`統合)。**Googleマップレビューは規約リスクで不使用**。24/7=公式に声なし→正直に0件(非表示)。the SILK=声ページなし→NEXER共同調査等survey型で代替。ブランドページに「口コミ・利用者の声(出典付き)」セクション(blockquote+属性+出典リンク+「公式公開情報からの引用」注記)
- **②エリア→ブランド逆リンク**: `lib/brandLink.ts`(brandSlugOf=aggregate-brandsと同一判定・kasane先判定)+StudioCardの公式ボタン横に「このブランドの料金・店舗一覧を見る」→**全エリアで計1,036本**の逆リンク自動生成
- 両repo push・本番確認・Indexing 16/16。v3候補: ブランド×エリアクエリ受け皿(BDC二子玉川等)・体験取材

### 2026-07-04 P0実行（MediaXAI「p0進めて」）✅本番反映済み
成長戦略再策定(2026-07-03)のP0を実行。
- **①BDC×エリア受け皿3本**（`/brands/bdc-futakotamagawa/` `/bdc-ebisu/` `/bdc-omotesando/`）: 指名クエリ「BDC ピラティス {エリア}」147imp(40-58位)の受け皿ゼロを解消。`components/BrandAreaReceiver.tsx`＋`data/bdc-stores.ts`新設。**実店舗データはbrands-aggregate.json一致・架空ゼロ**（恵比寿は公式が詳細住所非開示→正直にその旨表記・LocalBusinessはareaServedで代替）。結論box＋店舗情報table＋BDCブランド編集データ(getBrand)＋周辺エリア比較＋FAQ。**LocalBusiness(HealthClub)/Breadcrumb/FAQ schema＋自己canonical**。⚠️**静的パス`bdc-*`は`[slug]`動的ルート(brand=bdc)と競合しない**(静的優先・generateStaticParamsにbdc-*含まれず)＝既存/brands/bdc/健在確認済
- **②TOP→ブランドハブ導線**: HomeClientの注目エリア直後に「ブランドから探す」ブロック(ハブ＋主要6ブランド＋新BDC受け皿3本)＝ブランド層(7/2新設16p・表示ゼロ)のインデックス促進
- **③浜松町のとどめ**(563imp/14位): 「注意点」節に**芝公園・御成門の意図セクション**追加(架空スタジオなし・大門隣接の正直な距離表記)＋**近隣6ページ(mita/tokyo-station/toranomon/roppongi/ginza/shinagawa)から浜松町への内部リンクcallout**注入(`boost-hamamatsucho-202607`マーカー・冪等・`<RelatedAreas`直前)
- sitemap生成器に受け皿3URL明示追加(466URL)。build EXIT0(NODE_OPTIONS 8192)・方式B(rsync **--exclude .git/functions**・functions保全確認)・両push・BDC受け皿/浜松町 本番200＆自己canonical＆HealthClub schema確認・**Indexing API 21/21**(受け皿3＋全ブランド16＋TOP＋ハブ＋浜松町)。効果=指名クエリ147impの刈り取り・浜松町の1ページ目化・ブランド層インデックスを1-2週GSC測定。次=P1(機会バンド残11ページ意図充足)

### 2026-07-04 P1実行（MediaXAI「p1進めよう」）✅本番反映済み
機会バンド(8-30位×表示30+)の意図完全充足。**GSC実数(28d 6/6-7/3・sc-domain)で対象特定**＝akihabara278/29.7・kitahama157/22.4・ochanomizu152/20.1・oji123/17・izumi101/23.7・yoyogi-uehara80/27.1・shin-osaka80/22.8・shin-okubo72/18.8・toranomon61/12.8・otemachi57/23.2・gion-shijo57/18.7。
- **データ欠落解消**: otemachi=AreaMarketComparison(独自データ211調査対比)+AreaConclusion(結論ファースト)を追加/yoyogi-uehara=AreaConclusion追加(add-area-conclusion TARGETSに2つ追加・冪等)。他9ページは3コンポーネント既充足を点検確認
- **内部リンク集中9本**(近隣→機会ページ・`boost-p1-{target}-202607`マーカー冪等・`<RelatedAreas`直前): umeda/honmachi→kitahama, sakai→izumi, umeda/esaka→shin-osaka, shinjuku/takadanobaba→shin-okubo, tokyo-station/marunouchi→otemachi
- **TOP注目エリア+3**: 虎ノ門/大手町・東京駅/祇園四条(ホームページ被リンク=残りの機会ページも全て注目エリア掲載に)
- build EXIT0・方式B(functions保全確認)・両push・otemachi独自データ/結論 本番反映確認・**Indexing API 12/12**。効果1-2週GSC測定。次=P2(記事勝ち筋クラスタ)・P3(白書被リンク営業/送客計測)

### 2026-07-06 jiro-2戦略の未実施差分①=エリアtitle即答化（MediaXAI「こちらの戦略を参考に改善実行」）
jiro-2策定の集客戦略（GSC診断: 166click/20,988imp/CTR0.79%＝「巨大な表示をクリックに変換が最短」）を参照。P0浜松町/機会バンド/メソッド記事は7/4に実施済み(私)。**未実施差分のP1=全エリアtitle即答化**を実行:
- 高imp・低CTRの**25エリア**(浜松町528/目黒337/秋葉原267/渋谷185…大半CTR0%)のtitleを、掲載studiosの実データ算出値で即答型に: 「{エリア}のピラティス{N}社を比較｜無料体験{M}社・月額最安{X}円〜【2026年7月】」
- `scratchpad/pilates_title_ctr.py`: inline studios から name数=N/trial「無料」=M/price最安(回数券除外・parseYen)=X を集計。**全て実データ・捏造なし・不確実ページはスキップ**設計
- build EXIT0・方式B(functions保全)・両push・本番反映(目黒12社等)・Indexing 25/25。効果2-4週GSCでCTR測定
- **残る未実施差分**: P2スタジオ指名面(club pilates/zen place受け皿・BDCと同型)・P5料金相場レポート月次AEO。次候補

### 2026-07-06 jiro-2戦略P2=スタジオ指名面（CLUB PILATES×エリア受け皿）（MediaXAI「P2から進めて」）✅本番反映済み
- **GSCで指名×エリア需要を実測特定**: club pilates/クラブピラティス指名クエリ=西宮北口10imp/代官山6/中野坂上3/豊洲2/田町1(pos9)/神楽坂1(pos11)等。**zen place/ゼンプレイスは指名×エリア需要ほぼゼロ**(唯一"疲労回復株式会社ゼンプレイス"1impの誤クエリのみ)→受け皿価値なしで**対象外**(正直に見送り)。
- **BrandAreaReceiver汎用化**: BDCハードコード(getBrand("bdc")/`/brands/bdc/`4箇所)を`brandSlug`propで一般化(default"bdc"でBDC受け皿は無変更)。結論box4欄目の「徒歩2分」ハードコード=住所非開示店で捏造になるため`store.areaLabel`表示に変更。
- **CLUB PILATES受け皿6本**(`/brands/club-pilates-{nishinomiyakitaguchi|daikanyama|nakano-sakaue|toyosu|tamachi|kagurazaka}/`): `data/club-pilates-stores.ts`(BdcStore型再利用)。**全データbrands-aggregate.json一致・架空ゼロ**。住所非開示3店(西宮北口/中野坂上/田町)はaddressIsVagueで正直表記・**評価は店舗別一次データ無しのため付けない**(捏造回避)。結論box＋店舗table＋getBrand("club-pilates")編集データ＋周辺エリア比較＋FAQ(FAQPage)＋HealthClub/Breadcrumb schema＋自己canonical。
- sitemap生成器の受け皿リストにclub-pilates6追加(475URL)。⚠️静的パス`club-pilates-*`は`[slug]`動的ルート(brand=club-pilates)と競合せず＝ハブ`/brands/club-pilates/`健在確認済(BDC同様)。
- build EXIT0(heap8192)・方式B(--exclude .git/functions・functions{contact,geo}.js保全確認)・両push・本番6/6が200＋自己canonical＋HealthClub schema確認・**Indexing API 6/6**。効果=クラブピラティス指名クエリの刈り取りを1-2週GSC測定。
- **残る未実施差分**: P5料金相場レポート月次AEO(白書の月次更新版で相場クエリのAEO/引用獲得)。次候補。

### 2026-07-06 jiro-2戦略P5=料金相場レポートの月次AEO（MediaXAI「p5進めて」）✅本番反映済み
料金白書`/articles/pilates-ryokin-hakusho/`をAEO資産化（回答エンジン/featured snippet向け）。GSC料金系クエリは大半がエリア×体験(エリアページ管轄)・純相場クエリ「ピラティス 価格」等は白書が深順位→答えファースト＋構造化＋鮮度で押し上げ。
- **①答えファースト「30秒でわかる料金相場【2026年7月更新】」**: 記事冒頭に相場一覧表(月額中央値11,220/平均13,679/体験無料61%/有料体験2,980/マシン54%/評価4.41)＋断定要約blockquote。全数値はsite-survey.ts(211調査)単一ソース＝捏造ゼロ。
- **②Dataset構造化データ**（`app/articles/[slug]`にslug==='pilates-ryokin-hakusho'限定で注入）: schema.org/Dataset＋variableMeasured 6指標(月額中央値/平均/体験無料率/有料体験中央値/マシン率/評価)。**AI/回答エンジンが数値を機械抽出・引用可能に**＝AEOの核。値はSURVEYから(11220等)。既存Article/FAQPage/Breadcrumbと併存。
- **③主要ブランド月次スナップショット**（月次の実体）: 「主要ブランドの月額プラン相場【月次更新:2026年7月】」=**data/brands-aggregate.json実集計**(主要15ブランド714店/月額表記628件→中央値12,980・平均13,861・体験無料76%)。**211調査(全業態・個人含む・中央値11,220)とは母集団が別**と明示し使い分けを注記(混同回避)。この数値は掲載店増で毎月変わる＝真の月次更新。
- **④月次更新スクリプト`scripts/refresh-hakusho-monthly.py`**（冪等・cron候補）: brands-aggregateを再集計→月次スナップ本文＋版日付(30秒サマリー見出し/AEO脚注/月次見出し)＋frontmatter updatedAtを実行月に自動更新。python datetime。**手書き初版と完全一致(冪等確認済)**。211調査は別母集団のため触らない。
- frontmatter: updatedAt→2026-07-06・AEOキーワード4追加(月額平均/月謝相場/体験いくら/価格)・AEO向けFAQ3追加(月謝平均/体験何円/個人vsチェーン=いずれも実数)。
- build EXIT0(478p)・方式B(functions保全)・両push・本番200＋Dataset schema(value11220)＋7月更新見出し＋月次12,980円 確認・Indexing API 200。効果=相場クエリのfeatured snippet/AI引用獲得を1-2週GSC測定。
- **⚠️月次cronは未設定**（refresh script単体はMD編集のみ・反映にはbuild+deploy要）。無人の月次build+deployは要判断→MediaXAIに提案中。当面は手動 or 承認後にcron化。
- **jiro-2戦略の未実施差分は全消化**（P1title即答化7/6・P2 CLUB PILATES受け皿7/6・P5月次AEO7/6）。

### 2026-07-06 P5月次AEOのcron自動化（MediaXAI「cron自動化で進めて欲しい」）✅稼働開始
P5料金白書の月次更新を**launchd恒久cron化**（CronCreateはセッション限定・7日失効で月次に不適）。
- **`scripts/monthly-hakusho.sh`**（冪等・全実データ）: ①refresh-hakusho-monthly.py（主要ブランド集計＋版日付＋updatedAt更新）②build（型チェック失敗で中止）③sitemap再生成→out/④方式Bデプロイ（**functions存在をrsync前後で検証・欠落時は中止**／--exclude .git/functions／source+deploy両push）⑤Indexing API⑥Discord通知。失敗時は各段で🚨通知して中止。ログ=/tmp/pilates-monthly-hakusho.log
- **`~/Library/LaunchAgents/com.pilates.monthly-hakusho.plist`**: 毎月1日4:17実行。launchctl load済み・**テスト実行で一気通貫成功**（median=12980/free=76/total=714抽出・LastExitStatus=0）。
- ⚠️**通知先**=「各サイト週次集計」ch(1485072787935592468)のwebhook流用（botがpilates ch 1487358680671326259のMANAGE_WEBHOOKS権限なし＝pilates chへの専用webhook作成不可）。メッセージに[Pilates料金白書]プレフィクス付き。pilates ch通知が必要ならMediaXAIがwebhook発行orbot権限付与要。
- 冪等性: データ無変更月は「no change」で再デプロイのみ（commitはnothing to commitでskip）。効果=白書の鮮度シグナル（updatedAt月次更新）＋主要ブランド相場の自動最新化でAEO維持。

### 2026-07-12 N-2実行＋問い合わせフォーム実地確認（MediaXAI「n-2進めて。あと、問い合わせフォーム有効か確認して」）✅本番反映済み
- **フォーム確認**: /contact/ 200・POST /api/contact テストデータで**200 {"ok":true}**（必須フィールド=name/email/**type**/message・categoryではない）。フロントのname属性とAPI検証の一致も確認。有効。
- **N-2=オンラインクラスタとどめ**: ①koka未リンク2記事(online-pilates-ryokin/online-pilates-shoshinsha)に本文文脈リンク+relatedArticles追加→クラスタ全記事からkokaへ集中 ②TOP基礎知識セクション末尾に「メソッドを学ぶ」チップ5本(8原則/ハンドレッド/ロールアップ/呼吸法/オンラインの効果)=メソッドハブへのTOP導線 ③誤字修正(shoshinsha「フォック」→「フォームチェック」)
- refresh-updated-dates.py実行(435ファイル→07-12)→build EXIT0→方式B(functions4本=click/clicks/contact/geo保全確認)→両push→本番3ページ描画確認(エッジ伝播ラグあり=?v=クエリで確認)→Indexing 4/4。⚠️gsc-token.jsonの実体は`~/.openclaw/workspace/secrets/gsc-token.json`（gsc-api/直下ではない）

### 2026-07-11 更新日の常時最新化ルール（MediaXAI指示・恒久運用）
**🔁運用ルール: pilatesで何か更新してデプロイする際は、必ず `python3 scripts/refresh-updated-dates.py` をビルド前に実行**（全ページの「更新日 @YYYY年MM月DD日」表記とMD frontmatter updatedAtを当日に最新化・冪等）。初回実行で435ファイル(tsx371+md64)を2026-07-11に統一済み。タイトルの【YYYY年M月】鮮度タグは別管理（月次/施策時にバンプ）。

### 2026-07-14 フッター・全サイトリンク総点検（MediaXAI「フッターリンク直して」「他もあるよ」）✅本番反映済み
- **①フッターCategories 4本**: 基礎知識/効果/スタジオ選び/地域別が全て/#categories行き→/basics/ /benefits/ /studios/ /area/へ修正。古い「2026年3月31日時点」注記も恒久表現化
- **②目次(ToC)の死にアンカー大量検出**: TableOfContentsが固定7項目をハードコード→生成系エリアページに無いセクションへのアンカーが#price-guide=190p/#frequency=185p/#kodawari=151p等→**'use client'化+useEffectでdocument.getElementById実在フィルタ**(恒久解・ページ個別修正不要)
- **③記事誤リンク**: /joseph-pilates/→/articles/joseph-pilates/(2記事)
- **④再発防止**: `scripts/check-links.py`(out/全ページのパス+アンカー整合チェッカー・動的ToCアンカーは除外)を新設しmonthly-hakusho.shの3.5)に組込(壊れ検知でDiscord警告)
- 検証: 480ページ全リンク再走査でパス切れゼロ確認。教訓=**「リンクが機能していない」報告はhref 404だけでなく同一ページ内アンカーの不在を疑う**(クリックして何も起きない=ユーザーには全部「壊れたリンク」)

### 2026-07-15 フッターリンク「トップへ飛ぶ」誤挙動の解消（MediaXAI報告）✅本番反映済み
- **要因**: `html{scroll-behavior:smooth}`(globals.css)が、Next.jsクライアント遷移時のスクロール位置リセット(トップへ)までアニメーション化→旧ページ上で「ページ内リンクでトップに飛んだ」ように見える(縦長のTOP×フッターからの遷移で顕著)
- **修正**: CSSのグローバルsmooth撤去+`components/SmoothAnchors.tsx`新設(委譲クリックハンドラで**同一ページ内の#アンカーのみ**scrollIntoView smooth・layout組込・全ページ適用)。ページ遷移は即時・アンカーは滑らかを両立
- 教訓: **html{scroll-behavior:smooth}はNext.js(App Router)のLink遷移と相性が悪い**(遷移時スクロールリセットが旧ページ上で再生される)。スムース化はJSでアンカー限定にするのが正解

### 2026-07-15 「運営者情報→/#」の真因解消（MediaXAI再指摘）✅本番反映済み
- **真因**: TOPだけSiteFooter不使用で**HomeClient内にフッターが重複実装**されており、運営者情報/お問い合わせが`href="#"`プレースホルダーのまま。前日の修正は共通SiteFooter側のみ有効だった
- **修正**: TOP独自フッターを削除し`<SiteFooter />`に統一(単一情報源化)。check-links.pyに素の`href="#"`検出を追加(前回走査の盲点)
- 教訓: **共通コンポーネントを直しても、ページ固有の重複実装が残っていることがある**。「直したのに直ってない」報告が来たら、該当ページのHTML実物をgrepして同名UIの重複実装を疑う

### 2026-07-15 伸び悩み徹底調査＋canonical残存被害の回復オペ（MediaXAI「徹底的に洗って」）✅実行済み
- **全370エリアをURL Inspection APIで完全走査**(/tmp/pilates_inspect.json): indexed348のうち**修正後クロール済み160/修正前のまま188(54%)**・**🚨TOP複製扱いで非インデックス9**(ginza/marunouchi/sangenjaya/shimbashi/takadanobaba/suidobashi/sasazuka/denenchofu/katsura)・その他未インデックス15
- **結論**: 下落トリガー=June Spam Update(6/22週▲36%・完全一致)×回復阻害=canonical修正の浸透54%止まり(Update後の再評価を破損状態で受けた)。ブランド層+189imp成長=サイト全体ペナルティではない
- **回復オペ**: 非インデックス9をTOP注目エリアチップ追加+全日付リフレッシュ+sitemap再送信+**Indexing API 212件一括送信(200×212・クォータ収まった)**
- **🔁1週間後(7/22頃)に再走査して「修正後クロール率」の回復を定点報告すること**(走査スクリプトは/tmp/pilates_fullscan.logの手順・結果JSON=/tmp/pilates_inspect.json形式)
- 教訓: **canonical一括修正後は「Googleが再クロールするまで直っていない」**。修正デプロイ+Inspection APIでの浸透率測定+Indexing API一括送信までがセット

### 2026-07-19 Week1実行（フルフュージョンKW拡張戦略・MediaXAI「進めてください」）✅本番反映済み
フルフュージョン(claude+codex+gemini 3者一致)で「対策KW拡張戦略」策定→**結論=拡張でなく回収**(1,044クエリ・1万表示の85%がpos31+=評価不足)。深化70/拡張30・修飾子はエリア内セクション・平均順位はKPIにしない。Week1着手分:
- **`components/AreaModifierSections.tsx`新設**=検索意図の修飾子軸(「マシンピラティス」「初心者」)をエリアページ内セクションで受ける共通C。GSCで「大門 ピラティス 初心者」pos10.1・「マシンピラティス 尼崎/厚木/つくば」・「ピラティス初心者」69imp等の修飾子需要が既存ページに専用受け皿ゼロだった。**掲載studiosの実データ(features/description/facilities)からマシン対応/初心者向けを判定**・該当無しは正直にその旨表示(捏造なし)・#machine/#beginnerアンカー+#studiosへのCTA。
- **striking-6ページに注入**(yagoto8.9/hamamatsucho・大門10.1/ochanomizu16/gion-shijo16.5/tokyo21.8/otemachi24.6): 冪等スクリプトでimport+`</main>`直前に挿入・areaNameは既存areaName=""から抽出。
- **記事→エリア内部リンクモジュール拡張**(app/articles/[slug]/page.tsx「地域からスタジオを探す」): 未リンクの otemachi/tokyo/gion-shijo を追加(既存7→10)。全記事(57本)からstriking系へ内部リンク面拡大。
- refresh-updated-dates→build EXIT0→方式B(rsync **--exclude .git/functions**・functions{click,clicks,contact,geo}保全前後確認)→両push→本番6/6が200＆両セクション描画確認(tokyoはエッジ伝播ラグで再確認)＆/api/contact 400(正常)→**Indexing API 6/6(200)**。
- ⚠️検証時のzsh word-split罠に注意(別サイトで`for s in $SLUGS`が非分割→誤検出。inline列挙で回避)。
- **残Week1差分(次回)**: ①既存1ページ目53クエリのtitle/メタCTR磨き ②tokyo/tokyo-stationのカニバリ(canonical統合) ③飯田橋モデルケース→深部17本へ横展開(Week2-3)。KPI=固定24クエリ(striking6+深部18)の週次追跡・30日でstriking6中2本未満なら見直し。

### 2026-07-20 Week2 ①CTR磨き＋②tokyoカニバリ統合（MediaXAI「①②進めてください」）✅本番反映済み
GSC実測で対象特定→改修。
- **①1ページ目CTR磨き**: hamamatsuchoが「浜松町/大門 ピラティス 無料体験」で**pos7〜8・計166imp・0click**（title先頭が「10社を比較」で無料体験意図が弱かった）→title「浜松町・大門で**無料体験できる**ピラティス10社｜大門駅すぐ・料金比較」に。yagotoも「八事 ピラティス」pos8.6/49imp/0click→「八事のピラティス5社を比較｜**無料体験・八事駅すぐ**・マシン対応」に。description も意図前出しに刷新。
- **②tokyo/tokyo-stationカニバリ統合**: 実測で**/area/tokyo/は表示0（休眠）**・tokyo-stationが「東京駅 ピラティス」(37imp/pos20)を保持。カニバリでなく休眠重複→**/area/tokyo/のcanonicalをtokyo-stationへ**向けて統合（equity集約）。
- refresh-dates→build EXIT0→方式B(functions保全)→両push→本番hamamatsucho新title＆tokyo canonical=tokyo-station確認→Indexing 4/4。効果1-2週GSC(無料体験クエリのCTR転換)。
- 残Week2: 「飯田橋」モデルケース化→深部17本テンプレ横展開（未着手）。

### 2026-07-22 Week2 飯田橋モデルケース化（MediaXAI「この内容で進めよう」）✅本番反映済み
深部横展開の勝ちテンプレを飯田橋(87imp/pos52・独自データ枠未搭載だった)で確定。
- **7点フル実装**: ①AreaConclusion(結論box) ②AreaMarketComparison(211集計データ+SVG) ③AreaModifierSections(初心者/マシン) ④意図前出しtitle「飯田橋・神楽坂のピラティス11社を比較｜無料体験3社・駅すぐ・月額最安10,450円〜」+description刷新(211調査言及) ⑤地域特性(components内蔵) ⑥FAQ+schema(既存) ⑦記事module(app/articles/[slug])にiidabashi追加。**⚠️同時に記事moduleのtokyo→tokyo-station修正**(先日canonical統合した休眠slugを指していた)。
- 実装法=既存冪等スクリプト再利用: enhance-area-phase0.py(SLUGS)にiidabashi追加→AreaMarketComparison+title / add-area-conclusion-202606.py(TARGETS)にiidabashi追加→AreaConclusion / AreaModifierSectionsは手動injector(import後+`</main>`前)。
- refresh-dates→build EXIT0→方式B(functions保全)→両push→本番4/4コンポーネント描画確認→Indexing 200。
- **次=深部17本へテンプレ横展開**(豊洲/関内/厚木/枚方/尼崎/豊橋/錦糸町/心斎橋/金沢/姫路/赤羽/つくば/日暮里/王子/目黒等)。飯田橋の効果初動(1-2週GSC)を見てからバッチ実行予定。スクリプトのSLUGS/TARGETSに追加＋modifier injectorをループ化すれば一括可能。

### 2026-07-22 Week2 深部15ページへ勝ちテンプレ横展開（MediaXAI「進めてください」）✅本番反映済み
飯田橋で確定した勝ちテンプレ(結論box+211データ+初心者/マシン)を深部高需要ページ(pos31+×表示45-87)へ一括展開。
- **対象15**: toyosu/kannai/honatsugi(本厚木)/hirakata/amagasaki/toyohashi/kinshicho/shinsaibashi/kanazawa/himeji/akabane/tsukuba/nippori/oji/meguro。監査で不足分だけ注入(冪等)=AreaConclusion 13追加・AreaMarketComparison 既存分スキップ+不足追加・AreaModifierSections 15全注入。最終全15がC=1/MC=1/MD=1。
- 実装=enhance-area-phase0.py SLUGS＋add-area-conclusion-202606.py TARGETSに15追加して実行＋modifier injectorを15ループ。**⚠️zsh word-split罠再発**(`for s in $TARGETS`非分割→inline列挙で回避)。**atsugi=honatsugi(本厚木)**が実slug。
- refresh-dates→build EXIT0→方式B(functions保全)→両push→本番sample 4/4描画確認(edge伝播ラグで一部node遅延=?cb再確認)→**Indexing 15/15**。効果1-2週GSC(深部pos31+→クリック圏への浮上)。
- **これでpilates Week2完了**(①CTR磨き②tokyo統合③飯田橋モデル④深部15横展開)。KPI=固定24クエリ週次追跡・30日でstriking6中2本未満なら見直し。次候補=新規エリア量産解禁(1ページ目シェア10%超が条件・現3.9%→まだ早い)or 効果測定後の残深部展開。

### 2026-07-29 24/7ピラティス felmatアフィリ設置（MediaXAI URL共有）✅本番反映済み
- `scripts/add-247pilates-felmat-202607.py`(Dr.ピラティス版のsed複製・NAME_RE=24[/／]7)=**全29店ブロックにofficialUrl設置**(差替28+挿入1)。テキストak=J11817X.1.B1620582
- StudioCard+ブランドCTA下にfmimpピクセル/brands.ts 24-7pilates ctaUrl→felmat・isPartner→true
- バナー7種のうち300×250(6162671D)=PC/320×50(F162669F)=モバイルを採用(120×60/300×300/320×100/600×500は未使用・要望あれば追加)
- 掲載URL=エリア28+ブランド1=29件。**アフィリ設置の確立手順**: ①add-{brand}-felmat/a8スクリプト(冪等・別アフィリURLスキップ) ②StudioCardピクセル条件追加 ③brands.ts ctaUrl/isPartner ④ブランドページバナー(PC=300×250/モバイル=320×50) ⑤build検証(リンク数/ピクセル/PR表記)→方式B→本番確認→URL一覧を本文直貼り

### 2026-07-29 Dr.ピラティス felmatアフィリ設置（MediaXAI URL共有）✅本番反映済み
- `scripts/add-drpilates-felmat-202607.py`(冪等・zen place版と同ロジック)=**全29店ブロックにofficialUrl設置**(公式URL差替28+挿入1)
- **⚠️訂正あり(同日)**: 初回は静的PNG+テキスト用クリックURLでバナー実装→MediaXAIが正規タグを再共有。正=**バナーごとに専用ak**(250×250=51645873/300×250=V164586G/320×50=X164585F・画像はt.felmat.net/fmimg/)+**テキストリンクにfmimpインプレッションピクセル必須**。StudioCard(officialUrlにZ164554L含む場合)とブランドCTA下にfmimp設置済み。**教訓: felmatにも案件によりピクセルがある。バナーは必ず提供タグのクリック/画像URLペアをそのまま使う**
- brands.ts dr-pilates: ctaUrl→felmat/isPartner→true(PR表記)。officialRefは公式のまま
- /brands/dr-pilates/ にバナー: 300×250(md以上)+320×50(モバイル)。250×250は300×250と重複のため不採用
- 掲載URL=エリア29+ブランド1=30件(本文直貼りで共有・MediaXAIはファイル添付でなく本文希望)
- ⚠️アフィリ未掲載残: Mee164/pilatesK156/Rintosull144/CP94/SILK88/24-7 29/BDC22/メルメイク3/DAYS3 + 提携済一部未設置(URBAN11/Lucina3/ELEMENT1/Celestia1)

### 2026-07-29 zen place A8アフィリエイト設置（MediaXAI 3パターン共有「適切にすべて掲載」）✅本番反映済み
- **テキストリンク(a8mat=4B650J+3SXRGI+4LQ4+5YJRM)**: `scripts/add-zenplace-a8-202607.py`(冪等)で**zen place全220スタジオブロックにofficialUrl設置**(既存zenplace.co.jp差替18+新規挿入202・想定外URLはスキップ設計)→StudioCard「公式サイトを見てみる」が自動でrel=sponsoredアフィリ化(191エリアページ)。AI相談ツールもofficialUrl参照で自動反映
- **StudioCardにA8計測ピクセル**: officialUrlが当該a8mat含む場合のみ1x1画像を描画
- **brands.ts zen-place**: ctaUrl→A8/isPartner→true(PR表記自動表示)。officialRef(情報引用元)は公式のまま=zen placeレギュレーション維持
- **バナー2種**: /brands/zen-place/ CTA節にslug限定で300x250+468x60(mdのみ表示)+各ピクセル・rel="nofollow noopener noreferrer sponsored"
- 掲載URL一覧=エリア191+ブランド1=192(scratchpad/zenplace-urls.txt→Discord共有済み)。方式B両push・本番確認

### 2026-07-28 do/know/go戦略v2 Phase1実行（MediaXAI 7/27「進めて」）✅本番反映済み
戦略v2（`~/.openclaw/workspace/pilates-strategy-do-know-go-2026-07-27.md`＝投資順序をgo>do圏内>knowに並べ替え）のPhase1。
- **D1/D2: 無料体験セクション新設**: `AreaModifierSections`に「{エリア}で無料体験できるピラティススタジオ」軸を追加(id=free-trial)→搭載済み全55エリアに自動反映。無料判定は『無料』表記＋parseYen==0のみ(0円誤マッチ回避)。無料ゼロのエリアは正直にその旨＋体験安い順TOP3。数値突合OK(浜松町2/秋葉原2/東京駅3=元データ一致)
- **圏内9エリアに勝ちテンプレ注入**: tokyo-station(3点フル)/shin-osaka/shin-okubo/esaka/shonan/ebina/futakotamagawa/chofu/takadanobaba。`scripts/inject-modifier-202607.py`(冪等)新設＋既存enhance-area-phase0.py/add-area-conclusion-202606.pyのリスト追加。Indexing 54/54
- **G2: ブランド公式店舗数(一次情報)**: エージェント調査で7社の公式店舗数を検証取得→`brands.ts`に`officialStores`型(count/kind=公式明記|一覧実数/caveat/sourceUrl/asOf)追加: pilates-k176/rintosull260(公式明記・LAVA店内含む注記)/zen-place136(グループ150は別記)/club-pilates86/kasane42/pilates-mee142/the-silk44。ブランドページ=結論box1欄目を全国店舗数化+出典リンク注記+「店舗数は？」FAQ自動追加(FAQSchema同期)。pilates-k titleを「店舗一覧・店舗数・料金」前方に
- **🐛重大バグ修正**: brands/[slug]の無料体験判定`includes('0円')`が「1,000円/3,300円」に誤マッチ→**zen placeが149店無料表示(実際11店)**などの過大表示を修正(isFreeTrial=『無料』+parseYen==0)。AreaMarketComparisonと同型バグの残存だった。教訓: 過去に潰したバグパターンは後発コードにも必ずgrep(`includes('0円')`)
- 方式Bデプロイ×2(functions保全確認)・両push・本番確認・Indexing計70送信。KPI=週次クリック35→100(3ヶ月)・do/know/go別週次観測。**残Phase2=G1店舗別ページ30店(gym-lumi手法)/Phase3=know刈込+独自データ記事+週次計測**

### 2026-07-28 Phase2=G1店舗別ページ18本（MediaXAI「phase2進めて」）✅本番反映済み
戦略v2のPhase2。GSCで表示実績のあったブランド×店舗クエリの受け皿を量産(既存受け皿14→計32店舗)。
- **`scripts/gen-g1-stores-202607.py`**(冪等)=brands-aggregate.jsonの検証済み実データから`data/g1-stores.ts`+`app/brands/{slug}/page.tsx`を生成。**新規調査なし=転記のみで捏造リスクゼロ**。⚠️候補選択は「具体住所優先」(最初はaddress最長で選び、Mee大井町が曖昧住所の重複エントリを拾った→修正)。⚠️「王子店」は「八王子店」に前方文字検査で誤マッチ回避
- **新規18店**: リントスル11(天王寺/本厚木/豊橋/明石/高松/天神/西新/大井町/王子/茨木/阿佐ヶ谷)+クラブピラティス3(辻堂/福岡西新/江坂)+the SILK大門浜松町+KASANEつくば+Mee大井町+ピラティスK八王子。湘南台KASANE・シルク横浜はaggregateに該当なし=正直に見送り
- **BrandAreaReceiver改修**: ①LD areaServedの「（東京都）」ハードコード修正(西宮北口が東京都表記になっていた事実誤り→`prefecture?`フィールド新設・既存vague店4件に付与) ②情報引用元リンク表示(the SILKレギュレーション対応・全ブランドで公式officialRefを表示)
- **内部リンク**: 全32受け皿の対応エリア30ページに「店舗別ガイド」callout注入(`g1-link-202607`マーカー冪等)。既存受け皿が50位台に沈む一因=エリアページからのリンクゼロ(sitemapのみ)だったのを解消
- **sitemap生成器をg1-stores.ts動的抽出化**=今後の店舗追加は自動収録。495URL
- build EXIT0・数値/誤マッチ検査OK・方式B(functions4本保全)・両push・本番200・Indexing 18/18+sitemap再送信。効果1-2週GSC(店舗指名クエリpos10-40の刈り取り)

### 2026-07-23 深部展開第2弾24ページ（MediaXAI「深部ページへの展開進めよう」）✅本番反映済み
第1弾15に続く高需要深部(pos22+×表示20+)24ページへ勝ちテンプレ一括適用: asakusa(191)/akihabara(178)/nishi-nippori(147)/aoyama-itchome/kagurazaka/shibuya/seijo-gakuenmae/shimokitazawa/umeda/akasaka/kitahama/koenji/yoga-komazawa/nishijin/omiya/izumi/otsuka/nihonbashi/kyoto-station/nakano-sakaue/yoyogi-uehara/itami/fujisawa/ogikubo。冪等スクリプト(enhance-phase0 SLUGS+add-conclusion TARGETS)+modifier injector。全24 C/MC/MD完備確認。build EXIT0・方式B(functions保全)・両push・本番asakusa確認・Indexing 24/24。**累計深部展開=飯田橋モデル+第1弾15+第2弾24=40ページ**。効果1-2週GSC。残候補=さらに深いpos40+(shibuya60/omiya71/osaka73等・低順位で効果は逓減)。

### 2026-08-17 口コミ要約の照合厳格化＋functions欠落の再発を修復（MediaXAI「まだ終わってない対象進めよう」）✅本番反映済み
- **公開済み130件を監査→13件が別の店の口コミ要約だった**（例: 掲載「ピラティス sloths」(名古屋・八事)→Google「Rintosull 戸越公園店」／「PILATES × YOGA」(大阪本町)→「La pilates 目黒店」／「CLUB PILATES 渋谷」→「代官山店」）。原因＝`verify-match.py` の judge() が **総称語（ピラティス/スタジオ）でもブランド一致と判定**していたこと。13件削除。
- **照合を3段構えに作り直し**（`~/.openclaw/workspace/places-api/verify-match.py` judge_strict）: ①掲載名が総称語のみ/プラン名（月4回プラン等）は不採用 ②英字ブランドが両方にあれば一致必須（ピラティスK と Dr.ピラティス を弾く）③Google側の地名が掲載名にもページのエリア名にも無ければ不採用（`pick-candidates.py` の area_conflict。「STUDIO SLOW」(本厚木)→「studio Slow 自由が丘」＝レンタル撮影スタジオを止めた）。採用 735→682件
- 要約37店舗追加（計154）。追記は `places-api/add-summaries.py`（★評価・件数・出典URLはjsonの実データから入れる＝手入力しない）
- **🚨 functions/ 欠落が再発していた**: deploy repoの **8/10コミット `63e82cd56`「Pilates Mee 計測リンク設置を反映」で functions/api/{click,clicks,contact,geo}.js が全削除**され、本番で `POST /api/contact`=405・`/api/geo`=404・`/api/click`=404（＝**問い合わせフォームと送客クリック計測が8/10から停止**）。`git checkout 63e82cd56^ -- functions` で復元しデプロイ→400/200を確認。**教訓の再確認: rsyncの`--exclude=functions`は「在る場合のみ」保護。デプロイ前に `ls ../pilates-biyori-deploy/functions/api/` と本番 `/api/contact` の実測を必ずやる**
- 未処理: **同一店を別表記で二重掲載している組が37組**（「the SILK 八重洲店」と「the SILK 東京八重洲店」等）。今回は片方のみ要約。残り要約 約490件

### 2026-08-20 口コミ要約を照合済み全店へ完了（MediaXAI「引き続き進めて」×多数）✅本番反映済み
- **109 → 569店舗（+460）／要約カード 264 → 662枚**。`pick-candidates.py` の「残り」= **0件**（照合済み・要約なし＝ゼロ）。バッチ37〜50を13前後ずつ、口コミ本文を全読みして作成。
- **除外リスト `~/.openclaw/workspace/places-api/skip-names.txt` を新設**（pick-candidates.py が読み込み、`name<TAB>理由` 形式）。毎回手で外していた店を恒久化＝**44件**。内訳: Dr.ピラティス各店(Google名=Dr.トレーニング)/Le Mieux(実体はアロマサロン)/NOA(久留米ページだがGoogleは新宿)/Flow鹿児島(口コミが全て駒沢公園)/ピラティスK新橋(支店名なしで特定不可・ZENの話が混在)/★のみで本文なし4件/**サイトのどのページにも掲載が無い旧データ22件**(OUTLINE・UNDEUX・ビーコンセプト等)。
- ⚠️ `PILATES & PERSONAL GYM LAULE\` は掲載名にバックスラッシュが含まれ、TS書き出し時のエスケープ差で done 判定を毎回すり抜ける→skip登録で解決。
- ⚠️ **重複掲載組**（「Pilates Mee 川口店」と「Pilates Mee川口店」等）は `done_places` の place_id 重複スキップで2つ目が候補に出ない。**両方に同じ要約を明示的に書く**必要がある（今回11組対応）。
- **編集方針（維持）**: 口コミ本文の転載はしない／個人名（インストラクター名）は載せない／★のみの店は正直に「判断材料が少ない」と書く／効果は盛らず「劇的に痩せたわけではないが〜」等の段階表現をそのまま拾う／低評価は提携ブランドでも同基準で掲載（URBAN CLASSIC青葉台★2・川口★4を掲載。MediaXAIに方針確認済みとして報告）。
- **要約から抽出された横断論点**（比較記事の素材）: ①解約8件（条件/手続き未処理で3か月請求継続/来店必須・電話不可/退会後2年半引き落とし継続=LAVA佐賀）②予約（受け放題なのに取れない=Rintosull日吉・戸塚・国分寺/BDC恵比寿・池袋/ピラティスK新百合ヶ丘/Mee横浜/Rintosull豊中 ⇔ 解消例=Rintosull川崎マシン増設/Mee松戸3か月繰越/the SILK高田馬場は新店で取りやすい）③料金体系変更（YUZU学芸大学がチケット制→サブスク制）④月額に個別指導が含まれない（URBAN CLASSICは追加3,300円）⑤良い例（noa駒沢=違約金なし・回数券繰越無期限／NATURAglam経堂=自分で退会できる／the SILK川崎=無理な引き止めなし）⑥医療背景の受け皿（理学療法士系=INSIGHT中央林間/juncus広島/DEP岡山、術後リハビリ=Studio Breathing大橋/Rintosull大井町68歳）。
- **健康上の注意を1件挿入**: ホットヨガロイブ別府の口コミに「腎機能低下でホットヨガが不適と後から知った（公式に医師相談の記載あり）」→要約に「持病がある場合は事前に主治医に確認したい」を明記。
- 毎バッチ: `add-summaries.py` → `refresh-updated-dates.py` → build → 方式B(rsync **--exclude .git/functions**) → 両push → **本番=ビルドの要約カード数一致をページ単位でcurl検証** → Indexing API。⚠️CFエッジ伝播に数十秒〜数分ラグがあるので、件数不一致は即バグとせず `?v=$RANDOM` で再確認する。⚠️`grep -c` は行数（minified HTMLは1行）なので **`grep -o ... | wc -l`** を使う。

### 2026-08-21 エクササイズ解説7本追加（MediaXAI「前半3つ続けつつ、後半4つは図解を含めた形で」）✅本番反映済み
- **前半3本**（図解なし）: シングルレッグキック / バイシクル / ヒップツイスト。
- **後半4本**（図解つき・上級）: スワンダイブ / ジャックナイフ / コークスクリュー / ブーメラン。**エクササイズ解説は13→20本、記事総数84本、sitemap 515URL、Indexing 8/8。**
- **`components/articles/ArticleFigures.tsx` に上級種目用の図解4種を追加**（`SwanDiveArcDiagram` / `JackknifeWeightDiagram` / `CorkscrewCircleDiagram` / `BoomerangSequenceDiagram`）。設計方針＝**装飾ではなく「文章だと読者が高さ・大きさを目標にしてしまう箇所」に限定**し、危険域と安全域を面で示す。⚠️ MDXから呼ぶので **props なし**（objectをpropで渡すとMDXが解釈できない。専用コンポーネント化する既存ルール）。
- **安全のための書き分け**（量産のために丸めない）:
  スワンダイブ=腰椎既往/椎間板/妊娠中は対象外、高さの基準は「恥骨がマットから離れない範囲」／
  ジャックナイフ=判断基準を「首に体重が乗ったらその回は終わり」の1つに絞る・脚が床に届く必要はないと明記・効果の大半は戻る局面／
  コークスクリュー=3段階に分け、骨盤を持ち上げる第2・第3段階だけにCautionNote（第1段階は条件が違う）／
  ブーメラン=通す前提条件（ロールオーバーとティーザーが単体でできること）を明示。**「慣れればできる」とは書かない。**
- 内部リンク: 20選ハブの該当6項目→個別記事（ブーメランはハブに項目が無いため関連記事側から接続）、既存9記事の relatedArticles にも追加。ハブからのリンク32本。
- **残りのオリジナル34本**: ネックプル / ヒップサークル / スイミング / レッグプルフロント・バック / サイドベンド / シール / クラブ / ロッキング / コントロールバランス / プッシュアップ（上級寄りが多く、同じく図解つきで作れる）。

### 2026-08-21（続き）エクササイズ解説11本追加＝オリジナル34本の主要種目を網羅（MediaXAI「続けて！」）✅本番反映済み
- **追加11本**: ネックプル / ヒップサークル（プレップ） / スイミング / レッグプルフロント / レッグプルバック / サイドベンド / プッシュアップ / シール / クラブ / ロッキング / コントロールバランス。**エクササイズ解説 20→31本、記事総数95本、sitemap 526URL、Indexing 12/12。**
- **図解は2種を新設し、残りは既存を使い回した**（`PlankLineDiagram`＝一直線/腰が落ちる/お尻が上がる → レッグプルF・B/サイドベンド/プッシュアップの4本で共用、`RollingRangeDiagram`＝転がってよい範囲 → シール/クラブで共用。`SwanDiveArcDiagram`→スイミング/ロッキング、`JackknifeWeightDiagram`→コントロールバランスを再利用）。**方針＝同じ危険には同じ図を出す**（種目ごとに作り分けると同じことを違う絵で言うことになり、読者が基準を覚えられない）。
- **安全側に倒すと「やらない」が結論になる種目は、そう書いた**: ロッキング=腰に来るならスワンに戻る／クラブ=額をつける局面は省いてよい／コントロールバランス=足首を持つのは最終形であって条件ではない／サイドベンド=肩が痛むならサイドキックに替える／プッシュアップ=押す局面を省いても主要部分は残る。**完成形を目標にさせない書き方**で統一。
- **20選ハブに「オリジナル34本のうち、この記事に載せていない種目」の一覧表を新設**（12本＝今回11本＋ブーメランへリンク・「どの種目の発展形か」を並記）。ハブからのmethodリンクは45本。
- 次: ①1〜2週後にGSCで効果測定（エクササイズ解説31本の合計表示／図解つき記事との差）②未着手領域＝マシン種目（リフォーマー系）の解説。

### 2026-08-22 マシン別の解説5本＋既存2本の強化（MediaXAI「マシン別の解説進めて」）✅本番反映済み
- **新規5本**: キャデラック / チェア（ワンダチェア） / ラダーバレル / スパインコレクター / マジックサークル。**記事100本、sitemap 531URL、Indexing 9/9。**
- ⚠️ **既存記事と食い合わせないため、リフォーマーとマシン種類は新規作成せず中身を足した**（`pilates-reformer-towa`＝各部の図＋スプリングの節／`pilates-machine-types`＝4機種マップ図＋各機種→個別記事リンク＋小型器具の節）。**ハブ（種類比較）→ 個別5本**の関係に整理。ハブからのリンク12本。着手前に必ず `ls content/articles | grep` で既存を確認すること（machine-pilates-beginner・mat-machine-difference・pilates-machine-types・pilates-reformer-towa が既にあった）。
- **図解3種を新設**（`ReformerPartsDiagram` / `SpringLoadDiagram` / `MachineMapDiagram`）。**中心は SpringLoadDiagram＝「スプリングは強い＝きつい ではない」**（押し出す動きは強いほどきつい／引き戻す・支える動きは強いほど楽＝動きの向きで逆転する）。読者が指導者に伝えるときの実務（「きつくして」ではなく「どの動きで物足りないか」を言う）まで書いた。
- 各記事の芯: キャデラック=負荷を足す道具ではなく**引き算ができる**道具・台数が少なくパーソナル中心なので機種指定で予約／チェア=小さいのに難しい理由は**支える面積が小さい**から／ラダーバレル=4機種で唯一スプリングなし・床で反ると腰に集中する人向け／スパインコレクター=**当てる位置がすべて**（腰に当てて反らせるのは狙いから外れる）／マジックサークル=**強く挟むほど効くは誤解**・役割は場所を分かりやすくすること。
- ⚠️ 図解のコード中に韓国語文字（바）を混入させてビルド後に気づいた。**日本語のSVGラベルは書いたあとに `grep -P '[\p{Hangul}]'` 相当のチェックをする**。
- 次: ①マシン種目の実技解説（フットワーク/ロングストレッチ/エレファント等）＝ただし器具設定が前提なので「スタジオで指導を受ける前提」と明記する必要あり ②エクササイズ解説31本・図解つき記事の効果測定（1〜2週後）。
