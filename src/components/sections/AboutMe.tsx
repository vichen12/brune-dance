"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

function renderParagraph(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: "var(--color-primary-dark)", fontWeight: 700 }}>{part}</strong>
      : <span key={i}>{part}</span>
  );
}

export function AboutMe() {
  const { t } = useI18n();

  const STATS = [
    { number: "2002", label: t("about_stat1_label") as string, sub: t("about_stat1_sub") as string },
    { number: "15+",  label: t("about_stat2_label") as string, sub: t("about_stat2_sub") as string },
    { number: "9",    label: t("about_stat3_label") as string, sub: t("about_stat3_sub") as string },
    { number: "RAD",  label: t("about_stat4_label") as string, sub: t("about_stat4_sub") as string },
  ];

  const CHAPTERS = [
    {
      era: "2002 – 2010",
      title: t("about_ch1_title") as string,
      paragraphs: [
        t("about_ch1_p1") as string,
        t("about_ch1_p2") as string,
        t("about_ch1_p3") as string,
      ],
    },
    {
      era: t("about_ch2_era") as string,
      title: t("about_ch2_title") as string,
      paragraphs: [
        t("about_ch2_p1") as string,
        t("about_ch2_p2") as string,
        t("about_ch2_p3") as string,
      ],
    },
    {
      era: t("about_ch3_era") as string,
      title: t("about_ch3_title") as string,
      paragraphs: [
        t("about_ch3_p1") as string,
        t("about_ch3_p2") as string,
        t("about_ch3_p3") as string,
      ],
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 overflow-hidden" aria-label="Sobre mí">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-lato text-[0.65rem] font-bold tracking-[.32em] uppercase mb-3"
             style={{ color: "var(--color-gold)" }}>
            {t("about_eyebrow") as string}
          </p>
          <h2 className="section-heading font-playfair font-bold italic text-4xl lg:text-5xl"
              style={{ color: "var(--color-body-text)" }}>
            {t("about_title") as string}
          </h2>
          <p className="font-playfair italic text-lg lg:text-xl mt-6"
             style={{ color: "var(--color-gold)" }}>
            {t("about_tagline") as string}
          </p>
        </motion.div>

        {/* Stats — editorial grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 mb-20"
          style={{ borderTop: "1px solid rgba(200,56,77,0.15)", borderLeft: "1px solid rgba(200,56,77,0.15)" }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col items-center justify-center py-10 px-5 text-center relative overflow-hidden"
              style={{ borderRight: "1px solid rgba(200,56,77,0.15)", borderBottom: "1px solid rgba(200,56,77,0.15)" }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center font-playfair font-bold select-none pointer-events-none"
                style={{ fontSize: "5rem", color: "var(--color-primary)", opacity: 0.04, lineHeight: 1 }}
                aria-hidden="true"
              >
                {s.number}
              </span>
              <p className="font-playfair font-bold italic leading-none mb-2 relative z-10"
                 style={{ fontSize: "clamp(2.4rem, 8vw, 3.5rem)", color: "var(--color-primary)" }}>
                {s.number}
              </p>
              <p className="font-lato font-bold text-[0.62rem] lg:text-[0.68rem] uppercase tracking-[.15em] mb-0.5 relative z-10"
                 style={{ color: "var(--color-body-text)" }}>
                {s.label}
              </p>
              <p className="font-lato font-light text-[0.58rem] lg:text-[0.62rem] relative z-10"
                 style={{ color: "var(--color-muted)" }}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chapters — editorial columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {CHAPTERS.map((ch, i) => (
            <motion.div
              key={ch.era}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: "rgba(255,248,250,0.72)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(240,160,184,0.22)",
              }}
            >
              <span
                className="absolute -top-2 -right-1 font-playfair font-bold select-none pointer-events-none leading-none"
                style={{ fontSize: "4.5rem", color: "var(--color-primary)", opacity: 0.05 }}
                aria-hidden="true"
              >
                {i + 1}
              </span>

              <span
                className="inline-block px-3 py-1 rounded-full font-lato font-bold text-[0.6rem] tracking-[.25em] uppercase mb-4"
                style={{
                  background: "rgba(196,149,106,0.12)",
                  color: "var(--color-gold)",
                  border: "1px solid rgba(196,149,106,0.3)",
                }}
              >
                {ch.era}
              </span>

              <div className="flex items-start gap-3 mb-5">
                <div className="w-0.5 rounded-full shrink-0 mt-1"
                     style={{ height: "2.8rem", background: "linear-gradient(to bottom, var(--color-primary), var(--color-gold))" }} />
                <h3 className="font-playfair font-bold italic text-xl leading-snug"
                    style={{ color: "var(--color-primary)" }}>
                  {ch.title}
                </h3>
              </div>

              <div className="space-y-2.5">
                {ch.paragraphs.map((p, j) => (
                  <p key={j} className="font-lato font-light text-sm leading-relaxed"
                     style={{ color: "var(--color-muted)" }}>
                    {renderParagraph(p)}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
