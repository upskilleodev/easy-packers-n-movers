import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep px-5 pb-28 pt-16 text-white md:px-8 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl font-semibold tracking-tight">
            Easy
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold-soft">
            Packers & Movers
          </p>
          <p className="mt-4 font-signature text-4xl leading-none text-gold-soft">
            {site.proprietor}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Proprietor
          </p>
          <p className="mt-2 text-sm font-medium text-gold-soft">
            {site.coverage}
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/75">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Contact
          </p>
          <p>
            Call:{" "}
            <a href={site.phones.call.href} className="hover:text-white">
              {site.phones.call.display}
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href={site.phones.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {site.phones.whatsapp.display}
            </a>
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/75">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Offices
          </p>
          <p>
            {site.headOfficeLabel}: {site.headOffice}
          </p>
          <p>
            {site.branchesLabel}: {site.branches}
          </p>
          <p className="pt-3 text-white/45">
            © 2026 Easy Packers & Movers
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/50 md:flex md:justify-between">
        <p>{site.trust[0].text}</p>
        <p className="mt-2 md:mt-0">{site.trust[1].text}</p>
      </div>
    </footer>
  );
}
