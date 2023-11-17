"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Expirence } from "@/components/Expirence/Expirence";
import { Skills } from "@/components/Skills/Skill";

export default function Home() {
  return (
    <>
      <div className="container scroll-smooth ease-in-out">
        <div className="flex flex-col gap-4 min-h-screen justify-center">
          <div className="flex justify-center ">
            <span className="animate-ping absolute rounded-full h-24 w-24 bg-gray-400 opacity-75 inline-flex"></span>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
          </div>

          <div className="font-extrabold text-4xl font-sans flex justify-center text-center leading-10">
            <span>
              Hi
              <br />
              I&apos;m{" "}
              <span className="text-[#ffbd39]"> Bibek Kumar Singh,</span>
              <br />A Full stack developer
            </span>
          </div>
        </div>
        <div className="flex justify-center min-h-screen " id='expirence'>
          <Expirence  />
        </div>
        <Skills />
      </div>
    </>
  );
}
