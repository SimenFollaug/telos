import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, type Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/paths";
import { site } from "@/lib/site";

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/om">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="bg-sand">
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-16">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-navy sm:text-4xl">
          {dict.about.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy/80 sm:text-lg">
          {dict.about.lead}
        </p>
      </section>

      <section className="border-t border-line px-4 py-10 sm:px-5 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[0.08em] text-navy uppercase">
            {dict.about.approachTitle}
          </h2>
          <p className="mt-6 leading-relaxed text-navy/80">
            {dict.about.approachIntro}
          </p>
          <p className="mt-6 text-sm font-medium tracking-wide text-navy">
            {dict.about.pillarsIntro}
          </p>
          <ul className="mt-6 space-y-5">
            {dict.about.pillars.map((pillar) => (
              <li key={pillar.title}>
                <p className="font-[family-name:var(--font-display)] text-lg text-navy">
                  {pillar.title}
                </p>
                <p className="mt-1 leading-relaxed text-navy/75">
                  {pillar.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-navy/80">
            {dict.about.approachClosing}
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-sand px-4 py-10 sm:px-5 sm:py-16">
        <h2 className="text-center font-[family-name:var(--font-display)] text-2xl tracking-[0.12em] text-navy uppercase">
          {dict.about.foundersTitle}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-navy/80">
          {dict.about.foundersIntro}
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl gap-12 sm:grid-cols-2">
          <figure className="text-center">
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden">
              <Image
                src={site.images.tommy}
                alt={dict.about.tommyName}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            <figcaption className="mt-4">
              <p className="font-[family-name:var(--font-display)] text-xl text-navy">
                {dict.about.tommyName}
              </p>
              <p className="mt-1 text-sm text-gold">{dict.about.tommyRole}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy/75">
                {dict.about.tommyBio}
              </p>
            </figcaption>
          </figure>
          <figure className="text-center">
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden">
              <Image
                src={site.images.bethina}
                alt={dict.about.bethinaName}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            <figcaption className="mt-4">
              <p className="font-[family-name:var(--font-display)] text-xl text-navy">
                {dict.about.bethinaName}
              </p>
              <p className="mt-1 text-sm text-gold">{dict.about.bethinaRole}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy/75">
                {dict.about.bethinaBio}
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-line px-4 py-10 sm:px-5 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[0.08em] text-navy uppercase">
            {dict.about.philosophyTitle}
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-navy/80">
            {dict.about.philosophy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href={pathFor(locale, "contact")} variant="gold">
              {dict.nav.book}
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
