import { SKILLS as skills } from "@/lib/data";
import { SkillList } from "./SkillsList";

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
        <SkillList skills={webSkills} category="Web Development" />
        <SkillList skills={otherSkills} category="Others" />
      </div>
    </section>
  );
};
