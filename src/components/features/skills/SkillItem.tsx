export type SkillItemProps = {
  skill: {
    name: string;
    icon: string;
  };
};

export const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div className="w-1/7 flex items-center flex-col gap-4 bg-card p-4 rounded-lg shadow-md border">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 object-contain"
      />
      <p className="text-foreground text-sm text-center">{skill.name}</p>
    </div>
  );
};
