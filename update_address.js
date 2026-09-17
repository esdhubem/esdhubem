const fs = require('fs');

function updateAddress(filename) {
    let html = fs.readFileSync(filename, 'utf8');

    const oldAddress = '<h4 class="mb-2">PO Box 567, Hostain st. 433 Los Angeles, California, US</h4>';
    
    const newAddressAndPayment = `<h4 class="mb-2">São Paulo SP Brasil</h4>
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
                                    </div>
                                    
                                    <h3 class="font-medium mb-2 text-sm text-gray-300">Criptomoedas Aceitas</h3>
                                    <div class="flex flex-col gap-2 text-xs text-gray-400">
                                        <div class="flex items-center gap-2">
                                            <i class="fa-brands fa-ethereum text-indigo-400 text-lg w-4 text-center"></i>
                                            <span>ETH em Ethereum Mainnet</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <img src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=025" class="w-4 h-4 opacity-75" alt="Solana">
                                            <span>SOL em Solana Mainnet Beta</span>
                                        </div>
                                    </div>
                                </div>`;

    if (html.includes(oldAddress)) {
        html = html.replace(oldAddress, newAddressAndPayment);
        fs.writeFileSync(filename, html);
        console.log('Updated', filename);
    } else {
        console.log('Could not find old address in', filename);
    }
}

['public/index.html', 'public/category.html', 'public/course.html'].forEach(updateAddress);
