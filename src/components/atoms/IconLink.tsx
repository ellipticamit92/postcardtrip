import Link from "next/link";
import { ReactNode, ComponentType } from "react";

interface IconLinkProps {
  href: string;
  icon: ComponentType<{ className?: string }>;
  children?: ReactNode;
  iconClass?: string;
  linkClass?: string;
}

const IconLink = ({
  href,
  icon: IconComponent,
  children,
  iconClass = "w-4 h-4",
  linkClass,
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center text-primary-50 hover:text-white gap-2 ${linkClass}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {<IconComponent className={iconClass} />}
      {children}
    </Link>
  );
};

export default IconLink;
