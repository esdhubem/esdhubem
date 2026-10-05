import React from 'react';
import {
  Sparkles,
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Briefcase,
  Compass,
  HeartPulse,
  PenTool,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  ClipboardList
} from 'lucide-react';

interface ModalidadesFormacaoPageProps {
  onBackToHome: () => void;
  onNavigate?: (sectionId: string) => void;
  onOpenValidator?: () => void;
}

export const ModalidadesFormacaoPage: React.FC<ModalidadesFormacaoPageProps> = ({
  onBackToHome,
  onNavigate,
  onOpenValidator
}) => {
  const modalidades = [
    {
      id: 'freepremium',
      title: 'Cursos Freepremium',
      badge: 'Descoberta',
      dotColor: 'bg-emerald-500 text-emerald-100',
      borderHover: 'hover:border-emerald-400',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      descricao:
        'Aprenda sem barreiras. Assista a todas as videoaulas de forma 100% gratuita para testar o conteúdo, fazer os testes de múltipla escolha e conhecer nossa metodologia. Você só paga uma taxa de emissão do certificado Bronze se decidir que quer o documento oficial.',
      publico:
        'Estudantes e profissionais que buscam conhecimento rápido, querem validar a qualidade do curso antes de investir ou precisam apenas do aprendizado prático imediato sem custo inicial.'
    },
    {
      id: 'capacitacao',
      title: 'Cursos de Capacitação',
      badge: 'Ação Prática',
      dotColor: 'bg-blue-500 text-blue-100',
      borderHover: 'hover:border-blue-400',
      tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      descricao:
        'Cursos práticos e objetivos, desenhados para quem já atua no mercado e precisa de ferramentas aplicáveis imediatamente. Foco no "saber fazer": protocolos, técnicas, metodologias e habilidades profissionais que geram resultado real no consultório, na empresa ou no projeto pessoal.',
      publico:
        'Profissionais em atividade que precisam atualizar competências, aprender uma nova ferramenta de trabalho ou resolver demandas específicas da sua rotina profissional.'
    },
    {
      id: 'horas-complementares',
      title: 'Cursos de Horas Complementares',
      badge: 'Foco em Validação Acadêmica',
      dotColor: 'bg-amber-500 text-amber-100',
      borderHover: 'hover:border-amber-400',
      tagBg: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
      descricao:
        'Cursos estruturados para atender diretamente às exigências de Atividades Complementares de cursos de graduação e pós-graduação. Conteúdo alinhado às diretrizes do MEC para cursos livres, com certificado detalhado que especifica carga horária, conteúdo programático e dados da instituição.',
      publico:
        'Universitários de qualquer período e área que precisam cumprir a carga horária complementar exigida pela sua faculdade para poder colar grau.'
    },
    {
      id: 'formacao-livre',
      title: 'Cursos de Formação Livre',
      badge: 'Transformação',
      dotColor: 'bg-rose-500 text-rose-100',
      borderHover: 'hover:border-rose-400',
      tagBg: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: <BookOpen className="w-6 h-6 text-rose-600" />,
      descricao:
        'Jornadas completas de aprendizado para quem quer dominar uma área do início ao fim. Diferente de um curso rápido, a formação livre oferece uma visão ampla e profunda, combinando teoria consistente, prática orientada e estudos de caso reais.',
      publico:
        'Pessoas em transição de carreira, iniciantes que querem uma base sólida antes de atuar ou qualquer pessoa que deseja um mergulho profundo e transformador em um tema.'
    },
    {
      id: 'corporativos',
      title: 'Treinamentos Corporativos',
      badge: 'Desempenho Profissional',
      dotColor: 'bg-purple-500 text-purple-100',
      borderHover: 'hover:border-purple-400',
      tagBg: 'bg-purple-50 text-purple-700 border-purple-200',
      icon: <Users className="w-6 h-6 text-purple-600" />,
      descricao:
        'Programas desenvolvidos sob medida para equipes, empresas e instituições. Foco em alinhar processos, capacitar colaboradores em rotinas específicas, melhorar o clima organizacional e desenvolver lideranças com metodologias ativas e mensuração de resultados.',
      publico:
        'Gestores de RH, líderes de equipe, diretores de empresas e organizações do terceiro setor que precisam capacitar seus times com agilidade e qualidade pedagógica comprovada.'
    },
    {
      id: 'autoria-destaque',
      title: 'Autoria e Destaque',
      badge: 'Desenvolvimento da Escrita',
      dotColor: 'bg-indigo-500 text-indigo-100',
      borderHover: 'hover:border-indigo-400',
      tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      icon: <PenTool className="w-6 h-6 text-indigo-600" />,
      descricao:
        'Aprenda a estruturar, escrever e publicar. Do texto prático ao livro, com reconhecimento Prata, Ouro ou Diamante. Transforme o que você aprendeu em conhecimento compartilhado e construa sua presença e credibilidade intelectual.',
      publico:
        'Estudantes, pesquisadores, terapeutas e profissionais que desejam ir além do certificado, organizar suas ideias e publicar artigos, ensaios ou livros autorais.'
    },
    {
      id: 'saude',
      title: 'Aprofundamento Profissional',
      badge: 'Área da Saúde',
      dotColor: 'bg-sky-500 text-sky-100',
      borderHover: 'hover:border-sky-400',
      tagBg: 'bg-sky-50 text-sky-700 border-sky-200',
      icon: <HeartPulse className="w-6 h-6 text-sky-600" />,
      descricao:
        'Cursos exclusivos para graduados de nível superior da área da saúde. Espaço de atualização, troca de experiência e desenvolvimento técnico — não se tratam de pós-graduação, mas de aprofundamento profissional prático e fundamentado. Para participar, é necessário comprovar formação superior. Foco em conteúdos relevantes, boas práticas e evolução contínua da atuação.',
      publico:
        'Enfermeiros, médicos, fisioterapeutas, nutricionistas, psicólogos, terapeutas e demais profissionais já formados que buscam atualização, ampliação de repertório e aperfeiçoamento sem precisar ingressar em programa de pós-graduação.'
    },
    {
      id: 'carreira',
      title: 'Workshop de Orientação de Carreira',
      badge: 'Transformação Profissional',
      dotColor: 'bg-amber-600 text-amber-100',
      borderHover: 'hover:border-amber-500',
      tagBg: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: <Compass className="w-6 h-6 text-amber-700" />,
      descricao:
        'Análise dos novos rumos do mercado: quais carreiras estão se transformando, quais estão surgindo e quais tendências redesenham o mundo do trabalho. Você vai entender para onde vai a sua área, como ocorre a mobilidade entre funções, o que outros profissionais já estão fazendo e, principalmente, o que pode estudar agora para se manter relevante e preparado para o que vem a seguir.',
      publico:
        'Quem está em dúvida sobre o futuro da profissão, deseja mudar de área, precisa se reinventar no mercado ou quer planejar com clareza quais caminhos seguir e quais conhecimentos desenvolver para não ficar para trás.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-24">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-[#182333] border-b border-slate-700/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-slate-300">Certificação & Validação</span>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Modalidades de Formação</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FFC72C]" />
            <span>ESDHUBEM • Guia de Formação</span>
          </div>
        </div>
      </div>

      {/* Header Banner */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <ClipboardList className="w-4 h-4" />
            <span>Guia Acadêmico & Profissional</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Modalidades de Formação
          </h1>

          <p className="text-[#FFC72C] text-lg sm:text-2xl font-bold leading-relaxed">
            Aqui nós temos diversas Modalidades de Cursos Livres!
          </p>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Aqui na nossa escola temos várias formas de ensino. Escolha a modalidade ideal para o seu momento de aprendizado, complementação acadêmica ou evolução profissional.
          </p>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Modalidades Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modalidades.map((m) => (
            <div
              key={m.id}
              className={`bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm transition-all duration-200 flex flex-col justify-between space-y-6 ${m.borderHover} hover:shadow-md`}
            >
              <div className="space-y-4">
                {/* Header Card */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-xs">
                      {m.icon}
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#182333] tracking-tight">
                        {m.title}
                      </h2>
                      <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border mt-1 ${m.tagBg}`}>
                        {m.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Descrição */}
                <div className="space-y-1.5 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Descrição:
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {m.descricao}
                  </p>
                </div>

                {/* Público-alvo */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Público-alvo:
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {m.publico}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              {onNavigate && (
                <div className="pt-2 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => onNavigate('categorias')}
                    className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 cursor-pointer group"
                  >
                    <span>Explorar catálogo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 💡 Dica de navegação */}
        <section className="bg-amber-50/70 border border-amber-200/90 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2.5 text-amber-900 font-extrabold text-lg sm:text-xl">
            <Lightbulb className="w-6 h-6 text-amber-600 shrink-0" />
            <span>Dica de navegação</span>
          </div>
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
            Cada modalidade é independente — você escolhe conforme o seu objetivo neste momento. Não há ordem obrigatória: comece por onde faz sentido para você!
          </p>
        </section>

        {/* Bottom Navigation / CTA Box */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#182333] border border-slate-700/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#FFC72C]" />
              Pronto para começar seu aprendizado?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Conheça nossos cursos disponíveis ou confira as diretrizes de certificação e mérito.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {onNavigate && (
              <button
                onClick={() => onNavigate('categorias')}
                className="px-5 py-3 bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Todos os Cursos</span>
              </button>
            )}

            {onNavigate && (
              <button
                onClick={() => onNavigate('regras-certificacao-merito')}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-slate-600 shadow-md hover:scale-105"
              >
                <Award className="w-4 h-4 text-[#FFC72C]" />
                <span>Escala de Autoria</span>
              </button>
            )}
          </div>
        </section>

      </main>
    </div>
  );
};
