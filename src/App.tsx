import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { CategoryGrid } from './components/CategoryGrid';
import { QuestionView } from './components/QuestionView';
import { AmanecidaView } from './components/AmanecidaView';
import { FavoritesModal } from './components/FavoritesModal';
import { QUESTIONS } from './data/questions';
import { CATEGORIES } from './data/categories';
import { Question, UserStats } from './types';
import { sounds } from './utils/audio';
import { CheckCircle2, RotateCcw, ArrowLeft, Sparkles } from 'lucide-react';

const STORAGE_KEY_STATS = 'trivia_cultura_stats_v2';
const STORAGE_KEY_SOUND = 'trivia_cultura_sound_v1';

export default function App() {
  // Stats state with local storage initialization
  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          correct: parsed.correct || 0,
          total: parsed.total || 0,
          currentStreak: parsed.currentStreak || 0,
          maxStreak: parsed.maxStreak || 0,
          answeredQuestionIds: Array.isArray(parsed.answeredQuestionIds) ? parsed.answeredQuestionIds : [],
          savedQuestionIds: Array.isArray(parsed.savedQuestionIds) ? parsed.savedQuestionIds : [],
          failedQuestionIds: Array.isArray(parsed.failedQuestionIds) ? parsed.failedQuestionIds : [],
        };
      }
    } catch {
      // Ignore
    }
    return {
      correct: 0,
      total: 0,
      currentStreak: 0,
      maxStreak: 0,
      answeredQuestionIds: [],
      savedQuestionIds: [],
      failedQuestionIds: [],
    };
  });

  // Sound toggle state
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SOUND);
      if (saved !== null) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return true;
  });

  // Active view state
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeContainerId, setActiveContainerId] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isMistakesMode, setIsMistakesMode] = useState<boolean>(false);
  const [recentQuestionIds, setRecentQuestionIds] = useState<string[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);

  // Sync sound manager with state
  useEffect(() => {
    sounds.enabled = soundEnabled;
    try {
      localStorage.setItem(STORAGE_KEY_SOUND, JSON.stringify(soundEnabled));
    } catch {
      // Ignore
    }
  }, [soundEnabled]);

  // Sync stats with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    } catch {
      // Ignore
    }
  }, [stats]);

  // Pick a random question function avoiding recently seen ones
  const getRandomQuestion = useCallback(
    (categoryId?: string): Question | null => {
      let pool = QUESTIONS;
      if (categoryId) {
        pool = pool.filter((q) => q.categoryId === categoryId);
      }

      if (pool.length === 0) return null;

      // Filter out recently drawn questions to avoid repeats
      const unvisited = pool.filter((q) => !recentQuestionIds.includes(q.id));
      const finalPool = unvisited.length > 0 ? unvisited : pool;

      const randomIndex = Math.floor(Math.random() * finalPool.length);
      const selected = finalPool[randomIndex];

      // Update recent queue (keep max 10)
      setRecentQuestionIds((prev) => {
        const next = [selected.id, ...prev.filter((id) => id !== selected.id)];
        return next.slice(0, 10);
      });

      return selected;
    },
    [recentQuestionIds]
  );

  // Select a category and launch a random question from it
  const handleSelectCategory = (categoryId: string) => {
    setIsMistakesMode(false);
    const target = CATEGORIES.find((c) => c.id === categoryId);

    // If it is a container category (like Ultima Amanecida), open its sub-courses view
    if (target?.isContainer) {
      sounds.playShuffle();
      setActiveContainerId(categoryId);
      setCurrentQuestion(null);
      setActiveCategoryId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const q = getRandomQuestion(categoryId);
    if (q) {
      sounds.playShuffle();
      setCurrentQuestion(q);
      setActiveCategoryId(categoryId);
      setActiveContainerId(target?.parentCategoryId || null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Subcategory selection inside Amanecida
  const handleSelectAmanecidaSubCategory = (subCategoryId: string) => {
    setIsMistakesMode(false);
    const q = getRandomQuestion(subCategoryId);
    if (q) {
      sounds.playShuffle();
      setCurrentQuestion(q);
      setActiveCategoryId(subCategoryId);
      setActiveContainerId('ultima-amanecida-ful-fijas');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Mixed random question within all 5 Amanecida courses
  const handleRandomAmanecida = () => {
    setIsMistakesMode(false);
    const amanecidaCat = CATEGORIES.find((c) => c.id === 'ultima-amanecida-ful-fijas');
    const subIds = amanecidaCat?.subCategoryIds || [];
    const amanecidaPool = QUESTIONS.filter((q) => subIds.includes(q.categoryId));
    if (amanecidaPool.length === 0) return;

    const unvisited = amanecidaPool.filter((q) => !recentQuestionIds.includes(q.id));
    const pool = unvisited.length > 0 ? unvisited : amanecidaPool;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const selected = pool[randomIndex];

    setRecentQuestionIds((prev) => {
      const next = [selected.id, ...prev.filter((id) => id !== selected.id)];
      return next.slice(0, 10);
    });

    sounds.playShuffle();
    setCurrentQuestion(selected);
    setActiveCategoryId(selected.categoryId);
    setActiveContainerId('ultima-amanecida-ful-fijas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMainFromAmanecida = () => {
    setActiveContainerId(null);
    setCurrentQuestion(null);
    setActiveCategoryId(null);
    setIsMistakesMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToParentCategory = () => {
    setCurrentQuestion(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Launch a random question from ANY category (Mixed Wheel)
  const handleRandomAll = () => {
    setIsMistakesMode(false);
    const q = getRandomQuestion(undefined);
    if (q) {
      sounds.playShuffle();
      setCurrentQuestion(q);
      setActiveCategoryId(q.categoryId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Launch Mistakes Mode: practicing ONLY failed questions
  const handleStartMistakesMode = () => {
    const failedIds = stats.failedQuestionIds || [];
    if (failedIds.length === 0) return;

    const failedQuestions = QUESTIONS.filter((q) => failedIds.includes(q.id));
    if (failedQuestions.length === 0) return;

    sounds.playShuffle();
    const randomIndex = Math.floor(Math.random() * failedQuestions.length);
    const selected = failedQuestions[randomIndex];

    setIsMistakesMode(true);
    setCurrentQuestion(selected);
    setActiveCategoryId(selected.categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Next question handler
  const handleNextQuestion = (categoryId?: string) => {
    if (isMistakesMode) {
      const failedIds = stats.failedQuestionIds || [];
      const failedPool = QUESTIONS.filter((q) => failedIds.includes(q.id));

      if (failedPool.length === 0) {
        // All mistakes have been solved!
        setCurrentQuestion(null);
        return;
      }

      // Filter out current question if possible to vary
      const otherFailed = failedPool.filter((q) => q.id !== currentQuestion?.id);
      const pool = otherFailed.length > 0 ? otherFailed : failedPool;
      const randomIndex = Math.floor(Math.random() * pool.length);
      const nextQ = pool[randomIndex];

      sounds.playShuffle();
      setCurrentQuestion(nextQ);
      setActiveCategoryId(nextQ.categoryId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const nextCategory = categoryId || activeCategoryId || undefined;
    const q = getRandomQuestion(nextCategory);
    if (q) {
      sounds.playShuffle();
      setCurrentQuestion(q);
      if (categoryId) {
        setActiveCategoryId(categoryId);
      } else {
        setActiveCategoryId(q.categoryId);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle answering: If correct -> remove from failed bank. If failed -> add/keep in failed bank!
  const handleRecordAnswer = (isCorrect: boolean, questionId: string) => {
    setStats((prev) => {
      const newStreak = isCorrect ? prev.currentStreak + 1 : 0;
      const newMaxStreak = Math.max(prev.maxStreak, newStreak);
      const answeredSet = new Set(prev.answeredQuestionIds);
      answeredSet.add(questionId);

      let updatedFailed = [...(prev.failedQuestionIds || [])];
      if (isCorrect) {
        // Correct answer: remove from failed question bank
        updatedFailed = updatedFailed.filter((id) => id !== questionId);
      } else {
        // Wrong answer: add to failed question bank if not already present
        if (!updatedFailed.includes(questionId)) {
          updatedFailed.push(questionId);
        }
      }

      return {
        ...prev,
        total: prev.total + 1,
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        currentStreak: newStreak,
        maxStreak: newMaxStreak,
        answeredQuestionIds: Array.from(answeredSet),
        failedQuestionIds: updatedFailed,
      };
    });
  };

  // Toggle bookmark / favorite
  const handleToggleBookmark = (questionId: string) => {
    setStats((prev) => {
      const exists = prev.savedQuestionIds.includes(questionId);
      const updated = exists
        ? prev.savedQuestionIds.filter((id) => id !== questionId)
        : [...prev.savedQuestionIds, questionId];
      return {
        ...prev,
        savedQuestionIds: updated,
      };
    });
  };

  // Back to category list
  const handleBackToCategories = () => {
    setIsMistakesMode(false);
    setCurrentQuestion(null);
    setActiveCategoryId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Directly select a specific question (e.g. from favorites modal)
  const handleSelectSpecificQuestion = (question: Question) => {
    setIsMistakesMode(false);
    setCurrentQuestion(question);
    setActiveCategoryId(question.categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentCategory = CATEGORIES.find((c) => c.id === activeCategoryId) || CATEGORIES[0];
  const parentCategory = currentCategory?.parentCategoryId
    ? CATEGORIES.find((c) => c.id === currentCategory.parentCategoryId)
    : undefined;
  const containerCategory =
    CATEGORIES.find((c) => c.id === activeContainerId) ||
    CATEGORIES.find((c) => c.id === 'ultima-amanecida-ful-fijas')!;
  const amanecidaSubCategories = CATEGORIES.filter(
    (c) => c.parentCategoryId === 'ultima-amanecida-ful-fijas'
  );
  const failedCount = stats.failedQuestionIds?.length || 0;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Navbar */}
      <Navbar
        stats={stats}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onRandomAll={handleRandomAll}
        onGoHome={handleBackToCategories}
        isQuestionActive={!!currentQuestion}
        onStartMistakesMode={handleStartMistakesMode}
        isMistakesMode={isMistakesMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isMistakesMode && failedCount === 0 && !currentQuestion ? (
          /* Victory view when all failed questions have been cleared */
          <div className="max-w-md mx-auto px-4 py-16 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              ¡Banco de fallos completado!
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Has contestado correctamente todas las preguntas que tenías pendientes. Tu banco de errores ahora está limpio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="btn-victory-back-categories"
                onClick={handleBackToCategories}
                className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver a los apartados</span>
              </button>
              <button
                id="btn-victory-random-all"
                onClick={handleRandomAll}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Jugar ruleta mixta</span>
              </button>
            </div>
          </div>
        ) : currentQuestion && currentCategory ? (
          <QuestionView
            question={currentQuestion}
            category={currentCategory}
            parentCategory={parentCategory}
            isBookmarked={stats.savedQuestionIds.includes(currentQuestion.id)}
            onToggleBookmark={handleToggleBookmark}
            onNextQuestion={handleNextQuestion}
            onBackToCategories={handleBackToCategories}
            onBackToParent={activeContainerId ? handleBackToParentCategory : undefined}
            onRecordAnswer={handleRecordAnswer}
            isMistakesMode={isMistakesMode}
            failedCount={failedCount}
          />
        ) : activeContainerId === 'ultima-amanecida-ful-fijas' ? (
          <AmanecidaView
            containerCategory={containerCategory}
            subCategories={amanecidaSubCategories}
            questions={QUESTIONS}
            stats={stats}
            onSelectSubCategory={handleSelectAmanecidaSubCategory}
            onRandomAmanecida={handleRandomAmanecida}
            onBackToMain={handleBackToMainFromAmanecida}
          />
        ) : (
          <CategoryGrid
            questions={QUESTIONS}
            stats={stats}
            onSelectCategory={handleSelectCategory}
            onRandomAll={handleRandomAll}
            onStartMistakesMode={handleStartMistakesMode}
          />
        )}
      </main>

      {/* Favorites / Bookmarked Modal */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        savedQuestionIds={stats.savedQuestionIds}
        allQuestions={QUESTIONS}
        onSelectQuestion={handleSelectSpecificQuestion}
        onRemoveFavorite={handleToggleBookmark}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500">
        <p>
          4x4=5+3 — Banco interactivo con 15 apartados temáticos, sección especial Ultima Amanecida Ful Fijas y sistema de dominio de fallos.
        </p>
      </footer>
    </div>
  );
}
