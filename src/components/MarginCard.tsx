import React from 'react';
import { Lightbulb, Scroll, Target, Sparkles } from 'lucide-react';

type CardType = 'cheatCode' | 'lore' | 'mission' | 'architect';

interface MarginCardProps {
  type: CardType;
  title: string;
  children: React.ReactNode;
}

export default function MarginCard({ type, title, children }: MarginCardProps) {
  const configs = {
    cheatCode: {
      icon: Lightbulb,
      bgColor: 'bg-highlight-yellow/50',
      borderColor: 'border-yellow-400',
      textColor: 'text-yellow-900',
    },
    lore: {
      icon: Scroll,
      bgColor: 'bg-charcoal/5',
      borderColor: 'border-charcoal/20',
      textColor: 'text-charcoal',
    },
    mission: {
      icon: Target,
      bgColor: 'bg-accent-orange/10',
      borderColor: 'border-accent-orange',
      textColor: 'text-orange-900',
    },
    architect: {
      icon: Sparkles,
      bgColor: 'bg-animal-blue-light',
      borderColor: 'border-animal-blue',
      textColor: 'text-blue-900',
    }
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className={`mt-0 mb-6 p-4 rounded-lg border-l-4 ${config.bgColor} ${config.borderColor} shadow-sm font-inter text-sm`}>
      <div className={`flex items-center gap-2 font-bold mb-2 ${config.textColor}`}>
        <Icon className="w-5 h-5" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed text-ink-black/90">
        {children}
      </div>
    </div>
  );
}
