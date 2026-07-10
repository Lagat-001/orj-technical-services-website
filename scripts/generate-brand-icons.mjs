// scripts/generate-brand-icons.mjs
// Run: node scripts/generate-brand-icons.mjs
//
// Exports the ORJ emblem icon set from the LOCKED master public/orj-icons/emblem.png.
// The master is treated as fixed artwork: we only trim its transparent padding,
// then resize + centre + pad it onto each target canvas. No redraw, recolour,
// shadow, halo or background gradient is applied.

import { createRequire } from "module";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "public", "orj-icons", "emblem.png");
const OUT_DIR = join(ROOT, "public", "orj-icons");

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

// Targets: [filename, size, coverage, background]
// coverage = fraction of the canvas the emblem's longest side occupies.
const TARGETS = [
  // Transparent — emblem fills ~90%
  ["favicon-16x16.png", 16, 0.9, TRANSPARENT],
  ["favicon-32x32.png", 32, 0.9, TRANSPARENT],
  ["favicon-48x48.png", 48, 0.9, TRANSPARENT],
  ["favicon-96x96.png", 96, 0.9, TRANSPARENT],
  ["icon-192x192.png", 192, 0.9, TRANSPARENT],
  ["icon-512x512.png", 512, 0.9, TRANSPARENT],
  // White background
  ["apple-touch-icon.png", 180, 0.78, WHITE],
  ["maskable-icon-512x512.png", 512, 0.62, WHITE], // inside Android's central 80% safe zone
];

// Find the tight opaque bounding box of the master (trim transparent padding).
async function findBBox() {
  const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width;
  const H = info.height;
  const ch = info.channels;
  let minX = W;
  let minY = H;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * ch + 3] > 16) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

async function main() {
  const bbox = await findBBox();
  console.log(`Master: ${SRC}`);
  console.log(`Trimmed mark bbox: ${bbox.width}x${bbox.height} @ (${bbox.left},${bbox.top})\n`);

  for (const [name, size, coverage, bg] of TARGETS) {
    const inner = Math.round(size * coverage);

    // Resize the trimmed mark so its longest side == inner, preserving aspect.
    const mark = await sharp(SRC)
      .extract(bbox)
      .resize(inner, inner, { fit: "inside", kernel: "lanczos3" })
      .png()
      .toBuffer();

    const out = await sharp({
      create: { width: size, height: size, channels: 4, background: bg },
    })
      .composite([{ input: mark, gravity: "center" }])
      .png()
      .toBuffer();

    writeFileSync(join(OUT_DIR, name), out);
    const pct = Math.round(coverage * 100);
    const bgLabel = bg === WHITE ? "white" : "transparent";
    console.log(`  ${name.padEnd(28)} ${size}x${size}  emblem ~${pct}%  ${bgLabel}  ${out.length} bytes`);
  }

  console.log("\nDone. Files in public/orj-icons/");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
