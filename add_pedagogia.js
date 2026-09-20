const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    const match = content.match(/<section id="categories"[\s\S]*?<\/section>/);
    if (match) {
        let section = match[0];
        
        if (!section.includes('Pedagogia<br>Integrativa')) {
            const newCat = `
                <a href="categoria-pedagogia-integrativa.html" class="block">
                <div class="transition bg-white border border-gray-100 shadow-sm cursor-pointer rounded p-2 md:p-3 hover:shadow-md group hover:-translate-y-2">
                    <div class="bg-[#0F1A33] rounded-full m-0 mx-auto w-12 lg:w-14 h-12 lg:h-14 p-2 scale-90 group-hover:scale-125 flex items-center justify-center shadow-sm">
                        <i class="fa-solid fa-book-open text-xl lg:text-2xl text-[#FFD342]"></i>
                    </div>
                    <h4 class="mt-4 mb-2 font-normal text-[10px] lg:text-xs text-[#0F1A33]">
                        Pedagogia<br>Integrativa
                    </h4>
                    <p class="text-gray-500 text-[10px] lg:text-xs">Cursos</p>
                </div>
                </a> <!-- End Single Categoria Item -->
            `;
            
            // Insert it just before "Desenvolvimento nas empresas" which is the previous addition.
            // Or just at the very end of the grid items.
            // Let's insert it right after the Coach Integrativo item end (which might be </a> <!-- End Single Categoria Item -->)
            section = section.replace(/(Coach<br>Integrativo[\s\S]*?<\/a>\s*<!-- End Single Categoria Item -->)/, '$1' + newCat);
        }
        
        content = content.replace(/<section id="categories"[\s\S]*?<\/section>/, section);
        fs.writeFileSync(file, content);
        console.log('Added Pedagogia Integrativa to ' + file);
    }
});
