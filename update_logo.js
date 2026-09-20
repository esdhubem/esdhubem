const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        let filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        content = content.replace(/src="\.\/images\/logo\.png"/g, 'src="./images/ESDHUBEM_LOGO.png"');

        fs.writeFileSync(filePath, content);
        console.log('Updated ' + file);
    }
});
