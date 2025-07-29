import { ReactNode } from "react";

export type AtomsProps = {
  children: ReactNode;
  className?: string;
};

export type MenuLinksProps = {
  title: string;
  href: string;
  child?: MenuLinksProps[]
};
