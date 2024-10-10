"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Expirence } from "@/components/Expirence/Expirence";
import { Skills } from "@/components/Skills/Skill";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <div className="container scroll-smooth ease-in-out ">
      <div ref={targetRef} className="pointer-events-none inset-0 z-30 transition duration-300 lg:absolute glow"></div>
        <motion.div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10 min-h-screen justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5, delay: .5 }}>
          <div>
            <Avatar className="lg:h-44 lg:w-44">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center grid lg:grid-cols-1 lg:gap-y-5 gap-y-4 mt-2">
            <span
              className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
            >
              Hi
              <br />
              I&apos;m <span> Bibek Kumar,</span>
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
