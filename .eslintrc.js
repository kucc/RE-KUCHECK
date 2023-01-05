module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
