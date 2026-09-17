const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// Change Cursos Gratuitos to Cursos Freemium
html = html.replace('<!-- Start Cursos Gratuitos Section -->', '<!-- Start Cursos Freemium Section -->');
html = html.replace('<h2 class="font-medium my-5">Cursos Gratuitos</h2>', '<h2 class="font-medium my-5">Cursos Freemium</h2>');
html = html.replace('<!-- End Cursos Gratuitos Section -->', '<!-- End Cursos Freemium Section -->');

// Find the section to duplicate
const startTag = '<!-- Start Cursos Freemium Section -->';
const endTag = '<!-- End Cursos Freemium Section -->';
const startIdx = html.indexOf(startTag);
const endIdx = html.indexOf(endTag) + endTag.length;

if(startIdx !== -1 && endIdx !== -1) {
    let section = html.substring(startIdx, endIdx);
    
    // Create new section
    let newSection = section.replace('<!-- Start Cursos Freemium Section -->', '<!-- Start Cursos para Horas Complementares Section -->');
    newSection = newSection.replace('<section id="courses"', '<section id="complementary-courses"');
    newSection = newSection.replace('<h2 class="font-medium my-5">Cursos Freemium</h2>', '<h2 class="font-medium my-5">Cursos para Horas Complementares</h2>');
    newSection = newSection.replace('<div id="popular-course">', '<div id="complementary-course">');
    newSection = newSection.replace('<!-- End Cursos Freemium Section -->', '<!-- End Cursos para Horas Complementares Section -->');
    
    // Insert new section after the freemium section
    html = html.substring(0, endIdx) + '\n\n' + newSection + html.substring(endIdx);
    fs.writeFileSync('public/index.html', html);
    console.log('Successfully duplicated section');
} else {
    console.log('Could not find section');
}
