import { useState, useMemo } from 'react';
import { CATEGORIES } from '../data/categories';
import { CategoryCard } from './CategoryCard';
import { Question, UserStats } from '../types';
import {
  Dices,
  Sparkles,
  CheckCircle2,
  Search,
  BookOpen,
  GraduationCap,
  Layers,
  RotateCcw,
  AlertCircle,
  Moon,
} from 'lucide-react';

interface CategoryGridProps {
  questions: Question[];
  stats: UserStats;
  onSelectCategory: (categoryId: string) => void;
  onRandomAll: () => void;
  onStartMistakesMode: () => void;
}

export function CategoryGrid({
  questions,
  stats,
  onSelectCategory,
  onRandomAll,
  onStartMistakesMode,
}: CategoryGridProps) {
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'curso' | 'examen' | 'amanecida'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const failedCount = stats.failedQuestionIds?.length || 0;

  // Top-level categories (excluding child categories that live inside containers)
  const topLevelCategories = useMemo(() => {
    return CATEGORIES.filter((c) => !c.parentCategoryId);
  }, []);

  const filteredCategories = useMemo(() => {
    return topLevelCategories.filter((cat) => {
      const matchesKind =
        categoryFilter === 'all' ||
        (categoryFilter === 'curso' && cat.kind === 'curso') ||
        (categoryFilter === 'examen' && cat.kind === 'examen') ||
        (categoryFilter === 'amanecida' && cat.kind === 'amanecida');

      const matchesSearch =
        searchQuery.trim() === '' ||
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesKind && matchesSearch;
    });
  }, [categoryFilter, searchQuery, topLevelCategories]);

  const totalCourseCount = topLevelCategories.filter((c) => c.kind === 'curso').length;
  const totalExamCount = topLevelCategories.filter((c) => c.kind === 'examen').length;
  const totalAmanecidaCount = topLevelCategories.filter((c) => c.kind === 'amanecida').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>15 apartados disponibles</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          4x4=5+3
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Presiona cualquier apartado para una pregunta aleatoria, o practica con preguntas falladas para dominarlas.
        </p>

        {/* Global Action Banner */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            id="btn-main-random-wheel"
            onClick={onRandomAll}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer"
          >
            <Dices className="w-5 h-5 text-indigo-200" />
            <span>Pregunta aleatoria general</span>
          </button>

          {/* Failed questions practice button */}
          <button
            id="btn-main-mistakes-mode"
            onClick={onStartMistakesMode}
            disabled={failedCount === 0}
            className={`w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-sm sm:text-base border transition-all flex items-center justify-center gap-2 active:scale-98 ${
              failedCount > 0
                ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-300 shadow-xs cursor-pointer ring-2 ring-rose-500/20'
                : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-75'
            }`}
            title={
              failedCount > 0
                ? 'Repasar solo las preguntas donde has fallado'
                : 'No tienes preguntas falladas pendientes de corrección'
            }
          >
            <RotateCcw className={`w-4 h-4 ${failedCount > 0 ? 'text-rose-600' : 'text-slate-400'}`} />
            <span>Repasar Fallos</span>
            {failedCount > 0 ? (
              <span className="px-2 py-0.5 text-xs font-extrabold bg-rose-600 text-white rounded-full ml-1">
                {failedCount}
              </span>
            ) : (
              <span className="text-xs font-normal text-slate-400 ml-1">(0)</span>
            )}
          </button>
        </div>
      </div>

      {/* Prominent failed questions alert banner if there are any pending */}
      {failedCount > 0 && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50/90 border border-rose-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold shrink-0">
              <AlertCircle className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-rose-950">
                Tienes {failedCount} {failedCount === 1 ? 'pregunta fallada' : 'preguntas falladas'} en tu banco de errores
              </p>
              <p className="text-xs text-rose-800 mt-0.5">
                Al responderlas correctamente saldrán de la lista; si las fallas seguirán disponibles hasta que las hagas bien.
              </p>
            </div>
          </div>
          <button
            id="btn-banner-start-mistakes"
            onClick={onStartMistakesMode}
            className="shrink-0 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repasar {failedCount} {failedCount === 1 ? 'pregunta' : 'preguntas'} ahora</span>
          </button>
        </div>
      )}

      {/* Tabs & Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
        {/* Category Kind Tabs */}
        <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold self-start flex-wrap gap-1">
          <button
            id="tab-category-all"
            onClick={() => setCategoryFilter('all')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              categoryFilter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>Todos ({topLevelCategories.length})</span>
          </button>

          <button
            id="tab-category-cursos"
            onClick={() => setCategoryFilter('curso')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              categoryFilter === 'curso'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
            <span>Cursos ({totalCourseCount})</span>
          </button>

          <button
            id="tab-category-examenes"
            onClick={() => setCategoryFilter('examen')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              categoryFilter === 'examen'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-red-500" />
            <span>Exámenes ({totalExamCount})</span>
          </button>

          <button
            id="tab-category-amanecida"
            onClick={() => setCategoryFilter('amanecida')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              categoryFilter === 'amanecida'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-purple-600" />
            <span>Amanecida ({totalAmanecidaCount})</span>
          </button>
        </div>

        {/* Search Filter input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="input-search-categories"
            type="text"
            placeholder="Buscar apartado..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
          />
        </div>
      </div>

      {/* Apartados Grid */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
          <p className="text-slate-500 font-medium">No se encontraron apartados con "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setCategoryFilter('all');
            }}
            className="mt-3 text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            Limpiar búsqueda y filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredCategories.map((category) => {
            const categoryQuestions =
              category.isContainer && category.subCategoryIds
                ? questions.filter((q) => category.subCategoryIds!.includes(q.categoryId))
                : questions.filter((q) => q.categoryId === category.id);

            const answeredInCategory = categoryQuestions.filter((q) =>
              stats.answeredQuestionIds.includes(q.id)
            ).length;

            return (
              <CategoryCard
                key={category.id}
                category={category}
                questionCount={categoryQuestions.length}
                answeredCount={answeredInCategory}
                onSelect={() => onSelectCategory(category.id)}
              />
            );
          })}
        </div>
      )}

      {/* Simple summary footer stats */}
      <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Progreso en el banco de preguntas</p>
            <p className="text-sm font-bold text-slate-900">
              {stats.answeredQuestionIds.length} de {questions.length} preguntas respondidas (
              {questions.length > 0
                ? Math.round((stats.answeredQuestionIds.length / questions.length) * 100)
                : 0}
              %)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>
            Racha récord: <strong className="text-slate-800">{stats.maxStreak} seguidas</strong>
          </span>
          <span>
            Aciertos: <strong className="text-emerald-700">{stats.correct}</strong>
          </span>
          <span>
            Fallos pendientes de corregir:{' '}
            <strong className={failedCount > 0 ? 'text-rose-700 font-bold' : 'text-slate-800'}>
              {failedCount}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
