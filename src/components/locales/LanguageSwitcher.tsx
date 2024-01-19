/* import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

{
  /* <button
    className="bg-blue-500 text-white px-4 py-2 rounded-md"
    onClick={toggleLanguage}
  >
    {i18n.language === "en" ? "Switch to French" : "Switch to English"}
  </button> 
}
 */
import { useTranslation } from "react-i18next";
import CountryFlag from "react-country-flag";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <CountryFlag
        countryCode={i18n.language === "en" ? "GB" : "FR"}
        svg
        onClick={() => toggleLanguage(i18n.language === "en" ? "fr" : "en")}
        style={{
          width: "25px",
          height: "25px",
          cursor: "pointer",
          borderRadius: "100%",
        }}
      />
    </div>
  );
};
