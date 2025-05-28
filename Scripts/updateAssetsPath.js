
const fs = require("fs");
const path = require("path");

// 🔍 1. 대상 확장자
const targetExtensions = [".js", ".jsx", ".ts", ".tsx"];
const targetDir = path.join(__dirname, "..", "frontend", "src"); // ✅ 정답


// 🔁 2. 재귀적으로 파일 목록 수집
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else if (targetExtensions.includes(path.extname(fullPath))) {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

// 🛠 3. 실제 변환 작업
function processFile(filePath) {
    let content = fs.readFileSync(filePath, "utf8");

    // 3-1. import 문 분석 및 제거
    const importRegex = /import\s+(\w+)\s+from\s+['"].*assets\/([^'"]+)['"];?/g;
    let replaced = false;
    const variableToPathMap = {};

    content = content.replace(importRegex, (match, varName, assetPath) => {
        variableToPathMap[varName] = `/assets/${assetPath}`;
        replaced = true;
        return ""; // 제거
    });

    // 3-2. JSX src={변수} → src="/assets/경로"로 변경
    for (const [varName, imgPath] of Object.entries(variableToPathMap)) {
        const jsxRegex = new RegExp(`src=\\{\\s*${varName}\\s*\\}`, "g");
        content = content.replace(jsxRegex, `src="${imgPath}"`);
    }

    if (replaced) {
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ updated: ${filePath}`);
    }
}

// 🚀 4. 실행
function run() {
    const allFiles = getAllFiles(targetDir);
    console.log(`🔍 Found ${allFiles.length} source files to scan`);
    allFiles.forEach(processFile);
}

run();
