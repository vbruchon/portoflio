import { motion } from "framer-motion";

export type SkillItemProps = {
  skill: {
    name: string;
    icon: string;
  };
};

export const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -25 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 object-contain"
      />
      <p className="text-foreground text-sm text-center">{skill.name}</p>
    </motion.div>
  );
};
