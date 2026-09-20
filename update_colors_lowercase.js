const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        let filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Update top and bottom bars
        content = content.replace(/bg-\[\#F2AA52\]/g, 'bg-[#f2aa52]');

        // Update Jornada background
        content = content.replace(/bg-\[\#D99559\]/g, 'bg-[#d99559]');

        // Update banner background
        content = content.replace(/bg-\[\#0E1F40\]/g, 'bg-[#0e1f40]');

        fs.writeFileSync(filePath, content);
        console.log('Updated ' + file);
    }
});
