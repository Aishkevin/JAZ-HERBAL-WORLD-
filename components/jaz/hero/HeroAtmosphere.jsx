import React from "react";
import Leaf from "@/components/jaz/Leaf";

const MOTES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  top: `${40 + ((i * 37) % 60)}%`,
  size: 2 + (i % 3),
  dur: `${9 + (i % 6) * 2}s`,
  delay: `${-(i * 1.3)}s`,
}));

// Foreground particles + botanical silhouettes with deeper parallax.
export default function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {MOTES.map((m, i) => (
        <span key={i} className="animate-drift absolute rounded-full bg-gold-soft" style={{ left: m.left, top: m.top, width: m.size, height: m.size, animationDuration: m.dur, animationDelay: m.delay, boxShadow: "0 0 8px #E3CD9A" }} />
      ))}
      <div className="parallax absolute -bottom-16 -left-10 w-40 md:w-56" style={{ "--depth": 26 }}>
        <Leaf className="animate-sway w-full rotate-[28deg] opacity-80" tone="#163326" />
      </div>
      <div className="parallax absolute -bottom-24 right-[8%] hidden w-44 md:block" style={{ "--depth": 32 }}>
        <Leaf className="animate-sway w-full -rotate-[24deg] opacity-90 blur-[2px]" tone="#10261D" />
      </div>
      <div className="parallax absolute -right-12 top-24 w-28 md:w-36" style={{ "--depth": 20 }}>
        <Leaf className="animate-sway w-full -rotate-[120deg] opacity-60 blur-[1px]" tone="#2D4F3C" />
      </div>
    </div>
  );
}