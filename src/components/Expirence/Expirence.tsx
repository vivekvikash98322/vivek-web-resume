import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export const Expirence = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="flex  flex-col min-h-screen justify-center items-center mt-2">
      <h1 className="text-4xl font-extrabold text-center">Expirence</h1>
      <div className="grid grid-cols-1 xl:grid-cols-expirence gap-y-5 md:gap-x-10 lg:gap-x-10 p-5 w-[80vw] mt-20">
        {expirenceData?.map((data) => {
          return (
            <Link href={`/expirence/${data.id}`} key={data.companyName}>
              <section className="mb-5 flex flex-col justify-start text-start">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between">
                  <span className="text-2xl font-bold">{data.companyName}</span>
                  <span className="text-[#94A3B8]">
                   {data?.from + " - " + data?.to}
                  </span>
                </div>
                <span className="text-[#94A3B8] text-lg">
                  {data.position}
                </span>

                <div className="pt-2">
                  <span className="text-xl font-light text-start">
                    {data.sortDescriptions}
                  </span>
                  <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-col-4 mt-4 gap-y-2">
                    {
                      data.CoreSkills.split(",").map(skill => {
                        return (
                          <span key={skill} className="bg-blue-100  text-customSkills text-xs font-normal  xl:font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 border border-customSkills">{skill}</span>

                        )
                      })
                    }
                  </div>
                </div>
              </section>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const expirenceData = [
  {
    id: 1,
    companyName: "JP Morgan Chase",
    current: true,
    position: "Full Stack developer",
    breif: "Work as Full stack developer to delivery",
    from: "May-2021",
    CoreSkills: "JAVA, Spring boot, React, Redux, TypeScript, Oracle, AWS",
    to: "Present",
    image: "/jp-morgan-1.svg",
    text: "L&Q Private LTD",
    sortDescriptions: "Built Microfront end based application, which will allow service agent to order new terminal and also manage terminal configuration."
  },
  {
    id: 2,
    companyName: "E&Y",
    current: false,
    position: "Full Stack developer",
    breif: "Work as Full stack developer to delivery",
    from: "Aug-2019",
    to: "April-2021",
    CoreSkills: "JAVA, Spring boot, Mongodb, Azure, Data JPA",
    image: "/ey.svg",
    text: "L&Q Private LTD",
    sortDescriptions: "Built Microfront end based application, which will allow service agent to order new terminal and also manage terminal configuration."
  },
  {
    id: 3,
    companyName: "L&Q Private LTD",
    current: false,
    position: "Full Stack developer",
    breif: "Work as Full stack developer to delivery",
    from: "Jan-2017",
    to: "July-2019",
    CoreSkills: "JAVA, Spring boot, Azure, MSSQL, Data JPA, NodeJS",
    image: "",
    text: "L&Q Private LTD",
    sortDescriptions: "Built Microfront end based application, which will allow service agent to order new terminal and also manage terminal configuration."
  },
];
