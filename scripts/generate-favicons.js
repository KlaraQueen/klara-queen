/**
 * Favicony z głównego logo (przezroczyste tło, dopasowanie w kwadrat).
 * Uruchom: node scripts/generate-favicons.js
 */
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "images", "klara-queen-logo.png");

async function squareIcon(size, outName) {
  await sharp(SRC)
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

(async () => {
  await squareIcon(16, "favicon-16x16.png");
  await squareIcon(32, "favicon-32x32.png");
  await squareIcon(192, "logo192.png");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
