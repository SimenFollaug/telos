import type { Locale } from "./i18n";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    contact: string;
    privacy: string;
    book: string;
  };
  home: {
    headline: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    ribbonWeekend: string;
    ribbonClinic: string;
    ribbonJourney: string;
    journeyLead: string;
    serviceCards: { title: string; text: string; cta: string }[];
    aboutBody: string[];
  };
  about: {
    title: string;
    lead: string;
    approachTitle: string;
    approachIntro: string;
    pillarsIntro: string;
    pillars: { title: string; text: string }[];
    approachClosing: string;
    foundersTitle: string;
    foundersIntro: string;
    bethinaName: string;
    bethinaRole: string;
    bethinaBio: string;
    tommyName: string;
    tommyRole: string;
    tommyBio: string;
    philosophyTitle: string;
    philosophy: string[];
  };
  services: {
    title: string;
    lead: string;
    items: {
      title: string;
      subtitle?: string;
      text: string;
      bulletsTitle: string;
      bullets: string[];
    }[];
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    locationLabel: string;
    hoursLabel: string;
    hoursValue: string;
    warning: string;
    form: {
      name: string;
      email: string;
      phone: string;
      prefer: string;
      preferPhone: string;
      preferEmail: string;
      preferEither: string;
      timing: string;
      timingPlaceholder: string;
      topic: string;
      topicPlaceholder: string;
      topicHint: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  privacy: {
    title: string;
    updated: string;
    sections: { heading: string; paragraphs: string[] }[];
  };
  footer: {
    cta: string;
    contactTitle: string;
    hoursTitle: string;
    hoursLine: string;
    linksTitle: string;
    privacy: string;
    rights: string;
    tagline: string;
  };
};

const da: Dictionary = {
  meta: {
    title: "Aaquist — Psykologer i Aarhus | Terapi & personlig vækst",
    description:
      "Dansk psykologpraksis i Aarhus. Individuel terapi, parterapi og personlig udvikling — online og i klinikken.",
  },
  nav: {
    about: "Om os",
    services: "Tjenester",
    contact: "Kontakt",
    privacy: "Privatliv",
    book: "Bestil",
  },
  home: {
    headline: "Terapi, mening & personlig transformation",
    lead: "Hos Aaquist hjælper vi individer og par med at genfinde formål, følelsesmæssig klarhed og autentisk forbindelse gennem dybdeorienteret, evidensbaseret psykoterapi.",
    primaryCta: "Bestil",
    secondaryCta: "Vores tilgang",
    ribbonWeekend: "Weekend- og aftenaftaler er nu tilgængelige",
    ribbonClinic: "Alle tjenester kan udføres online og i vores klinik i Aarhus C",
    ribbonJourney: "Begynd din rejse",
    journeyLead:
      "Skriv til os på e-mail, så finder vi et tidspunkt sammen. Alle aftaler sker via e-mail.",
    serviceCards: [
      {
        title: "Individuel terapi",
        text: "Evidensbaseret dybdepsykologi for angst, depression, identitet og formål.",
        cta: "Læs mere",
      },
      {
        title: "Parterapi",
        text: "Tilknytningsbaseret terapi for intimitet, kommunikation og relationel healing.",
        cta: "Læs mere",
      },
      {
        title: "Personlig udvikling",
        text: "Coaching-lignende programmer for personlig vækst, til at nå dine mål i livet og relationer.",
        cta: "Læs mere",
      },
    ],
    aboutBody: [
      "Vi tror på, at mennesker grundlæggende er meningssøgende væsener. Psykologisk lidelse opstår ofte fra uløste følelser eller dysfunktionelle mønstre, men kan også skyldes en afbrydelse mellem ens liv og ens dybere værdier.",
      "Hos Aaquist hjælper vi dig med at genoprette forbindelsen til det, der virkelig betyder noget, og fremmer vækst både i dine relationer og som individ.",
    ],
  },
  about: {
    title: "Om Aaquist",
    lead: "En psykologpraksis grundlagt af Tommy og Bethina Aaquist, to psykologer og selv et forlovet par, dedikeret til at hjælpe individer og par med at opdage mening, følelsesmæssig integration og autentisk forbindelse gennem evidensbaseret terapi.",
    approachTitle: "Aaquist-tilgangen",
    approachIntro:
      "Søjlen i vores logo symboliserer det stærke, robuste menneske, som vi mener, terapi kan hjælpe med at bygge. Men to stærke søjler kan noget magisk: Når de mødes, stabiliserer de hinanden og danner noget nyt, øverst smelter de to søjler sammen til noget, der er større end summen af delene. Det er vores vision for både individuel vækst og parforhold.",
    pillarsIntro: "Vores integrative model kombinerer tre væsentlige dimensioner:",
    pillars: [
      {
        title: "Narrativ selvindsigt",
        text: "Forståelse af din livshistorie, mønstre og de ubevidste kræfter, der former din oplevelse.",
      },
      {
        title: "Følelsesmæssigt dybdearbejde",
        text: "Brug af evidensbaserede metoder som ISTDP (Intensiv Kortvarig Dynamisk Psykoterapi) til at få adgang til, behandle og integrere følelser.",
      },
      {
        title: "Fremtidsorienteret målsætning",
        text: "Afstemning af dine værdier, valg og handlinger med din dybere følelse af formål og mening.",
      },
    ],
    approachClosing:
      "Vi trækker på psykodynamiske, eksistentielle og tilknytningsbaserede rammer, altid forankret i forskning og klinisk effektivitet. Vores arbejde er samarbejdsorienteret og dybt respektfuldt over for hver persons unikke rejse.",
    foundersTitle: "Mød Tommy & Bethina",
    foundersIntro:
      "Vi er partnere i praksis og partnere i livet. Som et forlovet psykologpar bringer vi både det maskuline og det feminine perspektiv ind i vores arbejde, særligt i parterapi, hvor ingen af parterne nogensinde skal føle sig i undertal.",
    bethinaName: "Bethina Aaquist",
    bethinaRole: "Medstifter & autoriseret psykolog",
    bethinaBio:
      "Ekspert i tilknytningsbaseret parterapi, kommunikationsdynamik og relationel healing. Ved at kombinere evidensbaserede teknikker med respekt og forståelse for kønsforskelle i forholdet, guider Bethina par mod dybere intimitet, mere glæde og autentisk forbindelse.",
    tommyName: "Tommy Aaquist",
    tommyRole: "Medstifter & autoriseret psykolog",
    tommyBio:
      "Specialiseret i ISTDP, psykodynamisk terapi og eksistentiel psykologi. Med omfattende træning i følelsescentrede interventioner og en dyb interesse for filosofiske tilgange til meningsskabelse hjælper Tommy klienter med at få adgang til følelsesmæssig dybde og afklare deres livsretning.",
    philosophyTitle: "Vores filosofi",
    philosophy: [
      "Vi tror på, at mennesker grundlæggende er meningssøgende væsener. Psykologisk lidelse opstår ofte fra uløste følelser eller dysfunktionelle mønstre, men kan også skyldes en afbrydelse mellem ens liv og ens dybere værdier. Hos Aaquist hjælper vi dig med at genoprette forbindelsen til det, der virkelig betyder noget, og fremmer vækst både i dine relationer og som individ.",
    ],
  },
  services: {
    title: "Vores tjenester",
    lead: "Evidensbaseret terapi, der kombinerer dybdepsykologi, eksponeringsterapi og moderne tilknytningsforskning.",
    items: [
      {
        title: "Individuel terapi",
        text: "Vi tilbyder dybdeorienteret individuel terapi til voksne, der søger klarhed, følelsesmæssig integration og formål. Ved hjælp af evidensbaserede tilgange som ISTDP, psykodynamisk terapi og eksistentiel psykologi hjælper vi dig med at forstå din indre verden, behandle komplekse følelser og afstemme dit liv med dine dybere værdier.",
        bulletsTitle: "Fokusområder",
        bullets: [
          "Angst, stress og kronisk bekymring",
          "Depression og følelsesmæssig følelsesløshed",
          "Identitetsudforskning og selvforståelse",
          "Præstation, perfektionisme og livsretning",
          "Mening, formål og eksistentielle bekymringer",
        ],
      },
      {
        title: "Parterapi",
        subtitle: "To psykologer, to perspektiver — mandligt og kvindeligt",
        text: "Vores parterapi er forankret i tilknytningsteorien og følelsescentrede interventioner, og vi tilbyder den sammen, som et psykologpar. Med både en mandlig og en kvindelig terapeut i forløbet føler ingen af parterne sig i undertal, og både det maskuline og det feminine perspektiv er repræsenteret. Vi hjælper partnere med at forstå deres relationelle mønstre, kommunikere med dybde og klarhed og dyrke sikker, meningsfuld forbindelse, uanset om I navigerer konflikter, afstand eller en livsovergang. I kan også booke bare en af os.",
        bulletsTitle: "Nøgleelementer",
        bullets: [
          "Tilknytningsmønstre og følelsesmæssig binding",
          "Kommunikation og konfliktløsning",
          "Intimitet, tillid og sårbarhed",
          "Navigering af livstransitioner sammen",
          "Healing af relationelle sår",
        ],
      },
      {
        title: "Personlige udviklingsprogrammer",
        text: "Ud over traditionel terapi tilbyder vi strukturerede programmer til individer, der søger personlig vækst, livsoptimering og filosofisk klarhed. Disse programmer blander coaching, psykoedukation og refleksivt arbejde for at hjælpe dig med at afklare mål, overvinde forhindringer og leve med intentionalitet.",
        bulletsTitle: "Hvad er inkluderet",
        bullets: [
          "Målsætning og værdiafklaring",
          "Vanetilegnelse og ansvarlighed",
          "Narrative selvforfattende øvelser",
          "Psykologisk modstandstræning",
          "Filosofiske rammer for meningsskabelse",
        ],
      },
    ],
  },
  contact: {
    title: "Kontakt os",
    lead: "Vi er her for at besvare dine spørgsmål og hjælpe dig i gang med din terapeutiske rejse. Udfyld formularen — skriv ikke diagnoser eller helbredsoplysninger her.",
    emailLabel: "E-mail",
    locationLabel: "Sted",
    hoursLabel: "Åbningstider",
    hoursValue: "Alle dage: 09:00 – 22:00",
    warning:
      "Send ikke følsomme helbredsoplysninger via denne formular eller almindelig e-mail.",
    form: {
      name: "Navn",
      email: "E-mail",
      phone: "Telefon",
      prefer: "Hvordan vil du kontaktes?",
      preferPhone: "Telefon",
      preferEmail: "E-mail (kun til aftale)",
      preferEither: "Begge dele",
      timing: "Ønsket tidspunkt",
      timingPlaceholder: "F.eks. hverdage efter kl. 16",
      topic: "Emne (valgfrit)",
      topicPlaceholder: "F.eks. ønske om første samtale",
      topicHint: "Hold det kort. Ingen helbredsoplysninger.",
      submit: "Send forespørgsel",
      sending: "Sender…",
      success: "Tak. Vi har modtaget din forespørgsel.",
      error: "Noget gik galt. Prøv igen, eller skriv til os på e-mail.",
    },
  },
  privacy: {
    title: "Privatlivspolitik",
    updated: "Senest opdateret: september 2026",
    sections: [
      {
        heading: "Behandlingsansvarlig",
        paragraphs: [
          "Aaquist er en psykologpraksis etableret i Danmark. Vi er behandlingsansvarlige for personoplysninger indsamlet via denne hjemmeside (GDPR / Datatilsynet DK).",
        ],
      },
      {
        heading: "Kontaktformular",
        paragraphs: [
          "Vi indsamler navn, e-mail, telefon, sprog, kontaktpræference, evt. tidspunkt og et kort valgfrit emne. Formålet er at besvare din forespørgsel. Helbredsoplysninger skal ikke sendes her.",
        ],
      },
      {
        heading: "Opbevaring & rettigheder",
        paragraphs: [
          "Forespørgsler sendes som intern notifikation og slettes når henvendelsen er håndteret, medmindre der oprettes patientforhold. Du har rettigheder efter GDPR, inkl. klage til Datatilsynet.",
        ],
      },
    ],
  },
  footer: {
    cta: "Skriv til os på e-mail, så finder vi et tidspunkt sammen. Al aftale sker via e-mail. Undlad at sende helbredsoplysninger på almindelig e-mail.",
    contactTitle: "Kontakt",
    hoursTitle: "Åbningstider",
    hoursLine: "Alle dage: 09:00 – 22:00",
    linksTitle: "Hurtige links",
    privacy: "Privatlivspolitik",
    rights: "Alle rettigheder forbeholdes",
    tagline: "Psykologi, Relationer & Personlig Vækst",
  },
};

const no: Dictionary = {
  meta: {
    title: "Aaquist — Psykologer i Aarhus | Terapi & personlig vekst",
    description:
      "Dansk psykologpraksis i Aarhus. Individuell terapi, parterapi og personlig utvikling — online og i klinikken.",
  },
  nav: {
    about: "Om oss",
    services: "Tjenester",
    contact: "Kontakt",
    privacy: "Personvern",
    book: "Bestill",
  },
  home: {
    headline: "Terapi, mening & personlig forvandling",
    lead: "Hos Aaquist hjelper vi enkeltpersoner og par med å gjenfinne mening, følelsesmessig klarhet og ekte nærhet gjennom dybdeorientert, evidensbasert psykoterapi.",
    primaryCta: "Bestill",
    secondaryCta: "Vår tilnærming",
    ribbonWeekend: "Weekend- og kveldsavtaler er nå tilgjengelige",
    ribbonClinic: "Alle tjenester kan utføres online og i vår klinikk i Aarhus C",
    ribbonJourney: "Begynn din reise",
    journeyLead:
      "Skriv til oss på e-post, så finner vi et tidspunkt sammen. Alle avtaler gjøres via e-post.",
    serviceCards: [
      {
        title: "Individualterapi",
        text: "Evidensbasert dybdepsykologi ved angst, depresjon, identitet og mening.",
        cta: "Les mer",
      },
      {
        title: "Parterapi",
        text: "Tilknytningsbasert terapi for intimitet, kommunikasjon og relasjonell heling.",
        cta: "Les mer",
      },
      {
        title: "Personlig utvikling",
        text: "Coachende programmer for personlig vekst, for å nå dine mål i livet og relasjoner.",
        cta: "Les mer",
      },
    ],
    aboutBody: [
      "Vi tror at mennesket i sin kjerne er et meningssøkende vesen. Psykisk lidelse springer ofte ut av uforløste følelser eller uheldige mønstre, men kan også skyldes et gap mellom livet man lever og verdiene man bærer.",
      "Hos Aaquist hjelper vi deg med å gjenopprette forbindelsen til det som virkelig betyr noe, og fremmer vekst både i relasjonene dine og som individ.",
    ],
  },
  about: {
    title: "Om Aaquist",
    lead: "En psykologpraksis grunnlagt av Tommy og Bethina Aaquist, to psykologer og selv et forlovet par, viet til å hjelpe enkeltpersoner og par med å finne mening, følelsesmessig integrasjon og ekte nærhet gjennom evidensbasert terapi.",
    approachTitle: "Aaquist-tilnærmingen",
    approachIntro:
      "Søylen i logoen vår symboliserer det sterke, bærekraftige mennesket vi mener terapi kan bidra til å bygge. Men to sterke søyler er mer enn to: når de møtes, stabiliserer de hverandre og danner noe nytt, øverst smelter de sammen til noe større enn summen av delene. Det er visjonen vår for både individuell vekst og parforhold.",
    pillarsIntro: "Vår integrative modell forener tre vesentlige dimensjoner:",
    pillars: [
      {
        title: "Narrativ selvinnsikt",
        text: "Forståelse av din livshistorie, dine mønstre og de ubevisste kreftene som former opplevelsen din.",
      },
      {
        title: "Følelsesmessig dybdearbeid",
        text: "Evidensbaserte metoder som ISTDP (intensiv korttids dynamisk psykoterapi) for å nå, bearbeide og integrere følelser.",
      },
      {
        title: "Fremtidsrettet målsetting",
        text: "Å samstemme verdiene, valgene og handlingene dine med din dypere følelse av mening og retning.",
      },
    ],
    approachClosing:
      "Vi arbeider ut fra psykodynamiske, eksistensielle og tilknytningsteoretiske rammer, alltid forankret i forskning og klinisk virkning. Arbeidet vårt er samskapende og dypt respektfullt overfor hvert menneskes unike reise.",
    foundersTitle: "Møt Tommy & Bethina",
    foundersIntro:
      "Vi er kolleger i praksis og partnere i livet. Som et forlovet psykologpar bringer vi både det maskuline og det feminine perspektivet inn i arbeidet — særlig i parterapi, der ingen av partene noen gang skal føle seg i mindretall.",
    bethinaName: "Bethina Aaquist",
    bethinaRole: "Medgrunnlegger & autorisert psykolog",
    bethinaBio:
      "Ekspert på tilknytningsbasert parterapi, kommunikasjonsdynamikk og relasjonell heling. Ved å forene evidensbaserte metoder med respekt og forståelse for kjønnsforskjeller i forholdet veileder Bethina par mot dypere intimitet, mer glede og ekte nærhet.",
    tommyName: "Tommy Aaquist",
    tommyRole: "Medgrunnlegger & autorisert psykolog",
    tommyBio:
      "Spesialisert i ISTDP, psykodynamisk terapi og eksistensiell psykologi. Med omfattende utdanning i følelsesfokuserte intervensjoner og en dyp interesse for filosofiske veier til mening hjelper Tommy klienter med å nå følelsesmessig dybde og avklare retningen i livet.",
    philosophyTitle: "Vår filosofi",
    philosophy: [
      "Vi tror at mennesket i sin kjerne er et meningssøkende vesen. Psykisk lidelse springer ofte ut av uforløste følelser eller uheldige mønstre, men kan også skyldes et gap mellom livet man lever og verdiene man bærer. Hos Aaquist hjelper vi deg med å gjenopprette forbindelsen til det som virkelig betyr noe, og fremmer vekst både i relasjonene dine og som individ.",
    ],
  },
  services: {
    title: "Våre tjenester",
    lead: "Evidensbasert terapi som forener dybdepsykologi, eksponeringsterapi og moderne tilknytningsforskning.",
    items: [
      {
        title: "Individualterapi",
        text: "Vi tilbyr dybdeorientert individualterapi for voksne som søker klarhet, følelsesmessig integrasjon og mening. Med evidensbaserte tilnærminger som ISTDP, psykodynamisk terapi og eksistensiell psykologi hjelper vi deg med å forstå din indre verden, bearbeide sammensatte følelser og samstemme livet ditt med dine dypere verdier.",
        bulletsTitle: "Fokusområder",
        bullets: [
          "Angst, stress og kronisk bekymring",
          "Depresjon og følelsesmessig nummenhet",
          "Identitetsutforskning og selvforståelse",
          "Prestasjon, perfeksjonisme og retning i livet",
          "Mening og eksistensielle spørsmål",
        ],
      },
      {
        title: "Parterapi",
        subtitle: "To psykologer, to perspektiver — mannlig og kvinnelig",
        text: "Parterapien vår hviler på tilknytningsteori og følelsesfokuserte intervensjoner — og vi tilbyr den sammen, som et forlovet psykologpar. Med både en mannlig og en kvinnelig terapeut i rommet føler ingen av partene seg i mindretall, og både det maskuline og det feminine perspektivet er representert. Vi hjelper dere med å forstå deres relasjonelle mønstre, kommunisere med dybde og klarhet og bygge en trygg, meningsfull forbindelse — enten dere står i konflikt, avstand eller en livsovergang.",
        bulletsTitle: "Nøkkelelementer",
        bullets: [
          "Tilknytningsmønstre og følelsesmessige bånd",
          "Kommunikasjon og konflikthåndtering",
          "Intimitet, tillit og sårbarhet",
          "Å navigere livsoverganger sammen",
          "Heling av relasjonelle sår",
        ],
      },
      {
        title: "Programmer for personlig utvikling",
        text: "Utover tradisjonell terapi tilbyr vi strukturerte programmer for deg som søker personlig vekst, livsoptimalisering og filosofisk klarhet. Programmene forener coaching, psykoedukasjon og refleksivt arbeid for å hjelpe deg med å avklare mål, overvinne hindringer og leve med hensikt.",
        bulletsTitle: "Dette inngår",
        bullets: [
          "Målsetting og verdiavklaring",
          "Vanebygging og ansvarlighet",
          "Narrative øvelser i selvforfatting",
          "Trening i psykologisk motstandskraft",
          "Filosofiske rammer for meningsskaping",
        ],
      },
    ],
  },
  contact: {
    title: "Kontakt oss",
    lead: "Vi er her for å svare på spørsmålene dine og hjelpe deg i gang med din terapeutiske reise. Fyll inn skjemaet — ikke skriv diagnoser eller helseopplysninger her.",
    emailLabel: "E-post",
    locationLabel: "Sted",
    hoursLabel: "Åpningstider",
    hoursValue: "Alle dager: 09:00 – 22:00",
    warning:
      "Ikke send sensitive helseopplysninger via dette skjemaet eller vanlig e-post.",
    form: {
      name: "Navn",
      email: "E-post",
      phone: "Telefon",
      prefer: "Hvordan vil du kontaktes?",
      preferPhone: "Telefon",
      preferEmail: "E-post (kun for avtale)",
      preferEither: "Begge deler",
      timing: "Ønsket tidspunkt",
      timingPlaceholder: "F.eks. hverdager etter kl. 16",
      topic: "Tema (valgfritt)",
      topicPlaceholder: "F.eks. ønske om første samtale",
      topicHint: "Hold det kort. Ingen helseopplysninger.",
      submit: "Send forespørsel",
      sending: "Sender…",
      success: "Takk. Vi har mottatt forespørselen.",
      error: "Noe gikk galt. Prøv igjen, eller skriv til oss på e-post.",
    },
  },
  privacy: {
    title: "Personvernerklæring",
    updated: "Sist oppdatert: september 2026",
    sections: [
      {
        heading: "Behandlingsansvarlig",
        paragraphs: [
          "Aaquist er en psykologpraksis etablert i Danmark. Vi er behandlingsansvarlige for personopplysninger samlet inn via dette nettstedet (GDPR).",
        ],
      },
      {
        heading: "Kontaktskjema",
        paragraphs: [
          "Vi samler inn navn, e-post, telefon, språk, kontaktpreferanse, evt. tidspunkt og et kort valgfritt tema. Formålet er å besvare forespørselen. Helseopplysninger skal ikke sendes her.",
        ],
      },
      {
        heading: "Lagring & rettigheter",
        paragraphs: [
          "Forespørsler sendes som intern varsling og slettes når henvendelsen er håndtert, med mindre det opprettes pasientforhold. Du har rettigheter etter GDPR.",
        ],
      },
    ],
  },
  footer: {
    cta: "Skriv til oss på e-post, så finner vi et tidspunkt sammen. Alle avtaler gjøres via e-post. Unngå å sende helseopplysninger på vanlig e-post.",
    contactTitle: "Kontakt",
    hoursTitle: "Åpningstider",
    hoursLine: "Alle dager: 09:00 – 22:00",
    linksTitle: "Hurtiglenker",
    privacy: "Personvernerklæring",
    rights: "Alle rettigheter forbeholdt",
    tagline: "Psykologi, Relasjoner & Personlig Vekst",
  },
};

const en: Dictionary = {
  meta: {
    title: "Aaquist — Psychologists in Aarhus | Therapy & personal growth",
    description:
      "Danish psychology practice in Aarhus. Individual therapy, couples therapy and personal development — online and in clinic.",
  },
  nav: {
    about: "About us",
    services: "Services",
    contact: "Contact",
    privacy: "Privacy",
    book: "Book",
  },
  home: {
    headline: "Therapy, meaning & personal transformation",
    lead: "At Aaquist, we help individuals and couples rediscover purpose, emotional clarity, and authentic connection through depth-oriented, evidence-based psychotherapy.",
    primaryCta: "Book",
    secondaryCta: "Our approach",
    ribbonWeekend: "Weekend & evening appointments now available",
    ribbonClinic: "All services available online and at our clinic in Aarhus C",
    ribbonJourney: "Begin your journey",
    journeyLead:
      "Write to us by email, and we will find a time together. All appointments are arranged by email.",
    serviceCards: [
      {
        title: "Individual therapy",
        text: "Evidence-based depth psychology for anxiety, depression, identity, and purpose.",
        cta: "Learn more",
      },
      {
        title: "Couples therapy",
        text: "Attachment-based therapy for intimacy, communication, and relational healing.",
        cta: "Learn more",
      },
      {
        title: "Self-development",
        text: "Coaching-style programs for personal growth, achieving your goals in life and relationships.",
        cta: "Learn more",
      },
    ],
    aboutBody: [
      "We believe that human beings are fundamentally meaning-seeking creatures. Psychological suffering often arises from unresolved emotions or dysfunctional patterns, but can also stem from a disconnect between one's life and one's deeper values.",
      "At Aaquist, we help you reconnect with what truly matters, fostering growth both in your relationships and as an individual.",
    ],
  },
  about: {
    title: "About Aaquist",
    lead: "A psychology practice founded by Tommy and Bethina Aaquist, two psychologists and an engaged couple themselves, dedicated to helping individuals and couples discover meaning, emotional integration, and authentic connection through evidence-based therapy.",
    approachTitle: "The Aaquist approach",
    approachIntro:
      "The pillar in our logo symbolizes the strong, resilient individual we believe therapy can help build. But two strong pillars are more than two: when they come together, they stabilize one another and form something new; at the top, the two columns merge into something greater than the sum of their parts. That is our vision for both individual growth and relationships.",
    pillarsIntro: "Our integrative model combines three essential dimensions:",
    pillars: [
      {
        title: "Narrative self-insight",
        text: "Understanding your life story, patterns, and the unconscious forces shaping your experience.",
      },
      {
        title: "Emotional depth work",
        text: "Using evidence-based methods like ISTDP (Intensive Short-Term Dynamic Psychotherapy) to access, process, and integrate emotions.",
      },
      {
        title: "Future-oriented goal setting",
        text: "Aligning your values, choices, and actions with your deeper sense of purpose and meaning.",
      },
    ],
    approachClosing:
      "We draw on psychodynamic, existential, and attachment-based frameworks, always grounded in research and clinical effectiveness. Our work is collaborative and deeply respectful of each person's unique journey.",
    foundersTitle: "Meet Tommy & Bethina",
    foundersIntro:
      "We are partners in practice and partners in life. As an engaged couple of psychologists, we bring both the masculine and the feminine perspective into our work — especially in couples therapy, where neither partner should ever feel outnumbered.",
    bethinaName: "Bethina Aaquist",
    bethinaRole: "Co-founder & authorized psychologist",
    bethinaBio:
      "Expert in attachment-based couples therapy, communication dynamics, and relational healing. By combining evidence-based techniques with respect and understanding for gender differences in the relationship, Bethina guides couples toward deeper intimacy, more joy, and authentic connection.",
    tommyName: "Tommy Aaquist",
    tommyRole: "Co-founder & authorized psychologist",
    tommyBio:
      "Specialized in ISTDP, psychodynamic therapy, and existential psychology. With extensive training in emotion-focused interventions and a deep interest in philosophical approaches to meaning-making, Tommy helps clients access emotional depth and clarify their life direction.",
    philosophyTitle: "Our philosophy",
    philosophy: [
      "We believe that human beings are fundamentally meaning-seeking creatures. Psychological suffering often arises from unresolved emotions or dysfunctional patterns, but can also stem from a disconnect between one's life and one's deeper values. At Aaquist, we help you reconnect with what truly matters, fostering growth both in your relationships and as an individual.",
    ],
  },
  services: {
    title: "Our services",
    lead: "Evidence-based therapy combining depth psychology, exposure therapy, and modern attachment research.",
    items: [
      {
        title: "Individual therapy",
        text: "We offer depth-oriented individual therapy for adults seeking clarity, emotional integration, and purpose. Using evidence-based approaches like ISTDP, psychodynamic therapy, and existential psychology, we help you understand your inner world, process complex emotions, and align your life with your deeper values.",
        bulletsTitle: "Areas of focus",
        bullets: [
          "Anxiety, stress, and chronic worry",
          "Depression and emotional numbness",
          "Identity exploration and self-understanding",
          "Performance, perfectionism, and life direction",
          "Meaning, purpose, and existential concerns",
        ],
      },
      {
        title: "Couples therapy",
        subtitle: "Two psychologists, two perspectives — male and female",
        text: "Our couples therapy is grounded in attachment theory and emotion-focused interventions — and we offer it together, as an engaged couple of psychologists. With both a male and a female therapist in the process, neither partner feels outnumbered, and both the masculine and feminine perspectives are represented. We help partners understand their relational patterns, communicate with depth and clarity, and cultivate secure, meaningful connection — whether you're navigating conflict, disconnection, or a life transition.",
        bulletsTitle: "Key elements",
        bullets: [
          "Attachment patterns and emotional bonding",
          "Communication and conflict resolution",
          "Intimacy, trust, and vulnerability",
          "Navigating life transitions together",
          "Healing relational wounds",
        ],
      },
      {
        title: "Self-development programs",
        text: "Beyond traditional therapy, we offer structured programs for individuals seeking personal growth, life optimization, and philosophical clarity. These programs blend coaching, psychoeducation, and reflective work to help you clarify goals, overcome obstacles, and live with intentionality.",
        bulletsTitle: "What's included",
        bullets: [
          "Goal-setting and values clarification",
          "Habit formation and accountability",
          "Narrative self-authoring exercises",
          "Psychological resilience training",
          "Philosophical frameworks for meaning-making",
        ],
      },
    ],
  },
  contact: {
    title: "Get in touch",
    lead: "We're here to answer your questions and help you begin your therapeutic journey. Fill in the form — do not write diagnoses or health details here.",
    emailLabel: "Email",
    locationLabel: "Location",
    hoursLabel: "Office hours",
    hoursValue: "Every day: 09:00 – 22:00",
    warning:
      "Do not send sensitive health information through this form or ordinary email.",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      prefer: "How should we contact you?",
      preferPhone: "Phone",
      preferEmail: "Email (scheduling only)",
      preferEither: "Either",
      timing: "Preferred timing",
      timingPlaceholder: "e.g. weekdays after 4 pm",
      topic: "Topic (optional)",
      topicPlaceholder: "e.g. request for a first session",
      topicHint: "Keep it short. No health details.",
      submit: "Send request",
      sending: "Sending…",
      success: "Thank you. We have received your request.",
      error: "Something went wrong. Please try again, or email us.",
    },
  },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "Data controller",
        paragraphs: [
          "Aaquist is a psychology practice established in Denmark. We are the data controller for personal data collected via this website (GDPR).",
        ],
      },
      {
        heading: "Contact form",
        paragraphs: [
          "We collect name, email, phone, language, contact preference, optional timing and an optional short topic. The purpose is to respond to your request. Health details must not be submitted here.",
        ],
      },
      {
        heading: "Retention & rights",
        paragraphs: [
          "Requests are sent as an internal notification and deleted when handled, unless a patient relationship is established. You have rights under the GDPR.",
        ],
      },
    ],
  },
  footer: {
    cta: "Write to us by email and we will find a time together. All appointments are arranged by email. Please do not send health details by ordinary email.",
    contactTitle: "Contact",
    hoursTitle: "Office hours",
    hoursLine: "Every day: 09:00 – 22:00",
    linksTitle: "Quick links",
    privacy: "Privacy policy",
    rights: "All rights reserved",
    tagline: "Psychology, Relationships & Personal Growth",
  },
};

