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
  Info,
  Clock,
  AlertTriangle,
  Check,
  Cpu,
  RefreshCw
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
      {/* Hero Header com Azul Profundo Navy #011049 */}
      <div className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white border-b border-blue-900/60 shadow-lg">
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
                <span>Ver Repositório de Artigos</span>
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
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#011049] via-[#061e47] to-[#011049] text-white space-y-4 shadow-xl border border-blue-900/60 border-l-4 border-l-[#FFC72C]">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs uppercase tracking-wider text-[#FFC72C] font-black block flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFC72C]" />
                  <span>O percurso segue esta sequência:</span>
                </span>
                <span className="text-[11px] text-blue-200 bg-blue-950/70 border border-blue-800/80 px-2.5 py-0.5 rounded-full font-medium">
                  Fluxo Integrado de Autoria & Proteção
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-100 leading-relaxed">
                <span className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-white font-semibold border border-white/10 shadow-xs">
                  Conclusão do curso
                </span>
                <span className="text-[#FFC72C] font-bold text-base">→</span>
                <span className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-white font-semibold border border-white/10 shadow-xs">
                  Comunicação da modalidade de manuscrito
                </span>
                <span className="text-[#FFC72C] font-bold text-base">→</span>
                <span className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-white font-semibold border border-white/10 shadow-xs">
                  Pagamento da taxa do nível específico
                </span>
                <span className="text-[#FFC72C] font-bold text-base">→</span>
                <span className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-white font-semibold border border-white/10 shadow-xs">
                  Produção do manuscrito
                </span>
                <span className="text-[#FFC72C] font-bold text-base">→</span>
                <span className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-white font-semibold border border-white/10 shadow-xs">
                  Envio para análise
                </span>
                <span className="text-[#FFC72C] font-bold text-base">→</span>
                <span className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-white font-semibold border border-white/10 shadow-xs">
                  Devolutiva da escola
                </span>
                <span className="text-[#FFC72C] font-bold text-base">→</span>
                <span className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-white font-semibold border border-white/10 shadow-xs">
                  Aprovação de ambas as partes
                </span>
                <span className="text-[#FFC72C] font-bold text-base">→</span>
                <span className="bg-[#FFC72C] text-slate-950 font-black px-3.5 py-1.5 rounded-xl shadow-md border border-amber-300">
                  Emissão do certificado e publicação do trabalho
                </span>
              </div>
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
                      BRONZE — APRENDER E CONCEITUAR (FIXAÇÃO ATIVA)
                    </h4>
                    <span className="text-xs font-semibold text-amber-800">Tríade de Fixação & Verbete Enciclopédico na Wiki</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  O Bronze é destinado ao estudante que deseja consolidar sua aprendizagem através da <strong>metodologia pedagógica de Fixação Ativa</strong> da ESDHUBEM, elaborando um <strong>Verbete</strong> com conceito claro, informativo, objetivo, histórico e com aplicação prática que será publicado no setor <strong>Enciclopédico Wiki oficial</strong> da escola.
                </p>

                <div className="bg-white border border-amber-200/80 rounded-xl p-4 space-y-2.5">
                  <span className="font-bold text-xs uppercase tracking-wider text-amber-900 block">Requisitos da Tríade de Fixação:</span>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-800 font-bold shrink-0">🧠</span>
                      <span><strong>Mapa Mental do Conteúdo:</strong> Diagrama visual desenhado (à mão ou digital) estruturando os conceitos centrais e conexões pedagógicas da aula.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-800 font-bold shrink-0">✍️</span>
                      <span><strong>Verbete Enciclopédico (500 a 800 palavras):</strong> Texto conceitual e informativo em norma-padrão explicando o significado, o contexto histórico e a aplicação do tema.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-800 font-bold shrink-0">🎙️</span>
                      <span><strong>Áudio Explicativo de 1 Minuto:</strong> Gravação de voz de 60 segundos sintetizando o conceito oralmente com clareza (Técnica Feynman de retenção).</span>
                    </li>
                  </ul>

                  <div className="pt-2 border-t border-amber-100 flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-medium">🛡️ Registro de Autoria: OSF (Open Science Framework)</span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-medium">📍 Publicação: Wiki Oficial ESDHUBEM (Enciclopédia Temática)</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                  * O trabalho chega às mãos da coordenação com comprovante de registro no OSF, resguardando integralmente a anterioridade e a autoria do aluno.
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
                    <span className="text-xs font-semibold text-slate-600">Artigo para o Blog & Wiki da ESDHUBEM (1.200 a 2.500 palavras)</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  O Prata é destinado ao estudante que deseja demonstrar sua aprendizagem entregando a <strong>Tríade de Fixação Ativa</strong> do curso <strong>MAIS</strong> um artigo autoral aprofundado para publicação no Blog Oficial e Wiki da ESDHUBEM, com <strong>1.200 a 2.500 palavras</strong> para gerar autoridade e indexação no Google (SEO).
                </p>

                <p className="text-slate-700 text-sm leading-relaxed">
                  Após a escolha dessa modalidade, o estudante receberá orientações detalhadas para a elaboração do artigo e seu registro de autoria no <strong>OSF (Open Science Framework)</strong>.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-900 block">
                    As orientações poderão incluir:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                    <div>• Estrutura do artigo (1.200 a 2.500 palavras)</div>
                    <div>• Definição do tema e do público</div>
                    <div>• Título, subtítulos H2/H3 e escaneabilidade</div>
                    <div>• Organização das informações e casos práticos</div>
                    <div>• Linguagem clara e acessível</div>
                    <div>• Técnicas de redação para a internet</div>
                    <div>• Princípios de SEO para busca orgânica</div>
                    <div>• Registro de autoria prévio no OSF</div>
                    <div>• Direitos autorais e Lei 9.610/98</div>
                    <div>• Utilização responsável de fontes e bibliografia</div>
                    <div>• Revisão e preparação para publicação</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed bg-amber-50/50 p-4 rounded-xl border border-amber-200/50">
                  <p>O artigo será analisado conforme as diretrizes editoriais da ESDHUBEM.</p>
                  <p>
                    A aplicação de técnicas de SEO tem como objetivo favorecer a organização e a encontrabilidade do conteúdo nos mecanismos de busca, potencializando seu portfólio profissional e acadêmico.
                  </p>
                  <p className="font-semibold text-slate-800">
                    Após a aprovação, o artigo será publicado no Blog Oficial e Wiki da ESDHUBEM, com biografia do autor, link público de portfólio e chancela do Selo Prata.
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
                  O Ouro é destinado ao estudante que entrega a <strong>Tríade de Fixação Ativa</strong> do curso <strong>MAIS</strong> um Manuscrito de Conclusão de Curso estruturado ou artigo de investigação científica com registro DOI.
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

                {/* Orientações para Produção de Artigo Científico / Manuscrito */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📝</span>
                    <h5 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                      Orientações para Produção do Artigo
                    </h5>
                  </div>
                  
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Após a confirmação da participação e o pagamento da taxa correspondente, o autor receberá material de orientação detalhado e vídeo explicativo com diretrizes para estruturação e preparação do artigo científico / manuscrito de conclusão.
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
                          <td className="py-3 px-4 font-bold text-slate-900">Planejamento & Tema</td>
                          <td className="py-3 px-4">Definição do tema vinculado a um dos 4 Eixos Temáticos de Pesquisa, problema de estudo e objetivos do trabalho</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Fundamentação Teórica</td>
                          <td className="py-3 px-4">Revisão bibliográfica, contextualização teórica, estado da arte e citação de fontes confiáveis (normas ABNT)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Metodologia Científica</td>
                          <td className="py-3 px-4">Enquadramento metodológico (revisão integrativa/narrativa, estudo de caso ou ensaio teórico reflexivo) e procedimentos adotados</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Desenvolvimento & Discussão</td>
                          <td className="py-3 px-4">Estruturação dos tópicos de desenvolvimento, análise crítica e argumentativa, articulação teórica e conclusões</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Elementos Acadêmicos</td>
                          <td className="py-3 px-4">Título, resumo, abstract, palavras-chave, referências bibliográficas completas e adequação aos padrões científicos</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Depósito & Atribuição DOI</td>
                          <td className="py-3 px-4">Padronização do arquivo final em PDF e depósito no repositório Zenodo para geração e atribuição do DOI permanente</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 🎯 Nossos Eixos Temáticos de Pesquisa (Alinhados à CAPES) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/90 shadow-sm space-y-5">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
                        Alinhamento CAPES dos Manuscritos e Artigos
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span>🎯 Nossos Eixos Temáticos de Pesquisa</span>
                      </h4>
                    </div>
                  </div>

                  {/* Esclarecimento importante */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1.5">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Esclarecimento importante:</span>
                    </div>
                    <p>
                      A ESDHUBEM adota este alinhamento como <strong>referência organizacional e metodológica</strong> para nortear, estruturar e dar coerência interna aos nossos cursos e produções. Esta escolha não confere à escola status de instituição acadêmica ou científica <em>stricto sensu</em> — trata-se de uma forma de ordenar nosso sistema de ensino, definir linhas de estudo e seguir critérios reconhecidos, sem, contudo, assumir natureza ou competência que não nos cabe.
                    </p>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Alinhados aos critérios de avaliação da <strong className="text-slate-900">CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior)</strong>, os artigos e manuscritos científicos da ESDHUBEM conectam-se diretamente a quatro grandes áreas do conhecimento:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                    {/* Eixo 1: Saúde Coletiva */}
                    <div className="bg-gradient-to-b from-rose-50/50 to-white border border-rose-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600 font-bold">
                          <HeartPulse className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">Eixo 01</span>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base">Saúde Coletiva</h5>
                        </div>
                        <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed">
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
                    <div className="bg-gradient-to-b from-blue-50/50 to-white border border-blue-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold">
                          <Compass className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Eixo 02</span>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base">Interdisciplinar</h5>
                        </div>
                        <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed">
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
                    <div className="bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">
                          <GraduationCap className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Eixo 03</span>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base">Ensino & Educação</h5>
                        </div>
                        <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed">
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
                    <div className="bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold">
                          <Landmark className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">Eixo 04</span>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">Ciências da Religião, História & Cultura</h5>
                        </div>
                        <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed">
                          <p>
                            <strong className="text-slate-800">Foco:</strong> Esoterismo Ocidental, Novas Formas de Espiritualidade e Fenômenos Contemporâneos.
                          </p>
                          <p>
                            <strong className="text-slate-800">Aplicação:</strong> Estudos históricos, antropológicos e sociológicos sobre correntes tradicionais (Alquimia, Cabala, Teosofia, Ocultismo, Maçonaria) e manifestações modernas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <span className="text-xs font-bold text-cyan-800">Tríade de Fixação + Livro Autoral (Mín. 50 páginas)</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  O nível <strong>Diamante</strong> é destinado ao participante que entrega a <strong>Tríade de Fixação Ativa</strong> do curso <strong>MAIS</strong> uma obra autoral completa de maior extensão (livro com no mínimo 50 páginas de conteúdo desenvolvido).
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Livros de desenvolvimento pessoal</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Ensaios</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Obras acadêmicas ou didáticas</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Manuais técnicos</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Guias profissionais</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Livros de referência</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Biografias e autobiografias</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Memórias</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Livros-reportagem</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Obras sobre espiritualidade e religião</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Outras formas de não ficção</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Obras de ficção adulta (compatíveis com os princípios da escola)</span>
                    </div>
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
                  <tr className="bg-[#011049] text-white">
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
                    <td className="py-3.5 px-4">Entrega a Tríade de Fixação Ativa</td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">Verbete Enciclopédico (500-800 palavras) + Mapa Mental + Áudio 1 min + registro no OSF</td>
                    <td className="py-3.5 px-4">Publicação na Wiki ESDHUBEM + Certificado com Selo Bronze</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Bronze</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">🥈 Prata</td>
                    <td className="py-3.5 px-4">Entrega a Tríade de Fixação Ativa + Artigo de blog (1.200 a 2.500 palavras)</td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">Tríade de Fixação Ativa + Artigo de Blog & Wiki (SEO) + Registro OSF</td>
                    <td className="py-3.5 px-4">Publicação no Blog & Wiki ESDHUBEM + Certificado com Selo Prata</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Prata</td>
                  </tr>
                  <tr className="hover:bg-amber-50/30">
                    <td className="py-3.5 px-4 font-bold text-amber-800 whitespace-nowrap">🥇 Ouro</td>
                    <td className="py-3.5 px-4">Entrega a Tríade de Fixação Ativa + Manuscrito/TCC estruturado no Zenodo com DOI</td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">Tríade de Fixação Ativa + Manuscrito Científico + DOI Permanente</td>
                    <td className="py-3.5 px-4">Publicação no Portal Acadêmico ESDHUBEM + Certificado Ouro com DOI</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Ouro</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/30">
                    <td className="py-3.5 px-4 font-bold text-cyan-900 whitespace-nowrap">💎 Diamante</td>
                    <td className="py-3.5 px-4">Entrega a Tríade de Fixação Ativa + Livro autoral completo (mín. 50 págs) e registro na BN</td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">Tríade de Fixação Ativa + Livro Autoral + Registro EDA na Biblioteca Nacional</td>
                    <td className="py-3.5 px-4">Mural de Livros / Livraria Digital + Certificado Diamante de Honraria Máxima</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Diamante</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic">
              * Os certificados Prata, Ouro e Diamante dependem da entrega e aprovação da produção correspondente.
            </p>
          </div>

          {/* UM PERCURSO DE AUTORIA */}
          <div className="bg-gradient-to-r from-[#011049] via-[#061e47] to-[#011049] text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl border border-blue-900/60 text-center">
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

        {/* ======================================================== */}
        {/* Áreas de Atenção e Aprofundamento Necessário */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden space-y-12">
          {/* Header */}
          <div className="border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              Diretrizes de Publicação
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#011049] flex items-center gap-3">
              <span>📑</span> Áreas de Atenção e Aprofundamento Necessário
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-4xl">
              Consolidação de normas operacionais, prazos institucionais de referência, critérios de avaliação formativa, integridade de autoria, passo a passo técnico e orientações editoriais para todos os níveis de produção.
            </p>
          </div>

          {/* 1. Prazos de Análise e Devolutiva */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-sm">1</span>
              <h3 className="text-xl font-bold text-[#011049]">Prazos de Análise e Devolutiva</h3>
            </div>
            <p className="text-sm text-slate-600">
              Com base em práticas adotadas por instituições de ensino e periódicos acadêmicos, estabelecemos os seguintes prazos de referência:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-[#011049]">
                  <tr>
                    <th className="py-3 px-4 font-bold">Etapa</th>
                    <th className="py-3 px-4 font-bold w-52">Prazo Estimado</th>
                    <th className="py-3 px-4 font-bold">Observação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">Análise inicial do trabalho enviado</td>
                    <td className="py-3 px-4 font-medium text-blue-700">até 10 dias úteis</td>
                    <td className="py-3 px-4 text-xs text-slate-600">Contados a partir do recebimento completo do material</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">Devolutiva com ajustes ou aprovação</td>
                    <td className="py-3 px-4 font-medium text-blue-700">até 15 dias úteis</td>
                    <td className="py-3 px-4 text-xs text-slate-600">Prazo pode ser reduzido conforme disponibilidade; ajustes solicitados reiniciam a contagem</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">Reenvio após ajustes e nova análise</td>
                    <td className="py-3 px-4 font-medium text-blue-700">até 7 dias úteis</td>
                    <td className="py-3 px-4 text-xs text-slate-600">Aplica-se à segunda avaliação</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">Emissão de certificado após aprovação</td>
                    <td className="py-3 px-4 font-medium text-emerald-700 font-semibold">até 5 dias úteis</td>
                    <td className="py-3 px-4 text-xs text-slate-600">Após confirmação do cumprimento de todos os requisitos</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">Registro OSF / Zenodo / DOI</td>
                    <td className="py-3 px-4 font-medium text-blue-700">até 10 dias úteis</td>
                    <td className="py-3 px-4 text-xs text-slate-600">Após orientação e envio do arquivo final</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">Registro de obra no EDA/FBN (Diamante)</td>
                    <td className="py-3 px-4 font-medium text-purple-700">Conforme prazos da Fundação Biblioteca Nacional</td>
                    <td className="py-3 px-4 text-xs text-slate-600">Procedimento de responsabilidade pessoal do autor</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">Remoção de conteúdo publicado</td>
                    <td className="py-3 px-4 font-medium text-rose-700">até 15 dias úteis</td>
                    <td className="py-3 px-4 text-xs text-slate-600">Após solicitação formal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 flex items-start gap-3">
              <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <p>
                <strong>Nota institucional:</strong> Estes são prazos de referência, não constituem obrigação contratual, podendo ser ajustados conforme volume de demandas. Sempre que houver previsão de atraso, o estudante será comunicado.
              </p>
            </div>
          </div>

          {/* 2. Critérios de Avaliação, Publicação e Direito de Retirada */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-sm">2</span>
              <h3 className="text-xl font-bold text-[#011049]">Critérios de Avaliação, Publicação e Direito de Retirada</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* O que define aprovação */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                <h4 className="font-bold text-[#011049] text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  O que define aprovação
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A aprovação se dá pelo cumprimento integral dos requisitos específicos de cada nível, com entrega do trabalho desenvolvido de acordo com as orientações recebidas e em comum acordo entre autor e escola. A avaliação verifica:
                </p>
                <ul className="text-xs text-slate-700 space-y-2 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span><strong>Registro prévio obrigatório:</strong> Não recebemos trabalhos que não foram registrados no OSF (Bronze/Prata) ou Zenodo (Ouro)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Aderência ao tema</strong> e aos eixos temáticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Cumprimento da extensão mínima</strong> e estrutura definida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Clareza, coerência e organização</strong> das ideias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Uso responsável de fontes</strong> e direitos autorais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Adequação às normas de escrita</strong> e citação quando aplicável</span>
                  </li>
                </ul>
              </div>

              {/* Publicação é opcional & Retirada */}
              <div className="space-y-4">
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    Publicação é opcional
                  </h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Caso o estudante não deseje a publicação do seu trabalho no site da ESDHUBEM, sua escolha será integralmente respeitada. O certificado será emitido normalmente, e o trabalho será mantido em registro privado, sem divulgação pública. A publicação é um benefício adicional — não uma exigência.
                  </p>
                </div>

                <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 space-y-2">
                  <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-700" />
                    Direito de retirada a qualquer momento
                  </h4>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    Mesmo após a publicação, o autor pode solicitar a retirada do conteúdo a qualquer instante, pelo e-mail: <a href="mailto:esdhubem@proton.me" className="font-bold underline text-amber-950 hover:text-amber-800">esdhubem@proton.me</a>. O prazo para remoção das páginas e dos índices públicos é de até <strong>15 dias úteis</strong>. Em repositórios externos (Zenodo, OSF), a exclusão segue as regras próprias de cada plataforma.
                  </p>
                </div>
              </div>
            </div>

            {/* Quem avalia & Sobre revisão por pares */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                <h4 className="font-bold text-[#011049] text-sm flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  Quem avalia
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A avaliação é realizada pelo corpo docente da ESDHUBEM e docentes auxiliares contratados, conforme os critérios próprios de cada nível de certificação.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-2">
                <h4 className="font-bold text-[#011049] text-sm flex items-center gap-2">
                  <Info className="w-4 h-4 text-indigo-600" />
                  Sobre revisão por pares e banca
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A ESDHUBEM não realiza revisão por pares nem dispõe de serviços de revistas científicas. Não há composição de banca examinadora. A avaliação tem caráter formativo e orientador, focada no desenvolvimento do autor e no cumprimento das diretrizes estabelecidas.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Estrutura e Formato por Nível de Produção */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-sm">3</span>
              <h3 className="text-xl font-bold text-[#011049]">Estrutura e Formato por Nível de Produção</h3>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-[#011049]">
                  <tr>
                    <th className="py-3 px-4 font-bold w-1/5">Elemento</th>
                    <th className="py-3 px-4 font-bold w-2/5">Estrutura Mínima</th>
                    <th className="py-3 px-4 font-bold w-1/4">Normas de Estilo</th>
                    <th className="py-3 px-4 font-bold">Extensão</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 align-top">
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-4 px-4 font-bold text-amber-900 bg-amber-50/30">
                      📝 Verbete Enciclopédico (Bronze)
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-700 leading-relaxed">
                      <ul className="space-y-1">
                        <li>• Título claro e preciso</li>
                        <li>• Definição direta do tema</li>
                        <li>• Contexto histórico e conceitual</li>
                        <li>• Aplicação prática ou relevância atual</li>
                        <li>• Ligação com os eixos temáticos</li>
                        <li>• Sem referências extensas — informações integradas ao texto</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-600 leading-relaxed">
                      <ul className="space-y-1">
                        <li>• Linguagem objetiva e informativa</li>
                        <li>• Tom neutro e educativo</li>
                        <li>• Parágrafos curtos</li>
                        <li>• Sem jargões desnecessários</li>
                        <li>• Sem citações longas</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-900 text-xs whitespace-nowrap">
                      500 a 800 palavras
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-4 px-4 font-bold text-slate-800 bg-slate-100/50">
                      ✍️ Artigo de Blog &amp; Wiki (Prata)
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-700 leading-relaxed">
                      <ul className="space-y-1">
                        <li>• Título + subtítulo chamativo</li>
                        <li>• Introdução (contexto e objetivo)</li>
                        <li>• Desenvolvimento dividido em seções (H2/H3)</li>
                        <li>• Exemplos práticos ou relatos</li>
                        <li>• Conclusão com fechamento</li>
                        <li>• Referências quando aplicável</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-600 leading-relaxed">
                      <ul className="space-y-1">
                        <li>• Linguagem acessível e fluida</li>
                        <li>• Escaneabilidade: parágrafos curtos, destaques, listas</li>
                        <li>• Princípios de clareza e encontrabilidade (SEO)</li>
                        <li>• Transição suave entre seções</li>
                        <li>• Normas ABNT para referências</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-900 text-xs whitespace-nowrap">
                      1.200 a 2.500 palavras
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-4 px-4 font-bold text-yellow-900 bg-yellow-50/30">
                      🔬 Manuscrito / Artigo de Investigação (Ouro)
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-700 leading-relaxed">
                      <ul className="space-y-1">
                        <li>• Título</li>
                        <li>• Resumo + palavras-chave</li>
                        <li>• Introdução (problema, objetivos)</li>
                        <li>• Fundamentação teórica</li>
                        <li>• Metodologia</li>
                        <li>• Desenvolvimento e discussão</li>
                        <li>• Conclusão</li>
                        <li>• Referências bibliográficas completas</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-600 leading-relaxed">
                      <ul className="space-y-1">
                        <li>• Linguagem formal e analítica</li>
                        <li>• Normas ABNT integral</li>
                        <li>• Citações no texto e lista de referências</li>
                        <li>• Estrutura lógica e sequencial</li>
                        <li>• Distinção clara entre ideias do autor e ideias de outros autores</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-900 text-xs">
                      Conforme orientação recebida
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50">
                    <td className="py-4 px-4 font-bold text-cyan-950 bg-cyan-50/30">
                      📘 Livro Autoral (Diamante)
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-700 leading-relaxed">
                      <ul className="space-y-1">
                        <li>• Folha de rosto</li>
                        <li>• Sumário detalhado</li>
                        <li>• Introdução geral</li>
                        <li>• Capítulos sequenciais com unidade temática</li>
                        <li>• Considerações finais</li>
                        <li>• Referências / bibliografia</li>
                        <li>• Elementos opcionais: dedicatória, agradecimentos, apêndices</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-600 leading-relaxed">
                      <ul className="space-y-1">
                        <li>• Formato consistente ao longo da obra</li>
                        <li>• Normas ABNT para referências e citações</li>
                        <li>• Padronização de títulos, subtítulos e corpo de texto</li>
                        <li>• Versão final em PDF formatado</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-900 text-xs">
                      Mínimo de 50 páginas de conteúdo efetivo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Registro Obrigatório nas Plataformas e Atualização de Versões (OSF & Zenodo) */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-sm">4</span>
              <h3 className="text-xl font-bold text-[#011049]">Registro Obrigatório nas Plataformas e Atualização de Versões</h3>
            </div>

            {/* Alerta de Obrigatoriedade Máxima */}
            <div className="p-5 bg-rose-50 border-2 border-rose-300 rounded-2xl flex flex-col sm:flex-row items-start gap-4 shadow-xs">
              <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-rose-950 uppercase tracking-wide">
                  ⚠️ Atenção Institucional Obrigatória
                </h4>
                <p className="text-xs text-rose-900 leading-relaxed">
                  <strong>NÃO recebemos trabalhos que não foram registrados.</strong> O estudante deve obrigatoriamente realizar o registro na plataforma correspondente (OSF para Bronze e Prata; Zenodo com DOI para Ouro) e anexar o link público oficial no ato da entrega final. Trabalhos sem comprovação de registro não avançam para homologação nem certificação.
                </p>
              </div>
            </div>

            {/* Conceito de Imutabilidade e Garantia de Autoria */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h4 className="font-bold text-[#011049] text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Como funciona a garantia de autoria e datação perpétua
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                A pessoa pode registrar, enviar para avaliação, corrigir e atualizar — <strong>MAS a forma de fazer depende da plataforma</strong>, e o ponto mais importante: <strong>a versão original fica guardada para sempre</strong> (é a garantia jurídica internacional de autoria e carimbo de data!). Ninguém &quot;apaga&quot; o que já foi registrado — o que se faz tecnicamente é acrescentar uma nova versão corrigida.
              </p>
            </div>

            {/* 📌 Regra Recomendada para a ESDHUBEM — Fluxo em 6 Passos */}
            <div className="border border-blue-200 bg-blue-50/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
                <span>📌</span>
                <h4>Fluxo Recomendado para o Estudante na ESDHUBEM</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Para evitar retrabalho ou registros de rascunhos desnecessários, o estudante segue este fluxo ordenado:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                <div className="bg-white p-3.5 rounded-xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="text-[11px] font-black text-blue-600 uppercase">Passo 1</div>
                  <div className="text-xs font-bold text-slate-800">Elaboração Interna</div>
                  <p className="text-[11px] text-slate-600">Escreve, pesquisa, corrige e ajusta internamente seu material.</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="text-[11px] font-black text-blue-600 uppercase">Passo 2</div>
                  <div className="text-xs font-bold text-slate-800">Envio para Avaliação</div>
                  <p className="text-[11px] text-slate-600">Envia para a ESDHUBEM avaliar (<strong>SEM registrar ainda</strong>).</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="text-[11px] font-black text-blue-600 uppercase">Passo 3</div>
                  <div className="text-xs font-bold text-slate-800">Devolutiva Docente</div>
                  <p className="text-[11px] text-slate-600">Recebe a devolutiva pedagógica e efetua os eventuais ajustes solicitados.</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="text-[11px] font-black text-blue-600 uppercase">Passo 4</div>
                  <div className="text-xs font-bold text-slate-800">Aprovação Final</div>
                  <p className="text-[11px] text-slate-600">Entrega a versão revisada e obtém a validação final da escola.</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/30 shadow-2xs space-y-1">
                  <div className="text-[11px] font-black text-emerald-700 uppercase">Passo 5 ✅</div>
                  <div className="text-xs font-bold text-emerald-950">Registro Oficial</div>
                  <p className="text-[11px] text-emerald-900"><strong>Aí sim:</strong> registra a versão aprovada no OSF/Zenodo e envia o link público.</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-purple-200 shadow-2xs space-y-1">
                  <div className="text-[11px] font-black text-purple-600 uppercase">Passo 6 (Se houver)</div>
                  <div className="text-xs font-bold text-purple-950">Correção Pós-Registro</div>
                  <p className="text-[11px] text-slate-600">Cria uma <strong>nova versão</strong> na plataforma e reenvia o novo link. A original fica preservada como histórico — prova de autoria!</p>
                </div>
              </div>
            </div>

            {/* 📋 Como funciona em cada plataforma */}
            <div className="space-y-6">
              <h4 className="font-bold text-[#011049] text-base flex items-center gap-2">
                <span>📋</span> Como funciona em cada plataforma
              </h4>

              {/* 🔹 OSF — Open Science Framework (Bronze e Prata) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-900">
                  <span>🔹</span>
                  <h5>OSF — Open Science Framework (Níveis Bronze e Prata)</h5>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-[#011049]">
                      <tr>
                        <th className="py-2.5 px-4 font-bold w-1/3">Situação</th>
                        <th className="py-2.5 px-4 font-bold">O que acontece</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Projeto antes de registrar</td>
                        <td className="py-3 px-4 text-emerald-800">
                          ✅ Pode enviar, corrigir, reenviar quantas vezes quiser — o OSF guarda histórico de versões automaticamente.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Após fazer o REGISTRO</td>
                        <td className="py-3 px-4 text-rose-800">
                          ❌ O arquivo fica imutável — não dá para alterar nem substituir silenciosamente. O registro é um &quot;congelamento&quot; daquele momento, garantindo data e autoria.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Para corrigir depois de registrado</td>
                        <td className="py-3 px-4 text-slate-700">
                          Cria-se uma atualização formal com justificativa, mas os arquivos originais permanecem. A nova versão é registrada separadamente.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <p>
                    ⚠️ <strong>Atenção importante:</strong> O OSF está em fase de transição — projetos deixarão de ser editáveis a partir de fevereiro/2027. Recomendamos orientar o estudante a fazer o registro após a aprovação final.
                  </p>
                </div>

                {/* Passo a Passo OSF (3 colunas) */}
                <div className="pt-2 space-y-2">
                  <h6 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Passo a Passo Prático no OSF (osf.io)</h6>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-[11px] font-black text-blue-700 uppercase">Etapa 1: Acesso &amp; Criação</span>
                      <ul className="text-xs text-slate-700 space-y-1.5">
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">1.</span><span>Acesse <a href="https://osf.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold underline">osf.io</a></span></li>
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">2.</span><span>Clique em <strong>Sign Up</strong> e crie sua conta com e-mail preferencial</span></li>
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">3.</span><span>Confirme seu endereço de e-mail clicando no link recebido</span></li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-[11px] font-black text-blue-700 uppercase">Etapa 2: Projeto &amp; Upload</span>
                      <ul className="text-xs text-slate-700 space-y-1.5">
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">4.</span><span>Faça login e clique em <strong>Create New Project</strong></span></li>
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">5.</span><span>Dê um título ao projeto (mesmo título do seu trabalho) e descrição breve</span></li>
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">6.</span><span>Salve o projeto → clique em <strong>Files</strong> → <strong>Upload File</strong> (formato PDF)</span></li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-[11px] font-black text-blue-700 uppercase">Etapa 3: Publicação &amp; Envio</span>
                      <ul className="text-xs text-slate-700 space-y-1.5">
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">7.</span><span>Selecione o arquivo final do seu trabalho</span></li>
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">8.</span><span>Após o envio, clique em <strong>Make Public</strong> — isso torna o registro acessível e datado</span></li>
                        <li className="flex items-start gap-1.5"><span className="font-bold text-blue-600">9.</span><span>Copie o link público da página do projeto e envie para a ESDHUBEM</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🔹 Zenodo + DOI (Nível Ouro) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-900">
                  <span>🔹</span>
                  <h5>Zenodo + DOI (Nível Ouro)</h5>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-[#011049]">
                      <tr>
                        <th className="py-2.5 px-4 font-bold w-1/3">Situação</th>
                        <th className="py-2.5 px-4 font-bold">O que acontece</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Antes de publicar</td>
                        <td className="py-3 px-4 text-emerald-800">
                          ✅ Salva como rascunho, edita e reenvia livremente.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Após publicado com DOI</td>
                        <td className="py-3 px-4 text-rose-800">
                          ❌ Não se substitui o arquivo antigo. Cria-se uma nova versão (ex: v1.1 corrigida a partir da v1.0).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-semibold text-slate-900">O que muda</td>
                        <td className="py-3 px-4 text-slate-700">
                          O DOI principal (conceitual) continua o mesmo e aponta sempre para a versão mais recente; cada versão recebe seu próprio identificador.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 font-semibold text-slate-900">O que permanece</td>
                        <td className="py-3 px-4 text-emerald-900 font-medium">
                          A versão original continua acessível, com data e conteúdo preservados.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 📝 Texto para inserir nas Diretrizes: Registro e Atualização de Versões */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-[#011049] text-base">
                Registro e Atualização de Versões
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                O trabalho deverá ser entregue devidamente registrado na plataforma correspondente ao nível escolhido. Entretanto, sabemos que ajustes podem ser necessários. Funciona assim:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Antes do registro público
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    O estudante pode elaborar, corrigir e aprimorar o texto quantas vezes desejar. Envia para avaliação, recebe orientações, faz ajustes — somente após a aprovação final é realizado o registro público, garantindo que o material publicado represente a versão definitiva.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                    Após o registro — posso atualizar?
                  </h5>
                  <div className="text-xs text-slate-600 leading-relaxed space-y-1.5">
                    <p>
                      Sim! Nenhuma correção posterior é perdida, mas também não se apaga o que já foi registrado. O sistema funciona por versões:
                    </p>
                    <p>
                      <strong>No OSF:</strong> O projeto pode receber versões atualizadas antes do registro público. Após registrado, qualquer alteração gera um histórico transparente — a versão original permanece visível e datada, preservando a autoria.
                    </p>
                    <p>
                      <strong>No Zenodo:</strong> Publicou e precisa corrigir? Cria-se uma nova versão (ex: v1.1 corrigida). O identificador principal continua o mesmo, apontando sempre para a versão mais recente, e cada versão fica preservada com seu próprio registro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Como proceder se precisar corrigir após já ter registrado */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <h5 className="font-bold text-slate-900 text-xs">
                  Como proceder se precisar corrigir após já ter registrado:
                </h5>
                <ol className="text-xs text-slate-700 space-y-1.5 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Acesse seu projeto/registro na plataforma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Faça upload do arquivo corrigido como nova versão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Atualize a justificativa descrevendo o que foi ajustado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">4.</span>
                    <span>Envie o novo link para a ESDHUBEM</span>
                  </li>
                </ol>
                <p className="text-[11px] text-slate-600 italic pt-1">
                  Ambas as versões ficarão acessíveis — isso fortalece a transparência e a autoria, não a enfraquece.
                </p>
              </div>

              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <p>
                  ✅ <strong>Resumo prático:</strong> Registre a versão aprovada. Se corrigir depois, crie uma nova versão na plataforma e nos envie o link atualizado. Nada é apagado — tudo é documentado.
                </p>
              </div>
            </div>

            {/* 🎯 Resumo para você / Perguntas & Respostas */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#011049] text-base flex items-center gap-2">
                <span>🎯</span> Resumo Prático de Perguntas &amp; Respostas
              </h4>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[#011049]">
                    <tr>
                      <th className="py-2.5 px-4 font-bold w-1/3">Pergunta</th>
                      <th className="py-2.5 px-4 font-bold">Resposta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Aceito sem registro?</td>
                      <td className="py-3 px-4 font-bold text-rose-700">❌ Não — só recebemos com registro concluído</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Pode registrar e depois corrigir?</td>
                      <td className="py-3 px-4 font-medium text-emerald-800">✅ Sim, criando nova versão — original fica guardada</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">A versão antiga some?</td>
                      <td className="py-3 px-4 text-slate-700">❌ Não — permanece como histórico, isso é garantia de autoria</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">O DOI muda?</td>
                      <td className="py-3 px-4 text-slate-700">O principal não muda; cada versão ganha um identificador específico</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Melhor prática</td>
                      <td className="py-3 px-4 font-bold text-blue-900">Só registrar após aprovação final para evitar versões desnecessárias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 5. Uso de Inteligência Artificial — Declaração e Limites */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-sm">5</span>
              <h3 className="text-xl font-bold text-[#011049]">Uso de Inteligência Artificial — Declaração e Limites</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              A ferramenta de Inteligência Artificial é vista como apoio à produção, nunca como substituta do pensamento e da criação humana. A responsabilidade sobre todo o conteúdo publicado é sempre do autor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Em quais etapas pode ser usada */}
              <div className="bg-emerald-50/40 border border-emerald-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Em quais etapas pode ser usada?
                </h4>
                <ul className="text-xs text-emerald-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Organização de ideias e estruturação de esboços</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Revisão textual e sugestões de redação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Verificação de coerência e clareza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Sugestões de referências e fontes (sempre conferir!)</span>
                  </li>
                </ul>
              </div>

              {/* O que NÃO pode ser feito */}
              <div className="bg-rose-50/40 border border-rose-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  O que NÃO pode ser feito sem verificação integral?
                </h4>
                <ul className="text-xs text-rose-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Apresentar conteúdos gerados sem leitura, confirmação e edição</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Usar dados, citações ou referências sem verificação na fonte original</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Transferir a autoria para a ferramenta ou omitir sua participação</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modelos de Declaração de Uso de IA */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-[#011049] text-base">Modelo de Declaração de Uso de IA</h4>
              <p className="text-xs text-slate-600">
                Insira no final do trabalho (antes das referências) um texto conforme o exemplo que melhor se aplica:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <Check className="w-4 h-4" />
                    ✅ Exemplo 1 — Uso parcial:
                  </div>
                  <p className="text-xs text-slate-700 italic bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
                    &quot;Declaro que utilizei ferramenta de Inteligência Artificial para apoio na organização de ideias e revisão de redação. Todo o conteúdo foi lido, verificado e desenvolvido por mim. A versão final é de minha autoria e responsabilidade integral.&quot;
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700">
                    <Check className="w-4 h-4" />
                    ✅ Exemplo 2 — Uso estrutural:
                  </div>
                  <p className="text-xs text-slate-700 italic bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
                    &quot;Declaro que utilizei ferramenta de Inteligência Artificial para elaboração de esboço e estruturação de seções. O desenvolvimento, análise e redação final foram realizados por mim. Assumo total responsabilidade pelo texto apresentado.&quot;
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Check className="w-4 h-4" />
                    ✅ Exemplo 3 — Não utilizei:
                  </div>
                  <p className="text-xs text-slate-700 italic bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
                    &quot;Declaro que não utilizei ferramentas de Inteligência Artificial na elaboração deste trabalho.&quot;
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  ⚠️ <strong>A não declaração quando houver uso de IA pode impedir ou cancelar a publicação.</strong> Se tiver dúvida sobre como declarar, entre em contato antes do envio.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Sobre Horas Complementares e Alinhamento Temático */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-sm">6</span>
              <h3 className="text-xl font-bold text-[#011049]">Sobre Horas Complementares e Alinhamento Temático</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Os eixos temáticos definidos pela ESDHUBEM foram estruturados com base nas áreas de conhecimento da CAPES, visando manter uniformidade, coerência e um norteamento conceitual comum aos trabalhos. Este alinhamento temático não significa certificação ou validação oficial pela CAPES nem confere status de instituição de ensino superior à ESDHUBEM — trata-se de referência organizacional.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h4 className="font-bold text-[#011049] text-base flex items-center gap-2">
                <Landmark className="w-5 h-5 text-blue-700" />
                Validação de horas complementares
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                O reconhecimento de horas complementares é competência de cada instituição de ensino onde o estudante estiver matriculado. Recomendamos:
              </p>
              <ul className="text-xs text-slate-700 space-y-2 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Consultar previamente a secretaria ou coordenação do seu curso sobre os requisitos, documentos aceitos e critérios de validação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Se necessário, solicitar à ESDHUBEM carta de apresentação, declaração de participação ou detalhamento da carga horária para entrega à sua instituição</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Cada instituição possui suas próprias regras — a ESDHUBEM fornece os documentos comprobatórios, mas a decisão de validação cabe exclusivamente à instituição de origem do estudante</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 7. Livro Autoral — Formato e Contagem de Páginas */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-sm">7</span>
              <h3 className="text-xl font-bold text-[#011049]">Livro Autoral — Formato e Contagem de Páginas</h3>
            </div>

            {/* Extensão mínima */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h4 className="font-bold text-[#011049] text-base flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-700" />
                Extensão mínima
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                O trabalho deve conter no mínimo 50 páginas de conteúdo efetivo. Não são contabilizadas neste mínimo:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400">•</span> Capa e contracapa
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400">•</span> Folha de rosto
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400">•</span> Sumário
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400">•</span> Dedicatória, agradecimentos, epígrafe
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400">•</span> Lista de tabelas, figuras ou abreviações
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-400">•</span> Referências bibliográficas
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200 sm:col-span-2 md:col-span-1">
                  <span className="text-slate-400">•</span> Apêndices e anexos
                </div>
              </div>
            </div>

            {/* Orientações de formatação sugeridas */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#011049] text-base">Orientações de formatação sugeridas</h4>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[#011049]">
                    <tr>
                      <th className="py-3 px-4 font-bold w-1/3">Aspecto</th>
                      <th className="py-3 px-4 font-bold">Recomendação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Formato de página</td>
                      <td className="py-3 px-4">A4 (210 × 297 mm)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Margens</td>
                      <td className="py-3 px-4">3 cm (superior e esquerda) / 2 cm (inferior e direita)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Fonte</td>
                      <td className="py-3 px-4">Times New Roman ou Arial, tamanho 12</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Espaçamento entre linhas</td>
                      <td className="py-3 px-4">1,5</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Parágrafo</td>
                      <td className="py-3 px-4">Recuo de 1,25 cm na primeira linha</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Numeração de páginas</td>
                      <td className="py-3 px-4">Canto superior direito, a partir da primeira página de conteúdo</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Títulos de capítulo</td>
                      <td className="py-3 px-4">Iniciando em página nova, em destaque</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">Arquivo final</td>
                      <td className="py-3 px-4 font-medium text-blue-700">PDF, pronto para publicação e eventual impressão</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-2">
              <p className="leading-relaxed">
                A qualidade do conteúdo prevalece sobre a quantidade de páginas. O texto deve apresentar coerência, desenvolvimento completo das ideias e proposta autoral definida.
              </p>
              <p className="leading-relaxed">
                Após aprovação, o autor orienta-se sobre o registro oficial junto à Fundação Biblioteca Nacional (EDA/FBN), procedimento pessoal e intransferível.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
