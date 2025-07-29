import { FC, ReactNode } from "react";
import SectionHeading from "../molecules/SectionHeading";

interface HomeSectionsProps {
  title: string;
  heading: string;
  children: ReactNode;
}

const HomeSections: FC<HomeSectionsProps> = ({ title, heading, children }) => (
  <section className="py-5 relative z-10">
    <div className="container mx-auto pt-10">
      <div className="flex flex-col items-center">
        <SectionHeading title={title} heading={heading} />
      </div>
      <div className="mt-10 mb-8">{children}</div>
    </div>
  </section>
);

export default HomeSections;
