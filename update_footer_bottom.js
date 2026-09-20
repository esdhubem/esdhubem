const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        let filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        content = content.replace(/<div class="bg-\[\#003c71\] text-white">/g, '<div class="bg-[#353e4e] text-white">');

        fs.writeFileSync(filePath, content);
        console.log('Updated ' + file);
    }
});
