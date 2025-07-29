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
    href: "/g",
  },
  {
    title: "Destination",
    href: "/gestination",
    child: [{
      title: "Kerala",
      href: "/kerala",
    },{
      title: "Dubai",
      href: "/dubai",
    },{
      title: "Himachal",
      href: "/himachal",
    }],
  },
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
]