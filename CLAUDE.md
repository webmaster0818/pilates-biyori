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
