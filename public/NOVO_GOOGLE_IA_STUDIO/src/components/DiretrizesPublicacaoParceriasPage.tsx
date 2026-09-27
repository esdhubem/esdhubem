import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Award,
  Globe,
  Share2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  Target,
  Handshake,
  HeartPulse,
  Compass,
  GraduationCap,
  Sparkles,
  Layers,
  FileText,
  MessageCircle
} from 'lucide-react';

interface DiretrizesPublicacaoParceriasPageProps {
  onBackToHome: () => void;
  onNavigateToArticles?: () => void;
  onNavigateToPortal?: () => void;
}

export const DiretrizesPublicacaoParceriasPage: React.FC<DiretrizesPublicacaoParceriasPageProps> = ({
  onBackToHome,
  onNavigateToArticles,
  onNavigateToPortal
}) => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 flex flex-col">
      {/* Hero Header */}
      <div className="bg-[#182333] pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white border-b border-slate-700/60 shadow-lg">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, #FFC72C 2%, transparent 0%)',
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para o Início</span>
            </button>

            {onNavigateToArticles && (
              <button
                onClick={onNavigateToArticles}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-white bg-cyan-950/60 border border-cyan-500/40 px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Ver Artigos & Anais Acadêmicos</span>
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC72C]/15 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold tracking-wide uppercase shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#FFC72C]" />
              <span>DIRETRIZES ACADÊMICAS & PESQUISA ESDHUBEM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Diretrizes de Publicação Científica e Parcerias Estratégicas
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-4xl">
              Na estruturação da <strong className="text-white font-semibold">ESDHUBEM</strong>, adotamos a decisão estratégica de orientar nossos alunos a direcionarem suas pesquisas para periódicos científicos de impacto intermediário, com forte foco no cenário nacional, regional e de acesso aberto.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 flex-1 w-full -mt-6 relative z-20">
        {/* Card 1: Contexto e Proposta Pedagógica */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Estratégia Editorial
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Revistas de Médio Impacto & Abordagem Interdisciplinar
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Nossa proposta pedagógica conecta-se perfeitamente com as <strong className="text-slate-900 font-semibold">Revistas de Médio Impacto</strong> (estratos <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xs font-bold">Qualis B1 a B4</span> / <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono text-xs font-bold">Quartis Q3 e Q4</span>) e com as <strong className="text-slate-900 font-semibold">Revistas Interdisciplinares e Multidisciplinares</strong>.
          </p>

          <div className="bg-amber-50/70 border-l-4 border-[#FFC72C] p-4 sm:p-5 rounded-r-2xl">
            <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
              Essas classificações acolhem com excelência a união entre a <strong className="text-amber-900">ciência prática</strong>, as <strong className="text-amber-900">demandas do mercado de trabalho</strong> e o <strong className="text-amber-900">desenvolvimento humano</strong>.
            </p>
          </div>
        </div>

        {/* Card 2: 🚀 Onde Nossos Alunos Podem Publicar? */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                Visibilidade & Indexação
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                🚀 Onde Nossos Alunos Podem Publicar?
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Para garantir estratos competitivos, visibilidade internacional e validação acadêmica, incentivamos a submissão em:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Indexadores de Grande Porte */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-2 text-cyan-700 font-bold text-base">
                <Globe className="w-5 h-5 text-cyan-600" />
                <h3>Indexadores de Grande Porte</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Periódicos avaliados por <strong className="text-slate-800">Bases de Indexação globais</strong> (como <em>Scopus</em> e <em>Web of Science</em>), que possuem abertura para Trabalhos de Conclusão de Curso (TCC), iniciação científica e artigos de extensão.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="bg-cyan-100/70 text-cyan-800 text-[11px] font-bold px-2 py-0.5 rounded-md">Scopus</span>
                <span className="bg-cyan-100/70 text-cyan-800 text-[11px] font-bold px-2 py-0.5 rounded-md">Web of Science</span>
                <span className="bg-cyan-100/70 text-cyan-800 text-[11px] font-bold px-2 py-0.5 rounded-md">TCCs & Extensão</span>
              </div>
            </div>

            {/* Plataformas de Ciência Aberta */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-base">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <h3>Plataformas de Ciência Aberta</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Revistas indexadas no <strong className="text-slate-800">Zenodo (CERN / OpenAIRE)</strong> com atribuição de DOI oficial ou em consolidados indexadores latino-americanos, como o <strong className="text-slate-800">SciELO</strong>.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="bg-emerald-100/70 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-md">Zenodo (DOI Oficial)</span>
                <span className="bg-emerald-100/70 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-md">SciELO</span>
                <span className="bg-emerald-100/70 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-md">Acesso Aberto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: 🎯 Nossos Eixos Temáticos de Pesquisa (Alinhados à CAPES) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Alinhamento CAPES
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                🎯 Nossos Eixos Temáticos de Pesquisa
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Alinhados aos critérios de avaliação da <strong className="text-slate-900">CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior)</strong>, os cursos livres e os projetos da ESDHUBEM conectam-se diretamente a três grandes áreas do conhecimento:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Eixo 1: Saúde Coletiva */}
            <div className="bg-gradient-to-b from-rose-50/50 to-white border border-rose-200/80 rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600 font-bold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 block">Eixo 01</span>
                  <h3 className="font-bold text-slate-900 text-lg">Saúde Coletiva</h3>
                </div>
                <div className="text-xs space-y-2 text-slate-600">
                  <p>
                    <strong className="text-slate-800">Foco:</strong> Práticas Integrativas, Bem-Estar e Saúde Mental.
                  </p>
                  <p>
                    <strong className="text-slate-800">Aplicação:</strong> Estudos sobre coaching, espiritualidade aplicada, meditação e Práticas Integrativas e Complementares (PICS).
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-rose-100">
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">Alvo Editorial:</span>
                <span className="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-1 rounded-md">
                  Qualis B1, B2 e B3
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Revistas que debatem fortemente a humanização e a saúde coletiva.
                </p>
              </div>
            </div>

            {/* Eixo 2: Interdisciplinar */}
            <div className="bg-gradient-to-b from-blue-50/50 to-white border border-blue-200/80 rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">Eixo 02</span>
                  <h3 className="font-bold text-slate-900 text-lg">Interdisciplinar</h3>
                </div>
                <div className="text-xs space-y-2 text-slate-600">
                  <p>
                    <strong className="text-slate-800">Foco:</strong> Desenvolvimento Pessoal, Humano, Profissional e Consciencial.
                  </p>
                  <p>
                    <strong className="text-slate-800">Aplicação:</strong> Competências socioemocionais cruzando áreas como psicologia, administração e filosofia.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-blue-100">
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">Alvo Editorial:</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-md">
                  Qualis B1 ou B2
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Ideais por aceitarem relatos de experiência práticos vindos do mercado corporativo.
                </p>
              </div>
            </div>

            {/* Eixo 3: Ensino & Educação */}
            <div className="bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 rounded-2xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">Eixo 03</span>
                  <h3 className="font-bold text-slate-900 text-lg">Ensino & Educação</h3>
                </div>
                <div className="text-xs space-y-2 text-slate-600">
                  <p>
                    <strong className="text-slate-800">Foco:</strong> Pedagogia Integrativa e Ética.
                  </p>
                  <p>
                    <strong className="text-slate-800">Aplicação:</strong> Metodologias inovadoras de ensino e educação voltada para adultos.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-emerald-100">
                <span className="text-[11px] text-slate-500 block mb-1 font-semibold">Alvo Editorial:</span>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md">
                  Estrato B (Qualis)
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Avaliam como as novas pedagogias transformam o aprendizado e a evolução profissional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: 🤝 Abertura para Parcerias Institucionais */}
        <div className="bg-gradient-to-r from-slate-900 to-[#1e293b] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl border border-slate-700/80 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC72C]/20 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold">
                <Handshake className="w-4 h-4 text-[#FFC72C]" />
                <span>COOPERAÇÃO ACADÊMICA & REDE DE PESQUISA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white">
                🤝 Abertura para Parcerias Institucionais
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A <strong className="text-white font-semibold">ESDHUBEM</strong> está de portas abertas para construir parcerias com revistas científicas, núcleos universitários de extensão e ecossistemas de publicação aberta. Acreditamos que democratizar o acesso à informação e dar voz às pesquisas dos nossos alunos é o caminho mais rápido para acelerar novas descobertas e transformar a sociedade.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/5511960319637?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20parcerias%20institucionais%20e%20publica%C3%A7%C3%A3o%20cient%C3%ADfica%20com%20a%20ESDHUBEM"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Propor Parceria Institucional</span>
              </a>

              {onNavigateToArticles && (
                <button
                  type="button"
                  onClick={onNavigateToArticles}
                  className="bg-[#FFC72C] hover:bg-[#ffcf4b] text-slate-950 font-black px-6 py-3 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-slate-950" />
                  <span>Anais & Artigos Publicados</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
