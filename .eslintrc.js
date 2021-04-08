module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'react', 'no-only-tests', 'simple-import-sort', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  rules: {
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^\\u0000'], ['^react', '^@testing', '^@which', '^@apollo'], ['^[^.]'], ['^\\.']],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'max-len': [
      1,
      120,
      2,
      {
        ignorePattern: '^import\\s.+\\sfrom\\s.+$',
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    semi: [2, 'never'],
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    camelcase: 0,
    'no-floating-decimal': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: true,
      },
    ],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 2,
    'react/prop-types': [
      2,
      {
        ignore: ['children', 'reducers'],
      },
    ],
    curly: 'error',
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
    'import/newline-after-import': 'error',
    'no-only-tests/no-only-tests': 'error',
    'import/no-default-export': 'error',
    'import/no-named-default': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-console': 0,
    '@typescript-eslint/no-submodule-imports': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/object-literal-sort-keys': 0,
    '@typescript-eslint/ordered-imports': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-explicit-any': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['src/global.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
