import React from 'react';
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
  BookOpenCheck,
  Building2,
  Award,
  ArrowRight,
  Filter,
  Library,
  LayoutDashboard
} from 'lucide-react';
import { CategoryItem } from '../types';

interface CategoryGridProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (categoryName: string | null) => void;
  onNavigateToCategoriesPage?: () => void;
  onNavigateToCategoryDetail?: (categorySlug: string) => void;
}

// Icon mapping helper
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
    case 'BookOpenCheck':
      return <BookOpenCheck className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Library':
      return <Library className={className} />;
    case 'LayoutDashboard':
      return <LayoutDashboard className={className} />;
    case 'Award':
    default:
      return <Award className={className} />;
  }
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onNavigateToCategoriesPage,
  onNavigateToCategoryDetail,
}) => {
  return (
    <div>
      {/* Faixa Institucional com fundo amarelo e letra maior */}
      <section className="py-12 sm:py-16 bg-[#FFC72C] border-b border-amber-400/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-relaxed font-extrabold tracking-tight">
            Uma escola de Cursos Livres voltada ao desenvolvimento humano, onde você pode ir além da aprendizagem!
          </p>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-900 leading-relaxed font-medium max-w-4xl mx-auto">
            Na ESDHUBEM, você não precisa apenas consumir conteúdo, aqui você também tem a oportunidade de desenvolver a sua escrita e produção autoral. Aproveite a oportunidade para transformar aquilo que aprende em reflexão, escrita, pesquisa e produção própria.
          </p>
        </div>
      </section>

      {/* Seção Tipos de Cursos — ESDHUBEM */}
      <section className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 text-amber-900 border border-amber-200 mb-2">
              📋 Modalidades de Formação
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Conheça os Cursos Livres da ESDHUBEM!
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Aqui na nossa escola temos várias formas de ensino. Escolha a modalidade ideal para o seu momento de aprendizado, complementação acadêmica ou evolução profissional.
            </p>
          </div>

          {/* Cards Detalhados - Descrição e Público-alvo (Tamanho harmonizado com a descrição do cabeçalho) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Freepremium */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🟢</span>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    Cursos Freepremium — Descoberta
                  </h4>
                </div>
                <div className="space-y-3.5 text-slate-600">
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Descrição:</span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Aprenda sem barreiras. Assista a todas as videoaulas e acesse o material didático completo de forma 100% gratuita para testar o conteúdo e conhecer nossa metodologia. Você só paga uma taxa de emissão se decidir que quer o documento oficial.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Público-alvo:</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Estudantes e profissionais que buscam conhecimento rápido, querem validar a qualidade do curso antes de investir ou precisam apenas do aprendizado prático imediato sem custo inicial.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Capacitação */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔵</span>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    Cursos de Capacitação — Ação Prática
                  </h4>
                </div>
                <div className="space-y-3.5 text-slate-600">
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Descrição:</span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Cursos práticos e objetivos, desenhados para quem já atua no mercado e precisa de ferramentas aplicáveis imediatamente. Foco no "saber fazer": protocolos, técnicas, metodologias e habilidades profissionais que geram resultado real no consultório, na empresa ou no projeto pessoal.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Público-alvo:</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Profissionais em atividade que precisam atualizar competências, aprender uma nova ferramenta de trabalho ou resolver demandas específicas da sua rotina profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Horas Complementares */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🟡</span>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    Cursos de Horas Complementares — com Foco em Validação Acadêmica
                  </h4>
                </div>
                <div className="space-y-3.5 text-slate-600">
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Descrição:</span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Cursos estruturados para atender diretamente às exigências de Atividades Complementares de cursos de graduação e pós-graduação. Conteúdo alinhado às diretrizes do MEC para cursos livres, com certificado detalhado que especifica carga horária, conteúdo programático e dados da instituição.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Público-alvo:</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Universitários de qualquer período e área que precisam cumprir a carga horária complementar exigida pela sua faculdade para poder colar grau.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Formação Livre */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔴</span>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    Cursos de Formação Livre — Transformação
                  </h4>
                </div>
                <div className="space-y-3.5 text-slate-600">
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Descrição:</span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Jornadas completas de aprendizado para quem quer dominar uma área do início ao fim. Diferente de um curso rápido, a formação livre oferece uma visão ampla e profunda, combinando teoria consistente, prática orientada e estudos de caso reais.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Público-alvo:</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Pessoas em transição de carreira, iniciantes que querem uma base sólida antes de atuar ou qualquer pessoa que deseja um mergulho profundo e transformador em um tema.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Treinamentos Corporativos */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🟣</span>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    Treinamentos Corporativos — Desempenho Profissional
                  </h4>
                </div>
                <div className="space-y-3.5 text-slate-600">
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Descrição:</span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Programas desenvolvidos sob medida para equipes, empresas e instituições. Foco em alinhar processos, capacitar colaboradores em rotinas específicas, melhorar o clima organizacional e desenvolver lideranças com metodologias ativas e mensuração de resultados.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Público-alvo:</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Gestores de RH, líderes de equipe, diretores de empresas e organizações do terceiro setor que precisam capacitar seus times com agilidade e qualidade pedagógica comprovada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Autoria e Destaque */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🟣</span>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    Autoria e Destaque — Desenvolvimento da Escrita
                  </h4>
                </div>
                <div className="space-y-3.5 text-slate-600">
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Descrição:</span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Aprenda a estruturar, escrever e publicar. Do texto prático ao livro — com reconhecimento Prata, Ouro ou Diamante. Transforme o que você aprendeu em conhecimento compartilhado e construa sua presença e credibilidade intelectual.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-1">Público-alvo:</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Estudantes, pesquisadores, terapeutas e profissionais que desejam ir além do certificado, organizar suas ideias e publicar artigos, ensaios ou livros autorais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-white" id="explorar-categorias">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-[#243042] text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">
              <Filter className="w-4 h-4 text-amber-500" />
              <span>Navegue por Áreas de Conhecimento</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Conheça as Categorias de Cursos
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Selecione uma área para filtrar treinamentos certificados, videoaulas e materiais didáticos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {selectedCategory && (
              <button
                onClick={() => onSelectCategory(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3.5 py-1.5 rounded-full transition-colors self-start sm:self-auto cursor-pointer shadow-xs"
              >
                <span>Filtro ativo:</span>
                <span className="text-[#243042] font-bold underline">{selectedCategory}</span>
                <span className="text-slate-400 ml-1">✕</span>
              </button>
            )}
          </div>
        </div>

        {/* 17 Categories Grid (Styled exactly like the user's screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {categories.map((cat) => {
            // Clean up title for matching
            const flatTitle = cat.title.replace('\n', ' ');
            const isSelected = selectedCategory?.toLowerCase() === flatTitle.toLowerCase();

            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (isSelected) {
                    onSelectCategory(null);
                  } else {
                    onSelectCategory(flatTitle);
                    if (cat.id !== 'livros' && cat.id !== 'treinamentos-palestras-corporativas') {
                      const catalogEl = document.getElementById('catalogo-cursos');
                      if (catalogEl) {
                        catalogEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                }}
                className={`group relative p-4 sm:p-5 rounded-2xl text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[175px] sm:min-h-[190px] border cursor-pointer ${
                  isSelected
                    ? 'bg-slate-50 border-2 border-[#243042] shadow-lg -translate-y-0.5 ring-2 ring-[#FFC72C]/50'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5'
                }`}
                id={`cat-card-${cat.id}`}
              >
                {/* Circular Dark Navy Badge with Yellow Icon (As in user screenshot) */}
                <div className="w-14 h-14 rounded-full bg-[#182333] flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform shrink-0">
                  {renderCategoryIcon(cat.iconName, 'w-6 h-6 text-[#FBBF24]')}
                </div>

                {/* Centered Category Title */}
                <div className="flex-1 flex flex-col justify-center w-full">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#243042] transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium mt-1 block">
                    Cursos
                  </span>
                </div>

                {/* Selected Indicator Pill */}
                {isSelected && (
                  <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#FFC72C] ring-2 ring-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);
};
