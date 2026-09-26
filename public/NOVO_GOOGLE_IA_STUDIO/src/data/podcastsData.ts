import { PodcastEpisode } from '../types';

export const PODCAST_CHANNELS = {
  spotifyShowUrl: 'https://open.spotify.com',
  applePodcastsUrl: 'https://podcasts.apple.com',
  youtubePlaylistUrl: 'https://www.youtube.com',
  rssFeedUrl: 'https://praticasdebemestarsocial.github.io/esdhubem/podcast.xml'
};

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'ep-01',
    episodeNumber: 1,
    title: 'Saberes Integrativos e o Resgate da Sabedoria Simbólica',
    subtitle: 'Por que unir tradição, símbolo, sensibilidade e tecnologia na educação contemporânea?',
    description: 'No episódio de estreia da ESDHUBEM, exploramos as premissas do nosso manifesto pedagógico: por que a sabedoria humana se expande quando conciliamos a profundidade dos símbolos tradicionais com o pensamento crítico e as ferramentas digitais modernas.',
    duration: '34 min',
    category: 'Filosofia & Saberes Integrativos',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    releaseDate: '15 de Setembro de 2026',
    host: 'Profª Silviane Silvério',
    guests: ['Conselho Pedagógico ESDHUBEM'],
    audioUrl: 'https://archive.org/download/testmp3testfile/mpthreetest.mp3',
    spotifyUrl: 'https://open.spotify.com',
    youtubeUrl: 'https://www.youtube.com',
    tags: ['Manifesto', 'Filosofia', 'Saberes Integrativos', 'Educação'],
    transcriptSummary: 'Neste episódio introdutório, a Profª Silviane discute a fragmentação do conhecimento na modernidade e como a proposta da ESDHUBEM resgata uma visão holística e humanista de aprendizado, articulando pesquisa qualitativa e sentido existencial.',
    keyTakeaways: [
      'A separação rígida entre razão e sensibilidade enfraquece a formação humana integral.',
      'Símbolos e arquétipos operam como pontes de significado entre a teoria e a vida cotidiana.',
      'A tecnologia deve servir à expansão da consciência e à democratização do conhecimento aberto.'
    ]
  },
  {
    id: 'ep-02',
    episodeNumber: 2,
    title: 'Hermetismo e Alquimia: As 7 Leis Universais no Dia a Dia',
    subtitle: 'A aplicação prática do Caibalion e das transmutações mentais no autodesenvolvimento.',
    description: 'Uma imersão profunda nos sete princípios herméticos — Mentalismo, Correspondência, Vibração, Polaridade, Ritmo, Causa e Efeito, e Gênero — demonstrando como essas antigas chaves filosóficas auxiliam no equilíbrio emocional e no desenvolvimento de maturidade interior.',
    duration: '42 min',
    category: 'Hermetismo & Alquimia',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80',
    releaseDate: '18 de Setembro de 2026',
    host: 'Profª Silviane Silvério',
    audioUrl: 'https://archive.org/download/testmp3testfile/mpthreetest.mp3',
    spotifyUrl: 'https://open.spotify.com',
    tags: ['Hermetismo', 'Alquimia', 'Caibalion', 'Filosofia Tradicional'],
    transcriptSummary: 'Análise detalhada de cada uma das sete leis herméticas sob a perspectiva psicológica e pedagógica, desmistificando o ocultismo e trazendo ferramentas concretas de auto-observação.',
    keyTakeaways: [
      'Princípio do Mentalismo: o universo é mental e a clareza dos pensamentos molda as ações.',
      'Transmutação mental: capacidade de alterar estados emocionais reativos em respostas conscientes.',
      'A alquimia interior como metodologia de evolução pessoal e refinamento ético.'
    ]
  },
  {
    id: 'ep-03',
    episodeNumber: 3,
    title: 'Astrologia Arquetípica e Psique Humana',
    subtitle: 'Para além do horóscopo comercial: a linguagem simbólica como mapa de autoconhecimento.',
    description: 'Desmistificamos o determinismo superficial para apresentar a Astrologia Simbólica como uma sofisticada gramática arquetípica, dialogando com Carl G. Jung, mitologia comparada e psicologia profunda.',
    duration: '38 min',
    category: 'Astrologia Simbólica',
    coverImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    releaseDate: '20 de Setembro de 2026',
    host: 'Profª Silviane Silvério',
    audioUrl: 'https://archive.org/download/testmp3testfile/mpthreetest.mp3',
    spotifyUrl: 'https://open.spotify.com',
    tags: ['Astrologia', 'Jung', 'Arquétipos', 'Psicologia Simbólica'],
    transcriptSummary: 'Discussão sobre o papel dos mapas astrais como bússolas arquetípicas da psique, enfatizando a ética na interpretação e o respeito à soberania da vontade do indivíduo.',
    keyTakeaways: [
      'Astrologia na ESDHUBEM é tratada como estudo qualitativo e simbólico, não como crença dogmática.',
      'Planetas e signos como personificações de forças psíquicas presentes na história humana.',
      'O mapa natal como espelho reflexivo para vocação, desafios e potenciais.'
    ]
  },
  {
    id: 'ep-04',
    episodeNumber: 4,
    title: 'Escrita Criativa, Redação para ENEM e Produção de Artigos',
    subtitle: 'Como destravar o hábito da escrita e desenvolver a expressão clara do pensamento.',
    description: 'A capacidade de ler e escrever é a base da cidadania, do sucesso profissional e da produção intelectual. Discutimos estratégias práticas para vencer o medo da página em branco, estruturar argumentos sólidos e transformar estudos livres em artigos publicados no Zenodo/DOI.',
    duration: '31 min',
    category: 'Escrita Criativa & Pesquisa',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    releaseDate: '22 de Setembro de 2026',
    host: 'Profª Silviane Silvério',
    audioUrl: 'https://archive.org/download/testmp3testfile/mpthreetest.mp3',
    spotifyUrl: 'https://open.spotify.com',
    tags: ['Escrita Criativa', 'ENEM', 'Artigos Científicos', 'Comunicação'],
    transcriptSummary: 'Passo a passo para organizar ideias em introdução, desenvolvimento e conclusão, tanto para redações de vestibulares e concursos quanto para artigos de conclusão de curso acadêmico.',
    keyTakeaways: [
      'Escrever com clareza é consequência direta de aprender a ler atenta e criticamente.',
      'A escrita criativa conecta emoção e rigor técnico em narrativas envolventes.',
      'A importância de publicar trabalhos nos Anais da ESDHUBEM e obter DOI pelo Zenodo.'
    ]
  },
  {
    id: 'ep-05',
    episodeNumber: 5,
    title: 'Saúde Coletiva e Práticas Integrativas no Século XXI',
    subtitle: 'Cuidado holístico, bem-estar preventivo e a complementaridade dos saberes.',
    description: 'Debatemos os desafios contemporâneos da saúde mental e física, a sobrecarga de estímulos, o valor das práticas integrativas de autocuidado e o impacto de políticas comunitárias de bem-estar social.',
    duration: '45 min',
    category: 'Saúde Coletiva & Bem-Estar',
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    releaseDate: '24 de Setembro de 2026',
    host: 'Profª Silviane Silvério',
    audioUrl: 'https://archive.org/download/testmp3testfile/mpthreetest.mp3',
    spotifyUrl: 'https://open.spotify.com',
    tags: ['Saúde Coletiva', 'Bem-Estar', 'Práticas Integrativas', 'Qualidade de Vida'],
    transcriptSummary: 'Reflexões sobre o modelo biopsicossocial de saúde e o papel da educação permanente na construção de estilos de vida equilibrados.',
    keyTakeaways: [
      'Saúde integrativa como complemento preventivo que valoriza a escuta e a subjetividade.',
      'O papel das comunidades de aprendizado na mitigação do isolamento e da ansiedade.',
      'Responsabilidade social e práticas acessíveis de bem-estar para famílias e trabalhadores.'
    ]
  },
  {
    id: 'ep-06',
    episodeNumber: 6,
    title: 'Inteligência Artificial, Ética e Educação Humanista',
    subtitle: 'Como usar a IA como copiloto criativo sem perder a autenticidade e a essência humana.',
    description: 'Neste episódio provocativo, analisamos o avanço acelerado dos modelos generativos de IA, o impacto no mercado de trabalho e como os profissionais podem aliar inteligência artificial a valores éticos, pensamento crítico e sensibilidade humana.',
    duration: '39 min',
    category: 'IA & Sociedade',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    releaseDate: '26 de Setembro de 2026',
    host: 'Profª Silviane Silvério',
    audioUrl: 'https://archive.org/download/testmp3testfile/mpthreetest.mp3',
    spotifyUrl: 'https://open.spotify.com',
    tags: ['Inteligência Artificial', 'Ética', 'Futuro do Trabalho', 'Humanismo'],
    transcriptSummary: 'A Profª Silviane apresenta como a ESDHUBEM adota ferramentas de ponta de IA sem abrir mão do rigor pedagógico, da reflexão filosófica e do calor humano.',
    keyTakeaways: [
      'A IA acelera a execução técnica, mas a intenção, a ética e o discernimento são exclusivamente humanos.',
      'Prompt design e curadoria como novas habilidades essenciais de literacia digital.',
      'A educação humanista como alicerce para não nos tornarmos meros reprodutores de algoritmos.'
    ]
  }
];

export const PODCAST_CATEGORIES = [
  'Todos',
  'Filosofia & Saberes Integrativos',
  'Hermetismo & Alquimia',
  'Astrologia Simbólica',
  'Escrita Criativa & Pesquisa',
  'Saúde Coletiva & Bem-Estar',
  'IA & Sociedade'
];
