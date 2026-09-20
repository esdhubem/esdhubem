import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { MethodologySection } from './components/MethodologySection';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseModal } from './components/CourseModal';
import { CertificateValidatorModal } from './components/CertificateValidatorModal';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';
import { StudentPortalPage } from './components/StudentPortalPage';
import { CourseDetailPage } from './components/CourseDetailPage';
import { CategoriesPage } from './components/CategoriesPage';
import { CategoryDetailPage } from './components/CategoryDetailPage';
import { LegalInfoPage } from './components/LegalInfoPage';
import { PoliticasPage } from './components/PoliticasPage';
import { CATEGORIES_DATA, COURSES_DATA } from './data/coursesData';
import { Course } from './types';
import {
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  MessageCircle,
  Home,
  GraduationCap,
  BookOpen,
  Layers,
  Scale,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    'home' | 'sala-de-aula' | 'curso-assertiva' | 'categorias' | 'categoria-detalhe' | 'informacoes-legais' | 'politicas'
  >('home');
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>('desenvolvimento-nas-empresas');
  const [activePortalCourseId, setActivePortalCourseId] = useState<string>('hc-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePillar, setActivePillar] = useState<'all' | 'freepremium' | 'horas-complementares' | 'formacao-livre'>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isValidatorOpen, setIsValidatorOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [savedCourseIds, setSavedCourseIds] = useState<string[]>(['fp-1', 'hc-1']); // Initial saved items matching the "2" indicator
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleToggleSaveCourse = (courseId: string) => {
    if (savedCourseIds.includes(courseId)) {
      setSavedCourseIds(savedCourseIds.filter((id) => id !== courseId));
      showNotification('Curso removido dos seus salvos.');
    } else {
      setSavedCourseIds([...savedCourseIds, courseId]);
      showNotification('Curso adicionado à sua lista de estudos!');
    }
  };

  const handleEnrollCourse = (course: Course) => {
    setActivePortalCourseId(course.id);
    setCurrentPage('sala-de-aula');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showNotification(`Acesso liberado! Bem-vindo(a) à Sala de Aula do curso "${course.title}".`);
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'categoria-detalhe' || sectionId.startsWith('categoria:')) {
      const slug = sectionId.startsWith('categoria:')
        ? sectionId.replace('categoria:', '')
        : 'desenvolvimento-nas-empresas';
      setActiveCategorySlug(slug);
      setCurrentPage('categoria-detalhe');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'categorias') {
      setCurrentPage('categorias');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'informacoes-legais') {
      setCurrentPage('informacoes-legais');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'politicas') {
      setCurrentPage('politicas');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'curso-assertiva') {
      setCurrentPage('curso-assertiva');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'sala-de-aula') {
      setCurrentPage('sala-de-aula');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'inicio') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If on student portal and clicking a catalog filter, go to home first
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        executeSectionNavigation(sectionId);
      }, 100);
    } else {
      executeSectionNavigation(sectionId);
    }
  };

  const executeSectionNavigation = (sectionId: string) => {
    if (sectionId === 'cursos-freepremium') {
      setActivePillar('freepremium');
      setSelectedCategory(null);
      const el = document.getElementById('catalogo-cursos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'horas-complementares') {
      setActivePillar('horas-complementares');
      setSelectedCategory(null);
      const el = document.getElementById('catalogo-cursos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'formacao-livre') {
      setActivePillar('formacao-livre');
      setSelectedCategory(null);
      const el = document.getElementById('catalogo-cursos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onSearch={(term) => {
          setSearchTerm(term);
          if (currentPage !== 'home') setCurrentPage('home');
        }}
        searchTerm={searchTerm}
        onNavigate={handleNavigate}
        onOpenValidator={() => setIsValidatorOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        savedCount={savedCourseIds.length}
      />

      {/* Main Content Area: Page Routing */}
      {currentPage === 'home' && (
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero
            onSearch={(query) => setSearchTerm(query)}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              const el = document.getElementById('catalogo-cursos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            searchTerm={searchTerm}
          />

          {/* 2. Explorar Categorias (The 17 exact categories) */}
          <CategoryGrid
            categories={CATEGORIES_DATA}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onNavigateToCategoriesPage={() => handleNavigate('categorias')}
            onNavigateToCategoryDetail={(slug) => {
              setActiveCategorySlug(slug);
              setCurrentPage('categoria-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* 3. A Jornada Perfeita para o Seu Sucesso (The 3 Methodology Pillars) */}
          <MethodologySection
            onSelectPillar={(pillarType) => {
              setActivePillar(pillarType);
            }}
          />

          {/* 4. Cursos Freepremium, Horas Complementares e Formações Profissionais */}
          <CourseCatalog
            courses={COURSES_DATA}
            activePillar={activePillar}
            onPillarChange={(pillar) => setActivePillar(pillar)}
            onSelectCourse={(course) => {
              if (course.id === 'fp-assertiva') {
                setCurrentPage('curso-assertiva');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                setSelectedCourse(course);
              }
            }}
            onToggleSaveCourse={handleToggleSaveCourse}
            savedCourseIds={savedCourseIds}
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
          />
        </main>
      )}

      {currentPage === 'categorias' && (
        <main className="flex-1">
          <CategoriesPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onNavigateToCourseDetail={() => {
              setCurrentPage('curso-assertiva');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToCategoryDetail={(slug) => {
              setActiveCategorySlug(slug);
              setCurrentPage('categoria-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'categoria-detalhe' && (
        <main className="flex-1">
          <CategoryDetailPage
            categorySlug={activeCategorySlug}
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToCategories={() => {
              setCurrentPage('categorias');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCourse={(course) => {
              if (course.id === 'fp-assertiva') {
                setCurrentPage('curso-assertiva');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                setSelectedCourse(course);
              }
            }}
            onNavigateToCourseDetail={() => {
              setCurrentPage('curso-assertiva');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPortal={(courseId) => {
              if (courseId) setActivePortalCourseId(courseId);
              setCurrentPage('sala-de-aula');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            onSelectAnotherCategory={(slug) => {
              setActiveCategorySlug(slug);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'informacoes-legais' && (
        <main className="flex-1">
          <LegalInfoPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
          />
        </main>
      )}

      {currentPage === 'politicas' && (
        <main className="flex-1">
          <PoliticasPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPolicy={(policyId) => {
              showNotification(`Página da política "${policyId}" será construída em breve.`);
            }}
          />
        </main>
      )}

      {currentPage === 'curso-assertiva' && (
        <main className="flex-1">
          <CourseDetailPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onEnroll={() => {
              setActivePortalCourseId('fp-assertiva');
              setCurrentPage('sala-de-aula');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              showNotification('Inscrição confirmada! Bem-vindo(a) à Sala de Aula de Comunicação Assertiva.');
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
          />
        </main>
      )}

      {currentPage === 'sala-de-aula' && (
        <main className="flex-1">
          <StudentPortalPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            initialCourseId={activePortalCourseId}
          />
        </main>
      )}

      {/* 5. Footer with Fale Conosco, Métodos de Pagamento, Links, Categorias, Newsletter & Copyright */}
      <Footer
        onSelectCategory={(cat) => {
          if (currentPage !== 'home') setCurrentPage('home');
          setSelectedCategory(cat);
          setTimeout(() => {
            const el = document.getElementById('catalogo-cursos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onOpenValidator={() => setIsValidatorOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Quick Page Switcher Floating Pill: Allows switching seamlessly between all pages */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-6 z-40 bg-[#182333]/95 backdrop-blur-md border border-slate-700/80 shadow-2xl p-1.5 rounded-full flex items-center gap-1 max-w-[95vw] overflow-x-auto scrollbar-none">
        <button
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
            currentPage === 'home'
              ? 'bg-[#FFC72C] text-slate-950 shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Ver Página Inicial (Catálogo & Apresentação)"
          id="toggle-page-home-btn"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Início</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('categorias');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
            currentPage === 'categorias'
              ? 'bg-[#FFC72C] text-slate-950 shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Ver Diretório das 17 Categorias Oficiais"
          id="toggle-page-categorias-btn"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Categorias</span>
        </button>

        <button
          onClick={() => {
            setActiveCategorySlug('desenvolvimento-nas-empresas');
            setCurrentPage('categoria-detalhe');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
            currentPage === 'categoria-detalhe'
              ? 'bg-[#FFC72C] text-slate-950 shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Ver Cursos da Categoria: Desenvolvimento nas Empresas"
          id="toggle-page-empresas-btn"
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Nas Empresas</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('politicas');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
            currentPage === 'politicas'
              ? 'bg-[#FFC72C] text-slate-950 shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Ver Políticas e Termos"
          id="toggle-page-politicas-btn"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Políticas</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('informacoes-legais');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
            currentPage === 'informacoes-legais'
              ? 'bg-[#FFC72C] text-slate-950 shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Ver Informações Legais, Validade dos Certificados & LGPD"
          id="toggle-page-legal-btn"
        >
          <Scale className="w-3.5 h-3.5" />
          <span>Legal</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('sala-de-aula');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
            currentPage === 'sala-de-aula'
              ? 'bg-[#FFC72C] text-slate-950 shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Ver Sala de Aula Virtual (Área do Aluno)"
          id="toggle-page-classroom-btn"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Sala de Aula</span>
        </button>
      </div>

      {/* Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
      />

      <CertificateValidatorModal
        isOpen={isValidatorOpen}
        onClose={() => setIsValidatorOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenValidator={() => {
          setIsAboutOpen(false);
          setIsValidatorOpen(true);
        }}
      />

      {/* Floating WhatsApp / Direct Contact Support Button */}
      <a
        href="https://wa.me/5511960319637"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 rounded-full shadow-lg shadow-black/15 flex items-center gap-2 transition-transform hover:scale-110 group cursor-pointer"
        title="Fale conosco no WhatsApp (11) 960319637"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-1">
          (11) 960319637
        </span>
      </a>

      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 bg-[#182333] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm animate-in slide-in-from-top-4 border border-slate-700">
          <CheckCircle2 className="w-4 h-4 text-[#FFC72C] shrink-0" />
          <span>{notification}</span>
        </div>
      )}
    </div>
  );
}
