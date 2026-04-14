"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function OnlineClasses() {
  const { t } = useI18n();

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
        <svg
          width="420"
          height="420"
          viewBox="0 0 100 100"
          fill="white"
          opacity="0.04"
          aria-hidden="true"
        >
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
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-10 h-px bg-white/40" />
            <p className="font-lato text-[0.65rem] font-bold tracking-[.3em] uppercase text-white/70">
              En línea · Online · En ligne
            </p>
            <span className="inline-block w-10 h-px bg-white/40" />
          </div>

          <h2 className="font-playfair font-bold italic text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            {t("online_title") as string}
          </h2>

          <p className="font-playfair italic text-xl md:text-2xl text-white/80 mb-4">
            {t("online_subtitle") as string}
          </p>

          <p className="font-lato font-light text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            {t("online_text") as string}
          </p>

          {/* Features row */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: "🕐", label: "Horario flexible" },
              { icon: "🌍", label: "Desde cualquier lugar" },
              { icon: "🎯", label: "Clase de prueba gratis" },
            ].map(({ icon: _icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                {label}
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="https://wa.me/34627323794?text=Hola%20Brunela!%20Me%20interesan%20las%20clases%20online."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all cursor-pointer"
            style={{
              background: "white",
              color: "var(--color-primary)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ color: "#25D366" }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("online_cta") as string}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
