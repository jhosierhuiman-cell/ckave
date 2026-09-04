import { Question, Category } from '../types';
import { CATEGORIES } from '../data/categories';
import { CategoryIcon } from './CategoryIcon';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedQuestionIds: string[];
  allQuestions: Question[];
  onSelectQuestion: (question: Question) => void;
  onRemoveFavorite: (questionId: string) => void;
}

export function FavoritesModal({
  isOpen,
  onClose,
  savedQuestionIds,
  allQuestions,
  onSelectQuestion,
  onRemoveFavorite,
}: FavoritesModalProps) {
  if (!isOpen) return null;

  const savedQuestions = allQuestions.filter((q) =>
    savedQuestionIds.includes(q.id)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span>Preguntas Favoritas Guardadas ({savedQuestions.length})</span>
          </div>
          <button
            id="btn-close-favorites-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {savedQuestions.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              <Bookmark className="w-10 h-10 mx-auto mb-2 opacity-30" />
              <p className="font-semibold text-slate-600">
                No tienes preguntas guardadas aún
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Pulsa el icono de marcador en cualquier pregunta para revisarla cuando desees.
              </p>
            </div>
          ) : (
            savedQuestions.map((q) => {
              const category = CATEGORIES.find((c) => c.id === q.categoryId);
              return (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition flex items-start justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      {category && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${category.theme.badge} flex items-center gap-1`}
                        >
                          <CategoryIcon name={category.icon} className="w-3 h-3" />
                          {category.shortTitle}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-slate-900 line-clamp-2">
                      {q.question}
                    </p>

                    <p className="text-xs text-emerald-700 font-medium mt-1">
                      Respuesta: {q.options[q.correctIndex]}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      id={`btn-play-saved-${q.id}`}
                      onClick={() => {
                        onSelectQuestion(q);
                        onClose();
                      }}
                      title="Jugar esta pregunta"
                      className="p-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center gap-1 transition"
                    >
                      <span>Ver</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      id={`btn-remove-saved-${q.id}`}
                      onClick={() => onRemoveFavorite(q.id)}
                      title="Eliminar de favoritos"
                      className="p-2 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs rounded-lg transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
