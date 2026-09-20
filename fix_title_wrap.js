const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

let updated = 0;
files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    const regex = /<h2 class="text-3xl lg:text-4xl xl:whitespace-nowrap mb-1 pb-3 md:pb-0">[\s\S]*?Encontre o seu treinamento e desenvolvimento.[\s\S]*?<\/h2>/;
    
    if (regex.test(content)) {
        content = content.replace(regex, '<h2 class="text-3xl lg:text-4xl mb-1 pb-3 md:pb-0">\n                    Encontre o seu<br>treinamento e desenvolvimento.\n                </h2>');
        fs.writeFileSync(file, content);
        updated++;
    }
});
console.log('Updated ' + updated + ' files.');
