"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#owner", label: "Vijay Kumar" },
  { href: "#contact-info", label: "Contact" },
  { href: "#quote", label: "Get Quote" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-navy-deep/95 backdrop-blur-md shadow-[0_8px_30px_rgba(3,9,18,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <a href="#top" className="relative z-10 min-w-0">
          <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight text-white md:text-[1.6rem]">
            Easy
          </span>
          <span className="ml-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/85 md:text-[0.72rem]">
            Packers & Movers
          </span>
          <span className="mt-0.5 block font-signature text-[1.05rem] leading-none text-gold-soft md:text-[1.2rem]">
            {site.proprietor}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phones.call.href}
            className="btn-shimmer inline-flex h-11 items-center justify-center rounded-md bg-gold px-4 text-sm font-semibold text-navy transition hover:bg-gold-soft"
          >
            Call Now
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-16 border-t border-white/10 bg-navy-deep px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={site.phones.call.href}
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold text-sm font-semibold text-navy"
              onClick={() => setOpen(false)}
            >
              Call
            </a>
            <a
              href={site.phones.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
