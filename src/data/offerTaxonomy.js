/**
 * Jedno źródło prawdy dla pola oferty — formularz admina i filtry na /offer.
 */

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
