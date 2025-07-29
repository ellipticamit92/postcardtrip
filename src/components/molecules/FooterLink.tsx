import Link from "next/link";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="relative flex pl-0 hover:pl-6 transition-all ease-linear duration-300 after:absolute after:top-3 after:left-0 after:w-3 after:h-[2px] after:bg-primary-50 after:opacity-0 after:transition-all after:ease-linear after:duration-500 hover:after:opacity-100">
      <Link className="hover:text-primary text-lg" href={href}>
        {children}
      </Link>
    </li>
  );
};

export default FooterLink;
