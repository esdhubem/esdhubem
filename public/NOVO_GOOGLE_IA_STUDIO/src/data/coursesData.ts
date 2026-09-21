import { CategoryItem, Course, MethodologyPillar, CertificateVerification } from '../types';

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'desenvolvimento-pessoal',
    title: 'Desenvolvimento\nPessoal',
    coursesCount: 24,
    iconName: 'Sparkles',
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'desenvolvimento-humano',
    title: 'Desenvolvimento\nHumano',
    coursesCount: 18,
    iconName: 'HeartHandshake',
    accentColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'desenvolvimento-profissional',
    title: 'Desenvolvimento\nProfissional',
    coursesCount: 32,
    iconName: 'Briefcase',
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'desenvolvimento-etico',
    title: 'Desenvolvimento\nÉtico',
    coursesCount: 12,
    iconName: 'Scale',
    accentColor: 'from-purple-600 to-violet-800',
  },
  {
    id: 'desenvolvimento-relacional',
    title: 'Desenvolvimento\nRelacional',
    coursesCount: 16,
    iconName: 'Users',
    accentColor: 'from-rose-500 to-pink-600',
  },
  {
    id: 'desenvolvimento-financeiro',
    title: 'Desenvolvimento\nFinanceiro',
    coursesCount: 15,
    iconName: 'CircleDollarSign',
    accentColor: 'from-amber-600 to-yellow-600',
  },
  {
    id: 'desenvolvimento-tecnologico-ia',
    title: 'Desenvolvimento\nTecnológico e IA',
    coursesCount: 17,
    iconName: 'Cpu',
    accentColor: 'from-violet-600 to-indigo-600',
  },
  {
    id: 'desenvolvimento-da-consciencia',
    title: 'Desenvolvimento\nda Consciência',
    coursesCount: 14,
    iconName: 'Brain',
    accentColor: 'from-indigo-500 to-purple-700',
  },
  {
    id: 'desenvolvimento-ambiental',
    title: 'Desenvolvimento\nAmbiental',
    coursesCount: 10,
    iconName: 'Leaf',
    accentColor: 'from-green-600 to-emerald-700',
  },
  {
    id: 'cursos-freepremium',
    title: 'Cursos\nFreepremium',
    coursesCount: 28,
    iconName: 'Gift',
    accentColor: 'from-cyan-600 to-blue-600',
  },
  {
    id: 'horas-complementares',
    title: 'Horas\nComplementares',
    coursesCount: 45,
    iconName: 'GraduationCap',
    accentColor: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'formacao-livre',
    title: 'Formação\nLivre',
    coursesCount: 19,
    iconName: 'Compass',
    accentColor: 'from-stone-600 to-zinc-800',
  },
  {
    id: 'praticas-integrativas',
    title: 'Práticas\nIntegrativas',
    coursesCount: 21,
    iconName: 'SunMedium',
    accentColor: 'from-teal-500 to-emerald-600',
  },
  {
    id: 'coach-integrativo',
    title: 'Coach\nIntegrativo',
    coursesCount: 11,
    iconName: 'Target',
    accentColor: 'from-emerald-700 to-teal-800',
  },
  {
    id: 'pedagogia-integrativa',
    title: 'Pedagogia\nIntegrativa',
    coursesCount: 13,
    iconName: 'BookOpenCheck',
    accentColor: 'from-orange-600 to-amber-700',
  },
  {
    id: 'desenvolvimento-nas-empresas',
    title: 'Treinamento Corporativo\nPara Empresas & Equipes',
    coursesCount: 16,
    iconName: 'Building2',
    accentColor: 'from-slate-600 to-slate-800',
  },
  {
    id: 'formacao-empresarial',
    title: 'Formação\nEmpresarial',
    coursesCount: 14,
    iconName: 'Award',
    accentColor: 'from-yellow-600 to-amber-800',
  },
  {
    id: 'livros',
    title: 'Livros\n& Materiais',
    coursesCount: 8,
    iconName: 'Library',
    accentColor: 'from-red-500 to-rose-700',
  }
];

export const METHODOLOGY_PILLARS: MethodologyPillar[] = [
  {
    number: '1',
    title: 'Cursos Freepremium',
    description:
      'Aprenda sem barreiras. Assista a todas as videoaulas e acesse o material didático completo de forma 100% gratuita para testar o conteúdo e conhecer nossa metodologia. Você só paga uma taxa de emissão se decidir que quer o documento oficial.',
    targetAudience:
      'Estudantes e profissionais que buscam conhecimento rápido, querem validar a qualidade do curso antes de investir ou precisam apenas do aprendizado prático imediato sem custo inicial.',
    type: 'freepremium',
  },
  {
    number: '2',
    title: 'Cursos para Horas Complementares',
    isPopular: true,
    description:
      'Cursos de capacitação profissional rápida planejados sob medida para cumprir as exigências das Atividades Complementares das faculdades. Certificados legítimos com carga horária adequada para rápida aprovação na secretaria acadêmica.',
    targetAudience:
      'Alunos de graduação de qualquer faculdade do Brasil que precisam acumular horas extras obrigatórias no currículo acadêmico para garantir a colação de grau e se formar sem atrasos.',
    type: 'horas-complementares',
  },
  {
    number: '3',
    title: 'Cursos de Formação Livre',
    description:
      'Cursos mais longos, densos e completos desenhados para gerar transformação e emprego. Um mergulho profundo nas ferramentas mais exigidas pelo mercado de trabalho contemporâneo, focado em resultados rápidos e geração de renda.',
    targetAudience:
      'Pessoas que desejam mudar de carreira, profissionais que buscam aprender uma nova profissão do zero ou empreendedores que querem se capacitar para ganhar dinheiro imediatamente.',
    type: 'formacao-livre',
  },
];

