const fs = require('fs');

const sourcePath = 'public/categoria-cursos-freepremium.html';
const targetPath = 'public/categoria-desenvolvimento-pessoal.html';

let content = fs.readFileSync(sourcePath, 'utf8');

// Replace title and description
content = content.replace(/Cursos Freepremium/g, 'Desenvolvimento Pessoal');
content = content.replace(/Para Estudantes e profissionais que buscam conhecimento rápido, querem validar a qualidade do curso antes de investir ou precisam apenas do aprendizado prático imediato sem custo inicial\./g, 
                          'Cursos focados no seu crescimento, autoconhecimento e aprimoramento contínuo para uma vida mais equilibrada e próspera.');

// Replace video source
content = content.replace(/banner_video_cursos_freepremium_x\.mp4/g, 'banner_video_cursos_desenvolvimento_pessoal.mp4');

// The bg color should already be #001336 because it was copied from freepremium.

fs.writeFileSync(targetPath, content);
console.log('Created categoria-desenvolvimento-pessoal.html successfully.');
