import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  FileText,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  MessageCircle,
  Eye,
  FileCheck,
  Building2,
  Scale,
  BrainCircuit,
  Share2,
  Upload,
  BookMarked,
  Globe,
  Layers,
  XCircle
} from 'lucide-react';

interface RegrasCertificacaoMeritoPageProps {
  onBackToHome: () => void;
  onOpenValidator?: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigateToArticles?: () => void;
}

export const RegrasCertificacaoMeritoPage: React.FC<RegrasCertificacaoMeritoPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigateToArticles
}) => {
  const [selectedTier, setSelectedTier] = useState<'all' | 'bronze' | 'prata' | 'ouro' | 'diamante'>('all');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-20">
      
      {/* Top Breadcrumbs */}
      <div className="bg-[#011049] border-b border-blue-900/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-slate-300">Secretaria Acadêmica</span>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Diretrizes de Certificação e Escala de Autoria</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FFC72C]" />
            <span>Sistema de Selos de Autoria: Bronze, Prata, Ouro e Diamante</span>
          </div>
        </div>
      </div>

      {/* Hero Header com Azul Profundo Navy #011049 */}
      <header className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 shadow-lg">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <GraduationCap className="w-4 h-4" />
              <span>Escala de Autoria</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Diretrizes de Certificação e <br className="hidden sm:inline" />
              <span className="text-[#FFC72C]">Escala de Autoria</span>
            </h1>

            <p className="text-white text-base sm:text-lg font-normal leading-relaxed text-slate-100">
              Valorize sua jornada de estudos! Na ESDHUBEM, além da conclusão do curso, você pode elevar a categoria do seu certificado conquistando Selos de Autoria (Bronze, Prata, Ouro e Diamante) através da publicação de verbetes na Wiki Oficial, artigos de blog, manuscritos com registro DOI ou Livros na Biblioteca Nacional.
            </p>
          </div>

          {/* Quick Stat Box */}
          <div className="bg-[#011049]/90 border border-blue-800/80 p-6 rounded-2xl shadow-xl max-w-sm w-full space-y-4 shrink-0 backdrop-blur-xs">
            <div className="text-xs font-bold text-[#FFC72C] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFC72C]" />
              <span>4 Categorias de Mérito</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-amber-900/30 border border-amber-600/40 text-amber-300 font-bold flex items-center gap-2">
                <span className="text-base">🥉</span> Bronze
              </div>
              <div className="p-2.5 rounded-xl bg-slate-700/50 border border-slate-500/40 text-slate-200 font-bold flex items-center gap-2">
                <span className="text-base">🥈</span> Prata
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-400 font-bold flex items-center gap-2">
                <span className="text-base">🥇</span> Ouro
              </div>
              <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-bold flex items-center gap-2">
                <span className="text-base">💎</span> Diamante
              </div>
            </div>

            <p className="text-[11px] text-blue-200/80 leading-tight pt-1">
              ✓ Cada nível concede uma insígnia exclusiva impressa no certificado e cadastrada no registro público de validação.
            </p>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Por que criamos as Diretrizes de Publicação e a Escala de Autoria? */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white via-slate-50/80 to-blue-50/40 rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-6 relative overflow-hidden backdrop-blur-xs">
            {/* Barra decorativa superior */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#011049] via-[#0047AB] to-[#FFC72C]" />

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                  Propósito Pedagógico & Institucional
                </span>
                <h2 className="font-extrabold text-[#011049] text-2xl sm:text-3xl tracking-tight">
                  Por que criamos as Diretrizes de Publicação e a Escala de Autoria?
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
              <p>
                A <strong className="text-[#011049] font-bold">ESDHUBEM</strong> instituiu estas diretrizes e a Escala de Autoria para oferecer um caminho claro, seguro e valorizado para quem deseja ir além da simples conclusão de um curso.
              </p>
              <p>
                Nosso espaço de publicação é destinado aos alunos que, ao finalizarem sua formação, escolhem entregar um manuscrito como trabalho de conclusão com o propósito de desenvolver a prática da escrita e receber um reconhecimento que reflete verdadeiramente o esforço e a dedicação aplicados.
              </p>
              <p>
                Sabemos que muitos chegam até nós buscando preparo para desafios reais: elaborar Trabalhos de Conclusão de Curso, redações do ENEM, provas de concursos públicos, artigos para revistas científicas, livros, conteúdos para a internet e, sobretudo, para se expressar com clareza no ambiente profissional e nas relações pessoais. A Escala de Autoria foi estruturada justamente para acompanhar cada etapa desse crescimento: do primeiro texto prático ao trabalho de maior extensão e profundidade.
              </p>
              <p>
                Acreditamos que saber ler e escrever com clareza não é apenas uma habilidade técnica, é uma forma de compreender o mundo, de compartilhar ideias e de exercer a cidadania plena. Por isso, organizamos níveis, critérios e proteções para que cada aluno possa praticar, publicar e crescer com segurança, reconhecimento e total respeito à sua autoria.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMO FUNCIONA CADA SELO DE CERTIFICAÇÃO */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <BookMarked className="w-4 h-4" />
              <span>Escala de Autoria & Mérito</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Como Funciona Cada Selo de Certificação
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Conheça os requisitos de cada nível, a complexidade dos manuscritos, o destino da publicação, o nível da certificação de acordo com o tipo de produção e os benefícios para seu portfólio e currículo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* TIER 1: BRONZE */}
            <div className="bg-white rounded-3xl border-2 border-amber-700/30 p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-2xl shrink-0">
                      🥉
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Nível Bronze: Aproveitamento Básico</h3>
                      <span className="text-sm text-amber-800 font-semibold">Tríade da Assimilação Ativa & Verbete Enciclopédico na Wiki</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                      Complexidade: Baixa (Fixação)
                    </span>
                    <span className="bg-amber-800 text-amber-100 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Selo 🥉 Bronze
                    </span>
                  </div>
                </div>

                {/* Quadro Único Explicativo Completo */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-sm space-y-4 text-slate-800">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Focado na consolidação prática do aprendizado através da <strong>metodologia pedagógica de Assimilação Ativa</strong> da ESDHUBEM. O aluno assiste às aulas completas e valida sua absorção entregando a tríade da assimilação ativa para publicação na <strong>Wiki da Escola</strong>:
                  </p>
                  
                  <div className="space-y-2.5 pt-2 border-t border-amber-200/60">
                    <strong className="block text-sm font-bold text-amber-950 uppercase tracking-wide">📌 Requisitos & Entregáveis:</strong>
                    <ul className="space-y-2 text-sm text-slate-700 pl-1 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-800 font-bold shrink-0 text-base">🧠</span>
                        <span><strong>Mapa Mental do Conteúdo:</strong> Diagrama visual desenhado à mão estruturando os conceitos centrais e conexões pedagógicas do tema.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-800 font-bold shrink-0 text-base">✍️</span>
                        <span><strong>Verbete Enciclopédico (500 a 800 palavras):</strong> Texto formal e informativo escrito à mão conceituando o tema central (significado, histórico e aplicação prática).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-800 font-bold shrink-0 text-base">🎙️</span>
                        <span><strong>Áudio Explicativo de 1 Minuto:</strong> Gravação de voz de 60 segundos sintetizando oralmente o conceito com clareza (Técnica Feynman de retenção).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/95 p-3.5 rounded-xl border border-amber-200 text-slate-800 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-amber-900 uppercase font-bold tracking-wider">📍 Destino da Publicação:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Wiki Oficial da ESDHUBEM com registro de autoria no OSF (Open Science Framework).</span>
                    </div>
                    <div className="bg-white/95 p-3.5 rounded-xl border border-amber-200 text-slate-800 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-amber-900 uppercase font-bold tracking-wider">📜 Certificação Emitida:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Certificado Oficial com chancela de Conclusão e Selo Bronze.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 2: PRATA */}
            <div className="bg-white rounded-3xl border-2 border-slate-300 p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center text-2xl shrink-0">
                      🥈
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Nível Prata: Produção de Conteúdo</h3>
                      <span className="text-sm text-slate-600 font-semibold">Tríade da Assimilação Ativa + Artigo de Blog (1.200 a 2.500 palavras)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300">
                      Complexidade: Média-Baixa (Divulgação)
                    </span>
                    <span className="bg-slate-700 text-slate-100 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Selo 🥈 Prata
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-4 text-slate-800">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    O estudante entrega a <strong>Tríade da Assimilação Ativa</strong> do curso <strong>MAIS</strong> um artigo de blog aprofundado e estratégico de <strong>1.200 a 2.500 palavras</strong> — extensão de referência para construir autoridade temática sólida, manter alta retenção de leitura e ranquear com destaque nas primeiras posições do <strong>Google (SEO)</strong>. Publicado no Blog Oficial da ESDHUBEM com perfil de autor.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-200">
                    <strong className="block text-sm font-bold text-slate-900 uppercase tracking-wide">📌 Requisitos & Entregáveis Obrigatórios:</strong>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                      <li><strong>Entrega da Tríade da Assimilação Ativa:</strong> Mapa mental, verbete enciclopédico para a Wiki e áudio de 1 minuto do curso.</li>
                      <li><strong>Artigo Autoral de Blog:</strong> Redação aprofundada de <strong>1.200 a 2.500 palavras</strong> estruturada para SEO (títulos H2/H3, estudo prático e referências).</li>
                      <li><strong>Comprovante de Registro no OSF:</strong> Registro de autoria no Open Science Framework garantindo anterioridade e titularidade.</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-slate-800 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-slate-700 uppercase font-bold tracking-wider">📍 Destino da Publicação:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Blog Oficial da ESDHUBEM com link público de autor e registro OSF.</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-slate-800 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-slate-700 uppercase font-bold tracking-wider">📜 Certificação Emitida:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Certificado Oficial com Selo de Mérito Prata e link de autor no blog.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 3: OURO */}
            <div className="bg-white rounded-3xl border-2 border-amber-400 p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400 flex items-center justify-center text-2xl shrink-0">
                      🥇
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Nível Ouro: Pesquisa & Preprint</h3>
                      <span className="text-sm text-amber-700 font-semibold">Tríade da Assimilação Ativa + Manuscrito Científico / DOI</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold border border-amber-300">
                      Complexidade: Média-Alta (Pesquisa)
                    </span>
                    <span className="bg-[#FFC72C] text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Selo 🥇 Ouro
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-sm space-y-4 text-slate-800">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    O estudante entrega a <strong>Tríade da Assimilação Ativa</strong> do curso <strong>MAIS</strong> um Trabalho de Conclusão de Curso (TCC) estruturado ou artigo científico de investigação densa, com depósito em plataforma de repositório aberto como Zenodo (CERN) ou OSF, garantindo um código <strong>DOI (Digital Object Identifier)</strong> universal.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-amber-200">
                    <strong className="block text-sm font-bold text-amber-950 uppercase tracking-wide">📌 Requisitos & Entregáveis Obrigatórios:</strong>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                      <li><strong>Entrega da Tríade da Assimilação Ativa:</strong> Mapa mental, verbete enciclopédico para a Wiki e áudio de 1 minuto do curso.</li>
                      <li><strong>Manuscrito de Pesquisa / TCC:</strong> Produção estruturada com ementa acadêmica, introdução, fundamentação teórica e metodologia.</li>
                      <li><strong>Depósito e Atribuição de DOI:</strong> Depósito no repositório Zenodo / OSF gerando DOI permanente para citação no Currículo Lattes.</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-amber-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-amber-950 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-amber-900 uppercase font-bold tracking-wider">📍 Destino da Publicação:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Portal de Artigos da Escola & Repositório Zenodo/OSF com registro DOI.</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-amber-950 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-amber-900 uppercase font-bold tracking-wider">📜 Certificação Emitida:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Certificado com Selo Ouro de Pesquisa e citação oficial do DOI.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 4: DIAMANTE */}
            <div className="bg-white rounded-3xl border-2 border-cyan-400 p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-2xl shrink-0">
                      💎
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Nível Diamante: Autorar e Construir</h3>
                      <span className="text-sm text-cyan-700 font-semibold">Tríade da Assimilação Ativa + Livro Autoral (Mín. 50 páginas)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold border border-cyan-200">
                      Complexidade: Alta (Autoral)
                    </span>
                    <span className="bg-cyan-600 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Selo 💎 Diamante
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-cyan-50/70 border border-cyan-200 text-sm space-y-4 text-slate-800">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    O nível mais elevado da escala autoral. O estudante entrega a <strong>Tríade da Assimilação Ativa</strong> do curso <strong>MAIS</strong> uma obra autoral completa de maior extensão (livro com no mínimo 50 páginas de conteúdo desenvolvido), com orientação estrutural e registro formal de direitos autorais.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-cyan-200">
                    <strong className="block text-sm font-bold text-cyan-950 uppercase tracking-wide">📌 Requisitos & Entregáveis Obrigatórios:</strong>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                      <li><strong>Entrega da Tríade da Assimilação Ativa:</strong> Mapa mental, verbete enciclopédico para a Wiki e áudio de 1 minuto do curso.</li>
                      <li><strong>Livro Autoral Completo:</strong> Mínimo de 50 páginas de conteúdo textual desenvolvido (sem contar elementos pré e pós-textuais).</li>
                      <li><strong>Registro de Direitos Autorais:</strong> Registro formal da obra na Fundação Biblioteca Nacional (EDA/FBN) e no OSF (Lei nº 9.610/1998).</li>
                      <li><strong>Chancela Diamante:</strong> Destaque no Mural de Livros da ESDHUBEM e QR Code de validação no certificado.</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-cyan-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-cyan-200 text-cyan-950 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-cyan-900 uppercase font-bold tracking-wider">📍 Destino da Publicação:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Mural de Livros / Livraria Digital da ESDHUBEM + Registro EDA na Biblioteca Nacional e OSF.</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-cyan-200 text-cyan-950 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-cyan-900 uppercase font-bold tracking-wider">📜 Certificação Emitida:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Certificado de Honraria Máxima com Chancela Diamante e QR Code.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: FLUXO DE SUBMISSÃO PARA O ALUNO */}
        <section className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 border border-blue-900/60 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              Passo a Passo de Upgrade
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Como Submeter seu Trabalho e Elevar seu Selo
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90">
              Siga o fluxo simplificado da nossa comissão acadêmica para validar seu artigo ou TCC:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-[#011049]/90 border border-blue-800/80 hover:border-cyan-400/50 hover:bg-[#061e47] transition-all shadow-md backdrop-blur-xs space-y-3 group">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                1
              </span>
              <h4 className="font-bold text-white text-base">Escreva seu Trabalho</h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Desenvolva seu mapa mental e síntese (Bronze), artigo de blog de 1.200 a 2.500 palavras (Prata), TCC/artigo científico (Ouro) ou livro autoral (Diamante).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#011049]/90 border border-blue-800/80 hover:border-cyan-400/50 hover:bg-[#061e47] transition-all shadow-md backdrop-blur-xs space-y-3 group">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                2
              </span>
              <h4 className="font-bold text-white text-base">Envie para Avaliação</h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Submeta os arquivos (PDF, DOCX, imagem do mapa mental ou áudio) através do e-mail da coordenação ou suporte acadêmico via WhatsApp.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#011049]/90 border border-blue-800/80 hover:border-cyan-400/50 hover:bg-[#061e47] transition-all shadow-md backdrop-blur-xs space-y-3 group">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                3
              </span>
              <h4 className="font-bold text-white text-base">Revisão Editorial</h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Nossa equipe de docentes e pareceristas revisa a produção acadêmica e orienta as adequações ou indexação DOI.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#011049]/90 border border-blue-800/80 hover:border-cyan-400/50 hover:bg-[#061e47] transition-all shadow-md backdrop-blur-xs space-y-3 group">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                4
              </span>
              <h4 className="font-bold text-white text-base">Emissão do Selo</h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                O seu certificado é atualizado no sistema com o Selo de Mérito correspondente (Bronze, Prata, Ouro ou Diamante) e link de validação pública.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION: Sobre a Revisão de Trabalhos */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <FileCheck className="w-4 h-4 text-amber-600" />
              <span>Processo Editorial & Orientação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#182333] tracking-tight">
              Sobre a Revisão de Trabalhos
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              A <strong className="text-slate-900 font-bold">ESDHUBEM</strong> oferece orientação e revisão dos textos enviados. Nosso papel é aprimorar, nunca substituir o autor.
            </p>
          </div>

          {/* O que fazemos vs O que NÃO fazemos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* O que fazemos */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>O que fazemos:</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Revisão linguística:</strong> ortografia, gramática, acentuação e clareza
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Organização:</strong> estrutura de títulos, parágrafos e seções
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Leitura crítica:</strong> coerência, encadeamento das ideias e sugestões de aprofundamento
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Ajustes de visibilidade:</strong> nos níveis aplicáveis, orientação sobre boas práticas de escrita para mecanismos de busca (SEO)
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Padronização:</strong> referências, citações e formato conforme o nível de publicação
                  </div>
                </li>
              </ul>
            </div>

            {/* O que NÃO fazemos */}
            <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-rose-900 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>O que NÃO fazemos:</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">❌</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Não reescrevemos</strong> o texto em lugar do autor
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">❌</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Não criamos</strong> conteúdo novo que não seja do participante
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">❌</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Não alteramos</strong> a mensagem, a opinião ou a voz do autor
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">❌</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Não realizamos</strong> revisão por pares nem revisão acadêmica oficial — essa avaliação é própria de instituições de ensino superior e periódicos científicos;
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Como funciona */}
          <div className="space-y-4 pt-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#182333] flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-600" />
              <span>Como funciona:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] font-black text-xs flex items-center justify-center">
                  1
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Você envia seu texto
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Envio do manuscrito ou artigo prático pela plataforma ou suporte acadêmico.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] font-black text-xs flex items-center justify-center">
                  2
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Leitura e comentários
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Nossa equipe lê e devolve com comentários e ajustes sugeridos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] font-black text-xs flex items-center justify-center">
                  3
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Você revisa e decide
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Você revisa, ajusta e devolve, o texto é seu, você decide.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  4
                </div>
                <div className="text-xs sm:text-sm font-bold text-emerald-950">
                  Aprovado → Publicado!
                </div>
                <p className="text-[11px] text-emerald-800 leading-tight">
                  Trabalho publicado e emissão do selo correspondente.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Block */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border-l-4 border-amber-500 text-slate-800 italic text-sm sm:text-base font-medium">
            “A revisão existe para dar clareza ao que você pensou, não para colocar palavras que você não disse.”
          </div>

        </section>

        {/* SECTION: Sobre Revisão, Ajustes e Reembolso */}
        <section className="text-slate-800 space-y-6 max-w-4xl mx-auto py-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="font-extrabold text-[#182333] text-2xl sm:text-3xl tracking-tight">
              Sobre Revisão, Ajustes e Reembolso
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Caso o aluno não concorde com as sugestões e orientações da revisão, tem todo o direito de solicitar o reembolso do valor pago. Nessa situação:
            </p>

            <ul className="space-y-3 pl-1 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                <span>
                  <strong className="text-slate-900 font-bold">Será emitido e entregue o Certificado Bronze</strong> de Conclusão de Curso, referente à participação e aproveitamento do conteúdo;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                <span>
                  <strong className="text-slate-900 font-bold">Do valor total, será descontada</strong> a taxa correspondente à emissão do certificado e ao suporte pedagógico prestado;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                <span>
                  <strong className="text-slate-900 font-bold">O valor restante</strong> será devolvido em até 7 dias úteis.
                </span>
              </li>
            </ul>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-2">
              <strong className="text-slate-700 font-semibold">Justificativa:</strong> O trabalho de análise, leitura e orientação já foi realizado pela equipe — por isso, a emissão do certificado Bronze e o desconto correspondente reconhecem o atendimento e a participação no percurso, devolvendo o que excede esse valor.
            </p>
          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION BANNER */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#011049] via-[#061e47] to-[#011049] border border-blue-900/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
          <div className="space-y-1 text-center md:text-left relative z-10">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#FFC72C]" />
              Pronto para transformar seu estudo em uma publicação real?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90">
              Explore nossos artigos científicos já publicados ou submeta seu trabalho para a coordenação acadêmica.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
            {onNavigateToArticles && (
              <button
                onClick={onNavigateToArticles}
                className="px-5 py-3 bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Artigos Publicados</span>
              </button>
            )}

            {onOpenCertificatePreview && (
              <button
                onClick={onOpenCertificatePreview}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-slate-600 shadow-md hover:scale-105"
              >
                <Eye className="w-4 h-4 text-[#FFC72C]" />
                <span>Ver Modelo do Certificado</span>
              </button>
            )}

            <a
              href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20submeter%20meu%20artigo%20ou%20TCC%20para%20avaliação%20de%20mérito%20de%20autoria."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Submeter via WhatsApp</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
