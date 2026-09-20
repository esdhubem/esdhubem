import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Mail,
  Sparkles,
  LayoutGrid,
  ShoppingCart,
  Bell,
  User,
  Info
} from 'lucide-react';

interface HeaderProps {
  onSearch: (term: string) => void;
  searchTerm: string;
  onNavigate: (sectionId: string) => void;
  onOpenValidator: () => void;
  onOpenAbout: () => void;
  savedCount: number;
  currentPage?: 'home' | 'sala-de-aula' | 'curso-assertiva' | 'categorias' | 'categoria-detalhe' | 'informacoes-legais' | 'politicas';
}

export const Header: React.FC<HeaderProps> = ({
  onSearch,
  searchTerm,
  onNavigate,
  onOpenValidator,
  onOpenAbout,
  savedCount,
  currentPage = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topSearch, setTopSearch] = useState(searchTerm);
  const [cartCount, setCartCount] = useState(2);
  const [messagesCount, setMessagesCount] = useState(2);
  const [notificationsCount, setNotificationsCount] = useState(2);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(topSearch);
    onNavigate('catalogo-cursos');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#243042] text-white shadow-md transition-all">
      {/* Top Bar: Logo, Search and User Actions */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
            
            {/* Left: Brand Logo & Grid Launcher */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div
                onClick={() => onNavigate('inicio')}
                className="flex items-center gap-2 cursor-pointer group select-none"
                id="logo-brand-btn"
                title="ESDHUBEM - Início"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-white/20 backdrop-blur-xs rounded flex items-center justify-center text-white font-extrabold text-xs">
                    <Sparkles className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <span className="text-xl font-black tracking-wider text-white uppercase font-sans">
                  ESDHUBEM
                </span>
              </div>

              <button
                onClick={() => onNavigate('explorar-categorias')}
                className="p-1.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Explorar Todas as Categorias"
                id="grid-launcher-btn"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>

            {/* Center: Search Input */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-2">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <input
                  type="text"
                  value={topSearch}
                  onChange={(e) => {
                    setTopSearch(e.target.value);
                    onSearch(e.target.value);
                  }}
                  placeholder="Buscar tutoriais, cursos, vídeos..."
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-300 pl-10 pr-4 py-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
                  id="top-header-search-input"
                />
                <Search className="w-4 h-4 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" />
              </form>
            </div>

            {/* Right Action Icons with Badges */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="relative p-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer"
                title="Carrinho de Cursos"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="relative p-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer hidden sm:block"
                title="Mensagens"
              >
                <Mail className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {messagesCount}
                </span>
              </button>

              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="relative p-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer hidden sm:block"
                title="Avisos Acadêmicos"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {notificationsCount}
                </span>
              </button>

              <button
                onClick={() => onNavigate('sala-de-aula')}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  currentPage === 'sala-de-aula'
                    ? 'bg-[#FFC72C] text-slate-950 border-[#FFC72C] ring-2 ring-[#FFC72C]/40'
                    : 'bg-slate-700/80 hover:bg-slate-600 border-slate-500/60 text-slate-200 hover:text-white'
                }`}
                title="Área do Aluno"
              >
                <User className="w-4 h-4" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navigation Links (Desktop) */}
      <div className="hidden xl:block bg-[#182333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-8 h-12 text-sm font-medium">
            <button
              onClick={() => onNavigate('inicio')}
              className={`transition-all py-1 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('categorias')}
              className={`transition-all py-1 cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'categorias'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              <span>Categorias</span>
              <span className="bg-white/10 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">17</span>
            </button>
            <button
              onClick={() => onNavigate('categoria:desenvolvimento-nas-empresas')}
              className={`transition-all py-1 cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'categoria-detalhe'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              Nas Empresas
            </button>
            <button
              onClick={() => onNavigate('sala-de-aula')}
              className={`transition-all py-1 cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'sala-de-aula'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              <span>Sala de Aula</span>
              <span className="bg-[#FFC72C] text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded">ALUNO</span>
            </button>
            <button
              onClick={() => onNavigate('informacoes-legais')}
              className={`transition-all py-1 cursor-pointer ${
                currentPage === 'informacoes-legais'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              Informações Legais
            </button>
            <button
              onClick={() => onNavigate('politicas')}
              className={`transition-all py-1 cursor-pointer ${
                currentPage === 'politicas'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              Políticas
            </button>
            <button
              onClick={onOpenAbout}
              className="text-white/80 hover:text-white hover:border-b-2 hover:border-white/30 transition-all py-1 cursor-pointer"
            >
              Sobre Nós
            </button>
            
            <div className="w-px h-6 bg-white/10 mx-2"></div>

            <button
              onClick={onOpenValidator}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Validar Certificado
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Search bar (visible only on lg/md) */}
      <div className="lg:hidden px-4 pb-3 pt-2 bg-[#243042]">
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <input
            type="text"
            value={topSearch}
            onChange={(e) => {
              setTopSearch(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder="Buscar tutoriais, cursos..."
            className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-300 pl-10 pr-4 py-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
          />
          <Search className="w-4 h-4 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" />
        </form>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1E293B] border-t border-slate-700 px-4 py-4 space-y-3 shadow-2xl text-white">
          <button onClick={() => { onNavigate('inicio'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Início</button>
          <button onClick={() => { onNavigate('categorias'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 flex justify-between">
            <span>Categorias</span>
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">17</span>
          </button>
          <button onClick={() => { onNavigate('categoria:desenvolvimento-nas-empresas'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Nas Empresas</button>
          <button onClick={() => { onNavigate('sala-de-aula'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 flex justify-between text-[#FFC72C]">
            <span>Sala de Aula</span>
            <span className="text-[10px] bg-[#FFC72C] text-slate-950 font-black px-2 py-0.5 rounded-full">ALUNO</span>
          </button>
          <button onClick={() => { onNavigate('informacoes-legais'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Informações Legais</button>
          <button onClick={() => { onNavigate('politicas'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Políticas</button>
          <button onClick={() => { onOpenAbout(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Sobre Nós</button>
          
          <button onClick={() => { onOpenValidator(); setMobileMenuOpen(false); }} className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-bold bg-white/10 hover:bg-white/20 text-white flex items-center justify-center gap-2 mt-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Validar Certificado</span>
          </button>
        </div>
      )}
    </header>
  );
};
