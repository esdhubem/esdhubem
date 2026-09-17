const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

html = html.replace('<h2 class="font-medium my-5">Cursos Freemium</h2>', '<h2 class="font-medium my-5">Cursos Freepremium</h2>');
html = html.replace('<h3 class="text-xl font-bold text-[#00103F] mb-4">1. Cursos Freemium</h3>', '<h3 class="text-xl font-bold text-[#00103F] mb-4">1. Cursos Freepremium</h3>');

fs.writeFileSync('public/index.html', html);
console.log('Renamed to Freepremium');
