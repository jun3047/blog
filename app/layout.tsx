import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSuite = localFont({
  src: [
    { path: "./fonts/SUITE-Variable.woff2", weight: "100 900" },
    { path: "./fonts/SUITE-Variable.ttf", weight: "100 900" },
  ],
  variable: "--font-suite",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jun",
  description: "hi I'm Jun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSuite.variable} font-suite antialiased`}>
        {children}
      </body>
    </html>
  );
}
