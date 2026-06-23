import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const targets = [
  "public/images/profile.png",
  "public/images/drink.png",
  "public/images/kigan.png",
  "public/images/pukuzoma.png",
  "public/images/robot.png",
  "public/images/posts/01.png",
];

async function pixelsEqual(beforeBuf, afterBuf) {
  const before = await sharp(beforeBuf).raw().toBuffer({ resolveWithObject: true });
  const after = await sharp(afterBuf).raw().toBuffer({ resolveWithObject: true });
  if (before.info.width !== after.info.width || before.info.height !== after.info.height) {
    return false;
  }
  return Buffer.compare(before.data, after.data) === 0;
}

for (const path of targets) {
  const original = await readFile(path);
  const stripped = await sharp(original)
    .keepIccProfile()
    .png({ compressionLevel: 9, effort: 10, palette: false })
    .toBuffer();

  if (!(await pixelsEqual(original, stripped))) {
    throw new Error(`Pixel mismatch detected for ${path}. Aborting.`);
  }

  await writeFile(path, stripped);
  console.log(
    `${path}: ${original.length} -> ${stripped.length} bytes (${((stripped.length / original.length) * 100).toFixed(1)}%)`
  );
}
