import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Owner() {
  return (
    <section id="owner" className="bg-navy-mesh px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal variant="scale">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/40 via-blue-bright/20 to-transparent blur-xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/owner.jpg"
                alt={`${site.proprietor}, proprietor of Easy Packers & Movers`}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Proprietor
                </p>
                <p className="mt-1 font-signature text-5xl leading-none text-gold-soft md:text-6xl">
                  {site.proprietor}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Leadership you can call
            </p>
            <h2 className="mt-3 font-signature text-5xl leading-none text-gold-soft sm:text-6xl md:text-7xl">
              {site.proprietor}
            </h2>
            <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Moves led personally — start to finish.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              When you book Easy Packers & Movers, you speak with{" "}
              {site.proprietor}&apos;s team — for safe packing, on time delivery,
              and safe &amp; secure transport. {site.trust[0].text}.{" "}
              {site.trust[1].text}.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {site.values.map((value, index) => (
              <Reveal
                key={value.title}
                delayClassName={
                  index === 1
                    ? "reveal-delay-1"
                    : index === 2
                      ? "reveal-delay-2"
                      : ""
                }
              >
                <div className="border-t border-gold/40 pt-4">
                  <h3 className="text-base font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayClassName="reveal-delay-2" className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phones.call.href}
                className="btn-shimmer inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-soft"
              >
                Speak to {site.proprietor.split(" ")[0]}
              </a>
              <a
                href={site.phones.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp the team
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
