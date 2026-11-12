// @ts-check
import { defineConfig } from 'astro/config';

// Project sites on GitHub Pages live under /<repo>/. User/org sites and local
// preview stay at /. The workflow sets BASE_PATH; local `npm run dev` does not.
const rawBase = process.env.BASE_PATH ?? '/';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;

export default defineConfig({
  output: 'static',
  base,
  trailingSlash: 'ignore',
  ...(process.env.SITE_URL ? { site: process.env.SITE_URL } : {}),
});
