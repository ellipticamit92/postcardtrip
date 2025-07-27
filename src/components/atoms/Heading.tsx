import { AtomsProps } from "@/lib/types";

const Heading = ({ children, className }: AtomsProps) => (
  <h1 className={`font-bold ${className}`}>{children}</h1>
);

export default Heading;
