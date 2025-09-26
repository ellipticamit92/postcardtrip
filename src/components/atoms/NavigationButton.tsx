"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";
import { gtmEvent } from "@/lib/gtm";

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface NavigationButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  animation?: ButtonVariants["animation"];
  classes?: string;
  gtmValues?: Record<string, string | number | boolean>;
  eventName?: string;
}

export const NavigationButton = ({
  classes,
  variant = "default",
  size = "sm",
  href,
  children,
  gtmValues = {},
  eventName,
}: NavigationButtonProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    if (!!eventName && Object.keys(gtmValues).length) {
      gtmEvent(eventName, gtmValues);
    }

    router.push(href);
  };

  return (
    <Button
      onClick={handleOnClick}
      variant={variant}
      size={size}
      className={classes}
    >
      {children}
    </Button>
  );
};
