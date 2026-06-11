import type { AstroCookies } from 'astro';

export type Theme = 'geek' | 'refined';

/** Cookie that stores the visitor's chosen presentation. */
export const THEME_COOKIE = 'vp-theme';

/**
 * Read the theme choice from the request cookies.
 * Returns `null` when the visitor hasn't chosen yet (→ show the gate on `/`).
 */
export function resolveTheme(cookies: AstroCookies): Theme | null {
  const v = cookies.get(THEME_COOKIE)?.value;
  return v === 'geek' || v === 'refined' ? v : null;
}
