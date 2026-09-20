const fs = require('fs');

function updateCrypto(filename) {
    let html = fs.readFileSync(filename, 'utf8');

    const oldBlock = `<h3 class="font-medium mb-3 text-sm">Métodos de Pagamento</h3>
                            <div class="flex flex-wrap gap-4 items-center mb-4">
                                <div class="flex items-center gap-2">
                                    <i class="fa-brands fa-pix text-emerald-400 text-2xl"></i>
                                    <span class="text-xs">Pix</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-credit-card text-blue-400 text-2xl"></i>
                                    <span class="text-xs">Cartão</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-brands fa-ethereum text-indigo-400 text-2xl"></i>
                                </div>
                                <div class="flex items-center gap-2">
                                    <img src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=025" class="w-5 h-5 opacity-75" alt="Sol">
                                </div>
                            </div>`;
                                    
    const newBlock = `<h3 class="font-medium mb-3 text-sm">Métodos de Pagamento</h3>
                            <div class="flex flex-wrap gap-4 items-center mb-4">
                                <div class="flex items-center gap-2">
                                    <i class="fa-brands fa-pix text-emerald-400 text-2xl"></i>
                                    <span class="text-xs">Pix</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-credit-card text-blue-400 text-2xl"></i>
                                    <span class="text-xs">Cartão</span>
                                </div>
                            </div>`;

    if (html.includes(oldBlock)) {
        html = html.replace(oldBlock, newBlock);
        fs.writeFileSync(filename, html);
        console.log('Updated', filename);
    } else {
        console.log('Could not find old block in', filename);
        // Let's try matching with regex just in case whitespace differs
        const regexPattern = /<h3 class="font-medium mb-3 text-sm">Métodos de Pagamento<\/h3>[\s\S]*?alt="Sol">\s*<\/div>\s*<\/div>/g;
        if(regexPattern.test(html)) {
            html = html.replace(regexPattern, newBlock);
            fs.writeFileSync(filename, html);
            console.log('Updated via regex', filename);
        }
    }
}

['public/index.html', 'public/category.html', 'public/course.html'].forEach(updateCrypto);
