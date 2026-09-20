const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Change left container width to allow more space on large screens
    content = content.replace(/class="w-full md:w-1\/2 pr-0 md:pr-10 z-10"/g, 'class="w-full md:w-1/2 lg:w-7/12 pr-0 md:pr-10 z-10"');
    
    // Change right container width accordingly
    content = content.replace(/class="w-full md:w-1\/2 mt-10 md:mt-0 flex justify-center"/g, 'class="w-full md:w-1/2 lg:w-5/12 mt-10 md:mt-0 flex justify-center"');

    // Change the h2 font size and nowrap behavior
    content = content.replace(/class="text-4xl mb-1 pb-3 md:pb-0"/g, 'class="text-3xl lg:text-4xl xl:whitespace-nowrap mb-1 pb-3 md:pb-0"');

    fs.writeFileSync(file, content);
    console.log('Updated layout in ' + file);
});
