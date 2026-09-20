const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
files.push('index.html');

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Footer link
    const footerLinkRegex = /<a href="category\.html" class="text-sm hover:underline">\s*<i class="fa-solid fa-chevron-right text-xs mr-2"><\/i>Desenvolvimento Humano\s*<\/a>/g;
    content = content.replace(footerLinkRegex, 
                              '<a href="categoria-desenvolvimento-humano.html" class="text-sm hover:underline">\n                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Desenvolvimento Humano\n                            </a>');

    // The grid card in index.html (and possibly other pages)
    // The icon for "Desenvolvimento Humano" is <i class="fa-solid fa-users text-2xl lg:text-3xl text-[#FFD342]"></i>
    const cardRegex = /<div class="transition bg-white border border-gray-100 shadow-sm cursor-pointer rounded p-3 md:p-4 hover:shadow-md group hover:-translate-y-2">\s*<div class="bg-\[#0F1A33\] rounded-full m-0 mx-auto w-16 lg:w-20 h-16 lg:h-20 p-2\.5 scale-90 group-hover:scale-125 flex items-center justify-center shadow-sm">\s*<i class="fa-solid fa-users text-2xl lg:text-3xl text-\[#FFD342\]"><\/i>\s*<\/div>\s*<h4 class="mt-4 mb-2 font-normal text-xs lg:text-sm text-\[#0F1A33\]">\s*Desenvolvimento<br>Humano\s*<\/h4>\s*<p class="text-gray-500 text-\[10px\] lg:text-xs">Cursos<\/p>\s*<\/div>/g;

    const wrappedCard = `<a href="categoria-desenvolvimento-humano.html" class="block">
                <div class="transition bg-white border border-gray-100 shadow-sm cursor-pointer rounded p-3 md:p-4 hover:shadow-md group hover:-translate-y-2">
                    <div class="bg-[#0F1A33] rounded-full m-0 mx-auto w-16 lg:w-20 h-16 lg:h-20 p-2.5 scale-90 group-hover:scale-125 flex items-center justify-center shadow-sm">
                        <i class="fa-solid fa-users text-2xl lg:text-3xl text-[#FFD342]"></i>
                    </div>
                    <h4 class="mt-4 mb-2 font-normal text-xs lg:text-sm text-[#0F1A33]">
                        Desenvolvimento<br>Humano
                    </h4>
                    <p class="text-gray-500 text-[10px] lg:text-xs">Cursos</p>
                </div>
            </a>`;

    content = content.replace(cardRegex, wrappedCard);

    fs.writeFileSync(file, content);
    console.log('Updated links in ' + file);
});
