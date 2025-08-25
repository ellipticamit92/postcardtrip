import { FC, ReactNode } from "react";
import SectionHeading from "../molecules/SectionHeading";

interface HomeSectionsProps {
  title: string;
  heading: string;
  children: ReactNode;
  description: string;
  variant?: string;
  icon: ReactNode;
}

const HomeSections: FC<HomeSectionsProps> = ({
  title,
  heading,
  children,
  description,
  variant,
  icon,
}) => (
  <section className="py-5 relative z-10">
    <div className="flex flex-col items-center pt-10">
      <SectionHeading
        title={title}
        heading={heading}
        description={description}
        variant={variant}
        icon={icon}
      />
    </div>
    <div className="my-2">{children}</div>
  </section>
);

export default HomeSections;
