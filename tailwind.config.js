import { flexiui } from '@flexi-ui/theme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@flexi-ui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},

  plugins: [
    flexiui({
      themes: {
        light: {
          colors: {
            background: { DEFAULT: '#F8F8F8' },
            foreground: { DEFAULT: '#303030' },
            divider: { DEFAULT: '#ABA7A7' },
            primary: { DEFAULT: '#2196f3' },
            secondary: { DEFAULT: '#666666' },
            content1: { DEFAULT: '#313C4F' },
            content2: { DEFAULT: '#FD9900' },
            content3: { DEFAULT: '#000000' },
            content4: { DEFAULT: '#292D32' },
          },
        },
      },
    }),
  ],
}

module.exports = config
