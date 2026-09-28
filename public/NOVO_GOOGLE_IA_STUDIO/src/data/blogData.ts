export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string; // HTML ou string para renderizar
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  videoUrl?: string;
  cta?: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'tcc-certificados-autoridade-publicacao-cientifica',
    title: 'Seu TCC e Certificados Vão Para a Gaveta?',
    subtitle: 'Como Transformar Horas de Estudo em Autoridade Profissional e Publicação Científica Real',
    excerpt: 'Você já parou para pensar em quantas horas passou assistindo a videoaulas passivas, fazendo provinhas automáticas e guardando certificados em PDF que ninguém nunca vai ler? Descubra como transformar suas horas de estudo em portfólio público, autoridade profissional e publicação científica real com código DOI permanente.',
    videoUrl: 'https://odysee.com/$/embed/@esdhubem:a/apresentacao_esdhubem:2',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    author: 'Coordenação Pedagógica ESDHUBEM',
    date: '27 de Setembro, 2026',
    category: 'Educação & Carreira',
    readTime: '4 min de leitura',
    content: `
      <p class="text-lg text-slate-700 leading-relaxed font-normal mb-6">
        Você já parou para pensar em quantas horas passou assistindo a videoaulas passivas, fazendo provinhas automáticas e guardando certificados em PDF que ninguém nunca vai ler?
      </p>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A maioria dos trabalhos acadêmicos e cursos livres no Brasil termina do mesmo jeito: arquivados em uma pasta esquecida do computador. Mas e se o tempo que você dedica aos estudos pudesse se transformar em <strong>portfólio público</strong>, <strong>autoridade profissional</strong> e um <strong>registro científico permanente (DOI)</strong>?
      </p>

      <div class="bg-amber-50/70 border-l-4 border-amber-500 p-5 rounded-r-2xl my-8">
        <p class="text-slate-800 font-medium leading-relaxed">
          O mercado de trabalho, as universidades, os concursos públicos e o ENEM exigem cada vez mais pessoas capazes de pensar com clareza, analisar criticamente e comunicar ideias com autoridade. Ficar apenas assistindo aulas e acumulando papéis não desenvolve essas habilidades.
        </p>
      </div>

      <h3 class="text-2xl font-black text-[#182333] mt-10 mb-4 tracking-tight">
        A ESDHUBEM: O Antídoto para o Conhecimento Engavetado
      </h3>

      <p class="text-base text-slate-700 leading-relaxed mb-4">
        Foi para quebrar esse ciclo burocrático que nasceu a <strong>ESDHUBEM (Escola de Desenvolvimento Humano e Bem-estar)</strong>: a primeira escola de cursos livres do Brasil que une desenvolvimento humano, escrita autoral e a possibilidade de conquistar reconhecimento acadêmico real.
      </p>

      <p class="text-base text-slate-700 leading-relaxed mb-4">
        Nossos cursos livres são válidos para horas complementares em todo o Brasil, mas entregam algo que nenhuma outra plataforma oferece: a oportunidade de você aprender a ler, refletir e escrever com autonomia, transformando seu aprendizado em legado.
      </p>

      <p class="text-base text-slate-700 leading-relaxed mb-8">
        Na ESDHUBEM, nós ajudamos você a desenvolver uma escrita sem burocracia. Você aprende a estruturar seus conhecimentos em artigos práticos, ensaios conceituais ou relatos de experiência.
      </p>

      <h3 class="text-2xl font-black text-[#182333] mt-10 mb-4 tracking-tight">
        Escala de Méritos Progressiva: Escolha até onde levar seu trabalho
      </h3>

      <p class="text-slate-600 mb-6 text-sm">
        Ao concluir o curso, você decide o quão longe quer levar o seu trabalho através da nossa Escala de Méritos Progressiva:
      </p>

      <div class="space-y-4 my-8">
        <div class="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 flex items-start gap-4">
          <span class="text-2xl shrink-0">🥉</span>
          <div>
            <h4 class="font-bold text-slate-900 text-base">Nível Bronze (Fixação)</h4>
            <p class="text-slate-700 text-sm mt-1 leading-relaxed">
              Assista às aulas, responda aos questionários de forma assertiva e baixe seu certificado de conclusão diretamente na plataforma para enriquecer seu currículo e redes sociais.
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <span class="text-2xl shrink-0">🥈</span>
          <div>
            <h4 class="font-bold text-slate-900 text-base">Nível Prata (Portfólio & Autoridade)</h4>
            <p class="text-slate-700 text-sm mt-1 leading-relaxed">
              Escreva um artigo prático ou estudo de caso e publique no Blog Oficial da ESDHUBEM, gerando autoridade para o seu nome e criando um link público para enriquecer seu LinkedIn.
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-yellow-50/60 border border-yellow-300 flex items-start gap-4">
          <span class="text-2xl shrink-0">🥇</span>
          <div>
            <h4 class="font-bold text-slate-900 text-base">Nível Ouro (Pesquisa & Código DOI)</h4>
            <p class="text-slate-700 text-sm mt-1 leading-relaxed">
              Seja guiado para registrar seu manuscrito em repositórios internacionais (como o Zenodo), garantindo um código DOI permanente — um identificador digital científico universal de autoria.
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-300 flex items-start gap-4">
          <span class="text-2xl shrink-0">💎</span>
          <div>
            <h4 class="font-bold text-slate-900 text-base">Nível Diamante (Excelência Aplicada)</h4>
            <p class="text-slate-700 text-sm mt-1 leading-relaxed">
              Conquiste a aprovação do seu trabalho em periódicos de impacto intermediário e ganhe destaque na vitrine oficial da escola.
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-[#182333] mt-10 mb-4 tracking-tight">
        Para quem é a ESDHUBEM?
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h4 class="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            Estudantes Universitários
          </h4>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Que precisam de horas complementares e querem se preparar com antecedência para o TCC ou pós-graduação.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h4 class="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            Concurseiros e Candidatos ao ENEM
          </h4>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Que buscam dominar a escrita dissertativa, a interpretação de texto e a estruturação lógica de argumentos.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h4 class="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            Profissionais, Terapeutas Integrativos e Holísticos
          </h4>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Que desejam transformar seus atendimentos e vivências de mercado em autoridade publicada.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h4 class="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            Buscadores de Autoconhecimento
          </h4>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Que querem expandir a autoconsciência, compreender o mundo ao redor e se expressar com clareza através da escrita.
          </p>
        </div>
      </div>

      <p class="text-base text-slate-800 font-semibold leading-relaxed my-8 bg-slate-100/90 p-5 rounded-2xl border border-slate-200 text-center">
        Não seja apenas um espectador no seu próprio currículo. Chegou a hora de sair do piloto automático e construir a autoridade que o seu conhecimento merece.
      </p>
    `,
    cta: {
      title: 'Comece hoje mesmo sua jornada na ESDHUBEM',
      subtitle: 'Transforme seu tempo de estudo em publicação real e autoridade profissional!',
      buttonText: '👉 Clique Aqui e Garanta Seu Acesso Agora'
    }
  },
  {
    id: 'o-poder-do-desenvolvimento-pessoal',
    title: 'O Poder do Desenvolvimento Pessoal na Carreira',
    excerpt: 'Descubra como investir em autoconhecimento pode transformar não apenas a sua vida pessoal, mas também alavancar os seus resultados profissionais.',
    content: `
      <p class="mb-4">O desenvolvimento pessoal é uma jornada contínua de autoconhecimento e aprimoramento de habilidades. Muitas vezes, pensamos que o crescimento profissional está ligado apenas a diplomas e cursos técnicos, mas a inteligência emocional e a capacidade de se relacionar são igualmente cruciais.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4 text-[#182333]">Por que o Autoconhecimento Importa?</h3>
      <p class="mb-4">Quando você entende suas próprias emoções, gatilhos e pontos fortes, toma decisões mais assertivas. Profissionais que investem no desenvolvimento humano conseguem lidar melhor com a pressão, lideram equipes com empatia e constroem um ambiente de trabalho mais saudável.</p>
      
      <p class="mb-4">No cenário atual, as empresas procuram por <em>soft skills</em> (habilidades comportamentais). Um colaborador que se comunica bem, tem resiliência e pensamento ético, destaca-se rapidamente.</p>

      <h3 class="text-xl font-bold mt-8 mb-4 text-[#182333]">Como começar?</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Autopercepção:</strong> Tire alguns minutos do seu dia para refletir sobre suas atitudes.</li>
        <li><strong>Comunicação Empática:</strong> Escute ativamente as pessoas ao seu redor.</li>
        <li><strong>Cursos Livres:</strong> A ESDHUBEM oferece diversas formações que aceleram esse processo, como Inteligência Emocional e Comunicação Assertiva.</li>
      </ul>

      <p>Invista em você. A maior transformação sempre acontece de dentro para fora.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    author: 'Equipe ESDHUBEM',
    date: '24 de Outubro, 2026',
    category: 'Desenvolvimento Pessoal',
    readTime: '3 min de leitura'
  },
  {
    id: 'lideranca-humanizada',
    title: 'Liderança Humanizada: O Futuro das Organizações',
    excerpt: 'Entenda por que empresas modernas estão abandonando a gestão autoritária em favor de líderes que valorizam a empatia e a conexão humana.',
    content: `
      <p class="mb-4">O modelo tradicional de liderança, focado puramente em números e cobranças, está ultrapassado. A liderança humanizada coloca as pessoas no centro da estratégia empresarial.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4 text-[#182333]">O que é um Líder Humanizado?</h3>
      <p class="mb-4">É aquele que enxerga seus colaboradores não como engrenagens, mas como seres humanos complexos. Ele entende que a motivação e a produtividade estão diretamente ligadas ao bem-estar mental e emocional da equipe.</p>
      
      <p>Para se aprofundar nesse tema, recomendamos explorar nossa área de Treinamentos Corporativos, focada em transformar gestores em verdadeiros líderes inspiradores.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    author: 'Equipe ESDHUBEM',
    date: '15 de Outubro, 2026',
    category: 'Gestão e Liderança',
    readTime: '2 min de leitura'
  }
];
