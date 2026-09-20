const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

let updatedFiles = 0;

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Look for the exact class string and replace it
    // Wait, the class string could have newlines or different spacing. Let's use a regex.
    // The class is usually: "border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75"
    // Sometimes it's without `mr-3` maybe? Let's check. In the view_file it had `mr-3`. 
    // Let's replace any instance of this specific class string.
    
    const searchString = 'class="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75"';
    const replaceString = 'class="bg-slate-50 border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md group-hover:opacity-75"';
    
    // Also, there might be ones with different spacing, let's use a more flexible regex:
    // This regex looks for class="..." containing border-gray-100 and group-hover:opacity-75 and doesn't already have a bg-
    const regex = /class="([^"]*border border-gray-100 shadow-sm rounded[^"]*group-hover:opacity-75[^"]*)"/g;
    
    let changed = false;
    content = content.replace(regex, (match, p1) => {
        if (!p1.includes('bg-')) {
            changed = true;
            return `class="bg-slate-50 ${p1}"`;
        }
        return match;
    });
    
    // Some cards might not have group-hover:opacity-75 or mr-3.
    // Let's also check for just "border border-gray-100 shadow-sm rounded" on course cards.
    // In category pages, the grid items might look different. Let's check `category.html` if it exists.
    
    if (changed) {
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
        updatedFiles++;
    }
});
console.log('Total files updated: ' + updatedFiles);
