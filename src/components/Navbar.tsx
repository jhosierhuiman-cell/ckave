import { Volume2, VolumeX, Flame, Bookmark, Sparkles, Dices, RotateCcw } from 'lucide-react';
import { UserStats } from '../types';

interface NavbarProps {
  stats: UserStats;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenFavorites: () => void;
  onRandomAll: () => void;
  onGoHome: () => void;
  isQuestionActive: boolean;
  onStartMistakesMode: () => void;
  isMistakesMode?: boolean;
}

export function Navbar({
  stats,
  soundEnabled,
  onToggleSound,
  onOpenFavorites,
  onRandomAll,
  onGoHome,
  onStartMistakesMode,
  isMistakesMode = false,
}: NavbarProps) {
  const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  const failedCount = stats.failedQuestionIds?.length || 0;

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <button
          id="btn-brand-home"
          onClick={onGoHome}
          className="flex items-center gap-2.5 group text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 transition cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 text-base sm:text-lg leading-tight tracking-tight">
              4x4=5+3
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block font-medium">
              14 apartados temáticos & banco de errores
            </p>
          </div>
        </button>

        {/* Quick Actions & Stats */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Failed questions practice button in navbar */}
          <button
            id="btn-nav-mistakes-mode"
            onClick={onStartMistakesMode}
            disabled={failedCount === 0}
            title={
              failedCount > 0
                ? `Repasar ${failedCount} preguntas falladas`
                : 'No tienes preguntas falladas en tu banco de errores'
            }
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-semibold transition active:scale-95 ${
              isMistakesMode
                ? 'bg-rose-600 text-white border-rose-700 shadow-xs ring-2 ring-rose-500/30'
                : failedCount > 0
                ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-300 cursor-pointer'
                : 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed opacity-60'
            }`}
          >
            <RotateCcw
              className={`w-3.5 h-3.5 ${
                isMistakesMode
                  ? 'text-white animate-spin-slow'
                  : failedCount > 0
                  ? 'text-rose-600'
                  : 'text-slate-400'
              }`}
            />
            <span className="hidden md:inline">Fallos</span>
            {failedCount > 0 && (
              <span
                className={`px-1.5 py-0.2 text-[11px] font-black rounded-full ${
                  isMistakesMode ? 'bg-white text-rose-700' : 'bg-rose-600 text-white'
                }`}
              >
                {failedCount}
              </span>
            )}
          </button>

          {/* Quick random any category button */}
          <button
            id="btn-quick-random-any"
            onClick={onRandomAll}
            title="Pregunta aleatoria de cualquier categoría"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs sm:text-sm rounded-lg border border-indigo-200 transition active:scale-95 cursor-pointer"
          >
            <Dices className="w-4 h-4 text-indigo-600" />
            <span className="hidden lg:inline">Ruleta Mixta</span>
            <span className="lg:hidden">Azar</span>
          </button>

          {/* Streak indicator */}
          <div
            id="stats-streak-badge"
            title={`Racha actual: ${stats.currentStreak} (Máxima: ${stats.maxStreak})`}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-amber-50 border border-amber-200/80 rounded-lg text-amber-800 text-xs font-bold"
          >
            <Flame
              className={`w-4 h-4 ${
                stats.currentStreak > 0
                  ? 'text-amber-500 fill-amber-500 animate-bounce'
                  : 'text-slate-400'
              }`}
            />
            <span>{stats.currentStreak}</span>
          </div>

          {/* Accuracy & Score pill */}
          {stats.total > 0 && (
            <div
              id="stats-score-badge"
              title={`${stats.correct} de ${stats.total} preguntas acertadas`}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 text-xs font-semibold"
            >
              <span>
                {stats.correct}/{stats.total}
              </span>
              <span className="text-slate-400 font-normal">({accuracy}%)</span>
            </div>
          )}

          {/* Bookmarked / Saved questions */}
          <button
            id="btn-open-favorites"
            onClick={onOpenFavorites}
            title="Ver preguntas guardadas en favoritos"
            className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 transition cursor-pointer"
          >
            <Bookmark className="w-4 h-4" />
            {stats.savedQuestionIds.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {stats.savedQuestionIds.length}
              </span>
            )}
          </button>

          {/* Sound toggle */}
          <button
            id="btn-toggle-sound"
            onClick={onToggleSound}
            title={soundEnabled ? 'Silenciar sonidos' : 'Activar efectos de sonido'}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 transition cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
