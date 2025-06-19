// File: lib/i18n.ts

export const locales = ['en', 'zh', 'ja', 'ar', 'es', 'ru'];

export const localeNames: Record<string, string> = {
  en: '🇺🇸 English',
  zh: '🇮🇩 Indonesia',
  ja: '🇯🇵 日本語',
  ar: '🇸🇦 العربية',
  es: '🇪🇸 Español',
  ru: '🇷🇺 Русский',
};

// --- UBAH BARIS INI ---
export const defaultLocale = 'id'; // Sebelumnya 'en'

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  id: () => import('@/locales/zh.json').then((module) => module.default),
  ja: () => import('@/locales/ja.json').then((module) => module.default),
  ar: () => import('@/locales/ar.json').then((module) => module.default),
  es: () => import('@/locales/es.json').then((module) => module.default),
  ru: () => import('@/locales/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!Object.keys(dictionaries).includes(locale)) {
    // Jika bahasa tidak ditemukan, akan jatuh ke 'id' sekarang
    locale = defaultLocale;
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};
