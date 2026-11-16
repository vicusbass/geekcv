// Home page copy, shared by both rooms. The geek and refined home components
// render from this module so the facts stay identical across themes; only the
// presentation differs. Edit copy here, never in the components.

import { SERVICES_COPY } from './services';

export const CONTACT = {
  email: 'vasile.pop@gmail.com',
  linkedin: { href: 'https://www.linkedin.com/in/vasilepop/', label: '/in/vasilepop' },
  github: { href: 'https://github.com/vicusbass', label: '@vicusbass' },
} as const;

export const HOME = {
  name: 'Vasile Pop',
  positioning: 'Software built by a tester',
  location: 'Cluj-Napoca, RO · remote',
  // Two sentences, each with one emphasised phrase (the geek room highlights it).
  headline: [
    { pre: 'Tests that ', em: 'fail loudly', post: '.' },
    { pre: 'Code that ', em: 'ships quietly', post: '.' },
  ],
  lead: "I'm Vasile Pop. I've spent 21+ years breaking software for a living, and these days I also build it: websites, web and mobile apps, AI agents and the backends behind them. I design end-to-end test strategies, automate them in Python and TypeScript, and ship web apps in Astro and Next.js.",
  availability:
    'Available for consulting, framework setup, technical interviews and tricky QA audits.',
  offClock: 'Off the clock I play bass.',
  stats: [
    { n: '21+', label: 'years shipping' },
    { n: '12', label: 'teams & companies' },
    { n: '∞', label: 'flaky tests retired' },
  ],
  clients: ['Distribusion', 'ComplyAdvantage', 'Hopin', 'LeadIQ', 'Intel', 'Zartis'],
  capabilities: [
    {
      title: 'Test strategy & automation',
      body: 'End-to-end strategy, framework setup and automation in Python & TypeScript: Playwright, pytest, Cypress, the works.',
    },
    {
      title: 'Performance & load',
      body: 'k6.io benchmarking and soak tests that tell you where things break before your users find out.',
    },
    {
      title: 'Websites, apps & AI agents',
      body: 'Production sites, web and mobile apps and AI agents, built in Astro, Next.js, Python and Node, and tested like I mean it.',
    },
  ],
  cta: {
    primary: 'Get in touch',
    secondary: 'See the work',
    workTitle: 'Recent builds',
    allWork: 'All projects',
    capsTitle: "Three things I'm reliably good at",
    allServices: 'All services',
    closeTitle: 'Have something to build or fix?',
    closeText: SERVICES_COPY.en.ui.ctaText,
    emailLabel: 'or email',
    roLink: 'Servicii în română',
    gateNote: 'You can switch between the two anytime, from the top of any page.',
    externalNote: '(opens in a new tab)',
  },
  process: SERVICES_COPY.en.process,
} as const;
