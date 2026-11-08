import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-atmosphere px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
            Full-service shifting
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Every step, handled end to end.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, index) => (
            <Reveal
              key={service.title}
              variant="scale"
              delayClassName={
                index % 3 === 1
                  ? "reveal-delay-1"
                  : index % 3 === 2
                    ? "reveal-delay-2"
                    : ""
              }
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <article className="gallery-tile group relative h-72 overflow-hidden rounded-[1.5rem] md:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <span className="text-xs font-semibold tracking-[0.18em] text-gold-soft">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
