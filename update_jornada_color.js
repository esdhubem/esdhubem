const fs = require('fs');

const file = 'public/index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace background color
content = content.replace(/<section id="modalities" class="mt-16 bg-slate-50 py-16 border-y border-slate-200">/, 
                          '<section id="modalities" class="mt-16 bg-[#FFD342] py-16">');

// Replace text color
content = content.replace(/<p class="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">Nossa metodologia educacional foi desenhada para acompanhar você em todas as fases do seu desenvolvimento, desde o aprendizado prático e acessível até a transformação total da sua carreira.<\/p>/, 
                          '<p class="text-[#0F1A33] font-medium mt-4 max-w-2xl mx-auto text-sm md:text-base">Nossa metodologia educacional foi desenhada para acompanhar você em todas as fases do seu desenvolvimento, desde o aprendizado prático e acessível até a transformação total da sua carreira.</p>');

fs.writeFileSync(file, content);
console.log('Updated Jornada section colors');
