import {
  OFFER_CATEGORY_OPTIONS,
  OFFER_STYLE_OPTIONS,
} from "../../../../data/offerTaxonomy";

export const CATEGORIES = OFFER_CATEGORY_OPTIONS;
export const STYLES = OFFER_STYLE_OPTIONS;
export const PAYMENT_MODES = [{ value: "one_time", label: "Kup teraz" }];

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
  altPrice: "",
  category: "portfolio",
  style: "elegancki",
  colors: [],
  fullDescription: "",
  youtubeUrl: "",
  features: [""],
  image: "",
  images: [],
  stripePaymentUrl: "",
  blikPaymentInfo: "",
  paymentMode: "one_time",
  customerActionType: "none",
  customerActionUrl: "",
  customerActionLabel: "",
};
