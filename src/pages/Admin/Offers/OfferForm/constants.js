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
  lowestPrice30Days: "",
  fullDescription: "",
  liveUrl: "",
  features: [""],
  image: "",
  images: [],
  allegroUrl: "",
  customerActionType: "none",
  customerActionUrl: "",
  customerActionLabel: "",
};
