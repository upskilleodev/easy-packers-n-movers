import Image from "next/image";
import { site } from "@/lib/site";

export function ImageMarquee() {
  const strip = [...site.gallery, ...site.gallery];

  return (
    <section className="overflow-hidden border-y border-navy/5 bg-navy-deep py-4">
      <div className="animate-marquee flex w-max gap-3">
        {strip.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className="relative h-28 w-44 shrink-0 overflow-hidden rounded-lg md:h-36 md:w-56"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="224px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
            <p className="absolute bottom-2 left-2 text-[11px] font-medium uppercase tracking-wider text-white/90">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
