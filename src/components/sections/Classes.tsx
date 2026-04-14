"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, type TranslationKey } from "@/lib/i18n";
import { X } from "lucide-react";

type ClassItem = {
  id: string;
  gridImg: string;
  detailImg: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  fullKey: TranslationKey;
  label: string;
};

const CLASSES: ClassItem[] = [
  { id: "pbt",        gridImg: "/fotos-landing/pbt.jpg",             detailImg: "/fotos-landing/Progressing Ballet Technique.jpg",      titleKey: "card_pbt_title",        descKey: "card_pbt_desc",        fullKey: "card_pbt_full",        label: "TÉCNICA" },
  { id: "ballet",     gridImg: "/fotos-landing/Ballet.jpg",          detailImg: "/fotos-landing/Ballet.jpg",                            titleKey: "card_ballet_title",     descKey: "card_ballet_desc",     fullKey: "card_ballet_full",     label: "CLÁSICO" },
  { id: "pct",        gridImg: "/fotos-landing/pct.jpg",             detailImg: "/fotos-landing/Progressing Contemporary Technique.jpg", titleKey: "card_pct_title",        descKey: "card_pct_desc",        fullKey: "card_pct_full",        label: "CONTEMP." },
  { id: "stretching", gridImg: "/fotos-landing/Stretching.jpg",      detailImg: "/fotos-landing/stretching1.jpg",                       titleKey: "card_stretching_title", descKey: "card_stretching_desc", fullKey: "card_stretching_full", label: "FLEX." },
  { id: "reformer",   gridImg: "/fotos-landing/Pilates Reformer.jpg",detailImg: "/fotos-landing/Pilates Reformer.jpg",                  titleKey: "card_reformer_title",   descKey: "card_reformer_desc",   fullKey: "card_reformer_full",   label: "FUERZA" },
  { id: "mat",        gridImg: "/fotos-landing/Pilates Mat.png",      detailImg: "/fotos-landing/Pilates Mat.png",                       titleKey: "card_mat_title",        descKey: "card_mat_desc",        fullKey: "card_mat_full",        label: "CORE" },
];

// Bento grid layout (3 cols, explicit placement):
// [PBT - wide 2cols, row1]  [Ballet - tall rows1-2]
// [PCT - sq, row2]  [Stretch - sq, row2]  [Ballet cont.]
// [Reformer - wide 2cols, row3]  [Mat - sq, row3]
const GRID_PLACEMENT = [
  { col: "1 / 3", row: "1 / 2" },  // PBT — wide
  { col: "3 / 4", row: "1 / 3" },  // Ballet — tall (2 rows)
  { col: "1 / 2", row: "2 / 3" },  // PCT
  { col: "2 / 3", row: "2 / 3" },  // Stretching
  { col: "1 / 3", row: "3 / 4" },  // Reformer — wide
  { col: "3 / 4", row: "3 / 4" },  // Mat
];

