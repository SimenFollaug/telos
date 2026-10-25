import type { Locale } from "./i18n";

export type PathKey = "home" | "about" | "services" | "contact" | "privacy";

const segments: Record<PathKey, string> = {
  home: "",
  about: "om",
  services: "tjenester",
  contact: "kontakt",
  privacy: "personvern",
};

export function pathFor(locale: Locale, key: PathKey = "home"): string {
  const segment = segments[key];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;
  parts[0] = nextLocale;
  return `/${parts.join("/")}`;
}
