import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Brain,
  ShieldCheck,
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
            <span className="text-[#FFC72C] font-semibold">Diretrizes Pedagógicas</span>
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
            Diretrizes Pedagógicas
          </h1>

          <p className="text-[#FFC72C] text-lg sm:text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
            Uma escola de cursos livres que vai além do certificado.
          </p>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed pt-2">
            A ESDHUBEM valoriza a expressão, a investigação e a autoria. Oferecemos cursos livres voltados à formação, capacitação, horas complementares e treinamentos focados no desenvolvimento humano, ampliação de conhecimentos, produção intelectual e bem-estar.
          </p>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Conhecimento com responsabilidade */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Conhecimento com responsabilidade
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Valorizamos diferentes formas de conhecimento e produção intelectual: científica, filosófica, humanística, cultural, tradicional, experiencial e qualitativa.
          </p>

          <div className="p-5 rounded-2xl bg-amber-50/80 border-l-4 border-[#FFC72C] text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Buscamos distinguir com clareza: <strong>experiência, opinião, interpretação, hipótese, argumento e evidência.</strong>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Nosso compromisso é estimular uma relação mais consciente com o conhecimento: ler, questionar, pesquisar, comparar perspectivas e comunicar com responsabilidade.
          </p>
        </section>

        {/* 📋 Modalidades de Aprendizagem */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>📋</span> Modalidades de Aprendizagem
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Compreenda as diferenças de objetivo, exigências e formas de certificação para cada modalidade oferecida ou reconhecida.
            </p>
          </div>

          {/* Tabela de Modalidades */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">MODALIDADE</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">FOCO PRINCIPAL</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">EXIGÊNCIA / CARACTERÍSTICA</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">CERTIFICAÇÃO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    🎓 Formação
                  </td>
                  <td className="py-4 px-4">
                    Trilhas completas que preparam do zero ao avançado em uma profissão
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Requer escolaridade de ingresso e estrutura curricular definida
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
                    Desenvolver habilidade técnica específica para o trabalho
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Não exige formação prévia. Foco na prática e empregabilidade
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
                    Executar tarefa ou ferramenta específica
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Curto prazo, foco em aplicação imediata
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
                    Conhecimento geral e atualização
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Sem exigência de escolaridade. Flexível e ágil
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
                    Cumprir exigência de carga horária da faculdade
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Para estudantes universitários. Inclui cursos, palestras, eventos
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Declaração com carga horária para validação acadêmica
                  </td>
                </tr>
                <tr className="hover:bg-amber-50/50 transition-colors bg-amber-50/30">
                  <td className="py-4 px-4 font-bold text-amber-950 whitespace-nowrap">
                    ✍️ Produção Autoral
                  </td>
                  <td className="py-4 px-4">
                    Criar conteúdo próprio: artigos, livros, registros, softwares
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    Demonstra autoria, inovação e autoridade no tema
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-bold text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-lg text-xs inline-block">
                      Prata / Ouro / Diamante — conforme impacto e publicação
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Detalhamento de cada modalidade */}
          <div className="space-y-6 pt-4 border-t border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Detalhamento de cada modalidade
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Formação */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>🎓</span>
                  <h4>Formação</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  É a base da carreira. Cursos de estrutura definida que preparam para o exercício profissional, com requisitos de ingresso e programa completo.
                </p>
              </div>

              {/* Capacitação */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>🛠️</span>
                  <h4>Capacitação</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Prepara para nova função ou aprimoramento. Une teoria e prática com foco em aplicabilidade. Não exige formação prévia na área.
                </p>
              </div>

              {/* Treinamento */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>⚙️</span>
                  <h4>Treinamento</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Aprendizado prático e direto. Focado em dominar ferramenta, procedimento ou tarefa específica em curto prazo.
                </p>
              </div>

              {/* Cursos Livres */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>📚</span>
                  <h4>Cursos Livres</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Educação flexível, sem exigência de escolaridade. Atualização, desenvolvimento pessoal e cultural em temas variados.
                </p>
              </div>

              {/* Horas Complementares */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>⏱️</span>
                  <h4>Horas Complementares</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Comprovação de atividades fora da grade obrigatória do ensino superior. Documentação oficial para validação na instituição de origem.
                </p>
              </div>

              {/* Produção Autoral */}
              <div className="bg-amber-50/60 rounded-2xl p-6 border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-lg font-bold text-amber-950">
                  <span>✍️</span>
                  <h4>Produção Autoral</h4>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  O aluno passa de estudante a criador. Trabalhos próprios recebem reconhecimento em níveis crescentes conforme a forma de publicação e impacto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 🏅 Percurso de Aprendizagem e Autoria */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                🏅 Percurso de Aprendizagem e Autoria
              </h2>
            </div>
            <p className="text-base text-slate-700 leading-relaxed">
              Na ESDHUBEM, o aprendizado não precisa terminar no certificado. Você pode escolher até onde deseja avançar:
            </p>
          </div>

          {/* Fluxo Visual em Texto Destacado */}
          <div className="bg-slate-900 text-[#FFC72C] p-5 rounded-2xl font-mono text-center text-sm sm:text-base font-bold tracking-wider shadow-inner">
            APRENDER → EXPRESSAR → INVESTIGAR → AUTORAR
          </div>

          {/* Tabela de Níveis */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Nível</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Etapa</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">O que significa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-amber-800 whitespace-nowrap">
                    🥉 Bronze
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Aprender e compreender
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    Realizar o curso, adquirir conhecimento e receber certificação de conclusão
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
                  <td className="py-4 px-4 font-bold text-slate-600 whitespace-nowrap">
                    🥈 Prata
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Expressar e comunicar
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    Transformar o aprendizado em texto estruturado e compartilhar publicamente
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-amber-600 whitespace-nowrap">
                    🥇 Ouro
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Investigar e aprofundar
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    Desenvolver trabalho com referências, reflexão crítica e rigor intelectual
                  </td>
                </tr>
                <tr className="hover:bg-amber-50/50 transition-colors bg-amber-50/30">
                  <td className="py-4 px-4 font-bold text-blue-700 whitespace-nowrap">
                    💎 Diamante
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    Autorar e construir
                  </td>
                  <td className="py-4 px-4 text-slate-700">
                    Criar obra original — manual, ensaio, livro ou artigo — com reconhecimento de excelência
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 text-slate-600 text-sm leading-relaxed">
            Os níveis representam diferentes possibilidades de trajetória, não uma hierarquia entre pessoas. Cada um escolhe conforme seus objetivos, tempo e possibilidades.
          </div>
        </section>

        {/* Inteligência Artificial com responsabilidade */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Inteligência Artificial com responsabilidade
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A ESDHUBEM abraça a IA como ferramenta de apoio: auxilia na organização, revisão e planejamento. Mas defendemos um princípio:
          </p>

          <div className="p-5 rounded-2xl bg-slate-900 text-white font-medium text-base sm:text-lg leading-relaxed border-l-4 border-[#FFC72C]">
            A tecnologia pode auxiliar a produção, mas não deve substituir o pensamento, a compreensão e a autoria humana.
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A responsabilidade sobre o conteúdo criado permanece sempre com o autor.
          </p>
        </section>

        {/* A escola que também dá voz */}
        <section className="bg-gradient-to-br from-[#182333] to-[#243042] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              A escola que também dá voz
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              A ESDHUBEM não oferece apenas cursos — oferece possibilidades:
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-3">
            {[
              'Possibilidade de aprender',
              'Possibilidade de desenvolver a escrita',
              'Possibilidade de investigar',
              'Possibilidade de publicar',
              'Possibilidade de construir uma trajetória autoral'
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-xs px-5 py-3.5 rounded-xl border border-white/10 text-white font-medium text-base sm:text-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4 pt-4 border-t border-slate-700/80">
            <p className="text-slate-300 text-base">
              O curso pode ser o começo de um caminho maior:
            </p>
            <div className="text-[#FFC72C] font-semibold text-sm sm:text-base tracking-wide bg-black/30 py-3 px-4 rounded-xl inline-block">
              Conhecimento → Aprendizado → Expressão → Investigação → Produção → Autoria
            </div>
          </div>

          <div className="text-center pt-4 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              ESDHUBEM
            </div>
            <p className="text-lg sm:text-xl font-bold text-white max-w-2xl mx-auto leading-relaxed">
              Aprender é o começo. Criar, investigar e compartilhar também podem fazer parte do caminho.
            </p>
          </div>

          {onNavigate && (
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onNavigate('sala-de-aula')}
                className="bg-[#FFC72C] hover:bg-amber-400 text-slate-900 font-extrabold px-8 py-3.5 rounded-2xl shadow-lg transition-transform transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Conheça Nossos Cursos</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
