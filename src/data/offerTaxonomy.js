/**
 * Jedno źródło prawdy dla pola oferty — formularz admina i filtry na /offer.
 */

export const OFFER_CATEGORY_OPTIONS = [
  { value: "portfolio", label: "Portfolio" },
  { value: "usługi", label: "Usługi" },
  { value: "sklep", label: "Sklep" },
  { value: "biznes", label: "Biznes" },
  { value: "edukacja", label: "Edukacja" },
  { value: "landing", label: "Landing Page" },
];

export const OFFER_STYLE_OPTIONS = [
  "elegancki",
  "minimalistyczny",
  "nowoczesny",
  "klasyczny",
  "kreatywny",
];

/** Te same nazwy co w panelu przy wyborze kolorów chipów. */
export const OFFER_COLOR_OPTIONS = [
  "czarny",
  "biały",
  "szary",
  "srebrny",
  "złoty",
  "miedziany",
  "beżowy",
  "kremowy",
  "brązowy",
  "czerwony",
  "bordowy",
  "różowy",
  "pomarańczowy",
  "żółty",
  "zielony",
  "niebieski",
  "błękitny",
  "granatowy",
  "fioletowy",
  "purpurowy",
  "wielokolorowy",
];

function styleLabel(slug) {
  if (!slug) return "";
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export function buildOfferPublicFilters() {
  return {
    categories: [
      { value: "", label: "Wszystkie kategorie" },
      ...OFFER_CATEGORY_OPTIONS.map((x) => ({ ...x })),
    ],
    styles: [
      { value: "", label: "Wszystkie style" },
      ...OFFER_STYLE_OPTIONS.map((slug) => ({
        value: slug,
        label: styleLabel(slug),
      })),
    ],
    colors: [
      { value: "", label: "Wszystkie kolory" },
      ...OFFER_COLOR_OPTIONS.map((name) => ({ value: name, label: name })),
    ],
  };
}
