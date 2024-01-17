import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { useSectionIsVisible } from "@/hooks/useSectionIsVisible";

export const Layout = (props: ComponentPropsWithoutRef<"section">) => {
  return <section {...props} className={cn("py-16", props.className)} />;
};

export const LayoutHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-start gap-1 flex-col w-full md:flex-1 min-w-[200px]",
        props.className
      )}
    />
  );
};

type LayoutTitleProps = {
  children: ReactNode;
  elementId: string;
} & ComponentPropsWithoutRef<"h2">;

const titleContainer = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.3,
    },
  },
};

const underlineContainer = {
  hidden: { width: "0%" },
  visible: {
    width: "115%", // ou la valeur que vous préférez
    transition: {
      delay: 0.3,
      duration: 0.8,
    },
  },
};

export const LayoutTitle = ({
  children,
  elementId,
  ...props
}: LayoutTitleProps) => {
  const controls = useSectionIsVisible(elementId);

  return (
    <motion.div
      id={elementId}
      variants={titleContainer}
      initial="hidden"
      animate={controls}
      className="flex flex-col gap-y-1 mb-6"
    >
      <h2 {...props} className={cn("text-2xl font-bold", props.className)}>
        {children}
      </h2>
      <motion.div
        className="h-1 rounded-xl bg-primary"
        variants={underlineContainer}
        initial="hidden"
        animate={controls}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};
/* export const LayoutTitle = (props: ComponentPropsWithoutRef<"h2">) => {
  return (
    <div className="flex flex-col gap-y-1 mb-6">
      <h2 {...props} className={cn("text-2xl font-bold", props.className)}>
        {props.children}
      </h2>
      <div className="h-1 w-[115%] rounded-xl bg-primary"></div>
    </div>
  );
}; */

export const LayoutContent = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className={cn("container mx-auto", props.className)} />
  );
};
