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
    
    // Replace in main header nav
    if (content.includes('>Cursos Gratuitos<')) {
        content = content.replace(/>Cursos Gratuitos</g, '>Cursos Freepremium<');
        changed = true;
    }
    
    // Replace in mobile menu nav
    if (content.includes('</i> Cursos Gratuitos<')) {
        content = content.replace(/<\/i> Cursos Gratuitos</g, '</i> Cursos Freepremium<');
        changed = true;
    }
    
    // Replace Cursos<br>Gratuitos if any
    if (content.includes('Cursos<br>Gratuitos')) {
        content = content.replace(/Cursos<br>Gratuitos/g, 'Cursos<br>Freepremium');
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(file, content);
        updated++;
        console.log('Updated ' + file);
    }
});
console.log('Total files updated: ' + updated);
