import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from '../src/data/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to convert Brazilian dates (e.g. "02 de Outubro, 2026") into RFC 822 Date format
function parseDateToRFC822(dateStr: string): string {
  const monthsPt: Record<string, string> = {
    janeiro: 'Jan',
    fevereiro: 'Feb',
    março: 'Mar',
    marco: 'Mar',
    abril: 'Apr',
    maio: 'May',
    junho: 'Jun',
    julho: 'Jul',
    agosto: 'Aug',
    setembro: 'Sep',
    outubro: 'Oct',
    novembro: 'Nov',
    dezembro: 'Dec'
  };

  try {
    const parts = dateStr.toLowerCase().replace(',', '').split(' de ');
    if (parts.length === 3) {
      const day = parts[0].trim().padStart(2, '0');
      const monthName = parts[1].trim();
      const year = parts[2].trim();
      const month = monthsPt[monthName] || 'Jan';
      const dateObj = new Date(`${month} ${day}, ${year} 12:00:00 GMT-0300`);
      if (!isNaN(dateObj.getTime())) {
        return dateObj.toUTCString();
      }
    }
  } catch (e) {
    // fallback
  }
  return new Date().toUTCString();
}

function generateRssXml(): string {
  const siteUrl = 'https://praticasdebemestarsocial.github.io/esdhubem';
  const buildDate = new Date().toUTCString();

  const itemsXml = BLOG_POSTS.map((post) => {
    const postUrl = `${siteUrl}/?page=blog-post&amp;id=${post.id}`;
    const pubDate = parseDateToRFC822(post.date);
    
    return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="false">esdhubem-post-${post.id}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>esdhubem@proton.me (${post.author})</author>
      <category><![CDATA[${post.category}]]></category>
      <description><![CDATA[${post.excerpt}]]></description>
      <content:encoded><![CDATA[${post.content || post.excerpt}]]></content:encoded>
      <enclosure url="${post.imageUrl}" type="image/jpeg" length="0" />
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>ESDHUBEM — Escola com oportunidade de você ir além</title>
    <link>${siteUrl}/</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Blog Oficial da ESDHUBEM - Educação Integral, Autoria, Publicação e Desenvolvimento Humano</description>
    <language>pt-BR</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>ESDHUBEM RSS Generator</generator>
    <image>
      <url>${siteUrl}/logo-cursos.png</url>
      <title>ESDHUBEM</title>
      <link>${siteUrl}/</link>
    </image>
${itemsXml}
  </channel>
</rss>`;
}

function main() {
  const rssContent = generateRssXml();
  
  // Destination paths
  const baseDir = path.resolve(__dirname, '..');
  const projectRootDir = path.resolve(baseDir, '..', '..');

  const targets = [
    // Vite public folder (copied into dist during build)
    path.join(baseDir, 'public', 'feed.xml'),
    path.join(baseDir, 'public', 'rss.xml'),
    // Root level for GitHub Pages
    path.join(projectRootDir, 'feed.xml'),
    path.join(projectRootDir, 'rss.xml'),
    // Public directory
    path.join(projectRootDir, 'public', 'feed.xml'),
    path.join(projectRootDir, 'public', 'rss.xml'),
    // GitHub Pages mirror folders
    path.join(projectRootDir, 'public', 'github-pages', 'feed.xml'),
    path.join(projectRootDir, 'public', 'github-pages', 'rss.xml'),
    path.join(projectRootDir, 'public', 'github-pages', 'github-pages', 'feed.xml'),
    path.join(projectRootDir, 'public', 'github-pages', 'github-pages', 'rss.xml'),
  ];

  targets.forEach((targetPath) => {
    try {
      const dir = path.dirname(targetPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(targetPath, rssContent, 'utf-8');
      console.log(`[RSS] Generated -> ${targetPath}`);
    } catch (err) {
      console.error(`[RSS Error] Failed to write ${targetPath}:`, err);
    }
  });

  console.log('✅ RSS Feed generation completed successfully!');
}

main();
