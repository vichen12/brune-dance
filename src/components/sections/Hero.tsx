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
      className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24"
      aria-label="Introducción"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full py-8 lg:py-16
                      grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        {/* Mobile: photo first, text second */}

        {/* RIGHT — hero photo (order-1 on mobile, order-2 on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative">
            {/* Soft halo */}
            <div
              className="absolute -inset-6 lg:-inset-8 rounded-[2.5rem] lg:rounded-[3rem] blur-3xl opacity-35 pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--color-accent) 0%, var(--color-primary-light) 50%, transparent 75%)" }}
            />
            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 lg:-inset-5 rounded-[3rem] lg:rounded-[3.5rem] border border-dashed pointer-events-none"
              style={{ borderColor: "var(--color-accent)", opacity: 0.45 }}
            />
            {/* Photo */}
            <div
              className="relative z-10 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden img-hover"
              style={{
                width: "min(72vw, 256px)",
                height: "min(90vw, 320px)",
                // desktop overrides via lg: below
                boxShadow: "0 24px 60px rgba(200,56,77,0.22), 0 6px 18px rgba(200,56,77,0.12)",
              }}
            >
              <div className="hidden lg:block absolute inset-0" style={{ width: "22rem", height: "32rem" }} />
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

        {/* LEFT — text (order-2 on mobile, order-1 on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left"
        >
          {/* Location badge — desktop only */}
          <div className="hidden lg:inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
               style={{ background: "rgba(200,56,77,0.08)", border: "1px solid rgba(200,56,77,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-primary)" }} />
            <span className="font-lato text-[0.68rem] font-bold tracking-[.22em] uppercase"
                  style={{ color: "var(--color-primary)" }}>
              {t("hero_location") as string}
            </span>
          </div>

          {/* Name */}
          <h1 className="font-playfair font-bold italic leading-none tracking-tight"
              style={{
                fontSize: "clamp(3.4rem, 17vw, 9.5rem)",
                color: "var(--color-primary)",
              }}>
            BRUNELA
          </h1>

          {/* Animated cycling word */}
          <div className="h-10 lg:h-14 flex items-center overflow-hidden mt-2 mb-4 justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.p
                key={wordIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="font-lato font-light text-base lg:text-xl tracking-[.28em] lg:tracking-[.32em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                {words[wordIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <div className="w-6 lg:w-8 h-px" style={{ background: "var(--color-accent)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-primary)" }} />
            <div className="w-12 lg:w-16 h-px"
                 style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-gold))" }} />
          </div>

          {/* Decorative italic tagline */}
          <p className="font-playfair italic text-lg lg:text-2xl mb-4 leading-snug"
             style={{ color: "var(--color-gold)" }}>
            {t("hero_tagline") as string}
          </p>

          <p className="font-lato font-light text-sm lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
             style={{ color: "var(--color-body-text)" }}>
            {t("hero_bio") as string}
          </p>

          <div className="flex justify-center lg:justify-start">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <a href="#classes">
                <Button variant="primary" size="lg">
                  {t("hero_cta") as string}
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
