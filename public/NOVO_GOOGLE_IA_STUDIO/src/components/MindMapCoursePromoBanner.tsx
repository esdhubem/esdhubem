import React from 'react';
import {
  Sparkles,
  Play,
  ExternalLink,
  BookOpen,
  Award,
  CheckCircle2,
  Tv,
  BrainCircuit,
  Compass,
  ArrowRight,
  ClipboardList
} from 'lucide-react';
import bannerImg from '../assets/banner_mindmap_hero.jpg';

interface MindMapCoursePromoBannerProps {
  onSelectCourse?: () => void;
  onNavigatePedagogy?: () => void;
  onNavigateModalities?: () => void;
}

export const MindMapCoursePromoBanner: React.FC<MindMapCoursePromoBannerProps> = ({
  onSelectCourse,
  onNavigatePedagogy,
  onNavigateModalities,
}) => {
  const odyseeWatchUrl =
    'https://odysee.com/@esdhubem:a/mapas-mentais:4?lid=56adb18446e756be8f3d80c8dda78b83024bd5c7';
  const odyseeEmbedUrl =
    'https://odysee.com/$/embed/@esdhubem:a/mapas-mentais:4';

  return (
    <section className="py-8 sm:py-12 bg-[#F8FAFC]" id="banner-curso-mapa-mental">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Principal do Banner com Design Tecnológico e Iluminado */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#011049] via-[#041957] to-[#011049] border border-cyan-400/40 shadow-2xl shadow-blue-950/40 text-white">
          
          {/* Efeitos de Iluminação Cibernética no Fundo */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Coluna Esquerda (Copywriting & Proposta de Valor) */}
              <div className="lg:col-span-7 flex flex-col space-y-5">
                
                {/* Badges de Identificação do Curso */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs sm:text-sm font-black tracking-wide shadow-sm shadow-emerald-500/20">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
                    <span>CURSO FREEPREMIUM • 100% GRATUITO</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-200 text-xs font-bold tracking-wide">
                    <BrainCircuit className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Metodologia Central da ESDHUBEM</span>
                  </span>
                </div>

                {/* Título Principal */}
                <div>
                  <p className="text-xs sm:text-sm uppercase font-extrabold tracking-widest text-[#FFC72C] mb-1">
                    Curso Principal & Fundamento Pedagógico
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-black tracking-tight leading-tight text-white drop-shadow-md">
                    O que é Mapa Mental e <span className="text-cyan-300 underline decoration-cyan-400/40 underline-offset-4">Como Usar?</span>
                  </h2>
                </div>

                {/* Descrição de Autoridade */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                  Este é o curso que <strong className="text-white font-bold">norteia toda a metodologia pedagógica da ESDHUBEM</strong>. 
                  Aprenda a arte de pensar visualmente, conectar ideias em alta velocidade e dominar a tecnologia do escrever e do mapear que aplicamos em todas as nossas formações.
                </p>

                {/* 3 Benefícios / Pilares Rápidos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col">
                    <span className="text-[#FFC72C] font-black text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                      <BrainCircuit className="w-3.5 h-3.5" />
                      Neurociência
                    </span>
                    <span className="text-xs text-slate-300 leading-snug">
                      Fixação profunda através do raciocínio radial do cérebro.
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col">
                    <span className="text-cyan-300 font-black text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5" />
                      Tríade da Escola
                    </span>
                    <span className="text-xs text-slate-300 leading-snug">
                      Base prática da avaliação por mapa, texto à mão e áudio.
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col">
                    <span className="text-emerald-300 font-black text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Freepremium
                    </span>
                    <span className="text-xs text-slate-300 leading-snug">
                      Aulas abertas sem travas. Só pague o certificado se desejar.
                    </span>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {/* Botão Primário: Assistir no Odysee */}
                  <a
                    href={odyseeWatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all cursor-pointer hover:-translate-y-0.5"
                  >
                    <Play className="w-4 h-4 fill-current text-slate-950" />
                    <span>Assistir Aulas Grátis no Odysee</span>
                  </a>

                  {/* Botão Secundário: Detalhes do Curso */}
                  {onSelectCourse && (
                    <button
                      type="button"
                      onClick={onSelectCourse}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-sm border border-white/20 hover:border-cyan-400/50 transition-all cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-cyan-300" />
                      <span>Ver Grade do Curso</span>
                    </button>
                  )}

                  {/* Botão Terciário: Diretrizes Pedagógicas */}
                  {onNavigatePedagogy && (
                    <button
                      type="button"
                      onClick={onNavigatePedagogy}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full text-slate-300 hover:text-cyan-200 text-xs sm:text-sm font-semibold hover:underline cursor-pointer"
                    >
                      <span>Entenda a Metodologia</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Botão Quaternário: Guia das Modalidades de Formação */}
                  {onNavigateModalities && (
                    <button
                      type="button"
                      onClick={onNavigateModalities}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#011049] hover:bg-[#061e47] active:scale-95 text-[#FFC72C] font-black text-xs sm:text-sm border border-cyan-400/40 shadow-lg shadow-[#011049]/40 hover:shadow-cyan-400/20 hover:scale-105 transition-all cursor-pointer"
                    >
                      <ClipboardList className="w-4 h-4 text-[#FFC72C]" />
                      <span>Ver Guia das Modalidades</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>

              {/* Coluna Direita (Player Odysee Interativo Incorporado) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 shadow-2xl bg-black/60 backdrop-blur-md">
                  
                  {/* Barra de Topo Estilo Player Premium */}
                  <div className="px-4 py-2.5 bg-[#031338]/90 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="text-[11px] font-bold text-slate-300 ml-2 truncate">
                        Videoaula Oficial • ESDHUBEM
                      </span>
                    </div>

                    <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <Tv className="w-3 h-3 text-emerald-400" />
                      <span>Odysee HD</span>
                    </span>
                  </div>

                  {/* Iframe Interativo do Odysee */}
                  <div className="relative w-full aspect-video bg-slate-950">
                    <iframe
                      id="banner-odysee-iframe"
                      title="O que é mapa mental e como usar - ESDHUBEM"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      src={odyseeEmbedUrl}
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Rodapé do Player com Acesso à Playlist */}
                  <div className="px-4 py-3 bg-[#020d2a]/95 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Playlist completa liberada</span>
                    </div>

                    <a
                      href={odyseeWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#FFC72C] hover:text-[#ffdf79] font-bold transition-colors"
                    >
                      <span>Abrir no Odysee</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                </div>

                {/* Sub-legenda de Acolhimento */}
                <p className="text-center text-[11px] text-cyan-200/70 mt-2.5">
                  Assista direto acima ou abra a playlist completa sem necessidade de login.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
