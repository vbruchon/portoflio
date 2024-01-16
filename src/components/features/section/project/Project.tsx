import { Card, CardContent } from "@/components/ui/card";
import { ProjectLinks } from "./ProjectLinks";
import { cn } from "@/lib/utils";

type ProjectProps = {
  project: {
    name: string;
    thumbnailUrl: string;
    githubUrl: string;
    description: string;
    demoUrl: string;
  };
};

export const Project = ({ project }: ProjectProps) => {
  return (
    <Card
      className={cn(
        "w-full h-full transition-all rounded-xl hover:scale-105 bg-card border relative",
        "lg:w-1/3 lg:h-[455px] xl:h-[440px]"
      )}
    >
      <img
        src={project.thumbnailUrl}
        alt={project.name}
        className="object-cover w-full h-40 mb-4 rounded-xl"
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
      <CardContent className="flex flex-col flex-grow mt-auto">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="mb-4 text-foreground">{project.description}</p>
        <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      </CardContent>
    </Card>
  );
};
