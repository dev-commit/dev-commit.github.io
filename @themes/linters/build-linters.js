root = 'linters/';

ARR_MODULE = [
    {
        title: 'Основы',
        accent: 'true',
        themes: [
            getLink(root, 'install'),
        ]
    },
    {
        title: 'Prettier',
        accent: 'true',
        themes: [
            [root+'prettier/info',           emoji.theory+'Информация'],
            [root+'prettier/vscode-plugin',  'Плагин для VSCode'],
            [root+'prettier/prettierrc',     setTheme(5, ['.prettierrc.json'])],
            [root+'prettier/prettierignore', setTheme(5, ['.prettierignore'])],
            [root+'prettier/import-order',  'Настройка порядка импортов'],
        ]
    },
    {
        title: 'ESLint',
        accent: 'true',
        themes: [
            [root+'eslint/info',         emoji.theory+'Информация'],
            [root+'eslint/main',         'Основное'],
            [root+'eslint/disable',      'Disable'],
            [root+'eslint/import-order', 'Настройка порядка импортов'],
            [root+'eslint/eslintrc',     setTheme(5, ['.eslintrc.js'])],
            [root+'eslint/typescript',   'TypeScript'],
        ]
    },
    {
        title: 'Stylelint',
        themes: [
            [root+'stylelint/info', emoji.theory+'Информация'],
            [root+'stylelint/install', emoji.theory+'Установка и настройка'],
        ]
    },
    {
        title: 'TSLint',
        themes: [
            [root+'tslint/info', emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Husky',
        themes: [
            [root+'husky/info',    emoji.theory+'Информация'],
            [root+'husky/install', emoji.code+'Установка и настройка'],
        ]
    },
    {
        title: 'MarkdownLint (VSCode Extension)',
        themes: [
            [root+'markdownlint/info',    emoji.theory+'Информация'],
            [root+'markdownlint/disable', 'Disable'],
        ]
    },
]




