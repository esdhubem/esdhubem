const fs = require('fs');
const path = require('path');

const srcIndex = path.join(__dirname, 'public/NOVO_GOOGLE_IA_STUDIO/index.html');
const destIndex = path.resolve(__dirname, '../CURSOS-ESDHUBEM/index.html');

fs.copyFileSync(srcIndex, destIndex);
console.log('Successfully replaced CURSOS-ESDHUBEM/index.html with source Vite index.html');
