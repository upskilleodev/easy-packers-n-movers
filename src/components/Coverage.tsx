import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden bg-navy-mesh px-5 py-20 text-white md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-30 lg:block">
        <Image
          src="/images/gallery-6.jpg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Service area
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {site.coverage}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              label: site.headOfficeLabel,
              value: site.headOffice,
              detail: `Proprietor ${site.proprietor} · Call or WhatsApp for estimates.`,
            },
            {
              label: site.branchesLabel,
              value: site.branches,
              detail: "City-to-city coverage across Karnataka.",
            },
            {
              label: "Nationwide",
              value: site.coverage,
              detail: "Intercity and interstate moves with GST and IBA approval bills.",
            },
          ].map((item, index) => (
            <Reveal
              key={item.label}
              delayClassName={
                index === 1
                  ? "reveal-delay-1"
                  : index === 2
                    ? "reveal-delay-2"
                    : ""
              }
            >
              <div className="h-full border-t border-gold/50 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold md:text-[1.7rem]">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
