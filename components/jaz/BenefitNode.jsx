import React from "react";
import { Sprout, ShieldCheck, Leaf, Scissors, Sun, Sparkles, TreePine } from "lucide-react";

const ICONS = { growth: Sprout, dandruff: ShieldCheck, hairfall: Leaf, split: Scissors, grey: Sun, volume: Sparkles, roots: TreePine };

export default function BenefitNode({ benefit, style, index }) {
  const Icon = ICONS[benefit.key];
  return (
    <div className="group md:absolute md:w-56" style={style}>
      <div className="animate-float-slow" style={{ animationDelay: `${-index * 1.1}s`, animationDuration: `${7 + (index % 3)}s` }}>
        <button type="button" className="flex w-full items-start gap-4 rounded-2xl border border-cream/10 bg-forest-2/60 p-4 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:bg-forest-3 focus-visible:border-gold md:flex-col md:items-center md:rounded-full md:border-transparent md:bg-transparent md:p-0 md:text-center md:hover:bg-transparent">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/30 bg-forest-3 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-forest md:h-20 md:w-20">
            <Icon className="h-6 w-6 md:h-7 md:w-7" />
          </span>
          <span>
            <span className="display block text-2xl text-cream md:mt-4">{benefit.title}</span>
            <span className="mt-1 block text-sm leading-relaxed text-cream/60 transition-all duration-500 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100 md:group-focus-within:max-h-24 md:group-focus-within:opacity-100">{benefit.text}</span>
          </span>
        </button>
      </div>
    </div>
  );
}