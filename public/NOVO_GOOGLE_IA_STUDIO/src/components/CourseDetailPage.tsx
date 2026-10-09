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
  Copy,
  Eye,
  FileText,
  HelpCircle,
  Zap,
  Check
} from 'lucide-react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import profSilvianeImg from '../assets/prof-silviane.png';

interface CourseDetailPageProps {
  course?: Course;
  onBackToHome: () => void;
  onEnroll: () => void;
  onOpenValidator: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
  onSelectCourse?: (course: Course) => void;
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
  onNavigate,
  onSelectCourse
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

  // Course data
  const title = course?.title || 'Comunicação Assertiva com a Liderança';
  const subtitle = course?.subtitle || 'Aprenda a expressar suas ideias com firmeza, clareza e respeito no ambiente corporativo, desenvolvendo uma presença executiva transformadora.';
  const category = course?.category || 'Desenvolvimento Profissional';
  const image = course?.image || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80';
  const hours = course?.hours || 40;
  const rating = course?.rating || 4.9;
  const studentsCount = course?.studentsCount || 3800;
  const badge = course?.badge || 'Início Imediato';
  const isDigitalService = category === 'Landing Pages & Biolinks';

  const defaultSyllabus = [
    'Módulo 1: Fundamentos da Comunicação Assertiva e Neurobiologia do Diálogo',
    'Módulo 2: Postura Consciente, Linguagem Corporal e Autogestão Emocional',
    'Módulo 3: Aplicação Prática no Ambiente de Trabalho e Gestão de Conflitos',
    'Módulo 4: Avaliação Final e Emissão do Certificado Registrado'
  ];

