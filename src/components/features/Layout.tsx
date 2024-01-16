import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

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

export const LayoutTitle = (props: ComponentPropsWithoutRef<"h2">) => {
  return (
    <div className="flex flex-col gap-y-1 mb-6">
      <h2 {...props} className={cn("text-2xl font-bold", props.className)}>
        {props.children}
      </h2>
      <div className="h-1 w-[115%] rounded-xl bg-primary"></div>
    </div>
  );
};

export const LayoutContent = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className={cn("container mx-auto", props.className)} />
  );
};
