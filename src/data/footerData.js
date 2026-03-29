import { socialMediaData } from "./socialMediaData";

export const footerData = {
  brand: {
    name: "Klara Queen",
    slogan: "Digital Excellence",
    description:
      "Tworzymy luksusowe doświadczenia cyfrowe, które definiują nową jakość Twojej marki w sieci.",
  },
  links: [
    { name: "Start", to: "/" },
    { name: "Oferta", url: "#offer" },
    { name: "Aktualności", url: "#news" },
    { name: "Współpraca", to: "/cooperation" },
    { name: "Opinie", url: "#opinions" },
    { name: "O Nas", to: "/about" },
    { name: "Najczęstsze pytania", to: "/questions" },
  ],
  socials: socialMediaData,
  contact: {
    email: "kontakt@studioklara.pl",
    copy: `© ${new Date().getFullYear()} Klara Queen. Wszystkie prawa zastrzeżone.`,
  },
};
