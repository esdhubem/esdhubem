import React, { useState } from 'react';
import { Course } from '../types';
import {
  X,
  Clock,
  Star,
  Users,
  CheckCircle2,
  BookOpen,
  Award,
  Play,
  Share2,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  const [activeTab, setActiveTab] = useState<'ementa' | 'publico' | 'metodologia'>('ementa');
  const [copied, setCopied] = useState(false);

  if (!course) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Course Banner */}
        <div className="relative h-48 sm:h-56 w-full bg-stone-900 shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Pillar badge & share */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-[#182333] text-[#FFC72C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30 shadow-xs">
              {course.pillar === 'freepremium'
                ? 'Curso Freepremium'
                : course.pillar === 'horas-complementares'
                ? 'Horas Complementares'
                : 'Formação Livre'}
            </span>
            <button
              onClick={handleShare}
              className="bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Compartilhar curso"
            >
              <Share2 className="w-3.5 h-3.5" />
              {copied && <span className="text-[10px] pr-1">Copiado!</span>}
            </button>
          </div>

          {/* Title & Meta on Hero */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-bold text-[#FFC72C] uppercase tracking-wide">
              {course.category}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold leading-snug">
              {course.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-slate-200 mt-2 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#FFC72C]" />
                {course.hours} horas registradas
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#FFC72C] fill-[#FFC72C]" />
                {course.rating.toFixed(1)} ({course.studentsCount} alunos)
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#FFC72C]" />
                {course.modulesCount} módulos
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs inside modal */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-6 text-sm font-bold">
          <button
            onClick={() => setActiveTab('ementa')}
            className={`pb-3 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'ementa'
                ? 'border-[#243042] text-[#243042]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Conteúdo Programático
          </button>
          <button
            onClick={() => setActiveTab('publico')}
            className={`pb-3 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'publico'
                ? 'border-[#243042] text-[#243042]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Público-alvo & Objetivos
          </button>
          <button
            onClick={() => setActiveTab('metodologia')}
            className={`pb-3 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'metodologia'
                ? 'border-[#243042] text-[#243042]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Certificação & Validade
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm leading-relaxed">
          {activeTab === 'ementa' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  Visão Geral do Treinamento
                </h4>
                <p className="text-slate-600">{course.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-[#243042] mb-3">
                  Módulos e Aulas Inclusas
                </h4>
                <div className="space-y-2.5">
                  {course.syllabus.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="font-medium text-slate-800">{item}</p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Videoaula explicativa + Material complementar em PDF
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'publico' && (
            <div className="space-y-4">
              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl">
                <h4 className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-600" />
                  Perfil do Estudante Recomendado
                </h4>
                <p className="text-slate-700">{course.targetAudience}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Competências Desenvolvidas:</h4>
                <ul className="space-y-1.5 text-slate-600 list-disc pl-5">
                  <li>Capacidade de autorregulação e maturidade socioemocional.</li>
                  <li>Comunicação empática em momentos de tensão interpessoal.</li>
                  <li>Ferramentas práticas de aplicação imediata no ambiente profissional e pessoal.</li>
                  <li>Pensamento crítico, humanista e ético embasado cientificamente.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'metodologia' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <h4 className="font-bold text-[#243042] text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  Validade Oficial e Legislação
                </h4>
                <p className="text-xs text-slate-700">
                  Certificado emitido pela <strong>ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61928778000150)</strong> em total conformidade com a Lei de Diretrizes e Bases da Educação Nacional (Lei 9.394/96).
                </p>
                <p className="text-xs text-slate-700">
                  Inclui autenticidade via QR Code e código alfanumérico com consulta pública instantânea para faculdades, empresas e conselhos de classe.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block">Carga Horária</span>
                  <span className="text-slate-500">{course.hours} horas expressas</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block">Formato</span>
                  <span className="text-slate-500">100% Online Assíncrono</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 font-medium block">
              Condição de Acesso:
            </span>
            <span className="text-sm font-bold text-[#243042]">
              {course.priceNote}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl text-slate-600 hover:bg-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                onEnroll(course);
                onClose();
              }}
              className="flex-1 sm:flex-initial py-2.5 px-6 rounded-xl bg-[#243042] hover:bg-[#182333] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
              <span>Iniciar Aulas Imediatamente</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
