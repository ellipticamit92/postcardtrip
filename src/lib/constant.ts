import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { MenuLinksProps } from "./types";

export const SOCIAL_LINKS = [
  {
    url: "https://www.facebook.com/postcardtrip",
    icon: Facebook, // Component itself, not JSX
  },
  {
    url: "https://www.instagram.com/postcardtrip.in/",
    icon: Instagram,
  },
  {
    url: "https://www.youtube.com/@postcardtrip",
    icon: Youtube,
  },
  {
    url: "https://www.linkedin.com/company/postcardtrip",
    icon: Linkedin,
  },
];

export const MENU_LINKS: MenuLinksProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Destination",
    href: "/destination",
    child: [
      {
        title: "Kerala",
        href: "/destination/kerala",
      },
      {
        title: "Dubai",
        href: "/destination/dubai",
      },
      {
        title: "Himachal",
        href: "/destination/himachal",
      },
    ],
  },
  {
    title: "Packages",
    href: "/packages",
  },
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
];

export const MOBILE_NUMBER = "+91-9821071644";
