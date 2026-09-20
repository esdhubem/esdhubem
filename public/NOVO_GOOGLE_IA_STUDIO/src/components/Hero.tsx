import React from 'react';
import { Sparkles, BookOpen, ShieldCheck, Award } from 'lucide-react';

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
              <span>Cursos Online ESDHUBEM</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] flex flex-col items-center">
              <span>Encontre o seu</span>
              <span className="text-[#FFC72C] text-3xl sm:text-4xl lg:text-5xl whitespace-nowrap mt-2">
                treinamento e desenvolvimento.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              Cursos que você precisa para aprender Desenvolvimento Pessoal, Humano, Profissional, Ético e Relacional.
            </p>
          </div>
        </div>
      </div>

      {/* Trust highlights Strip below the banner */}
      <div className="bg-white border-b border-slate-200 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            <div className="flex items-center justify-center md:justify-start lg:justify-center gap-4 pt-4 md:pt-0">
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#243042] shrink-0 shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#182333]">100% Online</h4>
                <p className="text-sm text-slate-500">Estude no seu ritmo</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-center gap-4 pt-6 md:pt-0 pl-0 md:pl-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#182333]">Certificado Válido</h4>
                <p className="text-sm text-slate-500">Aceito em faculdades</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end lg:justify-center gap-4 pt-6 md:pt-0 pr-0 md:pr-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-amber-500 shrink-0 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#182333]">Freepremium</h4>
                <p className="text-sm text-slate-500">Aulas grátis sem taxa</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
