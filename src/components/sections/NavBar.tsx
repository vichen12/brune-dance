"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useI18n, type Lang } from "@/lib/i18n";

const LANGS: Lang[] = ["es", "en", "fr"];
const NAV_LINKS = [
  { key: "nav_home",    href: "#home" },
  { key: "nav_classes", href: "#classes" },
  { key: "nav_contact", href: "#contact" },
] as const;

export function NavBar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "classes", "know-me", "about", "online", "contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { threshold: 0.35 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Full-width navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled
            ? "rgba(255,236,242,0.90)"
            : "rgba(255,240,245,0.55)",
          backdropFilter: scrolled ? "blur(18px)" : "blur(8px)",
          borderBottom: scrolled
            ? "1px solid rgba(240,160,184,0.3)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 28px rgba(200,56,77,0.08)" : "none",
        }}
      >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-4">

            {/* Brand */}
            <a href="#home" className="flex items-center gap-3 group shrink-0" aria-label="Brunela Dance Trainer">
              <div className="relative w-14 h-12 rounded-xl overflow-hidden shrink-0"
                   style={{ boxShadow: "0 0 0 2px rgba(240,160,184,0.5)" }}>
                <Image
                  src="/icon.jpg"
                  alt="Brunela"
                  fill
                  className="object-contain transition-transform duration-400 group-hover:scale-105"
                  sizes="56px"
                  priority
                />
              </div>
              <div>
                <span className="block font-playfair font-bold text-lg tracking-wider leading-none"
                      style={{ color: "var(--color-primary)" }}>
                  BRUNELA
                </span>
                <span className="block font-lato font-light text-[0.58rem] tracking-[.25em] uppercase mt-0.5"
                      style={{ color: "var(--color-muted)" }}>
                  dance trainer · barcelona
                </span>
              </div>
            </a>

            {/* Desktop nav + tagline */}
            <div className="hidden md:flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-8">
                {NAV_LINKS.map(({ key, href }) => (
                  <a
                    key={key}
                    href={href}
                    className={`nav-link font-lato text-[0.72rem] font-bold tracking-[.18em] uppercase transition-colors duration-200 ${
                      activeId === href.slice(1) ? "active" : ""
                    }`}
                    style={{
                      color: activeId === href.slice(1) ? "var(--color-primary)" : "var(--color-body-text)",
                    }}
                  >
                    {t(key as Parameters<typeof t>[0]) as string}
                  </a>
                ))}
              </div>
              <p className="font-lato text-[0.50rem] tracking-[.22em] uppercase"
                 style={{ color: "var(--color-subtle)", opacity: 0.55 }}>
                Ballet · PBT · PCT · Pilates · Stretching
              </p>
            </div>

            {/* Lang + Hamburger */}
            <div className="flex items-center gap-2">
              {/* Lang pills — desktop */}
              <div className="hidden md:flex gap-1" role="group" aria-label="Idioma">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className="text-[0.6rem] font-bold tracking-widest px-2.5 py-1 rounded-full border transition-all cursor-pointer"
                    style={lang === l ? {
                      borderColor: "var(--color-primary)",
                      color: "var(--color-primary)",
                      background: "rgba(200,56,77,0.08)",
                    } : {
                      borderColor: "transparent",
                      color: "var(--color-muted)",
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Hamburger */}
              <button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl cursor-pointer transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menú"
                aria-expanded={menuOpen}
                style={{
                  background: menuOpen ? "rgba(200,56,77,0.1)" : "transparent",
                  color: "var(--color-primary)",
                }}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7"
            style={{ background: "rgba(255,240,245,0.97)", backdropFilter: "blur(20px)" }}
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/fotos-landing/logo.jpeg" alt="Logo" width={64} height={64}
                   className="rounded-full object-cover mb-2" />
            {NAV_LINKS.map(({ key, href }, i) => (
              <motion.a
                key={key}
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-playfair text-2xl font-bold tracking-widest"
                style={{ color: "var(--color-primary)" }}
              >
                {t(key as Parameters<typeof t>[0]) as string}
              </motion.a>
            ))}
            <div className="flex gap-3 mt-2">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={(e) => { e.stopPropagation(); setLang(l); setMenuOpen(false); }}
                  className="text-xs font-bold tracking-widest px-4 py-2 rounded-full border-2 cursor-pointer transition-all"
                  style={lang === l ? {
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                    background: "rgba(200,56,77,0.08)",
                  } : {
                    borderColor: "rgba(240,160,184,0.5)",
                    color: "var(--color-muted)",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
