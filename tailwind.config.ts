import { addDynamicIconSelectors } from '@iconify/tailwind';
import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.tsx',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [addDynamicIconSelectors(), nextui()],
  theme: {
    fontFamily: {
      logo: ['Anta', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
  },
} satisfies Config;
