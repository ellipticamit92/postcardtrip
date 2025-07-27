import Link from "next/link";
import { ReactNode, ComponentType } from "react";

interface IconLinkProps {
  href: string;
  icon: ComponentType<{ className?: string }>;
  children?: ReactNode;
}

const IconLink = ({ href, icon: IconComponent, children }: IconLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
      target="_blank"
      rel="noopener noreferrer"
    >
      {<IconComponent className="w-5 h-5" />}
      {children}
    </Link>
  );
};

export default IconLink;
