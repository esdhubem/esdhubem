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
  Feather,
  Scale,
  FileText,
  ExternalLink,
  HelpCircle,
  GraduationCap,
  Clock,
  Building2,
  FileCheck2
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
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-20">
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
            <span>ESDHUBEM • Proposta Pedagógica & Regulação</span>
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
              <span>ESDHUBEM • Marco Pedagógico</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Diretrizes Pedagógicas e Regulamentação
            </h1>

            <p className="text-[#FFC72C] text-lg sm:text-xl font-semibold leading-relaxed">
              Uma escola de cursos livres fundamentada na qualidade, na autoria e na transparência legal.
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
                src="https://odysee.com/$/embed/@esdhubem:a/Diretrizes-Pedag%C3%B3gicas:9?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                allowFullScreen
                title="Diretrizes Pedagógicas ESDHUBEM"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-center text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
              <span>Vídeo de Diretrizes Pedagógicas ESDHUBEM</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Seção 1: O Que São Diretrizes Pedagógicas para Cursos Livres e EaD */}
        <section className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-5 text-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              O que são Diretrizes Pedagógicas em Escolas de Cursos Livres e EaD?
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            As <strong>diretrizes pedagógicas para escolas e cursos livres de ensino a distância (EaD)</strong> são orientações fundamentais que visam assegurar a qualidade e a efetividade na prática pedagógica virtual. Elas estabelecem princípios e normas que devem ser seguidos por instituições de ensino, docentes e discentes, promovendo uma formação sólida e inclusiva.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Essas diretrizes abordam aspectos essenciais como a <strong>estrutura curricular, avaliação formativa, acessibilidade, interatividade e produção autoral</strong>, garantindo que o ensino a distância não apenas amplie o acesso à educação, mas também mantenha altos padrões de aprendizado, rigor conceitual e desenvolvimento humano integral.
          </p>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-700 text-sm sm:text-base flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <span>
              Na ESDHUBEM, valorizamos o conhecimento em todas as suas formas: <strong>científica, filosófica, sociológica, cultural, tradicional, ancestral</strong> e também a sabedoria que vem da vivência prática e da experiência profissional.
            </span>
          </div>
        </section>

        {/* Seção 2: Modalidades e Tipos de Cursos ESDHUBEM */}
        <section className="space-y-8 pt-2">
          <div className="border-b border-slate-200 pb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 text-amber-900 border border-amber-200 mb-2">
              📋 Modalidades e Programas Oficiais
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Estrutura dos Tipos de Cursos da ESDHUBEM
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Descubra a proposta de cada formato e escolha o percurso alinhado ao seu momento profissional, acadêmico ou pessoal.
            </p>
          </div>

          <div className="space-y-8 divide-y divide-slate-200">
            {/* 1. Freepremium */}
            <div className="pt-2 first:pt-0 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl">🟢</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Cursos Freepremium — Descoberta
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 sm:pl-7">
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Descrição:</strong>
                  Aprenda sem barreiras. Assista a todas as videoaulas e acesse o material didático completo de forma 100% gratuita para testar o conteúdo e conhecer nossa metodologia. Você só paga uma taxa de emissão se decidir que quer o documento oficial.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Público-alvo:</strong>
                  Estudantes e profissionais que buscam conhecimento rápido, querem validar a qualidade do curso antes de investir ou precisam apenas do aprendizado prático imediato sem custo inicial.
                </p>
              </div>
            </div>

            {/* 2. Capacitação */}
            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl">🔵</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Cursos de Capacitação — Ação Prática
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 sm:pl-7">
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Descrição:</strong>
                  Cursos práticos e objetivos, desenhados para quem já atua no mercado e precisa de ferramentas aplicáveis imediatamente. Foco no "saber fazer": protocolos, técnicas, metodologias e habilidades profissionais que geram resultado real no consultório, na empresa ou no projeto pessoal.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Público-alvo:</strong>
                  Profissionais em atividade que precisam atualizar competências, aprender uma nova ferramenta de trabalho ou resolver demandas específicas da sua rotina profissional.
                </p>
              </div>
            </div>

            {/* 3. Horas Complementares */}
            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl">🟡</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Cursos de Horas Complementares — com Foco em Validação Acadêmica
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 sm:pl-7">
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Descrição:</strong>
                  Cursos estruturados para atender diretamente às exigências de Atividades Complementares de cursos de graduação e pós-graduação. Conteúdo alinhado às diretrizes do MEC para cursos livres, com certificado detalhado que especifica carga horária, conteúdo programático e dados da instituição.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Público-alvo:</strong>
                  Universitários de qualquer período e área que precisam cumprir a carga horária complementar exigida pela sua faculdade para poder colar grau.
                </p>
              </div>
            </div>

            {/* 4. Formação Livre */}
            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl">🔴</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Cursos de Formação Livre — Transformação
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 sm:pl-7">
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Descrição:</strong>
                  Jornadas completas de aprendizado para quem quer dominar uma área do início ao fim. Diferente de um curso rápido, a formação livre oferece uma visão ampla e profunda, combinando teoria consistente, prática orientada e estudos de caso reais.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Público-alvo:</strong>
                  Pessoas em transição de carreira, iniciantes que querem uma base sólida antes de atuar ou qualquer pessoa que deseja um mergulho profundo e transformador em um tema.
                </p>
              </div>
            </div>

            {/* 5. Treinamentos Corporativos */}
            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl">🟣</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Treinamentos Corporativos — Desempenho Profissional
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 sm:pl-7">
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Descrição:</strong>
                  Programas desenvolvidos sob medida para equipes, empresas e instituições. Foco em alinhar processos, capacitar colaboradores em rotinas específicas, melhorar o clima organizacional e desenvolver lideranças com metodologias ativas e mensuração de resultados.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Público-alvo:</strong>
                  Gestores de RH, líderes de equipe, diretores de empresas e organizações do terceiro setor que precisam capacitar seus times com agilidade e qualidade pedagógica comprovada.
                </p>
              </div>
            </div>

            {/* 6. Autoria e Destaque */}
            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl">🟣</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Autoria e Destaque — Desenvolvimento da Escrita
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 sm:pl-7">
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Descrição:</strong>
                  Aprenda a estruturar, escrever e publicar. Do texto prático ao livro — com reconhecimento Prata, Ouro ou Diamante. Transforme o que você aprendeu em conhecimento compartilhado e construa sua presença e credibilidade intelectual.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Público-alvo:</strong>
                  Estudantes, pesquisadores, terapeutas e profissionais que desejam ir além do certificado, organizar suas ideias e publicar artigos, ensaios ou livros autorais.
                </p>

                <div className="pt-3 space-y-1.5">
                  <p className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                    Caminho possível:
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">Conforme avança, você pode alcançar os níveis:</p>
                  <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-slate-800 pt-1">
                    <li className="flex items-center gap-2">
                      <span>🥉</span> <strong>Prata:</strong> texto publicado no blog da escola
                    </li>
                    <li className="flex items-center gap-2">
                      <span>🥇</span> <strong>Ouro:</strong> trabalho com DOI em repositório científico
                    </li>
                    <li className="flex items-center gap-2">
                      <span>💎</span> <strong>Diamante:</strong> obra original publicada como livro ou artigo em revista
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. Aprofundamento Profissional - Saúde */}
            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl">💙</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Aprofundamento Profissional — Área da Saúde
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 sm:pl-7">
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Descrição:</strong>
                  Cursos exclusivos para graduados de nível superior da área da saúde. Espaço de atualização, troca de experiência e desenvolvimento técnico — não se tratam de pós-graduação, mas de aprofundamento profissional prático e fundamentado. Para participar, é necessário comprovar formação superior. Foco em conteúdos relevantes, boas práticas e evolução contínua da atuação.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Público-alvo:</strong>
                  Enfermeiros, médicos, fisioterapeutas, nutricionistas, psicólogos, terapeutas e demais profissionais já formados que buscam atualização, ampliação de repertório e aperfeiçoamento sem precisar ingressar em programa de pós-graduação.
                </p>
              </div>
            </div>

            {/* 8. Workshop de Orientação de Carreira */}
            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl">🧭</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Workshop de Orientação de Carreira — Transformação Profissional
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 sm:pl-7">
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Descrição:</strong>
                  Análise dos novos rumos do mercado: quais carreiras estão se transformando, quais estão surgindo e quais tendências redesenham o mundo do trabalho. Você vai entender para onde vai a sua área, como ocorre a mobilidade entre funções, o que outros profissionais já estão fazendo e — principalmente — o que pode estudar agora para se manter relevante e preparado para o que vem a seguir.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold block text-xs uppercase tracking-wider mb-0.5">Público-alvo:</strong>
                  Quem está em dúvida sobre o futuro da profissão, deseja mudar de área, precisa se reinventar no mercado ou quer planejar com clareza quais caminhos seguir e quais conhecimentos desenvolver para não ficar para trás.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: Marco Legal e Normativa dos Cursos Livres no Brasil */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Normativa e Base Legal dos Cursos Livres
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Os cursos livres no Brasil são regulamentados pelo <strong>Decreto Presidencial nº 5.154, de 23 de julho de 2004</strong>, e pela <strong>Portaria nº 008, de 25/06/2002</strong>. Esses cursos integram a Educação Profissional e Tecnológica aberta, não exigem autorização prévia de funcionamento e não são regulamentados ou tutelados diretamente pelo MEC para fins de reconhecimento de diploma universitário formal.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A legislação federal permite que instituições de ensino, pessoas jurídicas e físicas ofereçam cursos livres com finalidades diversas, desde que respeitem as diretrizes da <strong>Lei nº 9.394/1996 (Lei de Diretrizes e Bases da Educação Nacional - LDB)</strong> e do <strong>Decreto nº 5.154/2004</strong>.
          </p>

          <div className="p-5 rounded-2xl bg-blue-50/70 border-l-4 border-blue-600 text-slate-800 text-sm sm:text-base leading-relaxed space-y-2">
            <p className="font-semibold text-slate-900">
              Educação Não-Formal e Qualificação Profissional:
            </p>
            <p>
              Os cursos livres constituem uma <strong>modalidade de educação não-formal</strong>, destinada a proporcionar conhecimentos que permitam a profissionalização, qualificação, requalificação e atualização contínua do trabalhador. Eles conferem certificado válido com base na legislação brasileira, não conferindo diploma de graduação ou pós-graduação tradicional.
            </p>
          </div>
        </section>

        {/* Seção 4: Carga Horária - O Que a Norma Fixa e o Que Não Fixa */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Carga Horária: O Que a Norma Fixa e O Que Não Fixa
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            <strong>Não há carga horária mínima geral para curso livre.</strong> Um curso livre pode ter de algumas horas a vários meses de duração, conforme a complexidade do conteúdo, a metodologia didática e o projeto pedagógico da instituição.
          </p>

          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-slate-800 text-sm sm:text-base leading-relaxed space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              <span>A Exceção Normativa que Gera Dúvidas:</span>
            </div>
            <p>
              O <strong>Decreto nº 5.154/2004, no art. 3º, § 1º</strong> (com redação dada pelo Decreto nº 8.268, de 2014), estabelece carga horária mínima de <strong>160 horas</strong> para a formação inicial quando o curso é estruturado dentro das trajetórias de formação específicas regulamentadas pelo Ministério da Educação (na forma do art. 1º, § 1º do mesmo decreto).
            </p>
            <p className="font-semibold text-slate-900">
              👉 Fora desse regime específico de catálogo ministerial, a carga horária é definida com total autonomia pela entidade que oferta o curso livre, segundo o plano de ensino e a necessidade formativa do aluno.
            </p>
          </div>
        </section>

        {/* Seção 5: Quem Pode Ofertar e Garantia de Validade */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Quem Pode Ofertar Cursos Livres e Como Garantir a Validade?
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A oferta de cursos livres <strong>não é exclusividade de instituições de ensino superior</strong>: entidades de formação profissional, centros de treinamento, empresas, cooperativas e profissionais autônomos habilitados também ofertam cursos livres e emitem os respectivos certificados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <FileCheck2 className="w-5 h-5 text-emerald-600" />
                <span>Autenticidade e Rastreabilidade</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Para garantir a validade acadêmica e profissional, a instituição deve fornecer certificado com identificação clara do aluno, carga horária, ementa programática, dados do responsável pedagógico e código de verificação autêntico.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Award className="w-5 h-5 text-amber-600" />
                <span>Aceitação Institucional</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Faculdades e empresas aceitam certificados de cursos livres para horas complementares (AACCs), enriquecimento curricular e pontuação em provas de títulos, conforme o edital de cada instituição.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 6: Escrever é Processar */}
        <section className="py-4 space-y-5 text-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Feather className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Escrever é processar
            </h3>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Escrever não é apenas "entregar uma tarefa". É uma ferramenta de organização do pensamento:
          </p>

          <div className="space-y-2.5 pl-2 sm:pl-4">
            <div className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2"></span>
              <span>Quando apenas lemos, a informação fica fragmentada</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2"></span>
              <span>Ao escrever, damos estrutura lógica às ideias</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2"></span>
              <span>O que colocamos no papel ganha clareza e aplicabilidade</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed pt-1">
            Por isso, ir além do certificado faz sentido: escrever é colocar o aprendizado em prática.
          </p>

          {/* Botão de Chamada para Diretrizes de Publicação */}
          <div className="pt-4">
            <button
              onClick={() => onNavigate ? onNavigate('diretrizes-publicacao-parcerias') : undefined}
              className="inline-flex items-center gap-2.5 bg-[#243042] hover:bg-slate-900 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm sm:text-base group"
            >
              <span>Conhecer as Diretrizes de Publicação na Nossa Escola</span>
              <ArrowRight className="w-4 h-4 text-[#FFC72C] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Seção 7: 🏅 O Percurso: Aprender → Expressar → Investigar → Autorar */}
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

        {/* Destaque: Com responsabilidade */}
        <div className="p-6 rounded-2xl bg-amber-50/80 border-l-4 border-[#FFC72C] text-slate-800 text-base sm:text-lg font-medium leading-relaxed shadow-xs">
          <strong>Com responsabilidade:</strong> aqui aprendemos a distinguir com clareza o que é fato, o que é opinião, o que é hipótese e o que é evidência. Ler, questionar, comparar e comunicar com honestidade faz parte do nosso caminho pedagógico.
        </div>

        {/* Seção 8: Inteligência Artificial com responsabilidade */}
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
            A ESDHUBEM abraça a IA como ferramenta de apoio: auxilia na organização, revisão e planejamento. Mas defendemos um princípio essencial:
          </p>

          <div className="p-5 rounded-2xl bg-slate-900 text-white font-medium text-base sm:text-lg leading-relaxed border-l-4 border-[#FFC72C]">
            A tecnologia pode auxiliar a produção, mas não deve substituir o pensamento, a compreensão e a autoria humana.
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A responsabilidade sobre o conteúdo criado e a propriedade intelectual permanecem sempre com o autor.
          </p>
        </section>

        {/* Seção 9: Conhecimento com responsabilidade */}
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

        {/* Seção 10: Referências Bibliográficas e Normativas Oficiais */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#FFC72C] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Referências Bibliográficas e Normativas Oficiais
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600">
            A fundamentação legal, pedagógica e normativa das diretrizes da ESDHUBEM apoia-se em documentos oficiais do Ministério da Educação e na legislação educacional brasileira:
          </p>

          <ul className="space-y-4 text-sm sm:text-base text-slate-700 divide-y divide-slate-200">
            <li className="pt-3 first:pt-0 space-y-1">
              <div className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <div>
                  <a
                    href="https://www.gov.br/mec/pt-br/acesso-a-informacao/perguntas-frequentes/politica-de-regulacao-e-supervisao-da-educacao-superior/cursos-livres/o-que-sao-cursos-livres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-amber-600 hover:underline"
                  >
                    Ministério da Educação (MEC) — O que são cursos livres? Os cursos livres devem ser autorizados pelo Ministério da Educação? Tais cursos conferem diploma?
                  </a>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Esclarecimento oficial do MEC sobre a natureza jurídica não-formal, dispensa de autorização prévia e legitimidade dos certificados de cursos livres.
                  </p>
                </div>
              </div>
            </li>

            <li className="pt-3 space-y-1">
              <div className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <div>
                  <a
                    href="https://www.gov.br/mec/pt-br/cne/diretrizes-nacionais-para-a-educacao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-amber-600 hover:underline"
                  >
                    Conselho Nacional de Educação (CNE/MEC) — Diretrizes Nacionais para a Educação
                  </a>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Princípios, normas e fundamentos orientadores para a prática pedagógica, inclusão, interatividade e educação a distância no Brasil.
                  </p>
                </div>
              </div>
            </li>

            <li className="pt-3 space-y-1">
              <div className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <div>
                  <a
                    href="https://www.ceasbrasil.com.br/legislacaocursoslivres.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-amber-600 hover:underline"
                  >
                    Legislação de Cursos Livres no Brasil — Decreto Presidencial nº 5.154/2004 e Lei nº 9.394/1996 (LDB)
                  </a>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Compilado de atos normativos, Portaria nº 008/2002 e jurisprudência sobre validade e carga horária na educação profissional livre.
                  </p>
                </div>
              </div>
            </li>

            <li className="pt-3 space-y-1">
              <div className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-slate-900">
                    Supremo Tribunal Federal & CNE — ADI 1/2021 e Pareceres Normativos da Educação Livre
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Garantia constitucional do livre exercício profissional e da autonomia didática e metodológica na oferta de cursos abertos e de qualificação.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Seção 11: A Escola que Também Dá Voz */}
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
              'Possibilidade de aprender sem barreiras',
              'Possibilidade de desenvolver a escrita e a comunicação',
              'Possibilidade de investigar com rigor e reflexão crítica',
              'Possibilidade de publicar e registrar sua produção',
              'Possibilidade de construir uma trajetória autoral com credibilidade'
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
              Aprender é o começo. Criar, investigar e compartilhar também fazem parte do caminho.
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
