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
  title: "청소반장 - 프리미엄 청소 솔루션",
  description: "20년 경험의 프리미엄 청소 전문기업 청소반장입니다. 가정, 사무실, 상업공간까지 차별화된 청소 서비스로 완벽한 공간을 만들어드립니다.",
  keywords: "청소반장, 프리미엄청소, 청소업체, 가정청소, 사무실청소, 상가청소, 전문청소, 청소서비스, 고급청소",
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
