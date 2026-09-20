const fs = require('fs');

let index = fs.readFileSync('public/index.html', 'utf8');

// 1. Rename Coach Educacional to Coach Integrativo
index = index.replace(/Coach<br>Educacional/g, 'Coach<br>Integrativo');
index = index.replace(/Coach Educacional/g, 'Coach Integrativo');

// 2. Add Pedagogia Integrativa to categories grid
if (!index.includes('Pedagogia<br>Integrativa')) {
    const coachItemRegex = /<div class="transition bg-white border border-gray-100[^>]*>\s*<div class="bg-\[\#0F1A33\][^>]*>\s*<i class="fa-solid fa-graduation-cap[^>]*><\/i>\s*<\/div>\s*<h4[^>]*>\s*Coach<br>Integrativo\s*<\/h4>\s*<p[^>]*>Cursos<\/p>\s*<\/div>\s*<!-- End Single Categoria Item -->/;
    
    // Fallback search since it might be edited
    const match = index.match(/<div class="transition bg-white border border-gray-100[^>]*>[\s\S]*?Coach<br>Integrativo[\s\S]*?<!-- End Single Categoria Item -->/);
    if (match) {
        let newItem = match[0].replace('Coach<br>Integrativo', 'Pedagogia<br>Integrativa').replace('fa-graduation-cap', 'fa-book-open');
        index = index.replace(match[0], match[0] + '\n\n                ' + newItem);
    }
}

// 3. Add Pedagogia Integrativa to footer
if (!index.includes('Pedagogia Integrativa')) {
    const match = index.match(/<li>\s*<a href="category\.html"[^>]*>\s*<i class="fa-solid fa-chevron-right[^>]*><\/i>Coach Integrativo\s*<\/a>\s*<\/li>/);
    if (match) {
        let newItem = match[0].replace('Coach Integrativo', 'Pedagogia Integrativa');
        index = index.replace(match[0], match[0] + '\n                        ' + newItem);
    }
}

// 4. Change remaining text-white to text-[#FFD342] in the categories grid
// The grid starts with <section id="categories" and ends with </section>
const gridStart = index.indexOf('<section id="categories"');
const gridEnd = index.indexOf('</section>', gridStart);
if (gridStart !== -1 && gridEnd !== -1) {
    let gridHTML = index.substring(gridStart, gridEnd);
    gridHTML = gridHTML.replace(/text-white/g, 'text-[#FFD342]');
    
    // Ensure Desenvolvimento Humano has an icon instead of image if we missed it
    if (gridHTML.includes('<img src="./images/desenvolvimento_humano.webp"')) {
        gridHTML = gridHTML.replace(/<img src="\.\/images\/desenvolvimento_humano\.webp"[^>]*>/, '<i class="fa-solid fa-users text-2xl lg:text-3xl text-[#FFD342]"></i>');
    }
    
    index = index.substring(0, gridStart) + gridHTML + index.substring(gridEnd);
}

fs.writeFileSync('public/index.html', index);

// Do the same for category.html footer
let category = fs.readFileSync('public/category.html', 'utf8');
category = category.replace(/Coach Educacional/g, 'Coach Integrativo');
if (!category.includes('Pedagogia Integrativa')) {
    const match = category.match(/<li>\s*<a href="category\.html"[^>]*>\s*<i class="fa-solid fa-chevron-right[^>]*><\/i>Coach Integrativo\s*<\/a>\s*<\/li>/);
    if (match) {
        let newItem = match[0].replace('Coach Integrativo', 'Pedagogia Integrativa');
        category = category.replace(match[0], match[0] + '\n                        ' + newItem);
    }
}
fs.writeFileSync('public/category.html', category);

console.log('Done fixing icons and categories.');
