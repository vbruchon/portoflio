import { motion } from "framer-motion";
import ButtonSection from "./ButtonSection";

const HiSection = () => {
  const hiSectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={hiSectionVariants}>
      <p className="text-xl leading-relaxed md:text-2xl md:leading-loose xl:w-3/4">
        Bonjour à tous ! Je suis <br />
        <div className="ml-4">
          <h1 className="text-4xl font-medium text-primary">Vivian Bruchon</h1>
          <p>
            <span className="text-4xl font-black text-primary">
              Développeur Web passionné
            </span>
            , je mets mes compétences à votre disposition pour transformer vos
            idées en projets concrets.
          </p>
        </div>
      </p>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <ButtonSection />
      </motion.div>
    </motion.div>
  );
};

export default HiSection;
