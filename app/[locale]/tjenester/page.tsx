import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, type Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/paths";

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/tjenester">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="bg-sand px-4 py-10 sm:px-5 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-navy sm:text-4xl">
          {dict.services.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy/80 sm:text-lg">
          {dict.services.lead}
        </p>
        <ul className="mt-8 space-y-10 sm:mt-12 sm:space-y-12">
          {dict.services.items.map((item) => (
            <li key={item.title} className="border-t border-line pt-8 sm:pt-10">
              <h2 className="font-[family-name:var(--font-display)] text-xl text-navy sm:text-2xl">
                {item.title}
              </h2>
              {item.subtitle ? (
                <p className="mt-2 text-sm tracking-wide text-gold uppercase">
                  {item.subtitle}
                </p>
              ) : null}
              <p className="mt-4 leading-relaxed text-navy/80">{item.text}</p>
              <p className="mt-6 font-[family-name:var(--font-display)] text-sm tracking-[0.12em] text-navy uppercase">
                {item.bulletsTitle}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-navy/75">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ButtonLink href={pathFor(locale, "contact")} variant="gold">
            {dict.nav.book}
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
