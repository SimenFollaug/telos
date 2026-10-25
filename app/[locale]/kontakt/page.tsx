import { notFound } from "next/navigation";
import { RequestForm } from "@/components/RequestForm";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/kontakt">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="bg-sand px-4 py-10 sm:px-5 sm:py-16">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-navy sm:text-4xl">
            {dict.contact.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy/80 sm:text-lg">
            {dict.contact.lead}
          </p>

          <div className="mt-8 space-y-6 sm:mt-10">
            <div>
              <p className="text-xs tracking-[0.18em] text-gold uppercase">
                {dict.contact.emailLabel}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-block break-all text-navy underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.18em] text-gold uppercase">
                {dict.contact.locationLabel}
              </p>
              <p className="mt-1 text-navy">{site.address}</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.18em] text-gold uppercase">
                {dict.contact.hoursLabel}
              </p>
              <p className="mt-1 text-navy">{dict.contact.hoursValue}</p>
            </div>
          </div>
        </div>
        <RequestForm locale={locale} dict={dict.contact} />
      </div>
    </main>
  );
}
