import React, { useState } from "react";
import Link from "next/link";
import { MENU_LINKS } from "@/lib/constant";
import { ChevronDown } from "lucide-react";

type MenuItem = {
  title: string;
  href?: string;
  dropdown?: boolean;
  items?: { title: string; href: string }[];
};

const menu: MenuItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Packages",
    dropdown: true,
    items: [
      { title: "Kerala", href: "/kerala" },
      { title: "Dubai", href: "/dubai" },
      { title: "Himachal", href: "/himachal" },
    ],
  },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
];

export function MenuBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="flex gap-6 items-center">
      {MENU_LINKS.map((item) =>
        item.child && item.child ? (
          <div
            key={item.title}
            className="relative inline-block py-4"
            onMouseEnter={() => setOpenDropdown(item.title)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="px-3 py-2 flex gap-1 items-center cursor-pointer font-medium rounded hover:text-primary-700 transition"
              aria-haspopup="true"
              aria-expanded={openDropdown === item.title}
              type="button"
            >
              {item.title}{" "}
              <ChevronDown size={16} className="hover:text-primary-700" />
            </button>
            <div
              className={`absolute border-2 border-gray-50 left-0 mt-[14px] w-40 bg-white shadow-xl z-20 animate-in fade-in duration-200 ${
                openDropdown === item.title ? "" : "hidden"
              }`}
            >
              {item.child.map((sub) => (
                <Link
                  key={sub.title}
                  href={sub.href}
                  className="block px-4 py-2 hover:text-white hover:bg-secondary text-md font-semibold"
                >
                  {sub.title}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={item.title}
            href={item.href ?? "#"}
            className="px-3 py-2 rounded hover:text-primary-700 transition font-medium"
          >
            {item.title}
          </Link>
        )
      )}
    </nav>
  );
}
