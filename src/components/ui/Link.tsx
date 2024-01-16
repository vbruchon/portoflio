import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export type LinkProps = {
  link: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export const Link = ({ link, children, ...rest }: LinkProps) => {
  return (
    <a
      href={link}
      className={cn("flex gap-x-1 hover:underline text-accent-foreground", {
        ...rest,
      })}
    >
      {children}
    </a>
  );
};
