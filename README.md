# Pilates Navi（ピラナビ）

あなたに最適なピラティスが見つかるメディア

## 技術スタック

- **フレームワーク:** Next.js 15 (App Router)
- **言語:** TypeScript
- **スタイリング:** Tailwind CSS
- **UIコンポーネント:** shadcn/ui
- **アイコン:** Lucide React
- **コンテンツ:** Markdown (MDX)

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番環境起動
npm start
```

## ディレクトリ構成

```
site/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 全体レイアウト
│   ├── page.tsx           # トップページ
│   └── globals.css        # グローバルスタイル
├── components/            # コンポーネント
│   └── ui/                # shadcn/ui コンポーネント
├── content/               # コンテンツ
│   └── articles/          # 記事（Markdown）
├── lib/                   # ユーティリティ
├── types/                 # 型定義
├── public/                # 静的ファイル
│   └── images/            # 画像
├── tailwind.config.ts     # Tailwind設定
├── next.config.ts         # Next.js設定
└── tsconfig.json          # TypeScript設定
```

## 開発ステータス

- [x] プロジェクト初期化
- [ ] コンポーネント作成
- [ ] 記事詳細ページ
- [ ] カテゴリページ
- [ ] トップページ完成

## ライセンス

ISC
