import { Category } from '../types';
import { CategoryIcon } from './CategoryIcon';
import { Dices, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoryCardProps {
  key?: string;
  category: Category;
  questionCount: number;
  answeredCount: number;
  onSelect: () => void;
}

export function CategoryCard({
  category,
  questionCount,
  answeredCount,
  onSelect,
}: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={`relative group flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all cursor-pointer ${category.theme.hoverBg}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      id={`category-card-${category.id}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <div>
        {/* Top Header with Icon and Badge */}
        <div className="flex items-center justify-between mb-3.5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${category.theme.bg} ${category.theme.text}`}
          >
            <CategoryIcon name={category.icon} className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-1.5">
            {category.kind === 'examen' && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-red-100 text-red-700 border border-red-200">
                Examen
              </span>
            )}
            {category.isContainer && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 border border-purple-200">
                5 Cursos
              </span>
            )}
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${category.theme.badge}`}
            >
              {category.isContainer ? `${questionCount} fijas` : `${questionCount} preguntas`}
            </span>
          </div>
        </div>

        {/* Title and description */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-900 transition-colors mb-1.5 flex items-center gap-1.5">
          {category.name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Card Footer with action button */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="text-xs text-slate-400 font-medium">
          {answeredCount > 0 ? (
            <span className="text-emerald-600 font-semibold">
              ✓ {answeredCount} respondidas
            </span>
          ) : (
            <span>{category.isContainer ? 'Toca para ingresar' : 'Toca para jugar'}</span>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:text-indigo-800 transition-colors">
          {!category.isContainer && <Dices className="w-4 h-4 text-indigo-500 animate-spin-slow" />}
          <span>{category.isContainer ? 'Ingresar al apartado' : 'Pregunta aleatoria'}</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
