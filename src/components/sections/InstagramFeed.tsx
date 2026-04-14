"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Replace these URLs with real Instagram post images or use an embed service
// To embed real posts: paste the Instagram post URL as src and use <blockquote class="instagram-media">
// For a live feed widget: services like Behold.so (free tier available) or Elfsight
const PREVIEW_POSTS = [
  { src: "/fotos-landing/Ballet.jpg", alt: "Ballet" },
  { src: "/fotos-landing/pbt.jpg", alt: "PBT" },
  { src: "/fotos-landing/Stretching.jpg", alt: "Stretching" },
  { src: "/fotos-landing/pct.jpg", alt: "PCT" },
  { src: "/fotos-landing/Pilates Reformer.jpg", alt: "Pilates Reformer" },
  { src: "/fotos-landing/about-hero.jpg.jpg", alt: "Brunela" },
];

export function InstagramFeed() {
  return (
    <section
      className="py-20 lg:py-28 px-5 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-lato text-[0.65rem] font-bold tracking-[.32em] uppercase mb-3 flex items-center justify-center gap-2"
            style={{ color: "var(--color-gold)" }}
          >
            <span className="inline-block w-6 h-px" style={{ background: "var(--color-gold)" }} />
            INSTAGRAM
            <span className="inline-block w-6 h-px" style={{ background: "var(--color-gold)" }} />
          </p>
          <h2
            className="font-playfair font-bold text-3xl md:text-4xl mb-2"
            style={{ color: "var(--color-body-text)" }}
          >
            @brunela.dance
          </h2>
          <p className="font-lato font-light text-sm mt-3" style={{ color: "var(--color-muted)" }}>
            Seguime para ver clases, rutinas y el día a día de la danza
          </p>
        </motion.div>

        {/* Post grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {PREVIEW_POSTS.map((post, i) => (
            <motion.a
              key={post.src}
              href="https://www.instagram.com/brunela.dance"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              style={{ boxShadow: "0 4px 20px rgba(200,56,77,0.1)" }}
              aria-label={`Ver en Instagram: ${post.alt}`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Instagram hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(200,56,77,0.45)" }}
              >
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            href="https://www.instagram.com/brunela.dance"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all cursor-pointer"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary), var(--color-primary-light))",
              boxShadow: "0 6px 28px rgba(200,56,77,0.3)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            SEGUIR EN INSTAGRAM
          </motion.a>
        </div>
      </div>
    </section>
  );
}
