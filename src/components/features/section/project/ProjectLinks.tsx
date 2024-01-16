import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";

type ProjectLinksProps = {
  githubUrl: string;
  demoUrl: string;
};
export const ProjectLinks = ({ githubUrl, demoUrl }: ProjectLinksProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        "lg:absolute lg:bottom-5 lg:w-10/12"
      )}
    >
      <Link link={githubUrl}>
        <Github /> Repository
      </Link>
      <Link link={demoUrl}>
        <ExternalLink /> Live Demo
      </Link>
    </div>
  );
};
