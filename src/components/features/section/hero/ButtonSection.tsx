import { Github, Linkedin } from "lucide-react";

const ButtonSection = () => {
  const socialNetworks = [
    { name: "Github", link: "", icon: <Github /> },
    { name: "Linkedin", link: "", icon: <Linkedin /> },
  ];
  return (
    <div className="flex justify-center gap-4 md:justify-start">
      {socialNetworks.map((socialNetwork) => (
        <a
          key={socialNetwork.name}
          href={socialNetwork.link}
          className="flex p-4 text-lg font-medium text-white rounded-lg gap-x-2 bg-primary"
        >
          {socialNetwork.icon} {socialNetwork.name}
        </a>
      ))}
    </div>
  );
};

export default ButtonSection;
