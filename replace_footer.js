const fs = require('fs');

const unifiedFooter = `    <footer class="bg-[#00103F] text-white mt-20">
        <div class="container mx-auto px-5 py-16">
            <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
                <!-- Fale Conosco -->
                <div class="md:col-span-2">
                    <img src="./images/logo-footer.png" alt="Imagem ilustrativa" class="w-48 mb-4">
                    <h3 class="font-medium mt-4 mb-3">Fale Conosco</h3>
                    <div class="text-sm">
                        <h4 class="mb-2">(11) 960319637</h4>
                        <h4 class="mb-2">silverioss@protonmail.com</h4>
                        <h4 class="mb-2">9h - 17h, Segunda - Sexta</h4>
                        <h4 class="mb-2">São Paulo SP Brasil</h4>
                        
                        <div class="mt-8">
                            <h3 class="font-medium mb-3 text-sm">Métodos de Pagamento</h3>
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
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Categorias -->
                <div class="md:col-span-1">
                    <h3 class="font-medium mt-4 mb-3">Categorias</h3>
                    <ul class="list-none mt-4 space-y-2">
                        <li>
                            <a href="category.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Cursos Freepremium
                            </a>
                        </li>
                        <li>
                            <a href="category.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Horas Complementares
                            </a>
                        </li>
                        <li>
                            <a href="category.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Formações Profissionais
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Links Úteis -->
                <div class="md:col-span-1">
                    <h3 class="font-medium mt-4 mb-3">Links úteis</h3>
                    <ul class="list-none mt-4 space-y-2">
                        <li>
                            <a href="sobre.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Sobre nós / A Escola
                            </a>
                        </li>
                        <li>
                            <a href="certificados.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Validar Certificado
                            </a>
                        </li>
                        <li>
                            <a href="faq.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Perguntas Frequentes (FAQ)
                            </a>
                        </li>
                        <li>
                            <a href="contato.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Contato e Suporte
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Informações Legais -->
                <div class="md:col-span-1">
                    <h3 class="font-medium mt-4 mb-3">Informações Legais</h3>
                    <ul class="list-none mt-4 space-y-2">
                        <li>
                            <a href="privacidade.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Política de Privacidade
                            </a>
                        </li>
                        <li>
                            <a href="termos.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Termos de Uso
                            </a>
                        </li>
                        <li>
                            <a href="pagamentos.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Formas de Pagamento
                            </a>
                        </li>
                        <li>
                            <a href="trocas.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Trocas e Reembolsos
                            </a>
                        </li>
                        <li>
                            <a href="envio.html" class="text-sm hover:underline">
                                <i class="fa-solid fa-chevron-right text-xs mr-2"></i>Política de Envio
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Newsletter -->
                <div class="md:col-span-1">
                    <h3 class="font-medium mt-4 mb-3">Assine nossa newsletter</h3>
                    <p class="text-sm mb-4">
                        Receba nossos conteúdos exclusivos, novidades sobre lançamentos de cursos e dicas valiosas para acelerar o seu desenvolvimento e alavancar a sua carreira! Assine agora e faça parte da comunidade ESDHUBEM.
                    </p>
                    <div class="relative">
                        <input type="email" placeholder="Seu e-mail" class="w-full p-3 pl-5 bg-white rounded-full text-gray-700 placeholder:text-gray-700">
                        <button class="bg-[#FF8D3F] absolute top-1 right-1 p-2 px-5 font-bold rounded-full text-white cursor-pointer hover:bg-orange-500 transition">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#000d33]">
            <div class="container mx-auto px-5 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center text-sm">
                    <div class="mb-4 md:mb-0">
                        <p>© 2026 ESDHUBEM São Paulo SP Brasil CNPJ 61928778000150</p>
                    </div>
                    <div>
                        <ul class="flex gap-4 list-none cursor-pointer">
                            <li><i class="fa-brands fa-facebook hover:text-[#FF8D3F] transition"></i></li>
                            <li><i class="fa-brands fa-twitter hover:text-[#FF8D3F] transition"></i></li>
                            <li><i class="fa-brands fa-instagram hover:text-[#FF8D3F] transition"></i></li>
                            <li><i class="fa-brands fa-linkedin hover:text-[#FF8D3F] transition"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;

function updateFile(filename) {
    let html = fs.readFileSync(filename, 'utf8');
    
    const startIndex = html.indexOf('<footer');
    const endIndex = html.indexOf('</footer>') + 9;
    
    if (startIndex !== -1 && endIndex > startIndex) {
        html = html.substring(0, startIndex) + unifiedFooter + html.substring(endIndex);
        fs.writeFileSync(filename, html);
        console.log('Successfully updated footer in', filename);
    } else {
        console.log('Could not find <footer in', filename);
    }
}

['public/index.html', 'public/category.html', 'public/course.html'].forEach(updateFile);
