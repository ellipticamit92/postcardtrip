"use client";
import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";

export default function RichText({ content }: { content?: string | null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents mismatch

  const clean = content ? DOMPurify.sanitize(content) : "";
  return (
    <span
      className="prose prose-neutral max-w-none"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
