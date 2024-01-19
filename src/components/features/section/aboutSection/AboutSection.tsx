import { useTranslation } from "react-i18next";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "../../Layout";
import { SectionSelector } from "./sectionSelector/SectionSelector";

export const AboutSection = () => {
  const { t } = useTranslation("global");

  return (
    <Layout id="about-section">
      <LayoutHeader>
        <LayoutTitle elementId="about-title">
          {t("aboutSection.title")}
        </LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <SectionSelector />
      </LayoutContent>
    </Layout>
  );
};
/* 
<section className="py-16" id="about">
      <div className="w-1/12">
        <h2 className="text-2xl font-bold ">About</h2>
        <div
          className="h-10 mt-2 border-t-2 border-muted-foreground backdrop-blur-sm"
          style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
        ></div>
      </div>
      <SectionSelector />
    </section> */
