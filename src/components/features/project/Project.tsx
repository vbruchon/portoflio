import { Card, CardContent } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

type ProjectProps = {
  project: {
    name: string;
    thumbnailUrl: string;
    githubUrl: string;
    description: string;
    demoUrl: string;
  };
};

const Project = ({ project }: ProjectProps) => {
  return (
    <Card className="w-full transition-all rounded-lg lg:w-1/3 hover:scale-105">
      <img
        src={project.thumbnailUrl}
        alt={project.name}
        className="object-cover w-full h-40 mb-4 "
      />
      <CardContent className="flex flex-col flex-grow mt-auto">
        <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
        <p className="mb-4 text-gray-600">{project.description}</p>
        <div className="flex items-end justify-between">
          <a href={project.githubUrl} className="flex gap-x-4 hover:underline">
            <Github /> Repository
          </a>
          <a href={project.demoUrl} className="flex gap-x-4 hover:underline">
            <Link /> Live Demo
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
