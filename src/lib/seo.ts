/**
 * Home-page SEO shared by every presentation of `/` — the gate, the geek home
 * and the refined home. Keeping it in one place means crawlers get identical
 * title / description / structured data regardless of which one is served.
 */

export const HOME_TITLE = 'Vasile Pop — SDET & Web Development Consultant · Cluj-Napoca';

export const HOME_DESCRIPTION =
  'Vasile Pop (vicusbass) — SDET and web development consultant in Cluj-Napoca. 21+ years building test automation, end-to-end testing strategy, Playwright, pytest, k6. Available for consulting.';

export function buildHomeJsonLd(site: string): Array<Record<string, unknown>> {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Vasile Pop',
      alternateName: 'vicusbass',
      url: site,
      jobTitle: 'SDET & Web Development Consultant',
      description:
        'Senior SDET and web development consultant with 21+ years of experience in test automation, end-to-end testing strategy, and shipping web applications.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cluj-Napoca',
        addressCountry: 'RO',
      },
      knowsAbout: [
        'Test Automation',
        'SDET',
        'Playwright',
        'pytest',
        'k6',
        'Cypress',
        'TypeScript',
        'Python',
        'React',
        'Next.js',
        'Astro',
        'CI/CD',
        'GitHub Actions',
        'QA Strategy',
        'End-to-end Testing',
      ],
      sameAs: ['https://github.com/vicusbass', 'https://www.linkedin.com/in/vasilepop/'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'vicusbass',
      url: site,
      author: { '@type': 'Person', name: 'Vasile Pop' },
    },
  ];
}
