import React from 'react';
import { Sparkles, Play, ExternalLink, CheckCircle2, Tv, BrainCircuit, GraduationCap, Clock } from 'lucide-react';

export const WelcomeVideoSection: React.FC = () => {
  const watchUrl =
    'https://odysee.com/@esdhubem:a/Bem-vindo-a-ESDHUBEM:b?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ&lid=56adb18446e756be8f3d80c8dda78b83024bd5c7';
  const embedUrl =
    'https://odysee.com/$/embed/@esdhubem:a/Bem-vindo-a-ESDHUBEM:b?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ';

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#e8f2fc] via-white to-white border-b border-slate-200" id="apresentacao-esdhubem">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção de Vídeo */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-700 animate-pulse" />
            <span>Vídeo de Boas-Vindas & Apresentação</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Conheça a Proposta da <span className="text-[#011049]">ESDHUBEM</span>
          </h3>

          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Um vídeo breve para você ficar por dentro da nossa escola, entender o método de ensino em mapas mentais e descobrir como potencializar seu aprendizado.
          </p>
        </div>

        {/* Card do Player de Vídeo em Alta Definição */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-300/80 shadow-2xl shadow-blue-950/15">
          
          {/* Barra Superior estilo Player Profissional */}
          <div className="px-4 py-3 bg-[#011049] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold text-white ml-2 truncate">
                Apresentação Oficial • Bem-vindo à ESDHUBEM
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Tv className="w-3 h-3 text-emerald-400" />
                <span>Odysee HD</span>
              </span>
            </div>
          </div>

          {/* Iframe com Aspect-Ratio 16:9 responsivo */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              id="welcome-odysee-iframe"
              title="Bem-vindo à ESDHUBEM - Apresentação da Escola"
              style={{ width: '100%', height: '100%', border: 'none' }}
              src={embedUrl}
              allowFullScreen
            ></iframe>
          </div>

          {/* Rodapé Informativo do Player */}
          <div className="px-5 py-3.5 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-medium text-center sm:text-left">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Assista diretamente acima ou acesse pelo canal oficial da ESDHUBEM</span>
            </div>

            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFC72C] hover:bg-[#ffdf79] text-[#011049] font-black transition-all shadow-sm hover:scale-105 shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Assistir no Odysee</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* 3 Pilares Rápidos de Apresentação */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider">
                Método Visual
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                Mapas mentais que aceleram a fixação e o entendimento profundo.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider">
                Certificação Válida
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                Cursos livres com amparo legal para currículo e horas complementares.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider">
                Estude no seu Tempo
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                Acesso flexível em qualquer dispositivo, sem travas ou prazos rígidos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
