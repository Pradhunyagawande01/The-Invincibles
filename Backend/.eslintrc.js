module.exports = {
    env: {
        browser: false,
        node: true,
        es2021: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        // Customize your rules
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
    },
};
