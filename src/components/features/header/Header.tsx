import { ToggleThemeButton } from "@/components/theme/ThemeToggle";
import { Nav } from "./Nav";
import { LanguageSwitcher } from "@/components/locales/LanguageSwitcher";

export const Header = () => {
  return (
    <header className="flex items-center justify-around mt-2 md:mt-4 md:justify-evenly">
      <img src="/logo_white.png" className="w-1/12 h-auto md:w-14" />
      <Nav>
        <ToggleThemeButton />
        <LanguageSwitcher />
      </Nav>
    </header>
  );
};
