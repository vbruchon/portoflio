import { motion } from "framer-motion";
import { SKILLS as skills } from "@/lib/data";
import { SkillList } from "./SkillsList";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "../../Layout";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const Skills = () => {
  const webSkills = skills.filter((skill) => skill.category === "Web develop");
  const otherSkills = skills.filter((skill) => skill.category === "Other");
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle elementId="skills">Skills</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <motion.div variants={container} initial="hidden" animate="visible">
          <SkillList skills={webSkills} category="Web Development" />
          <SkillList skills={otherSkills} category="Others" />
        </motion.div>
      </LayoutContent>
    </Layout>
  );
};
