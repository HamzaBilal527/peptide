/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
  tabWidth: 2,
  semi: false,
  printWidth: 130,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxSingleQuote: true,
  proseWrap: 'preserve',
  arrowParens: 'always',
  quoteProps: 'as-needed',
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: 'strict',
  embeddedLanguageFormatting: 'auto',
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'tw', 'cn'],
  tailwindAttributes: ['className', 'classNames', '*'],
  importOrderSortSpecifiers: true,
  importOrder: [
    '^(next/(.*)$)|^(next$)',
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '^types$',
    '^@/app/(.*)$',
    '^@/config/(.*)$',
    '^@/guards/(.*)$',
    '^@/contexts/(.*)$',
    '^@/hooks',
    '^@/hooks/(.*)$',
    '^@/layouts/(.*)$',
    '^@/components/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/pages/(.*)$',
    '^@/lib/(.*)$',
    '^@/types/(.*)$',
    '^@/assets/images/(.*)$',
    '^@/assets/styles/(.*)$',
    '^[./]',
  ],
}

export default config