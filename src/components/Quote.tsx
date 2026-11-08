import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export function Quote() {
  return (
    <section id="quote" className="relative overflow-hidden bg-cream px-5 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative mb-8 hidden overflow-hidden rounded-[1.5rem] sm:block lg:mb-10">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/gallery-3.jpg"
                alt="Family settling into a new home after shifting"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
            Get a quote
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Tell {site.proprietor}&apos;s team where you&apos;re headed.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Share a few details and continue on WhatsApp.{" "}
            {site.trust[1].text}. {site.coverage}.
          </p>
          <div className="mt-6 space-y-2 text-sm text-navy md:text-base">
            <p>
              <span className="font-semibold">Call:</span>{" "}
              <a href={site.phones.call.href} className="underline-offset-2 hover:underline">
                {site.phones.call.display}
              </a>
            </p>
            <p>
              <span className="font-semibold">WhatsApp:</span>{" "}
              <a
                href={site.phones.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                {site.phones.whatsapp.display}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delayClassName="reveal-delay-1" variant="scale">
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
