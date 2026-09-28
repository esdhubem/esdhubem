import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { BlogPost } from '../data/blogData';

interface BlogPostPageProps {
  post: BlogPost;
  onBackToBlog: () => void;
  onBackToHome: () => void;
  onNavigateToCourses?: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBackToBlog, onBackToHome, onNavigateToCourses }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    const baseUrl = window.location.href.split('?')[0];
    const url = `${baseUrl}?post=${post.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = typeof window !== 'undefined' ? `${window.location.href.split('?')[0]}?post=${post.id}` : '';
  const shareTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank', 'noopener,noreferrer');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`, '_blank', 'noopener,noreferrer');
  };

  const shareLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Header com Imagem */}
      <div className="relative min-h-[460px] sm:min-h-[500px] flex items-end justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#182333] via-[#182333]/85 to-[#182333]/50" />
        </div>

        {/* Navegação Topo */}
        <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-20 max-w-5xl mx-auto w-full">
          <button
            onClick={onBackToBlog}
            className="inline-flex items-center gap-2 text-white hover:text-[#FFC72C] transition-colors text-sm font-semibold bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full backdrop-blur-md cursor-pointer border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </button>
          <button
            onClick={onBackToHome}
            className="text-white hover:text-[#FFC72C] text-sm font-semibold transition-colors drop-shadow-md cursor-pointer bg-black/20 hover:bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-md"
          >
            Ir para Início
          </button>
        </div>

        {/* Título e Meta */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <span className="inline-block bg-[#FFC72C] text-[#182333] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-lg">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3 drop-shadow-lg">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-base sm:text-lg md:text-xl font-medium text-amber-300 max-w-3xl mx-auto leading-relaxed mb-6 drop-shadow-md">
              {post.subtitle}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FFC72C]" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FFC72C]" />
              {post.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Share Sidebar (Desktop) */}
        <div className="hidden lg:flex flex-col gap-3 sticky top-32 h-fit items-center w-16">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center select-none">
            Compartilhe
          </span>
          <div className="h-8 w-px bg-slate-200 mb-2" />
          <button 
            onClick={shareFacebook}
            title="Compartilhar no Facebook"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer"
          >
            <Facebook className="w-4 h-4" />
          </button>
          <button 
            onClick={shareTwitter}
            title="Compartilhar no X (Twitter)"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500 hover:bg-sky-50 transition-all cursor-pointer"
          >
            <Twitter className="w-4 h-4" />
          </button>
          <button 
            onClick={shareLinkedin}
            title="Compartilhar no LinkedIn"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-700 hover:border-blue-700 hover:bg-blue-50 transition-all cursor-pointer"
          >
            <Linkedin className="w-4 h-4" />
          </button>
          <button 
            onClick={handleCopyLink}
            title="Copiar link"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#182333] hover:border-[#182333] hover:bg-slate-100 transition-all group relative cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            {copied && (
              <span className="absolute left-14 bg-[#182333] text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-30">Copiado!</span>
            )}
          </button>
        </div>

        {/* Artigo Texto */}
        <div className="flex-1">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#182333] prose-a:text-amber-600 hover:prose-a:text-amber-700">
            {/* Vídeo do Post (se configurado) */}
            {post.videoUrl && (
              <div className="mb-10 w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950 relative">
                <iframe
                  src={post.videoUrl}
                  title={post.title}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            {/* O conteúdo principal renderizado como HTML */}
            <div 
              className="mt-6 text-slate-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* CTA Box ao final do artigo */}
            {post.cta && (
              <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#182333] via-[#1E293B] to-[#0F172A] text-white shadow-2xl border border-slate-700/80 text-center relative overflow-hidden not-prose">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.18),transparent_55%)] pointer-events-none" />
                <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
                  <span className="inline-block bg-[#FFC72C]/20 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Matrícula Aberta • Acesso Imediato
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {post.cta.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {post.cta.subtitle}
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={onNavigateToCourses || onBackToHome}
                      className="inline-flex items-center gap-2 bg-[#FFC72C] hover:bg-[#ffcf47] text-[#182333] font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-[#FFC72C]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>{post.cta.buttonText}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Share Mobile */}
          <div className="lg:hidden mt-12 pt-8 border-t border-slate-200">
            <h4 className="text-sm font-bold text-[#182333] uppercase tracking-wider mb-4 text-center">Compartilhe este artigo</h4>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={shareFacebook}
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={shareTwitter}
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-colors cursor-pointer"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={shareLinkedin}
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={handleCopyLink}
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#182333] hover:text-white transition-colors relative cursor-pointer"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
            {copied && <p className="text-center text-xs text-green-600 font-bold mt-2">Link copiado com sucesso!</p>}
          </div>
        </div>

      </div>
    </article>
  );
};
