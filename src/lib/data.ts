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

export const SKILLS = [
  {
    category: "Web develop",
    name: "HTML",
    icon: "src/assets/skills/html.png",
  },
  {
    category: "Web develop",
    name: "CSS",
    icon: "src/assets/skills/css.png",
  },
  {
    category: "Web develop",
    name: "JavaScript",
    icon: "src/assets/skills/js.png",
  },
  {
    category: "Web develop",
    name: "TypeScript",
    icon: "src/assets/skills/typescript.png",
  },
  {
    category: "Web develop",
    name: "Tailwind",
    icon: "src/assets/skills/tailwind.png",
  },
  {
    category: "Web develop",
    name: "React",
    icon: "src/assets/skills/react.png",
  },
  {
    category: "Web develop",
    name: "Next.js",
    icon: "src/assets/skills/next-js.png",
  },
  {
    category: "Web develop",
    name: "PHP",
    icon: "src/assets/skills/php.png",
  },
  {
    category: "Web develop",
    name: "Laravel",
    icon: "src/assets/skills/laravel.png",
  },
  {
    category: "Web develop",
    name: "Node.js",
    icon: "src/assets/skills/nodejs.png",
  },
  {
    category: "Web develop",
    name: "WordPress",
    icon: "src/assets/skills/wordpress.png",
  },
  {
    category: "Web develop",
    name: "MySQL",
    icon: "src/assets/skills/mysql.png",
  },
  {
    category: "Other",
    name: "Figma",
    icon: "src/assets/skills/figma.png",
  },

  {
    category: "Other",
    name: "GitHub",
    icon: "src/assets/skills/github.png",
  },
];

export const TESTIMONIALS = [
  {
    name: "Xavier Masclaux",
    role: "Chef de projet",
    enterprise: "Le Moulin Digital",
    content: `Vivian a su comprendre nos besoins et développer des solutions adaptées. 
      Autonome et réactif, il a résolu les problèmes en cherchant les informations 
      nécessaires ou en se référant à ses pairs. Sa capacité à s'adapter aux évolutions
      du projet et à former les utilisateurs a été appréciée. Globalement, il a 
      dépassé nos attentes et s'est pleinement intégré à notre équipe.`,
  },
  {
    name: "Jean-Philippe Falavel",
    role: "Représentant Mardinnov'",
    enterprise: "Le Moulin Digital",
    content: `Vivian a travaillé à la refonte du site www.mardinnov.com en 2022 sur Wordpress.
      À partir de la nouvelle charte graphique créée, il a entièrement créé le 
      nouveau site internet. Très à l'écoute des besoins et force de propositions, 
      il a su être très réactif et a respecté le calendrier du cahier des charges. 
      Je le recommande pour son professionnalisme!`,
  },
  /* {
    name: "Stéphanie Escandell",
    role: "Gestionnaire Cédille formation",
    enterprise: "Le Moulin Digital",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
    molestie dolor quis sem pellentesque porta. Duis scelerisque placerat arcu, 
    eu faucibus urna posuere id. Fusce sollicitudin egestas faucibus. Integer 
    vulputate ex quis vulputate commodo. Phasellus porttitor arcu dui, id posuere 
    neque viverra a. Phasellus molestie ut tortor at vulputate.`,
  },
  {
    name: "David Escandell",
    enterprise: "Les jardins de la Drôme",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
    molestie dolor quis sem pellentesque porta. Duis scelerisque placerat arcu, 
    eu faucibus urna posuere id. Fusce sollicitudin egestas faucibus. Integer 
    vulputate ex quis vulputate commodo. Phasellus porttitor arcu dui, id posuere 
    neque viverra a. Phasellus molestie ut tortor at vulputate.`,
  }, */
];
