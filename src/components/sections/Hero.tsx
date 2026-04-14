"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useI18n();
  const [wordIndex, setWordIndex] = useState(0);
  const words = t("hero_words") as string[];

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      aria-label="Introducción"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT — text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
               style={{ background: "rgba(200,56,77,0.08)", border: "1px solid rgba(200,56,77,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-primary)" }} />
            <span className="font-lato text-[0.68rem] font-bold tracking-[.22em] uppercase"
                  style={{ color: "var(--color-primary)" }}>
              Barcelona, España
            </span>
          </div>

          {/* Name */}
          <h1 className="font-playfair font-bold text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight"
              style={{ color: "var(--color-primary)" }}>
            BRUNELA
          </h1>

          {/* Animated cycling word */}
          <div className="h-12 lg:h-14 flex items-center overflow-hidden mt-2 mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={wordIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="font-lato font-light text-lg lg:text-xl tracking-[.32em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                {words[wordIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "var(--color-accent)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--color-primary)" }} />
            <div className="w-16 h-px"
                 style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-gold))" }} />
          </div>

          {/* Decorative italic tagline */}
          <p className="font-playfair italic text-xl lg:text-2xl mb-5 leading-snug"
             style={{ color: "var(--color-gold)" }}>
            Arte, técnica y pasión desde Argentina.
          </p>

          <p className="font-lato font-light text-base lg:text-lg leading-relaxed max-w-lg mb-10"
             style={{ color: "var(--color-body-text)" }}>
            {t("hero_bio") as string}
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <a href="#classes">
              <Button variant="primary" size="lg">
                {t("hero_cta") as string}
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — hero photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Soft halo */}
            <div
              className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-35 pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--color-accent) 0%, var(--color-primary-light) 50%, transparent 75%)" }}
            />
            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-5 rounded-[3.5rem] border border-dashed pointer-events-none"
              style={{ borderColor: "var(--color-accent)", opacity: 0.4 }}
            />
            {/* Photo */}
            <div
              className="relative z-10 w-64 h-[22rem] lg:w-[22rem] lg:h-[32rem] rounded-[2.5rem] overflow-hidden img-hover"
              style={{ boxShadow: "0 32px 80px rgba(200,56,77,0.2), 0 8px 24px rgba(200,56,77,0.1)" }}
            >
              <Image
                src="/fotos-landing/about-hero.jpg.jpg"
                alt="Brunela — bailarina y profesora de danza"
                fill
                className="object-cover object-center"
                priority
                quality={95}
                sizes="(max-width: 1024px) 320px, 420px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
