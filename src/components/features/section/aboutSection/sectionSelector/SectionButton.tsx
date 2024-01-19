import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("global");

  const baseStyle =
    "text-lg font-semibold px-4 focus:outline-none transition-all";
  const activeStyle = "bg-primary p-2 rounded-lg";
  const hoverStyle = "hover:bg-primary hover:rounded-lg";

  const buttonStyle =
    activeSection === section
      ? `${baseStyle} ${activeStyle}`
      : `${baseStyle} p-2 ${hoverStyle}`;

  const buttonText =
    section === "about"
      ? t("aboutSection.aboutMeSection.button")
      : t("aboutSection.experienceSection.button");

  return (
    <button className={buttonStyle} onClick={() => onClick(section)}>
      {buttonText}
    </button>
  );
};
