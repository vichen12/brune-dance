"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

type FormStatus = "idle" | "sending" | "success" | "error";

const CLASS_OPTIONS = [
  "Progressing Ballet Technique (PBT)",
  "Progressing Contemporary Technique (PCT)",
  "Stretching",
  "Pilates Reformer",
  "Pilates Mat",
  "Ballet",
  "Clases Online",
];

// CONFIGURACIÓN — reemplazar con tu URL de Google Apps Script
// SETUP INSTRUCTIONS:
// 1. Crear una Google Sheet nueva
// 2. Extensions > Apps Script > pegar el doPost de abajo
// 3. Deploy > New deployment > Web App (Execute as: Me, Access: Anyone)
// 4. Copiar la URL aquí:
const GOOGLE_SCRIPT_URL = "PEGA_TU_URL_AQUI";

export function Contact() {
  const { t } = useI18n();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [selectedClass, setSelectedClass] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      clase: (form.elements.namedItem("clase") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("sending");

    // Try Google Sheets
    if (GOOGLE_SCRIPT_URL !== "PEGA_TU_URL_AQUI") {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        setStatus("success");
        formRef.current?.reset();
        return;
      } catch {
        // fall through to WhatsApp
      }
    }

    // WhatsApp fallback
    const msg = encodeURIComponent(
      `Hola Brunela! Soy ${data.name}.\nClase: ${data.clase}\nTel: ${data.phone}\nEmail: ${data.email}\n${data.message}`
    );
    window.open(`https://wa.me/34627323794?text=${msg}`, "_blank");
    setStatus("success");
    formRef.current?.reset();
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 px-5 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — decorative dance column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex flex-col justify-center py-10"
        >
          {/* Arabesque SVG watermark */}
          <svg
            className="absolute -top-10 -left-10 opacity-[0.06] pointer-events-none select-none"
            width="320"
            height="420"
            viewBox="0 0 100 130"
            fill="none"
            aria-hidden="true"
          >
            <ellipse cx="50" cy="18" rx="7" ry="7" fill="#C8384D" />
            <path d="M50 25 C50 25 42 50 38 70 C34 90 30 110 28 125" stroke="#C8384D" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M50 25 C50 25 58 50 62 70 C66 90 70 110 72 125" stroke="#C8384D" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M42 42 C35 38 22 35 15 38" stroke="#C8384D" strokeWidth="2" strokeLinecap="round" />
            <path d="M58 42 C65 38 78 35 85 38 C90 40 92 45 88 50 C84 55 78 50 72 55" stroke="#C8384D" strokeWidth="2" strokeLinecap="round" />
          </svg>

          {/* Barre line top */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-gold)" }} />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }} />
          </div>

          <p
            className="font-lato text-[0.62rem] font-bold tracking-[.35em] uppercase mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            {t("contact_subtitle") as string}
          </p>

          <h2
            className="leading-none mb-6"
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)",
              color: "var(--color-primary)",
              lineHeight: 1.15,
            }}
          >
            {t("contact_title") as string}
          </h2>

          <p
            className="font-playfair italic text-2xl xl:text-3xl leading-snug mb-10 max-w-sm"
            style={{ color: "var(--color-primary)" }}
          >
            {t("contact_tagline") as string}
          </p>

          {/* Barre line middle */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, var(--color-accent), transparent)" }} />
          </div>

          {/* WhatsApp direct link */}
          <div>
            <p
              className="font-lato text-[0.62rem] font-bold tracking-[.25em] uppercase mb-4"
              style={{ color: "var(--color-muted)" }}
            >
              {t("contact_whatsapp") as string}
            </p>
            <a
              href="https://wa.me/34627323794"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all hover:opacity-90 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                color: "white",
                boxShadow: "0 4px 20px rgba(200,56,77,0.25)",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +34 627 323 794
            </a>
          </div>

          {/* Barre line bottom */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-gold)" }} />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }} />
          </div>
        </motion.div>

        {/* Right — Form card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mobile heading */}
          <div className="lg:hidden text-center mb-10">
            <h2 className="font-playfair font-bold italic text-4xl" style={{ color: "var(--color-primary)" }}>
              {t("contact_title") as string}
            </h2>
            <p className="font-playfair italic text-xl mt-3" style={{ color: "var(--color-primary)" }}>
              {t("contact_tagline") as string}
            </p>
          </div>

          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: "rgba(255,250,252,0.95)",
              border: "1px solid rgba(240,160,184,0.3)",
            }}
          >
            {/* Top accent bar */}
            <div
              className="h-1"
              style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-primary-light), var(--color-gold))" }}
            />

            <form ref={formRef} onSubmit={handleSubmit} className="p-7 md:p-10 space-y-0">
              {/* Name */}
              <div className="float-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  autoComplete="name"
                />
                <label htmlFor="name">{t("contact_name") as string}</label>
              </div>

              {/* Email */}
              <div className="float-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <label htmlFor="email">{t("contact_email") as string}</label>
              </div>

              {/* Phone */}
              <div className="float-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" "
                  autoComplete="tel"
                />
                <label htmlFor="phone">{t("contact_phone") as string}</label>
              </div>

              {/* Class dropdown */}
              <div className="mb-7 relative">
                <p className="font-lato text-[0.68rem] font-bold tracking-[.1em] uppercase mb-2"
                   style={{ color: "var(--color-primary)" }}>
                  {t("contact_class") as string}
                </p>
                {/* Trigger */}
                <button
                  type="button"
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm cursor-pointer transition-all"
                  style={{
                    background: "rgba(255,245,247,0.85)",
                    border: "1.5px solid rgba(240,160,184,0.5)",
                    color: selectedClass ? "var(--color-body-text)" : "var(--color-subtle)",
                  }}
                >
                  <span>{selectedClass || (t("contact_select") as string)}</span>
                  <motion.svg
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    style={{ color: "var(--color-primary)", flexShrink: 0 }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>

                {/* Dropdown panel */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 right-0 mt-2 z-20 rounded-2xl p-3 shadow-xl"
                      style={{
                        background: "rgba(255,248,250,0.97)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(240,160,184,0.35)",
                      }}
                    >
                      <div className="flex flex-col gap-1.5 max-h-56 overflow-y-auto pr-1"
                           style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(200,56,77,0.3) transparent" }}>
                        {CLASS_OPTIONS.map((opt) => {
                          const isSel = selectedClass === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => { setSelectedClass(opt); setDropdownOpen(false); }}
                              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[0.78rem] font-bold tracking-wide transition-all cursor-pointer border text-left"
                              style={isSel ? {
                                background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                                color: "white",
                                borderColor: "transparent",
                                boxShadow: "0 3px 10px rgba(200,56,77,0.28)",
                              } : {
                                background: "rgba(255,245,247,0.9)",
                                color: "var(--color-muted)",
                                borderColor: "rgba(240,160,184,0.35)",
                              }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full shrink-0"
                                    style={{ background: isSel ? "rgba(255,255,255,0.7)" : "var(--color-accent)" }} />
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <input type="hidden" name="clase" value={selectedClass} required />
              </div>

              {/* Message */}
              <div className="float-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  rows={3}
                />
                <label htmlFor="message">{t("contact_message") as string}</label>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-full text-white font-bold text-sm uppercase tracking-widest
                             transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
                             disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                    boxShadow: "0 4px 20px rgba(200,56,77,0.35)",
                  }}
                >
                  {status === "sending" ? "..." : (t("contact_submit") as string)}
                </button>
              </div>

              {/* Status messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-center font-lato text-sm font-semibold"
                    style={{ color: "#16a34a" }}
                    role="status"
                  >
                    {t("contact_success") as string}
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-center font-lato text-sm font-semibold"
                    style={{ color: "var(--color-primary)" }}
                    role="alert"
                  >
                    {t("contact_error") as string}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Mobile WhatsApp */}
          <div className="lg:hidden mt-6 text-center">
            <a
              href="https://wa.me/34627323794"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all hover:opacity-90 cursor-pointer"
              style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))", color: "white" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("contact_whatsapp") as string}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
