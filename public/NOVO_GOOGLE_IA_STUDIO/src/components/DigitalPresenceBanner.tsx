import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

interface DigitalPresenceBannerProps {
  onNavigate: () => void;
}

export const DigitalPresenceBanner: React.FC<DigitalPresenceBannerProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-cyan-400/30 flex flex-col items-center cursor-pointer group h-full hover:border-cyan-300 hover:shadow-cyan-900/30 hover:-translate-y-1 transition-all duration-300" onClick={onNavigate}>
      {/* Background Image / Luminous Royal Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
          alt="Produtos Digitais e Presença Profissional" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#061e47]/95 via-[#093576]/85 to-[#0e4da4]/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 flex-1 text-left flex flex-col justify-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/20 backdrop-blur-md border border-cyan-400/40 text-cyan-200 text-xs font-bold tracking-wide mb-4 w-fit">
          <Rocket className="w-4 h-4 text-cyan-300" />
          <span>Soluções & Ferramentas Digitais</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Eleve sua <span className="text-[#B8D4F2]">presença profissional</span>
        </h2>

        <p className="text-cyan-300 font-bold text-sm sm:text-base mb-3 leading-snug">
          Adquira produtos digitais para apresentar seu trabalho e ampliar sua presença profissional.
        </p>
        
        <p className="text-blue-100 text-xs sm:text-sm max-w-lg mb-8 leading-relaxed font-normal">
          Landing pages, biolinks, aplicativos e dashboards desenvolvidos para profissionais que querem apresentar seus serviços, organizar sua presença digital e alcançar novos públicos.
        </p>
        
        <div className="inline-flex items-center gap-2 text-[#FFC72C] font-black group-hover:text-[#ffdf79] transition-colors mt-auto">
          <span>Conheça nossos produtos</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
