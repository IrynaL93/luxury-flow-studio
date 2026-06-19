import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    el.querySelectorAll<HTMLElement>(".reveal").forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function useCountUp(target: number, durationMs = 1600) {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(target * eased).toString();
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target.toString();
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs]);
  return ref;
}