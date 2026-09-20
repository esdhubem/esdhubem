const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        let filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Update Navbar: background blue, text white
        content = content.replace(/<nav class="bg-\[\#f2aa52\] shadow p-2\.5 sticky top-0 z-50">/g, '<nav class="bg-[#003c71] shadow p-2.5 sticky top-0 z-50 text-white">');
        
        // Inside Navbar, change text-[#0F1A33] to text-white for desktop links
        content = content.replace(/class="hidden lg:flex items-center ml-8 space-x-6 text-sm font-medium text-\[\#0F1A33\]"/g, 'class="hidden lg:flex items-center ml-8 space-x-6 text-sm font-medium text-white"');

        // Update Validar Certificado button text color
        content = content.replace(/bg-slate-100 px-3 py-1\.5 rounded-md hover:bg-slate-200">Validar Certificado/g, 'bg-slate-100 text-[#003c71] px-3 py-1.5 rounded-md hover:bg-slate-200 font-bold">Validar Certificado');

        // Update Footer bottom bar
        content = content.replace(/<div class="bg-\[\#f2aa52\] text-\[\#0F1A33\]">/g, '<div class="bg-[#003c71] text-white">');

        // Update Jornada background to slate-50
        content = content.replace(/bg-\[\#d99559\]/g, 'bg-slate-50');

        // Update Banner background
        content = content.replace(/bg-\[\#0e1f40\]/g, 'bg-[#003c71]');

        // Update Banner Buscar button
        content = content.replace(/bg-red-500 text-white px-6 md:px-8 py-2 md:py-3 hover:opacity-75 rounded-full/g, 'bg-[#ffb703] text-[#003c71] font-bold px-6 md:px-8 py-2 md:py-3 hover:opacity-75 rounded-full');

        // Update hover text in nav links
        content = content.replace(/hover:text-red-500 transition/g, 'hover:text-[#ffb703] transition');

        fs.writeFileSync(filePath, content);
        console.log('Updated ' + file);
    }
});
