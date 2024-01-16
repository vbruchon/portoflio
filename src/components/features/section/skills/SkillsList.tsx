// Dans SkillsList.tsx

import { SkillCategory } from "./SkillCategory";
import { SkillItem, SkillItemProps } from "./SkillItem";

export type SkillsListProps = {
  skills: SkillItemProps["skill"][]; // Utilisez le type des propriétés de skill ici
  category: string;
};

export const SkillList = ({ skills, category }: SkillsListProps) => {
  return (
    <div>
      <SkillCategory title={category} />
      <div className="flex flex-wrap justify-center items-center my-10 gap-2">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};
