const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "public");
const OUTPUT_DIR = INPUT_DIR;
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png"];

async function optimizeImages(dir) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await optimizeImages(fullPath); // Recursively process subdirectories
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ALLOWED_EXTENSIONS.includes(ext)) {
        const webpPath = path.join(dir, `${path.basename(file, ext)}.webp`);

        // Convert to WebP
        await sharp(fullPath)
          .webp({ quality: 80 }) // Adjust quality as needed
          .toFile(webpPath);

        console.log(`Optimized: ${file} → ${webpPath}`);
      }
    }
  }
}

optimizeImages(INPUT_DIR).then(() => console.log("Optimization complete."));
