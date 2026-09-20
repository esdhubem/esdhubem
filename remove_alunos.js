const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

let updated = 0;
files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // The block is:
    // <div class="flex mt-5 items-center">
    // ... avatars ...
    // <div class="text-gray-400 ml-4">
    // Alunos inscritos
    // </div>
    // </div>
    
    const regex = /<div class="flex mt-5 items-center">[\s\S]*?Alunos inscritos\s*<\/div>\s*<\/div>/g;
    
    if (regex.test(content)) {
        content = content.replace(regex, '');
        fs.writeFileSync(file, content);
        updated++;
        console.log('Removed from ' + file);
    }
});
console.log('Total files updated: ' + updated);
