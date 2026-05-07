import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
//   axes: ["opsz"],
// });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",

});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "TEDXRUN",
  description: "The official site of TEDx Redeemers University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-serif antialiased bg-[#000000] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
