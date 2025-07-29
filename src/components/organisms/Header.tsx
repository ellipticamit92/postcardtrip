"use client";
import { useEffect, useState } from "react";

import Logo from "../atoms/Logo";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { MenuDropdown } from "../molecules/MenuDropdown";
import { DesktopMenuLink } from "../molecules/DesktopMenuLink";
import { IconButton } from "../atoms/IconButton";
import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  PhoneCall,
  Twitter,
  X,
} from "lucide-react";
import Link from "next/link";
import { MobileMenuSection } from "../molecules/MobileMenuSection";
import IconLink from "../atoms/IconLink";
import { Button } from "../ui/button";

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
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center bg-brand-primary-300 font-semibold p-1 px-4 text-white ">
        <IconLink icon={Mail} href="mailto:info@postcardtrip.in">
          info@postcardtrip.in
        </IconLink>
        <div className="flex gap-4 items-center">
          <IconLink icon={Facebook} href="#" />
          <IconLink icon={Instagram} href="#" />
          <IconLink icon={Twitter} href="#" />
        </div>
      </div>

      <header
        className={`w-full bg-background transition-shadow duration-300 z-50 ${
          isSticky ? "sticky top-0 shadow-md" : ""
        }`}
      >
        <div className="flex bg-white items-center justify-between p-4">
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex gap-6 text-sm font-medium">
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
            </nav>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <div className="">
              <a
                href="tel:9870276405"
                className="flex w-full items-center space-x-3 text-xs text-primary-900 hover:text-primary-800"
              >
                <div>
                  <PhoneCall />
                </div>
                <div className="flex flex-col space-y-0 font-semibold">
                  <div>Call Now</div>
                  <div>+91-9870276405</div>
                </div>
              </a>
            </div>
            <Button
              variant="secondary"
              animation="secondarySolid"
              className="font-semibold px-8 py-2"
            >
              Book Now
            </Button>
          </div>

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
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-sm">
            <div className="flex flex-col p-4 space-y-4">
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
    </>
  );
}
