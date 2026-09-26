import React from "react";

export default function BrandMark({ large = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`grid place-items-center rounded-full border border-gold/50 font-display italic text-gold ${large ? "h-12 w-12 text-2xl" : "h-9 w-9 text-lg"}`}>J</span>
      <span className="leading-none">
        <span className={`block font-semibold tracking-[0.28em] text-cream ${large ? "text-base" : "text-[12px]"}`}>JAZ</span>
        <span className="mt-1 block text-[9px] tracking-[0.34em] text-cream/55">HERBAL WORLD</span>
      </span>
    </span>
  );
}