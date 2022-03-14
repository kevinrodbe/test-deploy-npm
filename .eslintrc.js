module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:jsx-a11y/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': 'off',
    'eol-last': ['error', 'always'],
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'newline-after-var': ['error', 'always'],
    'no-nested-ternary': 'warn',
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { args: 'after-used', vars: 'all' }],
    'prettier/prettier': [
      'error',
      {
        bracketSameLine: false,
        endOfLine: 'lf',
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-fragments': 'off',
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        locale: 'auto',
        multiline: 'last',
        shorthandFirst: true,
      },
    ],
    'react/prop-types': 1,
    semi: 0,
    'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};
