import React from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileText,
  Lock,
  ExternalLink,
  BookOpen,
  Sparkles,
  Scale,
  Feather,
  Info,
  Check,
  Layers,
  ArrowRight
} from 'lucide-react';

interface DiretrizesProtecaoAutoriaPageProps {
  onBackToHome: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const DiretrizesProtecaoAutoriaPage: React.FC<DiretrizesProtecaoAutoriaPageProps> = ({
  onBackToHome,
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
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
            <span className="text-[#FFC72C] font-semibold">Diretrizes de Proteção à Autoria</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ESDHUBEM • Propriedade Intelectual</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <ShieldCheck className="w-4 h-4" />
            <span>Propriedade Intelectual & Direitos Autorais</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Diretrizes de Proteção à Autoria
          </h1>

          <p className="text-[#FFC72C] text-lg sm:text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
            Transparência, integridade e respeito total à produção intelectual de cada autor.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* 1. Apresentação */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#FFC72C] flex items-center justify-center font-bold text-xl border border-amber-500/20">
              <Feather className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Compromisso Institucional</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Apresentação
              </h2>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A <strong>ESDHUBEM</strong> reconhece e valoriza a produção intelectual como parte essencial do aprendizado. Entendemos que a escrita é também afirmação de voz e de pensamento. Por este motivo, toda produção enviada pelos participantes permanece sendo de sua <strong>propriedade intelectual</strong>.
          </p>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A escola <strong>não se apropria, não reivindica e não utiliza o trabalho de outrem sem autorização expressa</strong>. Nosso papel é valorizar, divulgar e proteger a criação de cada autor.
          </p>
        </section>

        {/* 2. Garantias ao Autor */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Segurança Jurídica & Editorial</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Garantias ao Autor
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Ao submeter um texto para publicação na ESDHUBEM, o participante tem asseguradas as seguintes garantias fundamentais:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Reconhecimento de Autoria
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  O nome do autor será sempre apresentado de forma visível, destacada e inequívoca em sua obra.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Integridade da Obra
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  O conteúdo não será alterado, modificado ou adaptado sem o consentimento prévio e por escrito do autor.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Manutenção de Direitos
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A propriedade intelectual permanece 100% com o autor. O envio do texto não implica qualquer transferência de titularidade.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Uso Restrito à Autorização
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A obra será divulgada exclusivamente nos termos, formatos e finalidades autorizados pelo autor.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Liberdade de Utilização
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  O autor poderá dispor livremente de sua obra em outros locais, incluindo publicação, distribuição comercial ou reprodução externa.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Direito de Retirada
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  O autor poderá solicitar a exclusão de sua publicação a qualquer momento, mediante comunicação formal e sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Funcionamento da Publicação */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span>Funcionamento da Publicação</span>
            </h2>
          </div>

          <p className="text-base text-slate-700 leading-relaxed">
            Quando o autor envia um texto para divulgação na ESDHUBEM, concede à escola <strong>autorização de uso não exclusiva</strong>, ou seja, apenas permissão para compartilhar a obra, <strong>sem que haja qualquer transferência de propriedade</strong>.
          </p>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              A autorização destina-se aos seguintes fins:
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Divulgação no blog ou repositório oficial da escola;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Difusão educacional e institucional com fins formativos;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Apresentação pública sempre com indicação clara do nome e perfil do autor.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Medidas de Proteção e Registro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Procedimentos Práticos</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2 mt-1">
              <Lock className="w-6 h-6 text-emerald-600" />
              <span>Medidas de Proteção e Registro</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Para assegurar a autoria e a integridade de cada trabalho, a ESDHUBEM adota os seguintes procedimentos:
            </p>
          </div>

          <div className="space-y-8">
            {/* 1. Registro de Recebimento */}
            <div className="space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">1</span>
                <span>Registro de Recebimento</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                No momento do envio, ficam registrados formalmente no sistema acadêmico:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nome completo do autor</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Data e horário do recebimento</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Arquivo original da obra</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic pt-1">
                * Estes dados constituem prova documental de que o autor foi o primeiro a compartilhar a criação, sendo preservados sem alteração.
              </p>
            </div>

            {/* 2. Publicação com Identificação */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">2</span>
                <span>Publicação com Identificação</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Ao ser publicado, o texto apresenta publicamente:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700 list-disc list-inside pl-2">
                <li>Nome do autor em destaque na página;</li>
                <li>Data de envio e data de publicação verificáveis;</li>
                <li>Endereço eletrônico exclusivo e permanente (URL canônica) vinculado à obra.</li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-500 italic pt-1">
                * A presença pública destes elementos estabelece a ordem cronológica de criação e confirma a autoria perante terceiros.
              </p>
            </div>

            {/* 3. Níveis de Reconhecimento e Proteção */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">3</span>
                <span>Níveis de Reconhecimento e Proteção</span>
              </h3>

              {/* Tabela Semântica */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-left border-collapse text-sm">
                  <caption className="sr-only">Níveis de Reconhecimento e Proteção da ESDHUBEM</caption>
                  <thead>
                    <tr className="bg-[#182333] text-white border-b border-slate-700">
                      <th scope="col" className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider w-1/4">
                        Nível
                      </th>
                      <th scope="col" className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider w-1/3">
                        Tipo de Publicação
                      </th>
                      <th scope="col" className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">
                        Forma de Proteção
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <th scope="row" className="py-4 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <span className="text-xl">🥈</span>
                        <span>Prata</span>
                      </th>
                      <td className="py-4 px-4 text-slate-700 font-medium">
                        Postagem em blog
                      </td>
                      <td className="py-4 px-4 text-slate-600 leading-relaxed">
                        Registro de envio + nome visível + link permanente + data pública
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50/40 transition-colors">
                      <th scope="row" className="py-4 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <span className="text-xl">🥇</span>
                        <span>Ouro</span>
                      </th>
                      <td className="py-4 px-4 text-slate-700 font-medium">
                        Repositório acadêmico
                      </td>
                      <td className="py-4 px-4 text-slate-600 leading-relaxed">
                        Todos os elementos anteriores + identificador digital (DOI) em banco de dados internacional
                      </td>
                    </tr>
                    <tr className="hover:bg-cyan-50/40 transition-colors">
                      <th scope="row" className="py-4 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <span className="text-xl">💎</span>
                        <span>Diamante</span>
                      </th>
                      <td className="py-4 px-4 text-slate-700 font-medium">
                        Livro ou artigo em periódico
                      </td>
                      <td className="py-4 px-4 text-slate-600 leading-relaxed">
                        Todos os elementos anteriores + registro formal + revisão de validação
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Aviso Importante sobre DOI e Nível Prata */}
              <aside className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Importante:</strong> Os textos publicados no nível Prata (blog) não recebem DOI, por se tratar de identificador exclusivo de trabalhos depositados em repositórios científicos. Isto não significa ausência de proteção — todos os trabalhos contam com registro de envio, nome visível, endereço próprio e data pública, amparados pela Lei nº 9.610/1998.
                </div>
              </aside>
            </div>

            {/* 4. Amparo Legal */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">4</span>
                <span>Amparo Legal</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Todas as medidas aqui descritas estão fundamentadas na <strong>Lei nº 9.610, de 19 de fevereiro de 1998 (Lei de Direitos Autorais)</strong>, que garante proteção à obra intelectual desde o momento de sua criação, <em>independentemente de registro oficial</em>.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-slate-600">
                  <span className="font-bold text-slate-900 block mb-0.5">Registro Voluntário na Biblioteca Nacional</span>
                  O registro voluntário em órgãos competentes, como a Fundação Biblioteca Nacional, é facultativo e pode ser realizado pelo autor.
                </div>
                <a
                  href="https://www.gov.br/pt-br/servicos/registrar-ou-averbar-direitos-autorais-na-biblioteca-nacional"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  <span>Portal Gov.br</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Termo de Autorização de Uso */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Declaração e Submissão</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2 mt-1">
              <Scale className="w-6 h-6 text-amber-600" />
              <span>Termo de Autorização de Uso</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Ao submeter o texto para publicação na ESDHUBEM, o autor declara e concorda com as seguintes condições:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Autoria</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A obra é original e de sua autoria exclusiva, não infringindo direitos de terceiros nem incorrendo em plágio.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Autorização</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Concede à ESDHUBEM permissão para divulgar a obra, de forma não exclusiva, mantendo sempre seu nome como autor.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Responsabilidade</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O autor é integralmente responsável pelo conteúdo, veracidade das informações e opiniões expressas em sua obra.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Preservação de Direitos</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A propriedade intelectual permanece integralmente com o autor, podendo este utilizar a obra livremente em outros contextos.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Uso Responsável de Inteligência Artificial */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl border border-indigo-200">
              🤖
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Diretrizes de Tecnologia</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Uso Responsável de Inteligência Artificial
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A ESDHUBEM reconhece a Inteligência Artificial como recurso útil para organização, pesquisa e revisão. Defendemos, porém, que:
          </p>

          <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span>A tecnologia <strong>não substitui</strong> o pensamento, a compreensão e a criação humana;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span>A responsabilidade sobre o conteúdo é <strong>sempre do autor</strong>;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <div>
                <span>Se utilizou IA em qualquer etapa, <strong>declare de forma transparente</strong> como foi aplicada:</span>
                <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 italic">
                  Exemplo: "Utilizei IA para organizar referências e revisar ortografia; o texto e a argumentação são de minha autoria."
                </div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span>O uso não declarado poderá impedir a publicação ou, se detectado posteriormente, resultar em retirada da obra.</span>
            </li>
          </ul>
        </section>

        {/* 7. Direito de Remoção / Retirada de Publicação */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xl border border-rose-200">
              📂
            </div>
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Autonomia do Autor</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Direito de Remoção / Retirada de Publicação
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            O autor pode solicitar a exclusão de seu texto a qualquer momento, mediante comunicação formal. O prazo para retirada da página e dos índices públicos é de até <strong>15 dias úteis</strong> contados do recebimento da solicitação.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-50 p-4 rounded-xl border border-slate-200">
            * Em casos de depósito em repositório externo (ex: Zenodo / CERN), a remoção segue as regras daquela plataforma — a ESDHUBEM auxilia no processo, mas não tem controle direto sobre sistemas terceiros.
          </p>
        </section>

        {/* 8. Aviso — Não Garantia de Aceitação em Revista ou Periódico */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xl border border-amber-200">
              📤
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Periódicos Externos</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Sobre Publicação em Periódicos Científicos
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A ESDHUBEM oferece orientação, estruturação, revisão e encaminhamento para plataformas científicas. <strong>Não garantimos, porém, a aceitação do trabalho em revista, periódico ou repositório específico.</strong>
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-slate-400 font-bold">•</span>
              <span>A decisão de aceite é exclusiva da instituição ou comitê responsável pelo periódico;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400 font-bold">•</span>
              <span>O trabalho poderá ser devolvido para ajustes ou recusado sem prejuízo;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400 font-bold">•</span>
              <span>A ESDHUBEM não responde por recusa, avaliação ou prazo de revista terceira;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400 font-bold">•</span>
              <span>O suporte prestado visa preparar o texto — o mérito e a decisão final são totalmente independentes.</span>
            </li>
          </ul>
        </section>

        {/* 9. Princípio Fundamental */}
        <section className="bg-[#FFC72C] rounded-3xl p-8 sm:p-12 text-slate-950 text-center border border-amber-400 shadow-xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/10 text-slate-950">
            ⭐ Princípio Fundamental ESDHUBEM
          </span>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight max-w-3xl mx-auto leading-snug">
            "O texto é do autor. A publicação não transfere a criação, apenas a visibilidade. Quem cria é quem permanece sendo o titular."
          </blockquote>
        </section>

        {/* Navegação Rápida & Links Institucionais */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate?.('diretrizes-publicacao')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200 transition-colors cursor-pointer"
            >
              <span>Diretrizes de Publicação</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate?.('regras-certificacao-merito')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 transition-colors cursor-pointer"
            >
              <span>Regras de Certificação</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate?.('blog')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 text-xs font-bold border border-purple-200 transition-colors cursor-pointer"
            >
              <span>Blog ESDHUBEM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};
