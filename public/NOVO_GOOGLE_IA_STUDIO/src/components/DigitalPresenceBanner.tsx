import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

interface DigitalPresenceBannerProps {
  onNavigate: () => void;
}

export const DigitalPresenceBanner: React.FC<DigitalPresenceBannerProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl flex flex-col items-center cursor-pointer group h-full" onClick={onNavigate}>
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
          alt="Produtos Digitais e Presença Profissional" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#182333]/95 via-[#182333]/85 to-[#182333]/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 flex-1 text-left flex flex-col justify-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC72C] text-xs font-bold tracking-wide mb-4 w-fit">
          <Rocket className="w-4 h-4" />
          <span>Soluções & Ferramentas Digitais</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Eleve sua <span className="text-[#FFC72C]">presença profissional</span>
        </h2>

        <p className="text-emerald-400 font-bold text-sm sm:text-base mb-3 leading-snug">
          Adquira produtos digitais para apresentar seu trabalho e ampliar sua presença profissional.
        </p>
        
        <p className="text-slate-300 text-xs sm:text-sm max-w-lg mb-8 leading-relaxed font-normal">
          Landing pages, biolinks, aplicativos e dashboards desenvolvidos para profissionais que querem apresentar seus serviços, organizar sua presença digital e alcançar novos públicos.
        </p>
        
        <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-[#FFC72C] transition-colors mt-auto">
          <span>Conheça nossos produtos</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
