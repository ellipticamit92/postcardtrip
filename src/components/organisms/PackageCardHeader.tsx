import Image from "next/image";
import { FC } from "react";

interface PackageCardHeaderProps {
  imageSrc: string;
  imageAlt: string;
  day: number;
  night: number;
  label: string;
}

const PackageCardHeader: FC<PackageCardHeaderProps> = ({
  imageAlt,
  imageSrc,
  day,
  night,
  label,
}) => {
  return (
    <div className="relative h-52 lg:h-56">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-40" />
      <div className="absolute bottom-3 right-3 text-white z-50 font-semibold md:text-xs lg:text-base">
        {day} days & {night} Nights <br /> {label}
      </div>
    </div>
  );
};

export default PackageCardHeader;
