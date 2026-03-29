import { FaFacebookF, FaYoutube, FaShoppingCart } from "react-icons/fa";

export const navbarData = {
  labels: [
    { name: "Oferta", url: "#offer" },
    { name: "Aktualności", url: "#news" },
    { name: "Współpraca", url: "#collab" },
    { name: "Opinie", url: "#reviews" },
    { name: "O Nas", to: "/about" },
  ],
  socials: [
    {
      id: 1,
      icon: FaFacebookF,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      id: 2,
      icon: FaYoutube,
      url: "https://youtube.com",
      label: "YouTube",
    },
    {
      id: 3,
      icon: FaShoppingCart,
      url: "https://allegro.pl",
      label: "Allegro",
    },
  ],
};
