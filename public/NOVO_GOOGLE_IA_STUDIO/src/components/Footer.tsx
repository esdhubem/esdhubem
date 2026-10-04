import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CreditCard,
  QrCode,
  Sun,
  ShieldCheck,
  Sparkles,
  Send,
  CheckCircle2,
  ArrowUp,
  Heart,
  Award,
  Eye,
  Bookmark
} from 'lucide-react';
import newsletterImg from '../assets/newsletter.jpg';
import esdhubemLogo from '../assets/esdhubem-logo.png';

interface FooterProps {
  onSelectCategory: (categoryName: string) => void;
  onOpenValidator: () => void;
  onOpenAbout: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenCertificatePreview?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenValidator,
  onOpenAbout,
  onNavigate,
  onOpenCertificatePreview
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-slate-300 pt-12 pb-8 border-t border-slate-800 relative">
      {/* Banner / Pre-Footer "Imagem ilustrativa" with supportive counseling/learning vibe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#182333] via-[#243042] to-[#1e293b] text-white p-6 sm:p-10 shadow-xl border border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Visual with "Imagem ilustrativa" tag */}
          <div className="w-full md:w-5/12 relative rounded-2xl overflow-hidden shadow-lg h-56 sm:h-64 shrink-0 bg-slate-900">
            <img
              src={newsletterImg}
              alt="Atendimento humanizado e mentoria ESDHUBEM"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/20">
              Imagem ilustrativa
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
              Mentoria e desenvolvimento contínuo para sua carreira e bem-estar.
            </div>
          </div>

