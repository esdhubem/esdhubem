import React, { useState } from 'react';
import {
  Clock,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ExternalLink,
  Users,
  Star,
  BookOpen,
  ShieldCheck,
  ArrowLeft,
  Signal,
  Tv,
  Sparkles,
  Info,
  Award,
  FileCheck,
  Target,
  BrainCircuit,
  QrCode,
  LayoutTemplate,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Eye,
  FileText,
  HelpCircle,
  Zap,
  Check,
  Briefcase,
  Layers,
  Download,
  AlertCircle
} from 'lucide-react';
import { Course } from '../types';
import profSilvianeImg from '../assets/prof-silviane.png';

interface CourseDetailPageProps {
  course?: Course;
  onBackToHome: () => void;
  onEnroll: () => void;
  onOpenValidator: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
}

const HOURS_OPTIONS = [
  { hours: 20, price: 39.90, label: '20 Horas', badge: 'Essencial' },
  { hours: 40, price: 49.90, label: '40 Horas', badge: 'Mais Procurado', isPopular: true },
  { hours: 60, price: 59.90, label: '60 Horas', badge: 'Aprofundado' },
  { hours: 80, price: 69.90, label: '80 Horas', badge: 'Completo' },
  { hours: 120, price: 89.90, label: '120 Horas', badge: 'Máxima Carga' }
];

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onBackToHome,
  onEnroll,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<
    'sobre' | 'conteudo' | 'certificacao' | 'metodologia' | 'publico' | 'legislacao' | 'faq'
  >('sobre');
  const [expandedModules, setExpandedModules] = useState<number[]>([0, 1]);
  const [copied, setCopied] = useState(false);
  const [enrollmentMode, setEnrollmentMode] = useState<'gratis' | 'certificado'>('certificado');
  const [selectedHours, setSelectedHours] = useState<number>(course?.hours || 40);
  const [certificateViewMode, setCertificateViewMode] = useState<'frente' | 'verso'>('frente');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleCopyLink = () => {
    const courseId = course?.id || 'fp-assertiva';
    const baseUrl = window.location.href.split('?')[0];
    const url = `${baseUrl}?curso=${courseId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleModule = (index: number) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((i) => i !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  // Fallbacks if no course passed
  const title = course?.title || 'Comunicação Assertiva com a Liderança';
  const subtitle = course?.subtitle || 'Aprenda a expressar suas ideias com firmeza, clareza e respeito no ambiente corporativo, desenvolvendo uma presença executiva transformadora.';
  const category = course?.category || 'Desenvolvimento Profissional & Liderança';
  const image = course?.image || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80';
  const hours = course?.hours || 40;
  const rating = course?.rating || 4.9;
  const studentsCount = course?.studentsCount || 3800;
  const badge = course?.badge || 'Curso com Início Imediato';
  const isDigitalService = category === 'Landing Pages & Biolinks';

  const defaultSyllabus = [
    'Módulo 1: Fundamentos da Comunicação Assertiva e Neurobiologia do Diálogo',
    'Módulo 2: Postura Consciente, Linguagem Corporal e Autogestão Emocional',
    'Módulo 3: Aplicação Prática no Ambiente Corporativo e Gestão de Conflitos',
    'Módulo 4: Avaliação Final e Emissão do Certificado Registrado'
  ];

  const syllabus = course?.syllabus && course.syllabus.length > 0 ? course.syllabus : defaultSyllabus;

  // Rich module topics generator if course has simple syllabus
  const getModuleTopics = (modName: string, index: number) => {
    if (course?.id === 'fp-assertiva') {
      if (index === 0) return [
        'Diferenças práticas entre passividade, agressividade, passivo-agressividade e assertividade',
        'Os 4 passos da Comunicação Não-Violenta (CNV): Fatos, Sentimentos, Necessidades e Pedidos',
        'A neurociência da calma: controlando o sequestro da amígdala em conversas difíceis',
        'Escuta ativa estruturada: como validar o interlocutor sem renunciar à sua posição'
      ];
      if (index === 1) return [
        'Comunicação não-verbal: congruência de postura, contato visual, tom de voz e respiração',
        'A arte de dizer "Não" de maneira profissional, firme e sem gerar ressentimentos',
        'Autogestão de limites sob pressão e cobranças de alta intensidade',
        'Como estruturar argumentos técnicos com clareza, concisão e autoridade ética'
      ];
      if (index === 2) return [
        'Técnicas de mediação e desarmamento de conversas tensas em reuniões de liderança',
        'Dar e receber feedbacks construtivos sem ativar reações defensivas na equipe',
        'Comunicação escrita assertiva: redação de e-mails, relatórios e mensagens em canais corporativos',
        'Plano de Ação Individual de Assertividade para os próximos 30 dias'
      ];
      return [
        'Orientações gerais para a avaliação de fixação de conhecimento',
        'Critérios acadêmicos para aprovação e emissão do certificado registrado'
      ];
    }
    // Generic high-quality topics for other courses
    return [
      `Fundamentos essenciais e contextualização contemporânea do ${modName.replace(/Módulo \d+:\s*/, '')}`,
      'Estudo de casos reais, ferramentas de aplicação imediata e exercícios reflexivos',
      'Material complementar de leitura em PDF e referências bibliográficas recomendadas'
    ];
  };

  const selectedPricing = HOURS_OPTIONS.find(opt => opt.hours === selectedHours) || HOURS_OPTIONS[1];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 pb-20">
      
      {/* Breadcrumb Bar */}
      <div className="bg-[#182333] border-b border-slate-700/60 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={onBackToHome}
                className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Início</span>
              </button>
              <span>/</span>
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('categorias');
                }}
                className="hover:text-[#FFC72C] transition-colors"
              >
                Cursos
              </button>
              <span>/</span>
              <span className="text-[#FFC72C] font-semibold truncate max-w-xs sm:max-w-md">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Inscrições Abertas • Início Imediato
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Hero Header (Publicity Banner) */}
      <header className="bg-[#1e293b] text-white relative overflow-hidden shadow-lg border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto py-10 md:py-14 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
          
          {/* Hero Left Content */}
          <div className="w-full md:w-2/3 flex flex-col items-start space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#FFC72C] text-[#182333] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {category}
              </span>
              <span className="bg-white/10 text-slate-200 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
                {badge}
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Certificado Válido no Brasil
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
              {title}
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* Quick Benefits Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200 pt-2">
              {!isDigitalService ? (
                <>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                    <Clock className="w-4 h-4 text-[#FFC72C]" />
                    <span>Carga Horária: <strong>{selectedHours} Horas</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                    <Tv className="w-4 h-4 text-[#FFC72C]" />
                    <span>100% Online Assíncrono</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 text-amber-300">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <span className="font-bold text-white">{rating.toFixed(1)}</span>
                    <span className="text-slate-400">({studentsCount}+ alunos)</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>Com Amparo Legal (LDB 9.394/96)</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                    <Clock className="w-4 h-4 text-[#FFC72C]" />
                    <span>Prazo de Entrega: <strong>48 horas</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                    <LayoutTemplate className="w-4 h-4 text-[#FFC72C]" />
                    <span>Domínio & Hospedagem 1 Ano Grátis</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 text-amber-300">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <span className="font-bold text-white">5.0</span>
                    <span className="text-slate-400">(Clientes Satisfeitos)</span>
                  </div>
                </>
              )}
            </div>

            {/* Quick CTAs in Hero */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {!isDigitalService ? (
                <>
                  <button
                    onClick={onEnroll}
                    className="bg-[#FFC72C] hover:bg-[#F5B014] text-[#182333] font-black text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer group"
                  >
                    <span>Quero Assistir Grátis</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('certificacao');
                      const el = document.getElementById('seletor-matricula-sidebar');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-all flex items-center gap-2 border border-white/15 cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-[#FFC72C]" />
                    <span>Opções com Certificado</span>
                  </button>
                </>
              ) : (
                <a
                  href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20solicitar%20a%20criação%20da%20minha%20página%20profissional."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#FFC72C] hover:bg-[#F5B014] text-[#182333] font-black text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Solicitar via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>

          {/* Hero Right Visual Banner & Social Share */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 max-w-sm w-full group bg-slate-900">
              <img
                src={image}
                alt={title}
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#182333] via-[#182333]/30 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="bg-[#182333]/90 backdrop-blur-xs px-2.5 py-1 rounded-md font-semibold text-[#FFC72C] border border-amber-400/20">
                  ESDHUBEM • Educação Integral
                </span>
                <span className="bg-emerald-600/90 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                  Online
                </span>
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl shadow-sm backdrop-blur-xs max-w-sm w-full justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                Divulgar:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Conheça o curso ${title} na ESDHUBEM: ${window.location.href}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white transition-colors text-xs font-bold"
                  title="Compartilhar no WhatsApp"
                >
                  W
                </a>
                <button
                  onClick={handleCopyLink}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#FFC72C] hover:text-[#182333] text-slate-200 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  title="Copiar Link da Página"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copiado!' : 'Copiar Link'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <BookOpen className="w-[450px] h-[450px] text-white" />
        </div>
      </header>

      {/* Tabs Navigation (Sticky) */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-x-2 sm:gap-x-6 overflow-x-auto py-2 scrollbar-none">
            <button
              onClick={() => setActiveTab('sobre')}
              className={`whitespace-nowrap py-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'sobre'
                  ? 'border-[#182333] text-[#182333]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>Sobre o Curso</span>
            </button>

            <button
              onClick={() => setActiveTab('conteudo')}
              className={`whitespace-nowrap py-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'conteudo'
                  ? 'border-[#182333] text-[#182333]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Conteúdo Programático</span>
            </button>

            {!isDigitalService && (
              <>
                <button
                  onClick={() => setActiveTab('certificacao')}
                  className={`whitespace-nowrap py-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'certificacao'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Certificado & Amostra</span>
                </button>

                <button
                  onClick={() => setActiveTab('metodologia')}
                  className={`whitespace-nowrap py-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'metodologia'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Como Funciona</span>
                </button>

                <button
                  onClick={() => setActiveTab('publico')}
                  className={`whitespace-nowrap py-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'publico'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Público-Alvo</span>
                </button>

                <button
                  onClick={() => setActiveTab('legislacao')}
                  className={`whitespace-nowrap py-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'legislacao'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Validade Legal</span>
                </button>

                <button
                  onClick={() => setActiveTab('faq')}
                  className={`whitespace-nowrap py-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'faq'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Dúvidas Frequentes</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Content (2/3) + Sticky Sales Sidebar (1/3) */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Content Column (Left - 2/3) */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-10">
              
              {/* TAB 1: SOBRE O CURSO */}
              {activeTab === 'sobre' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#182333] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                        <Info className="w-5 h-5" />
                      </div>
                      <span>Apresentação e Objetivos do Curso</span>
                    </h2>
                    <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                      {course?.description || 'O curso foi concebido com base em princípios práticos de desenvolvimento humano, fornecendo instrumentos metodológicos e ferramentas aplicáveis para quem deseja construir autoridade, segurança pessoal e eficácia nas relações.'}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        <Check className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Aplicação Imediata</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Ferramentas objetivas que você pode aplicar no dia seguinte à aula na sua rotina profissional e pessoal.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Certificação com Registro Nacional</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Certificado oficial com QR Code de autenticidade, amparado pela Lei nº 9.394/96 e aceito em todo o Brasil.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                        <Tv className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Flexibilidade Total (EAD)</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Estude pelo computador, tablet ou celular, no horário que for mais conveniente, sem prazos de encerramento.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Docência e Rigor Científico</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Conteúdo estruturado pela Profa. Silviane Silvério, biomédica e especialista com ampla vivência em saúde integrativa.
                      </p>
                    </div>
                  </div>

                  {/* Why take this course section */}
                  <div className="bg-[#182333] text-white p-6 sm:p-8 rounded-2xl space-y-4">
                    <div className="flex items-center gap-2 text-[#FFC72C] text-xs font-black uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>Por que escolher a ESDHUBEM?</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      Educação que respeita o seu tempo e valoriza sua história
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Diferente de plataformas com conteúdo raso ou meramente decorativo, os cursos da ESDHUBEM unem embasamento científico, humanização integrativa e aplicabilidade prática. Você ganha clareza conceitual para tomar decisões e construir uma trajetória ética e próspera.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> Sem mensalidades
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> Acesso imediato à Sala de Aula
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> Suporte pedagógico direto
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CONTEÚDO PROGRAMÁTICO */}
              {activeTab === 'conteudo' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#182333] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <span>Grade Curricular e Conteúdo Programático</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Clique nos módulos abaixo para visualizar os tópicos e detalhamento das aulas.
                      </p>
                    </div>
                    <span className="self-start sm:self-center bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {syllabus.length} Módulos Estruturados
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {syllabus.map((modTitle, index) => {
                      const isExpanded = expandedModules.includes(index);
                      const topics = getModuleTopics(modTitle, index);

                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-all bg-white"
                        >
                          <button
                            type="button"
                            onClick={() => toggleModule(index)}
                            className="w-full text-left bg-slate-50/80 hover:bg-slate-100 px-5 py-4 flex justify-between items-center transition cursor-pointer select-none"
                          >
                            <div className="flex items-center gap-3.5">
                              <span className="w-8 h-8 rounded-lg bg-[#182333] text-[#FFC72C] text-xs font-black flex items-center justify-center shrink-0">
                                {index + 1}
                              </span>
                              <div>
                                <h3 className="font-bold text-sm sm:text-base text-[#182333]">
                                  {modTitle}
                                </h3>
                                <span className="text-[11px] text-slate-500">
                                  {topics.length} Aulas / Tópicos de Estudo
                                </span>
                              </div>
                            </div>
                            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-500 shrink-0">
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm space-y-3">
                              <p className="text-slate-500 font-medium">Tópicos abordados neste módulo:</p>
                              <ul className="space-y-2">
                                {topics.map((topic, tIdx) => (
                                  <li key={tIdx} className="flex items-start gap-2.5 text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                                      {tIdx + 1}
                                    </div>
                                    <span className="leading-relaxed">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="pt-3 mt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                                <span className="flex items-center gap-1">
                                  <FileText className="w-3.5 h-3.5 text-[#182333]" />
                                  Apostila Digital em PDF inclusa
                                </span>
                                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                                  <Check className="w-3.5 h-3.5" />
                                  Exercícios Práticos de Fixação
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Syllabus Callout */}
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#FFC72C] text-[#182333] flex items-center justify-center shrink-0 font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#182333]">Avaliação de Fixação Final</h4>
                        <p className="text-[11px] text-slate-600">Questionário objetivo online de 10 questões (média mínima 6.0 para emitir certificado).</p>
                      </div>
                    </div>
                    <button
                      onClick={onEnroll}
                      className="shrink-0 px-4 py-2 bg-[#182333] hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition cursor-pointer"
                    >
                      Acessar Aulas
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: CERTIFICADO & AMOSTRA (INSPIRADO EM CURSOSVIRTUAIS.NET) */}
              {activeTab === 'certificacao' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#182333] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                        <Award className="w-5 h-5" />
                      </div>
                      <span>Certificado Registrado com Validade Nacional</span>
                    </h2>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                      O certificado emitido pela <strong>ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61.928.778/0001-50)</strong> possui amparo integral na <strong>Lei nº 9.394/96</strong> e no <strong>Decreto Presidencial nº 5.154/04</strong>.
                    </p>
                  </div>

                  {/* O que o certificado permite fazer? Cards de Utilidade */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-base text-[#182333]">
                      Para que serve este Certificado Oficial?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold shrink-0">
                          🎓
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#182333]">Horas Complementares (AACCs)</h4>
                          <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                            Aceito por faculdades e universidades para abatimento de horas complementares obrigatórias de graduação.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                          ⚖️
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#182333]">Prova de Títulos em Concursos</h4>
                          <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                            Pode pontuar em provas de títulos de concursos públicos municipais, estaduais e federais (conforme edital).
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
                          📈
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#182333]">Promoção e Plano de Cargos</h4>
                          <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                            Comprove aperfeiçoamento contínuo para progressão na carreira, promoção salarial e avaliações anuais de desempenho.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold shrink-0">
                          💼
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#182333]">Enriquecimento do Currículo</h4>
                          <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                            Destaque-se em processos seletivos e inclua a certificação no seu LinkedIn e no Currículo Lattes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amostra Interativa Frente e Verso do Certificado */}
                  <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-6 border border-slate-700">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-black text-[#FFC72C] uppercase tracking-wider">Amostra Oficial Registrada</span>
                        <h3 className="text-lg sm:text-xl font-bold mt-1">
                          Veja como é o Certificado da ESDHUBEM
                        </h3>
                      </div>

                      {/* Toggle Frente / Verso */}
                      <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 shrink-0">
                        <button
                          type="button"
                          onClick={() => setCertificateViewMode('frente')}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                            certificateViewMode === 'frente'
                              ? 'bg-[#FFC72C] text-[#182333]'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Frente (Diploma)
                        </button>
                        <button
                          type="button"
                          onClick={() => setCertificateViewMode('verso')}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                            certificateViewMode === 'verso'
                              ? 'bg-[#FFC72C] text-[#182333]'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Verso (Grade & Registro)
                        </button>
                      </div>
                    </div>

                    {/* Certificado Mockup Visual */}
                    <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-xl shadow-2xl border-4 border-amber-300/80 relative overflow-hidden font-serif">
                      
                      {certificateViewMode === 'frente' ? (
                        <div className="space-y-4 text-center">
                          <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                            <div className="text-left">
                              <span className="text-[10px] font-sans font-black text-slate-500 uppercase tracking-widest block">República Federativa do Brasil</span>
                              <strong className="text-sm sm:text-base font-sans font-black text-[#182333] tracking-tight">ESDHUBEM — EDUCAÇÃO INTEGRAL</strong>
                              <span className="text-[9px] font-sans text-slate-400 block">CNPJ: 61.928.778/0001-50 • Registro Nacional de Cursos Livres</span>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-amber-50 flex items-center justify-center text-amber-700 shrink-0 shadow-inner">
                              <Award className="w-7 h-7" />
                            </div>
                          </div>

                          <div className="py-4">
                            <span className="text-xs uppercase tracking-widest font-sans font-bold text-amber-600 block mb-1">
                              CERTIFICADO DE CONCLUSÃO E APROVEITAMENTO
                            </span>
                            <p className="text-xs sm:text-sm font-sans text-slate-600">
                              Certificamos que o(a) aluno(a)
                            </p>
                            <h4 className="text-xl sm:text-2xl font-bold text-[#182333] my-2 underline decoration-amber-400 decoration-2 underline-offset-4">
                              [NOME DO ESTUDANTE CADASTRADO]
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
                              concluiu com êxito e satisfatório aproveitamento o curso livre de{' '}
                              <strong>{title}</strong>, cumprindo a carga horária total de{' '}
                              <strong>{selectedHours} horas</strong>, em conformidade com as diretrizes pedagógicas e a legislação vigente.
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
                            <div className="flex items-center gap-2">
                              <div className="w-12 h-12 bg-slate-100 border border-slate-300 rounded flex items-center justify-center p-1">
                                <QrCode className="w-9 h-9 text-[#182333]" />
                              </div>
                              <div className="text-left text-[10px] text-slate-500">
                                <span className="font-bold text-[#182333] block">Validação Digital Instantânea</span>
                                <span>Código: ESDH-2026-VAL-9842</span>
                              </div>
                            </div>

                            <div className="text-center sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0">
                              <div className="font-script text-sm font-bold text-slate-800 italic">Silviane Silvério</div>
                              <span className="text-[10px] text-slate-500 font-bold block">Profª. Dra. Silviane Silvério</span>
                              <span className="text-[9px] text-slate-400">Coordenação Pedagógica ESDHUBEM</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 font-sans text-xs text-left">
                          <div className="flex items-center justify-between border-b pb-2">
                            <span className="font-black text-[#182333] uppercase text-[11px]">
                              Verso Oficial do Certificado — Registro e Grade Curricular
                            </span>
                            <span className="text-[10px] text-slate-500">Livro: 14 • Folha: 89 • Reg: #2026-8819</span>
                          </div>

                          <div className="space-y-2">
                            <span className="font-bold text-[#182333] block text-[11px] uppercase">
                              Conteúdo Programático Discriminado:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                              {syllabus.map((s, idx) => (
                                <div key={idx} className="flex items-start gap-1.5">
                                  <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{s}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[10px] text-slate-700 space-y-1">
                            <strong className="block text-amber-950 font-bold">Amparo Legal da Certificação:</strong>
                            <p>
                              Curso Livre amparado pela Lei de Diretrizes e Bases da Educação Nacional nº 9.394/1996 (art. 42), Decreto Presidencial nº 5.154/2004 e Deliberação CEE 14/1997. Válido em todo o território nacional como capacitação profissional, aperfeiçoamento e horas complementares universitárias.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Botões do Mockup */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenCertificatePreview) onOpenCertificatePreview();
                          else if (onNavigate) onNavigate('regras-certificacao-merito');
                        }}
                        className="px-4 py-2.5 bg-[#FFC72C] hover:bg-amber-300 text-[#182333] font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition shadow-md"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Abrir Visualizador Completo do Certificado</span>
                      </button>

                      <button
                        type="button"
                        onClick={onOpenValidator}
                        className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition border border-white/20"
                      >
                        <QrCode className="w-4 h-4 text-emerald-400" />
                        <span>Testar Validador Público de QR Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: COMO FUNCIONA / METODOLOGIA */}
              {activeTab === 'metodologia' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#182333] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                        <Zap className="w-5 h-5" />
                      </div>
                      <span>Como Funciona o Curso: Passo a Passo</span>
                    </h2>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                      Nossa metodologia EAD foi desenvolvida para você aprender com autonomia e tranquilidade, sem burocracia ou pressões desnecessárias.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
                      <div className="w-8 h-8 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-black text-sm">
                        1
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Inscrição Instantânea</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Faça sua matrícula grátis em menos de 1 minuto. Não pedimos dados desnecessários nem cartão de crédito para assistir às aulas.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
                      <div className="w-8 h-8 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-black text-sm">
                        2
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Acesso Imediato à Sala de Aula</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Acesse todo o acervo didático, videoaulas, textos fundamentados e apostilas em PDF pelo celular, tablet ou computador.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
                      <div className="w-8 h-8 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-black text-sm">
                        3
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Estude no Seu Próprio Ritmo</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Você define seus horários. As aulas ficam disponíveis 24 horas por dia, 7 dias por semana, sem prazo limite para conclusão.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-2">
                      <div className="w-8 h-8 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-black text-sm">
                        4
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Avaliação Online e Certificado</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Após concluir os módulos, realize o teste objetivo online de fixação. Atingindo nota 6.0 ou superior, seu certificado é liberado na hora!
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-[#182333]">E se eu não passar na avaliação?</h4>
                      <p className="text-xs text-slate-600">Não se preocupe: você pode revisar os conteúdos e refazer a avaliação sem qualquer custo adicional.</p>
                    </div>
                    <button
                      onClick={onEnroll}
                      className="shrink-0 px-4 py-2.5 bg-[#FFC72C] hover:bg-amber-300 text-[#182333] font-bold text-xs rounded-xl transition cursor-pointer"
                    >
                      Começar Agora
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 5: PÚBLICO-ALVO & COMPETÊNCIAS */}
              {activeTab === 'publico' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#182333] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                        <Users className="w-5 h-5" />
                      </div>
                      <span>Público-Alvo e Competências</span>
                    </h2>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                      Este curso é aberto a qualquer pessoa interessada em desenvolvimento humano, clareza relacional e capacitação ética.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-sm text-[#182333] uppercase tracking-wider">
                      Quem mais se beneficia desta formação:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Estudantes Universitários:</strong> que necessitam comprovar horas complementares curriculares obrigatórias.
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Líderes, Gestores e Supervisores:</strong> buscando aprimorar a escuta ativa e conduzir reuniões sem conflito tóxico.
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Terapeutas e Profissionais do Bem-Estar:</strong> coaches, psicólogos, educadores e facilitadores de grupos.
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Profissionais em Transição de Carreira:</strong> que buscam enriquecer o currículo com soft skills valorizadas pelo mercado.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-sm text-[#182333] uppercase tracking-wider">
                      Competências desenvolvidas:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                      <li className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                        <BrainCircuit className="w-4 h-4 text-[#182333]" />
                        <span>Autogestão e inteligência emocional em crises</span>
                      </li>
                      <li className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                        <Target className="w-4 h-4 text-[#182333]" />
                        <span>Firmeza com elegância e diplomacia relacional</span>
                      </li>
                      <li className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                        <Users className="w-4 h-4 text-[#182333]" />
                        <span>Mediação pacífica e produtiva de controvérsias</span>
                      </li>
                      <li className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                        <Award className="w-4 h-4 text-[#182333]" />
                        <span>Postura técnica e liderança humanizada</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 6: VALIDADE LEGAL & LEGISLAÇÃO */}
              {activeTab === 'legislacao' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#182333] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <span>Amparo Legal e Reconhecimento dos Cursos Livres</span>
                    </h2>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                      Conheça os dispositivos legais da República Federativa do Brasil que asseguram a validade dos cursos oferecidos pela ESDHUBEM.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="border-b border-slate-200 pb-3">
                      <h3 className="font-bold text-[#182333] text-sm mb-1">
                        1. Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/1996)
                      </h3>
                      <p className="text-slate-600">
                        Os cursos livres constituem modalidade legítima de educação profissional básica e continuada (art. 42), destinados a proporcionar aos trabalhadores e cidadãos conhecimentos que lhes permitam profissionalizar-se, qualificar-se e atualizar-se para o trabalho e a vida cidadã.
                      </p>
                    </div>

                    <div className="border-b border-slate-200 pb-3">
                      <h3 className="font-bold text-[#182333] text-sm mb-1">
                        2. Decreto Presidencial nº 5.154/2004
                      </h3>
                      <p className="text-slate-600">
                        Regulamenta os artigos 39 a 41 da LDB, disciplinando a oferta de cursos de formação inicial e continuada de trabalhadores, com livre organização curricular e sem necessidade de prévia autorização do MEC para funcionamento.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#182333] text-sm mb-1">
                        3. Deliberação CEE 14/1997 e Parecer CNE/CES 263/2006
                      </h3>
                      <p className="text-slate-600">
                        Assegura a autonomia das instituições universitárias para reconhecer e averbar certificados de cursos livres como Atividades Acadêmicas Complementares (AACCs).
                      </p>
                    </div>
                  </div>

                  {/* Transparência Institucional Box */}
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-2">
                    <div className="flex items-center gap-2 font-bold">
                      <ShieldCheck className="w-4 h-4 text-blue-700" />
                      <span>Transparência Pedagógica ESDHUBEM:</span>
                    </div>
                    <p className="leading-relaxed">
                      Nossos cursos são classificados como <strong>Cursos Livres de Capacitação, Atualização e Formação Continuada</strong>. Eles <strong>não</strong> equivalem a cursos de graduação, licenciatura ou pós-graduação formal stricto sensu, não emitindo diplomas privativos de faculdades regulares.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 7: FAQ / PERGUNTAS FREQUENTES */}
              {activeTab === 'faq' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#182333] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <span>Perguntas Frequentes sobre o Curso</span>
                    </h2>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                      Tire suas dúvidas rápidas sobre acesso, metodologia, horas e certificação.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        q: 'O curso é realmente gratuito para assistir?',
                        a: 'Sim! Na ESDHUBEM, adotamos o modelo Freepremium Educacional. Você pode se matricular, acessar a Sala de Aula virtual, assistir a todas as videoaulas e ler o material didático sem custo nenhum.'
                      },
                      {
                        q: 'O certificado é aceito na minha faculdade para horas complementares?',
                        a: 'Sim! Nossos certificados possuem amparo na Lei nº 9.394/96 e no Decreto nº 5.154/04. Eles contêm carga horária expressa, conteúdo programático no verso, CNPJ institucional e QR Code de verificação digital, atendendo às exigências da grande maioria das faculdades brasileiras.'
                      },
                      {
                        q: 'Como funciona a escolha da carga horária do certificado?',
                        a: 'Você pode escolher a carga horária que melhor atende à sua necessidade curricular (ex: 20h, 40h, 60h, 80h ou 120h). O conteúdo programático é calibrado para refletir a profundidade das horas escolhidas.'
                      },
                      {
                        q: 'Posso usar o certificado em concursos públicos?',
                        a: 'Sim, desde que o edital específico do concurso preveja pontuação para cursos livres de aperfeiçoamento na etapa de Prova de Títulos.'
                      },
                      {
                        q: 'Em quanto tempo recebo o certificado?',
                        a: 'Assim que você concluir os módulos e atingir a nota mínima de 6.0 no teste online, seu Certificado Oficial Digital em PDF de alta resolução com QR Code é liberado imediatamente para download e impressão.'
                      },
                      {
                        q: 'Existe algum prazo limite para terminar o curso?',
                        a: 'Não. O acesso às aulas é vitalício para os módulos gravados. Você pode estudar no seu tempo, de acordo com sua rotina de trabalho ou estudos.'
                      }
                    ].map((faqItem, fIdx) => (
                      <div
                        key={fIdx}
                        className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedFaq(expandedFaq === fIdx ? null : fIdx)}
                          className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 bg-slate-50/60 hover:bg-slate-100 transition cursor-pointer select-none"
                        >
                          <span className="font-bold text-xs sm:text-sm text-[#182333]">
                            {faqItem.q}
                          </span>
                          <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-500 shrink-0">
                            {expandedFaq === fIdx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </span>
                        </button>
                        {expandedFaq === fIdx && (
                          <div className="p-5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white">
                            {faqItem.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Sticky Sidebar (Right - 1/3) */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Enrollment & Pricing Selector Card */}
            <div
              id="seletor-matricula-sidebar"
              className="bg-white border-2 border-slate-200 shadow-xl rounded-2xl overflow-hidden sticky top-20"
            >
              {/* Card Image Banner */}
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 flex gap-2">
                  <span className="bg-[#182333]/90 backdrop-blur-xs text-[#FFC72C] text-xs font-bold px-3 py-1 rounded-md border border-amber-400/20">
                    {isDigitalService ? 'Serviço Digital' : 'Matrículas Abertas'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6">
                
                {!isDigitalService ? (
                  <>
                    {/* Toggle: Acesso Livre vs Com Certificado */}
                    <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => setEnrollmentMode('gratis')}
                        className={`py-2.5 rounded-lg transition-all cursor-pointer text-center ${
                          enrollmentMode === 'gratis'
                            ? 'bg-white text-[#182333] shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Acesso Livre (Grátis)
                      </button>
                      <button
                        type="button"
                        onClick={() => setEnrollmentMode('certificado')}
                        className={`py-2.5 rounded-lg transition-all cursor-pointer text-center ${
                          enrollmentMode === 'certificado'
                            ? 'bg-[#182333] text-[#FFC72C] shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Com Certificado Oficial
                      </button>
                    </div>

                    {/* Mode Display */}
                    {enrollmentMode === 'gratis' ? (
                      <div className="space-y-4">
                        <div className="border-b border-slate-100 pb-4">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black text-emerald-700">R$ 0,00</span>
                            <span className="text-xs text-slate-500 font-semibold">100% Gratuito</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Acesso completo a todas as aulas teóricas e materiais de estudo. Você só paga taxa se optar por emitir o certificado oficial após a conclusão.
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={onEnroll}
                          className="w-full bg-[#182333] hover:bg-slate-900 active:scale-95 transition-all text-[#FFC72C] font-extrabold text-sm py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                        >
                          <span>Matricular Grátis Agora</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Seletor de Carga Horária */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                            Escolha a Carga Horária do Certificado:
                          </label>
                          <div className="grid grid-cols-1 gap-2">
                            {HOURS_OPTIONS.map((opt) => (
                              <button
                                key={opt.hours}
                                type="button"
                                onClick={() => setSelectedHours(opt.hours)}
                                className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${
                                  selectedHours === opt.hours
                                    ? 'border-[#182333] bg-[#182333]/5 ring-2 ring-[#182333]'
                                    : 'border-slate-200 hover:border-slate-300 bg-white'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                    selectedHours === opt.hours
                                      ? 'border-[#182333] bg-[#182333]'
                                      : 'border-slate-300'
                                  }`}>
                                    {selectedHours === opt.hours && (
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFC72C]" />
                                    )}
                                  </div>
                                  <span className="text-xs font-bold text-[#182333]">{opt.label}</span>
                                  {opt.isPopular && (
                                    <span className="bg-[#FFC72C] text-[#182333] text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                                      {opt.badge}
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs font-black text-[#182333]">
                                  R$ {opt.price.toFixed(2).replace('.', ',')}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Price summary */}
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-baseline justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-500 block">Investimento Único:</span>
                            <span className="text-2xl font-black text-[#182333]">
                              R$ {selectedPricing.price.toFixed(2).replace('.', ',')}
                            </span>
                          </div>
                          <span className="text-[11px] text-emerald-700 font-bold">Sem Mensalidades</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            onEnroll();
                          }}
                          className="w-full bg-[#FFC72C] hover:bg-[#F5B014] active:scale-95 transition-all text-[#182333] font-black text-sm py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                        >
                          <Award className="w-4 h-4" />
                          <span>Garantir Certificado de {selectedHours}h</span>
                        </button>
                      </div>
                    )}

                    {/* Certificate Features List */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Válido em todo o Brasil (Lei nº 9.394/96)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>QR Code para validação pública instantânea</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Acesso imediato à Sala de Aula virtual</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Avaliação online com direito a refazer</span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Landing Pages & Biolinks Version */
                  <div className="space-y-4">
                    <div className="border-b border-slate-100 pb-4">
                      <span className="text-2xl font-black text-[#182333]">
                        {course?.priceNote || 'A partir de R$ 397'}
                      </span>
                      <span className="block text-xs text-emerald-700 font-semibold mt-1">
                        Entrega expressa em até 48 horas
                      </span>
                    </div>

                    <a
                      href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20solicitar%20a%20criação%20da%20minha%20página%20profissional."
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-[#FFC72C] hover:bg-[#F5B014] active:scale-95 transition-all text-[#182333] font-extrabold text-sm py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Contratar via WhatsApp</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <ul className="text-xs text-slate-600 space-y-2 pt-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>1 Ano de Domínio e Hospedagem inclusos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Design Responsivo otimizado para celulares</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Botão direto para o seu WhatsApp</span>
                      </li>
                    </ul>
                  </div>
                )}

              </div>
            </div>

            {/* Teacher Profile Card */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center space-y-4">
              <div className="relative inline-block">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-200 mx-auto border-3 border-[#FFC72C] shadow-md">
                  <img
                    src={profSilvianeImg}
                    alt="Professora Silviane Silvério"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-[#182333] text-[#FFC72C] p-1.5 rounded-full shadow-xs" title="Docente Certificada">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="font-extrabold text-[#182333] text-base">
                  Profª. Silviane Silvério
                </h3>
                <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                  Biomédica • Coordenação Pedagógica ESDHUBEM
                </span>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Pós-graduada em Práticas Integrativas em Saúde, especialista em Desenvolvimento Humano, Gestão de Conflitos e Educação Socioemocional.
                </p>
              </div>

              <a
                href="https://lattes.cnpq.br/7481458793724724"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#182333] hover:text-amber-600 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl text-xs font-bold transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Currículo Lattes (CNPq)</span>
              </a>
            </div>

            {/* Institution Security Badge */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-center gap-1.5 font-bold text-[#182333]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Instituição Registrada e Segura</span>
              </div>
              <p className="text-[11px] text-slate-500">
                ESDHUBEM — Escola de Desenvolvimento Humano e Bem-estar
                <br />
                CNPJ: 61.928.778/0001-50 • São Paulo/SP
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
