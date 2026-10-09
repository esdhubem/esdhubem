const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 5000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml',
  '.xsl': 'application/xml'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  if (cleanUrl === '/') cleanUrl = '/index.html';

  // Decode URI component (e.g., spaces or accents)
  cleanUrl = decodeURIComponent(cleanUrl);

  // If path starts with /esdhubem, rewrite to root
  if (cleanUrl === '/esdhubem' || cleanUrl === '/esdhubem/') {
    cleanUrl = '/index.html';
  } else if (cleanUrl.startsWith('/esdhubem/')) {
    cleanUrl = cleanUrl.replace(/^\/esdhubem/, '');
  }

  let filePath = path.join(__dirname, cleanUrl);

  // If file doesn't exist in root, check in public/
  if (!fs.existsSync(filePath)) {
    const publicPath = path.join(__dirname, 'public', cleanUrl);
    if (fs.existsSync(publicPath)) {
      filePath = publicPath;
    }
  }

  // If still directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 Não Encontrado</h1><p>Arquivo: ' + cleanUrl + '</p>');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Erro interno: ' + err.code);
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    res.end(content);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n========================================`);
  console.log(`🌐 Servidor ativo com sucesso!`);
  console.log(`👉 Portal Principal: ${url}`);
  console.log(`👉 Protótipo Pensar: ${url}/public/curso-estilo-pensar.html`);
  console.log(`========================================\n`);

  // Open default browser on Windows
  exec(`start ${url}`);
});
