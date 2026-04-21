"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function OnlineClasses() {
  const { t, lang } = useI18n();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const featureLabels: Record<string, Record<string, string>> = {
    f1: { es: "Clases completas", en: "Full classes", fr: "Cours complets", it: "Lezioni complete" },
    f2: { es: "Tutoriales", en: "Tutorials", fr: "Tutoriels", it: "Tutorial" },
    f3: { es: "Todos los niveles", en: "All levels", fr: "Tous niveaux", it: "Tutti i livelli" },
  };

  function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const msg = encodeURIComponent(
      `Hola Brunela! Quiero que me avises cuando lances tu plataforma de videos. Mi email es: ${email}`
    );
    window.open(`https://wa.me/34612491637?text=${msg}`, "_blank");
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      id="online"
      className="relative overflow-hidden py-24 lg:py-32 px-5"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--color-accent)" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--color-gold)" }}
      />

      {/* Ballet silhouette watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg width="420" height="420" viewBox="0 0 100 100" fill="white" opacity="0.04" aria-hidden="true">
          <ellipse cx="50" cy="20" rx="6" ry="6" />
          <path d="M50 26 L44 55 L38 85 M50 26 L56 55 L62 85" stroke="white" strokeWidth="3" fill="none" />
          <path d="M44 40 L30 35 M56 40 L70 35" stroke="white" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block w-10 h-px bg-white/40" />
            <p className="font-lato text-[0.65rem] font-bold tracking-[.3em] uppercase text-white/70">
              {t("online_eyebrow") as string}
            </p>
            <span className="inline-block w-10 h-px bg-white/40" />
          </div>

          {/* Coming soon badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7 font-bold text-[0.7rem] tracking-[.25em] uppercase"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {t("online_soon_badge") as string}
          </motion.div>

          <h2 className="font-playfair font-bold italic text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            {t("online_title") as string}
          </h2>

          <p className="font-playfair italic text-xl md:text-2xl text-white/85 mb-5 leading-snug">
            {t("online_subtitle") as string}
          </p>

          <p className="font-lato font-light text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            {t("online_text") as string}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(["f1", "f2", "f3"] as const).map((key) => (
              <div
                key={key}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                {featureLabels[key][lang] ?? featureLabels[key].es}
              </div>
            ))}
          </div>

          {/* Email notify form */}
          <form onSubmit={handleNotify} className="max-w-md mx-auto">
            <p className="font-lato text-[0.68rem] font-bold tracking-[.2em] uppercase text-white/60 mb-4">
              {t("online_notify_label") as string}
            </p>
            <div className="flex gap-2 items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("online_email_placeholder") as string}
                required
                className="flex-1 px-5 py-3.5 rounded-full text-sm font-lato outline-none"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "white",
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest shrink-0 cursor-pointer transition-all"
                style={{
                  background: "white",
                  color: "var(--color-primary)",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
                }}
              >
                {t("online_cta") as string}
              </motion.button>
            </div>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 font-lato text-sm font-semibold text-white/90"
              >
                ✓ {t("online_notify_label") as string}!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
