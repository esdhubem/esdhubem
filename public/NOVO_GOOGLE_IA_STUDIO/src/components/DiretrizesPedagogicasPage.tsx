import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Brain,
  ShieldCheck,
  Award,
  ArrowRight,
  Feather
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
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo: Textos */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <BookOpen className="w-4 h-4" />
              <span>ESDHUBEM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Diretrizes Pedagógicas
            </h1>

            <p className="text-[#FFC72C] text-lg sm:text-xl font-semibold leading-relaxed">
              Uma escola de cursos livres que vai além do certificado.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
              A ESDHUBEM valoriza a expressão, a investigação e a autoria. Oferecemos cursos livres voltados à formação, capacitação, horas complementares e treinamentos focados no desenvolvimento humano, ampliação de conhecimentos, produção intelectual e bem-estar.
            </p>
          </div>

          {/* Lado Direito: Vídeo Odysee */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/80 bg-slate-950 aspect-video group">
              <iframe
                id="odysee-iframe"
                className="w-full h-full border-0 absolute inset-0"
                src="https://odysee.com/$/embed/@esdhubem:a/apresentacao_esdhubem:2?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                allowFullScreen
                title="Apresentação ESDHUBEM"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-center text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
              <span>Vídeo de Apresentação da Proposta Pedagógica ESDHUBEM</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Bloco Inicial: Propósito e Escrever é Processar */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A ESDHUBEM oferece formações voltadas para o desenvolvimento humano, a ampliação de conhecimentos, a produção intelectual e o bem-estar.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Valorizamos o conhecimento em todas as suas formas: científica, filosófica, cultural, tradicional e também a sabedoria que vem da experiência.
          </p>

          <div className="p-5 rounded-2xl bg-amber-50/80 border-l-4 border-[#FFC72C] text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            <strong>Com responsabilidade:</strong> aqui aprendemos a distinguir com clareza o que é fato, o que é opinião, o que é hipótese e o que é evidência. Ler, questionar, comparar e comunicar com honestidade faz parte do nosso caminho.
          </div>

          <div className="pt-4 border-t border-slate-200/80 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Feather className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Escrever é processar
              </h3>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              Escrever não é apenas "entregar uma tarefa". É uma ferramenta de organização do pensamento:
            </p>

            <div className="space-y-2.5 pl-2">
              <div className="flex items-center gap-3 text-slate-700 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                <span>Quando apenas lemos, a informação fica fragmentada</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                <span>Ao escrever, damos estrutura lógica às ideias</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                <span>O que colocamos no papel ganha clareza e aplicabilidade</span>
              </div>
            </div>

            <p className="text-base text-slate-800 font-semibold leading-relaxed pt-2">
              Por isso, ir além do certificado faz sentido: escrever é colocar o aprendizado em prática.
            </p>
          </div>
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
            <table className="w-full text-left text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-3.5 px-5 font-bold text-xs uppercase tracking-wider w-1/3">Modalidade</th>
                  <th className="py-3.5 px-5 font-bold text-xs uppercase tracking-wider">O que é</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900 whitespace-nowrap align-top">
                    🎓 Formação
                  </td>
                  <td className="py-4 px-5 leading-relaxed">
                    Trilha completa para uma profissão. Desenvolve competências técnicas e comportamentais focadas nas necessidades do mercado.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
                  <td className="py-4 px-5 font-bold text-slate-900 whitespace-nowrap align-top">
                    🛠️ Capacitação
                  </td>
                  <td className="py-4 px-5 leading-relaxed">
                    Habilidade prática de forma rápida. O aluno aprende a executar uma tarefa ou dominar uma ferramenta específica.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900 whitespace-nowrap align-top">
                    ⚙️ Treinamento
                  </td>
                  <td className="py-4 px-5 leading-relaxed">
                    Curta duração. Ajusta o desempenho em uma tarefa muito específica, conforme exigência de processos ou empresas.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
                  <td className="py-4 px-5 font-bold text-slate-900 whitespace-nowrap align-top">
                    📖 Curso Livre
                  </td>
                  <td className="py-4 px-5 leading-relaxed">
                    Aprendizado flexível e sem burocracia. Sem exigência de escolaridade prévia, sobre temas variados.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900 whitespace-nowrap align-top">
                    ⏱️ Horas Complementares
                  </td>
                  <td className="py-4 px-5 leading-relaxed">
                    Voltado para estudantes universitários. Cumpre exigência da faculdade e expande o conhecimento além da grade curricular.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 🏅 O Percurso: Aprender → Expressar → Investigar → Autorar */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                🏅 O Percurso: Aprender → Expressar → Investigar → Autorar
              </h2>
            </div>
            <p className="text-base text-slate-700 leading-relaxed">
              Você pode concluir o curso e receber seu certificado — e isso é muito valioso. Mas também pode escolher ir além:
            </p>
          </div>

          {/* Tabela de Níveis */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm border-collapse min-w-[580px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Etapa</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">O que acontece</th>
                  <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">Nível</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    1. Aprender
                  </td>
                  <td className="py-4 px-4 text-slate-700 leading-relaxed">
                    Faz o curso, compreende os conceitos, valida o conhecimento
                  </td>
                  <td className="py-4 px-4 font-bold text-amber-800 whitespace-nowrap">
                    🥉 Bronze
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    2. Expressar
                  </td>
                  <td className="py-4 px-4 text-slate-700 leading-relaxed">
                    Transforma o aprendizado em texto compartilhado publicamente
                  </td>
                  <td className="py-4 px-4 font-bold text-slate-600 whitespace-nowrap">
                    🥈 Prata
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    3. Investigar
                  </td>
                  <td className="py-4 px-4 text-slate-700 leading-relaxed">
                    Aprofunda com referências, rigor e reflexão crítica
                  </td>
                  <td className="py-4 px-4 font-bold text-amber-600 whitespace-nowrap">
                    🥇 Ouro
                  </td>
                </tr>
                <tr className="hover:bg-amber-50/50 transition-colors bg-amber-50/30">
                  <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                    4. Autorar
                  </td>
                  <td className="py-4 px-4 text-slate-700 leading-relaxed">
                    Cria obra original — livro, manual, artigo — com sua assinatura
                  </td>
                  <td className="py-4 px-4 font-bold text-blue-700 whitespace-nowrap">
                    💎 Diamante
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-slate-800 text-sm leading-relaxed flex items-start gap-2.5">
            <span className="text-base shrink-0">⚠️</span>
            <span>
              <strong>Não é hierarquia entre pessoas.</strong> São possibilidades de caminho: conforme seu objetivo, seu tempo, sua necessidade ou sua estratégia de divulgação. Você escolhe até onde quer avançar.
            </span>
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

        {/* Conhecimento com responsabilidade (Abaixo de Inteligência Artificial) */}
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
