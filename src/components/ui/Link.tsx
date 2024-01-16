import { ReactNode } from "react";

export type LinkProps = {
  link: string;
  children: ReactNode;
};

export const Link = ({ link, children }: LinkProps) => {
  return (
    <a
      href={link}
      className="flex gap-x-2 hover:underline text-accent-foreground"
    >
      {children}
    </a>
  );
};
