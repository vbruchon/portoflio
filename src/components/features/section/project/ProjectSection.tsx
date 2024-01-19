import { motion } from "framer-motion";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "../../Layout";
import { Project } from "./Project";
import { useSectionIsVisible } from "@/hooks/useSectionIsVisible";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

export type ProjectType = {
  title: string;
  description: string;
  thumbnailUrl: string;
  githubUrl: string;
  demoUrl: string;
};

export const ProjectSection = () => {
  const controls = useSectionIsVisible("project-items");
  const { t } = useTranslation("global");
  const projects: ProjectType[] = t("projectSection.list", {
    returnObjects: true,
  });

  return (
    <Layout id="projects">
      <LayoutHeader>
        <LayoutTitle elementId="projects-title">
          {t("projectSection.title")}
        </LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <motion.div
          id="project-items"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <div className="flex items-center flex-col gap-8 lg:flex-row lg:gap-3">
            {projects.map((project, index) => (
              <Project key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </LayoutContent>
    </Layout>
  );
};
