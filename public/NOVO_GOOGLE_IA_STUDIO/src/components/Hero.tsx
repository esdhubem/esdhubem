import React from 'react';
import { Sparkles, BookOpen, Award, GraduationCap, PenTool } from 'lucide-react';

import bannerImg from '../assets/banner_mindmap_hero.jpg';

interface HeroProps {
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="inicio" className="bg-white">
      {/* Banner Section com Gradiente e Iluminação Tecnológica */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#011049] via-[#041754] to-[#011049]">
        {/* Glows de fundo cibernéticos */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Coluna Esquerda: Conteúdo Tipográfico e Chamadas */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">
              {/* Badge Superior */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                <span>ESDHUBEM • Inovação Educacional</span>
              </div>

              {/* Título Principal em Linha Única */}
              <h1 className="text-xl min-[380px]:text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] xl:text-[42px] font-black text-white leading-tight tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] whitespace-nowrap">
                Desenvolvimento <span className="text-cyan-400">•</span> Bem-Estar
              </h1>

              {/* Subtítulo Dourado */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#FFC72C] leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
                Cursos Livres em Mapas Mentais
              </h2>

              {/* Slogan */}
              <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 tracking-wide leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                A Tecnologia do Escrever e do Mapear
              </p>

              {/* Linha explicativa metodológica */}
              <p className="text-xs sm:text-sm text-cyan-100/80 max-w-lg leading-relaxed pt-1">
                Capacitação com metodologia visual, fixação de conteúdo em alta velocidade e certificados reconhecidos em todo o território nacional.
              </p>
            </div>

            {/* Coluna Direita: Mapa Mental Tecnológico Iluminado sem corte */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.3)] bg-[#011049]/80 backdrop-blur-xs group">
                <img
                  src={bannerImg}
                  alt="Mapa Mental Tecnológico ESDHUBEM"
                  className="w-full h-auto object-cover object-center select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011049]/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
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
