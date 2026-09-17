const fs = require('fs');

const colorRegex = /bg-\[\#00103F\]/g;
const replaceColor = 'bg-[#0F1A33]';
const textRegex = /text-\[\#00103F\]/g;
const replaceText = 'text-[#0F1A33]';

const files = fs.readdirSync('public').filter(f => f.endsWith('.html')).map(f => 'public/' + f);
files.push('scratch/generate.js');
// also consider index.html, category.html, course.html root if necessary, but the ones built are in public.
// Wait, generate.js is in an artifact folder, let's just use absolute path for generate.js
files.push("C:\\Users\\Silviane\\.gemini\\antigravity-ide\\brain\\7547e714-185c-48fb-a546-b0b833325a13\\scratch\\generate.js");

files.forEach(file => {
    if(fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let updated = false;
        if (content.match(colorRegex)) {
            content = content.replace(colorRegex, replaceColor);
            updated = true;
        }
        if (content.match(textRegex)) {
            content = content.replace(textRegex, replaceText);
            updated = true;
        }
        if (updated) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated color in ${file}`);
        }
    }
});
