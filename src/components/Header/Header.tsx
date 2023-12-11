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
import { usePathname } from "next/navigation";

export const Header = () => {
  const [selected, setSelected] = useState("Home");
  const [openMenu, setOpenMenu] = useState(false);
  const path = usePathname();

  console.log("Path : ", path)

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
                      <Link href={path.includes("/expirence") ? "/" + data?.href : data.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          onSelect={() => handleSelect(data)}
                          active={selected === data.title}
                          download={data.title === 'Resume' ? 'BibekKumarSinghResume.pdf' : ''}
                          className={navigationMenuTriggerStyle()}
                          {...data?.props}
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
          <nav className="top-0 z-50 w-full  h-screen bg-[hsl(var(--background))]">
            <ul className="w-full pt-8 grid grid-cols-1 text-center justify-center align-middle gap-y-10">
              {components
                ?.filter((ele) => !ele.exclude)
                ?.map((data) => {
                  return (
                    <li
                      key={title}
                      className="font-extrabold text-3xl hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      onClick={() => setOpenMenu(false)}
                    >
                      <a href={data?.href} {...data?.props}> 
                        {data.title}
                      </a>
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
  props: any;
}[] = [
  {
    title: "Home",
    href: "/",
    exclude: false,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    props: {}
  },
  {
    title: "Skills",
    href: "#skills",
    exclude: false,
    description:
      "For sighted users to preview content available behind a link.",
      props: {}
  },
  {
    title: "Expirence",
    href: "#expirence",
    exclude: false,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      props: {}
  },
  {
    title: "Projects",
    href: "/",
    exclude: false,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
      props: {}
  },
  {
    title: "Resume",
    href: "/BibekKumarSinghResume.pdf",
    exclude: false,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
      props: { target: '_blank', rel: "noreferrer"}
  },
  {
    title: "Contact Me",
    href: "/docs/primitives/progress",
    exclude: false,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      props: {}
  },
];
