// Single source of truth for business contact details.
// Change a value here and it updates on every page.
// Values in [square brackets] are placeholders waiting for real details.

export const SITE = {
  name: 'Forge Wellness & Recovery',

  // SEARCH ENGINE SWITCH
  // false = every page tells Google "do not index, do not follow" (demo / not live yet)
  // true  = every page can appear in Google search results
  allowIndexing: false,

  phone: '[01942 386400]',          // what visitors see
  phoneHref: 'tel:+441942386400',   // what the phone dials (no brackets or spaces)

  email: '[hello@forgewellness.co.uk]',
  emailHref: 'mailto:hello@forgewellness.co.uk',

  address: '[full address], Wigan',                              // short form (name shown separately)
  fullAddress: 'Forge Wellness & Recovery, [full address], Wigan',

  hours: [
    ['Mon – Fri', '[opening hours]'],
    ['Saturday', '[opening hours]'],
    ['Sunday', '[opening hours]'],
  ],

  // ---- Social profiles -------------------------------------------------------
  // Paste the full URL when a profile exists. Empty = icon is hidden in the footer
  // and left out of the schema, so the site never links to nowhere.
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
  },

  // ---- Schema (structured data for Google) --------------------------------
  // The website URL comes from `site` in astro.config.mjs, so it is not repeated here.
  schema: {
    logo: '[logo URL]',            // full https:// URL of a square PNG logo, at least 112×112px
    telephone: '[phone]',          // international format, e.g. +441942386400
    streetAddress: '[address]',
    addressLocality: 'Wigan',
    postalCode: '[postcode]',
    addressCountry: 'GB',
    openingHours: '[opening hours]', // e.g. ['Mo-Fr 06:00-22:00', 'Sa 07:00-20:00', 'Su 08:00-18:00']
  },
};

// Schema "sameAs" = the social profile URLs that have been filled in above.
export const SAME_AS: string[] = Object.values(SITE.social).filter(Boolean);
