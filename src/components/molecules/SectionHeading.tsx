import { FC, ReactNode } from "react";
import { Badge } from "../ui/badge";

export interface SectionHeadingProps {
  title: string;
  heading?: string;
  description: string;
  variant?: string;
  icon?: ReactNode;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  heading,
  description,
  variant = "bg-adventure ",
  icon,
}) => {
  return (
    <div className="text-center mb-12">
      {heading && (
        <Badge className={`mb-2 text-white ${variant}`}>
          {icon}
          {heading}
        </Badge>
      )}

      <h2 className="text-5xl font-bold mb-3 text-foreground">{title}</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
