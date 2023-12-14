import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { NavItem } from "./NavItem";

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
          "w-3/4 h-full p-8 bg-secondary"
        )}
      >
        <Button
          variant={"outline"}
          className="absolute top-4 right-2"
          onClick={onClose}
        >
          <X strokeWidth={4} size={42} className="text-primary" />
        </Button>
        <img src={"public/vite.svg"} className="w-20 mx-auto mb-[15%]" />
        <ul className="flex flex-col items-end w-full gap-2">
          {links.map((link) => (
            <div key={link.name} className="p-4 text-left">
              <NavItem href={link.href} name={link.name} className="text-xl" />
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};
