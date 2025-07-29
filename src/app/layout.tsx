import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID } from "@/lib/gtm";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";
import { Header } from "@/components/organisms/Header";

const roboto = Roboto({
  subsets: ["latin"], // Specify necessary subsets
  weight: ["400", "700"], // Specify desired font weights
  variable: "--font-roboto", // Optional: Define a CSS variable for easier use with Tailwind CSS or custom CSS
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
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
