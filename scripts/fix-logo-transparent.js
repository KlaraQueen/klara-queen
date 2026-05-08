/**
 * Usuwa prawie-białe i prawie-czarne tło (PNG z generatorów) → kanał alpha.
 * Uruchom: node scripts/fix-logo-transparent.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const FILES = [
  path.join(ROOT, "src", "image", "klara-queen-logo.png"),
  path.join(ROOT, "public", "images", "klara-queen-logo.png"),
];

/** Im wyższy próg, tym więcej jasnych odcieni szarości staje się przezroczych (ostrożnie z jasnym złotem). */
const WHITE_MIN = 248;
const EDGE_FUZZ = 8;

/** Piksele bardzo zbite na czarno — typowe czarne tło pod złotem */
const BLACK_MAX_HARD = 18;
const BLACK_SOFT_MAX = 52;
const BLACK_SAT_MAX = 0.18;

async function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn("Pomijam (brak pliku):", filePath);
    return;
  }
  const img = sharp(filePath).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.from(data);
  const w = info.width;
  const h = info.height;
  const ch = info.channels;
  if (ch !== 4) {
    console.error("Oczekiwano RGBA:", filePath);
    return;
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const r = out[i];
      const g = out[i + 1];
      const b = out[i + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const sat = max === 0 ? 0 : (max - min) / max;
      const avg = (r + g + b) / 3;

      // Czarne / prawie czarne tło (bez nasycone złota)
      const hardBlack =
        r <= BLACK_MAX_HARD &&
        g <= BLACK_MAX_HARD &&
        b <= BLACK_MAX_HARD;
      const softBlack =
        avg < BLACK_SOFT_MAX &&
        max < BLACK_SOFT_MAX &&
        sat < BLACK_SAT_MAX;
      if (hardBlack || softBlack) {
        out[i + 3] = 0;
        continue;
      }

      // Twardy biały / prawie biały, mało nasycony (tło, nie metaliczne złoto)
      const light = r >= WHITE_MIN && g >= WHITE_MIN && b >= WHITE_MIN && sat < 0.12;
      if (light) {
        out[i + 3] = 0;
        continue;
      }

      // Bardzo jasne szaro-białe obrzeża antyaliasu
      const avgLight = (r + g + b) / 3;
      if (avgLight >= WHITE_MIN - EDGE_FUZZ && sat < 0.08) {
        const fade = (avgLight - (WHITE_MIN - EDGE_FUZZ)) / EDGE_FUZZ;
        out[i + 3] = Math.max(0, Math.floor(out[i + 3] * (1 - Math.min(1, fade))));
      }
    }
  }

  await sharp(out, {
    raw: { width: w, height: h, channels: 4 },
  })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(filePath + ".tmp");

  fs.renameSync(filePath + ".tmp", filePath);
  console.log("OK:", filePath);
}

(async () => {
  for (const f of FILES) {
    await processFile(f);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
