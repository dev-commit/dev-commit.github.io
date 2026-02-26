root = 'git-managers/';

ARR_MODULE = [
    {
        title: 'GitHub',
        accent: true,
        themes: [
            [root+'github/ssh',                emoji.code+'Подключение по SSH'],
            [root+'github/github-cli',         emoji.star+'GitHub CLI'],
            [root+'github/github-desktop',     'GitHub Desktop'],
            [root+'github/github-api',         'Github API'],
            [root+'github/github-readme-stats', setTheme(1, ['github-readme-stats'])],
        ]
    },
    {
        title: 'Github Pages',
        themes: [
            [root+'github-pages/info', emoji.theory+'Информация'],
            [root+'github-pages/install', emoji.code+'Установка и настройка'],
            [root+'github-pages/deploy', 'Деплой'],
            [root+'github-pages/deploy-react-cra', 'Деплой React + Webpack (CRA)'],
            [root+'github-pages/deploy-react-vite', 'Деплой React + Vite (Vite Template)'],
        ]
    },
    {
        title: 'Bitbucket',
        accent: true,
        themes: [
            [root+'bitbucket/ssh', emoji.code+'Подключение по SSH'],
        ]
    },
]
