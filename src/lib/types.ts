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

export type City = {
  name: string;
};

export type Highlights = {
  text: string;
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
  rating: number;
  heroTitle: string;
  country: string;
  featured: boolean;
  cities: City[];
  highlights: Highlights[];
  text: string;
  threePrice: number;
  foutrPrice: number;
  category: string;
  destination: {
    name: string;
    country: string;
  };
};

export type ReviewType = {
  id: number;
  username: string;
  rating: number;
  review: string;
  year: string; // could also be number if you want stricter typing
  month: string; // e.g. "Sep"
  package: {
    pid: number;
    name: string;
  };
  destination: {
    did: number;
    name: string;
    country: string;
  };
};

export type Destination = {
  name: string;
  updatedAt: Date;
  createdAt: Date;
  imageUrl: string | null;
  featured: boolean;
  isRichText: boolean | null;
  status: boolean;
  overview: string | null;
  rating: number | null;
};
