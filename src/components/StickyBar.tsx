"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/95 p-3 backdrop-blur-md transition duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phones.call.href}
          className="inline-flex h-12 items-center justify-center rounded-md bg-gold text-sm font-semibold text-navy"
        >
          Call Vijay
        </a>
        <a
          href={site.phones.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
