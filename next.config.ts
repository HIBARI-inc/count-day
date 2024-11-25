import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: "/count-day", // GitHub Pagesのパスに合わせる
  assetPrefix: "/count-day", // 静的ファイルのパスにもbasePathを追加
  images: {
    unoptimized: true, // GitHub Pages用に画像最適化をオフにする
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/count-day",
  },
};

export default nextConfig;
