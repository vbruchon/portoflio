import { useSectionIsVisible } from "@/hooks/useSectionIsVisible";
import { motion } from "framer-motion";

const item = {
  hidden: { y: -25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const About = ({ avatarSrc = "/src/assets/me.png" }) => {
  const controls = useSectionIsVisible("about");

  return (
    <div id="about" className="container mx-auto">
      <div className="flex flex-col items-center">
        <motion.div
          initial="hidden"
          variants={item}
          animate={controls}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <img
            className="w-44 h-44 object-cover mb-4"
            src={avatarSrc}
            alt="my avatar"
          />
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            className="text-xl text-foreground mb-4"
            initial="hidden"
            variants={item}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hello, I'm Vivian Bruchon, a web developer based in Valence in Drôme
            (France).
          </motion.p>
          <motion.p
            className="text-xl text-foreground mb-4"
            initial="hidden"
            variants={item}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm specialize in building modern and responsive web applications
            using the latest technologies. With a keen eye for design and a
            passion for coding, I strive to create beautiful and user-friendly
            digital experiences.
          </motion.p>

          <motion.p
            className="text-xl text-foreground mb-4"
            initial="hidden"
            variants={item}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Let's connect and create something amazing together!
          </motion.p>
        </div>
      </div>
    </div>
  );
};
