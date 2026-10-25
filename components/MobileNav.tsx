"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/paths";
import { LanguageSwitch } from "./LanguageSwitch";

export function MobileNav({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: pathFor(locale, "about"), label: dict.nav.about },
    { href: pathFor(locale, "services"), label: dict.nav.services },
    { href: pathFor(locale, "contact"), label: dict.nav.contact },
  ];

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center text-sand"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Lukk meny" : "Åpne meny"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Lukk" : "Meny"}</span>
        <span className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 block h-[1.5px] w-full bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute top-1.5 left-0 block h-[1.5px] w-full bg-current transition ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 block h-[1.5px] w-full bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
          />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-50 border-t border-sand/15 bg-navy px-5 py-6 shadow-lg"
        >
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 font-[family-name:var(--font-display)] text-sm tracking-[0.22em] text-sand uppercase"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={pathFor(locale, "contact")}
              className="mt-3 inline-flex items-center justify-center bg-gold px-5 py-3 font-[family-name:var(--font-display)] text-[11px] tracking-[0.22em] text-navy uppercase"
              onClick={() => setOpen(false)}
            >
              {dict.nav.book}
            </Link>
          </nav>
          <div className="mt-6 border-t border-sand/15 pt-4">
            <LanguageSwitch locale={locale} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
