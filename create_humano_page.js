const fs = require('fs');

const sourcePath = 'public/categoria-cursos-freepremium.html';
const targetPath = 'public/categoria-desenvolvimento-humano.html';

let content = fs.readFileSync(sourcePath, 'utf8');

// Replace title and description
content = content.replace(/Cursos Freepremium/g, 'Desenvolvimento Humano');
content = content.replace(/Para Estudantes e profissionais que buscam conhecimento rápido, querem validar a qualidade do curso antes de investir ou precisam apenas do aprendizado prático imediato sem custo inicial\./g, 
                          'Cursos focados na evolução das habilidades interpessoais, inteligência emocional e liderança para transformar a sua carreira e vida.');

// Replace video source
content = content.replace(/banner_video_cursos_freepremium_x\.mp4/g, 'banner_video_cursos_desenvolvimento_humano.mp4');

// The bg color should already be #001336 because it was copied from freepremium.

fs.writeFileSync(targetPath, content);
console.log('Created categoria-desenvolvimento-humano.html successfully.');
