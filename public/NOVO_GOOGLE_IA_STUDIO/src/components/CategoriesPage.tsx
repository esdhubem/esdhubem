import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  HeartHandshake,
  Briefcase,
  Scale,
  Users,
  CircleDollarSign,
  SunMedium,
  Brain,
  Leaf,
  Gift,
  GraduationCap,
  Compass,
  Cpu,
  Target,
  Building2,
  Award,
  ArrowLeft,
  Search,
  BookOpen,
  Layers,
  ChevronRight,
  ShieldCheck,
  BookOpenCheck,
  Library,
  LayoutTemplate,
  LayoutDashboard,
  HeartPulse,
  PenTool,
  ArrowRight,
  ClipboardList,
  CheckCircle2
} from 'lucide-react';
import { Course } from '../types';

interface CategoriesPageProps {
  onBackToHome: () => void;
  onSelectCourse?: (course: Course) => void;
  onNavigateToCourseDetail?: () => void;
  onNavigateToCategoryDetail?: (categorySlug: string) => void;
  onNavigate?: (sectionId: string) => void;
}

// Map icons cleanly
const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'CircleDollarSign':
      return <CircleDollarSign className={className} />;
    case 'SunMedium':
      return <SunMedium className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    case 'Gift':
      return <Gift className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'BookOpenCheck':
      return <BookOpenCheck className={className} />;
    case 'Library':
      return <Library className={className} />;
    case 'LayoutTemplate':
      return <LayoutTemplate className={className} />;
    case 'LayoutDashboard':
      return <LayoutDashboard className={className} />;
    case 'HeartPulse':
      return <HeartPulse className={className} />;
    case 'PenTool':
      return <PenTool className={className} />;
    case 'BookOpen':
    default:
      return <BookOpen className={className} />;
  }
};

export interface CategoryCardData {
  id: string;
  title: string;
  badge: string;
  iconName: string;
  accentColor: string;
  summary: string;
  skills: string[];
  image: string;
}

export interface MacroAreaData {
  id: string;
  number: string;
  emoji: string;
  title: string;
  description: string;
  accentColor: string;
  bannerGradient: string;
  borderAccent: string;
  categories: CategoryCardData[];
}

