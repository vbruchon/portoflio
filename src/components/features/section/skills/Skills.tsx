import { SKILLS as skills } from "@/lib/data";
import { SkillList } from "./SkillsList";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "../../Layout";

export const Skills = () => {
  const webSkills = skills.filter((skill) => skill.category === "Web develop");
  const otherSkills = skills.filter((skill) => skill.category === "Other");

  return (
    <Layout id="skills">
      <LayoutHeader>
        <LayoutTitle>Skills</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <SkillList skills={webSkills} category="Web Development" />
        <SkillList skills={otherSkills} category="Others" />
      </LayoutContent>
    </Layout>
  );
};
