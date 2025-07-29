"use client";
import { useGTM } from "@/hooks/use-gtm";
import { Button } from "./ui/button";

export function Test() {
  const { trackCustomEvent } = useGTM();

  const handleButtonClick = (variant: string) => {
    trackCustomEvent("button_click", {
      button_variant: variant,
      page: "home",
    });
  };
  return (
    <div>
      <h1>Test component</h1>
      <Button onClick={() => handleButtonClick("default")}>
        Default Button
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleButtonClick("secondary")}
      >
        Secondary
      </Button>
      <Button variant="outline" onClick={() => handleButtonClick("outline")}>
        Outline
      </Button>
      <Button variant="ghost" onClick={() => handleButtonClick("ghost")}>
        Ghost
      </Button>
      <Button variant="link" onClick={() => handleButtonClick("link")}>
        Link
      </Button>
    </div>
  );
}
