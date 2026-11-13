// @ts-check
import { defineConfig } from 'astro/config';

// Project Pages: site is the origin (https://dparkerson7.github.io) and base is
// /woodstock-website/. The workflow sets both. Local preview leaves them unset,
// so the site stays at /.
const rawBase = process.env.BASE_PATH ?? '/';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;

export default defineConfig({
  output: 'static',
  base,
  trailingSlash: 'ignore',
  ...(process.env.SITE_URL ? { site: process.env.SITE_URL } : {}),
});
