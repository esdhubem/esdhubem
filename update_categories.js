const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Make sure we only affect the categories section
    const match = content.match(/<section id="categories"[\s\S]*?<\/section>/);
    if (match) {
        let section = match[0];
        
        // Fix Coach Integrativo link if it's broken
        if (!section.includes('<a href="categoria-coach-integrativo.html"')) {
             section = section.replace(/(<div class="transition[^>]*>[\s\S]*?Coach<br>Integrativo[\s\S]*?<\/div>)([\s\S]*?<!-- End Single Categoria Item -->)/g, '<a href="categoria-coach-integrativo.html" class="block">\n$1\n</a>$2');
        }

        // Change grid cols to 8
        section = section.replace(/lg:grid-cols-7/g, 'lg:grid-cols-8 lg:gap-2');
        
        // Reduce padding
        section = section.replace(/p-3 md:p-4/g, 'p-2 md:p-3');
        
        // Reduce icon size
        section = section.replace(/w-16 lg:w-20 h-16 lg:h-20 p-2.5/g, 'w-12 lg:w-14 h-12 lg:h-14 p-2');
        section = section.replace(/text-2xl lg:text-3xl/g, 'text-xl lg:text-2xl');
        
        // Reduce text size
        section = section.replace(/text-xs lg:text-sm/g, 'text-[10px] lg:text-xs');
        
        // Check if we already added the new categories to avoid duplication
        if (!section.includes('Desenvolvimento<br>nas empresas')) {
            const newCats = `
                <a href="categoria-desenvolvimento-empresas.html" class="block">
                <div class="transition bg-white border border-gray-100 shadow-sm cursor-pointer rounded p-2 md:p-3 hover:shadow-md group hover:-translate-y-2">
                    <div class="bg-[#0F1A33] rounded-full m-0 mx-auto w-12 lg:w-14 h-12 lg:h-14 p-2 scale-90 group-hover:scale-125 flex items-center justify-center shadow-sm">
                        <i class="fa-solid fa-building text-xl lg:text-2xl text-[#FFD342]"></i>
                    </div>
                    <h4 class="mt-4 mb-2 font-normal text-[10px] lg:text-xs text-[#0F1A33]">
                        Desenvolvimento<br>nas empresas
                    </h4>
                    <p class="text-gray-500 text-[10px] lg:text-xs">Cursos</p>
                </div>
                </a> <!-- End Single Categoria Item -->

                <a href="categoria-formacao-empresarial.html" class="block">
                <div class="transition bg-white border border-gray-100 shadow-sm cursor-pointer rounded p-2 md:p-3 hover:shadow-md group hover:-translate-y-2">
                    <div class="bg-[#0F1A33] rounded-full m-0 mx-auto w-12 lg:w-14 h-12 lg:h-14 p-2 scale-90 group-hover:scale-125 flex items-center justify-center shadow-sm">
                        <i class="fa-solid fa-briefcase text-xl lg:text-2xl text-[#FFD342]"></i>
                    </div>
                    <h4 class="mt-4 mb-2 font-normal text-[10px] lg:text-xs text-[#0F1A33]">
                        Formação<br>Empresarial
                    </h4>
                    <p class="text-gray-500 text-[10px] lg:text-xs">Cursos</p>
                </div>
                </a> <!-- End Single Categoria Item -->
            `;
            
            // Insert before the end of the grid (before </div></div></section>)
            // Actually find the last </div> before </div></section>
            section = section.replace(/(<\/div>\s*<\/div>\s*<\/section>)/, newCats + '\n$1');
        }
        
        content = content.replace(/<section id="categories"[\s\S]*?<\/section>/, section);
        fs.writeFileSync(file, content);
        console.log('Updated categories in ' + file);
    }
});
