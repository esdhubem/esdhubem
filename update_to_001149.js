const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        let filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Update banner background
        content = content.replace(/class="bg-\[\#003c71\] text-white mt-0 md:mt-2/g, 'class="bg-[#001149] text-white mt-0 md:mt-2');
        
        // Update footer background
        content = content.replace(/<footer class="bg-\[\#0F1A33\]/g, '<footer class="bg-[#001149]');

        // Update video source
        content = content.replace(/video_banner_esdhubem\.mp4/g, 'banner_video_esdhubem.mp4');

        fs.writeFileSync(filePath, content);
        console.log('Updated ' + file);
    }
});
