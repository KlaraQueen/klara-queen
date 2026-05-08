/**
 * Favicony (16/32/192) z dedykowanego kadru korony — pełny obraz w kwadracie (`contain`).
 * OG: całe logo (klara-queen-logo.png) na 1200×630.
 * Przed generacją: `npm run fix-logo` (białe tło favicon-master → alpha).
 * Uruchom: npm run generate-favicons
 */
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "images", "klara-queen-logo.png");
const FAVICON_SRC = path.join(ROOT, "public", "images", "favicon-master.png");

/** Całe zdjęcie korony w docelowym rozmiarze (landscape → puste pasy góra/dół, bez crop). */
async function squareIcon(size, outName) {
  await sharp(FAVICON_SRC)
    .ensureAlpha()
    .resize(size, size, {
      fit: "contain",
      position: "centre",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9 })
    .toFile(path.join(ROOT, "public", outName));
  console.log("OK:", outName);
}

/** 1200×630 — Facebook / LinkedIn / X (summary_large_image) */
async function openGraphImage() {
  const W = 1200;
  const H = 630;
  const margin = 72;
  const inner = await sharp(SRC)
    .resize(W - margin * 2, H - margin * 2, {
      fit: "inside",
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .toBuffer();

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: { r: 0, g: 0, b: 0 },
    },
  })
    .composite([{ input: inner, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(ROOT, "public", "og-image.png"));
  console.log("OK: og-image.png");
}

(async () => {
  await squareIcon(16, "favicon-16x16.png");
  await squareIcon(32, "favicon-32x32.png");
  await squareIcon(192, "logo192.png");
  await openGraphImage();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
