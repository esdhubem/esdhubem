import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  ArrowRight,
  ExternalLink
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
    <div className="min-h-screen bg-[#FDFDFD] text-slate-800 font-sans pb-24">
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
            <span>ESDHUBEM • Documento Oficial</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo: Textos */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <BookOpen className="w-4 h-4" />
              <span>ESDHUBEM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              DIRETRIZES PEDAGÓGICAS — ESDHUBEM
            </h1>

            <p className="text-[#FFC72C] text-lg sm:text-xl font-semibold leading-relaxed">
              Uma escola de cursos livres voltada ao desenvolvimento humano integral, à prática ética e à produção autoral.
            </p>
          </div>

          {/* Lado Direito: Vídeo Odysee */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/80 bg-slate-950 aspect-video group">
              <iframe
                id="odysee-iframe"
                className="w-full h-full border-0 absolute inset-0"
                src="https://odysee.com/$/embed/@esdhubem:a/Diretrizes-Pedag%C3%B3gicas:9?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                allowFullScreen
                title="Diretrizes Pedagógicas ESDHUBEM"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-center text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
              <span>Vídeo explicativo das Diretrizes Pedagógicas</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Body - Aberto, limpo, fluido, sem caixas pesadas */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* 1. Natureza e Fundamento Legal */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              1. Natureza e Fundamento Legal
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            As diretrizes pedagógicas da ESDHUBEM orientam a prática educacional com base na legislação vigente e nos princípios que definem a identidade da instituição.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Os cursos livres integram a Educação Profissional e Tecnológica de natureza não-formal, regulamentados pelo <strong>Decreto nº 5.154/2004</strong> e pela <strong>Portaria nº 008/2002</strong>, observando ainda a <strong>Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/1996)</strong>.
          </p>

          <ul className="space-y-2.5 pl-5 sm:pl-6 list-disc text-slate-700 text-base sm:text-lg leading-relaxed marker:text-amber-500">
            <li>Não exigem autorização prévia de funcionamento;</li>
            <li>Não conferem diploma de graduação ou pós-graduação formal;</li>
            <li>O certificado emitido é válido em todo o território nacional, conforme legislação;</li>
            <li>
              A carga horária é definida autonomamente pela instituição, exceto nos casos de formação inicial integrante de trajetórias específicas regulamentadas pelo MEC, onde aplica-se o mínimo de 160 horas (Decreto nº 5.154/2004, art. 3º, § 1º).
            </li>
          </ul>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-2">
            A oferta de cursos livres não é exclusiva de instituições de ensino superior. A ESDHUBEM, como entidade formadora habilitada, emite certificados com identificação do aluno, carga horária, ementa, responsável pedagógico e código de verificação, garantindo autenticidade e rastreabilidade. Os certificados são aceitos para cumprimento de horas complementares, enriquecimento curricular e pontuação, conforme as regras de cada instituição de ensino ou empregador.
          </p>
        </section>

        {/* 2. Princípios Pedagógicos */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              2. Princípios Pedagógicos
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A ESDHUBEM é uma escola de cursos livres voltada ao desenvolvimento humano integral e ao bem-estar. Valorizamos o conhecimento em todas as suas formas: científica, filosófica, sociológica, cultural, tradicional, ancestral e também a sabedoria que emerge da vivência prática e da experiência profissional.
          </p>

          <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed">
            Com base nisto, adotamos os seguintes princípios:
          </p>

          <ul className="space-y-3 pl-5 sm:pl-6 list-disc text-slate-700 text-base sm:text-lg leading-relaxed marker:text-amber-500">
            <li>
              <strong className="text-slate-900">Clareza conceitual:</strong> distinguir com rigor fato, opinião, hipótese, interpretação e evidência;
            </li>
            <li>
              <strong className="text-slate-900">Ética na comunicação:</strong> ler, questionar, comparar e expressar-se com honestidade intelectual;
            </li>
            <li>
              <strong className="text-slate-900">Produção autoral:</strong> escrever não é apenas entregar uma tarefa, mas organizar o pensamento e transformar informação em conhecimento compartilhado;
            </li>
            <li>
              <strong className="text-slate-900">Uso responsável de tecnologia:</strong> a inteligência artificial pode auxiliar pesquisa, organização e revisão, mas não substitui o pensamento, a compreensão e a autoria humana — a responsabilidade sobre a obra é sempre do autor;
            </li>
            <li>
              <strong className="text-slate-900">Formação inclusiva e integral:</strong> o aprendizado não se restringe ao mercado de trabalho — reflete-se na pessoa, na comunidade e na vida.
            </li>
          </ul>
        </section>

        {/* 3. Modalidades de Cursos */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              3. Modalidades de Cursos
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A ESDHUBEM oferece percursos independentes, conforme o objetivo de cada participante:
          </p>

          {/* Tabela Limpa e Fluida */}
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 text-slate-900">
                  <th scope="col" className="py-3 px-3 font-bold">Tipo</th>
                  <th scope="col" className="py-3 px-4 font-bold">Foco</th>
                  <th scope="col" className="py-3 px-4 font-bold">Público-alvo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    🟢 Freepremium — Descoberta
                  </td>
                  <td className="py-3.5 px-4">
                    Acesso gratuito ao conteúdo completo; certificado opcional
                  </td>
                  <td className="py-3.5 px-4">
                    Quem quer conhecer a metodologia sem custo inicial
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    🔵 Capacitação — Ação Prática
                  </td>
                  <td className="py-3.5 px-4">
                    Desenvolvimento de habilidades aplicáveis imediatamente
                  </td>
                  <td className="py-3.5 px-4">
                    Profissionais que buscam atualização e resultado prático
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    🟡 Horas Complementares — Validação Acadêmica
                  </td>
                  <td className="py-3.5 px-4">
                    Cumprimento de exigência curricular da graduação
                  </td>
                  <td className="py-3.5 px-4">
                    Universitários que necessitam de carga horária complementar
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    🔴 Formação Livre — Transformação
                  </td>
                  <td className="py-3.5 px-4">
                    Mergulho completo em uma área, do básico ao avançado
                  </td>
                  <td className="py-3.5 px-4">
                    Pessoas em transição de carreira ou busca de formação sólida
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    🟣 Treinamento Corporativo — Desempenho Profissional
                  </td>
                  <td className="py-3.5 px-4">
                    Capacitação de equipes e processos organizacionais
                  </td>
                  <td className="py-3.5 px-4">
                    Empresas, gestores e instituições do terceiro setor
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    💙 Aprofundamento Profissional — Área da Saúde
                  </td>
                  <td className="py-3.5 px-4">
                    Atualização para graduados de nível superior (não é pós-graduação)
                  </td>
                  <td className="py-3.5 px-4">
                    Profissionais da saúde que buscam evolução contínua
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    🧭 Orientação de Carreira — Futuro Profissional
                  </td>
                  <td className="py-3.5 px-4">
                    Análise de tendências, transformação de áreas e caminhos de atualização
                  </td>
                  <td className="py-3.5 px-4">
                    Quem quer entender para onde vai o mercado e como se preparar
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    🟣 Autoria e Destaque — Desenvolvimento da Escrita
                  </td>
                  <td className="py-3.5 px-4">
                    Estruturação, produção e publicação de textos autorais
                  </td>
                  <td className="py-3.5 px-4">
                    Quem deseja transformar conhecimento em obra visível e reconhecida
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. O Percurso de Produção Intelectual */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              4. O Percurso de Produção Intelectual
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Concluir o curso e receber o certificado é um caminho válido. A ESDHUBEM oferece também a possibilidade de ir além, por meio de uma trajetória de aprofundamento e autoria:
          </p>

          {/* Tabela do Percurso */}
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 text-slate-900">
                  <th scope="col" className="py-3 px-3 font-bold">Etapa</th>
                  <th scope="col" className="py-3 px-4 font-bold">Descrição</th>
                  <th scope="col" className="py-3 px-4 font-bold">Nível de Reconhecimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-slate-900">
                    Aprender
                  </td>
                  <td className="py-3.5 px-4">
                    Frequentar, compreender, validar o conhecimento
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-amber-800">
                    🥉 Bronze
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-slate-900">
                    Expressar
                  </td>
                  <td className="py-3.5 px-4">
                    Transformar o aprendizado em texto compartilhado publicamente
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-600">
                    🥈 Prata
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-slate-900">
                    Investigar
                  </td>
                  <td className="py-3.5 px-4">
                    Aprofundar com referências, rigor e reflexão crítica
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-amber-600">
                    🥇 Ouro
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-slate-900">
                    Autorar
                  </td>
                  <td className="py-3.5 px-4">
                    Criar obra original com identidade própria
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-blue-700">
                    💎 Diamante
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
            ⚠️ <strong>Não se trata de hierarquia entre pessoas, mas de possibilidades de caminho.</strong> Você escolhe até onde deseja avançar, conforme seu tempo, seu objetivo e sua estratégia.
          </p>
        </section>

        {/* 5. Disposições Finais */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              5. Disposições Finais
            </h2>
          </div>

          <ul className="space-y-3 pl-5 sm:pl-6 list-disc text-slate-700 text-base sm:text-lg leading-relaxed marker:text-amber-500">
            <li>
              Os textos publicados em nome dos participantes permanecem como propriedade intelectual de seus autores, conforme a Lei nº 9.610/1998. A escola recebe apenas autorização de divulgação, sem transferência de direitos;
            </li>
            <li>
              Os certificados são emitidos com dados completos e código de verificação pública;
            </li>
            <li>
              Cabe à ESDHUBEM orientar, apoiar e reconhecer a produção autoral, e ao participante, a responsabilidade pela originalidade e ética de sua obra;
            </li>
            <li>
              Estas diretrizes poderão ser atualizadas sempre que necessário, garantindo coerência com a legislação e com os princípios da instituição.
            </li>
          </ul>

          {/* Citação Final */}
          <div className="pt-6 pb-2 text-center sm:text-left">
            <blockquote className="border-l-4 border-amber-500 pl-4 sm:pl-6 py-2 text-lg sm:text-xl font-medium italic text-slate-900">
              "Na ESDHUBEM, você não apenas conclui um curso: você desenvolve, expressa, investiga e autoriza. O conhecimento que transforma é o conhecimento que se faz próprio."
            </blockquote>
          </div>

          {/* Links e Botão de Ação */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <button
              onClick={() => onNavigate ? onNavigate('diretrizes-protecao-autoria') : undefined}
              className="text-sm font-semibold text-slate-600 hover:text-amber-600 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ver Diretrizes de Proteção à Autoria</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onNavigate && (
              <button
                onClick={() => onNavigate('categorias')}
                className="bg-[#243042] hover:bg-slate-900 text-white font-bold px-7 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Conheça Nossos Cursos</span>
                <ArrowRight className="w-4 h-4 text-[#FFC72C]" />
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
