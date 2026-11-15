const sharp = require('sharp');
const fs = require('fs');

(async () => {
  fs.mkdirSync('assets', { recursive: true });
  const svg = fs.readFileSync('icon-fg.svg');
  const bg = { create: { width: 1024, height: 1024, channels: 4, background: '#06080F' } };
  await sharp(bg).png().toFile('assets/icon-background.png');
  await sharp(svg).resize(1024, 1024).png().toFile('assets/icon-foreground.png');
  await sharp(bg).composite([{ input: svg }]).png().toFile('assets/icon-only.png');
  console.log('icons ok');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
