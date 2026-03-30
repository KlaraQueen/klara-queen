import { socialMediaData } from "./socialMediaData";
import { contactData } from "./contactData";

export const footerData = {
  brand: {
    name: "Klara Queen",
    slogan: "Digital Excellence",
    description:
      "Tworzymy luksusowe doświadczenia cyfrowe, które definiują nową jakość Twojej marki w sieci.",
  },
  links: [
    { name: "Start", to: "/" },
    { name: "Oferta", to: "/offer" },
    { name: "Aktualności", to: "/blog" },
    { name: "Współpraca", to: "/cooperation" },
    { name: "Opinie", url: "#opinions" },
    { name: "O Nas", to: "/about" },
    { name: "Najczęstsze pytania", to: "/questions" },
  ],
  socials: socialMediaData,
  contact: {
    email: contactData.email,
    copy: `© ${new Date().getFullYear()} Klara Queen. Wszystkie prawa zastrzeżone.`,
  },
};
