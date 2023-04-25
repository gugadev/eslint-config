// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'plugin:@shopify/typescript',
    'plugin:@shopify/react',
    'plugin:@shopify/prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    // tsconfigRootDir: __dirname,
    // project: './tsconfig.eslint.json',
  },
  rules: {
    semi: 'off',
    indent: 'off',
    'max-len': 'off',
    'import/order': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/indent': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-warning-comments': 'off',
    // esta regla obliga a que exportes todo de un carpeta
    '@shopify/strict-component-boundaries': 'off',
    // te obliga a que en los h1 no haya texto (por i18n)
    '@shopify/jsx-no-hardcoded-content': 'off',
    // pide que no importes las imagenes directamente -.-
    '@shopify/images-no-direct-imports': 'off',
  },
};
