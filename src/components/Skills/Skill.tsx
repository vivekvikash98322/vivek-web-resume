import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";

export const Skills = () => {
  const [skillDataState, setSkillData] = useState<{ [key: string]: any[] }>({});

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
    <section className="h-2/3 p-10" id="skills">
      <h1 className="text-4xl font-extrabold text-center">Skills</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 pt-10">
        {Object.keys(skillDataState).length > 0 ? (
          Object.keys(skillDataState)?.map((data) => {
            return (
              <Card key={data} className="hover:scale-110  bg-cardPrimary]">
                <CardHeader>
                  <CardTitle className="text-center drop-shadow-2xl">
                    {data}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {skillDataState[data]?.map((ele) => {
                    return (
                      <Badge
                        key={ele?.skillName}
                        className="mr-3 mb-2"
                        variant={ele.primary ? "outlinePrimary" : "default"}
                      >
                        {ele?.skillName}
                      </Badge>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })
        ) : (
          <>
            <div>
              <Skeleton className="w-[200px] h-[200px]" />
            </div>
            <div>
              <Skeleton className="w-[200px] h-[200px]" />
            </div>
            <div>
              <Skeleton className="w-[200px] h-[200px]" />
            </div>
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
    section: "Other",
  },
  {
    skillName: "Jest",
    primary: false,
    section: "Other",
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
];
