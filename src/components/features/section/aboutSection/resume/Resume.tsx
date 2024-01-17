import { EXPERIENCE as data } from "@/lib/data";
import { ResumeItem } from "./ResumeItem";
import { motion } from "framer-motion";
import { useSectionIsVisible } from "@/hooks/useSectionIsVisible";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
    },
  },
};

const Resume = () => {
  const controls = useSectionIsVisible("resume");

  return (
    <motion.div
      className="container mx-auto w-full h-full"
      id="resume"
      initial={"hidden"}
      variants={container}
      animate={controls}
    >
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-accent-foreground h-full border"
          style={{ left: "50%" }}
        ></div>
        {data.map((item) => (
          <ResumeItem data={item} key={item.title} />
        ))}
      </div>
    </motion.div>
  );
};

export default Resume;
