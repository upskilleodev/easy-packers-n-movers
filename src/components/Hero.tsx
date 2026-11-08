import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-navy-deep"
    >
      <Image
        src="/images/hero.jpg"
        alt="Easy Packers & Movers truck on the highway across India"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-[60%_center] animate-ken"
      />
      <div className="hero-scrim absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
        <div className="max-w-3xl">
          <div className="animate-rise flex items-baseline gap-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/65">
              Proprietor
            </p>
            <p className="font-signature text-[1.85rem] leading-none text-gold-soft sm:text-[2.15rem] md:text-[2.45rem]">
              {site.proprietor}
            </p>
          </div>

          <h1 className="animate-rise-delay-1 mt-4 font-display text-[3.6rem] font-semibold leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            Easy
            <span className="mt-2 block text-[1.55rem] font-medium tracking-[0.06em] text-white/90 sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              Packers & Movers
            </span>
          </h1>

          <div className="gold-rule mt-6 h-[2px] w-28 bg-gradient-to-r from-gold to-gold-soft" />

          <p className="animate-rise-delay-2 mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
            {site.tagline}
          </p>

          <div className="animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.phones.call.href}
              className="btn-shimmer inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 py-3 text-base font-semibold text-navy transition hover:bg-gold-soft"
            >
              Call {site.phones.call.display}
            </a>
            <a
              href={site.phones.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 bg-white/8 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
