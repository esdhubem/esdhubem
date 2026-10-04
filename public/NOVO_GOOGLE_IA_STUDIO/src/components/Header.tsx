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
  Info,
  Award,
  Scale,
  Headphones,
  Handshake,
  BookOpen,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import esdhubemLogo from '../assets/esdhubem-logo.png';

interface HeaderProps {
  onSearch: (term: string) => void;
  searchTerm: string;
  onNavigate: (sectionId: string) => void;
  onOpenValidator: () => void;
  onOpenAbout: () => void;
  savedCount: number;
  currentPage?: string;
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
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-white/20 p-0.5 shrink-0 group-hover:scale-105 transition-transform">
                  <img src={esdhubemLogo} alt="ESDHUBEM Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase font-sans hidden sm:block">
                  ESDHUBEM
                </span>
              </div>

              <button
                onClick={() => onNavigate('explorar-categorias')}
                className="p-1.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Aprofundar nas Categorias"
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
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 rounded-full border transition-all cursor-pointer ${
                  currentPage === 'sala-de-aula'
                    ? 'bg-[#F5B014] text-slate-950 border-[#F5B014] shadow-md ring-2 ring-[#FFC72C]/40'
                    : 'bg-[#FFC72C] hover:bg-[#F5B014] border-[#FFC72C] text-slate-950 shadow-sm'
                }`}
                title="Área do Aluno"
              >
                <User className="w-4 h-4" />
                <span className="font-bold text-xs sm:text-sm hidden lg:inline-block">Sala de Aula</span>
                <span className="bg-slate-950 text-[#FFC72C] text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded hidden sm:inline-block">ALUNO</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
                className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FFC72C]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Navigation Bar with Dropdown Submenus */}
      <div className="hidden lg:block bg-[#182333] border-b border-slate-800/80 shadow-md">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          <nav className="flex items-center justify-center gap-1.5 xl:gap-2.5 h-12 text-xs xl:text-sm font-medium">
            {/* 1. Início */}
              <button
                onClick={() => onNavigate('inicio')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  currentPage === 'home' || currentPage === 'inicio'
                    ? 'text-[#FFC72C] font-bold bg-white/5'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Início
              </button>

              {/* 2. Submenu: Produtos & Soluções */}
              <div className="relative group py-2">
                <button
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    ['categorias', 'categoria-detalhe', 'aplicativos', 'livraria'].includes(currentPage) || currentPage.startsWith('categoria:')
                      ? 'text-[#FFC72C] font-bold bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Produtos & Soluções</span>
                  <span className="text-[10px] bg-white/10 text-white font-bold px-1.5 py-0.2 rounded-full">20</span>
                  <span className="text-white/50 text-[10px] group-hover:rotate-180 transition-transform duration-200">▼</span>
                </button>

                {/* Dropdown Card */}
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 min-w-[260px] animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#1E293B] border border-slate-700/90 rounded-2xl p-2 shadow-2xl space-y-1">
                    <button
                      onClick={() => onNavigate('categorias')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                        currentPage === 'categorias'
                          ? 'bg-[#FFC72C]/15 text-[#FFC72C] font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <LayoutGrid className="w-4 h-4 text-amber-400 shrink-0" />
                        <div>
                          <div className="font-semibold text-xs">Categorias</div>
                          <div className="text-[10px] text-slate-400">20 áreas temáticas integradas</div>
                        </div>
                      </div>
                      <span className="bg-amber-400/20 text-amber-300 text-[10px] font-black px-1.5 py-0.5 rounded">20</span>
                    </button>

                    <button
                      onClick={() => onNavigate('categoria:landing-pages-biolinks')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage.startsWith('categoria:landing-pages-biolinks')
                          ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Sites & Biolinks</div>
                        <div className="text-[10px] text-slate-400">Estruturas prontas de alta conversão</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('aplicativos')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'aplicativos'
                          ? 'bg-blue-500/20 text-blue-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Apps & Dashboards</div>
                        <div className="text-[10px] text-slate-400">Soluções digitais para MEI e ME</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('livraria')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'livraria'
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Livraria</div>
                        <div className="text-[10px] text-slate-400">Obras publicadas dos autores à venda</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. Submenu: Certificação & Validação */}
              <div className="relative group py-2">
                <button
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    ['regras-certificacao-merito', 'informacoes-legais', 'diretrizes-protecao-autoria', 'diretrizes-pedagogicas', 'diretrizes-publicacao-parcerias', 'diretrizes-publicacao'].includes(currentPage)
                      ? 'text-[#FFC72C] font-bold bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Award className="w-3.5 h-3.5 text-sky-400" />
                  <span>Certificação & Validação</span>
                  <span className="text-white/50 text-[10px] group-hover:rotate-180 transition-transform duration-200">▼</span>
                </button>

                {/* Dropdown Card */}
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 min-w-[280px] animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#1E293B] border border-slate-700/90 rounded-2xl p-2 shadow-2xl space-y-1">
                    <button
                      onClick={() => onNavigate('regras-certificacao-merito')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'regras-certificacao-merito'
                          ? 'bg-[#FFC72C]/15 text-[#FFC72C] font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Diretrizes de Certificação</div>
                        <div className="text-[10px] text-slate-400">Escala de Autoria e Selos de Mérito</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('diretrizes-protecao-autoria')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'diretrizes-protecao-autoria'
                          ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Diretrizes de Proteção à Autoria</div>
                        <div className="text-[10px] text-slate-400">Salvaguarda intelectual e originalidade</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('diretrizes-pedagogicas')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'diretrizes-pedagogicas'
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Diretrizes Pedagógicas</div>
                        <div className="text-[10px] text-slate-400">Metodologia Freepremium e didática</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('diretrizes-publicacao')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'diretrizes-publicacao' || currentPage === 'diretrizes-publicacao-parcerias'
                          ? 'bg-blue-500/20 text-blue-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Handshake className="w-4 h-4 text-blue-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Diretrizes de Publicação</div>
                        <div className="text-[10px] text-slate-400">Normas para artigos, livros e parcerias</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('informacoes-legais')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'informacoes-legais'
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Scale className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Valor Legal dos Certificados</div>
                        <div className="text-[10px] text-slate-400">Lei 9.394/96 e validade nacional</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* 4. Submenu: Conteúdo & Publicações */}
              <div className="relative group py-2">
                <button
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    ['artigos', 'artigo-detalhe', 'blog', 'blog-post', 'podcasts'].includes(currentPage)
                      ? 'text-[#FFC72C] font-bold bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Conteúdo & Publicações</span>
                  <span className="text-white/50 text-[10px] group-hover:rotate-180 transition-transform duration-200">▼</span>
                </button>

                {/* Dropdown Card */}
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 min-w-[280px] animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#1E293B] border border-slate-700/90 rounded-2xl p-2 shadow-2xl space-y-1">
                    <button
                      onClick={() => onNavigate('artigos')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'artigos' || currentPage === 'artigo-detalhe'
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Repositório de Artigos</div>
                        <div className="text-[10px] text-slate-400">Pesquisas e estudos acadêmicos</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('blog')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'blog' || currentPage === 'blog-post'
                          ? 'bg-purple-500/20 text-purple-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Postagens de Blog</div>
                        <div className="text-[10px] text-slate-400">Artigos autorais e reflexões</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('podcasts')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'podcasts'
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Headphones className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Podcasts</div>
                        <div className="text-[10px] text-slate-400">Ensaios sonoros e áudios educativos</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('livraria')}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2.5 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Livros</div>
                        <div className="text-[10px] text-slate-400">Obras Diamante disponíveis para leitura</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* 5. Submenu: Institucional & Apoio */}
              <div className="relative group py-2">
                <button
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    ['sobre-nos', 'politicas', 'perguntas-frequentes', 'carta-aberta'].includes(currentPage)
                      ? 'text-[#FFC72C] font-bold bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Info className="w-3.5 h-3.5 text-slate-300" />
                  <span>Institucional & Apoio</span>
                  <span className="text-white/50 text-[10px] group-hover:rotate-180 transition-transform duration-200">▼</span>
                </button>

                {/* Dropdown Card */}
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 min-w-[260px] animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#1E293B] border border-slate-700/90 rounded-2xl p-2 shadow-2xl space-y-1">
                    <button
                      onClick={onOpenAbout}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'sobre-nos'
                          ? 'bg-[#FFC72C]/15 text-[#FFC72C] font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Info className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Sobre Nós</div>
                        <div className="text-[10px] text-slate-400">Nossa história e missão educacional</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('politicas')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'politicas'
                          ? 'bg-[#FFC72C]/15 text-[#FFC72C] font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Scale className="w-4 h-4 text-purple-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Nossas Políticas</div>
                        <div className="text-[10px] text-slate-400">Privacidade, LGPD e termos de uso</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('perguntas-frequentes')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'perguntas-frequentes'
                          ? 'bg-[#FFC72C]/15 text-[#FFC72C] font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <HelpCircle className="w-4 h-4 text-sky-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs">Perguntas Frequentes</div>
                        <div className="text-[10px] text-slate-400">Respostas para dúvidas comuns (FAQ)</div>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('carta-aberta')}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                        currentPage === 'carta-aberta'
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-[#FFC72C]" />
                      <div>
                        <div className="font-semibold text-xs">Carta Aberta</div>
                        <div className="text-[10px] text-slate-400">Manifesto educacional da fundação</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

            {/* Standalone Prominent "Validar Certificados" Button */}
            <button
              onClick={onOpenValidator}
              className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 transition-all text-xs shrink-0 cursor-pointer border border-emerald-400/80 ring-2 ring-emerald-400/20 group ml-2"
              id="btn-destaque-validar-certificado"
              title="Consulte a autenticidade de um certificado emitido pela ESDHUBEM"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
              <span>Validar Certificados</span>
              <span className="bg-emerald-950/60 text-emerald-300 text-[10px] font-black px-1.5 py-0.5 rounded ml-0.5">OFICIAL</span>
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
        <div className="lg:hidden bg-[#1E293B] border-t border-slate-700 px-4 py-4 space-y-4 shadow-2xl text-white">
          {/* Standalone Destaque Validar no Mobile */}
          <button
            onClick={() => { onOpenValidator(); setMobileMenuOpen(false); }}
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg border border-emerald-400 cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5 text-white" />
            <span>Validar Certificados (Oficial)</span>
          </button>

          <button onClick={() => { onNavigate('inicio'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold hover:bg-white/10">Início</button>

          {/* Grupo 1: Produtos & Soluções */}
          <div className="pt-2 border-t border-slate-700/80 space-y-1">
            <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider block px-3">Produtos & Soluções</span>
            <button onClick={() => { onNavigate('categorias'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 flex justify-between">
              <span>Categorias de Cursos</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">20</span>
            </button>
            <button onClick={() => { onNavigate('categoria:landing-pages-biolinks'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-emerald-400">Sites & Biolinks</button>
            <button onClick={() => { onNavigate('aplicativos'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-slate-200">Apps & Dashboards (MEI e ME)</button>
            <button onClick={() => { onNavigate('livraria'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-amber-300">Livraria (Obras à Venda)</button>
          </div>

          {/* Grupo 2: Certificação & Validação */}
          <div className="pt-2 border-t border-slate-700/80 space-y-1">
            <span className="text-[11px] font-extrabold text-sky-400 uppercase tracking-wider block px-3">Certificação & Validação</span>
            <button onClick={() => { onNavigate('regras-certificacao-merito'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-[#FFC72C] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFC72C]" />
              <span>Diretrizes de Certificação</span>
            </button>
            <button onClick={() => { onNavigate('diretrizes-protecao-autoria'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-emerald-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Diretrizes de Proteção à Autoria</span>
            </button>
            <button onClick={() => { onNavigate('diretrizes-pedagogicas'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-amber-300 hover:bg-white/10">Diretrizes Pedagógicas</button>
            <button onClick={() => { onNavigate('diretrizes-publicacao'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-blue-300 flex items-center gap-2">
              <Handshake className="w-4 h-4 text-blue-400" />
              <span>Diretrizes de Publicação</span>
            </button>
            <button onClick={() => { onNavigate('informacoes-legais'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-cyan-400 flex items-center gap-2">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Valor Legal dos Certificados</span>
            </button>
          </div>

          {/* Grupo 3: Conteúdo & Publicações */}
          <div className="pt-2 border-t border-slate-700/80 space-y-1">
            <span className="text-[11px] font-extrabold text-purple-400 uppercase tracking-wider block px-3">Conteúdo & Publicações</span>
            <button onClick={() => { onNavigate('artigos'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-cyan-400">Repositório de Artigos</button>
            <button onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-purple-300">Postagens de Blog</button>
            <button onClick={() => { onNavigate('podcasts'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#FFC72C] hover:bg-white/10 flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#FFC72C]" />
              <span>Podcasts & Ensaios Sonoros</span>
            </button>
            <button onClick={() => { onNavigate('livraria'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-emerald-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Livros (Obras Diamante)</span>
            </button>
          </div>

          {/* Grupo 4: Institucional */}
          <div className="pt-2 border-t border-slate-700/80 space-y-1">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block px-3">Institucional & Apoio</span>
            <button onClick={() => { onOpenAbout(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Sobre Nós</button>
            <button onClick={() => { onNavigate('politicas'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Nossas Políticas</button>
            <button onClick={() => { onNavigate('perguntas-frequentes'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Perguntas Frequentes</span>
            </button>
            <button onClick={() => { onNavigate('carta-aberta'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-amber-300 hover:bg-white/10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFC72C]" />
              <span>Carta Aberta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
