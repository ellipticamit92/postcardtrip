import * as React from "react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface DropdownMenuProps {
  trigger: string;
  items: { href: string; title: string; description?: string }[];
}

export const MenuDropdown = ({ trigger, items }: DropdownMenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-2 p-4">
          {items.map(({ href, title, description }) => (
            <li key={href} className="hover:bg-gray-100 rounded p-2">
              <NavigationMenuLink asChild>
                <Link href={href} className="block w-full">
                  <div className="text-sm font-medium">{title}</div>
                  {description && (
                    <p className="text-xs text-muted-foreground">
                      {description}
                    </p>
                  )}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
