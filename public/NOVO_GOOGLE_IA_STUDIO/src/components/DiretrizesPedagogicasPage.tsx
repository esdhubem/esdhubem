import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  PenTool,
  Search,
  BookMarked,
  ShieldCheck,
  Brain,
  Award,
  ArrowRight
} from 'lucide-react';

interface DiretrizesPedagogicasPageProps {
  onBackToHome: () => void;
  onOpenValidator?: () => void;
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-20">
      {/* Top Breadcrumbs */}
      <div className="bg-[#182333] border-b border-slate-700/60 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Diretrizes e Esclarecimento Pedagógico</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FFC72C]" />
            <span>ESDHUBEM • Proposta Pedagógica</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <BookOpen className="w-4 h-4" />
            <span>ESDHUBEM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Diretrizes e Esclarecimento Pedagógico
          </h1>

          <p className="text-[#FFC72C] text-lg sm:text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
            Uma escola de cursos livres que vai além do certificado através da escrita valoriza a expressão, a investigação e a autoria.
          </p>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro Card */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-5">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A <strong>ESDHUBEM</strong> oferece cursos livres voltados à formação, capacitação, desenvolvimento humano, ampliação de conhecimentos e produção intelectual.
          </p>
          <div className="p-5 rounded-2xl bg-amber-50/80 border-l-4 border-[#FFC72C] text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Nossa proposta parte de uma ideia simples: <strong>aprender não precisa terminar no certificado.</strong>
          </div>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            O estudante pode realizar um curso para adquirir conhecimentos e concluir sua formação, mas também pode escolher continuar seu percurso, desenvolvendo sua capacidade de ler, escrever, investigar e produzir.
          </p>
        </section>

