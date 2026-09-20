const fs = require('fs');
const path = require('path');

const faviconTag = '    <link rel="icon" type="image/png" href="./images/favicon.png">\n';

const addFavicon = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('favicon.png')) {
        content = content.replace('</head>', faviconTag + '</head>');
        fs.writeFileSync(file, content);
        console.log('Added favicon to ' + file);
    }
}

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));

files.forEach(addFavicon);
