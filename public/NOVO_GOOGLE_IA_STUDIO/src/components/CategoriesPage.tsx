import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  HeartHandshake,
  Briefcase,
  Scale,
  Users,
  CircleDollarSign,
  SunMedium,
  Brain,
  Leaf,
  Gift,
  GraduationCap,
  Compass,
  Cpu,
  Target,
  Building2,
  Award,
  ArrowLeft,
  Search,
  BookOpen,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { CategoryItem, Course } from '../types';
import { CATEGORIES_DATA } from '../data/coursesData';

interface CategoriesPageProps {
  onBackToHome: () => void;
  onSelectCourse: (course: Course) => void;
  onNavigateToCourseDetail: () => void;
  onNavigateToCategoryDetail?: (categorySlug: string) => void;
}

// Map icons cleanly
const renderCategoryIcon = (iconName: string, className: string = 'w-6 h-6') => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'CircleDollarSign':
      return <CircleDollarSign className={className} />;
    case 'SunMedium':
      return <SunMedium className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    case 'Gift':
      return <Gift className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'BookOpen':
    default:
      return <BookOpen className={className} />;
  }
};

// Rich details metadata for all 18 categories
const CATEGORY_DETAILS: Record<string, { summary: string; skills: string[] }> = {
  'desenvolvimento-pessoal': {
    summary: 'Autoconhecimento, inteligência emocional, foco, hábitos saudáveis e transformação individual.',
    skills: ['Inteligência Emocional', 'Autodisciplina', 'Comunicação Empática', 'Gestão do Tempo']
  },
  'desenvolvimento-humano': {
    summary: 'Estudos aprofundados sobre ciclos da vida, relações humanas, maturidade e potencial realizador.',
    skills: ['Psicologia Relacional', 'Comportamento Humano', 'Antropologia Prática', 'Resolução de Conflitos']
  },
  'desenvolvimento-profissional': {
    summary: 'Habilidades de liderança, comunicação corporativa, gestão estratégica e ascensão na carreira.',
    skills: ['Liderança 360°', 'Comunicação Assertiva', 'Gestão de Projetos', 'Negociação Estratégica']
  },
  'desenvolvimento-etico': {
    summary: 'Fundamentos de ética aplicada, responsabilidade civil, conduta profissional e integridade.',
    skills: ['Ética Corporativa', 'Compliance Moral', 'Tomada de Decisão', 'Direito Preventivo']
  },
  'desenvolvimento-relacional': {
    summary: 'Dinâmicas familiares, vínculos afetivos, convivência pacífica e comunicação interpessoal não violenta.',
    skills: ['CNV Aplicada', 'Mediação Familiar', 'Escuta Ativa', 'Inteligência Social']
  },
  'desenvolvimento-financeiro': {
    summary: 'Planejamento patrimonial, mentalidade de prosperidade, controle orçamentário e finanças comportamentais.',
    skills: ['Finanças Comportamentais', 'Orçamento Inteligente', 'Planejamento Pessoal', 'Investimentos Básicos']
  },
  'desenvolvimento-da-consciencia': {
    summary: 'Práticas meditativas, presença plena, espiritualidade laica, filosofia aplicada e autorreflexão.',
    skills: ['Mindfulness', 'Filosofia Prática', 'Auto-observação', 'Equilíbrio Mental']
  },
  'praticas-integrativas': {
    summary: 'Terapias complementares, abordagens holísticas da saúde, equilíbrio bioenergético e bem-estar.',
    skills: ['PICS / SUS', 'Abordagem Holística', 'Equilíbrio Energético', 'Saúde Preventiva']
  },
  'desenvolvimento-ambiental': {
    summary: 'Sustentabilidade prática, consumo consciente, ecologia pessoal e conexão responsável com o planeta.',
    skills: ['Sustentabilidade Cotidiana', 'Eco-eficiência', 'Consumo Consciente', 'Gestão de Resíduos']
  },
  'desenvolvimento-solidario': {
    summary: 'Voluntariado estruturado, terceiro setor, responsabilidade social e projetos comunitários de impacto.',
    skills: ['Gestão de ONGs', 'Projetos Sociais', 'Empatia Coletiva', 'Captação de Recursos']
  },
  'desenvolvimento-tecnologico-ia': {
    summary: 'Inteligência Artificial ética, produtividade com ferramentas digitais, automação e futuro do trabalho.',
    skills: ['Engenharia de Prompts', 'Automação sem Código', 'IA para Negócios', 'Cultura Digital']
  },
  'cursos-freepremium': {
    summary: 'Cursos abertos e 100% gratuitos para assistir e testar, com taxa simbólica opcional para certificação formal.',
    skills: ['Aulas Abertas', 'Flexibilidade Total', 'Testes Práticos', 'Certificação Opcional']
  },
  'cursos-capacitacao': {
    summary: 'Formações técnicas e operacionais voltadas para a prática imediata no mercado de trabalho e consultoria.',
    skills: ['Metodologia Aplicada', 'Ferramentas de Mercado', 'Protocolos Profissionais', 'Cases Reais']
  },
  'horas-complementares': {
    summary: 'Cargas horárias certificadas (20h a 120h) válidas para comprovação em universidades e faculdades brasileiras.',
    skills: ['Validade Universitária', 'Decreto 5.154/04', 'Carga Horária Flexível', 'Validação Online']
  },
  'formacao-livre': {
    summary: 'Programas de extensão livres e multidisciplinares focados em qualificação contínua e novos saberes.',
    skills: ['Multidisciplinaridade', 'Atualização Contínua', 'Sem Pré-requisito', 'Ritmo Próprio']
  },
  'autoria-destaque': {
    summary: 'Estruturação, redação e publicação de artigos de conclusão, anais e livros com certificação Prata, Ouro e Diamante.',
    skills: ['Redação Científica', 'Publicação DOI', 'Mentoria Editorial', 'Registro Autoral']
  },
  'aprofundamento-profissional-saude': {
    summary: 'Cursos exclusivos para graduados em Biomedicina, Enfermagem, Nutrição, Psicologia e Fisioterapia.',
    skills: ['Atualização Técnica', 'Boas Práticas Clínicas', 'Evidências Científicas', 'Saúde Integrativa']
  },
  'workshop-orientacao-carreira': {
    summary: 'Workshops intensivos para diagnóstico de carreira, transição profissional e novos rumos de mercado.',
    skills: ['Diagnóstico de Perfil', 'Transição de Carreira', 'Portfólio & Posicionamento', 'Mercado Futuro']
  }
};

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onBackToHome,
  onNavigateToCategoryDetail
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('todos');

  // Filter groups
  const groups = [
    { id: 'todos', label: `Todas as Áreas (${CATEGORIES_DATA.length})` },
    { id: 'humano', label: 'Desenvolvimento Humano & Emocional' },
    { id: 'carreira', label: 'Profissional & Liderança' },
    { id: 'praticas', label: 'Práticas Integrativas & Saúde' },
    { id: 'academicas', label: 'Horas Acadêmicas & Formações' },
  ];

  // Group membership classifier
  const getCategoryGroup = (id: string): string => {
    if (['desenvolvimento-pessoal', 'desenvolvimento-humano', 'desenvolvimento-etico', 'desenvolvimento-relacional', 'desenvolvimento-da-consciencia'].includes(id)) {
      return 'humano';
    }
    if (['desenvolvimento-profissional', 'desenvolvimento-financeiro', 'desenvolvimento-tecnologico-ia', 'desenvolvimento-nas-empresas', 'formacao-empresarial', 'workshop-orientacao-carreira'].includes(id)) {
      return 'carreira';
    }
    if (['praticas-integrativas', 'coach-integrativo', 'pedagogia-integrativa', 'desenvolvimento-ambiental', 'aprofundamento-profissional-saude'].includes(id)) {
      return 'praticas';
    }
    return 'academicas';
  };

  // Filtered categories
  const filteredCategories = useMemo(() => {
    return CATEGORIES_DATA.filter((cat) => {
      const matchesSearch =
        cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGroup = selectedGroup === 'todos' || getCategoryGroup(cat.id) === selectedGroup;
      return matchesSearch && matchesGroup;
    });
  }, [searchTerm, selectedGroup]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Breadcrumb Navigation */}
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
            <span className="text-[#FFC72C] font-semibold">
              Aprofunde nas Categorias & Áreas do Saber
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#FFC72C]" />
            <span>18 Categorias Oficiais da ESDHUBEM</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Catálogo Acadêmico Estruturado</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Categorias de Cursos <br className="hidden sm:inline" />
              <span className="text-[#FFC72C]">Desenvolvimento & Bem-Estar</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Conheça nossas categorias temáticas integradas.
            </p>

            {/* Live Search Bar */}
            <div className="pt-2 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Pesquisar por categoria (ex: Liderança, Práticas, Finanças...)"
                  className="w-full bg-white text-slate-900 placeholder-slate-400 pl-11 pr-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFC72C] shadow-lg"
                  id="categories-search-input"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded-md cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Platform Metric Badges */}
          <div className="grid grid-cols-2 gap-3.5 w-full md:w-auto shrink-0">
            <div className="bg-[#182333]/90 border border-slate-700/80 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-3xl font-black text-[#FFC72C]">18</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Áreas do Saber</div>
            </div>

            <div className="bg-[#182333]/90 border border-slate-700/80 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-3xl font-black text-white">+300h</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Aulas Certificadas</div>
            </div>

            <div className="bg-[#182333]/90 border border-slate-700/80 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-3xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Horas Complementares*</div>
            </div>

            <div className="bg-[#182333]/90 border border-slate-700/80 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-3xl font-black text-amber-300">4.9/5</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Satisfação Alunos</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {groups.map((grp) => (
            <button
              key={grp.id}
              onClick={() => setSelectedGroup(grp.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                selectedGroup === grp.id
                  ? 'bg-[#243042] text-[#FFC72C] border-[#243042] shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {grp.label}
            </button>
          ))}
        </div>

        {/* Categories Grid (All 18 Categories) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#243042]" />
              <span>Explore as Áreas de Conhecimento</span>
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              Exibindo {filteredCategories.length} de 18 categorias
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCategories.map((cat) => {
              const details = CATEGORY_DETAILS[cat.id] || {
                summary: 'Capacitação prática e aprofundada para seu desenvolvimento contínuo.',
                skills: ['Prática', 'Certificação', 'EAD', 'Flexibilidade']
              };

              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    if (onNavigateToCategoryDetail) {
                      onNavigateToCategoryDetail(cat.id);
                    }
                  }}
                  className="bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
                  id={`cat-card-${cat.id}`}
                >
                  <div className="space-y-3">
                    {/* Top row with Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${cat.accentColor} shadow-md group-hover:scale-105 transition-transform`}
                      >
                        {renderCategoryIcon(cat.iconName, 'w-6 h-6')}
                      </div>

                      <span className="text-[11px] font-bold bg-[#182333]/5 text-[#243042] px-2.5 py-1 rounded-full border border-slate-200">
                        {cat.coursesCount} Cursos
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="font-extrabold text-[#182333] text-base sm:text-lg leading-tight group-hover:text-[#243042] transition-colors">
                      {cat.title.replace('\n', ' ')}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {details.summary}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {details.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#243042] group-hover:text-[#182333] flex items-center gap-1">
                      Ver Detalhes & Cursos
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#243042] group-hover:text-[#FFC72C] flex items-center justify-center transition-all shadow-xs">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
