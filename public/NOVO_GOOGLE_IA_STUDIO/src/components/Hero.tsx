import React from 'react';
import { Sparkles, BookOpen, Award, GraduationCap, PenTool } from 'lucide-react';

interface HeroProps {
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="inicio" className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80"
            alt="Pessoas em desenvolvimento humano"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-[#182333]/70" />
        </div>

        {/* Content over image */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mb-20 sm:mb-32">
          <div className="max-w-3xl space-y-6 flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg">
              <Sparkles className="w-4 h-4 text-[#FFC72C]" />
              <span>ESDHUBEM • CURSOS LIVRES</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] max-w-4xl">
              Cursos Livres para quem quer aprender e se desenvolver
            </h1>

            {/* Subtitle */}
            <div className="space-y-2 max-w-3xl">
              <p className="text-base sm:text-lg lg:text-xl text-[#FFC72C] font-semibold leading-relaxed">
                Cursos de capacitação, formação e desenvolvimento pessoal, profissional e empresarial.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium leading-relaxed">
                Aprenda com vídeo-aulas. Mapas Mentais. Receba seu certificado.
              </p>
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
