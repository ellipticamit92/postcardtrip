"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import FooterSection from "./FooterSection";
import ContactItem from "../molecules/ContactItem";
import FooterLink from "../molecules/FooterLink";
import SocialIcon from "../molecules/SocialIcon";
import { MOBILE_NUMBER } from "@/lib/constant";

export function Footer() {
  return (
    <footer className="relative w-full bg-background border-t border-border mt-16 bg-[url('/footer-bg.png')] bg-cover bg-center overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#09100de0] to-[#09100de0] opacity-80 z-30 overflow-hidden" />
      <div className="container mx-auto pt-10 relative z-50 pt-10 lg:pt-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {/* Logo & Spin */}
          <div className="order-last md:order-first col-span-2 sm:col-span-1 md:col-span-2">
            <div className="text-center w-full flex items-center justify-center">
              <div className="w-48 h-auto p-4 rounded-full bg-black/50 relative xs:w-60">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <Image
                    src="/ptcolorlogo.png"
                    alt="Postcard Trip Logo"
                    width={180}
                    height={100}
                  />
                  <div className="pt-4">Since 2020</div>
                </div>
                <div className="relative animate-spin-slow">
                  <svg viewBox="0 0 400 400">
                    <defs>
                      <path
                        id="txt-path"
                        d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
                        fill="white"
                      />
                    </defs>
                    <text
                      fill="#DDDDDD"
                      className="tracking-wider"
                      fontSize="35"
                      fontWeight="300"
                    >
                      <textPath startOffset="0" xlinkHref="#txt-path">
                        Postcardtrip Global Private Limited
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <FooterSection title="Information">
              <FooterLink href="/about">About Company</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterSection>
          </div>

          {/* Destination */}
          <div>
            <FooterSection title="Destination">
              {[
                "kerala",
                "rajasthan",
                "ooty",
                "himachal",
                "tamil-nadu",
                "dubai",
                "bali",
              ].map((dest) => (
                <FooterLink key={dest} href={`/destination/${dest}`}>
                  {dest.charAt(0).toUpperCase() + dest.slice(1)}
                </FooterLink>
              ))}
            </FooterSection>
          </div>

          {/* Reach Us */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2">
            <FooterSection title="Reach Us">
              <ContactItem icon={<Phone size={18} />} text={MOBILE_NUMBER} />
              <ContactItem
                icon={<Mail size={18} />}
                text="info@postcardtrip.in"
              />
              <ContactItem
                icon={<MapPin size={20} />}
                text="55,Top Floor,Lane, 2, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030"
              />
            </FooterSection>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 my-4 text-xs md:text-sm">
          <div className="flex items-center gap-4 my-2">
            <h4 className="font-semibold">Stay Connected :</h4>
            <SocialIcon
              href="https://www.facebook.com/people/Postcard-Trip/100089679132683/"
              icon={<Facebook />}
            />
            <SocialIcon
              href="https://www.instagram.com/invites/contact/?i=sc0jijzu13ns"
              icon={<Instagram />}
            />
            <SocialIcon
              href="https://twitter.com/TripPostcard?s=08"
              icon={<Twitter />}
            />
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-t border-zinc-500 flex justify-between items-center text-xs lg:text-sm text-zinc-300 py-4 space-y-2 xs:flex-row xs:justify-between xs:space-y-0 xs:px-2">
          <div>Copyright 2020 Postcardtrip.in</div>
          <div className="flex items-center">
            <Link
              href="/"
              className="hover:text-primary-400 hover:font-semibold"
            >
              Privacy Policy
            </Link>
            <span className="mx-2"> | </span>
            <Link
              href="/"
              className="hover:text-primary-400 hover:font-semibold"
            >
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
