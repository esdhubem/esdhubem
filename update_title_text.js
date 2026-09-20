const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Replace the text
    content = content.replace(/Encontre o seu desenvolvimento/g, 'Encontre o seu treinamento e desenvolvimento.');

    fs.writeFileSync(file, content);
    console.log('Updated text in ' + file);
});
