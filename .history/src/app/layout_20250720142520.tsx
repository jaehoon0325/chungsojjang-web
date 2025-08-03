import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "청소짱 - 전문 청소 서비스",
  description: "신뢰할 수 있는 전문 청소 서비스 청소짱입니다. 가정집, 사무실, 상가 청소 전문업체로 깨끗하고 안전한 환경을 만들어드립니다.",
  keywords: "청소, 청소업체, 가정청소, 사무실청소, 상가청소, 전문청소, 청소서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
