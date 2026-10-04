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
  MessageCircle,
  Landmark,
  ChevronRight,
  Info
} from 'lucide-react';

interface DiretrizesPublicacaoParceriasPageProps {
  onBackToHome: () => void;
  onNavigateToArticles?: () => void;
  onNavigateToPortal?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const DiretrizesPublicacaoParceriasPage: React.FC<DiretrizesPublicacaoParceriasPageProps> = ({
  onBackToHome,
  onNavigateToArticles,
  onNavigateToPortal,
  onNavigate
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
              <span>DIRETRIZES DE PUBLICAÇÃO & PESQUISA ESDHUBEM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Diretrizes de Publicação
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 flex-1 w-full -mt-6 relative z-20">
        
        {/* Bloco Principal: Diretrizes de Publicação - Da aprendizagem à autoria */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-10">
          
          {/* Introdução e Sequência do Percurso */}
          <div className="space-y-6 pb-8 border-b border-slate-200">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                Da aprendizagem à autoria
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Diretrizes de Publicação
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                A <strong className="text-slate-900 font-semibold">ESDHUBEM</strong> oferece diferentes possibilidades para que o estudante transforme sua experiência de aprendizagem em uma produção escrita e autoral.
              </p>
              <p>
                Após concluir o percurso formativo previsto no curso, o estudante deverá comunicar à ESDHUBEM qual modalidade de produção pretende desenvolver.
              </p>
              <p>
                A partir dessa escolha, receberá as orientações específicas para elaboração do trabalho.
              </p>
            </div>

            {/* Fluxo do Percurso */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md border-l-4 border-[#FFC72C]">
              <span className="text-xs uppercase tracking-wider text-[#FFC72C] font-bold block">
                O percurso segue esta sequência:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white font-semibold">Conclusão do curso</span>
                <span className="text-[#FFC72C]">→</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white font-semibold">Comunicação da modalidade</span>
                <span className="text-[#FFC72C]">→</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white font-semibold">Questionário de aprendizagem</span>
                <span className="text-[#FFC72C]">→</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white font-semibold">Certificado correspondente</span>
                <span className="text-[#FFC72C]">→</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white font-semibold">Produção</span>
                <span className="text-[#FFC72C]">→</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white font-semibold">Análise</span>
                <span className="text-[#FFC72C]">→</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white font-semibold">Pagamento da taxa específica</span>
                <span className="text-[#FFC72C]">→</span>
                <span className="bg-[#FFC72C] text-slate-950 font-bold px-2.5 py-1 rounded-lg shadow-xs">Emissão do certificado de autoria</span>
              </div>
            </div>

            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
              <p>
                O <strong className="text-amber-900 font-bold">Certificado Bronze</strong> está relacionado à conclusão do curso e não depende da produção posterior de um artigo, manuscrito ou livro.
              </p>
              <p>
                Os certificados <strong className="text-slate-800 font-semibold">Prata</strong>, <strong className="text-amber-600 font-semibold">Ouro</strong> e <strong className="text-cyan-700 font-semibold">Diamante</strong> estão vinculados às respectivas produções e serão emitidos após a entrega e aprovação do trabalho, além do pagamento da taxa correspondente à modalidade escolhida.
              </p>
            </div>
          </div>

          {/* OS QUATRO PERCURSOS */}
          <div className="space-y-8">
            <div className="text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                Os Quatro Percursos
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Escolha o nível que melhor atende aos seus objetivos formativos e autorais
              </p>
            </div>

            <div className="space-y-6">
              {/* 🥉 BRONZE */}
              <div className="bg-gradient-to-r from-amber-50/50 via-white to-white border-2 border-amber-300/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🥉</span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-amber-950">
                      BRONZE — APRENDER E COMPREENDER
                    </h4>
                    <span className="text-xs font-semibold text-amber-800">Conclusão do curso</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  O Bronze é destinado ao estudante que deseja concluir o curso, demonstrar sua aprendizagem e receber o certificado correspondente.
                </p>

                <div className="bg-white border border-amber-200/80 rounded-xl p-4 space-y-2">
                  <span className="font-bold text-xs uppercase tracking-wider text-amber-900 block">Requisitos:</span>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                    <li>Conclusão do material previsto no curso;</li>
                    <li>Acompanhamento das atividades estabelecidas;</li>
                    <li>Realização do questionário de aprendizagem;</li>
                    <li>Cumprimento dos demais requisitos específicos do curso.</li>
                  </ul>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                  * O estudante não precisa produzir um artigo ou livro para receber o Certificado Bronze.
                </p>
              </div>

              {/* 🥈 PRATA */}
              <div className="bg-gradient-to-r from-slate-50 via-white to-white border-2 border-slate-300/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🥈</span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      PRATA — EXPRESSAR E COMUNICAR
                    </h4>
                    <span className="text-xs font-semibold text-slate-600">Artigo para o Blog da ESDHUBEM</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  O Prata é destinado ao estudante que deseja transformar o conhecimento desenvolvido no curso em um artigo autoral para publicação no espaço de artigos da ESDHUBEM.
                </p>

                <p className="text-slate-700 text-sm leading-relaxed">
                  Após a escolha dessa modalidade e o pagamento da taxa correspondente, o estudante receberá um vídeo com orientações detalhadas para a elaboração do artigo.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-900 block">
                    As orientações poderão incluir:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                    <div>• Estrutura do artigo</div>
                    <div>• Definição do tema e do público</div>
                    <div>• Título e subtítulos</div>
                    <div>• Organização das informações</div>
                    <div>• Linguagem clara e acessível</div>
                    <div>• Técnicas de redação para a internet</div>
                    <div>• Princípios de SEO</div>
                    <div>• Estratégias de comunicação</div>
                    <div>• Direitos autorais</div>
                    <div>• Utilização responsável de fontes</div>
                    <div>• Revisão e preparação para publicação</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed bg-amber-50/50 p-4 rounded-xl border border-amber-200/50">
                  <p>O artigo será analisado conforme as diretrizes editoriais da ESDHUBEM.</p>
                  <p>
                    A aplicação de técnicas de SEO tem como objetivo favorecer a organização e a encontrabilidade do conteúdo nos mecanismos de busca. Não representa garantia de posicionamento ou ranqueamento no Google.
                  </p>
                  <p className="font-semibold text-slate-800">
                    Após a aprovação, o artigo poderá ser publicado no Blog da ESDHUBEM, acompanhado da identificação do autor, conforme os critérios da escola.
                  </p>
                </div>
              </div>

              {/* 🥇 OURO */}
              <div className="bg-gradient-to-r from-amber-50/60 via-white to-white border-2 border-[#FFC72C] rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🥇</span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-amber-950">
                      OURO — INVESTIGAR E APROFUNDAR
                    </h4>
                    <span className="text-xs font-semibold text-amber-800">Manuscrito de Conclusão de Curso + Zenodo + DOI</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  O Ouro é destinado ao estudante que deseja aprofundar o conhecimento desenvolvido no curso por meio de um Manuscrito de Conclusão de Curso.
                </p>

                <p className="text-slate-700 text-sm leading-relaxed">
                  O trabalho deverá apresentar uma estrutura compatível com uma produção de investigação e receberá orientações específicas para sua elaboração.
                </p>

                <div className="bg-white border border-amber-200 rounded-xl p-4 space-y-2">
                  <span className="font-bold text-xs uppercase tracking-wider text-amber-950 block">
                    Após a escolha da modalidade e o pagamento da taxa correspondente, o estudante receberá um vídeo com orientações sobre a construção do manuscrito, incluindo, conforme a natureza do trabalho:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                    <div>• Definição do tema</div>
                    <div>• Questão ou problema de estudo</div>
                    <div>• Objetivos</div>
                    <div>• Introdução</div>
                    <div>• Fundamentação</div>
                    <div>• Metodologia, quando aplicável</div>
                    <div>• Desenvolvimento</div>
                    <div>• Análise e discussão</div>
                    <div>• Conclusão</div>
                    <div>• Citações e referências</div>
                    <div>• Organização das fontes</div>
                    <div>• Apresentação final do trabalho</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed bg-amber-50/70 p-4 rounded-xl border border-amber-200">
                  <p>
                    Após a conclusão e aprovação do manuscrito, será realizado o depósito no Zenodo, conforme as orientações fornecidas.
                  </p>
                  <p>
                    Quando o depósito for concluído e o Zenodo atribuir o identificador correspondente, o trabalho terá um <strong>DOI — Digital Object Identifier</strong>, que permite sua identificação e localização persistente na internet.
                  </p>
                  <p className="text-slate-600 italic">
                    O DOI identifica a publicação. Ele não significa, por si só, revisão por pares, certificação científica ou validação acadêmica do conteúdo.
                  </p>
                  <p className="font-bold text-amber-950 pt-1">
                    O Certificado Ouro será emitido após o cumprimento dos requisitos da modalidade e o pagamento da taxa correspondente.
                  </p>
                </div>
              </div>

              {/* 💎 DIAMANTE */}
              <div className="bg-gradient-to-r from-cyan-50/50 via-white to-white border-2 border-cyan-400 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💎</span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-cyan-950">
                      DIAMANTE — AUTORAR E CONSTRUIR
                    </h4>
                    <span className="text-xs font-bold text-cyan-800">Livro Autoral + Registro de Direitos Autorais na Biblioteca Nacional</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  O nível <strong>Diamante</strong> é destinado ao participante que deseja transformar conhecimento, experiência, estudo ou investigação em uma obra autoral de maior extensão.
                </p>

                {/* Formatos de Obra Aceitos */}
                <div className="bg-white border border-cyan-200 rounded-2xl p-5 space-y-3 shadow-2xs">
                  <span className="font-extrabold text-xs uppercase tracking-wider text-cyan-950 flex items-center gap-2">
                    <span>📚</span>
                    <span>Formatos de Obra Aceitos</span>
                  </span>
                  <p className="text-xs text-slate-600">
                    A obra poderá assumir diferentes formatos, conforme a finalidade e o público-alvo:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-slate-700 pt-1">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Livros de desenvolvimento pessoal</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Ensaios</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Obras acadêmicas ou didáticas</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Manuais técnicos</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Guias profissionais</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Livros de referência</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Biografias e autobiografias</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Memórias</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Livros-reportagem</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Obras sobre espiritualidade e religião</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Outras formas de não ficção</div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">• Obras de ficção adulta (compatíveis com os princípios da escola)</div>
                  </div>
                </div>

                {/* Requisito Mínimo de Extensão */}
                <div className="bg-cyan-100/70 border-l-4 border-cyan-600 p-5 rounded-r-2xl space-y-2 text-xs sm:text-sm text-cyan-950 shadow-2xs">
                  <div className="flex items-center gap-2 font-black uppercase tracking-wider text-cyan-900">
                    <span>✅</span>
                    <span>Requisito Mínimo de Extensão</span>
                  </div>
                  <p className="font-semibold text-slate-900">
                    O texto deverá conter no <strong>mínimo 50 páginas de conteúdo</strong>.
                  </p>
                  <p className="text-slate-700">
                    ⚠️ <strong>Não são contabilizadas para este mínimo:</strong> capa, folha de rosto, sumário, referências e demais elementos editoriais pré e pós-textuais.
                  </p>
                  <p className="text-slate-600 italic text-xs pt-1">
                    A extensão, entretanto, não substitui a qualidade. A obra deverá apresentar conteúdo desenvolvido, organização coerente e proposta autoral definida.
                  </p>
                </div>

                {/* Orientações para Produção */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📝</span>
                    <h5 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                      Orientações para Produção
                    </h5>
                  </div>
                  
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Após a confirmação da participação e do pagamento da taxa correspondente, o autor receberá material de orientação detalhado com diretrizes para estruturação e preparação da obra.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="py-2.5 px-4 font-bold uppercase tracking-wider w-1/3">Etapa</th>
                          <th className="py-2.5 px-4 font-bold uppercase tracking-wider">Conteúdo Abordado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Planejamento</td>
                          <td className="py-3 px-4">Definição de público, proposta da obra, estrutura geral</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Desenvolvimento</td>
                          <td className="py-3 px-4">Organização de capítulos, introdução, desenvolvimento, conclusão</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Elementos editoriais</td>
                          <td className="py-3 px-4">Folha de rosto, dedicatória, agradecimentos, sumário, referências</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Preparação do arquivo</td>
                          <td className="py-3 px-4">Formatação, padronização, versões para impressão e digital</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Apresentação</td>
                          <td className="py-3 px-4">Descrição da obra, texto de divulgação, palavras-chave</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                    <strong className="text-slate-900 font-bold block">Para Manuais Técnicos e Guias Profissionais:</strong>
                    <p>
                      Poderão ser utilizadas como base artigos científicos, normas, documentos oficiais e fontes pertinentes. O foco será clareza, utilidade, organização e responsabilidade das informações.
                    </p>
                  </div>
                </div>

                {/* Registro de Direitos Autorais */}
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 text-cyan-950 font-black text-sm sm:text-base uppercase tracking-wide">
                    <ShieldCheck className="w-5 h-5 text-cyan-700" />
                    <span>📜 Registro de Direitos Autorais (EDA / FBN)</span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Para o nível Diamante, o autor deverá realizar o <strong>registro oficial da obra junto ao Escritório de Direitos Autorais da Fundação Biblioteca Nacional (EDA/FBN)</strong>.
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <p className="font-bold text-slate-900">Como funciona:</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>O pedido é realizado pelo próprio autor diretamente no Portal Gov.Br;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>Acesso com conta Gov.Br; preenchimento de dados; anexo da obra e documentos;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>Pagamento das taxas conforme valores vigentes na plataforma;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>O processo passa por análise e pode ser deferido ou indeferido;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>O resultado e o certificado ficam disponíveis no próprio portal.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://www.gov.br/pt-br/servicos/registrar-ou-averbar-direitos-autorais-na-biblioteca-nacional"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
                    >
                      <span>🔗 Acessar Registro na Biblioteca Nacional — Portal Gov.Br</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
                    <p className="font-bold text-slate-900">Papel da ESDHUBEM:</p>
                    <div className="space-y-1">
                      <div className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✅</span> Orienta sobre a preparação da obra para atender aos requisitos;</div>
                      <div className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✅</span> Apoia na organização dos elementos necessários;</div>
                      <div className="flex items-start gap-1.5"><span className="text-rose-600 font-bold">❌</span> <strong>Não realiza o registro em nome do autor</strong> — é procedimento pessoal e intransferível;</div>
                      <div className="flex items-start gap-1.5"><span className="text-rose-600 font-bold">❌</span> Não tem ingerência sobre a análise e decisão da Fundação Biblioteca Nacional.</div>
                    </div>
                    <p className="text-slate-500 italic pt-1 border-t border-slate-200">
                      * Para informações atualizadas sobre documentos, valores, procedimentos e prazos, consulte sempre diretamente as orientações oficiais da Fundação Biblioteca Nacional.
                    </p>
                  </div>
                </div>

                {/* Publicação e Mural de Livros da ESDHUBEM */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <h5 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                      Publicação e Mural de Livros da ESDHUBEM
                    </h5>
                  </div>
                  
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Após cumprir todos os requisitos, a obra poderá ser incluída no <strong>Mural de Livros da ESDHUBEM</strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Disponibilização Gratuita */}
                    <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 font-bold text-emerald-950">
                        <span>🆓</span>
                        <strong className="text-base">Disponibilização Gratuita</strong>
                      </div>
                      <ul className="space-y-1.5 text-slate-700">
                        <li>• Página própria no site da ESDHUBEM;</li>
                        <li>• Disponível a capa da imagem do livro e a descrição e informação do certificado diamante emitido pela escola.</li>
                      </ul>
                    </div>

                    {/* Sobre Disponibilização para Venda */}
                    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 font-bold text-amber-950">
                        <span>💰</span>
                        <strong className="text-base">Sobre Disponibilização para Venda</strong>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        Caso você queira disponibilizar seu livro ou obra para venda ao público, a ESDHUBEM estabelece uma <strong>parceria como afiliado por meio da plataforma Hotmart</strong>. Por que fazemos assim?
                      </p>
                    </div>
                  </div>

                  {/* Detalhamento Venda Hotmart */}
                  <div className="bg-white border border-amber-200/80 rounded-2xl p-5 space-y-3 text-xs sm:text-sm shadow-xs">
                    <p className="font-bold text-amber-950">Por que fazemos assim?</p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>Você continua sendo o autor e o titular dos direitos</strong> — a parceria não altera a propriedade da obra;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>A Hotmart cuida de toda a estrutura:</strong> processamento de pagamentos, entrega, segurança digital e relatórios;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>A parceria permite que a escola divulgue a venda do seu trabalho</strong> para nossa rede de contatos, ampliando sua visibilidade;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>Cada parte recebe a participação combinada sobre as vendas</strong>, você como autor, a escola como parceira de divulgação;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>Tudo com transparência:</strong> valores, porcentagens e condições são combinados previamente, de forma clara e acordada;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>Você pode optar por não vender:</strong> a publicação gratuita no site ou repositório não exige parceria de venda, isso é uma escolha sua, feita quando quiser avançar para comercialização.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Autoria e Responsabilidade & Inteligência Artificial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            {/* Autoria e Responsabilidade */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Autoria e Responsabilidade</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A produção intelectual pertence ao seu autor. A ESDHUBEM oferece orientação, modelos e critérios para desenvolvimento e publicação, mas não substitui o autor na criação da obra.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                O autor é responsável pelo conteúdo que apresenta e assina, incluindo:
              </p>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>Informações, argumentos e interpretações;</li>
                <li>Referências e citações;</li>
                <li>Imagens e materiais utilizados;</li>
                <li>Respeito aos direitos de terceiros;</li>
                <li>Revisão final da produção.</li>
              </ul>
              <p className="text-[11px] text-slate-500 italic pt-1">
                A publicação de uma obra pela ESDHUBEM não significa que a instituição endosse automaticamente todas as opiniões, interpretações ou conclusões apresentadas pelo autor.
              </p>
            </div>

            {/* Inteligência Artificial e Autoria */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Inteligência Artificial e Autoria</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Ferramentas de inteligência artificial poderão ser utilizadas como apoio à produção, de acordo com as orientações da ESDHUBEM. Podem auxiliar na organização de ideias, elaboração de estruturas, revisão textual e aprimoramento da linguagem.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Entretanto, o autor continua responsável por compreender, verificar e revisar aquilo que publica. Informações, referências, dados ou resultados não devem ser apresentados como verdadeiros sem verificação adequada.
              </p>
              <div className="bg-purple-100/60 p-3 rounded-xl border border-purple-200 text-xs text-purple-950 font-medium">
                A tecnologia pode auxiliar a produção. A autoria e a responsabilidade permanecem com o autor.
              </div>
            </div>
          </div>

          {/* Certificação e Valores */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg uppercase tracking-wider">
              Certificação e Valores
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>Cada modalidade possui um valor específico para a emissão do certificado correspondente.</p>
              <p>O valor da certificação será informado ao estudante antes da escolha da modalidade.</p>
              <p className="font-semibold text-slate-900">
                O pagamento da certificação não substitui a necessidade de cumprir os requisitos da modalidade escolhida.
              </p>
            </div>

            {/* Tabela Resumo dos Percursos */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs pt-1">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Nível</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">O estudante faz</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Produção / requisito</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Resultado</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">O que paga</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                  <tr className="hover:bg-amber-50/30">
                    <td className="py-3.5 px-4 font-bold text-amber-950 whitespace-nowrap">🥉 Bronze</td>
                    <td className="py-3.5 px-4">Conclui o curso e responde ao questionário</td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">Questionário de aprendizagem</td>
                    <td className="py-3.5 px-4">Certificado Bronze</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Bronze</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">🥈 Prata</td>
                    <td className="py-3.5 px-4">Produz um artigo para o blog e envia para aprovação</td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">Artigo para o Blog ESDHUBEM</td>
                    <td className="py-3.5 px-4">Publicação no Blog Esdhubem + Certificado Prata</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Prata</td>
                  </tr>
                  <tr className="hover:bg-amber-50/30">
                    <td className="py-3.5 px-4 font-bold text-amber-800 whitespace-nowrap">🥇 Ouro</td>
                    <td className="py-3.5 px-4">Produz um manuscrito e realiza o depósito e envia para aprovação</td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">Manuscrito de Conclusão de Curso + depósito no Zenodo + DOI</td>
                    <td className="py-3.5 px-4">Publicação no Repositório da ESDHUBEM + Certificado Ouro</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Ouro</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/30">
                    <td className="py-3.5 px-4 font-bold text-cyan-900 whitespace-nowrap">💎 Diamante</td>
                    <td className="py-3.5 px-4">Produz um livro e realiza o registro de direitos autorais e envia para aprovação</td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">Livro com mínimo de 50 páginas + registro de direitos autorais</td>
                    <td className="py-3.5 px-4">Mural de Livros + Certificado Diamante</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Diamante</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic">
              * Os certificados Prata, Ouro e Diamante dependem da entrega e aprovação da produção correspondente.
            </p>
          </div>

          {/* 🎯 Nossos Eixos Temáticos de Pesquisa (Alinhados à CAPES) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                  Alinhamento CAPES
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span>🎯 Nossos Eixos Temáticos de Pesquisa</span>
                </h3>
              </div>
            </div>

            {/* Esclarecimento importante */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Esclarecimento importante:</span>
              </div>
              <p>
                A ESDHUBEM adota este alinhamento como <strong>referência organizacional e metodológica</strong> para nortear, estruturar e dar coerência interna aos nossos cursos e produções. Esta escolha não confere à escola status de instituição acadêmica ou científica <em>stricto sensu</em> — trata-se de uma forma de ordenar nosso sistema de ensino, definir linhas de estudo e seguir critérios reconhecidos, sem, contudo, assumir natureza ou competência que não nos cabe.
              </p>
            </div>

            <p className="text-slate-700 text-xs sm:text-sm sm:text-base leading-relaxed">
              Alinhados aos critérios de avaliação da <strong className="text-slate-900">CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior)</strong>, os cursos livres e os projetos da ESDHUBEM conectam-se diretamente a quatro grandes áreas do conhecimento:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-1">
              {/* Eixo 1: Saúde Coletiva */}
              <div className="bg-gradient-to-b from-rose-50/50 to-white border border-rose-200/80 rounded-2xl p-5 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600 font-bold">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 block">Eixo 01</span>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">Saúde Coletiva</h4>
                  </div>
                  <div className="text-xs space-y-2 text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-800">Foco:</strong> Práticas Integrativas, Bem-Estar e Saúde Mental.
                    </p>
                    <p>
                      <strong className="text-slate-800">Aplicação:</strong> Estudos sobre coaching, espiritualidade aplicada, meditação e Práticas Integrativas e Complementares (PICS).
                    </p>
                  </div>
                </div>
              </div>

              {/* Eixo 2: Interdisciplinar */}
              <div className="bg-gradient-to-b from-blue-50/50 to-white border border-blue-200/80 rounded-2xl p-5 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">Eixo 02</span>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">Interdisciplinar</h4>
                  </div>
                  <div className="text-xs space-y-2 text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-800">Foco:</strong> Desenvolvimento Pessoal, Humano, Profissional e Consciencial.
                    </p>
                    <p>
                      <strong className="text-slate-800">Aplicação:</strong> Competências socioemocionais cruzando áreas como psicologia, administração e filosofia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Eixo 3: Ensino & Educação */}
              <div className="bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 rounded-2xl p-5 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">Eixo 03</span>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">Ensino & Educação</h4>
                  </div>
                  <div className="text-xs space-y-2 text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-800">Foco:</strong> Pedagogia Integrativa e Ética.
                    </p>
                    <p>
                      <strong className="text-slate-800">Aplicação:</strong> Metodologias inovadoras de ensino e educação voltada para adultos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Eixo 4: Ciências da Religião, História & Cultura */}
              <div className="bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 rounded-2xl p-5 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">Eixo 04</span>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">Ciências da Religião, História & Cultura</h4>
                  </div>
                  <div className="text-xs space-y-2 text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-800">Foco:</strong> Esoterismo Ocidental, Novas Formas de Espiritualidade e Fenômenos Contemporâneos.
                    </p>
                    <p>
                      <strong className="text-slate-800">Aplicação:</strong> Estudos históricos, antropológicos e sociológicos sobre correntes tradicionais (Alquimia, Cabala, Teosofia, Ocultismo, Maçonaria) e manifestações modernas, como os movimentos New Age, a espiritualidade sem religião e os reflexos culturais do esoterismo na sociedade contemporânea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UM PERCURSO DE AUTORIA */}
          <div className="bg-gradient-to-r from-slate-900 to-[#182333] text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg text-center">
            <h4 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#FFC72C]">
              Um Percurso de Autoria
            </h4>
            <div className="max-w-2xl mx-auto space-y-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
              <p>O estudante não é obrigado a realizar todos os níveis.</p>
              <p>Pode concluir o curso e permanecer no <strong>Bronze</strong>.</p>
              <p>Pode escolher escrever um artigo e avançar para o <strong>Prata</strong>.</p>
              <p>Pode desenvolver um manuscrito e seguir para o <strong>Ouro</strong>.</p>
              <p>Pode transformar seu conhecimento em um livro e alcançar o <strong>Diamante</strong>.</p>
              <p className="pt-2 font-medium text-white">
                Cada percurso corresponde a uma forma diferente de transformar aprendizagem em produção.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-black text-[#FFC72C]">
              <span>APRENDER</span>
              <span>→</span>
              <span>EXPRESSAR</span>
              <span>→</span>
              <span>INVESTIGAR</span>
              <span>→</span>
              <span>AUTORAR</span>
            </div>

            <p className="text-xs text-slate-400 italic pt-1">
              O curso pode ser o começo. A produção é uma possibilidade. A autoria é uma construção.
            </p>
          </div>
        </div>

        {/* Avisos Importantes e Termos de Publicação */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Transparência & Integridade
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Avisos Importantes sobre Publicação e Autoria
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aviso 4: Não Garantia de Aceitação */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <span>📤</span>
                <h4>Sobre Publicação em Periódicos e Revistas</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A ESDHUBEM oferece orientação, estruturação, revisão e encaminhamento para plataformas científicas. <strong>Não garantimos, porém, a aceitação do trabalho em revista, periódico ou repositório específico.</strong>
              </p>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>A decisão de aceite é exclusiva da instituição ou comitê responsável;</li>
                <li>O trabalho poderá ser devolvido para ajustes ou recusado sem prejuízo;</li>
                <li>A ESDHUBEM não responde por recusa, avaliação ou prazo de revista terceira.</li>
              </ul>
            </div>

            {/* Aviso 5: Pré-print não é revista */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <span>🔬</span>
                <h4>Pré-print e Depósito com DOI</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                O depósito em repositório com atribuição de <strong>DOI</strong> constitui <strong>registro e divulgação prévia</strong> da obra (pré-print):
              </p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✅</span> Fica registrada oficialmente a autoria e data de criação;</li>
                <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✅</span> O trabalho passa a ser acessível publicamente;</li>
                <li className="flex items-start gap-1.5"><span className="text-rose-600 font-bold">❌</span> <strong>Não equivale a publicação em revista com revisão por pares</strong>;</li>
                <li className="flex items-start gap-1.5"><span className="text-rose-600 font-bold">❌</span> Verifique a política do periódico caso queira submeter a mesma obra.</li>
              </ul>
            </div>

            {/* Aviso 6: Uso de IA */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <span>🤖</span>
                <h4>Uso Responsável de Inteligência Artificial</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A tecnologia é ferramenta de apoio, <strong>não de substituição</strong> do pensamento e criação humana.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>A responsabilidade sobre o conteúdo é sempre do autor;</li>
                <li>Se utilizou IA em qualquer etapa, <strong>declare com transparência</strong> como foi aplicada;</li>
                <li>O uso não declarado poderá impedir ou cancelar a publicação.</li>
              </ul>
            </div>

            {/* Aviso 8: Retirada de Publicação */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <span>📂</span>
                <h4>Direito de Remoção / Retirada</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                O autor pode solicitar a exclusão de seu texto a qualquer momento. O prazo para retirada da página e dos índices públicos é de até <strong>15 dias úteis</strong>.
              </p>
              <p className="text-[11px] text-slate-500 italic">
                * Em repositórios externos (Zenodo/CERN), a exclusão segue as normas da plataforma terceira.
              </p>
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
