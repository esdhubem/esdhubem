import React, { useState, useEffect, useMemo } from 'react';
import { Course } from '../types';
import {
  Clock,
  Star,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
  Heart,
  CheckCircle,
  PlayCircle,
  ShieldCheck,
  Flame,
  TrendingUp,
  Search,
  RotateCcw
} from 'lucide-react';

interface SearchMetricItem {
  id: string;
  name: string;
  searchTerm: string;
  count: number;
  badge: string;
  accentBg: string;
  accentText: string;
  borderClass: string;
}

const INITIAL_POPULAR_SEARCHES: SearchMetricItem[] = [
  {
    id: 'assertiva',
    name: 'Comunicação Assertiva com a Liderança',
    searchTerm: 'Comunicação Assertiva',
    count: 1540,
    badge: '1º Mais Procurado',
    accentBg: 'bg-amber-500/10 hover:bg-amber-500/20',
    accentText: 'text-amber-900',
    borderClass: 'border-amber-300'
  },
  {
    id: 'emocional',
    name: 'Inteligência Emocional & Relações',
    searchTerm: 'Inteligência Emocional',
    count: 1290,
    badge: '2º Mais Procurado',
    accentBg: 'bg-cyan-500/10 hover:bg-cyan-500/20',
    accentText: 'text-cyan-900',
    borderClass: 'border-cyan-300'
  },
  {
    id: 'pics',
    name: 'Práticas Integrativas (PICS)',
    searchTerm: 'Práticas Integrativas',
    count: 980,
    badge: '3º Mais Procurado',
    accentBg: 'bg-emerald-500/10 hover:bg-emerald-500/20',
    accentText: 'text-emerald-900',
    borderClass: 'border-emerald-300'
  },
  {
    id: 'lideranca',
    name: 'Liderança e Gestão 360°',
    searchTerm: 'Liderança',
    count: 870,
    badge: 'Em Alta',
    accentBg: 'bg-purple-500/10 hover:bg-purple-500/20',
    accentText: 'text-purple-900',
    borderClass: 'border-purple-300'
  },
  {
    id: 'landing',
    name: 'Landing Pages & Biolinks',
    searchTerm: 'Landing Page',
    count: 790,
    badge: 'Destaque Pro',
    accentBg: 'bg-blue-500/10 hover:bg-blue-500/20',
    accentText: 'text-blue-900',
    borderClass: 'border-blue-300'
  },
  {
    id: 'financas',
    name: 'Finanças Comportamentais',
    searchTerm: 'Finanças',
    count: 680,
    badge: 'Tendência',
    accentBg: 'bg-rose-500/10 hover:bg-rose-500/20',
    accentText: 'text-rose-900',
    borderClass: 'border-rose-300'
  }
];

