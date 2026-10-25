"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { switchLocalePath } from "@/lib/paths";

export function LanguageSwitch({
  locale,
  tone = "onDark",
}: {
  locale: Locale;
  tone?: "onDark" | "onLight";
}) {
  const pathname = usePathname() || `/${locale}`;
  const active = tone === "onDark" ? "text-gold" : "text-navy";
  const idle =
    tone === "onDark" ? "text-sand/55 hover:text-sand" : "text-muted hover:text-ink";

  return (
    <div className="flex gap-1 text-[10px] tracking-wider" aria-label="Language">
      {locales.map((code) => (
        <Link
          key={code}
          href={switchLocalePath(pathname, code)}
          hrefLang={code}
          className={`px-1.5 py-1 uppercase ${code === locale ? active : idle}`}
          aria-current={code === locale ? "page" : undefined}
        >
          {code}
        </Link>
      ))}
    </div>
  );
}
