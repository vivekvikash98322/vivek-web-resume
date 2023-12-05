"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import "./expirence.css";
import { useScroll, motion } from "framer-motion";

export default function WorkDetails({ params }: { params: { id: number } }) {
  const data = companyWorkingDetails[params?.id - 1];

  return (
    <div className="container md:p-6 lg:p-6 p-2 flex justify-center items-center" >
      <Card className="md:w-[70%] lg:w-[70%] w-[90%] bg-gray-800 shadow-custom">
        <CardContent className="md:p-10 lg:p-10 p-6">
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr] sm:gap-y-10 gap-x-10 justify-between">
            <div className="rounded image-container-border w-fit lg:w-[250px] md:w-[250px] h-[200px] flex justify-center items-center shadow-custom bg-[#D3CCE3]">
              {data.image !== "" ? (
                <Image
                  className="md:w-[200] md:h-[50] lg:w-[200] lg:h-[50] w-fit h-[50]"
                  src={data.image}
                  alt="L&Q Private LTD"
                  width={200}
                  height={50}
                />
              ) : (
                <span className="text-2xl h-[42px] font-extrabold text-[#513319]">
                  {data.altText}
                </span>
              )}
            </div>
            <div>
              <h1 className="font-serif text-2xl mt-3">Key Skills & Achivments</h1>
              <ul className="list-disc">
                {data?.text?.map((ele) => {
                  return (
                    <motion.li key={ele} className="leading-8" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .5, duration: 3}}>
                      <motion.p className="text-sm font-thin">{ele}</motion.p>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const companyWorkingDetails = [
  {
    text: [
      "Built a system to deprecate and roll out new terminals to all merchants. This system uses a feature that allows service agents to roll back multiple terminals at once, which saves 80% of human intervention and prevents organizational loss.",
      "Built terminal ordering flow, where merchant can order new terminal for them self through service agent and also can track order delivery status which saved manual intervention of 60%.",
      "Introduced distributed system logging framework using spring sleuth and Splunk log which help is tracing the incident across microservice and better analysis.",
      "Built react shared library component which in terms reduce the boiler plated code by 70% across micro front end and also helped in better maintainability of code.",
      "Introduced multiple micro front end from scratch using single spa, react, typescript and webpack.",
      "Built transaction overview page and rest API where service agent can view merchant transaction information and can help merchant in resolving their query which increase merchant satisfaction by 50%.",
      "Developed a scheduler which process 1Million of terminal so that it's available to system for bulk upgrade.",
      "Introduced end-end automation testing framework using cypress and JavaScript which help in reducing the overall effort in smoke testing of feature by 60%.",
    ],
    image: "/jp-morgan-1.svg",
    altText: "L&Q Private LTD",
  },
  {
    text: [
      "Built an automation UI which help to reduce the number of clicks and user input by 50% which was required to do the forecasting for the given organization.",
      "Developed asynchronous file uploading rest API which read the different extensions of file and put into NoSQL(MongoDB).",
      "Improved the performance of MongoDB query by 30% using sequential aggregation pipeline and indexing.",
      "Built CI/CD pipeline using azure DevOps to deploy code flawlessly to every environment.",
      "Integrated load testing tool in CI/CD pipeline to check rest API performance for every deployment to higher environment.",
    ],
    image: "/ey.svg",
    altText: "L&Q Private LTD",
  },
  {
    text: [
      "Built an efficient framework which ensure data between these two external system is always in sync, which reduce the manual effort of copying the data between system by 40%.",
      "Successfully developed a powerful dashboard that provides a comprehensive view of user events originating from every card swap on hotel door, offering valuable insights and analytics which increase the monitoring of restricted access by 70%.",
      "Design and built a framework which do continuous polling of data from external source using Java, spring boot and MySQL.",
    ],
    image: "",
    altText: "L&Q Private LTD",
  },
];
