import { useSectionIsVisible } from "@/hooks/useSectionIsVisible";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const item = {
  hidden: { y: -25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const About = ({ avatarSrc = "/src/assets/me.png" }) => {
  const controls = useSectionIsVisible("about");
  const { t } = useTranslation("global");

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
            {t("aboutSection.aboutMeSection.text1")}
          </motion.p>
          <motion.p
            className="text-xl text-foreground mb-4"
            initial="hidden"
            variants={item}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t("aboutSection.aboutMeSection.text2")}
          </motion.p>

          <motion.p
            className="text-xl text-foreground mb-4"
            initial="hidden"
            variants={item}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {t("aboutSection.aboutMeSection.text3")}
          </motion.p>
        </div>
      </div>
    </div>
  );
};
