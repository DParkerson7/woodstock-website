/** Prefix a site path with Astro's base ( `/` locally, `/repo/` on project Pages ). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path === '/' || path === '') return base;
  return base + path.replace(/^\//, '');
}

/** Public file URL. `path` is relative to `public/`, such as `images/logo-sunflower.png`. */
export function asset(path: string): string {
  return href(path);
}

export function isCurrent(path: string, pathname: string): boolean {
  const normalize = (value: string) => {
    if (value.length > 1 && value.endsWith('/')) return value.slice(0, -1);
    return value || '/';
  };
  return normalize(href(path)) === normalize(pathname);
}