  const syllabus = course?.syllabus && course.syllabus.length > 0 ? course.syllabus : defaultSyllabus;

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
        'Técnicas de mediação e desarmamento de conversas tensas em reuniões de equipe',
        'Dar e receber feedbacks construtivos sem ativar reações defensivas na equipe',
        'Comunicação escrita assertiva: redação de e-mails, relatórios e mensagens em canais corporativos',
        'Plano de Ação Individual de Assertividade para os próximos 30 dias'
      ];
      return [
        'Orientações gerais para a avaliação de fixação de conhecimento',
        'Critérios acadêmicos para aprovação e emissão do certificado registrado'
      ];
    }
    return [
      `Fundamentos essenciais e contextualização contemporânea do ${modName.replace(/Módulo \d+:\s*/, '')}`,
      'Estudo de casos reais, ferramentas de aplicação imediata e exercícios reflexivos',
      'Material complementar de leitura em PDF e referências bibliográficas recomendadas'
    ];
  };

  const selectedPricing = HOURS_OPTIONS.find(opt => opt.hours === selectedHours) || HOURS_OPTIONS[1];

  // Related courses for "Você também poderá gostar..."
  const relatedCourses = COURSES_DATA.filter(c => c.id !== course?.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-slate-800 pb-20 font-sans">
      
      {/* 1. Breadcrumb Bar - Clean, Minimal */}
      <nav aria-label="Navegação estrutural" className="bg-white border-b border-slate-200/80 py-3.5 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={onBackToHome}
                className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Início</span>
              </button>
              <span className="text-slate-300">/</span>
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('categorias');
                }}
                className="hover:text-slate-900 transition-colors font-medium"
              >
                Cursos
              </button>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Inscrições abertas • Início imediato</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section - Soft, Elegant, Highly Readable com Azul Profundo Navy #011049 */}
      <header className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white py-12 md:py-16 border-b border-blue-900/60 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-[#FFC72C] text-[#182333] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  {category}
                </span>
                <span className="bg-white/10 text-slate-200 text-xs font-medium px-3 py-1 rounded-md border border-white/10">
                  {badge}
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-medium px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Certificado Válido no Brasil
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                {title}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {subtitle}
              </p>

              {/* Meta information tags */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FFC72C]" />
                  <span>Carga Horária: <strong>{selectedHours} Horas</strong></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Tv className="w-4 h-4 text-[#FFC72C]" />
                  <span>100% Online no seu ritmo</span>
                </span>
                <span className="flex items-center gap-1 text-amber-300">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <strong className="text-white">{rating.toFixed(1)}</strong>
                  <span className="text-slate-400">({studentsCount}+ alunos)</span>
                </span>
              </div>

              {/* Share & CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={onEnroll}
                  className="bg-[#FFC72C] hover:bg-[#F5B014] text-[#182333] font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Matricular Grátis Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCopyLink}
                  className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-4 py-3 rounded-xl transition-all flex items-center gap-1.5 border border-white/15 cursor-pointer"
                  title="Copiar Link"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Link Copiado!' : 'Copiar Link do Curso'}</span>
                </button>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-slate-900">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 sm:h-56 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3.5 bg-slate-900/95 text-white flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">ESDHUBEM Oficial</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Acesso Liberado
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. Navigation Tabs - Clear, Spacious, Inviting */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-1 scrollbar-none">
            {[
              { id: 'sobre', label: 'Sobre o Curso', icon: Info },
              { id: 'conteudo', label: 'Conteúdo Programático', icon: BookOpen },
              { id: 'certificacao', label: 'Certificado & Amostra', icon: Award },
              { id: 'metodologia', label: 'Como Funciona', icon: Zap },
              { id: 'publico', label: 'Público-Alvo', icon: Users },
              { id: 'legislacao', label: 'Validade Legal', icon: FileCheck },
              { id: 'faq', label: 'Dúvidas Frequentes', icon: HelpCircle }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`whitespace-nowrap py-3 px-3.5 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#182333]' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Main Two-Column Layout */}
      <main className="max-w-6xl mx-auto py-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Rich Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <article className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-xs space-y-8">
              
              {/* TAB: SOBRE O CURSO */}
              {activeTab === 'sobre' && (
                <div className="space-y-6 text-slate-700">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#182333] tracking-tight">
                      Apresentação do Curso
                    </h2>
                    <div className="w-12 h-1 bg-[#FFC72C] rounded-full mt-2" />
                  </div>

                  <p className="text-base leading-relaxed sm:leading-8">
                    {course?.description || 'Este curso foi estruturado com base em metodologias comprovadas e humanizadas de desenvolvimento, trazendo clareza conceitual e ferramentas práticas para você aplicar com segurança no seu dia a dia.'}
                  </p>

                  <p className="text-base leading-relaxed sm:leading-8">
                    Ao longo das aulas, você vai compreender os mecanismos emocionais e relacionais que influenciam as suas decisões e aprender a se posicionar com firmeza, calma e respeito, construindo uma trajetória profissional e pessoal sólida.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        <Check className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Aplicação Prática Imediata</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Técnicas objetivas e descomplicadas para aplicar diretamente na sua rotina profissional e nos seus relacionamentos.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Certificado com Registro Oficial</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Documento com QR Code de autenticidade, amparado pela Lei nº 9.394/96 e válido em todo o território nacional.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                        <Tv className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Estudo no Seu Próprio Ritmo</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Acesse as aulas no horário que for melhor para você, pelo computador, tablet ou celular, sem prazos de encerramento.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Embasamento e Rigor Técnico</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Conteúdo estruturado pela coordenação pedagógica da ESDHUBEM com respeito à ciência e à saúde integral.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: CONTEÚDO PROGRAMÁTICO */}
              {activeTab === 'conteudo' && (
                <div className="space-y-6 text-slate-700">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#182333] tracking-tight">
                        Grade Curricular do Curso
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Clique nos módulos para visualizar os tópicos e detalhamento das aulas.
                      </p>
                    </div>
                    <span className="self-start sm:self-center bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">
                      {syllabus.length} Módulos Estruturados
                    </span>
                  </div>

                  <div className="space-y-3">
                    {syllabus.map((modTitle, index) => {
                      const isExpanded = expandedModules.includes(index);
                      const topics = getModuleTopics(modTitle, index);

                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs transition-all"
                        >
                          <button
                            type="button"
                            onClick={() => toggleModule(index)}
                            className="w-full text-left bg-slate-50 hover:bg-slate-100/80 px-5 py-4 flex justify-between items-center transition cursor-pointer select-none"
                          >
                            <div className="flex items-center gap-3.5">
                              <span className="w-7 h-7 rounded-lg bg-[#182333] text-[#FFC72C] text-xs font-bold flex items-center justify-center shrink-0">
                                {index + 1}
                              </span>
                              <div>
                                <h3 className="font-bold text-sm sm:text-base text-[#182333]">
                                  {modTitle}
                                </h3>
                                <span className="text-xs text-slate-500">
                                  {topics.length} Aulas / Tópicos de Estudo
                                </span>
                              </div>
                            </div>
                            <div className="text-slate-400">
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm space-y-3">
                              <p className="text-slate-500 font-medium">Tópicos abordados:</p>
                              <ul className="space-y-2">
                                {topics.map((topic, tIdx) => (
                                  <li key={tIdx} className="flex items-start gap-2.5 text-slate-700">
                                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                                      ✓
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
                                <span className="text-emerald-700 font-medium">
                                  Exercícios de Fixação Inclusos
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB: CERTIFICAÇÃO & AMOSTRA */}
              {activeTab === 'certificacao' && (
                <div className="space-y-6 text-slate-700">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#182333] tracking-tight">
                      Certificado com Validade Nacional
                    </h2>
                    <div className="w-12 h-1 bg-[#FFC72C] rounded-full mt-2" />
                  </div>

                  <p className="text-base leading-relaxed sm:leading-8">
                    O certificado emitido pela <strong>ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61.928.778/0001-50)</strong> tem base legal na <strong>Lei nº 9.394/96</strong> e no <strong>Decreto Presidencial nº 5.154/04</strong>.
                  </p>

                  {/* Cards de Utilidade */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <span className="text-xl">🎓</span>
                      <div>
                        <h3 className="font-bold text-sm text-[#182333]">Horas Complementares (AACCs)</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Aceito por faculdades e universidades para comprovação de atividades acadêmicas curriculares.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <span className="text-xl">⚖️</span>
                      <div>
                        <h3 className="font-bold text-sm text-[#182333]">Prova de Títulos em Concursos</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Pode pontuar em provas de títulos de concursos públicos (conforme edital de cada concurso).
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <span className="text-xl">📈</span>
                      <div>
                        <h3 className="font-bold text-sm text-[#182333]">Promoção e Plano de Carreira</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Comprove qualificação contínua para evolução de carreira e avaliações salariais no trabalho.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <span className="text-xl">💼</span>
                      <div>
                        <h3 className="font-bold text-sm text-[#182333]">Enriquecimento de Currículo</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Destaque sua formação no perfil do LinkedIn e na Plataforma Lattes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Amostra Visual do Certificado */}
                  <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#182333]">Amostra do Modelo Oficial:</span>
                      <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs font-semibold">
                        <button
                          type="button"
                          onClick={() => setCertificateViewMode('frente')}
                          className={`px-3 py-1 rounded transition cursor-pointer ${certificateViewMode === 'frente' ? 'bg-[#182333] text-[#FFC72C]' : 'text-slate-500'}`}
                        >
                          Frente
                        </button>
                        <button
                          type="button"
                          onClick={() => setCertificateViewMode('verso')}
                          className={`px-3 py-1 rounded transition cursor-pointer ${certificateViewMode === 'verso' ? 'bg-[#182333] text-[#FFC72C]' : 'text-slate-500'}`}
                        >
                          Verso
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-amber-300/80 shadow-sm text-center font-serif text-slate-800 space-y-3">
                      {certificateViewMode === 'frente' ? (
                        <>
                          <div className="border-b border-slate-200 pb-2 text-left text-xs font-sans text-slate-500">
                            <strong>ESDHUBEM — EDUCAÇÃO INTEGRAL</strong> • CNPJ 61.928.778/0001-50
                          </div>
                          <div className="py-2">
                            <span className="text-xs uppercase tracking-widest font-sans font-bold text-amber-700 block">Certificado de Conclusão</span>
                            <h3 className="text-lg font-bold text-[#182333] my-1">[Nome do Estudante]</h3>
                            <p className="text-xs font-sans text-slate-600 leading-relaxed max-w-md mx-auto">
                              concluiu o curso livre de <strong>{title}</strong> com carga horária total de <strong>{selectedHours} horas</strong>.
                            </p>
                          </div>
                          <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-xs font-sans text-slate-500">
                            <span className="flex items-center gap-1 text-[11px]"><QrCode className="w-3.5 h-3.5" /> Código: ESDH-2026-VAL</span>
                            <span className="text-[11px] font-bold">Coordenação Pedagógica</span>
                          </div>
                        </>
                      ) : (
                        <div className="text-left font-sans text-xs space-y-2">
                          <strong className="block text-[#182333] font-bold">Grade Programática no Verso:</strong>
                          <ul className="text-[11px] text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded border border-slate-200">
                            {syllabus.map((s, idx) => (
                              <li key={idx}>• {s}</li>
                            ))}
                          </ul>
                          <p className="text-[10px] text-slate-500 pt-1">
                            Amparo Legal: Lei nº 9.394/1996 (art. 42), Decreto nº 5.154/2004 e Deliberação CEE 14/1997.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenCertificatePreview) onOpenCertificatePreview();
                          else if (onNavigate) onNavigate('regras-certificacao-merito');
                        }}
                        className="text-xs font-bold text-[#182333] bg-[#FFC72C] hover:bg-amber-300 px-4 py-2.5 rounded-xl transition cursor-pointer"
                      >
                        Visualizar Modelo Completo
                      </button>
                      <button
                        type="button"
                        onClick={onOpenValidator}
                        className="text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition cursor-pointer"
                      >
                        Testar Validador com QR Code
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: METODOLOGIA */}
              {activeTab === 'metodologia' && (
                <div className="space-y-6 text-slate-700">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#182333] tracking-tight">
                      Como Funciona o Curso
                    </h2>
                    <div className="w-12 h-1 bg-[#FFC72C] rounded-full mt-2" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Inscrição Rápida e Fácil</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Comece a estudar imediatamente. Sem taxas escondidas e sem necessidade de cartão de crédito para assistir às aulas.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Sala de Aula Disponível 24h</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Acesse as aulas gravadas, apostilas em PDF e materiais de apoio a qualquer hora do dia ou da noite.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-bold text-xs">
                        3
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Estude no Seu Próprio Tempo</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Não existem prazos limites para concluir. Você dita a sua própria velocidade de estudo de acordo com sua rotina.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] flex items-center justify-center font-bold text-xs">
                        4
                      </div>
                      <h3 className="font-bold text-sm text-[#182333]">Avaliação e Certificado</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Faça a avaliação online de 10 questões de múltipla escolha. Atingindo nota 6.0 ou mais, seu certificado fica disponível na hora.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: PÚBLICO-ALVO */}
              {activeTab === 'publico' && (
                <div className="space-y-6 text-slate-700">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#182333] tracking-tight">
                      Para Quem é Este Curso?
                    </h2>
                    <div className="w-12 h-1 bg-[#FFC72C] rounded-full mt-2" />
                  </div>

                  <p className="text-base leading-relaxed sm:leading-8">
                    Não existem pré-requisitos para participar. Este curso foi desenhado para acolher:
                  </p>

                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Estudantes Universitários:</strong> que precisam de certificados válidos para abater horas complementares curriculares.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Líderes, Gestores e Supervisores:</strong> buscando aprimorar sua comunicação, mediação de conflitos e escuta ativa.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Terapeutas, Coaches e Educadores:</strong> interessados em enriquecer seu repertório relacional e metodológico.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Profissionais em Transição:</strong> que desejam fortalecer seu currículo com competências comportamentais essenciais.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* TAB: VALIDADE LEGAL */}
              {activeTab === 'legislacao' && (
                <div className="space-y-6 text-slate-700">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#182333] tracking-tight">
                      Amparo Legal dos Cursos Livres
                    </h2>
                    <div className="w-12 h-1 bg-[#FFC72C] rounded-full mt-2" />
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div>
                      <h3 className="font-bold text-[#182333] text-sm">1. Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/1996)</h3>
                      <p className="text-xs text-slate-600 mt-1">
                        Os cursos livres constituem modalidade legítima de educação profissional básica e continuada (art. 42), destinados a proporcionar qualificação e atualização profissional.
                      </p>
                    </div>

                    <div className="border-t border-slate-200 pt-3">
                      <h3 className="font-bold text-[#182333] text-sm">2. Decreto Presidencial nº 5.154/2004</h3>
                      <p className="text-xs text-slate-600 mt-1">
                        Disciplinando a oferta de cursos de formação inicial e continuada, com livre organização curricular em todo o Brasil.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1">
                    <strong>Transparência Pedagógica:</strong>
                    <p>
                      Trata-se de curso livre de capacitação e aperfeiçoamento profissional. Não equivale a diploma de graduação formal ou pós-graduação stricto sensu.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB: FAQ */}
              {activeTab === 'faq' && (
                <div className="space-y-6 text-slate-700">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#182333] tracking-tight">
                      Perguntas Frequentes
                    </h2>
                    <div className="w-12 h-1 bg-[#FFC72C] rounded-full mt-2" />
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        q: 'O curso é realmente gratuito para assistir?',
                        a: 'Sim! Na ESDHUBEM você pode se matricular, acessar a Sala de Aula virtual, assistir a todas as aulas e ler o material didático sem custo nenhum.'
                      },
                      {
                        q: 'O certificado é aceito na minha faculdade?',
                        a: 'Sim! Nossos certificados possuem amparo legal na Lei nº 9.394/96 e contêm carga horária expressa, conteúdo programático no verso, CNPJ institucional e QR Code de autenticidade.'
                      },
                      {
                        q: 'Como funciona a escolha da carga horária?',
                        a: 'Você pode escolher a carga horária que melhor atende à sua necessidade acadêmica ou profissional (20h, 40h, 60h, 80h ou 120h).'
                      },
                      {
                        q: 'Em quanto tempo recebo o certificado?',
                        a: 'Assim que você concluir as aulas e atingir nota mínima de 6.0 no teste online, seu certificado é gerado imediatamente em PDF de alta qualidade com QR Code.'
                      },
                      {
                        q: 'E se eu não passar na avaliação de primeira?',
                        a: 'Sem problemas: você pode revisar os conteúdos e refazer a avaliação online sem nenhum custo adicional.'
                      }
                    ].map((faqItem, fIdx) => (
                      <div
                        key={fIdx}
                        className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
                      >
                        <button
                          type="button"
                          onClick={() => setExpandedFaq(expandedFaq === fIdx ? null : fIdx)}
                          className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-slate-100 transition cursor-pointer select-none"
                        >
                          <span className="font-bold text-xs sm:text-sm text-[#182333]">
                            {faqItem.q}
                          </span>
                          <span className="text-slate-400">
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

            </article>

            {/* 5. Teacher Card - Grounded, Calm, Professional (NOT FLOATING) */}
            <section className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-28 h-32 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs">
                  <img
                    src={profSilvianeImg}
                    alt="Professora Silviane Silvério"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Docente & Coordenação Pedagógica</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#182333]">
                    Profª. Dra. Silviane Silvério
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Biomédica, especialista e pós-graduada em Práticas Integrativas e Complementares em Saúde. Atua no desenvolvimento de metodologias de ensino acolhedoras, com foco em inteligência socioemocional, comunicação assertiva e bem-estar integral.
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://lattes.cnpq.br/7481458793724724"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#182333] hover:text-amber-600 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Consultar Currículo Lattes no CNPq</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Clean Sticky Enrollment Box (4 Cols) */}
          <aside aria-label="Opções de inscrição" className="lg:col-span-4 space-y-6">
            
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 space-y-6 sticky top-20">
              
              {!isDigitalService ? (
                <>
                  <div>
                    <h3 className="text-base font-bold text-[#182333]">Opções de Matrícula</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Escolha como deseja realizar o curso:</p>
                  </div>

                  {/* Toggle Mode */}
                  <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-bold border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setEnrollmentMode('gratis')}
                      className={`py-2 rounded-lg transition cursor-pointer text-center ${
                        enrollmentMode === 'gratis'
                          ? 'bg-white text-[#182333] shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Acesso Gratuito
                    </button>
                    <button
                      type="button"
                      onClick={() => setEnrollmentMode('certificado')}
                      className={`py-2 rounded-lg transition cursor-pointer text-center ${
                        enrollmentMode === 'certificado'
                          ? 'bg-[#182333] text-[#FFC72C] shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Com Certificado
                    </button>
                  </div>

                  {enrollmentMode === 'gratis' ? (
                    <div className="space-y-4">
                      <div className="border-b border-slate-100 pb-3">
                        <div className="text-2xl font-bold text-emerald-700">R$ 0,00</div>
                        <span className="text-xs text-slate-500 font-medium">Acesso livre a todas as aulas</span>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          Você estuda todo o conteúdo didático sem custos. Se após terminar desejar o certificado registrado, poderá solicitá-lo.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={onEnroll}
                        className="w-full bg-[#182333] hover:bg-slate-900 text-[#FFC72C] font-bold text-sm py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Acessar Aulas Grátis</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                          Selecione a Carga Horária:
                        </label>
                        <div className="space-y-2">
                          {HOURS_OPTIONS.map(opt => (
                            <button
                              key={opt.hours}
                              type="button"
                              onClick={() => setSelectedHours(opt.hours)}
                              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${
                                selectedHours === opt.hours
                                  ? 'border-[#182333] bg-[#182333]/5 ring-1 ring-[#182333]'
                                  : 'border-slate-200 hover:border-slate-300 bg-white'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  selectedHours === opt.hours ? 'border-[#182333] bg-[#182333]' : 'border-slate-300'
                                }`}>
                                  {selectedHours === opt.hours && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFC72C]" />
                                  )}
                                </div>
                                <span className="text-xs font-bold text-[#182333]">{opt.label}</span>
                                {opt.isPopular && (
                                  <span className="bg-[#FFC72C] text-[#182333] text-[10px] font-bold px-2 py-0.5 rounded-md">
                                    Mais Escolhido
                                  </span>
                                )}
                              </div>
                              <span className="text-xs font-bold text-[#182333]">
                                R$ {opt.price.toFixed(2).replace('.', ',')}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-baseline justify-between text-xs">
                        <div>
                          <span className="text-slate-500 block text-[11px]">Valor Único de Emissão:</span>
                          <span className="text-xl font-bold text-[#182333]">
                            R$ {selectedPricing.price.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                        <span className="text-emerald-700 font-bold">Sem Mensalidades</span>
                      </div>

                      <button
                        type="button"
                        onClick={onEnroll}
                        className="w-full bg-[#FFC72C] hover:bg-[#F5B014] text-[#182333] font-bold text-sm py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Award className="w-4 h-4" />
                        <span>Garantir Certificado de {selectedHours}h</span>
                      </button>
                    </div>
                  )}

                  <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Certificado válido em todo o Brasil (LDB 9.394/96)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>QR Code para validação pública instantânea</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Acesso imediato à Sala de Aula virtual</span>
                    </li>
                  </ul>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-2xl font-bold text-[#182333]">
                      {course?.priceNote || 'A partir de R$ 397'}
                    </span>
                    <span className="block text-xs text-emerald-700 font-medium mt-1">
                      Entrega expressa em até 48 horas
                    </span>
                  </div>

                  <a
                    href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20solicitar%20a%20criação%20da%20minha%20página%20profissional."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#FFC72C] hover:bg-[#F5B014] text-[#182333] font-bold text-sm py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Contratar via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <ul className="text-xs text-slate-600 space-y-2 pt-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>1 Ano de Domínio e Hospedagem inclusos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Design Responsivo otimizado para celulares</span>
                    </li>
                  </ul>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 text-center text-[11px] text-slate-500">
                ESDHUBEM — CNPJ: 61.928.778/0001-50
              </div>

            </div>

          </aside>

        </div>

        {/* 6. "Você também poderá gostar..." (Cursos Relacionados) */}
        <section className="mt-16 pt-10 border-t border-slate-200">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#182333] tracking-tight">
              Você também poderá gostar...
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Cursos selecionados para enriquecer sua formação acadêmica e seu bem-estar pessoal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((relCourse) => (
              <div
                key={relCourse.id}
                onClick={() => {
                  if (onSelectCourse) {
                    onSelectCourse(relCourse);
                  }
                }}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col group"
              >
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={relCourse.image}
                    alt={relCourse.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#182333]/90 text-[#FFC72C] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                    {relCourse.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#182333]" />
                    {relCourse.hours}h
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-sm text-[#182333] group-hover:text-blue-900 transition-colors line-clamp-2">
                      {relCourse.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {relCourse.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700">
                      {relCourse.pillar === 'freepremium' ? 'Acesso Livre' : 'Certificado Válido'}
                    </span>
                    <span className="text-xs font-bold text-[#182333] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Ver Curso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
};
