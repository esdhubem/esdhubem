import React, { useState } from 'react';
import {
  Clock,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ExternalLink,
  Users,
  Star,
  BookOpen,
  ShieldCheck,
  Award,
  ArrowLeft,
  Signal,
  Tv,
  Globe,
  Share2,
  Sparkles,
  Download,
  Info
} from 'lucide-react';

interface CourseDetailPageProps {
  onBackToHome: () => void;
  onEnroll: () => void;
  onOpenValidator: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  onBackToHome,
  onEnroll,
  onOpenValidator
}) => {
  // Accordion state for modules
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  const toggleModule = (index: number) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((i) => i !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      
      {/* Breadcrumb Bar */}
      <div className="bg-[#182333] border-b border-slate-700/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <button
              onClick={onBackToHome}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Cursos Freepremium
            </button>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold truncate">
              Comunicação Assertiva com a Liderança
            </span>
          </div>
        </div>
      </div>

      {/* Course Hero Header (Exact Dark Slate Navy & Golden Yellow theme adapted from user's GitHub HTML) */}
      <header className="bg-[#243042] text-white relative overflow-hidden shadow-lg border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto py-10 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
          
          {/* Hero Left Content */}
          <div className="w-full md:w-2/3 flex flex-col items-start">
            {/* Category Tag matching brand */}
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#FFC72C] text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Cursos Freepremium
              </span>
              <span className="bg-white/10 text-slate-200 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
                Curso Destaque
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
              Comunicação Assertiva com a Liderança
            </h1>

            <p className="text-slate-300 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
              Aprenda a expressar suas ideias com firmeza, clareza e respeito no ambiente corporativo, desenvolvendo uma liderança forte, empática e inspiradora para você e sua equipe.
            </p>

            {/* Metrics Chips */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Clock className="w-4 h-4 text-[#FFC72C]" />
                <span>Carga Horária: <strong>40 horas</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <GraduationCap className="w-4 h-4 text-[#FFC72C]" />
                <span>Com Certificado Oficial</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-amber-300">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span className="font-bold text-white">4.9</span>
                <span className="text-slate-300 text-xs">(1.240 avaliações)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-slate-300">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>+3.800 alunos</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Banner */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 max-w-sm w-full group">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                alt="Comunicação Assertiva com a Liderança"
                className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#182333] via-[#182333]/30 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="bg-[#182333]/90 backdrop-blur-xs px-2.5 py-1 rounded-md font-semibold text-[#FFC72C]">
                  ESDHUBEM Oficial
                </span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-[11px]">
                  100% Online
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Subtle geometric watermark */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <BookOpen className="w-[450px] h-[450px] text-white" />
        </div>
      </header>

      {/* Main Course Content Section */}
      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Content (Left Column - 2/3) */}
          <div className="w-full lg:w-2/3 space-y-8">
            
            {/* Box 1: Sobre o Curso, O que você vai aprender & Público-Alvo */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-10 space-y-8">
              
              {/* Sobre o Curso */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#182333] mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                    <Info className="w-4 h-4" />
                  </div>
                  <span>Sobre o Curso</span>
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">
                  Este curso oferece uma visão completa e aprofundada sobre como planejar, estruturar e aplicar técnicas de comunicação assertiva na rotina de equipes e líderes. Através de metodologias práticas fundamentadas na psicologia relacional e nas práticas integrativas, você compreenderá o que as organizações modernas esperam de um profissional capacitado para dialogar com clareza e autoridade moral.
                </p>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Você aprenderá desde o gerenciamento de ruídos e vieses interpessoais até a condução de feedbacks construtivos, alinhamento de expectativas com a alta gestão e estratégias para fortalecer sua presença e influência positiva no ambiente corporativo.
                </p>
              </div>

              {/* O que você vai aprender */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xl sm:text-2xl font-bold text-[#182333] mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>O que você vai aprender</span>
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>O que é comunicação assertiva e por que ela é indispensável na liderança;</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Como selecionar os argumentos certos e o timing ideal para conversas difíceis;</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Linguagem não-verbal, postura corporal e entonação de voz assertiva;</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>As 4 etapas da Comunicação Não-Violenta (CNV) aplicadas à liderança;</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Gestão de conflitos corporativos sem desgaste emocional;</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Marketing pessoal, posicionamento e construção de autoridade saudável.</span>
                  </li>
                </ul>
              </div>

              {/* Público-Alvo */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xl sm:text-2xl font-bold text-[#182333] mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <span>Público-Alvo</span>
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Estudantes universitários em busca de horas complementares averbadas, recém-formados, analistas, supervisores, gestores de equipe e profissionais de todas as áreas (Saúde, Negócios, Educação, Audiovisual e Tecnologia) que desejam desenvolver uma postura comunicativa firme, empática e respeitosa.
                </p>
              </div>

            </div>

            {/* Box 2: Conteúdo Programático (Interactive Accordion) */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-10 space-y-6">
              
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-[#182333] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>Conteúdo Programático</span>
                </h3>
                <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                  15 Lições • 3 Módulos
                </span>
              </div>

              {/* Accordion Módulo 1 */}
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <div
                  onClick={() => toggleModule(0)}
                  className="bg-slate-50 hover:bg-slate-100 px-5 py-4 flex justify-between items-center cursor-pointer transition select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#243042] text-[#FFC72C] text-xs font-black flex items-center justify-center">
                      1
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#182333]">
                      Módulo 1: Fundamentos da Comunicação Assertiva
                    </h4>
                  </div>
                  {expandedModules.includes(0) ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </div>

                {expandedModules.includes(0) && (
                  <div className="p-5 bg-white space-y-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      Conceito, importância e análise de perfis comunicativos no mercado. Entendendo a diferença entre passividade, agressividade e assertividade com base em estudos práticos.
                    </p>
                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 1.1: O Espectro da Comunicação Humana (Passivo, Agressivo e Assertivo)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 1.2: Barreiras e Ruídos Psicológicos na Mensagem</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 1.3: As 4 Etapas da Comunicação Não-Violenta</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion Módulo 2 */}
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <div
                  onClick={() => toggleModule(1)}
                  className="bg-slate-50 hover:bg-slate-100 px-5 py-4 flex justify-between items-center cursor-pointer transition select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#243042] text-[#FFC72C] text-xs font-black flex items-center justify-center">
                      2
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#182333]">
                      Módulo 2: Postura e Comportamento
                    </h4>
                  </div>
                  {expandedModules.includes(1) ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </div>

                {expandedModules.includes(1) && (
                  <div className="p-5 bg-white space-y-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      Linguagem corporal, microexpressões faciais, impostação vocal e escuta ativa. Como transmitir segurança e tranquilidade em reuniões de alta pressão.
                    </p>
                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 2.1: Microexpressões e Alinhamento Não-Verbal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 2.2: O Poder da Escuta Ativa e Empatia Real</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 2.3: Inteligência Socioemocional e Autodomínio</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion Módulo 3 */}
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <div
                  onClick={() => toggleModule(2)}
                  className="bg-slate-50 hover:bg-slate-100 px-5 py-4 flex justify-between items-center cursor-pointer transition select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#243042] text-[#FFC72C] text-xs font-black flex items-center justify-center">
                      3
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#182333]">
                      Módulo 3: Aplicando no Ambiente Corporativo
                    </h4>
                  </div>
                  {expandedModules.includes(2) ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </div>

                {expandedModules.includes(2) && (
                  <div className="p-5 bg-white space-y-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      Casos reais de negociação, feedback 360°, desescalada de conflitos interpessoais, e-mails executivos assertivos e condução de reuniões produtivas.
                    </p>
                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 3.1: Como Dar e Receber Feedbacks Construtivos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 3.2: Dizer "Não" com Elegância e Profissionalismo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243042]" />
                        <span>Aula 3.3: Liderança Inspiradora e Plano de Ação Prático</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Sidebar (Right Column - 1/3) */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Teacher Profile Card (Exact from user's GitHub HTML: Professora Silviane Silvério) */}
            <div className="bg-white border border-slate-200 shadow-md rounded-2xl overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center">
                
                {/* Profile Photo with verified badge */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-[#243042] shadow-md bg-slate-100 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                      alt="Professora Silviane Silvério"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#FFC72C] text-slate-950 p-1 rounded-full shadow-xs" title="Docente Certificada ESDHUBEM">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#182333] mb-1">
                  Professora Silviane Silvério
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  Graduada em Biomedicina, Pós-graduada em Práticas Integrativas e Complementares. Especialista em Desenvolvimento Humano e Comunicação Assertiva.
                </p>

                {/* Currículo Lattes Button (From GitHub HTML) */}
                <a
                  href="http://lattes.cnpq.br/7481458793724724"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[#243042] hover:text-[#FFC72C] hover:bg-[#243042] bg-slate-100 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all"
                  title="Acessar Currículo Lattes no CNPq"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>CURRÍCULO LATTES</span>
                </a>
              </div>
            </div>

            {/* Course Purchase / Enrollment Card (Sticky on desktop) */}
            <div className="bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden sticky top-24">
              
              {/* Card Image Banner */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
                  alt="Comunicação e Liderança"
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-4 flex gap-2">
                  <span className="bg-[#243042]/90 backdrop-blur-xs text-[#FFC72C] text-xs font-bold px-2.5 py-1 rounded-md">
                    Comunicação & Liderança
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6">
                
                {/* Price Display */}
                <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-3xl font-black text-[#182333]">Gratuito</span>
                    <span className="block text-[11px] text-emerald-700 font-semibold">
                      Acesso livre Freepremium
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 line-through text-sm">R$ 150,00</span>
                    <span className="block text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full mt-0.5">
                      100% OFF
                    </span>
                  </div>
                </div>

                {/* Main Action Button (Inscrição) */}
                <button
                  onClick={onEnroll}
                  className="w-full bg-[#243042] hover:bg-[#182333] active:scale-95 transition-all text-[#FFC72C] font-extrabold text-sm py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                  id="btn-inscrever-agora"
                >
                  <span>Inscreva-se Agora (Acesso Imediato)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Course Metadata List (Exact from GitHub HTML) */}
                <ul className="text-xs text-slate-600 space-y-3.5">
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="flex items-center gap-2 text-slate-500">
                      <Signal className="w-4 h-4 text-slate-400" />
                      <span>Nível</span>
                    </span>
                    <span className="font-bold text-[#182333]">Iniciante ao Intermediário</span>
                  </li>

                  <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>Duração</span>
                    </span>
                    <span className="font-bold text-[#182333]">40 horas certificadas</span>
                  </li>

                  <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="flex items-center gap-2 text-slate-500">
                      <Tv className="w-4 h-4 text-slate-400" />
                      <span>Aulas</span>
                    </span>
                    <span className="font-bold text-[#182333]">15 Lições em Vídeo HD</span>
                  </li>

                  <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="flex items-center gap-2 text-slate-500">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <span>Idioma</span>
                    </span>
                    <span className="font-bold text-[#182333]">Português (Brasil)</span>
                  </li>

                  <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="flex items-center gap-2 text-slate-500">
                      <Award className="w-4 h-4 text-[#FFC72C]" />
                      <span>Certificado</span>
                    </span>
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Incluso (Lei 9.394/96)
                    </span>
                  </li>
                </ul>

                {/* Validation guarantee note */}
                <div className="pt-2 text-center">
                  <button
                    onClick={onOpenValidator}
                    className="text-[11px] text-[#243042] font-semibold hover:underline flex items-center justify-center gap-1 mx-auto cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Validação e autenticidade pública garantida</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
