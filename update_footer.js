const fs = require('fs');

function updateFooter(filename) {
    let html = fs.readFileSync(filename, 'utf8');

    // 1. Update Contact Info
    html = html.replace('+88019626352323', '(11) 960319637');
    html = html.replace('hello@gmail.com', 'silverioss@protonmail.com');

    // 2. Update Newsletter Text
    html = html.replace(/Lorem ipsum dolor, sit amet consectetur adipisicing elit\. Aut odit magnam officia sequi[\s\S]*?tempore, suscipit est\./g, 'Receba nossos conteúdos exclusivos, novidades sobre lançamentos de cursos e dicas valiosas para acelerar o seu desenvolvimento e alavancar a sua carreira! Assine agora e faça parte da comunidade ESDHUBEM.');

    // 3. Update Copyright
    html = html.replace('&copy; 2024 ESDHUBEM. Todos os direitos reservados.', '&copy; 2026 ESDHUBEM São Paulo SP Brasil CNPJ 61928778000150');

    // 4. Update Links úteis
    if (html.includes('Cursos Livres')) {
        const linksStart = html.indexOf('<ul class="list-none mt-4">');
        if (linksStart !== -1) {
            const linksEnd = html.indexOf('</ul>', linksStart);
            if (linksEnd !== -1) {
                let ulContent = html.substring(linksStart, linksEnd + 5);
                
                ulContent = ulContent.replace(
                    /<li>\s*<a href="category\.html" class="text-sm">\s*<i class="fa-solid fa-chevron-right text-xs mr-3"><\/i>\s*Cursos Livres\s*<\/a>\s*<\/li>/g,
                    `<li>
                                <a href="category.html" class="text-sm">
                                    <i class="fa-solid fa-chevron-right text-xs mr-3"></i>
                                    Cursos Gratuitos
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
                                    Formações Profissionais
                                </a>
                            </li>`
                );
                ulContent = ulContent.replace(
                    /<li>\s*<a href="contato\.html" class="text-sm">\s*<i class="fa-solid fa-chevron-right text-xs mr-3"><\/i>\s*Contato e Suporte\s*<\/a>\s*<\/li>/g,
                    `<li>
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
                            </li>`
                );
                
                html = html.substring(0, linksStart) + ulContent + html.substring(linksEnd + 5);
            }
        }
    }

    fs.writeFileSync(filename, html);
    console.log('Updated', filename);
}

['public/index.html', 'public/category.html', 'public/course.html'].forEach(updateFooter);
