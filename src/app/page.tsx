"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Expirence } from "@/components/Expirence/Expirence";
import { Skills } from "@/components/Skills/Skill";

export default function Home() {
  return (
    <>
      <div className="container scroll-smooth ease-in-out">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10 min-h-screen justify-center items-center">
          <div>
            <Avatar className="lg:h-44 lg:w-44">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center grid lg:grid-cols-1 lg:gap-y-5 gap-y-4 mt-2">
            <span
              className="font-extrabold text-3xl 
            font-sans"
            >
              Hi
              <br />
              I&apos;m <span className="text-[#ffbd39]"> Bibek Kumar,</span>
              <br />A Full stack developer
            </span>
            <div className="flex justify-center gap-x-5 flex-1 flex-shrink-0">
              <Image
                src="/linkedin-in.svg"
                alt="linkdin"
                width="32"
                height="32"
              />
              <Image src="/github.svg" alt="linkdin" width="32" height="32" />
              <Image
                src="/icons8-instagram.svg"
                alt="linkdin"
                width="35"
                height="35"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center min-h-screen " id="expirence">
          <Expirence />
        </div>
        <Skills />
      </div>
    </>
  );
}
