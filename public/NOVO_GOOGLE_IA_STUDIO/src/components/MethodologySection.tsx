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
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Aqui oferecemos uma oportunidade <br />
            que pode ir além do curso.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-normal leading-relaxed max-w-3xl mx-auto">
            Na ESDHUBEM o seu curso livre pode virar autoria publicada. Escolha o seu percurso, desenvolva produções autorais e avance na Escala de Autoria ESDHUBEM.
          </p>
        </div>
      </div>

      {/* Seção Modalidades de Formação — Conheça os Cursos Livres da ESDHUBEM */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200" id="modalidades-formacao-home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              <ClipboardList className="w-3.5 h-3.5 text-blue-600" />
              <span>Modalidades de Formação</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#182333] tracking-tight">
              Conheça os Cursos Livres da ESDHUBEM!
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Aqui na nossa escola temos várias formas de ensino. Escolha a modalidade ideal para o seu momento de aprendizado, complementação acadêmica ou evolução profissional.
            </p>
          </div>

          {/* 8 Modalities Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {/* 1. Freepremium */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('modalidades-formacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🟢</span>
                  <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Descoberta
                  </span>
                </div>
                <h4 className="font-extrabold text-[#182333] text-base group-hover:text-emerald-600 transition-colors">
                  Cursos Freepremium
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Aprenda sem barreiras. Assista a todas as videoaulas de forma 100% gratuita para testar o conteúdo, fazer os testes de múltipla escolha e conhecer nossa metodologia. Você só paga taxa de certificado Bronze se quiser o documento oficial.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-bold mb-0.5">Público-alvo:</strong>
                  <span className="line-clamp-2">Estudantes e profissionais que buscam conhecimento rápido sem custo inicial.</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. Capacitação */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('modalidades-formacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🔵</span>
                  <span className="text-[11px] font-bold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-200">
                    Ação Prática
                  </span>
                </div>
                <h4 className="font-extrabold text-[#182333] text-base group-hover:text-blue-600 transition-colors">
                  Cursos de Capacitação
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Cursos práticos e objetivos, desenhados para quem já atua no mercado e precisa de ferramentas aplicáveis imediatamente. Foco no "saber fazer": protocolos, técnicas e metodologias que geram resultado real.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-bold mb-0.5">Público-alvo:</strong>
                  <span className="line-clamp-2">Profissionais que precisam atualizar competências e resolver demandas da rotina.</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Horas Complementares */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('modalidades-formacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🟡</span>
                  <span className="text-[11px] font-bold bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full border border-amber-200">
                    Validação Acadêmica
                  </span>
                </div>
                <h4 className="font-extrabold text-[#182333] text-base group-hover:text-amber-600 transition-colors">
                  Horas Complementares
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Cursos estruturados para atender diretamente às exigências de Atividades Complementares de graduação e pós-graduação, com certificado detalhado especificando carga horária, ementa e dados institucionais.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-bold mb-0.5">Público-alvo:</strong>
                  <span className="line-clamp-2">Universitários de qualquer período e área que precisam cumprir horas para colar grau.</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 4. Formação Livre */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('modalidades-formacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-rose-400 hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🔴</span>
                  <span className="text-[11px] font-bold bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full border border-rose-200">
                    Transformação
                  </span>
                </div>
                <h4 className="font-extrabold text-[#182333] text-base group-hover:text-rose-600 transition-colors">
                  Formação Livre
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Jornadas completas de aprendizado para quem quer dominar uma área do início ao fim, combinando teoria consistente, prática orientada e estudos de caso reais para uma visão ampla e profunda.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-bold mb-0.5">Público-alvo:</strong>
                  <span className="line-clamp-2">Pessoas em transição de carreira ou que buscam uma base sólida e aprofundada.</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 5. Treinamentos Corporativos */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('categoria:treinamentos-palestras-corporativas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-purple-400 hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🟣</span>
                  <span className="text-[11px] font-bold bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full border border-purple-200">
                    Desempenho Profissional
                  </span>
                </div>
                <h4 className="font-extrabold text-[#182333] text-base group-hover:text-purple-600 transition-colors">
                  Treinamentos Corporativos
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Programas desenvolvidos sob medida para equipes, empresas e instituições. Foco em alinhar processos, capacitar colaboradores, melhorar o clima organizacional e desenvolver lideranças ativas.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-bold mb-0.5">Público-alvo:</strong>
                  <span className="line-clamp-2">Gestores de RH, líderes de equipe e diretores de empresas e terceiro setor.</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 6. Autoria e Destaque */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('regras-certificacao-merito');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🟣</span>
                  <span className="text-[11px] font-bold bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    Desenvolvimento da Escrita
                  </span>
                </div>
                <h4 className="font-extrabold text-[#182333] text-base group-hover:text-indigo-600 transition-colors">
                  Autoria e Destaque
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Aprenda a estruturar, escrever e publicar do texto prático ao livro, com reconhecimento Prata, Ouro ou Diamante. Transforme seu aprendizado em conhecimento compartilhado e credibilidade.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-bold mb-0.5">Público-alvo:</strong>
                  <span className="line-clamp-2">Estudantes, pesquisadores, terapeutas e profissionais que desejam publicar.</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 7. Aprofundamento Profissional — Área da Saúde */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('categoria:aprofundamento-profissional-saude');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-sky-400 hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">💙</span>
                  <span className="text-[11px] font-bold bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-full border border-sky-200">
                    Área da Saúde
                  </span>
                </div>
                <h4 className="font-extrabold text-[#182333] text-base group-hover:text-sky-600 transition-colors">
                  Aprofundamento na Saúde
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Cursos exclusivos para graduados em saúde. Espaço de atualização e desenvolvimento técnico fundamentado (não se tratam de pós-graduação). Exige comprovação de nível superior.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-bold mb-0.5">Público-alvo:</strong>
                  <span className="line-clamp-2">Enfermeiros, médicos, fisioterapeutas, nutricionistas, psicólogos e terapeutas graduados.</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 8. Workshop de Orientação de Carreira */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('categoria:workshop-orientacao-carreira');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-orange-400 hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🧭</span>
                  <span className="text-[11px] font-bold bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded-full border border-orange-200">
                    Transformação Profissional
                  </span>
                </div>
                <h4 className="font-extrabold text-[#182333] text-base group-hover:text-orange-600 transition-colors">
                  Orientação de Carreira
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Análise dos novos rumos do mercado: carreiras em transformação, mobilidade entre funções e o que você pode estudar agora para se manter relevante e preparado para o futuro do trabalho.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-bold mb-0.5">Público-alvo:</strong>
                  <span className="line-clamp-2">Quem deseja planejar com clareza quais caminhos seguir e habilidades desenvolver.</span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Action to Full Modalities Page */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('modalidades-formacao');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#182333] hover:bg-[#243042] text-[#FFC72C] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <ClipboardList className="w-4 h-4 text-[#FFC72C]" />
              <span>Ver Guia Completo das Modalidades de Formação</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Quadro Escala de Autoria ESDHUBEM — Tipos de trabalho para concluir ou avançar no curso */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Conheça a Escala de Autoria ESDHUBEM
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Conheça os tipos de produção e trabalho para concluir a formação e alcançar os selos da nossa escola:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="relative rounded-2xl border-2 border-amber-700/30 bg-gradient-to-b from-amber-50 to-orange-50 p-6 text-center shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3">🥉</div>
              <h4 className="text-lg font-extrabold text-amber-800 mb-2">Bronze</h4>
              <p className="text-sm font-bold text-slate-700 italic mb-2">Eu aprendi.</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Produção de conclusão relacionada à formação.</p>
            </div>
            <div className="relative rounded-2xl border-2 border-slate-300 bg-gradient-to-b from-slate-50 to-slate-100 p-6 text-center shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3">🥈</div>
              <h4 className="text-lg font-extrabold text-slate-700 mb-2">Prata</h4>
              <p className="text-sm font-bold text-slate-700 italic mb-2">Eu escrevi.</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Artigo autoral publicado no Blog ESDHUBEM.</p>
            </div>
            <div className="relative rounded-2xl border-2 border-yellow-400/60 bg-gradient-to-b from-yellow-50 to-amber-50 p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3">🥇</div>
              <h4 className="text-lg font-extrabold text-yellow-700 mb-2">Ouro</h4>
              <p className="text-sm font-bold text-slate-700 italic mb-2">Eu pesquisei.</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Desenvolvimento de um Manuscrito de Conclusão de Curso — MCC.</p>
            </div>
            <div className="relative rounded-2xl border-2 border-cyan-300/60 bg-gradient-to-b from-cyan-50 to-sky-50 p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-cyan-200/50">
              <div className="text-4xl mb-3">💎</div>
              <h4 className="text-lg font-extrabold text-cyan-700 mb-2">Diamante</h4>
              <p className="text-sm font-bold text-slate-700 italic mb-2">Eu criei uma obra.</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Desenvolvimento e publicação de um livro autoral.</p>
            </div>
          </div>

          {/* Strategic Banner: Regras de Certificação (Posicionado diretamente abaixo dos 4 cards) */}
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
      </section>
    </section>
  );
};
