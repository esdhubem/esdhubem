import React from 'react';
import { PenTool, ArrowRight } from 'lucide-react';

interface PublicationBannerProps {
  onNavigate: () => void;
}

export const PublicationBanner: React.FC<PublicationBannerProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl flex flex-col items-center cursor-pointer group h-full" onClick={onNavigate}>
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80" 
          alt="Publicação e Produção Autoral" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#182333]/95 via-[#182333]/85 to-[#182333]/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 flex-1 text-left flex flex-col justify-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC72C] text-xs font-bold tracking-wide mb-4 w-fit">
          <PenTool className="w-4 h-4" />
          <span>Produção Autoral & Artigos</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Transforme seu conhecimento em <span className="text-[#FFC72C]">publicação</span>
        </h2>

        <p className="text-emerald-400 font-bold text-sm sm:text-base mb-3 leading-snug">
          Escreva um artigo ou livro e publique sua produção autoral na ESDHUBEM.
        </p>
        
        <p className="text-slate-300 text-xs sm:text-sm max-w-lg mb-8 leading-relaxed font-normal">
          Depois de concluir seu curso, você pode transformar aquilo que aprendeu em uma produção própria e fazer seu conhecimento circular.
        </p>
        
        <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-[#FFC72C] transition-colors mt-auto">
          <span>Conheça as possibilidades</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
