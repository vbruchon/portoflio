export type SkillCategoryProps = {
  title: string;
};

export const SkillCategory = ({ title }: SkillCategoryProps) => {
  return (
    <div className="flex items-end">
      <div
        className="flex-1 border-t-4 border-primary backdrop-blur-sm"
        style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
      ></div>
      <h3 className="mx-2 text-2xl">{title}</h3>
      <div
        className="flex-1 border-t-4 border-primary backdrop-blur-sm"
        style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
      ></div>
    </div>
  );
};
