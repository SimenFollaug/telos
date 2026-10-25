export const locales = ["da", "no", "en", "sv"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "da";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const htmlLang: Record<Locale, string> = {
  da: "da",
  no: "nb",
  en: "en",
  sv: "sv",
};
