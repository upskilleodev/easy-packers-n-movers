import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ClientInfo() {
  return (
    <section id="contact-info" className="bg-atmosphere px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
            From the client card
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Everything you need to reach Easy Packers & Movers.
          </h2>

          <dl className="mt-8 space-y-5">
            <InfoRow label="Proprietor" value={site.proprietor} />
            <InfoRow
              label="Call"
              value={site.phones.call.display}
              href={site.phones.call.href}
            />
            <InfoRow
              label="WhatsApp"
              value={site.phones.whatsapp.display}
              href={site.phones.whatsapp.href}
              external
            />
            <InfoRow
              label={site.headOfficeLabel}
              value={site.headOffice}
            />
            <InfoRow
              label={site.branchesLabel}
              value={site.branches}
            />
            <InfoRow label="Coverage" value={site.coverage} highlight />
          </dl>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {site.values.map((value) => (
              <li
                key={value.title}
                className="border-t-2 border-gold pt-3 text-sm font-semibold text-navy"
              >
                {value.title}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="scale" delayClassName="reveal-delay-1">
          <div className="overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white shadow-[0_24px_60px_rgba(6,16,31,0.12)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={site.brandCard}
                alt="Easy Packers & Movers official business card — Vijay Kumar, IBA approved, contact details"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {site.qrLabel}
                </p>
                <p className="mt-1 text-sm text-navy">
                  Use the QR on the card or call / WhatsApp directly.
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <a
                  href={site.phones.call.href}
                  className="inline-flex h-10 items-center rounded-md bg-navy px-3 text-xs font-semibold text-white"
                >
                  Call
                </a>
                <a
                  href={site.phones.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-md bg-gold px-3 text-xs font-semibold text-navy"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  href,
  external,
  highlight,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  highlight?: boolean;
}) {
  const content = href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="underline-offset-2 hover:underline"
    >
      {value}
    </a>
  ) : (
    value
  );

  return (
    <div className="grid gap-1 border-b border-navy/10 pb-4 sm:grid-cols-[140px_1fr] sm:items-baseline">
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </dt>
      <dd
        className={`text-base md:text-lg ${
          highlight ? "font-semibold text-blue" : "font-medium text-navy"
        }`}
      >
        {content}
      </dd>
    </div>
  );
}
