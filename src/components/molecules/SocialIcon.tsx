import Link from "next/link";

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <span className="border border-zinc-100 rounded-full p-1 w-1 h-1 flex items-center justify-center cursor-pointer hover:bg-primary-50 hover:border-primary-50 hover:text-red-500 sm:p-3">
      <Link href={href}>{icon}</Link>
    </span>
  );
};

export default SocialIcon;
