import { SKILLS as skills } from "@/lib/data";

export const Skills = () => {
  const webSkills = skills.filter((skill) => skill.category === "Web develop");
  const otherSkills = skills.filter((skill) => skill.category === "Other");

  return (
    <section className="py-16">
      <div className="w-1/12">
        <h2 className="text-2xl font-bold ">Skills</h2>
        <div
          className="h-10 mt-2 border-t-2 border-muted-foreground backdrop-blur-sm"
          style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
        ></div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-end">
          <div
            className="flex-1 border-t-4 border-primary backdrop-blur-sm"
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
          ></div>
          <h3 className="mx-2 text-2xl">Web Develop</h3>
          <div
            className="flex-1 border-t-4 border-primary backdrop-blur-sm"
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
          ></div>
        </div>
        <div className="flex flex-wrap justify-center items-center my-10 gap-2">
          {webSkills.map((skill) => (
            <div
              key={skill.name}
              className="w-1/7 flex items-center flex-col gap-4 bg-secondary dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <p className=" text-gray-900 dark:text-white text-sm text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-end my-4">
          <div
            className="flex-1 border-t-4 border-primary backdrop-blur-sm"
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
          ></div>
          <h3 className="mx-2 text-2xl">Other</h3>
          <div
            className="flex-1 border-t-4 border-primary backdrop-blur-sm"
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
          ></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {otherSkills.map((skill) => (
            <div
              key={skill.name}
              className="w-1/7 flex items-center flex-col gap-4 bg-secondary dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <p className=" text-gray-900 dark:text-white text-sm text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 
  const categories = [...new Set(skills.map((skill) => skill.category))];

<div className="container flex justify-evenly flex-wrap mx-auto">
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-center">{category}</h3>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div
                    key={index}
                    className="bg-secondary p-4 rounded-md shadow-md flex flex-col items-center"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <p className="text-sm text-center">{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
*/
