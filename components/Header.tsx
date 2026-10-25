import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/paths";
import { ButtonLink } from "./ButtonLink";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: pathFor(locale, "about"), label: dict.nav.about },
    { href: pathFor(locale, "services"), label: dict.nav.services },
    { href: pathFor(locale, "contact"), label: dict.nav.contact },
  ];

  return (
    <header className="relative z-40 bg-navy text-sand">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-5">
        <Link
          href={pathFor(locale)}
          className="shrink-0"
          aria-label="Aaquist"
        >
          <Logo size="sm" />
        </Link>

        <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.28em] uppercase transition hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <LanguageSwitch locale={locale} />
          </div>
          <ButtonLink
            href={pathFor(locale, "contact")}
            variant="gold"
            className="hidden min-w-0 px-5 py-2.5 md:inline-flex md:px-7 md:py-3"
          >
            {dict.nav.book}
          </ButtonLink>
          <MobileNav locale={locale} dict={dict} />
        </div>
      </div>
    </header>
  );
}
