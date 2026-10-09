import React from 'react';
import { Library, ArrowRight } from 'lucide-react';

interface BookstoreBannerProps {
  onNavigate: () => void;
}

export const BookstoreBanner: React.FC<BookstoreBannerProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-cyan-400/30 flex flex-col items-center cursor-pointer group h-full hover:border-cyan-300 hover:shadow-cyan-900/30 hover:-translate-y-1 transition-all duration-300" onClick={onNavigate}>
      {/* Background Image / Luminous Royal Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1200&q=80" 
          alt="Livraria e Materiais" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#061e47]/95 via-[#093576]/85 to-[#0e4da4]/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 flex-1 text-left flex flex-col justify-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/20 backdrop-blur-md border border-cyan-400/40 text-cyan-200 text-xs font-bold tracking-wide mb-4 w-fit">
          <Library className="w-4 h-4 text-cyan-300" />
          <span>Livros, Apostilas e eBooks</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Nossa <span className="text-[#B8D4F2]">Livraria</span>
        </h2>
        
        <p className="text-blue-100 text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
          Materiais complementares exclusivos de alto nível para acelerar o seu aprendizado e transformar sua carreira.
        </p>
        
        <div className="inline-flex items-center gap-2 text-[#FFC72C] font-black group-hover:text-[#ffdf79] transition-colors mt-auto">
          <span>Acessar a Livraria</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
