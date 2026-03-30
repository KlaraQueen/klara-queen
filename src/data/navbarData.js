import { socialMediaData } from "./socialMediaData";

export const navbarData = {
  labels: [
    { name: "Oferta", to: "/offer" },
    { name: "Aktualności", url: "#news" },
    { name: "Współpraca", to: "/cooperation" },
    { name: "Najczęstsze pytania", to: "/questions" },
    { name: "O Nas", to: "/about" },
  ],
  socials: socialMediaData,
  aria: {
    closeLabel: "Zamknij menu",
    openLabel: "Otwórz menu"
  }
};
