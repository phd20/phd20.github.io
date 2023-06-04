// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "PhD20";
export const SITE_DESCRIPTION =
  "I create content to help you have more fun playing TTRPGs.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Kirk Wiebe";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