          {/* Newsletter Box inside the pre-footer */}
          <div className="w-full md:w-7/12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 fill-[#FFC72C]" />
              <span>Comunidade ESDHUBEM</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Assine nossa newsletter
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
              Receba nossos conteúdos exclusivos, novidades sobre lançamentos de cursos e dicas valiosas para acelerar o seu desenvolvimento e alavancar a sua carreira! Assine agora e faça parte da comunidade ESDHUBEM.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="pt-2">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="flex-1 bg-white text-slate-900 placeholder-slate-400 px-4 py-3 rounded-xl sm:rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="bg-[#FFC72C] hover:bg-[#F5B014] active:scale-95 text-slate-950 font-bold px-6 py-3 rounded-xl sm:rounded-full text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-md"
                  id="newsletter-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>Inscrever</span>
                </button>
              </div>

              {subscribed && (
                <div className="mt-2 text-xs font-semibold text-amber-300 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC72C]" />
                  <span>Obrigado! Seu e-mail foi cadastrado com sucesso.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid - 4 Distinctly Colored Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800 text-xs sm:text-sm">
          {/* Coluna 1 — CONTATO & ESCOLA (Accent: Amber / Ouro) */}
          <div className="rounded-2xl p-5 bg-slate-900/80 border border-amber-500/30 shadow-lg space-y-4 flex flex-col justify-between">
            <div>
              <div className="mb-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white/5 flex items-center justify-center p-1 border border-amber-400/40 shadow-md">
                <img src={esdhubemLogo} alt="ESDHUBEM Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              
              <h4 className="text-amber-400 font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Contato & Escola
              </h4>
              <p className="text-white font-semibold text-xs mt-1">
                ESDHUBEM — Educação Integral
              </p>

              <div className="mt-4 space-y-2.5 text-slate-300 text-xs">
                <a
                  href="https://wa.me/5511960319837"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-amber-300 transition-colors group"
                  id="footer-contact-phone"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">(11) 96031-9837</span>
                </a>

                <a
                  href="mailto:esdhubem@proton.me"
                  className="flex items-center gap-2.5 hover:text-amber-300 transition-colors group"
                  id="footer-contact-email"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="break-all text-slate-200 group-hover:text-amber-300 transition-colors">esdhubem@proton.me</span>
                </a>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span>Atend.: 9h–17h • Seg–Sex</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>São Paulo / SP — Brasil</span>
                </div>
              </div>
            </div>

            {/* Métodos de Pagamento */}
            <div className="pt-4 border-t border-amber-500/20 mt-2">
              <h5 className="text-amber-300 font-bold text-[11px] uppercase tracking-wider mb-2">
                Métodos de Pagamento
              </h5>
              <div className="flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
                  <QrCode className="w-3 h-3 text-emerald-400" />
                  Pix
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-blue-500/30 text-blue-300 text-[11px] font-semibold">
                  <CreditCard className="w-3 h-3 text-blue-400" />
                  Cartão
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
                  <Bookmark className="w-3 h-3 text-amber-400" />
                  Boleto
                </span>
              </div>
            </div>
          </div>

          {/* Coluna 2 — NAVEGAÇÃO PRINCIPAL (Accent: Esmeralda / Verde) */}
          <div className="rounded-2xl p-5 bg-slate-900/80 border border-emerald-500/30 shadow-lg space-y-4">
            <h4 className="text-emerald-400 font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Navegação Principal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Início</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categorias')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Categorias de Cursos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sala-de-aula')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2 font-medium"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Sala de Aula</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('livraria')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Livraria & Materiais</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Blog</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Sobre Nós</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Contato</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('perguntas-frequentes')}
                  className="hover:text-[#FFC72C] font-semibold transition-colors cursor-pointer text-left text-amber-300 flex items-center gap-2"
                >
                  <span className="text-[#FFC72C]">•</span>
                  <span>Perguntas Frequentes (FAQ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('podcasts')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Podcasts & Ensaios Sonoros</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('aplicativos')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Aplicativos & Dashboards</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categoria:landing-pages-biolinks')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  <span>Sites & Biolinks</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — CERTIFICAÇÃO & APRENDIZAGEM (Accent: Azul / Ciano) */}
          <div className="rounded-2xl p-5 bg-slate-900/80 border border-sky-500/30 shadow-lg space-y-4">
            <h4 className="text-sky-400 font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Certificação & Aprendizagem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenValidator}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2 font-semibold"
                >
                  <span className="text-sky-400">•</span>
                  <span>Validar Certificado</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('regras-certificacao-merito')}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-sky-400">•</span>
                  <span>Regras de Certificação</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCertificatePreview?.()}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-sky-400">•</span>
                  <span>Modelo de Certificado</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informacoes-legais')}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-sky-400">•</span>
                  <span>Valor Legal dos Certificados</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artigos')}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-sky-400">•</span>
                  <span>Artigos de Estudo & Pesquisa</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diretrizes-publicacao')}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-sky-400">•</span>
                  <span>Diretrizes de Publicação</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diretrizes-protecao-autoria')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left text-emerald-300 flex items-center gap-2 font-medium"
                >
                  <span className="text-emerald-400">•</span>
                  <span>Proteção à Autoria</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diretrizes-pedagogicas')}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-sky-400">•</span>
                  <span>Diretrizes Pedagógicas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gerador-abnt')}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-sky-400">•</span>
                  <span>Gerador de Referências ABNT</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('secretaria-documentacao')}
                  className="hover:text-sky-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-sky-400">•</span>
                  <span>Secretaria & Serviços Acadêmicos</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4 — LEGAL & TRANSPARÊNCIA (Accent: Púrpura / Violeta) */}
          <div className="rounded-2xl p-5 bg-slate-900/80 border border-purple-500/30 shadow-lg space-y-4">
            <h4 className="text-purple-400 font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              Legal & Transparência
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('politicas')}
                  className="hover:text-purple-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>Política de Privacidade & LGPD</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informacoes-legais')}
                  className="hover:text-purple-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>Termos de Uso & Responsabilidades</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('politica-pagamento')}
                  className="hover:text-purple-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>Política de Pagamento & Reembolso</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informacoes-legais')}
                  className="hover:text-purple-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>Código de Conduta</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenValidator}
                  className="hover:text-purple-300 transition-colors cursor-pointer text-left text-slate-200 flex items-center gap-2 font-semibold"
                >
                  <span className="text-purple-400">•</span>
                  <span>Verificação Antifraude</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('direitos-aluno')}
                  className="hover:text-purple-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>Horas Complementares & Amparo Legal</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('corpo-docente')}
                  className="hover:text-purple-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>Corpo Docente & Especialistas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informacoes-legais')}
                  className="hover:text-purple-300 transition-colors cursor-pointer text-left text-slate-300 flex items-center gap-2"
                >
                  <span className="text-purple-400">•</span>
                  <span>Dados Institucionais & Coordenação</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 ESDHUBEM — Escola de Desenvolvimento Humano e Bem-Estar. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 shrink-0"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legal Info Modal */}
      {legalModalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-lg text-slate-900">
                {legalModalTitle}
              </h3>
              <button
                onClick={() => setLegalModalTitle(null)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed max-h-80 overflow-y-auto">
              <p>
                A <strong>ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61928778000150)</strong> atua com transparência, segurança de dados e respeito ao consumidor.
              </p>
              <p>
                <strong>Certificação e Direitos:</strong> Nossos cursos livres são amparados pelo Decreto Federal nº 5.154/04 e Lei 9.394/96. O acesso às videoaulas é 100% livre no modelo Freepremium. Apenas a emissão do certificado com validação oficial e QR Code possui taxa administrativa.
              </p>
              <p>
                <strong>Reembolsos & Garantia:</strong> Para cursos pagos e emissão de certificados, garantimos reembolso integral em até 7 dias corridos caso o conteúdo não atenda às suas expectativas, conforme o Código de Defesa do Consumidor.
              </p>
              <p>
                <strong>Atendimento Oficial:</strong> Dúvidas podem ser encaminhadas diretamente ao e-mail <code>esdhubem@proton.me</code> ou telefone <code>(11) 960319637</code> de segunda a sexta, das 9h às 17h.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModalTitle(null)}
                className="px-4 py-2 bg-[#243042] text-white text-xs font-bold rounded-xl hover:bg-[#182333] cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
