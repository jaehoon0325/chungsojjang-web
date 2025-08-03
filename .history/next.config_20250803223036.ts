import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    suppressHydrationWarning: true, // 개발 중 hydration 경고 감소
  },
  // 이미지 최적화를 위한 설정
  images: {
    domains: [
      'images.unsplash.com', 
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com' // Google 프로필 이미지
    ],
  },
};

export default nextConfig;
