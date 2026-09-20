const fs = require('fs');
const path = require('path');

const categories = [
    { name: "Categoria Geral", slug: "category" }, // 1st (overwrite existing category.html)
    { name: "Cursos Freepremium", slug: "categoria-cursos-freepremium" }, // 2nd
    { name: "Horas Complementares", slug: "categoria-horas-complementares" }, // 3rd
    { name: "Formações Profissionais", slug: "categoria-formacoes-profissionais" }, // 4th
    { name: "Desenvolvimento Pessoal", slug: "categoria-desenvolvimento-pessoal" }, // 5th
    { name: "Desenvolvimento Humano", slug: "categoria-desenvolvimento-humano" }, // 6th
    { name: "Desenvolvimento Profissional", slug: "categoria-desenvolvimento-profissional" }, // 7th
    { name: "Desenvolvimento Ético", slug: "categoria-desenvolvimento-etico" }, // 8th
    { name: "Desenvolvimento Relacional", slug: "categoria-desenvolvimento-relacional" }, // 9th
    { name: "Desenvolvimento Financeiro", slug: "categoria-desenvolvimento-financeiro" }, // 10th
    { name: "Práticas Integrativas", slug: "categoria-praticas-integrativas" }, // 11th
    { name: "Coach Integrativo", slug: "categoria-coach-integrativo" }, // 12th
    { name: "Pedagogia Integrativa", slug: "categoria-pedagogia-integrativa" }, // 13th
    { name: "Desenvolvimento Tecnológico e IA", slug: "categoria-desenvolvimento-tecnologico-ia" } // 14th
];

const indexPath = path.join('public', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Remove "A Jornada" section
const startTag = '<!-- Start Esteira de Produtos Section -->';
const endTag = '<!-- End Esteira de Produtos Section -->';
const startIndex = indexContent.indexOf(startTag);
const endIndex = indexContent.indexOf(endTag) + endTag.length;
if (startIndex !== -1 && endIndex !== -1) {
    indexContent = indexContent.slice(0, startIndex) + indexContent.slice(endIndex);
}

// Remove avatars
const avatarRegex = /<div class="flex mt-5 items-center">[\s\S]*?Alunos inscritos[\s\S]*?<\/div>\s*<\/div>/g;
indexContent = indexContent.replace(avatarRegex, '');

categories.forEach(cat => {
    let content = indexContent;
    content = content.replace(/<title>.*<\/title>/, `<title>${cat.name} - ESDHUBEM</title>`);
    
    const filename = `${cat.slug}.html`;
    fs.writeFileSync(path.join('public', filename), content);
    console.log(`Created ${filename}`);
});
