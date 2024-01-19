import { motion } from "framer-motion";
import { SKILLS as skills } from "@/lib/data";
import { SkillList } from "./SkillsList";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "../../Layout";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("global");

  const webSkills = skills.filter((skill) => skill.category === "Web develop");
  const otherSkills = skills.filter((skill) => skill.category === "Other");
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle elementId="skills">{t("skillSection.title")}</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <motion.div variants={container} initial="hidden" animate="visible">
          <SkillList
            skills={webSkills}
            category={t("skillSection.category1")}
          />
          <SkillList
            skills={otherSkills}
            category={t("skillSection.category2")}
          />
        </motion.div>
      </LayoutContent>
    </Layout>
  );
};
