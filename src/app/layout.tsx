import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID } from "@/lib/gtm";
import Footer from "@/components/organisms/Footer";
import "./globals.css";
import { Header } from "@/components/organisms/Header";

export function generateMetadata({
  pathname,
}: {
  params?: string;
  pathname?: string;
}): Metadata {
  let title = "PostcardTrip - Tailored Travel Experiences";
  if (pathname) {
    if (pathname.startsWith("/destinations")) {
      title = "Destinations | PostcardTrip";
    } else if (pathname.startsWith("/packages")) {
      title = "Packages | PostcardTrip";
    }
  }
  return {
    title,
    description:
      "PostcardTrip offers personalized travel packages to breathtaking destinations. Explore our curated experiences and create unforgettable memories.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={` antialiased `}>
        <Header />
        {children}
        <Footer />
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
