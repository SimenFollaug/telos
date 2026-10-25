import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/paths";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="relative mt-auto overflow-hidden bg-navy text-sand">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-5 sm:pt-14 sm:pb-28">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:text-left">
          <Logo size="md" />
          <div>
            <p className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.16em] text-gold uppercase sm:text-xs sm:tracking-[0.2em]">
              {dict.footer.tagline}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-sand/80">
              {dict.footer.cta}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-sand/15 pt-8 text-center sm:mt-12 sm:pt-10 md:grid-cols-3 md:gap-0 md:text-left">
          <div className="md:border-r md:border-sand/15 md:pr-8">
            <h3 className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.22em] uppercase">
              {dict.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-sand/80">
              <li>{site.address}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:border-r md:border-sand/15 md:px-8">
            <h3 className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.22em] uppercase">
              {dict.footer.hoursTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-sand/80">
              <li>{dict.footer.hoursLine}</li>
            </ul>
          </div>
          <div className="md:pl-8">
            <h3 className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.22em] uppercase">
              {dict.footer.linksTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-sand/80">
              <li>
                <Link href={pathFor(locale, "about")} className="hover:text-gold">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={pathFor(locale, "services")} className="hover:text-gold">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={pathFor(locale, "contact")} className="hover:text-gold">
                  {dict.nav.book}
                </Link>
              </li>
              <li>
                <Link href={pathFor(locale, "privacy")} className="hover:text-gold">
                  {dict.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-sand/45">
          © {new Date().getFullYear()} Aaquist. {dict.footer.rights}
        </p>
      </div>
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[0.35em] text-center font-[family-name:var(--font-display)] text-[18vw] leading-none tracking-[0.06em] text-gold/35 select-none sm:bottom-[0.2em] sm:text-[16vw] sm:tracking-[0.1em]"
      >
        AAQUIST
      </p>
    </footer>
  );
}