export function Classes() {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggle = (id: string) => setActiveId((p) => (p === id ? null : id));
  const active = CLASSES.find((c) => c.id === activeId);

  return (
    <section id="classes" className="py-24 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-lato text-[0.65rem] font-bold tracking-[.32em] uppercase mb-3 flex items-center justify-center gap-2"
             style={{ color: "var(--color-gold)" }}>
            <span className="w-6 h-px inline-block" style={{ background: "var(--color-gold)" }} />
            {t("classes_eyebrow") as string}
            <span className="w-6 h-px inline-block" style={{ background: "var(--color-gold)" }} />
          </p>
          <h2 className="section-heading font-playfair font-bold italic text-4xl lg:text-5xl"
              style={{ color: "var(--color-body-text)" }}>
            {t("classes_title") as string}
          </h2>
          <p className="font-playfair italic text-lg lg:text-xl mt-5 mb-3"
             style={{ color: "var(--color-gold)" }}>
            Cada disciplina, una historia.
          </p>
          <p className="max-w-xl mx-auto font-lato font-light text-sm leading-relaxed"
             style={{ color: "var(--color-muted)" }}>
            {t("classes_subtitle") as string}
          </p>
        </motion.div>

        {/* Bento grid — desktop */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "240px 200px 240px",
          }}
        >
          {CLASSES.map((cls, i) => (
            <ClassCard
              key={cls.id}
              cls={cls}
              t={t}
              isActive={activeId === cls.id}
              onToggle={() => toggle(cls.id)}
              style={{
                gridColumn: GRID_PLACEMENT[i].col,
                gridRow: GRID_PLACEMENT[i].row,
              }}
              index={i}
            />
          ))}
        </div>

        {/* 2-col grid — mobile */}
        <div className="grid grid-cols-2 gap-3 md:hidden" style={{ gridAutoRows: "200px" }}>
          {CLASSES.map((cls, i) => (
            <ClassCard
              key={cls.id}
              cls={cls}
              t={t}
              isActive={activeId === cls.id}
              onToggle={() => toggle(cls.id)}
              style={{}}
              index={i}
            />
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32 }}
              className="mt-5 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,250,252,0.88)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(200,56,77,0.18)",
              }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 shrink-0 h-52 md:h-auto img-hover">
                  <Image src={active.detailImg} alt={t(active.titleKey) as string}
                    fill className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px" priority />
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-lato text-[0.6rem] font-bold tracking-[.28em] uppercase"
                            style={{ color: "var(--color-gold)" }}>
                        {active.label}
                      </span>
                      <h3 className="font-playfair font-bold text-xl md:text-2xl mt-1"
                          style={{ color: "var(--color-body-text)" }}>
                        {t(active.titleKey) as string}
                      </h3>
                    </div>
                    <button onClick={() => setActiveId(null)}
                      className="p-2 rounded-full cursor-pointer hover:bg-rose-100 transition-colors"
                      aria-label="Cerrar" style={{ color: "var(--color-primary)" }}>
                      <X size={18} />
                    </button>
                  </div>
                  <div className="mt-3 h-px w-10 rounded-full"
                       style={{ background: "linear-gradient(90deg, var(--color-primary), transparent)" }} />
                  <p className="mt-4 font-lato font-light text-sm leading-relaxed"
                     style={{ color: "var(--color-muted)" }}>
                    {t(active.fullKey) as string}
                  </p>
                  <a href="https://wa.me/34627323794" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-white text-xs font-bold uppercase tracking-widest transition-all hover:opacity-90 cursor-pointer"
                     style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))", boxShadow: "0 4px 14px rgba(200,56,77,0.3)" }}>
                    {t("detail_cta") as string}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ClassCard({
  cls, t, isActive, onToggle, style, index,
}: {
  cls: ClassItem;
  t: (key: TranslationKey) => string | string[];
  isActive: boolean;
  onToggle: () => void;
  style: React.CSSProperties;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      style={style}
    >
      <motion.div
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full h-full overflow-hidden rounded-2xl cursor-pointer group"
        style={{
          boxShadow: isActive
            ? "0 0 0 2px var(--color-primary), 0 10px 36px rgba(200,56,77,0.22)"
            : "0 4px 20px rgba(45,21,32,0.1)",
        }}
      >
        <Image
          src={cls.gridImg}
          alt={t(cls.titleKey) as string}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading={index < 2 ? "eager" : "lazy"}
          quality={85}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        {/* Hover tint */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
             style={{ background: "rgba(200,56,77,0.25)" }} />
        {/* Label */}
        <div className="absolute top-3 left-3">
          <span className="font-lato text-[0.56rem] font-bold tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)", color: "white" }}>
            {cls.label}
          </span>
        </div>
        {/* Active X */}
        {isActive && (
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
               style={{ background: "var(--color-primary)" }}>
            <X size={11} className="text-white" />
          </div>
        )}
        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <h3 className="font-playfair font-bold text-white leading-snug text-base md:text-lg">
            {t(cls.titleKey) as string}
          </h3>
          <p className="font-lato text-white/0 group-hover:text-white/80 text-xs mt-1 leading-snug line-clamp-2 transition-all duration-300">
            {t(cls.descKey) as string}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
