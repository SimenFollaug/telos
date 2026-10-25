import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HtmlLang } from "@/components/HtmlLang";
import { getDictionary } from "@/lib/dictionary";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-full flex-col">
      <HtmlLang lang={htmlLang[locale]} />
      <Header locale={locale} dict={dict} />
      <div className="flex-1">{children}</div>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
