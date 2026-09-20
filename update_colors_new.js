const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        let filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Update top and bottom bars
        content = content.replace(/bg-\[\#E3E4B4\]/g, 'bg-[#F2AA52]');

        // Update Jornada background
        content = content.replace(/bg-\[\#A3A606\]\/30/g, 'bg-[#D99559]');

        // Update banner background
        content = content.replace(/bg-\[\#0c1741\]/g, 'bg-[#0E1F40]');

        fs.writeFileSync(filePath, content);
        console.log('Updated ' + file);
    }
});
