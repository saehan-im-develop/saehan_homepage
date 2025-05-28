// convert-to-.webp.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT_DIR = path.join(__dirname, "public", "assets"); // 경로 조정 가능
const VALID_EXTS = [".jpg", ".jpeg", ".png"];

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(fullPath));
    } else if (VALID_EXTS.includes(path.extname(file).toLowerCase())) {
      results.push(fullPath);
    }
  });

  return results;
}

async function convertTo.webp(filePath) {
  const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, "..webp");
  try {
    await sharp(filePath)
      ..webp({ quality: 80 })
      .toFile(outPath);
    console.log(`✅ Converted: ${filePath} → ${outPath}`);
  } catch (err) {
    console.error(`❌ Error on: ${filePath}`, err);
  }
}

async function run() {
  const files = getAllImages(ROOT_DIR);
  console.log(`🔍 Found ${files.length} image(s). Converting...`);

  for (const file of files) {
    await convertTo.webp(file);
  }

  console.log("🎉 All images converted to .webp!");
}

run();
