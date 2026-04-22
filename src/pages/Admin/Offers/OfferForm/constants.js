export const CATEGORIES = [
  { value: "portfolio", label: "Portfolio" },
  { value: "usługi", label: "Usługi" },
  { value: "sklep", label: "Sklep" },
  { value: "biznes", label: "Biznes" },
  { value: "edukacja", label: "Edukacja" },
  { value: "landing", label: "Landing Page" },
];

export const STYLES = [
  "elegancki",
  "minimalistyczny",
  "nowoczesny",
  "klasyczny",
  "kreatywny",
];

export const PAYMENT_MODES = [
  { value: "one_time", label: "Kup teraz (jednorazowo)" },
];

export const CUSTOMER_ACTIONS = [
  { value: "none", label: "Brak dodatkowej akcji" },
  { value: "view_ready", label: "Zobacz gotowy produkt" },
  { value: "edit_product", label: "Edytuj swój produkt" },
  { value: "custom", label: "Własna etykieta" },
];

export const EMPTY = {
  title: "",
  shortDescription: "",
  price: "",
  category: "portfolio",
  style: "elegancki",
  colors: [],
  fullDescription: "",
  youtubeUrl: "",
  features: [""],
  image: "",
  images: [],
  stripePaymentUrl: "",
  paymentMode: "one_time",
  customerActionType: "none",
  customerActionUrl: "",
  customerActionLabel: "",
};