interface CourseCatalogProps {
  courses: Course[];
  activePillar: 'all' | 'freepremium' | 'horas-complementares' | 'formacao-livre';
  onPillarChange: (pillar: 'all' | 'freepremium' | 'horas-complementares' | 'formacao-livre') => void;
  onNavigate?: (sectionId: string) => void;
  onSelectCourse: (course: Course) => void;
  onToggleSaveCourse: (courseId: string) => void;
  savedCourseIds: string[];
  searchTerm: string;
  onSearchChange?: (term: string) => void;
  selectedCategory: string | null;
  onCategoryChange?: (category: string | null) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  courses,
  activePillar,
  onPillarChange,
  onNavigate,
  onSelectCourse,
  onToggleSaveCourse,
  savedCourseIds,
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  // Real-time tracking of popular course searches
  const [popularSearches, setPopularSearches] = useState<SearchMetricItem[]>(() => {
    try {
      const saved = localStorage.getItem('esdhubem_popular_searches');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_POPULAR_SEARCHES;
  });

  // Track when a user actively searches
  const handleSelectPopularSearch = (item: SearchMetricItem) => {
    // 1. Increment metric count in state and localStorage
    const updated = popularSearches.map((entry) => {
      if (entry.id === item.id || entry.searchTerm.toLowerCase() === item.searchTerm.toLowerCase()) {
        return { ...entry, count: entry.count + 1 };
      }
      return entry;
    });

    // Sort by most searched
    updated.sort((a, b) => b.count - a.count);

    setPopularSearches(updated);
    try {
      localStorage.setItem('esdhubem_popular_searches', JSON.stringify(updated));
    } catch {
      // Ignore localStorage errors
    }

    // 2. Set search filter in the application
    if (onCategoryChange) onCategoryChange(null);
    if (onPillarChange) onPillarChange('all');
    if (onSearchChange) {
      if (searchTerm.toLowerCase() === item.searchTerm.toLowerCase()) {
        onSearchChange('');
      } else {
        onSearchChange(item.searchTerm);
      }
    }
  };

  // Record user manual searches to update trends dynamically
  useEffect(() => {
    if (!searchTerm || searchTerm.trim().length < 3) return;

    const timeout = setTimeout(() => {
      setPopularSearches((prev) => {
        const query = searchTerm.trim().toLowerCase();
        const existingIdx = prev.findIndex(
          (p) => p.searchTerm.toLowerCase() === query || query.includes(p.searchTerm.toLowerCase())
        );

        let nextList: SearchMetricItem[];
        if (existingIdx >= 0) {
          nextList = prev.map((item, idx) =>
            idx === existingIdx ? { ...item, count: item.count + 1 } : item
          );
        } else {
          // Add newly discovered popular query
          const newItem: SearchMetricItem = {
            id: `query-${Date.now()}`,
            name: searchTerm.trim(),
            searchTerm: searchTerm.trim(),
            count: 1,
            badge: 'Nova Busca',
            accentBg: 'bg-amber-500/10 hover:bg-amber-500/20',
            accentText: 'text-amber-900',
            borderClass: 'border-amber-300'
          };
          nextList = [...prev, newItem];
        }

        nextList.sort((a, b) => b.count - a.count);
        const topList = nextList.slice(0, 8);
        try {
          localStorage.setItem('esdhubem_popular_searches', JSON.stringify(topList));
        } catch {
          // Ignore
        }
        return topList;
      });
    }, 1500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // Filter courses by pillar, search, and category
  const filteredCourses = courses.filter((course) => {
    const matchesPillar = activePillar === 'all' || course.pillar === activePillar;

    const matchesSearch =
      !searchTerm ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      course.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesPillar && matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-[#F8FAFC]" id="catalogo-cursos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Most Searched Box */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[#243042] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Grade de Cursos Livres e Produtos da ESDHUBEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Catálogo de Cursos Online ESDHUBEM
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Explore os cursos livres e formações mais procuradas para rentabilizar e potencializar seu desenvolvimento humano e profissional.
            </p>
          </div>

          {/* Dynamic "Cursos Mais Procurados e Pesquisados" Container */}
          <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm lg:max-w-xl w-full flex flex-col justify-between">
            {/* Header with live tracking indicator */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                </span>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <span>Cursos Mais Procurados na Escola</span>
                  </h3>
                  <p className="text-[10px] text-slate-500">Ranking automático baseado nas pesquisas dos alunos</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Mais Pesquisados</span>
              </div>
            </div>

            {/* Clickable Popular Course Search Pills */}
            <div className="flex flex-wrap gap-2">
              {popularSearches.slice(0, 6).map((item, idx) => {
                const isActive = searchTerm.toLowerCase() === item.searchTerm.toLowerCase();

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectPopularSearch(item)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                      isActive
                        ? 'bg-[#182333] text-[#FFC72C] border-[#182333] shadow-md ring-2 ring-[#FFC72C]/40'
                        : `${item.accentBg} ${item.accentText} ${item.borderClass} shadow-2xs hover:scale-102`
                    }`}
                    title={`Pesquisado ${item.count} vezes na ESDHUBEM`}
                  >
                    <span className="text-[10px] opacity-75 font-mono">#{idx + 1}</span>
                    <span>{item.name}</span>
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-extrabold ${isActive ? 'bg-[#FFC72C] text-slate-900' : 'bg-white/80 text-slate-700'}`}>
                      🔥 {(item.count / 1000).toFixed(1)}k
                    </span>
                  </button>
                );
              })}

              {/* Reset filter button if a search is active */}
              {searchTerm && onSearchChange && (
                <button
                  onClick={() => onSearchChange('')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Ver Todos</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Active Filters Bar */}
        {(searchTerm || selectedCategory) && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-amber-50/90 border border-amber-200 p-3.5 rounded-2xl text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-amber-950 flex items-center gap-1">
                <Search className="w-3.5 h-3.5 text-amber-600" />
                <span>Filtro de busca ativo:</span>
              </span>
              {searchTerm && (
                <span className="bg-white px-3 py-1 rounded-lg text-slate-800 border border-amber-200 font-bold shadow-2xs flex items-center gap-1">
                  "{searchTerm}"
                </span>
              )}
              {selectedCategory && (
                <span className="bg-white px-3 py-1 rounded-lg text-slate-800 border border-amber-200 font-bold shadow-2xs flex items-center gap-1">
                  Categoria: {selectedCategory}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-amber-900 font-extrabold text-xs">
                {filteredCourses.length} {filteredCourses.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
              </span>
              {onSearchChange && (
                <button
                  onClick={() => {
                    onSearchChange('');
                    if (onCategoryChange) onCategoryChange(null);
                  }}
                  className="text-xs text-amber-900 underline hover:text-amber-950 font-bold cursor-pointer"
                >
                  Limpar filtro
                </button>
              )}
            </div>
          </div>
        )}

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">
              Nenhum curso encontrado para os filtros selecionados
            </h3>
            <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
              Tente buscar por outro termo ou explore as categorias gerais de desenvolvimento humano.
            </p>
            <button
              onClick={() => {
                onPillarChange('all');
                if (onSearchChange) onSearchChange('');
                if (onCategoryChange) onCategoryChange(null);
              }}
              className="mt-5 px-5 py-2.5 rounded-full bg-[#243042] text-white text-xs font-bold cursor-pointer hover:bg-[#182333]"
            >
              Ver todos os cursos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => {
              const isSaved = savedCourseIds.includes(course.id);

              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden"
                  id={`course-card-${course.id}`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Pillar Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs ${
                          course.pillar === 'freepremium'
                            ? 'bg-emerald-600 text-white'
                            : course.pillar === 'horas-complementares'
                            ? 'bg-[#FFC72C] text-slate-900 font-extrabold'
                            : 'bg-[#182333] text-white'
                        }`}
                      >
                        {course.pillar === 'freepremium'
                          ? 'Freepremium'
                          : course.pillar === 'horas-complementares'
                          ? 'Horas Complementares'
                          : 'Formação Livre'}
                      </span>
                    </div>

                    {/* Bookmark / Favorite Heart */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveCourse(course.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                        isSaved
                          ? 'bg-rose-500 text-white shadow-md'
                          : 'bg-white/80 text-slate-600 hover:bg-white hover:text-rose-500'
                      }`}
                      title={isSaved ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
                    >
                      <Heart
                        className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`}
                      />
                    </button>

                    {/* Category Label at bottom of image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="bg-[#182333]/80 backdrop-blur-xs px-2 py-0.5 rounded font-medium truncate max-w-[70%]">
                        {course.category}
                      </span>
                      <span className="flex items-center gap-1 font-bold bg-[#FFC72C] text-slate-950 px-2 py-0.5 rounded shadow-xs">
                        <Star className="w-3 h-3 fill-slate-950" />
                        {course.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-[#243042] transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {course.subtitle}
                      </p>
                    </div>

                    {/* Course Metadata */}
                    <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex items-center justify-between text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.hours}h de carga horária</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.studentsCount} alunos</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Certificado com Registro Digital</span>
                      </div>
                    </div>

                    {/* Price & Action Button */}
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <div>
                        {course.pillar === 'freepremium' ? (
                          <div>
                            <span className="text-[10px] text-emerald-600 font-bold uppercase block">
                              Aulas 100% Grátis
                            </span>
                            <span className="text-sm font-black text-slate-900">
                              Certificado Opcional
                            </span>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[10px] text-slate-400 uppercase block font-medium">
                              Investimento
                            </span>
                            <span className="text-base font-black text-slate-900">
                              R$ {course.price.toFixed(2).replace('.', ',')}
                            </span>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectCourse(course)}
                        className="inline-flex items-center gap-1 bg-[#FFC72C] hover:bg-[#ffcf47] text-[#182333] font-black text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer group-hover:translate-x-0.5"
                      >
                        <span>Acessar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
