"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const item = active !== null ? site.gallery[active] : null;

  return (
    <section id="gallery" className="bg-atmosphere px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
            On the job
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Real moves. Real care. See the work.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            From packing floors to highway transit — a look at how Easy Packers
            & Movers handles shifts across India.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {site.gallery.map((shot, index) => {
            const span =
              shot.span === "wide"
                ? "col-span-2"
                : shot.span === "tall"
                  ? "row-span-2"
                  : "";

            return (
              <Reveal
                key={shot.src + shot.title}
                variant="scale"
                delayClassName={
                  index % 4 === 1
                    ? "reveal-delay-1"
                    : index % 4 === 2
                      ? "reveal-delay-2"
                      : index % 4 === 3
                        ? "reveal-delay-3"
                        : ""
                }
                className={`h-full ${span}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="gallery-tile group h-full w-full rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
                  <div className="tile-overlay absolute inset-x-0 bottom-0 translate-y-1 p-4 opacity-95 md:translate-y-2 md:opacity-90">
                    <p className="font-display text-lg text-white md:text-xl">
                      {shot.title}
                    </p>
                    <p className="mt-0.5 text-xs text-white/75 md:text-sm">
                      {shot.caption}
                    </p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {item ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 rounded-md border border-white/20 px-3 py-2 text-sm text-white"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-5">
              <p className="font-display text-2xl text-white">{item.title}</p>
              <p className="mt-1 text-sm text-white/75">{item.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
