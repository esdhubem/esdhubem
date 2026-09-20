import React from 'react';
import { METHODOLOGY_PILLARS } from '../data/coursesData';
import { MethodologyPillar } from '../types';
import { Sparkles, Users, Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface MethodologySectionProps {
  onSelectPillar: (pillarType: 'freepremium' | 'horas-complementares' | 'formacao-livre') => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onSelectPillar }) => {
  return (
    <section className="bg-white" id="metodologia-jornada">
      {/* Vibrant Golden Yellow Header Banner (Directly matching screenshot) */}
      <div className="bg-[#FFC72C] py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-y border-amber-400/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight mb-4">
            A Jornada Perfeita para o Seu Sucesso
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-normal leading-relaxed max-w-3xl mx-auto">
            Nossa metodologia educacional foi desenhada para acompanhar você em todas as fases do seu desenvolvimento, desde o aprendizado prático e acessível até a transformação total da sua carreira.
          </p>
        </div>
      </div>

      {/* 3 Pillars Grid Section */}
      <div className="py-14 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch -mt-8 sm:-mt-10 relative z-10">
            {METHODOLOGY_PILLARS.map((pillar) => {
              const isPopular = pillar.isPopular;

              return (
                <div
                  key={pillar.number}
                  className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? 'bg-white border-2 border-[#243042] shadow-xl shadow-slate-900/10 -translate-y-1 lg:-translate-y-2'
                      : 'bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                  }`}
                  id={`pillar-card-${pillar.number}`}
                >
                  {/* "Mais Procurado" Badge for Pillar 2 */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#182333] text-[#FFC72C] text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-amber-400/30">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFC72C] fill-[#FFC72C]" />
                      <span>Mais Procurado</span>
                    </div>
                  )}

                  <div>
                    {/* Top indicator & title */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm ${
                          isPopular
                            ? 'bg-[#182333] text-[#FFC72C]'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {pillar.number}
                      </span>

                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Etapa {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                      {pillar.title}
                    </h3>

                    {/* Descrição Block */}
                    <div className="mb-5 space-y-1.5">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Descrição:
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Público-alvo Block */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wide text-[#243042] flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-500" />
                        <span>Público-alvo</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.targetAudience}
                      </p>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        onSelectPillar(pillar.type);
                        const catalogEl = document.getElementById('catalogo-cursos');
                        if (catalogEl) {
                          catalogEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isPopular
                          ? 'bg-[#243042] hover:bg-[#182333] text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-[#243042] text-slate-800 hover:text-white'
                      }`}
                    >
                      <span>Ver {pillar.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
