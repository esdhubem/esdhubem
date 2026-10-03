import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Building,
  GraduationCap,
  Users,
  Compass,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Mail,
  Phone,
  ExternalLink,
  BookOpen,
  Award,
  ChevronDown
} from 'lucide-react';
import { FAQ_DATA } from '../data/coursesData';

interface SobreNosPageProps {
  onBackToHome: () => void;
  onOpenValidator: () => void;
  onNavigateToCourses?: () => void;
  onNavigateToPedagogy?: () => void;
}

export const SobreNosPage: React.FC<SobreNosPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onNavigateToCourses,
  onNavigateToPedagogy
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Header Banner */}
      <div className="bg-[#182333] text-white border-b border-slate-700/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-slate-300">Institucional</span>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Sobre Nós</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC72C]/15 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-4 h-4 text-[#FFC72C] fill-[#FFC72C]" />
            <span>Escola de Desenvolvimento Humano e Bem-estar</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Sobre a ESDHUBEM
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed font-light">
            Conheça nossa história, propósito formativo, modelo de educação aberta e a visão pedagógica que une tradição, sensibilidade, rigor técnico e tecnologia.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* Card 1: Missão & Propósito */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <Sparkles className="w-6 h-6 text-[#FFC72C] fill-[#FFC72C]" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Propósito Institucional
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Nossa Missão & Propósito
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              A <strong className="text-slate-900 font-semibold">ESDHUBEM</strong> nasceu com o compromisso de democratizar o acesso à educação socioemocional, ao autoconhecimento e às práticas integrativas com rigor didático, empatia e ética.
            </p>
            <p>
              Acreditamos que o progresso pessoal e profissional caminham juntos: quando uma pessoa aprende a regular suas emoções, aprimora sua comunicação e compreende seu papel ético no mundo, toda a sociedade ao seu redor floresce.
            </p>
            <p>
              Na nossa escola livre, o conhecimento deixa de ser um fardo estático engavetado para se transformar em um <strong className="text-amber-800 font-semibold">legado vivo e circulante</strong>. Capacitamos alunos a ler criticamente, refletir com profundidade e produzir conhecimento autoral aplicável ao desenvolvimento humano.
            </p>
          </div>

          {/* Destaques em Caixas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-600" />
                Estudo & Autonomia
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Conteúdos completos e estruturados para permitir que cada estudante aprenda no seu ritmo, com liberdade intelectual e método.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Evolução Contínua
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Desenvolvimento integrado de inteligência socioemocional, pensamento crítico, liderança e habilidades tecnológicas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Prática com Impacto
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Ferramentas práticas para aplicação imediata no mercado de trabalho, em consultórios, empresas e na vida pessoal.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Pilares do Nosso Modelo Educacional */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-[#182333] flex items-center justify-center text-[#FFC72C] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Metodologia & Transparência
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Diferenciais da Nossa Escola
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <h3 className="font-bold text-slate-900 text-base">Modelo Freepremium</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Você assiste a todas as videoaulas e acessa o material didático gratuitamente. A taxa administrativa é simbólica e cobrada apenas se desejar a emissão e validação formal do certificado oficial em PDF.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <h3 className="font-bold text-slate-900 text-base">Certificados Válidos em Todo o Brasil</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Carga horária legítima com amparo na Lei nº 9.394/96 e Decreto Presidencial nº 5.154/04. Todos os certificados contam com QR Code e código alfanumérico para autenticação pública instantânea.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  03
                </span>
                <h3 className="font-bold text-slate-900 text-base">Escala de Méritos & Registro DOI</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reconhecemos o esforço intelectual: alunos que escrevem artigos e manuscritos de conclusão podem ser publicados no Blog da escola ou depositados com identificador permanente DOI via Zenodo / CERN.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                  04
                </span>
                <h3 className="font-bold text-slate-900 text-base">Saberes Integrativos & Humanistas</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Valorizamos a sabedoria ancestral e integrativa dentro da perspectiva das Ciências Humanas e Sociais, integrando saúde, autoconhecimento, liderança e ética relacional.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Identificação Institucional & Coordenação Pedagógica */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <Building className="w-6 h-6 text-[#FFC72C]" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Dados Legais e Acadêmicos
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Identificação Institucional & Coordenação Pedagógica
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500 mb-2">
                Dados Corporativos
              </h4>
              <p>
                <strong className="text-slate-900">Razão Social:</strong> ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar
              </p>
              <p>
                <strong className="text-slate-900">CNPJ:</strong> 61.928.778/0001-50
              </p>
              <p>
                <strong className="text-slate-900">Sede:</strong> São Paulo - SP - Brasil
              </p>
              <p>
                <strong className="text-slate-900">Amparo Legal:</strong> Cursos Livres amparados pelo Decreto Presidencial nº 5.154/04 e Lei de Diretrizes e Bases da Educação nº 9.394/96.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500 mb-2">
                Coordenação & Autoria Acadêmica
              </h4>
              <p>
                <strong className="text-slate-900">Coordenação Pedagógica:</strong> Profª. Silviane Silvério (Biomédica, Especialista em Práticas Integrativas & Desenvolvimento Humano)
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                <a
                  href="https://lattes.cnpq.br/7481458793724724"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Currículo Lattes iD</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://orcid.org/0000-0001-6311-1195"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-bold hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Registro ORCID iD</span>
                </a>
              </div>
              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span><strong>E-mail:</strong> esdhubem@proton.me</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span><strong>WhatsApp:</strong> (11) 960319637</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Perguntas Frequentes (FAQ) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Dúvidas Rápidas
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Perguntas Frequentes (FAQ)
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/80 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-slate-800 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 5: Ações Rápidas & Rodapé */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#182333] via-[#1E293B] to-[#0F172A] text-white shadow-2xl border border-slate-700/80 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.15),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-block bg-[#FFC72C]/20 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Comece Sua Jornada Hoje
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Faça Parte da Comunidade ESDHUBEM
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore nossos cursos livres, confira a legitimidade dos certificados emitidos ou entre em contato com a coordenação pedagógica.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenValidator}
                className="inline-flex items-center gap-2 bg-[#FFC72C] hover:bg-[#ffcf47] text-[#182333] font-black text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-[#FFC72C]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Validar Certificado</span>
              </button>

              {onNavigateToCourses && (
                <button
                  onClick={onNavigateToCourses}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Ver Catálogo de Cursos</span>
                </button>
              )}

              {onNavigateToPedagogy && (
                <button
                  onClick={onNavigateToPedagogy}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Diretrizes Pedagógicas</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
