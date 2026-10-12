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

const cursosDir = path.join(baseDir, '../CURSOS-ESDHUBEM');
if (fs.existsSync(cursosDir)) {
  targets.push(
    { html: path.join(cursosDir, 'index.html'), assets: path.join(cursosDir, 'assets') },
    { html: path.join(cursosDir, 'public/index.html'), assets: path.join(cursosDir, 'public/assets') },
    { html: path.join(cursosDir, 'public/github-pages/index.html'), assets: path.join(cursosDir, 'public/github-pages/assets') },
    { html: path.join(cursosDir, 'public/github-pages/github-pages/index.html'), assets: path.join(cursosDir, 'public/github-pages/github-pages/assets') }
  );
}

targets.forEach(({ html, assets }) => {
  if (fs.existsSync(distIndex)) {
    fs.mkdirSync(path.dirname(html), { recursive: true });
    let content = fs.readFileSync(distIndex, 'utf8');
    if (!html.includes('github-pages')) {
      content = content.replace(/\/esdhubem\/assets\//g, './assets/').replace(/\/esdhubem\//g, './');
    }
    fs.writeFileSync(html, content, 'utf8');
    console.log(`Copied index.html to ${html}`);
  }
  if (fs.existsSync(distAssets)) {
    if (fs.existsSync(assets)) {
      // Remover bundles e estilos antigos para forçar atualização e não servir versões defasadas
      fs.readdirSync(assets).forEach(file => {
        if ((file.startsWith('index-') && (file.endsWith('.js') || file.endsWith('.css'))) || file.startsWith('assets')) {
          const filePath = path.join(assets, file);
          if (fs.lstatSync(filePath).isDirectory()) {
            fs.rmSync(filePath, { recursive: true, force: true });
          } else {
            fs.unlinkSync(filePath);
          }
        }
      });
    }
    copyFolderSync(distAssets, assets);
    console.log(`Copied assets to ${assets}`);
  }
});

// Sincronizar pasta de imagens
const distImages = path.join(distDir, 'images');
const srcImages = path.join(baseDir, 'images');
const imagesSource = fs.existsSync(distImages) ? distImages : (fs.existsSync(srcImages) ? srcImages : null);

if (imagesSource) {
  const imageTargets = [
    path.join(baseDir, 'images'),
    path.join(baseDir, 'public/images'),
    path.join(baseDir, 'public/github-pages/images'),
    path.join(baseDir, 'public/github-pages/github-pages/images')
  ];
  if (fs.existsSync(cursosDir)) {
    imageTargets.push(
      path.join(cursosDir, 'images'),
      path.join(cursosDir, 'public/images'),
      path.join(cursosDir, 'public/github-pages/images'),
      path.join(cursosDir, 'public/github-pages/github-pages/images')
    );
  }
  imageTargets.forEach(dest => {
    copyFolderSync(imagesSource, dest);
    console.log(`Copied images to ${dest}`);
  });
}

console.log('All locations successfully synchronized!');
