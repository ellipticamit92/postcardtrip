// molecules/MenuItemWithContent.tsx
"use client"

import * as React from "react"
import {
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface MenuItemWithContentProps {
  triggerText: string
  children: React.ReactNode
}

export function MenuItemWithContent({ triggerText, children }: MenuItemWithContentProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{triggerText}</NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  )
}
