import { useState, useEffect } from 'react';
import { Question, Category } from '../types';
import { CategoryIcon } from './CategoryIcon';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  Dices,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Bookmark,
  Share2,
  Sparkles,
  Layers,
  HelpCircle,
  RotateCcw,
  AlertCircle,
  Trophy,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuestionViewProps {
  question: Question;
  category: Category;
  parentCategory?: Category;
  isBookmarked: boolean;
  onToggleBookmark: (questionId: string) => void;
  onNextQuestion: (categoryId?: string) => void;
  onBackToCategories: () => void;
  onBackToParent?: () => void;
  onRecordAnswer: (isCorrect: boolean, questionId: string) => void;
  isMistakesMode?: boolean;
  failedCount?: number;
}

export function QuestionView({
  question,
  category,
  parentCategory,
  isBookmarked,
  onToggleBookmark,
  onNextQuestion,
  onBackToCategories,
  onBackToParent,
  onRecordAnswer,
  isMistakesMode = false,
  failedCount = 0,
}: QuestionViewProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [justClearedFromMistakes, setJustClearedFromMistakes] = useState(false);

  // Reset state whenever a new question is drawn
  useEffect(() => {
    setSelectedOption(null);
    setHasAnswered(false);
    setIsRevealed(false);
    setJustClearedFromMistakes(false);
  }, [question.id]);

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;

    setSelectedOption(index);
    setHasAnswered(true);

    const isCorrect = index === question.correctIndex;
    onRecordAnswer(isCorrect, question.id);

    if (isCorrect) {
      sounds.playSuccess();
      if (isMistakesMode) {
        setJustClearedFromMistakes(true);
      }
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#10B981', '#6366F1', '#F59E0B', '#3B82F6'],
        });
      } catch {
        // Ignore confetti error if any
      }
    } else {
      sounds.playError();
    }
  };

  const handleRevealAnswer = () => {
    setIsRevealed(true);
    setHasAnswered(true);
    sounds.playShuffle();
  };

  const handleNext = () => {
    sounds.playShuffle();
    if (isMistakesMode) {
      onNextQuestion(undefined);
    } else {
      onNextQuestion(category.id);
    }
  };

  const handleNextAny = () => {
    sounds.playShuffle();
    onNextQuestion(undefined);
  };

  const handleShareQuestion = () => {
    const text = `¿Sabes la respuesta a esta pregunta de ${category.name}?\n\n"${question.question}"\n\n¡Pruébalo en la app de 4x4=5+3!`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    }
  };

  const isCorrectAnswer = selectedOption === question.correctIndex;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Navigation and category breadcrumb */}
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          {parentCategory && onBackToParent && (
            <button
              id="btn-back-parent-category"
              onClick={onBackToParent}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg border border-purple-200 transition active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-purple-600" />
              <span>Volver a {parentCategory.shortTitle || parentCategory.name}</span>
            </button>
          )}

          <button
            id="btn-back-categories"
            onClick={onBackToCategories}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Ver todos los apartados</span>
            <span className="sm:hidden">Todos</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Mode switch: Multiple Choice vs Flashcard */}
          <button
            id="btn-toggle-flashcard-mode"
            onClick={() => setIsFlashcardMode(!isFlashcardMode)}
            title="Alternar entre modo test y modo tarjeta para destapar"
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition cursor-pointer ${
              isFlashcardMode
                ? 'bg-violet-100 border-violet-300 text-violet-800'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isFlashcardMode ? 'Modo Tarjeta activo' : 'Modo Tarjeta'}
            </span>
          </button>

          {/* Bookmark Button */}
          <button
            id="btn-toggle-bookmark-question"
            onClick={() => onToggleBookmark(question.id)}
            title={isBookmarked ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
            className={`p-2 rounded-lg border transition cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 border-amber-300 text-amber-600'
                : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
          </button>

          {/* Share Button */}
          <button
            id="btn-share-question"
            onClick={handleShareQuestion}
            title="Copiar pregunta para compartir"
            className="p-2 bg-white rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {copiedNotification && (
        <div className="mb-4 p-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-lg text-center animate-fade-in">
          ¡Pregunta copiada al portapapeles!
        </div>
      )}

      {/* Special Mistakes Mode Banner */}
      {isMistakesMode && (
        <div className="mb-4 p-3.5 rounded-xl bg-rose-50/90 border border-rose-200 text-rose-950 flex items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-start sm:items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-rose-100 text-rose-700 shrink-0 mt-0.5 sm:mt-0">
              <RotateCcw className="w-4 h-4 text-rose-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold flex items-center gap-2">
                <span>Modo: Repaso de Preguntas Falladas</span>
                <span className="px-2 py-0.5 text-[11px] font-extrabold bg-rose-600 text-white rounded-full">
                  {failedCount} {failedCount === 1 ? 'pendiente' : 'pendientes'}
                </span>
              </p>
              <p className="text-[11px] sm:text-xs text-rose-800 mt-0.5">
                Si la contestas bien, saldrá de tu banco de fallos. Si fallas, continuará aquí hasta que la aciertes.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-7 relative overflow-hidden"
        >
          {/* Top category info bar */}
          <div className="flex items-center justify-between flex-wrap gap-2 pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${category.theme.bg} ${category.theme.text}`}
              >
                <CategoryIcon name={category.icon} className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {parentCategory && (
                  <>
                    <span className="text-xs text-purple-700 font-semibold">{parentCategory.name}</span>
                    <span className="text-xs text-slate-400">/</span>
                  </>
                )}
                <span className="font-bold text-slate-800 text-sm">{category.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {category.kind === 'examen' && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-red-100 text-red-700 border border-red-200">
                  Examen
                </span>
              )}
              {category.kind === 'amanecida' && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200">
                  Amanecida Fijas
                </span>
              )}
            </div>
          </div>

          {/* The Question Text */}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-6">
            {question.question}
          </h2>

          {/* Interactive Options or Flashcard Reveal */}
          {!isFlashcardMode ? (
            /* MULTIPLE CHOICE OPTIONS */
            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === question.correctIndex;
                const showCorrect = hasAnswered && isCorrect;
                const showWrong = hasAnswered && isSelected && !isCorrect;

                let btnStyles =
                  'bg-white border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 text-slate-800';

                if (showCorrect) {
                  btnStyles =
                    'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-2 ring-emerald-500/20';
                } else if (showWrong) {
                  btnStyles =
                    'bg-rose-50 border-rose-400 text-rose-900 line-through ring-2 ring-rose-500/20';
                } else if (hasAnswered) {
                  btnStyles = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }

                const optionLetters = ['A', 'B', 'C', 'D'];

                return (
                  <button
                    key={idx}
                    id={`option-btn-${idx}`}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-3 text-sm sm:text-base focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer disabled:cursor-default ${btnStyles}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          showCorrect
                            ? 'bg-emerald-600 text-white'
                            : showWrong
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {optionLetters[idx]}
                      </span>
                      <span className="font-medium">{option}</span>
                    </div>

                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                    {showWrong && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          ) : (
            /* FLASHCARD MODE */
            <div className="py-4">
              {!isRevealed ? (
                <div className="p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center">
                  <HelpCircle className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 mb-4 font-medium">
                    Piensa tu respuesta o coméntala en voz alta antes de destaparla.
                  </p>
                  <button
                    id="btn-reveal-card"
                    onClick={handleRevealAnswer}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-xs transition cursor-pointer"
                  >
                    Revelar respuesta correcta
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Respuesta correcta:</span>
                  </div>
                  <p className="text-lg font-bold text-emerald-950">
                    {question.options[question.correctIndex]}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Mistakes status banner after answering */}
          {hasAnswered && isMistakesMode && (
            <div className="mt-4">
              {isCorrectAnswer ? (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs sm:text-sm text-emerald-900 flex items-center gap-2 font-semibold">
                  <Trophy className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    ¡Superada con éxito! Esta pregunta ha salido de tu banco de fallos.
                  </span>
                </div>
              ) : (
                <div className="p-3 bg-rose-50 border border-rose-300 rounded-xl text-xs sm:text-sm text-rose-900 flex items-center gap-2 font-semibold">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>
                    Respuesta incorrecta: Seguirá en tu banco de fallos hasta que la resuelvas bien.
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Explanation Box (Visible once answered or revealed) */}
          {(hasAnswered || isRevealed) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-700"
            >
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Explicación didáctica</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                {question.explanation}
              </p>

              {question.curiosityFact && (
                <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Dato curioso:</strong> {question.curiosityFact}
                  </span>
                </div>
              )}
            </motion.div>
          )}

          {/* Action buttons */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {isMistakesMode ? (
              <>
                <button
                  id="btn-next-mistake-question"
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Siguiente pregunta fallada</span>
                </button>

                <button
                  id="btn-exit-mistakes-mode"
                  onClick={onBackToCategories}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Salir del modo fallos</span>
                </button>
              </>
            ) : (
              <>
                <button
                  id="btn-next-question-category"
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <Dices className="w-4 h-4 text-indigo-200" />
                  <span>Siguiente pregunta de {category.shortTitle}</span>
                </button>

                <button
                  id="btn-random-any-question"
                  onClick={handleNextAny}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-500" />
                  <span>Cambiar a otro tema al azar</span>
                </button>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
