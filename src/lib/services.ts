/**
 * Services offered, in English (`/services`) and Romanian (`/ro/servicii`).
 * Both presentations (geek and refined) read from here, so crawlers get the
 * same copy and structured data whichever theme is served. Edit the copy here,
 * not in the components.
 */

export type Lang = 'en' | 'ro';

export interface Service {
  /** URL fragment, same in both languages: /services#<id>, /ro/servicii#<id> */
  id: string;
  /** Short label for the index and jump links. */
  name: string;
  /** Section heading (h2). Carries the search phrase people actually type. */
  heading: string;
  summary: string;
  includes: string[];
  stack: string[];
  /** schema.org `serviceType`. */
  serviceType: string;
  /** Link text for the per-service contact link (refined theme). */
  cta: string;
  /** Optional partner credited on the card. */
  partner?: { name: string; url: string };
}

type ServiceText = Omit<Service, 'id' | 'stack' | 'partner'>;

export const SYMBOLD = { name: 'Symbold', url: 'https://www.symbold.ro' };

/** Language-independent facts about each service, in display order. */
const BASE: Array<Pick<Service, 'id' | 'stack' | 'partner'>> = [
  { id: 'web-design', stack: ['Figma', 'Branding', 'UI/UX'], partner: SYMBOLD },
  {
    id: 'websites',
    stack: ['Astro', 'Next.js', 'React', 'TypeScript', 'Sanity', 'Tailwind', 'Vercel'],
  },
  { id: 'mobile-apps', stack: ['React Native', 'Expo', 'TypeScript'] },
  { id: 'ai-agents', stack: ['Claude', 'OpenAI', 'MCP', 'Python', 'TypeScript', 'pgvector'] },
  { id: 'integrations', stack: ['REST', 'GraphQL', 'Webhooks', 'Stripe', 'Python', 'Node.js'] },
  { id: 'testing', stack: ['Playwright', 'pytest', 'k6', 'Cypress', 'GitHub Actions'] },
  {
    id: 'backend',
    stack: ['Python', 'FastAPI', 'Django', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
  },
  { id: 'crm-erp', stack: ['Frappe', 'ERPNext', 'Python', 'MariaDB', 'PostgreSQL', 'Vue'] },
];

const TEXT: Record<Lang, Record<string, ServiceText>> = {
  en: {
    'web-design': {
      name: 'Web design & branding',
      heading: 'Web design & branding, with Symbold',
      summary:
        'Branding and UI design by Symbold, a branding studio in Cluj. I built their site; now we take projects together. They make it look right, I make it work.',
      includes: [
        'Logo, brand identity and visual direction',
        'Page layouts and UI design in Figma',
        'Designs handed straight to the person building them (me)',
      ],
      serviceType: 'Web design and branding',
      cta: 'Ask about web design & branding',
    },
    websites: {
      name: 'Websites & web apps',
      heading: 'Websites & web apps',
      summary:
        'Company sites that load fast and show up in search, and web apps with logins, dashboards and payments. Content lives in a CMS you can edit without calling me.',
      includes: [
        'Company sites, landing pages, portfolios, clinics',
        'Web apps: accounts, dashboards, bookings, payments',
        'Headless CMS so you edit your own content',
        'SEO, analytics and hosting set up from day one',
      ],
      serviceType: 'Website and web application development',
      cta: 'Ask about a website or web app',
    },
    'mobile-apps': {
      name: 'Mobile apps',
      heading: 'Mobile apps for iOS & Android',
      summary:
        'One codebase for iPhone and Android, sharing logic with your web app where it makes sense. I handle the App Store and Google Play paperwork too.',
      includes: [
        'Cross-platform apps for iOS and Android',
        'Push notifications, offline mode, in-app payments',
        'App Store and Google Play publishing',
        'Backend and admin panel if you need one',
      ],
      serviceType: 'Mobile app development',
      cta: 'Ask about a mobile app',
    },
    'ai-agents': {
      name: 'AI agents',
      heading: 'AI agents & automation',
      summary:
        "Assistants that do actual work: answer customers from your docs, read invoices, triage tickets, draft replies. Connected to your systems, and tested so they don't quietly make things up.",
      includes: [
        'Support and sales assistants grounded in your content',
        'Document extraction: invoices, contracts, forms',
        'Agents that call your APIs and internal tools (MCP)',
        'Evals and guardrails before anything goes live',
      ],
      serviceType: 'AI agent development',
      cta: 'Ask about AI agents',
    },
    integrations: {
      name: 'Integrations',
      heading: 'API integrations',
      summary:
        'Get your tools talking to each other: shop to invoicing, forms to CRM, payments to accounting. Less copy-paste between browser tabs.',
      includes: [
        'REST and GraphQL API integrations',
        'Webhooks, sync jobs and data imports',
        'Payments, invoicing and accounting systems',
        'Alerts when a sync fails, so you hear before your customers do',
      ],
      serviceType: 'Systems integration',
      cta: 'Ask about integrations',
    },
    testing: {
      name: 'Professional testing',
      heading: 'Software testing & QA automation',
      summary:
        'My main trade for 21 years. I test your product the way users will break it, then automate those checks so it stays fixed.',
      includes: [
        'Test strategy and an honest audit of your current QA',
        'End-to-end automation with Playwright or pytest',
        'Load and performance testing with k6',
        'Tests running in CI on every pull request',
      ],
      serviceType: 'Software testing and QA automation',
      cta: 'Ask about testing',
    },
    backend: {
      name: 'Python & Node services',
      heading: 'Python & Node.js backend services',
      summary:
        'APIs, background workers, scrapers, scheduled jobs. The unglamorous parts that need to keep running at 3am.',
      includes: [
        'REST APIs and backends for web and mobile apps',
        'Background jobs, queues and cron tasks',
        'Scrapers and data pipelines',
        'Docker, deployment and logging',
      ],
      serviceType: 'Backend development',
      cta: 'Ask about a backend service',
    },
    'crm-erp': {
      name: 'CRM & ERP apps',
      heading: 'Custom CRM & ERP apps',
      summary:
        "Business software shaped around how you work. Built on Frappe / ERPNext when an open-source base saves months, or from scratch when it doesn't.",
      includes: [
        'Custom CRM: leads, clients, pipelines, reports',
        'ERP modules: stock, orders, invoicing, HR',
        'Frappe / ERPNext apps, customisation and hosting',
        'Migration from spreadsheets or an old system',
      ],
      serviceType: 'Custom CRM and ERP development',
      cta: 'Ask about a CRM or ERP',
    },
  },
  ro: {
    'web-design': {
      name: 'Web design și branding',
      heading: 'Web design și branding, împreună cu Symbold',
      summary:
        'Branding și design de interfață făcute de Symbold, un studio de branding din Cluj. Le-am făcut site-ul, iar acum lucrăm împreună la proiecte. Ei au grijă să arate bine, eu să funcționeze.',
      includes: [
        'Logo, identitate de brand și direcție vizuală',
        'Layout-uri de pagini și design UI în Figma',
        'Designul ajunge direct la cel care îl construiește (eu)',
      ],
      serviceType: 'Web design și branding',
      cta: 'Întreabă despre web design și branding',
    },
    websites: {
      name: 'Site-uri și aplicații web',
      heading: 'Site-uri de prezentare și aplicații web',
      summary:
        'Site-uri de firmă care se încarcă repede și apar în Google, și aplicații web cu conturi, dashboard-uri și plăți. Conținutul îl editezi singur dintr-un CMS, fără să mă suni.',
      includes: [
        'Site-uri de prezentare, landing page-uri, portofolii, clinici',
        'Aplicații web: conturi, dashboard-uri, programări, plăți',
        'CMS headless, ca să-ți editezi singur conținutul',
        'SEO, analytics și hosting configurate din prima zi',
      ],
      serviceType: 'Dezvoltare site-uri și aplicații web',
      cta: 'Întreabă despre un site sau o aplicație web',
    },
    'mobile-apps': {
      name: 'Aplicații mobile',
      heading: 'Aplicații mobile pentru iOS și Android',
      summary:
        'O singură bază de cod pentru iPhone și Android, care împarte logica cu aplicația web acolo unde are sens. Mă ocup și de publicarea în App Store și Google Play.',
      includes: [
        'Aplicații cross-platform pentru iOS și Android',
        'Notificări push, mod offline, plăți în aplicație',
        'Publicare în App Store și Google Play',
        'Backend și panou de administrare, dacă ai nevoie',
      ],
      serviceType: 'Dezvoltare aplicații mobile',
      cta: 'Întreabă despre o aplicație mobilă',
    },
    'ai-agents': {
      name: 'Agenți AI',
      heading: 'Agenți AI și automatizări',
      summary:
        'Asistenți care chiar lucrează: răspund clienților din documentația ta, citesc facturi, sortează tichete, scriu ciorne de răspuns. Conectați la sistemele tale și testați, ca să nu inventeze nimic pe ascuns.',
      includes: [
        'Asistenți de suport și vânzări bazați pe conținutul tău',
        'Extragere de date din documente: facturi, contracte, formulare',
        'Agenți care folosesc API-urile și uneltele tale interne (MCP)',
        'Evaluări și limite clare înainte de lansare',
      ],
      serviceType: 'Dezvoltare agenți AI',
      cta: 'Întreabă despre agenți AI',
    },
    integrations: {
      name: 'Integrări',
      heading: 'Integrări API',
      summary:
        'Instrumentele tale vorbesc între ele: magazinul cu facturarea, formularele cu CRM-ul, plățile cu contabilitatea. Mai puțin copy-paste între taburi.',
      includes: [
        'Integrări API REST și GraphQL',
        'Webhook-uri, sincronizări și importuri de date',
        'Plăți, facturare și sisteme de contabilitate',
        'Alerte când o sincronizare pică, ca să afli înaintea clienților',
      ],
      serviceType: 'Integrare sisteme',
      cta: 'Întreabă despre integrări',
    },
    testing: {
      name: 'Testare profesională',
      heading: 'Testare software și automatizare QA',
      summary:
        'Meseria mea de bază de 21 de ani. Îți testez produsul așa cum îl vor strica utilizatorii, apoi automatizez verificările ca să rămână reparat.',
      includes: [
        'Strategie de testare și un audit sincer al QA-ului actual',
        'Automatizare end-to-end cu Playwright sau pytest',
        'Teste de încărcare și performanță cu k6',
        'Teste care rulează în CI la fiecare pull request',
      ],
      serviceType: 'Testare software și automatizare QA',
      cta: 'Întreabă despre testare',
    },
    backend: {
      name: 'Servicii Python și Node',
      heading: 'Servicii backend în Python și Node.js',
      summary:
        'API-uri, procese în fundal, scrapere, joburi programate. Părțile fără strălucire care trebuie să meargă și la 3 noaptea.',
      includes: [
        'API-uri REST și backend pentru aplicații web și mobile',
        'Joburi în fundal, cozi și task-uri cron',
        'Scrapere și pipeline-uri de date',
        'Docker, deployment și logging',
      ],
      serviceType: 'Dezvoltare backend',
      cta: 'Întreabă despre un serviciu backend',
    },
    'crm-erp': {
      name: 'Aplicații CRM și ERP',
      heading: 'Aplicații CRM și ERP personalizate',
      summary:
        'Software de business croit pe felul în care lucrezi. Construit pe Frappe / ERPNext când o bază open-source îți scutește luni de muncă, sau de la zero când nu.',
      includes: [
        'CRM personalizat: lead-uri, clienți, pipeline-uri, rapoarte',
        'Module ERP: stocuri, comenzi, facturare, HR',
        'Aplicații Frappe / ERPNext, personalizare și hosting',
        'Migrare din Excel sau dintr-un sistem vechi',
      ],
      serviceType: 'Dezvoltare CRM și ERP personalizat',
      cta: 'Întreabă despre un CRM sau ERP',
    },
  },
};

export interface ServicesCopy {
  lang: Lang;
  /** Path of this language's page. */
  path: string;
  title: string;
  description: string;
  services: Service[];
  process: Array<{ step: string; title: string; body: string }>;
  faq: Array<{ q: string; a: string }>;
  /** Contact-form subject prefix, e.g. "Project: Mobile apps". */
  subjectPrefix: string;
  ui: {
    kicker: string;
    h1: string;
    /** Intro split around the highlighted phrase (geek theme colours it). */
    intro: [string, string, string];
    switchLabel: string;
    partnerWith: string;
    entries: string;
    processKicker: string;
    processH2: string;
    faqKicker: string;
    faqH2: string;
    questions: string;
    ctaH2: string;
    ctaText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    breadcrumbHome: string;
    breadcrumbServices: string;
  };
}

const build = (lang: Lang): Service[] => BASE.map((b) => ({ ...b, ...TEXT[lang][b.id] }));

export const SERVICES_COPY: Record<Lang, ServicesCopy> = {
  en: {
    lang: 'en',
    path: '/services',
    title: 'Web, Mobile & AI Development Services · Vasile Pop, Cluj-Napoca',
    description:
      'Hire a freelance developer in Cluj-Napoca for web design and branding, websites, web and mobile apps, AI agents, API integrations, Python/Node backends, custom CRM/ERP (Frappe) and QA testing. Remote, worldwide.',
    services: build('en'),
    process: [
      {
        step: '01',
        title: 'Talk',
        body: 'A short call. You explain the problem, I ask the awkward questions.',
      },
      {
        step: '02',
        title: 'Scope',
        body: 'A written plan: what gets built, in what order, and what it costs.',
      },
      {
        step: '03',
        title: 'Build',
        body: 'Small releases with a working version you can click through every week or two.',
      },
      {
        step: '04',
        title: 'Launch',
        body: 'Go live, hand over docs and access, and I stay around for fixes.',
      },
    ],
    faq: [
      {
        q: 'Do you work with clients outside Romania?',
        a: "Yes. I'm based in Cluj-Napoca and work remotely with teams across Europe, the UK and the US, in English or Romanian.",
      },
      {
        q: 'Who designs the website?',
        a: "Symbold, a branding studio in Cluj I partner with. If you already have a designer or a Figma file, I'll build from that.",
      },
      {
        q: 'Can you take over an existing project?',
        a: 'Yes. I start with a short audit of the code and tests, then tell you plainly what to keep and what to rewrite.',
      },
      {
        q: 'Do you also test software other people built?',
        a: "Yes, that's my main trade: QA audits, test automation frameworks and load testing for teams that already ship.",
      },
    ],
    subjectPrefix: 'Project',
    ui: {
      kicker: 'Services',
      h1: 'Software built by a tester',
      intro: [
        "I've spent 21 years breaking software for a living. These days I also build it: ",
        'websites, web and mobile apps, AI agents',
        ' and the backends behind them. Freelance, from Cluj-Napoca, for clients anywhere.',
      ],
      switchLabel: 'Română',
      partnerWith: 'with',
      entries: 'entries',
      processKicker: 'How it works',
      processH2: 'From first call to launch',
      faqKicker: 'FAQ',
      faqH2: 'Questions people ask',
      questions: 'questions',
      ctaH2: 'Have something in mind?',
      ctaText: 'Tell me what you need built or fixed. I reply within a working day.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See past work',
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Services',
    },
  },
  ro: {
    lang: 'ro',
    path: '/ro/servicii',
    title: 'Dezvoltare site-uri, aplicații mobile și AI · Vasile Pop, Cluj-Napoca',
    description:
      'Programator freelance în Cluj-Napoca: web design și branding, site-uri de prezentare, aplicații web și mobile, agenți AI, integrări, CRM/ERP personalizat și testare software.',
    services: build('ro'),
    process: [
      {
        step: '01',
        title: 'Discuție',
        body: 'O discuție scurtă. Tu îmi explici problema, eu pun întrebările incomode.',
      },
      {
        step: '02',
        title: 'Plan',
        body: 'Un plan scris: ce construim, în ce ordine și cât costă.',
      },
      {
        step: '03',
        title: 'Dezvoltare',
        body: 'Livrări mici, cu o versiune funcțională pe care o poți încerca la fiecare una-două săptămâni.',
      },
      {
        step: '04',
        title: 'Lansare',
        body: 'Punem site-ul live, îți predau documentația și accesele, și rămân aproape pentru reparații.',
      },
    ],
    faq: [
      {
        q: 'Lucrezi doar cu firme din Cluj?',
        a: 'Nu. Sunt în Cluj-Napoca, dar lucrez remote cu clienți din toată țara și din străinătate, în română sau engleză.',
      },
      {
        q: 'Cine face designul site-ului?',
        a: 'Symbold, un studio de branding din Cluj cu care colaborez. Dacă ai deja un designer sau un fișier Figma, construiesc pornind de acolo.',
      },
      {
        q: 'Poți prelua un proiect existent?',
        a: 'Da. Încep cu un audit scurt al codului și al testelor, apoi îți spun direct ce merită păstrat și ce trebuie rescris.',
      },
      {
        q: 'Testezi și software construit de alții?',
        a: 'Da, asta e meseria mea de bază: audituri QA, framework-uri de automatizare și teste de încărcare pentru echipe care livrează deja.',
      },
    ],
    subjectPrefix: 'Proiect',
    ui: {
      kicker: 'Servicii',
      h1: 'Software construit de un tester',
      intro: [
        'De 21 de ani stric software ca să-mi câștig pâinea. Acum îl și construiesc: ',
        'site-uri, aplicații web și mobile, agenți AI',
        ' și tot ce e în spatele lor. Freelance, din Cluj-Napoca, pentru clienți de oriunde.',
      ],
      switchLabel: 'English',
      partnerWith: 'cu',
      entries: 'servicii',
      processKicker: 'Cum lucrăm',
      processH2: 'De la prima discuție la lansare',
      faqKicker: 'Întrebări frecvente',
      faqH2: 'Ce mă întreabă oamenii',
      questions: 'întrebări',
      ctaH2: 'Ai un proiect în minte?',
      ctaText: 'Spune-mi ce vrei să construim sau să reparăm. Răspund în cel mult o zi lucrătoare.',
      ctaPrimary: 'Scrie-mi',
      ctaSecondary: 'Vezi proiectele',
      breadcrumbHome: 'Acasă',
      breadcrumbServices: 'Servicii',
    },
  },
};

/** hreflang alternates shared by both language versions. */
export function servicesAlternates(site: string): Array<{ hreflang: string; href: string }> {
  return [
    { hreflang: 'en', href: `${site}${SERVICES_COPY.en.path}` },
    { hreflang: 'ro', href: `${site}${SERVICES_COPY.ro.path}` },
    { hreflang: 'x-default', href: `${site}${SERVICES_COPY.en.path}` },
  ];
}

/** Contact link with the subject pre-filled for a given service. */
export function contactHref(copy: ServicesCopy, service?: Service): string {
  if (!service) return '/contact';
  return `/contact?subject=${encodeURIComponent(`${copy.subjectPrefix}: ${service.name}`)}`;
}

export function buildServicesJsonLd(
  site: string,
  copy: ServicesCopy,
): Array<Record<string, unknown>> {
  const pageUrl = `${site}${copy.path}`;
  const lang = copy.lang;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${site}/#person`,
      name: 'Vasile Pop',
      alternateName: 'vicusbass',
      url: site,
      jobTitle: 'Freelance Software Developer & SDET',
      sameAs: ['https://github.com/vicusbass', 'https://www.linkedin.com/in/vasilepop/'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${site}/services#business`,
      name: 'Vasile Pop · Software development & testing',
      url: pageUrl,
      inLanguage: lang,
      image: `${site}/og-default.png`,
      description: copy.description,
      email: 'vasile.pop@gmail.com',
      founder: { '@id': `${site}/#person` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cluj-Napoca',
        addressRegion: 'Cluj',
        addressCountry: 'RO',
      },
      areaServed: [
        { '@type': 'Country', name: 'Romania' },
        { '@type': 'Place', name: 'Europe' },
        { '@type': 'Place', name: 'Worldwide' },
      ],
      availableLanguage: ['English', 'Romanian'],
      knowsAbout: copy.services.flatMap((s) => s.stack).filter((v, i, a) => a.indexOf(v) === i),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: lang === 'ro' ? 'Servicii de dezvoltare software' : 'Software development services',
        itemListElement: copy.services.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${pageUrl}#${s.id}`,
            name: s.heading,
            serviceType: s.serviceType,
            description: s.summary,
            url: `${pageUrl}#${s.id}`,
            provider: { '@id': `${site}/#person` },
            ...(s.partner
              ? { brand: { '@type': 'Organization', name: s.partner.name, url: s.partner.url } }
              : {}),
          },
        })),
      },
      sameAs: ['https://github.com/vicusbass', 'https://www.linkedin.com/in/vasilepop/'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: copy.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: copy.ui.breadcrumbHome, item: `${site}/` },
        { '@type': 'ListItem', position: 2, name: copy.ui.breadcrumbServices, item: pageUrl },
      ],
    },
  ];
}