// 5 Macro Areas Structure
const MACRO_AREAS: MacroAreaData[] = [
  {
    id: 'pessoal',
    number: '1',
    emoji: '🧠',
    title: 'Desenvolvimento Pessoal',
    description: 'Conteúdos relacionados à pessoa, comportamento, inteligência emocional, relações e finanças pessoais.',
    accentColor: 'from-amber-500 to-orange-600',
    bannerGradient: 'from-amber-500/15 via-orange-500/5 to-transparent',
    borderAccent: 'border-amber-400/40',
    categories: [
      {
        id: 'desenvolvimento-pessoal',
        title: 'Desenvolvimento Pessoal',
        badge: '24 Cursos',
        iconName: 'Sparkles',
        accentColor: 'from-amber-500 to-orange-600',
        summary: 'Autoconhecimento, inteligência emocional, foco, hábitos saudáveis e transformação individual.',
        skills: ['Autoconhecimento', 'Inteligência Emocional', 'Autodisciplina'],
        image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'desenvolvimento-relacional',
        title: 'Desenvolvimento Relacional',
        badge: '16 Cursos',
        iconName: 'Users',
        accentColor: 'from-rose-500 to-pink-600',
        summary: 'Dinâmicas familiares, vínculos afetivos, convivência pacífica e comunicação interpessoal não violenta.',
        skills: ['CNV Aplicada', 'Mediação Familiar', 'Escuta Ativa'],
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'desenvolvimento-financeiro',
        title: 'Desenvolvimento Financeiro',
        badge: '15 Cursos',
        iconName: 'CircleDollarSign',
        accentColor: 'from-amber-600 to-yellow-600',
        summary: 'Planejamento patrimonial, mentalidade de prosperidade, controle orçamentário e finanças comportamentais.',
        skills: ['Finanças Comportamentais', 'Orçamento Inteligente', 'Planejamento Pessoal'],
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'consciencial',
    number: '2',
    emoji: '✨',
    title: 'Desenvolvimento Consciencial',
    description: 'Expansão da consciência, desenvolvimento humano integral, ética aplicada, lucidez e consciência socioambiental.',
    accentColor: 'from-indigo-600 to-purple-700',
    bannerGradient: 'from-indigo-500/15 via-purple-500/5 to-transparent',
    borderAccent: 'border-indigo-400/40',
    categories: [
      {
        id: 'desenvolvimento-humano',
        title: 'Desenvolvimento Humano',
        badge: '18 Cursos',
        iconName: 'HeartHandshake',
        accentColor: 'from-emerald-600 to-teal-700',
        summary: 'Estudos aprofundados sobre ciclos da vida, relações humanas, maturidade e potencial realizador.',
        skills: ['Psicologia Relacional', 'Comportamento Humano', 'Antropologia Prática'],
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'desenvolvimento-da-consciencia',
        title: 'Desenvolvimento da Consciência',
        badge: '14 Cursos',
        iconName: 'Brain',
        accentColor: 'from-indigo-500 to-purple-700',
        summary: 'Práticas meditativas, presença plena, espiritualidade laica, filosofia aplicada e autorreflexão.',
        skills: ['Mindfulness', 'Filosofia Prática', 'Auto-observação'],
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'desenvolvimento-etico',
        title: 'Desenvolvimento Ético',
        badge: '12 Cursos',
        iconName: 'Scale',
        accentColor: 'from-purple-600 to-violet-800',
        summary: 'Fundamentos de ética aplicada, responsabilidade civil, conduta profissional e integridade.',
        skills: ['Ética Aplicada', 'Compliance Moral', 'Tomada de Decisão'],
        image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'desenvolvimento-ambiental',
        title: 'Desenvolvimento Ambiental',
        badge: '10 Cursos',
        iconName: 'Leaf',
        accentColor: 'from-green-600 to-emerald-700',
        summary: 'Sustentabilidade prática, consumo consciente, ecologia pessoal e conexão responsável com o planeta.',
        skills: ['Sustentabilidade Cotidiana', 'Eco-eficiência', 'Consumo Consciente'],
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'saude',
    number: '3',
    emoji: '🩺',
    title: 'Desenvolvimento em Saúde e Bem-Estar Integrativo',
    description: 'Saúde integrativa, terapias holísticas, qualidade de vida e aperfeiçoamento para profissionais da saúde.',
    accentColor: 'from-teal-600 to-emerald-700',
    bannerGradient: 'from-teal-500/15 via-emerald-500/5 to-transparent',
    borderAccent: 'border-teal-400/40',
    categories: [
      {
        id: 'praticas-integrativas',
        title: 'Práticas Integrativas',
        badge: '21 Cursos',
        iconName: 'SunMedium',
        accentColor: 'from-teal-500 to-emerald-600',
        summary: 'Terapias complementares, abordagens integrativas de saúde, equilíbrio bioenergético e bem-estar.',
        skills: ['PICS / SUS', 'Abordagem Holística', 'Equilíbrio Energético'],
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'coach-integrativo',
        title: 'Coach Integrativo',
        badge: '11 Cursos',
        iconName: 'Target',
        accentColor: 'from-emerald-700 to-teal-800',
        summary: 'Metodologias de desenvolvimento integral, estabelecimento de metas, superação de bloqueios e alinhamento de vida.',
        skills: ['Metas Humanizadas', 'Perguntas Poderosas', 'Plano de Ação'],
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'aprofundamento-profissional-saude',
        title: 'Aprofundamento na Área da Saúde',
        badge: '8 Cursos',
        iconName: 'HeartPulse',
        accentColor: 'from-blue-600 to-teal-700',
        summary: 'Cursos exclusivos para graduados em Biomedicina, Enfermagem, Nutrição, Psicologia, Fisioterapia e áreas afins.',
        skills: ['Atualização Técnica', 'Boas Práticas Clínicas', 'Evidências Científicas'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'terapias-holisticas',
        title: 'Terapias Holísticas',
        badge: '14 Cursos',
        iconName: 'Sparkles',
        accentColor: 'from-teal-600 to-cyan-700',
        summary: 'Autocuidado, terapias complementares, qualidade de vida e desenvolvimento integral aplicado à saúde.',
        skills: ['Autocuidado', 'Qualidade de Vida', 'Saúde Integral', 'Terapias Holísticas'],
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'profissional',
    number: '4',
    emoji: '💼',
    title: 'Desenvolvimento Profissional',
    description: 'Auxilia o indivíduo a se preparar, atuar, evoluir ou se reposicionar profissionalmente no mercado contemporâneo.',
    accentColor: 'from-blue-600 to-indigo-700',
    bannerGradient: 'from-blue-500/15 via-indigo-500/5 to-transparent',
    borderAccent: 'border-blue-400/40',
    categories: [
      {
        id: 'desenvolvimento-profissional',
        title: 'Desenvolvimento Profissional',
        badge: '32 Cursos',
        iconName: 'Briefcase',
        accentColor: 'from-blue-600 to-indigo-700',
        summary: 'Habilidades de liderança, comunicação corporativa, gestão estratégica e ascensão na carreira.',
        skills: ['Liderança 360°', 'Comunicação Assertiva', 'Gestão de Projetos'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'desenvolvimento-tecnologico-ia',
        title: 'Desenvolvimento Tecnológico e IA',
        badge: '17 Cursos',
        iconName: 'Cpu',
        accentColor: 'from-violet-600 to-indigo-600',
        summary: 'Inteligência Artificial ética, produtividade com ferramentas digitais, automação e futuro do trabalho.',
        skills: ['Engenharia de Prompts', 'Automação sem Código', 'IA para Negócios'],
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'workshop-orientacao-carreira',
        title: 'Orientação de Carreira & Futuro',
        badge: '6 Cursos',
        iconName: 'Compass',
        accentColor: 'from-amber-600 to-orange-700',
        summary: 'Workshops intensivos para diagnóstico de carreira, transição profissional e preparação para as tendências de mercado.',
        skills: ['Diagnóstico de Perfil', 'Transição de Carreira', 'Portfólio & Posicionamento'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'pedagogia-integrativa',
        title: 'Pedagogia Integrativa',
        badge: '13 Cursos',
        iconName: 'BookOpenCheck',
        accentColor: 'from-orange-600 to-amber-700',
        summary: 'Didáticas contemporâneas, educação emocional para professores, mediação de aprendizagem e inclusão.',
        skills: ['Didática Ativa', 'Educação Emocional', 'Mediação de Aprendizagem'],
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'formacao-livre',
        title: 'Formação Livre',
        badge: '19 Cursos',
        iconName: 'GraduationCap',
        accentColor: 'from-cyan-600 to-blue-700',
        summary: 'Jornadas completas de aprendizado contínuo para quem quer dominar uma área do início ao fim com teoria e prática.',
        skills: ['Jornadas Completas', 'Teoria & Prática', 'Qualificação Livre'],
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'aprofundamento-profissional-especifico',
        title: 'Aprofundamento em Áreas Específicas',
        badge: '15 Cursos',
        iconName: 'Target',
        accentColor: 'from-indigo-600 to-sky-700',
        summary: 'Cursos técnicos e temáticos para especialização prática, atualização contínua e excelência no mercado.',
        skills: ['Especialização Prática', 'Atualização Técnica', 'Excelência Profissional'],
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'empresarial',
    number: '5',
    emoji: '🏢',
    title: 'Desenvolvimento Empresarial',
    description: 'Capacitação in-company, desenvolvimento de gestores, liderança executiva e fortalecimento institucional.',
    accentColor: 'from-slate-700 to-slate-900',
    bannerGradient: 'from-slate-600/15 via-slate-800/5 to-transparent',
    borderAccent: 'border-slate-400/40',
    categories: [
      {
        id: 'desenvolvimento-nas-empresas',
        title: 'Desenvolvimento nas Empresas',
        badge: '16 Cursos',
        iconName: 'Building2',
        accentColor: 'from-slate-700 to-slate-900',
        summary: 'Capacitação corporativa, cultura organizacional, liderança humanizada e eficiência de equipes.',
        skills: ['Gestão de Equipes', 'Liderança Empresarial', 'Cultura Organizacional'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'treinamentos-palestras-corporativas',
        title: 'Treinamentos e Palestras Corporativas',
        badge: '12 Programas',
        iconName: 'Users',
        accentColor: 'from-purple-600 to-violet-700',
        summary: 'Programas in-company sob medida, palestras motivacionais e técnicas para produtividade e alta performance.',
        skills: ['Treinamento In-Company', 'Palestras Corporativas', 'Produtividade Organizacional'],
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'formacao-empresarial',
        title: 'Formação Empresarial',
        badge: '14 Cursos',
        iconName: 'Award',
        accentColor: 'from-yellow-600 to-amber-800',
        summary: 'Gestão de negócios, liderança executiva, empreendedorismo, produtividade organizacional e desenvolvimento comercial.',
        skills: ['Empreendedorismo', 'Gestão & Liderança', 'Desenvolvimento de Negócios'],
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

// 2. All 8 Course Modalities (Modalidades de Curso)
const MODALITIES_DATA = [
  {
    id: 'freepremium',
    title: 'Cursos Freepremium',
    badge: 'Descoberta',
    iconName: 'Gift',
    accentColor: 'from-emerald-500 to-teal-600',
    summary: 'Aprenda sem barreiras. Assista a todas as videoaulas de forma 100% gratuita para testar o conteúdo, fazer os testes de múltipla escolha e conhecer nossa metodologia. Você só paga uma taxa de emissão do certificado Bronze se decidir que quer o documento oficial.',
    target: 'Estudantes e profissionais que buscam conhecimento rápido sem custo inicial.',
    chips: ['100% Gratuito para Assistir', 'Testes de Fixação', 'Certificado Opcional'],
    destination: 'modalidades-formacao',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'capacitacao',
    title: 'Cursos de Capacitação',
    badge: 'Ação Prática',
    iconName: 'Sparkles',
    accentColor: 'from-blue-600 to-indigo-600',
    summary: 'Cursos práticos e objetivos, desenhados para quem já atua no mercado e precisa de ferramentas aplicáveis imediatamente. Foco no "saber fazer": protocolos, técnicas e metodologias profissionais.',
    target: 'Profissionais em atividade que precisam atualizar competências e resolver demandas da rotina.',
    chips: ['Saber Fazer Imediato', 'Protocolos Profissionais', 'Aplicação Direta'],
    destination: 'modalidades-formacao',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'horas-complementares',
    title: 'Horas Complementares',
    badge: 'Validação Acadêmica',
    iconName: 'GraduationCap',
    accentColor: 'from-amber-500 to-yellow-600',
    summary: 'Cursos estruturados para atender diretamente às exigências de Atividades Complementares de graduação e pós-graduação, com certificado detalhado (carga horária, ementa e dados institucionais).',
    target: 'Universitários de qualquer período e área que precisam cumprir horas complementares para colar grau.',
    chips: ['Válido em Universidades', 'Decreto nº 5.154/04', 'Cargas 20h a 120h'],
    destination: 'modalidades-formacao',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'formacao-livre',
    title: 'Cursos de Formação Livre',
    badge: 'Transformação',
    iconName: 'Compass',
    accentColor: 'from-rose-500 to-red-600',
    summary: 'Jornadas completas de aprendizado para quem quer dominar uma área do início ao fim. Combina teoria consistente, prática orientada e estudos de caso reais.',
    target: 'Pessoas em transição de carreira ou que buscam uma base sólida e aprofundada em um tema.',
    chips: ['Jornadas Completas', 'Teoria + Prática Orientada', 'Transição de Carreira'],
    destination: 'modalidades-formacao',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'treinamentos-corporativos',
    title: 'Treinamentos Corporativos',
    badge: 'Desempenho Profissional',
    iconName: 'Users',
    accentColor: 'from-purple-600 to-violet-700',
    summary: 'Programas desenvolvidos sob medida para equipes, empresas e instituições. Foco em alinhar processos, capacitar colaboradores, clima organizacional e lideranças com mensuração de resultados.',
    target: 'Gestores de RH, líderes de equipe e diretores de empresas e terceiro setor.',
    chips: ['Programas In Company', 'Capacitação de Equipes', 'Métricas de Resultado'],
    destination: 'modalidades-formacao',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'autoria-destaque',
    title: 'Autoria e Destaque',
    badge: 'Desenvolvimento da Escrita',
    iconName: 'PenTool',
    accentColor: 'from-indigo-600 to-purple-800',
    summary: 'Aprenda a estruturar, escrever e publicar. Do texto prático ao livro, com reconhecimento Prata, Ouro ou Diamante. Transforme o aprendizado em presença e credibilidade intelectual.',
    target: 'Estudantes, pesquisadores, terapeutas e autores que desejam publicar e construir autoridade.',
    chips: ['Artigos & Livros', 'Registro DOI', 'Selos Prata, Ouro, Diamante'],
    destination: 'regras-certificacao-merito',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aprofundamento-saude',
    title: 'Aprofundamento na Área da Saúde',
    badge: 'Área da Saúde',
    iconName: 'HeartPulse',
    accentColor: 'from-sky-500 to-cyan-700',
    summary: 'Cursos exclusivos para graduados de nível superior da área da saúde. Espaço de atualização, boas práticas e evolução técnica fundamentada sem necessidade de pós-graduação formal.',
    target: 'Enfermeiros, médicos, fisioterapeutas, nutricionistas, psicólogos e terapeutas graduados.',
    chips: ['Exclusivo Graduados', 'Atualização Técnica', 'Prática Fundamentada'],
    destination: 'modalidades-formacao',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'workshop-orientacao-carreira-mod',
    title: 'Workshop Orientação de Carreira',
    badge: 'Transformação Profissional',
    iconName: 'Compass',
    accentColor: 'from-amber-600 to-orange-700',
    summary: 'Análise dos novos rumos do mercado: quais carreiras estão se transformando, quais estão surgindo e tendências do trabalho para você se manter relevante e preparado para o que vem a seguir.',
    target: 'Quem deseja planejar com clareza quais caminhos seguir e quais conhecimentos desenvolver.',
    chips: ['Tendências de Mercado', 'Mobilidade Funcional', 'Planejamento de Futuro'],
    destination: 'modalidades-formacao',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  }
];

// 3. Digital Products & Solutions (Conheça nossos produtos)
const PRODUCTS_DATA = [
  {
    id: 'livros',
    title: 'Livros & Materiais',
    badge: 'Livraria Oficial',
    iconName: 'Library',
    accentColor: 'from-red-500 to-rose-700',
    summary: 'Obras publicadas dos autores certificados Diamante da ESDHUBEM, apostilas completas e e-books especializados em desenvolvimento humano e bem-estar.',
    chips: ['Obras de Autores', 'Biblioteca Nacional', 'E-books & Apostilas'],
    destination: 'livraria',
    btnLabel: 'Acessar Livraria'
  },
  {
    id: 'landing-pages-biolinks',
    title: 'Landing Pages & Biolinks',
    badge: 'Alta Conversão',
    iconName: 'LayoutTemplate',
    accentColor: 'from-emerald-500 to-teal-700',
    summary: 'Estruturas prontas e personalizáveis de alta conversão para terapeutas, professores e profissionais divulgarem seus atendimentos, cursos e serviços com autoridade.',
    chips: ['Design Responsivo', 'Pronto para Vender', 'Conexão WhatsApp'],
    destination: 'categoria:landing-pages-biolinks',
    btnLabel: 'Ver Modelos Prontos'
  },
  {
    id: 'aplicativos-dashboards',
    title: 'Aplicativos & Dashboards',
    badge: 'Gestão Inteligente',
    iconName: 'LayoutDashboard',
    accentColor: 'from-blue-600 to-cyan-600',
    summary: 'Soluções digitais intuitivas, painéis operacionais e organizadores automatizados desenvolvidos para MEI, pequenas clínicas e consultórios.',
    chips: ['Sistemas Web', 'Gestão Simplificada', 'Produtividade Diária'],
    destination: 'aplicativos',
    btnLabel: 'Conhecer Aplicativos'
  }
];

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onBackToHome,
  onNavigateToCategoryDetail,
  onNavigate
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('todas');

  // Filter pills (5 Macro Areas)
  const areaFilterButtons = [
    { id: 'pessoal', label: '🧠 1. Desenvolvimento Pessoal' },
    { id: 'consciencial', label: '✨ 2. Desenvolvimento Consciencial' },
    { id: 'saude', label: '🩺 3. Saúde & Bem-Estar Integrativo' },
    { id: 'profissional', label: '💼 4. Desenvolvimento Profissional' },
    { id: 'empresarial', label: '🏢 5. Desenvolvimento Empresarial' }
  ];

  // Total count of categories across all macro areas
  const totalCategoriesCount = useMemo(() => {
    return MACRO_AREAS.reduce((acc, area) => acc + area.categories.length, 0);
  }, []);

  // Filtered Macro Areas according to search and selected tab
  const filteredMacroAreas = useMemo(() => {
    return MACRO_AREAS.map((area) => {
      // If tab filter is active and doesn't match this area
      if (selectedAreaId !== 'todas' && area.id !== selectedAreaId) {
        return { ...area, categories: [] };
      }

      if (!searchTerm) {
        return area;
      }

      const term = searchTerm.toLowerCase();
      const areaMatches =
        area.title.toLowerCase().includes(term) ||
        area.description.toLowerCase().includes(term);

      const matchingCategories = area.categories.filter((cat) => {
        return (
          areaMatches ||
          cat.title.toLowerCase().includes(term) ||
          cat.id.toLowerCase().includes(term) ||
          cat.summary.toLowerCase().includes(term) ||
          cat.skills.some((s) => s.toLowerCase().includes(term))
        );
      });

      return {
        ...area,
        categories: matchingCategories
      };
    }).filter((area) => area.categories.length > 0);
  }, [searchTerm, selectedAreaId]);

  // Filtered modalities
  const filteredModalities = useMemo(() => {
    if (!searchTerm) return MODALITIES_DATA;
    const term = searchTerm.toLowerCase();
    return MODALITIES_DATA.filter(
      (m) =>
        m.title.toLowerCase().includes(term) ||
        m.badge.toLowerCase().includes(term) ||
        m.summary.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return PRODUCTS_DATA;
    const term = searchTerm.toLowerCase();
    return PRODUCTS_DATA.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.badge.toLowerCase().includes(term) ||
        p.summary.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleCardClick = (destination: string) => {
    if (destination.startsWith('categoria:')) {
      const slug = destination.replace('categoria:', '');
      if (onNavigateToCategoryDetail) onNavigateToCategoryDetail(slug);
      return;
    }

    if (onNavigate) {
      onNavigate(destination);
      return;
    }

    if (onNavigateToCategoryDetail) {
      onNavigateToCategoryDetail(destination);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-24">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-[#011049] border-b border-blue-900/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">
              Categorias e Modalidades dos Cursos
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#FFC72C]" />
            <span>Catálogo Completo ESDHUBEM</span>
          </div>
        </div>
      </div>

      {/* Hero Header com Azul Profundo Navy #011049 */}
      <header className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white relative overflow-hidden py-14 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 shadow-lg">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-white/10">
              <Layers className="w-3.5 h-3.5" />
              <span>Catálogo Acadêmico & Soluções</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Categorias e Modalidades dos Cursos <br className="hidden sm:inline" />
              <span className="text-[#FFC72C]">& Produtos Digitais.</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Explore nossas categorias estruturadas em 5 grandes áreas de desenvolvimento, modalidades de formação continuada e soluções digitais integradas.
            </p>

            {/* Live Search Bar */}
            <div className="pt-2 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Pesquisar categorias, temas ou modalidades..."
                  className="w-full bg-white text-slate-900 placeholder-slate-400 pl-11 pr-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFC72C] shadow-lg"
                  id="categories-search-input"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded-md cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Platform Metric Badges */}
          <div className="grid grid-cols-2 gap-3.5 w-full md:w-auto shrink-0">
            <div className="bg-[#011049]/90 border border-blue-900/80 p-4 rounded-2xl text-center shadow-lg backdrop-blur-sm">
              <div className="text-3xl font-black text-[#FFC72C]">5</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Grandes Áreas</div>
            </div>

            <div className="bg-[#011049]/90 border border-blue-900/80 p-4 rounded-2xl text-center shadow-lg backdrop-blur-sm">
              <div className="text-3xl font-black text-white">{totalCategoriesCount}</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Categorias</div>
            </div>

            <div className="bg-[#011049]/90 border border-blue-900/80 p-4 rounded-2xl text-center shadow-lg backdrop-blur-sm">
              <div className="text-3xl font-black text-emerald-400">8</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Modalidades</div>
            </div>

            <div className="bg-[#011049]/90 border border-blue-900/80 p-4 rounded-2xl text-center shadow-lg backdrop-blur-sm">
              <div className="text-3xl font-black text-amber-300">100%</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Cursos Livres Válidos</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* SESSÃO 1: Categorias Organizadas nas 5 Áreas de Desenvolvimento           */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Estrutura por Áreas de Desenvolvimento</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#011049] tracking-tight">
                Categorias Organizadas por Área
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 shrink-0">
              {filteredMacroAreas.reduce((acc, a) => acc + a.categories.length, 0)} categorias exibidas
            </span>
          </div>

          {/* Area Filter Buttons - 5 Categorias em Linha Horizontal */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap sm:flex-nowrap">
            {areaFilterButtons.map((btn) => {
              const isSelected = selectedAreaId === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setSelectedAreaId(isSelected ? 'todas' : btn.id)}
                  title={isSelected ? 'Clique para desmarcar e ver todas as 5 áreas' : `Filtrar por ${btn.label}`}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#011049] text-[#FFC72C] border-[#011049] shadow-md ring-2 ring-[#FFC72C]/30'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}

            {selectedAreaId !== 'todas' && (
              <button
                onClick={() => setSelectedAreaId('todas')}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 underline underline-offset-4 px-2 py-1 cursor-pointer transition-colors whitespace-nowrap"
                title="Mostrar todas as 5 áreas"
              >
                ✕ Ver todas as 5
              </button>
            )}
          </div>

          {/* 5 Macro Areas List */}
          <div className="space-y-12">
            {filteredMacroAreas.map((area) => (
              <div
                key={area.id}
                id={`macro-area-${area.id}`}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden"
              >
                {/* Area Header Card */}
                <div className={`p-6 sm:p-8 bg-gradient-to-r ${area.bannerGradient} border-b border-slate-200/80`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl">{area.emoji}</span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#011049] tracking-tight">
                          {area.number}. {area.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs">
                        <Layers className="w-3.5 h-3.5 text-[#011049]" />
                        {area.categories.length} {area.categories.length === 1 ? 'Categoria' : 'Categorias'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Categories Grid inside this Area — Cards com Imagem, Ícone Flutuante e Botão Conhecer Cursos */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {area.categories.map((cat) => (
                      <div
                        key={cat.id}
                        onClick={() => {
                          if (onNavigateToCategoryDetail) {
                            onNavigateToCategoryDetail(cat.id);
                          }
                        }}
                        className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-center cursor-pointer relative hover:-translate-y-1"
                        id={`cat-card-${cat.id}`}
                      >
                        {/* Foto Ilustrativa no Topo */}
                        <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3 z-10">
                            <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full border backdrop-blur-md bg-white/95 text-slate-800 shadow-xs">
                              {cat.badge}
                            </span>
                          </div>
                        </div>

                        {/* Ícone Circular Flutuante Centralizado na Divisa da Foto */}
                        <div className="w-11 h-11 rounded-full bg-white shadow-md border-2 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[154px] z-10 text-xl group-hover:scale-110 group-hover:shadow-lg transition-transform text-[#011049]">
                          {renderIcon(cat.iconName, 'w-5 h-5 text-[#011049]')}
                        </div>

                        {/* Corpo do Cartão: Título, Descrição, Tags e Botão Conhecer Cursos */}
                        <div className="pt-7 px-4 pb-5 flex-1 flex flex-col justify-between items-center space-y-3">
                          <div className="w-full space-y-2">
                            <h4 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 min-h-[44px] flex items-center justify-center">
                              {cat.title}
                            </h4>

                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                              {cat.summary}
                            </p>

                            {/* Tags de Habilidades */}
                            <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                              {cat.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[10px] bg-slate-50 border border-slate-200/80 text-slate-600 px-2 py-0.5 rounded font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Botão Pílula Conhecer Cursos com Sombra Flutuante */}
                          <div className="pt-2 w-full flex justify-center">
                            <button
                              type="button"
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs tracking-wide shadow-[0_10px_20px_-3px_rgba(5,150,105,0.45)] hover:shadow-[0_16px_28px_-3px_rgba(5,150,105,0.6)] border border-emerald-400/60 transition-all duration-300 cursor-pointer -translate-y-0.5 hover:-translate-y-1.5 active:translate-y-0"
                            >
                              <BookOpen className="w-3.5 h-3.5 text-emerald-100" />
                              <span>Conhecer Cursos</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SESSÃO 2: Conheça as Modalidades de Curso                                */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full border border-blue-200 mb-2">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Formatos & Metodologias</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#011049] tracking-tight">
                Conheça as Modalidades de Curso
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 shrink-0">
              8 Modalidades de Aprendizado
            </span>
          </div>

          {/* Modalities Cards — Cards com Imagem, Ícone Flutuante, Apenas Público-Alvo e Botão Conhecer Cursos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredModalities.map((mod) => (
              <div
                key={mod.id}
                onClick={() => handleCardClick(mod.destination)}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden text-center cursor-pointer relative hover:-translate-y-1"
                id={`mod-card-${mod.id}`}
              >
                {/* Foto Ilustrativa no Topo */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full border backdrop-blur-md bg-white/95 text-slate-800 shadow-xs">
                      {mod.badge}
                    </span>
                  </div>
                </div>

                {/* Ícone Circular Flutuante Centralizado na Divisa da Foto */}
                <div className="w-11 h-11 rounded-full bg-white shadow-md border-2 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[138px] z-10 text-xl group-hover:scale-110 group-hover:shadow-lg transition-transform text-[#011049]">
                  {renderIcon(mod.iconName, 'w-5 h-5 text-[#011049]')}
                </div>

                {/* Corpo do Cartão: Título, Apenas Público-Alvo e Botão Conhecer Cursos */}
                <div className="pt-7 px-4 pb-5 flex-1 flex flex-col justify-between items-center space-y-3">
                  <div className="w-full space-y-3">
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 min-h-[44px] flex items-center justify-center">
                      {mod.title}
                    </h3>

                    {/* Caixa de Público-Alvo Exclusiva (sem texto longo adicional) */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-left w-full">
                      <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-extrabold mb-1">
                        Público-alvo:
                      </strong>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {mod.target}
                      </p>
                    </div>
                  </div>

                  {/* Botão Pílula Conhecer Cursos com Sombra Flutuante */}
                  <div className="pt-2 w-full flex justify-center">
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs tracking-wide shadow-[0_10px_20px_-3px_rgba(5,150,105,0.45)] hover:shadow-[0_16px_28px_-3px_rgba(5,150,105,0.6)] border border-emerald-400/60 transition-all duration-300 cursor-pointer -translate-y-0.5 hover:-translate-y-1.5 active:translate-y-0"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-emerald-100" />
                      <span>Conhecer Cursos</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SESSÃO 3: Conheça Nossos Produtos                                         */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Soluções & Recursos</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#182333] tracking-tight">
                Conheça nossos produtos
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 shrink-0">
              Livros, Biolinks & Aplicativos
            </span>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => handleCardClick(prod.destination)}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group"
                id={`prod-card-${prod.id}`}
              >
                <div className="space-y-3">
                  {/* Top row with Icon and Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${prod.accentColor} shadow-md group-hover:scale-105 transition-transform`}
                    >
                      {renderIcon(prod.iconName, 'w-6 h-6')}
                    </div>

                    <span className="text-[11px] font-bold bg-[#182333]/5 text-[#243042] px-2.5 py-1 rounded-full border border-slate-200">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-[#182333] text-base sm:text-lg leading-tight group-hover:text-emerald-600 transition-colors">
                    {prod.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {prod.summary}
                  </p>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {prod.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#243042] group-hover:text-emerald-600 flex items-center gap-1">
                    {prod.btnLabel}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#243042] group-hover:text-[#FFC72C] flex items-center justify-center transition-all shadow-xs">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
