export type NavItemProps = {
  name: string;
  href: string;
  className?: string;
};

export const NavItem = ({ name, href, className }: NavItemProps) => {
  return (
    <a href={href} className={className}>
      {name}
    </a>
  );
};
