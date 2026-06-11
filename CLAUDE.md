# pilates-biyori — ピラティススタジオ比較

本番: **https://biyori-pilates.com/**（repo名と語順が逆。pilates-biyori.comは別物404）
Discord ch: `1487358680671326259` / deploy: out/ を rsync で pilates-biyori-deploy へ→両repo push→CF Pages（反映~40-60秒）

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

### 2026-06-11 問い合わせシステム構築（peatbidパターン移植）
- `/contact/`（app/contact/page.tsx＋components/ContactForm.tsx）→ POST `/api/contact` → pilates-biyori-deploy の `functions/api/contact.js` → Discord Webhook通知（MediaXAI＋tomomiメンション）
- footer「お問い合わせ（広告出稿・掲載）」（旧/#aboutアンカーを置換）/sitemapに/contact/追加
- **⚠️rsyncは`--exclude="functions"`必須**（--deleteでFunction消失。他Botがpilatesをデプロイする時も同様）
- 要手動設定: pilatesチャンネル(1487358680671326259)でWebhook作成→pilates-biyori-deployのCF env var `DISCORD_WEBHOOK_URL`(Secret)→再デプロイ。**CFアカウントはMediaXAIに要確認**（peatbid=webmaster0818だった。思い込み禁止）
- 返信メールは既存の webmaster@mediax.biz 基盤を共用（`gsc-api/send_reply.py --from-name "Pilates-Biyori編集部"`）

**⚠️発見: 19エリアページの本文にU+FFFD文字化けが大量に存在（計1,100カ所超）**: oita/komazawa-daigaku/ikejiri-ohashi/chuo-rinkan/tsunashima/kasukabe/wakoshi/chitose-funabashi/kyodo/toyonaka/kugayama/kanayama/honancho/nijo/shinjuku/shin-yurigaoka/fujimino/sakura-shinmachi/soka。**ページ生成時（初回コミット時点）から壊れており**git履歴に正常版なし。
**✅修復完了(2026-06-11 15:50頃、MediaXAI承認後)**: `scripts/repair-mojibake.py`＝クリーン271ページをコーパスに化け箇所の前後文脈で照合復元（候補が単一or80%+収束時のみ採用）→固有名詞辞書→残り74カ所は文脈で個別辞書化。**全489run修復・FFFD残ゼロ**、本番5ページで確認済み。副次修正:「。。」重複句点3ファイル10カ所(nara/otsu等、化けとは別の既存問題)。教訓: 同型テンプレページ群なら壊れページはサイト自身の正常文から復元できる（捏造回避）。
