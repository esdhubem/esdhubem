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
      <div className="bg-[#182333] border-b border-slate-700/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
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

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
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

            <p className="text-[#FFC72C] text-base sm:text-lg font-semibold leading-relaxed">
              Valorize sua jornada de estudos! Na ESDHUBEM, além da conclusão do curso, você pode elevar a categoria do seu certificado conquistando Selos de Autoria (Bronze, Prata, Ouro e Diamante) através da publicação de artigos de blog, manuscritos com registro DOI ou Livros na Biblioteca Nacional.
            </p>
          </div>

          {/* Quick Stat Box */}
          <div className="bg-[#182333] border border-slate-700 p-6 rounded-2xl shadow-xl max-w-sm w-full space-y-4 shrink-0">
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

            <p className="text-[11px] text-slate-400 leading-tight pt-1">
              ✓ Cada nível concede uma insígnia exclusiva impressa no certificado e cadastrada no registro público de validação.
            </p>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Por que criamos as Diretrizes de Publicação e a Escala de Autoria? */}
        <section className="text-slate-800 space-y-6 max-w-4xl mx-auto py-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="font-extrabold text-[#182333] text-2xl sm:text-3xl tracking-tight">
              Por que criamos as Diretrizes de Publicação e a Escala de Autoria?
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              A <strong className="text-slate-900 font-bold">ESDHUBEM</strong> instituiu estas diretrizes e a Escala de Autoria para oferecer um caminho claro, seguro e valorizado para quem deseja ir além da simples conclusão de um curso.
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
        </section>

        {/* SUMMARY TABLE SECTION */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <Layers className="w-4 h-4" />
              <span>Quadro Geral de Classificação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
              Estrutura Unificada das Categorias de Certificado
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare os requisitos de cada selo e saiba onde sua produção acadêmica ou profissional será publicada e divulgada.
            </p>
          </div>

          {/* Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#182333] text-white border-b border-slate-700">
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Categoria / Selo</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Requisito Principal</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Destino da Publicação</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Complexidade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {/* Bronze */}
                  <tr className="hover:bg-amber-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-amber-900 flex items-center gap-2">
                      <span className="text-xl">🥉</span>
                      <div>
                        <strong className="block text-slate-900">Bronze</strong>
                        <span className="text-[11px] text-amber-700 font-normal">Aproveitamento Básico</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      Responder às perguntas de múltipla escolha dos questionários de fixação.
                    </td>
                    <td className="py-4 px-6">
                      Sistema interno da escola (Painel EAD do Aluno).
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                        Baixa (Fixação)
                      </span>
                    </td>
                  </tr>

                  {/* Prata */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800 flex items-center gap-2">
                      <span className="text-xl">🥈</span>
                      <div>
                        <strong className="block text-slate-900">Prata</strong>
                        <span className="text-[11px] text-slate-500 font-normal">Produção de Conteúdo</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      Escrever um artigo curto e prático assinado pelo aluno.
                    </td>
                    <td className="py-4 px-6">
                      Blog Oficial da ESDHUBEM (com link público de autor para portfólio).
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold">
                        Média-Baixa (Divulgação)
                      </span>
                    </td>
                  </tr>

                  {/* Ouro */}
                  <tr className="hover:bg-amber-50/70 transition-colors">
                    <td className="py-4 px-6 font-bold text-amber-700 flex items-center gap-2">
                      <span className="text-xl">🥇</span>
                      <div>
                        <strong className="block text-slate-900">Ouro</strong>
                        <span className="text-[11px] text-amber-600 font-normal">Pesquisa & Preprint</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      Enviar o TCC estruturado <strong>OU</strong> publicar um artigo em repositório de Preprint.
                    </td>
                    <td className="py-4 px-6">
                      Página de Artigos de Estudo e Pesquisa da Escola / Repositórios (Zenodo, OSF, SciELO) com registro <strong>DOI</strong>.
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
                        Média-Alta (Pesquisa)
                      </span>
                    </td>
                  </tr>

                  {/* Diamante */}
                  <tr className="hover:bg-cyan-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-cyan-900 flex items-center gap-2">
                      <span className="text-xl">💎</span>
                      <div>
                        <strong className="block text-slate-900">Diamante</strong>
                        <span className="text-[11px] text-cyan-700 font-normal">Publicação de Livro</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      Produzir um livro autoral com mínimo de 50 páginas de conteúdo e realizar o registro de direitos autorais.
                    </td>
                    <td className="py-4 px-6">
                      Mural de Livros / Livraria Digital da ESDHUBEM + Registro Formal de Direitos Autorais.
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold">
                        Alta (Autoral)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 2: DETALHAMENTO DE CADA NÍVEL DE MÉRITO */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <BookMarked className="w-4 h-4" />
              <span>Detalhamento dos Requisitos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Como Funciona Cada Selo de Certificação
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Entenda os objetivos pedagógicos, os benefícios para seu currículo Lattes/LinkedIn e como conquistar cada nível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* TIER 1: BRONZE */}
            <div className="bg-white rounded-3xl border-2 border-amber-700/30 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-800 text-amber-100 text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Selo 🥉 Bronze
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-2xl shrink-0">
                  🥉
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nível Bronze: Aproveitamento Básico</h3>
                  <span className="text-xs text-amber-800 font-semibold">Fixação e Retenção do Conteúdo</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Focado na retenção e absorção do conhecimento ministrado nas videoaulas. O aluno assiste às aulas completas e valida seu aprendizado respondendo aos questionários automáticos de múltipla escolha da plataforma EAD.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs space-y-2 text-amber-900">
                <strong>📌 Requisitos & Entregáveis:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Visualização de 100% dos módulos do curso.</li>
                  <li>Aprovação nos questionários com nota mínima 7.0.</li>
                  <li><strong>Certificado Emitido:</strong> Certificado Padrão com chancela de Conclusão e Selo Bronze.</li>
                </ul>
              </div>
            </div>

            {/* TIER 2: PRATA */}
            <div className="bg-white rounded-3xl border-2 border-slate-300 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-700 text-slate-100 text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Selo 🥈 Prata
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center text-2xl shrink-0">
                  🥈
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nível Prata: Produção de Conteúdo</h3>
                  <span className="text-xs text-slate-600 font-semibold">Divulgação Prática & Portfólio</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O aluno desenvolve um artigo curto e prático (entre 500 a 1.200 palavras) aplicando os conceitos aprendidos no seu contexto profissional. O texto é publicado no Blog Oficial da ESDHUBEM com a autoria completa do estudante.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-800">
                <strong>📌 Requisitos & Benefícios:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Elaboração de um artigo prático ou estudo de caso de autoria própria.</li>
                  <li>Aprovação pela equipe editorial da escola.</li>
                  <li><strong>Benefício:</strong> O aluno ganha uma página pública no blog com seu nome para utilizar no LinkedIn e currículo, movimentando seu portfólio profissional.</li>
                </ul>
              </div>
            </div>

            {/* TIER 3: OURO */}
            <div className="bg-white rounded-3xl border-2 border-amber-400 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FFC72C] text-slate-950 text-xs font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Selo 🥇 Ouro
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400 flex items-center justify-center text-2xl shrink-0">
                  🥇
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nível Ouro: Pesquisa & Preprint</h3>
                  <span className="text-xs text-amber-700 font-semibold">DOI Criptográfico & Publicação Científica</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Destinado a trabalhos acadêmicos densos. Aqui entram os Trabalhos de Conclusão de Curso (TCCs) estruturados ou artigos científicos submetidos a plataformas públicas de Preprint (como Zenodo, OSF Preprints ou SciELO Preprints), garantindo um registro <strong>DOI (Digital Object Identifier)</strong> universal.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-2 text-amber-950">
                <strong>📌 Requisitos & Registro DOI:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Envio de TCC estruturado com ementa acadêmica <strong>OU</strong> submissão de artigo em servidor de Preprint.</li>
                  <li>Indexação do artigo na página oficial de Anais Científicos da ESDHUBEM.</li>
                  <li><strong>Registro DOI:</strong> Atribuição de um código DOI permanente para citação direta no Currículo Lattes.</li>
                </ul>
              </div>
            </div>

            {/* TIER 4: DIAMANTE */}
            <div className="bg-white rounded-3xl border-2 border-cyan-400 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-600 text-white text-xs font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Selo 💎 Diamante
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-2xl shrink-0">
                  💎
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nível Diamante: Autorar e Construir</h3>
                  <span className="text-xs text-cyan-700 font-semibold">Livro Autoral & Registro de Direitos Autorais</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O nível mais elevado da escala autoral. Destinado ao estudante que deseja transformar seu conhecimento, experiência, estudo ou investigação em uma obra autoral completa de maior extensão (livro com no mínimo 50 páginas de conteúdo), com orientação estrutural e registro formal de direitos autorais.
              </p>

              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs space-y-2 text-cyan-950">
                <strong>📌 Requisitos & Destaque Especial:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Produção de livro autoral com mínimo de 50 páginas de conteúdo desenvolvido e estruturado.</li>
                  <li>Orientação e preparação editorial da obra para autopublicação ou registro.</li>
                  <li><strong>Registro de Direitos Autorais:</strong> Registro formal da obra amparado pela Lei nº 9.610/1998.</li>
                  <li><strong>Chancela Diamante:</strong> Impressão de honraria máxima no certificado do aluno com QR Code de validação e destaque no Mural de Livros da ESDHUBEM.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: FLUXO DE SUBMISSÃO PARA O ALUNO */}
        <section className="bg-[#182333] text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              Passo a Passo de Upgrade
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Como Submeter seu Trabalho e Elevar seu Selo
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Siga o fluxo simplificado da nossa comissão acadêmica para validar seu artigo ou TCC:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                1
              </span>
              <h4 className="font-bold text-white text-base">Escreva seu Trabalho</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Desenvolva seu artigo prático, TCC ou artigo de pesquisa com base nas orientações do seu curso na ESDHUBEM.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                2
              </span>
              <h4 className="font-bold text-white text-base">Envie para Avaliação</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submeta o documento (PDF ou DOCX) através do e-mail da coordenação ou suporte acadêmico via WhatsApp.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                3
              </span>
              <h4 className="font-bold text-white text-base">Revisão Editorial</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nossa equipe de docentes e pareceristas revisa o trabalho e orienta as adequações ou indexação DOI.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                4
              </span>
              <h4 className="font-bold text-white text-base">Emissão do Selo</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                O seu certificado é atualizado no sistema com o Selo de Mérito (Prata, Ouro ou Diamante) e link de validação pública.
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
        <section className="p-6 sm:p-8 rounded-3xl bg-[#182333] border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
          <div className="space-y-1 text-center md:text-left relative z-10">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#FFC72C]" />
              Pronto para transformar seu estudo em uma publicação real?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
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
