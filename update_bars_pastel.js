const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        let filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Update nav
        content = content.replace(/<nav class="bg-\[\#FFD342\] shadow p-2\.5 sticky top-0 z-50">/g, '<nav class="bg-[#FFF2C6] shadow p-2.5 sticky top-0 z-50">');
        
        // Update footer bottom bar
        content = content.replace(/<div class="bg-\[\#FFD342\] text-\[\#0F1A33\]">/g, '<div class="bg-[#FFF2C6] text-[#0F1A33]">');

        fs.writeFileSync(filePath, content);
        console.log('Updated ' + file);
    }
});
