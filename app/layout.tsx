import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "メンズ脱毛ラボ｜メンズ脱毛おすすめクリニック比較【2026年最新】",
    template: "%s｜メンズ脱毛ラボ",
  },
  description:
    "メンズ脱毛の比較・口コミ情報サイト。ゴリラクリニック・メンズリゼ・湘南美容など人気6社の料金・効果・痛みを徹底比較。医療脱毛とサロン脱毛の違いも解説。",
  metadataBase: new URL("https://mens-datsumou-lab.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "メンズ脱毛ラボ",
  },
  alternates: {
    canonical: "https://mens-datsumou-lab.pages.dev/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
