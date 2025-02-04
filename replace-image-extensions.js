import fs from "fs-extra";
import { glob } from "glob";
import path from "path";

// Directories to scan (adjust if needed)
const SOURCE_DIR = path.join(process.cwd(), "src");

// File extensions to scan
const FILE_TYPES = ["js", "jsx", "ts", "tsx"];
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png)/gi;

async function replaceImageExtensionsInFile(filePath) {
  let content = await fs.readFile(filePath, "utf-8");

  // Replace image extensions with .webp
  const updatedContent = content.replace(IMAGE_EXTENSIONS, ".webp");

  if (content !== updatedContent) {
    await fs.writeFile(filePath, updatedContent, "utf-8");
    console.log(`✅ Updated: ${filePath}`);
  }
}

async function processFiles() {
  for (const ext of FILE_TYPES) {
    const files = await glob(`${SOURCE_DIR}/**/*.${ext}`);

    for (const file of files) {
      await replaceImageExtensionsInFile(file);
    }
  }
}

processFiles().then(() => console.log("✅ All image extensions replaced!"));
