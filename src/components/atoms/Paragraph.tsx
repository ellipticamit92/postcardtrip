import { AtomsProps } from "@/lib/types";

const Paragraph = ({ children, className }: AtomsProps) => (
  <p className={`text-base ${className}`}>{children}</p>
);
export default Paragraph;
