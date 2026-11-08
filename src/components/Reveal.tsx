"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayClassName?: string;
  variant?: "rise" | "scale";
};

export function Reveal({
  children,
  className = "",
  delayClassName = "",
  variant = "rise",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const base = variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <div ref={ref} className={`${base} ${delayClassName} ${className}`.trim()}>
      {children}
    </div>
  );
}
