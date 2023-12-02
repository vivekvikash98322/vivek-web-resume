import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

export const Expirence = () => {
  return (
    <div className="flex  flex-col min-h-screen justify-center items-center">
      <h1 className="text-4xl font-extrabold text-center">Expirence</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-5 md:gap-x-5 lg:gap-x-5 p-10">
        {expirenceData?.map((data) => {
          return (
            <Link href={"/jpmorganchase"} key={data.companyName}>
              <Card>
                <CardHeader className="items-center border-b-[1px]">
                  {data?.image === "" ? (
                    <span className="text-2xl h-[42px] font-extrabold text-[#513319]">
                      {data.text}
                    </span>
                  ) : (
                    <Image
                      src={data?.image}
                      alt="L&Q Private LTD"
                      width={200}
                      height={50}
                    />
                  )}
                </CardHeader>

                <CardContent className="pt-2 pl-2 bg-slate-900">
                  <div className="text-sm font-serif  text-left flex flex-col leading-7 text-gray-400">
                    <span>
                      <b>Position : </b> {data.position}
                    </span>
                    <span>
                      <b>From :</b> {data?.from + " - " + data?.to}
                    </span>
                    <span>
                      <b>Skills Used : </b>{" "}
                      <span className="text-justify">{data?.CoreSkills}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const expirenceData = [
  {
    companyName: "JP Morgan Chase",
    current: true,
    position: "Full Stack developer",
    breif: "Work as Full stack developer to delivery",
    from: "May-2021",
    CoreSkills: "JAVA, Spring boot, React, Redux, TypeScript, Oracle, AWS",
    to: "Present",
    image: "/jp-morgan-1.svg",
    text: "L&Q Private LTD",
  },
  {
    companyName: "E&Y",
    current: false,
    position: "Full Stack developer",
    breif: "Work as Full stack developer to delivery",
    from: "Aug-2019",
    to: "April-2021",
    CoreSkills: "JAVA, Spring boot, Mongodb, Azure",
    image: "/ey.svg",
    text: "L&Q Private LTD",
  },
  {
    companyName: "L&Q Private LTD",
    current: false,
    position: "Full Stack developer",
    breif: "Work as Full stack developer to delivery",
    from: "Jan-2017",
    to: "July-2019",
    CoreSkills: "JAVA, Spring boot, Azure, MSSQL, Data JPA",
    image: "",
    text: "L&Q Private LTD",
  },
];
