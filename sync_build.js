const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const srcPath = path.join(from, element);
    const destPath = path.join(to, element);
    if (fs.lstatSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
    } else {
      copyFolderSync(srcPath, destPath);
    }
  });
}

const baseDir = __dirname;
const distDir = path.join(baseDir, 'public/NOVO_GOOGLE_IA_STUDIO/dist');
const distAssets = path.join(distDir, 'assets');
const distIndex = path.join(distDir, 'index.html');

const targets = [
  { html: path.join(baseDir, 'index.html'), assets: path.join(baseDir, 'assets') },
  { html: path.join(baseDir, 'public/index.html'), assets: path.join(baseDir, 'public/assets') },
  { html: path.join(baseDir, 'public/github-pages/index.html'), assets: path.join(baseDir, 'public/github-pages/assets') },
  { html: path.join(baseDir, 'public/github-pages/github-pages/index.html'), assets: path.join(baseDir, 'public/github-pages/github-pages/assets') }
];

targets.forEach(({ html, assets }) => {
  if (fs.existsSync(distIndex)) {
    fs.mkdirSync(path.dirname(html), { recursive: true });
    fs.copyFileSync(distIndex, html);
    console.log(`Copied index.html to ${html}`);
  }
  if (fs.existsSync(distAssets)) {
    copyFolderSync(distAssets, assets);
    console.log(`Copied assets to ${assets}`);
  }
});

console.log('All locations successfully synchronized!');
