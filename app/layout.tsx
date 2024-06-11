import type { Metadata } from "next";
import "./globals.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ExMed Inc.",
  description: "Digital home of ExMed Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hide-scrollbar bg-primary">
        <article>
          <Header />
          <main className="relative overflow-hidden min-h-vh">{children}</main>
          <Footer />
        </article>
      </body>
    </html>
  );
}
