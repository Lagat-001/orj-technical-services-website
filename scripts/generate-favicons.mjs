// scripts/generate-favicons.mjs
// Run: node scripts/generate-favicons.mjs
//
// public/logo.png is a 1536x1024 transparent PNG holding the circular ORJ
// emblem stacked ABOVE three lines of text. Using the whole logo as a favicon
// looks tiny (93% of it is transparent padding) and the text is illegible at
// 16-32px. So we crop just the circular emblem (detected via alpha analysis),
// then export:
//   - 16/32/48px transparent PNGs -> favicon.ico  (crisp browser tab icon)
//   - 512px transparent PNG       -> app/icon.png  (modern high-DPI tab icon)
//   - 180px navy-composited PNG    -> app/apple-icon.png  (iOS home screen)
//   - 192/512px navy-composited    -> public/icon-192/512.png (Android / manifest)

import { createRequire } from 'module';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'public', 'logo.png');

// Solid brand navy for the app/home-screen icons.
const NAVY = { r: 10, g: 26, b: 47, alpha: 1 }; // #0A1A2F
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

// Bounding box of the circular emblem (top opaque band) inside logo.png,
// detected by scanning the alpha channel.
const EMBLEM = { left: 574, top: 192, width: 397, height: 379 };

// Tightly-cropped emblem, padded out to a perfect square on a transparent
// canvas so every exported size keeps the mark centred and undistorted.
function emblemSquare() {
  const side = Math.max(EMBLEM.width, EMBLEM.height);
  return sharp(SRC)
    .extract(EMBLEM)
    .resize(side, side, { fit: 'contain', background: TRANSPARENT });
}

// Square transparent PNG of the emblem at the requested size.
async function transparentPng(size) {
  return emblemSquare()
    .resize(size, size, { fit: 'contain', background: TRANSPARENT })
    .png()
    .toBuffer();
}

// Emblem centred on a solid navy square with ~12% padding so it reads as a
// proper app / home-screen icon on light and dark backgrounds alike.
async function navyPng(size) {
  const pad = Math.round(size * 0.12);
  const inner = size - pad * 2;
  const fg = await emblemSquare()
    .resize(inner, inner, { fit: 'contain', background: TRANSPARENT })
    .png()
    .toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: NAVY },
  })
    .composite([{ input: fg, gravity: 'center' }])
    .png()
    .toBuffer();
}

function buildIco(images) {
  const count = images.length;
  const headerSize = 6 + count * 16;

  const iconDir = Buffer.alloc(6);
  iconDir.writeUInt16LE(0, 0); // reserved
  iconDir.writeUInt16LE(1, 2); // type = ICO
  iconDir.writeUInt16LE(count, 4);

  let imageOffset = headerSize;
  const dirEntries = images.map(({ size, buffer }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2);                       // colorCount
    entry.writeUInt8(0, 3);                       // reserved
    entry.writeUInt16LE(1, 4);                    // planes
    entry.writeUInt16LE(32, 6);                   // bitCount (RGBA)
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(imageOffset, 12);
    imageOffset += buffer.length;
    return entry;
  });

  return Buffer.concat([iconDir, ...dirEntries, ...images.map((i) => i.buffer)]);
}

async function main() {
  console.log('Source:', SRC);

  const [t16, t32, t48, t512, nav180, nav192, nav512] = await Promise.all([
    transparentPng(16),
    transparentPng(32),
    transparentPng(48),
    transparentPng(512),
    navyPng(180),
    navyPng(192),
    navyPng(512),
  ]);

  // favicon.ico — transparent emblem at 16/32/48
  const ico = buildIco([
    { size: 16, buffer: t16 },
    { size: 32, buffer: t32 },
    { size: 48, buffer: t48 },
  ]);
  writeFileSync(join(ROOT, 'src', 'app', 'favicon.ico'), ico);
  console.log(`favicon.ico      ${ico.length} bytes  (16/32/48 transparent)`);

  writeFileSync(join(ROOT, 'src', 'app', 'icon.png'), t512);
  console.log(`icon.png         ${t512.length} bytes  (512 transparent)`);

  // Tightly-cropped transparent emblem for the navbar / footer brand mark
  // (logo.png itself bakes in the company text, so it can't be used small).
  writeFileSync(join(ROOT, 'public', 'emblem.png'), t512);
  console.log(`emblem.png       ${t512.length} bytes  (512 transparent)`);

  writeFileSync(join(ROOT, 'src', 'app', 'apple-icon.png'), nav180);
  console.log(`apple-icon.png   ${nav180.length} bytes  (180 navy)`);

  writeFileSync(join(ROOT, 'public', 'icon-192.png'), nav192);
  console.log(`icon-192.png     ${nav192.length} bytes  (192 navy)`);

  writeFileSync(join(ROOT, 'public', 'icon-512.png'), nav512);
  console.log(`icon-512.png     ${nav512.length} bytes  (512 navy)`);

  console.log('\nDone. Run: npm run build');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
