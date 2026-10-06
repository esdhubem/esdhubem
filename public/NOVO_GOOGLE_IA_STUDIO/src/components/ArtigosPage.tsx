import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  Award,
  ShieldCheck,
  Sparkles,
  User,
  Calendar,
  Tag,
  ChevronRight,
  Send,
  CheckCircle2,
  Filter,
  Target,
  Brain
} from 'lucide-react';
import { ACADEMIC_ARTICLES } from '../data/artigosData';
import { AcademicArticle } from '../types';

interface ArtigosPageProps {
  onBackToHome: () => void;
  onSelectArticle: (article: AcademicArticle) => void;
  onNavigate?: (sectionId: string) => void;
}

export const ArtigosPage: React.FC<ArtigosPageProps> = ({
  onBackToHome,
  onSelectArticle,
  onNavigate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    'Práticas Integrativas & Saúde',
    'Desenvolvimento Profissional & Liderança',
    'Pedagogia Integrativa & Educação'
  ];

  const filteredArticles = ACADEMIC_ARTICLES.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.authors.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      art.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase())) ||
      art.doi.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory ? art.category === selectedCategory : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Top Banner / Hero */}
      <div className="bg-[#182333] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors text-sm font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </button>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC72C] text-xs font-bold tracking-wide mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Repositório Aberto de Manuscritos de Estudos e Pesquisa</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight uppercase">
                REPOSITÓRIO ARTIGOS DOS ALUNOS <span className="text-[#FFC72C]">ESDHUBEM</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Acesse a coleção oficial de manuscritos de conclusão de curso, artigos, pesquisas e de estudos publicados pela coordenação pedagógica e por alunos da <strong>ESDHUBEM</strong>, preservados digitalmente com atribuição de <strong>DOI no Zenodo / CERN</strong>.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl w-full lg:w-auto shrink-0 shadow-2xl flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 font-medium">Indexação Oficial</p>
                  <p className="text-sm font-bold text-white">Zenodo (CERN / Suíça)</p>
                </div>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFC72C]/20 flex items-center justify-center text-[#FFC72C] font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 font-medium">Atribuição de Registro</p>
                  <p className="text-sm font-bold text-white">DOI Criptográfico Único</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20 space-y-8">
        {/* Manuscritos de Estudo e Pesquisa */}
        <div className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-slate-800 shadow-md space-y-6">
          <div className="space-y-3 pb-4 border-b border-amber-500/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>Coleção Oficial ESDHUBEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              O que é este Espaço de Artigos, Estudos e Pesquisa?
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Este repositório reúne os <strong>Manuscritos de Conclusão de Curso (MCC)</strong> e as produções intelectuais escritas por nossos alunos como forma de obtenção de certificação do tipo ouro.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Aqui buscamos refletir uma comunidade engajada em melhorar a qualidade da sua escrita, produção intelectual e publicação.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Todos os trabalhos selecionados são preservados digitalmente e contam com atribuição de <strong>DOI (Digital Object Identifier)</strong> internacional por meio do ecossistema <strong>Zenodo / CERN</strong>, garantindo autoria perene e circulação global.
            </p>
          </div>

          {/* 🎯 O Propósito da nossa Produção Escrita */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
              <Target className="w-5 h-5 text-amber-600 shrink-0" />
              <span>🎯 O Propósito da Nossa Produção Escrita</span>
            </div>
            
            <div className="space-y-1">
              <p className="text-slate-800 font-medium text-xs sm:text-sm leading-relaxed">
                Escrever é aprender, organizar ideias e compartilhar conhecimento.
              </p>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                Na <strong>ESDHUBEM</strong>, a produção escrita pode contribuir para:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
              <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-1.5 shadow-2xs">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block text-amber-900">
                  • Formação acadêmica
                </span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Desenvolver leitura, escrita, pesquisa e argumentação.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-1.5 shadow-2xs">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block text-amber-900">
                  • Comunicação
                </span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Aprender a expressar ideias com clareza.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-1.5 shadow-2xs">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block text-amber-900">
                  • Desenvolvimento profissional
                </span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Construir competências de pesquisa, escrita e comunicação.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-1.5 shadow-2xs">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block text-amber-900">
                  • Autoria
                </span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Transformar conhecimentos e experiências em artigos, estudos, manuais e livros.
                </p>
              </div>
            </div>

            <p className="text-slate-800 font-semibold text-xs sm:text-sm leading-relaxed pt-1">
              Aprender também pode ser o começo de uma trajetória de autoria.
            </p>
          </div>

          {/* 🧠 A Escrita como Desenvolvimento Humano */}
          <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-2xl space-y-1.5">
            <h4 className="text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2">
              <Brain className="w-4 h-4 text-amber-700" />
              <span>🧠 A Escrita como Desenvolvimento Humano</span>
            </h4>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Mais do que gerar métricas, acreditamos que a capacidade de ler criticamente, interpretar a realidade e expressar ideias com clareza faz parte de uma jornada de autodescoberta e cidadania. Navegue pelas publicações abaixo e conheça o conhecimento gerado em nossa rede!
            </p>
          </div>

          {onNavigate && (
            <div className="pt-1">
              <button
                type="button"
                onClick={() => onNavigate('diretrizes-publicacao')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-950 hover:text-black bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <span>Conheça as diretrizes de publicação da ESDHUBEM</span>
                <ChevronRight className="w-4 h-4 text-amber-700" />
              </button>
            </div>
          )}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por título, autor, palavra-chave ou DOI..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === null
                  ? 'bg-[#243042] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos ({ACADEMIC_ARTICLES.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-wider">
              Artigos Publicados
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              Exibindo {filteredArticles.length} trabalho(s)
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                      {article.category}
                    </span>
                    <a
                      href={article.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold hover:underline"
                    >
                      DOI: {article.doi}
                    </a>
                  </div>

                  <h4
                    onClick={() => onSelectArticle(article)}
                    className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer leading-snug"
                  >
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {article.abstractPt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="font-semibold text-slate-800">
                      Por: {article.authors.join(', ')}
                    </span>
                    <span>•</span>
                    <span>{article.institution}</span>
                    <span>•</span>
                    <span>{article.publicationDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                  <button
                    onClick={() => onSelectArticle(article)}
                    className="px-4 py-2.5 rounded-xl bg-[#243042] hover:bg-[#182333] text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Ver Detalhes</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Article Submission Workflow Guide */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFC72C]/20 flex items-center justify-center text-slate-950 font-black">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Como os Alunos ESDHUBEM Publicam Seus Trabalhos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Passo a passo simples para registrar seu artigo no Zenodo e obter a validação no Repositório Oficial ESDHUBEM.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#182333] text-white text-xs font-bold flex items-center justify-center">
                1
              </div>
              <h4 className="font-bold text-sm text-slate-900">Escreva seu Artigo</h4>
              <p className="text-xs text-slate-600">
                Siga as orientações do seu curso e monte seu trabalho no modelo acadêmico padrão.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#182333] text-white text-xs font-bold flex items-center justify-center">
                2
              </div>
              <h4 className="font-bold text-sm text-slate-900">Deposite no Zenodo</h4>
              <p className="text-xs text-slate-600">
                Crie sua conta no Zenodo.org e faça o upload do PDF do seu artigo científico.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#182333] text-white text-xs font-bold flex items-center justify-center">
                3
              </div>
              <h4 className="font-bold text-sm text-slate-900">Gerador de DOI</h4>
              <p className="text-xs text-slate-600">
                O Zenodo gera gratuitamente o número de identificação internacional (DOI) do seu artigo.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#182333] text-white text-xs font-bold flex items-center justify-center">
                4
              </div>
              <h4 className="font-bold text-sm text-slate-900">Submeta na ESDHUBEM</h4>
              <p className="text-xs text-slate-600">
                Informe o link/DOI na Sala de Aula para receber a validação e exibição em nosso repositório.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
