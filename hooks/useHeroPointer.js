import { useEffect } from "react";

// Drives the cursor reveal + parallax via CSS variables in a single rAF loop.
// Idle / touch-less devices get a slow automatic reveal path.
export default function useHeroPointer(rootRef, revealRef, reduce) {
  useEffect(() => {
    const root = rootRef.current;
    const reveal = revealRef.current;
    if (!root || !reveal) return;

    const rect = () => root.getBoundingClientRect();
    let { width: w, height: h } = rect();
    const isSmall = w < 768;
    const target = { x: w * 0.72, y: h * 0.45 };
    const lead = { ...target };
    const trail = { ...target };
    const par = { x: 0, y: 0 };
    let last = -Infinity;
    let raf;

    if (reduce) {
      reveal.style.setProperty("--lx", `${w * 0.74}px`);
      reveal.style.setProperty("--ly", `${h * 0.4}px`);
      return;
    }

    const move = (cx, cy) => {
      const r = rect();
      target.x = cx - r.left;
      target.y = cy - r.top;
      last = performance.now();
    };
    const onPointer = (e) => move(e.clientX, e.clientY);
    const onTouch = (e) => e.touches[0] && move(e.touches[0].clientX, e.touches[0].clientY);
    const onResize = () => ({ width: w, height: h } = rect());

    root.addEventListener("pointermove", onPointer);
    root.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("resize", onResize);

    const loop = (t) => {
      if (t - last > 2600) {
        target.x = w * (isSmall ? 0.55 : 0.7) + Math.sin(t / 2900) * w * (isSmall ? 0.3 : 0.16);
        target.y = h * (isSmall ? 0.62 : 0.45) + Math.sin(t / 2100) * h * 0.14;
      }
      lead.x += (target.x - lead.x) * 0.09;
      lead.y += (target.y - lead.y) * 0.09;
      trail.x += (lead.x - trail.x) * 0.045;
      trail.y += (lead.y - trail.y) * 0.045;
      par.x += ((target.x / w - 0.5) * 2 - par.x) * 0.05;
      par.y += ((target.y / h - 0.5) * 2 - par.y) * 0.05;

      const base = isSmall ? 150 : 230;
      const s = reveal.style;
      s.setProperty("--lx", `${lead.x}px`);
      s.setProperty("--ly", `${lead.y}px`);
      s.setProperty("--tx", `${trail.x}px`);
      s.setProperty("--ty", `${trail.y}px`);
      s.setProperty("--ox", `${lead.x + Math.cos(t / 900) * base * 0.45}px`);
      s.setProperty("--oy", `${lead.y + Math.sin(t / 1100) * base * 0.35}px`);
      s.setProperty("--r", `${base + Math.sin(t / 800) * 14}px`);
      s.setProperty("--tr", `${base * 0.75 + Math.cos(t / 1300) * 12}px`);
      s.setProperty("--or", `${base * 0.5}px`);
      root.style.setProperty("--px", par.x.toFixed(4));
      root.style.setProperty("--py", par.y.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("pointermove", onPointer);
      root.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", onResize);
    };
  }, [rootRef, revealRef, reduce]);
}