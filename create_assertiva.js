const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'course.html');
const destPath = path.join(__dirname, 'public', 'curso-comunicacao-assertiva.html');

let html = fs.readFileSync(srcPath, 'utf8');

// Replace specific titles and descriptions
html = html.replace('Criação e Publicação de Portfólio para Produções Audiovisuais', 'Comunicação Assertiva com a Liderança');
html = html.replace('Aprenda a estruturar o seu portfólio de forma profissional para atrair clientes e se destacar no mercado audiovisual, utilizando ferramentas modernas e estratégias de divulgação.', 'Aprenda a expressar suas ideias com firmeza, clareza e respeito no ambiente corporativo, desenvolvendo uma liderança forte e inspiradora para você e sua equipe.');
html = html.replace('Módulo 1: Fundamentos do Portfólio', 'Módulo 1: Fundamentos da Comunicação Assertiva');
html = html.replace('Módulo 2: Curadoria de Conteúdo', 'Módulo 2: Postura e Comportamento');
html = html.replace('Módulo 3: Plataformas e Publicação', 'Módulo 3: Aplicando no Ambiente Corporativo');

fs.writeFileSync(destPath, html);
console.log('File created: ' + destPath);
