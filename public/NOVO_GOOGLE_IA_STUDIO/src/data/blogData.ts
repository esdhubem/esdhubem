export interface AuthorDetails {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  profileUrl?: string;
  lattesUrl?: string;
  orcidUrl?: string;
}

export interface SourceReference {
  title: string;
  url?: string;
  author?: string;
  institution?: string;
  date?: string;
}

export interface RelatedPostRef {
  id: string;
  title: string;
  category: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string; // HTML ou string para renderizar
  imageUrl: string;
  imageCaption?: string;
  imageAlt?: string;
  author: string;
  authorDetails?: AuthorDetails;
  date: string;
  updatedDate?: string;
  datePublishedIso?: string;
  dateModifiedIso?: string;
  category: string;
  categorySlug?: string;
  topics?: string[];
  readTime: string;
  videoUrl?: string;
  tableOfContents?: TocItem[];
  editorialNote?: string;
  sources?: SourceReference[];
  relatedPosts?: RelatedPostRef[];
  faq?: Array<{ question: string; answer: string }>;
  cta?: {
    title: string;
    subtitle: string;
    buttonText: string;
    link?: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'como-escolher-um-curso-livre-para-melhorar-sua-carreira',
    title: 'Como escolher um curso livre para melhorar sua carreira',
    subtitle: 'Critérios práticos, comparação de opções e como transformar o aprendizado em resultados reais e portfólio.',
    excerpt: 'Veja critérios práticos para escolher um curso livre, comparar opções e avaliar se uma formação atende aos seus objetivos.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Estudar pode ser uma forma de desenvolver conhecimentos e competências para diferentes objetivos profissionais.',
    imageAlt: 'Pessoa estudando em um curso online com notebook e bloco de anotações',
    author: 'Prof.ª Silviane Silvério',
    authorDetails: {
      name: 'Prof.ª Silviane Silvério',
      role: 'Coordenação Pedagógica & Pesquisa ESDHUBEM',
      bio: 'Biomédica, pós-graduada em Práticas Integrativas e Complementares em Saúde, pesquisadora em metodologias de ensino, desenvolvimento humano e escrita autoral.',
      profileUrl: 'corpo-docente',
      lattesUrl: 'https://lattes.cnpq.br/7481458793724724',
      orcidUrl: 'https://orcid.org/0000-0001-6311-1195'
    },
    date: '3 de outubro de 2026',
    updatedDate: '3 de outubro de 2026',
    datePublishedIso: '2026-10-03',
    dateModifiedIso: '2026-10-03',
    category: 'Carreira e cursos livres',
    categorySlug: 'carreira-e-cursos-livres',
    topics: ['Educação', 'Aprendizagem', 'Autoria', 'Desenvolvimento Profissional', 'Cursos Livres'],
    readTime: '6 minutos',
    tableOfContents: [
      { id: 'objetivo', label: '1. Defina seu objetivo' },
      { id: 'comparacao', label: '2. Compare os cursos' },
      { id: 'qualidade', label: '3. Analise a qualidade do material' },
      { id: 'autoria-portfolio', label: '4. Da aprendizagem à autoria e portfólio' },
      { id: 'conclusao', label: 'Conclusão' }
    ],
    editorialNote: 'Este conteúdo tem finalidade educativa e informativa. Informações sobre cursos, certificados, carreira ou formação devem ser avaliadas de acordo com o contexto de cada leitor.',
    sources: [
      {
        title: 'Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/96, art. 42 - Educação Profissional e Cursos Livres)',
        author: 'Presidência da República',
        institution: 'Governo Federal do Brasil',
        date: '1996',
        url: 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm'
      },
      {
        title: 'Diretrizes Curriculares Nacionais para as Atividades Complementares no Ensino Superior',
        author: 'Conselho Nacional de Educação (CNE/CES)',
        institution: 'Ministério da Educação (MEC)',
        date: '2001',
        url: 'https://www.gov.br/mec/pt-br'
      },
      {
        title: 'Diretrizes Pedagógicas e Escala de Autoria ESDHUBEM',
        author: 'Coordenação Pedagógica',
        institution: 'ESDHUBEM - Educação Integral',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=diretrizes-pedagogicas'
      }
    ],
    relatedPosts: [
      {
        id: 'transforme-seu-aprendizado-em-autoridade-e-publicacao',
        title: 'Seu conhecimento não precisa ficar guardado numa gaveta.',
        category: 'Autoria & Publicação'
      },
      {
        id: 'tcc-certificados-autoridade-publicacao-cientifica',
        title: 'Seu TCC e Certificados Vão Para a Gaveta?',
        category: 'Educação & Carreira'
      },
      {
        id: 'o-poder-do-desenvolvimento-pessoal',
        title: 'O Poder do Desenvolvimento Pessoal na Carreira',
        category: 'Desenvolvimento Pessoal'
      }
    ],
    content: `
      <p class="text-lg text-slate-800 leading-relaxed font-normal mb-6">
        Escolher um curso livre pode contribuir para o desenvolvimento profissional quando o conteúdo, a carga horária e os objetivos da formação estão alinhados às necessidades do estudante.
      </p>

      <h2 id="objetivo" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        1. Defina seu objetivo
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Antes de se matricular, procure definir o que deseja aprender e como pretende utilizar esse conhecimento. Você busca atualização rápida, cumprimento de horas complementares na faculdade, desenvolvimento de competências comportamentais (<em>soft skills</em>) ou ferramentas para produzir e publicar trabalhos autorais?
      </p>

      <h2 id="comparacao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        2. Compare os cursos
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Alguns critérios essenciais podem ajudar na comparação entre diferentes formações disponíveis no mercado educacional:
      </p>

      <div class="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
        <table class="w-full text-left border-collapse text-sm">
          <caption class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-b border-slate-200 text-left">
            Critérios para comparar cursos livres
          </caption>
          <thead>
            <tr class="bg-slate-100/80 text-slate-900 border-b border-slate-200">
              <th scope="col" class="py-3 px-5 font-bold">Critério</th>
              <th scope="col" class="py-3 px-5 font-bold">O que verificar</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Conteúdo</th>
              <td class="py-3.5 px-5">Programa, módulos, ementa clara e atualização do material didático.</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Prática</th>
              <td class="py-3.5 px-5">Exercícios reflexivos, projetos aplicados, exemplos reais e estímulo à escrita.</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Suporte</th>
              <td class="py-3.5 px-5">Canais diretos de atendimento, secretaria ativa e orientação ao aluno.</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Certificado</th>
              <td class="py-3.5 px-5">Critérios transparentes para emissão, amparo legal (Lei 9.394/96), QR Code antifraude e validação pública.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="qualidade" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        3. Analise a qualidade do material
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Procure informações sobre o corpo docente, a autoria, as fontes bibliográficas utilizadas e os objetivos de cada formação. Um curso de qualidade oferece referências sólidas e estimula o pensamento crítico, evitando fórmulas prontas ou promessas irreais.
      </p>

      <h2 id="autoria-portfolio" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        4. Da aprendizagem à autoria e portfólio
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Na ESDHUBEM, incentivamos que o curso livre vá além do consumo passivo de aulas. Por meio da nossa <a href="/esdhubem/?page=diretrizes-pedagogicas" class="text-amber-600 font-bold hover:underline">proposta pedagógica de autoria</a>, os estudantes têm a oportunidade de transformar o aprendizado em artigos, ensaios e produções com registro formal, construindo um portfólio profissional verificável.
      </p>

      <h2 id="conclusao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        Conclusão
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A escolha de um curso livre é mais assertiva quando o estudante compara objetivos, conteúdo, atividades, suporte e dados sobre a instituição. Investir em conhecimento bem fundamentado é o caminho mais seguro para enriquecer o currículo e abrir novas portas profissionais.
      </p>
    `,
    cta: {
      title: 'Conheça a Grade de Cursos Livres da ESDHUBEM',
      subtitle: 'Formações com metodologia ativa, emissão segura de certificados e oportunidade de desenvolver sua autoria.',
      buttonText: '👉 Explorar Catálogo de Cursos',
      link: 'categorias'
    }
  },
  {
    id: 'transforme-seu-aprendizado-em-autoridade-e-publicacao',
    title: 'Seu conhecimento não precisa ficar guardado numa gaveta.',
    subtitle: 'Transforme seu aprendizado em autoridade, publicação real e portfólio.',
    excerpt: 'A maioria dos cursos termina com um PDF arquivado. Aqui você pode ir além: escrever, publicar e construir uma trajetória visível. Nossos cursos livres são válidos para horas complementares em todo o Brasil.',
    videoUrl: 'https://odysee.com/$/embed/@esdhubem:a/apresentacao_esdhubem:2?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'A autoria e a produção textual como formas de consolidação do conhecimento.',
    imageAlt: 'Pessoa escrevendo com caneta em caderno sobre mesa de trabalho',
    author: 'ESDHUBEM • Desenvolvimento Humano & Autoria',
    authorDetails: {
      name: 'Equipe Pedagógica ESDHUBEM',
      role: 'Desenvolvimento Humano, Autoria & Publicação',
      bio: 'Corpo editorial dedicado à formação integral, valorização do pensamento autoral e disseminação do conhecimento livre.',
      profileUrl: 'sobre-nos'
    },
    date: '02 de Outubro, 2026',
    updatedDate: '02 de Outubro, 2026',
    datePublishedIso: '2026-10-02',
    dateModifiedIso: '2026-10-02',
    category: 'Autoria & Publicação',
    categorySlug: 'autoria-e-publicacao',
    topics: ['Autoria', 'Publicação Científica', 'Escrita', 'Portfólio'],
    readTime: '3 min de leitura',
    editorialNote: 'Conteúdo informativo sobre as modalidades de progressão autoral e certificação da ESDHUBEM.',
    sources: [
      {
        title: 'Diretrizes de Publicação e Parcerias Editoriais da ESDHUBEM',
        institution: 'ESDHUBEM',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=diretrizes-publicacao'
      }
    ],
    content: `
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-[#FFC72C] p-6 rounded-2xl mb-8">
        <p class="text-lg text-slate-800 leading-relaxed font-medium">
          A maioria dos cursos termina com um PDF arquivado. Aqui você pode ir além: escrever, publicar e construir uma trajetória visível. Nossos cursos livres são válidos para horas complementares em todo o Brasil.
        </p>
      </div>

      <div class="my-10 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div class="flex items-center gap-3 mb-5">
          <span class="text-2xl">🔒</span>
          <h3 class="text-2xl font-black text-slate-900 tracking-tight m-0">
            Técnicas de Copyright e Proteção Autoral
          </h3>
        </div>
        <p class="text-slate-600 text-sm mb-6">
          Valorizamos o esforço intelectual e a autoria autêntica. Confira como asseguramos a integridade e o prestígio de cada produção:
        </p>
        <div class="space-y-3.5">
          <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span class="text-emerald-600 font-bold text-lg leading-none">✅</span>
            <span class="text-slate-800 text-base font-semibold">Seu trabalho leva seu nome e autoria registrada</span>
          </div>
          <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span class="text-emerald-600 font-bold text-lg leading-none">✅</span>
            <span class="text-slate-800 text-base font-semibold">Publicação com identificação digital (DOI) quando aplicável</span>
          </div>
          <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span class="text-emerald-600 font-bold text-lg leading-none">✅</span>
            <span class="text-slate-800 text-base font-semibold">Direitos preservados conforme legislação vigente</span>
          </div>
          <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span class="text-emerald-600 font-bold text-lg leading-none">✅</span>
            <span class="text-slate-800 text-base font-semibold">Uso consciente de ferramentas: a tecnologia apoia, você é o autor</span>
          </div>
          <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span class="text-emerald-600 font-bold text-lg leading-none">✅</span>
            <span class="text-slate-800 text-base font-semibold">Orientações sobre como proteger e reconhecer sua produção</span>
          </div>
        </div>
      </div>

      <div class="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-4">
        <div class="flex items-center gap-2 text-[#FFC72C] font-bold text-sm uppercase tracking-wider">
          <span>🚀</span>
          <span>Próximo Passo</span>
        </div>
        <h4 class="text-xl sm:text-2xl font-extrabold text-white">
          Quer entender todos os caminhos?
        </h4>
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
          Descubra como funciona a nossa escala progressiva que vai da aprendizagem até os níveis de publicação reconhecida: Bronze, Prata, Ouro e Diamante.
        </p>
      </div>
    `,
    cta: {
      title: 'Quer entender todos os caminhos?',
      subtitle: 'Conheça em detalhes a nossa proposta pedagógica, modalidades de estudo e os 4 níveis de reconhecimento.',
      buttonText: '👉 Conheça as Diretrizes e Níveis de Reconhecimento',
      link: 'diretrizes-pedagogicas'
    }
  },
  {
    id: 'tcc-certificados-autoridade-publicacao-cientifica',
    title: 'Seu TCC e Certificados Vão Para a Gaveta?',
    subtitle: 'Como Transformar Horas de Estudo em Autoridade Profissional e Publicação Científica Real',
    excerpt: 'Você já parou para pensar em quantas horas passou assistindo a videoaulas passivas, fazendo provinhas automáticas e guardando certificados em PDF que ninguém nunca vai ler? Descubra como transformar suas horas de estudo em portfólio público, autoridade profissional e publicação científica real com código DOI permanente.',
    videoUrl: 'https://odysee.com/$/embed/@esdhubem:a/apresentacao_esdhubem:2',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Produção acadêmica e científica com identificação digital DOI permanente.',
    imageAlt: 'Livros acadêmicos e materiais de estudo organizados sobre a mesa',
    author: 'Coordenação Pedagógica ESDHUBEM',
    authorDetails: {
      name: 'Coordenação Pedagógica ESDHUBEM',
      role: 'Validação Acadêmica e Diretrizes Curriculares',
      bio: 'Equipe especializada na estruturação de cursos livres, emissão de horas complementares e certificação internacional de produções intelectuais.',
      profileUrl: 'sobre-nos'
    },
    date: '27 de Setembro, 2026',
    updatedDate: '27 de Setembro, 2026',
    datePublishedIso: '2026-09-27',
    dateModifiedIso: '2026-09-27',
    category: 'Educação & Carreira',
    categorySlug: 'educacao-e-carreira',
    topics: ['TCC', 'DOI', 'Zenodo', 'Horas Complementares', 'Publicação'],
    readTime: '4 min de leitura',
    editorialNote: 'Informações sobre a equivalência e amparo legal dos certificados de cursos livres e depósitos em repositórios abertos.',
    sources: [
      {
        title: 'Depósito e Atribuição de DOI no Repositório Científico Zenodo (CERN)',
        institution: 'Zenodo / OpenAIRE',
        date: '2026',
        url: 'https://zenodo.org'
      },
      {
        title: 'Regras de Certificação e Mérito Acadêmico da ESDHUBEM',
        institution: 'ESDHUBEM',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=regras-certificacao-merito'
      }
    ],
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
    `,
    cta: {
      title: 'Comece hoje mesmo sua jornada na ESDHUBEM',
      subtitle: 'Transforme seu tempo de estudo em publicação real e autoridade profissional!',
      buttonText: '👉 Clique Aqui e Garanta Seu Acesso Agora',
      link: 'categorias'
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
    imageCaption: 'Desenvolvimento humano e inteligência emocional aplicados ao trabalho em equipe.',
    imageAlt: 'Grupo de profissionais reunidos em ambiente corporativo colaborativo',
    author: 'Equipe ESDHUBEM',
    authorDetails: {
      name: 'Equipe ESDHUBEM',
      role: 'Desenvolvimento Humano & Liderança',
      bio: 'Especialistas em desenvolvimento comportamental, comunicação não-violenta e clima organizacional.',
      profileUrl: 'sobre-nos'
    },
    date: '24 de Outubro, 2026',
    updatedDate: '24 de Outubro, 2026',
    datePublishedIso: '2026-10-24',
    dateModifiedIso: '2026-10-24',
    category: 'Desenvolvimento Pessoal',
    categorySlug: 'desenvolvimento-pessoal',
    topics: ['Autoconhecimento', 'Soft Skills', 'Inteligência Emocional'],
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
    imageCaption: 'Empatia e liderança positiva em ambientes corporativos de alta performance.',
    imageAlt: 'Líder em reunião dialogando com atenção com sua equipe',
    author: 'Equipe ESDHUBEM',
    authorDetails: {
      name: 'Equipe ESDHUBEM',
      role: 'Gestão e Liderança',
      bio: 'Consultoria e capacitação para gestores e organizações com foco em liderança ética e humanizada.',
      profileUrl: 'sobre-nos'
    },
    date: '15 de Outubro, 2026',
    updatedDate: '15 de Outubro, 2026',
    datePublishedIso: '2026-10-15',
    dateModifiedIso: '2026-10-15',
    category: 'Gestão e Liderança',
    categorySlug: 'gestao-e-lideranca',
    topics: ['Liderança Humanizada', 'Gestão de Pessoas', 'Clima Organizacional'],
    readTime: '2 min de leitura'
  }
];
