"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export function RequestForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["contact"];
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          prefer: String(data.get("prefer") ?? "either"),
          timing: String(data.get("timing") ?? "").trim(),
          topic: String(data.get("topic") ?? "").trim(),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  const field =
    "mt-1.5 w-full border border-line bg-sand px-3 py-2.5 text-navy outline-none ring-gold/40 focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <p className="border border-line bg-[var(--warn-bg)] px-4 py-3 text-sm text-[var(--warn-ink)]">
        {dict.warning}
      </p>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          {dict.form.name} *
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            {dict.form.email} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            {dict.form.phone} *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>
      <fieldset>
        <legend className="text-sm font-medium">{dict.form.prefer}</legend>
        <div className="mt-2 flex flex-col gap-2 text-sm sm:flex-row sm:gap-5">
          {(
            [
              ["phone", dict.form.preferPhone],
              ["email", dict.form.preferEmail],
              ["either", dict.form.preferEither],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="prefer"
                value={value}
                defaultChecked={value === "either"}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="timing" className="text-sm font-medium">
          {dict.form.timing}
        </label>
        <input
          id="timing"
          name="timing"
          maxLength={120}
          placeholder={dict.form.timingPlaceholder}
          className={field}
        />
      </div>
      <div>
        <label htmlFor="topic" className="text-sm font-medium">
          {dict.form.topic}
        </label>
        <input
          id="topic"
          name="topic"
          maxLength={80}
          placeholder={dict.form.topicPlaceholder}
          className={field}
        />
        <p className="mt-1.5 text-sm text-muted">{dict.form.topicHint}</p>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gold px-6 py-3 font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-navy uppercase transition hover:bg-gold-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? dict.form.sending : dict.form.submit}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-[var(--ok)]">{dict.form.success}</p>
      ) : null}
      {status === "err" ? (
        <p className="text-sm text-[var(--err)]">{dict.form.error}</p>
      ) : null}
    </form>
  );
}
