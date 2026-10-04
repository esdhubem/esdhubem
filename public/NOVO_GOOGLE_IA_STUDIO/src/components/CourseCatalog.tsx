import React from 'react';
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
  Search
} from 'lucide-react';

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
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-[#243042] text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>Grade de Cursos Livres e Produtos da ESDHUBEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Produtos mais procurados  ESDHUBEM
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Conheça os nossos cursos livres e produtos mais procurados para rentabilizar e potencializar seu desenvolvimento humano e profissional. Conheça o Ranking automático baseado nas pesquisas dos alunos
          </p>
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
