root = 'linters/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            getLink(root, 'install'),
        ]
    },
    {
        title: 'Prettier',
        themes: [
            [root+'prettier/info',           emoji.theory+'Информация'],
            [root+'prettier/vscode-plugin',  'Плагин для VSCode'],
            [root+'prettier/prettierrc',     setTheme(5, ['.prettierrc.json'])],
            [root+'prettier/prettierignore', setTheme(5, ['.prettierignore'])],
        ]
    },
    {
        title: 'ESLint',
        themes: [
            [root+'eslint/info',    emoji.theory+'Информация'],
            [root+'eslint/main',    'Основное'],
            [root+'eslint/disable', 'Disable'],
        ]
    },
    {
        title: 'Stylelint',
        themes: [
            [root+'stylelint/info', emoji.theory+'Информация'],
        ]
    },
    {
        title: 'Husky',
        themes: [
            [root+'husky/info',    emoji.theory+'Информация'],
            [root+'husky/install', emoji.code+'Установка и настройка'],
        ]
    },
]

