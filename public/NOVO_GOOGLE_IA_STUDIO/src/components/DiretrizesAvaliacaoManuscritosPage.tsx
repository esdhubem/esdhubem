import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Heart,
  ShieldCheck,
  Scale,
  FileText,
  Send,
  RefreshCw,
  HelpCircle,
  Check,
  X,
  ArrowDown,
  Quote,
  Feather
} from 'lucide-react';

interface DiretrizesAvaliacaoManuscritosPageProps {
  onBackToHome: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const DiretrizesAvaliacaoManuscritosPage: React.FC<DiretrizesAvaliacaoManuscritosPageProps> = ({
  onBackToHome,
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-24">
      {/* Top Breadcrumbs */}
      <div className="bg-[#011049] border-b border-blue-900/60 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold truncate">Diretrizes de Avaliação de Manuscritos dos Alunos</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FFC72C]" />
            <span>ESDHUBEM • Documento Oficial</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white relative overflow-hidden py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 shadow-lg">
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Feather className="w-4 h-4" />
            <span>Critérios de Análise Formativa • Sem Notas</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
            Diretrizes de Avaliação de Manuscritos dos Alunos
          </h1>

          <div className="text-cyan-300 font-bold text-base sm:text-lg tracking-wide">
            ESDHUBEM — Escola de Desenvolvimento Humano e Bem-Estar
          </div>

          <p className="text-[#FFC72C] text-lg sm:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto bg-white/5 py-3 px-6 rounded-2xl border border-amber-400/30">
            &ldquo;Aqui não damos notas: valorizamos clareza, verdade, respeito e reflexão.&rdquo;
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">

        {/* 1. APRESENTAÇÃO */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-black text-xl border border-blue-500/20">
              1
            </div>
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">Propósito Institucional</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                1. Apresentação
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              O presente documento estabelece os critérios pelos quais serão analisados os trabalhos, verbetes, artigos e livros produzidos pelos participantes da <strong>ESDHUBEM</strong>.
            </p>
            <p>
              Diferentemente do sistema tradicional, <strong>não atribuímos notas nem classificamos por grau</strong>. O que buscamos é a qualidade da expressão, a participação, a possibilidade de desenvolvimento, a integridade do conteúdo e o respeito aos valores que fundamentam nossa escola.
            </p>

            <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border-l-4 border-blue-600 p-5 rounded-r-2xl">
              <p className="text-blue-950 font-bold text-base sm:text-lg italic flex items-start gap-3">
                <Quote className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <span>Nosso olhar não mede competição, zela pela clareza, pela verdade e pelo acolhimento do pensamento.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 2. O QUE NÃO AVALIAMOS */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-black text-xl border border-rose-500/20">
              2
            </div>
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block">Ruptura com o Modelo Tradicional Punitivo</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                2. O Que Não Avaliamos
              </h2>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base">
            Para garantir um ambiente de aprendizado seguro e fértil, eliminamos as barreiras comparativas e o medo de errar:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-700 font-extrabold text-base">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Sem notas de 0 a 10</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Não classificamos por desempenho comparativo nem ranqueamos alunos.
              </p>
            </div>

            <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-700 font-extrabold text-base">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Sem comprovação científica obrigatória</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                O trabalho pode ser ensaio, reflexão, vivência ou experiência pessoal, pois acreditamos que a ciência também está em evolução, especialmente com a contribuição de novas ideias.
              </p>
            </div>

            <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-700 font-extrabold text-base">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Não julgamos a ideia do autor</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Não reprovamos por discordância de opinião ou níveis de compreensão.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-300 text-center">
            <p className="text-amber-950 font-bold text-sm sm:text-base">
              💡 O que importa não é &ldquo;acertar&rdquo; uma resposta única — é pensar com clareza, ética e coerência.
            </p>
          </div>
        </section>

        {/* 3. O QUE OBSERVAMOS E VALORIZAMOS */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center font-black text-xl border border-emerald-500/20">
              3
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Critérios Formativos</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                3. O Que Observamos e Valorizamos
              </h2>
            </div>
          </div>

          {/* 3.1 Correção de Linguagem */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  3.1 Correção de Linguagem
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                Expressão & Comunicação
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200">
                    <th className="py-3 px-4 font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wider w-1/3">
                      Critério
                    </th>
                    <th className="py-3 px-4 font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wider">
                      O que verificamos
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Ortografia</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Escrita correta das palavras conforme norma-padrão.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Gramática</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Concordância, regência, pontuação e estrutura das frases.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Clareza</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      O texto é compreensível, as ideias se conectam, o leitor acompanha sem dificuldade.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Vocabulário</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Uso adequado e respeitoso — sem excesso de jargões nem empobrecimento da linguagem.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200 text-xs sm:text-sm text-blue-900 font-medium italic">
              &ldquo;A língua é o instrumento do pensamento: quanto mais clara, mais fielmente o conhecimento se expressa.&rdquo;
            </div>
          </div>

          {/* 3.2 Verdade e Integridade */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  3.2 Verdade e Integridade
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Honestidade Intelectual
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200">
                    <th className="py-3 px-4 font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wider w-1/3">
                      Critério
                    </th>
                    <th className="py-3 px-4 font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wider">
                      O que significa
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Veracidade</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Afirmações sem comprovação científica são aceitas quando apresentadas como reflexão ou experiência pessoal. Nada de inventar fatos para dar peso ao texto.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors bg-rose-50/40">
                    <td className="py-3.5 px-4 font-bold text-rose-900 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Proibição de desinformação</span>
                    </td>
                    <td className="py-3.5 px-4 text-rose-950 font-medium">
                      Não aceitamos notícias falsas, afirmações inventadas, dados manipulados ou conteúdo que distorce a realidade. Se não tem certeza, não afirme como fato — apresente como dúvida, impressão ou experiência.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Autoria</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      O texto deve ser próprio. Pode-se pesquisar e citar fontes, mas a voz e a construção do raciocínio são do autor.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3.3 Ética e Respeito — O QUE NÃO ACEITAMOS */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-300 shadow-md space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-rose-600"></span>
                <h3 className="text-lg sm:text-xl font-black text-rose-900">
                  3.3 Ética e Respeito — O QUE NÃO ACEITAMOS
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                Linha Vermelha Inviolável
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-rose-50 border-b border-rose-200">
                    <th className="py-3 px-4 font-black text-rose-900 text-xs sm:text-sm uppercase tracking-wider w-1/3">
                      ❌ Não entra
                    </th>
                    <th className="py-3 px-4 font-black text-rose-900 text-xs sm:text-sm uppercase tracking-wider">
                      Motivo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-100">
                  <tr className="hover:bg-rose-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-rose-900">
                      Fakenews e desinformação
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Conteúdo que engana, distorce ou inventa dados não será publicado.
                    </td>
                  </tr>
                  <tr className="hover:bg-rose-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-rose-900">
                      Conteúdo que fere valores humanos
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Mensagens de ódio, discriminação, exclusão, preconceito ou que ataquem grupos por raça, gênero, religião, orientação ou origem.
                    </td>
                  </tr>
                  <tr className="hover:bg-rose-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-rose-900">
                      Ofensas e ataques pessoais
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Não é permitido criticar pessoas, xingar, difamar ou expor indivíduos.
                    </td>
                  </tr>
                  <tr className="hover:bg-rose-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-rose-900">
                      Fofocas e acusações sem prova
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Nomes, situações ou acontecimentos não devem ser mencionados de forma leviana ou acusatória.
                    </td>
                  </tr>
                  <tr className="hover:bg-rose-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-rose-900">
                      Discriminação e violência
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Qualquer conteúdo que justifique, promova ou normalize dano a outrem.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-rose-50 via-amber-50 to-rose-50 rounded-2xl p-4 border border-rose-300">
              <p className="text-slate-900 font-bold text-xs sm:text-sm leading-relaxed">
                ⚖️ <strong>A liberdade de expressão existe aqui — mas anda de mãos dadas com a responsabilidade.</strong> Você tem o direito de pensar diferente; tem o dever de respeitar.
              </p>
            </div>
          </div>

          {/* 3.4 Abordagem Reflexiva */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-cyan-600"></span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  3.4 Abordagem Reflexiva
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                Liberdade Autoral & Construção
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200">
                    <th className="py-3 px-4 font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wider w-1/3">
                      Princípio
                    </th>
                    <th className="py-3 px-4 font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wider">
                      Orientações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Pode-se escrever sobre experiência pessoal</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      O que você viveu, sentiu e compreendeu tem valor e lugar.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Pode-se expressar dúvidas</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Perguntar é mais nobre do que fingir saber.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Pode-se apresentar visão própria</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      Não precisa &ldquo;provar cientificamente&rdquo; tudo: exponha com clareza a situação, o que a ciência fala a respeito e o que estudos recentes apresentam, o que estudiosos falaram a respeito, com coerência e honestidade.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors bg-blue-50/30">
                    <td className="py-3.5 px-4 font-bold text-blue-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>O que se espera</span>
                    </td>
                    <td className="py-3.5 px-4 text-blue-950 font-medium">
                      Que o texto demonstre que o autor pensou, conectou ideias e elaborou sua compreensão sobre o tema.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. FLUXO DE ANÁLISE E DEVOLUTIVA */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center font-black text-xl border border-indigo-500/20">
              4
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block">Acompanhamento e Mentoria Contínua</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                4. Fluxo de Análise e Devolutiva
              </h2>
            </div>
          </div>

          {/* Stepped Process Visual Flow */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                1
              </div>
              <div className="space-y-1">
                <div className="font-extrabold text-slate-900 text-base">
                  Envio do trabalho pelo participante
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Submissão do manuscrito através dos canais oficiais ou sala de aula virtual da ESDHUBEM.
                </p>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                2
              </div>
              <div className="space-y-1">
                <div className="font-extrabold text-slate-900 text-base">
                  Leitura e verificação conforme os critérios formativos
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Nossos curadores analisam a correção linguística, integridade, ética, respeito e profundidade reflexiva.
                </p>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Step 3 - Tripla Devolutiva */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-5 border-2 border-blue-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                  3
                </div>
                <div className="font-black text-slate-900 text-base">
                  Resultado da Análise Preliminar
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-300 space-y-1">
                  <div className="font-black text-emerald-900 flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Aprovado</span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    Publicação e reconhecimento acadêmico com emissão de selo e certificação.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 border border-amber-300 space-y-1">
                  <div className="font-black text-amber-900 flex items-center gap-1.5 text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Ajustes sugeridos</span>
                  </div>
                  <p className="text-xs text-amber-800">
                    Devolutiva construtiva com orientações detalhadas de caminho para correção.
                  </p>
                </div>

                <div className="bg-rose-50 rounded-xl p-4 border border-rose-300 space-y-1">
                  <div className="font-black text-rose-900 flex items-center gap-1.5 text-sm">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Incompatibilidade</span>
                  </div>
                  <p className="text-xs text-rose-800">
                    Explicação clara do motivo e orientação acolhedora para reescrever.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                4
              </div>
              <div className="space-y-1">
                <div className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Reenvio e reanálise — sem limite de tentativas</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  O autor tem total liberdade para aprimorar o texto quantas vezes forem necessárias. O processo é de evolução contínua.
                </p>
              </div>
            </div>

            <div className="flex justify-center text-slate-400">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Step 5 */}
            <div className="bg-emerald-50 rounded-2xl p-4 sm:p-5 border-2 border-emerald-400 flex items-start gap-3 sm:gap-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                5
              </div>
              <div className="space-y-1">
                <div className="font-extrabold text-emerald-950 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Aprovado → Publicação / Emissão de Certificado</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900">
                  Texto consolidado, publicado nos canais institucionais ou arquivado com emissão oficial do certificado de mérito.
                </p>
              </div>
            </div>
          </div>

          {/* Destaques Pedagógicos Fundamentais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-blue-50/70 rounded-2xl p-5 border border-blue-200 space-y-2">
              <h4 className="font-black text-blue-950 text-sm sm:text-base flex items-center gap-2">
                <Heart className="w-4 h-4 text-blue-600" />
                <span>Não há reprovação definitiva</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Sempre que possível, orientamos para que o autor reescreva, ajuste e retorne. O caminho é de acompanhamento, não de exclusão.
              </p>
            </div>

            <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200 space-y-2">
              <h4 className="font-black text-amber-950 text-sm sm:text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Devolutiva construtiva</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Quando houver ajustes, indicamos o que corrigir e por quê, não apontamos apenas o erro, mostramos o caminho.
              </p>
            </div>
          </div>

          <div className="bg-emerald-900 text-white rounded-2xl p-5 sm:p-6 border border-emerald-700 shadow-md">
            <p className="text-xs sm:text-sm sm:text-base text-emerald-100 leading-relaxed">
              ⭐ <strong>Garantia ESDHUBEM:</strong> Aqui na ESDHUBEM o aluno sempre sai aprovado e certificado, independente do seu texto ter sido publicado. Mas sempre será com grande alegria que veremos mais um artigo dos nossos alunos publicados no site da nossa escola ESDHUBEM.
            </p>
          </div>
        </section>

        {/* NOTA SOBRE CONCILIAÇÃO DE DIVERGÊNCIAS E CRITÉRIOS DE PUBLICAÇÃO */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-blue-900/30 shadow-xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Cabeçalho da Nota */}
          <div className="flex items-start sm:items-center gap-3.5 border-b border-slate-200 pb-5">
            <div className="w-12 h-12 rounded-2xl bg-[#011049] text-[#FFC72C] flex items-center justify-center font-black text-xl shrink-0 shadow-md border border-blue-800">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 text-[11px] font-extrabold uppercase tracking-wide mb-1">
                <span>Diretriz Institucional e Jurídico-Pedagógica</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                ⚖️ NOTA SOBRE CONCILIAÇÃO DE DIVERGÊNCIAS E CRITÉRIOS DE PUBLICAÇÃO
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-bold">
                ESDHUBEM — Escola de Desenvolvimento Humano e Bem-Estar
              </p>
            </div>
          </div>

          {/* 1. Da liberdade de expressão e dos limites de publicação */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>1. Da liberdade de expressão e dos limites de publicação</span>
            </h3>
            <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 pl-4 border-l-2 border-blue-200">
              <p>
                A ESDHUBEM reconhece e valoriza a liberdade de criação e expressão de cada participante. O trabalho autoral é fruto da visão, da experiência e do pensamento do(a) autor(a). Contudo, a publicação em espaço oficial da escola implica também a observância dos princípios, valores, diretrizes éticas e institucionais que regem esta instituição.
              </p>
              <p>
                Dessa forma, a ESDHUBEM reserva-se o direito de decidir sobre a publicação de qualquer trabalho, conforme os critérios estabelecidos nestas diretrizes — <strong>clareza de linguagem, veracidade, respeito aos valores humanos, ausência de conteúdo ofensivo, discriminatório, falso ou prejudicial</strong>.
              </p>
            </div>
          </div>

          {/* 2. Da divergência entre o autor e a escola */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>2. Da divergência entre o autor e a escola</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Caso haja discordância entre o participante e a ESDHUBEM quanto ao conteúdo a ser publicado — por exemplo, quando a escola indicar a necessidade de ajuste, supressão ou redação de trecho e o(a) autor(a) não concordar — aplica-se o seguinte:
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3">
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                <strong>2.1 Notificação fundamentada por escrito:</strong> A escola apresentará ao participante, de forma fundamentada e por escrito, o motivo pelo qual determinado conteúdo não será publicado na forma apresentada, indicando claramente o trecho ou aspecto que precisa ser ajustado e o princípio ou critério que justifica a orientação.
              </p>
            </div>

            {/* 2.2 As 3 Alternativas */}
            <div className="space-y-3 pt-1">
              <div className="font-extrabold text-slate-900 text-sm sm:text-base">
                2.2 O participante terá as seguintes alternativas, sem qualquer prejuízo à sua participação ou aproveitamento no curso:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {/* Opção 1 */}
                <div className="bg-gradient-to-b from-emerald-50/80 to-emerald-50/30 rounded-2xl p-5 border border-emerald-300 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Opção 1 — Realizar o ajuste sugerido</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    O participante procede à alteração solicitada e o trabalho segue normalmente para publicação nos canais oficiais da ESDHUBEM.
                  </p>
                </div>

                {/* Opção 2 */}
                <div className="bg-gradient-to-b from-blue-50/80 to-blue-50/30 rounded-2xl p-5 border border-blue-300 space-y-2">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>Opção 2 — Manter o conteúdo original sem publicação</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    O participante pode optar por manter seu texto da forma que escreveu, <strong>sem que isso implique reprovação ou prejuízo no aproveitamento do curso</strong>. O trabalho será avaliado e reconhecido quanto à aprendizagem, mas não será publicado nos canais oficiais da escola.
                  </p>
                </div>

                {/* Opção 3 */}
                <div className="bg-gradient-to-b from-amber-50/80 to-amber-50/30 rounded-2xl p-5 border border-amber-300 space-y-2">
                  <div className="flex items-center gap-2 text-amber-950 font-extrabold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Opção 3 — Apresentar justificativa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    O participante pode, em até <strong>5 (cinco) dias úteis</strong>, apresentar manifestação por escrito expondo seus motivos. A coordenação reavaliará o caso e dará resposta final, de forma fundamentada.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-4 sm:p-5 border border-slate-300 space-y-2">
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                <strong>2.3 Decisão final institucional e garantia de certificação:</strong> A decisão final sobre a publicação nos espaços oficiais da ESDHUBEM cabe à própria instituição, que zela pela coerência, integridade e segurança do ambiente compartilhado. O exercício desta prerrogativa não constitui recusa de reconhecimento de aproveitamento: <strong>o participante que cumpre as etapas de aprendizagem faz jus ao certificado correspondente, independentemente de publicação.</strong>
              </p>
            </div>
          </div>

          {/* 3. Do princípio fundamental */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>3. Do princípio fundamental</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              A ESDHUBEM não se coloca como juíza da verdade sobre opiniões, crenças ou visões de mundo — mas zela para que o que leva seu nome esteja em conformidade com os valores que defende.
            </p>

            <div className="bg-gradient-to-r from-blue-900 via-[#011049] to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-700/60 text-center space-y-3">
              <Quote className="w-8 h-8 text-[#FFC72C] mx-auto opacity-80" />
              <p className="text-base sm:text-xl font-bold text-[#FFC72C] leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;O(a) autor(a) é livre para dizer o que pensa; a escola é livre para escolher o que publica em seu espaço. Ninguém é obrigado a concordar — mas ambos podem respeitar o caminho de cada um: o autor com sua obra, a escola com seus princípios.&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
              A não publicação de um texto não invalida o trabalho nem a aprendizagem do participante — significa apenas que aquele conteúdo específico não se alinha aos critérios de comunicação da escola. <strong>O reconhecimento do percurso formativo permanece integralmente assegurado.</strong>
            </p>
          </div>

          {/* 4. Disposição final */}
          <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-300 space-y-2">
            <h4 className="font-extrabold text-amber-950 text-sm sm:text-base flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
              <span>4. Disposição final</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              Ao submeter seu trabalho para análise e publicação, o participante declara conhecer e concordar com os termos aqui estabelecidos. Caso não haja acordo quanto à versão a ser publicada, prevalece o disposto no <strong>item 2.2</strong> acima, garantindo-se sempre o aproveitamento do percurso e a liberdade de escolha do(a) autor(a).
            </p>
          </div>
        </section>

        {/* 5. RESUMO — EM UMA FRASE */}
        <section className="bg-gradient-to-r from-[#011049] via-[#061e47] to-[#011049] rounded-3xl p-8 sm:p-12 text-white border-2 border-amber-400/40 shadow-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Quote className="w-3.5 h-3.5" />
            <span>5. Resumo da Nossa Filosofia</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-200 uppercase tracking-wider">
            Resumo — Em Uma Frase
          </h2>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFC72C] leading-snug max-w-3xl mx-auto italic">
            &ldquo;Escreva com clareza, fale com verdade, pense com profundidade e respeite o outro. Isso é tudo o que pedimos.&rdquo;
          </p>
        </section>

        {/* 6. CONSIDERAÇÃO FINAL */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black text-xl border border-amber-500/20">
              6
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Compromisso Ético & Social</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                6. Consideração Final
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Nosso propósito <strong>não é formar quem &ldquo;sabe tudo&rdquo;</strong>, é formar quem sabe pensar, expressar e respeitar.
            </p>
            <p>
              Prezamos pelo nosso posicionamento público por isso precisamos cuidar do que está sendo postado, como forma de respeitar a sociedade e outras instituições públicas.
            </p>

            <div className="bg-gradient-to-r from-amber-50 via-rose-50/40 to-amber-50 border-l-4 border-[#FFC72C] p-5 rounded-r-2xl">
              <p className="text-slate-900 font-bold text-base sm:text-lg">
                💖 O trabalho que sai do coração, que reflete honestidade e que fala com respeito, sempre tem lugar aqui.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation Cards */}
        <section className="pt-6 border-t border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Conheça outros pilares e diretrizes da ESDHUBEM
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate?.('diretrizes-pedagogicas')}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-left group cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-slate-900 text-sm">Diretrizes Pedagógicas</div>
              <div className="text-xs text-slate-500">Metodologia e Tríade da Assimilação e Comunicação</div>
            </button>

            <button
              onClick={() => onNavigate?.('regras-certificacao-merito')}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-left group cursor-pointer"
            >
              <Award className="w-5 h-5 text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-slate-900 text-sm">Diretrizes de Certificação</div>
              <div className="text-xs text-slate-500">Escala de Autoria e Selos de Mérito</div>
            </button>

            <button
              onClick={() => onNavigate?.('diretrizes-protecao-autoria')}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all text-left group cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-slate-900 text-sm">Proteção à Autoria</div>
              <div className="text-xs text-slate-500">Salvaguarda intelectual e originalidade</div>
            </button>
          </div>
        </section>

      </main>
    </div>
  );
};
