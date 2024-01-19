import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { NavItem } from "./NavItem";
import { LanguageSwitcher } from "@/components/locales/LanguageSwitcher";
import { ToggleThemeButton } from "@/components/theme/ThemeToggle";

type MobileMenuProps = {
  links: { name: string; href: string }[];
  onClose: () => void;
};

export const MobileMenu = ({ links, onClose }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 z-10 ",
        "w-full h-full",
        "bg-gray-700 bg-opacity-50 backdrop-blur-lg"
      )}
    >
      <nav
        className={cn(
          "absolute top-0 right-0 z-10",
          "flex flex-col sm:items-end justify-center gap-8",
          "w-3/4 h-full p-8 bg-background"
        )}
      >
        <Button
          variant={"outline"}
          className="absolute top-4 right-2 text-primary hover:text-primary-foreground hover:bg-primary"
          onClick={onClose}
        >
          <X strokeWidth={4} size={42} className="" />
        </Button>
        <a href="/" className="mx-auto mb-[15%]">
          <img src={"logo_black.png"} className="w-20 " />
        </a>
        <ul className="flex flex-col items-end w-full gap-2">
          {links.map((link) => (
            <div key={link.name} className="p-4 text-left">
              <NavItem
                href={link.href}
                name={link.name}
                className="text-xl text-foreground"
              />
            </div>
          ))}
          <div className="flex gap-4 items-center">
            <ToggleThemeButton />
            <LanguageSwitcher />
          </div>
        </ul>
      </nav>
    </div>
  );
};
