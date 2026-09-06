import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const BRAND_GREEN = "#1a3a2a";
const BRAND_GOLD = "#c8a84e";
const WHITE = "#ffffff";

// Creates OG image via SVG → PNG (reliable for text on all sharp versions)
async function createOgImage() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="${BRAND_GREEN}"/>
    <rect width="1200" height="160" fill="${BRAND_GOLD}"/>
    <text x="600" y="300" font-family="Arial, sans-serif" font-size="78" font-weight="bold" fill="${BRAND_GREEN}" text-anchor="middle">Candisari Hotel &amp; Resto</text>
    <text x="600" y="380" font-family="Arial, sans-serif" font-size="44" fill="${WHITE}" text-anchor="middle">Hotel Bintang 3 di Kebumen, Jawa Tengah</text>
    <text x="600" y="460" font-family="Arial, sans-serif" font-size="38" fill="${BRAND_GOLD}" text-anchor="middle">Taman Rindang  •  Kolam Renang  •  Restoran  •  Wi-Fi Gratis</text>
    <text x="600" y="550" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="${WHITE}" text-anchor="middle">book now →</text>
  </svg>`;

  await sharp(Buffer.from(svg)).png().toFile(path.join(OUTPUT_DIR, "og-image.png"));

  // Also export as jpg for the metadata reference
  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(path.join(OUTPUT_DIR, "og-image.jpg"));

  console.log("✅ OG images created (png + jpg)");
}

// Creates favicon and Apple touch icon via SVG → PNG
async function createFavicon() {
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="4" fill="${BRAND_GREEN}"/>
    <text x="16" y="22" font-family="Arial" font-size="18" font-weight="bold" fill="${BRAND_GOLD}" text-anchor="middle">C</text>
  </svg>`;

  await sharp(Buffer.from(faviconSvg)).png().toFile(path.join(__dirname, "..", "public", "favicon.png"));

  const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
    <rect width="180" height="180" rx="20" fill="${BRAND_GREEN}"/>
    <text x="90" y="110" font-family="Arial" font-size="100" font-weight="bold" fill="${BRAND_GOLD}" text-anchor="middle">C</text>
  </svg>`;

  await sharp(Buffer.from(appleSvg)).png().toFile(path.join(__dirname, "..", "public", "apple-touch-icon.png"));

  console.log("✅ Favicon created: public/favicon.png");
  console.log("✅ Apple touch icon created: public/apple-touch-icon.png");
}

async function main() {
  await createOgImage();
  await createFavicon();
  console.log("\nAll assets generated successfully!");
}

main().catch(console.error);
