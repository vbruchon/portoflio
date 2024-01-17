import { motion } from "framer-motion";
import { SkillCategory } from "./SkillCategory";
import { SkillItem, SkillItemProps } from "./SkillItem";
import { useSectionIsVisible } from "@/hooks/useSectionIsVisible";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export type SkillsListProps = {
  skills: SkillItemProps["skill"][];
  category: string;
};

export const SkillList = ({ skills, category }: SkillsListProps) => {
  const controls = useSectionIsVisible("skills-section-id");
  return (
    <motion.div
      id="skills-section-id"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      <SkillCategory title={category} />
      <motion.div
        className="flex flex-wrap justify-center items-center my-10 gap-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="w-1/7 flex items-center flex-col gap-4 bg-card p-4 rounded-lg shadow-md border"
          >
            <SkillItem skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
