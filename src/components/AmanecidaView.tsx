import { Category, Question, UserStats } from '../types';
import { CategoryCard } from './CategoryCard';
import { CategoryIcon } from './CategoryIcon';
import {
  ArrowLeft,
  Moon,
  Sparkles,
  Dices,
  Flame,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { motion } from 'motion/react';

interface AmanecidaViewProps {
  containerCategory: Category;
  subCategories: Category[];
  questions: Question[];
  stats: UserStats;
  onSelectSubCategory: (categoryId: string) => void;
  onRandomAmanecida: () => void;
  onBackToMain: () => void;
}

export function AmanecidaView({
  containerCategory,
  subCategories,
  questions,
  stats,
  onSelectSubCategory,
  onRandomAmanecida,
  onBackToMain,
}: AmanecidaViewProps) {
  // Questions that belong to any of the subcategories of this amanecida
  const subCategoryIds = subCategories.map((c) => c.id);
  const amanecidaQuestions = questions.filter((q) =>
    subCategoryIds.includes(q.categoryId)
  );

  const answeredInAmanecida = amanecidaQuestions.filter((q) =>
    stats.answeredQuestionIds.includes(q.id)
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Navigation Breadcrumb & Back Button */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          id="btn-back-to-all-apartados"
          onClick={onBackToMain}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition shadow-xs active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todos los apartados</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span>Inicio</span>
          <span>/</span>
          <span className="text-purple-700 font-bold">Ultima Amanecida Ful Fijas</span>
        </div>
      </div>

      {/* Hero Banner for Ultima Amanecida */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950 to-indigo-950 text-white p-6 sm:p-8 shadow-lg border border-purple-900/50 mb-8">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-56 h-56 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-300 text-xs font-bold mb-3">
            <Moon className="w-3.5 h-3.5 text-amber-300" />
            <span>MODO INTENSIVO PREUNIVERSITARIO</span>
            <span className="w-1 h-1 rounded-full bg-amber-300" />
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>5 CURSOS CLAVE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <span>Ultima Amanecida Ful Fijas</span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-purple-200/90 leading-relaxed">
            Banco intensivo de fijas seleccionadas para amanecida de estudio. 
            Elige uno de los 5 cursos para practicar preguntas clave o presiona la ruleta 
            para una pregunta aleatoria de cualquier tema de la amanecida.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              id="btn-amanecida-random-all"
              onClick={onRandomAmanecida}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Dices className="w-4 h-4 text-slate-950" />
              <span>Ruleta aleatoria de la Amanecida</span>
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-xs text-xs text-purple-200 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>
                {answeredInAmanecida} de {amanecidaQuestions.length} fijas practicadas
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-apartados Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <span>Cursos de la Amanecida</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Selecciona el curso para ver sus preguntas fijas correspondientes
          </p>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
          5 cursos
        </span>
      </div>

      {/* 5 Cursos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {subCategories.map((subCat) => {
          const catQuestions = questions.filter((q) => q.categoryId === subCat.id);
          const answered = catQuestions.filter((q) =>
            stats.answeredQuestionIds.includes(q.id)
          ).length;

          return (
            <CategoryCard
              key={subCat.id}
              category={subCat}
              questionCount={catQuestions.length}
              answeredCount={answered}
              onSelect={() => onSelectSubCategory(subCat.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
