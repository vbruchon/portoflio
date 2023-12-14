import { Button } from "@/components/ui/button";
import { AlignRight } from "lucide-react";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { MobileMenu } from "./MobileMenu";

type NavProps = {
  children: React.ReactNode;
};

export const Nav = ({ children }: NavProps) => {
  const links = [
    { name: "Project", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((curr) => !curr);
  };

  return (
    <div>
      <div className="hidden md:flex md:items-center">
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <NavItem key={link.name} href={link.href} name={link.name} />
          ))}
          {children}
        </nav>
      </div>
      <div className="p-4 md:hidden">
        <Button variant={"outline"} onClick={toggleMobileMenu}>
          <AlignRight />
        </Button>
        {isMobileMenuOpen && (
          <MobileMenu links={links} onClose={toggleMobileMenu} />
        )}
      </div>
    </div>
  );
};
