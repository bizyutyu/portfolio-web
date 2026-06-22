This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 画像を追加する際の手順

`public/images/` 配下に新しい画像を追加する場合、EXIF（位置情報・撮影機種・撮影日時等）やテキストメタデータがカメラ・編集ソフトによって埋め込まれている可能性があるため、公開前に必ず除去すること。

1. `public/images/` または `public/images/posts/` に画像を配置する
2. `scripts/strip-exif.mjs` の `targets` 配列に新しい画像のパスを追加する
3. 依存パッケージをインストールする（初回のみ。pnpm のビルドスクリプト承認プロンプトが出る場合は承認する）

   ```bash
   pnpm install
   ```

4. EXIF除去スクリプトを実行する

   ```bash
   pnpm images:strip-exif
   ```

5. 処理後、画像の見た目・解像度に問題がないかブラウザで確認する
6. `git diff --stat` でファイルサイズの変化を確認する

このスクリプトはICCカラープロファイルのみ保持し、EXIF・Photoshop系テキストメタデータ（tEXt/zTXt/iTXt）を除去する。ピクセルデータが変化していないことをスクリプト内で自動検証し、不一致があれば処理を中断する。ロスレス再エンコードのトレードオフとして、ファイルサイズが元画像より増加することがある。

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
