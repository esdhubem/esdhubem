const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

const baseDir = path.resolve(__dirname, '../CURSOS-ESDHUBEM');
const distDir = path.join(baseDir, 'dist');
const distAssets = path.join(distDir, 'assets');

// Copy dist assets to github-pages
const ghPages = path.join(baseDir, 'public/github-pages');
const ghPagesAssets = path.join(ghPages, 'assets');
const ghPagesNested = path.join(ghPages, 'github-pages/assets');
const rootAssets = path.join(baseDir, 'assets');

copyFolderSync(distAssets, ghPagesAssets);
copyFolderSync(distAssets, ghPagesNested);
copyFolderSync(distAssets, rootAssets);

// Copy dist/index.html to ghPages/index.html
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(ghPages, 'index.html'));
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(ghPages, 'github-pages/index.html'));

console.log('Build output successfully synced to github-pages and assets directories!');
