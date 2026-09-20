const fs = require('fs');

function fixIndex() {
    let index = fs.readFileSync('public/index.html', 'utf8');

    const coachHTML = `
                <div class="transition bg-white border border-gray-100 shadow-sm cursor-pointer rounded p-3 md:p-4 hover:shadow-md group hover:-translate-y-2">
                    <div class="bg-[#0F1A33] rounded-full m-0 mx-auto w-16 lg:w-20 h-16 lg:h-20 p-2.5 scale-90 group-hover:scale-125 flex items-center justify-center shadow-sm">
                        <i class="fa-solid fa-graduation-cap text-2xl lg:text-3xl text-[#FFD342]"></i>
                    </div>
                    <h4 class="mt-4 mb-2 font-normal text-xs lg:text-sm text-[#0F1A33]">
                        Coach<br>Integrativo
                    </h4>
                    <p class="text-gray-500 text-[10px] lg:text-xs">Cursos</p>
                </div> <!-- End Single Categoria Item -->`;

    const tecHTML = `
                <div class="transition bg-white border border-gray-100 shadow-sm cursor-pointer rounded p-3 md:p-4 hover:shadow-md group hover:-translate-y-2">
                    <div class="bg-[#0F1A33] rounded-full m-0 mx-auto w-16 lg:w-20 h-16 lg:h-20 p-2.5 scale-90 group-hover:scale-125 flex items-center justify-center shadow-sm">
                        <i class="fa-solid fa-microchip text-2xl lg:text-3xl text-[#FFD342]"></i>
                    </div>
                    <h4 class="mt-4 mb-2 font-normal text-xs lg:text-sm text-[#0F1A33]">
                        Desenvolvimento<br>Tecnológico e IA
                    </h4>
                    <p class="text-gray-500 text-[10px] lg:text-xs">Cursos</p>
                </div> <!-- End Single Categoria Item -->`;

    // Find the very last "<!-- End Single Categoria Item -->" before "</section>" of the categories
    const categoriesStart = index.indexOf('<section id="categories"');
    const categoriesEnd = index.indexOf('</section>', categoriesStart);
    if (categoriesStart !== -1 && categoriesEnd !== -1) {
        let section = index.substring(categoriesStart, categoriesEnd);
        let items = section.split('<!-- End Single Categoria Item -->');
        if (items.length > 1) {
            // Append our two items before the very last closing tags of the grid
            if (!section.includes('Coach<br>Integrativo')) {
                items[items.length - 2] = items[items.length - 2] + '<!-- End Single Categoria Item -->\n' + coachHTML + '\n' + tecHTML;
                index = index.substring(0, categoriesStart) + items.join('<!-- End Single Categoria Item -->') + index.substring(categoriesEnd);
            }
        }
    }

    // Insert into footer
    const footerRegex = /(<li>\s*<a href="category\.html"[^>]*>\s*<i class="fa-solid fa-chevron-right[^>]*><\/i>Pedagogia Integrativa\s*<\/a>\s*<\/li>)/i;
    
    if (footerRegex.test(index)) {
        if (!index.includes('Desenvolvimento Tecnológico e IA')) {
            index = index.replace(footerRegex, `$1\n                          <li>\n                              <a href="category.html" class="text-sm hover:underline">\n                                  <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Desenvolvimento Tecnológico e IA\n                              </a>\n                          </li>`);
        }
    }

    fs.writeFileSync('public/index.html', index);
}

function fixCategory() {
    let cat = fs.readFileSync('public/category.html', 'utf8');

    // Insert into footer
    const footerRegex = /(<li>\s*<a href="category\.html"[^>]*>\s*<i class="fa-solid fa-chevron-right[^>]*><\/i>Pedagogia Integrativa\s*<\/a>\s*<\/li>)/i;
    
    if (footerRegex.test(cat)) {
        if (!cat.includes('Desenvolvimento Tecnológico e IA')) {
            cat = cat.replace(footerRegex, `$1\n                          <li>\n                              <a href="category.html" class="text-sm hover:underline">\n                                  <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Desenvolvimento Tecnológico e IA\n                              </a>\n                          </li>`);
        }
    }

    fs.writeFileSync('public/category.html', cat);
}

fixIndex();
fixCategory();
