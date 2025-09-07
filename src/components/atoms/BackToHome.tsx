"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BackToHome = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-ocean hover:text-ocean/80 mb-8"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </Link>
  );
};

export default BackToHome;
