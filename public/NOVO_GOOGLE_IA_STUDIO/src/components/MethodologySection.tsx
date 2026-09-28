import React from 'react';
import { METHODOLOGY_PILLARS } from '../data/coursesData';
import { MethodologyPillar } from '../types';
import { Sparkles, Users, Award, GraduationCap, CheckCircle2, ArrowRight, Eye, FileText, ShieldCheck, Compass } from 'lucide-react';

interface MethodologySectionProps {
  onSelectPillar: (pillarType: 'freepremium' | 'capacitacao' | 'horas-complementares' | 'formacao-livre') => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onSelectPillar, onOpenCertificatePreview, onNavigate }) => {
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

      {/* 4 Pillars Horizontal Cards Section (Deitados ao invés de torres) */}
      <div className="py-14 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 -mt-8 sm:-mt-10 relative z-10">
            {METHODOLOGY_PILLARS.map((pillar) => {
              const isPopular = pillar.isPopular;

              return (
                <div
                  key={pillar.number}
                  className={`relative rounded-3xl p-6 sm:p-8 bg-white transition-all duration-300 ${
                    isPopular
                      ? 'border-2 border-[#182333] shadow-xl shadow-slate-900/10'
                      : 'border border-slate-200/90 shadow-md hover:shadow-lg hover:border-slate-300'
                  }`}
                  id={`pillar-card-${pillar.number}`}
                >
                  {/* "Mais Procurado" Badge for Popular Pillar */}
                  {isPopular && (
                    <div className="absolute -top-3.5 right-6 sm:right-10 bg-[#182333] text-[#FFC72C] text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-amber-400/30 whitespace-nowrap z-10">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFC72C] fill-[#FFC72C]" />
                      <span>Mais Procurado</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    {/* Coluna 1: Identificação, Título e Botão de Ação */}
                    <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-5 lg:pb-0 lg:pr-6">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-base shadow-xs ${
                            isPopular
                              ? 'bg-[#182333] text-[#FFC72C]'
                              : 'bg-slate-100 text-slate-800 border border-slate-200'
                          }`}
                        >
                          {pillar.number}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-extrabold text-amber-600 uppercase tracking-widest">
                            Etapa {pillar.number}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {pillar.number === '1' && '🟢 Descoberta'}
                            {pillar.number === '2' && '🔵 Ação Prática'}
                            {pillar.number === '3' && '🟡 Validação Acadêmica'}
                            {pillar.number === '4' && '🔴 Transformação'}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                        {pillar.title}
                      </h3>

                      <div>
                        <button
                          onClick={() => {
                            onSelectPillar(pillar.type);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
                            isPopular
                              ? 'bg-[#182333] hover:bg-slate-800 text-[#FFC72C]'
                              : 'bg-slate-900 hover:bg-slate-800 text-white'
                          }`}
                        >
                          <span>Ver {pillar.title}</span>
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </button>
                      </div>
                    </div>

                    {/* Coluna 2: Descrição Detalhada */}
                    <div className="lg:col-span-4 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Descrição</span>
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Coluna 3: Público-alvo Box */}
                    <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#182333] flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-500" />
                        <span>Público-alvo</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.targetAudience}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tabela de Ordem da Jornada do Aluno — Do Mais Leve ao Mais Denso */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-amber-600" />
                  <span>Jornada Pedagógica ESDHUBEM</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Ordem da Jornada do Aluno — Do Mais Leve ao Mais Denso
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                  Trilha progressiva e humanizada: cada etapa foi planejada com um objetivo pedagógico específico, desde a primeira experimentação sem compromisso até a formação com geração de renda e autoridade.
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-xs uppercase font-extrabold tracking-wider text-slate-700 bg-slate-50/80">
                    <th className="py-3.5 px-4 rounded-l-xl w-24 text-center">Etapa</th>
                    <th className="py-3.5 px-6 w-2/5">Card</th>
                    <th className="py-3.5 px-6 rounded-r-xl">Função na Jornada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <tr className="hover:bg-emerald-50/30 transition-colors">
                    <td className="py-4 px-4 text-center font-black">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black shadow-xs">
                        1
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base shrink-0">🟢</span>
                        <span>Cursos Freepremium</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-semibold">Descoberta</strong> — experimente sem risco
                    </td>
                  </tr>

                  <tr className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-4 text-center font-black">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 text-xs font-black shadow-xs">
                        2
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base shrink-0">🔵</span>
                        <span>Cursos de Capacitação</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-semibold">Ação</strong> — aprenda uma habilidade prática agora
                    </td>
                  </tr>

                  <tr className="hover:bg-amber-50/30 transition-colors">
                    <td className="py-4 px-4 text-center font-black">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-xs font-black shadow-xs">
                        3
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base shrink-0">🟡</span>
                        <span>Cursos para Horas Complementares</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-semibold">Validação Acadêmica</strong> — cumpra exigências da faculdade
                    </td>
                  </tr>

                  <tr className="hover:bg-rose-50/30 transition-colors">
                    <td className="py-4 px-4 text-center font-black">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-800 text-xs font-black shadow-xs">
                        4
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base shrink-0">🔴</span>
                        <span>Cursos de Formação Livre</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-semibold">Transformação e mergulho profundo</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Banner: Regras de Certificação */}
          <div className="mt-10 p-6 rounded-3xl bg-[#182333] text-white border border-slate-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-[#FFC72C]" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-[#FFC72C] text-[11px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Escala de Mérito Acadêmico ESDHUBEM</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Regras de Certificação & Selos de Mérito
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Conheça os critérios dos certificados Bronze, Prata, Ouro e Diamante, amparados pela Lei nº 9.394/96 e pela transparência na Pesquisa, Estudo, Evolução e Prática.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('regras-certificacao-merito');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#FFC72C] hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105"
              >
                <Award className="w-4 h-4" />
                <span>Regras de Certificação</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
