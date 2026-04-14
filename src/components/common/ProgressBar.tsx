"use client";
import { useEffect } from "react";

export function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div id="progress-bar" aria-hidden="true" />;
}
