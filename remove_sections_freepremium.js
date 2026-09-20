const fs = require('fs');
const path = require('path');
const file = path.join('public', 'categoria-cursos-freepremium.html');
let content = fs.readFileSync(file, 'utf8');

const s1 = '<!-- Start Cursos para Horas Complementares Section -->';
const e1 = '<!-- End Cursos de Formação Livre Section -->';
const start = content.indexOf(s1);
const end = content.indexOf(e1) + e1.length;
if (start !== -1 && end !== -1) {
    content = content.slice(0, start) + content.slice(end);
    fs.writeFileSync(file, content);
    console.log('Removed sections from ' + file);
} else {
    console.log('Sections not found');
}
