"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "ready";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const from = String(data.get("from") || "").trim();
    const to = String(data.get("to") || "").trim();
    const moveType = String(data.get("moveType") || "").trim();

    const message = [
      `Hi Easy Packers & Movers, I need a shifting quote.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `From: ${from}`,
      `To: ${to}`,
      `Type: ${moveType}`,
    ].join("\n");

    const url = `https://wa.me/919036668067?text=${encodeURIComponent(message)}`;
    setStatus("ready");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_24px_60px_rgba(7,20,40,0.08)] md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" placeholder="Full name" required />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="10-digit mobile"
          required
        />
        <Field
          label="Moving from"
          name="from"
          placeholder="City / locality"
          required
        />
        <Field
          label="Moving to"
          name="to"
          placeholder="City / locality"
          required
        />
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-navy">
          Move type
        </span>
        <select
          name="moveType"
          required
          defaultValue="Home shifting"
          className="h-12 w-full rounded-md border border-navy/15 bg-surface px-3 text-base text-navy outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
        >
          <option>Home shifting</option>
          <option>Office shifting</option>
          <option>Vehicle transport</option>
          <option>Other</option>
        </select>
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-navy text-base font-semibold text-white transition hover:bg-blue"
      >
        Get quote on WhatsApp
      </button>

      <p className="mt-4 text-center text-sm text-muted">
        Prefer to talk? Call{" "}
        <a
          href={site.phones.call.href}
          className="font-semibold text-navy underline-offset-2 hover:underline"
        >
          {site.phones.call.display}
        </a>
        {status === "ready" ? " · WhatsApp opened with your details." : null}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-md border border-navy/15 bg-surface px-3 text-base text-navy outline-none transition placeholder:text-muted/70 focus:border-blue focus:ring-2 focus:ring-blue/20"
      />
    </label>
  );
}
