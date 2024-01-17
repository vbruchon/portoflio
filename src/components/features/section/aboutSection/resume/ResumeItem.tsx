import { ResumeItemProps } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const ResumeItem = ({ data }: ResumeItemProps) => {
  const isCourse = data.type === "courses";
  const isExperience = data.type === "experience";

  return (
    <motion.div
      className={cn("mb-8 flex justify-between items-center flex-col w-full", {
        "right-timeline md:flex-row": isExperience,
        "left-timeline md:flex-row-reverse": isCourse,
      })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="order-1 w-full md:w-5/12"></div>
      <div
        className={`z-20 flex items-center order-1 border-2 border-primary shadow-xl w-28 h-28 rounded-full mb-2 md:mb-0 `}
      >
        <motion.a href={data.link}>
          <img
            src={data.img}
            alt="Avatar"
            className="mx-auto h-full w-full object-cover rounded-full"
          />
        </motion.a>
      </div>
      <motion.div
        className={cn(
          "z-20 order-1 rounded-lg shadow-xl md:w-5/12 px-4 md:px-6 py-4 bg-card"
        )}
        initial={{ x: isCourse ? -1000 : 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="mb-3 font-bold md:text-xl text-foreground">
          {data.title}
        </h3>
        <p className="text-center md:text-left text-sm font-medium text-foreground mb-2">
          {data.date}
        </p>
        <p className="hidden md:block leading-6 text-foreground">
          {data.description}
        </p>
      </motion.div>
    </motion.div>
  );
};
