const fs = require('fs');

function updateFooterColumns(filename) {
    let html = fs.readFileSync(filename, 'utf8');

    // Make Newsletter narrower
    html = html.replace(/<div class="basis-2\/6">(\s*)<div class="p-4">(\s*)<h3 class="font-medium mt-4 mb-3">(\s*)Assine nossa newsletter/g, '<div class="basis-1/6">$1<div class="p-4">$2<h3 class="font-medium mt-4 mb-3">$3Assine nossa newsletter');

    // Extract Categories out of Links úteis
    const startLinks = html.indexOf('<div class="basis-1/6">', html.indexOf('Fale Conosco'));
    const endLinks = html.indexOf('</div>\n                </div>', startLinks) + 28;
    
    if (startLinks !== -1 && endLinks > startLinks && html.substring(startLinks, endLinks).includes('Links úteis')) {
        const newColumns = `<div class="basis-1/6">
                    <div class="p-4">
                        <h3 class="font-medium mt-4 mb-3">
                            Categorias
                        </h3>
                        <ul class="list-none mt-4">
                            <li>
                                <a href="category.html" class="text-sm">
                                    <i class="fa-solid fa-chevron-right text-xs mr-3"></i>
                                    Cursos Freepremium
                                </a>
                            </li>
                            <li>
                                <a href="category.html" class="text-sm">
                                    <i class="fa-solid fa-chevron-right text-xs mr-3"></i>
                                    Horas Complementares
                                </a>
                            </li>
                            <li>
                                <a href="category.html" class="text-sm">
                                    <i class="fa-solid fa-chevron-right text-xs mr-3"></i>
                                    Formação Profissional
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="basis-1/6">
                    <div class="p-4">
                        <h3 class="font-medium mt-4 mb-3">
                            Links úteis
                        </h3>
                        <ul class="list-none mt-4">
                            <li>
                                <a href="sobre.html" class="text-sm">
                                    <i class="fa-solid fa-chevron-right text-xs mr-3"></i>
                                    Sobre nós / A Escola
                                </a>
                            </li>
                            <li>
                                <a href="certificados.html" class="text-sm">
                                    <i class="fa-solid fa-chevron-right text-xs mr-3"></i>
                                    Validar Certificado
                                </a>
                            </li>
                            <li>
                                <a href="faq.html" class="text-sm">
                                    <i class="fa-solid fa-chevron-right text-xs mr-3"></i>
                                    Perguntas Frequentes (FAQ)
                                </a>
                            </li>
                            <li>
                                <a href="contato.html" class="text-sm">
                                    <i class="fa-solid fa-chevron-right text-xs mr-3"></i>
                                    Contato e Suporte
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>`;
        html = html.substring(0, startLinks) + newColumns + html.substring(endLinks);
        fs.writeFileSync(filename, html);
        console.log('Updated columns in', filename);
    } else {
        console.log('Could not parse links block correctly in', filename);
    }
}

['public/index.html', 'public/category.html', 'public/course.html'].forEach(updateFooterColumns);
