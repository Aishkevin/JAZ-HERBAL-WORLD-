import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/jazData";

// Layers 1–4: dark botanical base with characters, and the luminous reveal layer.
const HeroScene = forwardRef(function HeroScene(_, revealRef) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="parallax absolute -inset-6"
        style={{ "--depth": -10 }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="animate-breathe h-full w-full">
          <Image src={IMAGES.heroBase} alt="" focalPointX={0.68} focalPointY={0.5} className="h-full w-full object-cover" loading="eager" />
        </div>
      </motion.div>

      <div ref={revealRef} className="hero-reveal absolute inset-0">
        <div className="parallax absolute -inset-6" style={{ "--depth": -10 }}>
          <div className="animate-breathe h-full w-full">
            <Image src={IMAGES.heroReveal} alt="" focalPointX={0.68} focalPointY={0.5} className="h-full w-full object-cover" loading="eager" />
          </div>
        </div>
        <div className="hero-glow pointer-events-none absolute inset-0 mix-blend-screen" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/55 to-transparent md:via-forest/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-forest/50 to-transparent" />
    </div>
  );
});

export default HeroScene;