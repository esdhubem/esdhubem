import React from 'react';
import { Sparkles, BookOpen, Award, GraduationCap, PenTool } from 'lucide-react';

import bannerImg from '../assets/banner_network_innovation.jpg';

interface HeroProps {
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="inicio" className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-[#011049]">
        {/* Content - Área de texto dedicada no topo */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center pt-8 sm:pt-10 md:pt-12 pb-2 sm:pb-3">
          <div className="tracking-tight leading-tight flex flex-col items-center text-center space-y-2 sm:space-y-2.5">
            {/* Linha 1: ESDHUBEM em cima sozinho */}
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-cyan-400 tracking-widest uppercase drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              ESDHUBEM
            </span>

            {/* Linha 2: Desenvolvimento • Bem-Estar */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Desenvolvimento • Bem-Estar
            </h1>

            {/* Linha 3: Cursos Livres em Mapas Mentais */}
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-[#FFC72C] leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
              Cursos Livres em Mapas Mentais
            </h2>

            {/* Linha 4: A Tecnologia do Escrever e do Mapear */}
            <p className="text-sm sm:text-lg md:text-xl lg:text-[24px] font-bold text-white tracking-wide leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              A Tecnologia do Escrever e do Mapear
            </p>
          </div>
        </div>

        {/* Background Image / Ilustração Central da Rede de Mapas Mentais sem sobreposição */}
        <div className="relative z-0 w-full flex justify-center items-end overflow-hidden -mt-2 sm:-mt-4 md:-mt-6">
          <img
            src={bannerImg}
            alt="ESDHUBEM • Desenvolvimento • Bem-Estar"
            className="w-full max-w-6xl md:max-w-7xl h-auto object-contain object-bottom pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Trust highlights Strip below the banner */}
      <div className="bg-white border-b border-slate-200 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-y-8 lg:gap-4">
            
            {/* 1. Cursos livres */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#182333]">Cursos livres</h4>
              </div>
            </div>

            {/* 2. Certificado */}
            <div className="flex items-center justify-center lg:justify-center gap-4 sm:border-l border-slate-200 sm:pl-6 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#182333]">Certificado</h4>
              </div>
            </div>

            {/* 3. Horas complementares */}
            <div className="flex items-center justify-center lg:justify-center gap-4 lg:border-l border-slate-200 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#182333]">Horas complementares</h4>
              </div>
            </div>

            {/* 4. Mapas Mentais & Vídeo-aulas */}
            <div className="flex items-center justify-center lg:justify-center gap-4 sm:border-l border-slate-200 sm:pl-6 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#182333]">Mapas Mentais</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
