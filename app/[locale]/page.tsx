import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { GoldRibbon } from "@/components/GoldRibbon";
import { Logo } from "@/components/Logo";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, type Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/paths";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return { title: dict.meta.title, description: dict.meta.description };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <main>
      <section className="relative overflow-hidden bg-sand px-4 pt-12 pb-14 sm:px-5 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28">
        <Image
          src={site.images.column}
          alt=""
          width={480}
          height={900}
          aria-hidden
          className="pointer-events-none absolute top-[-6%] left-[-4%] hidden h-[118%] w-auto max-w-[28%] object-contain opacity-[0.42] md:block"
          priority
        />
        <Image
          src={site.images.column}
          alt=""
          width={480}
          height={900}
          aria-hidden
          className="pointer-events-none absolute top-[-6%] right-[-4%] hidden h-[118%] w-auto max-w-[28%] scale-x-[-1] object-contain opacity-[0.42] md:block"
          priority
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <Logo size="lg" />
          <h1 className="mt-7 max-w-[20ch] font-[family-name:var(--font-display)] text-[1.35rem] leading-[1.25] tracking-[0.04em] text-navy uppercase sm:mt-10 sm:max-w-none sm:text-4xl sm:leading-[1.18] sm:tracking-[0.08em] md:text-[2.55rem] md:tracking-[0.1em]">
            {dict.home.headline}
          </h1>
          <p className="mt-5 max-w-[36rem] text-[15px] leading-[1.65] text-navy/80 sm:mt-7 sm:leading-[1.7] md:text-base">
            {dict.home.lead}
          </p>
          <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3.5">
            <ButtonLink
              href={pathFor(locale, "contact")}
              variant="navy"
              className="w-full sm:w-auto"
            >
              {dict.home.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={pathFor(locale, "about")}
              variant="navy"
              className="w-full sm:w-auto"
            >
              {dict.home.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <GoldRibbon>{dict.home.ribbonWeekend}</GoldRibbon>

      <section className="relative px-4 py-10 sm:py-14 md:px-8 md:py-20">
        <Image
          src={site.images.books}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/20" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-4 md:grid-cols-3 md:gap-6">
          {dict.home.serviceCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-0 flex-col bg-sand px-5 py-8 text-center shadow-lg sm:min-h-[280px] sm:px-6 sm:py-10 md:min-h-[320px]"
            >
              <h2 className="font-[family-name:var(--font-display)] text-base tracking-[0.08em] text-navy uppercase sm:text-lg md:text-xl">
                {card.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75 sm:mt-4">
                {card.text}
              </p>
              <div className="mt-6 sm:mt-7">
                <ButtonLink href={pathFor(locale, "services")} variant="gold">
                  {card.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <GoldRibbon>{dict.home.ribbonClinic}</GoldRibbon>

      <section className="grid md:grid-cols-2">
        <div className="flex items-center bg-sand px-5 py-12 sm:px-8 sm:py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-md space-y-4 text-center text-[15px] leading-relaxed text-navy/85 sm:space-y-5">
            {dict.home.aboutBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand md:aspect-auto md:min-h-[640px]">
          <Image
            src={site.images.about}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <GoldRibbon>{dict.home.ribbonJourney}</GoldRibbon>
      <section className="bg-sand px-4 py-10 text-center sm:px-5 sm:py-12">
        <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-navy/80 sm:text-base">
          {dict.home.journeyLead}
        </p>
        <div className="mt-6 sm:mt-7">
          <ButtonLink
            href={pathFor(locale, "contact")}
            variant="gold"
            className="w-full max-w-xs sm:w-auto"
          >
            {dict.home.primaryCta}
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
