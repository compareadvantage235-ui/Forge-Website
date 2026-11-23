// Generates /robots.txt at build time, using `site` from astro.config.mjs.
// Note: robots.txt must NOT block crawling while pages use noindex, otherwise
// Google can't read the noindex tag. Indexing is controlled by SITE.allowIndexing.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', site).href}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
