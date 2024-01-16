import { Layout, LayoutHeader, LayoutTitle } from "../../Layout";
import { Project } from "./Project";

export const ProjectSection = () => {
  const projects = [
    {
      name: "The Northface Clone",
      githubUrl: "https://github.com/vbruchon",
      demoUrl: "https://vivianb.fr/",
      description:
        "Un projet de clonage de la marque de vêtements The North Face, mettant en valeur les compétences de conception et de développement pour recréer une expérience visuelle immersive.",
      thumbnailUrl: "src/assets/project1.png",
    },
    {
      name: "La Marine Perfume",
      githubUrl: "https://github.com/vbruchon",
      demoUrl: "https://melvynx.com/#contact",
      description:
        "Un site dédié au parfum La Marine, mettant en lumière son histoire, ses notes exquises et offrant une expérience élégante pour les passionnés de parfumerie.",
      thumbnailUrl: "src/assets/project2.png",
    },
    {
      name: "Sales Dashboard",
      githubUrl: "https://github.com/vbruchon",
      demoUrl: "https://vivianb.fr/",
      description:
        "Un tableau de bord d'entreprise sophistiqué conçu pour permettre un contrôle efficace des ventes, offrant des analyses approfondies et des fonctionnalités intuitives pour une gestion optimale.",
      thumbnailUrl: "src/assets/project3.png",
    },
  ];

  return (
    <Layout id="projects">
      <LayoutHeader>
        <LayoutTitle>Projects</LayoutTitle>
      </LayoutHeader>
      <div className="flex items-center flex-col gap-8 lg:flex-row lg:gap-3">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Layout>
  );
};
