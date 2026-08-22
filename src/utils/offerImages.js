/**
 * Wyciąga listę URL-i zdjęć z dokumentu oferty (Firestore).
 * Obsługuje: image, images[], obiekty { url }, pojedynczy string, zagnieżdżenia.
 */

const URL_PATTERN = /^https?:\/\//i;
const LOCAL_IMAGE_PATTERN =
  /^(\/|\.\/|\.\.\/).+\.(png|jpe?g|webp|gif|avif|svg)(\?|#|$)/i;

function isImageUrl(value) {
  if (typeof value !== "string") {
    return false;
  }
  const s = value.trim();
  if (!URL_PATTERN.test(s) && !LOCAL_IMAGE_PATTERN.test(s)) {
    return false;
  }
  if (LOCAL_IMAGE_PATTERN.test(s)) {
    return true;
  }
  return (
    /firebasestorage\.googleapis\.com/i.test(s) ||
    /\.(png|jpe?g|webp|gif|avif|svg)(\?|#|$)/i.test(s) ||
    /googleusercontent\.com/i.test(s) ||
    /cloudinary\.com/i.test(s)
  );
}

function collectFromValue(value, urls, seen, depth = 0) {
  if (value == null || depth > 6) {
    return;
  }

  if (typeof value === "string") {
    const s = value.trim();
    if (isImageUrl(s) && !seen.has(s)) {
      seen.add(s);
      urls.push(s);
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectFromValue(item, urls, seen, depth + 1));
    return;
  }

  if (typeof value === "object") {
    // Typowe klucze z Firebase / starych formularzy
    const preferKeys = [
      "url",
      "downloadURL",
      "downloadUrl",
      "src",
      "href",
      "path",
    ];
    for (const key of preferKeys) {
      if (key in value) {
        collectFromValue(value[key], urls, seen, depth + 1);
      }
    }
    Object.values(value).forEach((v) =>
      collectFromValue(v, urls, seen, depth + 1),
    );
  }
}

/**
 * Kolejność: główne zdjęcie, potem galeria, potem pozostałe pola ze zdjęciami.
 */
export function getOfferCoverUrls(offer) {
  if (!offer || typeof offer !== "object") {
    return [];
  }

  const urls = [];
  const seen = new Set();

  const addField = (field) => {
    if (field in offer) {
      collectFromValue(offer[field], urls, seen);
    }
  };

  addField("image");
  addField("images");
  addField("gallery");
  addField("galleryImages");
  addField("photos");
  addField("photo");

  return urls;
}

export function getOfferCoverUrl(offer) {
  return getOfferCoverUrls(offer)[0] || "";
}

/** Przed zapisem do Firestore — ujednolicenie pól image / images. */
export function normalizeOfferImageFields(data) {
  const out = { ...data };
  const urls = getOfferCoverUrls(out);

  if (urls.length === 0) {
    out.image = typeof out.image === "string" ? out.image : "";
    out.images = [];
    return out;
  }

  out.image = urls[0];
  out.images = urls.length > 1 ? urls.slice(1) : [];
  return out;
}
