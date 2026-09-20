import React from 'react';
import { Search, Sparkles, BookOpen, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
}) => {

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-18 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80" id="inicio">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-slate-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headings, Text & Search */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#243042]/10 border border-[#243042]/20 text-[#243042] text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Cursos Online ESDHUBEM</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Encontre o seu <br className="hidden sm:inline" />
              <span className="text-[#243042] underline decoration-[#FFC72C] decoration-4 underline-offset-8">
                treinamento e desenvolvimento
              </span>
              .
            </h1>

            {/* Exact Subtitle from user prompt */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Cursos que você precisa para aprender Desenvolvimento Pessoal, Humano, Profissional, Ético e Relacional.
            </p>

            {/* Trust highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#243042] shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">100% Online</h4>
                  <p className="text-[11px] text-slate-500">Estude no seu ritmo</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Certificado Válido</h4>
                  <p className="text-[11px] text-slate-500">Aceito em faculdades</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Freepremium</h4>
                  <p className="text-[11px] text-slate-500">Aulas grátis sem taxa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Imagem ilustrativa" with warm human development aesthetic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative framing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#243042]/20 to-[#FFC72C]/30 rounded-3xl transform rotate-2 scale-[1.02] filter blur-xs" />
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                {/* Visual Header Indicator */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                    alt="Pessoas em desenvolvimento humano e colaboração na ESDHUBEM"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  {/* "Imagem ilustrativa" caption tag specified by user */}
                  <div className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-md text-white/90 text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/20">
                    Imagem ilustrativa
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FFC72C]">
                      Educação Humanista & Integrativa
                    </p>
                    <h3 className="text-lg font-bold leading-snug">
                      Inteligência Emocional, Ética e Conexão Humana
                    </h3>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-5 bg-white flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-bold text-sm">
                      ES
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Comunidade ESDHUBEM</p>
                      <p className="text-[11px] text-slate-500">+18.000 alunos desenvolvidos</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('metodologia-jornada');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#243042] hover:text-amber-600 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Conheça a Metodologia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
