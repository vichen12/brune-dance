"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const PILLS = [
  "Progressing Ballet Technique",
  "Progressing Contemporary Technique",
  "Ballet",
  "Stretching",
  "Pilates Reformer",
  "Pilates Mat",
];

export function KnowMe() {
  const { t } = useI18n();

  return (
    <section id="know-me" className="py-24 lg:py-32 overflow-hidden" aria-label="Conóceme">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text + pills */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-lato text-[0.65rem] font-bold tracking-[.32em] text-accent uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-accent inline-block" />
            Barcelona · Argentina
          </p>
          <h2 className="section-heading font-playfair font-bold italic text-4xl lg:text-5xl text-primary mb-4">
            {t("know_title") as string}
          </h2>
          <p className="font-playfair italic text-lg lg:text-xl mb-8 leading-snug"
             style={{ color: "var(--color-gold)" }}>
            Una artista que enseña con el cuerpo y el alma.
          </p>
          <p className="font-lato font-light text-base leading-relaxed text-body-text mb-10 max-w-lg">
            {t("know_bio") as string}
          </p>

          {/* Disciplines — 2-column card grid */}
          <div className="grid grid-cols-2 gap-3">
            {PILLS.map((pill, i) => (
              <motion.div
                key={pill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative rounded-2xl px-4 pt-3 pb-4 overflow-hidden"
                style={{
                  background: "rgba(255,245,248,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(240,160,184,0.28)",
                }}
              >
                {/* Watermark number */}
                <span
                  className="absolute top-1 right-3 font-playfair font-bold leading-none select-none pointer-events-none"
                  style={{ fontSize: "2.8rem", color: "var(--color-primary)", opacity: 0.07 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Number badge */}
                <span className="font-lato font-bold text-[0.58rem] tracking-[.22em] uppercase block mb-1.5"
                      style={{ color: "var(--color-gold)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Name */}
                <span className="font-lato font-bold text-[0.78rem] leading-snug block"
                      style={{ color: "var(--color-body-text)" }}>
                  {pill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="img-hover rounded-2xl overflow-hidden shadow-2xl shadow-primary/12"
        >
          <Image
            src="/fotos-landing/about-1.jpg"
            alt="Brunela en postura de danza"
            width={600}
            height={750}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
