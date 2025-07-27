import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" aria-label="PostcardTrip">
      <Image
        src="/ptcolorlogo.png"
        alt="PostcardTrip"
        width={180}
        height={80}
        priority // if you want to prioritize loading
      />
    </Link>
  );
};

export default Logo;
