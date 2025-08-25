import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonAnimated =
  "overflow-hidden transition duration-150 ease-in-out after:content-[''] after:absolute after:inset-0 after:-z-10 after:scale-50 after:opacity-0 after:duration-700";

const buttonVariants = cva(
  "relative z-10 cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border border-input bg-background hover:bg-primary-400 hover:text-accent-foreground",
        ocean:
          "bg-gradient-ocean text-white hover:shadow-medium transform hover:scale-105 transition-all duration-300",
        adventure:
          "bg-gradient-adventure text-white hover:shadow-medium transform hover:scale-105 transition-all duration-300",
        nature:
          "bg-gradient-nature text-white hover:shadow-medium transform hover:scale-105 transition-all duration-300",
        pricing:
          "bg-gradient-hero text-white hover:shadow-strong transform hover:scale-110 transition-all duration-300 shadow-medium",
        customize:
          "border-2 border-ocean bg-background text-ocean hover:text-white transition-all duration-300",

        // Custom brand styles
        primary: "bg-primary text-white border-2 border-primary",
        secondary: "bg-secondary text-white border-2 border-secondary",
        primaryOutline: "text-primary border-2 border-primary bg-transparent",
        secondaryOutline:
          "text-secondary border-2 border-secondary bg-transparent",
      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        md: "h-10 px-6 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
        full: "w-full h-12",
      },

      animation: {
        none: "",
        primaryOutline: `${buttonAnimated} after:bg-primary hover:after:scale-100 hover:after:opacity-100 hover:text-white`,
        primarySolid: `${buttonAnimated} after:bg-white hover:after:scale-100 hover:after:opacity-100 hover:text-primary`,
        secondaryOutline: `${buttonAnimated} after:bg-secondary hover:after:scale-100 hover:after:opacity-100 hover:text-white`,
        secondarySolid: `${buttonAnimated} after:bg-white hover:after:scale-100 hover:after:opacity-100 hover:text-secondary`,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
