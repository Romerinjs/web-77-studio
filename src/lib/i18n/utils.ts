// src/lib/i18n/utils.ts
import { uiTranslations, type SupportedLocale, DEFAULT_LOCALE, LOCALES } from './ui';

/**
 * Detecta el idioma actual a partir de la URL
 */
export function getLangFromUrl(url: URL | string): SupportedLocale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && LOCALES.includes(segments[0] as SupportedLocale)) {
    return segments[0] as SupportedLocale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Genera la ruta equivalente en el idioma destino preservando la página actual
 * Ej:
 *  - currentUrl: '/marketing', targetLang: 'en' => '/en/marketing'
 *  - currentUrl: '/en/marketing', targetLang: 'es' => '/marketing'
 *  - currentUrl: '/', targetLang: 'en' => '/en'
 *  - currentUrl: '/en', targetLang: 'es' => '/'
 */
export function getAlternateLocaleUrl(url: URL | string, targetLang: SupportedLocale): string {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const search = typeof url === 'string' ? '' : url.search;
  const hash = typeof url === 'string' ? '' : url.hash;

  const currentLang = getLangFromUrl(url);

  if (currentLang === targetLang) {
    return `${pathname}${search}${hash}`;
  }

  let basePath = pathname;
  if (pathname.startsWith('/en')) {
    basePath = pathname.replace(/^\/en/, '') || '/';
  }

  if (targetLang === 'en') {
    const localized = basePath === '/' ? '/en' : `/en${basePath}`;
    return `${localized}${search}${hash}`;
  } else {
    // targetLang === 'es' (default without prefix)
    return `${basePath}${search}${hash}`;
  }
}

/**
 * Genera un enlace prefijado con el idioma activo
 */
export function getLocalizedPath(path: string, lang: SupportedLocale = DEFAULT_LOCALE): string {
  if (lang === 'en') {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return cleanPath === '/' ? '/en' : `/en${cleanPath}`;
  }
  return path.startsWith('/') ? path : `/${path}`;
}

/**
 * Hook tipado para obtener traducciones de UI
 */
export function useTranslations(lang: SupportedLocale = DEFAULT_LOCALE) {
  return uiTranslations[lang] || uiTranslations[DEFAULT_LOCALE];
}
