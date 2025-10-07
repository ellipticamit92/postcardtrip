import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextProps } from "@/lib/types";
import { FC } from "react";

interface InclusionExclusionProps {
  isInclusion?: boolean;
  inclusions?: TextProps[];
  exclusions?: TextProps[];
}

export const InclusionExclusion: FC<InclusionExclusionProps> = ({
  isInclusion,
  inclusions,
  exclusions,
}) => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle
          className={`flex items-center gap-2 ${
            isInclusion ? "text-primary" : "text-destructive"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isInclusion ? "bg-primary" : "bg-destructive"
            }`}
          ></div>
          {isInclusion ? "What's Included" : "Not Included"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {isInclusion
            ? inclusions?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm">{item.text}</span>
                </li>
              ))
            : exclusions?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
        </ul>
      </CardContent>
    </Card>
  );
};
