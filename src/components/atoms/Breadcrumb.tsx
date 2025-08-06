"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  let path = "";

  return (
    <nav aria-label="breadcrumb" className="mb-4 text-sm text-gray-600 p-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline text-primary-600">
            Home
          </Link>
        </li>
        {segments.map((segment, idx) => {
          path += "/" + segment;
          const isLast = idx === segments.length - 1;
          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-semibold text-gray-900">
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link href={path} className="hover:underline text-primary-600">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
