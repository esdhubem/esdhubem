import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Feather,
  BookOpen
} from 'lucide-react';

interface CartaAbertaPageProps {
  onBackToHome: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const CartaAbertaPage: React.FC<CartaAbertaPageProps> = ({
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
            <span className="text-[#FFC72C] font-semibold">Carta Aberta</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FFC72C]" />
            <span>ESDHUBEM • Mensagem Institucional</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Feather className="w-4 h-4" />
            <span>Mensagem Aberta à Comunidade</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            CARTA ABERTA — ESDHUBEM
          </h1>

          <p className="text-[#FFC72C] text-lg sm:text-xl font-semibold leading-relaxed">
            Verdade, respeito, proteção à autoria e o nosso compromisso com quem confia na escola.
          </p>
        </div>
      </header>

      {/* Main Editorial Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Saudação e Introdução */}
        <section className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
          <p className="text-xl sm:text-2xl font-bold text-slate-900">
            Olá, tudo bem?
          </p>

          <p>
            Hoje quero falar de forma clara e direta sobre perguntas frequentes, verdade, respeito e proteção.
          </p>

          <p>
            A ESDHUBEM nasceu de uma ideia simples: que cada pessoa tem uma voz, um conhecimento e uma história que merecem ser ouvidos, valorizados e compartilhados. E porque fazemos algo diferente — porque damos espaço à escrita, à autoria e ao pensamento próprio — precisamos deixar claro o posicionamento da escola, assim como os direitos e responsabilidades dos alunos e de todos que nos acompanham.
          </p>
        </section>

        {/* Posicionamento e Finalidade */}
        <section className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-normal border-t border-slate-200 pt-8">
          <p>
            A ESDHUBEM não se posiciona como instituição de produção acadêmica <em>stricto sensu</em>. Ainda que nos níveis avançados busquemos seguir as boas práticas de escrita científica e publicação com identificação digital (DOI), não nos apresentamos como entidade de certificação científica oficial. Nosso propósito é o treinamento e o desenvolvimento de diferentes formas de escrita, voltadas para as mais diversas finalidades de estudo e crescimento de cada aluno.
          </p>

          <p>
            Respeitamos integralmente a autoria de cada participante. O envio do texto por e-mail à escola, antes da publicação, já funciona como prova de recebimento: ficam registrados nome, data, hora e o arquivo original — tudo isso é garantia de segurança para você.
          </p>

          <p>
            Pode acontecer de a escola solicitar ajustes no texto. Caso as alterações não sejam realizadas, o trabalho poderá não ser publicado. Nesse caso, o valor pago será devolvido integralmente ou o aluno poderá receber o certificado Bronze, conforme combinado.
          </p>
        </section>

        {/* Ética e Critérios de Publicação */}
        <section className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-normal border-t border-slate-200 pt-8">
          <p>
            Exigimos de todos: ética, verdade e respeito. O conteúdo deve estar alinhado com o curso realizado. Não publicaremos notícias falsas, textos antiéticos, contrários à ciência, teorias conspiratórias, manifestações políticas com nomes de figuras públicas, ofensas, acusações ou afirmações sem comprovação. Aqui só publicamos com permissão expressa do autor, e a publicação sempre virá acompanhada de indicação do nível e do certificado correspondente.
          </p>
        </section>

        {/* Sobre Disponibilização para Venda */}
        <section className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-normal border-t border-slate-200 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              📖 Sobre Disponibilização para Venda
            </h2>
          </div>

          <p>
            Também é preciso esclarecer: caso você queira disponibilizar seu livro ou obra para venda ao público, a <strong>ESDHUBEM estabelece uma parceria como afiliado por meio da plataforma Hotmart</strong>.
          </p>

          <p className="font-semibold text-slate-900">
            Por que fazemos assim?
          </p>

          <div className="space-y-3.5 pt-1">
            <div className="flex items-start gap-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Você continua sendo o autor e o titular dos direitos</strong> — a parceria não muda a propriedade da obra;
              </div>
            </div>

            <div className="flex items-start gap-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>A Hotmart cuida de toda a estrutura:</strong> pagamento, processamento, entrega, segurança digital e relatórios;
              </div>
            </div>

            <div className="flex items-start gap-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>A parceria permite que a escola divulgue seu trabalho</strong> para nossa rede de contatos, ampliando sua visibilidade;
              </div>
            </div>

            <div className="flex items-start gap-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Cada parte recebe a participação combinada sobre as vendas</strong> — você como autor, a escola como parceira de divulgação;
              </div>
            </div>

            <div className="flex items-start gap-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Tudo com transparência:</strong> os valores, as porcentagens e as condições são combinadas previamente, de forma clara e acordada;
              </div>
            </div>

            <div className="flex items-start gap-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Você pode optar por não vender:</strong> a publicação gratuita no blog ou repositório não exige parceria de venda — isso é uma escolha sua, quando quiser avançar para comercialização.
              </div>
            </div>
          </div>

          <p className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-sm sm:text-base leading-relaxed mt-4">
            <strong>Em resumo:</strong> a parceria existe para dar estrutura, alcance e suporte à sua obra quando você decidir disponibilizá-la comercialmente. A obra continua sendo sua — nós apenas abrimos caminho para que mais pessoas possam conhecê-la.
          </p>
        </section>

        {/* Importância da Escrita */}
        <section className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-normal border-t border-slate-200 pt-8">
          <p>
            Acreditamos que a escrita é um processo essencial do desenvolvimento humano — e que todos temos o direito e o dever de aprender a escrever. E para isso, é preciso praticar.
          </p>

          <p>
            Muitos chegam ao final da faculdade e enfrentam o Trabalho de Conclusão de Curso sem o hábito de escrever, e por isso passam por grandes dificuldades. Aqui na ESDHUBEM, oferecemos a oportunidade de praticar durante todo o percurso: escrever vários textos, desenvolver a capacidade de expressão e sentir a satisfação de ver seu trabalho publicado. O conteúdo gerado pode integrar seu currículo Lattes, alimentar seu blog, preparar você para concursos ou para o ENEM, e até ajudar a realizar o sonho de escrever um livro.
          </p>

          <p className="font-semibold text-slate-900 text-lg sm:text-xl">
            Mais do que concluir um curso livre a distância, aqui você vai além: transforma aprendizado em expressão.
          </p>
        </section>

        {/* Como nos protegemos e como protegemos você */}
        <section className="space-y-6 border-t border-slate-200 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              COMO NÓS NOS PROTEGEMOS E COMO PROTEGEMOS VOCÊ
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Temos tudo organizado, documentado e transparente:
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Seu texto é sempre seu.</strong> Não nos apropriamos de nada. Você autoriza a divulgação e continua sendo o titular da obra — por lei, por termo e por princípio.
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Cada envio fica registrado.</strong> Nome, data, hora e comprovante de recebimento. Isso é prova, não promessa.
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Cada um responde pelo que cria.</strong> A autoria é sua, e a responsabilidade sobre o conteúdo também. Isso protege você e protege a escola.
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Nossa base legal é pública.</strong> Seguimos o Decreto nº 5.154/2004, a Portaria nº 008/2002 e a Lei de Diretrizes e Bases da Educação. Qualquer pessoa pode consultar.
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Nada é escondido.</strong> Deixamos claro desde o início: não somos pós-graduação, não garantimos aceitação em periódico e cada instituição de ensino tem suas próprias regras.
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <span className="text-emerald-600 font-bold shrink-0 text-xl">✅</span>
              <div>
                <strong>Você pode pedir para retirar seu texto.</strong> A qualquer momento, sem burocracia. Solicitou, nós removemos.
              </div>
            </div>
          </div>
        </section>

        {/* Conclusão e Assinatura */}
        <section className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-normal border-t border-slate-200 pt-8">
          <p>
            A ESDHUBEM não é perfeita. Mas somos íntegros. Valorizamos cada pessoa que confia em nós. E continuaremos dando espaço a vozes que muitas vezes não são ouvidas.
          </p>

          <p className="font-semibold text-slate-900 text-lg sm:text-xl">
            Aqui, você tem o direito de criar. Você tem o direito de publicar. E nós vamos proteger isso.
          </p>

          <p>
            Conte com a ESDHUBEM. Conte com a verdade. E siga escrevendo a sua história.
          </p>

          <div className="pt-4 space-y-1">
            <p className="font-bold text-slate-900 text-lg">
              Fica com Deus. Até a próxima.
            </p>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Equipe ESDHUBEM • Práticas de Bem-Estar & Educação Livre
            </p>
          </div>

          {/* Links e Botão de Ação */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <button
              onClick={() => onNavigate ? onNavigate('perguntas-frequentes') : undefined}
              className="text-sm font-semibold text-slate-600 hover:text-amber-600 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ver Perguntas Frequentes (FAQ)</span>
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
