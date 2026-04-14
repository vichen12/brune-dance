"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const SOCIAL = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/brunela.dance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@brunela.dance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.97a8.28 8.28 0 004.84 1.55V7.07a4.85 4.85 0 01-1.07-.38z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@bruneladance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/brunela.dance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { labelKey: "footer_home" as const, href: "#home" },
  { labelKey: "footer_classes" as const, href: "#classes" },
  { labelKey: "footer_online" as const, href: "#online" },
  { labelKey: "footer_contact" as const, href: "#contact" },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer
      className="relative"
      style={{ background: "rgba(253,232,238,0.80)", backdropFilter: "blur(16px)" }}
    >
      {/* Wave top */}
      <div className="absolute -top-[48px] left-0 right-0 overflow-hidden h-[50px] pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,50 L0,32 C120,10 240,50 360,32 C480,14 600,50 720,32 C840,14 960,50 1080,32 C1200,14 1320,50 1440,32 L1440,50 Z"
            fill="rgba(253,232,238,0.80)"
          />
        </svg>
      </div>

      {/* Top accent gradient line */}
      <div
        className="h-0.5 w-full"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-accent), var(--color-primary), var(--color-gold), transparent)" }}
      />

      <div className="relative pt-16 pb-8 px-5">
        <div className="max-w-6xl mx-auto">

          {/* Brand + tagline centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="mb-2"
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "clamp(2.8rem, 8vw, 4rem)",
                color: "var(--color-primary)",
                lineHeight: 1.1,
              }}
            >
              Brunela
            </h2>
            <p
              className="font-lato text-[0.62rem] font-bold tracking-[.35em] uppercase mb-4"
              style={{ color: "var(--color-gold)" }}
            >
              DANCE TRAINER
            </p>
            <p
              className="font-lato font-light text-sm"
              style={{ color: "var(--color-muted)" }}
            >
              {t("footer_tagline") as string}
            </p>
            <p
              className="font-lato text-xs mt-1"
              style={{ color: "var(--color-subtle)" }}
            >
              {t("footer_city") as string}
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-lato text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer"
                style={{ color: "var(--color-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                {t(link.labelKey) as string}
              </a>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center gap-5 mb-12"
          >
            {SOCIAL.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                whileHover={{ scale: 1.2, y: -2 }}
                className="transition-opacity cursor-pointer"
                style={{ color: "var(--color-primary)", opacity: 0.65 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.65")}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Separator */}
          <div
            className="h-px mb-6"
            style={{ background: "linear-gradient(90deg, transparent, rgba(200,56,77,0.2), transparent)" }}
          />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p
              className="font-lato text-xs text-center"
              style={{ color: "var(--color-subtle)" }}
            >
              {t("footer_copy") as string}
            </p>
            <p
              className="font-lato text-[0.65rem]"
              style={{ color: "var(--color-subtle)", opacity: 0.7 }}
            >
              Diseñado por{" "}
              <a
                href="https://www.instagram.com/dallapesystems/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100 cursor-pointer"
                style={{ color: "var(--color-primary)", fontWeight: 600 }}
              >
                Dallape Systems
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
