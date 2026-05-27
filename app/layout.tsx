import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "个人网站",
  description: "文艺清新风格的个人网站，集成博客、作品集、简历功能",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
