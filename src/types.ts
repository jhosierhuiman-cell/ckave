export type Difficulty = 'fácil' | 'medio' | 'difícil';

export interface Category {
  id: string;
  name: string;
  shortTitle: string;
  description: string;
  icon: string;
  kind?: 'curso' | 'examen' | 'amanecida';
  isContainer?: boolean;
  subCategoryIds?: string[];
  parentCategoryId?: string;
  theme: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    accent: string;
    hoverBg: string;
    ring: string;
  };
}

export interface Question {
  id: string;
  categoryId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  curiosityFact?: string;
  difficulty?: string;
}

export interface UserStats {
  correct: number;
  total: number;
  currentStreak: number;
  maxStreak: number;
  answeredQuestionIds: string[];
  savedQuestionIds: string[];
  failedQuestionIds: string[];
}
