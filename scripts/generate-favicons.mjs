// scripts/generate-favicons.mjs
// Run: node scripts/generate-favicons.mjs

import { createRequire } from 'module';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'public', 'logo.png');

async function toSquarePng(size) {
  return sharp(SRC)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
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
    entry.writeUInt8(0, 2);                        // colorCount
    entry.writeUInt8(0, 3);                        // reserved
    entry.writeUInt16LE(1, 4);                     // planes
    entry.writeUInt16LE(32, 6);                    // bitCount (RGBA)
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(imageOffset, 12);
    imageOffset += buffer.length;
    return entry;
  });

  return Buffer.concat([iconDir, ...dirEntries, ...images.map(i => i.buffer)]);
}

async function main() {
  console.log('Source:', SRC);

  const [buf16, buf32, buf48, buf180, buf192] = await Promise.all([
    toSquarePng(16),
    toSquarePng(32),
    toSquarePng(48),
    toSquarePng(180),
    toSquarePng(192),
  ]);

  const icoBuffer = buildIco([
    { size: 16, buffer: buf16 },
    { size: 32, buffer: buf32 },
    { size: 48, buffer: buf48 },
  ]);

  writeFileSync(join(ROOT, 'src', 'app', 'favicon.ico'), icoBuffer);
  console.log(`✓ favicon.ico     ${icoBuffer.length} bytes`);

  writeFileSync(join(ROOT, 'src', 'app', 'icon.png'), buf32);
  console.log(`✓ icon.png        ${buf32.length} bytes`);

  writeFileSync(join(ROOT, 'src', 'app', 'apple-icon.png'), buf180);
  console.log(`✓ apple-icon.png  ${buf180.length} bytes`);

  writeFileSync(join(ROOT, 'public', 'icon-192.png'), buf192);
  console.log(`✓ icon-192.png    ${buf192.length} bytes`);

  console.log('\nDone. Run: npm run build');
}

main().catch(err => { console.error(err.message); process.exit(1); });