export const COURSES_DATA: Course[] = [
  // 1. FREEPREMIUM COURSES
  {
    id: 'fp-assertiva',
    title: 'Comunicação Assertiva com a Liderança',
    subtitle: 'Aprenda a expressar suas ideias com firmeza, clareza e respeito no ambiente corporativo, desenvolvendo uma liderança forte e inspiradora.',
    category: 'Desenvolvimento Profissional',
    pillar: 'freepremium',
    hours: 40,
    rating: 4.9,
    studentsCount: 3800,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    tag: 'Aulas 100% Gratuitas',
    badge: 'Curso Destaque • 40h',
    description: 'Ministrado pela Professora Silviane Silvério (Biomédica e Pós-graduada em Práticas Integrativas). Conteúdo completo sobre fundamentos da comunicação assertiva, postura, comportamento e aplicação corporativa.',
    modulesCount: 3,
    syllabus: [
      'Módulo 1: Fundamentos da Comunicação Assertiva',
      'Módulo 2: Postura e Comportamento',
      'Módulo 3: Aplicando no Ambiente Corporativo'
    ],
    targetAudience: 'Estudantes, líderes e profissionais que desejam expressar suas ideias com firmeza, clareza e respeito.',
    priceNote: 'Gratuito para assistir • Certificado oficial incluso',
  },
  {
    id: 'emp-assertiva',
    title: 'Comunicação Assertiva com a Liderança',
    subtitle: 'Aprenda a expressar suas ideias com firmeza, clareza e respeito no ambiente corporativo, desenvolvendo uma liderança forte e inspiradora.',
    category: 'Treinamento Corporativo\nPara Empresas & Equipes',
    pillar: 'freepremium',
    hours: 40,
    rating: 4.9,
    studentsCount: 3800,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    tag: 'Presencial',
    badge: 'In Company',
    description: 'Ministrado pela Professora Silviane Silvério (Biomédica e Pós-graduada em Práticas Integrativas). Conteúdo completo sobre fundamentos da comunicação assertiva, postura, comportamento e aplicação corporativa.',
    modulesCount: 3,
    syllabus: [
      'Módulo 1: Fundamentos da Comunicação Assertiva',
      'Módulo 2: Postura e Comportamento',
      'Módulo 3: Aplicando no Ambiente Corporativo'
    ],
    targetAudience: 'Estudantes, líderes e profissionais que desejam expressar suas ideias com firmeza, clareza e respeito.',
    priceNote: 'Treinamento presencial corporativo sob demanda',
  }
];

export const CERTIFICATE_MOCKS: Record<string, CertificateVerification> = {
  'ESDHUBEM-2026-HC40': {
    code: 'ESDHUBEM-2026-HC40',
    studentName: 'Mariana Silveira Santos',
    courseTitle: 'Ética Profissional, Direitos Humanos e Cidadania',
    category: 'Desenvolvimento Ético',
    hours: 60,
    completionDate: '15/02/2026',
    status: 'valid',
    institution: 'ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61.928.778/0001-50)',
    authenticityHash: 'a7b8e90c1f2d345a987654321fedcba0',
  },
  'ESDHUBEM-2026-FP20': {
    code: 'ESDHUBEM-2026-FP20',
    studentName: 'Lucas Ferreira de Almeida',
    courseTitle: 'Inteligência Emocional e Autogestão no Cotidiano',
    category: 'Desenvolvimento Pessoal',
    hours: 20,
    completionDate: '02/03/2026',
    status: 'valid',
    institution: 'ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61.928.778/0001-50)',
    authenticityHash: '4321fedcba0a7b8e90c1f2d345a98765',
  },
  'ESDHUBEM-2026-FL180': {
    code: 'ESDHUBEM-2026-FL180',
    studentName: 'Dra. Carolina Mendes Prado',
    courseTitle: 'Formação Profissional em Coach Integrativo e Bem-Estar',
    category: 'Coach Integrativo',
    hours: 180,
    completionDate: '10/01/2026',
    status: 'valid',
    institution: 'ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61.928.778/0001-50)',
    authenticityHash: '987654321fedcba0a7b8e90c1f2d345a',
  },
};

export const FAQ_DATA = [
  {
    question: 'O que são os Cursos Freepremium?',
    answer: 'No modelo Freepremium, oferecemos acesso gratuito a todas as videoaulas. A taxa administrativa é opcional e cobrada apenas se você desejar a emissão, validação e registro do certificado. Nenhum valor é exigido para acessar o conteúdo de estudo.',
  },
  {
    question: 'Os certificados são aceitos para Horas Complementares?',
    answer: 'Os certificados têm valor como formação complementar e são amparados pela Lei nº 9.394/96. A aceitação para cômputo acadêmico de horas complementares depende das normas internas e regulamentações de cada instituição de ensino ou faculdade, portanto recomenda-se consulta prévia.',
  },
  {
    question: 'Como funciona a validação pública de certificados?',
    answer: 'Qualquer faculdade, empresa contratante ou aluno pode acessar a ferramenta "Validar Certificado" em nosso site, digitar o código impresso no documento e checar instantaneamente os dados do aluno, curso, carga horária e hash criptográfico de autenticidade.',
  },
  {
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Aceitamos Pix (com liberação imediata), Cartão de Crédito (com parcelamento em até 12x) e Sol / Boleto bancário com total segurança e emissão instantânea.',
  },
  {
    question: 'Como falar com o suporte pedagógico ou administrativo da ESDHUBEM?',
    answer: 'Você pode entrar em contato direto pelo telefone/WhatsApp (11) 960319637, ou pelo e-mail esdhubem@proton.me. Nosso horário de atendimento é de segunda a sexta-feira, das 9h às 17h.',
  },
];
