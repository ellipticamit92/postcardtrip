// molecules/DesktopMenuLink.tsx
import Link from "next/link";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface DesktopMenuLinkProps {
  href: string;
  children: React.ReactNode;
}

export const DesktopMenuLink = ({ href, children }: DesktopMenuLinkProps) => {
  return (
    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  );
};
