import { create } from 'xmlbuilder2';

export function generateSitemap(): string {
  const root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  const urls = [
    { loc: 'https://isla-app.vercel.app/', lastmod: '2024-04-23', changefreq: 'daily', priority: '1.0' },
    { loc: 'https://isla-app.vercel.app/about', lastmod: '2024-04-23', changefreq: 'daily', priority: '0.8' },
  ];

  urls.forEach((url) => {
    const urlElement = root.ele('url');
    urlElement.ele('loc').txt(url.loc);
    urlElement.ele('lastmod').txt(url.lastmod);
    urlElement.ele('changefreq').txt(url.changefreq);
    urlElement.ele('priority').txt(url.priority);
  });

  return root.end({ prettyPrint: true });
}