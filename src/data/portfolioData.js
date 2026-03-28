import { FaGem, FaBuilding, FaCamera, FaChartLine } from "react-icons/fa";
import p1 from "../assets/projects/pexels-dimkidama-15115560.jpg";
import p2 from "../assets/projects/pexels-firmbee-com-22729701-6963740.jpg";
import p3 from "../assets/projects/pexels-magnetme-3917414-5839461.jpg";
import p4 from "../assets/projects/pexels-rdne-7310202.jpg";
import p5 from "../assets/projects/pexels-dimkidama-15115560.jpg";
import p6 from "../assets/projects/pexels-firmbee-com-22729701-6963740.jpg";

export const portfolioData = [
  {
    id: 1,
    type: "link", //prawdziwa strona
    url: "https://google.com",
    title: "Boutique E-commerce",
    description: "W pełni działający sklep internetowy premium.",
    image: p1,
    icon: FaGem,
  },
  {
    id: 2,
    type: "example", //  przykład projektu z mojego folderu
    title: "Studio Architektury",
    description: "Koncepcja wizualna minimalistycznego biura.",
    image: p2,
    icon: FaBuilding,
  },
  {
    id: 3,
    type: "example",
    title: "Portfolio Fotografa",
    description: "Przykład układu galerii zdjęć wysokiej rozdzielczości.",
    image: p3,
    icon: FaCamera,
  },
  {
    id: 4,
    type: "link",
    url: "https://moja-inna-strona.pl",
    title: "Dashboard Finansowy",
    description: "Aplikacja webowa zrealizowana dla sektora fintech.",
    image: p4,
    icon: FaChartLine,
  },
  {
    id: 5,
    type: "example",
    title: "Projekt Specjalny",
    description: "Przykład projektu specjalnego z mojego portfolio.",
    image: p5,
    icon: FaGem,
  },
  {
    id: 6,
    type: "example",
    title: "Projekt Specjalny 2",
    description: "Kolejny przykład projektu specjalnego z mojego portfolio.",
    image: p6,
    icon: FaGem,
  },
];
