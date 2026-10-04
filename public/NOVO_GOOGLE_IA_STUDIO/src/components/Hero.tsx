import React from 'react';
import { Sparkles, Lock, Award, GraduationCap, Heart } from 'lucide-react';

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
              <span>CURSOS E TREINAMENTOS</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] flex flex-col items-center">
              <span>ESDHUBEM</span>
              <span className="text-[#FFC72C] text-3xl sm:text-4xl lg:text-5xl whitespace-normal sm:whitespace-nowrap mt-2">
                Cursos Livres.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              Aprenda. Conquiste seu certificado! Se quiser, escreva e vá mais além.
            </p>
          </div>
        </div>
      </div>

      {/* Trust highlights Strip below the banner */}
      <div className="bg-white border-b border-slate-200 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-y-8 lg:gap-4">
            
            {/* 1. Seu texto é sempre seu */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#182333]">Seu texto é sempre seu</h4>
                <p className="text-xs text-slate-500 leading-tight">Proteção à autoria garantida</p>
              </div>
            </div>

            {/* 2. 4 Níveis de reconhecimento */}
            <div className="flex items-center justify-center lg:justify-center gap-4 sm:border-l border-slate-200 sm:pl-6 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#182333]">4 Níveis de reconhecimento</h4>
                <p className="text-xs text-slate-500 leading-tight font-medium">Bronze → Prata → Ouro → Diamante</p>
              </div>
            </div>

            {/* 3. Horas complementares */}
            <div className="flex items-center justify-center lg:justify-center gap-4 lg:border-l border-slate-200 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#182333]">Horas complementares</h4>
                <p className="text-xs text-slate-500 leading-tight">Válidas com base legal</p>
              </div>
            </div>

            {/* 4. Desenvolvimento integral */}
            <div className="flex items-center justify-center lg:justify-center gap-4 sm:border-l border-slate-200 sm:pl-6 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Heart className="w-6 h-6 fill-blue-500/20" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#182333]">Desenvolvimento integral</h4>
                <p className="text-xs text-slate-500 leading-tight">Conhecimento, escrita e bem-estar</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
