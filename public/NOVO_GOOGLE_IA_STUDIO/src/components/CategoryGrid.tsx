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
  LayoutDashboard,
  ClipboardList
} from 'lucide-react';
import { CategoryItem } from '../types';

interface CategoryGridProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (categoryName: string | null) => void;
  onNavigateToCategoriesPage?: () => void;
  onNavigateToCategoryDetail?: (categorySlug: string) => void;
  onNavigate?: (sectionId: string) => void;
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
  onNavigate,
}) => {
  return (
    <div>
      {/* Faixa Institucional com fundo amarelo e letra maior */}
      <section className="py-12 sm:py-16 bg-[#FFC72C] border-b border-amber-400/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-relaxed font-extrabold tracking-tight max-w-4xl mx-auto">
            Na ESDHUBEM, você faz seu curso, conquista seu certificado e, se quiser, pode transformar o que aprendeu em uma produção autoral
          </p>
        </div>
      </section>

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
                else if (onNavigateToCategoryDetail) onNavigateToCategoryDetail('treinamentos-palestras-corporativas');
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
                else if (onNavigateToCategoryDetail) onNavigateToCategoryDetail('aprofundamento-profissional-saude');
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
                else if (onNavigateToCategoryDetail) onNavigateToCategoryDetail('workshop-orientacao-carreira');
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
