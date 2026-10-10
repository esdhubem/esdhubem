import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Copy, 
  ExternalLink, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  ChevronRight,
  List
} from 'lucide-react';
import { BlogPost } from '../data/blogData';
import profSilvianeImg from '../assets/prof-silviane.png';
import esdhubemLogo from '../assets/esdhubem-logo.png';

interface BlogPostPageProps {
  post: BlogPost;
  onBackToBlog: () => void;
  onBackToHome: () => void;
  onNavigateToCourses?: () => void;
  onNavigate?: (sectionId: string) => void;
  onNavigateToPost?: (postId: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ 
  post, 
  onBackToBlog, 
  onBackToHome, 
  onNavigateToCourses, 
  onNavigate,
  onNavigateToPost
}) => {
  const [copied, setCopied] = React.useState(false);

  const siteUrl = 'https://praticasdebemestarsocial.github.io/esdhubem';
  const canonicalUrl = `${siteUrl}/?post=${post.id}`;
  const authorName = post.authorDetails?.name || post.author;
  const authorBio = post.authorDetails?.bio || 'Corpo docente e coordenação pedagógica da ESDHUBEM.';
  const authorImg = post.authorDetails?.avatarUrl || (post.authorDetails?.name?.includes('Silviane') ? profSilvianeImg : esdhubemLogo);

  // Injetar dados estruturados JSON-LD Schema.org dinamicamente no <head>
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "headline": post.title,
      "description": post.excerpt,
      "image": [post.imageUrl],
      "author": {
        "@type": "Person",
        "name": authorName,
        "url": post.authorDetails?.lattesUrl || canonicalUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": "ESDHUBEM",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo-cursos.png`
        }
      },
      "datePublished": post.datePublishedIso || "2026-10-03",
      "dateModified": post.dateModifiedIso || post.datePublishedIso || "2026-10-03",
      "inLanguage": "pt-BR"
    };

    let scriptTag = document.getElementById('json-ld-article') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-article';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLd);

    // Atualizar meta tags e título
    document.title = `${post.title} | Blog ESDHUBEM`;

    return () => {
      const el = document.getElementById('json-ld-article');
      if (el) el.remove();
    };
  }, [post, canonicalUrl, authorName, siteUrl]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(canonicalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`, '_blank', 'noopener,noreferrer');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`, '_blank', 'noopener,noreferrer');
  };

  const shareLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Barra de Navegação Superior Fixa/Topo com Azul Profundo ESDHUBEM #011049 */}
      <div className="bg-[#011049] border-b border-blue-900/60 sticky top-0 z-30 shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={onBackToBlog}
            className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FFC72C]"
          >
            <ArrowLeft className="w-4 h-4 text-[#FFC72C]" />
            <span>Voltar ao Blog</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 hidden sm:inline-block">Acervo ESDHUBEM</span>
            <button
              onClick={onBackToHome}
              className="text-xs font-bold text-[#FFC72C] hover:underline cursor-pointer"
            >
              Página Inicial
            </button>
          </div>
        </div>
      </div>

      {/* Artigo Estruturado Semanticamente */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="post bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 lg:p-12">
          
          {/* Header do Artigo */}
          <header className="post-header mb-8 pb-8 border-b border-slate-100">
            {/* Categoria */}
            <p className="categoria mb-4">
              <span className="inline-block bg-[#FFC72C]/15 border border-[#FFC72C]/40 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </p>

            {/* Título Principal H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-4">
              {post.title}
            </h1>

            {/* Resumo */}
            <p className="resumo text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Bloco de Autoria */}
            <div className="autoria flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
              <img
                src={authorImg}
                alt={authorName}
                width="80"
                height="80"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">
                  Por{' '}
                  <span className="text-amber-800 font-bold">
                    {authorName}
                  </span>
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                  {authorBio}
                </p>
              </div>
            </div>

            {/* Metadados de Data e Tempo de Leitura */}
            <p className="metadados text-xs sm:text-sm text-slate-500 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                Publicado em{' '}
                <time dateTime={post.datePublishedIso || '2026-10-03'} className="font-semibold text-slate-700">
                  {post.date}
                </time>
              </span>
              <span>·</span>
              <span>
                Atualizado em{' '}
                <time dateTime={post.dateModifiedIso || post.datePublishedIso || '2026-10-03'} className="font-semibold text-slate-700">
                  {post.updatedDate || post.date}
                </time>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Tempo de leitura: {post.readTime}
              </span>
            </p>
          </header>

          {/* Imagem de Destaque com Figcaption */}
          <figure className="imagem-destaque mb-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100">
            <img
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              width="1200"
              height="675"
              loading="eager"
              className="w-full h-auto max-h-[460px] object-cover object-center"
            />
            {post.imageCaption && (
              <figcaption className="p-3 text-center text-xs text-slate-500 italic bg-slate-50 border-t border-slate-200/80">
                {post.imageCaption}
              </figcaption>
            )}
          </figure>

          {/* Sumário / Índice para Artigos Extensos */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <nav aria-label="Índice do artigo" className="mb-10 p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70">
              <div className="flex items-center gap-2 mb-3 text-amber-900 font-bold text-sm uppercase tracking-wider">
                <List className="w-4 h-4 text-amber-600" />
                <span>Neste artigo</span>
              </div>
              <ol className="list-decimal pl-5 space-y-1.5 text-sm font-medium text-slate-700">
                {post.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-amber-700 hover:underline transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Conteúdo Principal do Artigo */}
          <div 
            className="conteudo-artigo text-slate-800 leading-relaxed space-y-6 text-base"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Aviso Editorial */}
          <aside className="aviso-editorial my-10 p-5 rounded-2xl bg-slate-50 border-l-4 border-[#FFC72C] text-slate-700 text-sm leading-relaxed">
            <strong className="text-slate-900 font-bold block mb-1">Importante:</strong>
            {post.editorialNote || 'Este conteúdo tem finalidade educativa e informativa. Informações sobre cursos, certificados, carreira ou formação devem ser avaliadas de acordo com o contexto de cada leitor.'}
          </aside>

          {/* Seção: Fontes e Referências */}
          {post.sources && post.sources.length > 0 && (
            <section className="fontes my-10 p-6 rounded-2xl bg-slate-50/80 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Fontes e referências</span>
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {post.sources.map((src, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    <div>
                      {src.url ? (
                        <a 
                          href={src.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="font-semibold text-blue-700 hover:underline inline-flex items-center gap-1"
                        >
                          <span>{src.title}</span>
                          <ExternalLink className="w-3 h-3 text-blue-500 inline" />
                        </a>
                      ) : (
                        <span className="font-semibold text-slate-900">{src.title}</span>
                      )}
                      {(src.institution || src.author || src.date) && (
                        <span className="text-slate-500 block text-xs mt-0.5">
                          {[src.author, src.institution, src.date].filter(Boolean).join(' • ')}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Seção: Sobre o Autor */}
          <section className="sobre-autor my-10 p-6 rounded-2xl bg-gradient-to-br from-[#182333] to-[#243042] text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={authorImg}
                alt={authorName}
                width="80"
                height="80"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#FFC72C] shadow-md shrink-0"
              />
              <div className="space-y-1.5 flex-1">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Sobre o autor
                </h2>
                <p className="font-semibold text-[#FFC72C] text-sm">
                  {authorName}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {authorBio}
                </p>
                {post.authorDetails?.lattesUrl && (
                  <div className="pt-2">
                    <a
                      href={post.authorDetails.lattesUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-bold transition-colors"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Currículo Lattes CNPq</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Aviso: Opinião do Autor */}
          <div className="aviso-opiniao-autor my-8 p-4 rounded-2xl bg-slate-100/90 border border-slate-200 text-slate-600 text-xs sm:text-sm leading-relaxed">
            <p>
              <strong className="text-slate-800 font-bold">Nota de Autoria:</strong> O conteúdo apresentado é de responsabilidade exclusiva do autor. As ideias, interpretações e conclusões expressas não representam necessariamente a posição institucional da ESDHUBEM.
            </p>
          </div>

          {/* Seção: Continue Lendo (Conteúdos Relacionados) */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <nav className="conteudos-relacionados my-10 pt-6 border-t border-slate-200" aria-label="Conteúdos relacionados">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Continue lendo
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.relatedPosts.map((related) => (
                  <li key={related.id}>
                    <button
                      onClick={() => {
                        if (onNavigateToPost) {
                          onNavigateToPost(related.id);
                        } else {
                          window.location.href = `${siteUrl}/?post=${related.id}`;
                        }
                      }}
                      className="w-full text-left p-4 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 transition-all group flex flex-col justify-between h-full cursor-pointer shadow-2xs"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mb-2 inline-block">
                          {related.category}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-900 leading-snug line-clamp-2">
                          {related.title}
                        </h3>
                      </div>
                      <span className="text-xs text-amber-700 font-bold mt-3 flex items-center gap-1">
                        <span>Ler artigo</span>
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* CTA Opcional do Artigo com Gradiente Azul Tecnológico #011049 */}
          {post.cta && (
            <div className="mt-10 p-8 rounded-3xl bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white shadow-xl border border-blue-900/60 text-center relative overflow-hidden">
              <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
                <span className="inline-block bg-[#FFC72C]/20 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Matrícula Aberta • Acesso Imediato
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {post.cta.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {post.cta.subtitle}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (post.cta?.link && onNavigate) {
                        onNavigate(post.cta.link);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (onNavigateToCourses) {
                        onNavigateToCourses();
                      } else {
                        onBackToHome();
                      }
                    }}
                    className="inline-flex items-center gap-2 bg-[#FFC72C] hover:bg-[#ffcf47] text-[#011049] font-black text-sm sm:text-base px-6 py-3 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{post.cta.buttonText}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Barra de Compartilhamento no Artigo */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Compartilhe esta publicação:
            </span>
            <div className="flex items-center gap-3">
              <button 
                onClick={shareFacebook}
                aria-label="Compartilhar no Facebook"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button 
                onClick={shareTwitter}
                aria-label="Compartilhar no X (Twitter)"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button 
                onClick={shareLinkedin}
                aria-label="Compartilhar no LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-700 hover:text-white text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button 
                onClick={handleCopyLink}
                aria-label="Copiar link do artigo"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#011049] hover:text-white text-slate-600 flex items-center justify-center transition-colors cursor-pointer relative"
              >
                <Copy className="w-4 h-4" />
                {copied && (
                  <span className="absolute -top-8 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                    Copiado!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Footer do Post */}
          <footer className="post-footer mt-10 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
            <p>
              Este artigo faz parte do acervo de conteúdos da <strong>ESDHUBEM</strong> — Escola de Desenvolvimento Humano e Bem-Estar.
            </p>
          </footer>

        </article>
      </div>
    </div>
  );
};
