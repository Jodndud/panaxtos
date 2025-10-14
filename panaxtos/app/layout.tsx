import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export const metadata: Metadata = {
  title: "PANAXTOS",
  description: "뇌과학 1위 기업 파낙토스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="default-container pb-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
