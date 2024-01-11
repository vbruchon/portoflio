//import { ResumeItemProps } from "@/components/features/resume/ResumeItem";

export type ResumeItemProps = {
  data: {
    title: string;
    link: string;
    img: string;
    date: string;
    description: string;
    type: "experience" | "courses";
  };
};
export const EXPERIENCE: ResumeItemProps["data"][] = [
  {
    title: "Formation NextReact",
    date: "Décembre 2023",
    link: "https://codelynx.dev/beginreact",
    type: "courses",
    img: "src/assets/logo_NextReact.png",
    description:
      "Suite à BeginReact découverte de Next.js de ses concepts et de son ecosystème.",
  },
  {
    title: "Formation BeginReact",
    date: "Novembre 2023",
    link: "https://codelynx.dev/beginreact",
    type: "courses",
    img: "src/assets/logo_BeginReact.png",
    description:
      "Formation sur le framework React, de ses concepts de base et de son écosystème.",
  },
  {
    title: "Développeur Web",
    date: "Juin 2023 - Juillet 2023",
    link: "https://lemoulindigital.fr/",
    description: `Afin de cloturer les projets de l'alternance poursuite de l'aventure avec le Moulin Digital.`,
    type: "experience",
    img: "src/assets/logo_Le-moulin-digital.png",
  },
  {
    title: "Développeur Web en Alternance",
    date: "Juillet 2022 - Juin 2023",
    link: "https://lemoulindigital.fr/",
    description: `
      Après avoir achevé la première phase de ma formation au campus, j'ai eu 
      l'opportunité de réaliser mon alternance au sein du Moulin Digital. 
      Cette expérience d'une année m'a permis de concrétiser plusieurs projets significatifs,
      Mardinnov', Cédille Formation, Archimède.
      
      En travaillant en autonomie sur ces projets avec le soutien d'un tuteur,
      j'ai pris en charge l'intégralité du processus, du  maquettage à la livraison 
      finale, tout en maintenant un suivi régulier avec les clients.`,
    type: "experience",
    img: "src/assets/logo_Le-moulin-digital.png",
  },
  {
    title: "Formation Développeur Web & Applis",
    link: "https://le-campus-numerique.fr/",
    description: `
    Mon parcours de 18 mois au Campus Numérique a été une immersion complète 
    dans le monde du Développeur Web & Applis. Les 6 premiers mois ont forgé les 
    fondations de mes compétences techniques et de collaboration, tandis que la 
    phase d'alternance de 12 mois a offert une opportunité d'approfondir ces 
    compétences tout en les appliquant dans des contextes professionnels concrets.`,
    date: "Décembre 2021 - Juin 2023",
    type: "courses",
    img: "src/assets/logo_Campus-numerique.png",
  },
];
