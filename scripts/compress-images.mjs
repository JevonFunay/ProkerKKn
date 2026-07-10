import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const MAX_WIDTH = 1200;
const QUALITY = 80;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

function fmt(bytes) {
  return bytes >= 1_048_576
    ? `${(bytes / 1_048_576).toFixed(2)} MB`
    : `${(bytes / 1024).toFixed(0)} KB`;
}

const files = fs.readdirSync(PUBLIC_DIR).filter((f) =>
  EXTENSIONS.has(path.extname(f).toLowerCase())
);

console.log(`\nCompressing ${files.length} image(s) → WebP (max ${MAX_WIDTH}px, q${QUALITY})\n`);
console.log(
  "File".padEnd(36),
  "Before".padStart(9),
  "After".padStart(9),
  "Saved".padStart(8)
);
console.log("─".repeat(66));

let totalBefore = 0;
let totalAfter = 0;
const results = [];

for (const file of files) {
  const inPath = path.join(PUBLIC_DIR, file);
  const name = path.basename(file, path.extname(file));
  const outFile = `${name}.webp`;
  const outPath = path.join(PUBLIC_DIR, outFile);

  const before = fs.statSync(inPath).size;

  try {
    await sharp(inPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    const after = fs.statSync(outPath).size;
    const pct = (((before - after) / before) * 100).toFixed(1);

    totalBefore += before;
    totalAfter += after;
    results.push({ original: `/${file}`, webp: `/${outFile}` });

    console.log(
      file.padEnd(36),
      fmt(before).padStart(9),
      fmt(after).padStart(9),
      `${pct}%`.padStart(7)
    );
  } catch (err) {
    console.error(`  ERROR: ${file} → ${err.message}`);
  }
}

const totalPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
console.log("─".repeat(66));
console.log(
  "TOTAL".padEnd(36),
  fmt(totalBefore).padStart(9),
  fmt(totalAfter).padStart(9),
  `${totalPct}%`.padStart(7)
);
console.log(`\nSaved ${fmt(totalBefore - totalAfter)} total\n`);

// Print mapping for reference-update step
console.log("Rename map:");
results.forEach(({ original, webp }) =>
  console.log(`  ${original.padEnd(40)} → ${webp}`)
);
console.log("");
