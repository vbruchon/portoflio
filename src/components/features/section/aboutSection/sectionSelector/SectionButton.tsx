type SectionButtonProps = {
  section: string;
  activeSection: string;
  onClick: (section: string) => void;
};

export const SectionButton = ({
  section,
  activeSection,
  onClick,
}: SectionButtonProps) => {
  const baseStyle =
    "text-lg font-semibold px-4 focus:outline-none transition-all";
  const activeStyle = "bg-primary p-2 rounded-lg";
  const hoverStyle = "hover:bg-primary hover:rounded-lg";

  const buttonStyle =
    activeSection === section
      ? `${baseStyle} ${activeStyle}`
      : `${baseStyle} p-2 ${hoverStyle}`;

  return (
    <button className={buttonStyle} onClick={() => onClick(section)}>
      {section === "about" ? "About Me" : "Resume"}
    </button>
  );
};
