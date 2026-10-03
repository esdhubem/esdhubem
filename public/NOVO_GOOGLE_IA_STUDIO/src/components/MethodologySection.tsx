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
      {/* Vibrant Golden Yellow Header Banner */}
      <div className="bg-[#FFC72C] py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-y border-amber-400/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight mb-4">
            Aqui oferecemos uma oportunidade que pode ir além do curso.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-normal leading-relaxed max-w-3xl mx-auto">
            Aqui na ESDHUBEM o seu curso livre pode virar autoria publicada. Você pode escolher o seu percurso e desenvolver produções autorais e avançar na Escala de Autoria ESDHUBEM.
          </p>
        </div>
      </div>

      {/* Seção da Jornada Pedagógica ESDHUBEM */}
      <div className="py-14 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Strategic Banner: Regras de Certificação */}
          <div className="p-6 rounded-3xl bg-[#182333] text-white border border-slate-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-[#FFC72C]" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-[#FFC72C] text-[11px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Escala de Autoria ESDHUBEM</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Regras de Certificação & Selos de Autoria
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
