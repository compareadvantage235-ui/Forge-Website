// Responsive images from Unsplash.
// Unsplash (imgix) resizes and crops on the fly via URL parameters, so we can
// offer the browser several widths and let it download the smallest one that fits.

const WIDTHS = [400, 640, 960, 1280, 1600];

/**
 * Set width, quality and (optionally) aspect ratio on an Unsplash URL.
 * `ar` like '4:3' makes Unsplash crop server-side to the shape the page displays,
 * so we never download pixels that CSS would crop away anyway.
 */
export function sized(url: string, w: number, q?: number, ar?: string): string {
  const u = new URL(url);
  u.searchParams.set('w', String(w));
  if (q) u.searchParams.set('q', String(q));
  if (ar) { u.searchParams.set('ar', ar); u.searchParams.set('fit', 'crop'); }
  u.searchParams.set('auto', 'format'); // WebP/AVIF for browsers that support it
  return u.toString();
}

/** Build a srcset string, capped at the widest size the image is ever shown. */
export function srcset(url: string, maxWidth = 1600, q?: number, ar?: string): string {
  return WIDTHS.filter((w) => w <= maxWidth)
    .map((w) => `${sized(url, w, q, ar)} ${w}w`)
    .join(', ');
}
