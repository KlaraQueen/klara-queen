import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export const footerData = {
  brand: {
    name: "Klara Queen",
    slogan: "Digital Excellence",
    description:
      "Tworzymy luksusowe doświadczenia cyfrowe, które definiują nową jakość Twojej marki w sieci.",
  },
  links: [
    { name: "Start", url: "#home" },
    { name: "Oferta", url: "#offer" },
    { name: "Aktualności", url: "#news" },
    { name: "Współpraca", url: "#collaboration" },
    { name: "Opinie", url: "#opinions" },
    { name: "O Nas", url: "#about" },
    { name: "Najczęstsze pytania", url: "#faq" },
  ],
  socials: [
    {
      id: 1,
      icon: FaYoutube,
      url: "https://youtube.com",
      label: "YouTube",
    },
    {
      id: 2,
      icon: FaFacebookF,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      id: 3,
      icon: FiShoppingCart,
      url: "https://allegro.pl",
      label: "Allegro",
    },
  ],
  contact: {
    email: "kontakt@studioklara.pl",
    copy: `© ${new Date().getFullYear()} Klara Queen. Wszystkie prawa zastrzeżone.`,
  },
};
