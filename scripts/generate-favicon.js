const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

async function generate() {
  const src = path.join(__dirname, '..', 'public', 'images', 'logo.png');
  const out = path.join(__dirname, '..', 'public', 'favicon.ico');

  if (!fs.existsSync(src)) {
    console.error('Source logo not found:', src);
    process.exit(1);
  }

  const sizes = [16, 24, 32, 48, 64, 128, 256];
  const os = require('os');
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'favicon-'));
  const paths = [];

  for (const size of sizes) {
    const tmpFile = path.join(tmpDir, `favicon-${size}.png`);
    await sharp(src).resize(size, size, { fit: 'cover' }).png().toFile(tmpFile);
    paths.push(tmpFile);
  }

  // png-to-ico accepts an array of file paths
  let pngToIcoFn = pngToIco;
  if (pngToIco && typeof pngToIco.default === 'function') pngToIcoFn = pngToIco.default;
  if (typeof pngToIcoFn !== 'function') {
    throw new Error('png-to-ico export is not a function');
  }
  const icoBuffer = await pngToIcoFn(paths);
  fs.writeFileSync(out, icoBuffer);

  // cleanup tmp files
  for (const p of paths) fs.unlinkSync(p);
  fs.rmdirSync(tmpDir);
  console.log('Generated', out);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
