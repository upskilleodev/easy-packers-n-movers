import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Trust() {
  return (
    <section className="relative px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="scale">
          <div className="grid overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-[#0c1f3d] to-navy-deep text-white shadow-[0_28px_80px_rgba(3,9,18,0.4)] md:grid-cols-2">
            {site.trust.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 px-6 py-8 md:px-9 md:py-10 ${
                  index === 0
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
                  {index === 0 ? <ShieldIcon /> : <BillIcon />}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                    {item.title}
                  </p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-white md:text-lg">
                    {item.text}
                  </p>
                  {index === 0 ? (
                    <p className="mt-3 font-signature text-3xl text-gold-soft">
                      {site.proprietor}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l7 3v5.5c0 4.4-2.9 8.4-7 9.5-4.1-1.1-7-5.1-7-9.5V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9.2 12.2l1.9 1.9 3.7-3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BillIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3.5h10a1.5 1.5 0 011.5 1.5v14l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2-2 1.2V5A1.5 1.5 0 017 3.5z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 8.5h6M9 12h6M9 15.5h3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
