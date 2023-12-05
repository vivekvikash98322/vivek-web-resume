"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Expirence } from "@/components/Expirence/Expirence";
import { Skills } from "@/components/Skills/Skill";
import {motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="container scroll-smooth ease-in-out">
        <motion.div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10 min-h-screen justify-center items-center" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 5, delay: .5}}>
          <div>
            <Avatar className="lg:h-44 lg:w-44">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center grid lg:grid-cols-1 lg:gap-y-5 gap-y-4 mt-2">
            <span
              className="font-extrabold text-4xl 
            font-sans"
            >
              Hi
              <br />
              I&apos;m <span className="text-[#ffbd39]"> Bibek Kumar,</span>
              <br />A Full stack developer
            </span>
            <div className="flex justify-center gap-x-5 flex-1 flex-shrink-0">
              <a href={"https://www.linkedin.com/in/bibek-kumar-singh/"} rel="noopener noreferrer" target="_blank">
              <Image
                src="/linkedin-in.svg"
                alt="linkdin"
                width="32"
                height="32"
              /></a>
               <a href={"https://github.com/vivekvikash98322"} rel="noopener noreferrer" target="_blank">
              <Image src="/github.svg" alt="linkdin" width="32" height="32" /></a>
              <a href={""}>
              <Image
                src="/icons8-instagram.svg"
                alt="linkdin"
                width="35"
                height="35"
              />
              </a>
            </div>
          </div>
        </motion.div>
        <Skills />
        <div className="flex justify-center min-h-screen " id="expirence">
          <Expirence />
        </div>
      </div>
    </>
  );
}
