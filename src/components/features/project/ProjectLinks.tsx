import { Link } from "@/components/ui/Link";
import { Github, ExternalLink } from "lucide-react";

type ProjectLinksProps = {
  githubUrl: string;
  demoUrl: string;
};
export const ProjectLinks = ({ githubUrl, demoUrl }: ProjectLinksProps) => {
  return (
    <div className="flex items-end justify-between">
      <Link link={githubUrl}>
        <Github /> Repository
      </Link>
      <Link link={demoUrl}>
        <ExternalLink /> Live Demo
      </Link>
    </div>
  );
};
