import React from 'react';
import { Sparkles, Play, ExternalLink, CheckCircle2, Tv, BrainCircuit, GraduationCap, Clock } from 'lucide-react';

export const WelcomeVideoSection: React.FC = () => {
  const watchUrl =
    'https://odysee.com/@esdhubem:a/Bem-vindo-a-ESDHUBEM:b?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ&lid=56adb18446e756be8f3d80c8dda78b83024bd5c7';
  const embedUrl =
    'https://odysee.com/$/embed/@esdhubem:a/Bem-vindo-a-ESDHUBEM:b?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ';

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-[#e8f2fc] via-white to-white border-b border-slate-200" id="apresentacao-esdhubem">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção de Vídeo */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-extrabold tracking-wide uppercase shadow-2xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-700 animate-pulse" />
            <span>Vídeo de Boas-Vindas & Apresentação</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Conheça a Proposta da <span className="text-[#011049]">ESDHUBEM</span>
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Um vídeo breve para você ficar por dentro da nossa escola, entender o método de ensino em mapas mentais e descobrir como potencializar seu aprendizado.
          </p>
        </div>

        {/* Card do Player de Vídeo em Tamanho Otimizado e Equilibrado */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-300/80 shadow-xl shadow-blue-950/15">
            
            {/* Barra Superior estilo Player Profissional */}
            <div className="px-3.5 py-2 bg-[#011049] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[11px] sm:text-xs font-bold text-white ml-1.5 truncate">
                  Apresentação Oficial • Bem-vindo à ESDHUBEM
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Tv className="w-2.5 h-2.5 text-emerald-400" />
                  <span>Vídeo Oficial</span>
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
            <div className="px-4 py-2 bg-[#011049] border-t border-white/10 flex items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 text-white font-black text-xs sm:text-sm tracking-wide">
                <Play className="w-3.5 h-3.5 text-[#FFC72C] fill-[#FFC72C]" />
                <span>Assista o vídeo</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pilares Rápidos de Apresentação */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5 max-w-2xl mx-auto">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase text-slate-800 tracking-wider">
                Método Visual
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                Mapas mentais que aceleram a fixação e o entendimento.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase text-slate-800 tracking-wider">
                Certificação Válida
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                Cursos livres com amparo legal para currículo e horas.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase text-slate-800 tracking-wider">
                Estude no seu Tempo
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                Acesso flexível em qualquer dispositivo, sem prazos rígidos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
