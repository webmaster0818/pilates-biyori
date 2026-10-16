サイト掲載文のビジネス文書化（writing-standards.md §8・2026-10-16）で使った変換ツール。
生成スクリプトで本文を追加・再生成したら、コミット前にリポジトリ直下で実行する（冪等）。
  python3 scripts/copy-style/apply_tsx.py 'app/area/*/page.tsx' data/area-studios.ts --write   # エリアページ・店舗データ
  python3 scripts/copy-style/apply_md.py --write                                             # content/articles
  python3 scripts/copy-style/run_reviews.py --write                                          # data/studio-reviews.ts の口コミ要約
- 「」『』内（口コミ・公式の引用）と（）内は変換しない。変換できない文末は UNKNOWN として表示するので手で直す。
- mapping.py = 定型文の置換表（導入の挨拶削除・「〜しましょう」→「ご確認ください」等・コスパ/OK などの口語）。
- ASPの提供リンク文言・バナーには使わない（components/ は手作業で直した）。
