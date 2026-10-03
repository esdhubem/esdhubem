<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="pt-BR">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> • Feed RSS</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', system-ui, -apple-system, sans-serif; }
          body { background-color: #0F172A; color: #E2E8F0; line-height: 1.6; padding: 24px 16px; }
          .container { max-width: 860px; margin: 0 auto; }
          .header { background: linear-gradient(135deg, #1E293B, #0F172A); border: 1px solid #334155; border-radius: 20px; padding: 32px 24px; text-align: center; margin-bottom: 32px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3); }
          .badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 199, 44, 0.15); color: #FFC72C; border: 1px solid rgba(255, 199, 44, 0.4); font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 9999px; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px; }
          h1 { color: #FFFFFF; font-size: 28px; font-weight: 800; margin-bottom: 8px; }
          .desc { color: #94A3B8; font-size: 15px; max-width: 600px; margin: 0 auto 20px; }
          .info-box { background: rgba(30, 41, 59, 0.7); border: 1px solid #334155; border-radius: 12px; padding: 14px 18px; margin-top: 20px; font-size: 13px; color: #CBD5E1; display: inline-block; text-align: left; }
          .info-box code { background: #020617; padding: 2px 6px; border-radius: 4px; color: #38BDF8; font-family: monospace; }
          .btn { display: inline-block; background: #FFC72C; color: #0F172A; font-weight: 700; font-size: 14px; padding: 10px 20px; border-radius: 10px; text-decoration: none; margin-top: 12px; transition: 0.2s; }
          .btn:hover { background: #FACC15; transform: translateY(-1px); }
          .items { display: flex; flex-direction: column; gap: 20px; }
          .card { background: #1E293B; border: 1px solid #334155; border-radius: 16px; padding: 24px; transition: transform 0.2s, border-color 0.2s; }
          .card:hover { border-color: #64748B; transform: translateY(-2px); }
          .card-cat { display: inline-block; background: rgba(56, 189, 248, 0.15); color: #38BDF8; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; margin-bottom: 12px; }
          .card-title { font-size: 20px; font-weight: 700; color: #FFFFFF; text-decoration: none; display: block; margin-bottom: 10px; line-height: 1.35; }
          .card-title:hover { color: #FFC72C; }
          .card-meta { font-size: 12px; color: #64748B; margin-bottom: 14px; display: flex; flex-wrap: wrap; gap: 12px; }
          .card-desc { color: #94A3B8; font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
          .card-link { color: #FFC72C; font-size: 13px; font-weight: 600; text-decoration: none; }
          .card-link:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <header class="header">
            <div class="badge">📡 Feed RSS 2.0 • ESDHUBEM</div>
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
            <a class="btn" href="{/rss/channel/link}">Acessar o Site Oficial</a>
            <div style="margin-top: 14px;">
              <div class="info-box">
                💡 <strong>Dica de Inscrição:</strong> Copie o endereço desta página e cole no seu leitor de feeds RSS favorito (ex: Feedly, Inoreader, NetNewsWire).
              </div>
            </div>
          </header>

          <main class="items">
            <xsl:for-each select="/rss/channel/item">
              <article class="card">
                <xsl:if test="category">
                  <span class="card-cat"><xsl:value-of select="category"/></span>
                </xsl:if>
                <h2>
                  <a class="card-title" href="{link}" target="_blank">
                    <xsl:value-of select="title"/>
                  </a>
                </h2>
                <div class="card-meta">
                  <xsl:if test="author or dc:creator">
                    <span>✍️ <xsl:value-of select="author | dc:creator"/></span>
                  </xsl:if>
                  <xsl:if test="pubDate">
                    <span>📅 <xsl:value-of select="pubDate"/></span>
                  </xsl:if>
                </div>
                <p class="card-desc"><xsl:value-of select="description"/></p>
                <a class="card-link" href="{link}" target="_blank">Ler artigo completo no portal →</a>
              </article>
            </xsl:for-each>
          </main>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