const sv: Dictionary = {
  meta: {
    title: "Aaquist — Psykologer i Aarhus | Terapi & personlig växt",
    description:
      "Dansk psykologpraktik i Aarhus. Individuell terapi, parterapi och personlig utveckling — online och på kliniken.",
  },
  nav: {
    about: "Om oss",
    services: "Tjänster",
    contact: "Kontakt",
    privacy: "Integritet",
    book: "Boka",
  },
  home: {
    headline: "Terapi, mening & personlig förvandling",
    lead: "Hos Aaquist hjälper vi individer och par att återfinna mening, känslomässig klarhet och äkta närhet genom djupgående, evidensbaserad psykoterapi.",
    primaryCta: "Boka",
    secondaryCta: "Vår metod",
    ribbonWeekend: "Helg- och kvällstider är nu tillgängliga",
    ribbonClinic: "Alla tjänster kan utföras online och på vår klinik i Aarhus C",
    ribbonJourney: "Börja din resa",
    journeyLead:
      "Skriv till oss på e-post, så hittar vi en tid tillsammans. Alla bokningar sker via e-post.",
    serviceCards: [
      {
        title: "Individualterapi",
        text: "Evidensbaserad djuppsykologi vid ångest, depression, identitet och mening.",
        cta: "Läs mer",
      },
      {
        title: "Parterapi",
        text: "Anknytningsbaserad terapi för intimitet, kommunikation och relationell läkning.",
        cta: "Läs mer",
      },
      {
        title: "Personlig utveckling",
        text: "Coachande program för personlig växt, för att nå dina mål i livet och relationer.",
        cta: "Läs mer",
      },
    ],
    aboutBody: [
      "Vi tror att människan i grunden är en meningssökande varelse. Psykiskt lidande uppstår ofta ur olösta känslor eller destruktiva mönster, men kan också bero på en glipa mellan det liv man lever och de värden man bär.",
      "Hos Aaquist hjälper vi dig att återknyta kontakten med det som verkligen betyder något och främjar växt både i dina relationer och som individ.",
    ],
  },
  about: {
    title: "Om Aaquist",
    lead: "En psykologmottagning grundad av Tommy och Bethina Aaquist, två psykologer och själva ett förlovat par, med uppdraget att hjälpa individer och par att finna mening, känslomässig integration och äkta närhet genom evidensbaserad terapi.",
    approachTitle: "Aaquist-ansatsen",
    approachIntro:
      "Pelaren i vår logotyp symboliserar den starka, bärkraftiga människa som vi menar att terapi kan hjälpa till att bygga. Men två starka pelare är mer än två: när de möts stabiliserar de varandra och bildar något nytt, högst upp smälter de samman till något större än summan av delarna. Det är vår vision för både individuell växt och parrelationer.",
    pillarsIntro: "Vår integrativa modell förenar tre väsentliga dimensioner:",
    pillars: [
      {
        title: "Narrativ självinsikt",
        text: "Förståelse för din livsberättelse, dina mönster och de omedvetna krafter som formar din upplevelse.",
      },
      {
        title: "Känslomässigt djuparbete",
        text: "Evidensbaserade metoder som ISTDP (intensiv korttidsdynamisk psykoterapi) för att nå, bearbeta och integrera känslor.",
      },
      {
        title: "Framtidsinriktad målsättning",
        text: "Att samstämma dina värden, val och handlingar med din djupare känsla av mening och riktning.",
      },
    ],
    approachClosing:
      "Vi arbetar utifrån psykodynamiska, existentiella och anknytningsteoretiska ramar, alltid förankrade i forskning och klinisk verkan. Vårt arbete är samskapande och djupt respektfullt inför varje människas unika resa.",
    foundersTitle: "Möt Tommy & Bethina",
    foundersIntro:
      "Vi är kollegor i praktiken och partners i livet. Som ett förlovat psykologpar bär vi in både det maskulina och det feminina perspektivet i arbetet — särskilt i parterapi, där ingen av parterna någonsin ska behöva känna sig i underläge.",
    bethinaName: "Bethina Aaquist",
    bethinaRole: "Medgrundare & auktoriserad psykolog",
    bethinaBio:
      "Expert på anknytningsbaserad parterapi, kommunikationsdynamik och relationell läkning. Genom att förena evidensbaserade metoder med respekt och förståelse för könsskillnader i relationen vägleder Bethina par mot djupare intimitet, mer glädje och äkta närhet.",
    tommyName: "Tommy Aaquist",
    tommyRole: "Medgrundare & auktoriserad psykolog",
    tommyBio:
      "Specialiserad på ISTDP, psykodynamisk terapi och existentiell psykologi. Med gedigen utbildning i känslofokuserade interventioner och ett djupt intresse för filosofiska vägar till mening hjälper Tommy klienter att nå känslomässigt djup och klargöra sin riktning i livet.",
    philosophyTitle: "Vår filosofi",
    philosophy: [
      "Vi tror att människan i grunden är en meningssökande varelse. Psykiskt lidande uppstår ofta ur olösta känslor eller destruktiva mönster, men kan också bero på en glipa mellan det liv man lever och de värden man bär. Hos Aaquist hjälper vi dig att återknyta kontakten med det som verkligen betyder något och främjar växt både i dina relationer och som individ.",
    ],
  },
  services: {
    title: "Våra tjänster",
    lead: "Evidensbaserad terapi som förenar djuppsykologi, exponeringsterapi och modern anknytningsforskning.",
    items: [
      {
        title: "Individualterapi",
        text: "Vi erbjuder djupgående individualterapi för vuxna som söker klarhet, känslomässig integration och mening. Med evidensbaserade ansatser som ISTDP, psykodynamisk terapi och existentiell psykologi hjälper vi dig att förstå din inre värld, bearbeta komplexa känslor och samstämma ditt liv med dina djupare värden.",
        bulletsTitle: "Fokusområden",
        bullets: [
          "Ångest, stress och kronisk oro",
          "Depression och känslomässig avstängdhet",
          "Identitetsutforskning och självförståelse",
          "Prestation, perfektionism och riktning i livet",
          "Mening och existentiella frågor",
        ],
      },
      {
        title: "Parterapi",
        subtitle: "Två psykologer, två perspektiv — manligt och kvinnligt",
        text: "Vår parterapi vilar på anknytningsteori och känslofokuserade interventioner — och vi erbjuder den tillsammans, som ett förlovat psykologpar. Med både en manlig och en kvinnlig terapeut i rummet känner sig ingen av parterna i underläge, och både det maskulina och det feminina perspektivet finns representerat. Vi hjälper er att förstå era relationella mönster, kommunicera med djup och klarhet och bygga en trygg, meningsfull kontakt — oavsett om ni navigerar konflikt, avstånd eller en livsövergång.",
        bulletsTitle: "Nyckelelement",
        bullets: [
          "Anknytningsmönster och känslomässiga band",
          "Kommunikation och konflikthantering",
          "Intimitet, tillit och sårbarhet",
          "Att navigera livsövergångar tillsammans",
          "Läkning av relationella sår",
        ],
      },
      {
        title: "Program för personlig utveckling",
        text: "Utöver traditionell terapi erbjuder vi strukturerade program för dig som söker personlig växt, livsoptimering och filosofisk klarhet. Programmen förenar coaching, psykoedukation och reflekterande arbete för att hjälpa dig att klargöra mål, övervinna hinder och leva med avsikt.",
        bulletsTitle: "Detta ingår",
        bullets: [
          "Målsättning och värdeklargörande",
          "Vanebygge och ansvarstagande",
          "Narrativa övningar i självförfattande",
          "Träning i psykologisk motståndskraft",
          "Filosofiska ramar för meningsskapande",
        ],
      },
    ],
  },
  contact: {
    title: "Kontakta oss",
    lead: "Vi är här för att svara på dina frågor och hjälpa dig att påbörja din terapeutiska resa. Fyll i formuläret — skriv inte diagnoser eller hälsouppgifter här.",
    emailLabel: "E-post",
    locationLabel: "Plats",
    hoursLabel: "Öppettider",
    hoursValue: "Alla dagar: 09:00 – 22:00",
    warning:
      "Skicka inte känsliga hälsouppgifter via detta formulär eller vanlig e-post.",
    form: {
      name: "Namn",
      email: "E-post",
      phone: "Telefon",
      prefer: "Hur vill du bli kontaktad?",
      preferPhone: "Telefon",
      preferEmail: "E-post (endast för bokning)",
      preferEither: "Båda",
      timing: "Önskad tid",
      timingPlaceholder: "T.ex. vardagar efter kl. 16",
      topic: "Ämne (valfritt)",
      topicPlaceholder: "T.ex. önskemål om första samtal",
      topicHint: "Håll det kort. Inga hälsouppgifter.",
      submit: "Skicka förfrågan",
      sending: "Skickar…",
      success: "Tack. Vi har tagit emot din förfrågan.",
      error: "Något gick fel. Försök igen, eller mejla oss.",
    },
  },
  privacy: {
    title: "Integritetspolicy",
    updated: "Senast uppdaterad: september 2026",
    sections: [
      {
        heading: "Personuppgiftsansvarig",
        paragraphs: [
          "Aaquist är en psykologpraktik etablerad i Danmark. Vi är personuppgiftsansvariga för uppgifter som samlas in via denna webbplats (GDPR).",
        ],
      },
      {
        heading: "Kontaktformulär",
        paragraphs: [
          "Vi samlar in namn, e-post, telefon, språk, kontaktpreferens, eventuellt tid och ett kort valfritt ämne. Syftet är att besvara din förfrågan. Hälsouppgifter ska inte skickas här.",
        ],
      },
      {
        heading: "Lagring & rättigheter",
        paragraphs: [
          "Förfrågningar skickas som intern notifiering och raderas när ärendet är hanterat, om inte ett patientförhållande upprättas. Du har rättigheter enligt GDPR.",
        ],
      },
    ],
  },
  footer: {
    cta: "Skriv till oss via e-post så hittar vi en tid tillsammans. Alla tider bokas via e-post. Skicka inte hälsouppgifter via vanlig e-post.",
    contactTitle: "Kontakt",
    hoursTitle: "Öppettider",
    hoursLine: "Alla dagar: 09:00 – 22:00",
    linksTitle: "Snabblänkar",
    privacy: "Integritetspolicy",
    rights: "Alla rättigheter förbehållna",
    tagline: "Psykologi, Relationer & Personlig Växt",
  },
};

const dictionaries: Record<Locale, Dictionary> = { da, no, en, sv };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
