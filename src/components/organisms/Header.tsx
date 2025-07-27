"use client";
import { useState } from "react";

import Logo from "../atoms/Logo";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { MenuDropdown } from "../molecules/MenuDropdown";
import { DesktopMenuLink } from "../molecules/DesktopMenuLink";
import { IconButton } from "../atoms/IconButton";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { MobileMenuSection } from "../molecules/MobileMenuSection";

const componentsData = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const resourcesData = [
  { title: "Documentation", href: "/docs" },
  { title: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full border-b bg-white/90 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <MenuDropdown trigger="Components" items={componentsData} />
              <DesktopMenuLink href="/about">About</DesktopMenuLink>
              <MenuDropdown
                trigger="Resources"
                items={resourcesData.map((r) => ({
                  ...r,
                  description: undefined,
                }))}
              />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Hamburger    */}
        <IconButton
          aria-label="Toggle Menu"
          icon={
            mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )
          }
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        />
      </nav>
      {/* Mobile Panel      */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <div className="flex flex-col p-4 space-y-4">
            <Logo />
            <Link
              href="/about"
              className="block py-2 px-3 rounded hover:bg-gray-100"
            >
              About
            </Link>
            <MobileMenuSection
              title="Components"
              links={componentsData.map(({ title, href }) => ({
                label: title,
                href,
              }))}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileMenuSection
              title="Resources"
              links={resourcesData.map(({ title, href }) => ({
                label: title,
                href,
              }))}
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
