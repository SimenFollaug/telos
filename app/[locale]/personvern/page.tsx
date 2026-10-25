import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/personvern">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="bg-sand px-4 py-10 sm:px-5 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-navy sm:text-4xl">
          {dict.privacy.title}
        </h1>
        <p className="mt-3 text-sm text-muted">{dict.privacy.updated}</p>
        <div className="mt-10 space-y-10">
          {dict.privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-[family-name:var(--font-display)] text-xl text-navy">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
