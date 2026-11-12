/**
 * Home-page SEO shared by every presentation of `/` — the gate, the geek home
 * and the refined home. Keeping it in one place means crawlers get identical
 * title / description / structured data regardless of which one is served.
 */

export const HOME_TITLE = 'Vasile Pop — Web, Mobile & AI Developer, SDET · Cluj-Napoca';

export const HOME_DESCRIPTION =
  'Freelance developer and SDET in Cluj-Napoca. Websites, web and mobile apps, AI agents, integrations and custom CRM/ERP, tested properly. 21+ years. Remote.';

export function buildHomeJsonLd(site: string): Array<Record<string, unknown>> {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${site}/#person`,
      name: 'Vasile Pop',
      alternateName: 'vicusbass',
      url: site,
      jobTitle: 'Freelance Software Developer & SDET',
      description:
        'Freelance developer and senior SDET with 21+ years of experience. Builds websites, web and mobile apps, AI agents, integrations and custom CRM/ERP systems, and sets up test automation.',
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
        'Web Design',
        'Web Development',
        'Mobile App Development',
        'React Native',
        'AI Agents',
        'LLM Integration',
        'API Integration',
        'Node.js',
        'FastAPI',
        'Frappe',
        'ERPNext',
        'Custom CRM',
      ],
      sameAs: ['https://github.com/vicusbass', 'https://www.linkedin.com/in/vasilepop/'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'vicusbass',
      '@id': `${site}/#website`,
      url: site,
      inLanguage: 'en',
      author: { '@id': `${site}/#person` },
    },
  ];
}
