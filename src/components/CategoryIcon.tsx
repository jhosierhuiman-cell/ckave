import React from 'react';
import {
  Landmark,
  Globe2,
  Atom,
  Palette,
  Trophy,
  Sparkles,
  Shuffle,
  HelpCircle,
  Dna,
  Brain,
  Binary,
  Calculator,
  Smile,
  BookOpen,
  Scale,
  TrendingUp,
  GraduationCap,
  Award,
  ClipboardList,
  Sun,
  Calendar,
  Layers,
  Moon,
  Flame,
  Zap,
  Target,
  Compass,
} from 'lucide-react';

export interface CategoryIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number | string;
}

export function CategoryIcon({ name, ...props }: CategoryIconProps) {
  switch (name.toLowerCase()) {
    case 'moon':
      return <Moon {...props} />;
    case 'flame':
      return <Flame {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'target':
      return <Target {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'dna':
      return <Dna {...props} />;
    case 'brain':
      return <Brain {...props} />;
    case 'globe2':
      return <Globe2 {...props} />;
    case 'binary':
      return <Binary {...props} />;
    case 'calculator':
      return <Calculator {...props} />;
    case 'smile':
      return <Smile {...props} />;
    case 'bookopen':
      return <BookOpen {...props} />;
    case 'scale':
      return <Scale {...props} />;
    case 'landmark':
      return <Landmark {...props} />;
    case 'trendingup':
      return <TrendingUp {...props} />;
    case 'graduationcap':
      return <GraduationCap {...props} />;
    case 'award':
      return <Award {...props} />;
    case 'clipboardlist':
      return <ClipboardList {...props} />;
    case 'sun':
      return <Sun {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'atom':
      return <Atom {...props} />;
    case 'palette':
      return <Palette {...props} />;
    case 'trophy':
      return <Trophy {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'shuffle':
      return <Shuffle {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
}

