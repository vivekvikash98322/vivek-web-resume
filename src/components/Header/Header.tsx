"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { title } from "process";
import { ContactMe } from "../ContactMe/Contactme";
import Image from "next/image";

export const Header = () => {
  const [selected, setSelected] = useState("Home");
  const [openMenu, setOpenMenu] = useState(false);

  const handleSelect = (data: {
    title: string;
    href: string;
    description: string;
    exclude: boolean;
  }) => {
    setSelected(title);
  };

  return (
    <>
      <header className="sticky z-50 self-center top-0 h-14 bg-[hsl(var(--background))]">
        <div className="justify-end pt-2 hidden lg:flex xl:flex">
          <NavigationMenu className={`h-10 w-max px-10`}>
            <NavigationMenuList>
              {components
                ?.filter((ele) => !ele.exclude)
                ?.map((data) => {
                  return (
                    <NavigationMenuItem key={title}>
                      <Link href={data?.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          onSelect={() => handleSelect(data)}
                          active={selected === data.title}
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

        <div className="md:hidden pt-2 pr-2 flex flex-1 justify-end">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            data-collapse-toggle="navbar-default"
          >
            {openMenu ? (
              <Image
                src="/icons8-cancel.svg"
                alt="Menu"
                height="40"
                width="40"
              />
            ) : (
              <Image src="/icons8-menu.svg" alt="Menu" height="40" width="40" />
            )}
          </button>
        </div>
        {openMenu && (
          <nav className="top-0 z-50 w-full pt-10 mt-10 h-screen bg-[hsl(var(--background))] shadow-[5px_0px_13px_1px]">
            <ul className="w-full grid grid-cols-1 text-center justify-center align-middle gap-y-10">
              {components
                ?.filter((ele) => !ele.exclude)
                ?.map((data) => {
                  return (
                    <li
                      key={title}
                      className="font-extrabold text-3xl hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      onClick={() => setOpenMenu(false)}
                    >
                      <Link href={data?.href} legacyBehavior passHref>
                        {data.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

const components: {
  title: string;
  href: string;
  description: string;
  exclude: boolean;
}[] = [
  {
    title: "Home",
    href: "/",
    exclude: false,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Skills",
    href: "#skills",
    exclude: false,
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Expirence",
    href: "#expirence",
    exclude: false,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Projects",
    href: "/docs/primitives/alert-dialog",
    exclude: false,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Contact Me",
    href: "/docs/primitives/progress",
    exclude: false,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];
