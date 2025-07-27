// atoms/ListItem.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  title: string
  href: string
  children: React.ReactNode
}

export function ListItem({ title, children, href, ...props }: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
