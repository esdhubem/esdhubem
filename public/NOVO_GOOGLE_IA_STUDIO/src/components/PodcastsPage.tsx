import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Headphones,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Share2,
  Sparkles,
  BookOpen,
  Search,
  ExternalLink,
  Radio,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Info,
  Layers,
  Compass,
  FileText,
  Clock,
  Calendar,
  User,
  Music,
  Download
} from 'lucide-react';
import { PODCAST_EPISODES, PODCAST_CATEGORIES, PODCAST_CHANNELS } from '../data/podcastsData';
import { PodcastEpisode } from '../types';

interface PodcastsPageProps {
  onBackToHome: () => void;
  onNavigateToCourses?: () => void;
}

export const PodcastsPage: React.FC<PodcastsPageProps> = ({
  onBackToHome,
  onNavigateToCourses
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.9);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [expandedEpisodeId, setExpandedEpisodeId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [playerMode, setPlayerMode] = useState<'native' | 'spotify'>('native');

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Filter episodes
  const filteredEpisodes = PODCAST_EPISODES.filter((ep) => {
    const matchesCategory =
      selectedCategory === 'Todos' || ep.category === selectedCategory;
    const matchesSearch =
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle Play/Pause
  const togglePlay = (episode?: PodcastEpisode) => {
    if (episode && episode.id !== currentEpisode.id) {
      setCurrentEpisode(episode);
      setIsPlaying(true);
      setCurrentTime(0);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
      return;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  // Time formatting helper
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleSkip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        Math.max(audioRef.current.currentTime + seconds, 0),
        duration || 9999
      );
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 2];
    const nextIndex = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIndex];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackRate;
    }
  }, [currentEpisode]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 flex flex-col">
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src={currentEpisode.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Hero Header */}
      <div className="bg-[#182333] pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white border-b border-slate-700/60 shadow-lg">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, #FFC72C 2%, transparent 0%)',
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors text-sm font-semibold cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Voltar para o Início</span>
          </button>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC72C]/15 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold tracking-wide uppercase shadow-sm">
                <Radio className="w-4 h-4 animate-pulse text-[#FFC72C]" />
                <span>PODCAST ESDHUBEM • VOZES DA SABEDORIA & CIÊNCIA ABERTA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Podcasts & Ensaios Sonoros da ESDHUBEM
              </h1>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                Diálogos, reflexões e aulas em áudio que unem{' '}
                <strong className="text-[#FFC72C] font-semibold">
                  tradição, símbolo, sensibilidade e tecnologia
                </strong>
                . Navegue pela filosofia, hermetismo, astrologia simbólica, escrita criativa, saúde coletiva e inteligência artificial direto no seu fone de ouvido.
              </p>

              {/* Streaming Platforms Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Disponível em:
                </span>

                <a
                  href={PODCAST_CHANNELS.spotifyShowUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1DB954]/20 hover:bg-[#1DB954]/30 border border-[#1DB954]/50 text-[#1DB954] text-xs font-bold transition-all hover:scale-105"
                  title="Ouvir no Spotify"
                >
                  <Music className="w-3.5 h-3.5" />
                  <span>Spotify</span>
                </a>

                <a
                  href={PODCAST_CHANNELS.applePodcastsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-300 text-xs font-bold transition-all hover:scale-105"
                  title="Ouvir no Apple Podcasts"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Apple Podcasts</span>
                </a>

                <a
                  href={PODCAST_CHANNELS.youtubePlaylistUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-300 text-xs font-bold transition-all hover:scale-105"
                  title="Assistir no YouTube"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium transition-all"
                  title="Compartilhar link da página"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copiado!' : 'Compartilhar'}</span>
                </button>
              </div>
            </div>

            {/* Featured Now Playing Hero Card */}
            <div className="w-full lg:w-96 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl shadow-2xl flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-semibold text-[#FFC72C]">
                  <Headphones className="w-4 h-4" />
                  Em Destaque Agora
                </span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-mono">
                  {currentEpisode.duration}
                </span>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src={currentEpisode.coverImage}
                  alt={currentEpisode.title}
                  className="w-20 h-20 rounded-2xl object-cover border border-white/20 shadow-md shrink-0"
                />
                <div className="min-w-0">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#FFC72C] block truncate">
                    Episódio {currentEpisode.episodeNumber.toString().padStart(2, '0')}
                  </span>
                  <h3 className="font-bold text-sm text-white line-clamp-2 leading-snug">
                    {currentEpisode.title}
                  </h3>
                  <p className="text-xs text-slate-300 truncate mt-1">
                    {currentEpisode.host}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <button
                  onClick={() => togglePlay()}
                  className="flex-1 mr-2 bg-[#FFC72C] hover:bg-[#ffcf4b] text-slate-950 font-black py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-slate-950" />
                      <span>Pausar Episódio</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-slate-950" />
                      <span>Ouvir Episódio {currentEpisode.episodeNumber}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 flex-1 w-full">
        {/* Sticky / Active Player Bar if an episode is selected */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <img
                src={currentEpisode.coverImage}
                alt={currentEpisode.title}
                className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full uppercase">
                    Episódio {currentEpisode.episodeNumber}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {currentEpisode.category}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate mt-0.5">
                  {currentEpisode.title}
                </h4>
                <p className="text-xs text-slate-500 truncate">
                  {currentEpisode.host} • {currentEpisode.releaseDate}
                </p>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <button
                onClick={() => handleSkip(-15)}
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                title="Voltar 15 segundos"
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              <button
                onClick={() => togglePlay()}
                className="w-12 h-12 rounded-full bg-[#182333] hover:bg-[#243042] text-[#FFC72C] flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
                title={isPlaying ? 'Pausar' : 'Reproduzir'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-[#FFC72C]" />
                ) : (
                  <Play className="w-6 h-6 fill-[#FFC72C] translate-x-0.5" />
                )}
              </button>

              <button
                onClick={() => handleSkip(15)}
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                title="Avançar 15 segundos"
              >
                <RotateCw className="w-5 h-5" />
              </button>

              {/* Playback speed toggle */}
              <button
                onClick={cyclePlaybackRate}
                className="px-2.5 py-1 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                title="Velocidade de reprodução"
              >
                {playbackRate}x
              </button>

              {/* Volume toggle */}
              <div className="hidden sm:flex items-center gap-1.5 ml-2">
                <button
                  onClick={toggleMute}
                  className="text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-500" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 accent-[#182333] cursor-pointer"
                />
              </div>

              {/* Direct MP3 Download */}
              {currentEpisode.audioUrl && (
                <a
                  href={currentEpisode.audioUrl}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-500 hover:text-[#182333] hover:bg-slate-100 rounded-full transition-colors"
                  title="Baixar arquivo MP3 para ouvir offline"
                >
                  <Download className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#FFC72C]"
              />
              <span className="text-xs font-mono text-slate-500 w-10">
                {duration ? formatTime(duration) : currentEpisode.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Guidance Card: Onde hospedar e como publicar MP3 / Spotify */}
        <div className="bg-gradient-to-r from-slate-900 to-[#1e293b] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-700/80">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#FFC72C]/20 border border-[#FFC72C]/40 flex items-center justify-center text-[#FFC72C] shrink-0">
              <Info className="w-6 h-6" />
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <span className="text-xs font-bold text-[#FFC72C] uppercase tracking-wider">
                  Guia Técnico & Estratégico ESDHUBEM
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  É possível subir arquivos MP3 no site? Ou é melhor usar Spotify / plataformas externas?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#FFC72C] font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Hospedagem Direta em MP3</span>
                  </div>
                  <p>
                    <strong>Sim, é 100% possível!</strong> Você pode subir arquivos <code className="text-amber-300">.mp3</code> diretamente no projeto ou em serviços como Archive.org, Google Drive público ou Cloudflare R2. Nosso player nativo (acima) já reproduz qualquer arquivo MP3 com controle de velocidade, avanço e download.
                  </p>
                  <p className="text-[11px] text-slate-400">
                    <em>Atenção:</em> O GitHub possui limites de tamanho por arquivo (100MB) e repositório (1GB-2GB). Vários episódios longos em MP3 podem deixar o repositório pesado.
                  </p>
                </div>

                <div className="bg-white/5 border border-emerald-500/30 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>Publicar no Spotify (Recomendação de Ouro)</span>
                  </div>
                  <p>
                    A melhor prática do mercado é criar uma conta gratuita no{' '}
                    <strong className="text-white">Spotify for Podcasters (antigo Anchor)</strong>. É totalmente grátis, sem limites de áudio, e distribui automaticamente para Spotify, Apple Podcasts, Amazon Music e gera seu feed RSS.
                  </p>
                  <p className="text-[11px] text-emerald-300">
                    ✓ Alcance ilimitado de ouvintes nos celulares • Estatísticas de reprodução • Player oficial do Spotify que podemos incorporar em 1 clique aqui no site!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://podcasters.spotify.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-slate-950 font-bold text-xs transition-transform active:scale-95 cursor-pointer shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Conhecer Spotify for Podcasters (Grátis)</span>
                </a>

                <span className="text-xs text-slate-400">
                  Podemos integrar diretamente o feed RSS ou os embeds de qualquer plataforma aqui no portal.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {PODCAST_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#182333] text-[#FFC72C] shadow-sm font-bold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar episódio ou tema..."
              className="w-full bg-white border border-slate-200 text-slate-800 placeholder-slate-400 pl-9 pr-4 py-2 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC72C] shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Headphones className="w-5 h-5 text-[#182333]" />
              <span>Episódios Disponíveis ({filteredEpisodes.length})</span>
            </h2>
            <span className="text-xs text-slate-500">
              Clique em um episódio para ouvir no player nativo
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => {
              const isCurrent = currentEpisode.id === episode.id;
              const isExpanded = expandedEpisodeId === episode.id;

              return (
                <div
                  key={episode.id}
                  className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl ${
                    isCurrent
                      ? 'border-[#FFC72C] ring-2 ring-[#FFC72C]/40'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Cover Image & Overlay Play */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900 group">
                      <img
                        src={episode.coverImage}
                        alt={episode.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Episode Pill */}
                      <div className="absolute top-3 left-3 bg-[#182333]/90 backdrop-blur-md text-[#FFC72C] border border-[#FFC72C]/40 px-3 py-1 rounded-full text-[11px] font-bold">
                        Episódio {episode.episodeNumber.toString().padStart(2, '0')}
                      </div>

                      {/* Duration */}
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FFC72C]" />
                        <span>{episode.duration}</span>
                      </div>

                      {/* Big Center Play Button on hover */}
                      <button
                        onClick={() => togglePlay(episode)}
                        className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#FFC72C] hover:bg-[#ffcf4b] text-slate-950 flex items-center justify-center shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
                        title={isCurrent && isPlaying ? 'Pausar' : 'Reproduzir'}
                      >
                        {isCurrent && isPlaying ? (
                          <Pause className="w-6 h-6 fill-slate-950" />
                        ) : (
                          <Play className="w-6 h-6 fill-slate-950 translate-x-0.5" />
                        )}
                      </button>
                    </div>

                    {/* Episode Content */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                          {episode.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {episode.releaseDate}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 hover:text-[#182333] transition-colors">
                        {episode.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {episode.description}
                      </p>

                      {/* Host & Tags */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1 font-medium text-slate-700 truncate">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          {episode.host}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {episode.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Episode Notes / Transcription */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-3 bg-slate-50 p-3 rounded-2xl">
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">
                              Resumo & Tópicos Centrais:
                            </span>
                            <p className="text-slate-600 leading-relaxed">
                              {episode.transcriptSummary}
                            </p>
                          </div>

                          {episode.keyTakeaways && (
                            <div>
                              <span className="font-bold text-slate-900 block mb-1">
                                Principais Aprendizados:
                              </span>
                              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                                {episode.keyTakeaways.map((point, idx) => (
                                  <li key={idx}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                    <button
                      onClick={() => togglePlay(episode)}
                      className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isCurrent && isPlaying
                          ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                          : 'bg-[#182333] text-white hover:bg-[#243042]'
                      }`}
                    >
                      {isCurrent && isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Pausar</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>{isCurrent ? 'Continuar' : 'Ouvir Agora'}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() =>
                        setExpandedEpisodeId(isExpanded ? null : episode.id)
                      }
                      className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                      title="Ver notas e resumo do episódio"
                    >
                      <span>Notas</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Student & Teacher Participation CTA */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Comunidade & Produção Intelectual
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Quer submeter um ensaio sonoro ou podcast para os Anais da ESDHUBEM?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Incentivamos nossos alunos e pesquisadores a produzirem relatos orais, entrevistas acadêmicas e podcasts temáticos como atividade complementar ou produção intelectual livre.
            </p>
          </div>

          <a
            href="https://wa.me/5511960319637?text=Ol%C3%A1!%20Gostaria%20de%20saber%20como%20gravar%20ou%20submeter%20um%20ensaio%20sonoro%2Fpodcast%20para%20a%20ESDHUBEM"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#FFC72C] hover:bg-[#ffcf4b] text-slate-950 font-black px-6 py-3.5 rounded-2xl text-xs sm:text-sm transition-transform active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Radio className="w-4 h-4 text-slate-950" />
            <span>Submeter Proposta de Áudio</span>
          </a>
        </div>
      </div>
    </div>
  );
};
