import { FC } from "react";
import Image from "next/image";

export interface SectionHeadingProps {
  title: string;
  heading: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, heading }) => {
  return (
    <div className="flex flex-col items-center mb-3">
      <h5 className="text-primary text-lg font-light uppercase mb-1 tracking-widest sm:text-md lg:text-xl">
        {title}
      </h5>
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
        {heading}
      </h1>
      <Image width={300} height={100} src="/divider.svg" alt="Divider Icon" />
    </div>
  );
};

export default SectionHeading;
