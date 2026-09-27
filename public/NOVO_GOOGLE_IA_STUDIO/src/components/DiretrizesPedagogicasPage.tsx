import React from 'react';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Scale,
  Award,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Lightbulb,
  Compass,
  Cpu,
  BookmarkCheck,
  Users,
  Search,
  ExternalLink,
  Target,
  ScrollText
} from 'lucide-react';

interface DiretrizesPedagogicasPageProps {
  onBackToHome: () => void;
  onOpenValidator: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigateToArticles?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const DiretrizesPedagogicasPage: React.FC<DiretrizesPedagogicasPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigateToArticles,
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-16">
      {/* Breadcrumb Bar */}
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
            <span className="text-[#FFC72C] font-semibold">
              Diretrizes e Esclarecimento Pedagógico
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onNavigate?.('informacoes-legais')}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5 text-cyan-400" />
              <span>Valor Legal</span>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => onNavigate?.('regras-certificacao-merito')}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-[#FFC72C]" />
              <span>Escala de Mérito</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner Header */}
      <section className="bg-gradient-to-b from-[#182333] via-[#1E293B] to-[#0F172A] text-white py-12 lg:py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFC72C]/15 border border-[#FFC72C]/40 px-4 py-1.5 rounded-full text-[#FFC72C] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
              <BookOpen className="w-4 h-4 text-[#FFC72C]" />
              <span>DIRETRIZES E ESCLARECIMENTO PEDAGÓGICO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="text-white block">Diretrizes e Esclarecimento Pedagógico:</span>
              <span className="text-[#FFC72C] block text-xl sm:text-2xl lg:text-3xl font-bold mt-2.5 sm:mt-3">
                Saberes Integrativos, Escrita Criativa e o Método Científico Aberto
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-10">
        
        {/* Card 1: O Que Somos e Qual É o Nosso Propósito */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Missão & Visão</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                O Que Somos e Qual É o Nosso Propósito
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Na nossa escola livre, acreditamos que a sabedoria humana se expande quando unimos{' '}
            <strong className="text-slate-900 font-semibold">tradição, símbolo, sensibilidade e tecnologia</strong>.
            Nossos cursos e trilhas de aprendizagem navegam pelas fronteiras do conhecimento convencional, integrando estudos dos sistemas simbólicos às discussões contemporâneas. Fazemos isso sob a ótica da{' '}
            <strong className="text-slate-900 font-semibold">pesquisa qualitativa e integrativa</strong>,
            incentivando nossos alunos a transformarem suas reflexões em escrita criativa, ensaios e partilha de conhecimento aberto. Dessa forma, geramos valor real por meio do{' '}
            <strong className="text-amber-800 font-semibold">Estudo, Evolução e Prática</strong>, com a finalidade de impactar o desenvolvimento profissional, relacional, pessoal, ético e humano de cada um.
          </p>

          <p className="text-slate-700 text-base leading-relaxed">
            O objetivo primordial desta plataforma é ser um <strong className="text-slate-900 font-semibold">espaço vivo de cultivo para a expansão da consciência, leitura crítica, escrita reflexiva e desenvolvimento integrativo em diversas áreas da vida</strong>. Atuamos como uma ponte acolhedora entre saberes holísticos/humanistas e as ferramentas estruturadas da comunicação intelectual.
          </p>

          {/* O Antídoto para a Crise Educacional e o Saber Circulante */}
          <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Após uma leitura profunda da realidade e das maiores feridas da educação contemporânea, identificamos os sintomas de uma crise que é, ao mesmo tempo, intelectual, tecnológica e relacional. A <strong className="text-slate-900 font-bold">ESDHUBEM</strong> nasce justamente como um <strong className="text-amber-800 font-semibold">antídoto para esse cenário caótico</strong>.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              No modelo tradicional das universidades, o estudante muitas vezes escreve apenas para tirar nota e agradar a banca, sob temas rígidos impostos pela academia. O resultado? O TCC vira um arquivo PDF esquecido em um repositório institucional que ninguém lê. O conhecimento é tratado como um fardo burocrático.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Na <strong className="text-slate-900 font-bold">ESDHUBEM</strong>, nós devolvemos a utilidade e a vida ao saber. Preenchemos a lacuna deixada pelas gavetas acadêmicas e incentivamos nossos alunos a produzirem conhecimentos que geram valor real, visível e aplicável ao desenvolvimento humano. Aqui, o aluno escreve para o mundo e para a comunidade através de formatos plurais e acessíveis:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Artigos de revisão bibliográfica ou narrativa</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ensaios teóricos, conceituais ou críticos</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Relatos de opinião e cartas ao editor</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Escrita criativa e partilha de conhecimento aberto</span>
              </div>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-[#FFC72C] p-3.5 rounded-r-xl">
              <p className="text-slate-900 font-semibold text-sm sm:text-base leading-snug">
                Nosso intuito é que o saber deixe de ser um documento estático e burocrático para se transformar em um legado circulante.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Users className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Foco no Desenvolvimento Pessoal e Humano</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Apoiar coaches, terapeutas, estudantes e curiosos a traduzirem suas vivências, percepções e práticas em narrativas organizadas, fundamentadas e éticas.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Search className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Leitura e Escrita Desmistificadas</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Incentivar a leitura de artigos científicos sem medo acadêmico, ensinando a identificar metodologias, autores de referência e estados da arte.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <FileText className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Protótipos de Artigos Científicos</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Conduzir o aluno na elaboração de esboços de artigos com regras estruturais básicas. O foco é treinar o pensamento crítico, a argumentação e o respeito às fontes, preparando o caminho para quem deseja dar continuidade à vida acadêmica formal ou buscar publicações em periódicos e eventos.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Cpu className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Inovação e Tecnologia Humanizada</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Integrar ferramentas de Inteligência Artificial de forma ética como copilotos de escrita, organização de ideias e pesquisa, potencializando a criatividade humana sem substituí-la.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Esclarecimento Institucional: Nossa Posição em Relação à Ciência Tradicional */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Transparência Integral</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Esclarecimento Institucional: Nossa Posição em Relação à Ciência Tradicional
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Para mantermos a transparência e a integridade com nossa comunidade, <strong className="text-slate-900 font-semibold">esclarecemos expressamente:</strong>
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-slate-800">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Sem Pretensão de Comprovação Positivista</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nossos cursos livres <strong className="text-slate-900 font-semibold">não têm como propósito a validação científica empírico-quantitativa, clínica, laboratorial ou biomédica</strong> de nenhuma prática, crença, técnica integrativa ou saber simbólico.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-slate-800">
              <div className="w-8 h-8 rounded-full bg-cyan-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Abordagem Fenomenológica e Simbólica</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Trabalhamos temas como astrologia simbólica, hermetismo e práticas integrativas do ponto de vista <strong className="text-slate-900 font-semibold">histórico, sociológico, psicológico (arquetípico) e qualitativo</strong>. Respeitamos essas práticas como expressões culturais, metafóricas e de bem-estar humano, sem dogmas religiosos e sem reivindicações de verdade científica médica ou exata.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-slate-800">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Liberdade de Investigação e Protótipos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  O exercício de redigir um "protótipo de artigo" é uma <strong className="text-slate-900 font-semibold">ferramenta pedagógica de inclusão e expressão</strong>, destinada a organizar pensamentos e treinar a linguagem acadêmica, e não uma chancela formal de descoberta científica pela escola.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card: Diretrizes para Produção Textual e Acadêmica: Saberes Tradicionais e Ciências Humanas */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 shrink-0">
              <ScrollText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                Metodologia & Produção Científica
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                📜 Diretrizes para Produção Textual e Acadêmica: Saberes Tradicionais e Ciências Humanas
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Em nossa instituição, lidamos com saberes tradicionais, holísticos e esotéricos — como esoterismo, astrologia, hermetismo, alquimia, iridologia, entre outros. No ambiente acadêmico, esses temas não buscam comprovação laboratorial ou validação pelas ciências naturais. Em vez disso, são classificados e investigados sob a ótica das <strong className="text-slate-900 font-semibold">Ciências Humanas e Sociais</strong>, utilizando metodologias da História, Antropologia, Sociologia, Psicologia ou Literatura.
            </p>
            <p>
              Para o desenvolvimento de artigos científicos e publicações em nossa plataforma ou em periódicos externos, os alunos podem adotar <strong className="text-purple-800 font-semibold">três abordagens metodológicas principais</strong>:
            </p>
          </div>

          {/* 3 Abordagens Metodológicas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {/* 1. Ensaio Teórico ou Conceitual */}
            <div className="bg-gradient-to-b from-purple-50/50 to-slate-50 p-5 rounded-2xl border border-purple-200/70 space-y-4 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">Ensaio Teórico ou Conceitual</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  O foco é o debate filosófico ou histórico de ideias, sem a pretensão de validar o esoterismo como verdade científica factual. O valor está na solidez da argumentação e na articulação de conceitos.
                </p>
              </div>
              <div className="bg-white/90 border border-purple-200/60 rounded-xl p-3 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-purple-700 block uppercase tracking-wider text-[10px]">Exemplo:</span>
                <p className="italic">
                  Um ensaio analisando como as teorias do psicólogo Carl Jung utilizaram conceitos da alquimia e do esoterismo para mapear o inconsciente humano.
                </p>
              </div>
            </div>

            {/* 2. Revisão Narrativa ou Histórica */}
            <div className="bg-gradient-to-b from-blue-50/50 to-slate-50 p-5 rounded-2xl border border-blue-200/70 space-y-4 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">Revisão Narrativa ou Histórica</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Serve para mapear, descrever e analisar como determinado tema foi tratado ao longo do tempo ou dentro de um contexto cultural específico, baseando-se em livros, documentos e registros bibliográficos.
                </p>
              </div>
              <div className="bg-white/90 border border-blue-200/60 rounded-xl p-3 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-blue-700 block uppercase tracking-wider text-[10px]">Exemplo:</span>
                <p className="italic">
                  Uma revisão da literatura sobre o papel político dos astrólogos nas cortes europeias durante o período do Renascimento.
                </p>
              </div>
            </div>

            {/* 3. Carta ao Editor ou Ponto de Vista */}
            <div className="bg-gradient-to-b from-amber-50/50 to-slate-50 p-5 rounded-2xl border border-amber-200/70 space-y-4 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">Carta ao Editor ou Ponto de Vista</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Um formato mais curto e direto, geralmente utilizado para debater o impacto contemporâneo desses fenômenos na sociedade atual ou comentar discussões acadêmicas vigentes.
                </p>
              </div>
              <div className="bg-white/90 border border-amber-200/60 rounded-xl p-3 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-amber-800 block uppercase tracking-wider text-[10px]">Exemplo:</span>
                <p className="italic">
                  Uma carta discutindo o crescimento de aplicativos de astrologia entre os jovens da "Geração Z" e o seu impacto no comportamento de consumo digital, sob a perspectiva sociológica.
                </p>
              </div>
            </div>
          </div>

          {/* 🎯 Objetivo e Validade Acadêmica */}
          <div className="bg-gradient-to-r from-emerald-50/80 via-slate-50 to-emerald-50/40 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-base sm:text-lg">
              <Target className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>🎯 Objetivo e Validade Acadêmica</span>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Essa abordagem permite que o aluno desenvolva o pensamento crítico e produza materiais aptos a serem aceitos tanto no portal da nossa escola quanto em periódicos científicos externos voltados para o <strong className="text-slate-900 font-semibold">Estudo das Religiões, Ciências Sociais, História Cultural ou Filosofia</strong>. Para a comunidade acadêmica, estes temas são tratados como <strong className="text-slate-900 font-semibold">fatos culturais, históricos e sociais legítimos</strong>, ricos em relevância e merecedores de investigação, independentemente de haver ou não eficácia científica nas práticas.
            </p>
          </div>
        </div>

        {/* Card 3: Natureza Jurídica e Certificação de Cursos Livres */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Conformidade Legal (LDB)</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Natureza Jurídica e Certificação de Cursos Livres
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Nossa escola opera em plena conformidade com a legislação educacional brasileira:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <BookmarkCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Modalidade de Cursos Livres</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Nossos cursos integram a categoria de <strong>Educação Profissional e Tecnológica</strong> (Formação Inicial e Continuada ou Qualificação Profissional), regidos pela <strong>Lei nº 9.394/1996 (Lei de Diretrizes e Bases da Educação Nacional - LDB)</strong> e pelo Decreto Presidencial nº 5.154/2004.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Autonomia e Isenção de MEC</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Por definição legal, cursos livres <strong>não dependem de autorização, credenciamento ou reconhecimento prévio do Ministério da Educação (MEC)</strong>. Portanto, nossos cursos não conferem grau acadêmico nem títulos de pós-graduação formal.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Certificados de Extensão</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Os certificados emitidos registram a carga horária e o conteúdo programático concluído. Eles são válidos em todo o Brasil como <strong>comprovação de atividades extracurriculares e horas complementares</strong> para faculdades e currículo profissional.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Nosso Modelo de Aprendizagem e Acesso */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Democratização do Saber</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Nosso Modelo de Aprendizagem e Acesso
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Para democratizar o conhecimento e acolher diferentes momentos de vida e de carreira, estruturamos nossa escola em:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <span className="text-xs font-bold text-[#FFC72C] bg-slate-900 px-2 py-0.5 rounded inline-block">FreePremium</span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Conteúdos e aulas gratuitas de introdução com opção de certificação acessível.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded inline-block">Horas Complementares</span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Cursos objetivos voltados à prática de leitura crítica, metodologia qualitativa e escrita formativa.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded inline-block">Formações Livres</span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Cursos densos de especialização livre para terapeutas, pesquisadores independentes e profissionais de bem-estar.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded inline-block">Clubes de Benefícios</span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Assinaturas que viabilizam acesso facilitado a certificados e descontos exclusivos em materiais de estudo e literatura especializada.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5: Compromisso Pedagógico: Da Reflexão Criativa à Publicação Científica */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Metodologia e Rigor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Compromisso Pedagógico: Da Reflexão Criativa à Publicação Científica
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Na nossa escola, o respeito à sabedoria subjetiva caminha de mãos dadas com a seriedade intelectual. Não enxergamos a criatividade e a profundidade analítica como forças opostas, mas como dimensões complementares da mente humana: é pela reflexão viva e pela escrita dinâmica que ampliamos a visão de mundo e refinamos a nossa percepção sobre a realidade, o bem-estar e a sociedade.
          </p>

          {/* Sub-block A */}
          <div className="space-y-4 bg-slate-50/80 p-6 rounded-2xl border border-slate-200/70">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-600" />
              <span>O Caminho da Pesquisa Séria e da Continuidade Acadêmica</span>
            </h3>
            <p className="text-slate-600 text-sm">
              Incentivamos nossos alunos a utilizarem o conhecimento adquirido como trampolim para a sua evolução intelectual e profissional:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Estímulo à Continuidade Acadêmica</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Nassas trilhas preparam estudantes de graduação, pós-graduandos e pesquisadores independentes para perderem o receio do ambiente acadêmico formal, capacitando-os a dialogar com a literatura contemporânea, formular hipóteses consistentes e estruturar textos de fálogo.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Projeção para Periódicos Científicos</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Orientamos o aluno a compreender os critérios editoriais e os padrões éticos exigidos por revistas científicas conceituadas, munindo-o de ferramentas para transformar suas inquietações teóricas e práticas em artigos robustos.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Parcerias com Revistas Acadêmicas e Periódicos Apoiadores</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Para criar uma verdadeira passarela de entrada no universo da publicação, estabelecemos diálogos e parcerias com revistas científicas, periódicos juniores e publicações integrativas que acolhem e valorizam pesquisas qualitativas, ensaios teóricos e produções desenvolvidas em nossa comunidade discente.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Acolhimento Editorial e Primeiros Passos</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Essa ponte institucional reduz a distância histórica entre quem está começando a produzir e os conselhos editoriais, permitindo que os protótipos amadurecidos ao longo dos cursos encontrem espaços legítimos de circulação científica e divulgação do conhecimento.
                </p>
              </div>
            </div>
          </div>

          {/* Sub-block B */}
          <div className="space-y-4 bg-slate-50/80 p-6 rounded-2xl border border-slate-200/70">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Seriedade, Profundidade e Ampliação de Percepções</span>
            </h3>
            <p className="text-slate-600 text-sm">
              Buscamos a seriedade não pelo apego a burocracias engessadas, mas pela responsabilidade com a verdade e com as referências:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Aprofundamento Epistemológico</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  O estudo de fenômenos subjetivos, da astrologia simbólica, do hermetismo, da filosofia ou da saúde coletiva não é tratado de forma rasa ou panfletária; incentivamos o resgate das fontes primárias, o confronto de teorias e a leitura atenta de artigos científicos atuais.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Escrita Dinâmica com Rigor Conceitual</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Ensinamos que escrever bem é pensar com clareza. Nossos módulos valorizam uma prosa fluida e expressiva, amparada na correta atribuição de autorias, na citação ética de fontes e na honestidade metodológica.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Ampliação de Visões e Consciência</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Queremos que o aluno saia da superficialidade das redes sociais e adentre a densidade do pensamento crítico, desenvolvendo sensibilidade para investigar o invisível, o relacional e o humano com critério, elegância e maturidade intelectual.
                </p>
              </div>
            </div>
          </div>

          {/* Table: Como Nossos Cursos Conectam a Teoria à Prática */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-slate-900">
              Como Nossos Cursos Conectam a Teoria à Prática
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#182333] text-white">
                    <th className="py-3.5 px-4 font-bold border-b border-slate-700 w-1/4">Dimensão</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-700 w-1/3">Nosso Foco</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-700">Impacto na Sua Jornada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Leitura Crítica</td>
                    <td className="py-3.5 px-4 text-slate-700">Mapeamento do "estado da arte" em bases de dados abertas.</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">Capacidade de ler e dissecar artigos complexos com autonomia.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Metodologia Qualitativa</td>
                    <td className="py-3.5 px-4 text-slate-700">Cartografia de narrativas, estudos de caso e ensaios teóricos.</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">Estruturação de experiências subjetivas em dados compreensíveis e organizados.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Escrita e IA Ética</td>
                    <td className="py-3.5 px-4 text-slate-700">Uso de novas tecnologias para aprimorar argumentação e clareza.</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">Produção de protótipos autorais sem perder a voz humana.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Ponte com o Meio Científico</td>
                    <td className="py-3.5 px-4 text-slate-700">Mentorias de submissão, Lattes/ORCID e periódicos parceiros.</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">Transição segura do estudo livre para a publicação e o reconhecimento acadêmico.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Card 6: Integração com a Ciência Aberta Radical (Open Science) e DeSci */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Ecossistema Emancipatório</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Integração com a Ciência Aberta Radical (Open Science) e DeSci (Ciência Descentralizada)
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Estimulamos ativamente a complementaridade e integração dos nossos discentes com o ecossistema da <strong className="text-slate-900 font-semibold">Ciência Aberta Radical (Open Science)</strong> e da <strong className="text-slate-900 font-semibold">DeSci (Decentralized Science / Ciência Descentralizada)</strong>. Nesse modelo inovador e emancipatório, o artigo não fica aprisionado em processos burocráticos lentos ou em modelos corporativos excludentes: o trabalho é registrado publicamente, com identificador perene, revisão aberta ou sob governança de comunidades autônomas.
          </p>

          <div className="space-y-6">
            {/* 1. Servidores de Preprints */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">1</span>
                <span>Servidores de Preprints Abertos e Descentralizados</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Permitem que qualquer pesquisador (independente, comunitário, universitário ou autodidata) publique seu manuscrito integral, receba um <strong className="text-slate-900 font-semibold">DOI (Digital Object Identifier)</strong> e disponibilize o texto imediatamente para leitura e citação global, sem cobrança de taxas e sem barreiras fechadas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Zenodo (via OpenAIRE / CERN)</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Financiado pela União Europeia e pelo CERN, é o maior repositório aberto de dados, ensaios e artigos do mundo. Qualquer pessoa pode submeter um artigo ou protótipo, gerando um DOI oficial instantâneo e perene. Aceita publicações em português, espanhol, inglês e múltiplos idiomas.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">SocArXiv</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Servidor voltado para ciências sociais, humanidades, educação e reflexões culturais, totalmente aberto e gratuito.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">OSF Preprints (Open Science Framework)</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Infraestrutura livre do Center for Open Science, agregando pesquisas interdisciplinares com foco em transparência, reprodutibilidade e diversidade metodológica.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">SciELO Preprints</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Plataforma latino-americana de publicação rápida e aberta para textos em português e espanhol em saúde coletiva, ciências humanas e educação.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Plataformas DeSci */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">2</span>
                <span>Plataformas de Publicação DeSci (Decentralized Science)</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A Ciência Descentralizada utiliza tecnologias de registro distribuído (blockchain, IPFS e governança comunitária) para devolver o controle e a autoria diretamente aos pesquisadores e leitores:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">ResearchHub</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Ambiente colaborativo e aberto que funciona como uma rede de produção científica, permitindo publicação de preprints, revisões de literatura, debates públicos globais e incentivos comunitários.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">DeSci Publish / Planck Network</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Protocolos de publicação perene em sistemas descentralizados (IPFS/Arweave), garantindo preservação contra censura ou barreiras pagas, com revisão transparente por pares.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">PubPub (Knowledge Futures Group)</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Plataforma de código aberto (originada em projetos ligados ao MIT Media Lab) que permite criar publicações dinâmicas e periódicos comunitários interativos, sem taxas para autores ou leitores.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Periódicos com Revisão Aberta */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">3</span>
                <span>Periódicos com Revisão Aberta (Open Peer Review) e Revistas Comunitárias</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Open Peer Review (ex: F1000Research, Open Research Europe)</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Processos onde o artigo é publicado e as avaliações dos pareceristas são transparentes e visíveis para a comunidade, tornando a revisão uma etapa pedagógica e construtiva.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Revistas Comunitárias em OJS Independente</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Periódicos acadêmicos mantidos em software livre Open Journal Systems (OJS) por coletivos e núcleos interdisciplinares, acolhendo saberes ancestrais, fenomenologia e práticas integrativas.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Plataformas Abertas Globais: SciELO Preprints e SocArXiv */}
            <div className="space-y-4 pt-3 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">4</span>
                <span>Plataformas Abertas Globais: SciELO Preprints e SocArXiv</span>
              </h3>

              <div className="bg-purple-50/40 border border-purple-200/70 rounded-2xl p-5 space-y-4">
                <p className="text-slate-700 text-sm leading-relaxed">
                  Plataformas sérias como o <strong className="text-slate-900 font-semibold">SciELO Preprints</strong> e o <strong className="text-slate-900 font-semibold">SocArXiv</strong> publicam de fato muitos textos sobre pensamento decolonial, saberes ancestrais, epistemologias do Sul Global e práticas integrativas. A moderação dessas plataformas filtra pseudociência purista mas aceita de braços abertos temas menos ortodoxos e sem comprovação empírica se eles forem abordados sob o recorte metodológico correto das Ciências Humanas.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Para ser aceito nesses servidores, o texto do aluno deve migrar do formato "científico naturalista" para o formato de <strong className="text-purple-900 font-semibold">pesquisa qualitativa, social ou filosófica</strong>.
                </p>

                {/* Subseção 1: Que áreas não ortodoxas e sem comprovações empíricas eles aceitam? */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-purple-700">1.</span>
                    <span>Que áreas não ortodoxas e sem comprovações empíricas eles aceitam?</span>
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Tanto o SciELO Preprints quanto o SocArXiv aceitam reflexões sobre saberes tradicionais se as pesquisas estiverem enquadradas nas seguintes frentes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="bg-white p-3.5 rounded-xl border border-purple-200/60 space-y-1 shadow-2xs">
                      <span className="font-bold text-purple-950 text-xs block">Epistemologias Insurgentes e Decoloniais</span>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Estudos que criticam o monopólio da ciência eurocêntrica e positivista e dão espaço para "justiça cognitiva", pedagogias de encruzilhadas (como matrizes afro-diaspóricas) ou visões de mundo indígenas.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-purple-200/60 space-y-1 shadow-2xs">
                      <span className="font-bold text-purple-950 text-xs block">Antropologia e Sociologia da Religião / Ocultismo</span>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Análises sobre crenças, movimentos neopagãos, esoterismo e sistemas de cura alternativos sob a ótica de como grupos sociais se organizam ou criam significado por meio deles.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-purple-200/60 space-y-1 shadow-2xs">
                      <span className="font-bold text-purple-950 text-xs block">Fenomenologia e Cartografias de Experiência</span>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Estudos que focam na percepção subjetiva do indivíduo. Em vez de medir a "eficácia clínica" de uma terapia holística como a iridologia, investiga-se a experiência vivida pelo paciente, a relação terapeuta-cliente e o impacto no bem-estar percebido.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-purple-200/60 space-y-1 shadow-2xs">
                      <span className="font-bold text-purple-950 text-xs block">História das Ciências e Saberes</span>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Resgates históricos da alquimia, do hermetismo e da própria astrologia, contextualizando o surgimento de correntes de pensamento e suas quebras estruturais ao longo do tempo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subseção 2: Que tipos de textos podem ser direcionados para lá? */}
                <div className="space-y-3 pt-3">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-purple-700">2.</span>
                    <span>Que tipos de textos podem ser direcionados para lá? (O formato ideal)</span>
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    O segredo para o aluno da sua escola ter sucesso na moderação dessas plataformas é focar em estruturas textuais que valorizem a argumentação conceitual ou qualitativa. Os formatos mais bem-aceitos são:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs bg-white">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                          <th className="py-2.5 px-3 font-bold">Tipo de Texto Aceito</th>
                          <th className="py-2.5 px-3 font-bold">Como estruturar para a moderação dessas plataformas</th>
                          <th className="py-2.5 px-3 font-bold">Exemplo Prático Realista / DeSci</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr className="hover:bg-slate-50/80">
                          <td className="py-2.5 px-3 font-semibold text-purple-950 whitespace-nowrap">Ensaio Teórico / Epistemológico</td>
                          <td className="py-2.5 px-3">Foco em conectar teorias conceituais densas (como as de Foucault, Jung, ou pensadores decoloniais) com a lógica interna dos saberes holísticos.</td>
                          <td className="py-2.5 px-3 italic text-slate-600">Um ensaio no SocArXiv discutindo a Alquimia e os arquétipos junguianos como ferramentas de emancipação psíquica fora do modelo psiquiátrico tradicional.</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <td className="py-2.5 px-3 font-semibold text-purple-950 whitespace-nowrap">Revisão de Literatura Narrativa / Crítica</td>
                          <td className="py-2.5 px-3">Organizar sistematicamente o que outros autores, historiadores ou sociólogos já escreveram sobre o tema, amarrando com uma crítica contemporânea.</td>
                          <td className="py-2.5 px-3 italic text-slate-600">Uma revisão de literatura no SciELO Preprints mapeando a evolução histórica do Hermetismo e suas influências na filosofia ocidental oculta.</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <td className="py-2.5 px-3 font-semibold text-purple-950 whitespace-nowrap">Estudo de Caso Qualitativo / Etnográfico</td>
                          <td className="py-2.5 px-3">Analisar narrativas individuais, entrevistas de campo ou a história de uma comunidade sem a necessidade de produzir dados estatísticos fechados.</td>
                          <td className="py-2.5 px-3 italic text-slate-600">Uma pesquisa analisando os discursos e percepções de autocuidado entre praticantes contemporâneos de Iridologia sob a ótica da saúde integrativa.</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <td className="py-2.5 px-3 font-semibold text-purple-950 whitespace-nowrap">Comentários Críticos ou Análises de Discurso</td>
                          <td className="py-2.5 px-3">Analisar produtos culturais contemporâneos (como livros, discursos políticos, documentários ou mídias digitais) que usam a linguagem desses saberes tradicionais.</td>
                          <td className="py-2.5 px-3 italic text-slate-600">Uma análise de discurso sobre como o "boom" da astrologia digital na Geração Z reflete novas buscas por espiritualidade e identidade em tempos de crise institucional.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Subseção 3: O "Filtro de Segurança" para os seus alunos */}
                <div className="bg-white rounded-xl p-4 border border-amber-200/80 space-y-2.5 shadow-2xs">
                  <span className="font-bold text-amber-900 text-xs sm:text-sm block">
                    🛡️ O "Filtro de Segurança" para os alunos
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Para garantir que os textos dos alunos passem pela moderação automática/humana do SciELO e SocArXiv, oriente-os a evitar gatilhos textuais dogmáticos:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs space-y-1">
                      <span className="font-bold text-red-700 block">❌ O que NÃO escrever:</span>
                      <p className="italic text-slate-700">"A iridologia comprova que a mancha na íris cura o estômago..."</p>
                      <span className="text-[11px] text-red-600 block">(Isto é rejeitado como pseudociência factual).</span>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                      <span className="font-bold text-emerald-800 block">✅ O que escrever:</span>
                      <p className="italic text-slate-700">"Este estudo busca compreender a iridologia como uma prática integrativa e fenomenológica, analisando o discurso dos terapeutas e o impacto sociocultural da técnica..."</p>
                      <span className="text-[11px] text-emerald-700 block">(Isto é aceito como Ciência Social / Saúde Coletiva legítima).</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabela Comparativa: Como Isso se Conecta com a ESDHUBEM */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">
                Como Isso se Conecta com a ESDHUBEM
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#182333] text-white">
                      <th className="py-3.5 px-4 font-bold border-b border-slate-700 w-1/2">Caminho Tradicional (Centralizado)</th>
                      <th className="py-3.5 px-4 font-bold border-b border-slate-700 w-1/2">Modelo Descentralizado & Aberto (Proposta ESDHUBEM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-slate-700">Exige titulação mínima formal (Mestrado/Doutorado) para submissão.</td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold bg-emerald-50/40">Acolhe a produção de pesquisadores autônomos, terapeutas, autodidatas e estudantes.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-slate-700">Avaliação em "caixa preta" que leva de 6 meses a 2 anos.</td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold bg-emerald-50/40">Publicação e disponibilização dinâmica com registro seguro de autoria (DOI / Identificador Perene).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-slate-700">Foco restrito a métricas quantitativas e modelos estritamente positivistas.</td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold bg-emerald-50/40">Acolhe abordagens qualitativas, fenomenológicas, simbólicas, ensaísticas e cartografias de experiência.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-slate-700">Risco de cobrança de taxas de publicação abusivas (APCs).</td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold bg-emerald-50/40">100% gratuito para autores e de livre circulação mundial.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* O Repositório de Produção Intelectual da ESDHUBEM */}
              <div className="rounded-2xl bg-gradient-to-b from-amber-50/80 via-white to-amber-50/50 border border-amber-300/80 p-6 sm:p-8 text-slate-800 text-sm leading-relaxed mt-6 space-y-6 shadow-sm">
                <div className="space-y-2 border-b border-amber-200/80 pb-4">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                    Coleção Oficial & Diretrizes de Conclusão
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    O Repositório de Produção Intelectual da ESDHUBEM
                  </h3>
                </div>

                <div className="space-y-3 text-slate-700 sm:text-base leading-relaxed">
                  <p>
                    A <strong className="text-slate-900 font-bold">ESDHUBEM</strong> busca ser um ecossistema amplo, voltado para o <strong className="text-slate-900 font-semibold">Desenvolvimento Integral</strong> do indivíduo e do profissional. A escola opera exatamente nessa intersecção: ela traz o rigor e a utilidade prática do mundo científico (como a leitura de exames laboratoriais) e o dinamismo estratégico do ambiente corporativo, financeiro, de liderança e da Inteligência Artificial.
                  </p>
                  <p>
                    Realizamos a disponibilização de publicações dos alunos da ESDHUBEM a respeito dos projetos e trabalhos de conclusão dos nossos cursos, pois valorizamos a educação aberta, a criação e o compartilhamento de recursos educacionais e materiais de ensino sem restrições de uso. Através da valorização da democratização no ensino, no mercado de trabalho e no desenvolvimento humano, profissional e relacional, nós facilitamos o acesso à informação e avanços no estudo e práticas, visando acelerar as descobertas por meio do trabalho conjunto em rede e da troca contínua de informações. Tendo em conta a importância da <strong className="text-slate-900 font-semibold">Transparência e da Reprodutibilidade</strong>, garantimos maior confiabilidade aos estudos ao expor claramente o caminho metodológico percorrido.
                  </p>
                  <p>
                    A nossa escola estimula o aluno a escrever desde textos mais livres para o nosso blog interno até produções robustas e modernas para ecossistemas DeSci e Preprints. Por isso, o trabalho final do curso recebe o nome de <strong className="text-amber-900 font-bold">Manuscrito de Conclusão de Curso (MCC)</strong> — termo derivado do conceito universal <em>manuscript</em>, utilizado internacionalmente por redes de pesquisa e plataformas DeSci —, refletindo essa pluralidade de formatos e o conceito de autoria.
                  </p>
                  <p>
                    O MCC abraça qualquer formato de escrita, seja um ensaio prático de 3 páginas ou um estudo aprofundado, dividindo-se em três formatos principais à escolha do aluno:
                  </p>
                </div>

                {/* 3 Formatos Principais de MCC */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-amber-200/90 rounded-xl p-4 space-y-2 shadow-2xs">
                    <span className="font-bold text-amber-900 text-sm block">
                      • Artigo de Autoria e Conclusão (AAC)
                    </span>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Foca no formato de artigo enxuto e no empoderamento do estudante enquanto autor de suas soluções e ideias.
                    </p>
                  </div>

                  <div className="bg-white border border-amber-200/90 rounded-xl p-4 space-y-2 shadow-2xs">
                    <span className="font-bold text-amber-900 text-sm block">
                      • Ensaio de Conclusão de Curso (ECC)
                    </span>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Ideal para análises reflexivas, conceituais, filosóficas e de opinião densamente fundamentada.
                    </p>
                  </div>

                  <div className="bg-white border border-amber-200/90 rounded-xl p-4 space-y-2 shadow-2xs">
                    <span className="font-bold text-amber-900 text-sm block">
                      • Projeto Integrador de Conclusão
                    </span>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Foca na aplicação prática do conhecimento, unindo a fundamentação técnica (como protocolos integrativos ou análises tecnológicas e de negócios) com as demandas do mundo real.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-slate-700 sm:text-base leading-relaxed">
                    Os nossos repositórios de Produção Intelectual constituem a nossa coleção oficial que reúne os Manuscritos de Conclusão de Curso (MCC), ensaios e artigos desenvolvidos pelos nossos discentes. Afastando-nos de modelos puramente acadêmicos positivistas e burocráticos, damos total liberdade para que o estudante escolha o formato e o destino ideal para a sua produção escrita, divididos em três jornadas possíveis:
                  </p>
                </div>

                {/* As Três Jornadas */}
                <div className="space-y-4 pt-1">
                  {/* Jornada 1 */}
                  <div className="bg-white border-2 border-emerald-300/80 rounded-2xl p-5 space-y-3 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🟢</span>
                      <h4 className="text-base sm:text-lg font-bold text-emerald-950">
                        Jornada 1: Produção de Conteúdo e Comunicação (Mídia Própria)
                      </h4>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      Para os alunos que desejam focar na escrita clara, informativa e com linguagem acessível para o grande público ou potenciais clientes.
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm pt-1">
                      <p className="text-slate-700">
                        <strong className="text-emerald-900 font-semibold">• Assuntos adequados:</strong> Conteúdos práticos sobre aplicação de Práticas Integrativas e leitura complementar de exames; guias e insights de Desenvolvimento Pessoal, Humano, Ético e Relacional; artigos sobre Educação Financeira, Formação Livre, Liderança ou o uso de IA e Tecnologias no cotidiano profissional.
                      </p>
                      <p className="text-slate-700">
                        <strong className="text-emerald-900 font-semibold">• Destino:</strong> Publicação no Blog Oficial da ESDHUBEM, funcionando como vitrine profissional e portfólio para terapeutas, consultores e pesquisadores autônomos.
                      </p>
                    </div>
                  </div>

                  {/* Jornada 2 */}
                  <div className="bg-white border-2 border-blue-300/80 rounded-2xl p-5 space-y-3 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🔵</span>
                      <h4 className="text-base sm:text-lg font-bold text-blue-950">
                        Jornada 2: Repositórios Abertos Globais e Preprints
                      </h4>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      Para os discentes que desejam registrar formalmente suas revisões narrativas, ensaios e cartografias de experiência em infraestruturas globais de pesquisa, garantindo autoria perene com registro DOI.
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm pt-1">
                      <p className="text-slate-700">
                        <strong className="text-blue-900 font-semibold">• Assuntos adequados:</strong> Estudos e revisões sobre a evolução histórica de saberes tradicionais; ensaios sobre teorias do desenvolvimento da consciência e psicologia; artigos fundamentados em metodologias qualitativas de ciências humanas e sociais; reflexões epistemológicas decoloniais e propostas de educação integrativa.
                      </p>
                      <p className="text-slate-700">
                        <strong className="text-blue-900 font-semibold">• Destinos:</strong> Zenodo (CERN), OSF Preprints, ou plataformas de nicho em ciências sociais e humanas como o SocArXiv e o SciELO Preprints.
                      </p>
                    </div>
                  </div>

                  {/* Jornada 3 */}
                  <div className="bg-white border-2 border-purple-300/80 rounded-2xl p-5 space-y-3 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🟣</span>
                      <h4 className="text-base sm:text-lg font-bold text-purple-950">
                        Jornada 3: Ecossistema DeSci (Ciência Descentralizada) e Revistas Comunitárias
                      </h4>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      Para os estudantes que desejam vivenciar a vanguarda tecnológica e publicar seus artigos sob a governança de redes autônomas e descentralizadas, livres de barreiras pagas ou monopólios corporativos.
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm pt-1">
                      <p className="text-slate-700">
                        <strong className="text-purple-900 font-semibold">• Assuntos adequados:</strong> Cartografias fenomenológicas da relação terapeuta-interagente; pesquisas qualitativas sobre o impacto de treinamentos e palestras corporativas no desenvolvimento ético; análises de discurso sobre o comportamento da sociedade digital; e ensaios transdisciplinares sobre novos modelos de negócios e saúde integrativa no ecossistema moderno.
                      </p>
                      <div className="space-y-1.5 pt-1">
                        <strong className="text-purple-900 font-semibold block">• Plataformas DeSci e Abertas Disponíveis:</strong>
                        <ul className="list-disc pl-5 space-y-1 text-slate-700">
                          <li><strong>ResearchHub:</strong> Rede colaborativa global que permite publicação de preprints, debates abertos e incentivos comunitários em ecossistema blockchain.</li>
                          <li><strong>DeSci Publish / Planck Network:</strong> Protocolos que garantem a publicação perene e descentralizada de manuscritos (IPFS/Arweave), protegidos contra a censura ou taxas abusivas.</li>
                          <li><strong>PubPub (Knowledge Futures Group):</strong> Plataforma de código aberto (nascida em projetos ligados ao MIT Media Lab) voltada para a criação de periódicos dinâmicos e comunitários interativos.</li>
                          <li><strong>Periódicos com Revisão Aberta (Open Peer Review) e Revistas Comunitárias (OJS):</strong> Espaços transparentes (como F1000Research ou revistas independentes) que acolhem saberes tradicionais, fenomenologia e práticas integrativas de forma pedagógica e construtiva.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* O Propósito Humano e Profissional da Escrita */}
                <div className="pt-4 border-t border-amber-200/80 space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600 shrink-0" />
                    <h4 className="text-lg font-bold text-slate-900">
                      O Propósito Humano e Profissional da Escrita
                    </h4>
                  </div>
                  <p className="text-slate-700 sm:text-base leading-relaxed">
                    Este ecossistema flexível foi desenhado para quem deseja desenvolver a capacidade de ler, estudar e escrever, servindo como preparação prática para redações de vestibulares/ENEM, concursos públicos ou futuras publicações internacionais. Ele atende perfeitamente quem busca o desenvolvimento pessoal, relacional e outras áreas da vida.
                  </p>
                  <p className="text-slate-700 sm:text-base leading-relaxed">
                    Saber estruturar, redigir e apresentar ideias ao mundo faz parte de uma jornada profunda de autodescoberta e aprimoramento contínuo — gerando uma postura ética, responsável e consciente que educa e prepara as pessoas para terem mais êxito em suas carreiras, relações e projetos de vida. Mais do que métricas frias, aprender a organizar o pensamento expande a nossa compreensão da realidade, melhora o desempenho clínico, relacional e empresarial, permitindo ao indivíduo comunicar suas verdades com clareza, liderar com autoridade e exercer a cidadania de forma plena.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Actions */}
        <div className="bg-[#182333] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#FFC72C]">Precisa de validação ou suporte acadêmico?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Confira os selos de mérito, valide certificados emitidos ou acesse nossos artigos e modelos de protótipos científicos.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenValidator}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Validar Certificado</span>
            </button>

            <button
              onClick={() => onNavigate?.('informacoes-legais')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Valor Legal</span>
            </button>

            <button
              onClick={() => onNavigate?.('regras-certificacao-merito')}
              className="bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Award className="w-4 h-4" />
              <span>Escala de Mérito</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
