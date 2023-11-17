"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { title } from "process";

export const Header = () => {
  return (
    <header className="sticky z-50 self-center top-0 flex justify-end lex-1 flex-shrink-0 bg-[hsl(var(--background))]">
      <div className=" h-10 f w-max px-10">
        <NavigationMenu>
          <NavigationMenuList>
            {components?.map((data) => {
              return (
                <NavigationMenuItem key={title}>
                  <Link href={data?.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {data.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Projects",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Skills",
    href: "#skills",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Expirence",
    href: "#expirence",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Blogs",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Contact Me",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];
