import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations | PostcardTrip",
};

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
