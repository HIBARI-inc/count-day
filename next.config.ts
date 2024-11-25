import { NextConfig } from "next";

// Next.jsの設定
const nextConfig: NextConfig = {
  reactStrictMode: true,
  //basePath: "/nextjs", // 基本パスの設定
  images: {
    domains: ["example.com"], // 画像のホスティング元を許可
  },
  env: {
    CUSTOM_ENV_VAR: process.env.CUSTOM_ENV_VAR, // 環境変数を公開する場合に使用
  },
};

// 設定をエクスポート
export default nextConfig;
