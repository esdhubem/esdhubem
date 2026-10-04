import React from 'react';
import {
  Scale,
  ShieldCheck,
  CreditCard,
  RefreshCcw,
  Truck,
  ArrowLeft,
  ChevronRight,
  Gavel,
  CheckCircle2,
  GraduationCap,
  Users,
  Building2,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface PoliticasPageProps {
  onBackToHome: () => void;
  onNavigateToPolicy: (policyId: string) => void;
  onNavigate?: (sectionId: string) => void;
  onOpenValidator?: () => void;
}

interface PolicyCardItem {
  id: string;
  title: string;
  badge?: string;
  summary: string;
  icon: React.ReactNode;
  color: string;
  actionType: 'policy' | 'navigate' | 'validator';
  target?: string;
}

export const PoliticasPage: React.FC<PoliticasPageProps> = ({
  onBackToHome,
  onNavigateToPolicy,
  onNavigate,
  onOpenValidator
}) => {
  const POLICIES_DATA: PolicyCardItem[] = [
    {
      id: 'privacidade',
      title: 'Política de Privacidade & LGPD',
      badge: 'Proteção de Dados',
      summary: 'Nossa política de proteção de dados, privacidade dos usuários e estrita adequação à Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).',
      icon: <ShieldCheck className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      actionType: 'policy'
    },
    {
      id: 'termos',
      title: 'Termos de Uso & Responsabilidades',
      badge: 'Contrato Educacional',
      summary: 'Condições gerais de utilização da plataforma ESDHUBEM, responsabilidades do aluno, direitos autorais e modelo Freepremium.',
      icon: <Gavel className="w-6 h-6" />,
      color: 'from-slate-600 to-slate-800',
      actionType: 'policy'
    },
    {
      id: 'pagamentos-reembolso',
      title: 'Política de Pagamento & Reembolso',
      badge: 'Financeiro & Garantia',
      summary: 'Formas de pagamento (Pix, Cartão, Boleto), regras de parcelamento, garantia incondicional de 7 dias (CDC) e procedimentos de estorno.',
      icon: <CreditCard className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
      actionType: 'policy'
    },
    {
      id: 'codigo-conduta',
      title: 'Código de Conduta & Ética',
      badge: 'Convivência Acadêmica',
      summary: 'Diretrizes de respeito mútuo, integridade intelectual, combate rigoroso ao plágio e uso ético de tecnologias no ambiente de estudos.',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-purple-600 to-indigo-700',
      actionType: 'policy'
    },
    {
      id: 'antifraude',
      title: 'Verificação Antifraude',
      badge: 'Validação Oficial',
      summary: 'Protocolos de segurança criptográfica, código hash e QR Code para autenticação pública e prevenção de fraudes e falsificações.',
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'from-emerald-600 to-teal-700',
      actionType: 'validator'
    },
    {
      id: 'direitos-aluno',
      title: 'Horas Complementares & Amparo Legal',
      badge: 'Base Jurídica',
      summary: 'Validade nacional dos cursos livres segundo a Lei nº 9.394/96 (LDB) e Decreto nº 5.154/04 para universidades, concursos e progressão.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-sky-500 to-blue-600',
      actionType: 'navigate',
      target: 'direitos-aluno'
    },
    {
      id: 'corpo-docente',
      title: 'Corpo Docente & Especialistas',
      badge: 'Equipe Pedagógica',
      summary: 'Apresentação dos nossos professores, especialistas convidados, autores diamante e corpo técnico de desenvolvimento humano.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-amber-500 to-amber-600',
      actionType: 'navigate',
      target: 'corpo-docente'
    },
    {
      id: 'institucional',
      title: 'Dados Institucionais & Coordenação',
      badge: 'Transparência Jurídica',
      summary: 'Informações societárias, CNPJ (61.928.778/0001-50), endereço da sede, ouvidoria e canais oficiais de contato com a coordenação.',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-slate-700 to-slate-900',
      actionType: 'policy'
    },
    {
      id: 'carta-aberta',
      title: 'Carta Aberta da Escola',
      badge: 'Manifesto Institucional',
      summary: 'Manifesto pedagógico sobre democratização do conhecimento, valorização da autoria e nosso compromisso com a formação humana integral.',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-amber-400 to-amber-500',
      actionType: 'navigate',
      target: 'carta-aberta'
    }
  ];

  const handleCardClick = (item: PolicyCardItem) => {
    if (item.actionType === 'validator' && onOpenValidator) {
      onOpenValidator();
      return;
    }

    if (item.actionType === 'navigate' && item.target && onNavigate) {
      onNavigate(item.target);
      return;
    }

    // Default policy detail view
    const policyId = item.id === 'pagamentos-reembolso' ? 'pagamentos' : item.id;
    onNavigateToPolicy(policyId);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#182333] border-b border-slate-700/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">
              Legal & Transparência
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Scale className="w-4 h-4 text-[#FFC72C]" />
            <span>Transparência Institucional</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Normas e Diretrizes</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Nossas <span className="text-[#FFC72C]">Políticas & Transparência</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Acreditamos na total transparência. Aqui você encontra todas as regras de convivência, diretrizes de segurança, privacidade de dados e termos comerciais que regem nossa plataforma.
          </p>
        </div>

        {/* Decorative background logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Scale className="w-96 h-96 text-white" />
        </div>
      </header>

      {/* Main Content Area: Cards Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POLICIES_DATA.map((policy) => (
            <div
              key={policy.id}
              onClick={() => handleCardClick(policy)}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${policy.color} shadow-md group-hover:scale-105 transition-transform`}>
                    {policy.icon}
                  </div>
                  {policy.badge && (
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {policy.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-[#182333] text-lg leading-tight group-hover:text-amber-600 transition-colors">
                  {policy.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {policy.summary}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-600 group-hover:text-amber-600 transition-colors">
                  Acessar informações
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#243042] group-hover:text-white transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
