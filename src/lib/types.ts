import { ReactNode } from "react";

export type AtomsProps = {
  children: ReactNode;
  className?: string;
};

export type MenuLinksProps = {
  title: string;
  href: string;
  child?: MenuLinksProps[];
};

export type Package = {
  pid: number;
  name: string;
  basePrice: number;
  originalPrice: number;
  imageUrl: string;
  day: number;
  night: number;
  popular: boolean;
  tourType: string;
  description: string;
  rating: string;
  heroTitle: string;
  country: string;
  featured: boolean;
};
