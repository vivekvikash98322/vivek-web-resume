import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { useScroll, motion } from "framer-motion";

export const Skills = () => {
  const [skillDataState, setSkillData] = useState<{ [key: string]: any[] }>({});
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let finalGroupedData: { [key: string]: any[] } = {};

    skillsData?.forEach((data) => {
      if (!!!finalGroupedData[data.section]) {
        finalGroupedData[data.section] = [];
      }
      finalGroupedData[data.section].push(data);
    });

    setSkillData(finalGroupedData);
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen  flex-col p-5 md:p-0 lg:p-0 mb-3" id="skills" ref={container} >
      <h1 className="text-4xl font-extrabold text-center">Skills</h1>
      <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-5 pt-10">
        {Object.keys(skillDataState).length > 0 ? (
          Object.keys(skillDataState)?.map((data, index) => {
            return (
              <div key={data} className="h-full mb-5">
                <span className="text-2xl font-bold">{data}</span>
                <div className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-y-3 gap-x-3 lg:gap-x-4 mt-5  h-4/5 ${index + 1 !== Object.keys(skillDataState).length ? 'border-r-0  xl:border-r-3' : ''}`}>
                  {
                    skillDataState[data]?.map((skill) => {
                      return (
                        <span key={data} className="bg-blue-100  text-customSkills text-base font-normal md:font-medium lg:font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 border border-customSkills">{skill.skillName}</span>
                      )
                    })
                  }
                </div>
              </div>

            );
          })
        ) : (
          <>

            {
              [1, 2, 3].map(ele => {
                return (<div key={ele}>
                  <Skeleton  className="w-[300px] h-[300px]" />
                </div>)
              })
            }
          </>
        )}
      </div>
    </section>
  );
};

const skillsData = [
  {
    skillName: "JAVA",
    primary: true,
    section: "Backend",
  },
  {
    skillName: "Spring Boot",
    primary: true,
    section: "Backend",
  },
  {
    skillName: "Spring Security",
    primary: true,
    section: "Backend",
  },
  {
    skillName: "Spring Data JPA",
    primary: true,
    section: "Backend",
  },
  {
    skillName: "Spring Webflux",
    primary: true,
    section: "Backend",
  },
  {
    skillName: "Micro Service",
    primary: true,
    section: "Backend",
  },
  {
    skillName: "React",
    primary: true,
    section: "Frontend",
  },
  {
    skillName: "Angular 12",
    primary: false,
    section: "Frontend",
  },
  {
    skillName: "Typescript",
    primary: true,
    section: "Frontend",
  },
  {
    skillName: "Redux",
    primary: true,
    section: "Frontend",
  },
  {
    skillName: "NextJS",
    primary: false,
    section: "Frontend",
  },
  {
    skillName: "Java Script",
    primary: true,
    section: "Frontend",
  },
  {
    skillName: "MongoDB",
    primary: true,
    section: "Backend",
  },
  {
    skillName: "MSSQL",
    primary: true,
    section: "Backend",
  },
  {
    skillName: "JUnit",
    primary: false,
    section: "Backend",
  },
  {
    skillName: "Jest",
    primary: false,
    section: "Frontend",
  },
  {
    skillName: "HTML",
    primary: false,
    section: "Frontend",
  },
  {
    skillName: "CSS",
    primary: false,
    section: "Frontend",
  },
  {
    skillName: "Data Structure",
    primary: true,
    section: "Other",
  },
  {
    skillName: "AWS",
    primary: false,
    section: "Other",
  },
  {
    skillName: "JMeter",
    primary: false,
    section: "Other",
  },
  {
    skillName: "CI/CD",
    primary: false,
    section: "Other",
  },
  {
    skillName: "Cypress",
    primary: false,
    section: "Other",
  },
  {
    skillName: "Git",
    primary: false,
    section: "Other",
  },
  {
    skillName: "Splunk",
    primary: false,
    section: "Other",
  },
  {
    skillName: "Terraform",
    primary: false,
    section: "Other",
  },
];