        {/* Os Quatro Movimentos */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Aprender. Expressar. Investigar. Autorar.
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Esses quatro movimentos representam as possibilidades de uma trajetória de aprendizagem na ESDHUBEM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">APRENDER</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Adquirir conhecimentos, compreender conceitos e desenvolver novas perspectivas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">EXPRESSAR</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Organizar ideias e transformar aquilo que foi aprendido em textos e outras formas de comunicação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">INVESTIGAR</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Aprofundar questões, buscar referências, formular perguntas e desenvolver produções mais elaboradas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-sm">
                  4
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">AUTORAR</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Transformar conhecimentos, experiências e investigações em artigos, ensaios, manuais, guias, livros e outras produções intelectuais.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 text-center text-sm text-slate-700 font-medium">
            Esse percurso é opcional. Cada estudante escolhe até onde deseja avançar, de acordo com seus objetivos, tempo e possibilidades.
          </div>
        </section>

        {/* Quatro possibilidades de formação */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Quatro possibilidades de formação
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Para organizar esses diferentes caminhos, a ESDHUBEM trabalha com quatro modalidades:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-gradient-to-b from-amber-50 to-orange-50/40 p-6 rounded-2xl border-2 border-amber-600/30 shadow-sm">
              <div className="text-3xl mb-2">🥉</div>
              <h3 className="text-lg font-extrabold text-amber-900 mb-1">
                BRONZE — Aprender e compreender
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Para quem deseja realizar o curso, desenvolver seus conhecimentos e obter sua certificação.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-50 to-slate-100/60 p-6 rounded-2xl border-2 border-slate-300 shadow-sm">
              <div className="text-3xl mb-2">🥈</div>
              <h3 className="text-lg font-extrabold text-slate-800 mb-1">
                PRATA — Expressar e comunicar
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Para quem deseja transformar o que aprendeu em uma produção textual e desenvolver sua capacidade de comunicação.
              </p>
            </div>

            <div className="bg-gradient-to-b from-yellow-50 to-amber-50/60 p-6 rounded-2xl border-2 border-yellow-400/60 shadow-sm">
              <div className="text-3xl mb-2">🥇</div>
              <h3 className="text-lg font-extrabold text-yellow-800 mb-1">
                OURO — Investigar e aprofundar
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Para quem deseja desenvolver uma produção mais aprofundada, utilizando referências, reflexão crítica e rigor intelectual.
              </p>
            </div>

            <div className="bg-gradient-to-b from-cyan-50 to-sky-50/60 p-6 rounded-2xl border-2 border-cyan-300/60 shadow-sm">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="text-lg font-extrabold text-cyan-800 mb-1">
                DIAMANTE — Autorar e construir
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Para quem deseja transformar sua trajetória de aprendizagem em uma obra mais ampla, como um manual, guia ou livro.
              </p>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-slate-500 italic">
            Os níveis representam diferentes possibilidades de produção e participação, e não uma hierarquia entre pessoas.
          </p>
        </section>

        {/* Conhecimento com responsabilidade */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Conhecimento com responsabilidade
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A ESDHUBEM valoriza diferentes formas de conhecimento e produção intelectual, incluindo estudos científicos, filosóficos, humanísticos, culturais, tradicionais, experienciais e qualitativos.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Ao mesmo tempo, buscamos distinguir claramente experiência, opinião, interpretação, hipótese, argumento e evidência.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            Nosso compromisso é estimular uma relação mais consciente com o conhecimento: ler, questionar, pesquisar, comparar perspectivas e comunicar informações com responsabilidade.
          </p>
        </section>

        {/* Autoria na era da Inteligência Artificial */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Autoria na era da Inteligência Artificial
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A inteligência artificial pode ser uma ferramenta de apoio à aprendizagem e à produção.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Ela pode auxiliar na organização de ideias, planejamento, revisão e desenvolvimento de textos. Porém, a compreensão, a verificação das informações e a responsabilidade pela produção permanecem com o autor.
          </p>
          <div className="p-5 rounded-2xl bg-slate-900 text-white font-medium text-sm sm:text-base leading-relaxed border-l-4 border-[#FFC72C]">
            <p className="text-xs uppercase tracking-wider text-[#FFC72C] font-bold mb-1">Na ESDHUBEM, defendemos um princípio:</p>
            A tecnologia pode auxiliar a produção, mas não deve substituir o pensamento, a compreensão e a autoria humana.
          </div>
        </section>

        {/* Quadro: Modalidades de Aprendizagem e Reconhecimento */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                  Estrutura de Ensino & Certificação
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Modalidades de Aprendizagem e Reconhecimento
                </h2>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-2">
              Compreenda as diferenças de objetivo, exigências e formas de certificação para cada modalidade oferecida ou reconhecida.
            </p>
          </div>

          {/* Tabela Principal */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">MODALIDADE</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">FOCO PRINCIPAL</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">EXIGÊNCIA / CARACTERÍSTICA</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">CERTIFICAÇÃO / DESTAQUE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    🎓 Formação
                  </td>
                  <td className="py-4 px-4">
                    Trilhas de aprendizado completas que preparam o profissional do zero até o nível avançado em uma profissão específica
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Requer escolaridade de ingresso e estrutura curricular definida.
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Certificado livre para exercício profissional
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    🛠️ Capacitação
                  </td>
                  <td className="py-4 px-4">
                    Desenvolver uma habilidade técnica específica para o trabalho.
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Não exige formação prévia na área. Foco na prática e empregabilidade.
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Certificado de capacitação profissional
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    ⚙️ Treinamento
                  </td>
                  <td className="py-4 px-4">
                    Ensinar a executar uma tarefa ou ferramenta específica (comum em empresas).
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Curto prazo. Foco imediato na aplicação prática. Objetivo: dominar uma tarefa.
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Certificado de conclusão / participação
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    📚 Cursos Livres
                  </td>
                  <td className="py-4 px-4">
                    Conhecimento geral e atualização em temas variados.
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Sem exigência de escolaridade. Educação não-formal, ágil e flexível.
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Certificado de participação / conclusão
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    ⏱️ Horas Complementares
                  </td>
                  <td className="py-4 px-4">
                    Cumprir exigência de carga horária das instituições de ensino superior.
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Obrigatório para estudantes universitários. Pode incluir cursos, palestras e workshops.
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Declaração / certificado com carga horária para validação acadêmica
                  </td>
                </tr>
                <tr className="hover:bg-amber-50/50 transition-colors bg-amber-50/30">
                  <td className="py-4 px-4 font-bold text-amber-950 whitespace-nowrap">
                    ✍️ Produção Autoral
                  </td>
                  <td className="py-4 px-4">
                    Criar conteúdo próprio: artigos, livros, manuais, softwares, registros.
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Demonstra autoria, inovação e autoridade no tema. Enriquecimento do currículo acadêmico e profissional.
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-bold text-amber-800 bg-amber-100/90 border border-amber-300 px-3 py-1 rounded-lg text-xs inline-block">
                      Prata, Ouro ou Diamante — conforme nível de publicação e impacto
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 📖 Entenda em Detalhes */}
          <div className="space-y-6 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span>📖</span> Entenda em Detalhes
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Formação */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>🎓</span>
                  <h4>Formação</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  É a base da sua carreira. São cursos de longa duração regulamentados pelo MEC — como graduações, licenciaturas e cursos técnicos — que conferem um título oficial para você exercer uma profissão. Requer escolaridade de ingresso e estrutura curricular definida.
                </p>
              </div>

              {/* Capacitação */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>🛠️</span>
                  <h4>Capacitação</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Serve para preparar você para uma nova função ou aprimorar o que você já faz. É um meio-termo entre teoria e prática, focado na empregabilidade. Não exige formação prévia na área e oferece conhecimento aplicável logo no início.
                </p>
              </div>

              {/* Treinamento */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>⚙️</span>
                  <h4>Treinamento</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  É o aprendizado mais prático e rápido de todos. Geralmente é aplicado quando você precisa dominar uma ferramenta, procedimento ou tarefa específica — por exemplo, uso de software, normas de segurança ou processo operacional. Foco na execução imediata.
                </p>
              </div>

              {/* Cursos Livres */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>📚</span>
                  <h4>Cursos Livres</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  São cursos de qualificação rápida que não dependem de autorização do MEC. Podem abordar qualquer assunto — desde desenvolvimento pessoal até temas técnicos. Servem para atualização de currículo, enriquecimento cultural e aprendizado flexível. Sem exigência de escolaridade.
                </p>
              </div>

              {/* Horas Complementares */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>⏱️</span>
                  <h4>Horas Complementares</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Não são um "tipo de curso", mas sim uma exigência das faculdades: para se formar, o aluno precisa comprovar atividades complementares fora da grade obrigatória. Cursos livres, palestras, workshops e eventos podem ser aproveitados para esse cumprimento. Emitimos documento com carga horária para validação.
                </p>
              </div>

              {/* Produção Autoral */}
              <div className="bg-amber-50/60 rounded-2xl p-6 border border-amber-200/80 space-y-2 hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-2 text-lg font-bold text-amber-950">
                  <span>✍️</span>
                  <h4>Produção Autoral</h4>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  É quando você deixa de ser apenas estudante e passa a ser criador: escrever artigo, publicar livro, registrar patente ou desenvolver solução original conta como produção autoral. Isso valoriza muito o currículo acadêmico (Lattes) e o posicionamento de mercado. Recebe reconhecimento em níveis: Prata, Ouro ou Diamante, conforme impacto e forma de publicação.
                </p>
              </div>
            </div>
          </div>

          {/* 🎯 Resumo Visual Rápido */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🎯</span> Resumo Visual Rápido
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-sm border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Modalidade</th>
                    <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Prazo</th>
                    <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Foco</th>
                    <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Validação Principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Formação</td>
                    <td className="py-3 px-4 text-slate-600">Longo</td>
                    <td className="py-3 px-4">Profissão oficial</td>
                    <td className="py-3 px-4 font-medium text-slate-900">Diploma regulamentado</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
                    <td className="py-3 px-4 font-bold text-slate-900">Capacitação</td>
                    <td className="py-3 px-4 text-slate-600">Médio</td>
                    <td className="py-3 px-4">Habilidade prática</td>
                    <td className="py-3 px-4 font-medium text-slate-900">Certificado profissional</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Treinamento</td>
                    <td className="py-3 px-4 text-slate-600">Curto</td>
                    <td className="py-3 px-4">Tarefa / ferramenta</td>
                    <td className="py-3 px-4 font-medium text-slate-900">Certificado de participação</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
                    <td className="py-3 px-4 font-bold text-slate-900">Curso Livre</td>
                    <td className="py-3 px-4 text-slate-600">Variável</td>
                    <td className="py-3 px-4">Conhecimento geral</td>
                    <td className="py-3 px-4 font-medium text-slate-900">Certificado de conclusão</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">Horas Complementares</td>
                    <td className="py-3 px-4 text-slate-600">Conforme exigência</td>
                    <td className="py-3 px-4">Cumprimento de requisito acadêmico</td>
                    <td className="py-3 px-4 font-medium text-slate-900">Declaração de carga horária</td>
                  </tr>
                  <tr className="hover:bg-amber-50/50 transition-colors bg-amber-50/20">
                    <td className="py-3 px-4 font-bold text-amber-950">Produção Autoral</td>
                    <td className="py-3 px-4 text-slate-600">Conforme projeto</td>
                    <td className="py-3 px-4">Criação e autoria</td>
                    <td className="py-3 px-4 font-semibold text-amber-800">Nível Prata / Ouro / Diamante</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Uma escola onde o conhecimento também ganha voz */}
        <section className="bg-gradient-to-br from-[#182333] to-[#243042] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Uma escola onde o conhecimento também ganha voz
          </h2>
          <div className="space-y-2 text-slate-200 text-base sm:text-lg">
            <p>A ESDHUBEM não oferece apenas cursos.</p>
            <p className="font-bold text-[#FFC72C]">Oferece possibilidades.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-2xl mx-auto py-2">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">Possibilidade de aprender</div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">Possibilidade de desenvolver a escrita</div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">Possibilidade de investigar</div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">Possibilidade de publicar</div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">Possibilidade de construir uma trajetória autoral</div>
          </div>

          <p className="text-slate-300 text-sm">
            Assim, o curso pode ser o começo de um percurso maior:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#FFC72C] bg-white/5 py-4 px-6 rounded-2xl border border-white/10 max-w-xl mx-auto">
            <span>Curso</span>
            <span>→</span>
            <span>Aprendizagem</span>
            <span>→</span>
            <span>Expressão</span>
            <span>→</span>
            <span>Investigação</span>
            <span>→</span>
            <span>Produção</span>
            <span>→</span>
            <span>Autoria</span>
          </div>

          <div className="pt-4 border-t border-slate-700/60">
            <h3 className="text-xl font-black text-white tracking-wider uppercase">ESDHUBEM</h3>
            <p className="text-[#FFC72C] text-sm sm:text-base font-semibold mt-1">
              Aprender é o começo. Criar, investigar e compartilhar também podem fazer parte do caminho.
            </p>
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center pt-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold text-slate-950 bg-[#FFC72C] hover:bg-[#F5B014] border border-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar à Página Inicial</span>
          </button>
        </div>
      </main>
    </div>
  );
};
