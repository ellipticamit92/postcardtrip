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

export type TextProps = {
  text: string;
};

export type HighlightsProps = {
  title: string;
  category: string;
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
  slug: string;
  cities: City[];
  highlights: Highlights[];
  text: string;
  threePrice: number;
  fourPrice: number;
  fivePrice: number;
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
  did: number;
  name: string;
  heading: string;
  heroTitle?: string | null;
  country?: string | null;
  overview?: string | null;
  text?: string | null;
  imageUrl?: string | null;
  thumbnailUrl?: string | null;
  isRichText?: boolean | null;
  trending: boolean;
  featured: boolean;
  status: boolean;
  basePrice?: number | null;
  originalPrice?: number | null;
  rating?: number | null;
  bestTimeToVisit?: string | null;
  highlights?: string | null;
  packages?: Package[]; // replace with Package type when available
  reviews?: ReviewType[]; // replace with Reviews type when available
};

export type ItineraryType = {
  day: number;
  details: string;
  title: string;
  subTitle: string;
  highlights: string[];
  cities: string[];
};

export type UserReview = {
  username: string;
  places: string;
  rating: number;
  year: string;
  month: string;
  review: string;
  package: {
    name: string;
  };
  destination: {
    name: string;
    country: string;
  };
};

export type PackageSummary = {
  pid: number;
  name: string;
  day: number;
  night: number;
  imageUrl: string;
  threePrice: number;
  rating: number;
  slug: string;
  destination: {
    did: number;
    name: string;
    country: string;
  };
};
