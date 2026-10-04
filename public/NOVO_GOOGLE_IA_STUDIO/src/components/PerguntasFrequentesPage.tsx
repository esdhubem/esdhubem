import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  HelpCircle,
  User,
  GraduationCap,
  Microscope,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  FileText
} from 'lucide-react';

interface PerguntasFrequentesPageProps {
  onBackToHome: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const PerguntasFrequentesPage: React.FC<PerguntasFrequentesPageProps> = ({
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
            <span className="text-[#FFC72C] font-semibold">Perguntas Frequentes</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FFC72C]" />
            <span>ESDHUBEM • FAQ Oficial</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <HelpCircle className="w-4 h-4" />
            <span>Central de Esclarecimentos</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            PERGUNTAS FREQUENTES — ESDHUBEM
          </h1>

          <p className="text-[#FFC72C] text-lg sm:text-xl font-semibold leading-relaxed">
            Transparência sobre funcionamento, autoria, validade de certificados, publicações e pesquisa.
          </p>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Apresentação */}
        <section className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Apresentação
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Esta página reúne esclarecimentos sobre funcionamento, proteção de autoria, validade de certificados, publicação de textos e relação com instituições de ensino e periódicos científicos.
          </p>
        </section>

        {/* 👤 Sobre Alunos e Produção de Textos */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <User className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sobre Alunos e Produção de Textos
            </h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                O que acontece se alguém alegar que roubei ou copiei um texto?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Todos os envios ficam registrados com nome, data e hora do recebimento, mediante termo de autorização assinado/aceito pelo autor. Nenhum conteúdo é publicado sem permissão expressa. Esses registros constituem prova de que o trabalho foi compartilhado com a escola.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                E se eu enviar um texto que foi copiado de outra pessoa?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                O autor é responsável pela originalidade do que envia. No momento da submissão, declara que a obra não viola direitos de terceiros. Caso plágio seja detectado, o texto será removido e o autor responderá pela situação conforme a legislação vigente.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Eu enviei um texto, mas não recebi DOI nem publicação garantida. O que fazer?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                A publicação e o reconhecimento em níveis avançados dependem de critérios de qualidade, adequação e disponibilidade. Não há garantia de aceitação em revista ou repositório — a ESDHUBEM oferece orientação, mas a decisão final é de cada instituição. As regras e expectativas são apresentadas desde o início de cada percurso.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Posso pedir para retirar meu texto depois de publicado?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Sim. Basta solicitar formalmente. O prazo para exclusão é de até 15 dias úteis. Em casos de depósito em plataformas externas, a remoção segue as regras daquela instituição — a escola auxilia no processo, mas não tem controle direto sobre sistemas terceiros.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Posso usar Inteligência Artificial na produção do texto?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Pode, mas com transparência. A IA é ferramenta de apoio — não substitui o pensamento, a compreensão nem a autoria humana. O uso deve ser declarado de que forma foi aplicado. A responsabilidade sobre o conteúdo é sempre do autor.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                O texto que eu publicar representa a opinião da escola?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Não. Cada trabalho traz a perspectiva de seu autor. A ESDHUBEM não endossa necessariamente todas as ideias apresentadas. A nota “Conteúdo de responsabilidade do autor” acompanha cada publicação para esclarecer isso.
              </p>
            </div>
          </div>
        </section>

        {/* 🎓 Sobre Faculdades e Validade de Cursos */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sobre Faculdades e Validade de Cursos
            </h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                O certificado de horas complementares é aceito em qualquer faculdade?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Os certificados têm base legal (Decreto nº 5.154/2004), mas cada instituição de ensino define suas próprias regras de aceitação. Recomendamos consultar previamente a secretaria acadêmica de sua faculdade antes de iniciar o curso. A ESDHUBEM fornece toda a documentação necessária — a decisão de aceite é de cada instituição.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Os cursos de Aprofundamento na Área da Saúde são Pós-Graduação?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Não. São cursos livres de atualização e aperfeiçoamento profissional. Não conferem título de especialista reconhecido pelo MEC e não equivalem a pós-graduação Lato ou Stricto Sensu. Isso está destacado nas descrições, na página do curso e no próprio certificado.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Como comprovar que a ESDHUBEM atua dentro da lei?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                A escola segue a legislação vigente: Lei nº 9.394/1996, Portaria nº 008/2002 e Decreto nº 5.154/2004. A base legal está disponível publicamente nas Diretrizes Pedagógicas. Os certificados trazem identificação completa, carga horária, ementa, responsável pedagógico e código de verificação.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                O certificado tem valor legal?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Sim. Os cursos livres integram a Educação Profissional e Tecnológica aberta. O certificado emitido é válido em todo o território nacional e pode ser utilizado para enriquecimento curricular, horas complementares e processos seletivos, conforme os critérios de quem recebe.
              </p>
            </div>
          </div>
        </section>

        {/* 🔬 Sobre Pesquisa, Repositórios e DOI */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Microscope className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sobre Pesquisa, Repositórios e DOI
            </h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                O que é o DOI e a escola emite esse código?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                O DOI é um identificador digital internacional que registra oficialmente a autoria e a existência de um trabalho. Ele é gerado por plataformas credenciadas (como Zenodo e OSF), não pela ESDHUBEM diretamente. A escola orienta, prepara e encaminha o trabalho para que o autor possa realizar o depósito.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Ter DOI significa que o artigo foi publicado em revista científica?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Não necessariamente. O depósito com DOI em repositório público constitui um pré-print — ou seja, registro e divulgação do trabalho. Isso é diferente de publicação em revista com avaliação por pares. O pré-print protege sua autoria, mas não equivale a aceitação em periódico.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                O texto publicado no blog passa por revisão científica?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Os textos do blog (Nível Prata) são compartilhados com foco em difusão e não contam com revisão por pares. Já os trabalhos que avançam para os níveis Ouro e Diamante seguem critérios mais rigorosos de estruturação, referências e clareza. O grau de exigência aumenta conforme o nível de publicação.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                E se mais de uma pessoa tiver participado do texto? Como fica a autoria?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Quando houver co-autoria, todos os participantes devem ser identificados no ato do envio, com indicação de contribuições e concordância com a ordem de apresentação. A declaração de autores integra o formulário de submissão.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                O que é verificado antes de um texto ser aceito para publicação?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                São observados: originalidade, clareza, referências corretas, respeito ético e ausência de conteúdo que viole direitos de terceiros. O autor recebe orientação para ajustar o que for necessário antes de divulgação.
              </p>
            </div>
          </div>
        </section>

        {/* 📖 Sobre Revistas Científicas e Periódicos */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sobre Revistas Científicas e Periódicos
            </h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Posso enviar o mesmo texto para o blog e para uma revista ao mesmo tempo?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Depende da política da revista. Algumas aceitam trabalhos já divulgados como pré-print; outras exigem que o texto seja retirado antes de submissão. Consulte sempre as normas do periódico antes de publicar em outro local.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                A ESDHUBEM garante que meu texto será aceito por uma revista?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Não. A escola oferece orientação de estruturação, revisão e encaminhamento, mas a decisão de aceitação, recusa ou ajuste é exclusiva do periódico. O mérito e a avaliação são independentes da instituição.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Meu texto foi recusado por uma revista. O que acontece?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                A recusa não invalida o trabalho. A ESDHUBEM pode compartilhar o texto em formato de divulgação, repositório ou blog, conforme o nível combinado. O retorno da revista pode inclusive ajudar a melhorar o texto para novas tentativas.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                A revista exige direitos exclusivos, mas meu texto já está no blog. O que fazer?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Neste caso, é possível solicitar a retirada do texto do blog antes de submeter à revista. Cada situação é avaliada conforme a política de publicação do periódico. A ESDHUBEM orienta sobre a diferença entre licença não exclusiva e exclusiva.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Se a revista recusar, isso prejudica a imagem da escola?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                O trabalho é sempre de responsabilidade de seu autor. A ESDHUBEM apoia a preparação, mas não endossa nem garante aceitação. A nota de responsabilidade autoral acompanha cada publicação para deixar isso claro.
              </p>
            </div>
          </div>
        </section>

        {/* 🛡️ Resumo Rápido */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Resumo Rápido
            </h2>
          </div>

          {/* Tabela do Resumo Rápido */}
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 text-slate-900">
                  <th scope="col" className="py-3 px-3 font-bold">Pergunta</th>
                  <th scope="col" className="py-3 px-4 font-bold">Resposta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900">
                    O texto enviado continua sendo meu?
                  </td>
                  <td className="py-3.5 px-4 font-medium text-emerald-700">
                    ✅ Sim, você nunca perde a propriedade
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900">
                    Preciso pagar para publicar?
                  </td>
                  <td className="py-3.5 px-4">
                    Depende do nível — consulte a política de cada percurso
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900">
                    O certificado vale para horas complementares?
                  </td>
                  <td className="py-3.5 px-4">
                    Sim, mas confirme com sua faculdade antes
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900">
                    Os cursos da Saúde são pós-graduação?
                  </td>
                  <td className="py-3.5 px-4 font-medium text-rose-700">
                    ❌ Não — são atualização e aperfeiçoamento
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900">
                    Todo texto recebe DOI?
                  </td>
                  <td className="py-3.5 px-4 font-medium text-rose-700">
                    ❌ Não — DOI é para trabalhos depositados em repositório científico
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900">
                    Posso usar IA?
                  </td>
                  <td className="py-3.5 px-4 font-medium text-emerald-700">
                    ✅ Com transparência e declaração de uso
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900">
                    Posso pedir para apagar meu texto?
                  </td>
                  <td className="py-3.5 px-4 font-medium text-emerald-700">
                    ✅ Sim, em até 15 dias úteis
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-slate-900">
                    A escola garante publicação em revista?
                  </td>
                  <td className="py-3.5 px-4 font-medium text-rose-700">
                    ❌ Não — cada periódico decide
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Links e Botão de Ação */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <button
              onClick={() => onNavigate ? onNavigate('diretrizes-pedagogicas') : undefined}
              className="text-sm font-semibold text-slate-600 hover:text-amber-600 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ver Diretrizes Pedagógicas</span>
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
