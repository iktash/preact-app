module.exports = {
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: {
            pragma: 'h',
            version: 'detect',
        },
    },
    rules: {
        'no-undef': 0,
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
            },
        ],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/array-type': ['error', 'array-simple'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-empty-interface': 0,
    },
};
