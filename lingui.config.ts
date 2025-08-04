import type { LinguiConfig } from '@lingui/conf';

import { supportedLocales } from './i18n';

const config: LinguiConfig = {
  locales: supportedLocales as unknown as string[],
  sourceLocale: 'en',
  catalogs: [
    {
      include: ['react/button/**/*.{ts,tsx}'],
      path: 'react/button/locales/{locale}/messages',
    },
    {
      include: ['react/textarea/**/*.{ts,tsx}'],
      path: 'react/textarea/locales/{locale}/messages',
    },
  ],
  compileNamespace: 'es',
};

export default config;
