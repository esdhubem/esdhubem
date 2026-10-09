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
  Search,
  ShoppingCart,
  PenTool
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
      course.category.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory.toLowerCase() === 'desenvolvimento pessoal' &&
        ['pessoal', 'humano', 'relacional', 'consciência', 'ético', 'financeiro', 'tecnológico', 'ambiental'].some(c => course.category.toLowerCase().includes(c))) ||
      (selectedCategory.toLowerCase() === 'desenvolvimento profissional' &&
        ['profissional', 'carreira', 'capacitação', 'formação livre', 'horas complementares'].some(c => course.category.toLowerCase().includes(c))) ||
      (selectedCategory.toLowerCase() === 'desenvolvimento empresarial' &&
        ['empresarial', 'empresas', 'corporativas', 'corporativo', 'treinamentos e palestras corporativas', 'landing pages', 'aplicativos'].some(c => course.category.toLowerCase().includes(c))) ||
      (selectedCategory.toLowerCase() === 'desenvolvimento em bem-estar integrativo' &&
        ['práticas integrativas', 'coach integrativo', 'pedagogia integrativa', 'saúde', 'bem-estar', 'aprofundamento na área da saúde'].some(c => course.category.toLowerCase().includes(c)));

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
            Veja Os Produtos mais procurados ESDHUBEM
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => {
              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-violet-300 transition-all duration-300 flex flex-col overflow-hidden text-center cursor-pointer relative"
                  id={`course-card-${course.id}`}
                  onClick={() => onSelectCourse(course)}
                >
                  {/* Foto Limpa e Ampla sem poluição nem textos por cima */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Ícone Circular Flutuante Centralizado na Divisa da Foto */}
                  <div className="w-11 h-11 rounded-full bg-white shadow-md border-2 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[186px] z-10 text-blue-600 group-hover:scale-110 group-hover:shadow-lg transition-transform">
                    <PenTool className="w-4 h-4 text-blue-600" />
                  </div>

                  {/* Corpo do Cartão: Título Arejado e Espaço em Branco */}
                  <div className="pt-8 px-4 pb-5 flex-1 flex flex-col justify-between items-center space-y-4">
                    <div className="w-full">
                      <h3 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[44px] flex items-center justify-center">
                        {course.title}
                      </h3>
                    </div>

                    {/* Botão Pílula Centralizado e Elegante */}
                    <div className="pt-2 w-full flex justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCourse(course);
                        }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-blue-600/25 hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Comprar Curso</span>
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
