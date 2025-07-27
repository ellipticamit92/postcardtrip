import Link from "next/link";

interface MobileMenuSectionProps {
  title: string;
  links: { href: string; label: string }[];
  onClick?: () => void;
}

export const MobileMenuSection = ({
  title,
  links,
  onClick,
}: MobileMenuSectionProps) => {
  return (
    <div className="mt-4">
      <div className="pb-1 border-b font-semibold text-gray-700">{title}</div>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="block py-2 px-3 rounded hover:bg-gray-100"
          onClick={onClick}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};
