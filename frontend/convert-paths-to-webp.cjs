const fs = require("fs");
const path = require("path");

const extsToReplace = /\.(jpe?g|png)/gi;
const validExts = [".js", ".jsx", ".ts", ".tsx", ".html", ".json"];
const targetDir = path.join(__dirname, "src"); // 필요한 경우 경로 조정

function getAllFiles(dirPath, allFiles = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, allFiles);
    } else if (validExts.includes(path.extname(fullPath))) {
      allFiles.push(fullPath);
    }
  }
  return allFiles;
}

function convertFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  const converted = original.replace(extsToReplace, ".webp");

  if (original !== converted) {
    fs.writeFileSync(filePath, converted, "utf8");
    console.log(`✅ Updated: ${filePath}`);
  }
}

function run() {
  const files = getAllFiles(targetDir);
  console.log(`🔍 Scanning ${files.length} files in ${targetDir}...`);
  for (const file of files) {
    convertFile(file);
  }
  console.log("🎉 Done! All image paths now use ..webp");
}

run();
