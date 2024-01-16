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
    <div className="p-4">
      <div className="w-1/12">
        <h2 className="text-2xl font-bold ">Projects</h2>
        <div
          className="h-10 mt-2 border-t-2 border-muted-foreground backdrop-blur-sm"
          style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
        ></div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-4">
        <a className="flex items-center justify-center w-3/12 p-4 rounded-lg lg:2/12 bg-primary">
          More Project
        </a>
      </div>
    </div>
  );
};
