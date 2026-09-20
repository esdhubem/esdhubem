const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

let updated = 0;
files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    let changed = false;
    
    // Change course card background from bg-slate-50 to bg-slate-100
    if (content.includes('bg-slate-50 border border-gray-100 shadow-sm')) {
        content = content.replace(/bg-slate-50 border border-gray-100 shadow-sm/g, 'bg-slate-100 border border-gray-100 shadow-sm');
        changed = true;
    }
    
    // Change section titles to bold
    if (content.includes('<h2 class="font-medium my-5">')) {
        content = content.replace(/<h2 class="font-medium my-5">/g, '<h2 class="font-bold my-5 text-lg md:text-xl">');
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(file, content);
        updated++;
        console.log('Updated ' + file);
    }
});
console.log('Total files updated: ' + updated);
