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
  BookOpen,
  Building2,
  Award,
  ArrowRight,
  Filter,
  Library,
  LayoutDashboard,
  ClipboardList
} from 'lucide-react';
import { CategoryItem } from '../types';

import catPessoalImg from '../assets/cat_pessoal_tech.jpg';
import catProfImg from '../assets/cat_prof_tech.jpg';
import catConscienciaImg from '../assets/cat_consciencia_tech.jpg';
import catBemEstarImg from '../assets/cat_bemestar_tech.jpg';
import { WelcomeVideoSection } from './WelcomeVideoSection';

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

const getModalityTheme = (id: string) => {
  switch (id) {
    case 'freepremium':
      return {
        box: 'bg-emerald-50/90 border-emerald-300/80 border-l-4 border-l-emerald-600',
        label: 'text-emerald-950',
        dot: 'bg-emerald-600',
        text: 'text-slate-800'
      };
    case 'capacitacao':
      return {
        box: 'bg-blue-50/90 border-blue-300/80 border-l-4 border-l-blue-600',
        label: 'text-blue-950',
        dot: 'bg-blue-600',
        text: 'text-slate-800'
      };
    case 'horas-complementares':
      return {
        box: 'bg-amber-50/90 border-amber-300/80 border-l-4 border-l-amber-500',
        label: 'text-amber-950',
        dot: 'bg-amber-500',
        text: 'text-slate-800'
      };
    case 'formacao-integral':
    case 'formacao-livre':
      return {
        box: 'bg-orange-50/90 border-orange-300/80 border-l-4 border-l-orange-500',
        label: 'text-orange-950',
        dot: 'bg-orange-500',
        text: 'text-slate-800'
      };
    case 'treinamentos-corporativos':
      return {
        box: 'bg-purple-50/90 border-purple-300/80 border-l-4 border-l-purple-600',
        label: 'text-purple-950',
        dot: 'bg-purple-600',
        text: 'text-slate-800'
      };
    case 'autoria-destaque':
      return {
        box: 'bg-indigo-50/90 border-indigo-300/80 border-l-4 border-l-indigo-600',
        label: 'text-indigo-950',
        dot: 'bg-indigo-600',
        text: 'text-slate-800'
      };
    case 'aprofundamento-saude':
      return {
        box: 'bg-sky-50/90 border-sky-300/80 border-l-4 border-l-sky-600',
        label: 'text-sky-950',
        dot: 'bg-sky-600',
        text: 'text-slate-800'
      };
    case 'orientacao-carreira-futuro':
    case 'workshop-orientacao-carreira-mod':
      return {
        box: 'bg-teal-50/90 border-teal-300/80 border-l-4 border-l-teal-600',
        label: 'text-teal-950',
        dot: 'bg-teal-600',
        text: 'text-slate-800'
      };
    default:
      return {
        box: 'bg-blue-50/90 border-blue-300/80 border-l-4 border-l-blue-600',
        label: 'text-blue-950',
        dot: 'bg-blue-600',
        text: 'text-slate-800'
      };
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
      {/* Faixa Institucional com fundo #b7d6f7 e letra maior */}
      <section className="py-12 sm:py-16 bg-[#b7d6f7] border-b border-blue-200/80 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug font-black tracking-tight max-w-4xl mx-auto">
            Aprenda com Videoaulas & Mapas Mentais. <br className="hidden sm:inline" />
            Receba seu certificado com inovação!
          </h2>
        </div>
      </section>

      {/* Vídeo de Apresentação e Boas-Vindas da Escola (Exatamente onde indicado pela seta vermelha) */}
      <WelcomeVideoSection />

      {/* Seção Áreas de Conhecimento / Desenvolvimento (Posicionada logo abaixo da faixa amarela) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200" id="explorar-categorias">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#243042] text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">
                <Filter className="w-4 h-4 text-amber-500" />
                <span>Navegue por Áreas de Conhecimento</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Conheça Nossas Áreas de Desenvolvimento ESDHUBEM
              </h2>
              <p className="mt-1 text-sm text-slate-600 max-w-xl">
                Escolha uma das áreas abaixo para explorar nossos cursos livres, treinamentos e formações.
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

          {/* 4 Macro Areas Grid com Imagem, Ícone Flutuante e Botão Conhecer Cursos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'desenvolvimento-pessoal',
                emoji: '🧠',
                title: 'Desenvolvimento Pessoal',
                description: 'Autoconhecimento, inteligência emocional, relações e finanças comportamentais.',
                filterKey: 'Desenvolvimento Pessoal',
                badgeText: 'Pessoal',
                badgeClass: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
                image: catPessoalImg
              },
              {
                id: 'desenvolvimento-profissional',
                emoji: '💼',
                title: 'Desenvolvimento Profissional',
                description: 'Carreira, competências, liderança, capacitação e preparação para o mercado.',
                filterKey: 'Desenvolvimento Profissional',
                badgeText: 'Profissional',
                badgeClass: 'bg-blue-500/10 text-blue-300 border-blue-400/30',
                image: catProfImg
              },
              {
                id: 'desenvolvimento-consciencial',
                emoji: '✨',
                title: 'Desenvolvimento Consciencial',
                description: 'Desenvolvimento humano, expansão da consciência, ética aplicada e consciência ambiental.',
                filterKey: 'Desenvolvimento Consciencial',
                badgeText: 'Consciência',
                badgeClass: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/30',
                image: catConscienciaImg
              },
              {
                id: 'desenvolvimento-bem-estar-integrativo',
                emoji: '🩺',
                title: 'Desenvolvimento em Bem-estar Integrativo',
                description: 'Saúde, bem-estar, práticas integrativas e aprofundamento na área da saúde.',
                filterKey: 'Desenvolvimento em Bem-estar Integrativo',
                badgeText: 'Bem-estar Integrativo',
                badgeClass: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
                image: catBemEstarImg
              }
            ].map((area) => {
              const isSelected = selectedCategory?.toLowerCase() === area.filterKey.toLowerCase();

              return (
                <div
                  key={area.id}
                  onClick={() => {
                    if (isSelected) {
                      onSelectCategory(null);
                    } else {
                      onSelectCategory(area.filterKey);
                      const catalogEl = document.getElementById('catalogo-cursos');
                      if (catalogEl) {
                        catalogEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`group bg-white rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden text-center cursor-pointer relative ${
                    isSelected
                      ? 'border-2 border-blue-600 shadow-xl ring-4 ring-blue-500/20 scale-[1.02]'
                      : 'border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1'
                  }`}
                >
                  {/* Foto Ilustrativa no Topo */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border backdrop-blur-md bg-white/90 shadow-xs ${area.badgeClass}`}>
                        {area.badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Ícone Circular Flutuante Centralizado na Divisa da Foto */}
                  <div className="w-11 h-11 rounded-full bg-white shadow-md border-2 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[154px] z-10 text-xl group-hover:scale-110 group-hover:shadow-lg transition-transform">
                    <span>{area.emoji}</span>
                  </div>

                  {/* Corpo do Cartão: Título, Descrição e Botão Conhecer Cursos */}
                  <div className="pt-7 px-4 pb-5 flex-1 flex flex-col justify-between items-center space-y-3">
                    <div className="w-full space-y-2">
                      <h3 className={`font-extrabold text-base leading-snug transition-colors line-clamp-2 min-h-[44px] flex items-center justify-center ${
                        isSelected ? 'text-blue-700 font-black' : 'text-slate-900 group-hover:text-blue-700'
                      }`}>
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    {/* Botão Pílula Conhecer Cursos com Sombra Flutuante */}
                    <div className="pt-2 w-full flex justify-center">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs tracking-wide shadow-[0_10px_20px_-3px_rgba(5,150,105,0.45)] hover:shadow-[0_16px_28px_-3px_rgba(5,150,105,0.6)] border border-emerald-400/60 transition-all duration-300 cursor-pointer -translate-y-0.5 hover:-translate-y-1.5 active:translate-y-0 w-full max-w-[200px]"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-emerald-100" />
                        <span>Conhecer Cursos</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
              <span className="block">Aqui nós temos diversas</span>
              <span className="block">Modalidades de Cursos Livres!</span>
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Escolha a modalidade ideal para o seu momento de aprendizado, complementação acadêmica ou evolução profissional.
            </p>
          </div>

          {/* 8 Modalities Cards Grid com Imagem, Ícone Flutuante, Apenas Público-Alvo e Botão Conhecer Cursos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                id: 'freepremium',
                emoji: '🟢',
                badgeText: 'Descoberta',
                badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                title: 'Cursos Freepremium',
                target: 'Estudantes e profissionais que buscam conhecimento rápido sem custo inicial.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
                destination: 'modalidades-formacao'
              },
              {
                id: 'capacitacao',
                emoji: '🔵',
                badgeText: 'Ação Prática',
                badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
                title: 'Cursos de Capacitação',
                target: 'Profissionais que precisam atualizar competências e resolver demandas da rotina.',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
                destination: 'modalidades-formacao'
              },
              {
                id: 'horas-complementares',
                emoji: '🟡',
                badgeText: 'Validação Acadêmica',
                badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
                title: 'Horas Complementares',
                target: 'Universitários de graduação e pós-graduação que precisam comprovar horas extracurriculares.',
                image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
                destination: 'modalidades-formacao'
              },
              {
                id: 'formacao-integral',
                emoji: '🟠',
                badgeText: 'Trilha Completa',
                badgeClass: 'bg-orange-50 text-orange-700 border-orange-200',
                title: 'Formação Integral',
                target: 'Pessoas que buscam desenvolvimento consistente com método, profundidade e rigor pedagógico.',
                image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
                destination: 'modalidades-formacao'
              },
              {
                id: 'treinamentos-corporativos',
                emoji: '🟣',
                badgeText: 'Desempenho Profissional',
                badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
                title: 'Treinamentos Corporativos',
                target: 'Gestores de RH, líderes de equipe e diretores de empresas e terceiro setor.',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
                destination: 'categoria:treinamentos-palestras-corporativas'
              },
              {
                id: 'autoria-destaque',
                emoji: '✒️',
                badgeText: 'Desenvolvimento da Escrita',
                badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
                title: 'Autoria e Destaque',
                target: 'Estudantes, pesquisadores, terapeutas e profissionais que desejam publicar com destaque.',
                image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
                destination: 'regras-certificacao-merito'
              },
              {
                id: 'aprofundamento-saude',
                emoji: '💙',
                badgeText: 'Área da Saúde',
                badgeClass: 'bg-sky-50 text-sky-700 border-sky-200',
                title: 'Aprofundamento na Saúde',
                target: 'Enfermeiros, médicos, fisioterapeutas, nutricionistas, psicólogos e terapeutas graduados.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
                destination: 'categoria:aprofundamento-profissional-saude'
              },
              {
                id: 'orientacao-carreira-futuro',
                emoji: '💡',
                badgeText: 'Evolução & Futuro',
                badgeClass: 'bg-teal-50 text-teal-700 border-teal-200',
                title: 'Orientação de Carreira & Futuro',
                target: 'Profissionais em transição, recém-formados e quem busca novos rumos na carreira.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
                destination: 'categoria:orientacao-carreira-futuro'
              }
            ].map((mod) => (
              <div
                key={mod.id}
                onClick={() => {
                  if (mod.destination.startsWith('categoria:')) {
                    const slug = mod.destination.replace('categoria:', '');
                    if (onNavigateToCategoryDetail) onNavigateToCategoryDetail(slug);
                    else if (onNavigate) onNavigate(mod.destination);
                  } else if (onNavigate) {
                    onNavigate(mod.destination);
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-center cursor-pointer relative hover:-translate-y-1"
                id={`home-mod-card-${mod.id}`}
              >
                {/* Foto Ilustrativa no Topo */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border backdrop-blur-md bg-white/95 shadow-xs ${mod.badgeClass}`}>
                      {mod.badgeText}
                    </span>
                  </div>
                </div>

                {/* Ícone Circular Flutuante Centralizado na Divisa da Foto */}
                <div className="w-11 h-11 rounded-full bg-white shadow-md border-2 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[138px] z-10 text-xl group-hover:scale-110 group-hover:shadow-lg transition-transform">
                  <span>{mod.emoji}</span>
                </div>

                {/* Corpo do Cartão: Título, Apenas Público-Alvo e Botão Conhecer Cursos */}
                <div className="pt-7 px-4 pb-5 flex-1 flex flex-col justify-between items-center space-y-3">
                  <div className="w-full space-y-3">
                    <h4 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 min-h-[44px] flex items-center justify-center">
                      {mod.title}
                    </h4>

                    {/* Caixa de Público-Alvo com Contraste Harmonizado */}
                    {(() => {
                      const theme = getModalityTheme(mod.id);
                      return (
                        <div className={`${theme.box} border rounded-xl p-3 text-left shadow-xs transition-colors`}>
                          <strong className={`${theme.label} block text-[10px] uppercase tracking-wider font-black mb-1 flex items-center gap-1.5`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`}></span>
                            Público-alvo:
                          </strong>
                          <p className={`text-xs ${theme.text} line-clamp-3 leading-relaxed font-medium`}>
                            {mod.target}
                          </p>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Botão Pílula Conhecer Cursos com Sombra Flutuante */}
                  <div className="pt-2 w-full flex justify-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs tracking-wide shadow-[0_10px_20px_-3px_rgba(5,150,105,0.45)] hover:shadow-[0_16px_28px_-3px_rgba(5,150,105,0.6)] border border-emerald-400/60 transition-all duration-300 cursor-pointer -translate-y-0.5 hover:-translate-y-1.5 active:translate-y-0 w-full"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-emerald-100" />
                      <span>Conhecer Cursos</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
