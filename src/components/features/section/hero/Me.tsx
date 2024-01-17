import { motion } from "framer-motion";

const Me = () => {
  const meVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.img
      src="src/assets/me.png"
      className="w-4/6 mx-auto mb-16 md:w-3/6 xl:w-3/6"
      initial="hidden"
      animate="visible"
      variants={meVariants}
    />
  );
};

export default Me;
