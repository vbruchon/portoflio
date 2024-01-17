import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const ButtonSection = () => {
  const socialNetworks = [
    { name: "Github", link: "", icon: <Github /> },
    { name: "Linkedin", link: "", icon: <Linkedin /> },
  ];

  return (
    <motion.div
      className="flex justify-center gap-4 md:justify-start"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {socialNetworks.map((socialNetwork) => (
        <a
          key={socialNetwork.name}
          href={socialNetwork.link}
          className="flex p-4 text-lg font-medium text-white rounded-lg gap-x-2 bg-primary"
        >
          {socialNetwork.icon} {socialNetwork.name}
        </a>
      ))}
    </motion.div>
  );
};

export default ButtonSection;
