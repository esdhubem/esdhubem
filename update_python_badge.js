const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Replace the badge colors
    content = content.replace(/class="bg-\[#FFE7D2\] text-\[#FF8D3F\] p-2 rounded text-\[10px\] font-bold"/g, 
                              'class="bg-[#001336] text-[#ffb703] p-2 rounded text-[10px] font-bold"');

    fs.writeFileSync(file, content);
    console.log('Updated badges in ' + file);
});
