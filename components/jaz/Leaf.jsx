import React from "react";

export default function Leaf({ className = "", tone = "#2D4F3C", vein = "#0A1A14" }) {
  return (
    <svg viewBox="0 0 120 240" className={className} aria-hidden="true">
      <path d="M60 4C18 60 8 140 58 236C112 140 102 60 60 4Z" fill={tone} />
      <path d="M60 20V230" stroke={vein} strokeWidth="2" opacity=".5" />
      {[50, 80, 110, 140, 170].map((y) => (
        <g key={y} stroke={vein} strokeWidth="1.4" opacity=".35" fill="none">
          <path d={`M60 ${y}Q40 ${y - 8} 26 ${y - 22}`} />
          <path d={`M60 ${y}Q80 ${y - 8} 94 ${y - 22}`} />
        </g>
      ))}
    </svg>
  );
}