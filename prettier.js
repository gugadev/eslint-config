/* eslint-disable no-undef */
const importOrderSettings = {
  // este plugin sirve para activar el ordenamiento de imports
  // en pnpm se necesita hacer un require del plugin
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrder: [
    '^./*.*.scss',
    'react',
    '^(?!react)\\w+$',
    '<THIRD_PARTY_MODULES>',
    '^@mep/infra',
    '^@mep/libs',
    '^~/domain',
    '^~/presentation',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
};

module.exports = {
  singleQuote: false,
  trailingComma: 'none',
  printWidth: 80,
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  endOfLine: 'auto',
  // esto es importante, de otro modo en archivos jsx dará "parse error"
  overrides: [{ files: ['*.tsx'], options: { parser: 'typescript' } }],
  ...importOrderSettings,
};
