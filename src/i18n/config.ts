export type Locale = (typeof locales)[number];

export const locales = ['it', 'es', 'ro', 'pt', 'ka', 'fr', 'en', 'hn'] as const;
export const defaultLocale: Locale = 'fr';
