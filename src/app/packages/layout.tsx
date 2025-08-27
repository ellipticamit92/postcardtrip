import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages | PostcardTrip",
};

export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="min-h-screen bg-background">{children}</div>
    </main>
  );
}
