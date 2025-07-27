import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID } from "@/lib/gtm";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";
import { Header } from "@/components/organisms/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PostcardTrip - Next.js 15 with shadcn/ui",
  description:
    "A modern Next.js 15 application built with shadcn/ui components and Tailwind CSS v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
