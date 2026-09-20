const fs = require('fs');
const path = require('path');

const indexPath = path.join('public', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

const avatarRegex = /<div class="flex mt-5 items-center">[\s\S]*?Alunos inscritos[\s\S]*?<\/div>\s*<\/div>/g;
const matches = indexContent.match(avatarRegex);

console.log('Matches found:', matches ? matches.length : 0);
if (matches) {
    console.log(matches[0]);
}
