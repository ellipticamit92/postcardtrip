"use client";
import { useEffect, useState } from "react";

import Logo from "../atoms/Logo";
import { Award, Globe, Mail, Menu, Phone, Shield, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  destinations,
  INFO_EMAIL,
  MOBILE_NUMBER,
  packages,
} from "@/lib/constant";
import BookingModal from "./modal/BookingModal";
import InquiryModal from "./modal/InquiryModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="bg-linear-to-r from-ocean to-adventure text-white py-2 ">
        <div className="container mx-auto">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <Link
                href="tel:+99821071644"
                className="flex items-center gap-2 hover:underline transition-colors text-white"
              >
                <Phone className="w-4 h-4" />
                <span>{MOBILE_NUMBER}</span>
              </Link>

              <Link
                href="mailto:info@postcardtrip.in"
                className="flex items-center gap-2 hover:underline transition-colors text-white"
              >
                <Mail className="w-4 h-4" />
                <span>{INFO_EMAIL}</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                <Award className="w-3 h-3 mr-1" />
                Award Winning
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                <Shield className="w-3 h-3 mr-1" />
                Secure Booking
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`w-full bg-background transition-shadow shadow-sm duration-300 z-50 ${
          isSticky ? "sticky top-0 shadow-xl" : ""
        }`}
      >
        <div className="flex items-center justify-between h-16 container mx-auto">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-ocean transition-colors duration-200 font-medium story-link mx-2"
              >
                {item.name}
              </Link>
            ))}

            {/* Packages Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground text-md hover:text-ocean transition-colors duration-200 font-medium bg-transparent">
                    Packages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {packages.map((tour) => (
                        <NavigationMenuLink key={tour.name} asChild>
                          <Link
                            href={tour.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {tour.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {tour.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Destinations Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground text-md hover:text-ocean transition-colors duration-200 font-medium bg-transparent">
                    Destinations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {destinations.map((destination) => (
                        <NavigationMenuLink key={destination.name} asChild>
                          <Link
                            href={destination.href}
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none group-hover:text-secondary">
                              {destination.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary-900">
                              {destination.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <InquiryModal />
            <BookingModal />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-foreground hover:text-ocean hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 px-4 pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  <Globe className="w-4 h-4 mr-2" />
                  Plan Trip
                </Button>
                <Link href="/destinations">
                  <Button variant="pricing" size="sm" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
